"use client";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

const DiscoverOffer = () => {
  const pathname = usePathname();
  const isAboutUsRoute = pathname === "/about-us";

  const [isLoading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
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
    const payload = {
      email: email,
    };
    const finalData = {
      mailOptions: {
        subject: "DMlearning - Email form",
        text: payload,
      },
    };

    try {
      const response = await axios.post("/api", finalData);
      if (email && response?.status === 200) {
        setLoading(false);
        setEmail("");
        setSuccessMessage(response?.data?.message);
        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setLoading(false);
    }
  };

  return (
    <section
      className={`max-lg:py-10 ${
        isAboutUsRoute 
          ? "bg-[radial-gradient(circle,#f4e5fa,#ffffff_40%,#f4e5fa)]" 
          : "bg-[color:var(--discover-bg)]"
      }`}
      style={{ '--discover-bg': '#5751e1' } as React.CSSProperties}
    >
      <div className="mx-auto max-w-[1440px] px-4">
        <div className="flex pt-[50px] max-lg:pt-0 max-lg:max-w-[500px] max-lg:mx-auto">
          <div className="w-[30%] -mb-[5px] max-lg:hidden">
            <Image
              src={
                isAboutUsRoute ? "/stay-ahead-curve.png" : "/discover-offer.png"
              }
              alt="discover"
              width={500}
              loading="lazy"
              height={300}
            />
          </div>
          <div className="w-[70%] content-center max-lg:w-full max-lg:text-center">
            {isAboutUsRoute ? (
              <>
                <h2 className="text-black text-4xl max-md:text-[28px]">
                  Want To Stay Ahead Of The Curve?
                </h2>
                <p className="text-black pb-[15px]">
                  Get the latest updates on study materials, trends and more!
                </p>
              </>
            ) : (
              <>
                <h2 className="text-white text-4xl max-md:text-[28px]">Discover What We Offer</h2>
                <p className="text-white py-[15px]">
                  Enter your email and we&apos;ll share you some samples
                </p>
              </>
            )}

            <div className="w-4/5 max-lg:w-full">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }}
                className="flex items-center gap-8 max-lg:flex-col"
              >
                <div className="relative w-full">
                  <input
                    type="email"
                    placeholder="Type Your E-Mail"
                    value={email}
                    className="w-full border border-[color:var(--discover-input-border)] bg-[color:var(--discover-input-bg)] rounded-[50px] text-white text-base py-[18px] px-5 leading-[1.4] h-[60px] outline-none transition-colors duration-300 focus:border-white focus:shadow-[0_0_5px_rgba(255,255,255,0.5)] placeholder:text-white placeholder:opacity-50"
                    style={{ '--discover-input-bg': '#4a44d1', '--discover-input-border': '#433ec2' } as React.CSSProperties}
                    onChange={(e) => {
                      setEmail(e?.target?.value);
                      if (errorMessage) setErrorMessage("");
                    }}
                  />
                  {errorMessage && (
                    <p className="text-[color:var(--error-color)] absolute top-[calc(100%+10px)] m-0" style={{ '--error-color': '#ff1d1d' } as React.CSSProperties}>{errorMessage}</p>
                  )}
                  {successMessage && (
                    <p className="text-[color:var(--success-color)] absolute top-[calc(100%+10px)] m-0" style={{ '--success-color': '#2cd72c' } as React.CSSProperties}>{successMessage}</p>
                  )}
                </div>
                <button
                  type="submit"
                  className="cursor-pointer border-none rounded-[50px] text-white px-[34px] py-4 text-base font-semibold transition-all duration-300 bg-orange-500 hover:shadow-none hover:text-white flex-shrink-0"
                  style={{ minWidth: "200px" }}
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
