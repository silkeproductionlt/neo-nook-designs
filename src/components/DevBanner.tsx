import { useLanguage } from "@/i18n/LanguageContext";

const DevBanner = () => {
  const { t } = useLanguage();
  return (
    <div className="fixed top-0 left-0 right-0 z-[100] bg-yellow-400 text-black text-xs font-medium uppercase tracking-[0.12em] text-center py-2 px-4">
      {t.devBanner?.text || "Website in development — some features may be unavailable."}
    </div>
  );
};

export default DevBanner;
