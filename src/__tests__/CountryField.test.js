import React, { Component } from 'react'
import { render, fireEvent, getAllByText,screen } from '@testing-library/react'
import { renderHook, act } from '@testing-library/react-hooks'
import { BrowserRouter as Router } from 'react-router-dom'
import { ProfileFormFields, BootstrapInput } from '../components/BasicProfileTop'
import BasicProfile from '../components/BasicProfile'
import CountrySelect from '../components/CountryField'
const handleChange = jest.fn();
const handleChangeCountry = jest.fn();
const data = () => {
    var json = {
        id: "1",
        name: "Fareed Sheik",
        email: "sheikfareed3819@gmail.com",
        auth0Id: "google - oauth2 | 115320575601904541142",
        phone: " + 91 - 7680024324", "country": "United Arab Emirates",
        createdAt: "1589626102282", "createdBy": "Fareed",
        modifiedAt: "1589626102282", "modifiedBy": "Fareed",
        country:"India",
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
    const { asFragment } = render(<Router>
        <CountrySelect
            handleChangeCountry={handleChangeCountry}
            country={""}
        /></Router>
    )
    expect(asFragment(<Router>
        <CountrySelect
            handleChangeCountry={handleChangeCountry}
            country={data().country}
        />
    </Router>)).toMatchSnapshot()
});

it("checks for label", () => { 
    const { getByText,getByTestId,getByRole } = render(<Router>
        <CountrySelect
            handleChangeCountry={handleChangeCountry}
            country={"India"}
        /></Router>
    )
    expect(screen.getByText("Country")).toBeInTheDocument 
})
   
      
 
