/**
 * @jest-environment jest-environment-jsdom
 */
import { render } from '@testing-library/react'
import Navigation from "../Navigation";

describe("The Navigation component", () => {
  it("Render a valid HTML", async () => {
    
    const { getByText } = render(
      <Navigation />
    );
    
    expect(await getByText("Users")).toBeDefined();
    expect(await getByText("Repositories")).toBeDefined();

  });
});