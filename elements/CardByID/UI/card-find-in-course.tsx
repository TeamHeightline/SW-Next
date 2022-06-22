import React from 'react';
import {PaperProps} from "@mui/material/Paper/Paper";
import {Alert, AlertTitle, Button, Paper, Stack, Typography} from "@mui/material";
import {ICardData} from "../../../server-layer/types/card";
import {useRouter} from "next/router";


interface ICardFindInCourseProps extends PaperProps {
    cardData: ICardData
}

export default function CardFindInCourse({cardData, ...props}: ICardFindInCourseProps) {
    const router = useRouter()
    const cardNOTFindInCourses = cardData?.findInCourse?.length == 0

    if (cardNOTFindInCourses) {
        return <div/>
    }

    return (
        <Paper elevation={0} {...props}>
            <Alert severity="success" variant="outlined" sx={{maxWidth: 550}}>
                <AlertTitle>
                    {cardData?.findInCourse?.length == 1 ?
                        "Этот ресурс встречается в курсе:" :
                        "Этот ресурс встречается в курсах:"}
                </AlertTitle>
                {cardData?.findInCourse?.map((course, index) => {
                    return (
                        <Stack direction={"column"} key={index}>
                            <Stack direction={{xs: "column-reverse", md: "row"}}
                                   alignItems={{md: "center", xs: "start"}}
                                   justifyContent={"start"}>
                                <Button title={"Перейти"}
                                        color={"info"}
                                        onClick={() => {
                                            router.push("/course?" + "id=" + course.course_id +
                                                "&activePage=" + course.position.activePage +
                                                "&selectedPage=" + course.position.selectedPage +
                                                "&selectedRow=" + course.position.selectedRow +
                                                "&selectedIndex=" + course.position.selectedIndex)

                                        }}>
                                    Перейти
                                </Button>
                                <Typography variant={"body2"}>{course.course_name}</Typography>
                            </Stack>
                        </Stack>)
                })}
            </Alert>
        </Paper>
    )
}
