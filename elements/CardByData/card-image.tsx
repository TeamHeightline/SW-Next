import React from 'react';
import {PaperProps} from "@mui/material/Paper/Paper";
import {Card, CardActionArea} from "@mui/material";
import {ICardData} from "../../server-layer/types/card";
import {FILE_URL} from "../../settings";


interface ICardImageProps extends PaperProps {
    cardData: ICardData

}

export default function CardImage({cardData, ...props}: ICardImageProps) {
    const card_image = "url(" + FILE_URL + "/" + cardData.cards_cardimage?.image + ")"
    const isRemoteResourceContentType = cardData?.card_content_type == 1
    const remoteResourceURL = String(cardData?.site_url)

    const isClickableImage = isRemoteResourceContentType && remoteResourceURL
    const goToRemoteResource = () => {
        if (window) {
            window.open(remoteResourceURL, '_blank')
        }
    }
    return (
        <Card elevation={0} {...props}
              sx={{
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  width: "100%",
                  height: 400,
                  backgroundImage: card_image,
              }}>
            {isClickableImage &&
                <CardActionArea
                    sx={{
                        width: "100%",
                        height: "100%"
                    }}
                    onClick={goToRemoteResource}
                />}

        </Card>
    )
}
