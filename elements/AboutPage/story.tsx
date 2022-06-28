import Timeline from "@mui/lab/Timeline";
import Step1 from "./1-step";
import Step2 from "./2-step";
import Step3 from "./3-step";
import Step4 from "./4-step";
import Masonry1 from "./1stMasonry";
import Masonry2 from "./2ndMasonry";
import Step5 from "./5-step";
import Masonry3 from "./3rdMasonry";


export default function Story() {
    return (
        <Timeline>
            <Step1/>
            <Step2/>
            <Masonry1/>

            <Step3/>
            <Masonry2/>
            <Step4/>
            <Masonry3/>

            <Step5/>
        </Timeline>
    )
}
