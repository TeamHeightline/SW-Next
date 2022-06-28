import {Grid, Paper, Typography} from "@mui/material";
import {PaperProps} from "@mui/material/Paper/Paper";
import Story from "./story";
import Author from "./author";

interface IAboutPageProps extends PaperProps {

}

export default function AboutPage({...props}: IAboutPageProps) {
    return (
        <Paper elevation={0} {...props}>
            <Grid container justifyContent={"center"}>
                <Grid item xs={12} md={4}>
                    <Typography variant="h2" textAlign={"center"} sx={{color: "primary.main", mt: 8}}>
                        Study Ways
                    </Typography>
                    <Typography variant="body1" textAlign={"center"}>
                        Проект кафедры физики ЛЭТИ.
                        Нашей целью является создание образовательной среды, которая дополнит очное обучение и
                        позволит
                        студентам и преподавателям проще взаимодействовать. Мы хотим предоставить всем студентам
                        равные
                        возможности
                        по получению информации и оценки знаний.
                    </Typography>
                    <Author/>

                </Grid>
            </Grid>
            <Grid container justifyContent={"center"}>
                <Grid item xs={12} md={6}>
                    <Story/>
                </Grid>
            </Grid>
        </Paper>
    )
}
