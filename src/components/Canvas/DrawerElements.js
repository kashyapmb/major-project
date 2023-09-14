import React, { useRef, useEffect, useState } from "react"
import { fabric } from "fabric"
import "fabric-history"
import html2canvas from "html2canvas"
import jsPDF from "jspdf"
import { BiSolidBackpack } from "react-icons/bi"
import { Hexagon, Pentagon, Heptagon, Octagon } from "react-shapes"
import { canvas, canvasRef } from "./CanvasContainer"
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
import {} from "react-icons/ai"
import {
	BsDiamondFill,
	BsFillHeartFill,
	BsFillPentagonFill,
	BsFillSquareFill,
	BsHeptagonFill,
	BsHexagonFill,
	BsOctagonFill,
	BsStarFill,
} from "react-icons/bs"
import { BiSolidSquare } from "react-icons/bi"
import {} from "react-icons/ci"
import {} from "react-icons/di"
import {} from "react-icons/fi"
import {} from "react-icons/fc"
import { FaBitbucket, FaCircle } from "react-icons/fa"
import {} from "react-icons/fa6"
import { GiPlainSquare } from "react-icons/gi"
import {} from "react-icons/go"
import {} from "react-icons/gr"
import { HiOutlineMinus } from "react-icons/hi"
import {} from "react-icons/hi2"
import {
	ImArrowDown,
	ImArrowLeft,
	ImArrowRight,
	ImArrowUp,
} from "react-icons/im"
import {} from "react-icons/lia"
import {} from "react-icons/io"
import { IoTriangle } from "react-icons/io5"
import {} from "react-icons/lu"
import {} from "react-icons/md"
import {} from "react-icons/pi"
import {} from "react-icons/rx"
import {} from "react-icons/ri"
import {} from "react-icons/si"
import {} from "react-icons/sl"
import { TbRectangleFilled } from "react-icons/tb"
import {} from "react-icons/tfi"
import {} from "react-icons/ti"
import {} from "react-icons/vsc"
import {} from "react-icons/wi"
import {} from "react-icons/cg"

import { transform } from "lodash"

const restEndpoint =
	"https://emoji-api.com/emojis?access_key=3735be5d506be4780b25af3948e9d7c2e7e63b7f"

const callRestApi = async () => {
	const response = await fetch(restEndpoint)
	const jsonResponse = await response.json()
	console.log(jsonResponse)
	return JSON.stringify(jsonResponse)
}

