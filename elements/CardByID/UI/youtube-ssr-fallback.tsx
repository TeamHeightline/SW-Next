import {Button, Paper} from "@mui/material";
import {PaperProps} from "@mui/material/Paper/Paper";
import {ICardData} from "../../../server-layer/types/card";

interface IYoutubeSSRFallbackProps extends PaperProps {
    cardData: ICardData,
}

export default function YoutubeSSRFallback({cardData, ...props}: IYoutubeSSRFallbackProps) {
    return (
        <Paper elevation={0} {...props}>
            <Button href={cardData?.video_url}/>
        </Paper>
    )
}
