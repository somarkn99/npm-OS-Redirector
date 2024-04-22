import { useEffect } from 'react';

const useOSRedirect = (androidUrl: string, iosUrl: string, defaultUrl: string) => {
  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor;

    if (/android/i.test(userAgent)) {
      window.location.href = androidUrl;
    } else if (/iPad|iPhone|iPod/.test(userAgent)) {
      window.location.href = iosUrl;
    } else {
      window.location.href = defaultUrl;
    }
  }, [androidUrl, iosUrl, defaultUrl]);
};

export default useOSRedirect;
