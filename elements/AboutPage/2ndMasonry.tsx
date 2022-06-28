import {Box, Paper} from "@mui/material";
import {PaperProps} from "@mui/material/Paper/Paper";
import * as I2_1 from "../img/2_1.png";
import * as I2_2 from "../img/2_2.png";
import * as I2_3 from "../img/2_3.png";
import * as I2_4 from "../img/2_4.png";
import * as I2_5 from "../img/2_5.png";
import {Masonry} from "@mui/lab";
import Image from "next/image";

interface I2ndMasonryProps extends PaperProps {

}


export default function Masonry2({...props}: I2ndMasonryProps) {
    return (
        <Paper elevation={0} {...props}>
            <Masonry columns={2} spacing={2} sx={{width: "100%"}}>
                {[I2_1, I2_2, I2_3, I2_4, I2_5]
                    .map((i, index) => (
                        <Box>
                            <Image quality={2} placeholder={"blur"} loading="lazy"
                                   key={index} src={i}/>
                        </Box>
                    ))}
            </Masonry>
        </Paper>
    )
}
