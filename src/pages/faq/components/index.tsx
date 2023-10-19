import { useEffect, useState } from "react";
import Accordion from "../../../components/Accordion";
import TitleHeader from "../../../components/TItleHeader";
import Tabs from "../../../components/Tabs";
import { motion } from "framer-motion";
import {
  GetAllFaqType,
  GetCategoriesFaqType,
  useGetCategoriesPaperLinkQuestions,
} from "../../../api/services/api.service";
import Loader from "../../../components/Loader";

function FaqComponents() {
  const [activeTab, setActiveTab] = useState<number>(1);

  const [activeAccordionId, setActiveAccordionId] = useState<any>(null);
  const [faqsType, setFaqsType] = useState<string>("junologix");

  const { data, isLoading } = useGetCategoriesPaperLinkQuestions(faqsType);

  console.log(data);

  const handleTabClick = (tabId: number) => {
    setActiveTab(tabId);
  };

  const toggleAccordion = (id: number) => {
    if (activeAccordionId === id) {
      setActiveAccordionId(null);
    } else {
      setActiveAccordionId(id);
    }
  };

  useEffect(() => {
    if (activeTab === 1) {
      setFaqsType("junologix");
    } else if (activeTab === 2) {
      setFaqsType("taxio");
    } else if (activeTab === 3) {
      setFaqsType("dataio");
    } else if (activeTab === 4) {
      setFaqsType("scheduleio");
    }
  }, [activeTab, faqsType]);

  if (isLoading && activeTab === 1) return <Loader />;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <TitleHeader title={"Question & Answers"} subTitle={"Home - QnA’s"} />

      <Tabs activeTab={activeTab} handleTabClick={handleTabClick} />
      <div className="mb-20">
        {data &&
          data?.map(({ name, faqs }: GetCategoriesFaqType) => (
            <>
              {faqs.length > 0 && (
                <div className="flex flex-col mt-10 mb-7 mx-40 max-md:mx-5 max-xsm:mx-2">
                  <div className="border-b border-primary w-full pb-1">
                    <h3 className="text-primary">{name}</h3>
                  </div>
                </div>
              )}
              {faqs.length > 0 &&
                faqs?.map(({ answer, question, id }: GetAllFaqType) => (
                  <div className="flex flex-col gap-5 mb-10">
                    <Accordion
                      key={id}
                      open={activeAccordionId === id}
                      title={question}
                      description={answer}
                      toggleOpenAccordion={() => toggleAccordion(id)}
                    />
                  </div>
                ))}
            </>
          ))}
      </div>
    </motion.div>
  );
}

export default FaqComponents;
