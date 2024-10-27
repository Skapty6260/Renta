'use client'
import { SearchBar_Input } from '@/components/ui/search_input'
import { ContentHeader_Filter } from './filter'
import { useUiStore } from '@/store'

interface IProps {
	styles: any
	location: string[]
}

export const ContentHeader: React.FC<IProps> = ({ styles, location }) => {
	const { navbar_variant } = useUiStore()

	return (
		<header
			className={`${
				navbar_variant == 'horizontal' ? 'pt-[200px]' : ''
			} px-[0px]`}
		>
			{/* Location */}
			{location[0].toLowerCase() !== 'главная' ? (
				<>
					<ul className={styles.location}>
						<li>Главная</li>
						{location.map((item, index) => {
							return (
								<li key={index}>
									{index == location.length - 1 ? '• ' + item : item}
								</li>
							)
						})}
					</ul>
					<h1>{location[location.length - 1]}</h1>
				</>
			) : (
				<h1 className='font-bold text-3xl flex flex-col md:flex-row'>
					Вся недвижимость{' '}
					<span className='text-blue-500'>в Санкт-Петербурге</span>
					{/* Create component to choose location */}
				</h1>
			)}

			{location[0].toLowerCase() == 'главная' ? (
				<div className='flex flex-col mt-3'>
					<SearchBar_Input />
				</div>
			) : (
				<ContentHeader_Filter />
			)}
		</header>
	)
}
