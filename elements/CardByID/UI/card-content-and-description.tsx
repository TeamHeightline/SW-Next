import React from 'react';
import {PaperProps} from "@mui/material/Paper/Paper";
import {Grid, Paper} from "@mui/material";
import CardMainContent from "./card-main-content";
import CardDescription from "./card-description";
import {ICardData} from "../../../server-layer/types/card";


interface ICardContentAndDescriptionProps extends PaperProps {
    cardData: ICardData

}

export default function CardContentAndDescription({cardData, ...props}: ICardContentAndDescriptionProps) {
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <CardMainContent cardData={cardData}/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <CardDescription cardData={cardData}/>
                </Grid>
            </Grid>
        </div>
    )
}

