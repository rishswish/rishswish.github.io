import { 
  Brain, 
  Code, 
  Database, 
  Globe, 
  BarChart3, 
  Cloud,
  Award,
  Trophy,
  Star,
  BookOpen,
  GraduationCap,
  Briefcase,
  Calendar,
  Building
} from 'lucide-react';

export const mockData = {
  profileImage: "https://rishswish.github.io/images/rishabh_img.JPG",
  resumeUrl: "https://rishswish.github.io/Rishabh_Patil_NYU_Resume_Intern.pdf",
  
  contact: {
    email: "rbp5812@nyu.edu",
    phone: "+1 929-424-7773",
    linkedin: "https://linkedin.com/in/rishabhbhaskarpatil",
    github: "https://github.com/rishswish",
    website: "https://rishswish.github.io",
    location: "New York, NY"
  },

  skills: [
    {
      category: "Machine Learning",
      icon: Brain,
      skills: ["TensorFlow", "PyTorch", "SciKit-Learn", "OpenCV", "Keras", "YOLO", "NLP", "LangChain", "Hugging Face"]
    },
    {
      category: "Programming & Tools",
      icon: Code,
      skills: ["Python", "R", "SQL", "Git", "GitHub", "Jupyter", "PyCharm", "Spyder", "CUDA"]
    },
    {
      category: "Databases & Cloud",
      icon: Database,
      skills: ["MySQL", "PostgreSQL", "SQLite", "MongoDB", "AWS", "BigQuery", "Snowflake", "Azure Synapse"]
    },
    {
      category: "Web & Visualization",
      icon: Globe,
      skills: ["Streamlit", "Flask", "React", "Django", "PowerBI", "Tableau", "Looker", "Plotly"]
    },
    {
      category: "Data Analysis",
      icon: BarChart3,
      skills: ["Pandas", "NumPy", "A/B Testing", "Hypothesis Testing", "Causal Inference", "Time-Series", "ARIMA"]
    },
    {
      category: "Big Data & DevOps",
      icon: Cloud,
      skills: ["Hadoop", "Apache Spark", "Kafka", "Kubernetes", "Jenkins", "Docker", "Splunk", "Cassandra", "PySpark", "Dask"]
    }
  ],

  projects: [
    {
      title: "Progressive Learning in LLMs with Structured Grammar Books",
      duration: "January 2025 – May 2025",
      image: "https://customer-assets.emergentagent.com/job_4e8ce6b1-8300-426d-aa1b-6d0e5fa5aafb/artifacts/w15zj4ab_grammer-learning.png",
      highlights: [
        "Curated a 345-lesson curriculum from New Concept English using Tesseract OCR and Stanza, generating 1.7K syntax feature vectors (POS, DEP, NER, morphology)",
        "Built Transformer variants (SyntaxGPT, SyntaxT5) by concatenating token + syntax embeddings, cutting pre-training time from 2.5 days to 3 hours (-95% compute)",
        "SyntaxT5 achieved 87% accuracy on TREC benchmark with 52% faster inference (236s → 114s) over baseline models"
      ],
      technologies: ["PyTorch", "Hugging Face", "Transformers", "Tesseract OCR", "Stanza", "TREC", "NLP"],
      github: "https://github.com/rishswish"
    },
    {
      title: "Driver Drowsiness Detection System Using YOLOv5",
      duration: "January 2022 – January 2024",
      image: "https://customer-assets.emergentagent.com/job_4e8ce6b1-8300-426d-aa1b-6d0e5fa5aafb/artifacts/ini9z5do_driver-drowsiness-detection.png",
      highlights: [
        "Trained dual YOLOv5 models (eye-closure & yawning) on 1.2K+ annotated images, achieving 85% accuracy with 30% faster alert-response",
        "Integrated CNN-fusion layer that reduced false positives by 20% and improved accuracy by 15%, processing 1M+ video frames",
        "Awarded 3rd Prize in AI & Deep Learning track at ICDMAI 2024; findings published in Springer LNNS 998"
      ],
      technologies: ["YOLOv5", "Computer Vision", "CNN", "OpenCV", "Python", "Deep Learning"],
      github: "https://github.com/rishswish"
    },
    {
      title: "Personalized Recipe Recommendation System",
      duration: "July 2023 - May 2024",
      image: "https://customer-assets.emergentagent.com/job_4e8ce6b1-8300-426d-aa1b-6d0e5fa5aafb/artifacts/66ieat0e_recipe-recommendation-system.png",
      highlights: [
        "Built Flask interface backed by GPT-4 + text-embedding-ada-002 + LanceDB RAG pipeline, driving 35% jump in user engagement",
        "Designed allergy-aware cosine-similarity scorer with real-time feedback loop, boosting user-satisfaction scores by 50%",
        "Orchestrated cloud workflows with LangChain, Pandas, NumPy, serving real-time recommendations to 10K+ sessions"
      ],
      technologies: ["Flask", "GPT-4", "LanceDB", "RAG", "LangChain", "Pandas", "NumPy", "Cosine Similarity"],
      github: "https://github.com/rishswish"
    },
    {
      title: "MovieLens Recommendation & Segmentation",
      duration: "January 2025 – May 2025",
      image: "https://customer-assets.emergentagent.com/job_4e8ce6b1-8300-426d-aa1b-6d0e5fa5aafb/artifacts/ojlon211_Big-Data-Project.png",
      highlights: [
        "Built terabyte-scale PySpark + Hadoop pipeline on full MovieLens corpus (330K users / 86K movies), enabling distributed analytics",
        "Developed two recommenders: Spark ALS model with +30% Precision@100 and bias-corrected popularity model for 90% sparse data",
        "Achieved +66% MAP and 20× ALS performance improvement with sub-second latency using MinHash + LSH"
      ],
      technologies: ["PySpark", "Hadoop", "ALS", "MinHash", "LSH", "Big Data", "Recommendation Systems"],
      github: "https://github.com/rishswish"
    }
  ],

  timeline: [
    {
      title: "MS in Data Science",
      organization: "New York University",
      period: "Sep 2024 - May 2026",
      description: "Currently pursuing Master's degree with focus on Natural Language Understanding, Big Data, and Machine Learning (GPA: 3.78/4.0)",
      icon: GraduationCap,
      color: "bg-green-500",
      achievement: "Selected among top 0.5% applicants nationwide"
    },
    {
      title: "NLP Intern",
      organization: "Muck Rack, New York",
      period: "Aug 2025 - Present",
      description: "Implementing RAG-powered chatbot solutions with GPT-4.5, LangChain, and Weaviate for enterprise media intelligence platform",
      icon: Briefcase,
      color: "bg-blue-500"
    },
    {
      title: "B.Tech in Data Science (Honors)",
      organization: "University of Mumbai",
      period: "Jul 2020 - May 2024",
      description: "Graduated with Honors in Computational Finance, specializing in Data Science and Engineering (GPA: 3.96/4.0)",
      icon: GraduationCap,
      color: "bg-green-500",
      achievement: "Dean's List all semesters, Research Project Leadership"
    },
    {
      title: "Generative AI Intern",
      organization: "Solar Secure Solution, India",
      period: "Feb 2023 - Apr 2023",
      description: "Built real-time IoT analytics pipeline with predictive insights using ARIMA modeling, cutting incident response time by 40%",
      icon: Briefcase,
      color: "bg-blue-500"
    },
    {
      title: "Machine Learning Intern",
      organization: "Acmegrade Pvt Ltd, India",
      period: "Jul 2022 - Sep 2022",
      description: "Developed Computer Vision + NLP pipeline using Azure OCR, reducing processing time by 25% and manual review effort by 75%",
      icon: Briefcase,
      color: "bg-blue-500"
    }
  ],

  certifications: [
    {
      title: "AWS Academy Cloud Architecting",
      issuer: "Amazon Web Services",
      year: "May 2023",
      image: "https://customer-assets.emergentagent.com/job_4e8ce6b1-8300-426d-aa1b-6d0e5fa5aafb/artifacts/wkrq7j6q_AWS%20Academy%20Cloud%20Architecting.png",
    },
    {
      title: "AWS Academy Data Engineering",
      issuer: "Amazon Web Services",
      year: "May 2023",
      image: "https://customer-assets.emergentagent.com/job_4e8ce6b1-8300-426d-aa1b-6d0e5fa5aafb/artifacts/xz0gyr8a_AWS%20Academy%20Data%20Engineering.png",
    },
    {
      title: "AWS Academy Data Analytics",
      issuer: "Amazon Web Services",
      year: "July 2022",
      image: "https://customer-assets.emergentagent.com/job_4e8ce6b1-8300-426d-aa1b-6d0e5fa5aafb/artifacts/v6jqz9ef_aws%20data%20analytics.png",
    },
    {
      title: "AWS Academy Cloud Foundations",
      issuer: "Amazon Web Services",
      year: "2022",
      image: "https://customer-assets.emergentagent.com/job_4e8ce6b1-8300-426d-aa1b-6d0e5fa5aafb/artifacts/71orr277_Aws%20cloud%20foundations.png",
    }
  ],

  experience: [
    {
      title: "NLP Intern",
      company: "Muck Rack",
      location: "New York, USA",
      duration: "Aug 2025 - Present",
      highlights: [
        "Partnered with enterprise stakeholders to co-design and implement a RAG-powered chatbot solution on modern LLM stack (GPT-4.5, LangChain, Weaviate)",
        "Delivered 40% faster review cycle and 10% cost reductions, meeting business goals",
        "Implemented enterprise-grade AI solution for media intelligence platform"
      ]
    },
    {
      title: "Generative AI Intern",
      company: "Solar Secure Solution",
      location: "Karnataka, India",
      duration: "Feb 2023 - Apr 2023",
      highlights: [
        "Built real-time IoT telemetry analytics pipeline using Pandas, Plotly, and Streamlit to visualize latency, packet loss, and device uptime",
        "Cut incident response time by 40% and enabled proactive monitoring across thousands of nodes",
        "Designed predictive insights via time-series modeling (ARIMA, rolling averages) with 78% precision for high-risk device detection"
      ]
    },
    {
      title: "Machine Learning Intern",
      company: "Acmegrade Pvt Ltd",
      location: "Karnataka, India",
      duration: "Jul 2022 - Sep 2022",
      highlights: [
        "Developed Python-based Computer Vision + NLP pipeline using Azure OCR to auto-extract key data fields from PDFs and log files",
        "Reduced processing time by 25% while increasing downstream analytics throughput",
        "Architected prompt-engineering modules that eliminated 75% of manual review effort and expanded cross-team visibility"
      ]
    }
  ],

  education: [
    {
      degree: "M.S. in Data Science",
      school: "New York University, Center for Data Science",
      duration: "September 2024 – May 2026",
      gpa: "3.78/4.0",
      coursework: ["Natural Language Understanding", "Big Data", "Machine Learning", "Computational Linear Algebra"]
    },
    {
      degree: "B.Tech in Computer Science and Engineering (Data Science)",
      school: "University of Mumbai",
      duration: "July 2020 - May 2024",
      gpa: "3.96/4.0",
      coursework: ["Time-Series", "Cloud Computing", "Deep Learning", "Database Management", "Computer Vision", "Reinforcement Learning"]
    }
  ]
};