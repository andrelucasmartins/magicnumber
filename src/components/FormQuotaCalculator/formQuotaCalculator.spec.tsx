import Form from "@/app/page";

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("<Form />", () => {
  render(<Form />);
  it("should render defaut correctly", () => {
    const inputQuota = screen.getByPlaceholderText("R$ 10,00");
    const inputYd = screen.getByPlaceholderText("R$ 0,10");

    expect(inputQuota).toBeVisible();
    expect(inputYd).toBeVisible();
  });
});
