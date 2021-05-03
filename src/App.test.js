import { render, screen, fireEvent, queryByText } from '@testing-library/react';
import App from './App';

test('test render componenets', () => {
  render(<App />);
  const mainElement = screen.getByText("Hello, I'm");
  const aboutElement = screen.getByText("About Me");
  const summaryElement = screen.getByText("Development and Design");
  const projectsElement = screen.getByText("Projects and Portfolio");
  const contactElement = screen.getByText("Reaching out to me");

  expect(mainElement).toBeInTheDocument();
  expect(aboutElement).toBeInTheDocument();
  expect(summaryElement).toBeInTheDocument();
  expect(projectsElement).toBeInTheDocument();
  expect(contactElement).toBeInTheDocument();

});

it('test contact componenets' , () => {
  const { queryByPlaceholderText } = render(<App/>);

  expect(queryByPlaceholderText('First Name')).toBeTruthy();
});

describe('test input value' , () => {
  it ('update onChange', () => {
    const { queryByPlaceholderText } = render(<App/>);

    const firstNameInput = queryByPlaceholderText('First Name');
    const lasttNameInput = queryByPlaceholderText('Last Name');
    const emailInput = queryByPlaceholderText('Email');

    fireEvent.change(firstNameInput, {target: {value: 'Thinh'}});
    fireEvent.change(lasttNameInput, {target: {value: 'Phan'}});
    fireEvent.change(emailInput, {target: {value: 'phan.tthinh1@gmail.com'}});

    expect(firstNameInput.value).toBe('Thinh');
    expect(lasttNameInput.value).toBe('Phan');
    expect(emailInput.value).toBe('phan.tthinh1@gmail.com');

  })
})

describe('submit contact form', () => {
  it('test submit', () => {
    const { queryByPlaceholderText, queryByText } = render(<App/>);

    const firstNameInput = queryByPlaceholderText('First Name');
    const lasttNameInput = queryByPlaceholderText('Last Name');
    const emailInput = queryByPlaceholderText('Email');
    const messageInput = queryByPlaceholderText('Message');

    fireEvent.change(firstNameInput, {target: {value: 'Thinh'}});
    fireEvent.change(lasttNameInput, {target: {value: 'Phan'}});
    fireEvent.change(emailInput, {target: {value: 'phan.tthinh1@gmail.com'}});
    fireEvent.change(messageInput, {target: {value: 'portfolio message'}});

    fireEvent.click(queryByText("Submit"))

    // const expected = {firstname: 'Thinh', lastname: 'Phan', email: 'phan.tthinh1@gmail.com', message: 'portfolio message'};

  })
})
