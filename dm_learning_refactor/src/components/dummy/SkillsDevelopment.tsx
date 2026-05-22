import Image from 'next/image';

const skillImage = [
  { text: 'HTML', image: '/html.svg' },
  { text: 'CSS', image: '/css.svg' },
  { text: 'Python', image: '/python.svg' },
  { text: 'React JS', image: '/react.svg' },
  { text: 'Git', image: '/git.svg' },
  { text: 'JavaScript', image: '/javascript.svg' },
  { text: 'Node JS', image: '/node.svg' },
  { text: 'Express JS', image: '/express.svg' },
  { text: 'Mongo DB', image: '/mongo.svg' },
];

const SkillsDevelopment = () => {
  return (
    <section>
      <div className="mx-auto max-w-[1440px] px-[15px]">
        <div className="flex justify-between max-md:flex-col">
          <div>
            <h2 className="pb-[30px]">Skills You&apos;ll Learn</h2>
            <p>This comprehensive course thoroughly covers essential MERN stack developer skills including:</p>
            <div className="grid grid-cols-5 gap-12 py-[60px] max-md:grid-cols-3">
              {skillImage.map((image, index) => (
                <div key={index} className="text-center">
                  <Image src={image.image} alt="skills-logo" height={56} width={56} />
                  <div className="font-semibold text-[#333]">{image.text}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center">
            <Image src="/skill-development.png" alt="skills-image" height={400} width={450} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsDevelopment;
