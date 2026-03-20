export default function AdBanner({ className = '' }: { className?: string }) {
  return (
    <div className={`w-full flex items-center justify-center ${className}`}>
      <div className="w-full max-w-3xl bg-secondary/50 border border-border rounded-xl p-4 text-center">
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground/60 block mb-1">Publicidad</span>
        <div className="h-16 md:h-20 flex items-center justify-center text-muted-foreground/40 text-sm">
          Espacio publicitario
        </div>
      </div>
    </div>
  );
}
