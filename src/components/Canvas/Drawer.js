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
import BackgroundColorEffect from "./Editing/BackgroundColorEffect"
import DrawerDrawing from "./DrawerDrawing"

function Drawer({ selectNum, setSelectNum, setEmojiApiResponce, emojiApiResponce }) {
	return (
		<>
			<Box sx={{ height: "100%", background: "#252627" }}>
				{selectNum == 1 && <DrawerDesign />}
				{selectNum == 2 && <DrawerElements setSelectNum={setSelectNum}  setEmojiApiResponce={setEmojiApiResponce} />}
				{selectNum == 3 && <DrawerText />}
				{selectNum == 4 && <DrawerUpload />}
				{selectNum == 5 && <DrawerAI />}
				{selectNum == 6 && <Download />}
				{selectNum == 11 && <DrawerDrawing />}
				{selectNum == 7 && <ColorEffect />}
				{selectNum == 10 && <BackgroundColorEffect />}
				{selectNum == 8 && <Position />}
				{selectNum == 9 && <EmojiLoad emojiApiResponce={emojiApiResponce} />}
			</Box>
		</>
	)
}

export default Drawer
