import {observer} from "mobx-react";
import React from 'react';
import {Button, ButtonGroup} from "@mui/material";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import {useRouter} from "next/router";
import {ICourseData, ICoursePosition} from "../../../../server-layer/types/course";

interface IArrowNavigationProps extends React.HTMLAttributes<HTMLDivElement> {
    coursePosition: ICoursePosition,
    courseData: ICourseData
}

const ArrowNavigation = observer(({courseData, coursePosition, ...props}: IArrowNavigationProps) => {
    const router = useRouter()

    const goToCardByArrow = (card_arrow: "Back" | "Down" | "Up" | "Next") => {
        let new_position = coursePosition
        if (card_arrow === "Back") {
            new_position.selectedIndex -= 1
        }
        if (card_arrow === "Down") {
            new_position.selectedRow += 1
        }
        if (card_arrow === "Up") {
            new_position.selectedRow -= 1
        }
        if (card_arrow === "Next") {
            new_position.selectedIndex += 1
        }
        router.push("./course?" + "id=" + courseData.id +
            "&activePage=" + new_position.activePage +
            "&selectedPage=" + new_position.activePage +
            "&selectedRow=" + new_position.selectedRow +
            "&selectedIndex=" + new_position.selectedIndex)

    }
    return (
        <div {...props}>
            <ButtonGroup id={"course-btn-group"} size="large" color="primary" aria-label="group" className="mt-2">
                <Button
                    onClick={() => goToCardByArrow("Back")}
                    disabled={Number(coursePosition.selectedIndex) <= 0}
                >
                    <KeyboardArrowLeftOutlinedIcon/>
                </Button>
                <Button
                    onClick={() => goToCardByArrow("Down")}
                    disabled={Number(coursePosition.selectedRow) >= 3}
                >
                    <KeyboardArrowDownOutlinedIcon/>
                </Button>
                <Button
                    onClick={() => goToCardByArrow("Up")}
                    disabled={Number(coursePosition.selectedRow) < 0}
                >
                    <KeyboardArrowUpOutlinedIcon/>
                </Button>
                <Button
                    onClick={() => goToCardByArrow("Next")}
                    disabled={Number(coursePosition.selectedIndex) >= 9}
                >
                    <KeyboardArrowRightOutlinedIcon/>
                </Button>
            </ButtonGroup>
        </div>
    )
})

export default ArrowNavigation
