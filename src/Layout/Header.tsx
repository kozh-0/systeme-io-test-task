import { capitalizeFirstLetter } from "@/Helper";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const links = ["table"];

  return (
    <header className="bg-white text-black shadow-md">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <Link
            className="flex justify-center items-center text-xl font-bold hover:text-gray-600"
            href="/"
          >
            <Image className="pr-2" width={40} height={40} src="/favicon.ico" alt="git" />
            ¯\_(ツ)_/¯
          </Link>
          <div className="ml-12">
            {links.map((el) => (
              <Link key={el} href={`/${el}`} className="hover:text-gray-600 ml-8">
                {capitalizeFirstLetter(el)}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
