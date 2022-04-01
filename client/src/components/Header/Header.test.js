import { render, screen } from "@testing-library/react";
import { Header } from "./index";
import data from "../../honda_wmi.json";

test("render Header react link", () => {
  render(<Header />);
  const linkElement = screen.getByText(/WMI Data - Honda/i);
  expect(linkElement).toBeInTheDocument();
});

test("render Header car data prop", () => {
  render(<Header carData={data} />);
  const linkElement = screen.getByText(/Total: 82/i);
  expect(linkElement).toBeInTheDocument();
});

test("render Header input", () => {
  render(<Header carData={data} />);
  const linkElement = screen.getByPlaceholderText(/What you looking for?/i);
  expect(linkElement).toBeInTheDocument();
});

test("render Header snapshot", () => {
  const tree = render(<Header carData={data} />);
  expect(tree).toMatchSnapshot();
});
