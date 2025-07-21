'use client';

import { useEffect, useState } from 'react';
import api from '@/lib/api';
import { useUserStore } from '@/store/user';
import { useRouter } from 'next/navigation';

interface Driver {
  id: number;
  name: string;
  phone: string;
  location: string;
}

export default function DriversPage() {
  const [drivers, setDrivers] = useState<Driver[]>([]);
  const [loading, setLoading] = useState(true);
  const { zaloId } = useUserStore();
  const router = useRouter();

  useEffect(() => {
    // Tạm comment để test chức năng drivers
    // if (!zaloId) {
    //   router.push('/');
    // }

    api.get('/drivers').then((res) => {
      setDrivers(res.data);
      setLoading(false);
    });
  }, []);

  const bookDriver = (driverId: number) => {
    const payload = {
      zaloId: zaloId || 'test-user-id', // Dùng ID test khi chưa đăng nhập
      driverId,
      time: new Date().toISOString(),
    };

    api.post('/bookings', payload).then(() => {
      alert('✅ Đặt chuyến thành công!');
    }).catch((error) => {
      console.error('Lỗi đặt chuyến:', error);
      alert('❌ Có lỗi xảy ra khi đặt chuyến!');
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
            <span className="text-xl">🚗</span>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Danh sách tài xế</h2>
            <p className="text-gray-600">Chọn tài xế phù hợp cho chuyến đi của bạn</p>
          </div>
        </div>
      </div>

      {/* Content */}
      {loading ? (
        <div className="bg-white rounded-xl shadow-sm p-8">
          <div className="flex flex-col items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent mb-4"></div>
            <span className="text-gray-600">Đang tải danh sách tài xế...</span>
          </div>
        </div>
      ) : drivers.length === 0 ? (
        <div className="bg-white rounded-xl shadow-sm p-8 text-center">
          <div className="text-6xl mb-4">🚫</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Không có tài xế</h3>
          <p className="text-gray-600 mb-6">Hiện tại chưa có tài xế nào trong khu vực của bạn.</p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
            Thử lại
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {drivers.map((driver) => (
            <div
              key={driver.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden"
            >
              {/* Driver Avatar */}
              <div className="bg-blue-500 h-24 flex items-center justify-center relative">
                <div className="bg-white rounded-full h-16 w-16 flex items-center justify-center shadow-md">
                  <span className="text-2xl">👨‍💼</span>
                </div>
                <div className="absolute top-3 right-3 bg-green-500 w-3 h-3 rounded-full border-2 border-white"></div>
              </div>
              
              {/* Driver Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{driver.name}</h3>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                    Online
                  </span>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <span className="text-sm mr-2">📞</span>
                    <span className="text-sm">{driver.phone}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <span className="text-sm mr-2">📍</span>
                    <span className="text-sm">{driver.location}</span>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="flex text-yellow-400 mr-2 text-sm">
                      ⭐⭐⭐⭐⭐
                    </div>
                    <span className="text-sm text-gray-600">(4.8)</span>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-500">Khoảng cách</div>
                    <div className="text-sm font-semibold text-green-600">2.5 km</div>
                  </div>
                </div>

                {/* Book Button */}
                <button
                  className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200 shadow-sm"
                  onClick={() => bookDriver(driver.id)}
                >
                  <span className="flex items-center justify-center">
                    <span className="mr-2">✅</span>
                    Đặt chuyến
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
