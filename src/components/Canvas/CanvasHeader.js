import { Box, Typography } from "@mui/material"
import React, { useEffect, useRef, useState } from "react"
import { canvas } from "./CanvasContainer"
import Button from "@mui/material/Button"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import { RxTransparencyGrid } from "react-icons/rx"
import { BiMinus } from "react-icons/bi"
import { BsPlus } from "react-icons/bs"
import { MdFormatLineSpacing } from "react-icons/md"
import { RiBold } from "react-icons/ri"
import { LuItalic, LuUnderline } from "react-icons/lu"
import { fabric } from "fabric"
import { AiOutlineBgColors } from "react-icons/ai"

function CanvasHeader({
	objectClicked,
	selectedColor,
	setSelectedColor,
	selectedOpacity,
	setSelectedOpacity,
	selectedFontSize,
	setSelectedFontSize,
	setSelectNum,
}) {
	var selectedObject

	const [selectedTextSize, setSelectedTextSize] = useState(20) // Initial text size is 20
	const [isBold, setIsBold] = useState(false)
	const [isItalic, setIsItalic] = useState(false)
	const [isUnderline, setIsUnderline] = useState(false)
	const [letterSpacing, setLetterSpacing] = useState(0)
	const [lineSpacing, setLineSpacing] = useState(0)

	const handleColorChange = (event) => {
		setSelectedColor(event.target.value)
		const activeObject = canvas.current.getActiveObject()
		if (activeObject) {
			activeObject.set("fill", selectedColor)
			activeObject.set("stroke", selectedColor)
			canvas.current.renderAll()
		}
	}
	useEffect(() => {
		if (objectClicked) {
			console.log(objectClicked)
			console.log(canvas.current.getActiveObject())
		}
		// console.log("Selected object details:")
		// console.log("Type:", selectedObject.type)
		// console.log("Left:", selectedObject.left)
		// console.log("Top:", selectedObject.top)
		// console.log("Width:", selectedObject.width)
		// console.log("Height:", selectedObject.height)
		// console.log("Fill color:", selectedObject.fill)
		// console.log("Called")
	}, [objectClicked, selectedColor, selectedFontSize])

	const handleOpacityChange = (event) => {
		const newOpacity = parseFloat(event.target.value)
		setSelectedOpacity(newOpacity)

		const activeObject = canvas.current.getActiveObject()
		if (activeObject) {
			activeObject.set("opacity", newOpacity)
			canvas.current.renderAll()
		}
	}

	const [anchorEl, setAnchorEl] = React.useState(null)
	const [anchorE2, setAnchorE2] = React.useState(null)
	const open = Boolean(anchorEl)
	const open2 = Boolean(anchorE2)
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget)
	}
	const handleClose = () => {
		setAnchorEl(null)
	}
	const handleClick2 = (event) => {
		setAnchorE2(event.currentTarget)
	}
	const handleClose2 = () => {
		setAnchorE2(null)
	}

	const toggleBold = () => {
		const activeObject = canvas.current.getActiveObject()
		if (activeObject && activeObject.isType("text")) {
			setIsBold(!isBold)
			activeObject.set("fontWeight", isBold ? "normal" : "bold")
			canvas.current.renderAll()
		}
	}

	const toggleItalic = () => {
		const activeObject = canvas.current.getActiveObject()
		if (activeObject && activeObject.isType("text")) {
			setIsItalic(!isItalic)
			activeObject.set("fontStyle", isItalic ? "normal" : "italic")
			canvas.current.renderAll()
		}
	}

	const toggleUnderline = () => {
		const activeObject = canvas.current.getActiveObject()
		if (activeObject && activeObject.isType("text")) {
			setIsUnderline(!isUnderline)
			activeObject.set("underline", isUnderline)
			canvas.current.renderAll()
		}
	}

	const handleLetterSpacingChange = (event) => {
		const newLetterSpacing = parseFloat(event.target.value)
		setLetterSpacing(newLetterSpacing)

		const activeObject = canvas.current.getActiveObject()
		if (activeObject && activeObject.isType("text")) {
			activeObject.set("charSpacing", newLetterSpacing)
			canvas.current.renderAll()
		}
	}
	const handleLineSpacingChange = (event) => {
		const newLineSpacing = parseFloat(event.target.value)
		setLineSpacing(newLineSpacing)

		const activeObject = canvas.current.getActiveObject()
		if (activeObject && activeObject.isType("text")) {
			activeObject.set("lineHeight", 1 + newLineSpacing / 10) // Adjust the factor as needed
			canvas.current.renderAll()
		}
	}

	const [selectedFontFamily, setSelectedFontFamily] = useState("Arial")
	const handleFontFamilyChange = (event) => {
		const newFontFamily = event.target.value
		setSelectedFontFamily(newFontFamily)

		const activeObject = canvas.current.getActiveObject()
		if (activeObject && activeObject.isType("text")) {
			activeObject.set("fontFamily", newFontFamily)
			canvas.current.renderAll()
		}
	}

	const handleIncrement = () => {
		const activeObject = canvas.current.getActiveObject()
		setSelectedFontSize(activeObject.fontSize + 1)
		if (activeObject && activeObject.isType("text")) {
			activeObject.set("fontSize", activeObject.fontSize + 1)
			canvas.current.renderAll()
		}
	}

	const handleDecrement = () => {
		const activeObject = canvas.current.getActiveObject()
		setSelectedFontSize(activeObject.fontSize - 1)
		if (activeObject && activeObject.isType("text")) {
			activeObject.set("fontSize", activeObject.fontSize - 1)
			canvas.current.renderAll()
		}
	}

	const textSizeChanged = (event) => {
		const activeObject = canvas.current.getActiveObject()
		var size = 1
		if (event.target.value != "NaN") size = event.target.value
		setSelectedFontSize(size)
		if (activeObject && activeObject.isType("text")) {
			activeObject.set("fontSize", size)
			canvas.current.renderAll()
		}
	}

	const defaultGradientColors = ["#000000", "#FFFFFF"]
	const [gradientColors, setGradientColors] = useState(defaultGradientColors)
	const [showGradientPicker, setShowGradientPicker] = useState(false)
	const [selectedGradientType, setSelectedGradientType] = useState("linear")

	const toggleGradientPicker = () => {
		setShowGradientPicker(!showGradientPicker)
	}
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

			let gradient
			if (selectedGradientType === "linear") {
				gradient = new fabric.Gradient({
					type: "linear",
					coords: { x1: 0, y1: 0, x2: activeObject.width, y2: 0 },
					colorStops: gradientStops,
				})
			} else if (selectedGradientType === "radial") {
				gradient = new fabric.Gradient({
					type: "radial",
					coords: { r1: 0, r2: activeObject.width / 2 },
					colorStops: gradientStops,
				})
			}

			activeObject.set("fill", gradient)
			canvas.current.renderAll()
		} else {
			alert("Select an object first")
		}
	}

	const hiddenFileInput = useRef(null)
	const handleClickGradient = (event) => {
		hiddenFileInput.current.click()
	}
	const handleChangeGradient = (event) => {
		const file = event.target.files[0]
		if (file) {
			const reader = new FileReader()
			reader.onload = (e) => {
				const image = new Image()
				image.src = e.target.result
				image.onload = () => {
					// setUploadedImages([...uploadedImages, image])
				}
			}
			reader.readAsDataURL(file)
		}
	}

	return (
		<>
			<Box sx={{ height: "3rem", background: "white" }}>
				{objectClicked === 1 && (
					<>
						<Box sx={{ display: "flex" }}>
							<Button
								id="basic-button"
								aria-controls={open ? "basic-menu" : undefined}
								aria-haspopup="true"
								aria-expanded={open ? "true" : undefined}
								onClick={handleClick}
							>
								<RxTransparencyGrid size={25} color="black" />
							</Button>
							<Menu
								id="basic-menu"
								anchorEl={anchorEl}
								open={open}
								onClose={handleClose}
								MenuListProps={{
									"aria-labelledby": "basic-button",
								}}
							>
								<MenuItem>
									<Box sx={{ display: "flex", flexDirection: "column" }}>
										<Typography>Transparency</Typography>
										<input
											type="range"
											id="opacitySlider"
											min="0"
											max="1"
											step="0.01"
											value={selectedOpacity}
											onChange={handleOpacityChange}
										/>
									</Box>
								</MenuItem>
							</Menu>

							<Box
								sx={{ height: "2rem", width: "2rem", cursor: "pointer" }}
								onClick={() => setSelectNum(7)}
							>
								<AiOutlineBgColors size={25} color="black" />
							</Box>
						</Box>
					</>
				)}
				{objectClicked === 2 && (
					<Box
						sx={{
							pl: "1rem",
							height: "3rem",
							display: "flex",
							alignItems: "center",
						}}
					>
						<select
							id="fontFamilySelect"
							value={selectedFontFamily}
							onChange={handleFontFamilyChange}
						>
							<option value="Arial">Arial</option>
							<option value="Verdana">Verdana</option>
							<option value="Times New Roman">Times New Roman</option>
							<option value="Georgia">Georgia</option>
							<option value="Courier New">Courier New</option>
							<option value="Helvetica">Helvetica</option>
							<option value="Trebuchet MS">Trebuchet MS</option>
							<option value="Arial Black">Arial Black</option>
							<option value="Comic Sans MS">Comic Sans MS</option>
							<option value="Lucida Sans Unicode">Lucida Sans Unicode</option>
							<option value="Palatino Linotype">Palatino Linotype</option>
							<option value="Tahoma">Tahoma</option>
							<option value="Impact">Impact</option>
							<option value="Book Antiqua">Book Antiqua</option>
							<option value="Arial Narrow">Arial Narrow</option>
							{/* Add more font options as needed */}
						</select>

						<Box sx={{ display: "flex" }}>
							<button onClick={handleDecrement}>
								<BiMinus />
							</button>
							<input
								className="form-control mx-1"
								value={selectedFontSize}
								onChange={textSizeChanged}
								maxLength={10}
							/>
							<button onClick={handleIncrement}>
								<BsPlus />
							</button>
						</Box>
						<Box sx={{ ml: "1rem" }}>
							<input
								type="color"
								id="colorPicker"
								value={selectedColor}
								onChange={handleColorChange}
							/>
						</Box>

						<Button
							id="basic-button"
							aria-controls={open ? "basic-menu" : undefined}
							aria-haspopup="true"
							aria-expanded={open ? "true" : undefined}
							onClick={handleClick}
						>
							<RxTransparencyGrid size={25} color="black" />
						</Button>
						<Menu
							id="basic-menu"
							anchorEl={anchorEl}
							open={open}
							onClose={handleClose}
							MenuListProps={{
								"aria-labelledby": "basic-button",
							}}
						>
							<MenuItem>
								<input
									type="range"
									id="opacitySlider"
									min="0"
									max="1"
									step="0.01"
									value={selectedOpacity}
									onChange={handleOpacityChange}
								/>
							</MenuItem>
						</Menu>

						<Button onClick={toggleBold}>
							<RiBold size={25} color="black" />
						</Button>
						<Button onClick={toggleItalic}>
							<LuItalic size={25} color="black" />
						</Button>
						<Button onClick={toggleUnderline}>
							<LuUnderline size={25} color="black" />
						</Button>

						<Button
							id="basic-button-2"
							aria-controls={open2 ? "basic-menu-2" : undefined}
							aria-haspopup="true"
							aria-expanded={open2 ? "true" : undefined}
							onClick={handleClick2}
						>
							<MdFormatLineSpacing size={25} color="black" />
						</Button>
						<Menu
							id="basic-menu-2"
							anchorEl={anchorE2}
							open={open2}
							onClose={handleClose2}
							MenuListProps={{
								"aria-labelledby": "basic-button-2",
							}}
						>
							<MenuItem sx={{ display: "flex", flexDirection: "column" }}>
								<Box>
									<Typography sx={{ fontSize: "0.7rem", fontWeight: "700" }}>
										Letter Spacing:
									</Typography>
									<input
										type="range"
										id="letterSpacingSlider"
										min="-10"
										max="1000"
										step="1"
										value={letterSpacing}
										onChange={handleLetterSpacingChange}
									/>
								</Box>
								<Box>
									<Typography sx={{ fontSize: "0.7rem", fontWeight: "700" }}>
										Line Spacing:
									</Typography>
									<input
										type="range"
										id="lineSpacingSlider"
										min="0"
										max="10"
										step="0.01"
										value={lineSpacing}
										onChange={handleLineSpacingChange}
									/>
								</Box>
							</MenuItem>
						</Menu>
					</Box>
				)}
			</Box>
		</>
	)
}

export default CanvasHeader
