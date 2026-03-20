import { useEffect, useRef, useCallback, useState } from 'react';
import QRCodeStyling from 'qr-code-styling';
import type { QRStyle, QRHistoryItem, QRContentType } from '@/lib/qr-types';
import { DEFAULT_QR_STYLE } from '@/lib/qr-types';

export function useQRCode(data: string, style: QRStyle = DEFAULT_QR_STYLE) {
  const qrRef = useRef<QRCodeStyling | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    qrRef.current = new QRCodeStyling({
      width: 300,
      height: 300,
      data: data || 'https://scanly.app',
      dotsOptions: {
        color: style.dotsColor,
        type: style.dotsType,
      },
      backgroundOptions: {
        color: style.transparentBg ? 'transparent' : style.backgroundColor,
      },
      cornersSquareOptions: {
        type: style.cornersSquareType,
        color: style.dotsColor,
      },
      cornersDotOptions: {
        type: style.cornersDotType,
        color: style.dotsColor,
      },
      margin: style.margin,
      qrOptions: {
        errorCorrectionLevel: style.errorCorrectionLevel,
      },
      imageOptions: {
        crossOrigin: 'anonymous',
        margin: 4,
        imageSize: style.logoSize,
      },
    });

    if (containerRef.current) {
      containerRef.current.innerHTML = '';
      qrRef.current.append(containerRef.current);
    }
    setIsReady(true);

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, []);

  useEffect(() => {
    if (!qrRef.current) return;
    
    const logoUrl = style.logoFile ? URL.createObjectURL(style.logoFile) : undefined;

    qrRef.current.update({
      data: data || 'https://scanly.app',
      dotsOptions: {
        color: style.dotsColor,
        type: style.dotsType,
      },
      backgroundOptions: {
        color: style.transparentBg ? 'transparent' : style.backgroundColor,
      },
      cornersSquareOptions: {
        type: style.cornersSquareType,
        color: style.dotsColor,
      },
      cornersDotOptions: {
        type: style.cornersDotType,
        color: style.dotsColor,
      },
      margin: style.margin,
      qrOptions: {
        errorCorrectionLevel: style.errorCorrectionLevel,
      },
      image: logoUrl || undefined,
      imageOptions: {
        crossOrigin: 'anonymous',
        margin: 4,
        imageSize: style.logoSize,
      },
    });

    return () => {
      if (logoUrl) URL.revokeObjectURL(logoUrl);
    };
  }, [data, style]);

  const download = useCallback(async (format: 'png' | 'svg' | 'jpeg', name = 'scanly-qr') => {
    if (!qrRef.current) return;
    await qrRef.current.download({ name, extension: format });
  }, []);

  const getBlob = useCallback(async (format: 'png' | 'svg' | 'jpeg' = 'png'): Promise<Blob | null> => {
    if (!qrRef.current) return null;
    const raw = await qrRef.current.getRawData(format);
    if (!raw) return null;
    return raw as unknown as Blob;
  }, []);

  return { containerRef, download, getBlob, isReady };
}

const HISTORY_KEY = 'scanly-qr-history';

export function useQRHistory() {
  const [history, setHistory] = useState<QRHistoryItem[]>(() => {
    try {
      const stored = localStorage.getItem(HISTORY_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const addToHistory = useCallback((item: Omit<QRHistoryItem, 'id' | 'createdAt'>) => {
    const newItem: QRHistoryItem = {
      ...item,
      id: crypto.randomUUID(),
      createdAt: Date.now(),
    };
    setHistory(prev => {
      const updated = [newItem, ...prev].slice(0, 20);
      localStorage.setItem(HISTORY_KEY, JSON.stringify(updated));
      return updated;
    });
  }, []);

  const clearHistory = useCallback(() => {
    setHistory([]);
    localStorage.removeItem(HISTORY_KEY);
  }, []);

  return { history, addToHistory, clearHistory };
}
