'use client';

import { useRouter } from 'next/navigation';
import { getZaloUser } from '@/lib/zalo';
import { useUserStore } from '@/store/user';

export default function Home() {
  const router = useRouter();
  const setUser = useUserStore((state) => state.setUser);

  const handleLogin = () => {
    getZaloUser((res) => {
      setUser(res.userID, res.accessToken);
      router.push('/profile');
    });
  };

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white rounded-xl shadow-lg p-8 text-center">
        <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl">🚗</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Chào mừng đến với GoSafe
        </h1>
        <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
          Ứng dụng thuê tài xế an toàn, tiện lợi và đáng tin cậy. 
          Kết nối bạn với những tài xế chuyên nghiệp trong khu vực.
        </p>
        
        <button
          onClick={handleLogin}
          className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-200 shadow-md"
        >
          <span className="mr-2">📱</span>
          Đăng nhập với Zalo
        </button>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6 text-center hover:shadow-md transition-shadow duration-200">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">✅</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">An toàn</h3>
          <p className="text-gray-600 text-sm">Tài xế được xác minh và đánh giá bởi cộng đồng</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6 text-center hover:shadow-md transition-shadow duration-200">
          <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">⚡</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Nhanh chóng</h3>
          <p className="text-gray-600 text-sm">Đặt chuyến trong vài giây với giao diện đơn giản</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6 text-center hover:shadow-md transition-shadow duration-200">
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">💰</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Tiết kiệm</h3>
          <p className="text-gray-600 text-sm">Giá cả hợp lý và minh bạch, không phí ẩn</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <a href="/drivers" className="block">
          <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-200 border border-gray-200 hover:border-blue-300">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <span className="text-xl">🚗</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900">Tìm tài xế</h3>
                <p className="text-gray-600 text-sm">Xem danh sách tài xế có sẵn</p>
              </div>
              <span className="text-blue-600">→</span>
            </div>
          </div>
        </a>
        
        <a href="/history" className="block">
          <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-200 border border-gray-200 hover:border-green-300">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                <span className="text-xl">📋</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900">Lịch sử chuyến</h3>
                <p className="text-gray-600 text-sm">Xem các chuyến đã thực hiện</p>
              </div>
              <span className="text-green-600">→</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
