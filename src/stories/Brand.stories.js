import React from 'react'
import Brand from '../atoms/Brand'
import { withKnobs, text } from "@storybook/addon-knobs";
import { BrowserRouter as Router } from 'react-router-dom'
export default {
    title: 'Brand',
    decorators: [withKnobs],
};
export const brand = () => {
    const name = text("name", "ZE-Transact");
    return <Router><Brand name={name} /></Router>
}