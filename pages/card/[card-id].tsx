import {Paper} from "@mui/material";
import {PaperProps} from "@mui/material/Paper/Paper";
import axiosClient from "../../server-layer/config";
import {useRouter} from "next/router";
import {CardByData} from "../../elements/CardByID/UI/card-by-data";
import {ICardData} from "../../server-layer/types/card";

interface ICardByURLProps extends PaperProps {
    cardData: ICardData
}

export async function getStaticProps(context: any) {
    const cardID = context.params['card-id'];
    const cardData = await axiosClient.get('/card/data/' + cardID)
        .then(res => res.data)
        .catch(err => console.log(err));

    return {
        props: {
            cardData,
        },
    };
}

export async function getStaticPaths() {
    const allCardIDArray: number[] = await axiosClient.get("/card/all/id")
        .then(res => res.data)
    return {
        paths: allCardIDArray.map((cardID) => {
            return ({params: {"card-id": String(cardID)}})
        }),
        fallback: true
    }
}

export default function CardByURL({cardData}: ICardByURLProps) {
    return (
        <CardByData cardData={cardData}/>
    )
}
