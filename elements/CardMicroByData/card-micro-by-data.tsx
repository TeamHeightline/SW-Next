import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import {CardActionArea, Chip, Grid, Stack, Tooltip} from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import HttpIcon from '@mui/icons-material/Http';
import ImageIcon from '@mui/icons-material/Image';
import ScienceIcon from '@mui/icons-material/Science';
import SchoolIcon from '@mui/icons-material/School';
import BiotechIcon from '@mui/icons-material/Biotech';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import FunctionsIcon from '@mui/icons-material/Functions';
// import {GET_CARD_FOR_MICRO_VIEW_BY_ID, useStyles} from "./Struct"
import urlParser from "js-video-url-parser";
import "js-video-url-parser/lib/provider/youtube";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import {ICardDataWithTheme} from "../../server-layer/types/card";
import {FILE_URL} from "../../settings";
import Link from "next/link";

interface ICardMicroViewProps extends React.HTMLAttributes<HTMLDivElement> {
    cardData: ICardDataWithTheme
}


export default function CardMicroView({
                                          cardData,
                                          ...props
                                      }: ICardMicroViewProps) {


    const themesText = cardData?.cards_card_connected_theme[0]?.text
    const authorName = cardData?.users_customuser?.users_userprofile?.firstname + " " + cardData?.users_customuser?.users_userprofile?.lastname

    const showTheme = !!themesText
    const showAuthor = !!authorName.split(" ").join("")

    return (
        <div
            {...props}>
            <Card variant={"outlined"} sx={{
                display: 'flex',
                width: "400px",
                height: "170px"
            }}>
                <Link href={"/card/" + cardData.id} passHref>
                    <CardActionArea sx={{height: "100%"}}>
                        <Grid container alignItems={"start"}>
                            <Grid item xs={4}>
                                {cardData?.card_content_type == 0 && cardData?.video_url &&
                                    <>
                                        <CardMedia
                                            style={{width: 132, height: 169}}
                                            onError={() => void (0)}
                                            image={
                                                "https://img.youtube.com/vi/" + urlParser.parse(cardData?.video_url)?.id + "/hqdefault.jpg"
                                            }
                                        />
                                    </>
                                }
                                {(cardData?.card_content_type == 1 ||
                                        Number(cardData?.card_content_type) == 2) &&
                                    <CardMedia
                                        style={{width: 132, height: 169}}
                                        onError={() => void (0)}
                                        image={FILE_URL + "/" + cardData?.cards_cardimage?.image}
                                    />
                                }
                            </Grid>
                            <Grid item xs={8} sx={{height: "100%"}}>
                                <Stack direction={"column"}
                                       sx={{pl: 1, pr: 1, height: "100%"}}
                                >
                                    <Typography variant="h5" component={'span'}>
                                        ID: {cardData.id}

                                        {Number(cardData.card_content_type) === 0 &&
                                            <Chip id={"YouTube-icon"}
                                                  style={{marginLeft: 12}} size="small" variant="outlined"
                                                  color="secondary"
                                                  icon={<YouTubeIcon/>} label="YouTube"/>}

                                        {Number(cardData.card_content_type) === 1 &&
                                            <Chip style={{marginLeft: 12}} size="small" variant="outlined"
                                                  color="primary"
                                                  icon={<HttpIcon/>} label="Ресурс"/>}

                                        {Number(cardData.card_content_type) === 2 &&
                                            <Chip style={{marginLeft: 12}} size="small" variant="outlined"
                                                  color="default"
                                                  icon={<ImageIcon/>} label="Изображение"/>}

                                        {Number(cardData?.hard_level) == 0 &&
                                            <ArchitectureIcon style={{marginLeft: 12}} fontSize="small"/>}
                                        {Number(cardData?.hard_level) == 1 &&
                                            <FunctionsIcon style={{marginLeft: 12}} fontSize="small"/>}
                                        {Number(cardData?.hard_level) == 2 &&
                                            <SchoolIcon style={{marginLeft: 12}} fontSize="small"/>}
                                        {Number(cardData?.hard_level) == 3 &&
                                            <ScienceIcon style={{marginLeft: 12}} fontSize="small"/>}
                                        {Number(cardData?.hard_level) == 4 &&
                                            <BiotechIcon style={{marginLeft: 12}} fontSize="small"/>}
                                    </Typography>

                                    <Typography component={'span'}
                                                variant={"body1"}
                                                sx={{
                                                    display: '-webkit-box',
                                                    overflow: 'hidden',
                                                    WebkitBoxOrient: 'vertical',
                                                    WebkitLineClamp: 3
                                                }}
                                                style={{overflow: "hidden"}}>
                                        {cardData?.title.toUpperCase()}
                                    </Typography>
                                    {showTheme &&
                                        <Typography variant="body2"
                                                    sx={{
                                                        display: '-webkit-box',
                                                        overflow: 'hidden',
                                                        WebkitBoxOrient: 'vertical',
                                                        WebkitLineClamp: 1
                                                    }}>
                                            <Tooltip title={
                                                <Typography>
                                                    {"Эту карточку можно найти в теме: " + themesText}
                                                </Typography>}>
                                                <AccountTreeIcon/>
                                            </Tooltip>
                                            {themesText}
                                        </Typography>}

                                    {showAuthor &&
                                        <Typography variant="body2"
                                                    sx={{
                                                        display: '-webkit-box',
                                                        overflow: 'hidden',
                                                        WebkitBoxOrient: 'vertical',
                                                        WebkitLineClamp: 1
                                                    }}>
                                            <AccountBoxIcon/>
                                            {authorName}
                                        </Typography>}

                                </Stack>

                            </Grid>
                        </Grid>
                    </CardActionArea>
                </Link>
            </Card>
        </div>
    )

}
