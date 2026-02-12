import { SearchInput } from '@/components/ui/molecules/SearchInput';
import { HomeButton } from './HomeButton'

export function Navbar() {
    return (
        <nav className='flex items-center justify-between p-2'>
            <div className='flex items-center justify-start gap-2.5 w-full'>
                <HomeButton />
                <SearchInput />
            </div>
        </nav>
    )
}