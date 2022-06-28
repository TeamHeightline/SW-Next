import {Typography} from "@mui/material";
import {PaperProps} from "@mui/material/Paper/Paper";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineDot from "@mui/lab/TimelineDot";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineItem from "@mui/lab/TimelineItem";

interface IStep2Props extends PaperProps {

}

export default function Step2({...props}: IStep2Props) {
    return (
        <TimelineItem>
            <TimelineOppositeContent
                sx={{m: 'auto 0'}}
                variant="body2"
                color="text.secondary"
            >
                15 февраля 2021
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineConnector/>
                <TimelineDot color="primary">
                    <QuestionMarkIcon/>
                </TimelineDot>
                <TimelineConnector/>
            </TimelineSeparator>
            <TimelineContent sx={{py: '12px', px: 2}}>
                <Typography variant="h6" component="span">
                    Первая версия тестов
                </Typography>
                <Typography>
                    Первая версия была сделана на bootstrap и представляла собой простую таблицу с чекбоксами
                    и кнопкой для проверки ответов.
                </Typography>
            </TimelineContent>
        </TimelineItem>
    )
}
