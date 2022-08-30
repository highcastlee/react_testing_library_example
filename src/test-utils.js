import { OrderContextProvider } from "./contexts/OrderContext";
import { render } from "@testing-library/react";

const customRender = (ui, options) => {
  return render(ui, { wrapper: OrderContextProvider, ...options });
};

export * from "@testing-library/react";

export { customRender as render };
