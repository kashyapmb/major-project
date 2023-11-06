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
import {} from "react-icons/ai"
import {
	BsDiamondFill,
	BsFillHeartFill,
	BsFillPentagonFill,
	BsFillSquareFill,
	BsHeptagonFill,
	BsHexagonFill,
	BsOctagonFill,
	BsStarFill,
} from "react-icons/bs"
import axios from "axios"

import { BiSolidSquare } from "react-icons/bi"
import {} from "react-icons/ci"
import {} from "react-icons/di"
import {} from "react-icons/fi"
import {} from "react-icons/fc"
import { FaBitbucket, FaCircle } from "react-icons/fa"
import {} from "react-icons/fa6"
import { GiPlainSquare } from "react-icons/gi"
import {} from "react-icons/go"
import {} from "react-icons/gr"
import { HiOutlineMinus } from "react-icons/hi"
import {} from "react-icons/hi2"
import {
	ImArrowDown,
	ImArrowLeft,
	ImArrowRight,
	ImArrowUp,
} from "react-icons/im"
import {} from "react-icons/lia"
import {} from "react-icons/io"
import { IoTriangle } from "react-icons/io5"
import {} from "react-icons/lu"
import {} from "react-icons/md"
import {} from "react-icons/pi"
import {} from "react-icons/rx"
import {} from "react-icons/ri"
import {} from "react-icons/si"
import {} from "react-icons/sl"
import { TbRectangleFilled } from "react-icons/tb"
import {} from "react-icons/tfi"
import {} from "react-icons/ti"
import {} from "react-icons/vsc"
import {} from "react-icons/wi"
import {} from "react-icons/cg"
import "./Loader.css"

import { transform } from "lodash"

const restEndpoint =
	"https://emoji-api.com/emojis?access_key=3735be5d506be4780b25af3948e9d7c2e7e63b7f"

const callRestApi = async () => {
	try {
		const response = await fetch(restEndpoint)
		const jsonResponse = await response.json()
		console.log(jsonResponse)
		return JSON.stringify(jsonResponse)
	} catch (error) {
		console.log(error)
		return "NaN"
	}
}

