import Image from 'next/image';

const DiscountPage = () => {
  return (
    <section className="discount-page-section">
      <div className="dml-container">
        <div className="discount-page-content">
          <div className="discount-page-content-left">
            <h2>Big Discounts for Bigger Dreams</h2>
            <p>
              We&apos;re offering exclusive discounts of up to 30% — so you can invest in your future without the
              financial stress.
            </p>
            <div className="discount-btn">
              <button className="dml-button">Avail Now</button>
            </div>
          </div>
          <div className="discount-page-content-right">
            <Image src="/discounted-img.webp" alt="image with discount offer on it" width={746} height={511} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscountPage;
