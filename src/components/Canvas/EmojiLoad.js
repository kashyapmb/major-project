import { Box, Typography } from "@mui/material"
import React, { useRef, useState } from "react"

function EmojiLoad() {
	return (
		<>
			{/* <Box sx={{ p: "1rem", height: "92vh", overflowY: "auto" }}>
				<Typography
					sx={{
						color: "white",
						mb: "0.6rem",
						fontSize: "1rem",
						fontWeight: "600",
					}}
				>
					Solid Colors
				</Typography>

				<Box sx={{ display: "flex", flexWrap: "wrap" }}>
					{colorData.map((obj, index) => {
						return (
							<>
								{index == 0 && (
									<Box>
										<input
											type="color"
											id="colorPicker"
											onChange={handleColorChange}
											style={{
												marginRight: "0.6rem",
												marginBottom: "0.6rem",
												width: "2.3rem",
												height: "2.3rem",
												cursor: "pointer",
												borderRadius: "0.2rem",
												// display: "None", // Make the file input element invisible
											}}
										/>
									</Box>
								)}
								<Box
									sx={{
										mr: "0.6rem",
										mb: "0.6rem",
										height: "2.3rem",
										width: "2.3rem",
										background: `${obj.code}`,
										cursor: "pointer",
										borderRadius: "0.2rem",
										":hover": { border: "2px solid white" },
									}}
									onClick={() => changeColor(obj.code)}
								></Box>
							</>
						)
					})}
				</Box>
			</Box> */}
		</>
	)
}

export default EmojiLoad
