import { MdOutlineKeyboardBackspace } from 'react-icons/md'
import Link from 'next/link'

const List: React.FC<{ data: string[]; liStyle: string }> = ({
	data,
	liStyle,
}) => (
	<ul className='flex space-x-3 overflow-x-scroll'>
		{data.map((item, index) => {
			return (
				<li className={`cursor-pointer font-semibold ${liStyle}`} key={index}>
					{item}
				</li>
			)
		})}
	</ul>
)

const StyledSpan: React.FC<{ text: string }> = ({ text }) => (
	<span className='text-sm-text-gray-700 opacity-70'>{text}:</span>
)

export default function CreateDisposal() {
	return (
		<main className='flex flex-col w-full h-screen overflow-hidden px-[10%] py-[60px]'>
			<nav
				className={`flex absolute cursor-pointer -top-[30px] -left-[30px] p-[50px] rounded-full text-2xl text-white bg-blue-600`}
			>
				<Link href='/me' className='absolute w-full h-full mr-[5px]'>
					<MdOutlineKeyboardBackspace />
				</Link>
			</nav>

			<header className='px-[20px] py-[10px] rounded-xl'>
				<div className='flex flex-col lg:flex-row lg:space-x-[40px] space-y-3'>
					<div>
						<StyledSpan text='Тип объявления' />
						<List
							data={['Продажа', 'Аренда']}
							liStyle='text-2xl px-[20px] py-[10px] rounded-xl bg-gray-200'
						/>
					</div>

					<div>
						<List
							data={['Квартира', 'Дом', 'Комната']}
							liStyle='text-2xl bg-gray-300 px-[20px] py-[10px] rounded-xl'
						/>
						<StyledSpan text='Тип недвижимости' />
					</div>
				</div>

				<div className='mt-[15px] flex flex-col lg:items-center lg:flex-row lg:space-x-[40px] space-y-3'>
					<div className='flex space-x-3 items-center'>
						<StyledSpan text='Кол-во комнат' />
						<List
							data={['1', '2', '3', '...']}
							liStyle='text-md bg-blue-200 px-[10px] py-[5px] rounded-md'
						/>
					</div>

					<div className='flex space-x-3 items-center'>
						<List
							data={['10+м2', '20+м2', '30+м2', '40+м2', '...м2']}
							liStyle='text-md bg-indigo-200 px-[10px] py-[5px] rounded-md'
						/>
						<StyledSpan text='Площадь' />
					</div>
				</div>
			</header>

			<div className='flex mt-[30px] py-[30px] bg-gray-100 rounded-3xl h-full border-t-2 border-t-blue-300'>
				{/* Загрузить картинку */}
				{/* Описание недвижимости */}
				{/* Выбрать локацию и отправить (локация через модалку) */}
			</div>
		</main>
	)
}
