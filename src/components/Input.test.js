import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr } from "../../test/testUtils";
import Input from "./Input";

/**
 * setup function for app component
 * @returns {ShallowWrapper}
 */
const setup = () => {
  return shallow(<Input />);
};

test("Input renders without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-input");
  expect(component.length).toBe(1);
});
