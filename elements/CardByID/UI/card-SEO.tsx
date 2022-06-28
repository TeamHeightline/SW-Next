import {PaperProps} from "@mui/material/Paper/Paper";
import Head from 'next/head'
import {ICardData} from "../../../server-layer/types/card";
import {FILE_URL} from "../../../settings";

interface ICardSEOProps extends PaperProps {
    cardData: ICardData
}

export default function CardSEO({cardData, ...props}: ICardSEOProps) {
    const clearText = cardData.text.replace(/<\/?[^>]+(>|$)/g, "")
    return (
        <Head>

            {/*Метаданные для поисковика*/}
            <title>
                {cardData?.title}
            </title>
            <meta name="description" content={clearText} key="desc"/>

            {/*Метаданные для феисбука*/}

            <meta property="og:title" content={cardData?.title}/>
            <meta
                property="og:description"
                content={clearText}
            />
            <meta
                property="og:image"
                content={FILE_URL + cardData?.cards_cardimage?.image}
            />

            {/* JSON-LD данные */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: `{
                    "@context": "https://schema.org",
                    "@type": "LearningResource",
                  
                   "articleBody": "${clearText}",
                    "name": ${cardData.title},
                    "publisher": "Study Ways"
                }`
                }}
                key="product-jsonld"
            />


        </Head>
    )
}
