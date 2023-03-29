import Link from "next/link";
import Button from "@mui/material/Button";

export default function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <Button variant="contained">Home</Button>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <Button variant="contained">About Us</Button>
          </Link>
        </li>
        <li>
          <Link href="/offer">
            <Button variant="contained">Offer</Button>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <Button variant="contained">Contact</Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
