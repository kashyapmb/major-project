import React, { useEffect } from "react"

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
		img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
		title: "Breakfast",
		author: "@bkristastucchio",
		deleted: true,
	},
	{
		img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
		title: "Burger",
		author: "@rollelflex_graphy726",
		deleted: true,
	},
	{
		img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
		title: "Camera",
		author: "@helloimnik",
		deleted: true,
	},
	{
		img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
		title: "Coffee",
		author: "@nolanissac",
		deleted: true,
	},
	{
		img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
		title: "Hats",
		author: "@hjrc33",
		deleted: true,
	},
	{
		img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
		title: "Honey",
		author: "@arwinneil",
		deleted: true,
	},
	{
		img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
		title: "Basketball",
		author: "@tjdragotta",
		deleted: true,
	},
	{
		img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
		title: "Fern",
		author: "@katie_wasserman",
		deleted: true,
	},
	{
		img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
		title: "Mushrooms",
		author: "@silverdalex",
		deleted: true,
	},
]

function Trash() {
	const [tempVariable, setTempVariable] = useState(false)
	const restoreImage = (id) => {
		console.log(id)
		itemData[id].deleted = false
		setTempVariable(!tempVariable)
	}
	useEffect(() => {}, [tempVariable])
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
				Deleted Projects🔥
			</Box>
			<Box
				sx={{
					display: "flex",
					flexWrap: "wrap",
				}}
			>
				{itemData.map((item, index) => (
					<>
						{item.deleted && (
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
									src={`${item.img}?w=248&fit=crop&auto=format`}
									srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
									alt={item.title}
									loading="lazy"
								/>
								{item.title}
								<Box>
									<Button onClick={() => restoreImage(index)}>Restore</Button>
								</Box>
							</Box>
						)}
					</>
				))}
			</Box>
		</>
	)
}

export default Trash
