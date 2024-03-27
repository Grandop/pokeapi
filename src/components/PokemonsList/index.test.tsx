import { render, screen } from "@testing-library/react";
import { PokemonsList } from ".";
import { Provider } from "react-redux";
import { store } from "../../store/config";
import { ThemeProvider } from "styled-components";
import { theme } from "../../themes/theme";

describe("PokemonsList", () => {
  it("renders the correct page number", () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <PokemonsList />
        </ThemeProvider>
      </Provider>
    );

    expect(screen.getByText("Page: 1")).toBeInTheDocument();
  });
});
