import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href="/articles/breaking-news-123?lang=en">Read in English</Link>
      <br/>
      <Link href="/articles/breaking-news-123?lang=fr">Read in French</Link>
    </>
  );
}
