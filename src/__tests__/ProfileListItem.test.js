import React, { Component } from 'react'
import { render, fireEvent, getAllByText, getByText, getByTestId } from '@testing-library/react'
import { renderHook, act } from '@testing-library/react-hooks'
import { BrowserRouter as Router } from 'react-router-dom'
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme'
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { create } from "react-test-renderer";
import DrawerItems from '../components/DrawerItems';
import { createMemoryHistory } from "history";
import ProfileListItem from '../components/ProfileListItem';
Enzyme.configure({ adapter: new Adapter() });
const setSelected = jest.fn();
it('should take a snapshot', () => {
    const { asFragment } = render(
        <Router>
            <ProfileListItem />
        </Router>
    )
    expect(asFragment(<Router><ProfileListItem itemName="Profile"/></Router>)).toMatchSnapshot()
});
it('visit /profile on click', () => {
    const { asFragment,getByTestId ,getByText} = render(
        <Router>
            <ProfileListItem
                itemName="Profile"
                link="profile"
                setSelected={setSelected}
                index={1}
            />
        </Router>
    )
    fireEvent.click(getByTestId("listitem"))
    expect(setSelected).toHaveBeenCalled
    expect(getByText("Profile")).toBeInTheDocument
});