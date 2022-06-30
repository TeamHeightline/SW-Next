import {Box, Paper} from "@mui/material";
import {PaperProps} from "@mui/material/Paper/Paper";
import * as I3_1 from "../img/3_1.png";
import * as I3_2 from "../img/3_2.png";
import * as I3_3 from "../img/3_3.png";
import * as I3_4 from "../img/3_4.png";
import * as I3_5 from "../img/3_5.png";
import * as I3_6 from "../img/3_6.png";
import * as I3_7 from "../img/3_7.png";
import * as I3_8 from "../img/3_8.png";
import * as I3_9 from "../img/3_9.png";
import * as I3_10 from "../img/3_10.png";
import * as I3_11 from "../img/3_11.png";
import * as I3_12 from "../img/3_12.png";

import Image from "next/image";
import {Masonry} from "@mui/lab";

interface IMasonry3Props extends PaperProps {

}

export default function Masonry3({...props}: IMasonry3Props) {
    return (
        <Paper elevation={0} {...props}>
            <Masonry columns={2} spacing={2} sx={{width: "100%"}}>
                {[I3_1, I3_2, I3_3, I3_4, I3_5, I3_6, I3_7, I3_8, I3_9, I3_10, I3_11, I3_12]
                    .map((i, index) => (
                        <Box key={index}>
                            <Image quality={1} placeholder={"blur"} loading="lazy"
                                   src={i}/>
                        </Box>
                    ))}
            </Masonry>
        </Paper>
    )
}
