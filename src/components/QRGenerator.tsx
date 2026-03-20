import { useState, useMemo } from 'react';
import { QR_CONTENT_TYPES, buildQRData, type QRContentType, type QRStyle, DEFAULT_QR_STYLE, QR_PRESETS } from '@/lib/qr-types';
import { useQRCode, useQRHistory } from '@/hooks/useQRCode';
import { Link, Type, Wifi, Mail, Phone, MapPin, MessageSquare, Contact, Share2, Copy, Trash2, Download, Share, Image, Palette } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';

const ICON_MAP: Record<string, React.ElementType> = {
  Link, Type, Wifi, Mail, Phone, MapPin, MessageSquare, Contact, Share2,
};

export default function QRGenerator() {
  const [contentType, setContentType] = useState<QRContentType>('url');
  const [simpleValue, setSimpleValue] = useState('');
  const [fields, setFields] = useState<Record<string, string>>({});
  const [style, setStyle] = useState<QRStyle>({ ...DEFAULT_QR_STYLE });
  const [showCustomize, setShowCustomize] = useState(false);

  const config = QR_CONTENT_TYPES.find(c => c.type === contentType)!;

  const qrData = useMemo(() => {
    if (config.fields) {
      return buildQRData(contentType, '', fields);
    }
    return buildQRData(contentType, simpleValue);
  }, [contentType, simpleValue, fields, config]);

  const { containerRef, download, getBlob } = useQRCode(qrData, style);
  const { addToHistory } = useQRHistory();

  const handleCopy = async () => {
    const blob = await getBlob('png');
    if (blob) {
      try {
        await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
        toast.success('QR copiado al portapapeles');
      } catch {
        toast.error('No se pudo copiar');
      }
    }
  };

  const handleDownload = async (format: 'png' | 'svg' | 'jpeg') => {
    await download(format, 'scanly-qr');
    addToHistory({ type: contentType, data: qrData, style });
    toast.success(`QR descargado como ${format.toUpperCase()}`);
  };

  const handleShare = async () => {
    const blob = await getBlob('png');
    if (blob && navigator.share) {
      const file = new File([blob], 'scanly-qr.png', { type: 'image/png' });
      try {
        await navigator.share({ files: [file], title: 'Mi QR de Scanly' });
      } catch { /* cancelled */ }
    } else {
      toast.info('Usa el botón de descarga');
    }
  };

  const handleClear = () => {
    setSimpleValue('');
    setFields({});
  };

  const handlePreset = (preset: typeof QR_PRESETS[0]) => {
    setStyle(prev => ({ ...prev, ...preset.style }));
    toast.success(`Preset "${preset.name}" aplicado`);
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setStyle(prev => ({ ...prev, logoFile: file }));
  };

  return (
    <section id="generator" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">
            Genera tu <span className="gradient-text">código QR</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Selecciona el tipo de contenido, personaliza el estilo y descarga en alta calidad.
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
                    {ct.label}
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
                          <label className="block text-sm font-medium mb-1.5">{f.label}{f.required && <span className="text-destructive ml-0.5">*</span>}</label>
                          <input
                            type={f.type || 'text'}
                            placeholder={f.placeholder}
                            value={fields[f.key] || ''}
                            onChange={e => setFields(prev => ({ ...prev, [f.key]: e.target.value }))}
                            className="w-full px-4 py-2.5 rounded-xl bg-secondary border border-border text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div>
                      <label className="block text-sm font-medium mb-1.5">{config.label}</label>
                      <input
                        type="text"
                        placeholder={config.placeholder}
                        value={simpleValue}
                        onChange={e => setSimpleValue(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                      />
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              <div className="flex items-center gap-2 mt-4">
                <button onClick={handleClear} className="text-xs text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1">
                  <Trash2 className="w-3 h-3" /> Limpiar
                </button>
                <button onClick={() => navigator.clipboard.writeText(qrData).then(() => toast.success('Datos copiados'))} className="text-xs text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1">
                  <Copy className="w-3 h-3" /> Copiar datos
                </button>
              </div>
            </div>

            {/* Customization toggle */}
            <button
              onClick={() => setShowCustomize(!showCustomize)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-border bg-card hover:bg-secondary transition-colors text-sm font-medium"
            >
              <Palette className="w-4 h-4" />
              {showCustomize ? 'Ocultar personalización' : 'Personalizar estilo'}
            </button>

            {/* Customization panel */}
            <AnimatePresence>
              {showCustomize && (
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
                      <h4 className="text-sm font-semibold mb-3">Presets rápidos</h4>
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
                        <label className="block text-xs font-medium mb-1.5">Color del QR</label>
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
                        <label className="block text-xs font-medium mb-1.5">Color de fondo</label>
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
                            Transparente
                          </label>
                        </div>
                      </div>
                    </div>

                    {/* Dot styles */}
                    <div>
                      <label className="block text-xs font-medium mb-2">Estilo de puntos</label>
                      <div className="flex flex-wrap gap-2">
                        {(['rounded', 'dots', 'classy', 'classy-rounded', 'square', 'extra-rounded'] as const).map(t => (
                          <button
                            key={t}
                            onClick={() => setStyle(s => ({ ...s, dotsType: t }))}
                            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                              style.dotsType === t ? 'gradient-bg text-primary-foreground' : 'bg-secondary border border-border'
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Corner styles */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium mb-2">Esquinas exteriores</label>
                        <div className="flex flex-wrap gap-1.5">
                          {(['dot', 'square', 'extra-rounded'] as const).map(t => (
                            <button
                              key={t}
                              onClick={() => setStyle(s => ({ ...s, cornersSquareType: t }))}
                              className={`px-2.5 py-1 rounded-md text-xs transition-all ${
                                style.cornersSquareType === t ? 'gradient-bg text-primary-foreground' : 'bg-secondary border border-border'
                              }`}
                            >
                              {t}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-medium mb-2">Esquinas interiores</label>
                        <div className="flex flex-wrap gap-1.5">
                          {(['dot', 'square'] as const).map(t => (
                            <button
                              key={t}
                              onClick={() => setStyle(s => ({ ...s, cornersDotType: t }))}
                              className={`px-2.5 py-1 rounded-md text-xs transition-all ${
                                style.cornersDotType === t ? 'gradient-bg text-primary-foreground' : 'bg-secondary border border-border'
                              }`}
                            >
                              {t}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Error correction */}
                    <div>
                      <label className="block text-xs font-medium mb-2">Corrección de errores</label>
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
                      <label className="block text-xs font-medium mb-2">Margen: {style.margin}px</label>
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
                      <label className="block text-xs font-medium mb-2">Logo central</label>
                      <div className="flex items-center gap-3">
                        <label className="px-4 py-2 rounded-xl bg-secondary border border-border text-xs font-medium cursor-pointer hover:bg-muted transition-colors inline-flex items-center gap-1.5">
                          <Image className="w-3.5 h-3.5" />
                          Subir logo
                          <input type="file" accept="image/*" onChange={handleLogoUpload} className="hidden" />
                        </label>
                        {style.logoFile && (
                          <>
                            <span className="text-xs text-muted-foreground">{style.logoFile.name}</span>
                            <button onClick={() => setStyle(s => ({ ...s, logoFile: null }))} className="text-xs text-destructive">Quitar</button>
                          </>
                        )}
                      </div>
                      {style.logoFile && (
                        <div className="mt-2">
                          <label className="block text-xs text-muted-foreground mb-1">Tamaño: {Math.round(style.logoSize * 100)}%</label>
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
          </div>

          {/* Right: QR Preview */}
          <div className="lg:sticky lg:top-24 space-y-4">
            <div className="bg-card rounded-2xl border border-border p-8 shadow-elevated flex flex-col items-center">
              <p className="text-xs font-medium text-muted-foreground mb-4 uppercase tracking-wider">Vista previa</p>
              <div
                ref={containerRef}
                className="rounded-xl overflow-hidden"
                style={{ background: style.transparentBg ? 'repeating-conic-gradient(#e5e7eb 0% 25%, transparent 0% 50%) 0 0 / 16px 16px' : undefined }}
              />
            </div>

            {/* Actions */}
            <div className="grid grid-cols-2 gap-2">
              <button onClick={() => handleDownload('png')} className="gradient-bg text-primary-foreground py-2.5 rounded-xl text-sm font-semibold shadow-premium hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-1.5">
                <Download className="w-3.5 h-3.5" /> PNG
              </button>
              <button onClick={() => handleDownload('svg')} className="gradient-bg text-primary-foreground py-2.5 rounded-xl text-sm font-semibold shadow-premium hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-1.5">
                <Download className="w-3.5 h-3.5" /> SVG
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <button onClick={handleCopy} className="py-2.5 rounded-xl text-sm font-medium border border-border bg-card hover:bg-secondary transition-colors inline-flex items-center justify-center gap-1.5">
                <Copy className="w-3.5 h-3.5" /> Copiar
              </button>
              <button onClick={handleShare} className="py-2.5 rounded-xl text-sm font-medium border border-border bg-card hover:bg-secondary transition-colors inline-flex items-center justify-center gap-1.5">
                <Share className="w-3.5 h-3.5" /> Compartir
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
