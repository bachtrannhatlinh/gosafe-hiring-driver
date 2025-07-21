"use client";

// 📁 src/pages/Booking.tsx
import { sendZaloConfirmation } from '@/services/znsService';
import React from 'react';

function Booking() {
  // Example: get zaloId from search params (adjust as needed)
  // import { useSearchParams } from 'next/navigation';
  // const searchParams = useSearchParams();
  // const zaloId = searchParams.get('zaloId') ?? '';

  const zaloId = ''; // Set zaloId appropriately

  const handleSendZNS = async () => {
    try {
      const result = await sendZaloConfirmation(zaloId, 'Tài xế A', '0901234567');
      console.log('✅ Gửi ZNS thành công:', result);
      alert('Đã gửi tin nhắn xác nhận qua Zalo!');
    } catch (err) {
      alert('Gửi thất bại!');
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">Cảm ơn bạn đã đặt chuyến!</h2>
      <button onClick={handleSendZNS} className="bg-blue-500 text-white px-4 py-2 rounded">
        Gửi tin nhắn xác nhận qua Zalo
      </button>
    </div>
  );
}

export default Booking;
