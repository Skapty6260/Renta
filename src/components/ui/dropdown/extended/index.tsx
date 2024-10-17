import React, { Dispatch, SetStateAction } from 'react'
import styles from './extended.module.scss'

export const Dropdown_Extended: React.FC<{
	variant: 'first' | 'second'
	setDropdownActive: Dispatch<
		SetStateAction<{ dropdown: string; status: boolean }>
	>
}> = ({ variant, setDropdownActive }) => {
	return (
		<div
			className={
				variant == 'first'
					? styles.dropdown_container
					: styles.dropdown_container2
			}
		>
			<div
				onMouseLeave={() => setDropdownActive({ dropdown: '', status: false })}
				className={styles.content}
			>
				<nav></nav>
			</div>

			<aside></aside>
		</div>
	)
}
