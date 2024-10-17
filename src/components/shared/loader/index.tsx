'use client'
import Image from 'next/image'
import loaderSvg from '@/assets/images/skyscraper.svg'

export const Loader = () => (
	<div className='bg-transparent h-[100%] w-full flex flex-col justify-center content-center space-y-6 items-center'>
		<Image
			src={loaderSvg}
			alt='loaderSVG'
			width={100}
			height={100}
			className='w-[100px] h-[100px] animate-pulse'
		/>
		<div
			className={`text-2xl font-bold text-black animate-pulse tracking-[0.3em]`}
		>
			Content is loading...
		</div>
	</div>
)
