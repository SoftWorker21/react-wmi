import { render, screen } from "@testing-library/react";
import TableFoot from "./index";
import data from "../../honda_wmi.json";

const props = {
  carData: data,
  currentItems: data,
  setCurrentItems: jest.fn(),
};

test("render TableFoot react link", () => {
  render(<TableFoot {...props} />);
  const element = screen.getByText(/Displaing/i);
  expect(element).toBeInTheDocument();
});

test("render Header snapshot", () => {
  const tree = render(<TableFoot {...props} />);
  expect(tree).toMatchSnapshot();
});
