import Image from "next/image";
import Link from "@/components/ui/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-(--white-10) bg-[rgba(18,20,40,.8)] backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-6">
        <Link className="flex items-center" href="#">
          <Image
            src="/8ucate-logo-new.png"
            alt="8ucate logo"
            width={240}
            height={80}
            className="h-[62px] w-auto rounded-md p-px"
          />
        </Link>
        <nav className="flex gap-10 text-base font-medium max-[768px]:hidden">
          <Link href="#details" className="transition-colors duration-200">
            Details
          </Link>
          <Link href="#camps" className="transition-colors duration-200">
            Camps
          </Link>
        </nav>
        <Link
          href="#register"
          className="inline-block shrink-0 rounded-full bg-(--brand) px-6 py-2.5 font-semibold whitespace-nowrap text-white shadow-[0_10px_30px_-10px_var(--brand)] transition-colors duration-200"
        >
          Register Now
        </Link>
      </div>
    </header>
  );
}
