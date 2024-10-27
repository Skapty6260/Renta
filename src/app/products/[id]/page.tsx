'use client'
import { IProduct } from '@/interfaces/product.interface'
import { useParams } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'

export default function Product() {
	const { id } = useParams()
	const [product, setProduct] = useState<IProduct>()

	const getProduct = async (id: string) => {
		const search = new URLSearchParams({
			id: id,
		})
		const res = await fetch(`/api/products?${search}`)

		if (res.status !== 200) return null

		const data = await res.json()
		setProduct(data.product)
	}

	useEffect(() => {
		getProduct(id as string)
	}, [id])

	useMemo(() => {
		console.log(product)
	}, [product])

	return <div>Product</div>
}
