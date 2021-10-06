import React, { Component } from 'react'
import { render } from '@testing-library/react'
import InsightCard from '../components/InsightCard'

it('should take a snapshot', () => {
    const { asFragment } = render(<InsightCard />)
    expect(asFragment(<InsightCard />)).toMatchSnapshot()
});

it('check for header', () => {
    const { getByText } = render(<InsightCard />)
    expect(getByText("Insights")).toBe
});

it('check for content', () => {
    const { getByText } = render(<InsightCard />)
    expect(getByText("No insights are here")).toBe
})
