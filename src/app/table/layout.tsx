import Link from "next/link";

export default function TableLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const basePath = "/table";

  return (
    <div>
      <section>
        <Link href={`${basePath}/products`} className="myLink1">
          Products
        </Link>
        <Link href={`${basePath}/price-plans`} className="myLink1">
          Price Plans
        </Link>
        <Link href={`${basePath}/pages`} className="myLink1">
          Pages
        </Link>
      </section>
      <main>{children}</main>
    </div>
  );
}
