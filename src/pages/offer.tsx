import Link from "next/link";

export default function Offer() {
  return (
    <>
      <main>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/offer">Offer</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <h1>Offer</h1>
      </main>
    </>
  );
}
