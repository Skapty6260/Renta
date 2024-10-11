import { ImageSlider } from '@/components/ui/image_slider'
import { HomeInfoBlock } from './block'
import villa from '@/assets/images/villa.webp'

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
					images={[villa]}
					alt='HomeInfoSlider_block'
					autoPlay={{ enabled: true, interval: 3000 }}
					sizes={{
						width: 645,
						height: 645,
					}}
				/>
			</div>
		</div>
	)
}
