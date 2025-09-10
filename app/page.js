'use client'
import { useState, useEffect } from 'react'

export default function Portfolio() {
  const [isMounted, setIsMounted] = useState(false)
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  useEffect(() => {
    setIsMounted(true)
  }, [])

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
  
      const emailjs = (await import('@emailjs/browser')).default
      
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject || 'Portfolio Contact',
        message: formData.message,
        to_email: 'pulaminabin10@gmail.com'
      }

      await emailjs.send(
        'service_di0aq5d',
        'template_dc24tvf', 
        templateParams,
        'N81H_Lf3PLKdMoaVl'
      )

      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })

    } catch (error) {
      console.error('Email failed:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isMounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Simple Navigation Bar */}
      <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-blue-600">PORTFOLIO</div>
            <div className="hidden md:flex space-x-6">
              <a href="#home" className="text-gray-600 hover:text-blue-600">Home</a>
              <a href="#about" className="text-gray-600 hover:text-blue-600">About</a>
              <a href="#education" className="text-gray-600 hover:text-blue-600">Education</a>
              <a href="#skills" className="text-gray-600 hover:text-blue-600">Skills</a>
              <a href="#projects" className="text-gray-600 hover:text-blue-600">Projects</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="max-w-6xl mx-auto px-4 py-20 text-center">
          <div className="mb-8">
            <img 
              src="/magar.jpg" 
              alt="Nabin Pulami" 
              className="w-32 h-32 mx-auto rounded-full mb-4"
            />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Hi, I'm <span className="text-blue-600">Nabin Pulami</span>
          </h1>
          <p className="text-xl text-gray-600 mb-4">BCA Student & Aspiring Data Analyst</p>
          <p className="text-lg text-gray-500 mb-8">
            Motivated 7th-semester student seeking opportunities in Data Analysis/Software projects.
          </p>
          <div className="space-x-4">
            <a href="#contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700">
              Get In Touch
            </a>
            <a href="#projects" className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50">
              View Projects
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">About Me</h2>
          <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto mb-12">
            I'm a motivated BCA 7th-semester student from Everest College, passionate about data analysis 
            and software development. Currently seeking opportunities to apply my academic knowledge 
            while learning industry-standard tools.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">My Journey</h3>
              <p className="text-gray-600 mb-4">
                As a BCA student at Everest College under Tribhuvan University, I've developed a strong foundation 
                in programming, database design, and computer applications.
              </p>
              <p className="text-gray-600 mb-4">
                I believe in continuous learning and actively engage with online platforms like Coursera, YouTube, 
                and Kaggle tutorials to enhance my skills beyond the classroom.
              </p>
              <p className="text-gray-600">
                I'm highly adaptable, enthusiastic, and ready to contribute in a professional environment.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Personal Info</h3>
              <div className="space-y-2 text-gray-600">
                <p>🎓 BCA Student (Expected Graduation: 2026)</p>
                <p>📍 Kadaghari, Kathmandu</p>
                <p>💻 Learning Python, SQL, Power BI</p>
                <p>🌱 Passionate about Data Analysis</p>
                <p>📚 Active learner through online platforms</p>
                <p>🎯 Seeking opportunities in Data Analysis/Software Projects</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Education</h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Bachelor of Computer Applications (BCA)</h3>
                  <p className="text-blue-600 font-medium">Everest College, Thapathali, Kathmandu</p>
                  <p className="text-gray-600">Tribhuvan University</p>
                </div>
                <div className="text-right">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Expected: 2026</span>
                  <p className="text-gray-500 text-sm mt-1">Currently 7th Semester</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-500">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">+2 Science</h3>
                  <p className="text-green-600 font-medium">V.S Niketan College, Minbhawan, Kathmandu</p>
                </div>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Completed: 2021</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-purple-500">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Secondary Education Examination (SEE)</h3>
                  <p className="text-purple-600 font-medium">Little Angels School, Hattiban, Lalitpur</p>
                </div>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Completed: 2019</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-yellow-500">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">CCNA Training Certification</h3>
                  <p className="text-yellow-600 font-medium">Broadway Infosys, Kathmandu</p>
                  <p className="text-gray-600 text-sm">90 hours of professional training in networking</p>
                  <a 
                    href="https://drive.google.com/file/d/1-TAM0IEGFNusAttxiSroh8KFWLkunYpP/view?usp=drive_link" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-600 hover:text-yellow-700 text-sm font-medium mt-2 inline-block"
                  >
                    📄 View Certificate
                  </a>
                </div>
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Jan - Mar 2024</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Skills & Learning</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Technical Skills */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-center text-blue-600">Technical Skills</h3>
              <div className="space-y-4">
                {[
                  {skill: 'SQL', level: 40},
                  {skill: 'Excel', level: 60},
                  {skill: 'Python', level: 35},
                  {skill: 'HTML/CSS', level: 55},
                  {skill: 'Java', level: 45},
                  {skill: 'Power BI', level: 30}
                ].map(({skill, level}) => (
                  <div key={skill}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700">{skill}</span>
                      <span className="text-xs text-gray-500">Learning</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{width: `${level}%`}}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Knowledge */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-center text-green-600">Academic Knowledge</h3>
              <div className="space-y-3">
                {['Database Design', 'Data Visualization', 'Programming Logic', 'Computer Networks', 'Statistics (Basic)', 'Web Development Basics'].map((skill) => (
                  <div key={skill} className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-center text-purple-600">Soft Skills</h3>
              <div className="space-y-3">
                {['Quick Learner', 'Problem Solving', 'Teamwork', 'Communication', 'Leadership', 'Adaptability'].map((skill) => (
                  <div key={skill} className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Academic Projects</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* E-commerce Project */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
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
              </div>
            </div>

            {/* Fitness Tracker */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
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
                  and height categories using Fuzzy Logic.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-green-100 text-green-600 px-2 py-1 rounded text-sm">Python</span>
                  <span className="bg-green-100 text-green-600 px-2 py-1 rounded text-sm">Streamlit</span>
                  <span className="bg-green-100 text-green-600 px-2 py-1 rounded text-sm">Fuzzy Logic</span>
                </div>
              </div>
            </div>

            {/* Portfolio */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
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
                  my learning journey and projects.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-purple-100 text-purple-600 px-2 py-1 rounded text-sm">Next.js</span>
                  <span className="bg-purple-100 text-purple-600 px-2 py-1 rounded text-sm">Tailwind CSS</span>
                </div>
              </div>
            </div>

            {/* Future Projects */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="h-48 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                <div className="text-gray-600 text-center">
                  <div className="text-4xl mb-2">📚</div>
                  <h3 className="text-xl font-semibold">More Projects Coming</h3>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Future Learning Projects</h3>
                <p className="text-gray-600 mb-4">
                  Currently planning to work on data analysis projects using Python and SQL, 
                  and exploring Power BI for data visualization.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-sm">Data Analysis</span>
                  <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-sm">SQL Projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Let's Connect</h2>
          <p className="text-lg text-gray-300 text-center mb-12">
            I'm actively seeking opportunities in Data Analysis/Software projects!
          </p>
          
          <div className="grid md:grid-cols-2 gap-12">

            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4 mb-8">
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

              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-4">Connect with Me</h4>
                <div className="flex space-x-4">
                  <a href="https://linkedin.com/in/nabin-pulami-3692972b7" target="_blank" 
                     rel="noopener noreferrer"
                     className="bg-blue-600 p-3 rounded hover:bg-blue-700">
                    LinkedIn
                  </a>
                  <a href="https://github.com/Aambooo" target="_blank" 
                     rel="noopener noreferrer"
                     className="bg-gray-700 p-3 rounded hover:bg-gray-600">
                    GitHub
                  </a>
                </div>
              </div>

              <div className="bg-gray-800 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2">Objective</h4>
                <p className="text-gray-300 text-sm">
                  Seeking opportunities in Data Analysis/Software Projects. 
                  Eager to apply academic knowledge while learning industry tools.
                </p>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6">Send Message</h3>
              
              {submitStatus === 'success' && (
                <div className="bg-green-600 text-white p-3 rounded-lg mb-4">
                  ✅ Message sent successfully! I'll get back to you soon.
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
                    className="w-full p-3 bg-gray-700 rounded-lg text-white placeholder-gray-400"
                    required
                    autoComplete="name"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Your Email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-gray-700 rounded-lg text-white placeholder-gray-400"
                    required
                    autoComplete="email"
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    name="subject"
                    placeholder="Subject" 
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-gray-700 rounded-lg text-white placeholder-gray-400"
                    autoComplete="off"
                  />
                </div>
                <div>
                  <textarea 
                    name="message"
                    placeholder="Your Message" 
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-gray-700 rounded-lg text-white placeholder-gray-400"
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full p-3 rounded-lg text-white transition ${
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
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2024 Nabin Pulami. BCA Student - Eager to Learn & Contribute</p>
          <p className="text-sm mt-2">Built with Next.js as part of my learning journey</p>
        </div>
      </footer>
    </div>
  )
}