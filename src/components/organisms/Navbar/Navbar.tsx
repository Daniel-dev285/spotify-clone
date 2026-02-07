import { NavbarSearch } from '@components/molecules/NavbarSearch';
import { HomeButton } from '@components/molecules/HomeButton'
import { NavbarActions } from '@components/molecules/NavbarActions';

export function Navbar() {
    return (
        <nav className='flex items-center justify-between p-2'>
            <div className='flex items-center justify-start gap-2.5 w-full'>
                <HomeButton />
                <NavbarSearch />
            </div>
            <NavbarActions />
        </nav>
    )
}