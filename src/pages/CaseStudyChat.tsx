import { useI18n } from "@/i18n";
import { CaseStudyView } from "@/components/shared/CaseStudyView";

const CaseStudyChat = () => {
  const { t } = useI18n();
  return <CaseStudyView content={t.caseStudies.chatPlatform} highlightTag="Temporal" />;
};

export default CaseStudyChat;
