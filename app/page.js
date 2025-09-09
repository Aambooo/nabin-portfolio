'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('YOUR_PUBLIC_KEY') // Replace with your actual EmailJS public key
  }, [])

  // Replace these with your actual EmailJS configuration
  const EMAILJS_SERVICE_ID = 'service_di0aq5d'
  const EMAILJS_TEMPLATE_ID = 'template_dc24tvf' // Replace with your actual template ID
  const EMAILJS_PUBLIC_KEY = 'N81H_Lf3PLKdMoaVl' // Replace with your actual public key

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject || 'Portfolio Contact',
        message: formData.message,
        to_email: 'pulaminabin10@gmail.com'
      }

      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      )

      console.log('Email sent successfully:', result)
      setSubmitStatus('success')
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })

    } catch (error) {
      console.error('Failed to send email:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-gray-800">
              PORTFOLIO
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-600 hover:text-gray-900">Home</a>
              <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
              <a href="#education" className="text-gray-600 hover:text-gray-900">Education</a>
              <a href="#skills" className="text-gray-600 hover:text-gray-900">Skills</a>
              <a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 pb-20 bg-gradient-to-r from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto rounded-full mb-4 overflow-hidden">
                <img 
                  src="/nabin.png"  // <-- replace with actual file path
                  alt="Nabin Pulami" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Hi, I&apos;m <span className="text-blue-600">Nabin Pulami</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-4">
              BCA Student & Aspiring Data Analyst
            </p>
            <p className="text-lg text-gray-500 mb-8">
              Motivated 7th-semester student seeking opportunities in Data Analysis/Software projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
                Get In Touch
              </a>
              <a href="#projects" className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition">
                View My Projects
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              I&apos;m a motivated BCA 7th-semester student from Everest College, passionate about data analysis and software development. 
              Currently seeking opportunities in Data Analysis/Software projects to apply my academic knowledge while learning industry-standard tools.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">My Journey</h3>
              <p className="text-gray-600 mb-4">
                As a BCA student at Everest College under Tribhuvan University, I&apos;ve developed a strong foundation 
                in programming, database design, and computer applications. I&apos;m particularly interested in data analysis, 
                digital marketing, and modern technology tools.
              </p>
              <p className="text-gray-600 mb-4">
                I believe in continuous learning and actively engage with online platforms like Coursera, YouTube, 
                and Kaggle tutorials to enhance my skills beyond the classroom.
              </p>
              <p className="text-gray-600">
                I&apos;m highly adaptable, enthusiastic, and ready to contribute in a professional environment while 
                gaining practical experience in the tech industry.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Personal Info</h3>
              <ul className="space-y-2 text-gray-600">
                <li>🎓 BCA Student (Expected Graduation: 2026)</li>
                <li>📍 Kadaghari, Kathmandu</li>
                <li>💻 Learning Python, SQL, Power BI</li>
                <li>🌱 Passionate about Data Analysis</li>
                <li>📚 Active learner through online platforms</li>
                <li>🎯 Seeking opportunities in Data Analysis/Software Projects</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Education</h2>
            <p className="text-lg text-gray-600">My academic journey and achievements</p>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Bachelor of Computer Applications (BCA)</h3>
                  <p className="text-blue-600 font-medium">Everest College, Thapathali, Kathmandu</p>
                  <p className="text-gray-600">Tribhuvan University</p>
                </div>
                <div className="mt-2 md:mt-0 text-right">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Expected: 2026</span>
                  <p className="text-gray-500 text-sm mt-1">Currently 7th Semester</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-500">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">+2 Science</h3>
                  <p className="text-green-600 font-medium">V.S Niketan College, Minbhawan,Kathmandu</p>
                </div>
                <div className="mt-2 md:mt-0 text-right">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Completed: 2021</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-purple-500">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Secondary Education Examination (SEE)</h3>
                  <p className="text-purple-600 font-medium">Little Angels&apos; School, Hattiban, Lalitpur</p>
                </div>
                <div className="mt-2 md:mt-0 text-right">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Completed: 2019</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-yellow-500">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">CCNA Training Certification</h3>
                  <p className="text-yellow-600 font-medium">Broadway Infosys, Kathmandu</p>
                  <p className="text-gray-600 text-sm">90 hours of professional training in networking, routing, switching, and IP fundamentals</p>
                  <div className="mt-2">
                    <a 
                      href="https://drive.google.com/file/d/1-TAM0IEGFNusAttxiSroh8KFWLkunYpP/view?usp=drive_link" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-yellow-600 hover:text-yellow-700 transition-colors text-sm font-medium"
                    >
                      📄 View Certificate
                      <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="mt-2 md:mt-0 text-right">
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Jan - Mar 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Skills & Learning</h2>
            <p className="text-lg text-gray-600">Technologies I&apos;m learning and skills I&apos;m developing</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-center text-blue-600">Technical Skills</h3>
              <div className="space-y-3">
                {[
                  {skill: 'SQL', level: 'Learning', width: '40%'},
                  {skill: 'Excel', level: 'Basic', width: '60%'},
                  {skill: 'Python', level: 'Learning', width: '35%'},
                  {skill: 'HTML/CSS', level: 'Basic', width: '55%'},
                  {skill: 'Java', level: 'Academic', width: '45%'},
                  {skill: 'Power BI', level: 'Learning', width: '30%'}
                ].map(({skill, level, width}) => (
                  <div key={skill} className="space-y-1">
                    <div className="flex justify-between">
                      <span className="text-gray-700">{skill}</span>
                      <span className="text-xs text-gray-500">{level}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{width}}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-center text-green-600">Academic Knowledge</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">Database Design</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">Data Visualization</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">Programming Logic</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">Computer Networks</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">Statistics (Basic)</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">Web Development Basics</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-center text-purple-600">Soft Skills</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">Quick Learner</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">Problem Solving</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">Teamwork</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">Communication</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">Leadership</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">Adaptability</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Academic Projects</h2>
            <p className="text-lg text-gray-600">Projects completed during my BCA coursework</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-4xl mb-2">🛒</div>
                  <h3 className="text-xl font-semibold">E-commerce Website</h3>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">E-commerce Website</h3>
                <p className="text-gray-600 mb-4">
                  Built a basic front-end e-commerce website as part of web development coursework. 
                  This group project helped me understand HTML, CSS, and basic web design principles.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-sm">HTML</span>
                  <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-sm">CSS</span>
                  <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-sm">Group Project</span>
                </div>
                <div className="text-sm text-gray-500">
                  <strong>Learning Focus:</strong> Web design fundamentals, user interface basics
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-4xl mb-2">💪</div>
                  <h3 className="text-xl font-semibold">Fitness Tracker</h3>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Diet & Exercise Tracker</h3>
                <p className="text-gray-600 mb-4">
                  Developed a Streamlit-based application to track proper diet and exercise according to weight 
                  and height categories using Fuzzy Logic. This project enhanced my Python programming skills.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-green-100 text-green-600 px-2 py-1 rounded text-sm">Python</span>
                  <span className="bg-green-100 text-green-600 px-2 py-1 rounded text-sm">Streamlit</span>
                  <span className="bg-green-100 text-green-600 px-2 py-1 rounded text-sm">Fuzzy Logic</span>
                </div>
                <div className="text-sm text-gray-500">
                  <strong>Learning Focus:</strong> Python programming, data processing, logic implementation
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-4xl mb-2">🌐</div>
                  <h3 className="text-xl font-semibold">Portfolio Website</h3>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Personal Portfolio</h3>
                <p className="text-gray-600 mb-4">
                  Created this responsive portfolio website using Next.js and Tailwind CSS to showcase 
                  my learning journey and projects as part of an internship application.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-purple-100 text-purple-600 px-2 py-1 rounded text-sm">Next.js</span>
                  <span className="bg-purple-100 text-purple-600 px-2 py-1 rounded text-sm">Tailwind CSS</span>
                  <span className="bg-purple-100 text-purple-600 px-2 py-1 rounded text-sm">Learning Project</span>
                </div>
                <div className="text-sm text-gray-500">
                  <strong>Learning Focus:</strong> Modern web development, responsive design
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <div className="text-gray-600 text-center">
                  <div className="text-4xl mb-2">📚</div>
                  <h3 className="text-xl font-semibold">More Projects Coming</h3>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Future Learning Projects</h3>
                <p className="text-gray-600 mb-4">
                  Currently planning to work on data analysis projects using Python and SQL, 
                  and exploring Power BI for data visualization as I continue my learning journey.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-sm">Data Analysis</span>
                  <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-sm">SQL Projects</span>
                  <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-sm">Power BI</span>
                </div>
                <div className="text-sm text-gray-500">
                  <strong>Goal:</strong> Apply classroom knowledge to real-world data problems
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let&apos;s Connect</h2>
            <p className="text-lg text-gray-300">I&apos;m actively seeking opportunities in Data Analysis/Software projects and would love to hear from you!</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-sm mr-4">📧</span>
                  <span>pulaminabin10@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-sm mr-4">📱</span>
                  <span>+977-9808189777</span>
                </div>
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-sm mr-4">📍</span>
                  <span>Kadaghari, Kathmandu</span>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Connect with Me</h4>
                <div className="flex space-x-4">
                  <a href="https://linkedin.com/in/nabin-pulami-3692972b7" target="_blank" className="bg-blue-600 p-3 rounded hover:bg-blue-700 transition">
                    LinkedIn
                  </a>
                  <a href="https://github.com/Aambooo" target="_blank" className="bg-gray-700 p-3 rounded hover:bg-gray-600 transition">
                    GitHub
                  </a>
                </div>
              </div>

              <div className="mt-8 bg-gray-800 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2">Objective</h4>
                <p className="text-gray-300 text-sm">
                  Seeking opportunities in Data Analysis/Software Projects. 
                  Eager to apply academic knowledge while learning industry tools and contributing 
                  in a professional environment.
                </p>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6">Send Message</h3>
              
              {submitStatus === 'success' && (
                <div className="bg-green-600 text-white p-3 rounded-lg mb-4">
                  ✅ Message sent successfully! I&apos;ll get back to you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="bg-red-600 text-white p-3 rounded-lg mb-4">
                  ❌ Failed to send message. Please try again later.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Your Name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Your Email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    name="subject"
                    placeholder="Subject" 
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <textarea 
                    name="message"
                    placeholder="Your Message" 
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full p-3 rounded-lg text-white transition focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isSubmitting ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
          <p>&copy; 2024 Nabin Pulami. BCA Student - Eager to Learn & Contribute</p>
          <p className="text-sm mt-2">Built with Next.js as part of my learning journey</p>
        </div>
      </footer>
    </div>
  )
}