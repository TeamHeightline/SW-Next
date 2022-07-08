import React from 'react';
import {PaperProps} from "@mui/material/Paper/Paper";
import YoutubeContent from "./youtube-content";
import CardImage from "./card-image";
import {ICardData} from "../../server-layer/types/card";


interface ICardMainContentProps extends PaperProps {
    cardData: ICardData
}

export default function CardMainContent({cardData, ...props}: ICardMainContentProps) {
    const isYoutubeContentType = cardData?.card_content_type == 0
    const isRemoteResourceContentType = cardData?.card_content_type == 1
    const isSimpleImageContentType = cardData?.card_content_type == 2

    const isShowImageContent = isRemoteResourceContentType || isSimpleImageContentType

    return (
        <div>
            {isYoutubeContentType &&
                <YoutubeContent cardData={cardData}/>
            }
            {isShowImageContent &&
                <CardImage cardData={cardData}/>
            }
        </div>
    )
}
