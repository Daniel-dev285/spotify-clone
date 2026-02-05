import { NotificationButton } from './NotificationButton';
import { InstallAppButton } from './InstallAppButton';
import { PremiumButton } from './PremiumButton';

export function NavbarActions() {
    return (
        <div className='flex items-center justify-end gap-2.5'>
            <PremiumButton />
            <InstallAppButton />
            <NotificationButton />
        </div>
    )
}