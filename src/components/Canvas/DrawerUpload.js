import React, { useRef, useEffect, useState } from "react"
import { fabric } from "fabric"
import "fabric-history"
import html2canvas from "html2canvas"
import jsPDF from "jspdf"
import { BiSolidBackpack } from "react-icons/bi"
import { Hexagon, Pentagon, Heptagon, Octagon } from "react-shapes"
import { canvas, canvasRef } from "./CanvasContainer"
import { Box } from "@mui/material"

function DrawerUpload() {
	const [uploadedImages, setUploadedImages] = useState([]) // State variable to store uploaded images

	// Function to add the selected image to the canvas
	const addImageToCanvas = (image) => {
		const fabricImage = new fabric.Image(image, {
			left: 0,
			top: 0,
			type: "image",
			scaleX: 0.2, // Set the desired scaleX (e.g., 0.5 for half size)
			scaleY: 0.2, // Set the desired scaleY (e.g., 0.5 for half size)
		})
		canvas.current.add(fabricImage)
		canvas.current.setActiveObject(fabricImage)
		canvas.current.renderAll()
	}

	const hiddenFileInput = useRef(null)

	const handleClick = (event) => {
		hiddenFileInput.current.click()
	}
	const handleChange = (event) => {
		const file = event.target.files[0]
		if (file) {
			const reader = new FileReader()
			reader.onload = (e) => {
				const image = new Image()
				image.src = e.target.result
				image.onload = () => {
					setUploadedImages([...uploadedImages, image])
				}
			}
			reader.readAsDataURL(file)
		}
	}

	useEffect(() => {}, [uploadedImages])
	return (
		<>
			<Box sx={{ p: "1rem" }}>
				<Box
					sx={{
						px: "1rem",
						py: "0.6rem",
						display: "flex",
						background: "#343536",
						color: "white",
						fontWeight: "600",
						fontSize: "1rem",
						borderRadius: "0.3rem",
						":hover": {
							background: "#5f6160",
							transition: "0.3s",
							cursor: "pointer",
						},
					}}
					onClick={handleClick}
				>
					Upload a File
				</Box>
				<input
					type="file"
					onChange={handleChange}
					ref={hiddenFileInput}
					style={{ display: "none" }} // Make the file input element invisible
				/>
				<Box sx={{ mt: "1rem" }}>
					{uploadedImages.map((image, index) => (
						<img
							key={index}
							src={image.src}
							alt={`Uploaded ${index}`}
							onClick={() => addImageToCanvas(image)}
							style={{
								cursor: "pointer",
								marginRight: "10px",
								width: "100px", // Set the desired width
								height: "100px", // Maintain aspect ratio
								objectFit: "contain",
								backgroundImage: `url(/images/bg.jpg)`,
								backgroundSize: "150px",
							}}
						/>
					))}
				</Box>
			</Box>
		</>
	)
}

export default DrawerUpload
