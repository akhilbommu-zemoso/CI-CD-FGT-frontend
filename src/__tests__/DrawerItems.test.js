import React, { Component } from 'react'
import { render, fireEvent, getAllByText, getByText, getByTestId,screen } from '@testing-library/react'
import { renderHook, act } from '@testing-library/react-hooks'
import { BrowserRouter as Router } from 'react-router-dom'
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme'
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { create } from "react-test-renderer";
import DrawerItems from '../components/DrawerItems';
import { createMemoryHistory } from "history";
Enzyme.configure({ adapter: new Adapter() });
it('should take a snapshot', () => {
   
    const { asFragment } = render(
        <Router>
        <DrawerItems  /></Router>
    )
    expect(asFragment(<Router><DrawerItems /></Router>)).toMatchSnapshot()
});

const setSelected = jest.fn();
it("visit /dashboard/home on click", () => {
    const history = createMemoryHistory();
    const { getByText,getByTestId}=  render(
        <Router history={history}>
            <DrawerItems itemName="Home" link="/dashboard/home" setSelected={setSelected}/>
        </Router>
    );
    fireEvent.click(getByTestId("link"))
    expect(window.location.href).toEqual("http://localhost/dashboard/home")
});
it("checks for drawer items", () => { 
    const { getByText, getByTestId } = render(
        <Router history={history}>
            <DrawerItems itemName="Home" link="/dashboard/home" setSelected={setSelected} />
        </Router>
    );
    expect(screen.getByText("Home")).toBeInTheDocument
})
it("checks for drawer items", () => {
    const { getByText, getByTestId } = render(
        <Router history={history}>
            <DrawerItems itemName="Wallet" link="/dashboard/wallet" setSelected={setSelected} />
        </Router>
    );
    expect(screen.getByText("Wallet")).toBeInTheDocument
})


