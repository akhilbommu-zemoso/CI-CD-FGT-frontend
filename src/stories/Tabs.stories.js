import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import ProfileTabs from '../components/ProfileTabs'
export default {
    title: "HorizontalTab",
    decorators: [withKnobs],
};
export const HorizontalTab = () => {
    return (
        <ProfileTabs tab1={<div style={{ color: 'black' }}>Tab1 content</div>} tab2={<div style={{ color: 'black' }}>Tab2 content</div>} />);
};