// const apiResponse = [
// 	{
// 		slug: "e1-0-grinning-face",
// 		character: "\ud83d\ude00",
// 		unicodeName: "E1.0 grinning face",
// 		codePoint: "1F600",
// 		group: "smileys-emotion",
// 		subGroup: "face-smiling",
// 	},
// 	{
// 		slug: "e0-6-grinning-face-with-big-eyes",
// 		character: "\ud83d\ude03",
// 		unicodeName: "E0.6 grinning face with big eyes",
// 		codePoint: "1F603",
// 		group: "smileys-emotion",
// 		subGroup: "face-smiling",
// 	},
// 	{
// 		slug: "e0-6-grinning-face-with-smiling-eyes",
// 		character: "\ud83d\ude04",
// 		unicodeName: "E0.6 grinning face with smiling eyes",
// 		codePoint: "1F604",
// 		group: "smileys-emotion",
// 		subGroup: "face-smiling",
// 	},
// 	{
// 		slug: "e0-6-beaming-face-with-smiling-eyes",
// 		character: "\ud83d\ude01",
// 		unicodeName: "E0.6 beaming face with smiling eyes",
// 		codePoint: "1F601",
// 		group: "smileys-emotion",
// 		subGroup: "face-smiling",
// 	},
// 	{
// 		slug: "e0-6-grinning-squinting-face",
// 		character: "\ud83d\ude06",
// 		unicodeName: "E0.6 grinning squinting face",
// 		codePoint: "1F606",
// 		group: "smileys-emotion",
// 		subGroup: "face-smiling",
// 	},
// 	{
// 		slug: "e0-6-grinning-face-with-sweat",
// 		character: "\ud83d\ude05",
// 		unicodeName: "E0.6 grinning face with sweat",
// 		codePoint: "1F605",
// 		group: "smileys-emotion",
// 		subGroup: "face-smiling",
// 	},
// 	{
// 		slug: "e3-0-rolling-on-the-floor-laughing",
// 		character: "\ud83e\udd23",
// 		unicodeName: "E3.0 rolling on the floor laughing",
// 		codePoint: "1F923",
// 		group: "smileys-emotion",
// 		subGroup: "face-smiling",
// 	},
// 	{
// 		slug: "e0-6-face-with-tears-of-joy",
// 		character: "\ud83d\ude02",
// 		unicodeName: "E0.6 face with tears of joy",
// 		codePoint: "1F602",
// 		group: "smileys-emotion",
// 		subGroup: "face-smiling",
// 	},
// 	{
// 		slug: "e1-0-slightly-smiling-face",
// 		character: "\ud83d\ude42",
// 		unicodeName: "E1.0 slightly smiling face",
// 		codePoint: "1F642",
// 		group: "smileys-emotion",
// 		subGroup: "face-smiling",
// 	},
// 	{
// 		slug: "e1-0-upside-down-face",
// 		character: "\ud83d\ude43",
// 		unicodeName: "E1.0 upside-down face",
// 		codePoint: "1F643",
// 		group: "smileys-emotion",
// 		subGroup: "face-smiling",
// 	},
// 	{
// 		slug: "e14-0-melting-face",
// 		character: "\ud83e\udee0",
// 		unicodeName: "E14.0 melting face",
// 		codePoint: "1FAE0",
// 		group: "smileys-emotion",
// 		subGroup: "face-smiling",
// 	},
// 	{
// 		slug: "e0-6-winking-face",
// 		character: "\ud83d\ude09",
// 		unicodeName: "E0.6 winking face",
// 		codePoint: "1F609",
// 		group: "smileys-emotion",
// 		subGroup: "face-smiling",
// 	},
// 	{
// 		slug: "e0-6-smiling-face-with-smiling-eyes",
// 		character: "\ud83d\ude0a",
// 		unicodeName: "E0.6 smiling face with smiling eyes",
// 		codePoint: "1F60A",
// 		group: "smileys-emotion",
// 		subGroup: "face-smiling",
// 	},
// 	{
// 		slug: "e1-0-smiling-face-with-halo",
// 		character: "\ud83d\ude07",
// 		unicodeName: "E1.0 smiling face with halo",
// 		codePoint: "1F607",
// 		group: "smileys-emotion",
// 		subGroup: "face-smiling",
// 	},
// 	{
// 		slug: "e11-0-smiling-face-with-hearts",
// 		character: "\ud83e\udd70",
// 		unicodeName: "E11.0 smiling face with hearts",
// 		codePoint: "1F970",
// 		group: "smileys-emotion",
// 		subGroup: "face-affection",
// 	},
// 	{
// 		slug: "e0-6-smiling-face-with-heart-eyes",
// 		character: "\ud83d\ude0d",
// 		unicodeName: "E0.6 smiling face with heart-eyes",
// 		codePoint: "1F60D",
// 		group: "smileys-emotion",
// 		subGroup: "face-affection",
// 	},
// 	{
// 		slug: "e5-0-star-struck",
// 		character: "\ud83e\udd29",
// 		unicodeName: "E5.0 star-struck",
// 		codePoint: "1F929",
// 		group: "smileys-emotion",
// 		subGroup: "face-affection",
// 	},
// 	{
// 		slug: "e0-6-face-blowing-a-kiss",
// 		character: "\ud83d\ude18",
// 		unicodeName: "E0.6 face blowing a kiss",
// 		codePoint: "1F618",
// 		group: "smileys-emotion",
// 		subGroup: "face-affection",
// 	},
// 	{
// 		slug: "e1-0-kissing-face",
// 		character: "\ud83d\ude17",
// 		unicodeName: "E1.0 kissing face",
// 		codePoint: "1F617",
// 		group: "smileys-emotion",
// 		subGroup: "face-affection",
// 	},
// 	{
// 		slug: "e0-6-smiling-face",
// 		character: "\u263a\ufe0f",
// 		unicodeName: "E0.6 smiling face",
// 		codePoint: "263A FE0F",
// 		group: "smileys-emotion",
// 		subGroup: "face-affection",
// 	},
// 	{
// 		slug: "e0-6-kissing-face-with-closed-eyes",
// 		character: "\ud83d\ude1a",
// 		unicodeName: "E0.6 kissing face with closed eyes",
// 		codePoint: "1F61A",
// 		group: "smileys-emotion",
// 		subGroup: "face-affection",
// 	},
// 	{
// 		slug: "e1-0-kissing-face-with-smiling-eyes",
// 		character: "\ud83d\ude19",
// 		unicodeName: "E1.0 kissing face with smiling eyes",
// 		codePoint: "1F619",
// 		group: "smileys-emotion",
// 		subGroup: "face-affection",
// 	},
// 	{
// 		slug: "e13-0-smiling-face-with-tear",
// 		character: "\ud83e\udd72",
// 		unicodeName: "E13.0 smiling face with tear",
// 		codePoint: "1F972",
// 		group: "smileys-emotion",
// 		subGroup: "face-affection",
// 	},
// 	{
// 		slug: "e0-6-face-savoring-food",
// 		character: "\ud83d\ude0b",
// 		unicodeName: "E0.6 face savoring food",
// 		codePoint: "1F60B",
// 		group: "smileys-emotion",
// 		subGroup: "face-tongue",
// 	},
// 	{
// 		slug: "e1-0-face-with-tongue",
// 		character: "\ud83d\ude1b",
// 		unicodeName: "E1.0 face with tongue",
// 		codePoint: "1F61B",
// 		group: "smileys-emotion",
// 		subGroup: "face-tongue",
// 	},
// 	{
// 		slug: "e0-6-winking-face-with-tongue",
// 		character: "\ud83d\ude1c",
// 		unicodeName: "E0.6 winking face with tongue",
// 		codePoint: "1F61C",
// 		group: "smileys-emotion",
// 		subGroup: "face-tongue",
// 	},
// 	{
// 		slug: "e5-0-zany-face",
// 		character: "\ud83e\udd2a",
// 		unicodeName: "E5.0 zany face",
// 		codePoint: "1F92A",
// 		group: "smileys-emotion",
// 		subGroup: "face-tongue",
// 	},
// 	{
// 		slug: "e0-6-squinting-face-with-tongue",
// 		character: "\ud83d\ude1d",
// 		unicodeName: "E0.6 squinting face with tongue",
// 		codePoint: "1F61D",
// 		group: "smileys-emotion",
// 		subGroup: "face-tongue",
// 	},
// 	{
// 		slug: "e1-0-money-mouth-face",
// 		character: "\ud83e\udd11",
// 		unicodeName: "E1.0 money-mouth face",
// 		codePoint: "1F911",
// 		group: "smileys-emotion",
// 		subGroup: "face-tongue",
// 	},
// 	{
// 		slug: "e1-0-smiling-face-with-open-hands",
// 		character: "\ud83e\udd17",
// 		unicodeName: "E1.0 smiling face with open hands",
// 		codePoint: "1F917",
// 		group: "smileys-emotion",
// 		subGroup: "face-hand",
// 	},
// 	{
// 		slug: "e5-0-face-with-hand-over-mouth",
// 		character: "\ud83e\udd2d",
// 		unicodeName: "E5.0 face with hand over mouth",
// 		codePoint: "1F92D",
// 		group: "smileys-emotion",
// 		subGroup: "face-hand",
// 	},
// 	{
// 		slug: "e14-0-face-with-open-eyes-and-hand-over-mouth",
// 		character: "\ud83e\udee2",
// 		unicodeName: "E14.0 face with open eyes and hand over mouth",
// 		codePoint: "1FAE2",
// 		group: "smileys-emotion",
// 		subGroup: "face-hand",
// 	},
// 	{
// 		slug: "e14-0-face-with-peeking-eye",
// 		character: "\ud83e\udee3",
// 		unicodeName: "E14.0 face with peeking eye",
// 		codePoint: "1FAE3",
// 		group: "smileys-emotion",
// 		subGroup: "face-hand",
// 	},
// 	{
// 		slug: "e5-0-shushing-face",
// 		character: "\ud83e\udd2b",
// 		unicodeName: "E5.0 shushing face",
// 		codePoint: "1F92B",
// 		group: "smileys-emotion",
// 		subGroup: "face-hand",
// 	},
// 	{
// 		slug: "e1-0-thinking-face",
// 		character: "\ud83e\udd14",
// 		unicodeName: "E1.0 thinking face",
// 		codePoint: "1F914",
// 		group: "smileys-emotion",
// 		subGroup: "face-hand",
// 	},
// 	{
// 		slug: "e14-0-saluting-face",
// 		character: "\ud83e\udee1",
// 		unicodeName: "E14.0 saluting face",
// 		codePoint: "1FAE1",
// 		group: "smileys-emotion",
// 		subGroup: "face-hand",
// 	},
// 	{
// 		slug: "e1-0-zipper-mouth-face",
// 		character: "\ud83e\udd10",
// 		unicodeName: "E1.0 zipper-mouth face",
// 		codePoint: "1F910",
// 		group: "smileys-emotion",
// 		subGroup: "face-neutral-skeptical",
// 	},
// 	{
// 		slug: "e5-0-face-with-raised-eyebrow",
// 		character: "\ud83e\udd28",
// 		unicodeName: "E5.0 face with raised eyebrow",
// 		codePoint: "1F928",
// 		group: "smileys-emotion",
// 		subGroup: "face-neutral-skeptical",
// 	},
// 	{
// 		slug: "e0-7-neutral-face",
// 		character: "\ud83d\ude10",
// 		unicodeName: "E0.7 neutral face",
// 		codePoint: "1F610",
// 		group: "smileys-emotion",
// 		subGroup: "face-neutral-skeptical",
// 	},
// 	{
// 		slug: "e1-0-expressionless-face",
// 		character: "\ud83d\ude11",
// 		unicodeName: "E1.0 expressionless face",
// 		codePoint: "1F611",
// 		group: "smileys-emotion",
// 		subGroup: "face-neutral-skeptical",
// 	},
// 	{
// 		slug: "e1-0-face-without-mouth",
// 		character: "\ud83d\ude36",
// 		unicodeName: "E1.0 face without mouth",
// 		codePoint: "1F636",
// 		group: "smileys-emotion",
// 		subGroup: "face-neutral-skeptical",
// 	},
// 	{
// 		slug: "e14-0-dotted-line-face",
// 		character: "\ud83e\udee5",
// 		unicodeName: "E14.0 dotted line face",
// 		codePoint: "1FAE5",
// 		group: "smileys-emotion",
// 		subGroup: "face-neutral-skeptical",
// 	},
// 	{
// 		slug: "e13-1-face-in-clouds",
// 		character: "\ud83d\ude36\u200d\ud83c\udf2b\ufe0f",
// 		unicodeName: "E13.1 face in clouds",
// 		codePoint: "1F636 200D 1F32B FE0F",
// 		group: "smileys-emotion",
// 		subGroup: "face-neutral-skeptical",
// 	},
// 	{
// 		slug: "e0-6-smirking-face",
// 		character: "\ud83d\ude0f",
// 		unicodeName: "E0.6 smirking face",
// 		codePoint: "1F60F",
// 		group: "smileys-emotion",
// 		subGroup: "face-neutral-skeptical",
// 	},
// 	{
// 		slug: "e0-6-unamused-face",
// 		character: "\ud83d\ude12",
// 		unicodeName: "E0.6 unamused face",
// 		codePoint: "1F612",
// 		group: "smileys-emotion",
// 		subGroup: "face-neutral-skeptical",
// 	},
// 	{
// 		slug: "e1-0-face-with-rolling-eyes",
// 		character: "\ud83d\ude44",
// 		unicodeName: "E1.0 face with rolling eyes",
// 		codePoint: "1F644",
// 		group: "smileys-emotion",
// 		subGroup: "face-neutral-skeptical",
// 	},
// 	{
// 		slug: "e1-0-grimacing-face",
// 		character: "\ud83d\ude2c",
// 		unicodeName: "E1.0 grimacing face",
// 		codePoint: "1F62C",
// 		group: "smileys-emotion",
// 		subGroup: "face-neutral-skeptical",
// 	},
// 	{
// 		slug: "e13-1-face-exhaling",
// 		character: "\ud83d\ude2e\u200d\ud83d\udca8",
// 		unicodeName: "E13.1 face exhaling",
// 		codePoint: "1F62E 200D 1F4A8",
// 		group: "smileys-emotion",
// 		subGroup: "face-neutral-skeptical",
// 	},
// 	{
// 		slug: "e3-0-lying-face",
// 		character: "\ud83e\udd25",
// 		unicodeName: "E3.0 lying face",
// 		codePoint: "1F925",
// 		group: "smileys-emotion",
// 		subGroup: "face-neutral-skeptical",
// 	},
// 	{
// 		slug: "e15-0-shaking-face",
// 		character: "\ud83e\udee8",
// 		unicodeName: "E15.0 shaking face",
// 		codePoint: "1FAE8",
// 		group: "smileys-emotion",
// 		subGroup: "face-neutral-skeptical",
// 	},
// 	{
// 		slug: "e0-6-relieved-face",
// 		character: "\ud83d\ude0c",
// 		unicodeName: "E0.6 relieved face",
// 		codePoint: "1F60C",
// 		group: "smileys-emotion",
// 		subGroup: "face-sleepy",
// 	},
// 	{
// 		slug: "e0-6-pensive-face",
// 		character: "\ud83d\ude14",
// 		unicodeName: "E0.6 pensive face",
// 		codePoint: "1F614",
// 		group: "smileys-emotion",
// 		subGroup: "face-sleepy",
// 	},
// 	{
// 		slug: "e0-6-sleepy-face",
// 		character: "\ud83d\ude2a",
// 		unicodeName: "E0.6 sleepy face",
// 		codePoint: "1F62A",
// 		group: "smileys-emotion",
// 		subGroup: "face-sleepy",
// 	},
// 	{
// 		slug: "e3-0-drooling-face",
// 		character: "\ud83e\udd24",
// 		unicodeName: "E3.0 drooling face",
// 		codePoint: "1F924",
// 		group: "smileys-emotion",
// 		subGroup: "face-sleepy",
// 	},
// 	{
// 		slug: "e1-0-sleeping-face",
// 		character: "\ud83d\ude34",
// 		unicodeName: "E1.0 sleeping face",
// 		codePoint: "1F634",
// 		group: "smileys-emotion",
// 		subGroup: "face-sleepy",
// 	},
// 	{
// 		slug: "e0-6-face-with-medical-mask",
// 		character: "\ud83d\ude37",
// 		unicodeName: "E0.6 face with medical mask",
// 		codePoint: "1F637",
// 		group: "smileys-emotion",
// 		subGroup: "face-unwell",
// 	},
// 	{
// 		slug: "e1-0-face-with-thermometer",
// 		character: "\ud83e\udd12",
// 		unicodeName: "E1.0 face with thermometer",
// 		codePoint: "1F912",
// 		group: "smileys-emotion",
// 		subGroup: "face-unwell",
// 	},
// 	{
// 		slug: "e1-0-face-with-head-bandage",
// 		character: "\ud83e\udd15",
// 		unicodeName: "E1.0 face with head-bandage",
// 		codePoint: "1F915",
// 		group: "smileys-emotion",
// 		subGroup: "face-unwell",
// 	},
// 	{
// 		slug: "e3-0-nauseated-face",
// 		character: "\ud83e\udd22",
// 		unicodeName: "E3.0 nauseated face",
// 		codePoint: "1F922",
// 		group: "smileys-emotion",
// 		subGroup: "face-unwell",
// 	},
// 	{
// 		slug: "e5-0-face-vomiting",
// 		character: "\ud83e\udd2e",
// 		unicodeName: "E5.0 face vomiting",
// 		codePoint: "1F92E",
// 		group: "smileys-emotion",
// 		subGroup: "face-unwell",
// 	},
// 	{
// 		slug: "e3-0-sneezing-face",
// 		character: "\ud83e\udd27",
// 		unicodeName: "E3.0 sneezing face",
// 		codePoint: "1F927",
// 		group: "smileys-emotion",
// 		subGroup: "face-unwell",
// 	},
// 	{
// 		slug: "e11-0-hot-face",
// 		character: "\ud83e\udd75",
// 		unicodeName: "E11.0 hot face",
// 		codePoint: "1F975",
// 		group: "smileys-emotion",
// 		subGroup: "face-unwell",
// 	},
// 	{
// 		slug: "e11-0-cold-face",
// 		character: "\ud83e\udd76",
// 		unicodeName: "E11.0 cold face",
// 		codePoint: "1F976",
// 		group: "smileys-emotion",
// 		subGroup: "face-unwell",
// 	},
// 	{
// 		slug: "e11-0-woozy-face",
// 		character: "\ud83e\udd74",
// 		unicodeName: "E11.0 woozy face",
// 		codePoint: "1F974",
// 		group: "smileys-emotion",
// 		subGroup: "face-unwell",
// 	},
// 	{
// 		slug: "e0-6-face-with-crossed-out-eyes",
// 		character: "\ud83d\ude35",
// 		unicodeName: "E0.6 face with crossed-out eyes",
// 		codePoint: "1F635",
// 		group: "smileys-emotion",
// 		subGroup: "face-unwell",
// 		variants: [
// 			{
// 				slug: "e13-1-face-with-spiral-eyes",
// 				character: "\ud83d\ude35\u200d\ud83d\udcab",
// 			},
// 		],
// 	},
// 	{
// 		slug: "e5-0-exploding-head",
// 		character: "\ud83e\udd2f",
// 		unicodeName: "E5.0 exploding head",
// 		codePoint: "1F92F",
// 		group: "smileys-emotion",
// 		subGroup: "face-unwell",
// 	},
// 	{
// 		slug: "e3-0-cowboy-hat-face",
// 		character: "\ud83e\udd20",
// 		unicodeName: "E3.0 cowboy hat face",
// 		codePoint: "1F920",
// 		group: "smileys-emotion",
// 		subGroup: "face-hat",
// 	},
// 	{
// 		slug: "e11-0-partying-face",
// 		character: "\ud83e\udd73",
// 		unicodeName: "E11.0 partying face",
// 		codePoint: "1F973",
// 		group: "smileys-emotion",
// 		subGroup: "face-hat",
// 	},
// 	{
// 		slug: "e13-0-disguised-face",
// 		character: "\ud83e\udd78",
// 		unicodeName: "E13.0 disguised face",
// 		codePoint: "1F978",
// 		group: "smileys-emotion",
// 		subGroup: "face-hat",
// 	},
// 	{
// 		slug: "e1-0-smiling-face-with-sunglasses",
// 		character: "\ud83d\ude0e",
// 		unicodeName: "E1.0 smiling face with sunglasses",
// 		codePoint: "1F60E",
// 		group: "smileys-emotion",
// 		subGroup: "face-glasses",
// 	},
// 	{
// 		slug: "e1-0-nerd-face",
// 		character: "\ud83e\udd13",
// 		unicodeName: "E1.0 nerd face",
// 		codePoint: "1F913",
// 		group: "smileys-emotion",
// 		subGroup: "face-glasses",
// 	},
// 	{
// 		slug: "e5-0-face-with-monocle",
// 		character: "\ud83e\uddd0",
// 		unicodeName: "E5.0 face with monocle",
// 		codePoint: "1F9D0",
// 		group: "smileys-emotion",
// 		subGroup: "face-glasses",
// 	},
// 	{
// 		slug: "e1-0-confused-face",
// 		character: "\ud83d\ude15",
// 		unicodeName: "E1.0 confused face",
// 		codePoint: "1F615",
// 		group: "smileys-emotion",
// 		subGroup: "face-concerned",
// 	},
// 	{
// 		slug: "e14-0-face-with-diagonal-mouth",
// 		character: "\ud83e\udee4",
// 		unicodeName: "E14.0 face with diagonal mouth",
// 		codePoint: "1FAE4",
// 		group: "smileys-emotion",
// 		subGroup: "face-concerned",
// 	},
// 	{
// 		slug: "e1-0-worried-face",
// 		character: "\ud83d\ude1f",
// 		unicodeName: "E1.0 worried face",
// 		codePoint: "1F61F",
// 		group: "smileys-emotion",
// 		subGroup: "face-concerned",
// 	},
// 	{
// 		slug: "e1-0-slightly-frowning-face",
// 		character: "\ud83d\ude41",
// 		unicodeName: "E1.0 slightly frowning face",
// 		codePoint: "1F641",
// 		group: "smileys-emotion",
// 		subGroup: "face-concerned",
// 	},
// 	{
// 		slug: "e0-7-frowning-face",
// 		character: "\u2639\ufe0f",
// 		unicodeName: "E0.7 frowning face",
// 		codePoint: "2639 FE0F",
// 		group: "smileys-emotion",
// 		subGroup: "face-concerned",
// 	},
// 	{
// 		slug: "e1-0-face-with-open-mouth",
// 		character: "\ud83d\ude2e",
// 		unicodeName: "E1.0 face with open mouth",
// 		codePoint: "1F62E",
// 		group: "smileys-emotion",
// 		subGroup: "face-concerned",
// 	},
// 	{
// 		slug: "e1-0-hushed-face",
// 		character: "\ud83d\ude2f",
// 		unicodeName: "E1.0 hushed face",
// 		codePoint: "1F62F",
// 		group: "smileys-emotion",
// 		subGroup: "face-concerned",
// 	},
// 	{
// 		slug: "e0-6-astonished-face",
// 		character: "\ud83d\ude32",
// 		unicodeName: "E0.6 astonished face",
// 		codePoint: "1F632",
// 		group: "smileys-emotion",
// 		subGroup: "face-concerned",
// 	},
// 	{
// 		slug: "e0-6-flushed-face",
// 		character: "\ud83d\ude33",
// 		unicodeName: "E0.6 flushed face",
// 		codePoint: "1F633",
// 		group: "smileys-emotion",
// 		subGroup: "face-concerned",
// 	},
// 	{
// 		slug: "e11-0-pleading-face",
// 		character: "\ud83e\udd7a",
// 		unicodeName: "E11.0 pleading face",
// 		codePoint: "1F97A",
// 		group: "smileys-emotion",
// 		subGroup: "face-concerned",
// 	},
// 	{
// 		slug: "e14-0-face-holding-back-tears",
// 		character: "\ud83e\udd79",
// 		unicodeName: "E14.0 face holding back tears",
// 		codePoint: "1F979",
// 		group: "smileys-emotion",
// 		subGroup: "face-concerned",
// 	},
// 	{
// 		slug: "e1-0-frowning-face-with-open-mouth",
// 		character: "\ud83d\ude26",
// 		unicodeName: "E1.0 frowning face with open mouth",
// 		codePoint: "1F626",
// 		group: "smileys-emotion",
// 		subGroup: "face-concerned",
// 	},
// 	{
// 		slug: "e1-0-anguished-face",
// 		character: "\ud83d\ude27",
// 		unicodeName: "E1.0 anguished face",
// 		codePoint: "1F627",
// 		group: "smileys-emotion",
// 		subGroup: "face-concerned",
// 	},
// 	{
// 		slug: "e0-6-fearful-face",
// 		character: "\ud83d\ude28",
// 		unicodeName: "E0.6 fearful face",
// 		codePoint: "1F628",
// 		group: "smileys-emotion",
// 		subGroup: "face-concerned",
// 	},
// 	{
// 		slug: "e0-6-anxious-face-with-sweat",
// 		character: "\ud83d\ude30",
// 		unicodeName: "E0.6 anxious face with sweat",
// 		codePoint: "1F630",
// 		group: "smileys-emotion",
// 		subGroup: "face-concerned",
// 	},
// 	{
// 		slug: "e0-6-sad-but-relieved-face",
// 		character: "\ud83d\ude25",
// 		unicodeName: "E0.6 sad but relieved face",
// 		codePoint: "1F625",
// 		group: "smileys-emotion",
// 		subGroup: "face-concerned",
// 	},
// 	{
// 		slug: "e0-6-crying-face",
// 		character: "\ud83d\ude22",
// 		unicodeName: "E0.6 crying face",
// 		codePoint: "1F622",
// 		group: "smileys-emotion",
// 		subGroup: "face-concerned",
// 	},
// 	{
// 		slug: "e0-6-loudly-crying-face",
// 		character: "\ud83d\ude2d",
// 		unicodeName: "E0.6 loudly crying face",
// 		codePoint: "1F62D",
// 		group: "smileys-emotion",
// 		subGroup: "face-concerned",
// 	},
// 	{
// 		slug: "e0-6-face-screaming-in-fear",
// 		character: "\ud83d\ude31",
// 		unicodeName: "E0.6 face screaming in fear",
// 		codePoint: "1F631",
// 		group: "smileys-emotion",
// 		subGroup: "face-concerned",
// 	},
// 	{
// 		slug: "e0-6-confounded-face",
// 		character: "\ud83d\ude16",
// 		unicodeName: "E0.6 confounded face",
// 		codePoint: "1F616",
// 		group: "smileys-emotion",
// 		subGroup: "face-concerned",
// 	},
// 	{
// 		slug: "e0-6-persevering-face",
// 		character: "\ud83d\ude23",
// 		unicodeName: "E0.6 persevering face",
// 		codePoint: "1F623",
// 		group: "smileys-emotion",
// 		subGroup: "face-concerned",
// 	},
// 	{
// 		slug: "e0-6-disappointed-face",
// 		character: "\ud83d\ude1e",
// 		unicodeName: "E0.6 disappointed face",
// 		codePoint: "1F61E",
// 		group: "smileys-emotion",
// 		subGroup: "face-concerned",
// 	},
// 	{
// 		slug: "e0-6-downcast-face-with-sweat",
// 		character: "\ud83d\ude13",
// 		unicodeName: "E0.6 downcast face with sweat",
// 		codePoint: "1F613",
// 		group: "smileys-emotion",
// 		subGroup: "face-concerned",
// 	},
// 	{
// 		slug: "e0-6-weary-face",
// 		character: "\ud83d\ude29",
// 		unicodeName: "E0.6 weary face",
// 		codePoint: "1F629",
// 		group: "smileys-emotion",
// 		subGroup: "face-concerned",
// 	},
// 	{
// 		slug: "e0-6-tired-face",
// 		character: "\ud83d\ude2b",
// 		unicodeName: "E0.6 tired face",
// 		codePoint: "1F62B",
// 		group: "smileys-emotion",
// 		subGroup: "face-concerned",
// 	},
// 	{
// 		slug: "e12-0-yawning-face",
// 		character: "\ud83e\udd71",
// 		unicodeName: "E12.0 yawning face",
// 		codePoint: "1F971",
// 		group: "smileys-emotion",
// 		subGroup: "face-concerned",
// 	},
// 	{
// 		slug: "e0-6-face-with-steam-from-nose",
// 		character: "\ud83d\ude24",
// 		unicodeName: "E0.6 face with steam from nose",
// 		codePoint: "1F624",
// 		group: "smileys-emotion",
// 		subGroup: "face-negative",
// 	},
// 	{
// 		slug: "e0-6-enraged-face",
// 		character: "\ud83d\ude21",
// 		unicodeName: "E0.6 enraged face",
// 		codePoint: "1F621",
// 		group: "smileys-emotion",
// 		subGroup: "face-negative",
// 	},
// 	{
// 		slug: "e0-6-angry-face",
// 		character: "\ud83d\ude20",
// 		unicodeName: "E0.6 angry face",
// 		codePoint: "1F620",
// 		group: "smileys-emotion",
// 		subGroup: "face-negative",
// 	},
// 	{
// 		slug: "e5-0-face-with-symbols-on-mouth",
// 		character: "\ud83e\udd2c",
// 		unicodeName: "E5.0 face with symbols on mouth",
// 		codePoint: "1F92C",
// 		group: "smileys-emotion",
// 		subGroup: "face-negative",
// 	},
// 	{
// 		slug: "e1-0-smiling-face-with-horns",
// 		character: "\ud83d\ude08",
// 		unicodeName: "E1.0 smiling face with horns",
// 		codePoint: "1F608",
// 		group: "smileys-emotion",
// 		subGroup: "face-negative",
// 	},
// 	{
// 		slug: "e0-6-angry-face-with-horns",
// 		character: "\ud83d\udc7f",
// 		unicodeName: "E0.6 angry face with horns",
// 		codePoint: "1F47F",
// 		group: "smileys-emotion",
// 		subGroup: "face-negative",
// 	},
// 	{
// 		slug: "e0-6-skull",
// 		character: "\ud83d\udc80",
// 		unicodeName: "E0.6 skull",
// 		codePoint: "1F480",
// 		group: "smileys-emotion",
// 		subGroup: "face-negative",
// 	},
// 	{
// 		slug: "e1-0-skull-and-crossbones",
// 		character: "\u2620\ufe0f",
// 		unicodeName: "E1.0 skull and crossbones",
// 		codePoint: "2620 FE0F",
// 		group: "smileys-emotion",
// 		subGroup: "face-negative",
// 	},
// 	{
// 		slug: "e0-6-pile-of-poo",
// 		character: "\ud83d\udca9",
// 		unicodeName: "E0.6 pile of poo",
// 		codePoint: "1F4A9",
// 		group: "smileys-emotion",
// 		subGroup: "face-costume",
// 	},
// 	{
// 		slug: "e3-0-clown-face",
// 		character: "\ud83e\udd21",
// 		unicodeName: "E3.0 clown face",
// 		codePoint: "1F921",
// 		group: "smileys-emotion",
// 		subGroup: "face-costume",
// 	},
// 	{
// 		slug: "e0-6-ogre",
// 		character: "\ud83d\udc79",
// 		unicodeName: "E0.6 ogre",
// 		codePoint: "1F479",
// 		group: "smileys-emotion",
// 		subGroup: "face-costume",
// 	},
// 	{
// 		slug: "e0-6-goblin",
// 		character: "\ud83d\udc7a",
// 		unicodeName: "E0.6 goblin",
// 		codePoint: "1F47A",
// 		group: "smileys-emotion",
// 		subGroup: "face-costume",
// 	},
// 	{
// 		slug: "e0-6-ghost",
// 		character: "\ud83d\udc7b",
// 		unicodeName: "E0.6 ghost",
// 		codePoint: "1F47B",
// 		group: "smileys-emotion",
// 		subGroup: "face-costume",
// 	},
// 	{
// 		slug: "e0-6-alien",
// 		character: "\ud83d\udc7d",
// 		unicodeName: "E0.6 alien",
// 		codePoint: "1F47D",
// 		group: "smileys-emotion",
// 		subGroup: "face-costume",
// 	},
// 	{
// 		slug: "e0-6-alien-monster",
// 		character: "\ud83d\udc7e",
// 		unicodeName: "E0.6 alien monster",
// 		codePoint: "1F47E",
// 		group: "smileys-emotion",
// 		subGroup: "face-costume",
// 	},
// 	{
// 		slug: "e1-0-robot",
// 		character: "\ud83e\udd16",
// 		unicodeName: "E1.0 robot",
// 		codePoint: "1F916",
// 		group: "smileys-emotion",
// 		subGroup: "face-costume",
// 	},
// 	{
// 		slug: "e0-6-grinning-cat",
// 		character: "\ud83d\ude3a",
// 		unicodeName: "E0.6 grinning cat",
// 		codePoint: "1F63A",
// 		group: "smileys-emotion",
// 		subGroup: "cat-face",
// 	},
// 	{
// 		slug: "e0-6-grinning-cat-with-smiling-eyes",
// 		character: "\ud83d\ude38",
// 		unicodeName: "E0.6 grinning cat with smiling eyes",
// 		codePoint: "1F638",
// 		group: "smileys-emotion",
// 		subGroup: "cat-face",
// 	},
// 	{
// 		slug: "e0-6-cat-with-tears-of-joy",
// 		character: "\ud83d\ude39",
// 		unicodeName: "E0.6 cat with tears of joy",
// 		codePoint: "1F639",
// 		group: "smileys-emotion",
// 		subGroup: "cat-face",
// 	},
// 	{
// 		slug: "e0-6-smiling-cat-with-heart-eyes",
// 		character: "\ud83d\ude3b",
// 		unicodeName: "E0.6 smiling cat with heart-eyes",
// 		codePoint: "1F63B",
// 		group: "smileys-emotion",
// 		subGroup: "cat-face",
// 	},
// 	{
// 		slug: "e0-6-cat-with-wry-smile",
// 		character: "\ud83d\ude3c",
// 		unicodeName: "E0.6 cat with wry smile",
// 		codePoint: "1F63C",
// 		group: "smileys-emotion",
// 		subGroup: "cat-face",
// 	},
// 	{
// 		slug: "e0-6-kissing-cat",
// 		character: "\ud83d\ude3d",
// 		unicodeName: "E0.6 kissing cat",
// 		codePoint: "1F63D",
// 		group: "smileys-emotion",
// 		subGroup: "cat-face",
// 	},
// 	{
// 		slug: "e0-6-weary-cat",
// 		character: "\ud83d\ude40",
// 		unicodeName: "E0.6 weary cat",
// 		codePoint: "1F640",
// 		group: "smileys-emotion",
// 		subGroup: "cat-face",
// 	},
// 	{
// 		slug: "e0-6-crying-cat",
// 		character: "\ud83d\ude3f",
// 		unicodeName: "E0.6 crying cat",
// 		codePoint: "1F63F",
// 		group: "smileys-emotion",
// 		subGroup: "cat-face",
// 	},
// 	{
// 		slug: "e0-6-pouting-cat",
// 		character: "\ud83d\ude3e",
// 		unicodeName: "E0.6 pouting cat",
// 		codePoint: "1F63E",
// 		group: "smileys-emotion",
// 		subGroup: "cat-face",
// 	},
// 	{
// 		slug: "e0-6-see-no-evil-monkey",
// 		character: "\ud83d\ude48",
// 		unicodeName: "E0.6 see-no-evil monkey",
// 		codePoint: "1F648",
// 		group: "smileys-emotion",
// 		subGroup: "monkey-face",
// 	},
// 	{
// 		slug: "e0-6-hear-no-evil-monkey",
// 		character: "\ud83d\ude49",
// 		unicodeName: "E0.6 hear-no-evil monkey",
// 		codePoint: "1F649",
// 		group: "smileys-emotion",
// 		subGroup: "monkey-face",
// 	},
// 	{
// 		slug: "e0-6-speak-no-evil-monkey",
// 		character: "\ud83d\ude4a",
// 		unicodeName: "E0.6 speak-no-evil monkey",
// 		codePoint: "1F64A",
// 		group: "smileys-emotion",
// 		subGroup: "monkey-face",
// 	},
// 	{
// 		slug: "e0-6-love-letter",
// 		character: "\ud83d\udc8c",
// 		unicodeName: "E0.6 love letter",
// 		codePoint: "1F48C",
// 		group: "smileys-emotion",
// 		subGroup: "heart",
// 	},
// 	{
// 		slug: "e0-6-heart-with-arrow",
// 		character: "\ud83d\udc98",
// 		unicodeName: "E0.6 heart with arrow",
// 		codePoint: "1F498",
// 		group: "smileys-emotion",
// 		subGroup: "heart",
// 	},
// 	{
// 		slug: "e0-6-heart-with-ribbon",
// 		character: "\ud83d\udc9d",
// 		unicodeName: "E0.6 heart with ribbon",
// 		codePoint: "1F49D",
// 		group: "smileys-emotion",
// 		subGroup: "heart",
// 	},
// 	{
// 		slug: "e0-6-sparkling-heart",
// 		character: "\ud83d\udc96",
// 		unicodeName: "E0.6 sparkling heart",
// 		codePoint: "1F496",
// 		group: "smileys-emotion",
// 		subGroup: "heart",
// 	},
// 	{
// 		slug: "e0-6-growing-heart",
// 		character: "\ud83d\udc97",
// 		unicodeName: "E0.6 growing heart",
// 		codePoint: "1F497",
// 		group: "smileys-emotion",
// 		subGroup: "heart",
// 	},
// 	{
// 		slug: "e0-6-beating-heart",
// 		character: "\ud83d\udc93",
// 		unicodeName: "E0.6 beating heart",
// 		codePoint: "1F493",
// 		group: "smileys-emotion",
// 		subGroup: "heart",
// 	},
// 	{
// 		slug: "e0-6-revolving-hearts",
// 		character: "\ud83d\udc9e",
// 		unicodeName: "E0.6 revolving hearts",
// 		codePoint: "1F49E",
// 		group: "smileys-emotion",
// 		subGroup: "heart",
// 	},
// ]

