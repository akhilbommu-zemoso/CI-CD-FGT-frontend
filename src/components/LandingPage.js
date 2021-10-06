import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import BudgetCard from './AddBudgetCard'
import InsightCard from './InsightCard'
import TransactionsCard from './TransactionsCard'
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    Top: {
        marginTop: '200px',
    },
    title: {
        marginBottom: '5px',
        fontSize: '20px',
        fontWeight: 500,
        color: 'black',
        marginLeft: '10pt'
    },
    top: {
        marginTop:'25px',
    }
}));
export default function CenteredGrid() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={12}>
                <Grid item xs={9} className={classes.left}>
                    <div className={classes.title}>
                        Budget
                    </div>
                    <BudgetCard title="Create your budget" content=" Take control on your expenses by creating a budget on your spendings" />
                </Grid>
                <Grid item xs={3} className={classes.left}>
                    <div className={classes.title}>
                    </div>
                    <InsightCard title="Insights" content="No insights are here"/>
                </Grid>
                <Grid item xs={9} className={classes.left}>
                    <div className={classes.title}>
                    </div>
                </Grid>
                <Grid item xs={3} className={classes.left}>
                    <div className={classes.title}>
                    </div>
                    <div className={classes.top}>
                        <TransactionsCard title="Transactions" content="Looks like you didn’t create any transactions to show the data. Please, here to keep in track"/>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}





    
