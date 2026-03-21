import { useState, useMemo, useCallback, useEffect, useRef } from 'react';
import { QR_CONTENT_TYPES, buildQRData, type QRContentType, type QRStyle, DEFAULT_QR_STYLE, QR_PRESETS } from '@/lib/qr-types';
import { useQRCode, useQRHistory } from '@/hooks/useQRCode';
import { validateQRInput } from '@/lib/validation';
import { useI18n } from '@/lib/i18n';
import { Link, Type, Wifi, Mail, Phone, MapPin, MessageSquare, Contact, Share2, Copy, Trash2, Download, Share, Image, Palette, QrCode, Sparkles, Clock, RotateCcw, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

const ICON_MAP: Record<string, React.ElementType> = {
  Link, Type, Wifi, Mail, Phone, MapPin, MessageSquare, Contact, Share2,
};

const CONTENT_TYPE_KEYS: Record<QRContentType, string> = {
  url: 'ct.url', text: 'ct.text', wifi: 'ct.wifi', email: 'ct.email',
  phone: 'ct.phone', location: 'ct.location', sms: 'ct.sms',
  vcard: 'ct.vcard', social: 'ct.social',
};

const FIELD_LABEL_KEYS: Record<string, string> = {
  ssid: 'field.ssid', password: 'field.password', encryption: 'field.encryption',
  to: 'field.to', subject: 'field.subject', body: 'field.body',
  lat: 'field.lat', lng: 'field.lng', phone: 'field.phone',
  message: 'field.message', name: 'field.name', email: 'field.email', org: 'field.org',
};

export default function QRGenerator() {
  const { t } = useI18n();
  const [contentType, setContentType] = useState<QRContentType>('url');
  const [simpleValue, setSimpleValue] = useState('');
  const [fields, setFields] = useState<Record<string, string>>({});
  const [style, setStyle] = useState<QRStyle>({ ...DEFAULT_QR_STYLE });
  const [showCustomize, setShowCustomize] = useState(false);
  const [isGenerated, setIsGenerated] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [downloadFormat, setDownloadFormat] = useState<'png' | 'svg' | 'jpeg'>('png');
  const [showHistory, setShowHistory] = useState(false);

  const config = QR_CONTENT_TYPES.find(c => c.type === contentType)!;

  const qrData = useMemo(() => {
    if (!isGenerated) return '';
    if (config.fields) return buildQRData(contentType, '', fields);
    return buildQRData(contentType, simpleValue);
  }, [contentType, simpleValue, fields, config, isGenerated]);

  const { containerRef, download, getBlob, isReady } = useQRCode(qrData, style);
  const { history, addToHistory, clearHistory } = useQRHistory();

  const handleGenerate = useCallback(() => {
    const result = config.fields
      ? validateQRInput(contentType, '', fields)
      : validateQRInput(contentType, simpleValue);

    if (!result.valid) {
      setValidationError(result.errorKey ? t(result.errorKey) : t('val.fillRequired'));
      return;
    }
    setValidationError(null);
    setIsGenerated(true);
  }, [contentType, simpleValue, fields, config, t]);

  const handleCopy = async () => {
    if (!isGenerated) return;
    const blob = await getBlob('png');
    if (blob) {
      try {
        await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
        toast.success(t('gen.qrCopied'));
      } catch {
        toast.error(t('gen.copyFailed'));
      }
    }
  };

  const handleDownload = async () => {
    if (!isGenerated) return;
    await download(downloadFormat, 'scanly-qr');
    addToHistory({ type: contentType, data: qrData, style });
    toast.success(`${t('gen.downloaded')} ${downloadFormat.toUpperCase()}`);
    setShowDownloadModal(false);
  };

  const handleShare = async () => {
    if (!isGenerated) return;
    const blob = await getBlob('png');
    if (blob && navigator.share) {
      const file = new File([blob], 'scanly-qr.png', { type: 'image/png' });
      try {
        await navigator.share({ files: [file], title: t('dl.shareTitle') });
      } catch { /* cancelled */ }
    } else {
      toast.info(t('gen.shareHint'));
    }
  };

  const handleClear = () => {
    setSimpleValue('');
    setFields({});
    setIsGenerated(false);
    setValidationError(null);
  };

  const handlePreset = (preset: typeof QR_PRESETS[0]) => {
    if (!isGenerated) {
      toast.info(t('gen.customizeDisabled'));
      return;
    }
    setStyle(prev => ({ ...prev, ...preset.style }));
    toast.success(`${t('gen.presetApplied')}: "${preset.name}"`);
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setStyle(prev => ({ ...prev, logoFile: file }));
  };

  const handleReuseHistory = (item: typeof history[0]) => {
    // Restore content type and data
    setContentType(item.type);
    setStyle({ ...item.style });
    // Try to parse back the data into fields or simpleValue
    const cfg = QR_CONTENT_TYPES.find(c => c.type === item.type);
    if (cfg?.fields) {
      // For complex types, we can't easily reverse-parse, just set generated
      setFields({});
      setSimpleValue('');
    } else {
      setSimpleValue(item.data.replace(/^tel:/, ''));
      setFields({});
    }
    setIsGenerated(true);
    setShowHistory(false);
    toast.success(t('hist.reuse'));
  };

  const maxChars = contentType === 'text' ? 500 : undefined;

  return (
    <section id="generator" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">
            {t('gen.title1')} <span className="gradient-text">{t('gen.title2')}</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            {t('gen.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_340px] gap-8 max-w-5xl mx-auto">
          {/* Left: Input + Customization */}
          <div className="space-y-6">
            {/* Content type tabs */}
            <div className="flex flex-wrap gap-2">
              {QR_CONTENT_TYPES.map(ct => {
                const Icon = ICON_MAP[ct.icon] || Link;
                return (
                  <button
                    key={ct.type}
                    onClick={() => { setContentType(ct.type); handleClear(); }}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                      contentType === ct.type
                        ? 'gradient-bg text-primary-foreground shadow-premium'
                        : 'bg-card border border-border hover:bg-secondary'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {t(CONTENT_TYPE_KEYS[ct.type])}
                  </button>
                );
              })}
            </div>

            {/* Input fields */}
            <div className="bg-card rounded-2xl border border-border p-6 shadow-elevated">
              <AnimatePresence mode="wait">
                <motion.div
                  key={contentType}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                >
                  {config.fields ? (
                    <div className="space-y-4">
                      {config.fields.map(f => (
                        <div key={f.key}>
                          <label className="block text-sm font-medium mb-1.5">
                            {t(FIELD_LABEL_KEYS[f.key] || f.key)}
                            {f.required && <span className="text-destructive ml-0.5">*</span>}
                          </label>
                          <input
                            type={f.type || 'text'}
                            placeholder={f.placeholder}
                            value={fields[f.key] || ''}
                            onChange={e => {
                              setFields(prev => ({ ...prev, [f.key]: e.target.value }));
                              setValidationError(null);
                              if (isGenerated) setIsGenerated(false);
                            }}
                            className="w-full px-4 py-2.5 rounded-xl bg-secondary border border-border text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div>
                      <label className="block text-sm font-medium mb-1.5">{t(CONTENT_TYPE_KEYS[contentType])}</label>
                      <input
                        type="text"
                        placeholder={config.placeholder}
                        value={simpleValue}
                        onChange={e => {
                          const val = maxChars ? e.target.value.slice(0, maxChars) : e.target.value;
                          setSimpleValue(val);
                          setValidationError(null);
                          if (isGenerated) setIsGenerated(false);
                        }}
                        className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                      />
                      {maxChars && (
                        <p className="text-xs text-muted-foreground mt-1 text-right">{simpleValue.length}/{maxChars}</p>
                      )}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Validation error */}
              {validationError && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-destructive mt-3 flex items-center gap-1.5"
                >
                  <X className="w-3.5 h-3.5" />
                  {validationError}
                </motion.p>
              )}

              <div className="flex items-center gap-2 mt-4">
                <button onClick={handleClear} className="text-xs text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1">
                  <Trash2 className="w-3 h-3" /> {t('gen.clear')}
                </button>
                <button
                  onClick={() => {
                    const data = config.fields ? buildQRData(contentType, '', fields) : buildQRData(contentType, simpleValue);
                    navigator.clipboard.writeText(data).then(() => toast.success(t('gen.dataCopied')));
                  }}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
                >
                  <Copy className="w-3 h-3" /> {t('gen.copyData')}
                </button>
              </div>
            </div>

            {/* Generate button */}
            <button
              onClick={handleGenerate}
              className="w-full gradient-bg text-primary-foreground py-3.5 rounded-xl text-base font-semibold shadow-premium hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              {isGenerated ? t('gen.regenerate') : t('gen.generate')}
            </button>

            {/* Customization toggle */}
            <button
              onClick={() => {
                if (!isGenerated) {
                  toast.info(t('gen.customizeDisabled'));
                  return;
                }
                setShowCustomize(!showCustomize);
              }}
              className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-border bg-card transition-colors text-sm font-medium ${
                isGenerated ? 'hover:bg-secondary cursor-pointer' : 'opacity-50 cursor-not-allowed'
              }`}
            >
              <Palette className="w-4 h-4" />
              {showCustomize ? t('gen.hideCustomize') : t('gen.customize')}
            </button>

            {/* Customization panel */}
            <AnimatePresence>
              {showCustomize && isGenerated && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="bg-card rounded-2xl border border-border p-6 shadow-elevated space-y-6">
                    {/* Presets */}
                    <div>
                      <h4 className="text-sm font-semibold mb-3">{t('gen.presets')}</h4>
                      <div className="flex flex-wrap gap-2">
                        {QR_PRESETS.map(p => (
                          <button
                            key={p.name}
                            onClick={() => handlePreset(p)}
                            className="px-3 py-1.5 rounded-lg text-xs font-medium border border-border bg-secondary hover:bg-muted transition-colors"
                          >
                            <span className="inline-block w-2.5 h-2.5 rounded-full mr-1.5" style={{ backgroundColor: p.style.dotsColor }} />
                            {p.name}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Colors */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium mb-1.5">{t('gen.qrColor')}</label>
                        <div className="flex items-center gap-2">
                          <input
                            type="color"
                            value={style.dotsColor}
                            onChange={e => setStyle(s => ({ ...s, dotsColor: e.target.value }))}
                            className="w-10 h-10 rounded-lg border border-border cursor-pointer"
                          />
                          <span className="text-xs text-muted-foreground">{style.dotsColor}</span>
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-medium mb-1.5">{t('gen.bgColor')}</label>
                        <div className="flex items-center gap-2">
                          <input
                            type="color"
                            value={style.backgroundColor}
                            onChange={e => setStyle(s => ({ ...s, backgroundColor: e.target.value }))}
                            className="w-10 h-10 rounded-lg border border-border cursor-pointer"
                            disabled={style.transparentBg}
                          />
                          <label className="text-xs flex items-center gap-1.5 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={style.transparentBg}
                              onChange={e => setStyle(s => ({ ...s, transparentBg: e.target.checked }))}
                              className="rounded"
                            />
                            {t('gen.transparent')}
                          </label>
                        </div>
                      </div>
                    </div>

                    {/* Dot styles */}
                    <div>
                      <label className="block text-xs font-medium mb-2">{t('gen.dotsStyle')}</label>
                      <div className="flex flex-wrap gap-2">
                        {(['rounded', 'dots', 'classy', 'classy-rounded', 'square', 'extra-rounded'] as const).map(tp => (
                          <button
                            key={tp}
                            onClick={() => setStyle(s => ({ ...s, dotsType: tp }))}
                            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                              style.dotsType === tp ? 'gradient-bg text-primary-foreground' : 'bg-secondary border border-border'
                            }`}
                          >
                            {tp}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Corner styles */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium mb-2">{t('gen.outerCorners')}</label>
                        <div className="flex flex-wrap gap-1.5">
                          {(['dot', 'square', 'extra-rounded'] as const).map(tp => (
                            <button
                              key={tp}
                              onClick={() => setStyle(s => ({ ...s, cornersSquareType: tp }))}
                              className={`px-2.5 py-1 rounded-md text-xs transition-all ${
                                style.cornersSquareType === tp ? 'gradient-bg text-primary-foreground' : 'bg-secondary border border-border'
                              }`}
                            >
                              {tp}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-medium mb-2">{t('gen.innerCorners')}</label>
                        <div className="flex flex-wrap gap-1.5">
                          {(['dot', 'square'] as const).map(tp => (
                            <button
                              key={tp}
                              onClick={() => setStyle(s => ({ ...s, cornersDotType: tp }))}
                              className={`px-2.5 py-1 rounded-md text-xs transition-all ${
                                style.cornersDotType === tp ? 'gradient-bg text-primary-foreground' : 'bg-secondary border border-border'
                              }`}
                            >
                              {tp}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Error correction */}
                    <div>
                      <label className="block text-xs font-medium mb-2">{t('gen.errorCorrection')}</label>
                      <div className="flex gap-2">
                        {(['L', 'M', 'Q', 'H'] as const).map(l => (
                          <button
                            key={l}
                            onClick={() => setStyle(s => ({ ...s, errorCorrectionLevel: l }))}
                            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                              style.errorCorrectionLevel === l ? 'gradient-bg text-primary-foreground' : 'bg-secondary border border-border'
                            }`}
                          >
                            {l}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Margin slider */}
                    <div>
                      <label className="block text-xs font-medium mb-2">{t('gen.margin')}: {style.margin}px</label>
                      <input
                        type="range"
                        min={0}
                        max={50}
                        value={style.margin}
                        onChange={e => setStyle(s => ({ ...s, margin: Number(e.target.value) }))}
                        className="w-full accent-primary"
                      />
                    </div>

                    {/* Logo upload */}
                    <div>
                      <label className="block text-xs font-medium mb-2">{t('gen.logo')}</label>
                      <div className="flex items-center gap-3">
                        <label className="px-4 py-2 rounded-xl bg-secondary border border-border text-xs font-medium cursor-pointer hover:bg-muted transition-colors inline-flex items-center gap-1.5">
                          <Image className="w-3.5 h-3.5" />
                          {t('gen.uploadLogo')}
                          <input type="file" accept="image/*" onChange={handleLogoUpload} className="hidden" />
                        </label>
                        {style.logoFile && (
                          <>
                            <span className="text-xs text-muted-foreground">{style.logoFile.name}</span>
                            <button onClick={() => setStyle(s => ({ ...s, logoFile: null }))} className="text-xs text-destructive">{t('gen.removeLogo')}</button>
                          </>
                        )}
                      </div>
                      {style.logoFile && (
                        <div className="mt-2">
                          <label className="block text-xs text-muted-foreground mb-1">{t('gen.logoSize')}: {Math.round(style.logoSize * 100)}%</label>
                          <input
                            type="range"
                            min={10}
                            max={50}
                            value={style.logoSize * 100}
                            onChange={e => setStyle(s => ({ ...s, logoSize: Number(e.target.value) / 100 }))}
                            className="w-full accent-primary"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* History toggle */}
            <button
              onClick={() => setShowHistory(!showHistory)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-border bg-card hover:bg-secondary transition-colors text-sm font-medium"
            >
              <Clock className="w-4 h-4" />
              {t('hist.title')} ({history.length})
            </button>

            {/* History panel */}
            <AnimatePresence>
              {showHistory && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="bg-card rounded-2xl border border-border p-6 shadow-elevated">
                    {history.length === 0 ? (
                      <p className="text-sm text-muted-foreground text-center py-4">{t('hist.empty')}</p>
                    ) : (
                      <>
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-sm font-semibold">{t('hist.title')}</h4>
                          <button onClick={clearHistory} className="text-xs text-destructive hover:underline">
                            {t('hist.clear')}
                          </button>
                        </div>
                        <div className="space-y-3 max-h-64 overflow-y-auto">
                          {history.map(item => (
                            <div key={item.id} className="flex items-center justify-between p-3 rounded-xl bg-secondary/50 border border-border">
                              <div className="flex-1 min-w-0">
                                <p className="text-xs font-medium">{t(CONTENT_TYPE_KEYS[item.type])}</p>
                                <p className="text-xs text-muted-foreground truncate">{item.data.slice(0, 40)}</p>
                                <p className="text-[10px] text-muted-foreground/60 mt-0.5">
                                  {new Date(item.createdAt).toLocaleDateString()} {new Date(item.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </p>
                              </div>
                              <button
                                onClick={() => handleReuseHistory(item)}
                                className="ml-3 px-3 py-1.5 rounded-lg text-xs font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors inline-flex items-center gap-1"
                              >
                                <RotateCcw className="w-3 h-3" />
                                {t('hist.reuse')}
                              </button>
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right: QR Preview — sticky on desktop, normal flow on mobile */}
          <div className="lg:self-start">
            <div className="lg:sticky lg:top-24 space-y-4">
              <div className="bg-card rounded-2xl border border-border p-8 shadow-elevated flex flex-col items-center">
                <p className="text-xs font-medium text-muted-foreground mb-4 uppercase tracking-wider">{t('gen.preview')}</p>

                <div className="relative w-[300px] h-[300px]">
                  {/* QR container - always mounted, animated on change */}
                  <motion.div
                    key={isGenerated ? `${qrData}-${style.dotsColor}-${style.dotsType}-${style.backgroundColor}-${style.transparentBg}-${style.cornersSquareType}-${style.cornersDotType}-${style.margin}-${style.errorCorrectionLevel}` : 'empty'}
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="w-full h-full"
                  >
                    <div
                      ref={containerRef}
                      className={`rounded-xl overflow-hidden w-full h-full ${isGenerated ? '' : 'invisible'}`}
                      style={{ background: isGenerated && style.transparentBg ? 'repeating-conic-gradient(#e5e7eb 0% 25%, transparent 0% 50%) 0 0 / 16px 16px' : undefined }}
                    />
                  </motion.div>
                  {/* Placeholder overlay */}
                  {!isGenerated && (
                    <div className="absolute inset-0 rounded-xl border-2 border-dashed border-border flex flex-col items-center justify-center bg-secondary/30">
                      <QrCode className="w-20 h-20 text-muted-foreground/20 mb-4" />
                      <p className="text-sm font-medium text-muted-foreground">{t('gen.placeholder')}</p>
                      <p className="text-xs text-muted-foreground/60 mt-1 text-center px-4">{t('gen.placeholderHint')}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Actions */}
              <div className="grid grid-cols-1 gap-2">
                <button
                  onClick={() => isGenerated && setShowDownloadModal(true)}
                  disabled={!isGenerated}
                  className={`gradient-bg text-primary-foreground py-2.5 rounded-xl text-sm font-semibold shadow-premium inline-flex items-center justify-center gap-1.5 transition-all ${
                    isGenerated ? 'hover:opacity-90' : 'opacity-40 cursor-not-allowed'
                  }`}
                >
                  <Download className="w-3.5 h-3.5" /> {t('gen.download')}
                </button>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={handleCopy}
                  disabled={!isGenerated}
                  className={`py-2.5 rounded-xl text-sm font-medium border border-border bg-card inline-flex items-center justify-center gap-1.5 transition-colors ${
                    isGenerated ? 'hover:bg-secondary' : 'opacity-40 cursor-not-allowed'
                  }`}
                >
                  <Copy className="w-3.5 h-3.5" /> {t('gen.copy')}
                </button>
                <button
                  onClick={handleShare}
                  disabled={!isGenerated}
                  className={`py-2.5 rounded-xl text-sm font-medium border border-border bg-card inline-flex items-center justify-center gap-1.5 transition-colors ${
                    isGenerated ? 'hover:bg-secondary' : 'opacity-40 cursor-not-allowed'
                  }`}
                >
                  <Share className="w-3.5 h-3.5" /> {t('gen.share')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Download Modal */}
      <Dialog open={showDownloadModal} onOpenChange={setShowDownloadModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{t('dl.title')}</DialogTitle>
            <DialogDescription>{t('dl.format')}</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 pt-2">
            <div className="flex gap-2">
              {(['png', 'jpeg', 'svg'] as const).map(fmt => (
                <button
                  key={fmt}
                  onClick={() => setDownloadFormat(fmt)}
                  className={`flex-1 py-3 rounded-xl text-sm font-semibold transition-all ${
                    downloadFormat === fmt
                      ? 'gradient-bg text-primary-foreground shadow-premium'
                      : 'bg-secondary border border-border hover:bg-muted'
                  }`}
                >
                  {fmt.toUpperCase()}
                </button>
              ))}
            </div>

            <div className="flex gap-2">
              <button
                onClick={handleDownload}
                className="flex-1 gradient-bg text-primary-foreground py-3 rounded-xl text-sm font-semibold shadow-premium hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-1.5"
              >
                <Download className="w-4 h-4" />
                {t('dl.confirm')}
              </button>
              <button
                onClick={handleShare}
                className="px-4 py-3 rounded-xl text-sm font-medium border border-border bg-card hover:bg-secondary transition-colors inline-flex items-center justify-center gap-1.5"
              >
                <Share className="w-4 h-4" />
                {t('gen.share')}
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
