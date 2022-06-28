import {AppBar, Button, Paper, Stack, Toolbar, Typography} from "@mui/material";
import {PaperProps} from "@mui/material/Paper/Paper";
import {useRouter} from "next/router";
import Box from '@mui/material/Box';
import Head from 'next/head'

interface INavbarProps extends PaperProps {

}


export default function Navbar({...props}: INavbarProps) {
    const router = useRouter()
    return (
        <Paper elevation={0} sx={{mb: 4}}>
            <div>
                <Head>
                    <title>SW Mini</title>
                </Head>
            </div>
            <Box sx={{display: {xs: 'none', sm: 'block'}}}>
                <AppBar position="fixed" enableColorOnDark>
                    <Toolbar variant="dense">
                        <Stack direction={"row"} justifyContent={"space-between"} sx={{width: "100%"}}>
                            <Typography variant="h6" sx={{color: "white"}}
                                        onClick={() => {
                                            router.push('https://sw-university.com')
                                        }}>
                                Study Ways Mini
                            </Typography>
                            <Stack direction={"row"} alignItems={"center"} justifyContent={"end"}>
                                <Typography
                                    onClick={() => {
                                        router.push("https://sw-university.com/courses")
                                    }}
                                    sx={{
                                        color: "#ffffff", textDecorationColor: "#2D3A4A",
                                        marginLeft: 25,
                                        textDecoration: "none"
                                    }}>
                                    Курсы
                                </Typography>

                                <Typography
                                    onClick={() => {
                                        router.push("https://sw-university.com/cards")
                                    }}
                                    sx={{
                                        color: "#ffffff", textDecorationColor: "#2D3A4A", ml: 2,
                                        textDecoration: "none"
                                    }}>
                                    Карточки
                                </Typography>

                                <Typography sx={{color: "white", ml: 2, mr: 2}}> | </Typography>

                                <Button sx={{ml: 2, pr: 2}} color="inherit" variant="outlined"
                                        onClick={() => {
                                            router.push("https://sw-university.com/login")
                                        }}>
                                    Войти
                                </Button>
                            </Stack>
                        </Stack>
                    </Toolbar>
                </AppBar>
            </Box>
            <Box sx={{display: {xs: 'block', sm: 'none'}, width: "100%"}}>
                <Button color={"primary"}
                        variant={"contained"}
                        fullWidth
                        onClick={() => {
                            router.push("https://sw-university.com/" + router.asPath)
                        }}>
                    Перейти в полную версию SW
                </Button>
            </Box>
        </Paper>
    )
}
