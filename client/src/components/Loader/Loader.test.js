import { render } from "@testing-library/react";
import { Loader } from "./index";

test("render Loader react link", () => {
  const { container } = render(<Loader />);
  const loaderSize = container.getElementsByTagName("div").length;
  expect(loaderSize).toBe(10);
});

test("render Loader snapshot", () => {
  const tree = render(<Loader />);
  expect(tree).toMatchSnapshot();
});
