import React, { Component } from 'react'
import { render, fireEvent, getAllByText,screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import ProfileSideBar from '../components/ProfileSideBar'

it('should take a snapshot', () => {
    const { asFragment, getByTestId } = render(<Router><ProfileSideBar /></Router>)
    expect(asFragment(<Router><ProfileSideBar /></Router>)).toMatchSnapshot()
});

it("should check for sidebar items", () => { 
    const { asFragment, getByTestId } = render(<Router><ProfileSideBar /></Router>)
    expect(screen.getByText("Profile settings")).toBeInTheDocument
    expect(screen.getByText("Manage transactions")).toBeInTheDocument
    expect(screen.getByText("Manage categories")).toBeInTheDocument
    expect(screen.getByText("Manage bank account")).toBeInTheDocument
    expect(screen.getByText("Support")).toBeInTheDocument
    expect(screen.getByText("Privacy")).toBeInTheDocument
})
