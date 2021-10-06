import React from 'react'
import { render, cleanup, fireEvent, within, getAllByText, getByText } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import Login from '../components/Login'
afterEach(cleanup)

it('should take a snapshot', () => {
    const { asFragment, getByTestId } = render(<Router><Login /></Router>)
    expect(asFragment(<Router><Login /></Router>)).toMatchSnapshot()

});
it("Checks for button", () => { 
    const { getByTestId } = render(<Router><Login /></Router>)
    const button = getByTestId("button")
    expect(button).toBeInTheDocument
})

it("checks for header", () => {
    const { getByTestId, getByText } = render(<Router><Login /></Router>)
    const heading = getByText("Please Click on Login")
    expect(heading).toBeInTheDocument
})
const authLogin = jest.fn();
it("handlesubmit event should work ", async () => {
    const { getByTestId } = render(<Login />);
    fireEvent.click(getByTestId("button"));
    expect(authLogin).toBeCalled
});

