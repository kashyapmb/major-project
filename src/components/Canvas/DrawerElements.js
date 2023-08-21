import React, { useRef, useEffect, useState } from "react"
import { fabric } from "fabric"
import "fabric-history"
import html2canvas from "html2canvas"
import jsPDF from "jspdf"
import { BiSolidBackpack } from "react-icons/bi"
import { Hexagon, Pentagon, Heptagon, Octagon } from "react-shapes"
import CanvasContainer from "./CanvasContainer"

function DrawerElements() {
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
		const addRectangleButton = document.getElementById("addRectangle")
		addRectangleButton.addEventListener("click", CanvasContainer.addRectangle)
		return () => {
			addRectangleButton.removeEventListener("click", CanvasContainer.addRectangle)
		}
	}, [])

	return (
		<>
			<button id="addRectangle" onClick={CanvasContainer.addRectangle}>Add Rectangle</button>
		</>
	)
}

export default DrawerElements
