import {Typography} from "@mui/material";
import {PaperProps} from "@mui/material/Paper/Paper";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineItem from "@mui/lab/TimelineItem";
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

interface IStep3Props extends PaperProps {

}

export default function Step3({...props}: IStep3Props) {
    return (
        <TimelineItem>
            <TimelineSeparator>
                <TimelineConnector/>
                <TimelineDot color="primary" variant="outlined">
                    <AppRegistrationIcon/>
                </TimelineDot>
                <TimelineConnector/>
            </TimelineSeparator>
            <TimelineContent sx={{py: '12px', px: 2}}>
                <Typography variant="h6" component="span">
                    Не только тесты
                </Typography>
                <Typography>
                    После того, как были сделаны тесты, начался процесс создания всего, что нужно для карточек
                </Typography>
            </TimelineContent>
        </TimelineItem>
    )
}
