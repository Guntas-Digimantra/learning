import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { Toaster } from "sonner";
import "./styles.css";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });

export const metadata: Metadata = {
  title: "Amit Tiwari - Digital Marketing Program | DMLearning",
  description:
    "Become a Digital Marketing Pro in 6 Months with Amit Tiwari. Join 30k+ alumni.",
};

export default function AmitTiwariLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={dmSans.variable}
      style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
    >
      {children}
      <Toaster position="top-right" richColors expand={false} />
    </div>
  );
}
