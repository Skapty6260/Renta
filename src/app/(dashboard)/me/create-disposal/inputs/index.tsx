'use client'
import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/modal'
import React, { useState } from 'react'

interface IProps {
	label: string
	inputs: string[]
	cancel?: () => void
	confirm?: (value: string) => void
}

export const CreateDisposalInput: React.FC<IProps> = ({
	label,
	inputs,
	cancel = () => {},
	confirm = (value: string) => {},
}) => {
	const [value, setValue] = useState('')

	return (
		<Modal
			children={
				<div className='flex w-full h-full justify-center items-center flex-col'>
					<span className='text-2xl font-extrabold text-white w-[300px] rounded-xl text-center mb-[15px]'>
						{label}
					</span>

					<ul className='flex w-[400px] space-y-3 rounded-xl px-[30px] py-[20px] flex-col backdrop:blur-[10px] text-black'>
						{inputs.map((item, index) => {
							return (
								<li key={index}>
									<input
										type='text'
										onChange={e => setValue(e.target.value)}
										placeholder={item}
										className='w-full h-full py-[8px] px-[20px] text-black bg-white rounded-full'
									/>
								</li>
							)
						})}
					</ul>

					<nav className='flex flex-col w-[300px] px-[5px] mt-[5px] space-y-2'>
						<Button
							color='red'
							label='Отмена'
							customStyle='w-full'
							onClick={cancel}
						/>
						<Button
							label='Сохранить'
							color='green'
							customStyle='w-full'
							onClick={() => confirm(value)}
						/>
					</nav>
				</div>
			}
		/>
	)
}
