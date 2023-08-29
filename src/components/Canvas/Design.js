import { Box, Grid } from "@mui/material"
import React, { useEffect, useState } from "react"
import Sidebar from "./Sidebar"
import Drawer from "./Drawer"
import CanvasContainer from "./CanvasContainer"
import CanvasHeader from "./CanvasHeader"

function Design() {
	const [selectNum, setSelectNum] = useState(1)
	const [objClicked, setObjClicked] = useState(false)
	const [layoutSize, setLayoutSize] = useState(8)
	useEffect(() => {
		if (selectNum == 0) setLayoutSize(11.2)
		else setLayoutSize(8)
	}, [selectNum,objClicked])

	return (
		<>
			<Box sx={{ paddingY: "1rem", background: "blue", color: "white" }}>
				Header in Canvas
			</Box>
			<Grid container component="div" sx={{ height: "100%" }}>
				<Grid item xs={0.8}>
					<Sidebar selectNum={selectNum} setSelectNum={setSelectNum} />
				</Grid>

				{selectNum != 0 && (
					<Grid item xs={3.2}>
						<Drawer selectNum={selectNum} setObjClicked={setObjClicked} />
					</Grid>
				)}

				<Grid item xs={layoutSize} sx={{background:'#e6e6e6'}}>
					<CanvasHeader objClicked={objClicked} />
					<Box
						sx={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							paddingTop: "1.5rem",
						}}
					>
						<CanvasContainer />
					</Box>
				</Grid>
				{/* </Box> */}
			</Grid>
		</>
	)
}

export default Design
