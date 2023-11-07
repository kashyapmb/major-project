import { Box, Typography } from "@mui/material"
import React, { useEffect, useRef, useState } from "react"
import { canvas } from "./CanvasContainer"
import Button from "@mui/material/Button"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import { RxTransparencyGrid } from "react-icons/rx"
import { BiMinus } from "react-icons/bi"
import { BsPlus } from "react-icons/bs"
import { MdFormatLineSpacing } from "react-icons/md"
import { RiBold } from "react-icons/ri"
import { LuItalic, LuUnderline } from "react-icons/lu"
import { fabric } from "fabric"
import { AiOutlineBgColors, AiOutlineFontColors } from "react-icons/ai"

function CanvasHeader({
	objectClicked,
	selectedColor,
	setSelectedColor,
	selectedOpacity,
	setSelectedOpacity,
	selectedFontSize,
	setSelectedFontSize,
	setSelectNum,
}) {
	var selectedObject

	const [selectedTextSize, setSelectedTextSize] = useState(20) // Initial text size is 20
	const [isBold, setIsBold] = useState(false)
	const [isItalic, setIsItalic] = useState(false)
	const [isUnderline, setIsUnderline] = useState(false)
	const [letterSpacing, setLetterSpacing] = useState(0)
	const [lineSpacing, setLineSpacing] = useState(0)

	const handleColorChange = (event) => {
		setSelectedColor(event.target.value)
		const activeObject = canvas.current.getActiveObject()
		if (activeObject) {
			activeObject.set("fill", selectedColor)
			activeObject.set("stroke", selectedColor)
			canvas.current.renderAll()
		}
	}
	useEffect(() => {
		if (objectClicked) {
			console.log(objectClicked)
			console.log(canvas.current.getActiveObject())
		}
		// console.log("Selected object details:")
		// console.log("Type:", selectedObject.type)
		// console.log("Left:", selectedObject.left)
		// console.log("Top:", selectedObject.top)
		// console.log("Width:", selectedObject.width)
		// console.log("Height:", selectedObject.height)
		// console.log("Fill color:", selectedObject.fill)
		// console.log("Called")
	}, [objectClicked, selectedColor, selectedFontSize])

	const handleOpacityChange = (event) => {
		const newOpacity = parseFloat(event.target.value)
		setSelectedOpacity(newOpacity)

		const activeObject = canvas.current.getActiveObject()
		if (activeObject) {
			activeObject.set("opacity", newOpacity)
			canvas.current.renderAll()
		}
	}

	const [anchorEl, setAnchorEl] = React.useState(null)
	const [anchorE2, setAnchorE2] = React.useState(null)
	const open = Boolean(anchorEl)
	const open2 = Boolean(anchorE2)
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget)
	}
	const handleClose = () => {
		setAnchorEl(null)
	}
	const handleClick2 = (event) => {
		setAnchorE2(event.currentTarget)
	}
	const handleClose2 = () => {
		setAnchorE2(null)
	}

	const toggleBold = () => {
		const activeObject = canvas.current.getActiveObject()
		if (activeObject && activeObject.isType("i-text")) {
			setIsBold(!isBold)
			activeObject.set("fontWeight", isBold ? "normal" : "bold")
			canvas.current.renderAll()
		}
	}

	const toggleItalic = () => {
		const activeObject = canvas.current.getActiveObject()
		if (activeObject && activeObject.isType("i-text")) {
			setIsItalic(!isItalic)
			activeObject.set("fontStyle", isItalic ? "normal" : "italic")
			canvas.current.renderAll()
		}
	}

	const toggleUnderline = () => {
		const activeObject = canvas.current.getActiveObject()
		if (activeObject && activeObject.isType("i-text")) {
			setIsUnderline(!isUnderline)
			activeObject.set("underline", isUnderline)
			canvas.current.renderAll()
		}
	}

	const handleLetterSpacingChange = (event) => {
		const newLetterSpacing = parseFloat(event.target.value)
		setLetterSpacing(newLetterSpacing)

		const activeObject = canvas.current.getActiveObject()
		if (activeObject && activeObject.isType("i-text")) {
			activeObject.set("charSpacing", newLetterSpacing)
			canvas.current.renderAll()
		}
	}
	const handleLineSpacingChange = (event) => {
		const newLineSpacing = parseFloat(event.target.value)
		setLineSpacing(newLineSpacing)

		const activeObject = canvas.current.getActiveObject()
		if (activeObject && activeObject.isType("i-text")) {
			activeObject.set("lineHeight", 1 + newLineSpacing / 10) // Adjust the factor as needed
			canvas.current.renderAll()
		}
	}

	const [selectedFontFamily, setSelectedFontFamily] = useState("Arial")
	const handleFontFamilyChange = (event) => {
		const newFontFamily = event.target.value
		setSelectedFontFamily(newFontFamily)

		const activeObject = canvas.current.getActiveObject()
		if (activeObject && activeObject.isType("i-text")) {
			activeObject.set("fontFamily", newFontFamily)
			canvas.current.renderAll()
		}
	}

	const handleIncrement = () => {
		const activeObject = canvas.current.getActiveObject()
		setSelectedFontSize(activeObject.fontSize + 1)
		if (activeObject && activeObject.isType("i-text")) {
			activeObject.set("fontSize", selectedFontSize)
			canvas.current.renderAll()
		}
	}

	const handleDecrement = () => {
		const activeObject = canvas.current.getActiveObject()
		setSelectedFontSize(activeObject.fontSize - 1)
		if (activeObject && activeObject.isType("i-text")) {
			activeObject.set("fontSize", selectedFontSize)
			canvas.current.renderAll()
		}
	}

	const textSizeChanged = (event) => {
		const activeObject = canvas.current.getActiveObject()
		var size = 1
		if (event.target.value != "NaN") size = event.target.value
		setSelectedFontSize(size)
		if (activeObject && activeObject.isType("i-text")) {
			activeObject.set("fontSize", size)
			canvas.current.renderAll()
		}
	}

	const defaultGradientColors = ["#000000", "#FFFFFF"]
	const [gradientColors, setGradientColors] = useState(defaultGradientColors)
	const [showGradientPicker, setShowGradientPicker] = useState(false)
	const [selectedGradientType, setSelectedGradientType] = useState("linear")

	const toggleGradientPicker = () => {
		setShowGradientPicker(!showGradientPicker)
	}
	const addGradientColor = () => {
		setGradientColors([...gradientColors, "#000000"]) // Add a default color, you can change it as needed
	}
	const removeGradientColor = (indexToRemove) => {
		// Check if the color is not one of the default colors before removing
		if (indexToRemove >= 2 && indexToRemove < gradientColors.length) {
			const updatedColors = [...gradientColors]
			updatedColors.splice(indexToRemove, 1)
			setGradientColors(updatedColors)
		}
	}

	const handleGradientTypeChange = (event) => {
		setSelectedGradientType(event.target.value)
	}

	const handleGradientColorChange = (index, color) => {
		const updatedColors = [...gradientColors]
		updatedColors[index] = color
		setGradientColors(updatedColors)
	}
	const applyGradient = () => {
		const activeObject = canvas.current.getActiveObject()
		if (activeObject) {
			const gradientStops = gradientColors.map((color, index) => ({
				color,
				offset: index / (gradientColors.length - 1),
			}))

			let gradient
			if (selectedGradientType === "linear") {
				gradient = new fabric.Gradient({
					type: "linear",
					coords: { x1: 0, y1: 0, x2: activeObject.width, y2: 0 },
					colorStops: gradientStops,
				})
			} else if (selectedGradientType === "radial") {
				gradient = new fabric.Gradient({
					type: "radial",
					coords: { r1: 0, r2: activeObject.width / 2 },
					colorStops: gradientStops,
				})
			}

			activeObject.set("fill", gradient)
			canvas.current.renderAll()
		} else {
			alert("Select an object first")
		}
	}

	const hiddenFileInput = useRef(null)
	const handleClickGradient = (event) => {
		hiddenFileInput.current.click()
	}
	const handleChangeGradient = (event) => {
		const file = event.target.files[0]
		if (file) {
			const reader = new FileReader()
			reader.onload = (e) => {
				const image = new Image()
				image.src = e.target.result
				image.onload = () => {
					// setUploadedImages([...uploadedImages, image])
				}
			}
			reader.readAsDataURL(file)
		}
	}

	const shapeChanged = (shape) => {
		const img = canvas.current.getActiveObject()
		if (img) {
			if (shape == "square") {
				img.set({
					clipPath: new fabric.Circle({
						radius: 100000,
						originX: "center",
						originY: "center",
					}),
				})
			} else if (shape == "circle") {
				img.set({
					clipPath: new fabric.Circle({
						radius: 300,
						originX: "center",
						originY: "center",
					}),
				})
			} else if (shape == "polygon") {
				img.set({
					clipTo: function (ctx) {
						ctx.rect(-img.width / 2, -img.height / 2, img.width, img.height)
					},
				})
			}
			canvas.current.renderAll()
		}
	}

	const bringForward = () => {
		const activeObject = canvas.current.getActiveObject()
		if (activeObject) {
			canvas.current.bringForward(activeObject)
			canvas.current.renderAll()
		}
	}

	const sendBackward = () => {
		const activeObject = canvas.current.getActiveObject()
		if (activeObject) {
			canvas.current.sendBackwards(activeObject)
			canvas.current.renderAll()
		}
	}

	return (
		<>
			<Box sx={{ height: "3rem", background: "white" }}>

				{/* For Element */}
				{objectClicked === 1 && (
					<>
						<Box
							sx={{
								pl: "1rem",
								height: "3rem",
								display: "flex",
								alignItems: "center",
							}}
						>
							<Button
								id="basic-button"
								aria-controls={open ? "basic-menu" : undefined}
								aria-haspopup="true"
								aria-expanded={open ? "true" : undefined}
								onClick={handleClick}
							>
								<RxTransparencyGrid size={25} color="black" />
							</Button>
							<Menu
								id="basic-menu"
								anchorEl={anchorEl}
								open={open}
								onClose={handleClose}
								MenuListProps={{
									"aria-labelledby": "basic-button",
								}}
							>
								<MenuItem>
									<Box sx={{ display: "flex", flexDirection: "column" }}>
										<Typography>Transparency</Typography>
										<input
											type="range"
											id="opacitySlider"
											min="0"
											max="1"
											step="0.01"
											value={selectedOpacity}
											onChange={handleOpacityChange}
										/>
									</Box>
								</MenuItem>
							</Menu>

							{/* <Box>
								<Typography
									onClick={() => shapeChanged("square")}
									sx={{ cursor: "pointer" }}
								>
									Square
								</Typography>
							</Box> */}
							<Box
								sx={{
									width: "4rem",
									p: "0.2rem",
									border: "1px solid black",
									borderRadius: "0.3rem",
									display: "flex",
								}}
							>
								<Typography
									onClick={() => shapeChanged("circle")}
									sx={{ cursor: "pointer" }}
								>
									Circle
								</Typography>
							</Box>
							{/* <Box>
								<Typography onClick={shapeChanged("polygon")}>
									Polygon
								</Typography>
							</Box> */}

							<Box
								sx={{
									ml: "0.8rem",
									height: "2rem",
									width: "2rem",
									cursor: "pointer",
									p: "0.2rem",
									border: "1px solid black",
									borderRadius: "0.3rem",
								}}
								onClick={() => setSelectNum(7)}
							>
								<AiOutlineBgColors size={25} color="black" />
							</Box>
							<Box
								sx={{
									ml: "0.8rem",
									height: "2rem",
									width: "4.6rem",
									cursor: "pointer",
									p: "0.2rem",
									border: "1px solid black",
									borderRadius: "0.3rem",
								}}
								onClick={() => setSelectNum(8)}
							>
								<Typography>Position</Typography>
							</Box>

							<Box sx={{ display: "flex" }}>
								<Box
									sx={{
										ml: "0.8rem",
										height: "2rem",
										width: "5rem",
										cursor: "pointer",
										p: "0.2rem",
										border: "1px solid black",
										borderRadius: "0.3rem",
									}}
									onClick={bringForward}
								>
									<Typography>Forward</Typography>
								</Box>
								<Box
									sx={{
										ml: "0.8rem",
										height: "2rem",
										width: "5rem",
										cursor: "pointer",
										p: "0.2rem",
										border: "1px solid black",
										borderRadius: "0.3rem",
									}}
									onClick={sendBackward}
								>
									<Typography>Backward</Typography>
								</Box>


							</Box>
						</Box>
					</>
				)}

				{/* For Text */}
				{objectClicked === 2 && (
					<Box
						sx={{
							pl: "1rem",
							height: "3rem",
							display: "flex",
							alignItems: "center",
						}}
					>
						<select
							id="fontFamilySelect"
							value={selectedFontFamily}
							onChange={handleFontFamilyChange}
							style={{
								height: "1.8rem",
								width: "15rem",
								borderRadius: "0.3rem",
							}}
						>
							<option value="Arial">Arial</option>
							<option value="Verdana">Verdana</option>
							<option value="Times New Roman">Times New Roman</option>
							<option value="Georgia">Georgia</option>
							<option value="Courier New">Courier New</option>
							<option value="Helvetica">Helvetica</option>
							<option value="Trebuchet MS">Trebuchet MS</option>
							<option value="Arial Black">Arial Black</option>
							<option value="Comic Sans MS">Comic Sans MS</option>
							<option value="Lucida Sans Unicode">Lucida Sans Unicode</option>
							<option value="Palatino Linotype">Palatino Linotype</option>
							<option value="Tahoma">Tahoma</option>
							<option value="Impact">Impact</option>
							<option value="Book Antiqua">Book Antiqua</option>
							<option value="Arial Narrow">Arial Narrow</option>
							<option value="Arial Narrow">Arial Narrow</option>
							{/* Add more font options as needed */}
							<option value="Bookman, serif">Bookman</option>
							<option value="Comic Sans MS, cursive">Comic Sans MS</option>
							<option value="Palatino, serif">Palatino</option>
							<option value="Arial Black, sans-serif">Arial Black</option>
							<option value="Cursive, cursive">Cursive</option>
							<option value="Lucida Sans, sans-serif">Lucida Sans</option>
							<option value="Impact, sans-serif">Impact</option>
							<option value="Garamond, serif">Garamond</option>
							<option value="Century Gothic, sans-serif">Century Gothic</option>
							<option value="Franklin Gothic Medium, sans-serif">
								Franklin Gothic Medium
							</option>
							<option value="Consolas, monospace">Consolas</option>
							<option value="Cambria, serif">Cambria</option>
							<option value="Rockwell, serif">Rockwell</option>
							<option value="Arial Narrow, sans-serif">Arial Narrow</option>
							<option value="Copperplate, sans-serif">Copperplate</option>
							<option value="Futura, sans-serif">Futura</option>
							<option value="Avant Garde, sans-serif">Avant Garde</option>
							<option value="Didot, serif">Didot</option>
							<option value="Baskerville, serif">Baskerville</option>
							<option value="Bodoni MT, serif">Bodoni MT</option>
							<option value="Gill Sans, sans-serif">Gill Sans</option>
							<option value="Perpetua, serif">Perpetua</option>
							<option value="Brush Script MT, cursive">Brush Script MT</option>
							<option value="Papyrus, sans-serif">Papyrus</option>
							<option value="Courier, monospace">Courier</option>
							<option value="Monaco, monospace">Monaco</option>
							<option value="Comic Sans, cursive">Comic Sans</option>
							<option value="Verdana Pro, sans-serif">Verdana Pro</option>
							<option value="Trebuchet MS Pro, sans-serif">
								Trebuchet MS Pro
							</option>
							<option value="Bookman Old Style, serif">
								Bookman Old Style
							</option>
							<option value="Century Schoolbook, serif">
								Century Schoolbook
							</option>
							<option value="Franklin Gothic, sans-serif">
								Franklin Gothic
							</option>
							<option value="Palatino Linotype, serif">
								Palatino Linotype
							</option>
							<option value="Lucida Bright, serif">Lucida Bright</option>
							<option value="Tahoma, sans-serif">Tahoma</option>
							<option value="Geneva, sans-serif">Geneva</option>
							<option value="Optima, sans-serif">Optima</option>
							<option value="Courier New Pro, monospace">
								Courier New Pro
							</option>
							<option value="Calibri, sans-serif">Calibri</option>
							<option value="Candara, sans-serif">Candara</option>
							<option value="Corbel, sans-serif">Corbel</option>
							<option value="Ebrima, sans-serif">Ebrima</option>
							<option value="Frank Ruhl Libre, serif">Frank Ruhl Libre</option>
							<option value="Harrington, cursive">Harrington</option>
							<option value="Gill Sans Nova, sans-serif">Gill Sans Nova</option>
							<option value="Century Gothic Pro, sans-serif">
								Century Gothic Pro
							</option>
							<option value="Rockwell Nova, serif">Rockwell Nova</option>
							<option value="Tahoma Pro, sans-serif">Tahoma Pro</option>
							<option value="Bell MT, serif">Bell MT</option>
							<option value="Century, serif">Century</option>
							<option value="Mistral, cursive">Mistral</option>
							<option value="Arial Nova, sans-serif">Arial Nova</option>
							<option value="Palatino Linotype, serif">
								Palatino Linotype
							</option>
							<option value="Andale Mono, monospace">Andale Mono</option>
							<option value="Rockwell Condensed, serif">
								Rockwell Condensed
							</option>
							<option value="Bodoni MT Condensed, serif">
								Bodoni MT Condensed
							</option>
							<option value="Garamond Premier Pro, serif">
								Garamond Premier Pro
							</option>
							<option value="Myriad Pro, sans-serif">Myriad Pro</option>
							<option value="Gill Sans MT, sans-serif">Gill Sans MT</option>
							<option value="Century Gothic Nova, sans-serif">
								Century Gothic Nova
							</option>
							<option value="Trajan Pro, serif">Trajan Pro</option>
							<option value="Consolas Pro, monospace">Consolas Pro</option>
							<option value="Monaco Pro, monospace">Monaco Pro</option>
							<option value="Lucida Sans Typewriter, monospace">
								Lucida Sans Typewriter
							</option>
							<option value="Lucida Fax, monospace">Lucida Fax</option>
							<option value="Palatino Nova, serif">Palatino Nova</option>
							<option value="Cochin, serif">Cochin</option>
							<option value="Bradley Hand, cursive">Bradley Hand</option>
							<option value="Lucida Calligraphy, cursive">
								Lucida Calligraphy
							</option>
							<option value="Berlin Sans FB, sans-serif">Berlin Sans FB</option>
							<option value="Edwardian Script ITC, cursive">
								Edwardian Script ITC
							</option>
							<option value="Calisto MT, serif">Calisto MT</option>
							<option value="Vladimir Script, cursive">Vladimir Script</option>
							<option value="Bauhaus 93, sans-serif">Bauhaus 93</option>
							<option value="Elephant, sans-serif">Elephant</option>
							<option value="Tempus Sans ITC, sans-serif">
								Tempus Sans ITC
							</option>
							<option value="Chiller, sans-serif">Chiller</option>
							<option value="High Tower Text, serif">High Tower Text</option>
							<option value="Arial Unicode MS, sans-serif">
								Arial Unicode MS
							</option>
							<option value="Cambria Math, serif">Cambria Math</option>
							<option value="Symbol, sans-serif">Symbol</option>
							<option value="Webdings, sans-serif">Webdings</option>
							<option value="Wingdings, sans-serif">Wingdings</option>
							<option value="Wingdings 2, sans-serif">Wingdings 2</option>
							<option value="Wingdings 3, sans-serif">Wingdings 3</option>
							<option value="Zapf Dingbats, sans-serif">Zapf Dingbats</option>
							<option value="MS Gothic, sans-serif">MS Gothic</option>
							<option value="MS Mincho, serif">MS Mincho</option>
							<option value="MS PGothic, sans-serif">MS PGothic</option>
							<option value="MS PMincho, serif">MS PMincho</option>
							<option value="MS UI Gothic, sans-serif">MS UI Gothic</option>
							<option value="Century Gothic, sans-serif">Century Gothic</option>
							<option value="Gill Sans, sans-serif">Gill Sans</option>
							<option value="Palatino, serif">Palatino</option>
							<option value="Tahoma, sans-serif">Tahoma</option>
							<option value="Trebuchet MS, sans-serif">Trebuchet MS</option>
							<option value="Arial Black, sans-serif">Arial Black</option>
							<option value="Bookman Old Style, serif">
								Bookman Old Style
							</option>
							<option value="Copperplate Gothic, sans-serif">
								Copperplate Gothic
							</option>
							<option value="Lucida Console, monospace">Lucida Console</option>
							<option value="Arial Narrow, sans-serif">Arial Narrow</option>
							<option value="Geneva, sans-serif">Geneva</option>
							<option value="Optima, sans-serif">Optima</option>
							<option value="Courier New Pro, monospace">
								Courier New Pro
							</option>
							<option value="Calibri, sans-serif">Calibri</option>
							<option value="Candara, sans-serif">Candara</option>
							<option value="Corbel, sans-serif">Corbel</option>
							<option value="Ebrima, sans-serif">Ebrima</option>
							<option value="Frank Ruhl Libre, serif">Frank Ruhl Libre</option>
							<option value="Harrington, cursive">Harrington</option>
							<option value="Gill Sans Nova, sans-serif">Gill Sans Nova</option>
							<option value="Century Gothic Pro, sans-serif">
								Century Gothic Pro
							</option>
							<option value="Rockwell Nova, serif">Rockwell Nova</option>
							<option value="Tahoma Pro, sans-serif">Tahoma Pro</option>
							<option value="Bell MT, serif">Bell MT</option>
							<option value="Century, serif">Century</option>
							<option value="Mistral, cursive">Mistral</option>
							<option value="Arial Nova, sans-serif">Arial Nova</option>
							<option value="Palatino Linotype, serif">
								Palatino Linotype
							</option>
							<option value="Andale Mono, monospace">Andale Mono</option>
							<option value="Monotype Corsiva, cursive">
								Monotype Corsiva
							</option>
							<option value="Century Schoolbook, serif">
								Century Schoolbook
							</option>
							<option value="Franklin Gothic, sans-serif">
								Franklin Gothic
							</option>
							<option value="Palatino Nova, serif">Palatino Nova</option>
							<option value="Cochin, serif">Cochin</option>
							<option value="Bradley Hand, cursive">Bradley Hand</option>
							<option value="Lucida Calligraphy, cursive">
								Lucida Calligraphy
							</option>
							<option value="Berlin Sans FB, sans-serif">Berlin Sans FB</option>
							<option value="Edwardian Script ITC, cursive">
								Edwardian Script ITC
							</option>
							<option value="Calisto MT, serif">Calisto MT</option>
							<option value="Vladimir Script, cursive">Vladimir Script</option>
							<option value="Bauhaus 93, sans-serif">Bauhaus 93</option>
							<option value="Elephant, sans-serif">Elephant</option>
							<option value="Tempus Sans ITC, sans-serif">
								Tempus Sans ITC
							</option>
							<option value="Chiller, sans-serif">Chiller</option>
							<option value="Matura MT Script Capitals, cursive">
								Matura MT Script Capitals
							</option>
							<option value="Algerian, sans-serif">Algerian</option>
							<option value="Blackadder ITC, cursive">Blackadder ITC</option>
							<option value="Felix Titling, sans-serif">Felix Titling</option>
							<option value="Old English Text MT, serif">
								Old English Text MT
							</option>
							<option value="Ravie, cursive">Ravie</option>
							<option value="Showcard Gothic, sans-serif">
								Showcard Gothic
							</option>
							<option value="Stencil, sans-serif">Stencil</option>
							<option value="Magneto, cursive">Magneto</option>
							<option value="Wide Latin, sans-serif">Wide Latin</option>
							<option value="Cooper Black, sans-serif">Cooper Black</option>
							<option value="Agency FB, sans-serif">Agency FB</option>
							<option value="Goudy Stout, serif">Goudy Stout</option>
							<option value="Segoe Script, cursive">Segoe Script</option>
							<option value="Bernard MT Condensed, sans-serif">
								Bernard MT Condensed
							</option>
							<option value="Freestyle Script, cursive">
								Freestyle Script
							</option>
							<option value="Brush Script Std, cursive">
								Brush Script Std
							</option>
							<option value="Book Antiqua, serif">Book Antiqua</option>
							<option value="Century Gothic, sans-serif">Century Gothic</option>
							<option value="French Script MT, cursive">
								French Script MT
							</option>
							<option value="Wide Latin, sans-serif">Wide Latin</option>
							<option value="Curlz MT, cursive">Curlz MT</option>
							<option value="Lucida Handwriting, cursive">
								Lucida Handwriting
							</option>
							<option value="Bodoni MT, serif">Bodoni MT</option>
							<option value="Franklin Gothic Medium, sans-serif">
								Franklin Gothic Medium
							</option>
							<option value="Gloucester MT Extra Condensed, sans-serif">
								Gloucester MT Extra Condensed
							</option>
							<option value="Brush Script MT, cursive">Brush Script MT</option>
							<option value="Vivaldi, cursive">Vivaldi</option>
							<option value="Maiandra GD, sans-serif">Maiandra GD</option>
							<option value="Constantia, serif">Constantia</option>
							<option value="Tw Cen MT, sans-serif">Tw Cen MT</option>
							<option value="Onyx, sans-serif">Onyx</option>
							<option value="Perpetua Titling MT, sans-serif">
								Perpetua Titling MT
							</option>
							<option value="Gill Sans Ultra Bold, sans-serif">
								Gill Sans Ultra Bold
							</option>
							<option value="Franklin Gothic Heavy, sans-serif">
								Franklin Gothic Heavy
							</option>
							<option value="OCR A Extended, monospace">OCR A Extended</option>
							<option value="Bookman Old Style Bold, serif">
								Bookman Old Style Bold
							</option>
							<option value="Century Gothic Bold, sans-serif">
								Century Gothic Bold
							</option>
							<option value="Cambria Bold, serif">Cambria Bold</option>
							<option value="Verdana Bold, sans-serif">Verdana Bold</option>
							<option value="Trebuchet MS Bold, sans-serif">
								Trebuchet MS Bold
							</option>
							<option value="Arial Black, sans-serif">Arial Black</option>
							<option value="Impact, sans-serif">Impact</option>
							<option value="Lucida Sans Bold, sans-serif">
								Lucida Sans Bold
							</option>
							<option value="Palatino Bold, serif">Palatino Bold</option>
							<option value="Rockwell Bold, serif">Rockwell Bold</option>
							<option value="Tahoma Bold, sans-serif">Tahoma Bold</option>
							<option value="Geneva Bold, sans-serif">Geneva Bold</option>
							<option value="Optima Bold, sans-serif">Optima Bold</option>
							<option value="Calibri Bold, sans-serif">Calibri Bold</option>
							<option value="Candara Bold, sans-serif">Candara Bold</option>
							<option value="Corbel Bold, sans-serif">Corbel Bold</option>
							<option value="Ebrima Bold, sans-serif">Ebrima Bold</option>
							<option value="Gill Sans Nova Bold, sans-serif">
								Gill Sans Nova Bold
							</option>
							<option value="Century Gothic Pro Bold, sans-serif">
								Century Gothic Pro Bold
							</option>
							<option value="Rockwell Nova Bold, serif">
								Rockwell Nova Bold
							</option>
							<option value="Tahoma Pro Bold, sans-serif">
								Tahoma Pro Bold
							</option>
							<option value="Bell MT Bold, serif">Bell MT Bold</option>
							<option value="Century Bold, serif">Century Bold</option>
							<option value="Arial Narrow Bold, sans-serif">
								Arial Narrow Bold
							</option>
							<option value="Geneva Bold, sans-serif">Geneva Bold</option>
							<option value="Optima Bold, sans-serif">Optima Bold</option>
							<option value="Courier New Pro Bold, monospace">
								Courier New Pro Bold
							</option>
							<option value="Calibri Bold, sans-serif">Calibri Bold</option>
							<option value="Candara Bold, sans-serif">Candara Bold</option>
							<option value="Corbel Bold, sans-serif">Corbel Bold</option>
							<option value="Ebrima Bold, sans-serif">Ebrima Bold</option>
							<option value="Frank Ruhl Libre Bold, serif">
								Frank Ruhl Libre Bold
							</option>
							<option value="Harrington Bold, cursive">Harrington Bold</option>
							<option value="Gill Sans Nova Bold, sans-serif">
								Gill Sans Nova Bold
							</option>
							<option value="Century Gothic Pro Bold, sans-serif">
								Century Gothic Pro Bold
							</option>
							<option value="Rockwell Nova Bold, serif">
								Rockwell Nova Bold
							</option>
							<option value="Tahoma Pro Bold, sans-serif">
								Tahoma Pro Bold
							</option>
							<option value="Bell MT Bold, serif">Bell MT Bold</option>
							<option value="Century Bold, serif">Century Bold</option>
							<option value="Arial Narrow Bold, sans-serif">
								Arial Narrow Bold
							</option>
							<option value="Geneva Bold, sans-serif">Geneva Bold</option>
							<option value="Optima Bold, sans-serif">Optima Bold</option>
							<option value="Courier New Pro Bold, monospace">
								Courier New Pro Bold
							</option>
							<option value="Bodoni Poster, serif">Bodoni Poster</option>
							<option value="Century Gothic Pro Condensed, sans-serif">
								Century Gothic Pro Condensed
							</option>
							<option value="Rockwell Condensed Bold, serif">
								Rockwell Condensed Bold
							</option>
							<option value="Verdana Pro Condensed, sans-serif">
								Verdana Pro Condensed
							</option>
							<option value="Palatino Nova Condensed, serif">
								Palatino Nova Condensed
							</option>
							<option value="Copperplate Gothic Bold, sans-serif">
								Copperplate Gothic Bold
							</option>
							<option value="Arial Unicode MS Bold, sans-serif">
								Arial Unicode MS Bold
							</option>
							<option value="Book Antiqua Bold, serif">
								Book Antiqua Bold
							</option>
							<option value="Corbel Light, sans-serif">Corbel Light</option>
							<option value="Lucida Sans Italic, sans-serif">
								Lucida Sans Italic
							</option>
							<option value="Felix Titling Italic, sans-serif">
								Felix Titling Italic
							</option>
							<option value="Agency FB Bold, sans-serif">Agency FB Bold</option>
							<option value="Elephant Bold, sans-serif">Elephant Bold</option>
							<option value="Tempus Sans ITC Bold, sans-serif">
								Tempus Sans ITC Bold
							</option>
							<option value="Chiller Bold, sans-serif">Chiller Bold</option>
							<option value="Matura MT Script Capitals Bold, cursive">
								Matura MT Script Capitals Bold
							</option>
							<option value="Algerian Bold, sans-serif">Algerian Bold</option>
							<option value="Blackadder ITC Bold, cursive">
								Blackadder ITC Bold
							</option>
							<option value="Felix Titling Bold, sans-serif">
								Felix Titling Bold
							</option>
							<option value="Old English Text MT Bold, serif">
								Old English Text MT Bold
							</option>
							<option value="Ravie Bold, cursive">Ravie Bold</option>
							<option value="Showcard Gothic Bold, sans-serif">
								Showcard Gothic Bold
							</option>
							<option value="Stencil Bold, sans-serif">Stencil Bold</option>
							<option value="Magneto Bold, cursive">Magneto Bold</option>
							<option value="Wide Latin Bold, sans-serif">
								Wide Latin Bold
							</option>
							<option value="Cooper Black Bold, sans-serif">
								Cooper Black Bold
							</option>
							<option value="Agency FB Bold, sans-serif">Agency FB Bold</option>
							<option value="Goudy Stout Bold, serif">Goudy Stout Bold</option>
							<option value="Segoe Script Bold, cursive">
								Segoe Script Bold
							</option>
							<option value="Bernard MT Condensed Bold, sans-serif">
								Bernard MT Condensed Bold
							</option>
							<option value="Freestyle Script Bold, cursive">
								Freestyle Script Bold
							</option>
							<option value="Brush Script Std Bold, cursive">
								Brush Script Std Bold
							</option>
							<option value="Century Bold, serif">Century Bold</option>
							<option value="French Script MT Bold, cursive">
								French Script MT Bold
							</option>
							<option value="Wide Latin Bold, sans-serif">
								Wide Latin Bold
							</option>
							<option value="Curlz MT Bold, cursive">Curlz MT Bold</option>
							<option value="Lucida Handwriting Bold, cursive">
								Lucida Handwriting Bold
							</option>
							<option value="Bodoni MT Bold, serif">Bodoni MT Bold</option>
							<option value="Franklin Gothic Medium Bold, sans-serif">
								Franklin Gothic Medium Bold
							</option>
							<option value="Gloucester MT Extra Condensed Bold, sans-serif">
								Gloucester MT Extra Condensed Bold
							</option>
							<option value="Brush Script MT Bold, cursive">
								Brush Script MT Bold
							</option>
							<option value="Vivaldi Bold, cursive">Vivaldi Bold</option>
							<option value="Maiandra GD Bold, sans-serif">
								Maiandra GD Bold
							</option>
							<option value="Constantia Bold, serif">Constantia Bold</option>
							<option value="Tw Cen MT Bold, sans-serif">Tw Cen MT Bold</option>
							<option value="Onyx Bold, sans-serif">Onyx Bold</option>
							<option value="Perpetua Titling MT Bold, sans-serif">
								Perpetua Titling MT Bold
							</option>
							<option value="Didot, serif">Didot</option>
							<option value="American Typewriter, serif">
								American Typewriter
							</option>
							<option value="Avant Garde Gothic, sans-serif">
								Avant Garde Gothic
							</option>
							<option value="Century Schoolbook, serif">
								Century Schoolbook
							</option>
							<option value="Euphemia UCAS, sans-serif">Euphemia UCAS</option>
							<option value="Gill Sans Nova Light, sans-serif">
								Gill Sans Nova Light
							</option>
							<option value="Hoefler Text, serif">Hoefler Text</option>
							<option value="Iowan Old Style, serif">Iowan Old Style</option>
							<option value="Noteworthy, sans-serif">Noteworthy</option>
							<option value="Oriya MN, sans-serif">Oriya MN</option>
							<option value="PingFang HK, sans-serif">PingFang HK</option>
							<option value="Plantagenet Cherokee, sans-serif">
								Plantagenet Cherokee
							</option>
							<option value="Telugu MN, sans-serif">Telugu MN</option>
							<option value="Thonburi, sans-serif">Thonburi</option>
							<option value="Trattatello, sans-serif">Trattatello</option>
							<option value="Verdana Pro Light, sans-serif">
								Verdana Pro Light
							</option>
							<option value="Zapfino, cursive">Zapfino</option>
							<option value="Arno Pro, serif">Arno Pro</option>
							<option value="Bodoni 72, serif">Bodoni 72</option>
							<option value="Clarendon, sans-serif">Clarendon</option>
							<option value="Cooper Black, sans-serif">Cooper Black</option>
							<option value="Didot, serif">Didot</option>
							<option value="Franklin Gothic, sans-serif">
								Franklin Gothic
							</option>
							<option value="Futura, sans-serif">Futura</option>
							<option value="Gill Sans, sans-serif">Gill Sans</option>
							<option value="Herculanum, sans-serif">Herculanum</option>
							<option value="Hoefler Text, serif">Hoefler Text</option>
							<option value="Lucida Grande, sans-serif">Lucida Grande</option>
							<option value="Menlo, monospace">Menlo</option>
							<option value="Optima, sans-serif">Optima</option>
							<option value="Papyrus, sans-serif">Papyrus</option>
							<option value="Rockwell, serif">Rockwell</option>
							<option value="Symbol, sans-serif">Symbol</option>
							<option value="Tahoma, sans-serif">Tahoma</option>
							<option value="Trebuchet MS, sans-serif">Trebuchet MS</option>
							<option value="Verdana, sans-serif">Verdana</option>
							<option value="Zapf Dingbats, sans-serif">Zapf Dingbats</option>
							<option value="Bodoni 72 Oldstyle, serif">
								Bodoni 72 Oldstyle
							</option>
							<option value="Bradley Hand, cursive">Bradley Hand</option>
							<option value="Chalkboard, sans-serif">Chalkboard</option>
							<option value="Chalkduster, sans-serif">Chalkduster</option>
							<option value="Cochin, serif">Cochin</option>
							<option value="Copperplate, sans-serif">Copperplate</option>
							<option value="Courier, monospace">Courier</option>
							<option value="Courier New, monospace">Courier New</option>
							<option value="Futura Condensed ExtraBold, sans-serif">
								Futura Condensed ExtraBold
							</option>
							<option value="Georgia, serif">Georgia</option>
							<option value="Gill Sans MT, sans-serif">Gill Sans MT</option>
							<option value="Herculanum, sans-serif">Herculanum</option>
							<option value="Impact, sans-serif">Impact</option>
							<option value="Marker Felt, sans-serif">Marker Felt</option>
							<option value="Optima, sans-serif">Optima</option>
							<option value="Papyrus, sans-serif">Papyrus</option>
							<option value="Plantagenet Cherokee, sans-serif">
								Plantagenet Cherokee
							</option>
							<option value="Tahoma, sans-serif">Tahoma</option>
							<option value="Times New Roman, serif">Times New Roman</option>
							<option value="Verdana, sans-serif">Verdana</option>
							<option value="Webdings, sans-serif">Webdings</option>
							<option value="Zapfino, cursive">Zapfino</option>
						</select>

						<Box sx={{ display: "flex" }}>
							<button
								onClick={handleDecrement}
								style={{
									width: "2rem",
									height: "1.8rem",
									marginLeft: "1rem",
									background: "white",
									border: "1px solid black",
									paddingTop: "0.3rem",
									borderRadius: "0.3rem",
								}}
							>
								<BiMinus />
							</button>
							<input
								className="form-control mx-1"
								value={selectedFontSize}
								onChange={textSizeChanged}
								maxLength={10}
								style={{
									height: "1.8rem",
									marginLeft: "0.3rem",
									width: "2rem",
									borderRadius: "0.3rem",
								}}
							/>
							<button
								onClick={handleIncrement}
								style={{
									width: "2rem",
									height: "1.8rem",
									marginLeft: "0.3rem",
									border: "1px solid black",
									background: "white",
									paddingTop: "0.2rem",
									borderRadius: "0.3rem",
								}}
							>
								<BsPlus size={18} />
							</button>
						</Box>

						<Box
							sx={{
								ml: "1.2rem",
								border: "1px solid transparent",
								borderRadius: "0.3rem",
								transition: "0.5s",
								":hover": { border: "1px solid black" },
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								width: "2.5rem",
								height: "2rem",
								borderRadius: "0.3rem",
							}}
						>
							<Box
								sx={{
									cursor: "pointer",
									height: "1.7rem",
								}}
								onClick={() => setSelectNum(7)}
							>
								<AiOutlineFontColors size={25} color="black" />
							</Box>
						</Box>

						<Box
							sx={{
								ml: "1.2rem",
								border: "1px solid transparent",
								borderRadius: "0.3rem",
								transition: "0.5s",
								":hover": { border: "1px solid black" },
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								width: "2.5rem",
								height: "2rem",
								borderRadius: "0.3rem",
							}}
						>
							<Box
								sx={{
									cursor: "pointer",
									height: "1.7rem",
								}}
								onClick={() => setSelectNum(10)}
							>
								<AiOutlineBgColors size={25} color="black" />
							</Box>
						</Box>

						<Box
							sx={{
								width: "2.5rem",
								height: "2rem",
								ml: "0.7rem",
								border: "1px solid transparent",
								borderRadius: "0.3rem",
								transition: "0.5s",
								":hover": { border: "1px solid black" },
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<button
								id="basic-button"
								aria-controls={open ? "basic-menu" : undefined}
								aria-haspopup="true"
								aria-expanded={open ? "true" : undefined}
								onClick={handleClick}
								style={{
									background: "white",
									border: "none",
									padding: "0",
								}}
							>
								<RxTransparencyGrid size={19} color="black" />
							</button>
						</Box>
						<Menu
							id="basic-menu"
							anchorEl={anchorEl}
							open={open}
							onClose={handleClose}
							MenuListProps={{
								"aria-labelledby": "basic-button",
							}}
							style={{ marginTop: "0.7rem" }}
						>
							<MenuItem>
								<input
									type="range"
									id="opacitySlider"
									min="0"
									max="1"
									step="0.01"
									value={selectedOpacity}
									onChange={handleOpacityChange}
								/>
							</MenuItem>
						</Menu>

						<button
							onClick={toggleBold}
							style={
								isBold
									? {
											width: "2.5rem",
											height: "2rem",
											borderRadius: "0.3rem",
											marginLeft: "1rem",
											background: "white",
											border: "2.4px solid black",
									  }
									: {
											width: "2.5rem",
											height: "2rem",
											borderRadius: "0.3rem",
											marginLeft: "1rem",
											background: "white",
											border: "0.3px solid black",
									  }
							}
						>
							<RiBold size={20} color="black" />
						</button>

						<button
							onClick={toggleItalic}
							style={
								isItalic
									? {
											width: "2.5rem",
											height: "2rem",
											borderRadius: "0.3rem",
											marginLeft: "1rem",
											background: "white",
											border: "2.4px solid black",
									  }
									: {
											width: "2.5rem",
											height: "2rem",
											borderRadius: "0.3rem",
											marginLeft: "1rem",
											background: "white",
											border: "0.3px solid black",
									  }
							}
						>
							<LuItalic size={20} color="black" />
						</button>

						<button
							onClick={toggleUnderline}
							style={
								isUnderline
									? {
											width: "2.5rem",
											height: "2rem",
											borderRadius: "0.3rem",
											marginLeft: "1rem",
											background: "white",
											border: "2.4px solid black",
									  }
									: {
											width: "2.5rem",
											height: "2rem",
											borderRadius: "0.3rem",
											marginLeft: "1rem",
											background: "white",
											border: "0.3px solid black",
									  }
							}
						>
							<LuUnderline size={20} color="black" />
						</button>

						<button
							id="basic-button-2"
							aria-controls={open2 ? "basic-menu-2" : undefined}
							aria-haspopup="true"
							aria-expanded={open2 ? "true" : undefined}
							onClick={handleClick2}
							style={{
								width: "2.5rem",
								height: "2rem",
								borderRadius: "0.3rem",
								marginLeft: "1rem",
								background: "white",
								border: "0.4px solid black",
							}}
						>
							<MdFormatLineSpacing size={25} color="black" />
						</button>
						<Menu
							id="basic-menu-2"
							anchorEl={anchorE2}
							open={open2}
							onClose={handleClose2}
							MenuListProps={{
								"aria-labelledby": "basic-button-2",
							}}
						>
							<MenuItem sx={{ display: "flex", flexDirection: "column" }}>
								<Box>
									<Typography sx={{ fontSize: "0.7rem", fontWeight: "700" }}>
										Letter Spacing:
									</Typography>
									<input
										type="range"
										id="letterSpacingSlider"
										min="-10"
										max="1000"
										step="1"
										value={letterSpacing}
										onChange={handleLetterSpacingChange}
									/>
								</Box>
								<Box>
									<Typography sx={{ fontSize: "0.7rem", fontWeight: "700" }}>
										Line Spacing:
									</Typography>
									<input
										type="range"
										id="lineSpacingSlider"
										min="0"
										max="10"
										step="0.01"
										value={lineSpacing}
										onChange={handleLineSpacingChange}
									/>
								</Box>
							</MenuItem>
						</Menu>
					</Box>
				)}

				{/* For Image */}
				{objectClicked === 3 && (
					<>
						<Box
							sx={{
								pl: "1rem",
								height: "3rem",
								display: "flex",
								alignItems: "center",
							}}
						>
							<Button
								id="basic-button"
								aria-controls={open ? "basic-menu" : undefined}
								aria-haspopup="true"
								aria-expanded={open ? "true" : undefined}
								onClick={handleClick}
							>
								<RxTransparencyGrid size={25} color="black" />
							</Button>
							<Menu
								id="basic-menu"
								anchorEl={anchorEl}
								open={open}
								onClose={handleClose}
								MenuListProps={{
									"aria-labelledby": "basic-button",
								}}
							>
								<MenuItem>
									<Box sx={{ display: "flex", flexDirection: "column" }}>
										<Typography>Transparency</Typography>
										<input
											type="range"
											id="opacitySlider"
											min="0"
											max="1"
											step="0.01"
											value={selectedOpacity}
											onChange={handleOpacityChange}
										/>
									</Box>
								</MenuItem>
							</Menu>

						
							<Box
								sx={{
									width: "4rem",
									p: "0.2rem",
									border: "1px solid black",
									borderRadius: "0.3rem",
									display: "flex",
								}}
							>
								<Typography
									onClick={() => shapeChanged("circle")}
									sx={{ cursor: "pointer" }}
								>
									Circle
								</Typography>
							</Box>
						

					
							<Box
								sx={{
									ml: "0.8rem",
									height: "2rem",
									width: "4.6rem",
									cursor: "pointer",
									p: "0.2rem",
									border: "1px solid black",
									borderRadius: "0.3rem",
								}}
								onClick={() => setSelectNum(8)}
							>
								<Typography>Position</Typography>
							</Box>

							<Box sx={{ display: "flex" }}>
								<Box
									sx={{
										ml: "0.8rem",
										height: "2rem",
										width: "5rem",
										cursor: "pointer",
										p: "0.2rem",
										border: "1px solid black",
										borderRadius: "0.3rem",
									}}
									onClick={bringForward}
								>
									<Typography>Forward</Typography>
								</Box>
								<Box
									sx={{
										ml: "0.8rem",
										height: "2rem",
										width: "5rem",
										cursor: "pointer",
										p: "0.2rem",
										border: "1px solid black",
										borderRadius: "0.3rem",
									}}
									onClick={sendBackward}
								>
									<Typography>Backward</Typography>
								</Box>

								<Box
									sx={{
										ml: "0.8rem",
										height: "2rem",
										width: "5rem",
										cursor: "pointer",
										p: "0.2rem",
										border: "1px solid black",
										borderRadius: "0.3rem",
									}}
									onClick={() => setSelectNum(20)}
								>
									<Typography>Filter</Typography>
								</Box>

							</Box>
						</Box>
					</>
				)}

			</Box>
		</>
	)
}

export default CanvasHeader
