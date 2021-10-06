import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from "@storybook/addon-knobs";
import FTButton from '../atoms/FTButton'
export default {
    title: 'Button',
    decorators: [withKnobs],
};
export const Button = () => {
    const name = text("name", "Text");
    return <FTButton  name={name} />
}