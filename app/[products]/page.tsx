import Link from "next/link";
import Image from "next/image";
export default function Products({ params }: { params: { products: string } }) {
  return (
    <>
      <h1>Products</h1>
      <Link href={"/about"}>About</Link>
      <div>The Product name is: {params.products}</div>
      <br />
      <Image src="next.svg" alt="Logo" width="100" height="100" />
      <br />
      <Link href={"/"}>Back to Home</Link>
    </>
  );
}
