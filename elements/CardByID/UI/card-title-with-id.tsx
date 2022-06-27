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
                sx={{fontSize: {xs: "1.25rem", md: "2rem"}}}
                // variant={isMobile ? "h6" : "h4"}
                // variant={{xs: "h6", md: "h4"}}
            >
                {title}
                {/*<Typography*/}
                {/*    id={"card-id"}*/}
                {/*    variant={"body2"}*/}
                {/*    // variant={{xs: "h6", md: "h4"}}*/}
                {/*>*/}
                {/*    {card_id}*/}
                {/*</Typography>*/}
            </Typography>

        </Stack>
    )
}
