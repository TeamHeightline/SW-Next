import {Chip, Paper} from "@mui/material";
import {PaperProps} from "@mui/material/Paper/Paper";

interface IAuthorProps extends PaperProps {

}

export default function Author({...props}: IAuthorProps) {
    return (
        <Paper elevation={0} {...props}>
            <Chip variant="outlined" size="small" label="teamheightline@mail.ru" color="secondary"/>
        </Paper>
    )
}
