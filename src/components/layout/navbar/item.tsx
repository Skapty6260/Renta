import Link from 'next/link'
import { INavbarPartItem } from './list'
import { Dispatch, SetStateAction } from 'react'

const LinkItem: React.FC<{ item: INavbarPartItem; isExtended: boolean }> = ({
	item,
	isExtended,
}) => {
	if (!item.url) return null

	return (
		<Link href={item.url && item.url}>
			{!item.icon ? null : isExtended == true || item.noShrinkAffect ? (
				<i>{item.icon.default}</i>
			) : null}
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
	isExtended: boolean
}> = ({ item, ActivateDropdown, DropdownActive, isExtended }) => {
	return (
		<button
			onClick={() =>
				ActivateDropdown({
					dropdown: item.label,
					status: !DropdownActive.status,
				})
			}
			onMouseEnter={() =>
				ActivateDropdown({
					dropdown: item.label,
					status: !DropdownActive.status,
				})
			}
		>
			{!item.icon ? null : isExtended == true || item.noShrinkAffect ? (
				<i>
					{DropdownActive.dropdown == item.label &&
					DropdownActive.status == true
						? item.icon?.active || item.icon.default
						: item.icon.default}
				</i>
			) : null}

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
	isExtended: boolean
}> = ({ item, index, ActivateDropdown, DropdownActive, isExtended }) => (
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
			<LinkItem isExtended={isExtended} item={item} />
		) : (
			<DropdownItem
				item={item}
				ActivateDropdown={ActivateDropdown}
				DropdownActive={DropdownActive}
				isExtended={isExtended}
			/>
		)}
	</li>
)
