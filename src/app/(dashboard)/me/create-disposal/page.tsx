'use client'
import { MdOutlineKeyboardBackspace } from 'react-icons/md'
import Link from 'next/link'
import { useDropzone } from 'react-dropzone'
import { Dispatch, SetStateAction, useCallback, useState } from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { CreateDisposalInput } from './inputs'
import { it } from 'node:test'
import { redirect } from 'next/navigation'
import { useAuthStore } from '@/store'

const List: React.FC<{
	data: string[]
	liStyle: string
	toggleData: Dispatch<SetStateAction<any>>
	selected: any
	extend?: () => void
}> = ({ data, liStyle, toggleData, selected, extend }) => (
	<ul className='flex space-x-3 overflow-x-scroll'>
		{data.map((item, index) => {
			return (
				<li
					className={`cursor-pointer font-semibold ${liStyle} ${
						selected == item && 'bg-indigo-700 text-white'
					}`}
					key={index}
				>
					<button
						onClick={() =>
							index == data.length - 1 && extend ? extend : toggleData(item)
						}
						className='w-full h-full'
					>
						{item}
					</button>
				</li>
			)
		})}
	</ul>
)

const StyledSpan: React.FC<{ text: string }> = ({ text }) => (
	<span className='text-sm-text-gray-700 opacity-70'>{text}:</span>
)

