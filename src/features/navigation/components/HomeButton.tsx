import { HomeLogo } from '@/components/ui/atoms/Icons/HomeLogo'
import { useCustomNav } from '../hooks/useCustomNav';
import { Button } from '@/components/ui/atoms/Button';

export function HomeButton() {
    const { goBack, isHome } = useCustomNav()

    return (
        <Button
            onClick={goBack}
            className={
                `${isHome
                    ? "fill-icon-1"
                    : "stroke-icon-2 stroke-2 fill-none"
                }
            flex items-center justify-center bg-primary opacity-80 size-12 rounded-full p-2.5 cursor-pointer hover:scale-110  hover:opacity-100 transition-all`}>
            <HomeLogo />
        </Button>);
}