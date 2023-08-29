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

const itemData = [
	{
		img: "/images/templates/t1.png",
		title: "Hover Effect",
		author: "@bkristastucchio",
	},
	{
		img: "/images/templates/t2.png",
		title: "Neon Glowing Effect",
		author: "@bkristastucchio",
	},
	{
		img: "/images/templates/t3.png",
		title: "Login Page",
		author: "@bkristastucchio",
	},
	{
		img: "/images/templates/t4.png",
		title: "Hover Effect",
		author: "@bkristastucchio",
	},
	{
		img: "/images/templates/t5.png",
		title: "Animated Button",
		author: "@bkristastucchio",
	},
	{
		img: "/images/templates/t6.png",
		title: "Password Generator",
		author: "@bkristastucchio",
	},
	{
		img: "/images/templates/t7.png",
		title: "Button Effect",
		author: "@bkristastucchio",
	},
	{
		img: "/images/templates/t8.png",
		title: "Login Page",
		author: "@bkristastucchio",
	},
	{
		img: "/images/templates/t9.png",
		title: "Card Hover Effect",
		author: "@rollelflex_graphy726",
	},
	{
		img: "/images/templates/t10.png",
		title: "Animated Button",
		author: "@rollelflex_graphy726",
	},
	{
		img: "/images/templates/t11.png",
		title: "Login Page",
		author: "@rollelflex_graphy726",
	},
]

function Templates() {
	return (
		<>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					marginTop: "1rem",
					fontSize: "1.3rem",
					fontWeight: "500",
				}}
			>
				Recent Projects🔥
			</Box>
			<Box
				sx={{
					display: "flex",
					flexWrap: "wrap",
				}}
			>
				{itemData.map((item) => (
					<>
						<Box
							sx={{
								margin: "1rem",
								display: "flex",
								flexDirection: "column",

								width: "13rem",
								fontSize: "0.8rem",
								cursor: "pointer",
							}}
						>
							<img
								height="114"
								src={item.img}
								alt={item.title}
								loading="lazy"
							/>
							{item.title}
						</Box>
					</>
				))}
			</Box>
		</>
	)
}

export default Templates
