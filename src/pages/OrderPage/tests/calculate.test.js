import { render, screen } from "../../../test-utils";

import OrderPage from "../OrderPage";
import Type from "../Type";
import userEvent from "@testing-library/user-event";

describe("Type Component total test", () => {
  test("update product's total when products change", async () => {
    // context를 위해 provider 감쌀 때는 wrapper 사용
    render(<Type orderType="products" />);
    // exact:false는 text가 정확히 일치하지 않아도 됨
    const productsTotal = screen.getByText("상품 총 가격:", { exact: false });
    expect(productsTotal).toHaveTextContent("0");

    const americaInput = await screen.findByRole("spinbutton", {
      name: "America",
    });

    userEvent.clear(americaInput);
    userEvent.type(americaInput, "1");
    expect(productsTotal).toHaveTextContent("1000");
  });

  test("옵션 체크하면 옵션 토탈 가격 증가", async () => {
    render(<Type orderType="options" />);

    const optionsTotal = screen.getByText("옵션 총 가격:", { exact: false });
    expect(optionsTotal).toHaveTextContent("0");

    const InsuranceCheckbox = await screen.findByRole("checkbox", {
      name: "Insurance",
    });

    userEvent.click(InsuranceCheckbox);
    expect(optionsTotal).toHaveTextContent("500");

    const dinnerCheckbox = await screen.findByRole("checkbox", {
      name: "Dinner",
    });

    userEvent.click(dinnerCheckbox);
    expect(optionsTotal).toHaveTextContent("1000");

    userEvent.click(dinnerCheckbox);
    expect(optionsTotal).toHaveTextContent("500");
  });
});

describe("OrderPage test, total price of products and options", () => {
  test("products 개수에 따라 total price 변경", async () => {
    render(<OrderPage />);
    const total = screen.getByText("Total Price", { exact: false });
    expect(total).toHaveTextContent("0");

    const americaInput = await screen.findByRole("spinbutton", {
      name: "America",
    });
    userEvent.clear(americaInput);
    userEvent.type(americaInput, "1");

    expect(total).toHaveTextContent("1000");
  });

  test("options 체크에 따라 total price 변경", async () => {
    render(<OrderPage />);
    const total = screen.getByText("Total Price", { exact: false });

    const InsuranceCheckbox = await screen.findByRole("checkbox", {
      name: "Insurance",
    });

    userEvent.click(InsuranceCheckbox);
    expect(total).toHaveTextContent("500");
  });

  test("checkbox, input 혼합 체크", async () => {
    render(<OrderPage />);
    const total = screen.getByText("Total Price", { exact: false });

    const americaInput = await screen.findByRole("spinbutton", {
      name: "America",
    });
    const InsuranceCheckbox = await screen.findByRole("checkbox", {
      name: "Insurance",
    });

    userEvent.clear(americaInput);
    userEvent.type(americaInput, "1");

    userEvent.click(InsuranceCheckbox);

    expect(total).toHaveTextContent("1500");
  });
});
