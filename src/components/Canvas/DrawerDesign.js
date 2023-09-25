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
import { Templates } from "./Datastore/Templates"

function DrawerDesign() {
	const [projects, setProjects] = useState([]) // State to store saved projects
	const [selectedProjectIndex, setSelectedProjectIndex] = useState(null)
	const [uploadedImages, setUploadedImages] = useState([])

	// const saveProject = () => {
	// 	if (selectedProjectIndex !== null) {
	// 		// If a project is selected, update it
	// 		const updatedProjects = [...projects]
	// 		const canvasState = JSON.stringify(canvas.current.toJSON())
	// 		const thumbnail = generateCanvasThumbnail()
	// 		updatedProjects[selectedProjectIndex] = {
	// 			canvasState,
	// 			thumbnail,
	// 			images: [...uploadedImages],
	// 		}

	// 		// Store the updated projects in localStorage
	// 		localStorage.setItem("projects", JSON.stringify(updatedProjects))

	// 		setProjects(updatedProjects)
	// 	}
	// }

	// Saving a Project as New
	const saveAsNewProject = () => {
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

	var canvasRef = useRef(null)
	const loadProjectViaTemplates = (index) => {
		if (index >= 0 && index < Templates.length) {
			const project = Templates[index]
			const projectCanvasState = JSON.parse(project.canvasState)

			// Clear the canvas before loading the project
			// canvas.current.clear()

			var secondCanvas = new fabric.Canvas(canvasRef.current, {
				width: 200,
				height: 200,
			})

			// Load the project canvas state into the canvas
			secondCanvas.loadFromJSON(projectCanvasState, () => {
				secondCanvas.renderAll()
			})

			const group = new fabric.Group([secondCanvas], {
				left: 100, // Set the position of the group within the first canvas
				top: 100,
			})

			canvas.current.add(group)

			// Set the selected project index
			setSelectedProjectIndex(index)

			// Load project images onto the canvas
			setUploadedImages([...project.images])
		}
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
		thumbnailCanvas.width = 100 // Set the desired thumbnail width
		thumbnailCanvas.height = 100 // Set the desired thumbnail height

		// Create a thumbnail by drawing the canvas content onto the thumbnail canvas
		thumbnailContext.drawImage(
			canvasRef.current,
			0,
			0,
			canvas.current.width,
			canvas.current.height,
			0,
			0,
			thumbnailCanvas.width,
			thumbnailCanvas.height
		)

		// Convert the thumbnail canvas to a data URL
		const thumbnailDataUrl = thumbnailCanvas.toDataURL("image/png")
		return thumbnailDataUrl
	}

	return (
		<>
			<Box>
				{Templates.map((obj, index) => (
					<>
						<Typography
							component={"img"}
							src={`/images/templates/${index + 1}.png`}
							href="/"
							width={130}
							height={73}
							sx={{
								cursor: "pointer",
							}}
							onClick={() => loadProjectViaTemplates(index)}
						/>
					</>
				))}
			</Box>

			{/* <button onClick={saveProject}>Save Project</button> */}
			<button onClick={saveAsNewProject}>Save as New Project</button>

			<div>
				<ul>
					{projects.map((project, index) => (
						<ul key={index}>
							<span
								style={{ cursor: "pointer" }}
								onClick={() => loadProject(index)}
							>
								<img
									src={project.thumbnail} // Display the project thumbnail as an image
									alt={`Project Thumbnail ${index}`}
									width={50} // Set the desired thumbnail width
									height={50} // Set the desired thumbnail height
								/>
							</span>
						</ul>
					))}
				</ul>
			</div>
		</>
	)
}

export default DrawerDesign
