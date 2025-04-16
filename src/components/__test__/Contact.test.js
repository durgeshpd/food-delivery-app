import { render, screen, fireEvent } from "@testing-library/react";
import Contact from "../Contact";
import '@testing-library/jest-dom';

test("Should render contact form with input fields", () => {
  render(<Contact />);

  // Check if the form elements are rendered
  const nameInput = screen.getByLabelText(/name/i);
  const emailInput = screen.getByLabelText(/email/i);
  const messageInput = screen.getByLabelText(/message/i);
  const submitButton = screen.getByRole("button", { name: /submit/i });

  expect(nameInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
  expect(messageInput).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});

test("Should allow user to type in input fields", () => {
  render(<Contact />);

  const nameInput = screen.getByLabelText(/name/i);
  const emailInput = screen.getByLabelText(/email/i);
  const messageInput = screen.getByLabelText(/message/i);

  // Simulate user typing in the fields
  fireEvent.change(nameInput, { target: { value: "John Doe" } });
  fireEvent.change(emailInput, { target: { value: "john@example.com" } });
  fireEvent.change(messageInput, { target: { value: "This is a message." } });

  // Check if the values have updated
  expect(nameInput.value).toBe("John Doe");
  expect(emailInput.value).toBe("john@example.com");
  expect(messageInput.value).toBe("This is a message.");
});

test("Should show thank you message after form submission", () => {
  render(<Contact />);

  const nameInput = screen.getByLabelText(/name/i);
  const emailInput = screen.getByLabelText(/email/i);
  const messageInput = screen.getByLabelText(/message/i);
  const submitButton = screen.getByRole("button", { name: /submit/i });

  // Simulate user typing in the form fields
  fireEvent.change(nameInput, { target: { value: "John Doe" } });
  fireEvent.change(emailInput, { target: { value: "john@example.com" } });
  fireEvent.change(messageInput, { target: { value: "This is a message." } });

  // Simulate form submission
  fireEvent.click(submitButton);

  // Check if the thank you message is displayed
  const thankYouMessage = screen.getByText(/thank you for reaching out/i);
  expect(thankYouMessage).toBeInTheDocument();
});

it("Form submission should log form data to console", () => {
  // Mock console.log to verify it gets called
  console.log = jest.fn();

  render(<Contact />);

  const nameInput = screen.getByLabelText(/name/i);
  const emailInput = screen.getByLabelText(/email/i);
  const messageInput = screen.getByLabelText(/message/i);
  const submitButton = screen.getByRole("button", { name: /submit/i });

  // Simulate user typing in the form fields
  fireEvent.change(nameInput, { target: { value: "John Doe" } });
  fireEvent.change(emailInput, { target: { value: "john@example.com" } });
  fireEvent.change(messageInput, { target: { value: "This is a message." } });

  // Simulate form submission
  fireEvent.click(submitButton);

  // Check if console.log was called with the correct data
  expect(console.log).toHaveBeenCalledWith("Form Data Submitted:", {
    name: "John Doe",
    email: "john@example.com",
    message: "This is a message.",
  });
});
