"use client"

import {useState} from "react";

interface WrapperProps {
    children: React.ReactNode
}

const ErrorSimulator =({
    message = "An error occurred"
}:{
    message?: string
}) => {
    const [error, setError] = useState(false)
    if (error) throw new Error(message)
    return (
        <button onClick={() => setError(true)}>Simulate Error</button>
    )
}

export const ErrorWrapper = ({children}: WrapperProps) => {
    return (<>
      <div>
          <ErrorSimulator message="Simulated error in root layout"></ErrorSimulator>
      </div>
        {children}
    </>)
}
