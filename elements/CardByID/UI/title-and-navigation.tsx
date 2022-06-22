import React from 'react';
import DefaultCardNavigation from "./default-card-navigation";
import {Stack} from "@mui/material";
import CardTitleWithId from "./card-title-with-id";
import CardCopyright from "./card-copyright";
import CardTheme from "./card-theme";
import {PaperProps} from "@mui/material/Paper/Paper";
import Paper from "@mui/material/Paper";
import {ICardData} from "../../../server-layer/types/card";

interface ITitleAndNavigationProps extends PaperProps {
    cardData: ICardData
}

export function TitleAndNavigation({cardData, ...props}: ITitleAndNavigationProps) {
    return (
        <Paper elevation={0} {...props}>
            <Stack
                direction={"column"} spacing={2}>
                <DefaultCardNavigation cardData={cardData}/>
                <Stack direction={"column"}>
                    <CardTitleWithId cardData={cardData}/>
                    <CardCopyright cardData={cardData}/>
                    <CardTheme cardData={cardData}/>
                </Stack>
            </Stack>
        </Paper>
    )
}
