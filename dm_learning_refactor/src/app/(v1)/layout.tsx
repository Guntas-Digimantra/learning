import '../globals.css';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

export default function V1Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
