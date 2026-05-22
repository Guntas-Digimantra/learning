import Script from 'next/script';
import Link from '@/components/ui/link';
import Image from 'next/image';

interface ThankYouCardProps {
  pixelContentName: string;
  pixelValue: number;
  title: string;
  messages: string[];
}

export default function ThankYouCard({ pixelContentName, pixelValue, title, messages }: ThankYouCardProps) {
  return (
    <>
      <Script id="facebook-pixel" strategy="afterInteractive">
        {`
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');

        fbq('init', '1355450696343267');
        fbq('track', 'PageView');
        fbq('track', 'Lead', {
            content_name: '${pixelContentName}',
            value: ${pixelValue},
            currency: 'INR'
        });
        `}
      </Script>

      <div className="relative flex w-full items-center justify-center overflow-hidden bg-[#282568] px-5 py-10 font-['DM_Sans',sans-serif] text-[#1e1e3a] before:absolute before:inset-0 before:z-[1] before:bg-[url('/ai-masterclass/mainBackground.png')] before:bg-cover before:bg-no-repeat before:opacity-10">
        <div className="relative z-[2] w-full max-w-[480px] overflow-hidden rounded-[14px] bg-white shadow-[0_8px_48px_rgba(40,37,104,0.13)]">
          <div className="flex items-center justify-between border-b-[3px] border-[#fc8b20] bg-white px-7 py-4">
            <Image src="/ai-masterclass/logo.webp" alt="DMLearning" width={120} height={40} className="h-9 w-auto" />
            <span className="h-2.5 w-2.5 animate-[pulse-thank-you_2s_infinite] rounded-full bg-[#fc8b20] shadow-[0_0_0_4px_#fc8b2022]" />
          </div>

          <div className="px-7 py-9 text-center">
            <div className="mb-3 text-[50px]">🎉</div>
            <div className="mb-1.5 font-['DM_Sans',sans-serif] text-[21px] font-black text-[#282568]">{title}</div>
            {messages.map((msg, i) => (
              <p key={i} className="text-[15px] font-bold leading-[1.7] text-[#282568]">
                {msg}
              </p>
            ))}
            <Link
              href="/"
              className="mt-5 inline-block text-xs font-semibold text-[#8080a8] underline"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
