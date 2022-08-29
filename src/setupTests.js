import "@testing-library/jest-dom";

import { server } from "./mocks/server";

// 테스트 전에 mock 불러오기
beforeAll(() => server.listen());

// 각 테스트 후에 mock 리셋 (테스트끼리 영향 X)
afterEach(() => server.resetHandlers());

// 모든 테스트 후 server close
afterAll(() => server.close());
