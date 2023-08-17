import { Box } from "@mui/material"
import React from "react"

function Drawer({ selectNum }) {
	return (
		<>
			<Box sx={{ height: "100%", background: "#404040" }}>
				{selectNum == 1 && <>Design</>}
				{selectNum == 2 && <>Elements</>}
				{selectNum == 3 && <>Text</>}
				{selectNum == 4 && <>Upload</>}
				{selectNum == 5 && <>AI</>}
			</Box>
		</>
	)
}

export default Drawer
