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
    <main className="p-4">
      <h2 className="text-xl font-bold mb-4">Lịch sử đặt chuyến</h2>
      <ul className="space-y-2">
        {history.length === 0 ? (
          <p>Chưa có chuyến nào.</p>
        ) : (
          history.map((item, idx) => (
            <li key={idx} className="border rounded p-2">
              <p>Driver ID: {item.driverId}</p>
              <p>Thời gian: {new Date(item.time).toLocaleString()}</p>
            </li>
          ))
        )}
      </ul>
    </main>
  );
}
