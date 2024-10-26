// 'use client'
import { CurveSplitter_Opacity } from '@/components/ui/curves/opacityCurve'
import styles from './content.module.scss'
import { ContentHeader } from './header/contentHeader'
import { ContentData } from './data'
import { NavbarLayout } from '../navbar/navbar'
import { useState } from 'react'

interface IProps {
	location: string[]
	Filters: React.ReactNode
}

const ContentSection: React.FC<IProps> = ({ location, Filters }) => {
	const isHome = location[0].toLowerCase() == 'главная'
	const data = new Promise((resolve, reject) => {
		setTimeout(() => {
			try {
				fetch('/api/products').then(res => resolve(res.json()))
			} catch (error) {
				reject(error)
			}
		}, 5000)
	})

	console.log(data.then((res: any) => console.log(res)))

	return (
		<main className='flex flex-col w-full pt-[100px]'>
			<NavbarLayout variant='horizontal' />

			<section
				className={`h-[100vh] z-[0] relative w-[100%] flex flex-col items-center py-[
					'80px'] bg-white lg:items-stretch lg:px-[20%]`}
			>
				{isHome && <CurveSplitter_Opacity />}
				<ContentHeader styles={styles} location={location} />
				{Filters}
				<ContentData data={data} />
			</section>
		</main>
	)
}

export default ContentSection
