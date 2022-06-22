import React from 'react';
import {IconButton} from "@mui/material";
import {observer} from "mobx-react";

import NoiseControlOffIcon from '@mui/icons-material/NoiseControlOff';
import {CourseElement, ICoursePosition} from "../../../../server-layer/types/course";
import {useRouter} from "next/router";


interface RowFragmentI {

    courseRow: any,
    activePage: number,
    courseID: number,
    rowIndex: number,
    positionData: ICoursePosition,
}

const RowFragment = observer(({courseRow, activePage, rowIndex, courseID, positionData}: RowFragmentI) => {
    // const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    // const [hoveredItemID, setHoveredItemID] = useState<number | undefined>(undefined)
    // const [hoverItemLevel, setHoveredItemLevel] = useState<number>(0)
    const router = useRouter()
    // const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    //     setAnchorEl(event.currentTarget);
    // };


    // const handlePopoverClose = () => {
    //     setAnchorEl(null);
    // };
    // const open = Boolean(anchorEl);

    // @ts-ignore
    // @ts-ignore
    return (
        <div style={{width: 610}}>
            {/*<Popover*/}
            {/*    id="mouse-over-popover"*/}
            {/*    sx={{*/}
            {/*        pointerEvents: 'none',*/}
            {/*    }}*/}
            {/*    style={{marginTop: 34 * (4 - hoverItemLevel) + 26,}}*/}
            {/*    open={open}*/}
            {/*    anchorEl={anchorEl}*/}
            {/*    anchorOrigin={{*/}
            {/*        vertical: 'top',*/}
            {/*        horizontal: 'center',*/}
            {/*    }}*/}

            {/*    onClose={handlePopoverClose}*/}
            {/*    disableRestoreFocus*/}
            {/*>*/}
            {/*    {hoveredItemID &&*/}
            {/*        <CardMicroView cardID={hoveredItemID}/>}*/}
            {/*</Popover>*/}

            {courseRow.SameLine[activePage - 1]?.CourseFragment?.map((element: CourseElement, eIndex: number) => {
                return (
                    <IconButton size="small"
                        // onMouseEnter={(e) => {
                        //     setHoveredItemID(Number(element?.CourseElement?.id))
                        //     if (CRI) {
                        //         setHoveredItemLevel(CRI)
                        //     } else {
                        //         setHoveredItemLevel(0)
                        //     }
                        //     handlePopoverOpen(e)
                        // }}
                        // onMouseLeave={handlePopoverClose}
                                edge="start"
                                key={eIndex}
                                onClick={() => {
                                    router.push("./course?" + "id=" + courseID +
                                        "&activePage=" + activePage +
                                        "&selectedPage=" + activePage +
                                        "&selectedRow=" + rowIndex +
                                        "&selectedIndex=" + eIndex)


                                }}
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
                        {/*<StopSharpIcon/>*/}
                        {/*<CircleIcon fontSize={"small"}/>*/}
                        <NoiseControlOffIcon/>
                    </IconButton>
                )
            })}
        </div>
    )
})

export default RowFragment
