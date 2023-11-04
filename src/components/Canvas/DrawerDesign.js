import React, { useRef, useEffect, useState } from "react"
import { fabric } from "fabric"
import "fabric-history"
import html2canvas from "html2canvas"
import jsPDF from "jspdf"
import { BiSolidBackpack } from "react-icons/bi"
import { Hexagon, Pentagon, Heptagon, Octagon } from "react-shapes"
import { canvas, canvasRef } from "./CanvasContainer"
import StickerSearch from "./StickerSearch" // Import the StickerSearch component

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
import { Templates } from "./Datastore/Templates"

function DrawerDesign() {
	const [projects, setProjects] = useState([]) // State to store saved projects
	const [selectedProjectIndex, setSelectedProjectIndex] = useState(null)
	const [uploadedImages, setUploadedImages] = useState([])

	const addStickerToCanvas = (stickerUrl) => {
		fabric.Image.fromURL(stickerUrl, (img) => {
			img.scale(0.1)
			img.set({ left: 10, top: 10 })
			img.set({
				hasControls: false,
				hasBorders: false,
				lockScalingX: true,
				lockScalingY: true,
			})
			canvas.current.add(img)
			canvas.current.renderAll()
		})
	}

	const saveProject = () => {
		if (selectedProjectIndex !== null) {
			// If a project is selected, update it
			const updatedProjects = [...projects]
			const canvasState = JSON.stringify(canvas.current.toJSON())
			const thumbnail = generateCanvasThumbnail()
			updatedProjects[selectedProjectIndex] = {
				canvasState,
				thumbnail,
				images: [...uploadedImages],
			}

			// Store the updated projects in localStorage
			localStorage.setItem("projects", JSON.stringify(updatedProjects))

			setProjects(updatedProjects)
		}
	}

	// Saving a Project as New
	const saveAsNewProject = () => {
		// const projectName = prompt("Enter a name for your new project:");
		const canvasState = JSON.stringify(canvas.current.toJSON())
		const thumbnail = generateCanvasThumbnail()

		// Add the captured canvas state, thumbnail, and images as a new project
		const newProject = {
			canvasState,
			thumbnail,
			images: [...uploadedImages],
		}

		// Get the existing projects from localStorage and add the new project
		const existingProjects = JSON.parse(localStorage.getItem("projects")) || []
		const updatedProjects = [...existingProjects, newProject]

		// Store the updated projects in localStorage
		localStorage.setItem("projects", JSON.stringify(updatedProjects))

		// Clear the canvas selection and set the new project as the selected one
		setSelectedProjectIndex(updatedProjects.length)
		setProjects(updatedProjects)
	}

	const loadProject = (index) => {
		if (index >= 0 && index < projects.length) {
			const project = projects[index]
			const projectCanvasState = JSON.parse(project.canvasState)

			// Clear the canvas before loading the project
			canvas.current.clear()

			// Load the project canvas state into the canvas
			canvas.current.loadFromJSON(projectCanvasState, () => {
				canvas.current.renderAll()
			})

			// Set the selected project index
			setSelectedProjectIndex(index)

			// Load project images onto the canvas
			setUploadedImages([...project.images])
		}
	}
	useEffect(() => {
		const storedProjects = JSON.parse(localStorage.getItem("projects")) || []
		setProjects(storedProjects)
	}, [])

	// Function to generate a thumbnail of the canvas
	const generateCanvasThumbnail = () => {
		const thumbnailCanvas = document.createElement("canvas")
		const thumbnailContext = thumbnailCanvas.getContext("2d")
		thumbnailCanvas.width = 797 // Set the desired thumbnail width
		thumbnailCanvas.height = 447 // Set the desired thumbnail height

		// Create a thumbnail by drawing the canvas content onto the thumbnail canvas
		thumbnailContext.drawImage(
			canvasRef.current,
			0,
			0,
			thumbnailCanvas.width,
			thumbnailCanvas.height
		)

		// Convert the thumbnail canvas to a data URL
		const thumbnailDataUrl = thumbnailCanvas.toDataURL("image/png")
		return thumbnailDataUrl
	}

	const deleteProject = (index) => {
		const updatedProjects = [...projects]
		updatedProjects.splice(index, 1)
		setProjects(updatedProjects)
	}

	return (
		<>
			<Box sx={{ height: "92vh", overflowY: "auto" }}>
				<Typography sx={{ color: "white", m: "1rem" }}>
					Unique Designs:
				</Typography>

				<Box
					sx={{
						display: "flex",
						justifyContent: "space-around",
						flexWrap: "wrap",
					}}
				>
					{projects.map((project, index) => (
						<Box key={index}>
							<Box
								style={{ cursor: "pointer" }}
								onClick={() => loadProject(index)}
							>
								<img
									src={project.thumbnail} // Display the project thumbnail as an image
									alt={`Project Thumbnail ${index}`}
									width={120} // Set the desired thumbnail width
									height={67.5} // Set the desired thumbnail height
								/>
							</Box>
							{/* <button onClick={() => deleteProject(index)}>Delete</button> */}
						</Box>
					))}
				</Box>

				{/* <Box>
					<button onClick={saveProject}>Save Project</button>
					<button onClick={saveAsNewProject}>Save as New Project</button>
				</Box> */}

				{/* <Box>
					<StickerSearch onStickerClick={addStickerToCanvas} />
				</Box> */}
			</Box>
		</>
	)
}

export default DrawerDesign
