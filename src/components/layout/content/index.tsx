import { CurveSplitter_Opacity } from '@/components/ui/curves/opacityCurve'
import styles from './content.module.scss'
import { ContentHeader } from './header/contentHeader'
import { ContentData } from './data'
import { NavbarLayout } from '../navbar/navbar'

interface IProps {
	location: string[]
	Filters: React.ReactNode
	data: Promise<any>
}

const ContentSection: React.FC<IProps> = ({ location, Filters, data }) => {
	const isHome = location[0].toLowerCase() == 'главная'

	return (
		<main className='flex flex-col w-full pt-[100px]'>
			<NavbarLayout variant='horizontal' />

			<section
				className={`h-[100vh] z-[0] relative w-[100%] flex flex-col items-center py-[
					'80px'] bg-white lg:items-stretch lg:px-[20%]`}
			>
				{isHome && <CurveSplitter_Opacity />}
				<ContentHeader styles={styles} location={location} />
				{Filters}
				<ContentData data={data} />
			</section>
		</main>
	)
}

export default ContentSection
