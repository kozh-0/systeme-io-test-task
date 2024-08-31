// "use client";

import Link from "next/link";

export default function Header() {
  const myLink = `mx-4 px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2`;

  return (
    <header className="border-b-2 py-1">
      <div>
        <nav className="flex">
          <Link className={myLink} href="/">
            Home
          </Link>
          <Link className={myLink} href="/table">
            Table
          </Link>
        </nav>
      </div>
    </header>
  );
}
