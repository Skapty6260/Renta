import { Modal } from '@/components/ui/modal'
import React from 'react'

interface IProps {
	modal: {
		modal: React.ReactNode
		status: boolean
	}
	setModal: React.Dispatch<
		React.SetStateAction<{
			modal: React.ReactNode
			status: boolean
		}>
	>
	inputs: string[]
}

export const CreateDisposalInput: React.FC<IProps> = ({
	setModal,
	modal,
	inputs,
}) => {
	const toggleModal = (status: boolean) => {
		setModal({
			modal: modal.modal,
			status: status,
		})
	}

	return (
		<Modal
			children={
				<ul className='flex w-full h-full justify-center items-center'>
					{inputs.map((item, index) => {
						return (
							<li key={index}>
								<input
									type='text'
									className='w-full h-full bg-white rounded-full'
								/>
							</li>
						)
					})}
				</ul>
			}
			disableOnClick={true}
			setActive={(status: boolean) => toggleModal(status)}
		/>
	)
}
