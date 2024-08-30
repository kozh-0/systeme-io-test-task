import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ textAlign: "center" }}>
      <Link href="https://github.com/kozh-0" target="_blank" className="footer_github">
        <span>GitHub</span>
        <Image width={40} height={40} src="/github.png" alt="git" />
      </Link>
    </footer>
  );
}
