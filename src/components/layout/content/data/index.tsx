'use client'
import { Loader } from '@/components/shared/loader'
import { Suspense, useEffect, useState } from 'react'

export const ContentData: React.FC<{ data: Promise<any> }> = ({ data }) => {
	const [content, setContent] = useState([])

	useEffect(() => {
		data.then(con => setContent(con))
	}, [])

	return (
		<Suspense fallback={<Loader />}>
			<ul>
				{content.map((item: any, index: number) => (
					<li key={index}>item</li>
				))}
			</ul>
		</Suspense>
	)
}
