import React from 'react';
import {Card, CardActionArea, Stack, Tooltip} from "@mui/material";
import CourseNavigation from "./CourseNavigation";
import ArrowNavigation from "./ArrowNavigation";
import {FILE_URL} from "../../../../settings";
import {ICourseData, ICoursePosition} from "../../../../server-layer/types/course";


interface ICourseMicroViewProps extends React.HTMLAttributes<HTMLDivElement> {
    courseData: ICourseData,
    coursePosition: ICoursePosition,
}

export default function CourseByData({courseData, coursePosition}: ICourseMicroViewProps) {
    return (
        <div style={{
            padding: 0,
            overflowX: "auto",
        }}>
            <Card style={{padding: 0, width: 500}} variant="outlined">

                <Stack direction="row" alignItems="stretch">

                    <Tooltip title={<div>{courseData.name?.toUpperCase()}</div>}>
                        <CardActionArea
                            style={{
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundImage: "url(" + FILE_URL + "/" + courseData?.cards_cardcourseimage?.image + ")"
                            }}
                        >
                            <div style={{width: 150}}/>
                        </CardActionArea>
                    </Tooltip>

                    <CourseNavigation courseData={courseData} coursePosition={coursePosition}/>
                </Stack>
            </Card>
            <ArrowNavigation coursePosition={coursePosition} courseData={courseData}/>
        </div>
    )
}
