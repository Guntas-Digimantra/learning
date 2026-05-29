"use client";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

const DiscoverOffer = () => {
  const pathname = usePathname();
  const isAboutUsRoute =
    pathname === "/about-us" || pathname === "/v2/about-us";

  const [isLoading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const isValidEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const handleSubmit = async () => {
    if (!email.trim()) {
      setErrorMessage("Email is required");
      return;
    }
    if (!isValidEmail(email)) {
      setErrorMessage(
        "Please enter a valid email with a domain (e.g., @domain.com)"
      );
      return;
    }
    setErrorMessage("");
    setLoading(true);
    const finalData = {
      mailOptions: {
        subject: "DMlearning - Email form",
        text: { email },
      },
    };

    try {
      const response = await axios.post("/api", finalData);
      if (email && response?.status === 200) {
        setLoading(false);
        setEmail("");
        setSuccessMessage(response?.data?.message);
        setTimeout(() => setSuccessMessage(""), 3000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setLoading(false);
    }
  };

  return (
    <section
      className={`discover-offer-section ${
        isAboutUsRoute
          ? "aboutus-section-background bg-[radial-gradient(circle,#f4e5fa,#ffffff_40%,#f4e5fa)]"
          : "bg-[#5751e1]"
      }`}
    >
      <div className="dml-container">
        <div
          className="discover-content-left flex max-[991px]:mx-auto max-[991px]:max-w-[500px] max-[991px]:flex-col"
          style={{ paddingTop: 50 }}
        >
          <div className="discover-image -mb-[5px] w-[30%] max-[991px]:hidden">
            <Image
              src={
                isAboutUsRoute ? "/stay-ahead-curve.png" : "/discover-offer.png"
              }
              alt="discover"
              width={500}
              unoptimized
              height={300}
            />
          </div>
          <div
            className="discover-content w-[70%] max-[991px]:w-full max-[991px]:pb-[18px] max-[991px]:text-center"
            style={{ alignContent: 'center' }}
          >
            {isAboutUsRoute ? (
              <>
                <h2 className="stay-ahead-curve-title !text-[36px] !text-black">
                  Want To Stay Ahead Of The Curve?
                </h2>
                <p
                  className="stay-ahead-curve-para discover-para !text-black"
                  style={{
                    padding: '0 0 15px',
                    fontFamily: 'var(--font-poppins), sans-serif',
                  }}
                >
                  Get the latest updates on study materials, trends and more!
                </p>
              </>
            ) : (
              <>
                <h2 className="text-[36px] text-white">Discover What We Offer</h2>
                <p
                  className="discover-para py-[15px] text-white"
                  style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
                >
                  Enter your email and we&apos;ll share you some samples
                </p>
              </>
            )}

            <div className="newsletter__form w-[80%] max-[991px]:!w-full">
              <form
                className="flex items-center max-[991px]:flex-col"
                style={{ gap: 30 }}
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }}
              >
                <div className="email-container relative w-full">
                  <input
                    type="email"
                    placeholder="Type Your E-Mail"
                    value={email}
                    className="discover-input h-[60px] w-full rounded-[50px] border border-[#433ec2] bg-[#4a44d1] px-5 py-[18px] text-base leading-[1.4] text-white outline-none transition-[border-color] duration-300 placeholder:text-white/50 focus:border-white focus:shadow-[0_0_5px_rgba(255,255,255,0.5)]"
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errorMessage) setErrorMessage("");
                    }}
                  />
                  {errorMessage && (
                    <p className="error-message absolute top-[calc(100%+10px)] m-0 text-[#ff1d1d]">
                      {errorMessage}
                    </p>
                  )}
                  {successMessage && (
                    <p className="success-message absolute top-[calc(100%+10px)] m-0 text-[#2cd72c]">
                      {successMessage}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="dml-button min-w-[200px] shrink-0 cursor-pointer rounded-full border-0 bg-black px-[34px] py-4 text-base font-semibold leading-6 text-white transition-[linear_0.3s] hover:shadow-none"
                >
                  {isLoading ? "Loading..." : "Start Learning"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverOffer;
