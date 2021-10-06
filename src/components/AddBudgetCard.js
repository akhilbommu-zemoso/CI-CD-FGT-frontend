import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FTCard } from '../atoms/FTCard';
const useStyles = makeStyles({
    cardStyle: {
        width: '200px',
        fontWeight: 900,
        borderRadius: '6px',
        border: '1px,solid,black',
        color: 'rgb(22,101,216)',
        backgroundColor: 'rgb(255, 255, 255)',
        textAlign: 'center',
        '&:hover': {
            backgroundColor: "rgb(4,136,255)",
            color: 'white'
        }
    },
    content: {
        marginTop: "14px",
        fontSize: 12,
        textAlign: 'center',
        fontWeight: 500,
        color: 'black',
        textAlign: 'center',
    },
});
export default function Budgetcard(props) {
    const classes = useStyles();
    return (
        <FTCard
            cardStyle={classes.cardStyle}
            contentStyle={classes.content}
            headerStyle={classes.header}
            header={"Create your budget"}
            content={"Take control on your expenses by creating a budget on your spendings"}
        />
    );
}