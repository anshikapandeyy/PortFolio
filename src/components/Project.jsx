import interview from '../assets/interview.jpg';
import bhojnam from '../assets/bhojnam.png';
import quora from '../assets/quora.jpg';
import {FaGithub} from 'react-icons/fa';
const Project = ({ darkMode }) => {
    const project = [
        {
            id: 1,
            title: 'InterView Room',
            desc: 'The Interview Room is a professional environment designed for conducting interviews, enabling clear communication between interviewers and candidates while ensuring a focused and comfortable setting for evaluation.',
            image: interview,
            tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS']
        },
        {
            id: 2,
            title: 'Bhojnam',
            desc: 'Developed Bhojnam, a responsive food ordering web application using React.js and Tailwind CSS, featuring a modern UI, component-based architecture, and mobile-friendly design',
            image: bhojnam,
            tags: ['React', 'Node.js', 'Tailwind CSS']
        },
        {
            id: 3,
            title: 'Quora Posts',
            desc: 'Developed Quora Posts, a web application implementing CRUD operations using Node.js and Express.js, allowing users to create, edit, and manage posts dynamically.',
            image: quora,
            tags: ['React', 'Node.js', 'Express.js', 'EJS', 'CRUD']
        },
    ];

    return (
        <section
            id='project'
            style={{ backgroundColor: darkMode ? '#111827' : '#f9fafb' }}
            className='relative py-24'
        >
            <div className='container mx-auto px-4'>
                <div className='text-center mb-10' data-aos='fade-up'>
                    <h2
                        className='text-3xl sm:text-4xl font-bold mb-3'
                        style={{ color: darkMode ? 'white' : '#1f2937' }}
                    >
                        My{" "}
                        <span
                            style={{
                                background: 'linear-gradient(to right,#f97316,#f59e0b)',
                                WebkitBackgroundClip: 'text',
                                backgroundClip: 'text',
                                color: 'transparent'
                            }}
                        >
                            Projects
                        </span>
                    </h2>

                    <p
                        className='max-w-xl mx-auto'
                        style={{ color: darkMode ? '#d1d5db' : '#6b7280' }}
                    >
                        Showcase of my work
                    </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12'>
                    {project.map((project, index) => (
                        <div
                            key={project.id}
                            style={{
                                background: darkMode
                                    ? 'linear-gradient(to right,#1f2937,#111827)'
                                    : 'linear-gradient(to right,#ffffff,#f59e0b)',
                                borderColor: darkMode ? '#374151' : '#e5e7eb'
                            }}
                            className='group rounded-xl border duration-300 hover:border-orange-50/50 transition-all'
                            data-aos='fade-up'
                            data-aos-delay={index * 100}
                        >
                            <div className='h-64 overflow-hidden rounded-t-xl'>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                                />
                            </div>

                            <div className='p-4'>
                                <h3
                                    className='text-lg font-bold mb-2'
                                    style={{ color: darkMode ? 'white' : '#1f2937' }}
                                >
                                    {project.title}
                                </h3>

                                <p
                                    className='text-sm mb-3'
                                    style={{ color: darkMode ? '#d1d5db' : '#6b7280' }}
                                >
                                    {project.desc}
                                </p>

                                <div className='flex flex-wrap gap-1.5 mb-4'>
                                    {project.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            style={{
                                                backgroundColor: darkMode ? '#374151' : '#f3f4f6',
                                                color: darkMode ? '#d1d5db' : '#4b5563'
                                            }}
                                            className='px-2 py-1 text-xs rounded-full'
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                {/* <div className='flex gap-2'>
                                    <a href="#" style={{backgroundColor:'linear-gradient(to right,#f97316,#f59e0b)'}} className='flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-sm rounded-lg hover:shadow-lg hover:shadow-orange-500/25 transition-all' data-aos='zoom-in' data-aos-delay='300'>
                                        <FaGithub className='text-sm'/>
                                        <span>Code</span>
                                    </a>
                                </div> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Project;