import React, { Component } from 'react'
import { render,screen, fireEvent, getAllByText, waitFor } from '@testing-library/react'
import { renderHook, act } from '@testing-library/react-hooks'
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme'
import { shallow } from 'enzyme';
import Button from '@material-ui/core/Button'
import Adapter from 'enzyme-adapter-react-16';
import { create } from "react-test-renderer";
Enzyme.configure({ adapter: new Adapter() });
import AppBar from '../components/AppBar'
import { findDOMNode } from 'react-dom';
import Brand from '../atoms/Brand'
import fetchMock from 'fetch-mock'
import { BrowserRouter as Router } from 'react-router-dom'
import ProfileDeleteAccount from '../components/ProfileDeleteAccount'
const setSelected = jest.fn();
it('should take a snapshot', () => {

    const { asFragment } = render(
        <Router>
            <ProfileDeleteAccount />
        </Router>
    )
    expect(asFragment(<Router><ProfileDeleteAccount itemName="Profile" /></Router>)).toMatchSnapshot()
});

it("handlesubmit event should work ", async () => {
    const { getByTestId } = render(<Router><ProfileDeleteAccount /></Router>);
    fireEvent.click(getByTestId("link"));
    fetchMock.mock("http://localhost:8001/user/users", 200);
    const res = await fetch("http://localhost:8001/user/users");
    expect(res.ok).toBeTruthy;
});

const setcustomError = jest.fn();
const postToApi = jest.fn();
const useStateSpy = jest.spyOn(React, 'useState')
useStateSpy.mockImplementation((init) => [init, setcustomError]);
describe("isAuthenticated", () => {
    // resets your mocks so tests don't bleed into each other
    afterEach(() => {
        fetchMock.restore();
        fetchMock.reset();
    });
    const handleDelete = jest.fn();
const flag=jest.fn(()=>true)
    it("is true on server success", async () => {
        const { getByTestId } = render(<Router><ProfileDeleteAccount /></Router>);
        fetchMock.mock("http://localhost:8080/api/user/users", {
            status: 200,
            body: { success: true }
        });
        fireEvent.click(getByTestId("link"))
        expect(handleDelete).toBeCalled
        window.confirm = jest.fn(() => false)
        const res = await fetch("http://localhost:8080/api/user/users")
        expect(res.ok).toBe(true);
    });
})
const handleDelete = jest.fn();

it("is true on server success", async () => {
    const { getByTestId,getByText } = render(<Router><ProfileDeleteAccount /></Router>);
    fetchMock.mock("http://localhost:8080/api/user/users", {
        status: 401,
        body: { success: "Invalid" }
    });
    fireEvent.click(getByTestId("link"))
 
    expect(handleDelete).toBeCalled
   
    expect(window.confirm()).toBeInTheDocument
    window.confirm = jest.fn().mockImplementation(() => true)
    const res = await fetch("http://localhost:8080/api/user/users")
    expect(res.ok).toBe(false);
});

