import Icon from '@/components/Icon';

export default function HeroIllustration() {
  return (
    <div className="relative aspect-square w-full max-w-lg mx-auto">
      {/* Background blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-8 left-8 h-64 w-64 rounded-full bg-teal-100 blur-3xl opacity-60" />
        <div className="absolute bottom-8 right-8 h-64 w-64 rounded-full bg-coral-100 blur-3xl opacity-50" />
      </div>

      {/* Main card — document */}
      <div className="absolute left-1/2 top-1/2 w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-white p-6 shadow-card ring-1 ring-mist-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-50 text-teal-500">
              <Icon name="fileText" size={20} />
            </span>
            <div>
              <div className="h-2.5 w-20 rounded-full bg-mist-200" />
              <div className="mt-1.5 h-2 w-14 rounded-full bg-mist-200" />
            </div>
          </div>
          <span className="rounded-lg bg-teal-50 px-2.5 py-1 text-xs font-semibold text-teal-600">
            NIB
          </span>
        </div>
        <div className="mt-5 space-y-2.5">
          {[100, 85, 92, 70].map((w, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-md bg-teal-500 text-white">
                <Icon name="check" size={12} strokeWidth={3} />
              </span>
              <div className="h-2 rounded-full bg-mist-200" style={{ width: `${w}%` }} />
            </div>
          ))}
        </div>
        <div className="mt-5 flex items-center justify-between rounded-2xl bg-mist-100 p-3">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-coral-500 text-white">
              <Icon name="building" size={16} />
            </span>
            <span className="text-xs font-medium text-mist-700">OSS Terdaftar</span>
          </div>
          <span className="text-xs font-semibold text-teal-600">Selesai</span>
        </div>
      </div>

      {/* Floating badge — top left */}
      <div className="absolute -top-2 left-0 flex items-center gap-2 rounded-2xl bg-white p-3 shadow-card ring-1 ring-mist-200 animate-float" style={{ animationDelay: '0.2s' }}>
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-coral-50 text-coral-500">
          <Icon name="calculator" size={18} />
        </span>
        <div>
          <div className="text-xs font-semibold text-mist-900">Coretax</div>
          <div className="text-[10px] text-mist-500">SPT Beres</div>
        </div>
      </div>

      {/* Floating badge — bottom right */}
      <div className="absolute -bottom-2 right-0 flex items-center gap-2 rounded-2xl bg-white p-3 shadow-card ring-1 ring-mist-200 animate-float" style={{ animationDelay: '1.2s' }}>
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-50 text-teal-500">
          <Icon name="shieldCheck" size={18} />
        </span>
        <div>
          <div className="text-xs font-semibold text-mist-900">Legalitas</div>
          <div className="text-[10px] text-mist-500">Terverifikasi</div>
        </div>
      </div>

      {/* Floating badge — mid right */}
      <div className="absolute top-1/3 -right-2 flex items-center gap-2 rounded-2xl bg-white p-3 shadow-card ring-1 ring-mist-200 animate-float" style={{ animationDelay: '0.7s' }}>
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-500 text-white">
          <Icon name="handshake" size={18} />
        </span>
        <div>
          <div className="text-xs font-semibold text-mist-900">Pendampingan</div>
          <div className="text-[10px] text-mist-500">Sampai Selesai</div>
        </div>
      </div>
    </div>
  );
}
