import React from 'react';
import {IconButton} from "@mui/material";
import {observer} from "mobx-react";

import NoiseControlOffIcon from '@mui/icons-material/NoiseControlOff';
import {CourseElement, ICoursePosition} from "../../../../server-layer/types/course";
import Link from "next/link";


interface RowFragmentI {

    courseRow: any,
    activePage: number,
    courseID: number,
    rowIndex: number,
    positionData: ICoursePosition,
}

const RowFragment = observer(({courseRow, activePage, rowIndex, courseID, positionData}: RowFragmentI) => {
    return (
        <div style={{width: 610}}>
            {courseRow.SameLine[activePage - 1]?.CourseFragment?.map((element: CourseElement, eIndex: number) => {
                return (
                    <Link
                        key={eIndex}
                        href={"/course?" + "id=" + courseID +
                            "&activePage=" + activePage +
                            "&selectedPage=" + activePage +
                            "&selectedRow=" + rowIndex +
                            "&selectedIndex=" + eIndex}
                        passHref>
                        <IconButton size="small"
                                    edge="start"
                                    style={{opacity: !element?.CourseElement?.id ? "0%" : '100%'}}
                                    disabled={!element?.CourseElement?.id}
                                    color={
                                        positionData &&
                                        positionData.selectedRow == rowIndex &&
                                        positionData.selectedPage == activePage &&
                                        positionData.selectedIndex == eIndex ?
                                            "secondary" :
                                            "primary"}
                        >
                            <NoiseControlOffIcon/>
                        </IconButton>
                    </Link>
                )
            })}
        </div>
    )
})

export default RowFragment
