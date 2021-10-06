import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Divider } from "@material-ui/core";
function FTCard(props) {
  return (
    <Card className={props.cardStyle}>
      <CardContent>
        <Typography className={props.headerStyle}>{props.header}</Typography>
        <Typography className={props.contentStyle}>{props.content}</Typography>
        <Typography className={props.footerStyle}>{props.footer}</Typography>
      </CardContent>
    </Card>
  );
}
function CardHeader(props) {
  return (
    <div>
      <div className={props.headerStyle}>
        <Typography className={props.headerTitleStyle}>
          {props.headerTitleContent}
        </Typography>
        <div>{props.headerRight}</div>
      </div>
      <Divider style={{ marginTop: '10px' }} />
    </div>
  );
}
export { FTCard, CardHeader };
