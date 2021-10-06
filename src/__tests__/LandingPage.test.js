import React from 'react'
import { render, fireEvent, screen,getAllByText } from '@testing-library/react'
import LandingPage from '../components/LandingPage'
import { BrowserRouter as Router } from 'react-router-dom'

it('should take a snapshot', () => {
    const { asFragment, getByTestId } = render(<Router><LandingPage /></Router>)
    expect(asFragment(<Router><LandingPage /></Router>)).toMatchSnapshot()

});

it("checks for Budget card", () => {
    const { getByText, getByTestId } = render(<Router><LandingPage /></Router>)
    expect(screen.getByText("Create your budget")).toBeInTheDocument
})

it("checks for transactions card", () => { 
    const { getByText ,getByTestId } = render(<Router><LandingPage /></Router>)
    expect(screen.getByText("Trasactions")).toBeInTheDocument
})

it("checks for Insights card", () => {
    const { getByText, getByTestId } = render(<Router><LandingPage /></Router>)
    expect(screen.getByText("Insights")).toBeInTheDocument
})