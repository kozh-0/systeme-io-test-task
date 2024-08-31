import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-sky-950 text-white flex justify-center items-center p-1">
      <Link href="https://github.com/kozh-0" target="_blank">
        <span>GitHub</span>
        <Image width={40} height={40} src="/vercel.svg" alt="git" />
      </Link>
    </footer>
  );
}
