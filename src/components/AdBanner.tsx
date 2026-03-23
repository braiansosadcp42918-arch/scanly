import { useEffect, useRef } from 'react';

interface AdBannerProps {
  className?: string;
  slot?: string;
  format?: 'auto' | 'horizontal' | 'vertical' | 'rectangle';
  responsive?: boolean;
}

/* Ad Slot — Google AdSense responsive ad unit */
export default function AdBanner({
  className = '',
  slot = '',
  format = 'auto',
  responsive = true,
}: AdBannerProps) {
  const adRef = useRef<HTMLModElement>(null);
  const pushed = useRef(false);

  useEffect(() => {
    if (pushed.current) return;
    try {
      const w = window as any;
      if (w.adsbygoogle && adRef.current) {
        w.adsbygoogle.push({});
        pushed.current = true;
      }
    } catch {
      // AdSense not loaded yet — ad slot will remain empty
    }
  }, []);

  return (
    /* Ad Slot container */
    <div className={`w-full flex items-center justify-center ${className}`}>
      <div className="w-full max-w-4xl">
        <ins
          ref={adRef}
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"   /* TODO: Replace with your AdSense publisher ID */
          data-ad-slot={slot || 'XXXXXXXXXX'}         /* TODO: Replace with your ad slot ID */
          data-ad-format={format}
          data-full-width-responsive={responsive ? 'true' : 'false'}
        />
      </div>
    </div>
  );
}
