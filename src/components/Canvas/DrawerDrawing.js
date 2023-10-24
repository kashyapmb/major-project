import React, { useRef, useEffect, useState } from "react"
import { fabric } from "fabric"
import "fabric-history"
import html2canvas from "html2canvas"
import jsPDF from "jspdf"
import { BiSolidBackpack } from "react-icons/bi"
import { Hexagon, Pentagon, Heptagon, Octagon } from "react-shapes"
import Design from "./Design"
import Templates from "./Datastore/Templates"

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

function DrawerDrawing() {
	var $ = function (id) {
		return document.getElementById(id)
	}

	var canvas = (this.__canvas = new fabric.Canvas("c", {
		isDrawingMode: true,
	}))

	fabric.Object.prototype.transparentCorners = false

	var drawingModeEl = $("drawing-mode"),
		drawingOptionsEl = $("drawing-mode-options"),
		drawingColorEl = $("drawing-color"),
		drawingShadowColorEl = $("drawing-shadow-color"),
		drawingLineWidthEl = $("drawing-line-width"),
		drawingShadowWidth = $("drawing-shadow-width"),
		drawingShadowOffset = $("drawing-shadow-offset"),
		clearEl = $("clear-canvas")

	clearEl.onclick = function () {
		canvas.current.clear()
	}

	drawingModeEl.onclick = function () {
		canvas.current.isDrawingMode = !canvas.current.isDrawingMode
		if (canvas.current.isDrawingMode) {
			drawingModeEl.innerHTML = "Cancel drawing mode"
			drawingOptionsEl.style.display = ""
		} else {
			drawingModeEl.innerHTML = "Enter drawing mode"
			drawingOptionsEl.style.display = "none"
		}
	}

	if (fabric.PatternBrush) {
		var vLinePatternBrush = new fabric.PatternBrush(canvas)
		vLinePatternBrush.getPatternSrc = function () {
			var patternCanvas = fabric.document.createElement("canvas")
			patternCanvas.current.width = patternCanvas.current.height = 10
			var ctx = patternCanvas.current.getContext("2d")

			ctx.strokeStyle = this.color
			ctx.lineWidth = 5
			ctx.beginPath()
			ctx.moveTo(0, 5)
			ctx.lineTo(10, 5)
			ctx.closePath()
			ctx.stroke()

			return patternCanvas
		}

		var hLinePatternBrush = new fabric.PatternBrush(canvas)
		hLinePatternBrush.getPatternSrc = function () {
			var patternCanvas = fabric.document.createElement("canvas")
			patternCanvas.current.width = patternCanvas.current.height = 10
			var ctx = patternCanvas.current.getContext("2d")

			ctx.strokeStyle = this.color
			ctx.lineWidth = 5
			ctx.beginPath()
			ctx.moveTo(5, 0)
			ctx.lineTo(5, 10)
			ctx.closePath()
			ctx.stroke()

			return patternCanvas
		}

		var squarePatternBrush = new fabric.PatternBrush(canvas)
		squarePatternBrush.getPatternSrc = function () {
			var squareWidth = 10,
				squareDistance = 2

			var patternCanvas = fabric.document.createElement("canvas")
			patternCanvas.current.width = patternCanvas.current.height = squareWidth + squareDistance
			var ctx = patternCanvas.current.getContext("2d")

			ctx.fillStyle = this.color
			ctx.fillRect(0, 0, squareWidth, squareWidth)

			return patternCanvas
		}

		var diamondPatternBrush = new fabric.PatternBrush(canvas)
		diamondPatternBrush.getPatternSrc = function () {
			var squareWidth = 10,
				squareDistance = 5
			var patternCanvas = fabric.document.createElement("canvas")
			var rect = new fabric.Rect({
				width: squareWidth,
				height: squareWidth,
				angle: 45,
				fill: this.color,
			})

			var canvasWidth = rect.getBoundingRect().width

			patternCanvas.current.width = patternCanvas.current.height = canvasWidth + squareDistance
			rect.set({ left: canvasWidth / 2, top: canvasWidth / 2 })

			var ctx = patternCanvas.current.getContext("2d")
			rect.render(ctx)

			return patternCanvas
		}

		var img = new Image()
		img.src = "../assets/honey_im_subtle.png"

		var texturePatternBrush = new fabric.PatternBrush(canvas)
		texturePatternBrush.source = img
	}

	$("drawing-mode-selector").onchange = function () {
		if (this.value === "hline") {
			canvas.current.freeDrawingBrush = vLinePatternBrush
		} else if (this.value === "vline") {
			canvas.current.freeDrawingBrush = hLinePatternBrush
		} else if (this.value === "square") {
			canvas.current.freeDrawingBrush = squarePatternBrush
		} else if (this.value === "diamond") {
			canvas.current.freeDrawingBrush = diamondPatternBrush
		} else if (this.value === "texture") {
			canvas.current.freeDrawingBrush = texturePatternBrush
		} else {
			canvas.current.freeDrawingBrush = new fabric[this.value + "Brush"](canvas)
		}

		if (canvas.current.freeDrawingBrush) {
			var brush = canvas.current.freeDrawingBrush
			brush.color = drawingColorEl.value
			if (brush.getPatternSrc) {
				brush.source = brush.getPatternSrc.call(brush)
			}
			brush.width = parseInt(drawingLineWidthEl.value, 10) || 1
			brush.shadow = new fabric.Shadow({
				blur: parseInt(drawingShadowWidth.value, 10) || 0,
				offsetX: 0,
				offsetY: 0,
				affectStroke: true,
				color: drawingShadowColorEl.value,
			})
		}
	}

	drawingColorEl.onchange = function () {
		var brush = canvas.current.freeDrawingBrush
		brush.color = this.value
		if (brush.getPatternSrc) {
			brush.source = brush.getPatternSrc.call(brush)
		}
	}
	drawingShadowColorEl.onchange = function () {
		canvas.current.freeDrawingBrush.shadow.color = this.value
	}
	drawingLineWidthEl.onchange = function () {
		canvas.current.freeDrawingBrush.width = parseInt(this.value, 10) || 1
		this.previousSibling.innerHTML = this.value
	}
	drawingShadowWidth.onchange = function () {
		canvas.current.freeDrawingBrush.shadow.blur = parseInt(this.value, 10) || 0
		this.previousSibling.innerHTML = this.value
	}
	drawingShadowOffset.onchange = function () {
		canvas.current.freeDrawingBrush.shadow.offsetX = parseInt(this.value, 10) || 0
		canvas.current.freeDrawingBrush.shadow.offsetY = parseInt(this.value, 10) || 0
		this.previousSibling.innerHTML = this.value
	}

	if (canvas.current.freeDrawingBrush) {
		canvas.current.freeDrawingBrush.color = drawingColorEl.value
		canvas.current.freeDrawingBrush.source =
			canvas.current.freeDrawingBrush.getPatternSrc.call(this)
		canvas.current.freeDrawingBrush.width = parseInt(drawingLineWidthEl.value, 10) || 1
		canvas.current.freeDrawingBrush.shadow = new fabric.Shadow({
			blur: parseInt(drawingShadowWidth.value, 10) || 0,
			offsetX: 0,
			offsetY: 0,
			affectStroke: true,
			color: drawingShadowColorEl.value,
		})
	}
}

export default DrawerDrawing
