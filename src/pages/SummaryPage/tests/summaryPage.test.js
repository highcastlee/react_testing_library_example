import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import SummaryPage from "../SummaryPage";
import userEvent from "@testing-library/user-event";

test("checkbox and button", () => {
  render(<SummaryPage />);
  const checkbox = screen.getByRole("checkbox", {
    name: "주문하려는 것을 확인하셨나요?",
  });
  expect(checkbox.checked).toEqual(false);

  const confirmButton = screen.getByRole("button", { name: "주문 확인" });
  expect(confirmButton.disabled).toBeTruthy();
});

test("checkbox click button disabled", () => {
  render(<SummaryPage />);
  const checkbox = screen.getByRole("checkbox", {
    name: "주문하려는 것을 확인하셨나요?",
  });
  userEvent.click(checkbox);
  expect(checkbox.checked).toEqual(true);

  const confirmButton = screen.getByRole("button", { name: "주문 확인" });
  expect(confirmButton.disabled).toBeFalsy();
});
