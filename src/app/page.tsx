import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Hello, It&apos;s Dmitry, your future colleague 😊</h1> <br />
      <Link className="myLink" target="_blank" href="https://telegra.ph/Testovoe-zadanie-02-01-2">
        Test Task
      </Link>
      <div className="flex mt-6">
        <Link
          className="myLink"
          target="_blank"
          href="https://drive.google.com/file/d/1xis7ApgoXOXBt_ttk5nVDjL1rUWQE_wY/view"
        >
          English CV PDF
        </Link>
        <Link
          className="myLink"
          target="_blank"
          href="https://drive.google.com/file/d/1-Ki74DNTd_-I8HhUuLiwWpfg5FpZtdK_/view?usp=drivesdk"
        >
          PDF CV (RU)
        </Link>
      </div>
    </>
  );
}
