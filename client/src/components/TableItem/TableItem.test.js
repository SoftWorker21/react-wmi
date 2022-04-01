import { render, screen } from "@testing-library/react";
import { TableItem } from "./index";
import data from "../../honda_wmi.json";

const props = {
  carData: data,
  currentItems: data,
  setCurrentItems: jest.fn(),
};

test("render TableItem react link", () => {
  render(<TableItem {...props} />);
  const element = screen.getAllByText(/HONDA MOTOR CO., LTD/i);
  expect(element[0]).toBeInTheDocument();
});

test("render Header snapshot", () => {
  const tree = render(<TableItem {...props} />);
  expect(tree).toMatchSnapshot();
});
