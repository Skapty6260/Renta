'use client'
import { Loader } from '@/components/shared/loader'
import { Card_Product } from '@/components/ui/card/product'
import { Suspense, useEffect, useState } from 'react'

export const ContentData: React.FC<{}> = () => {
	const [content, setContent] = useState([])

	useEffect(() => {
		const data = fetch('/api/products').then(res => res.json())

		data.then((res: any) => setContent(res.products))
	}, [])

	return (
		<Suspense fallback={<Loader />}>
			<ul className='overflow-y-auto my-[20px] grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-2 w-[80%]'>
				{content.length !== 0 &&
					content.map((item: any, index: number) => (
						<Card_Product item={item} index={index} />
					))}
			</ul>
		</Suspense>
	)
}
