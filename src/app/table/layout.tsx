import TableNavigation from "@/Components/TableNavigation";

export default function TableLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <TableNavigation />
      <main>{children}</main>
    </div>
  );
}
