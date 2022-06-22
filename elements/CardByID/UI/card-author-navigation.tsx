import {observer} from "mobx-react";
import React from 'react';
import {PaperProps} from "@mui/material/Paper/Paper";
import {Button, ButtonGroup, Paper} from "@mui/material";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import {ICardData} from "../../../server-layer/types/card";
import {useRouter} from "next/router";


interface ICardAuthorNavigationProps extends PaperProps {
    cardData: ICardData

}

const CardAuthorNavigation = observer(({cardData, ...props}: ICardAuthorNavigationProps) => {
    const cardBeforeID = cardData?.card_before_id
    const cardDownID = cardData?.card_down_id
    const cardUpID = cardData?.card_up_id
    const cardNextID = cardData?.card_next_id

    const isNavigationEnabled = cardData?.is_card_use_arrow_navigation

    const isShowNavigation = isNavigationEnabled &&
        (cardNextID || cardNextID || cardDownID || cardBeforeID)

    const router = useRouter()

    const goToCard = (cardID: number) => {
        router.push("/card/" + cardID)
    }
    if (!isShowNavigation) {
        return <div/>
    }

    return (
        <Paper elevation={0} {...props}>
            <ButtonGroup size="large" color="secondary" variant="outlined" id={"author-navigation"}>
                <Button disabled={!cardBeforeID}
                        onClick={() => {
                            goToCard(cardBeforeID)
                        }}>
                    <KeyboardArrowLeftOutlinedIcon/>
                </Button>
                <Button disabled={!cardDownID}
                        onClick={() => {
                            goToCard(cardDownID)
                        }}>
                    <KeyboardArrowDownOutlinedIcon/>
                </Button>
                <Button disabled={!cardUpID}
                        onClick={() => {
                            goToCard(cardUpID)
                        }}>
                    <KeyboardArrowUpOutlinedIcon/>
                </Button>
                <Button disabled={!cardNextID}
                        onClick={() => {
                            goToCard(cardNextID)
                        }}>
                    <KeyboardArrowRightOutlinedIcon/>
                </Button>
            </ButtonGroup>
        </Paper>
    )
})

export default CardAuthorNavigation
