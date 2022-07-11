import {PaperProps} from "@mui/material/Paper/Paper";
import Head from 'next/head'
import {ICardData} from "../../server-layer/types/card";
import {FILE_URL} from "../../settings";
import {useAmp} from "next/amp";

interface ICardSEOProps extends PaperProps {
    cardData: ICardData
}

export default function CardSEO({cardData, ...props}: ICardSEOProps) {
    const isAMP = useAmp()
    const clearText = cardData?.text?.replace(/<\/?[^>]+(>|$)/g, "") || ""
    return (
        <Head>

            {/*Метаданные для поисковика*/}
            <title>
                {cardData?.title}
            </title>
            <meta name="description" content={clearText} key="desc"/>
            <meta name="keywords" content={cardData?.tag_field}/>
            <meta charSet="UTF-8"/>

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

            {/*JSON-LD данные */}

            {/*{!isAMP &&*/}
            {/*    <script*/}
            {/*        type="application/ld+json"*/}
            {/*        dangerouslySetInnerHTML={{*/}
            {/*            __html: `{*/}
            {/*        "@context": "https://schema.org",*/}
            {/*        "@type": "LearningResource",*/}
            {/*      */}
            {/*       "articleBody": "${clearText}",*/}
            {/*        "name": ${cardData?.title},*/}
            {/*        "publisher": "Study Ways"*/}
            {/*    }`*/}
            {/*        }}*/}
            {/*        key="product-jsonld"*/}
            {/*    />*/}
            {/*}*/}


        </Head>
    )
}
