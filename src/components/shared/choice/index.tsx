import { useState } from 'react'

interface IProps {
	options: string[]
	default: string
}

export const ChoiceInput: React.FC<IProps> = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const [selected, setSelected] = useState<string>('')

	return <button></button>
}
