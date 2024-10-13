'use client'

import { useState } from 'react'
import { NavbarItem } from './item'
import { Dropdown_Extended } from '@/components/ui/dropdown/extended'

export interface INavbarPartItem {
	label: string
	type: 'link' | 'dropdown'
	url?: string
	customStyles?: {
		default: string
		active?: string
	}
	icon?: {
		default: React.ReactNode
		active?: React.ReactNode
	}
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
					DropdownActive={dropdownActive}
				/>
			))}

			{dropdownActive.status && isExtended ? <Dropdown_Extended /> : null}
		</ul>
	)
}
