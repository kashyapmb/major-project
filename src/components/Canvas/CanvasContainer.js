import React, { useRef, useEffect } from "react"
import { fabric } from "fabric"
import "fabric-history"

const CanvasContainer = () => {
	const canvasRef = useRef(null)

	useEffect(() => {
		const canvas = new fabric.Canvas(canvasRef.current, {
			height: 450,
			width: 800,
			backgroundColor: "#f0f0f0",
		})

		// Enable history management for undo/redo
		canvas.uniScaleTransform = true
		canvas.uniScaleKey = "shiftKey"
		canvas.uniScaleTransform = true

		// Add event listeners for text, elements, and images

		return () => {
			// Cleanup if necessary
			canvas.dispose()
		}
	}, [])

	return <canvas ref={canvasRef} />
}

export default CanvasContainer
