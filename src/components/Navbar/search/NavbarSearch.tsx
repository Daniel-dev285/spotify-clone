import { SearchLogo } from '@/icons/SearchIco'


export function NavbarSearch({ }) {
    return (
        <form 
        className='w-120 rounded-full flex items-center pl-3 gap-2.5 fill-icon-2 cursor-pointer bg-primary opacity-80  hover:opacity-100 hover:outline-1 transition-all'>
            <SearchLogo className='size-7' />
            <input 
            className='bg-transparent outline-none px-0 py-3 w-full placeholder:text-text-1 placeholder:opacity-80'
            type="text" 
            placeholder='What do you want to play?' />
        </form>
    )
}
