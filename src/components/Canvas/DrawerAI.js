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
	const [isAddingLine, setIsAddingLine] = useState(false)
	const [selectedColor, setSelectedColor] = useState("#000000") // Initial color is black
	const [selectedBorderColor, setSelectedBorderColor] = useState("#000000") // Initial border color is black
	const [selectedTextColor, setSelectedTextColor] = useState("red") // Initial text color is red
	const [selectedTextSize, setSelectedTextSize] = useState(20) // Initial text size is 20
	const [isBold, setIsBold] = useState(false)
	const [isItalic, setIsItalic] = useState(false)
	const [isUnderline, setIsUnderline] = useState(false)
	const [letterSpacing, setLetterSpacing] = useState(0)
	const [lineSpacing, setLineSpacing] = useState(0)

	const [selectedOpacity, setSelectedOpacity] = useState(1)
	const handleOpacityChange = (event) => {
		const newOpacity = parseFloat(event.target.value)
		setSelectedOpacity(newOpacity)

		const activeObject = canvas.current.getActiveObject()
		if (activeObject) {
			activeObject.set("opacity", newOpacity)
			canvas.current.renderAll()
		}
	}
	const handleColorChange = (event) => {
		setSelectedColor(event.target.value)
		const activeObject = canvas.current.getActiveObject()
		if (activeObject) {
			activeObject.set("fill", selectedColor)
			activeObject.set("stroke", selectedColor)
			canvas.current.renderAll()
		}
	}
	const applyBorder = () => {
		const activeObject = canvas.current.getActiveObject()
		if (activeObject) {
			activeObject.set({
				stroke: selectedBorderColor,
				strokeWidth: 2, // You can adjust the border width
			})
			canvas.current.renderAll()
		}
	}
	const handleBorderColorChange = (event) => {
		setSelectedBorderColor(event.target.value)
		const activeObject = canvas.current.getActiveObject()
		if (activeObject && activeObject.stroke) {
			activeObject.set("stroke", selectedBorderColor)
			canvas.current.renderAll()
		}
	}
	const bringForward = () => {
		const activeObject = canvas.current.getActiveObject()
		if (activeObject) {
			canvas.current.bringForward(activeObject)
			canvas.current.renderAll()
		}
	}

	const sendBackward = () => {
		const activeObject = canvas.current.getActiveObject()
		if (activeObject) {
			canvas.current.sendBackwards(activeObject)
			canvas.current.renderAll()
		}
	}
	return (
		<>
			<Box>
				<Box sx={{ padding: "1rem", display: "flex" }}>
					<Typography sx={{ color: "white", fontWeight: 500, mr: "1rem" }}>
						Opacity
					</Typography>
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
				<Box sx={{ padding: "1rem", display: "flex" }}>
					<Typography sx={{ color: "white", fontWeight: 500, mr: "1rem" }}>
						Color
					</Typography>
					<input
						type="color"
						id="colorPicker"
						value={selectedColor}
						onChange={handleColorChange}
					/>
				</Box>
				<Box sx={{ padding: "1rem", display: "flex" }}>
					<button id="applySolidBorder" onClick={applyBorder}>
						Apply Solid Border
					</button>
				</Box>
				<Box sx={{ padding: "1rem", display: "flex" }}>
					<Typography sx={{ color: "white", fontWeight: 500, mr: "1rem" }}>
						Border Color
					</Typography>
					<input
						type="color"
						id="borderColorPicker"
						value={selectedBorderColor}
						onChange={handleBorderColorChange}
					/>
				</Box>
				<Box sx={{ padding: "1rem", display: "flex" }}>
					<button id="bringForward" onClick={bringForward}>
						Bring Forward
					</button>
				</Box>
				<Box sx={{ padding: "1rem", display: "flex" }}>
					<button id="sendBackward" onClick={sendBackward}>
						Send Backward
					</button>
				</Box>
			</Box>
		</>
	)
}

export default DrawerAI
