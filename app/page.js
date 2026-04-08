import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome to Our Website</h1>
      <span>Click to navigate</span>
      <br />
      <Link href="/about">About Us</Link>
      <br />
      <Link href="/posts/1">Post 1</Link>
      <br />
      <Link href="/posts/2">Post 2</Link>
    </div>
  );
}
