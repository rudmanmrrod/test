/**
 * @jest-environment jest-environment-jsdom
 */
 import { axe, toHaveNoViolations } from "jest-axe";
 import { render } from '@testing-library/react'
import Search from "../Search";

expect.extend(toHaveNoViolations);

describe("The Search component", () => {
  beforeAll(() => {
    window.getComputedStyle = () => {};
  });

  it("Test if search renders the input and button", async () => {
    const onSearch = jest.fn();
    
    const { container } = render(
      <Search onSearch={onSearch} />
    );

    expect(await axe(container)).toHaveNoViolations();
    
  });
});