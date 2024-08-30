"use client";

import Link from "next/link";

export default function Header() {
  // const myLink = `px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2`;

  return (
    <header>
      <div className="bg-red color">
        <nav>
          <Link className="" href="/">
            Home
          </Link>
          <div>
            <Link href="/products">Products</Link>
            <Link href="/price-plans">Price Plans</Link>
            <Link href="/pages">Pages</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
