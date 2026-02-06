import { HomeLogo } from '@/icons/HomeLogo'
import { useCustomNav } from '@/hooks/useCustomNav';

export function HomeButton() {
    const { goBack, isHome } = useCustomNav()

    return (
        <button
            onClick={goBack}
            className={
                `${isHome
                    ? "fill-icon-1"
                    : "stroke-icon-2 stroke-2 fill-none"
                }
            flex items-center justify-center bg-primary opacity-80 size-12 rounded-full p-2.5 cursor-pointer hover:scale-110  hover:opacity-100 transition-all`}>
            <HomeLogo />
        </button>);
}