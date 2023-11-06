import { Box, Button, Grid } from "@mui/material"
import React, { useEffect, useState } from "react"
import Sidebar from "./Sidebar"
import Drawer from "./Drawer"
import CanvasContainer from "./CanvasContainer"
import CanvasHeader from "./CanvasHeader"
import { canvas } from "./CanvasContainer"
import { AiFillCaretRight, AiOutlineCaretLeft } from "react-icons/ai"
import LayerSystem from "./LayerSystem"

function Design() {
	const [objectClicked, setObjectClicked] = useState(0)
	const [selectedColor, setSelectedColor] = useState("#000000")
	const [selectedOpacity, setSelectedOpacity] = useState(1)
	const [selectedFontSize, setSelectedFontSize] = useState(10)
	const [emojiApiResponce, setEmojiApiResponce] = useState()

	const [selectNum, setSelectNum] = useState(1)
	const [layoutSize, setLayoutSize] = useState(8)

	const [layerOpen, setLayerOpen] = useState(false)
	const [canvasLayoutSize, setCanvasLayoutSize] = useState(12)

	function updateObjectClicked(temp) {
		setObjectClicked(temp)
		console.log(objectClicked)
	}

	const backgroundClicked = (event) => {
		if (event.target.nodeName === "DIV") {
			canvas.current.discardActiveObject()
			canvas.current.requestRenderAll()
		}
	}

	const layerOpenClose = () => {
		setLayerOpen(!layerOpen)
	}

	useEffect(() => {
		if (selectNum == 0) setLayoutSize(11.45)
		else setLayoutSize(9)

		if (layerOpen) setCanvasLayoutSize(9.3)
		else setCanvasLayoutSize(11.8)
	}, [objectClicked, selectNum, layerOpen])

	return (
		<>
			<Box
				sx={{
					pl: "2rem",
					paddingY: "1rem",
					color: "white",
					background:
						"linear-gradient(90deg, rgba(8,75,155,1) 0%, rgba(205,0,255,1) 100%)",
					// background: "#ff9493",
					color: "white",
				}}
			>
				Project: Youtube Thumbnail Maker
			</Box>
			<Grid container component="div" sx={{ height: "100%" }}>
				<Grid item xs={0.55}>
					<Sidebar selectNum={selectNum} setSelectNum={setSelectNum} />
				</Grid>

				{selectNum != 0 && (
					<Grid item xs={2.45}>
						<Drawer
							selectNum={selectNum}
							setSelectNum={setSelectNum}
							emojiApiResponce={emojiApiResponce}
							setEmojiApiResponce={setEmojiApiResponce}
						/>
					</Grid>
				)}

				<Grid item xs={layoutSize} sx={{ background: "#e6e6e6" }}>
					<CanvasHeader
						objectClicked={objectClicked}
						selectedColor={selectedColor}
						setSelectedColor={setSelectedColor}
						selectedOpacity={selectedOpacity}
						setSelectedOpacity={setSelectedOpacity}
						selectedFontSize={selectedFontSize}
						setSelectedFontSize={setSelectedFontSize}
						setSelectNum={setSelectNum}
					/>

					<Grid container component="div">
						<Grid item xs={canvasLayoutSize} sx={{ background: "#e6e6e6" }}>
							<Box
								sx={{
									pb: "2rem",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									height: "84vh",
								}}
								onClick={backgroundClicked}
							>
								<CanvasContainer
									updateObjectClicked={updateObjectClicked}
									setSelectedColor={setSelectedColor}
									setSelectedOpacity={setSelectedOpacity}
									setSelectedFontSize={setSelectedFontSize}
								/>
							</Box>
						</Grid>
						<Grid item xs={0.2} sx={{ background: "#e6e6e6" }}>
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									height: "84vh",
								}}
							>
								<button
									onClick={layerOpenClose}
									style={{ width: "100%", height: "3rem" }}
								>
									{layerOpen && <AiFillCaretRight size={10} />}
									{!layerOpen && <AiOutlineCaretLeft size={10} />}
								</button>
							</Box>
						</Grid>
						{layerOpen != 0 && (
							<Grid item xs={2.5}>
								<Box
									sx={{
										height: "85.3vh",
										overflowY: "auto",
										background: "#252627",
									}}
								>
									<LayerSystem />
								</Box>
							</Grid>
						)}
					</Grid>
				</Grid>
			</Grid>
		</>
	)
}

export default Design
