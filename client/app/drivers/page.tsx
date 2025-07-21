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
    <main className="p-4">
      <h2 className="text-xl font-bold mb-4">Danh sách tài xế</h2>
      {loading ? (
        <p>Đang tải...</p>
      ) : (
        <ul className="space-y-3">
          {drivers.map((driver) => (
            <li
              key={driver.id}
              className="border p-3 rounded shadow flex justify-between"
            >
              <div>
                <p className="font-semibold">{driver.name}</p>
                <p>{driver.phone}</p>
                <p>Khu vực: {driver.location}</p>
              </div>
              <button
                className="bg-green-600 text-white px-3 py-1 rounded"
                onClick={() => bookDriver(driver.id)}
              >
                Đặt chuyến
              </button>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
