import { Box, Grid } from "@mui/material"
import React, { useEffect, useState } from "react"
import Sidebar from "./Sidebar"
import Drawer from "./Drawer"
import CanvasContainer from "./CanvasContainer"
import CanvasHeader from "./CanvasHeader"
import { canvas } from "./CanvasContainer"

function Design() {
	const [objectClicked, setObjectClicked] = useState(0)
	const [selectedColor, setSelectedColor] = useState("#000000")
	const [selectedOpacity, setSelectedOpacity] = useState(1)
	const [selectedFontSize, setSelectedFontSize] = useState(10)

	const [selectNum, setSelectNum] = useState(1)
	const [layoutSize, setLayoutSize] = useState(8)

	function updateObjectClicked(temp) {
		setObjectClicked(temp)
		console.log(objectClicked)
	}
	useEffect(() => {
		if (selectNum == 0) setLayoutSize(11.36)
		else setLayoutSize(8.56)
	}, [objectClicked, selectNum])

	return (
		<>
			<Box sx={{ paddingY: "1rem", background: "#15528b", color: "white" }}>
				Header in Canvas
			</Box>
			<Grid container component="div" sx={{ height: "100%" }}>
				<Grid item xs={0.64}>
					<Sidebar selectNum={selectNum} setSelectNum={setSelectNum} />
				</Grid>

				{selectNum != 0 && (
					<Grid item xs={2.8}>
						<Drawer selectNum={selectNum} />
					</Grid>
				)}

				<Grid item xs={layoutSize} sx={{ background: "#e6e6e6" }}>
					<CanvasHeader
						objectClicked={objectClicked}
						selectedColor={selectedColor}
						setSelectedColor={setSelectedColor}
						selectedOpacity={selectedOpacity}
						setSelectedOpacity={setSelectedOpacity}
						selectedFontSize={selectedFontSize}
						setSelectedFontSize={setSelectedFontSize}
					/>
					<Box
						sx={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							height: "84vh",
						}}
					>
						<CanvasContainer
							updateObjectClicked={updateObjectClicked}
							setSelectedColor={setSelectedColor}
							setSelectedOpacity={setSelectedOpacity}
							setSelectedFontSize={setSelectedFontSize}
						/>
					</Box>
				</Grid>
			</Grid>
		</>
	)
}

export default Design
