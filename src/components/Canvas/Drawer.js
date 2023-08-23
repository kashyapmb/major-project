import { Box } from "@mui/material"
import React from "react"
import DrawerDesign from "./DrawerDesign"
import DrawerElements from "./DrawerElements"
import DrawerText from "./DrawerText"
import DrawerUpload from "./DrawerUpload"
import DrawerAI from "./DrawerAI"
import Download from "./DrawerDownload"

function Drawer({ selectNum }) {
	return (
		<>
			<Box sx={{ height: "100%", background: "#404040" }}>
				{selectNum == 1 && <DrawerDesign />}
				{selectNum == 2 && <DrawerElements />}
				{selectNum == 3 && <DrawerText />}
				{selectNum == 4 && <DrawerUpload />}
				{selectNum == 5 && <DrawerAI />}
				{selectNum == 6 && <Download />}
			</Box>
		</>
	)
}

export default Drawer
