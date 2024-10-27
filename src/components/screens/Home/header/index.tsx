'use client'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import header from '@/assets/images/header01.jpeg'
import { CurveSplitter_Opacity } from '@/components/ui/curves/opacityCurve'
import { useUiStore } from '@/store'
import { NavbarLayout } from '@/components/layout/navbar/navbar'

export const HomeHeader = () => {
	const { navbar_variant, setNavbarVariant } = useUiStore()

	const animationDuration = 0.15
	const { scrollY } = useScroll()

	const [hidden, setHidden] = useState<boolean>(false)
	const [bp, setBp] = useState<boolean>(false)

	useMotionValueEvent(scrollY, 'change', latest => {
		const previous = scrollY.getPrevious()

		if (previous)
			if (latest > previous) {
				setTimeout(() => {
					setBp(true)
					setNavbarVariant('horizontal')
				}, animationDuration * 1000)
				setHidden(true)
			} else {
				if (latest < 1) setNavbarVariant('extended')
				setBp(false)
				setHidden(false)
			}
	})

	return (
		<>
			{!bp && <NavbarLayout variant={navbar_variant} />}

			<motion.header
				variants={{
					hidden: {
						y: '-100%',
					},
					visible: {
						y: 0,
					},
				}}
				// transition={{ duration: 0.3, ease: 'easeInOut' }}
				animate={hidden ? 'hidden' : 'visible'}
				className={`relative h-[${bp == true ? 0 : '40vh'}] ${
					navbar_variant == 'horizontal' ? '' : 'pb-[25vh] md:pb-[35vh]'
				} z-[1]`}
			>
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

				{navbar_variant == 'extended' && (
					<motion.div className='hidden absolute top-2/3 lg:top-[70%] z-[0] -translate-y-2/3 left-1/2 -translate-x-1/2 md:flex flex-col items-center text-white font-extrabold text-2xl lg:text-5xl'>
						<motion.h1
							animate={{ y: 0, opacity: '100%' }}
							initial={{
								y: '300%',
								opacity: 0,
							}}
							transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.1 }}
						>
							<b className='text-blue-300 lg:text-blue-300'>Appartments</b>
							.Loans.Homes
						</motion.h1>
					</motion.div>
				)}

				<CurveSplitter_Opacity />
			</motion.header>
		</>
	)
}
