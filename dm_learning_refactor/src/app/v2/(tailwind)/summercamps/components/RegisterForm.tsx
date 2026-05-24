"use client";
import { useState } from "react";
import { Icons } from "./Icons";

const inputClass =
  "w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-slate-900";
const labelClass = "mb-1 block text-sm font-semibold text-slate-900";

export default function RegisterForm() {
  const [kids, setKids] = useState([{ id: 1, name: "" }]);

  const addKid = () => {
    setKids((prev) => [...prev, { id: prev.length + 1, name: "" }]);
  };

  const removeKid = (id: number) => {
    setKids((prev) => prev.filter((k) => k.id !== id));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thanks! We will contact you soon.");
  };

  return (
    <div
      id="register"
      className="box-border w-full max-w-full min-w-0 scroll-mt-24 overflow-hidden rounded-3xl bg-white p-8 text-slate-900 shadow-[0_25px_50px_-12px_rgba(0,0,0,.25)] max-[480px]:rounded-2xl max-[480px]:p-5 lg:scroll-mt-[180px]"
    >
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <fieldset
          disabled
          className="m-0 w-full max-w-full min-w-0 border-0 p-0 disabled:cursor-not-allowed [&_button:disabled]:cursor-not-allowed [&_input:disabled]:cursor-not-allowed [&_select:disabled]:cursor-not-allowed"
        >
          <div className="min-w-0">
            <label className={labelClass}>Parent Name *</label>
            <input required placeholder="Parent Name" className={inputClass} />
          </div>
          <div className="min-w-0">
            <label className={`${labelClass} mb-2`}>Kid Name(s) *</label>
            {kids.map((kid, i) => (
              <div key={kid.id} className="mb-2 flex min-w-0 gap-2">
                <input
                  required
                  placeholder={`Kid ${i + 1} Name`}
                  className={`${inputClass} min-w-0 flex-1`}
                />
                {kids.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeKid(kid.id)}
                    className="cursor-pointer rounded-lg bg-slate-100 p-2"
                  >
                    <Icons.X />
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={addKid}
              className="inline-flex cursor-pointer appearance-none items-center gap-2 border-0 bg-transparent p-0 text-sm font-semibold text-(--brand) no-underline hover:underline"
            >
              <Icons.Plus /> Add another kid
            </button>
          </div>
          <div className="min-w-0">
            <label className={labelClass}>Parent Email ID *</label>
            <input type="email" required placeholder="parent@email.com" className={inputClass} />
          </div>
          <div className="grid min-w-0 grid-cols-2 gap-4 max-[768px]:grid-cols-1">
            <div className="min-w-0">
              <label className={labelClass}>Age *</label>
              <select required className={inputClass}>
                <option value="">--Select Age--</option>
                {[10, 11, 12, 13, 14, 15, 16, 17].map((a) => (
                  <option key={a}>{a}</option>
                ))}
              </select>
            </div>
            <div className="min-w-0">
              <label className={labelClass}>Grade *</label>
              <select required className={inputClass}>
                <option value="">--Select Grade--</option>
                {[3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((g) => (
                  <option key={g}>{g}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="grid min-w-0 grid-cols-2 gap-4 max-[768px]:grid-cols-1">
            <div className="min-w-0">
              <label className={labelClass}>City *</label>
              <select required className={inputClass}>
                <option value="">--Select City--</option>
                {[
                  "Mumbai",
                  "Delhi",
                  "Bangalore",
                  "Pune",
                  "Chennai",
                  "Hyderabad",
                  "Kolkata",
                  "Ahmedabad",
                  "Chandigarh",
                  "Mohali",
                  "Other",
                ].map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </div>
            <div className="min-w-0">
              <label className={labelClass}>Phone *</label>
              <input type="tel" required placeholder="Phone" className={inputClass} />
            </div>
          </div>
          <div className="grid min-w-0 grid-cols-2 gap-4 max-[768px]:grid-cols-1">
            <div className="min-w-0">
              <label className={labelClass}>Select Date *</label>
              <input type="date" required className={inputClass} />
            </div>
            <div className="min-w-0">
              <label className={labelClass}>Select Slot *</label>
              <select required className={inputClass}>
                <option value="">Select Slot</option>
                <option>10:00 AM – 12:00 PM</option>
                <option>11:30 AM – 1:30 PM</option>
                <option>2:00 PM – 4:00 PM</option>
                <option>3:30 PM – 5:30 PM</option>
                <option>5:00 PM – 7:00 PM</option>
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="mt-4 w-full cursor-pointer rounded-full border-2 border-(--accent-pink) bg-transparent py-3 text-base font-bold text-(--accent-pink) transition-colors duration-200 hover:bg-(--accent-pink) hover:text-white"
          >
            Enroll Now – ₹699
          </button>

          <p className="mt-3 text-center text-[0.8125rem] text-slate-500">
            Have questions?{" "}
            <a
              href="mailto:learning@digimantra.com"
              className="font-semibold text-(--brand) underline"
            >
              Email us at learning@digimantra.com
            </a>
          </p>
        </fieldset>
      </form>
    </div>
  );
}