export default function CreateDisposal() {
	const [modal, setModal] = useState<{
		modal: React.ReactNode
		status: boolean
	}>({
		modal: '',
		status: false,
	})

	const [images, setImages] = useState<string[]>([])
	const [offer, setOffer] = useState<'Продажа' | 'Аренда'>('Продажа')
	const [type, setType] = useState<'Квартира' | 'Дом' | 'Комната'>('Квартира')
	const [rooms, setRooms] = useState<number>(1)
	const [area, setArea] = useState<string>('10+м2')
	const [location, setLocation] = useState<string>('')
	const [price, setPrice] = useState<number>(0)
	const [description, setDescription] = useState('')

	const { user_id } = useAuthStore()

	const confirmDisposal = async () => {
		const options = {
			// Item, condition, alert message
			price: [price == 0, 'Укажите цену'],
			location: [location.length == 0, 'Укажите локацию здания'],
			images: [images.length == 0, 'Добавьте хотя бы одну фотографию'],
		}

		let validationCounter = 0

		Object.keys(options).forEach((key: any) => {
			// @ts-ignore
			if (options[key][0]) {
				// @ts-ignore
				return alert(options[key][1])
			} else validationCounter++
		})

		const areaAsNumber = area.split('+')[0]
		const offerAsType = offer === 'Продажа' ? 'sale' : 'rent'
		const typeAsType = {
			Квартира: 'apartment',
			Дом: 'house',
			Комната: 'room',
		}

		if (validationCounter == 0)
			return alert(
				`Убедитесь, что правильно введены все обязательные данные. ${validationCounter}`
			)
		const res = await fetch('/api/products', {
			method: 'POST',
			body: JSON.stringify({
				price: price,
				location: location,
				offer: offerAsType,
				type: typeAsType[type],
				rooms: rooms,
				area: areaAsNumber,
				description: description || '',
				images: images || '',
			}),
		})

		if (res.status == 200) {
			setPrice(0)
			setLocation('')
			setOffer('Продажа')
			setType('Квартира')
			setRooms(1)
			setArea('10+м2')
			setDescription('')
			setImages([])
		} else return alert('Что-то пошло не так, попробуйте еще раз.')

		const data = await res.json()

		console.log(data.product)

		if (data.error) return alert(data.error)
		else {
			// get user prev values
			const params = new URLSearchParams({
				_id: user_id,
			})

			const userRes = await fetch(`/api/users?${params}`)
			if (userRes.status !== 200)
				return alert('Что-то пошло не так, попробуйте еще раз.')

			const userData = await userRes.json()

			await fetch('/api/users', {
				method: 'PATCH',
				body: JSON.stringify({
					userId: user_id,
					newUser: {
						disposals: [data.product, ...userData.user.disposals],
					},
				}),
			})

			validationCounter = 0
			alert('Объявление размещено')
		}
	}

	return (
		<>
			<main className='flex flex-col w-full min-h-screen overflow-x-hidden px-[10%] py-[60px]'>
				<nav
					className={`flex absolute cursor-pointer -top-[30px] -left-[30px] p-[50px] rounded-full text-2xl text-white bg-purple-700`}
				>
					<Link href='/me' className='absolute w-full h-full mr-[5px]'>
						<MdOutlineKeyboardBackspace />
					</Link>
				</nav>

				<header className='px-[20px] py-[10px] rounded-xl'>
					<div className='flex flex-col lg:flex-row lg:space-x-[40px] space-y-3'>
						<div>
							<StyledSpan text='Тип объявления' />
							<List
								selected={offer}
								toggleData={setOffer}
								data={['Продажа', 'Аренда']}
								liStyle='text-2xl px-[20px] py-[10px] rounded-xl bg-gray-200'
							/>
						</div>

						<div>
							<List
								selected={type}
								toggleData={setType}
								data={['Квартира', 'Дом', 'Комната']}
								liStyle='text-2xl bg-gray-300 px-[20px] py-[10px] rounded-xl'
							/>
							<StyledSpan text='Тип недвижимости' />
						</div>
					</div>

					<div className='mt-[15px] flex flex-col lg:items-center lg:flex-row lg:space-x-[40px] space-y-3'>
						<div className='flex space-x-3 items-center'>
							<StyledSpan text='Кол-во комнат' />
							<List
								selected={rooms}
								toggleData={setRooms}
								data={['1', '2', '3', '...']}
								liStyle='text-md bg-blue-200 px-[10px] py-[5px] rounded-md'
								extend={() =>
									setModal({
										modal: (
											<CreateDisposalInput
												label='Введите количество комнат'
												inputs={['1']}
											/>
										),
										status: !modal.status,
									})
								}
							/>
						</div>

						<div className='flex space-x-3 items-center'>
							<List
								selected={area}
								toggleData={setArea}
								data={['10+м2', '20+м2', '30+м2', '40+м2', '...м2']}
								liStyle='text-md bg-indigo-200 px-[10px] py-[5px] rounded-md'
								extend={() =>
									setModal({
										modal: (
											<CreateDisposalInput
												label='Введите площадь (только число)'
												inputs={['68']}
											/>
										),
										status: true,
									})
								}
							/>
							<StyledSpan text='Площадь' />
						</div>
					</div>
				</header>

				<div className='flex mt-[30px] pt-[30px] flex-col bg-gray-100 rounded-3xl h-[700px] border-t-2 border-t-blue-300 px-[30px] relative'>
					{/* Загрузить картинку */}
					<div className='w-full'>
						<Button
							customStyle='w-[100%] text-xl'
							label='Загрузить фото'
							variant='rounded'
							onClick={() =>
								setModal({
									modal: (
										<CreateDisposalInput
											label='Введите ссылку на изображение'
											inputs={['Ссылка на картинку']}
											cancel={() =>
												setModal({ modal: modal.modal, status: false })
											}
											confirm={(value: string) => {
												setImages([...images, value])
												setModal({ modal: modal.modal, status: false })
											}}
										/>
									),
									status: true,
								})
							}
						/>

						{images.length > 0 && (
							<ul className='w-full flex overflow-scroll space-x-3 mt-[20px]'>
								{images.map((item, index) => {
									return (
										<li key={index} className='w-[200px] h-[200px] rounded-xl'>
											<img
												src={item}
												alt={`preview_disposal_${item}`}
												draggable={false}
												className='w-full h-full object-cover rounded-xl'
											/>
										</li>
									)
								})}
							</ul>
						)}
					</div>
					{/* Описание недвижимости */}
					<input
						type='text'
						placeholder='Введите описание недвижимости (не обязательно)'
						onChange={e => setDescription(e.target.value)}
						value={description}
						className='w-full min-h-[200px] text-wrap text-clip rounded-xl text-xl bg-white border-none px-[20px] py-[10px] text-black mt-[50px]'
					/>
					<input
						type='text'
						placeholder='Введите цену'
						className='w-[30%] mt-[10px] px-[20px] py-[10px] text-lg'
						onChange={e => setPrice(Number(e.target.value))}
						value={price > 0 ? price : ''}
					/>
					{/* Выбрать локацию и отправить (локация через модалку) */}
					<div className='flex w-full flex-col lg:flex-row lg:space-x-4 space-y-3 lg:space-y-0 justify-center items-center lg:justify-between absolute bottom-5 pr-[60px]'>
						<Button
							variant='rounded'
							label='Готово'
							customStyle='w-full lg:w-[200px]'
							onClick={confirmDisposal}
						/>
						<Button
							color='indigo'
							customStyle='w-full lg:w-[200px]'
							label={location.length !== 0 ? location : 'Выбрать локацию'}
							onClick={() =>
								setModal({
									modal: (
										<CreateDisposalInput
											label='Введите локацию недвижимости'
											inputs={['Страна, Город, Улица,Дом, Квартира']}
											cancel={() =>
												setModal({ modal: modal.modal, status: false })
											}
											confirm={(value: string) => {
												setLocation(value)
												setModal({ modal: modal.modal, status: false })
											}}
										/>
									),
									status: !modal.status,
								})
							}
						/>
					</div>
				</div>
			</main>

			{modal.status && modal.modal}
		</>
	)
}
