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
import Grid from "@mui/material/Grid"

import { BsFiles } from "react-icons/bs"
import { BsLightningCharge } from "react-icons/bs"
import { BsTrash3 } from "react-icons/bs"
import { RiProfileLine } from "react-icons/ri"
import { FcLikePlaceholder, FcLike } from "react-icons/fc"
import { BsHeart, BsHeartFill } from "react-icons/bs"
import { BsBookmarkPlus, BsFillBookmarkCheckFill } from "react-icons/bs"

import React, { useEffect, useState } from "react"
import LeftSideBar from "./LeftSideBar"
import RightSideBar from "./RightSideBar"

const itemData = [
	{
		img: "/images/templates/t1.png",
		name: "Kashyap Bavadiya",
		date: "Jul 27, 2023",
		title: "Animated Neon Button Using HTML & CSS",
		likes: 10,
		liked: true,
		saved: false,
	},
	{
		img: "/images/templates/t2.png",
		name: "Ruchi Shingala",
		date: "Aug 1, 2023",
		title: "Neon Glowing Button Effect in HTML and CSS",
		likes: 244,
		liked: false,
		saved: true,
	},
	{
		img: "/images/templates/t3.png",
		name: "Kisu Bavadiya",
		date: "Jul 30, 2023",
		title: "Animated Login Form using HTML CSS",
		likes: 51,
		liked: true,
		saved: true,
	},
	{
		img: "/images/templates/t4.png",
		name: "Sita Bavadiya",
		date: "Oct 27, 2022",
		title: "Animated Button with Awesome Hover Effect HTML CSS",
		likes: 300,
		liked: false,
		saved: false,
	},
	{
		img: "/images/templates/t5.png",
		name: "Kashyap Bavadiya",
		date: "Jul 27, 2023",
		title: "Speed-up your Web Design: Create an Animated Button in 10 Minutes!",
		likes: 129,
		liked: true,
		saved: true,
	},
	{
		img: "/images/templates/t6.png",
		name: "Kashyap Bavadiya",
		date: "Jul 27, 2023",
		title: "Random Password Generator HTML CSS JavaScript",
		likes: 2344,
		liked: false,
		saved: false,
	},
	{
		img: "/images/templates/t7.png",
		name: "Kashyap Bavadiya",
		date: "Jul 27, 2023",
		title: "Button Animation Effect using HTML CSS",
		likes: 123,
		liked: true,
		saved: false,
	},
	{
		img: "/images/templates/t8.png",
		name: "Kashyap Bavadiya",
		date: "Jul 27, 2023",
		title: "Animated Login Form Using HTML & CSS",
		likes: 234,
		liked: false,
		saved: false,
	},
	{
		img: "/images/templates/t9.png",
		name: "Kashyap Bavadiya",
		date: "Jul 27, 2023",
		title: "CSS Card hover effect | HTML CSS",
		likes: 2344,
		liked: false,
		saved: false,
	},
	{
		img: "/images/templates/t10.png",
		name: "Kashyap Bavadiya",
		date: "Jul 27, 2023",
		title: "Button Animation Effect using HTML CSS",
		likes: 123,
		liked: false,
		saved: false,
	},
]

function SavedPost() {
	const [itemChanged, setItemChanged] = useState(false)

	const savedOperation = (id) => {
		console.log(id)
		itemData[id].saved = !itemData[id].saved
		setItemChanged(!itemChanged)
	}
	const likedOperation = (id) => {
		console.log(id)
		if (itemData[id].liked) {
			itemData[id].likes--
		} else {
			itemData[id].likes++
		}
		itemData[id].liked = !itemData[id].liked
		setItemChanged(!itemChanged)
	}

	useEffect(() => {}, [itemChanged])
	return (
		<>
			<Box
				sx={{
					width: "80%",
					display: "flex",
					justifyContent: "center",
					flexDirection: "column",
					marginTop: "1rem",
					fontSize: "1.3rem",
					fontWeight: "500",
				}}
			>
				<Box sx={{ display: "flex", justifyContent: "center" }}>
					Saved post🔥
				</Box>
				{itemData.map((item, index) => (
					<>
						{item.saved && (
							<Box
								sx={{
									background: "#e6e6e6",
									margin: "1.5rem 2.5rem 0.75rem 2.5rem",
									border: "1px solid grey",
								}}
							>
								<Grid container component="div">
									<Grid xs={6}>
										<CardHeader
											avatar={
												<Avatar
													src="/images/crystal.jpg"
													aria-label="recipe"
													sx={{
														width: "2.3rem",
														height: "2.3rem",
														margin: "0rem",
													}}
												/>
											}
											title={item.name}
											subheader={item.date}
											sx={{
												padding: "1rem 1rem 1rem 1.6rem",
											}}
											titleTypographyProps={{
												fontFamily: "inherit",
												fontSize: "0.9rem",
												fontWeight: "600",
											}}
											subheaderTypographyProps={{
												fontFamily: "inherit",
												fontSize: "0.8rem",
											}}
										/>
										<Typography
											sx={{
												paddingX: "1.6rem",
												fontWeight: "600",
												letterSpacing: "0.06rem",
												fontSize: "1.3rem",
											}}
										>
											{item.title}
										</Typography>
										<Box
											sx={{
												display: "flex",
												paddingX: "0.6rem",
												marginY: "1rem",
											}}
										>
											<div onClick={() => likedOperation(index)}>
												<Box
													sx={{
														display: "flex",
														alignItems: "center",
														marginX: "1rem",
														":hover": { color: "blue", cursor: "pointer" },
													}}
												>
													{item.liked ? (
														<BsHeartFill size={20} />
													) : (
														<BsHeart size={20} />
													)}

													<Typography sx={{ marginLeft: "0.5rem" }}>
														{item.likes}
													</Typography>
												</Box>
											</div>
											<div onClick={() => savedOperation(index)}>
												<Box
													sx={{
														display: "flex",
														alignItems: "center",
														width: "wrap",
														":hover": { color: "blue", cursor: "pointer" },
													}}
												>
													{item.saved ? (
														<BsFillBookmarkCheckFill size={20} />
													) : (
														<BsBookmarkPlus size={20} />
													)}
												</Box>
											</div>
										</Box>
									</Grid>
									<Grid xs={6} sx={{ display: "flex", alignItems: "center" }}>
										<img
											height="160"
											src={item.img}
											alt="Kuch bhi"
											loading="lazy"
										/>
									</Grid>
								</Grid>
							</Box>
						)}
					</>
				))}
			</Box>
		</>
	)
}

export default SavedPost
