import styles from '../content.module.scss'

export const ContentHeader_Filter = () => {
	return (
		<>
			<div className={styles.filterHeading}>
				<span>Выберите тип жилья</span>
				<button>Аренда</button>
			</div>

			<ul className={styles.filter}>
				<li>
					<span>Выберите локацию</span>
				</li>

				<li>
					<span>Задайте стоимость, млн ₽/тыч ₽</span>
					{/* (сделать выбор аренда/покупка) */}
				</li>

				<li>
					<span>Отделка</span>
				</li>
			</ul>
		</>
	)
}
