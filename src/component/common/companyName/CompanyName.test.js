import React from "react";
import renderer from "react-test-renderer";

import CompanyName from "./CompanyName";

it("renders correctly when called ", () => {
  const tree = renderer.create(<CompanyName />).toJSON();
  expect(tree).toMatchSnapshot();
});
