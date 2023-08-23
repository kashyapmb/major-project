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

function Download() {
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
			pdf.addImage(imgData, "PNG", 0, 0, 210, 118.125)

			// Save the PDF with a specific name
			pdf.save("canvas.pdf")
		})
	}

	return (
		<>
			<Box sx={{ paddingX: "1rem" }}>
				<Box sx={{ paddingY: "0.6rem", display: "flex" }}>
					<button onClick={handleDownloadPNG}>Download as PNG</button>
				</Box>
				<Box sx={{ paddingY: "0.6rem", display: "flex" }}>
					<button onClick={handleDownloadPDF}>Download as PDF</button>
				</Box>
			</Box>
		</>
	)
}

export default Download
