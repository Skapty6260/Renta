import { HomeHeader } from '@/components/screens/Home'
import ContentSection from '@/components/layout/content'

export default function Home() {
	return (
		<>
			<HomeHeader />
			<ContentSection location={['Главная']} Filters={<div />} data={[]} />
		</>
	)
}
