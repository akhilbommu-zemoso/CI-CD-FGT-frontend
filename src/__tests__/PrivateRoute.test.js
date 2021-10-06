import React from 'react'
import { render, cleanup, fireEvent, within, getAllByText, getByText } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import PrivateRoute from '../components/PrivateRoute'
import FTCard from '../atoms/FTCard'
afterEach(cleanup)

it('should take a snapshot', () => {
    const { asFragment, getByTestId } = render(<Router><PrivateRoute /></Router>)
    expect(asFragment(<Router><PrivateRoute /></Router>)).toMatchSnapshot()
});

it('redirects to login if login is failed', () => {
    const isLogin = jest.fn(() => false)
    const { asFragment, getByTestId } = render(<Router><PrivateRoute /></Router>)
    expect(isLogin()).toEqual(false)
    expect(isLogin()).toHaveBeenCalled
    expect(window.location.href).toEqual("http://localhost/")
});

