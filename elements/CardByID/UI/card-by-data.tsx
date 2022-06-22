import React from 'react';
import {PaperProps} from "@mui/material/Paper/Paper";
import CardContentAndDescription from "./card-content-and-description";
import {ICardData} from "../../../server-layer/types/card";
import {TitleAndNavigation} from "./title-and-navigation";
import {Grid} from "@mui/material";
import CardNavigationRatingFind from "./card-navigation-rating-find-in-course";


interface ICardByIDProps extends PaperProps {
    cardData: ICardData,
    courseNavigation?: any
}

export function CardByData({cardData, courseNavigation}: ICardByIDProps) {

    return (
        <div>
            <Grid sx={{p: {md: 4, xs: 1}}}>

                <TitleAndNavigation
                    courseNavigation={courseNavigation}
                    sx={{pt: 1}}
                    cardData={cardData}
                />
                <CardContentAndDescription cardData={cardData} sx={{pt: 1}}/>
                <CardNavigationRatingFind cardData={cardData}/>

                {/*<SimilarCards card_store={cardStore} sx={{pt: 1}}/>*/}

            </Grid>
        </div>
    )
}

