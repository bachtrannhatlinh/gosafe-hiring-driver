// 📁 src/services/znsService.ts
import axios from 'axios';

export async function sendZaloConfirmation(zaloId: string, driverName: string, driverPhone: string) {
  try {
    const response = await axios.post('/api/zns/send-confirmation', {
      zaloId,
      driverName,
      driverPhone,
    });

    return response.data;
  } catch (error: any) {
    console.error('❌ Gửi ZNS thất bại:', error.response?.data || error.message);
    throw error;
  }
}
