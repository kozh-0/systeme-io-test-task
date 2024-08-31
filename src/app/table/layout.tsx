import Link from "next/link";

export default function TableLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const myLink = `mx-4 px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2`;
  const basePath = "/table";

  return (
    <div>
      <section>
        <Link href={`${basePath}/products`} className={myLink}>
          Products
        </Link>
        <Link href={`${basePath}/price-plans`} className={myLink}>
          Price Plans
        </Link>
        <Link href={`${basePath}/pages`} className={myLink}>
          Pages
        </Link>
      </section>
      <main>{children}</main>
    </div>
  );
}
