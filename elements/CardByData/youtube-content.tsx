import React from 'react';
import {PaperProps} from "@mui/material/Paper/Paper";
// import ReactPlayer from "react-player";
import {ICardData} from "../../server-layer/types/card";
import {default as _ReactPlayer} from 'react-player';
import {ReactPlayerProps} from "react-player/types/lib";
import {useAmp} from "next/amp";
import urlParser from "js-video-url-parser";
import "js-video-url-parser/lib/provider/youtube";
import {NoSsr} from "@mui/material";
import YoutubeSSRFallback from "./youtube-ssr-fallback";

const ReactPlayer = _ReactPlayer as unknown as React.FC<ReactPlayerProps>;

interface IYoutubeContentProps extends PaperProps {
    cardData: ICardData

}

export default function YoutubeContent({cardData, ...props}: IYoutubeContentProps) {
    const isAMP = useAmp()
    const youtubeVideoURL = String(cardData?.video_url)
    const showVideo = youtubeVideoURL !== "null"
    const isMobile = false
    if (isAMP) {
        return (<div>
            {showVideo &&
                // @ts-ignore
                <amp-youtube
                    data-videoid={urlParser.parse(cardData?.video_url)?.id}
                    layout="responsive"
                    width="600"
                    height="400"
                />
            }
        </div>)
    }
    return (
        <div>
            {showVideo &&
                <NoSsr fallback={<YoutubeSSRFallback cardData={cardData}/>}>
                    <ReactPlayer width="auto"
                                 height={isMobile ? 200 : 480}
                                 controls
                                 url={youtubeVideoURL}
                    />
                </NoSsr>}
        </div>
    )
}
