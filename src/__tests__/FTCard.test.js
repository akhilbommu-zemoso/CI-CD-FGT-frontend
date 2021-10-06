import React, { Component } from 'react'
import { render, fireEvent, getAllByText, screen } from '@testing-library/react'
import { FTCard,CardHeader } from '../atoms/FTCard'

it('should take a snapshot', () => {
    const { asFragment} = render(<FTCard/>)
    expect(asFragment(<FTCard/>)).toMatchSnapshot()
});
it('should take a snapshot', () => {
    const { asFragment} = render(<CardHeader  />)
    expect(asFragment(<CardHeader/>)).toMatchSnapshot()

});

it('checks for FTCard header content footer through props', () => { 
    const { getbyText } = render(<FTCard header={"Iam header"} footer={"Iam footer"} content={"Iam content"} />)  
    expect(screen.getByText("Iam header")).toBeInTheDocument
    expect(screen.getByText("Iam footer")).toBeInTheDocument
    expect(screen.getByText("Iam content")).toBeInTheDocument
})

it('checks CardHeader content through props', () => {
    const { getByText } = render(<CardHeader headerTitleContent="Card header" />)
    expect(screen.getByText("Card header")).toBeInTheDocument
   
})