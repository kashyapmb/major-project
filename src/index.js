import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import "./index.css"
import App from "./App"
import { Box, CssBaseline, ThemeProvider } from "@mui/material"
import { createMuiTheme } from "@mui/material/styles"

const theme = createMuiTheme({
	typography: {
		button: {
			textTransform: "none",
		},
	},
})

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<App />
			</ThemeProvider>
		</BrowserRouter>
	</React.StrictMode>
)
