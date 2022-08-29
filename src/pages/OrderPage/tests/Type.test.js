import { render, screen } from "@testing-library/react";

import Type from "../Type";

test("display product images from server", () => {
  render(<Type orderType="product" />);
  const productImages = screen.findAllByRole("img", {
    name: /product$/i,
  });

  expect(productImages).toHaveLength(2);

  const altText = productImages.map((elem) => elem.alt);
  expect(altText).toEqual(["America product", "England product"]);
});
