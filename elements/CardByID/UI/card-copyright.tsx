import React from 'react';
import {Tooltip, Typography} from "@mui/material";
import CopyrightIcon from "@mui/icons-material/Copyright";
import {ICardData} from "../../../server-layer/types/card";

interface ICardCopyrightProps extends React.HTMLAttributes<HTMLDivElement> {
    cardData: ICardData
}

export default function CardCopyright({cardData, ...props}: ICardCopyrightProps) {
    const copyright = cardData?.copyright
    const showCopyright = cardData?.is_card_use_copyright && copyright

    return (
        <div {...props}>
            {showCopyright &&
                <Typography variant="h6">
                    <Tooltip title={
                        <Typography>
                            {"Правообладателем изложенного материала является: " + copyright}
                        </Typography>}>
                        <CopyrightIcon/>
                    </Tooltip>
                    {copyright}
                </Typography>}
        </div>
    )
}
