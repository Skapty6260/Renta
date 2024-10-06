import Image from 'next/image'
import header from '@/assets/images/header01.jpeg'
import { NavbarLayout } from '@/components/layout/navbar/navbar'

export const HomeHeader = () => {
	return (
		<header className='relative h-[35vh]'>
			<NavbarLayout />
			<Image
				src={header}
				alt={'header'}
				className='object-cover object-top z-0'
				fill
				draggable={false}
			/>
		</header>
	)
}
