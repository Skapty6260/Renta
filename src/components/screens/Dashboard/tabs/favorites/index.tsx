import { Card_Product } from '@/components/ui/card/product'
import Link from 'next/link'

export const Dashboard_Favorites = () => {
	return (
		<div>
			<header className='flex items-center justify-between'>
				<div className='flex flex-col'>
					<h1 className='text-xl font-bold'>Избранное</h1>

					<span className='text-gray-600 opacity-70'>Всего: 0</span>
				</div>

				<Link
					href='/'
					className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded hover:rounded-xl transition-all duration-200 ease-in-out'
				>
					Обзор
				</Link>
			</header>

			<ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-[20px]'>
				{[].map((item, index) => (
					<Card_Product item={item} index={index} />
				))}
			</ul>
		</div>
	)
}
