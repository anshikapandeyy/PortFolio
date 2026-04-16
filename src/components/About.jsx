// import about from "../assets/about.jpg";

// const About = ({ darkMode }) => {
//   return (
//     <section
//       id="about"
//       className={`min-h-screen overflow-hidden flex items-center justify-center px-4 sm:px-6 ${
//         darkMode ? "bg-gray-900" : "bg-gray-50"
//       }`}
//     >
//       <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
        
//         <figure
//           data-aos="fade-up"
//           data-aos-delay="300"
//           className="flex flex-wrap justify-center gap-4 relative order-2 lg:order-1"
//         >
//           <div className="relative w-75 h-75 lg:w-96 lg:h-96">
//             <div
//               className="absolute -inset-4 lg:-inset-20 bg-gradient-to-r from-[#f97316] via-[#fb923c] to-[#f59e0b] rotate-12 star-shape z-0"
//               data-aos="zoom-in"
//               data-aos-delay="600"
//             ></div>

//             <img
//               src={about}
//               alt="about"
//               className="absolute inset-0 w-full h-full object-cover z-10 transition-all duration-300"
//               data-aos="zoom-in"
//               data-aos-delay="400"
//             />
//           </div>
//         </figure>

//         <article
//           data-aos="fade-left"
//           data-aos-delay="300"
//           className="text-center lg:text-left relative order-1 lg:order-2"
//         >
//           <header>
//             <h1
//               className="text-3xl sm:text-4xl lg:text-xl xl:text-6xl font-bold mb-4 sm:mb-6 text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text"
//               data-aos="fade-up"
//               data-aos-delay="400"
//             >
//               About Me
//             </h1>
//           </header>

//           <p
//             className={`text-sm sm:text-base lg:text-lg xl:text-lg mb-6 sm:mb-8 leading-relaxed bg-gradient-to-r from-orange-900/10 to-orange-900/5 p-4 sm:p-6 rounded-xl sm:rounded-2xl backdrop-blur-sm ${
//               darkMode ? "text-gray-300" : "text-gray-700"
//             }`}
//             data-aos="fade-up"
//             data-aos-delay="500"
//           >
//             Dedicated Computer Science student with a strong interest in
//             software development and problem solving. Proficient in C++,
//             React.js, and Node.js with experience building modern web
//             applications. Actively practices data structures and algorithms
//             with 600+ problems solved on LeetCode and enjoys developing
//             efficient and scalable solutions.
//           </p>

//           <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
//             <div className="text-center" data-aos="zoom-in" data-aos-delay="600">
//             </div>
//           </div>

//           <button
//             className={`w-full sm:w-auto border-2 border-orange-500 inline-flex items-center justify-center text-white bg-gradient-to-r from-orange-500 to-amber-500 border-0 py-2 px-4 sm:px-6 hover:shadow-[0_0_40px_rgba(255,165,0,0.7)] rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform ${
//               darkMode
//                 ? "text-white bg-orange-500/10"
//                 : "text-gray-800 bg-white/90"
//             }`}
//             data-aos="fade-up"
//             data-aos-delay="800"
//           >
//             Learn More
//           </button>
//         </article>
//       </div>
//     </section>
//   );
// };

// export default About;
const About = ({ darkMode }) => {
  return (
    <section
      id="about"
      className={`min-h-screen flex items-center justify-center px-4 sm:px-6 ${
        darkMode ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <div className="max-w-3xl w-full mx-auto text-center">
        
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text">
          About Me
        </h1>

        {/* Divider */}
        <div className="w-20 h-1 bg-orange-500 mx-auto mb-6 rounded-full"></div>

        {/* Content */}
        <p
          className={`text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8 ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          I'm Anshika Pandey, a B.Tech Computer Science student passionate about
          software development and problem solving. I have strong proficiency in
          C++, React.js, and Node.js, and I enjoy building modern, scalable web
          applications. I actively practice Data Structures and Algorithms and
          have solved 600+ problems on LeetCode, which has strengthened my
          logical thinking and coding skills. I am always eager to learn new
          technologies and build impactful projects.
        </p>

        {/* Button */}
        <button
          className={`border-2 border-orange-500 inline-flex items-center justify-center py-2 px-6 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,165,0,0.6)] ${
            darkMode
              ? "text-white bg-orange-500/10"
              : "text-gray-800 bg-white"
          }`}
        >
          Learn More
        </button>
      </div>
    </section>
  );
};

export default About;
