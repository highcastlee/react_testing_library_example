import { handlers } from "./handlers";
import { setupServer } from "msw/node";

// mocking server 생성
export const server = setupServer(...handlers);
