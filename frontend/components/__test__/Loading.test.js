/**
 * @jest-environment jest-environment-jsdom
 */
 import { axe, toHaveNoViolations } from "jest-axe";
 import { render } from '@testing-library/react'
 import { Table, TableBody } from '@mui/material';
import Loading from "../Loading";

expect.extend(toHaveNoViolations);

describe("The Loading component", () => {
  beforeAll(() => {
    window.getComputedStyle = () => {};
  });

  it("Render a valid HTML", async () => {
    const { container } = render(
      <Table>
        <TableBody>
          <Loading colSpan={2} />
        </TableBody>
      </Table>
    );

    expect(await axe(container)).toHaveNoViolations();
    
  });
});