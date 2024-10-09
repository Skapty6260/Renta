interface IProps {
	styles: any
	location: string[]
}

export const ContentHeader: React.FC<IProps> = ({ styles, location }) => {
	return (
		<header>
			{/* Location */}
			{location[0].toLowerCase() !== 'главная' && (
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
			)}
		</header>
	)
}
