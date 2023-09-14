import { Box, Typography } from "@mui/material"
import React, { useEffect, useState } from "react"
import { canvas } from "./CanvasContainer"
import Button from "@mui/material/Button"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import { RxTransparencyGrid } from "react-icons/rx"
import { BiMinus } from "react-icons/bi"
import { BsPlus } from "react-icons/bs"

function CanvasHeader({
	objectClicked,
	selectedColor,
	setSelectedColor,
	selectedOpacity,
	setSelectedOpacity,
	selectedFontSize,
	setSelectedFontSize,
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
	const open = Boolean(anchorEl)
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget)
	}
	const handleClose = () => {
		setAnchorEl(null)
	}

	const increaseTextSize = () => {
		setSelectedTextSize((prevSize) => prevSize + 2) // You can adjust the step size
		const activeObject = canvas.current.getActiveObject()
		if (activeObject && activeObject.isType("text")) {
			activeObject.set("fontSize", selectedTextSize + 2) // Update the font size
			canvas.current.renderAll()
		}
	}

	const decreaseTextSize = () => {
		setSelectedTextSize((prevSize) => Math.max(prevSize - 2, 2)) // Limit minimum size to 2
		const activeObject = canvas.current.getActiveObject()
		if (activeObject && activeObject.isType("text")) {
			activeObject.set("fontSize", Math.max(selectedTextSize - 2, 2)) // Update the font size
			canvas.current.renderAll()
		}
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
	return (
		<>
			<Box sx={{ height: "3em", background: "white" }}>
				{objectClicked === 1 && (
					<>
						<input
							type="color"
							id="colorPicker"
							value={selectedColor}
							onChange={handleColorChange}
						/>

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
					</>
				)}
				{objectClicked === 2 && (
					<Box sx={{px:'1rem'}}>
						<Box sx={{ display: "flex", flexDirection:'row' }}>
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
								<div>{selectedFontSize}</div>
								<button onClick={handleIncrement}>
									<BsPlus />
								</button>
							</Box>

							<input
								type="color"
								id="colorPicker"
								value={selectedColor}
								onChange={handleColorChange}
							/>
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

							<button onClick={increaseTextSize}>Increase Text Size</button>

							<button onClick={decreaseTextSize}>Decrease Text Size</button>

							<button onClick={toggleBold}>Bold</button>

							<button onClick={toggleItalic}>Italic</button>

							<button onClick={toggleUnderline}>Underline</button>

							<input
								type="range"
								id="letterSpacingSlider"
								min="-10"
								max="1000"
								step="1"
								value={letterSpacing}
								onChange={handleLetterSpacingChange}
							/>

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
					</Box>
				)}
			</Box>
		</>
	)
}

export default CanvasHeader
