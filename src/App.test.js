import { render, screen } from "@testing-library/react";

import App from "./App";
import userEvent from "@testing-library/user-event";

test("step에 따라 페이지가 전환된다", async () => {
  render(<App />);

  const americaInput = await screen.findByRole("spinbutton", {
    name: "America",
  });
  const InsuranceCheckbox = await screen.findByRole("checkbox", {
    name: "Insurance",
  });

  userEvent.clear(americaInput);
  userEvent.type(americaInput, "2");

  userEvent.click(InsuranceCheckbox);

  const orderButton = screen.getByRole("button", {
    name: "주문하기",
  });

  userEvent.click(orderButton);

  const summaryHeading = screen.getByRole("heading", {
    name: "주문 확인",
  });

  expect(summaryHeading).toBeInTheDocument();

  const productsHeading = screen.getByRole(
    "heading",
    {
      name: "여행 상품: 2000",
    },
    { exact: false }
  );

  expect(productsHeading).toBeInTheDocument();

  const optionsHeading = screen.getByRole("heading", {
    name: "옵션 : 500",
  });

  expect(optionsHeading).toBeInTheDocument();

  expect(screen.getByText("2 America")).toBeInTheDocument();
  expect(screen.getByText("Insurance")).toBeInTheDocument();

  const confirmCheckbox = screen.getByRole("checkbox", {
    name: "주문하려는 것을 확인하셨나요?",
  });

  userEvent.click(confirmCheckbox);

  const confirmOrderButton = screen.getByRole("button", {
    name: "주문 확인",
  });

  userEvent.click(confirmOrderButton);

  // 주문 완료 페이지

  const loading = screen.getByText(/loading/i);
  expect(loading).toBeInTheDocument();

  const completeHeader = await screen.findByRole("heading", {
    name: "주문이 성공했습니다.",
  });
  expect(completeHeader).toBeInTheDocument();

  const loadingDisappeared = screen.queryByText("loading");
  expect(loadingDisappeared).not.toBeInTheDocument();

  const firstPageButton = screen.getByRole("button", {
    name: "첫페이지로",
  });
  userEvent.click(firstPageButton);

  const productsTotal = screen.getByText("상품 총 가격: 0");
  expect(productsTotal).toBeInTheDocument();

  const optionsTotal = screen.getByText("옵션 총 가격: 0");
  expect(optionsTotal).toBeInTheDocument();

  await screen.findByRole("spinbutton", { name: "America" });
});
