import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      Home
      <Link href="/dashboard">Go to Dashboard</Link>
    </main>
  );
}