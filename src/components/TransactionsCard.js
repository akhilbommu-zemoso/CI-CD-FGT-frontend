import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import SortIcon from '@material-ui/icons/Sort';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import { FTCard, CardHeader } from '../atoms/FTCard'
const useStyles = makeStyles({
    card: {
        width: '300px',
        height: '250px',
        borderRadius: '6px',
        border: '1px,solid,black',
        backgroundColor: 'rgb(255, 255, 255)',
    },
    title: {
        fontSize: '20px',
        fontWeight: 500,
        color: 'black'
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    content: {
        fontSize: '14px',
        textAlign: 'center',
        marginTop: '60px'
    },
    iconStyle: {
        marginRight: '10px',
    }
});
function IconStack(props) {
    return (<>
        {
            props.icons.map((icon, i) => icon)
        }
    </>)
}
export default function TrasactionsCard() {
    const classes = useStyles();
    var icons = [<AddIcon className={classes.iconStyle} />,
    <CalendarTodayIcon className={classes.iconStyle} />,
    <SortIcon className={classes.iconStyle} />];
    const header = () => {
        return <CardHeader
            headerStyle={classes.header}
            headerTitleStyle={classes.title}
            headerTitleContent={"Trasactions"}
            headerRight={<IconStack icons={icons} />}
        />
    }
    return (
        <FTCard
            cardStyle={classes.card}
            contentStyle={classes.content}
            footerStyle={classes.footer}
            header={header()}
            content={"Looks like you didn’t create any transactions to show the data. Please, here to keep in track"}
        />
    );
}
