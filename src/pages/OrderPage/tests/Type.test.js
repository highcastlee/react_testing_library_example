import { render, screen } from "../../../test-utils";

import Type from "../Type";
import { rest } from "msw";
import { server } from "../../../mocks/server";

test("display product images from server", async () => {
  render(<Type orderType="products" />);
  const productImages = await screen.findAllByRole("img", {
    name: /product$/i,
  });

  expect(productImages).toHaveLength(2);

  const altText = productImages.map((elem) => elem.alt);
  expect(altText).toEqual(["America product", "England product"]);
});

test("when fetching product datas, face an error", async () => {
  server.resetHandlers(
    rest.get(`http://localhost:3000/products`, (req, res, ctx) => {
      res(ctx.status(500));
    })
  );

  render(<Type orderType="products" />);
  const errorBanner = await screen.findByTestId("error-banner");
  expect(errorBanner).toHaveTextContent("에러가 발생했습니다.");
});

test("fetch option information from server", async () => {
  render(<Type orderType="options" />);

  const optionCheckboxes = await screen.findAllByRole("checkbox");
  expect(optionCheckboxes).toHaveLength(2);
});
