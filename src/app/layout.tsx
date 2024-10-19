import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import '../assets/styles/globals.css'

const Font = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Renta',
	description: 'Стильный сервис по продвижению недвижимости',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<body className={`${Font.className}`}>
				<main className='min-h-screen w-full overflow-x-hidden'>
					{children}
				</main>
			</body>
		</html>
	)
}
