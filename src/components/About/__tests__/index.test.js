import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import About from "..";

//after each test this will remove any leftover memory data
afterEach(cleanup);

//declares the component we're testing
describe("About component", () => {
  // First Test
  it("renders", () => {
    render(<About />);
  });
  // Second Test
  it("matches snapshot DOM node structure", () => {
    // render About
  });
  //we'll test and compare whether the expected and actual outcomes match
  const { asFragment } = render(<About />);
  expect(asFragment()).toMatchSnapshot();
});
