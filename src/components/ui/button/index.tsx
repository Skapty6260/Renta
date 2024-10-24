import { LinkButton } from './linkButton'

interface IButtonProps {
	variant?: 'square' | 'rounded'
	color?: 'blue' | 'indigo'
	label: string
	onClick: () => void
	customStyle?: string
}

export const Button: React.FC<IButtonProps> = ({
	variant = 'square',
	color = 'blue',
	label,
	onClick,
	customStyle = '',
}) => {
	const variants = {
		square:
			'font-bold py-2 px-4 rounded hover:rounded-xl transition-all duration-200 ease-in-out',
		rounded:
			'font-bold py-2 px-4 rounded-3xl hover:rounded-xl transition-all duration-200 ease-in-out',
		blue: 'bg-blue-600 hover:bg-blue-700 text-white',
		indigo: 'bg-indigo-600 hover:bg-indigo-700 text-white',
	}

	return (
		<button
			onClick={onClick}
			className={`${variants[variant]} ${variants[color]} ${customStyle}`}
		>
			{label}
		</button>
	)
}

export { LinkButton }
