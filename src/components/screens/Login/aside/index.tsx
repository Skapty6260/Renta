import Link from 'next/link'

interface IProps {
	heading: string
	subheading: string
	link: 'sign-up' | 'sign-in'
}

export const LoginAside: React.FC<IProps> = ({ heading, subheading, link }) => {
	return (
		<aside>
			<h2>{heading}</h2>
			<p>{subheading}</p>

			<Link href={`/${link}`}>{link}</Link>
		</aside>
	)
}
