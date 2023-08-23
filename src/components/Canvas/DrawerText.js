import React, { useRef, useEffect, useState } from "react"
import { fabric } from "fabric"
import "fabric-history"
import html2canvas from "html2canvas"
import jsPDF from "jspdf"
import { BiSolidBackpack } from "react-icons/bi"
import { Hexagon, Pentagon, Heptagon, Octagon } from "react-shapes"
import { canvas, canvasRef } from "./CanvasContainer"
import {
	Avatar,
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	CardMedia,
	Typography,
} from "@mui/material"

function DrawerText() {
	const [isAddingLine, setIsAddingLine] = useState(false)
	const [selectedColor, setSelectedColor] = useState("#000000") // Initial color is black
	const [selectedBorderColor, setSelectedBorderColor] = useState("#000000") // Initial border color is black
	const [selectedOpacity, setSelectedOpacity] = useState(1)
	const [selectedTextColor, setSelectedTextColor] = useState("red") // Initial text color is red
	const [selectedTextSize, setSelectedTextSize] = useState(20) // Initial text size is 20
	const [isBold, setIsBold] = useState(false)
	const [isItalic, setIsItalic] = useState(false)
	const [isUnderline, setIsUnderline] = useState(false)
	const [letterSpacing, setLetterSpacing] = useState(0)
	const [lineSpacing, setLineSpacing] = useState(0)

	const addTextBox = () => {
		const text = new fabric.IText("Your text here", {
			left: 100,
			top: 100,
			fill: "red", // Set the initial text color
			fontSize: 20,
			// fontWeight: isBold ? "bold" : "normal", // Set initial bold style
			// fontStyle: isItalic ? "italic" : "normal", // Set initial italic style
			// underline: isUnderline, // Set initial underline style
			fontWeight: "normal",
			fontStyle: "normal",
			underline: false,
			charSpacing: -10,
			lineHeight: 1 + 0 / 10,
			fontFamily: "Arial", // Set the font family
		})

		canvas.current.add(text)
		canvas.current.setActiveObject(text) // Select the added text box
		canvas.current.renderAll()
	}

	const handleTextColorChange = (event) => {
		setSelectedTextColor(event.target.value)
		const activeObject = canvas.current.getActiveObject()
		if (activeObject && activeObject.isType("i-text")) {
			activeObject.set("fill", event.target.value) // Use the changed color value
			canvas.current.renderAll()
		}
	}

	const increaseTextSize = () => {
		setSelectedTextSize((prevSize) => prevSize + 2) // You can adjust the step size
		const activeObject = canvas.current.getActiveObject()
		if (activeObject && activeObject.isType("i-text")) {
			activeObject.set("fontSize", selectedTextSize + 2) // Update the font size
			canvas.current.renderAll()
		}
	}

	const decreaseTextSize = () => {
		setSelectedTextSize((prevSize) => Math.max(prevSize - 2, 2)) // Limit minimum size to 2
		const activeObject = canvas.current.getActiveObject()
		if (activeObject && activeObject.isType("i-text")) {
			activeObject.set("fontSize", Math.max(selectedTextSize - 2, 2)) // Update the font size
			canvas.current.renderAll()
		}
	}

	const toggleBold = () => {
		const activeObject = canvas.current.getActiveObject()
		if (activeObject && activeObject.isType("i-text")) {
			setIsBold(!isBold)
			activeObject.set("fontWeight", isBold ? "normal" : "bold")
			canvas.current.renderAll()
		}
	}

	const toggleItalic = () => {
		const activeObject = canvas.current.getActiveObject()
		if (activeObject && activeObject.isType("i-text")) {
			setIsItalic(!isItalic)
			activeObject.set("fontStyle", isItalic ? "normal" : "italic")
			canvas.current.renderAll()
		}
	}

	const toggleUnderline = () => {
		const activeObject = canvas.current.getActiveObject()
		if (activeObject && activeObject.isType("i-text")) {
			setIsUnderline(!isUnderline)
			activeObject.set("underline", isUnderline)
			canvas.current.renderAll()
		}
	}

	const handleLetterSpacingChange = (event) => {
		const newLetterSpacing = parseFloat(event.target.value)
		setLetterSpacing(newLetterSpacing)

		const activeObject = canvas.current.getActiveObject()
		if (activeObject && activeObject.isType("i-text")) {
			activeObject.set("charSpacing", newLetterSpacing)
			canvas.current.renderAll()
		}
	}
	const handleLineSpacingChange = (event) => {
		const newLineSpacing = parseFloat(event.target.value)
		setLineSpacing(newLineSpacing)

		const activeObject = canvas.current.getActiveObject()
		if (activeObject && activeObject.isType("i-text")) {
			activeObject.set("lineHeight", 1 + newLineSpacing / 10) // Adjust the factor as needed
			canvas.current.renderAll()
		}
	}

	const [selectedFontFamily, setSelectedFontFamily] = useState("Arial")
	const handleFontFamilyChange = (event) => {
		const newFontFamily = event.target.value
		setSelectedFontFamily(newFontFamily)

		const activeObject = canvas.current.getActiveObject()
		if (activeObject && activeObject.isType("i-text")) {
			activeObject.set("fontFamily", newFontFamily)
			canvas.current.renderAll()
		}
	}

	return (
		<>
			<Box sx={{ paddingX: "1rem" }}>
				<Box sx={{ paddingY: "0.6rem", display: "flex" }}>
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
				</Box>
				<Box sx={{ paddingY: "0.6rem", display: "flex" }}>
					<button id="addTextbox" onClick={addTextBox}>
						Add TextBox
					</button>
				</Box>
				<Box sx={{ paddingY: "0.6rem", display: "flex" }}>
        <Typography sx={{ color: "white", fontWeight: 500, mr: "1rem" }}>
						Text Color
					</Typography>
					<input
						type="color"
						id="textColorPicker"
						value={selectedTextColor}
						onChange={handleTextColorChange}
					/>
				</Box>
				<Box sx={{ paddingY: "0.6rem", display: "flex" }}>
					<button onClick={increaseTextSize}>Increase Text Size</button>
				</Box>
				<Box sx={{ paddingY: "0.6rem", display: "flex" }}>
					<button onClick={decreaseTextSize}>Decrease Text Size</button>
				</Box>
				<Box sx={{ paddingY: "0.6rem", display: "flex" }}>
					<button onClick={toggleBold}>Bold</button>
				</Box>
				<Box sx={{ paddingY: "0.6rem", display: "flex" }}>
					<button onClick={toggleItalic}>Italic</button>
				</Box>
				<Box sx={{ paddingY: "0.6rem", display: "flex" }}>
					<button onClick={toggleUnderline}>Underline</button>
				</Box>
				<Box sx={{ paddingY: "0.6rem", display: "flex" }}>
					<Typography sx={{ color: "white", fontWeight: 500, mr: "1rem" }}>
						Letter Spacing
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
				<Box sx={{ paddingY: "0.6rem", display: "flex" }}>
					<Typography sx={{ color: "white", fontWeight: 500, mr: "1rem" }}>
						Line Spacing
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
			</Box>
		</>
	)
}

export default DrawerText
