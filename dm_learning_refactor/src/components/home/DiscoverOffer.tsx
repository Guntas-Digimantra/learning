"use client";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

const DiscoverOffer = () => {
  const pathname = usePathname();
  const isAboutUsRoute = pathname === "/about-us" || pathname === "/v2/about-us";

  const [isLoading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const isValidEmail = (emailValue: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(emailValue);
  };

  const handleSubmit = async () => {
    if (!email.trim()) {
      setErrorMessage("Email is required");
      return;
    }
    if (!isValidEmail(email)) {
      setErrorMessage("Please enter a valid email with a domain (e.g., @domain.com)");
      return;
    }
    setErrorMessage("");
    setLoading(true);
    const payload = { email };
    const finalData = {
      mailOptions: { subject: "DMlearning - Email form", text: payload },
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
      className={
        isAboutUsRoute
          ? "bg-[radial-gradient(circle,#f4e5fa,#ffffff_40%,#f4e5fa)] max-[991px]:py-10"
          : "bg-[#5751e1] max-[991px]:py-10"
      }
    >
      <div className="mx-auto max-w-[1440px] px-[15px]">
        <div className="flex pt-[50px] max-[991px]:mx-auto max-[991px]:max-w-[500px] max-[991px]:flex-col max-[991px]:pt-0">
          <div className="mb-[-5px] w-[30%] max-[991px]:hidden">
            <Image
              src={isAboutUsRoute ? "/stay-ahead-curve.png" : "/discover-offer.png"}
              alt="discover"
              width={500}
              loading="lazy"
              height={300}
            />
          </div>
          <div className="w-[70%] [align-content:center] max-[991px]:w-full max-[991px]:text-center">
            {isAboutUsRoute ? (
              <>
                <h2 className="text-[36px] !text-black max-[767px]:text-[28px]">
                  Want To Stay Ahead Of The Curve?
                </h2>
                <p className="pb-[15px] !text-black">Get the latest updates on study materials, trends and more!</p>
              </>
            ) : (
              <>
                <h2 className="text-[36px] text-white max-[767px]:text-[28px]">Discover What We Offer</h2>
                <p className="py-[15px] text-white">Enter your email and we&apos;ll share you some samples</p>
              </>
            )}

            <div className="w-4/5 max-[991px]:w-full">
              <form
                className="flex items-center gap-8 max-[991px]:flex-col"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }}
              >
                <div className="relative w-full">
                  <input
                    type="email"
                    placeholder="Type Your E-Mail"
                    value={email}
                    className="h-[60px] w-full rounded-full border border-[#433ec2] bg-[#4a44d1] px-5 py-[18px] text-base leading-[1.4] text-white outline-none transition-[border-color] placeholder:opacity-50 focus:border-white focus:shadow-[0_0_5px_rgba(255,255,255,0.5)]"
                    onChange={(e) => {
                      setEmail(e?.target?.value);
                      if (errorMessage) setErrorMessage("");
                    }}
                  />
                  {errorMessage && (
                    <p className="absolute top-[calc(100%+10px)] m-0 text-[#ff1d1d]">{errorMessage}</p>
                  )}
                  {successMessage && (
                    <p className="absolute top-[calc(100%+10px)] m-0 text-[#2cd72c]">{successMessage}</p>
                  )}
                </div>
                <button
                  type="submit"
                  className="inline-flex min-w-[200px] shrink-0 cursor-pointer items-center justify-center rounded-full border-0 bg-black px-[34px] py-4 text-base font-semibold leading-6 text-white no-underline transition-[linear_0.3s] hover:bg-black hover:text-white"
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
