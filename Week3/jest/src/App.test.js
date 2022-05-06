import App from "./App";
import { render, screen, within, fireEvent } from "@testing-library/react";
describe("List", () => {
  function renderList() {
    render(<App />);

    return {
      newListInput:
        screen.getByLabelText('New List'),
      addButton: screen.getByText('submit'),
      getList() {
        return screen.getAllByTestId('character')
          .map((item) => ({
            name: within(item)
              .getByTestId('name')
              .textContent,
            address: within(item)
              .getByTestId('address')
              .textContent,
            deleteButton: within(item)
              .getByText('remove'),
            editButton: within(item)
              .getByText('edit')
          }));
      }
    };
  }

  it("should add a character", () => {
    const {newListInput, addButton,getCharacters} =renderList();

    const pam = "Pam Beasley";

    // verify pam is NOT in the initial list
    expect(
      getCharacters().find((character) => character.name === pam)
    ).not.toBeTruthy();

    // add pam
    fireEvent.change(newCharacter, { target: { value: pam } });
    fireEvent.click(addButton);

    // verify pam is first in the list
    expect(
      getCharacters().findIndex((character) => character.name === pam)
    ).toBe(0);
  });
});