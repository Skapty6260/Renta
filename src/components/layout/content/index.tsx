import { CurveSplitter_Opacity } from '@/components/ui/curves/opacityCurve'
import styles from './content.module.scss'
import { ContentHeader } from './header/contentHeader'

interface IProps {
	location: string[]
}

const ContentSection: React.FC<IProps> = ({ location }) => {
	return (
		<section className='h-[100vh] relative w-[100%] flex flex-col px-[20%] py-[40px] bg-white'>
			<CurveSplitter_Opacity />
			<ContentHeader styles={styles} location={location} />
			{/* Весь компонент в стиле самолета: https://samolet.ru/flats/?ordering=-order_manual,filter_price_package,pk&free=1&type=100000000&nameType=sale&price_min=3952472&price_max=19135408 */}
			{/* Все отдельными компонентами, т.к все будет переиспользоваться в разных местах приложения */}
			{/* Search Bar (in main page search bar would be in header) */}
			{/* Block with sidebar on the left with filters and other space is content */}
		</section>
	)
}

export default ContentSection
