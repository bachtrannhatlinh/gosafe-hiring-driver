'use client';

import { useUserStore } from '@/store/user';

export default function ProfilePage() {
  const { zaloId, accessToken } = useUserStore();

  return (
    <main className="p-4">
      <h2 className="text-xl font-bold">Thông tin người dùng Zalo</h2>
      <p>Zalo ID: {zaloId}</p>
      <p>Access Token: {accessToken}</p>
    </main>
  );
}
