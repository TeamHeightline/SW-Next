import {Chip, Paper, Stack} from "@mui/material";
import {PaperProps} from "@mui/material/Paper/Paper";
import Link from "next/link";

interface INextPaginationProps extends PaperProps {
    maxPage: number,
    currentPage: number,
    pageSrc: string,
}

export default function NextPagination({maxPage, currentPage, pageSrc, ...props}: INextPaginationProps) {
    const pages = Array.from({length: maxPage}, (_, i) => i + 1)
    return (
        <Paper elevation={0} {...props}>
            <Stack justifyContent={"center"} alignItems={"center"}>
                <Stack direction={"row"} spacing={1}>
                    {pages.map((page, index) => {
                        return (
                            <Link key={index} href={pageSrc + page} passHref>
                                <Chip
                                    onClick={() => void (0)}
                                    variant={page == currentPage ? "filled" : "outlined"}
                                    color={page == currentPage ? "primary" : "default"}
                                    label={String(page)}/>
                            </Link>
                        )
                    })}
                </Stack>
            </Stack>
        </Paper>
    )
}
