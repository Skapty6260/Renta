'use client'
import Image, { StaticImageData } from 'next/image'
import { useEffect, useState } from 'react'
import { ImageSlider_Slides } from './slides'

interface IProps {
	images: string[]
	alt: string
	sizes: {
		width: number
		height: number
	}
	autoPlay?: {
		enabled: boolean
		interval: number
	}
	showSlides?: boolean
	showControls?: boolean
}

export const ImageSlider: React.FC<IProps> = ({
	images,
	alt,
	autoPlay,
	sizes,
	showSlides = true,
	showControls = false,
}) => {
	const [currentImage, setCurrentImage] = useState<number>(0)

	useEffect(() => {
		const timeout = setTimeout(() => {
			if (currentImage < images.length - 1) {
				setCurrentImage(currentImage + 1)
			} else setCurrentImage(0)
		}, autoPlay?.interval)

		return () => clearTimeout(timeout)
	}, [currentImage])

	return (
		<div
			className={
				'relative w-[' + sizes.width + 'px] h-[' + sizes.height + 'px]'
			}
		>
			<img
				src={images[currentImage]}
				alt={alt}
				draggable={false}
				className={
					'rounded-3xl w-[100%] h-[100%] cursor-pointer object-center object-cover'
				}
			/>

			{showSlides && (
				<ImageSlider_Slides
					images={images}
					autoPlay={!autoPlay ? false : true}
					currentImage={currentImage}
				/>
			)}
		</div>
	)
}
