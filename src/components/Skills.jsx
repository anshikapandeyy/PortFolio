import cpp from '../assets/cpp.png';
import express from '../assets/express.jfif';
import dsa from '../assets/dsa.png';
import react from '../assets/react.png';
import tailwind from '../assets/tailwind.png';
import js from '../assets/js.png';
import sql from '../assets/sql.png';
import node from '../assets/node.png';

const Skills = ({ darkMode }) => {

    const skills = [
        { name: 'C++', icon: cpp, level: 75, color: 'from-orange-500 to-amber-500' },
        
        { name: 'Data Structure And Algorithm', icon: dsa, level: 60, color: 'from-yellow-500 to-amber-500' },
        { name: 'react', icon: react, level: 60, color: 'from-cyan-500 to-blue-500' },
        { name: 'tailwind', icon: tailwind, level: 25, color: 'from-teal-500 to-cyan-500' },
        { name: 'Javascript', icon: js, level: 75, color: 'from-green-500 to-emerald-500' },
        { name: 'SQL', icon: sql, level: 60, color: 'from-blue-500 to-indigo-500' },
        { name: 'node.js', icon: node, level: 50, color: 'from-red-500 to-orange-500' },
        { name: 'express.js', icon: express, level: 30, color: 'from-blue-500 to-cyan-500' },
    ];

    return (
        <section id='skills' style={{ backgroundColor: darkMode ? '#111827' : '#f9fafb' }} className='py-14 relative overflow-hidden'>

            <div className='py-14 relative overflow-hidden'>

                <div className='container px-5 py-14 mx-auto'>

                    <div className='text-center mb-20' data-aos='fade-up'>

                        <h1 className='sm:text-4xl text-3xl font-bold title-font mb-4'
                            style={{ color: darkMode ? 'white' : '#1f2937' }}>

                            My
                            <span style={{
                                background: 'linear-gradient(to right,#f97316,#f59e0b)',
                                WebkitBackgroundClip: 'text',
                                backgroundClip: 'text',
                                color: 'transparent'
                            }}>
                                  Skills
                            </span>

                        </h1>

                        <p className='text-lg max-w-2xl mx-auto leading-relaxed'
                            style={{ color: darkMode ? '#d1d5db' : '#4b5563' }}>

                            Proficient in C++, JavaScript, React.js, and Node.js with strong knowledge of Data Structures and Algorithms. Experienced in building responsive web applications and solving complex problems, with 600+ problems solved on LeetCode.

                        </p>

                    </div>

                    <div className='flex flex-wrap -m-4' data-aos='fade-up' data-aos-delay='200'>

                        {skills.map((skill, index) => (

                            <div key={index} className='p-4 lg:w-1/4 md:w-1/2 w-full'
                                data-aos='fade-up'
                                data-aos-delay={`${300 + index * 100}`}>

                                <div
                                    style={{
                                        background: darkMode
                                            ? 'linear-gradient(to bottom right,#1f2937,#111827)'
                                            : 'linear-gradient(to bottom right,#ffffff,#f3f4f6)',
                                        borderColor: darkMode ? '#374151' : '#e5e7eb'
                                    }}
                                    className='h-full p-6 rounded-2xl border hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-2 group hover:shadow-[0_0_30px_rgb(255,165,0,0.15)]'>

                                    <div className='flex items-center mb-6'>

                                        <div
                                            style={{
                                                background: darkMode
                                                    ? 'linear-gradient(to bottom right,#374151,#1f2937)'
                                                    : 'linear-gradient(to bottom right,#f3f4f6,#e5e7eb)'
                                            }}
                                            className='w-16 h-16 rounded-xl p-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>

                                            <img src={skill.icon} alt={skill.name} className='w-full h-full object-contain' />

                                        </div>

                                        <h3 className='text-2xl font-bold ml-4'
                                            style={{ color: darkMode ? 'white' : '#1f2937' }}>
                                            {skill.name}
                                        </h3>

                                    </div>

                                    <div className='mb-2 flex justify-between items-center'>

                                        <span className='font-medium'
                                            style={{ color: darkMode ? '#d1d5db' : '#6b7280' }}>
                                            Proficiency
                                        </span>

                                        <span
                                            style={{
                                                background: 'linear-gradient(to right,#f97316,#f59e0b)',
                                                WebkitBackgroundClip: 'text',
                                                backgroundClip: 'text',
                                                color: 'transparent'
                                            }}
                                            className='font-bold'>
                                            {skill.level}%
                                        </span>

                                    </div>

                                    <div className='w-full rounded-full h-3 overflow-hidden'
                                        style={{ backgroundColor: darkMode ? '#374151' : '#e5e7eb' }}>

                                        <div
                                            className='h-3 rounded-full transition-all duration-500'
                                            style={{
                                                width: `${skill.level}%`,
                                                background: 'linear-gradient(to right,#f97316,#f59e0b)'
                                            }}>
                                        </div>

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Skills;
