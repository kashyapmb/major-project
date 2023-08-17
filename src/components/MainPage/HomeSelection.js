import React from "react"

import { Box } from "@mui/material"
import ImageList from "@mui/material/ImageList"
import ImageListItem from "@mui/material/ImageListItem"
import ImageListItemBar from "@mui/material/ImageListItemBar"
import {
	Avatar,
	Button,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	CardMedia,
	Typography,
} from "@mui/material"
import Grid from "@mui/material/Grid"

import { BsFiles } from "react-icons/bs"
import { BsLightningCharge } from "react-icons/bs"
import { BsTrash3 } from "react-icons/bs"
import { RiProfileLine } from "react-icons/ri"

import { useState } from "react"
import LeftSideBar from "./LeftSideBar"
import RightSideBar from "./RightSideBar"
import { Navigate, useNavigate } from "react-router-dom"

const itemData = [
	{
		img: "https://www.visme.co/wp-content/uploads/2021/06/Thumbnail-maker-what-is-a-thumbnail.png",
		title: "Thumbnail Maker",
		author: "@bkristastucchio",
	},
]

function HomeSelection() {
	const navigate = useNavigate()
	const thumbnailMaker = () => {
		console.log("Clicked")
		navigate("./Design")
	}
	return (
		<>
			<Box
				sx={{
					display: "flex",
					flexWrap: "wrap",
				}}
			>
				{itemData.map((item) => (
					<>
						<div onClick={() => thumbnailMaker()}>
							<Box
								sx={{
									margin: "1rem",
									display: "flex",
									flexDirection: "column",
									paddingY: "1rem",
									alignItems: "center",
									cursor: "pointer",
									border: "1px solid black",
									borderRadius: "1rem",
									":hover": {
										borderColor: "blue",
										boxShadow: "0 0 11px rgba(33,33,33,.2)",
									},
								}}
							>
								<img
									height="200"
									src={`${item.img}?w=248&fit=crop&auto=format`}
									srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
									alt={item.title}
									loading="lazy"
								/>
								<Box sx={{ fontSize: "1.1rem", fontWeight: 500 }}>
									{item.title}
								</Box>
							</Box>
						</div>
					</>
				))}
			</Box>
		</>
	)
}

export default HomeSelection
