import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Привет, Я Дмитрий, ваш будущий коллега)</h1> <br />
      <Link className="myLink" target="_blank" href="https://telegra.ph/Testovoe-zadanie-02-01-2">
        Тестовое задание
      </Link>
      <div className="flex mt-6">
        <Link
          className="myLink"
          target="_blank"
          href="https://drive.google.com/file/d/1uxZSYa_n74ghDCtbNBo2qpdvQ4RbQtMd/view?usp=sharing"
        >
          English CV PDF
        </Link>
        <Link
          className="myLink"
          target="_blank"
          href="https://drive.google.com/file/d/1-Ki74DNTd_-I8HhUuLiwWpfg5FpZtdK_/view?usp=drivesdk"
        >
          PDF Резюме (RU)
        </Link>
      </div>
    </>
  );
}
