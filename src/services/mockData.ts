export interface Candidate {
  id: number;
  name: string;
  role: string;
  matchPercentage: number;
  resumeContent: string;
  aiComment: string;
  interviewQuestions: string;
}

export interface Job {
  id: number;
  title: string;
  location: string;
  employmentType: string;
  experienceLevel: string;
  description: string;
  requirements: string;
  responsibilities: string;
  skills: string;
  candidates: Candidate[];
}

export const jobsMockData: Job[] = [
  {
    id: 1,
    title: "UX/UI Designer",
    location: "New York, NY",
    employmentType: "Full-time",
    experienceLevel: "Mid/Senior (3+ years)",
    description: "Design user-friendly interfaces and experiences.",
    requirements: "Proficiency in Figma, Sketch, or Adobe XD.",
    responsibilities:
      "Collaborate with cross-functional teams to create wireframes and prototypes.",
    skills: "UI/UX, Prototyping, Wireframing, Communication",
    candidates: [
      {
        id: 1,
        name: "Sarah Johnson",
        role: "UX Designer",
        matchPercentage: 92,
        resumeContent: "Resume content for Sarah Johnson.",
        aiComment:
          "Sarah has a strong UX background and design thinking skills.",
        interviewQuestions:
          "1) Tell us about your design process.\n2) How do you conduct user research?",
      },
      {
        id: 2,
        name: "Michael Brown",
        role: "UI/UX Designer",
        matchPercentage: 85,
        resumeContent: "Resume content for Michael Brown.",
        aiComment: "Michael excels in prototyping and rapid iteration.",
        interviewQuestions:
          "1) How do you handle design critiques?\n2) Favorite design tool and why?",
      },
      {
        id: 3,
        name: "Emily Davis",
        role: "Product Designer",
        matchPercentage: 78,
        resumeContent: "Resume content for Emily Davis.",
        aiComment: "Emily has experience with end-to-end product design.",
        interviewQuestions:
          "1) How do you balance user needs and business goals?\n2) Experience with user testing?",
      },
      {
        id: 4,
        name: "David Wilson",
        role: "UX Engineer",
        matchPercentage: 88,
        resumeContent: "Resume content for David Wilson.",
        aiComment: "David has a mix of coding and design skills.",
        interviewQuestions:
          "1) How do you collaborate with developers?\n2) What frameworks do you prefer?",
      },
      {
        id: 5,
        name: "Sophia Martinez",
        role: "Visual Designer",
        matchPercentage: 90,
        resumeContent: "Resume content for Sophia Martinez.",
        aiComment: "Sophia's portfolio shows a strong visual style.",
        interviewQuestions:
          "1) Favorite design trends?\n2) Approach to branding consistency?",
      },
    ],
  },
  {
    id: 2,
    title: "Frontend Developer",
    location: "San Francisco, CA",
    employmentType: "Full-time",
    experienceLevel: "Junior (1+ years)",
    description:
      "Build and maintain user-facing features using modern web technologies.",
    requirements: "Proficiency in React or Vue, HTML, CSS, and JavaScript.",
    responsibilities: "Implement UI components and ensure responsive design.",
    skills: "React, JavaScript, CSS, Responsive Design",
    candidates: [
      {
        id: 1,
        name: "Alex Johnson",
        role: "React Developer",
        matchPercentage: 80,
        resumeContent: "Resume content for Alex Johnson.",
        aiComment:
          "Alex has a solid grasp of React hooks and state management.",
        interviewQuestions:
          "1) How do you manage global state?\n2) Experience with Redux or Context API?",
      },
      {
        id: 2,
        name: "Maria Gomez",
        role: "Frontend Engineer",
        matchPercentage: 75,
        resumeContent: "Resume content for Maria Gomez.",
        aiComment: "Maria excels at building reusable UI components.",
        interviewQuestions:
          "1) How do you structure large React projects?\n2) Experience with TypeScript?",
      },
      {
        id: 3,
        name: "James Smith",
        role: "Vue Developer",
        matchPercentage: 70,
        resumeContent: "Resume content for James Smith.",
        aiComment: "James is experienced in Vuex and Composition API.",
        interviewQuestions:
          "1) Vue2 vs Vue3 differences?\n2) Approach to code splitting?",
      },
      {
        id: 4,
        name: "Laura Clark",
        role: "UI Developer",
        matchPercentage: 85,
        resumeContent: "Resume content for Laura Clark.",
        aiComment: "Laura has a keen eye for UI/UX details.",
        interviewQuestions:
          "1) Favorite CSS methodologies?\n2) Working with design systems?",
      },
      {
        id: 5,
        name: "Brian Lee",
        role: "JavaScript Developer",
        matchPercentage: 68,
        resumeContent: "Resume content for Brian Lee.",
        aiComment: "Brian is strong in core JavaScript and ES6+ features.",
        interviewQuestions:
          "1) How do you handle async/await?\n2) Familiar with bundlers like Webpack?",
      },
    ],
  },
  {
    id: 3,
    title: "Backend Engineer",
    location: "Austin, TX",
    employmentType: "Full-time",
    experienceLevel: "Mid/Senior (3+ years)",
    description: "Develop and optimize server-side logic and APIs.",
    requirements:
      "Experience with Node.js or Python, databases, and RESTful APIs.",
    responsibilities:
      "Build scalable back-end services and integrate with front-end.",
    skills: "Node.js, Express, MongoDB, SQL, Python",
    candidates: [
      {
        id: 1,
        name: "Daniel Roberts",
        role: "Node.js Engineer",
        matchPercentage: 82,
        resumeContent: "Resume content for Daniel Roberts.",
        aiComment: "Daniel has experience with Express and microservices.",
        interviewQuestions:
          "1) How do you handle authentication?\n2) Experience with Docker or containers?",
      },
      {
        id: 2,
        name: "Patricia White",
        role: "Python Developer",
        matchPercentage: 88,
        resumeContent: "Resume content for Patricia White.",
        aiComment: "Patricia is proficient in Django/Flask frameworks.",
        interviewQuestions:
          "1) How do you structure Django apps?\n2) Approach to caching?",
      },
      {
        id: 3,
        name: "Jason King",
        role: "Backend Developer",
        matchPercentage: 75,
        resumeContent: "Resume content for Jason King.",
        aiComment: "Jason has solid SQL knowledge and RESTful design.",
        interviewQuestions:
          "1) Difference between SQL and NoSQL?\n2) Best practices for API versioning?",
      },
      {
        id: 4,
        name: "Olivia Turner",
        role: "Server-Side Engineer",
        matchPercentage: 83,
        resumeContent: "Resume content for Olivia Turner.",
        aiComment:
          "Olivia is strong in distributed systems and message queues.",
        interviewQuestions: "1) Kafka vs RabbitMQ?\n2) Handling concurrency?",
      },
      {
        id: 5,
        name: "Andrew Hall",
        role: "API Developer",
        matchPercentage: 70,
        resumeContent: "Resume content for Andrew Hall.",
        aiComment: "Andrew focuses on building clean, well-documented APIs.",
        interviewQuestions:
          "1) Approach to OpenAPI/Swagger?\n2) Error handling patterns?",
      },
    ],
  },
  {
    id: 4,
    title: "Data Scientist",
    location: "Boston, MA",
    employmentType: "Full-time",
    experienceLevel: "Senior (5+ years)",
    description:
      "Analyze data to extract insights and build predictive models.",
    requirements:
      "Proficiency in Python, SQL, machine learning libraries (TensorFlow, PyTorch).",
    responsibilities:
      "Work with cross-functional teams to derive data-driven solutions.",
    skills: "Python, ML, Deep Learning, Data Visualization",
    candidates: [
      {
        id: 1,
        name: "Megan Brooks",
        role: "ML Engineer",
        matchPercentage: 90,
        resumeContent: "Resume content for Megan Brooks.",
        aiComment:
          "Megan is skilled in building neural networks and data pipelines.",
        interviewQuestions:
          "1) Experience with TensorFlow vs PyTorch?\n2) Approaches to model deployment?",
      },
      {
        id: 2,
        name: "Jacob Rivera",
        role: "Data Scientist",
        matchPercentage: 88,
        resumeContent: "Resume content for Jacob Rivera.",
        aiComment:
          "Jacob has strong statistical background and feature engineering.",
        interviewQuestions:
          "1) Favorite data visualization techniques?\n2) Handling imbalanced datasets?",
      },
      {
        id: 3,
        name: "Sophia Adams",
        role: "AI Researcher",
        matchPercentage: 85,
        resumeContent: "Resume content for Sophia Adams.",
        aiComment: "Sophia has published papers on NLP and computer vision.",
        interviewQuestions:
          "1) Transformers vs RNN?\n2) Handling large-scale text data?",
      },
      {
        id: 4,
        name: "Ethan Collins",
        role: "Data Analyst",
        matchPercentage: 75,
        resumeContent: "Resume content for Ethan Collins.",
        aiComment: "Ethan is strong in data cleaning and descriptive analysis.",
        interviewQuestions:
          "1) How do you validate data?\n2) Approach to building dashboards?",
      },
      {
        id: 5,
        name: "Natalie Baker",
        role: "ML Ops Engineer",
        matchPercentage: 80,
        resumeContent: "Resume content for Natalie Baker.",
        aiComment: "Natalie focuses on model lifecycle and CI/CD pipelines.",
        interviewQuestions:
          "1) Tools for model monitoring?\n2) Handling version control for ML models?",
      },
    ],
  },
  {
    id: 5,
    title: "Product Manager",
    location: "Chicago, IL",
    employmentType: "Full-time",
    experienceLevel: "Mid/Senior (3+ years)",
    description:
      "Define product vision and work with teams to deliver features.",
    requirements:
      "Experience in Agile, stakeholder management, and product lifecycle.",
    responsibilities:
      "Translate business needs into product roadmaps and user stories.",
    skills: "Agile, Roadmapping, Communication, Leadership",
    candidates: [
      {
        id: 1,
        name: "Victoria Moore",
        role: "Technical PM",
        matchPercentage: 85,
        resumeContent: "Resume content for Victoria Moore.",
        aiComment:
          "Victoria excels in bridging technical and business requirements.",
        interviewQuestions:
          "1) How do you prioritize backlog?\n2) Handling stakeholder conflicts?",
      },
      {
        id: 2,
        name: "Mark Allen",
        role: "Product Owner",
        matchPercentage: 80,
        resumeContent: "Resume content for Mark Allen.",
        aiComment: "Mark has strong Agile/Scrum background.",
        interviewQuestions:
          "1) Sprint planning strategies?\n2) Managing changing requirements?",
      },
      {
        id: 3,
        name: "Anna Reed",
        role: "Product Strategist",
        matchPercentage: 78,
        resumeContent: "Resume content for Anna Reed.",
        aiComment: "Anna focuses on market analysis and user research.",
        interviewQuestions:
          "1) Approach to product-market fit?\n2) Competitive analysis methods?",
      },
      {
        id: 4,
        name: "George Cooper",
        role: "Associate PM",
        matchPercentage: 72,
        resumeContent: "Resume content for George Cooper.",
        aiComment:
          "George is newer to product management but shows great potential.",
        interviewQuestions:
          "1) Handling cross-functional communication?\n2) Roadmap vs backlog differences?",
      },
      {
        id: 5,
        name: "Ella Perez",
        role: "Senior PM",
        matchPercentage: 88,
        resumeContent: "Resume content for Ella Perez.",
        aiComment: "Ella has experience leading large product teams.",
        interviewQuestions:
          "1) Examples of product pivots?\n2) Handling user feedback loops?",
      },
    ],
  },
  {
    id: 6,
    title: "Mobile Developer",
    location: "Seattle, WA",
    employmentType: "Full-time",
    experienceLevel: "Mid (2+ years)",
    description:
      "Build and maintain iOS/Android apps with focus on performance.",
    requirements:
      "Swift/Kotlin/React Native, knowledge of app store deployments.",
    responsibilities:
      "Develop new features, fix bugs, and optimize mobile performance.",
    skills: "iOS, Android, React Native, Swift, Kotlin",
    candidates: [
      {
        id: 1,
        name: "Carlos Hernandez",
        role: "iOS Developer",
        matchPercentage: 83,
        resumeContent: "Resume content for Carlos Hernandez.",
        aiComment: "Carlos is proficient in Swift and UIKit.",
        interviewQuestions:
          "1) How do you handle memory management?\n2) Familiar with SwiftUI?",
      },
      {
        id: 2,
        name: "Diana Liu",
        role: "Android Developer",
        matchPercentage: 78,
        resumeContent: "Resume content for Diana Liu.",
        aiComment:
          "Diana has strong Kotlin background and MVVM architecture knowledge.",
        interviewQuestions:
          "1) How do you structure Android projects?\n2) Jetpack Compose experience?",
      },
      {
        id: 3,
        name: "Steven Wright",
        role: "React Native Developer",
        matchPercentage: 82,
        resumeContent: "Resume content for Steven Wright.",
        aiComment: "Steven can build cross-platform apps quickly.",
        interviewQuestions:
          "1) Handling platform-specific code?\n2) Approach to performance optimization?",
      },
      {
        id: 4,
        name: "Laura Turner",
        role: "Mobile Engineer",
        matchPercentage: 76,
        resumeContent: "Resume content for Laura Turner.",
        aiComment:
          "Laura is skilled in push notifications and offline storage.",
        interviewQuestions:
          "1) Best practices for offline support?\n2) Testing strategies on multiple devices?",
      },
      {
        id: 5,
        name: "Tommy Fisher",
        role: "iOS/Android Developer",
        matchPercentage: 70,
        resumeContent: "Resume content for Tommy Fisher.",
        aiComment: "Tommy has dabbled in both iOS and Android dev.",
        interviewQuestions:
          "1) Experience with multi-platform frameworks?\n2) Handling app store approvals?",
      },
    ],
  },
  {
    id: 7,
    title: "DevOps Engineer",
    location: "Denver, CO",
    employmentType: "Full-time",
    experienceLevel: "Senior (5+ years)",
    description: "Implement CI/CD pipelines and manage cloud infrastructure.",
    requirements: "AWS/Azure, Docker, Kubernetes, Terraform, CI/CD tools.",
    responsibilities:
      "Automate deployments, monitor systems, ensure reliability.",
    skills: "AWS, Docker, Kubernetes, Terraform, Jenkins",
    candidates: [
      {
        id: 1,
        name: "Henry Campbell",
        role: "Cloud DevOps",
        matchPercentage: 88,
        resumeContent: "Resume content for Henry Campbell.",
        aiComment: "Henry is proficient in AWS and Terraform scripts.",
        interviewQuestions:
          "1) How do you manage infrastructure as code?\n2) Security best practices?",
      },
      {
        id: 2,
        name: "Eva Sanchez",
        role: "DevOps Engineer",
        matchPercentage: 82,
        resumeContent: "Resume content for Eva Sanchez.",
        aiComment: "Eva has strong CI/CD knowledge with Jenkins and GitLab CI.",
        interviewQuestions:
          "1) Handling rolling updates?\n2) Approach to microservices architecture?",
      },
      {
        id: 3,
        name: "Leo Price",
        role: "Site Reliability Engineer",
        matchPercentage: 80,
        resumeContent: "Resume content for Leo Price.",
        aiComment: "Leo focuses on observability and scaling.",
        interviewQuestions:
          "1) How do you implement monitoring?\n2) Handling incident management?",
      },
      {
        id: 4,
        name: "Rachel Ward",
        role: "Kubernetes Specialist",
        matchPercentage: 85,
        resumeContent: "Resume content for Rachel Ward.",
        aiComment: "Rachel is experienced with Helm charts and K8s networking.",
        interviewQuestions:
          "1) Namespaces vs pods?\n2) Ingress controller usage?",
      },
      {
        id: 5,
        name: "Isaac Foster",
        role: "Infrastructure Engineer",
        matchPercentage: 78,
        resumeContent: "Resume content for Isaac Foster.",
        aiComment:
          "Isaac has experience with Terraform and multi-cloud setups.",
        interviewQuestions:
          "1) How do you structure Terraform modules?\n2) Handling drift detection?",
      },
    ],
  },
  {
    id: 8,
    title: "QA Engineer",
    location: "Atlanta, GA",
    employmentType: "Full-time",
    experienceLevel: "Mid (2+ years)",
    description: "Develop and execute test plans to ensure product quality.",
    requirements:
      "Manual/automated testing, Selenium/Cypress, bug tracking tools.",
    responsibilities:
      "Write test cases, perform regression testing, report issues.",
    skills: "Testing, Selenium, Cypress, QA methodologies",
    candidates: [
      {
        id: 1,
        name: "Julia Morris",
        role: "QA Automation Engineer",
        matchPercentage: 85,
        resumeContent: "Resume content for Julia Morris.",
        aiComment: "Julia is skilled in Selenium and building test frameworks.",
        interviewQuestions:
          "1) How do you handle flaky tests?\n2) CI integration strategies?",
      },
      {
        id: 2,
        name: "Peter Coleman",
        role: "Manual Tester",
        matchPercentage: 70,
        resumeContent: "Resume content for Peter Coleman.",
        aiComment:
          "Peter has a detail-oriented approach to exploratory testing.",
        interviewQuestions:
          "1) Test case design best practices?\n2) Bug triage process?",
      },
      {
        id: 3,
        name: "Rachel Evans",
        role: "SDET",
        matchPercentage: 78,
        resumeContent: "Resume content for Rachel Evans.",
        aiComment: "Rachel can write code to automate tests effectively.",
        interviewQuestions:
          "1) How do you approach performance testing?\n2) Handling test data generation?",
      },
      {
        id: 4,
        name: "Adam Barnes",
        role: "QA Engineer",
        matchPercentage: 75,
        resumeContent: "Resume content for Adam Barnes.",
        aiComment: "Adam is experienced in agile testing ceremonies.",
        interviewQuestions:
          "1) Sprint-based testing approach?\n2) Collaboration with developers?",
      },
      {
        id: 5,
        name: "Lauren Griffin",
        role: "Test Analyst",
        matchPercentage: 80,
        resumeContent: "Resume content for Lauren Griffin.",
        aiComment: "Lauren excels at creating clear, reproducible bug reports.",
        interviewQuestions:
          "1) Reproducing intermittent bugs?\n2) Writing acceptance criteria?",
      },
    ],
  },
  {
    id: 9,
    title: "Full-Stack Developer",
    location: "Remote",
    employmentType: "Full-time",
    experienceLevel: "Senior (5+ years)",
    description: "Build end-to-end solutions across front-end and back-end.",
    requirements:
      "React/Angular/Vue, Node.js/Python/Ruby, databases, cloud deployment.",
    responsibilities:
      "Develop features across the stack, maintain code quality.",
    skills: "React, Node.js, Docker, CI/CD, Databases",
    candidates: [
      {
        id: 1,
        name: "Olivia Stone",
        role: "Full-Stack Engineer",
        matchPercentage: 85,
        resumeContent: "Resume content for Olivia Stone.",
        aiComment: "Olivia has balanced front-end and back-end expertise.",
        interviewQuestions:
          "1) How do you structure a monorepo?\n2) Handling SSR vs client-side rendering?",
      },
      {
        id: 2,
        name: "Ethan Carter",
        role: "MERN Developer",
        matchPercentage: 82,
        resumeContent: "Resume content for Ethan Carter.",
        aiComment: "Ethan is proficient in MongoDB, Express, React, Node.",
        interviewQuestions:
          "1) Mongoose schema design?\n2) Managing large React apps?",
      },
      {
        id: 3,
        name: "Grace Powell",
        role: "MEVN Developer",
        matchPercentage: 78,
        resumeContent: "Resume content for Grace Powell.",
        aiComment:
          "Grace uses Vue for front-end with Node/Express for back-end.",
        interviewQuestions: "1) Vuex vs Pinia?\n2) Handling route transitions?",
      },
      {
        id: 4,
        name: "Jacob Hill",
        role: "Ruby on Rails Developer",
        matchPercentage: 72,
        resumeContent: "Resume content for Jacob Hill.",
        aiComment: "Jacob has experience with Rails and front-end frameworks.",
        interviewQuestions:
          "1) Rails ActiveRecord patterns?\n2) Approach to RESTful routes?",
      },
      {
        id: 5,
        name: "Victoria Barnes",
        role: "Full-Stack Python",
        matchPercentage: 77,
        resumeContent: "Resume content for Victoria Barnes.",
        aiComment: "Victoria works with Django/Flask plus React.",
        interviewQuestions:
          "1) Handling Python packaging?\n2) API versioning in Django?",
      },
    ],
  },
  {
    id: 10,
    title: "Technical Writer",
    location: "Los Angeles, CA",
    employmentType: "Contract",
    experienceLevel: "Junior (1+ years)",
    description: "Create and maintain technical documentation for products.",
    requirements:
      "Excellent writing skills, ability to understand technical details.",
    responsibilities:
      "Collaborate with dev teams, produce user guides and API docs.",
    skills: "Technical Writing, Documentation, Communication",
    candidates: [
      {
        id: 1,
        name: "Hannah Davis",
        role: "Technical Writer",
        matchPercentage: 88,
        resumeContent: "Resume content for Hannah Davis.",
        aiComment:
          "Hannah is adept at translating complex topics into simple language.",
        interviewQuestions:
          "1) Tools for documentation?\n2) Handling version updates in docs?",
      },
      {
        id: 2,
        name: "Thomas Green",
        role: "Content Specialist",
        matchPercentage: 75,
        resumeContent: "Resume content for Thomas Green.",
        aiComment: "Thomas has experience writing developer tutorials.",
        interviewQuestions:
          "1) Approach to code samples?\n2) Collaboration with SMEs?",
      },
      {
        id: 3,
        name: "Jessica Lee",
        role: "API Documentation Writer",
        matchPercentage: 80,
        resumeContent: "Resume content for Jessica Lee.",
        aiComment:
          "Jessica is strong in REST API docs and Postman collections.",
        interviewQuestions:
          "1) What makes a good API doc?\n2) Handling versioned endpoints?",
      },
      {
        id: 4,
        name: "Adam Walker",
        role: "Technical Editor",
        matchPercentage: 70,
        resumeContent: "Resume content for Adam Walker.",
        aiComment: "Adam focuses on proofreading and consistency in docs.",
        interviewQuestions:
          "1) Style guides usage?\n2) Tools for collaboration?",
      },
      {
        id: 5,
        name: "Lucy Fisher",
        role: "Documentation Specialist",
        matchPercentage: 77,
        resumeContent: "Resume content for Lucy Fisher.",
        aiComment: "Lucy has a background in user manuals and how-to guides.",
        interviewQuestions:
          "1) Writing for non-technical audiences?\n2) Handling feedback cycles?",
      },
    ],
  },
  {
    id: 11,
    title: "System Administrator",
    location: "Houston, TX",
    employmentType: "Full-time",
    experienceLevel: "Mid (2+ years)",
    description: "Maintain and support server infrastructure and networks.",
    requirements:
      "Linux/Windows server management, networking, security best practices.",
    responsibilities:
      "Install, configure, and troubleshoot servers and services.",
    skills: "Linux, Windows, Networking, Virtualization",
    candidates: [
      {
        id: 1,
        name: "Frank Ramirez",
        role: "SysAdmin",
        matchPercentage: 78,
        resumeContent: "Resume content for Frank Ramirez.",
        aiComment: "Frank handles both Windows and Linux environments.",
        interviewQuestions:
          "1) AD vs LDAP?\n2) Tools for monitoring server health?",
      },
      {
        id: 2,
        name: "Monica Parker",
        role: "IT Administrator",
        matchPercentage: 72,
        resumeContent: "Resume content for Monica Parker.",
        aiComment: "Monica has experience with virtualization and backups.",
        interviewQuestions:
          "1) Approach to disaster recovery?\n2) Hyper-V vs VMware?",
      },
      {
        id: 3,
        name: "Chris Wood",
        role: "Network Admin",
        matchPercentage: 70,
        resumeContent: "Resume content for Chris Wood.",
        aiComment: "Chris is strong in routing, switching, and firewalls.",
        interviewQuestions: "1) VLAN setup?\n2) Handling security patches?",
      },
      {
        id: 4,
        name: "Julia Phillips",
        role: "Systems Engineer",
        matchPercentage: 80,
        resumeContent: "Resume content for Julia Phillips.",
        aiComment: "Julia can script automations for system maintenance.",
        interviewQuestions:
          "1) Bash/Python scripts?\n2) Managing user permissions?",
      },
      {
        id: 5,
        name: "Ethan James",
        role: "DevOps/SysAdmin",
        matchPercentage: 75,
        resumeContent: "Resume content for Ethan James.",
        aiComment: "Ethan merges sysadmin tasks with DevOps processes.",
        interviewQuestions:
          "1) Infrastructure as code?\n2) Handling container orchestration?",
      },
    ],
  },
  {
    id: 12,
    title: "Machine Learning Engineer",
    location: "Miami, FL",
    employmentType: "Full-time",
    experienceLevel: "Mid/Senior (3+ years)",
    description: "Build and deploy ML models into production at scale.",
    requirements:
      "Python, TensorFlow/PyTorch, Docker, cloud deployment (AWS/GCP).",
    responsibilities:
      "Train models, optimize performance, integrate with applications.",
    skills: "Python, TensorFlow, Docker, AWS",
    candidates: [
      {
        id: 1,
        name: "Evelyn Howard",
        role: "ML Engineer",
        matchPercentage: 88,
        resumeContent: "Resume content for Evelyn Howard.",
        aiComment: "Evelyn has strong production ML deployment experience.",
        interviewQuestions:
          "1) GPU vs CPU training?\n2) Handling data drift in production?",
      },
      {
        id: 2,
        name: "Brandon Perez",
        role: "Data Scientist/ML",
        matchPercentage: 80,
        resumeContent: "Resume content for Brandon Perez.",
        aiComment: "Brandon is proficient in model experimentation and tuning.",
        interviewQuestions:
          "1) Hyperparameter tuning approach?\n2) Tools for model tracking?",
      },
      {
        id: 3,
        name: "Victoria Barnes",
        role: "AI Engineer",
        matchPercentage: 75,
        resumeContent: "Resume content for Victoria Barnes.",
        aiComment: "Victoria focuses on advanced neural architectures.",
        interviewQuestions:
          "1) Handling large-scale training?\n2) Experience with distributed systems?",
      },
      {
        id: 4,
        name: "Samuel Morgan",
        role: "ML Ops",
        matchPercentage: 82,
        resumeContent: "Resume content for Samuel Morgan.",
        aiComment: "Samuel handles CI/CD for ML pipelines.",
        interviewQuestions:
          "1) Tools for pipeline orchestration?\n2) Approach to data versioning?",
      },
      {
        id: 5,
        name: "Olivia Stewart",
        role: "Deep Learning Engineer",
        matchPercentage: 85,
        resumeContent: "Resume content for Olivia Stewart.",
        aiComment: "Olivia has experience with CNNs and RNNs in production.",
        interviewQuestions:
          "1) Image vs text processing?\n2) Handling model interpretability?",
      },
    ],
  },
  {
    id: 13,
    title: "Business Analyst",
    location: "Washington, DC",
    employmentType: "Full-time",
    experienceLevel: "Junior (1+ years)",
    description:
      "Analyze business processes and requirements to propose solutions.",
    requirements:
      "Strong analytical skills, stakeholder management, documentation.",
    responsibilities:
      "Gather requirements, create process flows, support project teams.",
    skills: "Analysis, Stakeholder Management, BPMN, Communication",
    candidates: [
      {
        id: 1,
        name: "Lily White",
        role: "Business Analyst",
        matchPercentage: 82,
        resumeContent: "Resume content for Lily White.",
        aiComment: "Lily has experience mapping processes and writing BRDs.",
        interviewQuestions:
          "1) How do you handle conflicting requirements?\n2) Tools for process mapping?",
      },
      {
        id: 2,
        name: "Eric Young",
        role: "Data Analyst",
        matchPercentage: 75,
        resumeContent: "Resume content for Eric Young.",
        aiComment: "Eric is strong in data analysis and reporting.",
        interviewQuestions:
          "1) Approach to SQL queries?\n2) Building dashboards for stakeholders?",
      },
      {
        id: 3,
        name: "Charlotte Hill",
        role: "Business Consultant",
        matchPercentage: 78,
        resumeContent: "Resume content for Charlotte Hill.",
        aiComment: "Charlotte can identify key business pain points.",
        interviewQuestions:
          "1) Handling large-scale transformations?\n2) Communicating ROI to executives?",
      },
      {
        id: 4,
        name: "John Carter",
        role: "Junior BA",
        matchPercentage: 70,
        resumeContent: "Resume content for John Carter.",
        aiComment: "John is eager to learn and supports senior BAs well.",
        interviewQuestions:
          "1) Eliciting requirements from end users?\n2) Tools for backlog tracking?",
      },
      {
        id: 5,
        name: "Zoe Brooks",
        role: "Process Analyst",
        matchPercentage: 74,
        resumeContent: "Resume content for Zoe Brooks.",
        aiComment:
          "Zoe focuses on process optimization and Lean methodologies.",
        interviewQuestions:
          "1) Lean vs Six Sigma?\n2) Identifying bottlenecks in workflows?",
      },
    ],
  },
  {
    id: 14,
    title: "Graphic Designer",
    location: "Portland, OR",
    employmentType: "Full-time",
    experienceLevel: "Mid (2+ years)",
    description:
      "Create visual concepts and marketing materials for various channels.",
    requirements: "Proficiency in Photoshop, Illustrator, and InDesign.",
    responsibilities:
      "Design logos, brochures, social media graphics, and more.",
    skills: "Graphic Design, Branding, Adobe Suite",
    candidates: [
      {
        id: 1,
        name: "Alice Morgan",
        role: "Graphic Designer",
        matchPercentage: 85,
        resumeContent: "Resume content for Alice Morgan.",
        aiComment: "Alice has a strong portfolio in brand identity.",
        interviewQuestions:
          "1) How do you handle brand guidelines?\n2) Favorite design tool?",
      },
      {
        id: 2,
        name: "Robert Bailey",
        role: "Visual Artist",
        matchPercentage: 72,
        resumeContent: "Resume content for Robert Bailey.",
        aiComment: "Robert excels in illustrations and creative concepts.",
        interviewQuestions:
          "1) Approach to vector vs raster?\n2) Color theory preferences?",
      },
      {
        id: 3,
        name: "Emily Cooper",
        role: "Print Designer",
        matchPercentage: 75,
        resumeContent: "Resume content for Emily Cooper.",
        aiComment: "Emily focuses on print layouts and typography.",
        interviewQuestions:
          "1) Working with bleed and margins?\n2) Paper vs digital differences?",
      },
      {
        id: 4,
        name: "Daniel Howard",
        role: "Brand Designer",
        matchPercentage: 80,
        resumeContent: "Resume content for Daniel Howard.",
        aiComment: "Daniel is skilled at crafting brand style guides.",
        interviewQuestions:
          "1) Consistency across platforms?\n2) Approach to brand refresh?",
      },
      {
        id: 5,
        name: "Laura Collins",
        role: "Creative Designer",
        matchPercentage: 78,
        resumeContent: "Resume content for Laura Collins.",
        aiComment: "Laura has a broad range of creative design projects.",
        interviewQuestions:
          "1) Brainstorming techniques?\n2) Inspiration sources?",
      },
    ],
  },
  {
    id: 15,
    title: "Project Manager",
    location: "Philadelphia, PA",
    employmentType: "Full-time",
    experienceLevel: "Senior (5+ years)",
    description:
      "Plan and oversee projects, ensuring they meet time and budget constraints.",
    requirements:
      "PMP or similar certification, strong leadership, Agile/Waterfall experience.",
    responsibilities:
      "Create project plans, manage teams, track milestones and deliverables.",
    skills: "Project Management, Leadership, Communication, Risk Management",
    candidates: [
      {
        id: 1,
        name: "Noah Brooks",
        role: "Senior PM",
        matchPercentage: 88,
        resumeContent: "Resume content for Noah Brooks.",
        aiComment: "Noah has led multiple large-scale software projects.",
        interviewQuestions:
          "1) Risk management approach?\n2) Stakeholder communication style?",
      },
      {
        id: 2,
        name: "Mia Turner",
        role: "Agile Coach",
        matchPercentage: 80,
        resumeContent: "Resume content for Mia Turner.",
        aiComment: "Mia is strong in Scrum and agile transformations.",
        interviewQuestions:
          "1) Handling agile adoption challenges?\n2) Measuring team velocity?",
      },
      {
        id: 3,
        name: "Benjamin Kelly",
        role: "Technical PM",
        matchPercentage: 82,
        resumeContent: "Resume content for Benjamin Kelly.",
        aiComment: "Benjamin has a software engineering background.",
        interviewQuestions:
          "1) Dealing with complex technical tasks?\n2) Cross-team coordination?",
      },
      {
        id: 4,
        name: "Madison Scott",
        role: "PMO Specialist",
        matchPercentage: 78,
        resumeContent: "Resume content for Madison Scott.",
        aiComment: "Madison organizes project governance and reporting.",
        interviewQuestions:
          "1) Standardizing project templates?\n2) Handling multiple concurrent projects?",
      },
      {
        id: 5,
        name: "Jacob Gray",
        role: "Project Coordinator",
        matchPercentage: 72,
        resumeContent: "Resume content for Jacob Gray.",
        aiComment: "Jacob assists PMs with scheduling and resource allocation.",
        interviewQuestions:
          "1) Handling schedule conflicts?\n2) Tracking tasks across sprints?",
      },
    ],
  },
];
