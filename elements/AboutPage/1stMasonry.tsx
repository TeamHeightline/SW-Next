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
                    <Box>
                        <Image quality={50} placeholder={"blur"} key={index + "m1"} src={i} width={1200} height={800}/>
                    </Box>
                ))}
            </Masonry>
        </Paper>)
}

