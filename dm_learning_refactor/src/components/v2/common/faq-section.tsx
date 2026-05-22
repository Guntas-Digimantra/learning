'use client';

import React, { useState } from 'react';
import { Tabs } from '../ui/tabs';
import ContainerSection from './container-section';
import { FAQ_DATA, QAItem } from '@/services/data/app-data';
import { CircleMinus, CirclePlus } from 'lucide-react';
import SplitText from '@/components/gsap/split-text';
import SectionReveal from '@/components/gsap/section-reveal';

type FaqAccordionProps = {
  data: QAItem;
  activeQuestionId: number | null;
  setActiveQuestionId: React.Dispatch<React.SetStateAction<number | null>>;
};

const FaqAccordion = ({ data, activeQuestionId, setActiveQuestionId }: FaqAccordionProps) => {
  const isActive = activeQuestionId === data.id;
  return (
    <div className="border-b group hover:border-primary max-w-208 mx-auto">
      <button
        onClick={() => setActiveQuestionId((activeId) => (activeId === data.id ? null : data.id))}
        className="p-5 w-full flex justify-between items-center group-hover:text-primary"
        // className={`faq-button ${openQuestionId === item.id ? 'button-highlight' : ''}`}
      >
        <span className="text-lg font-medium text-start">{data.question}</span>
        <span>
          {isActive ? (
            <CircleMinus className="text-primary/50 group-hover:text-primary" />
          ) : (
            <CirclePlus className="text-primary/50 group-hover:text-primary" />
          )}
        </span>
      </button>
      {isActive && (
        <p
          className="px-5 pb-5 text-text-tertiary [&_a]:text-primary [&_a]:font-semibold"
          dangerouslySetInnerHTML={{ __html: data.answer }}
        />
      )}
    </div>
  );
};

export default function FaqSection() {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  return (
    <ContainerSection className="mx-auto bg-white">
      <SplitText animation="typewriter">
        <h3 className="section-heading mb-4">Frequently Asked Questions</h3>
      </SplitText>
      <SectionReveal>
        <Tabs
          defaultValue={FAQ_DATA[0].value}
          items={FAQ_DATA.map((item) => ({
            ...item,
            content: ({}) =>
              item.data?.map((quest) => (
                <FaqAccordion
                  key={quest.id}
                  activeQuestionId={activeQuestion}
                  data={quest}
                  setActiveQuestionId={setActiveQuestion}
                />
              )),
          }))}
          tabHeaderClassName="mb-8 max-w-178 justify-center mx-auto"
          onTabChange={() => setActiveQuestion(null)}
        />
      </SectionReveal>
    </ContainerSection>
  );
}
