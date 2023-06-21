import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";

export async function Header() {
  const auth = await useAuth.fromServer();

  return (
    <header>
      <div>
        <Link href="/">Logo</Link>
      </div>
      <nav>
        {auth ? (
          <Link href="/panel">Panel (Protected Route)</Link>
        ) : (
          <Link href="/login">Login</Link>
        )}
      </nav>
        <Link href="/about">About</Link>
    </header>
  );
}

export default Header;
