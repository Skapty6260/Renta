import Image from 'next/image'
import header from '@/assets/images/header01.jpeg'
import { NavbarLayout } from '@/components/layout/navbar/navbar'

export const HomeHeader = () => {
	return (
		<header className='relative h-[35vh] shadow-md shadow-[#000000be]'>
			<NavbarLayout variant='extended' />
			<Image
				src={header}
				alt={'header'}
				style={{
					filter: 'brightness(50%)',
				}}
				className='object-cover object-bottom z-0 border-none'
				fill
				draggable={false}
			/>

			<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-white font-bold text-3xl'>
				<h1>Appartments.Loans.Homes</h1>
				<p></p>
			</div>
		</header>
	)
}
