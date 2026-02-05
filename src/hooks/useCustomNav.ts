import { useNavigate } from "react-router-dom";

export function useCustomNav() {
    const navigate = useNavigate()

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

    return { goToPath, goBack }
}