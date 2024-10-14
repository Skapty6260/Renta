import { FaSearch } from 'react-icons/fa'

export const SearchBar_Input = () => {
	return (
		<div className='group flex items-center w-[full] lg:w-[70%]'>
			<FaSearch className='text-xl absolute z-[1] text-gray-400 left-5 group-hover:text-gray-600 group-focus-within:hidden transition-all duration-300 ease-in-out animate-pulse group-hover:animate-none' />
			<input
				className='border-2 text-xl border-gray-400 outline-none rounded-full py-2 pl-12 w-full group-focus-within:pl-5 group-focus-within:border-gray-600 group-hover:border-gray-600 font-semibold'
				type='text'
				placeholder='Поиск'
			/>
		</div>
	)
}