function DrawerElements({ setObjClicked }) {
	const [apiResponse, setApiResponse] = useState([])

	useEffect(() => {
		callRestApi().then((result) => setApiResponse(JSON.parse(result)))
	}, [])

	function generateUniqueId() {
		// Generate a random string
		const randomString = Math.random().toString(36).substring(7)

		// Get the current timestamp
		const timestamp = new Date().getTime()

		// Combine the random string and timestamp to create a unique ID
		const uniqueId = randomString + timestamp

		return uniqueId
	}
	const selectedColor = "#000"

	const addRectangle = () => {
		const rect = new fabric.Rect({
			left: 100,
			top: 100,
			fill: "#111",
			width: 100,
			height: 100,
			type: "shape",
			id: generateUniqueId(),
		})
		// rect.on("mousedown", function (options) {
		// 	console.log("Clicked on circle:", this) // 'this' refers to the clicked circle object
		// 	console.log("Object properties:", this.toObject())
		// 	const objj = canvas.current.getActiveObject()
		// 	console.log("objj properties:", objj.height)
		// 	// Perform any other actions you need for circle
		// })

		canvas.current.add(rect)
		canvas.current.setActiveObject(rect) // Select the added rectangle
		canvas.current.renderAll()
	}
	const addHeart = () => {
		const heart = new fabric.Path(
			"M50 85 A20 20 0 0 1 90 85 Q100 130 50 175 Q0 130 10 85 A20 20 0 0 1 50 85",
			{
				left: 70,
				top: 50,
				fill: selectedColor,
				id: generateUniqueId(),
			}
		)

		canvas.current.add(heart)
		canvas.current.setActiveObject(heart)
		canvas.current.renderAll()
	}

	const addLeftArrow = () => {
		const leftArrowPath = new fabric.Path(
			"M20 0 L0 20 L20 40 L20 30 L40 30 L40 10 L20 10",
			{
				left: 400,
				top: 50,
				fill: selectedColor,
				id: generateUniqueId(),
			}
		)
		canvas.current.add(leftArrowPath)
		canvas.current.setActiveObject(leftArrowPath)
		canvas.current.renderAll()
	}
	const addUpArrow = () => {
		const upArrowPath = new fabric.Path(
			"M0 20 L20 0 L40 20 L30 20 L30 40 L10 40 L10 20",
			{
				left: 200,
				top: 50,
				fill: selectedColor,
				id: generateUniqueId(),
			}
		)
		canvas.current.add(upArrowPath)
		canvas.current.setActiveObject(upArrowPath)
		canvas.current.renderAll()
	}

	const addDownArrow = () => {
		const downArrowPath = new fabric.Path(
			"M0 20 L0 20 L10 20 L10 70 L90 0 L0 20 L40 20",
			{
				left: 200, // Set the initial left position
				top: 300, // Set the initial top position
				fill: "green", // Use the color you prefer
				id: generateUniqueId(),
			}
		)
		canvas.current.add(downArrowPath)
		canvas.current.setActiveObject(downArrowPath)
		canvas.current.renderAll()
	}

	const addRightArrow = () => {
		const rightArrowPath = new fabric.Path("M0 20 L20 0 L50 20 L20 40 Z", {
			left: 350,
			top: 200,
			fill: selectedColor,
			id: generateUniqueId(),
		})
		canvas.current.add(rightArrowPath)
		canvas.current.setActiveObject(rightArrowPath)
		canvas.current.renderAll()
	}

	const addTrapezoidal = () => {
		const trapezoidalPath = new fabric.Path("M0 0 L40 0 L30 40 L10 40 Z", {
			left: 600,
			top: 50,
			fill: selectedColor,
			id: generateUniqueId(),
		})
		canvas.current.add(trapezoidalPath)
		canvas.current.setActiveObject(trapezoidalPath)
		canvas.current.renderAll()
	}

	const addCircle = () => {
		const circle = new fabric.Circle({
			left: 200,
			top: 200,
			fill: selectedColor,
			radius: 50,
			id: generateUniqueId(),
		})
		canvas.current.add(circle)
		canvas.current.setActiveObject(circle) // Select the added circle
		canvas.current.renderAll()
	}

	const addTriangle = () => {
		const triangle = new fabric.Triangle({
			left: 300,
			top: 300,
			fill: selectedColor,
			width: 100,
			height: 100,
			id: generateUniqueId(),
		})
		canvas.current.add(triangle)
		canvas.current.setActiveObject(triangle)
		canvas.current.renderAll()
	}

	const addDiamond = () => {
		const diamond = new fabric.Polygon(
			[
				{ x: 350, y: 350 },
				{ x: 400, y: 300 },
				{ x: 450, y: 350 },
				{ x: 400, y: 400 },
			],
			{
				left: 375,
				top: 325,
				fill: selectedColor,
				id: generateUniqueId(),
			}
		)
		canvas.current.add(diamond)
		canvas.current.setActiveObject(diamond)
		canvas.current.renderAll()
	}

	const addStar = () => {
		const starPoints = [
			{ x: 50, y: 0 },
			{ x: 61, y: 39 },
			{ x: 99, y: 39 },
			{ x: 67, y: 60 },
			{ x: 78, y: 99 },
			{ x: 50, y: 75 },
			{ x: 22, y: 99 },
			{ x: 33, y: 60 },
			{ x: 1, y: 39 },
			{ x: 39, y: 39 },
		]

		const star = new fabric.Polygon(starPoints, {
			left: 550,
			top: 300,
			fill: selectedColor,
			id: generateUniqueId(),
		})
		canvas.current.add(star)
		canvas.current.setActiveObject(star)
		canvas.current.renderAll()
	}
	const addRoundedRectangle = () => {
		const roundedRect = new fabric.Rect({
			left: 600,
			top: 250,
			fill: selectedColor,
			width: 100,
			height: 60,
			rx: 10, // Radius of rounded corners
			ry: 10,
			id: generateUniqueId(),
		})
		canvas.current.add(roundedRect)
		canvas.current.setActiveObject(roundedRect)
		canvas.current.renderAll()
	}
	const addPentagon = () => {
		const pentagon = new fabric.Polygon(
			[
				{ x: 100, y: 100 },
				{ x: 200, y: 50 },
				{ x: 300, y: 100 },
				{ x: 260, y: 200 },
				{ x: 140, y: 200 },
			],
			{
				fill: selectedColor,
			}
		)

		canvas.current.add(pentagon)
		canvas.current.setActiveObject(pentagon)
		canvas.current.renderAll()
	}

	const addHexagon = () => {
		const hexagonPath = new fabric.Path(
			"M100 0 L200 0 L250 86.6 L200 173.2 L100 173.2 L50 86.6 Z"
		)
		hexagonPath.set({
			left: 100,
			top: 100,
			fill: selectedColor,
		})
		canvas.current.add(hexagonPath)
		canvas.current.setActiveObject(hexagonPath)
		canvas.current.renderAll()
	}

	const addHeptagon = () => {
		const heptagon = new fabric.Polygon(
			[
				{ x: 150, y: 100 },
				{ x: 250, y: 50 },
				{ x: 350, y: 100 },
				{ x: 350, y: 200 },
				{ x: 300, y: 250 },
				{ x: 200, y: 250 },
				{ x: 150, y: 200 },
			],
			{
				fill: selectedColor,
			}
		)

		canvas.current.add(heptagon)
		canvas.current.setActiveObject(heptagon)
		canvas.current.renderAll()
	}
	const addOctagon = () => {
		const octagonPath = new fabric.Path(
			"M100 0 L200 0 L250 50 L250 150 L200 200 L100 200 L50 150 L50 50 Z"
		)
		octagonPath.set({
			left: 100,
			top: 100,
			fill: selectedColor,
		})
		canvas.current.add(octagonPath)
		canvas.current.setActiveObject(octagonPath)
		canvas.current.renderAll()
	}
	const addLine = () => {
		const line = new fabric.Line([50, 50, 200, 50], {
			stroke: selectedColor,
			strokeWidth: 2,
		})
		canvas.current.add(line)
		canvas.current.setActiveObject(line) // Select the added line
		canvas.current.renderAll()
	}

	const addEmoji = (stickerData) => {
		const sticker = new fabric.Text(stickerData.character, {
			left: 100, // Adjust the position as needed
			top: 100, // Adjust the position as needed
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
			<Box sx={{ height: "92vh", overflowY: "auto" }}>
				<Box sx={{ ml: "0.8rem", pt: "1rem" }}>
					<Typography sx={{ color: "white" }}>Shapes:</Typography>
				</Box>
				<Box sx={{ display: "flex", pl: "0.6rem", flexWrap: "wrap" }}>
					<Box
						sx={{
							p: "0.4rem",
							overflow: "hidden",
							transition: "transform 0.2s",
							":hover": { transform: "scale(1.2)" },
						}}
					>
						<GiPlainSquare size={40} onClick={addRectangle} />
					</Box>
					<Box
						sx={{
							p: "0.3rem",
							overflow: "hidden",
							transition: "transform 0.2s",
							":hover": { transform: "scale(1.2)" },
						}}
					>
						<FaCircle size={45} onClick={addCircle} />
					</Box>
					<Box
						sx={{
							p: "0.3rem",
							overflow: "hidden",
							transition: "transform 0.2s",
							":hover": { transform: "scale(1.2)" },
						}}
					>
						<IoTriangle size={45} onClick={addTriangle} />
					</Box>
					<Box
						sx={{
							p: "0.3rem",
							overflow: "hidden",
							transition: "transform 0.2s",
							":hover": { transform: "scale(1.2)" },
						}}
					>
						<BsDiamondFill size={40} onClick={addDiamond} />
					</Box>
					<Box
						sx={{
							p: "0.3rem",
							overflow: "hidden",
							transition: "transform 0.2s",
							":hover": { transform: "scale(1.2)" },
						}}
					>
						<BsStarFill size={40} onClick={addStar} />
					</Box>
					<Box
						sx={{
							p: "0.3rem",
							overflow: "hidden",
							transition: "transform 0.2s",
							":hover": { transform: "scale(1.2)" },
						}}
					>
						<TbRectangleFilled size={40} onClick={addRoundedRectangle} />
					</Box>
					<Box
						sx={{
							p: "0.3rem",
							overflow: "hidden",
							transition: "transform 0.2s",
							":hover": { transform: "scale(1.2)" },
						}}
					>
						<BsFillPentagonFill size={40} onClick={addPentagon} />
					</Box>
					<Box
						sx={{
							p: "0.3rem",
							overflow: "hidden",
							transition: "transform 0.2s",
							":hover": { transform: "scale(1.2)" },
						}}
					>
						<BsHexagonFill size={40} onClick={addHexagon} />
					</Box>
					<Box
						sx={{
							p: "0.3rem",
							overflow: "hidden",
							transition: "transform 0.2s",
							":hover": { transform: "scale(1.2)" },
						}}
					>
						<BsHeptagonFill size={40} onClick={addHeptagon} />
					</Box>
					<Box
						sx={{
							p: "0.3rem",
							overflow: "hidden",
							transition: "transform 0.2s",
							":hover": { transform: "scale(1.2)" },
						}}
					>
						<BsOctagonFill size={40} onClick={addOctagon} />
					</Box>
					<Box
						sx={{
							p: "0.3rem",
							overflow: "hidden",
							transition: "transform 0.2s",
							":hover": { transform: "scale(1.2)" },
						}}
					>
						<BsFillHeartFill size={40} onClick={addHeart} />
					</Box>
					<Box
						sx={{
							p: "0.3rem",
							overflow: "hidden",
							transition: "transform 0.2s",
							":hover": { transform: "scale(1.2)" },
						}}
					>
						<ImArrowUp size={40} onClick={addUpArrow} />
					</Box>
					<Box
						sx={{
							p: "0.3rem",
							overflow: "hidden",
							transition: "transform 0.2s",
							":hover": { transform: "scale(1.2)" },
						}}
					>
						<ImArrowRight size={40} onClick={addRightArrow} />
					</Box>
					<Box
						sx={{
							p: "0.3rem",
							overflow: "hidden",
							transition: "transform 0.2s",
							":hover": { transform: "scale(1.2)" },
						}}
					>
						<ImArrowDown size={40} onClick={addDownArrow} />
					</Box>
					<Box
						sx={{
							p: "0.3rem",
							overflow: "hidden",
							transition: "transform 0.2s",
							":hover": { transform: "scale(1.2)" },
						}}
					>
						<ImArrowLeft size={40} onClick={addLeftArrow} />
					</Box>
					<Box
						sx={{
							p: "0.3rem",
							overflow: "hidden",
							transition: "transform 0.2s",
							":hover": { transform: "scale(1.2)" },
						}}
					>
						<FaBitbucket size={40} onClick={addTrapezoidal} />
					</Box>
					<Box
						sx={{
							p: "0.3rem",
							overflow: "hidden",
							transition: "transform 0.2s",
							":hover": { transform: "scale(1.2)" },
						}}
					>
						<HiOutlineMinus size={40} onClick={addLine} />
					</Box>

					{/* <Box sx={{ paddingY: "0.3rem", display: "flex" }}>
					<button id="addLine" onClick={addLine}>
						Add Line
					</button>
				</Box> */}
				</Box>
				<Box sx={{ ml: "0.8rem", pt: "0.2rem" }}>
					<Typography sx={{ color: "white" }}>Emojis:</Typography>
				</Box>
				<Box sx={{ display: "flex", fontSize: "2.5rem", flexWrap: "wrap" }}>
					{apiResponse.map((obj) => (
						<Box
							sx={{ mx: "0.2rem", cursor: "pointer" }}
							onClick={() => addEmoji(obj)}
						>
							{obj.character}
						</Box>
					))}
					{/* <p>{apiResponse}</p> */}
				</Box>
			</Box>
		</>
	)
}

export default DrawerElements
