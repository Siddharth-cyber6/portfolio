const header = {
  homepage: 'https://siddharth.github.io/cleanfolio',
  title: 'Siddhu.',
}

const about = {
  name: 'Siddharth Vijayakumar',
  role: 'Data Scientist',
  description: 'I am a data scientist with a strong foundation in data science, with expertise in key areas such as data analysis, data visualization, and statistical modeling. Through hands-on projects and coursework, I have developed proficiency in using tools like Python, R, and SQL to manipulate and analyze large datasets',
  // resume: '/Resume.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/siddharth-vijayakumar/',
    github: 'https://github.com/Siddharth-cyber6', 
  },
}

const projects = [
  {
    name: 'Blood Donation Support and Matchmaking',
    description: 'In this project, I developed a Blood Donation Support and Matchmaking system aimed at connecting blood donors with recipients in need. The system leverages data analysis to efficiently match donors based on location, blood type, and availability, ensuring timely and life-saving donations. This project reflects my ability to apply data-driven approaches to solve real-world challenges in healthcare.',
    stack: ['Django', 'HTML/CSS'],
    sourceCode: 'https://github.com/Siddharth-cyber6',//idhuvum ila
    // livePreview: 'https://github.com',
  },
  {
    name: 'Railway Reservation System',
    description: 'A new system to simplify the railway reservation system , this helps the user to reserve a train ticket easier.',
    stack: ['C'],
    sourceCode: 'https://github.com/Siddharth-cyber6',
    // livePreview: 'https://github.com',
  },
]

const skills = [
  'Python',
  'C/C++',
  'Competitive Programming',
  'Data Analysis',
  'Data Structures',
  'Skilled Team Coordination',
]

const education = [
  {
    period: '2023 - 2027',
    institution: 'SRM UNIVERSITY, RAMAPURAM, CHENNAI',
    degree: 'Undergraduate in Bachelor of Technology in Computer Science Engineering',
    gpa: '9.4 GPA',
  },
  {
    period: '2021 - 2023',
    institution: 'MAK Matriculation and Higher Secondary School, Chennai',
    degree: 'HSC +1, +2',// enaku HSC ha varum ila enna varum nu pathu potuko
    notable: 'Handball Winners in Zonals(2020), District level GOLD Medalist in Teakwondo(2019)',//idhuvum konjam pathu edit pannu venam na thukiko
  },
]

const certifications = [
  'JAVA Basics (OCT 2024) - Oracle',
  'Python 101 for Data Science (APR 2024) - IBM',
  'C++ Basics (FEB 2024) - Great Learning',
  'PYTHON ESSENTIALS (NOV 2023) - Cisco',
]

const contact = {
  email: 'siddharth.v006@gmail.com',
}

export { header, about, projects, skills, education, certifications, contact }