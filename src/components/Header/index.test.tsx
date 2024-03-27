import { render } from "@testing-library/react";
import { Header } from ".";
import { ThemeProvider } from "styled-components";
import { theme } from "../../themes/theme";

describe("Header component", () => {
  it("should render Header with correct logo", () => {
    const { getByAltText } = render(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    );
    expect(getByAltText(/pokemon logo/i)).toBeInTheDocument();
  });
});
