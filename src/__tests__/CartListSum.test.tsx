import { useQuery, QueryClientProvider } from "@tanstack/react-query";
import { QUERY_STUB_DATA } from "./__mocks__/queryData";
import { render, screen } from "@testing-library/react";
import { useCart } from "@/providers/CartContextProvider";
import "@testing-library/jest-dom";
import CartListSum from "@/components/CartListSum";

jest.mock("../providers/CartContextProvider");
jest.mock("@tanstack/react-query");

describe("CartListSum", () => {
  test("rendered", () => {
    (useQuery as jest.Mock).mockReturnValueOnce({ data: QUERY_STUB_DATA });
    (useCart as jest.Mock).mockReturnValueOnce({
      cartData: {
        1: 1,
        2: 2,
      },
    });

    render(<CartListSum />);

    const list = screen.getByText(/Total cost/i);
    expect(list).toBeInTheDocument();
  });
});
