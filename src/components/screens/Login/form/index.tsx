interface IProps {
	heading: string
	services: {
		service_name: string
		service_icon: React.ReactNode
	}[]
	fields: {
		placeholder: string
	}[]
	onSubmit: () => void
	type: 'sign-in' | 'sign-up'
	style: any
}

export const LoginForm: React.FC<IProps> = ({
	heading,
	services,
	fields,
	onSubmit,
	type,
	style,
}) => {
	return (
		<div className={style}>
			<h2>{heading}</h2>

			<ul>
				{services.map((service, index) => {
					return (
						<li key={index}>
							<button type='button'>{service.service_icon}</button>
						</li>
					)
				})}
			</ul>

			<ul>
				{fields.map((field, index) => {
					return (
						<li key={index}>
							<input type='text' placeholder={field.placeholder} />
						</li>
					)
				})}
			</ul>

			{type == 'sign-in' && <a>Forgot password?</a>}
			<button onClick={onSubmit}>{type}</button>
		</div>
	)
}
