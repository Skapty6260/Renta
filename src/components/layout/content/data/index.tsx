'use client'
import { Loader } from '@/components/shared/loader'
import { Card_Product } from '@/components/ui/card/product'
import { useEffect, useState } from 'react'

export const ContentData: React.FC<{}> = () => {
	const [content, setContent] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	const fetchData = async () => {
		const data = await fetch('/api/products').then(res => res.json())

		if (data) setContent(data)

		setIsLoading(false)
	}

	useEffect(() => {
		fetchData()
	}, [])

	if (isLoading) return <Loader />
	return (
		<ul className='overflow-y-auto my-[20px] grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-2 w-[80%]'>
			{content &&
				content.length !== 0 &&
				content.map((item: any, index: number) => (
					<Card_Product item={item} index={index} />
				))}
		</ul>
	)
}
