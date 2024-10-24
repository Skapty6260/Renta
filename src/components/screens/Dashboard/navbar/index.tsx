import { FaUserCircle, FaHamburger } from 'react-icons/fa'
import { MdOutlineKeyboardBackspace } from 'react-icons/md'
import Link from 'next/link'
import { Dispatch, SetStateAction, useState } from 'react'
import { TDashboardTab } from '@/app/(dashboard)/me/page'
import { Dropdown_Extended } from '@/components/ui/dropdown/extended'
import { Modal } from '@/components/ui/modal'

export const Dashboard_Header: React.FC<{
	name: string
	setAuthStatus: (status: boolean) => void
	setTab: Dispatch<SetStateAction<TDashboardTab>>
	activeTab: TDashboardTab
}> = ({ name, setAuthStatus, setTab, activeTab }) => {
	const data = ['Мои объявления', 'Приобретенные', 'Избранное', 'Выйти']
	const [modal, showModal] = useState(false)

	const handleClick = async (item: TDashboardTab | 'Выйти') => {
		if (item == 'Выйти') {
			return setAuthStatus(false)
		} else setTab(item)
	}

	return (
		<>
			<header className='w-full flex items-center pl-[20%] pr-[25px] lg:px-[10%] h-[100px] bg-white relative justify-between'>
				<Link
					href='/'
					className='absolute left-0 px-[30px] cursor-pointer text-3xl hover:bg-gray-300 h-full flex items-center'
				>
					<MdOutlineKeyboardBackspace />
				</Link>

				<div className='flex items-center space-x-2 text-3xl'>
					<FaUserCircle />
					<span className='font-bold'>{name}</span>
				</div>

				<ul className='hidden lg:flex items-center space-x-3'>
					{data.map((item, index: number) => (
						<li key={index}>
							<button
								onClick={() => handleClick(item as TDashboardTab)}
								className={`cursor-pointer relative ${
									item == 'Выйти'
										? 'text-red-700 font-bold hover:text-red-600'
										: `font-semibold ${
												item !== activeTab &&
												'hover:text-blue-600 transition-all duration-300 ease-in-out'
										  }`
								}
							${
								item == activeTab &&
								'before:absolute before:bottom-0 rounded-full before:w-[70%] before:left-[50%] before:-translate-x-[50%] before:h-[2px] before:bg-indigo-600 before:mt-[1px]'
							}
							`}
							>
								{item}
							</button>
						</li>
					))}
				</ul>

				<nav>
					<button
						onClick={() => showModal(!modal)}
						className={`flex lg:hidden text-3xl ${
							modal && 'text-white z-[101]'
						} items-center`}
					>
						{modal && <span className='mr-[5px]'>Close</span>}
						<FaHamburger />
					</button>
				</nav>
			</header>

			{modal && (
				<Modal
					setActive={showModal}
					children={
						<nav className='w-full h-full flex items-center justify-center'>
							<ul className='flex flex-col space-y-8'>
								{data.map((item, index: number) => (
									<li key={index}>
										<button
											onClick={() => handleClick(item as TDashboardTab)}
											className={`cursor-pointer relative text-3xl font-extrabold text-white ${
												item == 'Выйти' && 'text-red-500'
											}`}
										>
											{item}
										</button>
									</li>
								))}
							</ul>
						</nav>
					}
				/>
			)}
		</>
	)
}
