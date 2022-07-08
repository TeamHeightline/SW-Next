import {Button, Paper} from "@mui/material";
import {PaperProps} from "@mui/material/Paper/Paper";
import {ICardData} from "../../../server-layer/types/card";
import Link from "next/link";

interface ITestAfterCardProps extends PaperProps {
    cardData: ICardData
}

export default function TestAfterCard({cardData, ...props}: ITestAfterCardProps) {
    if (!cardData?.test_in_card_id) {
        return <div/>
    }
    return (
        <Paper elevation={0} {...props}>
            <Link href={'https://sw-university.com/card/' + cardData.id} passHref>
                <Button
                    variant={"contained"}
                >
                    Перейти в полную версию Study Ways для прохождения теста
                </Button>
            </Link>
        </Paper>
    )
}
