'use client'
import Link from 'next/link'
import { Card_Product } from '@/components/ui/card/product'
import { IProduct } from '@/interfaces/product.interface'
import { useAuthStore } from '@/store'
import { useEffect, useState } from 'react'

export const Dashboard_MyOffers = () => {
	const { user_id } = useAuthStore()
	const [disposals, setDisposals] = useState<IProduct[]>([])

	const fetchUserDisposals = async () => {
		const params = await new URLSearchParams({
			_id: user_id,
		})

		const res = await fetch(`/api/users?${params}`)
		const user = await res.json()

		setDisposals(user?.disposals || [])
	}

	useEffect(() => {
		fetchUserDisposals()
	}, [])

	return (
		<div>
			<header className='flex items-center justify-between'>
				<div className='flex flex-col'>
					<h1 className='text-xl font-bold'>Мои объявления</h1>

					<span className='text-gray-600 opacity-70'>
						Всего: {disposals.length}
					</span>
				</div>

				<Link
					href='/me/create-disposal'
					className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded hover:rounded-xl transition-all duration-200 ease-in-out'
				>
					Разместить
				</Link>
			</header>

			<ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-[20px]'>
				{disposals.map((item, index) => (
					<Card_Product item={item} index={index} />
				))}
			</ul>
		</div>
	)
}
