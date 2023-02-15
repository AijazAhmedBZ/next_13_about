import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <>
      <h1>About</h1>
      <Link href={"/products"}>Products</Link>
      <br />
      <Image src="next.svg" alt="Logo" width="100" height="100" />
      <br />
      <Link href={"/"}>Back to Home</Link>
    </>
  );
}
