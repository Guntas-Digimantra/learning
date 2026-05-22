"use client";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import "/public/css/home-page.css";

const DiscoverOffer = () => {
  const pathname = usePathname();
  const isAboutUsRoute = pathname === '/about-us' || pathname === '/v2/about-us';

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
      className={`discover-offer-section ${
        isAboutUsRoute ? "aboutus-section-background" : ""
      }`}
    >
      <div className="dml-container">
        <div className="discover-content-left">
          <div className="discover-image">
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
          <div className="discover-content">
            {isAboutUsRoute ? (
              <>
                <h2 className="stay-ahead-curve-title">
                  Want To Stay Ahead Of The Curve?
                </h2>
                <p className="stay-ahead-curve-para">
                  Get the latest updates on study materials, trends and more!
                </p>
              </>
            ) : (
              <>
                <h2>Discover What We Offer</h2>
                <p className="discover-para">
                  Enter your email and we&apos;ll share you some samples
                </p>
              </>
            )}

            <div className="newsletter__form">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }}
              >
                <div className="email-container">
                  <input
                    type="email"
                    placeholder="Type Your E-Mail"
                    value={email}
                    className="discover-input"
                    onChange={(e) => {
                      setEmail(e?.target?.value);
                      if (errorMessage) setErrorMessage("");
                    }}
                  />
                  {errorMessage && (
                    <p className="error-message">{errorMessage}</p>
                  )}
                  {successMessage && (
                    <p className="success-message">{successMessage}</p>
                  )}
                </div>
                <button
                  type="submit"
                  className="dml-button"
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
