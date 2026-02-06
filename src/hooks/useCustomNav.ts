import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom'

export function useCustomNav() {
    const navigate = useNavigate()
    const location = useLocation()

    const isHome = location.pathname === '/'

    const goToPath = (path: string) => {
        document.startViewTransition(() => {
            navigate(path)
        })
    }

    const goBack = () => {
        document.startViewTransition(() => {
            navigate('/')
        })
        

    }

    return { goToPath, goBack, isHome }
}