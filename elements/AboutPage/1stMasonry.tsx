import {Box, Paper} from "@mui/material";
import {PaperProps} from "@mui/material/Paper/Paper";
import Image from "next/image";
import * as firstTestImage from "../img/TestingImg.png";
import * as firstTestEditorImage from "../img/createUserTestImg.png";
import * as firstTestEditorPageImage from "../img/ModernTestEditor.png";
import {Masonry} from "@mui/lab";


interface IFirstGenerationMasonryProps extends PaperProps {

}

export default function Masonry1({...props}: IFirstGenerationMasonryProps) {
    return (
        <Paper elevation={0} {...props}>
            <Masonry columns={2} spacing={2} sx={{width: "100%"}}>
                {[firstTestImage, firstTestEditorImage, firstTestEditorPageImage].map((i, index) => (
                    <Box key={index + "m1"}>
                        <Image quality={50} placeholder={"blur"} src={i}/>
                    </Box>
                ))}
            </Masonry>
        </Paper>)
}

