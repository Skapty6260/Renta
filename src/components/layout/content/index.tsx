import { CurveSplitter_Opacity } from '@/components/ui/curves/opacityCurve'
import styles from './content.module.scss'
import { ContentHeader } from './header/contentHeader'
import { ContentData } from './data'
import { NavbarLayout } from '../navbar/navbar'

interface IProps {
	location: string[]
	Filters: React.ReactNode
}

const ContentSection: React.FC<IProps> = ({ location, Filters }) => {
	const isHome = location[0].toLowerCase() == 'главная'

	return (
		<main className='flex mb-[180px] flex-col relative w-full pt-[20px] md:pt-[80px]'>
			<NavbarLayout variant='horizontal' />

			<section
				className={`h-[100vh] z-[0] relative w-[100%] flex flex-col items-center py-[
					'80px'] bg-white lg:items-stretch lg:px-[20%]`}
			>
				{isHome && <CurveSplitter_Opacity />}
				<ContentHeader styles={styles} location={location} />
				{Filters}
				<ContentData />
			</section>
		</main>
	)
}

export default ContentSection
