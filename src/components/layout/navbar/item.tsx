import Link from 'next/link'
import { INavbarPartItem } from './list'

const LinkItem: React.FC<{ item: INavbarPartItem }> = ({ item }) => {
	if (!item.url) return null

	return (
		<Link href={item.url && item.url}>
			{item.icon && <i>{item.icon}</i>}
			<span>{item.label}</span>
		</Link>
	)
}

const DropdownItem: React.FC<{ item: INavbarPartItem }> = ({ item }) => {
	return (
		<button>
			{item.icon && <i>{item.icon}</i>}
			<span>{item.label}</span>
		</button>
	)
}

export const NavbarItem: React.FC<{ item: INavbarPartItem; index: number }> = ({
	item,
	index,
}) => {
	return (
		<li
			key={index}
			className={
				item.variant == 'main'
					? `px-[15px] py-[3px] rounded-full ${item.customStyles}`
					: ''
			}
		>
			{item.type == 'link' ? (
				<LinkItem item={item} />
			) : (
				<DropdownItem item={item} />
			)}
		</li>
	)
}
