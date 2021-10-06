import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import insight from '../assets/insight.png'
import { CardHeader, FTCard } from '../atoms/FTCard';
const useStyles = makeStyles({
    card: {
        width: '300px',
        height: '250px',
        borderRadius: '6px',
        border: '1px,solid,black',
        backgroundColor: 'rgb(255, 255, 255)',
    },
    header: {
        fontSize: '20px',
        fontWeight: 500,
        color: 'black'
    },
    footer: {
        fontSize: '14px',
        textAlign: 'center',
        marginTop: '20px',
    },
    content: {
        textAlign: 'center',
        marginTop: '30px',
        marginBottom: '30px',
        fontSize: '14px',
    },
});
export default function InsightCard(props) {
    const classes = useStyles();
    const header = () => {
        return <CardHeader
            headerTitleStyle={classes.header}
            headerTitleContent={"Insights"}
        />
    }
    return (
        <FTCard
            cardStyle={classes.card}
            contentStyle={classes.content}
            footerStyle={classes.footer}
            header={header()}
            content={<img src={insight} alt="Logo" height='80px' />}
            footer={"No insights are here"}
        />
    );
}
