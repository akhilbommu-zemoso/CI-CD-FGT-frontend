import React, { Component } from 'react'
import { render } from '@testing-library/react'
import AddBudgetCard from '../components/AddBudgetCard'

it('should take a snapshot', () => {
    const { asFragment} = render(<AddBudgetCard/>)
    expect(asFragment(<AddBudgetCard />)).toMatchSnapshot()
});

it('check for header', () => {
    const { getByText } = render(<AddBudgetCard />)
    expect(getByText("Create your budget")).toBe
});

it('check for content', () => {
    const { getByText } = render(<AddBudgetCard />)
    expect(getByText("Take control on your expenses by creating a budget on your spendings")).toBe
});
