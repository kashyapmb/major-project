import { Box, Typography } from "@mui/material"
import React, { useEffect, useState } from "react"
import { MdDesignServices } from "react-icons/md"
import { PiShapes, PiTextTBold, PiUploadSimpleFill } from "react-icons/pi"
import { HiOutlineBackward } from "react-icons/hi2";
import { HiDownload } from "react-icons/hi";
import { FiDownloadCloud } from "react-icons/fi";



import { SiOpenai } from "react-icons/si"

function Sidebar({ selectNum, setSelectNum }) {
	const itemSelected = (number) => {
		setSelectNum(number)
	}
	useEffect(() => {}, [selectNum])
	return (
		<>
			<Box
				sx={{
					maxHeight: "100vh",
					height: "92vh",
					background: "#282828",
				}}
			>
				<Box
					sx={{
						height: "4rem",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						flexDirection: "column",
						flexWrap: "wrap",
						background: selectNum == 1 ? "#404040" : "#282828",
						color: "white",
						opacity: selectNum == 1 ? "1" : "0.45",
						":hover": { cursor: "pointer", opacity: "1", transition: "0.5s" },
					}}
					onClick={() => {
						itemSelected(1)
					}}
				>
					<MdDesignServices size={25} />
					<Typography sx={{ fontSize: "0.8rem" }}>Design</Typography>
				</Box>
				<Box
					sx={{
						height: "4rem",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						flexDirection: "column",
						flexWrap: "wrap",
						background: selectNum == 2 ? "#404040" : "#282828",
						color: "white",
						opacity: selectNum == 2 ? "1" : "0.45",
						":hover": { cursor: "pointer", opacity: "1", transition: "0.5s" },
					}}
					onClick={() => {
						itemSelected(2)
					}}
				>
					<PiShapes size={25} />
					<Typography sx={{ fontSize: "0.8rem" }}>Elements</Typography>
				</Box>
				<Box
					sx={{
						height: "4rem",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						flexDirection: "column",
						flexWrap: "wrap",
						background: selectNum == 3 ? "#404040" : "#282828",
						color: "white",
						opacity: selectNum == 3 ? "1" : "0.45",
						":hover": { cursor: "pointer", opacity: "1", transition: "0.5s" },
					}}
					onClick={() => {
						itemSelected(3)
					}}
				>
					<PiTextTBold size={25} />
					<Typography sx={{ fontSize: "0.8rem" }}>Text</Typography>
				</Box>
				<Box
					sx={{
						height: "4rem",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						flexDirection: "column",
						flexWrap: "wrap",
						background: selectNum == 4 ? "#404040" : "#282828",
						color: "white",
						opacity: selectNum == 4 ? "1" : "0.45",
						":hover": { cursor: "pointer", opacity: "1", transition: "0.5s" },
					}}
					onClick={() => {
						itemSelected(4)
					}}
				>
					<PiUploadSimpleFill size={25} />
					<Typography sx={{ fontSize: "0.8rem" }}>Upload</Typography>
				</Box>
				<Box
					sx={{
						height: "4rem",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						flexDirection: "column",
						flexWrap: "wrap",
						background: selectNum == 5 ? "#404040" : "#282828",
						color: "white",
						opacity: selectNum == 5 ? "1" : "0.45",
						":hover": { cursor: "pointer", opacity: "1", transition: "0.5s" },
					}}
					onClick={() => {
						itemSelected(5)
					}}
				>
					<SiOpenai size={25} />
					<Typography sx={{ fontSize: "0.8rem" }}>AI</Typography>
				</Box>
				<Box
					sx={{
						height: "4rem",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						flexDirection: "column",
						flexWrap: "wrap",
						background: selectNum == 6 ? "#404040" : "#282828",
						color: "white",
						opacity: selectNum == 6 ? "1" : "0.45",
						":hover": { cursor: "pointer", opacity: "1", transition: "0.5s" },
					}}
					onClick={() => {
						itemSelected(6)
					}}
				>
					<HiDownload size={25} />
					<Typography sx={{ fontSize: "0.8rem" }}>Download</Typography>
				</Box>
				<Box
					sx={{
						height: "4rem",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						flexDirection: "column",
						flexWrap: "wrap",
						background: "#282828",
						color: "white",

						":hover": { cursor: "pointer", opacity: "1", transition: "0.5s" },
					}}
					onClick={() => {
						itemSelected(0)
					}}
				>
					<HiOutlineBackward size={25} />
				</Box>
			</Box>
		</>
	)
}

export default Sidebar
