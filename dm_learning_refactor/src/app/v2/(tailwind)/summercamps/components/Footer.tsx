import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-(--white-10) py-10 text-(--foreground)">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-4 px-4">
        <Image
          src="/8ucate-logo-new.png"
          alt="8ucate"
          width={140}
          height={62}
          className="h-16 w-auto rounded-md p-1"
        />
        <p className="text-base text-(--foreground) opacity-80">
          © {new Date().getFullYear()} 8ucate·learning.digimantra.com
        </p>
      </div>
    </footer>
  );
}
