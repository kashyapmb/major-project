import React, { useState, useEffect } from "react"
import { fabric } from "fabric"
import "fabric-history"
import { canvas } from "./CanvasContainer"
import "./Loader.css"
import { Box } from "@mui/material"

import "./search_bar.css"
var data = require("./words.json")

function DrawerAI() {
	const [keyword, setKeyword] = useState("")
	const [tagline, setTagline] = useState("")
	const [suggestedImages, setSuggestedImages] = useState([])
	const [fabricImage, setFabricImage] = useState(null)
	const [fabricText, setFabricText] = useState(null) // Track the text object
	const [isLoading, setIsLoading] = useState(false) // Loading state

	const handleKeywordChange = (event) => {
		setKeyword(event.target.value)
	}

	const fetchImages = async () => {
		setIsLoading(true) // Start loading
		const suggestions = []

		for (let i = 0; i < 20; i++) {
			try {
				const response = await fetch(
					`https://source.unsplash.com/800x450/?${keyword}`
				)
				const imageURL = response.url

				if (
					imageURL ===
					"https://images.unsplash.com/source-404?fit=crop&fm=jpg&h=800&q=60&w=1200"
				) {
					const res = await fetch(
						"https://source.unsplash.com/800x450/?gradient"
					)
					const imgURL = res.url
					suggestions.push(imgURL)
				} else {
					suggestions.push(imageURL)
				}
			} catch (error) {
				console.error("Error fetching images:", error)
			}
		}

		setSuggestedImages(suggestions)
		setIsLoading(false) // Stop loading
	}

	const [taglineTagProperties, setTaglineTagProperties] = useState({
		verticalAlign: "top",
		horizontalAlign: "left",
		textColor: "red",
		isBold: false,
		isItalic: false,
		fontFamily: "Arial",
		textBackgroundColor: "yellow",
	})

	const setTaglineProperties = (
		verticalAlign,
		horizontalAlign,
		textColor,
		isBold,
		isItalic,
		fontFamily,
		textBackgroundColor
	) => {
		setTaglineTagProperties({
			verticalAlign,
			horizontalAlign,
			textColor,
			isBold,
			isItalic,
			fontFamily,
			textBackgroundColor,
		})
		// addTaglineToCanvas();
	}

	const handleImageClick = (imageURL, index) => {
		if (imageURL) {
			const image = new Image()
			image.crossOrigin = "Anonymous"

			image.src = imageURL

			// Remove the previous image and text objects
			if (fabricImage) {
				canvas.current.remove(fabricImage)
			}
			if (fabricText) {
				canvas.current.remove(fabricText)
			}

			image.onload = () => {
				addImageToCanvas(image)

				switch (index) {
					case 0: // First image
						setTaglineProperties(
							"top",
							"left",
							"red",
							true,
							false,
							"Arial",
							"yellow"
						)
						break
					case 1: // Second image
						setTaglineProperties(
							"bottom",
							"left",
							"black",
							false,
							true,
							"Cursive",
							"pink"
						)
						break
					case 2: // Second image
						setTaglineProperties(
							"bottom",
							"right",
							"yellow",
							true,
							true,
							"sans-serif",
							"green"
						)
						break
					case 3: // Second image
						setTaglineProperties(
							"bottom",
							"left",
							"black",
							false,
							true,
							"Cursive",
							"pink"
						)
						break
					case 4: // Second image
						setTaglineProperties(
							"bottom",
							"right",
							"#43215c",
							false,
							true,
							"Cursive",
							"#75c9be"
						)
						break
					case 5: // Second image
						setTaglineProperties(
							"center",
							"center",
							"black",
							false,
							true,
							"Raleway",
							"#c9a675"
						)
						break
					case 6: // Second image
						setTaglineProperties(
							"bottom",
							"center",
							"#734e61",
							false,
							true,
							"Teko",
							"#3e1463"
						)
						break
					case 7: // Second image
						setTaglineProperties(
							"center",
							"top",
							"#63141f",
							false,
							true,
							"Orbitron",
							"#f7ca36"
						)
						break
					case 8: // Second image
						setTaglineProperties(
							"top",
							"left",
							"#f78036",
							false,
							true,
							"Raleway",
							"black"
						)
						break
					case 9: // Second image
						setTaglineProperties(
							"center",
							"right",
							"#63bf8e",
							false,
							true,
							"Monoton",
							"#203a6e"
						)
						break
					case 10: // Second image
						setTaglineProperties(
							"bottom",
							"center",
							"pink",
							false,
							true,
							"Sacramento",
							"#32206e"
						)
						break
					case 11: // Second image
						setTaglineProperties(
							"center",
							"right",
							"white",
							false,
							true,
							"Dancing Script",
							"#62206e"
						)
						break
					case 12: // Second image
						setTaglineProperties(
							"bottom",
							"center",
							"black",
							false,
							true,
							"Teko",
							"#e3d510"
						)
						break
					case 13: // Second image
						setTaglineProperties(
							"top",
							"left",
							"red",
							false,
							true,
							"Dancing Script",
							"#b0db14"
						)
						break
					case 14: // Second image
						setTaglineProperties(
							"bottom",
							"left",
							"yellow",
							false,
							true,
							"Monoton",
							"#224727"
						)
						break
					case 15: // Second image
						setTaglineProperties(
							"center",
							"right",
							"#0ee848",
							false,
							true,
							"Sacramento",
							"black"
						)
						break
					case 16: // Second image
						setTaglineProperties(
							"bottom",
							"center",
							"white",
							false,
							true,
							"Teko",
							"black"
						)
						break
					case 17: // Second image
						setTaglineProperties(
							"top",
							"right",
							"red",
							false,
							true,
							"Dancing Script",
							"green"
						)
						break
					case 18: // Second image
						setTaglineProperties(
							"bottom",
							"center",
							"green",
							false,
							true,
							"Monoton",
							"red"
						)
						break
					case 19: // Second image
						setTaglineProperties(
							"center",
							"center",
							"blue",
							false,
							true,
							"Raleway",
							"pink"
						)
						break
					default:
						setTaglineProperties(
							"top",
							"right",
							"blue",
							false,
							false,
							"Times New Roman",
							"black"
						)
				}

				addTaglineToCanvas()
			}
		}
	}

	const addImageToCanvas = (image) => {
		const fabricImage = new fabric.Image(image, {
			type: "image",
			left: 0,
			top: 0,
			scaleX: 1,
			scaleY: 1,
		})

		canvas.current.add(fabricImage)
		canvas.current.setActiveObject(fabricImage)
		canvas.current.renderAll()

		setFabricImage(fabricImage)
	}

	const addTaglineToCanvas = () => {
		const activeObject = fabricImage || canvas.current.getActiveObject()

		if (tagline) {
			const text = new fabric.Textbox(tagline, {
				left: 10,
				top: 10,
				type: "text",
				fontSize: 60,
				fill: taglineTagProperties.textColor,
				fontWeight: taglineTagProperties.isBold ? "bold" : "normal",
				fontStyle: taglineTagProperties.isItalic ? "italic" : "normal",
				fontFamily: taglineTagProperties.fontFamily,
				textBackgroundColor: taglineTagProperties.textBackgroundColor,
			})

			switch (taglineTagProperties.verticalAlign) {
				case "top":
					text.top = 10
					break
				case "bottom":
					text.top = canvas.current.height - text.height - 10
					break
				default:
					text.top = canvas.current.height / 2 - text.height / 2
			}

			switch (taglineTagProperties.horizontalAlign) {
				case "left":
					text.left = 10
					break
				case "right":
					text.left = canvas.current.width - text.width - 10
					break
				default:
					text.left = canvas.current.width / 2 - text.width / 2
			}

			canvas.current.add(text)
			canvas.current.setActiveObject(text)
			canvas.current.renderAll()

			// Track the text object
			setFabricText(text)
		}
	}

	const onSearch = (searchTerm) => {
		setKeyword(searchTerm)
		console.log("search", keyword)
	}

	return (
		<>
			<Box
				sx={{
					height: "92vh",
					overflowY: "auto",
				}}
			>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<input
						type="text"
						placeholder="Enter keyword"
						value={keyword}
						onChange={handleKeywordChange}
						maxLength={20}
						style={{
							textIndent: "0.3rem",
							marginTop: "1rem",
							height: "2.2rem",
							fontSize: "1rem",
							width: "15rem",
							borderRadius: "0.3rem",
						}}
					/>

					<Box
						sx={{
							width: "15rem",
							background: "white",
							position: "absolute",
							zIndex: "1",
							top: "7rem",
							border: "1px solid gray",
						}}
					>
						<Box>
							{data
								.filter((item) => {
									const searchTerm = keyword.toLocaleLowerCase()
									const words = item.words.toLocaleLowerCase()
									return (
										searchTerm &&
										words.startsWith(searchTerm) &&
										words != searchTerm
									)
								})
								.slice(0, 10)
								.map((item) => (
									<Box
										onClick={() => onSearch(item.words)}
										className="dropdown-row"
										sx={{
											cursor: "pointer",
											textAlign: "start",
											margin: "2px 0",
										}}
										key={item.words}
									>
										{item.words}
									</Box>
								))}
						</Box>
					</Box>

					<input
						type="text"
						placeholder="Enter Tagline"
						value={tagline}
						onChange={(e) => setTagline(e.target.value)}
						style={{
							textIndent: "0.3rem",
							marginTop: "0.5rem",
							height: "2.2rem",
							fontSize: "1rem",
							width: "15rem",
							borderRadius: "0.3rem",
						}}
					/>
					<button
						onClick={fetchImages}
						style={{
							marginTop: "0.5rem",
							height: "2.2rem",
							fontSize: "1rem",
							borderRadius: "0.3rem",
							width: "15rem",
						}}
					>
						Fetch Suggested Images
					</button>
				</Box>

				{/* <div className="suggested-images">
        
        {suggestedImages.map((imageURL, index) => (
          <img
            key={index}
            src={imageURL}
            alt={Suggested Image ${index + 1}}
            onClick={() => handleImageClick(imageURL, index)}
            style={{
              width: "120px",
              height: "75px",
              margin: "10px",
              cursor: "pointer",
            }}
          />
        ))}
      </div> */}

				<div className="suggested-images" style={{ marginTop: "0.8rem" }}>
					{isLoading ? (
						<Box
							sx={{
								display: "flex",
								justifyContent: "center",
							}}
						>
							<div className="loading-spinner"></div>
						</Box>
					) : (
						suggestedImages.map((imageURL, index) => (
							<img
								key={index}
								src={imageURL}
								alt={`Suggested Image ${index + 1}`}
								onClick={() => handleImageClick(imageURL, index)}
								style={{
									width: "113px",
									height: "70px",
									margin: "10px",
									cursor: "pointer",
								}}
							/>
						))
					)}
				</div>
			</Box>
		</>
	)
}

export default DrawerAI
