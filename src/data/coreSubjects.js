// Core Subjects Data
// Comprehensive content for Operating Systems, Computer Networks, and DSA

const coreSubjects = {
  operating_system: {
    id: 'operating_system',
    title: 'Operating Systems',
    description: 'Complete guide to Operating Systems concepts including processes, threads, deadlocks, scheduling algorithms, and memory management.',
    icon: '🖥️',
    color: '#007bff',
    topics: [
      {
        id: 'processes',
        title: 'Processes',
        description: 'Understanding processes, process states, and process control blocks.',
        content: [
          {
            type: 'heading',
            text: 'What is a Process?',
            level: 2
          },
          {
            type: 'paragraph',
            text: 'A process is an instance of a program in execution. It consists of program code, data, and process control block (PCB).',
            fontSize: 'medium'
          },
          {
            type: 'heading',
            text: 'Process States',
            level: 3
          },
          {
            type: 'list',
            items: [
              'New: Process is being created',
              'Ready: Process is waiting to be assigned to a processor',
              'Running: Process is being executed',
              'Waiting: Process is waiting for some event to occur',
              'Terminated: Process has finished execution'
            ]
          },
          {
            type: 'heading',
            text: 'Process Control Block (PCB)',
            level: 3
          },
          {
            type: 'paragraph',
            text: 'PCB contains information about a process including process ID, program counter, CPU registers, memory limits, and scheduling information.',
            fontSize: 'medium'
          }
        ]
      },
      {
        id: 'threads',
        title: 'Threads',
        description: 'Thread concepts, types of threads, and thread synchronization.',
        content: [
          {
            type: 'heading',
            text: 'What are Threads?',
            level: 2
          },
          {
            type: 'paragraph',
            text: 'A thread is a lightweight process that shares memory space with other threads in the same process.',
            fontSize: 'medium'
          },
          {
            type: 'heading',
            text: 'Types of Threads',
            level: 3
          },
          {
            type: 'list',
            items: [
              'User Threads: Managed by user-level thread library',
              'Kernel Threads: Managed by the operating system',
              'Hybrid Threads: Combination of user and kernel threads'
            ]
          },
          {
            type: 'heading',
            text: 'Thread Synchronization',
            level: 3
          },
          {
            type: 'paragraph',
            text: 'Thread synchronization is necessary to prevent race conditions and ensure data consistency when multiple threads access shared resources.',
            fontSize: 'medium'
          }
        ]
      },
      {
        id: 'deadlocks',
        title: 'Deadlocks',
        description: 'Understanding deadlock conditions, prevention, avoidance, and detection.',
        content: [
          {
            type: 'heading',
            text: 'What is a Deadlock?',
            level: 2
          },
          {
            type: 'paragraph',
            text: 'A deadlock is a situation where two or more processes are blocked forever, waiting for each other to release resources.',
            fontSize: 'medium'
          },
          {
            type: 'heading',
            text: 'Four Necessary Conditions for Deadlock',
            level: 3
          },
          {
            type: 'list',
            items: [
              'Mutual Exclusion: Only one process can use a resource at a time',
              'Hold and Wait: Process holds resources while waiting for others',
              'No Preemption: Resources cannot be forcibly taken away',
              'Circular Wait: Circular chain of processes waiting for resources'
            ]
          },
          {
            type: 'heading',
            text: 'Deadlock Prevention',
            level: 3
          },
          {
            type: 'paragraph',
            text: 'Prevent at least one of the four conditions: break mutual exclusion, prevent hold and wait, allow preemption, or prevent circular wait.',
            fontSize: 'medium'
          }
        ]
      },
      {
        id: 'scheduling',
        title: 'CPU Scheduling',
        description: 'Scheduling algorithms including Round Robin, FCFS, SJF, and Priority Scheduling.',
        content: [
          {
            type: 'heading',
            text: 'Round Robin Scheduling',
            level: 2
          },
          {
            type: 'paragraph',
            text: 'Round Robin is a preemptive scheduling algorithm where each process gets a fixed time slice (quantum) to execute.',
            fontSize: 'medium'
          },
          {
            type: 'heading',
            text: 'Scheduling Algorithms',
            level: 3
          },
          {
            type: 'list',
            items: [
              'FCFS (First Come First Served): Non-preemptive, simple',
              'SJF (Shortest Job First): Optimal for minimizing waiting time',
              'Priority Scheduling: Based on process priority',
              'Round Robin: Fair time sharing with quantum',
              'Multilevel Queue: Different queues for different process types'
            ]
          },
          {
            type: 'heading',
            text: 'Scheduling Criteria',
            level: 3
          },
          {
            type: 'paragraph',
            text: 'CPU utilization, throughput, turnaround time, waiting time, and response time are key metrics for evaluating scheduling algorithms.',
            fontSize: 'medium'
          }
        ]
      },
      {
        id: 'memory',
        title: 'Memory Management',
        description: 'Memory allocation strategies, paging, segmentation, and virtual memory.',
        content: [
          {
            type: 'heading',
            text: 'Memory Allocation Strategies',
            level: 2
          },
          {
            type: 'list',
            items: [
              'First Fit: Allocate first available block',
              'Best Fit: Allocate smallest suitable block',
              'Worst Fit: Allocate largest available block',
              'Next Fit: Start searching from last allocation'
            ]
          },
          {
            type: 'heading',
            text: 'Paging',
            level: 3
          },
          {
            type: 'paragraph',
            text: 'Paging divides memory into fixed-size pages and maps logical addresses to physical addresses using page tables.',
            fontSize: 'medium'
          },
          {
            type: 'heading',
            text: 'Virtual Memory',
            level: 3
          },
          {
            type: 'paragraph',
            text: 'Virtual memory allows programs to use more memory than physically available by using disk storage as an extension of RAM.',
            fontSize: 'medium'
          }
        ]
      }
    ]
  },
  computer_network: {
    id: 'computer_network',
    title: 'Computer Networks',
    description: 'Complete guide to Computer Networks including OSI model, TCP/IP, protocols, routing, and network security.',
    icon: '🌐',
    color: '#28a745',
    topics: [
      {
        id: 'osi-model',
        title: 'OSI Model',
        description: 'Understanding the 7-layer OSI model and its protocols.',
        content: [
          {
            type: 'heading',
            text: 'OSI Model Layers',
            level: 2
          },
          {
            type: 'list',
            items: [
              'Application Layer (7): HTTP, FTP, SMTP',
              'Presentation Layer (6): Encryption, Compression',
              'Session Layer (5): Session management',
              'Transport Layer (4): TCP, UDP',
              'Network Layer (3): IP, Routing',
              'Data Link Layer (2): Ethernet, MAC addresses',
              'Physical Layer (1): Cables, Signals'
            ]
          },
          {
            type: 'heading',
            text: 'Data Flow',
            level: 3
          },
          {
            type: 'paragraph',
            text: 'Data flows down through the layers at the sender (encapsulation) and up through the layers at the receiver (decapsulation).',
            fontSize: 'medium'
          }
        ]
      },
      {
        id: 'tcp-ip',
        title: 'TCP/IP Protocol Suite',
        description: 'Understanding TCP/IP model and its protocols.',
        content: [
          {
            type: 'heading',
            text: 'TCP/IP Model',
            level: 2
          },
          {
            type: 'list',
            items: [
              'Application Layer: HTTP, HTTPS, FTP, SMTP, DNS',
              'Transport Layer: TCP, UDP',
              'Internet Layer: IP, ICMP, ARP',
              'Network Access Layer: Ethernet, WiFi'
            ]
          },
          {
            type: 'heading',
            text: 'TCP vs UDP',
            level: 3
          },
          {
            type: 'paragraph',
            text: 'TCP is connection-oriented, reliable, and provides error checking. UDP is connectionless, faster, but less reliable.',
            fontSize: 'medium'
          }
        ]
      },
      {
        id: 'routing',
        title: 'Routing Algorithms',
        description: 'Understanding routing protocols and algorithms.',
        content: [
          {
            type: 'heading',
            text: 'Types of Routing',
            level: 2
          },
          {
            type: 'list',
            items: [
              'Static Routing: Manually configured routes',
              'Dynamic Routing: Automatically updated routes',
              'Default Routing: Default gateway for unknown destinations'
            ]
          },
          {
            type: 'heading',
            text: 'Routing Algorithms',
            level: 3
          },
          {
            type: 'list',
            items: [
              'Distance Vector: RIP, Bellman-Ford algorithm',
              'Link State: OSPF, Dijkstra algorithm',
              'Path Vector: BGP'
            ]
          }
        ]
      },
      {
        id: 'security',
        title: 'Network Security',
        description: 'Network security concepts, encryption, and protocols.',
        content: [
          {
            type: 'heading',
            text: 'Security Threats',
            level: 2
          },
          {
            type: 'list',
            items: [
              'Malware: Viruses, worms, trojans',
              'Phishing: Social engineering attacks',
              'DDoS: Distributed denial of service',
              'Man-in-the-Middle: Intercepting communications'
            ]
          },
          {
            type: 'heading',
            text: 'Security Protocols',
            level: 3
          },
          {
            type: 'list',
            items: [
              'HTTPS: Secure HTTP with SSL/TLS',
              'VPN: Virtual Private Network',
              'Firewall: Network security barrier',
              'IDS/IPS: Intrusion detection/prevention systems'
            ]
          }
        ]
      }
    ]
  },
  dsa: {
    id: 'dsa',
    title: 'Data Structures & Algorithms',
    description: 'Complete DSA guide with arrays, linked lists, trees, graphs, sorting, and searching algorithms.',
    icon: '📊',
    color: '#dc3545',
    topics: [
      {
        id: 'arrays',
        title: 'Arrays',
        description: 'Array data structure, operations, and common problems.',
        content: [
          {
            type: 'heading',
            text: 'Array Basics',
            level: 2
          },
          {
            type: 'paragraph',
            text: 'An array is a collection of elements stored in contiguous memory locations. Elements are accessed using indices.',
            fontSize: 'medium'
          },
          {
            type: 'heading',
            text: 'Array Operations',
            level: 3
          },
          {
            type: 'list',
            items: [
              'Access: O(1) - Direct access using index',
              'Search: O(n) - Linear search',
              'Insertion: O(n) - May require shifting elements',
              'Deletion: O(n) - May require shifting elements'
            ]
          },
          {
            type: 'heading',
            text: 'Common Array Problems',
            level: 3
          },
          {
            type: 'list',
            items: [
              'Two Sum',
              'Maximum Subarray Sum',
              'Rotate Array',
              'Find Missing Number',
              'Product of Array Except Self'
            ]
          }
        ]
      },
      {
        id: 'linked-lists',
        title: 'Linked Lists',
        description: 'Singly, doubly, and circular linked lists with operations.',
        content: [
          {
            type: 'heading',
            text: 'Types of Linked Lists',
            level: 2
          },
          {
            type: 'list',
            items: [
              'Singly Linked List: Each node points to next',
              'Doubly Linked List: Each node points to next and previous',
              'Circular Linked List: Last node points to first'
            ]
          },
          {
            type: 'heading',
            text: 'Linked List Operations',
            level: 3
          },
          {
            type: 'list',
            items: [
              'Insertion: O(1) at head, O(n) at position',
              'Deletion: O(1) at head, O(n) at position',
              'Search: O(n) - Linear search',
              'Traversal: O(n) - Visit each node'
            ]
          }
        ]
      },
      {
        id: 'trees',
        title: 'Trees',
        description: 'Binary trees, BST, AVL trees, and tree traversals.',
        content: [
          {
            type: 'heading',
            text: 'Tree Terminology',
            level: 2
          },
          {
            type: 'list',
            items: [
              'Root: Top node of the tree',
              'Leaf: Node with no children',
              'Height: Longest path from root to leaf',
              'Depth: Distance from root to node'
            ]
          },
          {
            type: 'heading',
            text: 'Tree Traversals',
            level: 3
          },
          {
            type: 'list',
            items: [
              'Preorder: Root → Left → Right',
              'Inorder: Left → Root → Right',
              'Postorder: Left → Right → Root',
              'Level Order: Breadth-first traversal'
            ]
          },
          {
            type: 'heading',
            text: 'Binary Search Tree (BST)',
            level: 3
          },
          {
            type: 'paragraph',
            text: 'BST is a binary tree where left child < parent < right child. Operations: Search O(log n), Insert O(log n), Delete O(log n).',
            fontSize: 'medium'
          }
        ]
      },
      {
        id: 'graphs',
        title: 'Graphs',
        description: 'Graph representation, traversal algorithms, and shortest path.',
        content: [
          {
            type: 'heading',
            text: 'Graph Representation',
            level: 2
          },
          {
            type: 'list',
            items: [
              'Adjacency Matrix: 2D array representation',
              'Adjacency List: Array of linked lists',
              'Edge List: List of edges'
            ]
          },
          {
            type: 'heading',
            text: 'Graph Traversal',
            level: 3
          },
          {
            type: 'list',
            items: [
              'BFS (Breadth-First Search): Queue-based',
              'DFS (Depth-First Search): Stack-based or recursive'
            ]
          },
          {
            type: 'heading',
            text: 'Shortest Path Algorithms',
            level: 3
          },
          {
            type: 'list',
            items: [
              'Dijkstra: Single source shortest path',
              'Bellman-Ford: Handles negative weights',
              'Floyd-Warshall: All pairs shortest path'
            ]
          }
        ]
      },
      {
        id: 'sorting',
        title: 'Sorting Algorithms',
        description: 'Various sorting algorithms with time and space complexity.',
        content: [
          {
            type: 'heading',
            text: 'Comparison-Based Sorting',
            level: 2
          },
          {
            type: 'list',
            items: [
              'Bubble Sort: O(n²) - Simple but inefficient',
              'Selection Sort: O(n²) - Find minimum and swap',
              'Insertion Sort: O(n²) - Insert element in sorted position',
              'Merge Sort: O(n log n) - Divide and conquer',
              'Quick Sort: O(n log n) average - Partition based',
              'Heap Sort: O(n log n) - Use heap data structure'
            ]
          },
          {
            type: 'heading',
            text: 'Non-Comparison Sorting',
            level: 3
          },
          {
            type: 'list',
            items: [
              'Counting Sort: O(n + k) - Count occurrences',
              'Radix Sort: O(d(n + k)) - Sort by digits',
              'Bucket Sort: O(n + k) - Distribute into buckets'
            ]
          }
        ]
      }
    ]
  }
};

export default coreSubjects;
