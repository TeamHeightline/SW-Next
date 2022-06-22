import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Paper, Typography} from "@mui/material";
import axiosClient from "../server-layer/config";
import {ICardData} from "../server-layer/types/card";
import {CardByData} from "../elements/CardByID/UI/card-by-data";

export async function getServerSideProps() {
    const cardData = await axiosClient.get('/card/data/2238')
        .then(res => res.data)
        .catch(err => console.log(err));

    return {
        props: {
            cardData,
        },
    };
}

export default function Card({cardData}: { cardData: ICardData }) {
    return (
        <CardByData cardData={cardData}/>
    )
}

