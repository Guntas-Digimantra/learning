import Image from "next/image";
import Link from "@/components/ui/link";
import React from "react";

const GetConnected = () => {
  return (
    <section className="get-connected-section">
      <div className="dml-container">
        <div className="get-connected-content">
          <div className="get-connected-left">
            <Image
              src="/get-connected.png"
              width={700}
              height={514}
              alt="get-connected"
            />
          </div>
          <div className="get-connected-right">
            <h2>Get Certified</h2>
            <p>
              Are you interested in professional networking with other AI
              engineers?
            </p>
            <Link href="/contact" className="microsoft-button-transparent">
              Join Tech Community
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetConnected;
