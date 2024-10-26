export const Footer = () => (
	<footer className='overflow-y-hidden relative h-[200px]'>
		<div className='bg-[#3a75ff] rounded-[100%] w-full px-[20px] flex justify-center h-[400px] py-[40px]'>
			<div className='hidden lg:flex font-bold text-3xl absolute left-[20%] top-[100px] items-center'>
				RENTA <b className='text-sm'>@2024</b>
			</div>
			<span className='text-gray-700 opacity-50 w-[50%] absolute left-1/2 -translate-x-1/2'>
				All rights reserved, open source project. You can copy, recreate and
				share this without any questions. <br />
				Created by Skapty6260
			</span>
			<span className='absolute top-[100px] right-[20%] text-gray-700 font-semibold'>
				Original by{' '}
				<div className='text-transparent'>
					<span className='text-[#000] text-2xl absolute font-bold'>
						Skapty6260
					</span>
				</div>
			</span>

			<ul className='absolute bottom-[55%] font-semibold flex items-center'>
				<li className='cursor-pointer hover:underline hover:opacity-50 opacity-30'>
					<a href='https://github.com/Skapty6260/Renta' target='_blank'>
						Code repository
					</a>
				</li>
				<li className='opacity-30 mx-2'> | </li>
				<li className='cursor-pointer hover:underline hover:opacity-50 opacity-30'>
					<a href='https://github.com/Skapty6260' target='_blank'>
						Code Author
					</a>
				</li>
			</ul>
		</div>
	</footer>
)
