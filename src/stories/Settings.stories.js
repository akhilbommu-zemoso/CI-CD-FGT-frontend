import React from "react";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import { withCssResources } from '@storybook/addon-cssresources';
import GenralProfileSettings from '../atoms/GenralProfileSettingName'
import GeneralProfileCheckBox from '../components/GeneralProfileCheckBox'
import CountrySelect from '../components/CountryField'
import Frequency from "../atoms/Frequency";
export default {
    title: "Dropdown",
    decorators: [withKnobs, withCssResources],
};
export const DropDown = () => {
    const items = ["Monthly", "Daily", "Weekly"];
    const label = text("label", "label for dropdown");
    return (
        <div>
            <div style={{ margin: '20px' }}>
                DropDown With Default Selected
                     </div>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '14px',
                marginBottom: "40px"
            }}>
                <div style={{ marginRight: '100px' }}>
                    <Frequency items={items} value="Monthly" /></div>
            </div>
            <div style={{ marginTop: '10px', marginBottom: '50px', marginLeft: '20px' }}>
                <CountrySelect country="India" />
            </div>

            <div style={{ marginLeft: '20px', marginTop: '30px' }}>
                DropDown With Label
                     </div>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '14px',
                margin: '20px',
            }}>
                <GenralProfileSettings setting={label} />
                <div style={{ marginRight: '100px' }}>
                    <Frequency items={items} value="Monthly" /></div>
            </div>
        </div>
    );
}

