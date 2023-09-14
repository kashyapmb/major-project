import React, { useRef, useEffect, useState } from "react"
import { fabric } from "fabric"
import "fabric-history"
import html2canvas from "html2canvas"
import jsPDF from "jspdf"
import { BiSolidBackpack } from "react-icons/bi"
import { Hexagon, Pentagon, Heptagon, Octagon } from "react-shapes"
import Design from "./Design"
import Templates from "./Datastore/Templates"

export var canvasRef
export var canvas

const CanvasContainer = ({
	updateObjectClicked,
	setSelectedColor,
	setSelectedOpacity,
	setSelectedFontSize,
}) => {
	canvasRef = useRef(null)
	canvas = useRef(null)

	const [objId, setObjId] = useState(1)

	// let lastClickTime = 0
	useEffect(() => {
		canvas.current = new fabric.Canvas(canvasRef.current, {
			width: 720,
			height: 405,
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
		window.addEventListener("mousedown", mouseHandle)

		canvas.current.on("selection:created", function (options) {
			console.log("Selected")
			var activeObject = canvas.current.getActiveObject()
			console.log(activeObject)

			if (activeObject) {
				if (activeObject.type === "text") {
					updateObjectClicked(2)
					setSelectedFontSize(activeObject.fontSize)
					// setFontSize()
				} else {
					updateObjectClicked(1)
				}
			}

			console.log(canvas.current.getActiveObject())
			setSelectedColor(canvas.current.getActiveObject().fill)
			setSelectedOpacity(canvas.current.getActiveObject().opacity)
		})
		canvas.current.on("selection:updated", function (options) {
			console.log("Updated")
			var activeObject = canvas.current.getActiveObject()

			if (activeObject) {
				if (activeObject.type === "text") {
					updateObjectClicked(2)
					setSelectedFontSize(activeObject.fontSize)
				} else {
					updateObjectClicked(1)
				}
			}
			setSelectedColor(canvas.current.getActiveObject().fill)
			setSelectedOpacity(canvas.current.getActiveObject().opacity)
		})

		// Event listener for object deselect
		canvas.current.on("selection:cleared", function (options) {
			updateObjectClicked(0)
		})

		// // Event listener for canvas click to deselect
		// canvas.current.on("mouse:down", function (options) {
		// 	if (!options.target) {
		// 		canvas.current.discardActiveObject()
		// 		console.log("Deselected all objects")
		// 	}
		// })

		return () => {
			canvas.current.dispose()
			window.removeEventListener("keydown", keyboardHandle)
			window.removeEventListener("mousedown", mouseHandle)
		}
	}, [])

	const mouseHandle = () => {
		// console.log("Mouse Down")
		// console.log(objClicked)
		// setObjClicked(!objClicked)
	}
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
