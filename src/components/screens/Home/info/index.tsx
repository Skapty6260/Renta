import { ImageSlider } from '@/components/ui/image_slider'
import { HomeInfoBlock } from './block'
import villa from '@/assets/images/villa.webp'
import img2 from '@/assets/images/header01.jpeg'

export const HomeInfo = () => {
	return (
		<div className='flex justify-center py-[20px]'>
			<div className='relative flex flex-col'>
				<HomeInfoBlock
					image={villa}
					text={{ title: 'Виллы', subtitle: 'Все виллы' }}
					variant='primary'
				/>

				<div className='flex items-center justify-center space-x-2 mt-2'>
					<HomeInfoBlock
						image={villa}
						text={{ title: 'Виллы', subtitle: 'Все виллы' }}
						variant='secondary'
					/>
					<HomeInfoBlock
						image={villa}
						text={{ title: 'Виллы', subtitle: 'Все виллы' }}
						variant='secondary'
					/>
				</div>
			</div>

			<div className='ml-3'>
				<ImageSlider
					images={[
						'https://i.pinimg.com/236x/71/f4/92/71f4927b311f623b2bf85c3b866ea67e.jpg',
						'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlt8tqLwP9kbbICJq5WaWsGmPj70EHRxALRg&s',
						'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlt8tqLwP9kbbICJq5WaWsGmPj70EHRxALRg&s',
					]}
					alt='HomeInfoSlider_block'
					autoPlay={{ enabled: true, interval: 3000 }}
					sizes={{
						width: 645,
						height: 600,
					}}
					showSlides={true}
				/>
			</div>
		</div>
	)
}
