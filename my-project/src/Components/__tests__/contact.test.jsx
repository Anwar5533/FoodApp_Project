import { test,expect } from "vitest";
import { render,screen } from "@testing-library/react";
import ContactUs from "../ContactUs";

test('renders the heading', () => {
    render(<ContactUs />);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toBeInTheDocument();
  });
  test('renders the submit - button', () => {
    render(<ContactUs />);
    const Button = screen.getByRole("button");
    expect(Button).toBeInTheDocument();
  });
  test('renders the Input text', () => {
    render(<ContactUs />);
    const inputBox = screen.getAllByRole("textbox");
    
    expect(inputBox.length).toBe(2);
  });