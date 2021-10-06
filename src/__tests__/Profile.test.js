import React, { Component } from 'react'
import { render, fireEvent, getAllByText,screen } from '@testing-library/react'
import { renderHook, act } from '@testing-library/react-hooks'
import { BrowserRouter as Router } from 'react-router-dom'
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme'
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { create } from "react-test-renderer";
import Profile from '../components/Profile'
import BasicProfile from '../components/BasicProfile';
import fetchMock from 'fetch-mock';
Enzyme.configure({ adapter: new Adapter() });
const data = () => {
    var json = {
        id: "1",
        name: "Fareed Sheik",
        email: "sheikfareed3819@gmail.com",
        auth0Id: "google - oauth2 | 115320575601904541142",
        phone: " + 91 - 7680024324", "country": "United Arab Emirates",
        createdAt: "1589626102282", "createdBy": "Fareed",
        modifiedAt: "1589626102282", "modifiedBy": "Fareed",
        profilePicture: {
            id: "1",
            photoBlob: null,
            photoContentLength: "0",
            photoContentType: null,
        }
    }
    localStorage.setItem('user', JSON.stringify(json))
    return json;
}
it('should take a snapshot', () => {
    data()
    const { asFragment } = render(<Router>
        <Profile values={data()} /></Router>
    )
    expect(asFragment(<Router><Profile values={data()} /></Router>)).toMatchSnapshot()
});

it('should take a snapshot', () => {
    data()
    const { asFragment } = render(<Router>
        <Profile values={data()} /></Router>
    )
    expect(asFragment(<Router><Profile values={data()} /></Router>)).toMatchSnapshot()
});

it("checks api", async () => { 
    fetchMock.mock("http://localhost:8080/api/user/users", {
        body: {
            status: 200,
            data:data()
    }});
    fetchMock.mock("http://localhost:8080/api/usersetting/settings",200)
    localStorage.setItem('accessToken', "abcdfetjjj");
    const { getByText} = render(<Router>
        <Profile values={data()} /></Router>
    )
    const res = await fetch("http://localhost:8080/api/user/users");
    const res1 = await fetch("http://localhost:8080/api/usersetting/settings");
    expect(res.ok).toBeTruthy
    expect(res1.ok).toBeTruthy
   
})







