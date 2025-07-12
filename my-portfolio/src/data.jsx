// src/data.js

const data = {
  name: "Pathri Vidya Praveen",
  photoPlaceholder: "/mnt/c/Engineering/linkedin_profile_pic.jpg", // Remember to replace this with your actual image path
  headline: "B.Tech 2nd Year Student | Computer Science & Engineering | IIT Hyderabad",
  location: "Vijayawada, Andhra Pradesh, India",
  dob: "16 December 2006",
  phone: "+91 9494575728",
  email: "vidyapraveen.2006@gmail.com",
  github: "https://github.com/PathriVidyaPraveen",
  linkedin: "https://www.linkedin.com/in/pathri-vidya-praveen-9834b531a",
  codeforces: "https://codeforces.com/profile/Pathri_Vidya_Praveen",
  codechef: "https://www.codechef.com/users/praveen_0_6",
  leetcode: "https://leetcode.com/u/Pathri_Vidya_Praveen/",

  about: {
    summary: "I'm a 2nd-year B.Tech student in Computer Science and Engineering at IIT Hyderabad, driven by a deep curiosity for how things work—both mathematically and at the systems level. I'm passionate about exploring and building in the areas of Mathematics, Artificial Intelligence, Systems Programming, and Software Development.",
    detailed: "I love working on hands-on projects that push my understanding and allow me to apply theoretical concepts to real-world problems—especially those that can make life easier and more efficient for people. My core interests lie in the mathematical aspects of AI, Computer Vision and the low-level workings of computers like operating systems and hardware acceleration. Always eager to learn, build, and collaborate."
  },

  topSkills: [
    "C",
    "Python",
    "Mathematics",
    "Full Stack Development",
    "Artificial Intelligence"
  ],

  skills: [
    "SQL", "Go (Gin)", "Data Science", "Data Mining", "Machine Learning (ML)",
    "Deep Learning (DL)", "Cascading Style Sheets (CSS)", "Tailwind CSS", "HTML",
    "JavaScript", "FastAPI", "Systems Programming", "Computer Architecture",
    "Operating Systems", "Next.js", "Reinforcement Learning", "RISC-V Assembly Language",
    "Flask", "Mathematics", "Calculus", "Audio Processing", "Speech Processing",
    "ReactJS", "MongoDB", "Express.js", "Node.js", "Full-Stack Development",
    "Problem Solving", "Data Structures", "Computer Vision", "Data Structures and Algorithms",
    "Natural Language Processing (NLP)", "Computer-Aided Design (CAD)",
    "Digital Fabrication", "Bash", "Software Development Fundamentals", "Java",
    "Software Development", "Python (Programming Language)", "C++", "C (Programming Language)"
  ],

  education: [
    {
      institution: "Indian Institute of Technology, Hyderabad",
      degree: "B.Tech CSE",
      dates: "July 2024 - July 2028",
      grade: "9.71 (Highest GPA of 9.88 in 1st sem)",
      activities: "Participated in Tech-clubs in Sci-Tech Council of IITH like Lambda - Software Development Club and Epoch - AI ML and Data Science club",
      award: "Awarded with the prestigious Academic Excellence Award on 2 April, 2025 for my highest GPA of 9.88 among all the CSE'28 batch in the 1st semester."
    },
    {
      institution: "Narayana Junior College - Vijayawada",
      degree: "Intermediate - MPC",
      dates: "May 2022 - 2024",
      grade: "987/1000",
      achievements: "Rank of 84 in JEE Mains 2024, rank of 842 in JEE Advanced 2024. Awarded with the Certificate of Merit for getting placed in the National Top 1% in the National Standard Examination of Chemistry (NSEC)."
    }
  ],

  projects: [
    {
      name: "Sentiment Analysis With Stanford Dataset of IMBD Movie Reviews",
      association: "Epoch, IIT Hyderabad",
      dates: "Jul 2025 - Present",
      description: "Designed and implemented advanced NLP models combining RNNs/LSTMs with cutting-edge attention mechanisms (Bahdanau, Luong Dot/General/Concat) for sentiment classification. Built a modular, plug-and-play architecture enabling seamless integration of attention layers into both unidirectional and bidirectional models. Leveraged pre-trained GloVe embeddings and visualized attention maps to enhance model interpretability. Achieved robust performance across key metrics (accuracy, F1, precision, recall) and conducted comprehensive model benchmarking.",
      technologies: ["PyTorch", "Attention Mechanisms", "RNN", "LSTM", "GloVe", "NLP", "Deep Learning", "Model Interpretability", "Streamlit"],
      github: "https://github.com/PathriVidyaPraveen/Sentiment-Analysis-from-IMDB-Movie-Reviews",
      liveDemo: null
    },
    {
      name: "Multi-modal Candidate Shortlisting System",
      association: "Epoch, IIT Hyderabad",
      dates: "Jun 2025 - Present",
      description: "Multi-modal Resume Shortlisting using BERT + Tabular Data (Proof-of-Concept Project). Designed an end-to-end pipeline to classify candidate resumes based on textual and structured features using synthetic labels. Built a hybrid model combining BERT (for resume text) with a tabular MLP (for GPA & experience), achieving 91% F1 and 0.75 ROC-AUC. Engineered realistic noise in labels and simulated tabular data to reflect recruitment domain constraints. Implemented advanced techniques: GloVe embeddings, t-SNE visualization, class weighting, early stopping, and schedulers in PyTorch.",
      technologies: ["Natural Language Processing (NLP)", "Artificial Intelligence (AI)", "Machine Learning (ML)", "BERT", "PyTorch", "GloVe", "t-SNE"],
      github: "https://github.com/PathriVidyaPraveen/Multi-Modal-Candidate-Shortlisting-System",
      liveDemo: null
    },
    {
      name: "TL-Connect : Internal Management System of Tinkerer's Lab",
      association: "Tinkerers' Lab IITH",
      dates: "Jun 2025 - Present",
      description: "The aim of this project is to create a centralized internal management system for Tinkerers’ Lab, IITH. It will allow management of workshops, summer schools, internal assignments, and member coordination across domains.",
      technologies: ["Tailwind CSS", "Next.js"],
      github: "https://github.com/PathriVidyaPraveen/TL-Connect",
      liveDemo: "https://tlconnect.vercel.app/" // Assuming this is the link based on context
    },
    {
      name: "Facial Expression Detection with Support Vector Machines, Principal Component Analysis",
      association: "Epoch, IIT Hyderabad",
      dates: "Jun 2025",
      description: "Implemented facial expression detection using SVMs and PCA.",
      technologies: ["Artificial Intelligence (AI)", "Machine Learning (ML)", "Support Vector Machines (SVM)", "Principal Component Analysis (PCA)"],
      github: "https://github.com/PathriVidyaPraveen/Facial-Expression-Recognition-With-Limited-Data",
      liveDemo: null
    },
    {
      name: "Rock-Paper-Scissor-Detection",
      association: null,
      dates: "Jun 2025",
      description: "Took a Kaggle dataset of Rock Paper Scissor images and then trained a Convolutional Neural Network on it to find out the testing images.",
      technologies: ["Computer Vision", "Convolutional Neural Network (CNN)", "Kaggle"],
      github: "https://github.com/PathriVidyaPraveen/Rock-Paper-Scissors-Computer-Vision",
      liveDemo: null
    },
    {
      name: "IITH Mess Registration Web Application",
      association: "Lambda IIT Hyderabad",
      dates: null,
      description: "This Website is built using MERN stack for the IITH Mess Registration for both students and mess administrators. This is made using a random database cluster in MongoDB. Further improvements can be made to make it an efficient app.",
      technologies: ["Express.js", "Tailwind CSS", "Node.js", "HTML", "JavaScript", "MongoDB", "ReactJS", "Full-Stack Development", "MERN Stack"],
      github: "https://github.com/PathriVidyaPraveen/Mess-Registration-App",
      liveDemo: "https://mess-registration-app.vercel.app/" // Assuming this is the link based on context
    },
    {
      name: "Infinite Precision Calculator",
      association: "Indian Institute of Technology Hyderabad",
      dates: null,
      description: "Implemented arithmetic operations like addition, subtraction, multiplication, and division for infinite length or arbitrary precision integers and floating-point numbers.",
      technologies: ["Java"],
      github: "https://github.com/PathriVidyaPraveen/Infinite-Precision-Calculator-in-Java",
      liveDemo: null
    },
    {
      name: "Multimodal Emotion Recognition from Audio and Transcripts",
      association: "Epoch, IIT Hyderabad",
      dates: null,
      description: "We are given a dataset that contains audio clips of different actors in which they speak the same sentences with different emotions. We train a transformer or deep neural network model that finds out the emotion of a given audio clip after training the data. This is done using 2 techniques mainly - converting audio into mel spectrograms for visualization and training a CNN, converting text transcripts and simulating them with emotions and modeling text RNN.",
      technologies: ["Audio and Speech Processing", "Artificial Intelligence (AI)", "Machine Learning (ML)", "Deep Learning (DL)", "Transformers", "CNN", "RNN"],
      github: "https://github.com/PathriVidyaPraveen/Multimodal-Emotion-Recognition-from-Audio-and-Transcript",
      liveDemo: null
    },
    {
      name: "Spam Email Classifier",
      association: null,
      dates: null,
      description: "Implemented a spam email classifier using ML model Logistic regression using scikit-learn and NLP techniques like stop-words removal and TF-IDF vectorization which was able to predict with nearly 75% accuracy for completely unknown dataset with different vocabulary than the dataset I have trained. Currently trying to refine the hyperparameters by training my model with different datasets.",
      technologies: ["Python", "Natural Language Processing (NLP)", "Artificial Intelligence (AI)", "Machine Learning (ML)", "scikit-learn", "TF-IDF"],
      github: "https://github.com/PathriVidyaPraveen/Spam-Email-Classifier",
      liveDemo: null
    }
  ],

  certifications: [
    {
      name: "Deep Learning Specialization",
      issuer: "Stanford University and DeepLearning.AI",
      issuedDate: "Jul 2025",
      credentialId: "SCRMCI0E1III",
      skills: ["Natural Language Processing (NLP)", "Artificial Intelligence (AI)", "Machine Learning (ML)", "Deep Learning (DL)", "Computer Vision"],
      link: "https://www.coursera.org/account/accomplishments/specialization/certificate/SCRMCI0E1III" // Placeholder, replace with actual
    },
    {
      name: "Intro to Deep Learning",
      issuer: "Kaggle",
      issuedDate: "Jul 2025",
      skills: ["Artificial Intelligence (AI)", "Machine Learning (ML)", "Deep Learning (DL)"],
      link: "https://www.kaggle.com/learn/intro-to-deep-learning" // Placeholder, replace with actual
    },
    {
      name: "Developing Backend Apps with Node.js and Express",
      issuer: "IBM",
      issuedDate: "Jun 2025",
      skills: ["Node.js", "Express.js"],
      link: "https://www.credly.com/badges/your-badge-id" // Placeholder, replace with actual
    },
    {
      name: "Developing Front-End Apps with React",
      issuer: "IBM",
      issuedDate: "Jun 2025",
      skills: ["ReactJS"],
      link: "https://www.credly.com/badges/your-badge-id" // Placeholder, replace with actual
    },
    {
      name: "Go: The Complete Developer's Guide (Golang)",
      issuer: "Udemy",
      issuedDate: "Jun 2025",
      skills: ["Go (Programming Language)", "Gin"],
      link: "https://www.udemy.com/certificate/UC-XXXXX/" // Placeholder, replace with actual
    },
    {
      name: "Introduction to Cybersecurity Careers",
      issuer: "IBM",
      issuedDate: "Jun 2025",
      skills: [],
      link: "https://www.credly.com/badges/your-badge-id" // Placeholder, replace with actual
    },
    {
      name: "Introduction to Cybersecurity Essentials",
      issuer: "IBM",
      issuedDate: "Jun 2025",
      skills: [],
      link: "https://www.credly.com/badges/your-badge-id" // Placeholder, replace with actual
    },
    {
      name: "Machine Learning Specialization",
      issuer: "Stanford University and DeepLearning.AI",
      issuedDate: "Jun 2025",
      skills: ["Reinforcement Learning", "Data Science", "Data Mining", "Artificial Intelligence (AI)", "Machine Learning (ML)", "Deep Learning (DL)"],
      link: "https://www.coursera.org/account/accomplishments/specialization/certificate/XXXXX" // Placeholder, replace with actual
    },
    {
      name: "Next.js App Router Fundamentals",
      issuer: "Vercel",
      issuedDate: "Jun 2025",
      credentialId: "dashboard-app",
      skills: ["Next.js"],
      link: "https://vercel.com/XXXXX/certificate" // Placeholder, replace with actual
    },
    {
      name: "Developing AI Applications with Python and Flask",
      issuer: "IBM",
      issuedDate: "May 2025",
      skills: ["Flask"],
      link: "https://www.credly.com/badges/your-badge-id" // Placeholder, replace with actual
    },
    {
      name: "Getting Started with Git and GitHub",
      issuer: "IBM",
      issuedDate: "May 2025",
      skills: [],
      link: "https://www.credly.com/badges/your-badge-id" // Placeholder, replace with actual
    },
    {
      name: "Python for Data Science, AI and Development",
      issuer: "IBM",
      issuedDate: "May 2025",
      skills: ["Python (Programming Language)"],
      link: "https://www.credly.com/badges/your-badge-id" // Placeholder, replace with actual
    },
    {
      name: "Intro to Machine Learning",
      issuer: "Kaggle",
      issuedDate: "Mar 2025",
      skills: ["Artificial Intelligence (AI)", "Machine Learning (ML)", "Deep Learning (DL)"],
      link: "https://www.kaggle.com/learn/intro-to-machine-learning" // Placeholder, replace with actual
    },
    {
      name: "Intro to Programming",
      issuer: "Kaggle",
      issuedDate: "Mar 2025",
      skills: ["Python (Programming Language)"],
      link: "https://www.kaggle.com/learn/intro-to-programming" // Placeholder, replace with actual
    },
    {
      name: "Python",
      issuer: "Kaggle",
      issuedDate: "Mar 2025",
      skills: ["Python (Programming Language)"],
      link: "https://www.kaggle.com/learn/python" // Placeholder, replace with actual
    },
    {
      name: "Introduction to HTML, CSS and JavaScript",
      issuer: "IBM",
      issuedDate: null,
      skills: ["Cascading Style Sheets (CSS)", "Tailwind", "HTML", "JavaScript"],
      link: "https://www.credly.com/badges/your-badge-id" // Placeholder, replace with actual
    },
    {
      name: "Introduction to Software Engineering",
      issuer: "IBM",
      issuedDate: null,
      skills: [],
      link: "https://www.credly.com/badges/your-badge-id" // Placeholder, replace with actual
    }
  ],

  courses: [
    "Artificial Intelligence (ID1050)", "Calculus - 2 (MA1220)", "Calculus-1 (MA1110)",
    "Computer Architecture (CS2323)", "Data Structures (CS2233)", "Database Management Systems 1 (CS3550)",
    "Differential Equations (MA1150)", "Digital Circuits (EE1202)", "Digital Fabrication (ID1054)",
    "Discrete Mathematics (CS1010)", "Group Theory (MA2070)", "Introduction to Programming (ID1063)",
    "Linear Algebra (MA2550)", "Numerical Analysis (MA3060)", "Operating Systems 1 (CS3510)",
    "Probability and Random Variables (AI1110)", "Random Processes (EE2080)",
    "Software Development Fundamentals (CS1023)", "Transform Techniques (MA2120)"
  ],

  honorsAndAwards: [
    {
      name: "Academic Excellence Award 2025",
      issuer: "Indian Institute of Technology, Hyderabad",
      date: "Apr 2025",
      description: "Awarded with the Academic Excellence Award on April 2 2025 for securing the highest CGPA of 9.88 in the Department of Computer Science and Engineering on occasion of 17th Foundation Day of IITH."
    },
    {
      name: "Certificate of Merit from National Standard Examination in Chemistry(NSEC)",
      issuer: "Association of Chemistry Teachers, Homi Bhabha Centre for Science Education",
      date: "Nov 2023",
      description: "Awarded with the Certificate of Merit in NSEC 2023 conducted on 26th November 2023 for getting placed in the National Top 1% of the participants."
    }
  ],

  testScores: [
    {
      name: "JEE Advanced 2024",
      score: "240 / 360",
      date: "May 2024",
      rank: "AIR 842 (General), AIR 123 (OBC-NCL)"
    },
    {
      name: "JEE Mains 2024",
      score: "295 / 300",
      date: "Apr 2024",
      rank: "AIR 84 (General), AIR 14 (OBC-NCL)"
    }
  ],

  languages: [
    { name: "English", proficiency: "Full professional proficiency" },
    { name: "Hindi", proficiency: "Elementary proficiency" },
    { name: "Telugu", proficiency: "Native or bilingual proficiency" }
  ]
};

export default data;