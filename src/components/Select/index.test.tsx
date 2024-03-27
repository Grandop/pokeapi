import { render } from "@testing-library/react";
import { Select } from "../Select/index";

describe("Select component", () => {
  const options = ["option1", "option2", "option3"];
  const onChangeOption = jest.fn();

  it("renders select component", () => {
    const { getByRole } = render(
      <Select options={options} onChange={onChangeOption} />
    );
    const selectElement = getByRole("combobox");

    expect(selectElement).toBeInTheDocument();
  });
});
