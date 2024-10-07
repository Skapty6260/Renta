import { INavbarPartItem, NavbarPart } from './list'
import styles from './navbar.module.scss'

import {
	FaBuilding,
	FaBasketShopping,
	FaBusinessTime,
	FaMoneyBillWave,
} from 'react-icons/fa6'

export const NavbarLayout: React.FC<{
	variant?: 'horizontal' | 'extended'
}> = ({ variant = 'horizontal' }) => {
	const firstList: INavbarPartItem[] = [
		{
			label: 'Недвижимость',
			variant: 'main',
			customStyles: 'bg-blue-600',
			icon: <FaBuilding />,
			type: 'dropdown',
		},
		{
			label: 'Покупка',
			type: 'dropdown',
			// customStyles: 'bg-[#eb89ff5a]',
			icon: <FaBasketShopping />,
			variant: variant == 'extended' ? 'main' : 'default',
		},
		{
			label: 'Аренда',
			type: 'dropdown',
			// customStyles: 'bg-[#8bff895a]',
			icon: <FaBusinessTime />,
			variant: variant == 'extended' ? 'main' : 'default',
		},
		{
			label: 'Продажа',
			type: 'dropdown',
			// customStyles: 'bg-[#ff9a895a]',
			icon: <FaMoneyBillWave />,
			variant: variant == 'extended' ? 'main' : 'default',
		},
	]

	const lastList: INavbarPartItem[] = [
		{ label: 'Спонсорам', type: 'link', url: '/sponsors' },
		{ label: 'Контакты', type: 'link', url: '/contacts' },
		{ label: 'Личный кабинет', type: 'link', url: '/me' },
	]

	return (
		<nav
			className={variant == 'extended' ? styles.navbarExtended : styles.navbar}
		>
			<NavbarPart
				listClassName={
					variant == 'extended' ? styles.firstListExtended : styles.firstList
				}
				data={firstList}
			/>

			<div
				className={variant == 'extended' ? styles.logoExtended : styles.logo}
			>
				RENTA
			</div>

			<NavbarPart
				listClassName={
					variant == 'extended' ? styles.lastListExtended : styles.lastList
				}
				data={lastList}
			/>
		</nav>
	)
}
