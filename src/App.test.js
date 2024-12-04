import {render, screen} from '@testing-library/react';
import App from './App';

test('Testing The First App Case', () => {
  render(<App/>);
  const text = screen.getByText(/First React Test Case/i);
  const title = screen.getByTitle('image');
  expect(text).toBeInTheDocument();
  expect(title).toBeInTheDocument();
})

test("Testing Input Box", () => {
  render(<App/>);
  let  checkInput = screen.getByRole('textbox');
  let checkInputPlaceholder = screen.getByPlaceholderText('Enter User Name')
  expect(checkInput).toBeInTheDocument();
  expect(checkInputPlaceholder).toBeInTheDocument();
  expect(checkInput).toHaveAttribute('name','username');
  expect(checkInput).toHaveAttribute('type','text');
  expect(checkInput).toHaveAttribute('value','YourName');
  expect(checkInput).toHaveAttribute('id','UserId');
})

describe('UI test case grout', () => {
  test('test Case 1', () => {
    render(<App/>);
    let checkInput = screen.getByRole('textbox');
    expect(checkInput).toHaveAttribute('name','username');
  })

  test('test Case 2', () => {
    render(<App/>);
    let checkInput = screen.getByRole('textbox');
    expect(checkInput).toHaveAttribute('name','username');
  })

  test('test Case 3', () => {
    render(<App/>);
    let checkInput = screen.getByRole('textbox');
    expect(checkInput).toHaveAttribute('name','username');
  })

  describe('inner describe test group', () => {
    test('test Case 1', () => {
      render(<App/>);
      let checkInput = screen.getByRole('textbox');
      expect(checkInput).toHaveAttribute('name','username');
    })
  })
})