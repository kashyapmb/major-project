import React, { useRef, useEffect, useState } from "react"
import { fabric } from "fabric"
import "fabric-history"
import html2canvas from "html2canvas"
import jsPDF from "jspdf"
import { BiSolidBackpack } from "react-icons/bi"
import { Hexagon, Pentagon, Heptagon, Octagon } from "react-shapes"
import { canvas, canvasRef } from "./CanvasContainer"

function DrawerUpload() {
	const [uploadedImages, setUploadedImages] = useState([]) // State variable to store uploaded images
	const [selectedImageIndex, setSelectedImageIndex] = useState(-1) // State variable to track the selected image

	const handleUploadImage = (event) => {
		const file = event.target.files[0] // Get the first selected file

		if (file) {
			// Check if a file was selected
			const reader = new FileReader()

			// Define a function to run when the FileReader has loaded the image
			reader.onload = (e) => {
				const imgSrc = e.target.result

				// Create a fabric.Image object from the uploaded image
				fabric.Image.fromURL(
					imgSrc,
					(img) => {
						img.set({
							left: 100,
							top: 100,
							scaleX: 0.3, // Adjust the initial scale as needed for zoom-in effect
							scaleY: 0.3, // Adjust the initial scale as needed for zoom-in effect
						})

						const newImages = [...uploadedImages, img] // Create a new array with the added image
						setUploadedImages(newImages) // Update the state with the new array of images
						setSelectedImageIndex(newImages.length - 1) // Select the newly added image
					},
					{ crossOrigin: "Anonymous" } // Required for CORS-enabled images
				)
			}

			// Read the selected file as a Data URL
			reader.readAsDataURL(file)
		}
	}

	const handleImageSelection = (index) => {
		setSelectedImageIndex(index)
	}

	useEffect(() => {
		if (selectedImageIndex !== -1) {
			// Check if an image is selected
			const selectedImage = uploadedImages[selectedImageIndex]
			canvas.current.add(selectedImage) // Add the selected image to the canvas
			canvas.current.renderAll() // Render the canvas
		}
	}, [selectedImageIndex, uploadedImages])
	return (
		<>
			<input type="file" accept="image/*" onChange={handleUploadImage} />
			<div>
				<h4>Uploaded Images:</h4>
				<ul>
					{uploadedImages.map((img, index) => (
						<li
							key={index}
							onClick={() => handleImageSelection(index)}
							className={selectedImageIndex === index ? "selected" : ""}
						>
							Image {index + 1}
						</li>
					))}
				</ul>
			</div>
		</>
	)
}

export default DrawerUpload
