export function getZaloUser(callback: (data: any) => void) {
  if (typeof window !== 'undefined' && (window as any).Zalo) {
    const Zalo = (window as any).Zalo;
    Zalo.getLoginStatus((res: any) => {
      if (res.status === 'connected') {
        callback(res.authResponse);
      } else {
        Zalo.login();
      }
    });
  } else {
    console.warn("Zalo SDK chưa sẵn sàng");
  }
}
