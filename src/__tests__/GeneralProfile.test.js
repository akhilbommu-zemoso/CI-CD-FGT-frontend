import React from 'react'
import { render, cleanup,screen, fireEvent, waitFor } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import GeneralProfile from '../components/GeneralProfile'
afterEach(cleanup)
const data = () => {
    var json = {
        "message": {
            "id": 1,
                "emailMessages": true,
                    "textMessages": true,
                        "user": null
        },
        "notification": {
            "id": 1,
                "notificationType1": false,
                    "notificationType2": false,
                        "notificationType3": false,
                            "notificationType4": true,
                                "notificationType5": true,
                                    "notificationType6": true,
                                        "notificationType7": true,
                                            "user": null
        },
        "setting": {
            "id": 1,
                "settingType1": false,
                    "settingType2": true,
                        "settingType3": true,
                            "settingType4": "Daily",
                                "settingType5": "1",
                                    "settingType6": "1 Day",
                                        "user": null
        }
    }       
    return json;
}
it('should take a snapshot', () => {
    const { asFragment, getByTestId } = render(<Router><GeneralProfile result={data()}/></Router>)
    expect(asFragment(<Router>
        <GeneralProfile result={data()}/>
        </Router>)).toMatchSnapshot()

});

it('checks for FTCard header content footer through props', () => {
    const { asFragment, getByTestId, getByText } = render(
        <Router><GeneralProfile result={data()} /> 
        </Router>
    )
    expect(screen.getByText("Notify me when expenses exceeds 70%")).toBeInTheDocument
    expect(screen.getByText("When new bill is added")).toBeInTheDocument
    expect(screen.getByText("Amount debited/credited from bank account")).toBeInTheDocument
    expect(screen.getByText("Notify me when I am exceeding the goal period")).toBeInTheDocument
});

it("checking snackbar", () => {
    const { getByTestId, getByText } =
        render(<Router><GeneralProfile result={data()} open={true} /></Router>);
    expect(screen.getByText("Changes Saved!")).toBeInTheDocument
});

const postToApi = jest.fn();
const handleChange = jest.fn();
it("api call check", () => {
    const { getByTestId, getByText } = render(<Router><GeneralProfile result={data()} open={false} postToApi={postToApi} method={(event) => handleChange()} /></Router>);
    fireEvent.click(getByTestId("button"))
    expect(postToApi).toHaveBeenCalled
});

