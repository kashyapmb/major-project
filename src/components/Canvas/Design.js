import { Box, Grid } from "@mui/material"
import React, { useEffect, useState } from "react"
import Sidebar from "./Sidebar"
import Drawer from "./Drawer"
import CanvasContainer from "./CanvasContainer"
import CanvasHeader from "./CanvasHeader"

function Design() {
	const [selectNum, setSelectNum] = useState(1)
	useEffect(() => {}, [selectNum])

	return (
		<>
			<Box sx={{ paddingY: "1rem", background: "blue", color: "white" }}>
				Header in Canvas
			</Box>
			<Grid container component="div" sx={{ height: "100%" }}>
				<Grid item xs={0.8}>
					<Sidebar selectNum={selectNum} setSelectNum={setSelectNum} />
				</Grid>

				<Grid item xs={3.2}>
					<Drawer selectNum={selectNum} />
				</Grid>
				<Grid item xs={8}>
					<CanvasHeader />
					<Box
						sx={{
							display: "flex",
							justifyContent: "center",
							paddingTop: "1.5rem",
						}}
					>
						<CanvasContainer />
					</Box>
				</Grid>
			</Grid>
		</>
	)
}

export default Design
