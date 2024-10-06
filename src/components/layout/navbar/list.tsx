export interface INavbarPartItem {
	label: string
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
				<li key={index}>{item.label}</li>
			))}
		</ul>
	)
}
