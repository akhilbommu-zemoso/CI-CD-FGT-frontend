import React, { Component } from 'react'
import { render,screen } from '@testing-library/react'
import TransactionCard from '../components/TransactionsCard'

it('should take a snapshot', () => {
    const { asFragment } = render(<TransactionCard />)
    expect(asFragment(<TransactionCard />)).toMatchSnapshot()
});
it('check for Title', () => {
    const { getByText } = render(<TransactionCard />)
    expect(screen.getByText("Trasactions")).toBeInTheDocument
});

it('check for content', () => {
    const { getByText } = render(<TransactionCard />)
    expect(getByText("Looks like you didn’t create any transactions to show the data. Please, here to keep in track")).toBe
})
