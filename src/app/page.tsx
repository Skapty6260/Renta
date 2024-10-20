import { HomeHeader } from '@/components/screens/Home'
import ContentSection from '@/components/layout/content'
import { Footer } from '@/components/layout/footer'

export default function Home() {
	return (
		<>
			<HomeHeader />
			<ContentSection
				location={['Главная']}
				Filters={<div />}
				data={
					new Promise(resolve => {
						setTimeout(() => {
							resolve([{ asd: 'asd' }])
						}, 20000)
					})
				}
			/>
			<Footer />
		</>
	)
}
