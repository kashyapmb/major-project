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
	const handleDownloadJPG = () => {
		const dataURL = canvas.current.toDataURL({
			format: "jpeg",
			quality: 0.8, // Adjust the quality as needed (0 to 1)
		})

		// Create a temporary anchor element for downloading
		const a = document.createElement("a")
		a.href = dataURL
		a.download = "canvas.jpg" // Set the file name
		document.body.appendChild(a)

		// Trigger a click event to download the image
		a.click()

		// Clean up the temporary anchor element
		document.body.removeChild(a)
	}
	const handleDownloadSVG = () => {
		var svg = canvas.current.toSVG()
		var blob = new Blob([svg], { type: "image/svg+xml" })
		var url = window.URL.createObjectURL(blob)
		var a = document.createElement("a")
		a.href = url
		a.download = "canvas.svg"
		a.click()
		window.URL.revokeObjectURL(url)
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
					onClick={handleDownloadJPG}
				>
					<Box>
						<Box sx={{ fontSize: "1rem" }}>Download as JPG</Box>
						<Box sx={{ fontSize: "0.8rem", opacity: "0.7" }}>
							Best for sharing
						</Box>
					</Box>
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
					onClick={handleDownloadPNG}
				>
					<Box>
						<Box sx={{ fontSize: "1rem" }}> Download as PNG</Box>
						<Box sx={{ fontSize: "0.8rem", opacity: "0.7" }}>
							Best for complex images
						</Box>
					</Box>
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
					onClick={handleDownloadPDF}
				>
					<Box>
						<Box sx={{ fontSize: "1rem" }}>Download as PDF</Box>
						<Box sx={{ fontSize: "0.8rem", opacity: "0.7" }}>
							Best for documents (for emailing)
						</Box>
					</Box>
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
					onClick={handleDownloadSVG}
				>
					<Box>
						<Box sx={{ fontSize: "1rem" }}>Download as SVG</Box>
						<Box sx={{ fontSize: "0.8rem", opacity: "0.7" }}>
							Best for web design and animations
						</Box>
					</Box>
				</Box>
			</Box>
		</>
	)
}

export default Download
