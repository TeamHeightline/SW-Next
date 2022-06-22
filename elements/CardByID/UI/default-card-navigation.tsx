import React from 'react';
import {Button, ButtonGroup, Stack} from "@mui/material";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import {ICardData} from "../../../server-layer/types/card";
import {useRouter} from "next/router";

interface IDefaultCardNavigationProps extends React.HTMLAttributes<HTMLDivElement> {
    cardData: ICardData
}

export default function DefaultCardNavigation({cardData, ...props}: IDefaultCardNavigationProps) {
    const router = useRouter()

    const card_id = Number(cardData?.id)
    const goToCard = (stepUpID: number) => {
        router.push("/card/" + (card_id + stepUpID))
    }
    const openCardForEdit = () => {
        router.push("/editor/card2/card/" + card_id)
    }
    return (
        <div {...props}>
            <Stack
                direction={"row"}
                justifyContent="space-between"
                alignItems={"center"}>
                <ButtonGroup
                    size="large"
                    color="primary"
                    aria-label="group"
                    id={"btn-group-for-card-page"}>
                    <Button onClick={() => {
                        goToCard(-1)
                    }}>
                        <KeyboardArrowLeftOutlinedIcon/>
                    </Button>
                    <Button onClick={() => {
                        goToCard(1)
                    }}>
                        <KeyboardArrowRightOutlinedIcon/>
                    </Button>
                </ButtonGroup>

            </Stack>
        </div>
    )
}
