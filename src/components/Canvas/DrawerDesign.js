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
			setProjects(updatedProjects)
		}
	}

	const saveAsNewProject = () => {
		// const canvasState = canvas.current

		// // Add the captured canvas state as a new project
		// setProjects([...projects, canvasState])

		// // Clear the canvas selection and set the new project as the selected one
		// setSelectedProjectIndex(projects.length)

		// console.log("Canvas Object")
		// console.log(canvasState)
		// var json = JSON.stringify(canvas.current.toDatalessJSON())
		// console.log("Canvas Object in json")
		// console.log(json)

		//Download the image
		// const imgData = canvas.current.toDataURL("image/png")
		// const a = document.createElement("a")
		// a.href = imgData
		// a.download = "canvas.png"
		// a.click()

		const canvasState = JSON.stringify(canvas.current.toJSON())
		const thumbnail = generateCanvasThumbnail()

		// Add the captured canvas state, thumbnail, and images as a new project
		setProjects([
			...projects,
			{
				canvasState,
				thumbnail,
				images: [...uploadedImages],
			},
		])

		// Clear the canvas selection and set the new project as the selected one
		setSelectedProjectIndex(projects.length)
	}

	// const loadProject = (index) => {
	// const projectState = JSON.parse(JSON.stringify(Templates[index]))
	// console.log(projectState)

	// canvas.current.clear()
	// canvas.current.loadFromJSON(JSON.stringify(Templates[index]))

	// const projectState = JSON.parse(Templates[index])
	// // Clear the canvas before loading the project
	// canvas.current.clear()

	// // Load the project state into the canvas
	// canvas.current.loadFromJSON(projectState, () => {
	// 	canvas.current.renderAll()
	// })

	// Set the selected project index
	// setSelectedProjectIndex(index)
	// }

	// const loadProject = (index) => {
	// 	if (index >= 0 && index < Templates.length) {
	// 		const projectState = JSON.parse(Templates[index])

	// 		// Clear the canvas before loading the project
	// 		canvas.current.clear()

	// 		// Load the project state into the canvas
	// 		canvas.current.loadFromJSON(projectState, () => {
	// 			canvas.current.renderAll()
	// 		})

	// 		// Set the selected project index
	// 		setSelectedProjectIndex(index)
	// 	}
	// }

	const loadProject = (index) => {
		// if (index >= 0 && index < projects.length) {
		// 	const projectState = JSON.parse(projects[index])

		// 	// Clear the canvas before loading the project
		// 	canvas.current.clear()

		// 	// Load the project state into the canvas
		// 	canvas.current.loadFromJSON(projectState, () => {
		// 		canvas.current.renderAll()
		// 	})

		// 	// Set the selected project index
		// 	setSelectedProjectIndex(index)
		// }

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

	const deleteProject = (index) => {
		const updatedProjects = [...projects]
		updatedProjects.splice(index, 1)
		setProjects(updatedProjects)
	}

	// const ImageComponent = (obj) => {
	// 	canvas.current.clear()
	// 	const canva = fabric.Canvas()
	// 	fabric.Canvas.loadFromJSON(obj, (loadedCanvas) => {
	// 		loadedCanvas.getObjects().loadFromJSON((object) => {
	// 			canvas.current.add(object)
	// 		})
	// 		canvas.current.renderAll()
	// 	})

	// 	const canvasJson = canvas.current.toJSON()

	// 	// Log the JSON representation (for demonstration purposes)
	// 	console.log("Canvas JSON:", canvasJson)

	// 	// Reconvert JSON to canvas
	// 	fabric.Canvas.fromJSON(canvasJson, (loadedCanvas) => {
	// 		// Clear the original canvas
	// 		canvas.current.clear()

	// 		// Add the objects from the loaded JSON to the original canvas
	// 		loadedCanvas.getObjects().forEach((object) => {
	// 			canvas.current.add(object)
	// 		})

	// 		// Render the canvas with the loaded objects
	// 		canvas.current.renderAll()
	// 	})
	// }

	// useEffect(() => {
	// 	projects.clear()
	// 	{
	// 		Templates.map((obj, index) => projects.push(obj))
	// 	}
	// }, [])

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
							onClick={() => loadProject(index)}
						/>
					</>
				))}
			</Box>

			<button onClick={saveProject}>Save Project</button>
			<button onClick={saveAsNewProject}>Save as New Project</button>

			<div>
				<h2>Saved Projects</h2>
				<ul>
					{projects.map((project, index) => (
						<li key={index}>
							<span
								style={{ cursor: "pointer" }}
								onClick={() => loadProject(index)}
							>
								Project {index + 1}
							</span>
							<button onClick={() => deleteProject(index)}>Delete</button>
						</li>
					))}
				</ul>
			</div>

			<div>
				<h2>Saved Projects</h2>
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
							<button onClick={() => deleteProject(index)}>Delete</button>
						</ul>
					))}
				</ul>
			</div>
		</>
	)
}

export default DrawerDesign
