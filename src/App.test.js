import { render, screen, fireEvent } from '@testing-library/react';
import  renderer from 'react-test-renderer'
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe("App",() => {
  it("matches snapshot",() => {
    const tree = renderer 
      .create(<App />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  })
})// snap shot test

//tested using react library
test('adds a task', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText('Enter a task');
  const addButton = screen.getByText('Add todo');

  fireEvent.change(inputElement, { target: { value: 'New Task' } });
  fireEvent.click(addButton);

  expect(screen.getByText('New Task')).toBeInTheDocument();
});

test('markAsCompleted marks a task as completed', () => {
  const { getByText } = render(<App />);
  const input = screen.getByPlaceholderText('Enter a task');
  fireEvent.change(input, { target: { value: 'Task 1' } });
  fireEvent.click(getByText('Add todo'));

  const task = getByText('Task 1');
  fireEvent.click(task);
  const completedTask = getByText('Task 1');
  expect(completedTask.tagName).toBe('STRIKE');
});