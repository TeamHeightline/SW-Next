import React from 'react';
import DefaultCardNavigation from "./default-card-navigation";
import {Stack} from "@mui/material";
import CardTitleWithId from "./card-title-with-id";
import CardCopyright from "./card-copyright";
import CardTheme from "./card-theme";
import {PaperProps} from "@mui/material/Paper/Paper";
import Paper from "@mui/material/Paper";
import {ICardData} from "../../server-layer/types/card";
import Box from "@mui/material/Box";

interface ITitleAndNavigationProps extends PaperProps {
    cardData: ICardData,
    courseNavigation?: any
}

export function TitleAndNavigation({cardData, courseNavigation, ...props}: ITitleAndNavigationProps) {
    return (
        <Paper elevation={0} {...props}>
            <Stack
                alignItems={'center'}
                direction={{xs: "column", md: "row"}} spacing={2}>
                {!!courseNavigation ?
                    <Box sx={{overflow: "auto", width: {sx: "auto", md: 730}}}>
                        {courseNavigation}
                    </Box> :
                    <DefaultCardNavigation cardData={cardData}/>}

                <Stack direction={"column"}>
                    <CardTitleWithId cardData={cardData}/>
                    <CardCopyright cardData={cardData}/>
                    <CardTheme cardData={cardData}/>
                </Stack>
            </Stack>
        </Paper>
    )
}
