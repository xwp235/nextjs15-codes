"use client"

// this is last line of defense when something goes catastrophically wrong at the highest level of app
// works only in production mode
// requires html and body tags to be rendered
export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    return (
        <html>
        <body>
        <div>
            <h1>Something went wrong!</h1>
            <p>{error.message}</p>
            <p>{error.stack}</p>
            <p>{error.digest}</p>
            <button onClick={() => window.location.reload()}>Refresh</button>
        </div>
        </body>
        </html>
    )
}
