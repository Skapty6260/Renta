import Image, { StaticImageData } from 'next/image'

interface IProps {
	image: string | StaticImageData
	variant: 'primary' | 'secondary' | 'tertiary'
	text: {
		title: string
		subtitle: string
	}
}

export const HomeInfoBlock: React.FC<IProps> = ({ image, variant, text }) => {
	const sizes = {
		width: {
			primary: 500,
			secondary: 245,
			tertiary: 200,
		},
		height: {
			primary: 200,
			secondary: 245,
			tertiary: 200,
		},
	}

	const textSize = {
		title: {
			primary: 'text-3xl',
			secondary: 'text-xl',
			tertiary: 'text-xl',
		},
		subtitle: {
			primary: 'text-xl',
			secondary: 'text-lg',
			tertiary: 'text-lg',
		},
	}

	return (
		<div className='relative flex flex-col'>
			<Image
				src={image}
				alt={`homeInfoBlock_${text.title}`}
				width={sizes.width[variant]}
				height={sizes.height[variant]}
				className={`rounded-3xl object-cover w-[${sizes.width[variant]}px] h-[200px]`}
				style={{
					filter: 'brightness(50%)',
				}}
			/>

			<div
				className={`absolute top-[15px] left-[25px] -space-y-2 text-white flex flex-col`}
			>
				<span className={`${textSize.title[variant]} font-bold`}>
					{text.title}
				</span>
				<span className={textSize.subtitle[variant]}>{text.subtitle}</span>
			</div>
		</div>
	)
}
