import React from "react";
import { render } from "@testing-library/react";
import App from "../components/App";

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/hello cybsafe/i);
  expect(linkElement).toBeInTheDocument();
});
