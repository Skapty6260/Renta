import { create } from 'zustand'

type State = {
	auth_status: boolean
	user_id: string
	user_role: string
	user_name: string
}

type Actions = {
	setAuthStatus: (status: boolean) => void
	setUserId: (id: string) => void
	setUserRole: (role: string) => void
	setUserName: (name: string) => void
}

type Action = {
	type: keyof Actions
	value: unknown
}

export const useAuthStore = create<State & Actions>(set => ({
	auth_status: false,
	user_id: '',
	user_role: '',
	user_name: '',
	setAuthStatus: status => set(state => ({ ...state, auth_status: status })),
	setUserId: id => set(state => ({ ...state, user_id: id })),
	setUserRole: role => set(state => ({ ...state, user_role: role })),
	setUserName: name => set(state => ({ ...state, user_name: name })),
}))
