import {PaperProps} from "@mui/material/Paper/Paper";
import axiosClient from "../../server-layer/config";
import {ICardDataWithTheme} from "../../server-layer/types/card";
import CardMicroView from "../../elements/CardMicroByData/card-micro-by-data";
import {Grid} from "@mui/material";
import NextPagination from "../../elements/Pagination/next-paginetion";

// @ts-ignore
export async function getStaticProps({params}) {
    const allCardIDArray: number[] = await axiosClient.get("/card/all/id")
        .then(res => res.data)
    const numberOfPages = Math.ceil(allCardIDArray.length / 200) || 1

    const page = 1
    const allCardData = await axiosClient.get('/card/mini/data/all', {
        params: {
            page
        }
    })
        .then(res => res.data)
        .catch(err => console.log(err));

    return {
        props: {
            allCardData,
            page,
            maxPage: numberOfPages
        },
    };
}

interface IMainCardPageProps extends PaperProps {
    allCardData: ICardDataWithTheme[],
    page: number,
    maxPage: number
}


export default function MainCardPage({allCardData, page, maxPage}: IMainCardPageProps) {
    return (
        <div>
            <Grid container spacing={2} sx={{mt: 6}}>
                {allCardData?.map((cardData, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                        <CardMicroView cardData={cardData}/>
                    </Grid>
                ))}
            </Grid>
            <NextPagination maxPage={maxPage} currentPage={page} pageSrc="/card/page/"/>

        </div>
    )
}
