import React from 'react';
import {PaperProps} from "@mui/material/Paper/Paper";
import {Paper, Stack, Typography,} from "@mui/material";
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import {ICardData} from "../../server-layer/types/card";

interface ICardThemeProps extends PaperProps {
    cardData: ICardData
}

export default function CardTheme({cardData, ...props}: ICardThemeProps) {

    const themeString = cardData?.themeString


    return (
        <Paper elevation={0} {...props}>
            {themeString &&
                <Stack direction={"row"}>
                    <AccountTreeIcon/>
                    <Typography>
                        {themeString}
                    </Typography>
                </Stack>}
        </Paper>
    )
}
