import React from 'react';
import {Stack, Typography} from "@mui/material";
import {ICardData} from "../../../server-layer/types/card";

interface ICardTitleProps extends React.HTMLAttributes<HTMLDivElement> {
    cardData: ICardData
}

export default function CardTitleWithId({cardData, ...props}: ICardTitleProps) {
    const isMobile = false

    const title = cardData?.title
    const card_id = cardData?.id

    return (
        <Stack direction={{xs: "column", md: "row"}}>
            <Typography
                id={"card-title"}
                variant={isMobile ? "h6" : "h4"}>
                {title}
            </Typography>
            <Typography
                id={"card-id"}
                variant={isMobile ? "subtitle2" : "subtitle1"}>
                {card_id}
            </Typography>
        </Stack>
    )
}
