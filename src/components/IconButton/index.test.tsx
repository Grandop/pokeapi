import { render, fireEvent } from "@testing-library/react";
import { IconButton, IconButtonProps } from ".";
import { ThemeProvider } from "styled-components";
import { theme } from "../../themes/theme";

describe("IconButton", () => {
  const mockOnClick = jest.fn();
  const props: IconButtonProps = {
    icon: () => <div>Mock Icon</div>,
    onClick: mockOnClick,
    iconColor: "red"
  };
  const IconButtonComponent = (
    <ThemeProvider theme={theme}>
      <IconButton {...props} />
    </ThemeProvider>
  );

  it("renders without throwing any errors", () => {
    render(IconButtonComponent);
  });

  it("calls the onClick function when the button is clicked", () => {
    const { getByText } = render(IconButtonComponent);
    fireEvent.click(getByText("Mock Icon"));
    expect(mockOnClick).toHaveBeenCalled();
  });
});
