import { INavbarPartItem, NavbarPart } from './list'
import styles from './navbar.module.scss'

import {
	FaBuilding,
	FaBasketShopping,
	FaBusinessTime,
	FaMoneyBillWave,
} from 'react-icons/fa6'
import { MdClose } from 'react-icons/md'

export const NavbarLayout: React.FC<{
	variant?: 'horizontal' | 'extended'
}> = ({ variant = 'horizontal' }) => {
	const firstList: INavbarPartItem[] = [
		{
			label: 'Недвижимость',
			variant: 'main',
			customStyles: {
				default: 'bg-blue-600',
				active: 'bg-white text-blue-600',
			},
			icon: {
				default: <FaBuilding />,
				active: <MdClose />,
			},
			type: 'dropdown',
		},
		{
			label: 'Покупка',
			type: 'dropdown',
			icon: {
				default: <FaBasketShopping />,
			},
			variant: variant == 'extended' ? 'main' : 'default',
		},
		{
			label: 'Аренда',
			type: 'dropdown',
			icon: {
				default: <FaBusinessTime />,
			},
			variant: variant == 'extended' ? 'main' : 'default',
		},
		{
			label: 'Продажа',
			type: 'link',
			url: '/sale',
			icon: {
				default: <FaMoneyBillWave />,
			},
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
				isExtended={variant == 'extended'}
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
				isExtended={variant == 'extended'}
				data={lastList}
			/>
		</nav>
	)
}
