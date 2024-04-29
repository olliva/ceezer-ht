# Home task for Ceezer

Addressing the challenge: "Front-end Code Challenge: Preview Cart"

## Getting Started

To start the server:

```bash
npm run build
npm run start
```

Then, visit [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Tests

To run tests:

```bash
npm run test
```

## Realization

Based on [create-next-app](https://nextjs.org/docs/pages/api-reference/create-next-app) project, utilizing server-side rendering (SSR) and the App-router.

Technologies used:

- [React Query](https://tanstack.com/query/latest) for fetching product data on the server and effortlessly reusing it on the client.
- Context API for sharing the state of the cart.
- LocalStorage for storing cart data.
- Styled with [TailwindUI](https://tailwindui.com/).
- Tested with Jest.

## Room for improvement

- Tailoring for touch devices to enhance user experience.
- Currently, the full description of an item is inaccessible. A potential solution could involve implementing a dedicated product page.
- Expanding the current filtration capabilities by incorporating additional criteria, such as price range and SDGS criteria selector, and improve the functionality for narrowing down filters.
- Increasing the test coverage.
