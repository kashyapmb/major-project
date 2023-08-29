import { Box } from "@mui/material"
import React from "react"
import DrawerDesign from "./DrawerDesign"
import DrawerElements from "./DrawerElements"
import DrawerText from "./DrawerText"
import DrawerUpload from "./DrawerUpload"
import DrawerAI from "./DrawerAI"
import Download from "./DrawerDownload"

function Drawer({ selectNum, setObjClicked }) {
	return (
		<>
			<Box sx={{ height: "100%", background: "#252627" }}>
				{selectNum == 1 && <DrawerDesign setObjClicked={setObjClicked} />}
				{selectNum == 2 && <DrawerElements setObjClicked={setObjClicked} />}
				{selectNum == 3 && <DrawerText setObjClicked={setObjClicked} />}
				{selectNum == 4 && <DrawerUpload setObjClicked={setObjClicked} />}
				{selectNum == 5 && <DrawerAI setObjClicked={setObjClicked} />}
				{selectNum == 6 && <Download setObjClicked={setObjClicked} />}
			</Box>
		</>
	)
}

export default Drawer
