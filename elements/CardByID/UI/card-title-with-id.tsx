import React from 'react';
import {Stack, Typography} from "@mui/material";
import {ICardData} from "../../../server-layer/types/card";

interface ICardTitleProps extends React.HTMLAttributes<HTMLDivElement> {
    cardData: ICardData
}

export default function CardTitleWithId({cardData, ...props}: ICardTitleProps) {
    const title = cardData?.title


    return (
        <Stack direction={{xs: "column", md: "row"}}>
            <Typography
                id={"card-title"}
                sx={{fontSize: {xs: "1.25rem", md: "2rem"}}}
            >
                {title}
            </Typography>
        </Stack>
    )
}
