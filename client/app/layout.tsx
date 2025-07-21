import Link from "next/link";

export const metadata = {
  title: "Zalo Mini App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <head>
        <script src="https://stc.zdn.vn/sdk/zalo.sdk.js" defer></script>
      </head>
      <body>
        <nav className="bg-gray-100 p-3 flex gap-4">
          <Link href="/">Trang chủ</Link>
          <Link href="/drivers">Tài xế</Link>
          <Link href="/history">Lịch sử</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
