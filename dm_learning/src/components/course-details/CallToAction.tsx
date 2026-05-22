import React from "react";
import Link from "@/components/ui/link";

interface CallToActionProps {
  title: React.ReactNode;
  description: string;
  backgroundColor?: string;
  boxBackground?: string; // Color or Image URL
}

const CallToAction: React.FC<CallToActionProps> = ({
  title,
  description,
  backgroundColor = "#FFF6EA",
  boxBackground = "#FFFFFF",
}) => {
  return (
    <section className="cta-section" style={{ backgroundColor }}>
      <div className="dml-container">
        <div
          className="cta-box"
          style={{
            background: boxBackground.startsWith("url")
              ? `${boxBackground} center/cover no-repeat`
              : boxBackground,
          }}
        >
          <div className="cta-content">
            <h2 className="cta-title">{title}</h2>
            <p className="cta-description">{description}</p>
             <button className="dml-button course-included-btn" style={{marginTop:'20px'}}><Link href='/student-enrollment'>Get Started</Link></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
