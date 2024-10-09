import Link from 'next/link'
import { INavbarPartItem } from './list'
import { Dispatch, SetStateAction } from 'react'

const LinkItem: React.FC<{ item: INavbarPartItem }> = ({ item }) => {
	if (!item.url) return null

	return (
		<Link href={item.url && item.url}>
			{item.icon && <i>{item.icon}</i>}
			<span>{item.label}</span>
		</Link>
	)
}

const DropdownItem: React.FC<{
	item: INavbarPartItem
	ActivateDropdown: Dispatch<
		SetStateAction<{
			dropdown: string
			status: boolean
		}>
	>
	DropdownActive: boolean
}> = ({ item, ActivateDropdown, DropdownActive }) => {
	return (
		<button
			onClick={() =>
				ActivateDropdown({ dropdown: item.label, status: !DropdownActive })
			}
			onMouseEnter={() =>
				ActivateDropdown({ dropdown: item.label, status: false })
			}
			// onMouseLeave={() => ActivateDropdown(false)}
		>
			{item.icon && <i>{item.icon}</i>}
			<span>{item.label}</span>
		</button>
	)
}

export const NavbarItem: React.FC<{
	item: INavbarPartItem
	index: number
	ActivateDropdown: Dispatch<
		SetStateAction<{
			dropdown: string
			status: boolean
		}>
	>
	DropdownActive: boolean
}> = ({ item, index, ActivateDropdown, DropdownActive }) => {
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
				<DropdownItem
					item={item}
					ActivateDropdown={ActivateDropdown}
					DropdownActive={DropdownActive}
				/>
			)}
		</li>
	)
}
