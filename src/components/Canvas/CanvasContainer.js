import React, { useRef, useEffect, useState } from "react"
import { fabric } from "fabric"
import "fabric-history"
import html2canvas from "html2canvas"
import jsPDF from "jspdf"
import { BiSolidBackpack } from "react-icons/bi"
import { Hexagon, Pentagon, Heptagon, Octagon } from "react-shapes"

const CanvasContainer = () => {
	const canvasRef = useRef(null)
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

	const canvas = useRef(null)

	useEffect(() => {
		canvas.current = new fabric.Canvas(canvasRef.current, {
			width: 800,
			height: 600,
			backgroundColor: "#fff",
			selectionBorderColor: "black",
		})

		// Enable history management for undo/redo
		canvas.current.uniScaleTransform = true
		canvas.current.uniScaleKey = "shiftKey"
		canvas.current.uniScaleTransform = true

		// Enable selection for resizing
		canvas.current.selection = true

		// Attach button click events to add shapes
		const addRectangleButton = document.getElementById("addRectangle")
		const addCircleButton = document.getElementById("addCircle")
		const addLineButton = document.getElementById("addLine")
		const colorPicker = document.getElementById("colorPicker")
		const bringForwardButton = document.getElementById("bringForward")
		const sendBackwardButton = document.getElementById("sendBackward")
		const applySolidBorderButton = document.getElementById("applySolidBorder")

		addRectangleButton.addEventListener("click", addRectangle)
		addCircleButton.addEventListener("click", addCircle)
		addLineButton.addEventListener("click", addLine)
		colorPicker.addEventListener("change", handleColorChange)
		bringForwardButton.addEventListener("click", bringForward)
		sendBackwardButton.addEventListener("click", sendBackward)
		// Add event listener for the Delete key
		window.addEventListener("keydown", handleDelete)

		return () => {
			// Cleanup if necessary
			canvas.current.dispose()
			addRectangleButton.removeEventListener("click", addRectangle)
			addCircleButton.removeEventListener("click", addCircle)
			addLineButton.removeEventListener("click", addLine)
			colorPicker.removeEventListener("change", handleColorChange)
			bringForwardButton.removeEventListener("click", bringForward)
			sendBackwardButton.removeEventListener("click", sendBackward)
			window.removeEventListener("keydown", handleDelete)
		}
	}, [])

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

	const handleOpacityChange = (event) => {
		const newOpacity = parseFloat(event.target.value)
		setSelectedOpacity(newOpacity)

		const activeObject = canvas.current.getActiveObject()
		if (activeObject) {
			activeObject.set("opacity", newOpacity)
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

	const addHeart = () => {
		const heart = new fabric.Path(
			"M50 85 A20 20 0 0 1 90 85 Q100 130 50 175 Q0 130 10 85 A20 20 0 0 1 50 85",
			{
				left: 700,
				top: 50,
				fill: selectedColor,
			}
		)

		canvas.current.add(heart)
		canvas.current.setActiveObject(heart)
		canvas.current.renderAll()
	}

	const addUpArrow = () => {
		const upArrowPath = new fabric.Path(
			"M0 20 L20 0 L40 20 L30 20 L30 40 L10 40 L10 20",
			{
				left: 200,
				top: 50,
				fill: selectedColor,
			}
		)
		canvas.current.add(upArrowPath)
		canvas.current.setActiveObject(upArrowPath)
		canvas.current.renderAll()
	}

	const addDownArrow = () => {
		const downArrowPath = new fabric.Path(
			"M20 0 L0 20 L10 20 L10 70 L30 70 L30 20 L40 20",
			{
				left: 200,
				top: 300,
				fill: selectedColor,
			}
		)
		canvas.current.add(downArrowPath)
		canvas.current.setActiveObject(downArrowPath)
		canvas.current.renderAll()
	}

	const addRightArrow = () => {
		const rightArrowPath = new fabric.Path("M0 20 L20 0 L50 20 L20 40 Z", {
			left: 350,
			top: 200,
			fill: selectedColor,
		})
		canvas.current.add(rightArrowPath)
		canvas.current.setActiveObject(rightArrowPath)
		canvas.current.renderAll()
	}

	const addLeftArrow = () => {
		const leftArrowPath = new fabric.Path(
			"M20 0 L0 20 L20 40 L20 30 L40 30 L40 10 L20 10",
			{
				left: 400,
				top: 50,
				fill: selectedColor,
			}
		)
		canvas.current.add(leftArrowPath)
		canvas.current.setActiveObject(leftArrowPath)
		canvas.current.renderAll()
	}

	const addTrapezoidal = () => {
		const trapezoidalPath = new fabric.Path("M0 0 L40 0 L30 40 L10 40 Z", {
			left: 600,
			top: 50,
			fill: selectedColor,
		})
		canvas.current.add(trapezoidalPath)
		canvas.current.setActiveObject(trapezoidalPath)
		canvas.current.renderAll()
	}

	const addRectangle = () => {
		const rect = new fabric.Rect({
			left: 100,
			top: 100,
			fill: selectedColor,
			width: 100,
			height: 100,
		})
		canvas.current.add(rect)
		canvas.current.setActiveObject(rect) // Select the added rectangle
		canvas.current.renderAll()
	}

	const addCircle = () => {
		const circle = new fabric.Circle({
			left: 200,
			top: 200,
			fill: selectedColor,
			radius: 50,
		})
		canvas.current.add(circle)
		canvas.current.setActiveObject(circle) // Select the added circle
		canvas.current.renderAll()
	}

	const addTriangle = () => {
		const triangle = new fabric.Triangle({
			left: 300,
			top: 300,
			fill: selectedColor,
			width: 100,
			height: 100,
		})
		canvas.current.add(triangle)
		canvas.current.setActiveObject(triangle)
		canvas.current.renderAll()
	}

	const addDiamond = () => {
		const diamond = new fabric.Polygon(
			[
				{ x: 350, y: 350 },
				{ x: 400, y: 300 },
				{ x: 450, y: 350 },
				{ x: 400, y: 400 },
			],
			{
				left: 375,
				top: 325,
				fill: selectedColor,
			}
		)
		canvas.current.add(diamond)
		canvas.current.setActiveObject(diamond)
		canvas.current.renderAll()
	}

	const addStar = () => {
		const starPoints = [
			{ x: 50, y: 0 },
			{ x: 61, y: 39 },
			{ x: 99, y: 39 },
			{ x: 67, y: 60 },
			{ x: 78, y: 99 },
			{ x: 50, y: 75 },
			{ x: 22, y: 99 },
			{ x: 33, y: 60 },
			{ x: 1, y: 39 },
			{ x: 39, y: 39 },
		]

		const star = new fabric.Polygon(starPoints, {
			left: 550,
			top: 300,
			fill: selectedColor,
		})
		canvas.current.add(star)
		canvas.current.setActiveObject(star)
		canvas.current.renderAll()
	}
	const addRoundedRectangle = () => {
		const roundedRect = new fabric.Rect({
			left: 600,
			top: 250,
			fill: selectedColor,
			width: 100,
			height: 60,
			rx: 10, // Radius of rounded corners
			ry: 10,
		})
		canvas.current.add(roundedRect)
		canvas.current.setActiveObject(roundedRect)
		canvas.current.renderAll()
	}
	const addPentagon = () => {
		const pentagon = new fabric.Polygon(
			[
				{ x: 100, y: 100 },
				{ x: 200, y: 50 },
				{ x: 300, y: 100 },
				{ x: 260, y: 200 },
				{ x: 140, y: 200 },
			],
			{
				fill: selectedColor,
			}
		)

		canvas.current.add(pentagon)
		canvas.current.setActiveObject(pentagon)
		canvas.current.renderAll()
	}

	const addHexagon = () => {
		const hexagonPath = new fabric.Path(
			"M100 0 L200 0 L250 86.6 L200 173.2 L100 173.2 L50 86.6 Z"
		)
		hexagonPath.set({
			left: 100,
			top: 100,
			fill: selectedColor,
		})
		canvas.current.add(hexagonPath)
		canvas.current.setActiveObject(hexagonPath)
		canvas.current.renderAll()
	}

	const addHeptagon = () => {
		const heptagon = new fabric.Polygon(
			[
				{ x: 150, y: 100 },
				{ x: 250, y: 50 },
				{ x: 350, y: 100 },
				{ x: 350, y: 200 },
				{ x: 300, y: 250 },
				{ x: 200, y: 250 },
				{ x: 150, y: 200 },
			],
			{
				fill: selectedColor,
			}
		)

		canvas.current.add(heptagon)
		canvas.current.setActiveObject(heptagon)
		canvas.current.renderAll()
	}
	const addOctagon = () => {
		const octagonPath = new fabric.Path(
			"M100 0 L200 0 L250 50 L250 150 L200 200 L100 200 L50 150 L50 50 Z"
		)
		octagonPath.set({
			left: 100,
			top: 100,
			fill: selectedColor,
		})
		canvas.current.add(octagonPath)
		canvas.current.setActiveObject(octagonPath)
		canvas.current.renderAll()
	}

	const addLine = () => {
		const line = new fabric.Line([50, 50, 200, 50], {
			stroke: selectedColor,
			strokeWidth: 2,
		})
		canvas.current.add(line)
		canvas.current.setActiveObject(line) // Select the added line
		canvas.current.renderAll()
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

	const handleDelete = (event) => {
		if (event.key === "Delete") {
			const activeObject = canvas.current.getActiveObject()
			if (activeObject) {
				canvas.current.remove(activeObject)
				canvas.current.discardActiveObject()
				canvas.current.renderAll()
			}
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

	const handleDownloadPNG = () => {
		// Select the canvas element
		const canvasElement = canvasRef.current

		// Use html2canvas to capture the canvas element as an image
		html2canvas(canvasElement).then((canvas) => {
			// Create a PNG image from the canvas
			const imgData = canvas.toDataURL("image/png")

			// Create a temporary anchor element to trigger the download
			const a = document.createElement("a")
			a.href = imgData
			a.download = "canvas.png"
			a.click()
		})
	}

	const handleDownloadPDF = () => {
		// Create a new jsPDF instance
		const pdf = new jsPDF()

		// Select the canvas element
		const canvasElement = canvasRef.current

		// Use html2canvas to capture the canvas element as an image
		html2canvas(canvasElement).then((canvas) => {
			// Convert the canvas image to a data URL
			const imgData = canvas.toDataURL("image/png")

			// Add the image to the PDF document
			pdf.addImage(imgData, "PNG", 0, 0)

			// Save the PDF with a specific name
			pdf.save("canvas.pdf")
		})
	}

	return (
		<div>
			<canvas ref={canvasRef} />
			<button id="addRectangle">Add Rectangle</button>
			<button id="addCircle">Add Circle</button>
			<button id="addTriangle" onClick={addTriangle}>
				Add Triangle
			</button>
			<button id="addDiamond" onClick={addDiamond}>
				Add Diamond
			</button>
			<button id="addStar" onClick={addStar}>
				Add Star
			</button>
			<button id="addRoundedRectangle" onClick={addRoundedRectangle}>
				Add Rounded Rectangle
			</button>
			<button id="addPentagon" onClick={addPentagon}>
				Add Pentagon
			</button>
			<button id="addHexagon" onClick={addHexagon}>
				Add Hexagon
			</button>
			<button id="addHeptagon" onClick={addHeptagon}>
				Add Heptagon
			</button>
			<button id="addOctagon" onClick={addOctagon}>
				Add Octagon
			</button>
			<button id="addHeart" onClick={addHeart}>
				Add Heart
			</button>
			<button id="addUpArrow" onClick={addUpArrow}>
				Add Up Arrow
			</button>
			<button id="addDownArrow" onClick={addDownArrow}>
				Add Down Arrow
			</button>
			<button id="addLeftArrow" onClick={addLeftArrow}>
				Add Left Arrow
			</button>
			<button id="addRightArrow" onClick={addRightArrow}>
				Add Right Arrow
			</button>
			<button id="addTrapezoidal" onClick={addTrapezoidal}>
				Add Trapezoidal
			</button>
			<input
				type="range"
				id="opacitySlider"
				min="0"
				max="1"
				step="0.01"
				value={selectedOpacity}
				onChange={handleOpacityChange}
			/>
			<button id="addLine">Add Line</button>
			<input
				type="color"
				id="colorPicker"
				value={selectedColor}
				onChange={handleColorChange}
			/>
			<button id="bringForward">Bring Forward</button>
			<button id="sendBackward">Send Backward</button>
			<button id="applySolidBorder" onClick={applyBorder}>
				Apply Solid Border
			</button>
			<input
				type="color"
				id="borderColorPicker"
				value={selectedBorderColor}
				onChange={handleBorderColorChange}
			/>
			<button id="addTextbox" onClick={addTextBox}>
				Add TextBox
			</button>
			<input
				type="color"
				id="textColorPicker"
				value={selectedTextColor}
				onChange={handleTextColorChange}
			/>
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
			<button onClick={handleDownloadPNG}>Download as PNG</button>
			<button onClick={handleDownloadPDF}>Download as PDF</button>
		</div>
	)
}
export default CanvasContainer
