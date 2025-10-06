import {useRouter} from "next/router";
import {redirect, forbidden, notFound} from "next/navigation";

export default function Home() {
  const router = useRouter();
  const handleClick = () => {
    console.log("Placing your order")
    router.push("/")
    // router.back
    // router.replace
  }
  return (
      <>
        <h1>Order Product</h1>
        <button onClick={handleClick}>Place Order</button>
      </>
  );
}
