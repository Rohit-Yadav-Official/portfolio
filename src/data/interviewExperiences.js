// Interview Experiences Data
// Add your interview experiences here

const interviewExperiences = [
  {
    id: 1,
    company: "Google",
    role: "Backend Developer",
    date: "2024-01-15",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png",
    summary: "My experience interviewing for a Backend Developer position at Google. It was challenging but rewarding.",
    content: [
      {
        type: "heading",
        text: "Interview Process Overview",
        level: 1
      },
      {
        type: "paragraph",
        text: "The interview process at Google consisted of 5 rounds including phone screening, technical rounds, and behavioral interviews.",
        fontSize: "medium"
      },
      {
        type: "heading",
        text: "Round 1: Phone Screening",
        level: 2
      },
      {
        type: "paragraph",
        text: "The first round was a 45-minute phone screening with a recruiter. They asked about my background, experience with Java and Spring Boot, and why I wanted to join Google.",
        fontSize: "medium"
      },
      {
        type: "heading",
        text: "Round 2: Data Structures & Algorithms",
        level: 2
      },
      {
        type: "paragraph",
        text: "This was the most challenging round. I was asked to solve two coding problems on a shared editor. The questions focused on trees and graph algorithms.",
        fontSize: "medium"
      },
      {
        type: "list",
        items: [
          "Problem 1: Binary Tree Maximum Path Sum",
          "Problem 2: Course Schedule (Graph - Topological Sort)",
          "Time complexity analysis was crucial"
        ]
      },
      {
        type: "heading",
        text: "Round 3: System Design",
        level: 2
      },
      {
        type: "paragraph",
        text: "Design a URL shortening service like bit.ly. I had to discuss database design, API endpoints, caching strategies, and scalability considerations.",
        fontSize: "medium"
      },
      {
        type: "heading",
        text: "Key Takeaways",
        level: 2
      },
      {
        type: "list",
        items: [
          "Practice LeetCode problems regularly",
          "Understand system design fundamentals",
          "Be clear in communication",
          "Ask clarifying questions before jumping to solutions"
        ]
      },
      {
        type: "paragraph",
        text: "Overall, it was an amazing experience. Even though it was challenging, I learned a lot from the process.",
        fontSize: "large"
      }
    ],
    status: "published",
    tags: ["Google", "Backend", "System Design", "DSA"]
  },
  {
    id: 2,
    company: "Amazon",
    role: "Software Development Engineer",
    date: "2024-02-10",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    summary: "Applied for SDE role at Amazon. The interview focused heavily on leadership principles and system design.",
    content: [
      {
        type: "heading",
        text: "Amazon Interview Experience",
        level: 1
      },
      {
        type: "paragraph",
        text: "I applied for the Software Development Engineer position at Amazon through their careers portal. The entire process took about 3 weeks from application to final decision.",
        fontSize: "medium"
      },
      {
        type: "heading",
        text: "Round 1: Online Assessment (OA)",
        level: 2
      },
      {
        type: "paragraph",
        text: "The first round was an online assessment consisting of two coding problems and a work simulation exercise.",
        fontSize: "medium"
      },
      {
        type: "list",
        items: [
          "Problem 1: Array manipulation - Find pairs with given sum",
          "Problem 2: String processing - Optimize data structure selection",
          "Work simulation: Prioritizing tasks based on Amazon's leadership principles"
        ]
      },
      {
        type: "heading",
        text: "Round 2: Technical Phone Screen",
        level: 2
      },
      {
        type: "paragraph",
        text: "A 45-minute call with a senior engineer. We discussed my resume and then moved to a coding problem on a shared editor.",
        fontSize: "medium"
      },
      {
        type: "paragraph",
        text: "The problem was about implementing a rate limiter. I had to explain my approach, write the code, and discuss edge cases.",
        fontSize: "medium"
      },
      {
        type: "heading",
        text: "Round 3: Virtual Onsite (4 rounds)",
        level: 2
      },
      {
        type: "paragraph",
        text: "The onsite consisted of 4 back-to-back interviews, each 1 hour long.",
        fontSize: "medium"
      },
      {
        type: "list",
        items: [
          "Round 3.1: Coding - Implement LRU Cache with follow-up optimizations",
          "Round 3.2: System Design - Design a notification service like AWS SNS",
          "Round 3.3: Behavioral - Deep dive into leadership principles",
          "Round 3.4: Bar Raiser - Mix of coding and behavioral questions"
        ]
      },
      {
        type: "heading",
        text: "Key Takeaways",
        level: 2
      },
      {
        type: "list",
        items: [
          "Amazon heavily emphasizes their 16 leadership principles - know them well",
          "Use the STAR method for behavioral questions",
          "Be prepared to discuss trade-offs in system design",
          "The Bar Raiser round is tough - they set the hiring bar high",
          "Always think about scalability and optimization"
        ]
      },
      {
        type: "paragraph",
        text: "Overall, it was an intense but fair process. Amazon tests both technical skills and cultural fit thoroughly. Preparation for leadership principles is as important as coding practice.",
        fontSize: "large"
      }
    ],
    status: "published",
    tags: ["Amazon", "SDE", "System Design", "Leadership Principles"]
  },
  {
    id: 3,
    company: "Microsoft",
    role: "Backend Engineer",
    date: "2024-03-05",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    summary: "Interview experience for Backend Engineer role at Microsoft with focus on Azure services and distributed systems.",
    content: [
      {
        type: "heading",
        text: "Microsoft Interview Journey",
        level: 1
      },
      {
        type: "paragraph",
        text: "I got a referral from a friend working at Microsoft which helped me get past the initial screening. The interview process was well-structured and professional.",
        fontSize: "medium"
      },
      {
        type: "heading",
        text: "Round 1: Recruiter Call",
        level: 2
      },
      {
        type: "paragraph",
        text: "A 30-minute call with the recruiter to understand my background, expectations, and the role requirements. They explained the interview process and timeline.",
        fontSize: "medium"
      },
      {
        type: "heading",
        text: "Round 2: Technical Screen",
        level: 2
      },
      {
        type: "paragraph",
        text: "One hour technical interview focusing on data structures and problem-solving.",
        fontSize: "medium"
      },
      {
        type: "list",
        items: [
          "Problem: Implement a thread-safe cache with TTL (Time To Live)",
          "Follow-up: How would you handle distributed caching?",
          "Discussed Java concurrency and synchronization mechanisms"
        ]
      },
      {
        type: "heading",
        text: "Round 3 & 4: Virtual Onsite",
        level: 2
      },
      {
        type: "paragraph",
        text: "Two rounds conducted back-to-back, each lasting 1 hour.",
        fontSize: "medium"
      },
      {
        type: "paragraph",
        text: "Round 3 focused on system design - I was asked to design a distributed logging system similar to Azure Monitor. We discussed data ingestion, storage, querying, and alerting.",
        fontSize: "medium"
      },
      {
        type: "paragraph",
        text: "Round 4 was a mix of coding and behavioral. The coding problem involved designing an API rate limiter with different strategies (fixed window, sliding window, token bucket).",
        fontSize: "medium"
      },
      {
        type: "heading",
        text: "Round 5: As-Appropriate (AA) Interview",
        level: 2
      },
      {
        type: "paragraph",
        text: "This is Microsoft's unique final round conducted by a senior manager or director. It's called 'As-Appropriate' because it only happens if the previous rounds went well.",
        fontSize: "medium"
      },
      {
        type: "list",
        items: [
          "Discussed my past projects in detail",
          "Questions about handling conflicts in team",
          "Technical deep-dive into Spring Boot and microservices",
          "Scenario-based questions about production incidents"
        ]
      },
      {
        type: "heading",
        text: "What I Learned",
        level: 2
      },
      {
        type: "paragraph",
        text: "Microsoft interviews are less intense than some other FAANG companies but they're thorough. They care about both technical depth and cultural fit. The AA round is crucial - it's the final decision maker.",
        fontSize: "large"
      }
    ],
    status: "published",
    tags: ["Microsoft", "Azure", "Backend", "Distributed Systems"]
  },
  {
    id: 4,
    company: "Atlassian",
    role: "Software Engineer",
    date: "2024-04-12",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Atlassian_logo.svg",
    summary: "My interview experience at Atlassian for Software Engineer position. Great focus on collaboration and code quality.",
    content: [
      {
        type: "heading",
        text: "Atlassian Interview Process",
        level: 1
      },
      {
        type: "paragraph",
        text: "Atlassian's interview process was one of the most pleasant experiences I've had. The team was friendly and the process was transparent.",
        fontSize: "medium"
      },
      {
        type: "heading",
        text: "Round 1: HackerRank Assessment",
        level: 2
      },
      {
        type: "paragraph",
        text: "Started with an online coding assessment with 3 problems of increasing difficulty. Had 90 minutes to complete.",
        fontSize: "medium"
      },
      {
        type: "list",
        items: [
          "Problem 1: String manipulation - Easy level",
          "Problem 2: Binary tree traversal - Medium level",
          "Problem 3: Dynamic programming - Medium-Hard level"
        ]
      },
      {
        type: "heading",
        text: "Round 2: Technical Interview",
        level: 2
      },
      {
        type: "paragraph",
        text: "A 60-minute technical interview with a senior engineer. The problem was interesting and practical.",
        fontSize: "medium"
      },
      {
        type: "paragraph",
        text: "I was asked to design and implement a simplified version of Jira's issue tracking system. This involved discussing data models, API design, and handling edge cases like circular dependencies.",
        fontSize: "medium"
      },
      {
        type: "heading",
        text: "Round 3: System Design",
        level: 2
      },
      {
        type: "paragraph",
        text: "Design a real-time collaboration system similar to Confluence's collaborative editing feature. This was fascinating as it's directly related to Atlassian's products.",
        fontSize: "medium"
      },
      {
        type: "list",
        items: [
          "Discussed WebSocket vs Server-Sent Events",
          "Operational Transform vs CRDT for conflict resolution",
          "Handling network partitions and offline editing",
          "Scaling considerations for millions of concurrent users"
        ]
      },
      {
        type: "heading",
        text: "Round 4: Values Interview",
        level: 2
      },
      {
        type: "paragraph",
        text: "Atlassian has strong company values and they assess cultural fit seriously. Questions were about teamwork, handling disagreements, and times when I had to balance quality with deadlines.",
        fontSize: "medium"
      },
      {
        type: "heading",
        text: "Round 5: Hiring Manager Discussion",
        level: 2
      },
      {
        type: "paragraph",
        text: "Final round with the hiring manager. Discussed the team, projects, growth opportunities, and my questions about the role and company.",
        fontSize: "medium"
      },
      {
        type: "heading",
        text: "Key Insights",
        level: 2
      },
      {
        type: "list",
        items: [
          "Atlassian values teamwork and collaboration highly",
          "Understanding their products (Jira, Confluence, Bitbucket) helps",
          "They care about code quality and maintainability",
          "The interview process is candidate-friendly and respectful",
          "Work-life balance is genuinely important to them"
        ]
      },
      {
        type: "paragraph",
        text: "Atlassian's interview process reflects their values. They're looking for engineers who can build great products while being excellent teammates. Highly recommend applying if you value collaborative culture.",
        fontSize: "large"
      }
    ],
    status: "published",
    tags: ["Atlassian", "Software Engineer", "System Design", "Collaboration"]
  },
  {
    id: 5,
    company: "Uber",
    role: "Backend Developer",
    date: "2024-05-08",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg",
    summary: "Challenging interview experience at Uber focusing on high-scale distributed systems and real-time processing.",
    content: [
      {
        type: "heading",
        text: "Uber Interview Experience",
        level: 1
      },
      {
        type: "paragraph",
        text: "Uber's interview process was one of the most technically challenging I've faced. They really test your understanding of distributed systems at scale.",
        fontSize: "medium"
      },
      {
        type: "heading",
        text: "Round 1: Phone Screen",
        level: 2
      },
      {
        type: "paragraph",
        text: "Started with a 45-minute phone screen with an engineer from the Maps team.",
        fontSize: "medium"
      },
      {
        type: "list",
        items: [
          "Problem: Find nearest drivers to a rider location",
          "Discussed spatial indexing and geohashing",
          "Follow-up: How to handle millions of location updates per second"
        ]
      },
      {
        type: "heading",
        text: "Round 2: Coding Interview",
        level: 2
      },
      {
        type: "paragraph",
        text: "Deep dive into algorithms and data structures. The problem was about optimizing ride matching.",
        fontSize: "medium"
      },
      {
        type: "paragraph",
        text: "Given a set of riders and drivers, implement an algorithm to find optimal matches considering distance, surge pricing, and driver ratings. Had to optimize for both time and space complexity.",
        fontSize: "medium"
      },
      {
        type: "heading",
        text: "Round 3: System Design",
        level: 2
      },
      {
        type: "paragraph",
        text: "Design Uber's surge pricing system. This was incredibly detailed and challenging.",
        fontSize: "medium"
      },
      {
        type: "list",
        items: [
          "Real-time demand prediction using streaming data",
          "Handling millions of location updates per second",
          "Dynamic pricing calculation and propagation",
          "Database design for high write throughput",
          "Caching strategies for driver and rider data",
          "Ensuring consistency across distributed system"
        ]
      },
      {
        type: "heading",
        text: "Round 4: Architecture Deep Dive",
        level: 2
      },
      {
        type: "paragraph",
        text: "This round focused on my experience with microservices architecture. Discussed how I've designed and deployed services in production.",
        fontSize: "medium"
      },
      {
        type: "paragraph",
        text: "Questions about service discovery, load balancing, circuit breakers, and handling cascading failures. Also discussed monitoring, logging, and debugging distributed systems.",
        fontSize: "medium"
      },
      {
        type: "heading",
        text: "Round 5: Behavioral + Technical Bar Raiser",
        level: 2
      },
      {
        type: "paragraph",
        text: "Final round with a senior staff engineer. Mix of behavioral questions and a complex coding problem.",
        fontSize: "medium"
      },
      {
        type: "list",
        items: [
          "Discussed my most challenging project",
          "How I handle production incidents",
          "Times when I had to make difficult technical trade-offs",
          "Coding: Implement a distributed rate limiter across multiple data centers"
        ]
      },
      {
        type: "heading",
        text: "Lessons Learned",
        level: 2
      },
      {
        type: "paragraph",
        text: "Uber's interviews are intense and technical. They operate at massive scale and expect candidates to think about scalability, reliability, and performance from the start.",
        fontSize: "large"
      },
      {
        type: "list",
        items: [
          "Study distributed systems concepts deeply",
          "Understand CAP theorem and its practical implications",
          "Know about message queues, event streaming (Kafka)",
          "Practice system design problems at Uber's scale",
          "Be ready to discuss trade-offs between consistency and availability"
        ]
      }
    ],
    status: "published",
    tags: ["Uber", "Backend", "Distributed Systems", "High Scale"]
  },
  // Add more interview experiences here
  // Template for new experience:
  /*
  {
    id: 2,
    company: "Company Name",
    role: "Position Title",
    date: "YYYY-MM-DD",
    image: "image-url-here",
    summary: "Brief summary of the interview experience",
    content: [
      {
        type: "heading",
        text: "Heading Text",
        level: 1 // 1 for h1, 2 for h2, 3 for h3
      },
      {
        type: "paragraph",
        text: "Your paragraph text here",
        fontSize: "small" // small, medium, large
      },
      {
        type: "list",
        items: ["Item 1", "Item 2", "Item 3"]
      },
      {
        type: "image",
        url: "image-url",
        alt: "Image description"
      }
    ],
    status: "published", // "published" or "draft"
    tags: ["Tag1", "Tag2"]
  }
  */
];

export default interviewExperiences;
