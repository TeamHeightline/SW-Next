import React from 'react';
import {PaperProps} from "@mui/material/Paper/Paper";
import ReactPlayer from "react-player";
import {ICardData} from "../../../server-layer/types/card";


interface IYoutubeContentProps extends PaperProps {
    cardData: ICardData

}

export default function YoutubeContent({cardData, ...props}: IYoutubeContentProps) {
    const youtubeVideoURL = String(cardData?.video_url)
    const showVideo = youtubeVideoURL !== "null"
    const isMobile = false
    return (
        <div>
            {showVideo &&
                <ReactPlayer width="auto"
                             height={isMobile ? 200 : 480}
                             controls
                             url={youtubeVideoURL}
                />}
        </div>
    )
}
