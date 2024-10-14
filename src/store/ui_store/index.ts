import { create } from 'zustand'

type State = {
	navbar_variant: 'horizontal' | 'extended'
}

type Actions = {
	setNavbarVariant: (variant: 'horizontal' | 'extended') => void
}

type Action = {
	type: keyof Actions
	value: unknown
}

export const useUiStore = create<State & Actions>(set => ({
	navbar_variant: 'extended',
	setNavbarVariant: variant =>
		set(state => ({ ...state, navbar_variant: variant })),
}))
