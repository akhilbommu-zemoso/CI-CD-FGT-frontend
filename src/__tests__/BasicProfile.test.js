import React, { Component } from 'react'
import { render, fireEvent, getAllByText ,screen} from '@testing-library/react'
import { renderHook, act } from '@testing-library/react-hooks'
import { BrowserRouter as Router } from 'react-router-dom'
import renderer from 'react-test-renderer';
import { create } from "react-test-renderer";
import BasicProfile from '../components/BasicProfile'
import { ProfileFormFields } from '../components/BasicProfileTop';
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
};

var error = () => { 

    var errorMessage = {
        name: "",
        phone: ""
    }
    return errorMessage;
}


it('should take a snapshot', () => {
    data()
    const { asFragment } = render(<Router>
        <BasicProfile errorMessage={error()} values={data()} /></Router>
    )
    expect(asFragment(<Router><BasicProfile errorMessage={error()} values={data()} /></Router>)).toMatchSnapshot()
});

const postToUserApi = jest.fn();
it("save button clicked and api invoked ", async () => {
    const { getByTestId, getByText } = render(<Router><BasicProfile errorMessage={error()} values={data()} postToUserApi={postToUserApi} /></Router>);
    fireEvent.click(getByTestId("button"))
    expect(postToUserApi).toHaveBeenCalled
});

it("checking children present or not", () => {
    const { getByTestId } = render(<Router><BasicProfile errorMessage={error()} values={data()} postToUserApi={postToUserApi} /></Router>);
    expect(getByTestId("profileemail")).toBe
    expect(getByTestId("profilepassword")).toBe
    expect(getByTestId("profiledeleteaccount")).toBe
});

it("checking snackbar", () => {
    const { getByTestId, getByText } = render(<Router><BasicProfile errorMessage={error()} open={true} values={data()} postToUserApi={postToUserApi} /></Router>);
    expect(screen.getByText("Changes Saved!")).toBeInTheDocument
});

it("checking labels", () => {
    const { getByText } = render(<ProfileFormFields errorMessage={error()} values={data()}></ProfileFormFields>)
    expect(getByText("User Name")).toBe
    expect(getByText("Country")).toBe
    expect(getByText("Phone Number")).toBe
   
});
