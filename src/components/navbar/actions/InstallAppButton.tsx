import { InstallAppLogo } from '@/icons/InstallAppLogo'

export function InstallAppButton({ }) {
  return (
    <button 
    className='flex items-center gap-2 bg-transparent font-semibold px-4.5 py-1 hover:scale-105 transition cursor-pointer'>
      <InstallAppLogo className='size-4 fill-icon-1' />
      <span className='truncate'>Install App</span>
    </button>)
}
