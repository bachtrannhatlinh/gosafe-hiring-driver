import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "GoSafe - Hiring Driver",
  description: "Ứng dụng thuê tài xế an toàn và tiện lợi",
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
      <body className="bg-gray-50 min-h-screen">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <h1 className="text-2xl font-bold text-blue-600 hover:text-purple-600 transition-colors duration-200">
                    🚗 GoSafe
                  </h1>
                </div>
              </div>
              
              {/* Navigation */}
              <nav className="hidden md:block">
                <div className="flex items-center space-x-1">
                  <Link 
                    href="/" 
                    className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center"
                  >
                    <span className="mr-2">🏠</span>
                    Trang chủ
                  </Link>
                  <Link 
                    href="/drivers" 
                    className="text-gray-700 hover:text-green-600 hover:bg-green-50 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center"
                  >
                    <span className="mr-2">🚗</span>
                    Tài xế
                  </Link>
                  <Link 
                    href="/history" 
                    className="text-gray-700 hover:text-purple-600 hover:bg-purple-50 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center"
                  >
                    <span className="mr-2">📋</span>
                    Lịch sử
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </header>

        {/* Mobile Navigation */}
        <nav className="md:hidden bg-white border-b border-gray-200">
          <div className="px-4 py-3 space-y-2">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 block px-3 py-2 rounded-lg text-base font-medium transition-all duration-200"
            >
              <span className="flex items-center">
                <span className="mr-3">🏠</span>
                Trang chủ
              </span>
            </Link>
            <Link 
              href="/drivers" 
              className="text-gray-700 hover:text-green-600 hover:bg-green-50 block px-3 py-2 rounded-lg text-base font-medium transition-all duration-200"
            >
              <span className="flex items-center">
                <span className="mr-3">🚗</span>
                Tài xế
              </span>
            </Link>
            <Link 
              href="/history" 
              className="text-gray-700 hover:text-purple-600 hover:bg-purple-50 block px-3 py-2 rounded-lg text-base font-medium transition-all duration-200"
            >
              <span className="flex items-center">
                <span className="mr-3">📋</span>
                Lịch sử
              </span>
            </Link>
          </div>
        </nav>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white mt-16">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="mb-4">
                <h3 className="text-lg font-bold text-blue-400">
                  🚗 GoSafe
                </h3>
              </div>
              <div className="flex flex-wrap justify-center gap-6 mb-4 text-sm">
                <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">📞 Hỗ trợ</span>
                <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">📧 Liên hệ</span>
                <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">📋 Điều khoản</span>
              </div>
              <div className="text-sm text-gray-400">
                © 2025 GoSafe - Hiring Driver. Tất cả quyền được bảo lưu.
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
