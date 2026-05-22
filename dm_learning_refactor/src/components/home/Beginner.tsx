// "use client";
// import { useTypewriterOnScroll } from "../lib/Typewriter";
// import Image from "next/image";

// const Beginner = () => {
//   const fullText = "Learning that gets you Hired";
//   const { sectionRef, displayedText } = useTypewriterOnScroll(fullText);
//   return (
//     <section className="dml-container" ref={sectionRef}>
//       <div className="beginner">
//         <div className="beginner-text">
//           <h2>
//             {displayedText.endsWith("Hired") ? (
//               <>
//                 {displayedText.slice(0, -5)}<br/>
//                 <span className="orange-letter">Hired</span>
//               </>
//             ) : (
//               displayedText
//             )}
//           </h2>
//         </div>
//         <div className="beginner-image">
//           <Image
//             src="/TV.png"
//             alt="youtube-thumbnail"
//             width={598}
//             height={336}
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Beginner;
