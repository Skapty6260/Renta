import { CurveSplitter_Opacity } from '@/components/ui/curves/opacityCurve'
import styles from './content.module.scss'
import { ContentHeader } from './header/contentHeader'

interface IProps {
	location: string[]
}

const ContentSection: React.FC<IProps> = ({ location }) => {
	return (
		<section className='h-[100vh] z-[0] relative w-[100%] flex flex-col items-center py-[80px] bg-white lg:items-stretch lg:px-[20%]'>
			{location[0].toLowerCase() == 'главная' && <CurveSplitter_Opacity />}
			<ContentHeader styles={styles} location={location} />
		</section>
	)
}

export default ContentSection
