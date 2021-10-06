import React from 'react'
import { render,cleanup, fireEvent,within, getAllByText, getByText ,screen} from '@testing-library/react'
import Messages from '../components/Messages'
import GeneralProfileCheckBox from '../components/GeneralProfileCheckBox'
import { BrowserRouter as Router } from 'react-router-dom'

afterEach(cleanup)
const handleChange = jest.fn();
it('should take a snapshot', () => {
    const { asFragment, getByTestId } = render(
        <Router>
            <Messages
            name={"Text messages"}
            label={"Messages"}
            value={true}
            method={handleChange} />
        </Router>)
    expect(asFragment(<Router>
        <Messages
            name={"Text messages"}
            label={"Messages"}
            value={true}
            method={handleChange} />
    </Router>)).toMatchSnapshot()
});

it('check for label', () => { 
    const { getByText, getByTestId } = render(<Router>
        <Messages
        name={"Text messages"}
        label={"Messages"}
        value={true}
        method={handleChange} /></Router>)
    expect(screen.getByText("Messages")).toBeInTheDocument
   
})


