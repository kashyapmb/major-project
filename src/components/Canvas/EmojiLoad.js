import React, { useRef, useEffect, useState } from "react"
import { fabric } from "fabric"
import "fabric-history"
import html2canvas from "html2canvas"
import jsPDF from "jspdf"
import { BiSolidBackpack } from "react-icons/bi"
import { Hexagon, Pentagon, Heptagon, Octagon } from "react-shapes"
import { canvas, canvasRef } from "./CanvasContainer"
import { Box, Typography } from "@mui/material"

function EmojiLoad({ emojiApiResponce }) {
	const addEmoji = (stickerData) => {
		const sticker = new fabric.Text(stickerData.character, {
			left: 20,
			top: 20,
			fontSize: 120, // Customize the font size
			// Add other properties from your sticker data
			data: stickerData,
		})

		// Add the custom sticker to the canvas
		canvas.current.add(sticker)
		canvas.current.renderAll()
	}

	return (
		<>
			<Box sx={{ height: "92vh", overflowY: "auto", pt: "0.5rem" }}>
				<Box sx={{ ml: "0.8rem", pt: "0.2rem" }}>
					<Typography sx={{ color: "white" }}>Emojis:</Typography>
				</Box>
				<Box
					sx={{
						display: "flex",
						fontSize: "2.5rem",
						flexWrap: "wrap",
					}}
				>
					{emojiApiResponce.map((obj, index) => (
						<>
							<Box
								sx={{ mx: "0.2rem", cursor: "pointer" }}
								onClick={() => addEmoji(obj)}
							>
								{obj.character}
							</Box>
						</>
					))}
				</Box>
			</Box>
		</>
	)
}

export default EmojiLoad
