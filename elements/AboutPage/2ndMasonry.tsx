import {Box, Paper} from "@mui/material";
import {PaperProps} from "@mui/material/Paper/Paper";
import * as cardEditor from "../img/cardEditor.png";
import * as courseEditor from "../img/courseEditor.png";
import * as themeEditor from "../img/themeEditors.png";
import * as whiteCourses from "../img/whiteCourses.jpeg";
import * as blackCourses from "../img/blackCourses.jpeg";
import {Masonry} from "@mui/lab";
import Image from "next/image";

interface I2ndMasonryProps extends PaperProps {

}


export default function Masonry2({...props}: I2ndMasonryProps) {
    return (
        <Paper elevation={0} {...props}>
            <Masonry columns={2} spacing={2} sx={{width: "100%"}}>
                {[cardEditor, courseEditor, themeEditor, whiteCourses, blackCourses]
                    .map((i, index) => (
                        <Box>
                            <Image key={index} src={i} width={1200} height={800}/>
                        </Box>
                    ))}
            </Masonry>
        </Paper>
    )
}
