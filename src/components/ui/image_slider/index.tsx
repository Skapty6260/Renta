'use client'
import Image, { StaticImageData } from 'next/image'
import { useEffect, useState } from 'react'

interface IProps {
	images: string[] | StaticImageData[]
	alt: string
	sizes: {
		width: number
		height: number
	}
	autoPlay?: {
		enabled: boolean
		interval: number
	}
}

export const ImageSlider: React.FC<IProps> = ({
	images,
	alt,
	autoPlay,
	sizes,
}) => {
	const [currentImage, setCurrentImage] = useState<number>(0)

	useEffect(() => {
		if (!autoPlay) return null
		if (autoPlay?.enabled == false) return null

		const interval = setInterval(() => {
			if (currentImage < images.length - 1) {
				setCurrentImage(currentImage + 1)
			} else {
				setCurrentImage(0)
			}
		}, autoPlay?.interval)
	}, [])

	return (
		<div>
			<Image
				src={images[currentImage]}
				alt={alt}
				width={sizes.width}
				height={sizes.height}
				className='rounded-3xl'
			/>
		</div>
	)
}
