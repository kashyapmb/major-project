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

	const addTextBoxHeading = () => {
		const text = new fabric.IText("Add a Heading", {
			textBackgroundColor: "transparent",
			left: 20,
			top: 20,
			fill: "black", // Set the initial text color
			fontSize: 60,
			type: "text",
			// fontWeight: isBold ? "bold" : "normal", // Set initial bold style
			// fontStyle: isItalic ? "italic" : "normal", // Set initial italic style
			// underline: isUnderline, // Set initial underline style
			fontWeight: "600",
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
	const addTextBoxSubHeading = () => {
		const text = new fabric.IText("Add a Subheading", {
			textBackgroundColor: "transparent",
			left: 20,
			top: 80,
			fill: "black", // Set the initial text color
			fontSize: 40,
			type: "text",
			// fontWeight: isBold ? "bold" : "normal", // Set initial bold style
			// fontStyle: isItalic ? "italic" : "normal", // Set initial italic style
			// underline: isUnderline, // Set initial underline style
			fontWeight: "500",
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
	const addTextBoxBodyText = () => {
		const text = new fabric.IText("Add a body Text", {
			textBackgroundColor: "transparent",
			left: 20,
			top: 125,
			fill: "black", // Set the initial text color
			fontSize: 20,
			type: "text",
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

	const addTextBoxTheme1 = () => {
		const text = new fabric.IText("Add a Theme 1 Text", {
			left: 20,
			top: 170,
			fill: "red", // Set the text color to red
			strokeWidth: 1, // Adjust the border width as needed
			fontSize: 24, // Adjust the font size as needed
			type: "text",
			fontWeight: "normal",
			fontStyle: "normal",
			underline: false,
			charSpacing: -10,
			lineHeight: 1 + 0 / 10,
			fontFamily: "Arial", // Set the font family to Arial
			shadow: {
				color: "red", // Glowing color
				blur: 10, // Glowing blur radius
				offsetX: 0,
				offsetY: 0,
			},
		})

		canvas.current.add(text)
		canvas.current.setActiveObject(text) // Select the added text box
		canvas.current.renderAll()
	}

	const addTextBoxTheme2 = () => {
		const text = new fabric.IText("Add Theme 2 Text", {
			left: 20,
			top: 220,
			fill: "#fff6a9", // Set the text color to blue
			strokeWidth: 1, // Adjust the border width as needed
			fontSize: 70, // Adjust the font size as needed
			type: "text",
			fontWeight: "bold", // You can adjust the font weight
			charSpacing: 5, // You can adjust the character spacing
			lineHeight: 1.5, // Adjust the line height as needed
			fontFamily: "Sacramento", // Set the font family Sacramento
			backgroundColor: "black",
			shadow: {
				color: "#fff6a9", // Glowing color
				blur: 5, // Glowing blur radius
				offsetX: 0,
				offsetY: 0,
			},
		})

		canvas.current.add(text)
		canvas.current.setActiveObject(text) // Select the added text box
		canvas.current.renderAll()
	}

	const addTextBoxTheme3 = () => {
		const text = new fabric.IText("Add Theme 3 Text", {
			left: 20,
			top: 220,
			fill: "#03fc2c", // Set the text color to blue
			strokeWidth: 1, // Adjust the border width as needed
			fontSize: 70, // Adjust the font size as needed
			type: "text",
			fontFamily: "Monoton", // Set the font family Sacramento
		})

		canvas.current.add(text)
		canvas.current.setActiveObject(text) // Select the added text box
		canvas.current.renderAll()
	}

	const addTextBoxTheme4 = () => {
		const text = new fabric.IText("Add Theme 4 Text", {
			left: 20,
			top: 220,
			fontWeight: "bold",
			fill: "#3b075c", // Set the text color to blue
			strokeWidth: 1, // Adjust the border width as needed
			fontSize: 60, // Adjust the font size as needed
			type: "text",
			fontFamily: "Orbitron", // Set the font family

			stroke: "#e312af",
		})

		canvas.current.add(text)
		canvas.current.setActiveObject(text) // Select the added text box
		canvas.current.renderAll()
	}
	const addTextBoxTheme5 = () => {
		const text = new fabric.IText("Add Theme 5 Text", {
			left: 20,
			top: 220,
			fill: "#e31948", // Set the text color to blue
			strokeWidth: 1, // Adjust the border width as needed
			fontSize: 60, // Adjust the font size as needed
			type: "text",
			fontFamily: "Teko", // Set the font family
			fontStyle: "italic",
		})

		canvas.current.add(text)
		canvas.current.setActiveObject(text) // Select the added text box
		canvas.current.renderAll()
	}
	const addTextBoxTheme6 = () => {
		const text = new fabric.IText("Add Theme 6 Text", {
			left: 20,
			top: 270,
			fill: "transparent", // Set the text fill color to transparent
			strokeWidth: 3, // Set the stroke width
			stroke: "white", // Set the stroke color to white
			fontSize: 60, // Adjust the font size as needed
			type: "text",
			fontFamily: "Raleway", // Use the imported Google Font
			shadow: {
				color: "#ff1f8f", // Shadow color
				blur: 8, // Shadow blur radius
				offsetX: 8, // Shadow offset on X-axis
				offsetY: 8, // Shadow offset on Y-axis
			},
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
			<Box sx={{ p: "1rem" }}>
				<Typography sx={{ color: "white" }}>Default Text Styles</Typography>
				<Box
					sx={{
						padding: "0.6rem",
						display: "flex",
						background: "#343536",
						mt: "0.3rem",
						color: "white",
						fontWeight: "600",
						fontSize: "1.5rem",
						borderRadius: "0.3rem",
						":hover": {
							background: "#5f6160",
							transition: "0.3s",
							cursor: "pointer",
						},
					}}
					onClick={addTextBoxHeading}
				>
					Add a Heading
				</Box>
				<Box
					sx={{
						padding: "0.6rem",
						display: "flex",
						background: "#343536",
						mt: "0.7rem",
						color: "white",
						fontWeight: "500",
						fontSize: "1.2rem",
						borderRadius: "0.3rem",
						":hover": {
							background: "#5f6160",
							transition: "0.3s",
							cursor: "pointer",
						},
					}}
					onClick={addTextBoxSubHeading}
				>
					Add a subheading
				</Box>
				<Box
					sx={{
						padding: "0.6rem",
						display: "flex",
						background: "#343536",
						mt: "0.7rem",
						color: "white",
						fontWeight: "400",
						fontSize: "1rem",
						borderRadius: "0.3rem",
						":hover": {
							background: "#5f6160",
							transition: "0.3s",
							cursor: "pointer",
						},
					}}
					onClick={addTextBoxBodyText}
				>
					Add a little body text
				</Box>

				<Box
					sx={{
						padding: "0.6rem",
						display: "flex",
						background: "#343536",
						mt: "0.7rem",
						color: "white",
						fontWeight: "400",
						fontSize: "1rem",
						":hover": {
							background: "#5f6160",
							transition: "0.3s",
							cursor: "pointer",
						},
					}}
					onClick={addTextBoxTheme1}
				>
					Add a little style1 text
				</Box>
				<Box
					sx={{
						padding: "0.6rem",
						display: "flex",
						background: "#343536",
						mt: "0.7rem",
						color: "white",
						fontWeight: "400",
						fontSize: "1rem",
						":hover": {
							background: "#5f6160",
							transition: "0.3s",
							cursor: "pointer",
						},
					}}
					onClick={addTextBoxTheme2}
				>
					Add a little style2 text
				</Box>
				<Box
					sx={{
						padding: "0.6rem",
						display: "flex",
						background: "#343536",
						mt: "0.7rem",
						color: "white",
						fontWeight: "400",
						fontSize: "1rem",
						":hover": {
							background: "#5f6160",
							transition: "0.3s",
							cursor: "pointer",
						},
					}}
					onClick={addTextBoxTheme3}
				>
					Add a little style3 text
				</Box>
				<Box
					sx={{
						padding: "0.6rem",
						display: "flex",
						background: "#343536",
						mt: "0.7rem",
						color: "white",
						fontWeight: "400",
						fontSize: "1rem",
						":hover": {
							background: "#5f6160",
							transition: "0.3s",
							cursor: "pointer",
						},
					}}
					onClick={addTextBoxTheme4}
				>
					Add a little style4 text
				</Box>
				<Box
					sx={{
						padding: "0.6rem",
						display: "flex",
						background: "#343536",
						mt: "0.7rem",
						color: "white",
						fontWeight: "400",
						fontSize: "1rem",
						":hover": {
							background: "#5f6160",
							transition: "0.3s",
							cursor: "pointer",
						},
					}}
					onClick={addTextBoxTheme5}
				>
					Add a little style5 text
				</Box>
				<Box
					sx={{
						padding: "0.6rem",
						display: "flex",
						background: "#343536",
						mt: "0.7rem",
						color: "white",
						fontWeight: "400",
						fontSize: "1rem",
						":hover": {
							background: "#5f6160",
							transition: "0.3s",
							cursor: "pointer",
						},
					}}
					onClick={addTextBoxTheme6}
				>
					Add a little style6 text
				</Box>
			</Box>
		</>
	)
}

export default DrawerText
