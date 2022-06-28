import {Typography} from "@mui/material";
import {PaperProps} from "@mui/material/Paper/Paper";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineItem from "@mui/lab/TimelineItem";
import PeopleIcon from '@mui/icons-material/People';

interface IStep4Props extends PaperProps {

}

export default function Step5({...props}: IStep4Props) {
    return (
        <TimelineItem>
            <TimelineSeparator>
                <TimelineConnector sx={{bgcolor: 'primary.main'}}/>
                <TimelineDot color="primary">
                    <PeopleIcon/>
                </TimelineDot>
                {/*<TimelineConnector/>*/}
            </TimelineSeparator>
            <TimelineContent sx={{py: '12px', px: 2}}>
                <Typography variant="h6" component="span">
                    Настоящее время
                </Typography>
                <Typography>
                    Сейчас происходит добавление нового функционала, мы окончательно определились с стеком: React
                    MUI
                    Redux, Node Prisma и мини проект на Next js. Теперь мы ищем программистов и тестировщиков в нашу
                    команду
                </Typography>

            </TimelineContent>
        </TimelineItem>
    )
}
