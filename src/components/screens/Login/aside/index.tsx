import Image from 'next/image'
import Link from 'next/link'
import image from '@/assets/images/skyscraper.svg'

interface IProps {
	heading: string
	subheading: string
	link: 'sign-up' | 'sign-in'
	color: {
		bg: string
		hover: string
	}
}

export const LoginAside: React.FC<IProps> = ({
	heading,
	subheading,
	link,
	color,
}) => {
	return (
		<aside
			className={`hidden lg:flex flex-1 ${color.bg} rounded-l-[100%] h-[200vh] -top-1/2 items-center justify-center flex-col`}
		>
			<Image
				src={image}
				alt='login_aside_image'
				className=''
				draggable={false}
				width={300}
				height={300}
			/>

			<div className='mt-[20px] text-white text-center'>
				<h2 className='text-3xl font-bold'>{heading}</h2>
				<p>{subheading}</p>
			</div>

			<Link
				className={`mt-[20px] text-black font-semibold bg-white rounded-full py-[6px] px-[30px] ${color.hover} border-2 hover:text-white border-white hover:rounded-lg transition-all duration-200 ease-in-out`}
				href={`/${link}`}
			>
				{link}
			</Link>
		</aside>
	)
}
