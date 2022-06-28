import {Typography} from "@mui/material";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineDot from "@mui/lab/TimelineDot";
import CreateIcon from "@mui/icons-material/Create";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineItem from "@mui/lab/TimelineItem";


export default function Step1() {
    return (
        <TimelineItem>
            <TimelineOppositeContent
                sx={{m: 'auto 0'}}
                align="right"
                variant="body2"
                color="text.secondary"
            >
                6 февраля 2021
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineConnector/>
                <TimelineDot variant="outlined">
                    <CreateIcon/>
                </TimelineDot>
                <TimelineConnector/>
            </TimelineSeparator>
            <TimelineContent sx={{py: '12px', px: 2}}>
                <Typography variant="h6" component="span">
                    Начало проекта
                </Typography>
                <Typography>Все началось с идеи о том, что нужно создать систему тестов для
                    студентов</Typography>
            </TimelineContent>
        </TimelineItem>
    )
}
