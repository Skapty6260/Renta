'use client'
import { motion } from 'framer-motion'
import { IProduct } from '@/interfaces/product.interface'
import Link from 'next/link'
import { LinkButton } from '../../button'
import { useState } from 'react'

interface IProps {
	item: IProduct
	index: number
}

export const Card_Product: React.FC<IProps> = ({ item, index }) => {
	const [hovered, setHovered] = useState(false)

	const regex: { [key: string]: string } = {
		apartment: 'Квартира',
		house: 'Дом',
		room: 'Комната',
	}

	return (
		<li
			onMouseLeave={() => setHovered(false)}
			key={index}
			className='w-full cursor-pointer border overflow-hidden border-gray-200 rounded-xl relative h-[400px]'
		>
			<Link onMouseOver={() => setHovered(true)} href={`/products/${item._id}`}>
				{item.image && (
					<img
						className='object-cover object-center w-full h-full rounded-xl'
						src={item.image[0]}
						draggable={false}
						alt={`img_${item.type}-${item.rooms}-${item.price}_${index}`}
					/>
				)}
			</Link>

			<div
				className={`absolute ${
					!hovered && 'curveTriangular -bottom-[6%]'
				} bottom-0 w-[380%] h-[110%] bg-[#00000095] backdrop-blur-lg`}
			/>

			{hovered ? (
				<motion.div
					initial={{ y: '-100%' }}
					animate={{ y: '0%' }}
					transition={{ duration: 0.2, ease: 'easeInOut' }}
					className='absolute text-lg font-bold flex px-[30px] py-[20px] text-white w-full h-full top-0 cursor-pointer'
				>
					<span>{item.description || 'Без описания.'}</span>
				</motion.div>
			) : (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.4, ease: 'easeInOut' }}
					className='absolute right-10 bottom-5 flex flex-col'
				>
					<Link href={`/products/${item._id}`}>
						<h5 className='mb-2 text-2xl text-white font-bold tracking-tight'>
							{`${regex[item.type]} ${
								item.type !== 'Room' && item.rooms + ' комн.'
							}`}
						</h5>
					</Link>
					<p className='mb-3 font-normal text-gray-200 opacity-70'>
						Тип сделки: {item.offer == 'rent' ? 'Аренда' : 'Продажа'}
					</p>

					<p className='mb-3 font-normal text-gray-200 opacity-70'>
						₽ {item.price}
						{item.offer == 'rent' && ` / месяц`}
					</p>

					<LinkButton
						customStyles='self-start w-[80%]'
						label='Подробнее'
						href={`/products/${item._id}`}
					/>
				</motion.div>

				// Location with location icon extra sm font
			)}
		</li>
	)
}