function DrawerElements({ setSelectNum, setEmojiApiResponce }) {
	const selectedColor = "#000"
	const [apiResponse, setApiResponse] = useState([])
	const [isLoading, setIsLoading] = useState(false) // Loading state

	useEffect(() => {
		if (localStorage.getItem("emojis") !== null) {
			setApiResponse(JSON.parse(localStorage.getItem("emojis")))
		} else {
			callRestApi().then((result) => {
				if (result != "NaN") {
					setApiResponse(JSON.parse(result))
					localStorage.setItem("emojis", result)
					setIsLoading(false)
				}
			})
		}
	}, [isLoading])

	function generateUniqueId() {
		const randomString = Math.random().toString(36).substring(7)
		const timestamp = new Date().getTime()
		const uniqueId = randomString + timestamp
		return uniqueId
	}

	const moreEmoji = () => {
		setEmojiApiResponce(apiResponse)
		setSelectNum(9)
	}

	const addRectangle = () => {
		const rect = new fabric.Rect({
			objName: "Rectangle",
			left: 20,
			top: 20,
			fill: "#111",
			width: 100,
			height: 100,
			type: "shape",
			id: generateUniqueId(),
		})

		canvas.current.add(rect)
		canvas.current.setActiveObject(rect) // Select the added rectangle
		canvas.current.renderAll()
	}

	const addSquare = () => {
		const square = new fabric.Rect({
			objName: "Square",
			left: 20,
			top: 20,
			fill: selectedColor,
			width: 100, // Set the width of the square
			height: 100, // Set the height of the square
			id: generateUniqueId(),
		})

		canvas.current.add(square)
		canvas.current.setActiveObject(square) // Select the added square
		canvas.current.renderAll()
	}

	const addHeart = () => {
		const heart = new fabric.Path(
			"M50 85 A20 20 0 0 1 90 85 Q100 130 50 175 Q0 130 10 85 A20 20 0 0 1 50 85",
			{
				objName: "Heart",
				left: 20,
				top: 20,
				fill: selectedColor,
				id: generateUniqueId(),
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
				objName: "Left Arrow",
				left: 20,
				top: 20,
				fill: selectedColor,
				id: generateUniqueId(),
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
				objName: "Up Arrow",
				left: 20,
				top: 20,
				width: 200,
				height: 200,
				fill: selectedColor,
				id: generateUniqueId(),
			}
		)
		canvas.current.add(upArrowPath)
		canvas.current.setActiveObject(upArrowPath)
		canvas.current.renderAll()
	}

	const addDownArrow = () => {
		// Create a down arrow
		const downArrowPath = new fabric.Polygon(
			[
				{ x: 25, y: 0 },
				{ x: 50, y: 0 },
				{ x: 50, y: 40 },
				{ x: 75, y: 40 },
				{ x: 37, y: 100 },
				{ x: 0, y: 40 },
				{ x: 25, y: 40 },
			],
			{
				objName: "Down Arrow",
				left: 20,
				top: 20,
				fill: selectedColor,
				id: generateUniqueId(),
			}
		)

		canvas.current.add(downArrowPath)
		canvas.current.setActiveObject(downArrowPath)
		canvas.current.renderAll()
	}

	const addRightArrow = () => {
		const rightArrowPath = new fabric.Polygon(
			[
				{ x: 0, y: 10 },
				{ x: 25, y: 10 },
				{ x: 25, y: 0 },
				{ x: 50, y: 25 },
				{ x: 25, y: 50 },
				{ x: 25, y: 40 },
				{ x: 0, y: 40 },
				{ x: 0, y: 10 },
			],
			{
				objName: "Right Arrow",
				left: 20,
				top: 20,
				fill: selectedColor,
				id: generateUniqueId(),
			}
		)
		canvas.current.add(rightArrowPath)
		canvas.current.setActiveObject(rightArrowPath)
		canvas.current.renderAll()
	}

	const addTrapezoidal = () => {
		const trapezoidalPath = new fabric.Path("M0 0 L40 0 L30 40 L10 40 Z", {
			objName: "Trapezoidal",
			left: 20,
			top: 20,
			fill: selectedColor,
			id: generateUniqueId(),
		})
		canvas.current.add(trapezoidalPath)
		canvas.current.setActiveObject(trapezoidalPath)
		canvas.current.renderAll()
	}

	const addCircle = () => {
		const circle = new fabric.Circle({
			objName: "Circle",
			left: 20,
			top: 20,
			fill: selectedColor,
			radius: 50,
			id: generateUniqueId(),
		})
		canvas.current.add(circle)
		canvas.current.setActiveObject(circle) // Select the added circle
		canvas.current.renderAll()
	}

	const addTriangle = () => {
		const triangle = new fabric.Triangle({
			objName: "Triangle",
			left: 20,
			top: 20,
			fill: selectedColor,
			width: 100,
			height: 100,
			id: generateUniqueId(),
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
				objName: "Diamond",
				left: 20,
				top: 20,
				fill: selectedColor,
				id: generateUniqueId(),
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
			objName: "Star",
			left: 20,
			top: 20,
			fill: "#cbcac6",
			id: generateUniqueId(),
		})
		canvas.current.add(star)
		canvas.current.setActiveObject(star)
		canvas.current.renderAll()
	}

	const addRoundedRectangle = () => {
		const roundedRect = new fabric.Rect({
			objName: "Rounded Rectangle",
			left: 20,
			top: 20,
			fill: selectedColor,
			width: 100,
			height: 60,
			rx: 10, // Radius of rounded corners
			ry: 10,
			id: generateUniqueId(),
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
				objName: "Pentagon",
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
			objName: "Hexagon",
			left: 20,
			top: 20,
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
				objName: "Heptagon",
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
			objName: "Octagon",
			left: 20,
			top: 20,
			fill: selectedColor,
		})
		canvas.current.add(octagonPath)
		canvas.current.setActiveObject(octagonPath)
		canvas.current.renderAll()
	}

	const addLine = () => {
		const line = new fabric.Line([50, 50, 200, 50], {
			objName: "Line",
			stroke: selectedColor,
			strokeWidth: 2,
		})
		canvas.current.add(line)
		canvas.current.setActiveObject(line) // Select the added line
		canvas.current.renderAll()
	}

	const addEmoji = (stickerData) => {
		const sticker = new fabric.Text(stickerData.character, {
			objName: "Emoji",
			left: 20,
			top: 20,
			fontSize: 120, // Customize the font size
			// Add other properties from your sticker data
			data: stickerData,
		})

		// Add the custom sticker to the canvas
		canvas.current.add(sticker)
		canvas.current.renderAll()
	}

	return (
		<>
			<Box sx={{ height: "92vh", overflowY: "auto" }}>
				<Box sx={{ ml: "0.8rem", pt: "1rem" }}>
					<Typography sx={{ color: "white" }}>Shapes:</Typography>
				</Box>
				<Box
					sx={{
						display: "flex",
						pl: "0.6rem",
						flexWrap: "wrap",
						color: "#ececec",
					}}
				>
					<Box
						sx={{
							p: "0.4rem",
							overflow: "hidden",
							transition: "transform 0.2s",
							":hover": { transform: "scale(1.2)" },
						}}
					>
						<GiPlainSquare size={40} onClick={addSquare} />
					</Box>
					<Box
						sx={{
							p: "0.3rem",
							overflow: "hidden",
							transition: "transform 0.2s",
							":hover": { transform: "scale(1.2)" },
						}}
					>
						<FaCircle size={45} onClick={addCircle} />
					</Box>
					<Box
						sx={{
							p: "0.3rem",
							overflow: "hidden",
							transition: "transform 0.2s",
							":hover": { transform: "scale(1.2)" },
						}}
					>
						<IoTriangle size={45} onClick={addTriangle} />
					</Box>
					<Box
						sx={{
							p: "0.3rem",
							overflow: "hidden",
							transition: "transform 0.2s",
							":hover": { transform: "scale(1.2)" },
						}}
					>
						<BsDiamondFill size={40} onClick={addDiamond} />
					</Box>
					<Box
						sx={{
							p: "0.3rem",
							overflow: "hidden",
							transition: "transform 0.2s",
							":hover": { transform: "scale(1.2)" },
						}}
					>
						<BsStarFill size={40} onClick={addStar} />
					</Box>
					<Box
						sx={{
							p: "0.3rem",
							overflow: "hidden",
							transition: "transform 0.2s",
							":hover": { transform: "scale(1.2)" },
						}}
					>
						<TbRectangleFilled size={40} onClick={addRoundedRectangle} />
					</Box>
					<Box
						sx={{
							p: "0.3rem",
							overflow: "hidden",
							transition: "transform 0.2s",
							":hover": { transform: "scale(1.2)" },
						}}
					>
						<BsFillPentagonFill size={40} onClick={addPentagon} />
					</Box>
					<Box
						sx={{
							p: "0.3rem",
							overflow: "hidden",
							transition: "transform 0.2s",
							":hover": { transform: "scale(1.2)" },
						}}
					>
						<BsHexagonFill size={40} onClick={addHexagon} />
					</Box>
					<Box
						sx={{
							p: "0.3rem",
							overflow: "hidden",
							transition: "transform 0.2s",
							":hover": { transform: "scale(1.2)" },
						}}
					>
						<BsHeptagonFill size={40} onClick={addHeptagon} />
					</Box>
					<Box
						sx={{
							p: "0.3rem",
							overflow: "hidden",
							transition: "transform 0.2s",
							":hover": { transform: "scale(1.2)" },
						}}
					>
						<BsOctagonFill size={40} onClick={addOctagon} />
					</Box>
					<Box
						sx={{
							p: "0.3rem",
							overflow: "hidden",
							transition: "transform 0.2s",
							":hover": { transform: "scale(1.2)" },
						}}
					>
						<BsFillHeartFill size={40} onClick={addHeart} />
					</Box>
					<Box
						sx={{
							p: "0.3rem",
							overflow: "hidden",
							transition: "transform 0.2s",
							":hover": { transform: "scale(1.2)" },
						}}
					>
						<ImArrowUp size={40} onClick={addUpArrow} />
					</Box>
					<Box
						sx={{
							p: "0.3rem",
							overflow: "hidden",
							transition: "transform 0.2s",
							":hover": { transform: "scale(1.2)" },
						}}
					>
						<ImArrowRight size={40} onClick={addRightArrow} />
					</Box>
					<Box
						sx={{
							p: "0.3rem",
							overflow: "hidden",
							transition: "transform 0.2s",
							":hover": { transform: "scale(1.2)" },
						}}
					>
						<ImArrowDown size={40} onClick={addDownArrow} />
					</Box>
					<Box
						sx={{
							p: "0.3rem",
							overflow: "hidden",
							transition: "transform 0.2s",
							":hover": { transform: "scale(1.2)" },
						}}
					>
						<ImArrowLeft size={40} onClick={addLeftArrow} />
					</Box>
					<Box
						sx={{
							p: "0.3rem",
							overflow: "hidden",
							transition: "transform 0.2s",
							":hover": { transform: "scale(1.2)" },
						}}
					>
						<FaBitbucket size={40} onClick={addTrapezoidal} />
					</Box>
					<Box
						sx={{
							p: "0.3rem",
							overflow: "hidden",
							transition: "transform 0.2s",
							":hover": { transform: "scale(1.2)" },
						}}
					>
						<HiOutlineMinus size={40} onClick={addLine} />
					</Box>
				</Box>
				<Box sx={{ ml: "0.8rem", pt: "0.2rem" }}>
					<Typography sx={{ color: "white" }}>Emojis:</Typography>
				</Box>
				<Box
					sx={{
						display: "flex",
						fontSize: "2.5rem",
						flexWrap: "wrap",
					}}
				>
					{isLoading ? (
						<div className="loading-spinner"></div>
					) : (
						apiResponse.slice(0, 12).map((obj, index) => (
							<>
								<Box
									sx={{ mx: "0.2rem", cursor: "pointer" }}
									onClick={() => addEmoji(obj)}
								>
									{obj.character}
								</Box>

								{index == 11 && (
									<Box
										sx={{
											justifySelf: "end",
											ml: "1rem",
										}}
									>
										<Typography
											sx={{
												color: "white",
												fontSize: "0.8rem",
												":hover": {
													cursor: "pointer",
													textDecoration: "underline",
												},
											}}
											onClick={moreEmoji}
										>
											Load More
										</Typography>
									</Box>
								)}
							</>
						))
					)}
				</Box>
			</Box>
		</>
	)
}

export default DrawerElements
