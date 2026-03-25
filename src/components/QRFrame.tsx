import type { QRFrameType } from '@/lib/qr-types';

interface QRFrameProps {
  type: QRFrameType;
  text: string;
  color: string;
  children: React.ReactNode;
}

export default function QRFrame({ type, text, color, children }: QRFrameProps) {
  if (type === 'none') return <>{children}</>;

  const textColor = color;

  if (type === 'simple') {
    return (
      <div className="flex flex-col items-center">
        <div className="border-2 rounded-lg p-3" style={{ borderColor: color }}>
          {children}
        </div>
        <div
          className="mt-2 px-4 py-1 text-sm font-bold tracking-wide uppercase text-center"
          style={{ color: textColor }}
        >
          {text}
        </div>
      </div>
    );
  }

  if (type === 'rounded') {
    return (
      <div className="flex flex-col items-center">
        <div className="border-[3px] rounded-2xl p-4" style={{ borderColor: color }}>
          {children}
        </div>
        <div
          className="-mt-3 px-5 py-1 rounded-full text-xs font-bold tracking-wider uppercase"
          style={{ backgroundColor: color, color: '#ffffff' }}
        >
          {text}
        </div>
      </div>
    );
  }

  if (type === 'badge') {
    return (
      <div className="flex flex-col items-center">
        {children}
        <div
          className="mt-3 w-full py-2 rounded-xl text-center text-sm font-bold tracking-wide"
          style={{ backgroundColor: color, color: '#ffffff' }}
        >
          {text}
        </div>
      </div>
    );
  }

  if (type === 'modern') {
    return (
      <div className="relative">
        <div className="border-b-4 rounded-xl overflow-hidden" style={{ borderColor: color }}>
          {children}
        </div>
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap">
          <span
            className="px-4 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest shadow-sm"
            style={{ backgroundColor: color, color: '#ffffff' }}
          >
            {text}
          </span>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
