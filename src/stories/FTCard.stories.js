import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { withKnobs, text } from "@storybook/addon-knobs";
import { FTCard } from "../atoms/FTCard";

export default {
    title: "Card",
    decorators: [withKnobs],
};

const useStyles = makeStyles({
    root1: {
        width: "200px",
        height: "132px",
        borderRadius: "6px",
        border: "1px,solid,black",
        backgroundColor: "rgb(255, 255, 255)",
    },
    root2: {
        width: "300px",
        height: "250px",
        borderRadius: "6px",
        border: "1px,solid,black",
        backgroundColor: "rgb(255, 255, 255)",
    },
    root3: {
        borderRadius: "10px",
        width: "400px",
        height: "350px",
        backgroundColor: "rgb(255, 255, 255)",
    },
});

export const Small = () => {
    const classes = useStyles();
    const name = text("cardStyle", classes.root1);
    return <FTCard cardStyle={name}/>;
};

export const Medium = () => {
    const classes = useStyles();
    const name = text("cardStyle", classes.root2);
    return <FTCard cardStyle={name} />;
};

export const Large = () => {
    const classes = useStyles();
    const name = text("cardStyle", classes.root3);
    return <FTCard cardStyle={name} />;
};