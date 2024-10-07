import { NavbarItem } from './item'

export interface INavbarPartItem {
	label: string
	type: 'link' | 'dropdown'
	url?: string
	customStyles?: any
	icon?: React.ReactNode
	variant?: 'default' | 'main'
}

interface IProps {
	data: INavbarPartItem[]
	listClassName?: string
}

export const NavbarPart: React.FC<IProps> = ({ listClassName = '', data }) => {
	return (
		<ul className={listClassName}>
			{data.map((item, index: number) => (
				<NavbarItem key={index} item={item} index={index} />
			))}
		</ul>
	)
}
