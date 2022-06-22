import {Button, Paper} from "@mui/material";
import {PaperProps} from "@mui/material/Paper/Paper";
import {useRouter} from "next/router";
import {ICardData} from "../../../server-layer/types/card";

interface ITestAfterCardProps extends PaperProps {
    cardData: ICardData
}

export default function TestAfterCard({cardData, ...props}: ITestAfterCardProps) {
    const router = useRouter()
    if (!cardData.test_in_card_id) {
        return <div/>
    }
    return (
        <Paper elevation={0} {...props}>
            <Button
                variant={"contained"}
                onClick={() => router.push('https://sw-university.com/card/' + cardData.id)}>
                Перейти в полную версию Study Ways для прохождения теста
            </Button>
        </Paper>
    )
}
