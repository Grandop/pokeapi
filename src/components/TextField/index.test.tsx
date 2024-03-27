import { render, fireEvent } from "@testing-library/react";
import { TextField } from ".";
import { ThemeProvider } from "styled-components";
import { theme } from "../../themes/theme";

describe("TextField component", () => {
  it("should render TextField component without crashing", () => {
    render(
      <ThemeProvider theme={theme}>
        <TextField placeholder="Enter text" onChange={() => {}} value="" />
      </ThemeProvider>
    );
  });

  it("should passes the correct props to NameTextField component", () => {
    const { getByPlaceholderText } = render(
      <ThemeProvider theme={theme}>
        <TextField placeholder="Enter text" onChange={() => {}} value="" />
      </ThemeProvider>
    );
    expect(getByPlaceholderText("Enter text")).toBeInTheDocument();
  });

  it("should onChange event of NameTextField component is triggered", () => {
    const handleChange = jest.fn();
    const { getByPlaceholderText } = render(
      <ThemeProvider theme={theme}>
        <TextField placeholder="Enter text" onChange={handleChange} value="" />
      </ThemeProvider>
    );
    fireEvent.change(getByPlaceholderText("Enter text"), {
      target: { value: "Test" }
    });
    expect(handleChange).toHaveBeenCalled();
  });
});
