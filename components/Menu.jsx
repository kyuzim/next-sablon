import Link from "next/link";

function Menu() {
  return (
    <nav style={{ flexDirection: "column" }}>
      <Link href="/">Anasayfa</Link>
      <Link href="/about">Hakkımda</Link>
      <Link href="/contact">İletisim</Link>
    </nav>
  );
}

export default Menu;
