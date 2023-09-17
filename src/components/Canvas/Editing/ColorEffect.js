import { Box, Typography } from "@mui/material"
import React, { useRef, useState } from "react"
import { canvas } from "../CanvasContainer"
import { colorData } from "./colorData"
import { gradientColorData } from "./gradientColorData"
import { fabric } from "fabric"
import { gradientColorBestData } from "./gradientColorBestData"
import { AiFillCloseCircle, AiOutlinePlusCircle } from "react-icons/ai"

function ColorEffect() {
	const changeColor = (colorCode) => {
		const activeObject = canvas.current.getActiveObject()
		if (activeObject) {
			activeObject.set("fill", colorCode)
			activeObject.set("stroke", colorCode)
			canvas.current.renderAll()
		} else {
			alert("Select the object first!")
		}
	}

	const handleColorChange = (event) => {
		// setSelectedColor(event.target.value)
		const activeObject = canvas.current.getActiveObject()
		if (activeObject) {
			activeObject.set("fill", event.target.value)
			activeObject.set("stroke", event.target.value)
			canvas.current.renderAll()
		}
	}

	const hiddenFileInput = useRef(null)
	const handleClick = (event) => {
		hiddenFileInput.current.click()
	}

	const changeGradientColor = (code1, code2) => {
		const activeObject = canvas.current.getActiveObject()
		if (activeObject) {
			var gradient = new fabric.Gradient({
				type: "linear",
				coords: {
					x1: 0,
					y1: 0,
					x2: activeObject.height,
					y2: activeObject.width,
				},
				colorStops: [
					{ offset: 0, color: code1 },
					{ offset: 1, color: code2 },
				],
			})

			activeObject.set("fill", gradient)
			canvas.current.renderAll()
		} else {
			alert("Select the object first!")
		}
	}
	const changeBestGradientColor = (code1, code2) => {
		setGradientColors([code2, code1])
		const activeObject = canvas.current.getActiveObject()
		if (activeObject) {
			var gradient = new fabric.Gradient({
				type: "linear",
				coords: {
					x2: 0,
					y2: 0,
					x1: activeObject.height,
					y1: 0,
				},
				colorStops: [
					{ offset: 0, color: code1 },
					{ offset: 1, color: code2 },
				],
			})

			activeObject.set("fill", gradient)
			canvas.current.renderAll()
		} else {
			alert("Select the object first!")
		}
	}

	const defaultGradientColors = ["#000000", "#FFFFFF"]
	const [gradientColors, setGradientColors] = useState(defaultGradientColors)
	const [selectedGradientType, setSelectedGradientType] = useState("linear")
	const addGradientColor = () => {
		setGradientColors([...gradientColors, "#000000"]) // Add a default color, you can change it as needed
	}
	const removeGradientColor = (indexToRemove) => {
		// Check if the color is not one of the default colors before removing
		if (indexToRemove >= 2 && indexToRemove < gradientColors.length) {
			const updatedColors = [...gradientColors]
			updatedColors.splice(indexToRemove, 1)
			setGradientColors(updatedColors)
		}
	}

	const handleGradientTypeChange = (event) => {
		setSelectedGradientType(event.target.value)
	}

	const handleGradientColorChange = (index, color) => {
		const updatedColors = [...gradientColors]
		updatedColors[index] = color
		setGradientColors(updatedColors)
	}
	const applyGradient = () => {
		const activeObject = canvas.current.getActiveObject()
		if (activeObject) {
			const gradientStops = gradientColors.map((color, index) => ({
				color,
				offset: index / (gradientColors.length - 1),
			}))

			let gradient = new fabric.Gradient({
				type: "linear",
				coords: {
					x1: activeObject.width,
					y1: 0,
					x2: 0,
					y2: activeObject.height,
				},
				colorStops: gradientStops,
			})

			activeObject.set("fill", gradient)
			canvas.current.renderAll()
		} else {
			alert("Select an object first")
		}
	}

	// For range
	const [rangeValue, setRangeValue] = useState(0) // Initialize the range value with 50

	const handleRangeChange = (event) => {
		const activeObject = canvas.current.getActiveObject()
		if (activeObject) {
			setRangeValue(parseInt(event.target.value))

			var x1 = 0,
				x2 = 0,
				y1 = 0,
				y2 = 0

			if (rangeValue <= 90) {
				x1 = activeObject.width * (rangeValue / 90)
				y1 = 0
				x2 = activeObject.width
				y2 = activeObject.height * (rangeValue / 90)
			} else if (rangeValue <= 180) {
				x1 = activeObject.width
				y1 = activeObject.height * ((rangeValue - 90) / 90)
				x2 = activeObject.width - activeObject.width * ((rangeValue - 90) / 90)
				y2 = activeObject.height
			} else if (rangeValue <= 270) {
				x1 = activeObject.width - activeObject.width * ((rangeValue - 180) / 90)
				y1 = activeObject.height
				x2 = 0
				y2 =
					activeObject.height - activeObject.height * ((rangeValue - 180) / 90)
			} else if (rangeValue <= 360) {
				x1 = 0
				y1 =
					activeObject.height - activeObject.height * ((rangeValue - 270) / 90)
				x2 = activeObject.width * ((rangeValue - 270) / 90)
				y2 = 0
			}
			const gradientStops = gradientColors.map((color, index) => ({
				color,
				offset: index / (gradientColors.length - 1),
			}))

			let gradient = new fabric.Gradient({
				type: "linear",
				coords: {
					x1: x1,
					y1: y1,
					x2: x2,
					y2: y2,
				},
				colorStops: gradientStops,
			})

			activeObject.set("fill", gradient)
			canvas.current.renderAll()
		} else {
			alert("Select an object first")
		}
	}

	return (
		<>
			<Box sx={{ p: "1rem", height: "92vh", overflowY: "auto" }}>
				<Typography
					sx={{
						color: "white",
						mb: "0.6rem",
						fontSize: "1rem",
						fontWeight: "600",
					}}
				>
					Solid Colors
				</Typography>

				<Box sx={{ display: "flex", flexWrap: "wrap" }}>
					{colorData.map((obj, index) => {
						return (
							<>
								{/* For Color Picker */}
								{index == 0 && (
									<Box>
										<input
											type="color"
											id="colorPicker"
											onChange={handleColorChange}
											style={{
												marginRight: "0.6rem",
												marginBottom: "0.6rem",
												width: "2.3rem",
												height: "2.3rem",
												cursor: "pointer",
												borderRadius: "0.2rem",
												// display: "None", // Make the file input element invisible
											}}
										/>
									</Box>
								)}
								<Box
									sx={{
										mr: "0.6rem",
										mb: "0.6rem",
										height: "2.3rem",
										width: "2.3rem",
										background: `${obj.code}`,
										cursor: "pointer",
										borderRadius: "0.2rem",
										":hover": { border: "2px solid white" },
									}}
									onClick={() => changeColor(obj.code)}
								></Box>
							</>
						)
					})}
				</Box>

				<Typography
					sx={{
						color: "white",
						mb: "0.6rem",
						fontSize: "1rem",
						fontWeight: "600",
					}}
				>
					Gradient Colors
				</Typography>

				<Box sx={{ display: "flex", flexWrap: "wrap" }}>
					{gradientColorData.map((obj, index) => {
						return (
							<>
								<Box
									sx={{
										mr: "0.6rem",
										mb: "0.6rem",
										height: "2.3rem",
										width: "2.3rem",
										background: `linear-gradient(to right bottom, ${obj.code1}, ${obj.code2})`,
										cursor: "pointer",
										borderRadius: "0.2rem",
										":hover": { border: "2px solid white" },
									}}
									onClick={() => changeGradientColor(obj.code1, obj.code2)}
								></Box>
							</>
						)
					})}
				</Box>

				<Typography
					sx={{
						color: "white",
						mb: "0.6rem",
						fontSize: "1rem",
						fontWeight: "600",
					}}
				>
					Best Combination
				</Typography>

				<Box sx={{ display: "flex", flexWrap: "wrap" }}>
					{gradientColorBestData.map((obj, index) => {
						return (
							<>
								<Box
									sx={{
										mr: "0.6rem",
										mb: "0.6rem",
										height: "2.3rem",
										width: "2.3rem",
										background: `linear-gradient(0.75turn, ${obj.code1}, ${obj.code2})`,
										cursor: "pointer",
										borderRadius: "0.2rem",
										":hover": { border: "2px solid white" },
									}}
									onClick={() => changeBestGradientColor(obj.code1, obj.code2)}
								></Box>
							</>
						)
					})}
				</Box>

				<Typography
					sx={{
						color: "white",
						mb: "0.6rem",
						fontSize: "1rem",
						fontWeight: "600",
					}}
				>
					Customization
				</Typography>

				<div>
					<Box sx={{ display: "flex", flexWrap: "wrap" }}>
						{gradientColors.map((color, index) => (
							<Box key={index} sx={{ position: "relative" }}>
								<input
									type="color"
									value={color}
									onChange={(e) => {
										handleGradientColorChange(index, e.target.value)
									}}
									style={{
										marginRight: "0.6rem",
										marginBottom: "0.6rem",
										width: "2.3rem",
										height: "2.3rem",
										cursor: "pointer",
										borderRadius: "0.2rem",
										// display: "None", // Make the file input element invisible
									}}
								/>

								{index >= 2 && (
									// Only show remove button for non-default colors

									<Box
										sx={{
											height: "20px",
											position: "absolute",
											top: "-12px",
											right: "0px",
											":hover": {
												cursor: "pointer",
											},
										}}
										onClick={() => removeGradientColor(index)}
									>
										<AiFillCloseCircle
											size={20}
											color="white"
											background="white"
										/>
									</Box>
								)}
							</Box>
						))}
						<Box
							sx={{
								mr: "0.6rem",
								mb: "0.6rem",
								height: "2.3rem",
								width: "2.3rem",
								// background: `linear-gradient(0.75turn, ${obj.code1}, ${obj.code2})`,
								cursor: "pointer",
								borderRadius: "0.2rem",
								background: "white",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								":hover": { border: "2px solid #2b005f", fontSize: "100px" },
							}}
							onClick={addGradientColor}
						>
							<AiOutlinePlusCircle size={25} />
						</Box>
					</Box>

					{/* For range  */}
					<Typography
						sx={{
							color: "white",
							pl: "0.5rem",
							mb: "0.2rem",
							fontSize: "0.8rem",
						}}
					>
						Angle ∠ : {rangeValue}
					</Typography>
					<input
						style={{ width: "250px" }}
						type="range"
						id="rangeInput"
						min="0"
						max="359"
						step="1"
						value={rangeValue}
						onChange={handleRangeChange}
					/>
					<Box
						sx={{
							mt: "1rem",
							px: "1rem",
							py: "0.6rem",
							display: "flex",
							background: "#343536",
							color: "white",
							fontWeight: "600",
							fontSize: "1rem",
							":hover": {
								background: "#5f6160",
								transition: "0.3s",
								cursor: "pointer",
							},
						}}
						onClick={applyGradient}
					>
						Apply Gradient
					</Box>
				</div>
			</Box>
		</>
	)
}

export default ColorEffect
