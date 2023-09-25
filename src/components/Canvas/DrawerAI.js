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

function DrawerAI() {
	const [keyword, setKeyword] = useState("") // State to store user-entered keywords
	const [tagline, setTagline] = useState("") // State to store the user's tagline
	const [selectedTextColor, setSelectedTextColor] = useState("red") // Initial text color is red
	const [selectedTextSize, setSelectedTextSize] = useState(20) // Initial text size is 20
	const [isBold, setIsBold] = useState(false)
	const [isItalic, setIsItalic] = useState(false)
	const [isUnderline, setIsUnderline] = useState(false)
	const [letterSpacing, setLetterSpacing] = useState(0)
	const [lineSpacing, setLineSpacing] = useState(0)
	const [selectedFontFamily, setSelectedFontFamily] = useState("Arial")

	// useEffect(() => {
	// 	canvas.current = new fabric.Canvas(canvasRef.current, {
	// 		preserveObjectStacking: true,
	// 		width: 800,
	// 		height: 600,
	// 		backgroundColor: "#fff",
	// 		selectionBorderColor: "black",
	// 	})
	// })

	const handleKeywordChange = (event) => {
		setKeyword(event.target.value)
	}

	const addTaglineToCanvas = () => {
		const activeObject = canvas.current.getActiveObject()
		if (activeObject && tagline) {
			const text = new fabric.Textbox(tagline, {
				left: 10,
				top: 10,
				fill: selectedTextColor,
				fontSize: selectedTextSize,
				fontFamily: selectedFontFamily,
				fontWeight: isBold ? "bold" : "normal",
				fontStyle: isItalic ? "italic" : "normal",
				underline: isUnderline,
				charSpacing: letterSpacing,
				lineHeight: 1 + lineSpacing / 10,
			})

			// activeObject.set("tagline", text); // Store the tagline in the active object
			// canvas.current.add(text);
			// canvas.current.renderAll();
			canvas.current.add(text)
			canvas.current.setActiveObject(text) // Select the added text box
			canvas.current.renderAll()
		}
	}

	const fetchImageWithTagline = () => {
		if (keyword) {
			const imageURL = `https://source.unsplash.com/1280x720/?${keyword}`

			// Create an Image object
			const image = new Image()
			image.crossOrigin = "Anonymous" // To avoid CORS issues

			// Set the image source to the fetched URL
			image.src = imageURL

			// When the image is loaded, add it to the canvas and add the tagline
			image.onload = () => {
				addImageToCanvaskeyword(image)
				addTaglineToCanvas() // Add the tagline to the canvas
			}
		}
	}

	const addImageToCanvaskeyword = (image) => {
		const fabricImage = new fabric.Image(image, {
			left: 0,
			top: 0,
			scaleX: 0.2, // Set the desired scaleX (e.g., 0.5 for half size)
			scaleY: 0.2, // Set the desired scaleY (e.g., 0.5 for half size)
		})
		canvas.current.add(fabricImage)
		canvas.current.setActiveObject(fabricImage)
		canvas.current.renderAll()
	}

	return (
		<>
			<Box>
				<input
					type="text"
					placeholder="Enter keywords for image search"
					value={keyword}
					onChange={handleKeywordChange}
				/>
				<input
					type="text"
					placeholder="Enter Tagline"
					value={tagline}
					onChange={(e) => setTagline(e.target.value)}
				/>
				<button onClick={fetchImageWithTagline}>
					Fetch Image with Tagline
				</button>
			</Box>
		</>
	)
}

export default DrawerAI
