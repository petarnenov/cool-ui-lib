import "@testing-library/jest-dom";
import { cleanup, render, screen } from "@testing-library/react";
import Button from ".";

describe("Button", () => {
  beforeEach(() => {
    cleanup();
  });

  it("should render a button", () => {
    render(Button({ children: "Click me" }));
    const button = screen.getByTestId("cool-btn");
    expect(button).toBeInTheDocument();
  });

  it("should render the children", () => {
    render(Button({ children: "Click me" }));
    const button = screen.getByTestId("cool-btn");
    expect(button).toHaveTextContent("Click me");
  });

  it("should render the className", () => {
    render(Button({ children: "Click me", className: "cool-btn" }));
    const button = screen.getByTestId("cool-btn");
    expect(button).toHaveClass("cool-btn");
  });

});
