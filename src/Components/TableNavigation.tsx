"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TableNavigation() {
  const pathname = usePathname();

  const basePath = "/table";
  const links = [
    { path: "/products", title: "Products" },
    { path: "/price-plans", title: "Price Plans" },
    { path: "/pages", title: "Pages" },
  ];

  return (
    <section className="mb-5">
      {links.map((link) => (
        <Link
          key={link.path}
          href={`${basePath}/${link.path}`}
          className={`${
            pathname === `${basePath}${link.path}` ? "bg-blue-600 !text-yellow-400" : ""
          } myLink1 `}
        >
          {link.title}
        </Link>
      ))}
    </section>
  );
}
