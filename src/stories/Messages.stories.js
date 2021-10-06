import React from "react";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import { withCssResources } from '@storybook/addon-cssresources';
import Messages from '../components/Messages'
import { storiesOf } from "@storybook/react";
export default {
    title: "Text with checkbox",
    decorators: [withKnobs, withCssResources],
};

export const Checked = () => {
    const label = text("label", "Text message")
    return (
        <div>
            <div style={{ margin: '20px' }}>
                default checked
                     </div>
            <Messages value={true} />
            <div style={{ margin: '20px' }}>
                default unchecked
                     </div>
            <Messages value={false} />
            <div style={{ margin: '20px' }}>
                with text
                     </div>
            <Messages label={label} />
        </div>
    )
}


