import {Card} from '@/app/components/card'
import Link from 'next/link'

export default function NotificationsArchived() {
    return (
        <>
            <div>
                <Card>Notifications Archived</Card>
                <br/>
                <Link href="/dashboard">Go back to dashboard</Link>
            </div>
        </>
    )
}
