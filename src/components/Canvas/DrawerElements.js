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
	Button,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	CardMedia,
	Typography,
} from "@mui/material"

function DrawerElements() {
	const selectedColor = "#000"
	const addRectangle = () => {
		const rect = new fabric.Rect({
			left: 100,
			top: 100,
			fill: "#000",
			width: 100,
			height: 100,
		})
		canvas.current.add(rect)
		canvas.current.setActiveObject(rect) // Select the added rectangle
		canvas.current.renderAll()
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
			"M0 20 L0 20 L10 20 L10 70 L90 0 L0 20 L40 20",
			{
				left: 200, // Set the initial left position
				top: 300, // Set the initial top position
				fill: "green", // Use the color you prefer
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
	return (
		<>
			<div>
				<button id="addRectangle" onClick={addRectangle}>
					Add Rectangle
				</button>
				<button id="addCircle" onClick={addCircle}>
					Add Circle
				</button>
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
				<button id="addLine" onClick={addLine}>
					Add Line
				</button>
			</div>
		</>
	)
}

export default DrawerElements
