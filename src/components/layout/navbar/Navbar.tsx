import { NavbarSearch } from './search/NavbarSearch';
import { HomeButton } from './home-button/HomeButton'
import { NavbarActions } from './actions/NavbarActions';

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