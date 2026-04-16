// import instagram from '../assets/instagram.png';
// import youtube from '../assets/youtube.png';
// import github from '../assets/github.png';
// import { DownloadIcon, Mail } from "lucide-react";
// import { FaLinkedin } from "react-icons/fa";
// import hero from '../assets/hero.png';
// import hi from '../assets/hi.png';
// import cv from '../assets/resume.pdf';

// const Hero = ({ darkMode }) => {

//     const socialIcons = [
//         { icon: github, alt: 'Github', link: 'https://github.com/anshikapandeyy', type: "image" },
//         { icon: instagram, alt: 'Instagram', link: 'https://www.instagram.com/_anshyst', type: "image" },
//         { icon: youtube, alt: 'YouTube', link: 'https://www.youtube.com/@ana_pandey_', type: "image" },
//         { icon: FaLinkedin, alt: 'LinkedIn', link: 'https://www.linkedin.com/in/anshikaapandey', type: "icon" }
//     ];

//     const darkTheme = {
//         textPrimary: 'text-white',
//         textSecondary: 'text-gray-300',
//         buttonSecondary: `text-white border-2 border-orange-500 hover:bg-orange-600`,
//         decorativeCircle: 'bg-orange-500 opacity-10'
//     };

//     const lightTheme = {
//         textPrimary: 'text-black',
//         textSecondary: 'text-gray-800',
//         buttonSecondary: `text-gray-900 border-2 border-orange-500 hover:bg-orange-500 hover:text-white`,
//         decorativeCircle: 'bg-orange-400 opacity-20'
//     };

//     const theme = darkMode ? darkTheme : lightTheme;

//     return (
//         <div className='relative overflow-hidden min-h-screen flex flex-col'>

//             <section
//                 id='home'
//                 data-aos='fade-up'
//                 data-aos-delay='250'
//                 className='body-font z-10'
//             >

//                 <div className='container mx-auto flex px-4 sm:px-8 lg:px-14 py-12 lg:py-14 flex-col lg:flex-row items-center justify-between lg:mt-14 mt-14'>

//                     <div className='lg:w-1/2 w-full flex flex-col items-center lg:items-start text-center lg:text-left mb-12 lg:mb-0'>

//                         <div className='flex justify-center lg:justify-start gap-4 sm:gap-6 mb-6 sm:mb-7 w-full'>
//                             {socialIcons.map((social, index) => (
//                                 <a
//                                     key={index}
//                                     href={social.link}
//                                     target='_blank'
//                                     rel="noopener noreferrer"
//                                     className="transform hover:scale-110 transition-transform duration-300"
//                                 >
//                                     {social.type === "image" ? (
//                                         <img
//                                             src={social.icon}
//                                             alt={social.alt}
//                                             className={`w-8 h-8 sm:w-10 sm:h-10 object-contain ${darkMode ? '' : 'filter brightness-75'}`}
//                                         />
//                                     ) : (
//                                         <social.icon className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />
//                                     )}
//                                 </a>
//                             ))}
//                         </div>

//                         <h1
//                             className={`title-font text-3xl sm:text-4xl lg:text-5xl mb-4 font-bold ${theme.textPrimary}`}
//                         >
//                             Hi I am Anshika Pandey
//                         </h1>

//                         <p
//                             className={`mb-6 sm:mb-8 leading-relaxed max-w-md sm:max-w-lg ${theme.textSecondary}`}
//                         >
//                             I am a Computer Science undergraduate at PSIT with a strong interest in software
//                             development and problem solving. I have solved 600+ problems on LeetCode and
//                             enjoy building web applications using React, Node.js, and modern web technologies.
//                             I am passionate about learning new technologies and creating projects that solve
//                             real-world problems.
//                         </p>

//                         <div className='w-full pt-4 sm:pt-6'>
//                             <div className='flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4'>

//                                 <a href={cv} download className='w-full sm:w-auto'>
//                                     <button className='w-full sm:w-auto inline-flex items-center justify-center text-white bg-linear-to-r from-orange-500 to-amber-500 border-0 py-3 px-6 sm:px-8 hover:shadow-[0_0_40px_rgba(255,165,0,0.7)] rounded-full text-base sm:text-lg font-semibold transition-all duration-300'>
//                                         <DownloadIcon className='w-4 h-4 sm:h-5 sm:w-5 mr-2' />
//                                         Download CV
//                                     </button>
//                                 </a>

//                                 <a href="#contact" className='w-full sm:w-auto'>
//                                     <button className={`w-full sm:w-auto inline-flex items-center ${theme.buttonSecondary} justify-center py-3 px-6 sm:px-8 rounded-full text-base sm:text-lg font-semibold transition-all duration-300`}>
//                                         <Mail className='w-4 h-4 sm:w-5 sm:h-5 mr-2' />
//                                         Contact Me
//                                     </button>
//                                 </a>

//                             </div>
//                         </div>
//                     </div>

//                     <div className="lg:w-1/2 w-full max-w-md lg:max-w-lg mt-8 lg:mt-0 flex justify-center">

//                         <div className='relative w-4/5 sm:w-3/4 lg:w-full'>

