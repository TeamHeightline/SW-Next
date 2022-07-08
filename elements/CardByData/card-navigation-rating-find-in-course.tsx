import {observer} from "mobx-react";
import React from 'react';
import {PaperProps} from "@mui/material/Paper/Paper";
import {Grid, Paper} from "@mui/material";
import CardAuthorNavigation from "./card-author-navigation";
import CardFindInCourse from "./card-find-in-course";
import {ICardData} from "../../server-layer/types/card";


interface ICardNavigationRatingFindProps extends PaperProps {
    cardData: ICardData

}

const CardNavigationRatingFind = observer(({cardData, ...props}: ICardNavigationRatingFindProps) => {
    return (
        <Paper elevation={0} {...props}>
            <Grid container>
                <Grid item xs={12} md={6}>
                    <CardAuthorNavigation cardData={cardData}/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <CardFindInCourse cardData={cardData}/>
                </Grid>
            </Grid>
        </Paper>
    )
})

export default CardNavigationRatingFind
