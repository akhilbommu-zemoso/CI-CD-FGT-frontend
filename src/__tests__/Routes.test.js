import React, { Component } from 'react'
import { render, fireEvent, getAllByText,screen } from '@testing-library/react'
import Button from '@material-ui/core/Button'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from '../components/Routes'
it('should take a snapshot', () => {
    const { asFragment, getByTestId } = render(<Router><Routes /></Router>)
    expect(asFragment(<Router><Routes /></Router>)).toMatchSnapshot()
});

