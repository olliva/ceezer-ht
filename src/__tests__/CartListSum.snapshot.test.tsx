import React from "react";
import { render } from "@testing-library/react";
import { useQuery } from "@tanstack/react-query";
import { QUERY_STUB_DATA } from "./__mocks__/queryData";
import { useCart } from "@/providers/CartContextProvider";
import CartListSum from "@/components/CartListSum";

jest.mock("../providers/CartContextProvider");
jest.mock("@tanstack/react-query");

describe("CartListSum snapshot", () => {
  it("default", () => {
    (useQuery as jest.Mock).mockReturnValueOnce({ data: QUERY_STUB_DATA });
    (useCart as jest.Mock).mockReturnValueOnce({
      cartData: {
        1: 1,
        2: 2,
      },
    });

    const tree = render(<CartListSum />);

    expect(tree).toMatchSnapshot();
  });
});
