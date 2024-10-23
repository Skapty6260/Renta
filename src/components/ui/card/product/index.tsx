import { IProduct } from '@/interfaces/product.interface'
import Link from 'next/link'

interface IProps {
	item: IProduct
	index: number
}

export const Card_Product: React.FC<IProps> = ({ item, index }) => {
	return (
		<li
			key={index}
			className='w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'
		>
			<Link href='/'>
				<img className='rounded-t-lg' src={item.images[0]} alt='' />
			</Link>
			<div className='p-5'>
				<Link href='/'>
					<h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
						{`${item.type} ${item.description && `-${item.description}`}`}
					</h5>
				</Link>
				<p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
					{item.offer}
				</p>
				<Link href='/' />

				<p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
					$ 49.99
				</p>
			</div>
		</li>
	)
}
