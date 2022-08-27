import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "@testing-library/react";

import Counter from "./Counter";

test("counter starts at 0", () => {
  render(<Counter />);
  const counterElem = screen.getByTestId("counter");
  expect(counterElem).toHaveTextContent(0);
});

test("minus button has correct text", () => {
  render(<Counter />);
  const buttonElem = screen.getByTestId("minus-button");
  expect(buttonElem).toHaveTextContent("-");
});

test("plus button has correct text", () => {
  render(<Counter />);
  const buttonElem = screen.getByTestId("plus-button");
  expect(buttonElem).toHaveTextContent("+");
});

test("플러스 버튼 클릭 시, counter가 1로 변경됨", () => {
  render(<Counter />);
  const buttonElem = screen.getByTestId("plus-button");
  fireEvent.click(buttonElem);
  const counterElem = screen.getByTestId("counter");
  expect(counterElem).toHaveTextContent(1);
});

test("마이너스 버튼 클릭 시, counter가 -1로 변경됨", () => {
  render(<Counter />);
  const buttonElem = screen.getByTestId("minus-button");
  fireEvent.click(buttonElem);
  const counterElem = screen.getByTestId("counter");
  expect(counterElem).toHaveTextContent(-1);
});

test("on/off 버튼은 파란색이다", () => {
  render(<Counter />);
  const buttonElem = screen.getByTestId("on/off-button");
  expect(buttonElem).toHaveStyle({ backgroundColor: "blue" });
});

test("-,+버튼을 금지한다. on off 버튼이 클릭된 경우.", () => {
  render(<Counter />);
  const onOffButtonElem = screen.getByTestId("on/off-button");
  fireEvent.click(onOffButtonElem);
  const minusButtonElem = screen.getByTestId("minus-button");
  const plusButtonElem = screen.getByTestId("plus-button");
  expect(minusButtonElem).toBeDisabled();
  expect(plusButtonElem).toBeDisabled();
});
