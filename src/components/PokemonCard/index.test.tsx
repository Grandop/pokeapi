import { render, renderHook, act } from "@testing-library/react";
import { PokemonCard } from ".";
import { ThemeProvider } from "styled-components";
import { theme } from "../../themes/theme";
import { BrowserRouter } from "react-router-dom";
import { usePokemonCard } from "./hooks/usePokemonCard";

const props = {
  name: "pikachu",
  id: "25",
  url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
  isLoading: false
};

describe("PokemonCard Component", () => {
  it("should pokemon name capitalized", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <PokemonCard {...props} />
        </BrowserRouter>
      </ThemeProvider>
    );
    expect(getByText("Pikachu")).toBeInTheDocument();
  });

  const mockedUsedNavigate = jest.fn();
  jest.mock("react-router-dom", () => ({
    ...(jest.requireActual("react-router-dom") as any),
    useNavigate: () => mockedUsedNavigate
  }));

  it("should navigate to another screen with correct params", () => {
    const { result } = renderHook(() => usePokemonCard(), {
      wrapper: BrowserRouter
    });

    act(() => {
      result.current.navigateToDetailPokemon(
        "pikachu",
        "25",
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
      );
    });
  });
});
