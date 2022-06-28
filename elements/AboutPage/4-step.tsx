import {Typography} from "@mui/material";
import {PaperProps} from "@mui/material/Paper/Paper";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineDot from "@mui/lab/TimelineDot";
import RepeatIcon from "@mui/icons-material/Repeat";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineItem from "@mui/lab/TimelineItem";


interface IStep4Props extends PaperProps {

}

export default function Step4({...props}: IStep4Props) {
    return (
        <TimelineItem>
            <TimelineSeparator>
                <TimelineConnector sx={{bgcolor: 'secondary.main'}}/>
                <TimelineDot color="secondary">
                    <RepeatIcon/>
                </TimelineDot>
                <TimelineConnector sx={{bgcolor: 'secondary.main'}}/>
            </TimelineSeparator>
            <TimelineContent sx={{py: '12px', px: 2}}>
                <Typography variant="h6" component="span">
                    После карточек и курсов
                </Typography>
                <Typography>
                    Начался процесс доведения всего до ума, многое было переписано с
                    нуля, мы перешли на темную тему, сменился технологический стек
                </Typography>

            </TimelineContent>
        </TimelineItem>
    )
}
