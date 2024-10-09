import { IoMdArrowDropdown } from 'react-icons/io'
import { MdOutlineAttachMoney } from 'react-icons/md'

export const SearchBar_Compact = () => {
	return (
		<div className='absolute border text-white border-[#bcbcbc7d] rounded-full font-medium left-1/2 -translate-x-1/2 bottom-[10%] flex'>
			<div className='flex items-center'>
				<IoMdArrowDropdown className='absolute left-[20%] text-[#bcbcbcb5]' />
				<input
					className='rounded-l-full bg-transparent text-center w-[150px] outline-none py-2'
					type='text'
					placeholder={'Дом'}
				/>
			</div>
			<div className='flex items-center'>
				<IoMdArrowDropdown className='absolute left-[15%] text-[#bcbcbcb5]' />
				<input
					className='text-center bg-transparent w-[150px] outline-none  border-[#bcbcbc7d]'
					type='text'
					placeholder='Купить'
				/>
			</div>
			<div className='flex items-center'>
				<MdOutlineAttachMoney className='absolute left-[15%] text-[#bcbcbcb5]' />
				<input
					className='text-center bg-transparent rounded-r-full w-[150px] outline-none'
					type='text'
					placeholder='Цена'
				/>
			</div>
		</div>
	)
}
