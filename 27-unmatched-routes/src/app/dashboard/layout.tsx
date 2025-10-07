export default function DashboardLayout({
  children,
  users,
  revenue,
  notifications,
  login
}: {
    children: React.ReactNode;
    users: React.ReactNode;
    revenue: React.ReactNode;
    notifications: React.ReactNode
    login: React.ReactNode
}) {
    const isLoggedIn = false
    return isLoggedIn ? (
        <html lang="en">
        <body>
            <div>{children}</div>
            <div style={{display: "flex", flexDirection: "column"}}>
                <div>{users}</div>
                <div>{revenue}</div>
            </div>
            <div style={{display: "flex", flex: 1}}>
                {notifications}
            </div>
        </body>
        </html>
    ) : (
        login
    )
}
