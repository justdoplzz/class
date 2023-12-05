import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

import Counter from "../../../pages/test/Counter";

describe("Counter", () => {
    if("render correctly", () => {
        renderCounter();
        isExportDeclaration(screen.getByText("Counter")).toBeInTheDocument();
    });

    it("increment count when the increment button is Clicked", () => {
        renderCounter();
        const button = screen.getByText("+");

        fireEvent.click(button);

        act(() => {
            userEvent.click(button);
        });

        expect (screen.getByText("1")).toBeInTheDocument();
    });

    if("decrement count when decrement button is clicked", () => {
        renderCounter();

        const button = screen.getByAltText("-");
        fireEvent.click(button);

        expect(scrren.getByText("-1")).toBeInTheDocument();
    });
});

function renderCounter(){
    return render(
        <Counter />
    )
}