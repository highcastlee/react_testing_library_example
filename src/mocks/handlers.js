import { rest } from "msw";

export const handlers = [
  rest.get("/products", (req, res, ctx) =>
    res(
      ctx.json([
        {
          name: "America",
          imagePath: "https://velog.velcdn.com/images/katanazero86/post/df8ce8af-aa74-44f6-a1ff-049ffb0f2bc5/react-1024x576.png",
        },
        {
          name: "England",
          imagePath: "https://velog.velcdn.com/images/katanazero86/post/df8ce8af-aa74-44f6-a1ff-049ffb0f2bc5/react-1024x576.png",
        },
      ])
    )
  ),
  rest.get("/options", (req, res, ctx) =>
    res(
      ctx.json([
        {
          name: "Insurance",
        },
        {
          name: "Dinner",
        },
      ])
    )
  ),
  rest.post("/order", (req, res, ctx) => {
    const dummyData = [{ orderNumber: 2131234324, price: 2000 }];
    return res(ctx.json(dummyData));
  }),
];
