import { test,expect } from "vitest";
import { render,screen } from "@testing-library/react";
import ContactUs from "../ContactUs";

test('renders the heading', () => {
    render(<ContactUs />);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toBeInTheDocument();
  });