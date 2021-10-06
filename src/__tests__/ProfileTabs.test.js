import React, { Component } from 'react'
import { render, fireEvent, getAllByText } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import ProfileTabs from '../components/ProfileTabs'
it('should take a snapshot', () => {
    const { asFragment, getByTestId } = render(<Router><ProfileTabs /></Router>)
    expect(asFragment(<Router><ProfileTabs /></Router>)).toMatchSnapshot()
});

