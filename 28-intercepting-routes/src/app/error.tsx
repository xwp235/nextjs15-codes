"use client"

import {useRouter} from "next/navigation";
import {startTransition} from "react";

export default function ErrorBoundary({error, reset}:{error:Error,reset:()=>void}) {
const router = useRouter();
// recovering from errors
const reload = () => {
  startTransition(() => {
   router.refresh()
   reset()
  })
}
 return (
     <>
      <div>{error.message}</div>
      <button onClick={reload}>Try again</button>
     </>
 )
}
