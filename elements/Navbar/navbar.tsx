import {AppBar, Button, Paper, Stack, Toolbar, Typography} from "@mui/material";
import Box from '@mui/material/Box';
import Head from 'next/head'
import Link from "next/link";


export default function Navbar() {
    return (
        <Paper elevation={0} sx={{mb: 4}}>
            <div>
                <Head>
                    <title>SW Mini</title>
                    <meta name="theme-color" content="#0A1929"/>
                </Head>
            </div>
            <Box sx={{display: {xs: 'none', sm: 'block'}}}>
                <AppBar position="fixed" enableColorOnDark>
                    <Toolbar variant="dense">
                        <Stack direction={"row"} justifyContent={"space-between"} sx={{width: "100%"}}>
                            <Link href={"https://sw-university.com"} passHref>
                                <Button variant="text" sx={{color: "white", fontSize: '1rem'}}>
                                    Study Ways Mini
                                </Button>
                            </Link>
                            <Stack direction={"row"} alignItems={"center"} justifyContent={"end"}>
                                <Link href={"https://sw-university.com/courses"} passHref>
                                    <Button variant={"text"}
                                            sx={{color: "#ffffff", ml: 2}}>
                                        Курсы
                                    </Button>
                                </Link>

                                <Link href={"https://sw-university.com/cards"} passHref>
                                    <Button variant={"text"}
                                            sx={{color: "#ffffff", ml: 2}}>
                                        Карточки
                                    </Button>
                                </Link>

                                <Typography sx={{color: "white", ml: 2, mr: 2}}> | </Typography>

                                <Link href={"https://sw-university.com/login"} passHref>
                                    <Button sx={{ml: 2, pr: 2}} color="inherit" variant="outlined">
                                        Войти
                                    </Button>
                                </Link>
                            </Stack>
                        </Stack>
                    </Toolbar>
                </AppBar>
            </Box>
            <Box sx={{display: {xs: 'block', sm: 'none'}, width: "100%"}}>
                <Link href={"https://sw-university.com/"} passHref>
                    <Button color={"primary"} variant={"contained"} fullWidth>
                        Перейти в полную версию SW
                    </Button>
                </Link>
            </Box>
        </Paper>
    )
}
