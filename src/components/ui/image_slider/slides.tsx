interface IProps {
	images: string[]
	autoPlay: boolean
	currentImage: number
}

export const ImageSlider_Slides: React.FC<IProps> = ({
	images,
	autoPlay,
	currentImage,
}) => {
	return (
		<ul className='absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-1'>
			{images.map((_, index) => {
				return (
					<li
						key={index}
						className={`w-[30px] h-[3px] rounded-full bg-[${
							autoPlay
								? currentImage >= index
									? '#fff'
									: '#dadadaae'
								: currentImage === index
								? '#fff'
								: '#dadadaae'
						}]`}
					/>
				)
			})}
		</ul>
	)
}
