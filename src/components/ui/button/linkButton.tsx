import Link from 'next/link'

interface ILinkButtonProps {
	variant?: 'square' | 'rounded'
	color?: 'blue' | 'indigo'
	label: string
	href: string
	customStyles?: string
}

export const LinkButton: React.FC<ILinkButtonProps> = ({
	variant = 'square',
	color = 'blue',
	label,
	href,
	customStyles = '',
}) => {
	const variants = {
		square:
			'font-bold py-2 px-4 rounded hover:rounded-xl transition-all duration-200 ease-in-out text-center',
		rounded:
			'font-bold py-2 px-4 rounded hover:rounded-xl transition-all duration-200 ease-in-out',
		blue: 'bg-blue-600 hover:bg-blue-700 text-white',
		indigo: 'bg-indigo-600 hover:bg-indigo-700 text-white',
	}

	return (
		<Link
			href={href}
			className={`${variants[variant]} ${variants[color]} ${customStyles}`}
		>
			{label}
		</Link>
	)
}
