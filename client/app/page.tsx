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
    <main className="p-4">
      <h1 className="text-xl font-bold mb-4">Zalo Mini App</h1>
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Đăng nhập với Zalo
      </button>
    </main>
  );
}
