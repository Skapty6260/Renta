'use client'

import { useState } from 'react'
import { NavbarItem } from './item'
import { Dropdown_Extended } from '@/components/ui/dropdown/extended'

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
	isExtended: boolean
	listClassName?: string
}

export const NavbarPart: React.FC<IProps> = ({
	listClassName = '',
	data,
	isExtended,
}) => {
	const [dropdownActive, setDropdownActive] = useState<{
		dropdown: string
		status: boolean
	}>({ dropdown: '', status: false })

	return (
		<ul className={listClassName}>
			{data.map((item, index: number) => (
				<NavbarItem
					key={index}
					item={item}
					index={index}
					ActivateDropdown={setDropdownActive}
					DropdownActive={dropdownActive.status}
				/>
			))}

			{dropdownActive && isExtended ? <Dropdown_Extended /> : null}
		</ul>
	)
}
