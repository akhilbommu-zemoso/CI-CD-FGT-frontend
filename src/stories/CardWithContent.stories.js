import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { withKnobs, text } from "@storybook/addon-knobs";
import InsightCard from "../components/InsightCard";
import BudgetCard from "../atoms/AddBudgetCard";
import Login from "../components/Login";

export default {
    title: "CardWithContent",
    decorators: [withKnobs],
};

const useStyles = makeStyles({

});

export const Small = () => {
    const title = text("title", "Create your budget");
    const content = text("content", " Take control on your expenses by creating a budget on your spendings");
    return <BudgetCard title={title} content={content} />;
};

export const Medium = () => {
    const name = text("cardStyle", classes.root2);
    return <InsightCard />;
};

export const Large = () => {
    const classes = useStyles();
    const name = text("cardStyle", classes.root3);
    return <Login />;
};