import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  ExternalLink,
  Download,
  GraduationCap,
  Briefcase,
  Code,
  Database,
  Brain,
  Award,
  BookOpen,
  ChevronRight,
  Star,
  Trophy,
  Certificate,
  Clock,
  Calendar
} from 'lucide-react';
import { mockData } from '../data/mockData';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-gray-100">
      {/* Header */}
      <header className="fixed top-0 w-full bg-gray-900/90 backdrop-blur-md border-b border-gray-800 z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-white">Rishabh Patil</h1>
            <div className="hidden md:flex space-x-6">
              <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white transition-colors">About</button>
              <button onClick={() => scrollToSection('skills')} className="text-gray-300 hover:text-white transition-colors">Skills</button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-white transition-colors">Projects</button>
              <button onClick={() => scrollToSection('experience')} className="text-gray-300 hover:text-white transition-colors">Experience</button>
              <button onClick={() => scrollToSection('timeline')} className="text-gray-300 hover:text-white transition-colors">Timeline</button>
              <button onClick={() => scrollToSection('resume')} className="text-gray-300 hover:text-white transition-colors">Resume</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-white transition-colors">Contact</button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 min-h-screen flex items-center">
        <div className="container mx-auto">
          <div className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-blue-400 mb-4">
                  <Brain className="h-5 w-5" />
                  <span className="text-sm font-mono tracking-wide">AI/ML Engineer</span>
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-white">
                  Hi! I am{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Rishabh
                  </span>{" "}
                  Patil
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                  Data Science graduate student at NYU, specializing in building intelligent and scalable systems at the intersection of 
                  <span className="text-blue-400 font-semibold"> machine learning</span>, 
                  <span className="text-cyan-400 font-semibold"> NLP</span>, and 
                  <span className="text-green-400 font-semibold"> computer vision</span>.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  onClick={() => scrollToSection('contact')} 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full"
                >
                  Available for Internships
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => {
                    // Try GitHub first, fallback to opening resume section
                    const resumeUrl = "https://rishswish.github.io/Rishabh_Patil_NYU_Resume_Intern.pdf";
                    try {
                      window.open(resumeUrl, '_blank');
                    } catch (error) {
                      // If blocked, scroll to resume section instead
                      scrollToSection('resume');
                    }
                  }}
                  className="border-gray-600 text-gray-200 hover:bg-gray-800 hover:text-white px-8 py-3 rounded-full"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Resume
                </Button>
              </div>

              <div className="flex items-center space-x-6">
                <a href={mockData.contact.github} className="text-gray-400 hover:text-white transition-colors">
                  <Github className="h-6 w-6" />
                </a>
                <a href={mockData.contact.linkedin} className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href={`mailto:${mockData.contact.email}`} className="text-gray-400 hover:text-white transition-colors">
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                <img 
                  src={mockData.profileImage} 
                  alt="Rishabh Patil" 
                  className="relative w-80 h-80 object-cover rounded-full border-4 border-gray-700 shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">About Me</h2>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <p className="text-lg text-gray-200 leading-relaxed">
                  I'm a data-driven builder with a passion for solving real-world problems through elegant 
                  machine learning and AI solutions. From deploying retrieval-augmented generation systems 
                  to winning awards for deep learning research, I thrive at the intersection of code, 
                  curiosity, and creativity.
                </p>
                <p className="text-lg text-gray-200 leading-relaxed">
                  Currently pursuing my MS in Data Science at NYU (GPA: 3.78/4.0), I hold a B.Tech in 
                  Data Science with Honors in Computational Finance from the University of Mumbai (GPA: 3.96/4.0).
                </p>
                <div className="flex items-center space-x-2 text-green-400">
                  <Star className="h-5 w-5" />
                  <span className="font-semibold">Seeking Summer/Fall 2025 internships</span>
                </div>
              </div>
              <div className="space-y-6">
                <Card className="bg-gray-800/50 border-gray-700">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <Award className="h-6 w-6 text-yellow-400" />
                      <h3 className="text-xl font-semibold text-white">Recent Achievement</h3>
                    </div>
                    <p className="text-gray-200">
                      3rd Prize in AI & Deep Learning Track at ICDMAI 2024 for 
                      Driver Drowsiness Detection System. Published in Springer LNNS 998.
                    </p>
                  </CardContent>
                </Card>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400">3.78</div>
                    <div className="text-sm text-gray-300">NYU GPA</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400">3.96</div>
                    <div className="text-sm text-gray-300">Undergrad GPA</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Technical Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {mockData.skills.map((category, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3 text-xl text-white">
                    <category.icon className="h-6 w-6 text-blue-400" />
                    <span>{category.category}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="bg-gray-700 text-gray-100 hover:bg-gray-600">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gray-900/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Featured Projects</h2>
          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {mockData.projects.map((project, index) => (
              <Card 
                key={index} 
                className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 overflow-hidden cursor-pointer"
                onClick={() => window.open(project.github, '_blank')}
              >
                {project.image && (
                  <div className="w-full h-96 overflow-hidden bg-gray-900 relative group">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-contain p-6"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center space-x-2 text-white bg-blue-600 px-4 py-2 rounded-full">
                        <Github className="h-4 w-4" />
                        <span className="text-sm font-semibold">View on GitHub</span>
                      </div>
                    </div>
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl text-white flex items-center">
                      {project.title}
                      <ExternalLink className="h-4 w-4 ml-2 text-blue-400" />
                    </CardTitle>
                  </div>
                  <CardDescription className="text-gray-400">{project.duration}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="text-gray-200 leading-relaxed flex items-start">
                        <ChevronRight className="h-4 w-4 text-blue-400 mt-0.5 mr-2 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="border-blue-400/30 text-blue-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Education */}
      <section id="experience" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Experience */}
            <div>
              <h2 className="text-3xl font-bold mb-8 flex items-center text-white">
                <Briefcase className="mr-3 h-8 w-8 text-blue-400" />
                Experience
              </h2>
              <div className="space-y-6">
                {mockData.experience.map((job, index) => (
                  <Card key={index} className="bg-gray-800/50 border-gray-700">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-semibold text-white">{job.title}</h3>
                        <Badge variant="secondary" className="bg-blue-600/20 text-blue-300">
                          {job.duration}
                        </Badge>
                      </div>
                      <p className="text-blue-400 font-semibold mb-3">{job.company} - {job.location}</p>
                      <ul className="space-y-2">
                        {job.highlights.map((highlight, hIndex) => (
                          <li key={hIndex} className="text-gray-200 text-sm flex items-start">
                            <ChevronRight className="h-3 w-3 text-blue-400 mt-1 mr-2 flex-shrink-0" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-3xl font-bold mb-8 flex items-center text-white">
                <GraduationCap className="mr-3 h-8 w-8 text-green-400" />
                Education
              </h2>
              <div className="space-y-6">
                {mockData.education.map((edu, index) => (
                  <Card key={index} className="bg-gray-800/50 border-gray-700">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                        <Badge variant="secondary" className="bg-green-600/20 text-green-300">
                          GPA: {edu.gpa}
                        </Badge>
                      </div>
                      <p className="text-green-400 font-semibold mb-2">{edu.school}</p>
                      <p className="text-gray-400 text-sm mb-3">{edu.duration}</p>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course, courseIndex) => (
                          <Badge key={courseIndex} variant="outline" className="border-green-400/30 text-green-300 text-xs">
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-20 px-6 bg-gray-900/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-16 text-white flex items-center justify-center">
            <Clock className="mr-3 h-10 w-10 text-purple-400" />
            Professional Timeline
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-purple-400/30"></div>
            
            <div className="space-y-12">
              {mockData.timeline.map((item, index) => (
                <div key={index} className="flex items-start space-x-8">
                  <div className="relative flex-shrink-0">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center ${item.color} border-4 border-gray-900`}>
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <Card className="bg-gray-800/50 border-gray-700 flex-1">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                        <Badge variant="secondary" className="bg-purple-600/20 text-purple-300">
                          {item.period}
                        </Badge>
                      </div>
                      <p className="text-purple-400 font-semibold mb-2">{item.organization}</p>
                      <p className="text-gray-300 text-sm">{item.description}</p>
                      {item.achievement && (
                        <div className="mt-3 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                          <p className="text-yellow-400 text-sm font-medium">{item.achievement}</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white flex items-center justify-center">
            <Award className="mr-3 h-10 w-10 text-yellow-400" />
            AWS Certifications
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {mockData.certifications.map((cert, index) => (
              <Card 
                key={index} 
                className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 overflow-hidden cursor-pointer"
                onClick={() => window.open(cert.link, '_blank')}
              >
                <div className="w-full h-48 bg-white p-4 flex items-center justify-center relative group">
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center space-x-2 text-white bg-blue-600 px-3 py-2 rounded-full">
                      <ExternalLink className="h-4 w-4" />
                      <span className="text-xs font-semibold">View Certificate</span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2 flex items-center">
                    {cert.title}
                    <ExternalLink className="h-4 w-4 ml-2 text-blue-400" />
                  </h3>
                  <p className="text-blue-400 font-medium mb-2">{cert.issuer}</p>
                  <p className="text-gray-400 text-sm mb-4">Issued: {cert.year}</p>
                  <Badge variant="outline" className="border-yellow-400/30 text-yellow-300 w-full justify-center">
                    <Award className="w-4 h-4 mr-2" />
                    AWS Academy
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-900/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-400">Let's Build Something Amazing</h3>
                <p className="text-lg text-gray-200 leading-relaxed">
                  I'm actively seeking Summer/Fall 2025 internships in Data Science, Machine Learning, 
                  AI, or Data Analysis. Let's connect and discuss how my technical expertise can 
                  contribute to your team.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-200">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <a href={`mailto:${mockData.contact.email}`} className="hover:text-blue-400 transition-colors">
                    {mockData.contact.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-200">
                  <Phone className="h-5 w-5 text-green-400" />
                  <a href={`tel:${mockData.contact.phone}`} className="hover:text-green-400 transition-colors">
                    {mockData.contact.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-200">
                  <MapPin className="h-5 w-5 text-purple-400" />
                  <span>{mockData.contact.location}</span>
                </div>
              </div>

              <div className="flex space-x-4">
                <Button 
                  onClick={() => window.open(mockData.contact.linkedin, '_blank')}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => window.open(mockData.contact.github, '_blank')}
                  className="border-gray-600 text-gray-200 hover:bg-gray-800 hover:text-white"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
              </div>
            </div>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-8 text-center">
                <BookOpen className="h-16 w-16 text-blue-400 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4 text-white">Quick Stats</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-2xl font-bold text-blue-400">3+</div>
                    <div className="text-sm text-gray-300">Internships</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-400">4+</div>
                    <div className="text-sm text-gray-300">Major Projects</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-400">4</div>
                    <div className="text-sm text-gray-300">AWS Certs</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-yellow-400">3rd</div>
                    <div className="text-sm text-gray-300">Place Award</div>
                  </div>
                </div>
                <Separator className="my-6 bg-gray-700" />
                <Button 
                  onClick={() => window.open(mockData.resumeUrl, '_blank')}
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800 bg-gray-900/50">
        <div className="container mx-auto text-center">
          <p className="text-gray-300">
            © 2025 Rishabh Patil. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;