import axiosClient from "../../server-layer/config";
import {ICourseData, ICoursePosition} from "../../server-layer/types/course";
import {ICardData} from "../../server-layer/types/card";
import CourseByData from "../../elements/CourseByData/V2/UI/CourseMicroView";
import {CardByData} from "../../elements/CardByID/UI/card-by-data";

export async function getServerSideProps(context: any) {
    const coursePosition = context.query

    const courseAndCardData = await axiosClient.get('/course/with-card-data/position', {
        params: coursePosition
    })
        .then(res => res.data)


    return {
        props: {
            ...courseAndCardData,
            coursePosition
        }
    }
}

interface ICourseByPosition {
    courseData: ICourseData,
    coursePosition: ICoursePosition
    cardData: ICardData
}

export default function CourseByPosition({courseData, cardData, coursePosition}: ICourseByPosition) {
    if (!cardData) {
        return (
            <div>
                <CourseByData courseData={courseData} coursePosition={coursePosition}/>
            </div>
        )
    }
    return (
        <div>
            <CardByData cardData={cardData}
                        courseNavigation={
                            <CourseByData
                                courseData={courseData}
                                coursePosition={coursePosition}/>
                        }/>
        </div>

    )
}
