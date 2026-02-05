import { useLocation } from 'react-router-dom'
import { useCustomNav } from '@/hooks/useCustomNav'

export function useNavbar() {
    const { goBack } = useCustomNav()
    const location = useLocation()

    const isHome = location.pathname === '/'

    return {
        goBack,
        isHome,
    }
}