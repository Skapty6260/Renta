import { HomeHeader, HomeInfo } from '@/components/screens/Home'
import ContentSection from '@/components/layout/content'

export default function Home() {
	return (
		<>
			<HomeHeader />
			<HomeInfo />
			<ContentSection location={['Главная']} />
		</>
	)
}
