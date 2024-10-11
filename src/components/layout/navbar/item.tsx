import Link from 'next/link'
import { INavbarPartItem } from './list'
import { Dispatch, SetStateAction } from 'react'

const LinkItem: React.FC<{ item: INavbarPartItem }> = ({ item }) => {
	if (!item.url) return null

	return (
		<Link href={item.url && item.url}>
			{item.icon && <i>{item.icon.default}</i>}
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
	DropdownActive: {
		dropdown: string
		status: boolean
	}
}> = ({ item, ActivateDropdown, DropdownActive }) => {
	return (
		<button
			onClick={() =>
				ActivateDropdown({
					dropdown: item.label,
					status: !DropdownActive.status,
				})
			}
			onMouseOver={() =>
				ActivateDropdown({
					dropdown: item.label,
					status: !DropdownActive.status,
				})
			}
		>
			{item.icon && (
				<i>
					{DropdownActive.dropdown == item.label &&
					DropdownActive.status == true
						? item.icon?.active || item.icon.default
						: item.icon.default}
				</i>
			)}
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
	DropdownActive: {
		dropdown: string
		status: boolean
	}
}> = ({ item, index, ActivateDropdown, DropdownActive }) => {
	return (
		<li
			key={index}
			className={
				item.variant == 'main'
					? `px-[15px] py-[3px] rounded-full transition-all duration-300 ${
							item.customStyles &&
							DropdownActive.dropdown == item.label &&
							DropdownActive.status == true
								? item.customStyles.active
								: item.customStyles?.default
					  }`
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
