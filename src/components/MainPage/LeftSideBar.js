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
import { FiSave } from "react-icons/fi"

import React, { useState } from "react"
import RightSideBar from "./RightSideBar"

function LeftSideBar({ selectNum, increment }) {
	return (
		<>
			<Box sx={{ position: "sticky", background: "#287bff" }}>
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						paddingTop: "1rem",
					}}
				>
					<Typography
						onClick={() => increment(0)}
						component={"img"}
						src="/images/logo1.png"
						href="/"
						height={"5rem"}
						sx={{
							cursor: "pointer",
							textAlign: "center",
							display: "flex",
							alignItems: "center",
							userSelect: "none",
						}}
					/>
				</Box>
				<CardHeader
					avatar={
						<Avatar
							src="/images/crystal.jpg"
							aria-label="recipe"
							sx={{ width: "2.3rem", height: "2.3rem", margin: "0rem" }}
						/>
					}
					title="Kashyap"
					subheader="• Free"
					sx={{
						padding: "1rem 1rem 1rem 1.6rem",
						background: "white",
						margin: "1rem",
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
				<Box
					sx={{
						height: "100vh",
					}}
				>
					<Box sx={{ paddingLeft: "1rem" }}>
						{selectNum === 0 && (
							<>
								<Box
									onClick={() => increment(1)}
									sx={{
										display: "flex",
										alignItems: "center",
										paddingY: "0.25rem",
										paddingX: "1.4rem",
										borderRadius: "1.3rem 0rem 0rem 1.3rem",
										background: "#287bff",
										color: "white",
										":hover": {
											transition: "0.3s",
											cursor: "pointer",
										},
									}}
								>
									<BsFiles />
									<Typography
										component="div"
										sx={{ margin: "0.5rem", letterSpacing: "0.05rem" }}
									>
										Projects
									</Typography>
								</Box>
								<Box
									onClick={() => increment(2)}
									sx={{
										display: "flex",
										alignItems: "center",
										paddingY: "0.25rem",
										paddingX: "1.4rem",
										borderRadius: "0rem 1rem 0rem 0rem",
										background: "#287bff",
										color: "white",
										":hover": {
											transition: "0.3s",
											cursor: "pointer",
										},
									}}
								>
									<RiProfileLine />
									<Typography
										component="div"
										sx={{ margin: "0.5rem", letterSpacing: "0.05rem" }}
									>
										Templates
									</Typography>
								</Box>
								<Box
									onClick={() => increment(3)}
									sx={{
										display: "flex",
										alignItems: "center",
										paddingY: "0.25rem",
										paddingX: "1.4rem",
										borderRadius: "1.3rem 0rem 0rem 1.3rem",
										color: "white",
										":hover": {
											transition: "0.3s",
											cursor: "pointer",
										},
									}}
								>
									<BsLightningCharge />
									<Typography
										component="div"
										sx={{
											margin: "0.5rem",
											letterSpacing: "0.05rem",
										}}
									>
										Trending Feed
									</Typography>
								</Box>
								<Box
									onClick={() => increment(4)}
									sx={{
										display: "flex",
										alignItems: "center",
										paddingY: "0.25rem",
										paddingX: "1.4rem",
										borderRadius: "1.3rem 0rem 0rem 1.3rem",
										color: "white",
										":hover": {
											transition: "0.3s",
											cursor: "pointer",
										},
									}}
								>
									<FiSave />
									<Typography
										component="div"
										sx={{
											margin: "0.5rem",
											letterSpacing: "0.05rem",
										}}
									>
										Saved Post
									</Typography>
								</Box>
								<Box
									onClick={() => increment(5)}
									sx={{
										display: "flex",
										alignItems: "center",
										paddingY: "0.25rem",
										paddingX: "1.4rem",
										borderRadius: "1.3rem 0rem 0rem 1.3rem",
										color: "white",
										":hover": {
											transition: "0.3s",
											cursor: "pointer",
										},
									}}
								>
									<BsTrash3 />
									<Typography
										component="div"
										sx={{ margin: "0.5rem", letterSpacing: "0.05rem" }}
									>
										Trash
									</Typography>
								</Box>
							</>
						)}
						{selectNum === 1 && (
							<>
								<Box
									onClick={() => increment(1)}
									sx={{
										display: "flex",
										alignItems: "center",
										paddingY: "0.25rem",
										paddingX: "1.4rem",
										borderRadius: "1.3rem 0rem 0rem 1.3rem",
										color: "black",
										background: "#fff",
										":hover": {
											transition: "0.3s",
											cursor: "pointer",
										},
									}}
								>
									<BsFiles />
									<Typography
										component="div"
										sx={{ margin: "0.5rem", letterSpacing: "0.05rem" }}
									>
										Projects
									</Typography>
								</Box>
								<Box sx={{ background: "white" }}>
									<Box
										onClick={() => increment(2)}
										sx={{
											display: "flex",
											alignItems: "center",
											paddingY: "0.25rem",
											paddingX: "1.4rem",
											borderRadius: "0rem 1rem 0rem 0rem",
											background: "#287bff",
											color: "white",
											":hover": {
												transition: "0.3s",
												cursor: "pointer",
											},
										}}
									>
										<RiProfileLine />
										<Typography
											component="div"
											sx={{ margin: "0.5rem", letterSpacing: "0.05rem" }}
										>
											Templates
										</Typography>
									</Box>
								</Box>
								<Box
									onClick={() => increment(3)}
									sx={{
										display: "flex",
										alignItems: "center",
										paddingY: "0.25rem",
										paddingX: "1.4rem",
										borderRadius: "1.3rem 0rem 0rem 1.3rem",
										color: "white",
										":hover": {
											transition: "0.3s",
											cursor: "pointer",
										},
									}}
								>
									<BsLightningCharge />
									<Typography
										component="div"
										sx={{
											margin: "0.5rem",
											letterSpacing: "0.05rem",
										}}
									>
										Trending Feed
									</Typography>
								</Box>
								<Box
									onClick={() => increment(4)}
									sx={{
										display: "flex",
										alignItems: "center",
										paddingY: "0.25rem",
										paddingX: "1.4rem",
										borderRadius: "1.3rem 0rem 0rem 1.3rem",
										color: "white",
										":hover": {
											transition: "0.3s",
											cursor: "pointer",
										},
									}}
								>
									<FiSave />
									<Typography
										component="div"
										sx={{
											margin: "0.5rem",
											letterSpacing: "0.05rem",
										}}
									>
										Saved Post
									</Typography>
								</Box>
								<Box
									onClick={() => increment(5)}
									sx={{
										display: "flex",
										alignItems: "center",
										paddingY: "0.25rem",
										paddingX: "1.4rem",
										borderRadius: "1.3rem 0rem 0rem 1.3rem",
										color: "white",
										":hover": {
											transition: "0.3s",
											cursor: "pointer",
										},
									}}
								>
									<BsTrash3 />
									<Typography
										component="div"
										sx={{ margin: "0.5rem", letterSpacing: "0.05rem" }}
									>
										Trash
									</Typography>
								</Box>
							</>
						)}
						{selectNum === 2 && (
							<>
								<Box sx={{ background: "white" }}>
									<Box
										onClick={() => increment(1)}
										sx={{
											display: "flex",
											alignItems: "center",
											paddingY: "0.25rem",
											paddingX: "1.4rem",
											borderRadius: "0rem 0rem 1rem 0rem",
											color: "white",
											background: "#287bff",
											":hover": {
												transition: "0.3s",
												cursor: "pointer",
											},
										}}
									>
										<BsFiles />
										<Typography
											component="div"
											sx={{ margin: "0.5rem", letterSpacing: "0.05rem" }}
										>
											Projects
										</Typography>
									</Box>
								</Box>
								<Box
									onClick={() => increment(2)}
									sx={{
										display: "flex",
										alignItems: "center",
										paddingY: "0.25rem",
										paddingX: "1.4rem",
										borderRadius: "1.3rem 0rem 0rem 1.3rem",
										color: "black",
										background: "#fff",
										":hover": {
											transition: "0.3s",
											cursor: "pointer",
										},
									}}
								>
									<RiProfileLine />
									<Typography
										component="div"
										sx={{ margin: "0.5rem", letterSpacing: "0.05rem" }}
									>
										Templates
									</Typography>
								</Box>
								<Box sx={{ background: "white" }}>
									<Box
										onClick={() => increment(3)}
										sx={{
											display: "flex",
											alignItems: "center",
											paddingY: "0.25rem",
											paddingX: "1.4rem",
											borderRadius: "0rem 1rem 0rem 0rem",
											background: "#287bff",
											color: "white",
											":hover": {
												transition: "0.3s",
												cursor: "pointer",
											},
										}}
									>
										<BsLightningCharge />
										<Typography
											component="div"
											sx={{
												margin: "0.5rem",
												letterSpacing: "0.05rem",
											}}
										>
											Trending Feed
										</Typography>
									</Box>
								</Box>
								<Box
									onClick={() => increment(4)}
									sx={{
										display: "flex",
										alignItems: "center",
										paddingY: "0.25rem",
										paddingX: "1.4rem",
										borderRadius: "1.3rem 0rem 0rem 1.3rem",
										color: "white",
										":hover": {
											transition: "0.3s",
											cursor: "pointer",
										},
									}}
								>
									<FiSave />
									<Typography
										component="div"
										sx={{
											margin: "0.5rem",
											letterSpacing: "0.05rem",
										}}
									>
										Saved Post
									</Typography>
								</Box>
								<Box
									onClick={() => increment(5)}
									sx={{
										display: "flex",
										alignItems: "center",
										paddingY: "0.25rem",
										paddingX: "1.4rem",
										borderRadius: "1.3rem 0rem 0rem 1.3rem",
										color: "white",
										":hover": {
											transition: "0.3s",
											cursor: "pointer",
										},
									}}
								>
									<BsTrash3 />
									<Typography
										component="div"
										sx={{ margin: "0.5rem", letterSpacing: "0.05rem" }}
									>
										Trash
									</Typography>
								</Box>
							</>
						)}

						{selectNum === 3 && (
							<>
								<Box
									onClick={() => increment(1)}
									sx={{
										display: "flex",
										alignItems: "center",
										paddingY: "0.25rem",
										paddingX: "1.4rem",
										borderRadius: "1.3rem 0rem 0rem 1.3rem",
										color: "white",
										":hover": {
											transition: "0.3s",
											cursor: "pointer",
										},
									}}
								>
									<BsFiles />
									<Typography
										component="div"
										sx={{ margin: "0.5rem", letterSpacing: "0.05rem" }}
									>
										Projects
									</Typography>
								</Box>

								<Box sx={{ background: "white" }}>
									<Box
										onClick={() => increment(2)}
										sx={{
											display: "flex",
											alignItems: "center",
											paddingY: "0.25rem",
											paddingX: "1.4rem",
											borderRadius: "0rem 0rem 1rem 0rem",
											color: "white",
											background: "#287bff",
											":hover": {
												transition: "0.3s",
												cursor: "pointer",
											},
										}}
									>
										<RiProfileLine />
										<Typography
											component="div"
											sx={{ margin: "0.5rem", letterSpacing: "0.05rem" }}
										>
											Templates
										</Typography>
									</Box>
								</Box>
								<Box
									onClick={() => increment(3)}
									sx={{
										display: "flex",
										alignItems: "center",
										paddingY: "0.25rem",
										paddingX: "1.4rem",
										borderRadius: "1.3rem 0rem 0rem 1.3rem",
										color: "black",
										background: "#fff",
										":hover": {
											transition: "0.3s",
											cursor: "pointer",
										},
									}}
								>
									<BsLightningCharge />
									<Typography
										component="div"
										sx={{ margin: "0.5rem", letterSpacing: "0.05rem" }}
									>
										Trending Feed
									</Typography>
								</Box>
								<Box sx={{ background: "white" }}>
									<Box
										onClick={() => increment(4)}
										sx={{
											display: "flex",
											alignItems: "center",
											paddingY: "0.25rem",
											paddingX: "1.4rem",
											borderRadius: "0rem 1rem 0rem 0rem",
											background: "#287bff",
											color: "white",
											":hover": {
												transition: "0.3s",
												cursor: "pointer",
											},
										}}
									>
										<FiSave />
										<Typography
											component="div"
											sx={{
												margin: "0.5rem",
												letterSpacing: "0.05rem",
											}}
										>
											Saved Post
										</Typography>
									</Box>
								</Box>
								<Box
									onClick={() => increment(5)}
									sx={{
										display: "flex",
										alignItems: "center",
										paddingY: "0.25rem",
										paddingX: "1.4rem",
										borderRadius: "1.3rem 0rem 0rem 1.3rem",
										color: "white",
										":hover": {
											transition: "0.3s",
											cursor: "pointer",
										},
									}}
								>
									<BsTrash3 />
									<Typography
										component="div"
										sx={{
											margin: "0.5rem",
											letterSpacing: "0.05rem",
										}}
									>
										Trash
									</Typography>
								</Box>
							</>
						)}

						{selectNum === 4 && (
							<>
								<Box
									onClick={() => increment(1)}
									sx={{
										display: "flex",
										alignItems: "center",
										paddingY: "0.25rem",
										paddingX: "1.4rem",
										borderRadius: "0rem 0rem 0rem 0rem",

										color: "white",
										":hover": {
											transition: "0.3s",
											cursor: "pointer",
										},
									}}
								>
									<BsFiles />
									<Typography
										component="div"
										sx={{ margin: "0.5rem", letterSpacing: "0.05rem" }}
									>
										Projects
									</Typography>
								</Box>
								<Box
									onClick={() => increment(2)}
									sx={{
										display: "flex",
										alignItems: "center",
										paddingY: "0.25rem",
										paddingX: "1.4rem",
										borderRadius: "1.3rem 0rem 0rem 1.3rem",
										color: "white",
										":hover": {
											transition: "0.3s",
											cursor: "pointer",
										},
									}}
								>
									<RiProfileLine />
									<Typography
										component="div"
										sx={{
											margin: "0.5rem",
											letterSpacing: "0.05rem",
										}}
									>
										Templates
									</Typography>
								</Box>
								<Box sx={{ background: "white" }}>
									<Box
										onClick={() => increment(3)}
										sx={{
											display: "flex",
											alignItems: "center",
											paddingY: "0.25rem",
											paddingX: "1.4rem",
											borderRadius: "0rem 0rem 1rem 0rem",
											color: "white",
											background: "#287bff",
											":hover": {
												transition: "0.3s",
												cursor: "pointer",
											},
										}}
									>
										<BsLightningCharge />
										<Typography
											component="div"
											sx={{ margin: "0.5rem", letterSpacing: "0.05rem" }}
										>
											Trending Feed
										</Typography>
									</Box>
								</Box>

								<Box
									onClick={() => increment(4)}
									sx={{
										display: "flex",
										alignItems: "center",
										paddingY: "0.25rem",
										paddingX: "1.4rem",
										borderRadius: "1.3rem 0rem 0rem 1.3rem",
										color: "black",
										background: "#fff",
										":hover": {
											transition: "0.3s",
											cursor: "pointer",
										},
									}}
								>
									<FiSave />
									<Typography
										component="div"
										sx={{ margin: "0.5rem", letterSpacing: "0.05rem" }}
									>
										Saved Post
									</Typography>
								</Box>
								<Box sx={{ background: "white" }}>
									<Box
										onClick={() => increment(5)}
										sx={{
											display: "flex",
											alignItems: "center",
											paddingY: "0.25rem",
											paddingX: "1.4rem",
											borderRadius: "0rem 1rem 0rem 0rem",
											background: "#287bff",
											color: "white",
											":hover": {
												transition: "0.3s",
												cursor: "pointer",
											},
										}}
									>
										<BsTrash3 />
										<Typography
											component="div"
											sx={{ margin: "0.5rem", letterSpacing: "0.05rem" }}
										>
											Trash
										</Typography>
									</Box>
								</Box>
							</>
						)}
						{selectNum === 5 && (
							<>
								<Box
									onClick={() => increment(1)}
									sx={{
										display: "flex",
										alignItems: "center",
										paddingY: "0.25rem",
										paddingX: "1.4rem",
										borderRadius: "0rem 0rem 0rem 0rem",
										color: "white",
										background: "#287bff",
										":hover": {
											transition: "0.3s",
											cursor: "pointer",
										},
									}}
								>
									<BsFiles />
									<Typography
										component="div"
										sx={{ margin: "0.5rem", letterSpacing: "0.05rem" }}
									>
										Projects
									</Typography>
								</Box>
								<Box
									onClick={() => increment(2)}
									sx={{
										display: "flex",
										alignItems: "center",
										paddingY: "0.25rem",
										paddingX: "1.4rem",
										borderRadius: "0rem 0rem 0rem 0rem",
										color: "white",
										background: "#287bff",
										":hover": {
											transition: "0.3s",
											cursor: "pointer",
										},
									}}
								>
									<RiProfileLine />
									<Typography
										component="div"
										sx={{ margin: "0.5rem", letterSpacing: "0.05rem" }}
									>
										Templates
									</Typography>
								</Box>

								<Box
									onClick={() => increment(3)}
									sx={{
										display: "flex",
										alignItems: "center",
										paddingY: "0.25rem",
										paddingX: "1.4rem",
										borderRadius: "0rem 0rem 0rem 0rem",
										background: "#287bff",
										color: "white",
										":hover": {
											transition: "0.3s",
											cursor: "pointer",
										},
									}}
								>
									<BsLightningCharge />
									<Typography
										component="div"
										sx={{
											margin: "0.5rem",
											letterSpacing: "0.05rem",
										}}
									>
										Trending Feed
									</Typography>
								</Box>
								<Box sx={{ background: "white" }}>
									<Box
										onClick={() => increment(4)}
										sx={{
											display: "flex",
											alignItems: "center",
											paddingY: "0.25rem",
											paddingX: "1.4rem",
											borderRadius: "0rem 0rem 1rem 0rem",
											color: "white",
											background: "#287bff",
											":hover": {
												transition: "0.3s",
												cursor: "pointer",
											},
										}}
									>
										<FiSave />
										<Typography
											component="div"
											sx={{
												margin: "0.5rem",
												letterSpacing: "0.05rem",
											}}
										>
											Saved Post
										</Typography>
									</Box>
								</Box>
								<Box
									onClick={() => increment(5)}
									sx={{
										display: "flex",
										alignItems: "center",
										paddingY: "0.25rem",
										paddingX: "1.4rem",
										borderRadius: "1.3rem 0rem 0rem 1.3rem",
										color: "black",
										background: "#fff",
										":hover": {
											transition: "0.3s",
											cursor: "pointer",
										},
									}}
								>
									<BsTrash3 />
									<Typography
										component="div"
										sx={{ margin: "0.5rem", letterSpacing: "0.05rem" }}
									>
										Trash
									</Typography>
								</Box>
							</>
						)}
					</Box>
				</Box>
			</Box>
		</>
	)
}

export default LeftSideBar
