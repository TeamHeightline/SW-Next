import {createTheme} from "@mui/material/styles";
import {makeAutoObservable} from "mobx";
import {Property} from "csstype";


class ThemeStore {
    constructor() {
        makeAutoObservable(this)
        // autorun(() => this.setModeToLocalStorage())
    }

    mode: "dark" | "light" = this.getMode

    get getMode(): "dark" | "light" {
        return "dark"
    }

    setModeToLocalStorage(mode: "dark" | "light") {
        localStorage.setItem("themeMode", mode)
        this.mode = mode
        // window.location.reload();
    }

    changeMode = () => {
        if (this.isLightTheme) {
            this.setModeToLocalStorage("dark")
        } else {
            this.setModeToLocalStorage("light")
        }
    }

    get isLightTheme() {
        return this.mode === "light"
    }

    get lightBackgroundColor() {
        if (this.isLightTheme) {
            return "#fff"
        } else {
            return "#0A1929"
        }
    }

    get backgroundColor(): Property.BackgroundColor | undefined {
        if (this.isLightTheme) {
            return "#fff"
        } else {
            return "#0A1929"
        }
    }

    get textColor() {
        if (this.isLightTheme) {
            return "rgba(0, 0, 0, 0.87)"
        } else {
            return "#ffffff"
        }
    }

    get secondaryColor() {
        if (this.isLightTheme) {
            return "rgba(0, 0, 0, 0.6)"
        } else {
            return this.textColor
        }
    }

    get theme() {
        const theme = createTheme({
            palette: {
                mode: this.mode,
                background: {
                    default: this.backgroundColor,
                    paper: this.backgroundColor
                },
                primary: {
                    main: "#2196f3",
                    contrastText: this.textColor,
                },
                secondary: {
                    main: '#f50057',
                },
                text: {
                    primary: this.textColor,
                    secondary: this.secondaryColor,

                    disabled: this.textColor
                },

            },
            typography: {
                allVariants: {
                    color: this.textColor
                },
            },
            // components: {
            //     MuiCssBaseline: {
            //         styleOverrides: {
            //             body: {
            //                 backgroundColor: this.backgroundColor,
            //             }
            //         },
            //     },
            // },
        })
        return (theme)
    }
}

const ThemeStoreObject = new ThemeStore()
export default ThemeStoreObject
