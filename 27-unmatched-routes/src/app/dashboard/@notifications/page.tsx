import {Card} from '@/app/components/card'
import Link from 'next/link'

export default function Notifications() {
    return (
        <>
            <div>
                <Card>Notifications</Card>
                <br/>
                <Link href="/dashboard/archived">Archived</Link>
            </div>
        </>
    )
}
