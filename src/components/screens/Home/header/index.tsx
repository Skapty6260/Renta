'use client'
import {
	AnimatePresence,
	motion,
	useMotionValueEvent,
	useScroll,
} from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import header from '@/assets/images/header01.jpeg'
import { NavbarLayout } from '@/components/layout/navbar/navbar'
import { SearchBar_Compact } from '@/components/ui/searchbar'
import { CurveSplitter_Opacity } from '@/components/ui/curves/opacityCurve'

export const HomeHeader = () => {
	const animationDuration = 0.15
	const { scrollY } = useScroll()

	const [hidden, setHidden] = useState<boolean>(false)
	const [bp, setBp] = useState<boolean>(false)

	useMotionValueEvent(scrollY, 'change', latest => {
		const previous = scrollY.getPrevious()
		if (previous)
			if (latest > previous) {
				setTimeout(() => setBp(true), animationDuration * 1000)
				setHidden(true)
			} else {
				setBp(false)
				setHidden(false)
			}
	})

	return (
		<motion.header
			variants={{
				hidden: {
					y: '-100%',
				},
				visible: {
					y: 0,
				},
			}}
			animate={hidden ? 'hidden' : 'visible'}
			className={`relative h-[${bp == true ? 0 : '40vh'}] pb-[10vh]`}
		>
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

			<div className='absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-2/3 flex flex-col items-center text-white font-extrabold text-3xl'>
				<h1>Appartments.Loans.Homes</h1>
			</div>

			<SearchBar_Compact />
			<CurveSplitter_Opacity />
		</motion.header>
	)
}
