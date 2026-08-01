import { useLanguage } from "@/i18n/LanguageContext";

const NoticeBar = () => {
  const { t } = useLanguage();

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-9 bg-warning text-warning-foreground border-b border-warning-foreground/10 flex items-center">
      <div className="container mx-auto px-6 flex items-center justify-center gap-2.5">
        <span className="w-1.5 h-1.5 rounded-full bg-warning-foreground/80 animate-pulse" />
        <span className="text-[11px] uppercase tracking-[0.16em]">
          {t.notice.message}
        </span>
      </div>
    </div>
  );
};

export default NoticeBar;
