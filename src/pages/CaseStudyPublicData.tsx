import { useI18n } from "@/i18n";
import { CaseStudyView } from "@/components/shared/CaseStudyView";

const CaseStudyPublicData = () => {
  const { t } = useI18n();
  return <CaseStudyView content={t.caseStudies.publicData} highlightTag="FastAPI" />;
};

export default CaseStudyPublicData;
