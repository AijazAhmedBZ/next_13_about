import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <Link href={"/about"}>About</Link>
      <br />
      <Image src="next.svg" alt="Logo" width="100" height="100" />
      <br />
      <Link href={"/products"}>Products</Link>
    </>
  );
}
