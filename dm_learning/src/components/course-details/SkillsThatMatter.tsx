import React from 'react';

export interface SkillItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface SkillsThatMatterProps {
  titleStart: string;
  titleHighlight: string;
  titleEnd: string;
  items: SkillItem[];
}

const SkillsThatMatter: React.FC<SkillsThatMatterProps> = ({
  titleStart,
  titleHighlight,
  titleEnd,
  items,
}) => {
  return (
    <section className="skills-matter-section">
      <div className="dml-container">
        <h2 className="skills-matter-title">
          {titleStart} <span>{titleHighlight}</span> {titleEnd}
        </h2>

        <div className="skills-matter-grid">
          {items.map((item, index) => (
            <div key={index} className="skill-matter-card">
              <div className="skill-matter-icon">
                {item.icon}
              </div>
              <h3 className="skill-matter-card-title">{item.title}</h3>
              <p className="skill-matter-card-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsThatMatter;
