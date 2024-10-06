import { INavbarPartItem, NavbarPart } from './list'
import styles from './navbar.module.scss'

export const NavbarLayout = () => {
	const firstList: INavbarPartItem[] = [
		{ label: 'Недвижимость', variant: 'main' },
		{ label: 'Покупка' },
		{ label: 'Аренда' },
		{ label: 'Продажа' },
	]

	const lastList: INavbarPartItem[] = [
		{ label: 'Спонсорам' },
		{ label: 'Контакты' },
		{ label: 'Личный кабинет' },
	]

	return (
		<nav className={styles.navbar}>
			<NavbarPart listClassName={styles.firstList} data={firstList} />

			<div className={styles.logo}>RENTA</div>

			<NavbarPart listClassName={styles.lastList} data={lastList} />
		</nav>
	)
}
