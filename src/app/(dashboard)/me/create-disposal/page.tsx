'use client'
import { MdOutlineKeyboardBackspace } from 'react-icons/md'
import Link from 'next/link'
import { useDropzone } from 'react-dropzone'
import { Dispatch, SetStateAction, useCallback, useState } from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { CreateDisposalInput } from './inputs'

const List: React.FC<{
	data: string[]
	liStyle: string
	toggleData: Dispatch<SetStateAction<any>>
	selected: any
}> = ({ data, liStyle, toggleData, selected }) => (
	<ul className='flex space-x-3 overflow-x-scroll'>
		{data.map((item, index) => {
			return (
				<li
					className={`cursor-pointer font-semibold ${liStyle} ${
						selected == item && 'bg-indigo-700 text-white'
					}`}
					key={index}
				>
					<button onClick={() => toggleData(item)} className='w-full h-full'>
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
	const [offer, setOffer] = useState<'sale' | 'rent'>('sale')
	const [type, setType] = useState<'appartment' | 'house' | 'room'>(
		'appartment'
	)
	const [rooms, setRooms] = useState<number>(1)
	const [area, setArea] = useState<string>('10+м2')
	const [location, setLocation] = useState<string>('Москва, Россия')
	const [price, setPrice] = useState<number>(1000)

	const confirmDisposal = async () => {}

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
							/>
						</div>

						<div className='flex space-x-3 items-center'>
							<List
								selected={area}
								toggleData={setArea}
								data={['10+м2', '20+м2', '30+м2', '40+м2', '...м2']}
								liStyle='text-md bg-indigo-200 px-[10px] py-[5px] rounded-md'
							/>
							<StyledSpan text='Площадь' />
						</div>
					</div>
				</header>

				<div className='flex mt-[30px] pt-[30px] flex-col bg-gray-100 rounded-3xl h-[600px] border-t-2 border-t-blue-300 px-[30px] relative'>
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
											modal={modal}
											setModal={setModal}
											inputs={['Ссылка на картинку']}
										/>
									),
									status: !modal.status,
								})
							}
						/>

						{images.length > 0 && <ul>123</ul>}
					</div>
					{/* Описание недвижимости */}
					{/* Выбрать локацию и отправить (локация через модалку) */}
					<div className='flex flex-col lg:flex-row lg:space-x-4 space-y-3 lg:space-y-0 justify-center items-center lg:justify-between absolute bottom-5'>
						<Button
							variant='rounded'
							label='Готово'
							onClick={confirmDisposal}
						/>
						<Button label='Выбор локации' onClick={() => {}} />
					</div>
				</div>
			</main>

			{modal.status && modal.modal}
		</>
	)
}
