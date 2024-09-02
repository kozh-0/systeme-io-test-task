import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-sky-950 text-white flex justify-center items-center p-2">
      <Link
        href="https://github.com/kozh-0/systeme-io-test-task"
        target="_blank"
        className="flex justify-center items-center"
      >
        <Image className="pr-2" width={40} height={40} src="/github.svg" alt="git" />
        <span>@kozh-0</span>
      </Link>
    </footer>
  );
}
