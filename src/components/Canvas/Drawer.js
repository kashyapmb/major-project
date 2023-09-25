import { Box } from "@mui/material"
import React, { useEffect } from "react"
import DrawerDesign from "./DrawerDesign"
import DrawerElements from "./DrawerElements"
import DrawerText from "./DrawerText"
import DrawerUpload from "./DrawerUpload"
import DrawerAI from "./DrawerAI"
import Download from "./DrawerDownload"
import ColorEffect from "./Editing/ColorEffect"
import Position from "./Editing/Position"
import EmojiLoad from "./EmojiLoad"

function Drawer({ selectNum, setSelectNum }) {
	return (
		<>
			<Box sx={{ height: "100%", background: "#252627" }}>
				{selectNum == 1 && <DrawerDesign />}
				{selectNum == 2 && <DrawerElements setSelectNum={setSelectNum} />}
				{selectNum == 3 && <DrawerText />}
				{selectNum == 4 && <DrawerUpload />}
				{selectNum == 5 && <DrawerAI />}
				{selectNum == 6 && <Download />}
				{selectNum == 7 && <ColorEffect />}
				{selectNum == 8 && <Position />}
				{selectNum == 9 && <EmojiLoad />}
			</Box>
		</>
	)
}

export default Drawer
