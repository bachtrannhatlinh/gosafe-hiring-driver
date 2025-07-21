'use client';

import { useEffect, useState } from 'react';
import api from '@/lib/api';
import { useUserStore } from '@/store/user';
import { useRouter } from 'next/navigation';

export default function HistoryPage() {
  const [history, setHistory] = useState<any[]>([]);
  const { zaloId } = useUserStore();
  const router = useRouter();

  useEffect(() => {
    // Tạm comment để test chức năng history
    // if (!zaloId) {
    //   router.push('/');
    //   return;
    // }

    const userIdToUse = zaloId || 'test-user-id'; // Dùng ID test khi chưa đăng nhập
    
    api.get(`/bookings/${userIdToUse}`).then((res) => {
      setHistory(res.data);
    }).catch((error) => {
      console.error('Lỗi load lịch sử:', error);
    });
  }, []);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
            <span className="text-xl">📋</span>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Lịch sử đặt chuyến</h2>
            <p className="text-gray-600">Xem lại các chuyến đi đã thực hiện</p>
          </div>
        </div>
      </div>

      {/* Content */}
      {history.length === 0 ? (
        <div className="bg-white rounded-xl shadow-sm p-8 text-center">
          <div className="text-6xl mb-4">📭</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Chưa có chuyến nào</h3>
          <p className="text-gray-600 mb-6">Bạn chưa đặt chuyến nào. Hãy bắt đầu với chuyến đầu tiên!</p>
          <a 
            href="/drivers"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            <span className="mr-2">🚗</span>
            Tìm tài xế
          </a>
        </div>
      ) : (
        <div className="space-y-4">
          {history.map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-xl">🚗</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Chuyến #{idx + 1}</h3>
                    <p className="text-sm text-gray-600">ID Tài xế: {item.driverId}</p>
                  </div>
                </div>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                  ✅ Hoàn thành
                </span>
              </div>
              
              <div className="border-t border-gray-200 pt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center text-gray-600">
                    <span className="text-sm mr-2">🕐</span>
                    <span className="text-sm">
                      <strong>Thời gian:</strong> {new Date(item.time).toLocaleString('vi-VN')}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <span className="text-sm mr-2">📍</span>
                    <span className="text-sm">
                      <strong>Trạng thái:</strong> Đã hoàn thành
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
