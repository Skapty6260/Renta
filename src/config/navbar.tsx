import { INavbarPartItem } from '@/components/layout/navbar/list'
import {
	FaBuilding,
	FaBasketShopping,
	FaBusinessTime,
	FaMoneyBillWave,
} from 'react-icons/fa6'
import { MdClose } from 'react-icons/md'

interface INavbarConfig {
	firstList: INavbarPartItem[]
	lastList: INavbarPartItem[]
}

const firstPart: INavbarPartItem[] = [
	{
		label: 'Недвижимость',
		variant: 'main',
		noShrinkAffect: true,
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
		variant: 'main',
	},
	{
		label: 'Аренда',
		type: 'dropdown',
		icon: {
			default: <FaBusinessTime />,
		},
		variant: 'main',
	},
	{
		label: 'Продажа',
		type: 'link',
		url: '/sale',
		icon: {
			default: <FaMoneyBillWave />,
		},
		variant: 'main',
	},
]

const navbarConfig: INavbarConfig = {
	firstList: firstPart,
	lastList: [
		{ label: 'Спонсорам', type: 'link', url: '/sponsors' },
		{ label: 'Контакты', type: 'link', url: '/contacts' },
		{ label: 'Личный кабинет', type: 'link', url: '/me' },
	],
}

export default navbarConfig
