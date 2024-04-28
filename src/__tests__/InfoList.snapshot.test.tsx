import React from "react";
import { render } from "@testing-library/react";
import InfoList from "@/components/InfoList";

describe("InfoList snapshot", () => {
  it("default", () => {
    const tree = render(
      <InfoList
        lines={[
          ["Price", "$650"],
          ["Available(t)", "15"],
        ]}
      />
    );

    expect(tree).toMatchSnapshot();
  });
});
