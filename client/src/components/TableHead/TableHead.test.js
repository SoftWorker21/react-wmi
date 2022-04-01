import { render, screen } from "@testing-library/react";
import { TableHead } from "./index";
import data from "../../honda_wmi.json";

const props = {
  carData: data,
  currentItems: data,
  setCurrentItems: jest.fn(),
};

test("render CreatedOn react link", () => {
  render(<TableHead {...props} />);
  const element = screen.getByText(/CreatedOn/i);
  expect(element).toBeInTheDocument();
});

test("render VehicleType react link", () => {
  render(<TableHead {...props} />);
  const element = screen.getByText(/VehicleType/i);
  expect(element).toBeInTheDocument();
});

test("render Name react link", () => {
  render(<TableHead {...props} />);
  const element = screen.getByText(/Name/i);
  expect(element).toBeInTheDocument();
});

test("render Header snapshot", () => {
  const tree = render(<TableHead {...props} />);
  expect(tree).toMatchSnapshot();
});
