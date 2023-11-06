import { Box, Button, IconButton, Typography } from "@mui/material"
import React, { useEffect, useState } from "react"
import { PiArrowFatLineDownBold, PiArrowFatLineUpBold } from "react-icons/pi"
import { canvas } from "./CanvasContainer"

function LayerSystem() {
	const [canvasObjects, setCanvasObjects] = useState([])

	const moveUpward = (obj) => {
		console.log("Upward Clicked")
		if (obj) {
			canvas.current.setActiveObject(obj)
			canvas.current.bringForward(obj)
			canvas.current.renderAll()
		}

		const objects = canvas.current.getObjects()
		console.log(objects)
		setCanvasObjects(objects)
	}
	const moveDownward = (obj) => {
		console.log("downward Clicked")
		if (obj) {
			canvas.current.setActiveObject(obj)
			canvas.current.sendBackwards(obj)
			canvas.current.renderAll()
		}

		const objects = canvas.current.getObjects()
		console.log(objects)
		setCanvasObjects(objects)
	}

	useEffect(() => {
		const obj = canvas.current.getObjects()
		console.log(obj)
		setCanvasObjects(obj)
	}, [canvasObjects])
	return (
		<>
			<Box sx={{ px: "1rem" }}>
				<Typography sx={{ color: "white", mt: "0.6rem", userSelect: "none", }}>
					Layering System:{" "}
				</Typography>

				{/* Inserted Objects */}
				{canvasObjects.toReversed().map((value, index) => {
					return (
						<>
							<Box
								sx={{
									mt: "0.5rem",
									background: "white",
									height: "3rem",
									width: "100%",
									display: "flex",
									borderRadius: "0.4rem",
								}}
							>
								<Box
									sx={{
										mx: "0.4rem",
										my: "0.3rem",
										borderRadius: "0.4rem",
										width: "6rem",
										border: "1px solid black",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
									}}
								>
									<Typography
										sx={{
											fontSizeAdjust: "inherit",
											userSelect: "none",
											fontSize: "0.7rem",
											fontWeight: "bold",
										}}
									>
										{value.objName}
									</Typography>
								</Box>
								<Box sx={{ display: "flex", alignItems: "center" }}>
									<IconButton size="medium" onClick={() => moveUpward(value)}>
										<PiArrowFatLineUpBold size={20} color="#0198e7" />
									</IconButton>
									<IconButton size="medium" onClick={() => moveDownward(value)}>
										<PiArrowFatLineDownBold size={20} color="#0198e7" />
									</IconButton>
								</Box>
							</Box>
						</>
					)
				})}

				{/* Initial Background */}
				<Box
					sx={{
						mt: "0.5rem",
						background: "white",
						height: "3rem",
						width: "100%",
						display: "flex",
						justifyContent: "flex-end",
						pr: "0.5rem",
						borderRadius: "0.4rem",
						border: "0.4px solid #2962ff",
					}}
				>
					<Typography sx={{ fontSize: "0.7rem" }}>
						Initial Background
					</Typography>
				</Box>

			</Box>
		</>
	)
}

export default LayerSystem
