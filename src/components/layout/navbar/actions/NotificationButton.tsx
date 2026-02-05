import { NotiLogo } from '@/icons/NotiLogo'

export function NotificationButton({ }) {
  return (
    <button className='flex items-center bg-transparent p-4 hover:scale-105 transition cursor-pointer '>
      <NotiLogo className='size-4 fill-icon-1' />
    </button>)
}
