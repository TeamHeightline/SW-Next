import {Button, Paper} from "@mui/material";
import {PaperProps} from "@mui/material/Paper/Paper";
import Link from "next/link";

interface IGoToCoursePageProps extends PaperProps {

}

export default function GoToCardPage({...props}: IGoToCoursePageProps) {
    return (
        <Paper elevation={0} {...props}>
            <Link href={"/card"} passHref>
                <Button variant={"outlined"}>
                    К карточкам
                </Button>
            </Link>
        </Paper>
    )
}
