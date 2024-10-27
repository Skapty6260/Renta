'use client'
import { useUiStore } from '@/store'
import { NavbarPart } from './list'
import { motion } from 'framer-motion'
import styles from './navbar.module.scss'
import { FaHamburger } from 'react-icons/fa'

import navbarConfig from '@/config/navbar'
import { useState } from 'react'
import { Modal } from '@/components/ui/modal'

export const NavbarLayout: React.FC<{
	variant?: 'horizontal' | 'extended'
}> = ({ variant = 'horizontal' }) => {
	const { navbar_variant } = useUiStore()
	const [modal, showModal] = useState(false)

	const { firstList, lastList } = navbarConfig
	navbarConfig.firstList[0].customStyles = {
		default: `bg-blue-600 ${navbar_variant == 'horizontal' && 'text-white'}`,
		active: 'bg-[#fff] text-blue-600',
	}

	if (navbar_variant == 'extended' && variant == 'horizontal') return null

	return (
		<>
			<motion.nav
				initial={{ y: '-100%' }}
				animate={{ y: 0 }}
				transition={{ duration: 0.3, ease: 'easeInOut' }}
				exit={{ y: '-100%' }}
				className={
					variant == 'extended' ? styles.navbarExtended : styles.navbar
				}
			>
				<NavbarPart
					listClassName={
						variant == 'extended' ? styles.firstListExtended : styles.firstList
					}
					isExtended={navbar_variant == 'extended'}
					data={firstList}
				/>

				<div
					className={variant == 'extended' ? styles.logoExtended : styles.logo}
				>
					RENTA
				</div>

				<NavbarPart
					listClassName={
						variant == 'extended' ? styles.lastListExtended : styles.lastList
					}
					isExtended={navbar_variant == 'extended'}
					data={lastList}
				/>

				{variant == 'horizontal' && (
					<button
						onClick={() => showModal(!modal)}
						className={`flex md:hidden text-3xl fixed right-2 top-5 ${
							modal && 'text-gray-400 z-[101]'
						} items-center`}
					>
						{modal && <span className='mr-[5px]'>Close</span>}
						<FaHamburger />
					</button>
				)}
			</motion.nav>
		</>
	)
}
