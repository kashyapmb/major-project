import { Box, Typography } from "@mui/material"
import React, { useEffect, useState } from "react"
import { fabric } from "fabric"
import { canvas } from "../CanvasContainer"

function Position() {
	function setAlignment(arg1, arg2) {
		const activeObject = canvas.current.getActiveObject()
		var top, left
		if (arg1 == "top") {
			top = 0
		} else if (arg1 == "center") {
			top = canvas.current.height / 2 - activeObject.height / 2
		} else {
			top = canvas.current.height - activeObject.height
		}
		if (arg2 == "left") {
			left = 0
		} else if (arg2 == "center") {
			left = canvas.current.width / 2 - activeObject.width / 2
		} else {
			left = canvas.current.width - activeObject.width
		}
		if (activeObject) {
			activeObject.set({
				top: top,
				left: left,
			})
			canvas.current.renderAll()
		} else {
			alert("Select the object first!")
		}
	}

	const [objectWidth, setObjectWidth] = useState(100)
	const [objectHeight, setObjectHeight] = useState(100)

	const widthChanged = (event) => {
		const activeObject = canvas.current.getActiveObject()
		if (event.target.value == "NaN") setObjectWidth(1)
		else setObjectWidth(parseInt(event.target.value))
		if (activeObject) {
			activeObject.set({
				width: parseInt(event.target.value),
			})
			canvas.current.renderAll()
		}
	}
	const heightChanged = (event) => {
		const activeObject = canvas.current.getActiveObject()
		if (event.target.value == "NaN") setObjectHeight(1)
		else setObjectHeight(parseInt(event.target.value))
		if (activeObject) {
			activeObject.set({
				height: parseInt(event.target.value),
			})
			canvas.current.renderAll()
		}
	}

	const [objectScaleX, setObjectScaleX] = useState(1.0)
	const [objectScaleY, setObjectScaleY] = useState(1.0)
	const scaleXChanged = (event) => {
		const activeObject = canvas.current.getActiveObject()
		if (event.target.value == "NaN") setObjectScaleX(1)
		else setObjectScaleX(parseInt(event.target.value))
		if (activeObject) {
			activeObject.set({
				scaleX: parseInt(event.target.value),
			})
			canvas.current.renderAll()
		}
	}
	const scaleYChanged = (event) => {
		const activeObject = canvas.current.getActiveObject()
		if (event.target.value == "NaN") setObjectScaleY(1)
		else setObjectScaleY(parseInt(event.target.value))
		if (activeObject) {
			activeObject.set({
				scaleY: parseInt(event.target.value),
			})
			canvas.current.renderAll()
		}
	}

	useEffect(() => {}, [objectWidth, objectHeight])

	return (
		<>
			<Box sx={{ color: "white", pt: "0.7rem" }}>
				<Typography sx={{ fontSize: "1rem", ml: "0.8rem", mb: "0.5rem" }}>
					Align to Top
				</Typography>
				<Box
					sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
				>
					<Box
						sx={{
							px: "0.4rem",
							py: "0.2rem",
							width: "6rem",
							m: "0.3rem",

							border: "2px solid white",
							":hover": { cursor: "pointer" },
						}}
						onClick={() => setAlignment("top", "left")}
					>
						<Typography sx={{ fontSize: "0.7rem" }}>Top-Left</Typography>
					</Box>
					<Box
						sx={{
							px: "0.4rem",
							py: "0.2rem",
							width: "6rem",
							m: "0.3rem",

							border: "2px solid white",
							":hover": { cursor: "pointer" },
						}}
						onClick={() => setAlignment("top", "center")}
					>
						<Typography sx={{ fontSize: "0.7rem" }}>Top-Center</Typography>
					</Box>
					<Box
						sx={{
							px: "0.4rem",
							py: "0.2rem",
							width: "6rem",
							m: "0.3rem",

							border: "2px solid white",
							":hover": { cursor: "pointer" },
						}}
						onClick={() => setAlignment("top", "right")}
					>
						<Typography sx={{ fontSize: "0.7rem" }}>Top-Right</Typography>
					</Box>
					<Box
						sx={{
							px: "0.4rem",
							py: "0.2rem",
							width: "6rem",
							m: "0.3rem",

							border: "2px solid white",
							":hover": { cursor: "pointer" },
						}}
						onClick={() => setAlignment("center", "left")}
					>
						<Typography sx={{ fontSize: "0.7rem" }}>Center-Left</Typography>
					</Box>
					<Box
						sx={{
							px: "0.4rem",
							py: "0.2rem",
							width: "6rem",
							m: "0.3rem",

							border: "2px solid white",
							":hover": { cursor: "pointer" },
						}}
						onClick={() => setAlignment("center", "center")}
					>
						<Typography sx={{ fontSize: "0.7rem" }}>Center-Center</Typography>
					</Box>
					<Box
						sx={{
							px: "0.4rem",
							py: "0.2rem",
							width: "6rem",
							m: "0.3rem",

							border: "2px solid white",
							":hover": { cursor: "pointer" },
						}}
						onClick={() => setAlignment("center", "right")}
					>
						<Typography sx={{ fontSize: "0.7rem" }}>Center-Right</Typography>
					</Box>
					<Box
						sx={{
							px: "0.4rem",
							py: "0.2rem",
							width: "6rem",
							m: "0.3rem",

							border: "2px solid white",
							":hover": { cursor: "pointer" },
						}}
						onClick={() => setAlignment("bottom", "left")}
					>
						<Typography sx={{ fontSize: "0.7rem" }}>Bottom-Left</Typography>
					</Box>
					<Box
						sx={{
							px: "0.4rem",
							py: "0.2rem",
							width: "6rem",
							m: "0.3rem",

							border: "2px solid white",
							":hover": { cursor: "pointer" },
						}}
						onClick={() => setAlignment("bottom", "center")}
					>
						<Typography sx={{ fontSize: "0.7rem" }}>Bottom-Center</Typography>
					</Box>
					<Box
						sx={{
							px: "0.4rem",
							py: "0.2rem",
							width: "6rem",
							m: "0.3rem",

							border: "2px solid white",
							":hover": { cursor: "pointer" },
						}}
						onClick={() => setAlignment("bottom", "right")}
					>
						<Typography sx={{ fontSize: "0.7rem" }}>Bottom-Right</Typography>
					</Box>
				</Box>
				<Typography
					sx={{ fontSize: "1rem", ml: "0.8rem", mb: "0.5rem", mt: "0.5rem" }}
				>
					Advanced
				</Typography>
				<Box sx={{ display: "flex", flexWrap: "wrap" }}>
					<Box
						sx={{
							px: "0.4rem",
							py: "0.2rem",
							width: "6rem",
							m: "0.3rem",

							border: "2px solid white",
							":hover": { cursor: "pointer" },
						}}
					>
						<Typography
							sx={{
								fontSize: "1rem",
								ml: "0.8rem",
								mb: "0.5rem",
								mt: "0.5rem",
							}}
						>
							Width
						</Typography>
						<input value={objectWidth} onChange={widthChanged} size={1} />
					</Box>
					<Box
						sx={{
							px: "0.4rem",
							py: "0.2rem",
							width: "6rem",
							m: "0.3rem",

							border: "2px solid white",
							":hover": { cursor: "pointer" },
						}}
					>
						<Typography
							sx={{
								fontSize: "1rem",
								ml: "0.8rem",
								mb: "0.5rem",
								mt: "0.5rem",
							}}
						>
							Height
						</Typography>
						<input value={objectHeight} onChange={heightChanged} size={1} />
					</Box>
				</Box>
				<Box sx={{ display: "flex", flexWrap: "wrap" }}>
					<Box
						sx={{
							px: "0.4rem",
							py: "0.2rem",
							width: "6rem",
							m: "0.3rem",

							border: "2px solid white",
							":hover": { cursor: "pointer" },
						}}
					>
						<Typography
							sx={{
								fontSize: "1rem",
								ml: "0.8rem",
								mb: "0.5rem",
								mt: "0.5rem",
							}}
						>
							ScaleX
						</Typography>
						<input value={objectScaleX} onChange={scaleXChanged} size={1} />
					</Box>
					<Box
						sx={{
							px: "0.4rem",
							py: "0.2rem",
							width: "6rem",
							m: "0.3rem",

							border: "2px solid white",
							":hover": { cursor: "pointer" },
						}}
					>
						<Typography
							sx={{
								fontSize: "1rem",
								ml: "0.8rem",
								mb: "0.5rem",
								mt: "0.5rem",
							}}
						>
							ScaleY
						</Typography>
						<input value={objectScaleY} onChange={scaleYChanged} size={1} />
					</Box>
				</Box>
			</Box>
		</>
	)
}

export default Position
