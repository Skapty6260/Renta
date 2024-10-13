import { ContentHeader_Filter } from './filter'

interface IProps {
	styles: any
	location: string[]
}

export const ContentHeader: React.FC<IProps> = ({ styles, location }) => {
	return (
		<header>
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
				<h1 className='font-bold text-3xl'>
					Вся недвижимость{' '}
					<span className='text-blue-500'>в Санкт-Петербурге</span>
					{/* Create component to choose location */}
				</h1>
			)}

			<ContentHeader_Filter />
		</header>
	)
}
