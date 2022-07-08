import React from 'react';
import {PaperProps} from "@mui/material/Paper/Paper";
import {Paper} from "@mui/material";
import {ICardData} from "../../server-layer/types/card";


interface ICardDescriptionProps extends PaperProps {
    cardData: ICardData

}

export default function CardDescription({cardData, ...props}: ICardDescriptionProps) {
    const description = cardData?.text
    return (
        <Paper elevation={0} {...props}>
            <div dangerouslySetInnerHTML={{__html: description}}/>
        </Paper>
    )
}

