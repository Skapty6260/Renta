'use client'
interface IModalProps {
	setActive?: any
	disableOnClick?: boolean
	children: React.ReactNode
}

export const Modal: React.FC<IModalProps> = ({
	setActive,
	disableOnClick = false,
	children,
}) => {
	return (
		<dialog
			onClick={() => disableOnClick && setActive && setActive(false)}
			className='absolute flex bg-[#000000ab] w-full h-full z-[10] top-0 left-0'
		>
			{children}
		</dialog>
	)
}