//                             <div className='relative overflow-hidden'>
//                                 <img
//                                     src={hero}
//                                     alt="Hero"
//                                     className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
//                                 />
//                             </div>

//                             <img
//                                 src={hi}
//                                 alt="hi"
//                                 className="absolute -top-4 sm:top-4 left-6 sm:left-20 w-14 h-14 sm:w-20 sm:h-20 object-contain animate-bounce opacity-90 z-10"
//                             />

//                         </div>
//                     </div>

//                 </div>

//                 <div className={`absolute -top-20 -left-20 w-40 h-40 sm:w-64 sm:h-64 ${theme.decorativeCircle} rounded-full blur-3xl opacity-10 animate-pulse hidden sm:block`}></div>

//             </section>

//         </div>
//     )
// }

// export default Hero;
import instagram from '../assets/instagram.png';
import youtube from '../assets/youtube.png';
import github from '../assets/github.png';
import { DownloadIcon, Mail } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import cv from '../assets/resume.pdf';

const Hero = ({ darkMode }) => {

    const socialIcons = [
        { icon: github, alt: 'Github', link: 'https://github.com/anshikapandeyy', type: "image" },
        { icon: instagram, alt: 'Instagram', link: 'https://www.instagram.com/_anshyst', type: "image" },
        { icon: youtube, alt: 'YouTube', link: 'https://www.youtube.com/@ana_pandey_', type: "image" },
        { icon: FaLinkedin, alt: 'LinkedIn', link: 'https://www.linkedin.com/in/anshikaapandey', type: "icon" }
    ];

    const darkTheme = {
        textPrimary: 'text-white',
        textSecondary: 'text-gray-300',
        buttonSecondary: `text-white border-2 border-orange-500 hover:bg-orange-600`,
        decorativeCircle: 'bg-orange-500 opacity-10'
    };

    const lightTheme = {
        textPrimary: 'text-black',
        textSecondary: 'text-gray-800',
        buttonSecondary: `text-gray-900 border-2 border-orange-500 hover:bg-orange-500 hover:text-white`,
        decorativeCircle: 'bg-orange-400 opacity-20'
    };

    const theme = darkMode ? darkTheme : lightTheme;

    return (
        <div className='relative overflow-hidden min-h-screen flex flex-col'>

            <section
                id='home'
                data-aos='fade-up'
                data-aos-delay='250'
                className='body-font z-10 flex items-center justify-center pt-20 sm:pt-24 lg:pt-28'
            >

                <div className='max-w-3xl w-full mx-auto px-4 sm:px-8 py-16 text-center'>

                    {/* Social Icons */}
                    <div className='flex justify-center gap-4 sm:gap-6 mb-6'>
                        {socialIcons.map((social, index) => (
                            <a
                                key={index}
                                href={social.link}
                                target='_blank'
                                rel="noopener noreferrer"
                                className="transform hover:scale-110 transition-transform duration-300"
                            >
                                {social.type === "image" ? (
                                    <img
                                        src={social.icon}
                                        alt={social.alt}
                                        className={`w-8 h-8 sm:w-10 sm:h-10 object-contain ${darkMode ? '' : 'filter brightness-75'}`}
                                    />
                                ) : (
                                    <social.icon className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />
                                )}
                            </a>
                        ))}
                    </div>

                    {/* Heading */}
                    <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 ${theme.textPrimary}`}>
                        Hi, I'm Anshika Pandey
                    </h1>

                    {/* Subheading */}
                    <h2 className="text-xl sm:text-2xl text-orange-500 font-semibold mb-4">
                        Full Stack Developer | DSA Enthusiast
                    </h2>

                    {/* Description */}
                    <p className={`mb-8 leading-relaxed max-w-2xl mx-auto ${theme.textSecondary}`}>
                        I am a Computer Science undergraduate at PSIT with a strong interest in software
                        development and problem solving. I have solved 600+ problems on LeetCode and
                        enjoy building web applications using React, Node.js, and modern web technologies.
                    </p>

                    {/* Buttons */}
                    <div className='flex flex-col sm:flex-row justify-center gap-4'>

                        <a href={cv} download>
                            <button className='inline-flex items-center justify-center text-white bg-gradient-to-r from-orange-500 to-amber-500 py-3 px-8 hover:shadow-[0_0_40px_rgba(255,165,0,0.7)] rounded-full text-lg font-semibold transition-all duration-300'>
                                <DownloadIcon className='w-5 h-5 mr-2' />
                                Download CV
                            </button>
                        </a>

                        <a href="#contact">
                            <button className={`inline-flex items-center ${theme.buttonSecondary} justify-center py-3 px-8 rounded-full text-lg font-semibold transition-all duration-300`}>
                                <Mail className='w-5 h-5 mr-2' />
                                Contact Me
                            </button>
                        </a>

                    </div>
                </div>

                {/* Background Glow */}
                <div className={`absolute -top-20 -left-20 w-64 h-64 ${theme.decorativeCircle} rounded-full blur-3xl animate-pulse hidden sm:block`}></div>

            </section>

        </div>
    )
}

export default Hero;
