import React, { useRef, useEffect, useState } from "react"
import { fabric } from "fabric"
import "fabric-history"
import html2canvas from "html2canvas"
import jsPDF from "jspdf"
import { BiSolidBackpack } from "react-icons/bi"
import { Hexagon, Pentagon, Heptagon, Octagon } from "react-shapes"

export var canvasRef
export var canvas

const CanvasContainer = () => {
	canvasRef = useRef(null)
	canvas = useRef(null)
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

	// let lastClickTime = 0
	useEffect(() => {
		canvas.current = new fabric.Canvas(canvasRef.current, {
			width: 800,
			height: 450,
			backgroundColor: "white",
			selectionBorderColor: "#2563eb",
		})

		// Enable history management for undo/redo
		canvas.current.uniScaleTransform = true
		canvas.current.uniScaleKey = "shiftKey"
		canvas.current.uniScaleTransform = true

		// Enable selection for resizing
		canvas.current.selection = true

		// window.addEventListener("mousedown", function (options) {
		// 	var clickedObject = options.target
		// 	console.log("called")
		// 	if (clickedObject) {
		// 		// Do something with the clicked object
		// 		console.log("Clicked on:", clickedObject)
		// 	}

		// 	const currentTime = new Date().getTime()

		// 	if (currentTime - lastClickTime < 300) {
		// 		// Double click
		// 		console.log("Double click")
		// 		// Perform your double-click action here
		// 	} else {
		// 		// Single click
		// 		console.log("Single click")
		// 		// Perform your single-click action here
		// 	}
		// 	lastClickTime = currentTime
		// })

		// Attach button click events to add shapes
		// const colorPicker = document.getElementById("colorPicker")
		// const bringForwardButton = document.getElementById("bringForward")
		// const sendBackwardButton = document.getElementById("sendBackward")
		// const applySolidBorderButton = document.getElementById("applySolidBorder")

		// colorPicker.addEventListener("change", handleColorChange)
		// bringForwardButton.addEventListener("click", bringForward)
		// sendBackwardButton.addEventListener("click", sendBackward)
		window.addEventListener("keydown", keyboardHandle)

		return () => {
			canvas.current.dispose()
			window.removeEventListener("keydown", keyboardHandle)
		}
	}, [])

	const keyboardHandle = (event) => {
		if (event.key === "Delete") {
			const activeObject = canvas.current.getActiveObject()
			if (activeObject) {
				canvas.current.remove(activeObject)
				canvas.current.discardActiveObject()
				canvas.current.renderAll()
			}
		}
	}

	return (
		<div>
			<canvas ref={canvasRef} />
		</div>
	)
}
export default CanvasContainer
