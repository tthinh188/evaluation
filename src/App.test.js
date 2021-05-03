import { render, screen } from '@testing-library/react';
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
