// Module 1: HPC Questions - Parsed from PDF
export const questions = [
  // Session 1: Evolution and Fundamentals of HPC Quiz
  {
    id: 1,
    module: 1,
    session: 1,
    question: "What are the four reasons for performance degradation according to the acronym SLOW?",
    options: [
      "Slow access, latency, overconsumption and waiting",
      "Starvation, latency, overhead and waiting",
      "Slow access, limited accessibility, overconsumption and waiting",
      "Security threats, latency, overconsumption and waiting"
    ],
    correctAnswer: [1],
    multipleCorrect: false
  },
  {
    id: 2,
    module: 1,
    session: 1,
    question: "What is true about sustained performance? (multiple selection)",
    options: [
      "Maximum rate at which operations can be accomplished theoretically by the hardware resources of a supercomputer",
      "Actual or real performance achieved by a supercomputer system in the performance of an application program",
      "Sustained performance is considered a better indicator of the true value of a supercomputer than its specified peak performance",
      "Peak performance is considered a better indicator of the true value of a supercomputer than its specified sustained performance",
      "While sustained performance cannot exceed peak performance, it can be much less and often is."
    ],
    correctAnswer: [1, 2, 4],
    multipleCorrect: true
  },
  {
    id: 3,
    module: 1,
    session: 1,
    question: "What is true about strong scalability?",
    options: [
      "Both the number of processors and the problem size are increased",
      "Number of processors is increased while the problem size remains constant",
      "Results in a reduced workload per processor",
      "Results in a constant workload per processor",
      "Mostly used for long-running CPU-bound",
      "Mostly used for large memory-bound applications where the required memory cannot be satisfied by a single node"
    ],
    correctAnswer: [1, 2, 4],
    multipleCorrect: true
  },
  {
    id: 4,
    module: 1,
    session: 1,
    question: "What type of problem representatives are used for machine learning, fraud detection and security services?",
    options: [
      "Linear algebra",
      "Stochastic systems",
      "Graph problems",
      "Solution of partial-differential equations",
      "Large systems with pair-wise force interactions"
    ],
    correctAnswer: [2],
    multipleCorrect: false
  },
  {
    id: 5,
    module: 1,
    session: 1,
    question: "What is the element that incorporates all the functional elements required for computation, and is highly replicated to achieve large scale in a supercomputer?",
    options: [
      "Core",
      "Chip",
      "Blade",
      "Node",
      "Rack"
    ],
    correctAnswer: [3],
    multipleCorrect: false
  },
  {
    id: 6,
    module: 1,
    session: 1,
    question: "What type of problem representatives are used for Navier–Stokes equations, Black–Scholes equation and Weather prediction?",
    options: [
      "Linear algebra",
      "Stochastic systems",
      "Graph problems",
      "Solution of partial-differential equations",
      "Large systems with pair-wise force interactions"
    ],
    correctAnswer: [3],
    multipleCorrect: false
  },
  {
    id: 7,
    module: 1,
    session: 1,
    question: "What is true about commodity clusters?",
    options: [
      "is a form of HPC assembled from commercially manufactured subsystems",
      "cluster \"node\" is a computer that can be directly employed individually as a PC",
      "Provides economy of scale to increase performance to cost dramatically compared to custom-designed MPPs of the same scale",
      "Examples are Touchstone Paragon (1994), the Thinking Machines Corporation CM-5"
    ],
    correctAnswer: [0, 1, 2],
    multipleCorrect: true
  },
  {
    id: 8,
    module: 1,
    session: 1,
    question: "What is true about FLOPS?",
    options: [
      "Stands for Floating-Point Operations",
      "is an addition or multiplication of two real (or floating-point) numbers",
      "Stands for Floating-point operations per second",
      "is an addition or multiplication of two integer numbers represented",
      "We uses the greek prefixes kilo, mega, giga, tera, and peta to represent 1000, 1 million, 1 billion, 1 trillion, and 1 quadrillion"
    ],
    correctAnswer: [1, 2, 4],
    multipleCorrect: true
  },
  {
    id: 9,
    module: 1,
    session: 1,
    question: "Historically supercomputers have been applied to science and engineering, and the methodology has been described as the \"third pillar of science\" alongside and complementing what other pillars?",
    options: [
      "Experimentation (empiricism) and Mathematics (theory)",
      "Simulation and Mathematics (theory)",
      "Empiricism and Simulation",
      "Experimentation (empiricism) and Simulation"
    ],
    correctAnswer: [0],
    multipleCorrect: false
  },
  {
    id: 10,
    module: 1,
    session: 1,
    question: "What is true about \"highly parallel Linpack\" (HPL)?",
    options: [
      "Widely used supercomputer benchmark",
      "Solves a set of linear equations in dense matrix form",
      "measures the rate at which the system can transpose a large array",
      "Gives a means of comparative evaluation between two independent systems by measuring their respective times to perform the same calculation"
    ],
    correctAnswer: [0, 1, 3],
    multipleCorrect: true
  },
  {
    id: 11,
    module: 1,
    session: 1,
    question: "Which of the following best describes Moore's law?",
    options: [
      "The prediction that supercomputer performance would double every 5 years.",
      "The hypothesis that device transistor density will double every decade.",
      "The prediction by Intel's Gordon Moore that device transistor density would increase by a factor of two every 2 years.",
      "The law that all supercomputers should use Intel processors.",
      "The guideline for assessing the efficiency of processors based on their energy consumption"
    ],
    correctAnswer: [2],
    multipleCorrect: false
  },
  {
    id: 12,
    module: 1,
    session: 1,
    question: "When assessing the performance of supercomputers using the Top 500 list, which benchmark is primarily used?",
    options: [
      "Moore's benchmark",
      "HPC linear algebra",
      "System stack performance rate",
      "SIMD array evaluation",
      "HPL or \"Linpack\" benchmark for dense linear algebra"
    ],
    correctAnswer: [4],
    multipleCorrect: false
  },
  {
    id: 13,
    module: 1,
    session: 1,
    question: "What is the primary difference between sustained and peak performance in HPC?",
    options: [
      "Sustained performance refers to the maximum rate theoretically possible by the hardware, while peak performance refers to the real-world application performance.",
      "Sustained and peak performance are the same.",
      "Sustained performance refers to the real-world application performance, while peak performance refers to the maximum rate theoretically possible by the hardware.",
      "Peak performance is only relevant for supercomputers, while sustained performance is for personal computers.",
      "Sustained performance is only achieved after a supercomputer has been operational for 5 years."
    ],
    correctAnswer: [2],
    multipleCorrect: false
  },
  {
    id: 14,
    module: 1,
    session: 1,
    question: "Which of the following is NOT a source of performance degradation in HPC systems?",
    options: [
      "Starvation",
      "Overclocking",
      "Latency",
      "Overhead",
      "Contention"
    ],
    correctAnswer: [1],
    multipleCorrect: false
  },
  {
    id: 15,
    module: 1,
    session: 1,
    question: "With the potential end of Moore's law in sight, which epoch of supercomputing evolution reflects a possible direction for HPC architecture?",
    options: [
      "Von Neumann architecture in vacuum tubes",
      "Calculator mechanical technology",
      "SIMD arrays",
      "Multicore petaflops",
      "Vector processing"
    ],
    correctAnswer: [3],
    multipleCorrect: false
  },
  {
    id: 16,
    module: 1,
    session: 1,
    question: "Imagine you work for a company specializing in weather forecasting. The company's predictions are crucial for several industries, like aviation and agriculture. To ensure accurate predictions, you rely on a supercomputer to process vast amounts of data. Which performance metric would you prioritize for real-time weather prediction?",
    options: [
      "Peak performance: the maximum rate that can be achieved theoretically by the hardware.",
      "Sustained performance: the actual or real-world performance of the application.",
      "Moore's Law performance rate.",
      "Performance as rated by the Top 500 list.",
      "SIMD array evaluation speed."
    ],
    correctAnswer: [1],
    multipleCorrect: false
  },
  {
    id: 17,
    module: 1,
    session: 1,
    question: "A biomedical research institute is analyzing complex protein folding patterns. The process involves dense linear algebra calculations. To compare two supercomputers for potential acquisition, which benchmark would be the most relevant?",
    options: [
      "Von Neumann benchmark",
      "SIMD performance metric",
      "HPL or \"Linpack\" benchmark for dense linear algebra: a measure of a system's floating-point computing power.",
      "Moore's performance rate",
      "System stack throughput test"
    ],
    correctAnswer: [2],
    multipleCorrect: false
  },
  {
    id: 18,
    module: 1,
    session: 1,
    question: "XYZ Corp., a leading AI research facility, just deployed a supercomputer. During initial testing, the system frequently suffers from delays and lags. As a troubleshooter, which source of performance degradation would you first investigate?",
    options: [
      "Starvation: a situation where a task is perpetually deprived of the resources or conditions it needs to proceed.",
      "CPU brand compatibility",
      "Moore's law violation",
      "The age of the machine",
      "Vector processing alignment"
    ],
    correctAnswer: [0],
    multipleCorrect: false
  },
  {
    id: 19,
    module: 1,
    session: 1,
    question: "BioTech Inc. is working on simulating the human brain. This project requires significant memory and processing power. Knowing that the company is going to require enhanced computational abilities soon, what would be a recommendation in light of Moore's law?",
    options: [
      "Wait for two years before buying any new supercomputer.",
      "Acquire multiple low-powered computers now.",
      "Invest in a supercomputer with multicore petaflops architecture: a system with the ability to perform a large number of floating-point calculations simultaneously.",
      "Focus on SIMD array systems.",
      "Just upgrade the current software without changing the hardware."
    ],
    correctAnswer: [2],
    multipleCorrect: false
  },
  {
    id: 20,
    module: 1,
    session: 1,
    question: "The Oceanography Department of a university wants to model ocean currents to predict the spread of pollutants. They are looking at the Top 500 list to identify a suitable supercomputer. Why is this list relevant for their decision?",
    options: [
      "The list is updated biannually and ranks supercomputers based on a system's floating-point computing power using the HPL or \"Linpack\" benchmark.",
      "The list showcases the price of the top supercomputers.",
      "It lists supercomputers based on their size and weight.",
      "The list ranks computers according to Moore's Law.",
      "It shows the power consumption of each supercomputer."
    ],
    correctAnswer: [0],
    multipleCorrect: false
  },

  // Session 2: Architectural Overview of HPC Systems Quiz
  {
    id: 21,
    module: 1,
    session: 2,
    question: "You are designing an HPC cluster that will be used for a mix of real-time data analytics and large-scale scientific simulations. The cluster needs to be future-proofed for scalability and fault tolerance. Given a budget that allows for any interconnect technology, which topology and interconnect would you select? Justify your choice based on the specific requirements.",
    options: [
      "Fat-Tree with InfiniBand",
      "Torus with Ethernet",
      "Dragonfly with Omni-Path",
      "Dragonfly+ with Slingshot",
      "Mesh with Cray Aries"
    ],
    correctAnswer: [3],
    multipleCorrect: false
  },
  {
    id: 22,
    module: 1,
    session: 2,
    question: "What are the key properties that determine performance of an HPC architecture and used in P=e×S×a(R)×μ(E)?",
    options: [
      "Access, Latency, Overconsumption and Waiting",
      "Speed of components, parallelism and efficiency",
      "Security Threats, Latency, Overconsumption and Waiting",
      "Access, Latency, Overconsumption and efficiency"
    ],
    correctAnswer: [1],
    multipleCorrect: false
  },
  {
    id: 23,
    module: 1,
    session: 2,
    question: "What are the main types of Flynn's taxonomy of parallel architectures?",
    options: [
      "SISD—single instruction stream, single data stream",
      "SIMD—single instruction stream, multiple data stream",
      "MIMD—multiple instruction stream, multiple data stream",
      "MISD—multiple instruction stream, single data stream",
      "SPMD - single program, multiple data stream"
    ],
    correctAnswer: [0, 1, 2, 3],
    multipleCorrect: true
  },
  {
    id: 24,
    module: 1,
    session: 2,
    question: "Please select the sentences that are true regarding HPC",
    options: [
      "HPC architecture is concerned with only the lowest-level technologies and circuit design.",
      "The cost of the software on an HPC system is much less than the cost of the hardware platform.",
      "The greater the performance that is required, the harder it is to optimize the user program.",
      "Code reuse is critical to managing application development complexity and difficulty."
    ],
    correctAnswer: [2, 3],
    multipleCorrect: true
  },
  {
    id: 25,
    module: 1,
    session: 2,
    question: "Select the correct words: HPC architecture exploits its enabling technologies to _______ time to solution, _______throughput of operation, and serve the class of computations associated with _______, usually _____-intensive, applications.",
    options: [
      "Maximize, Minimize, small, numeric",
      "Maximize, Minimize, large, data",
      "Minimize, Maximize, large, numeric",
      "Maximize, Maximize, large, data"
    ],
    correctAnswer: [2],
    multipleCorrect: false
  },
  {
    id: 26,
    module: 1,
    session: 2,
    question: "Why is InfiniBand often preferred over Ethernet in HPC systems?",
    options: [
      "It is cheaper and easier to install.",
      "It provides higher bandwidth and lower latency.",
      "It is more compatible with general IT workloads.",
      "It requires less power to operate.",
      "It has a simpler network topology."
    ],
    correctAnswer: [1],
    multipleCorrect: false
  },
  {
    id: 27,
    module: 1,
    session: 2,
    question: "Given a supercomputer designed to run complex AI workloads, which network topology would be most suitable to minimize data transfer latency and maximize scalability?",
    options: [
      "Star Topology",
      "Ring Topology",
      "Fat-tree Topology",
      "Mesh Topology",
      "Dragonfly Topology"
    ],
    correctAnswer: [4],
    multipleCorrect: false
  },
  {
    id: 28,
    module: 1,
    session: 2,
    question: "In a distributed memory system used for climate modeling, what is a primary advantage of this architecture?",
    options: [
      "Simplified programming without the need for message passing.",
      "Reduced latency due to direct memory access by all processors.",
      "Scalability by adding more nodes to handle larger problems.",
      "Higher cost efficiency compared to other architectures.",
      "Reduced need for network bandwidth."
    ],
    correctAnswer: [2],
    multipleCorrect: false
  },
  {
    id: 29,
    module: 1,
    session: 2,
    question: "In a heterogeneous computing system, which programming model is specifically designed for using NVIDIA GPUs for general-purpose processing?",
    options: [
      "OpenMP",
      "MPI",
      "CUDA",
      "OpenCL",
      "HIP"
    ],
    correctAnswer: [2],
    multipleCorrect: false
  },
  {
    id: 30,
    module: 1,
    session: 2,
    question: "In Symmetric Multiprocessing (SMP) systems, what is a significant limitation that affects scalability?",
    options: [
      "Complex programming requirements.",
      "Memory contention and bus bandwidth.",
      "High cost of hardware components.",
      "Limited parallel processing capabilities.",
      "Lack of support for modern programming languages."
    ],
    correctAnswer: [1],
    multipleCorrect: false
  },
  {
    id: 31,
    module: 1,
    session: 2,
    question: "What is true about Reliability? (there are multiple answers)",
    options: [
      "The bigger the system, the most faults will have.",
      "\"Hard\" faults is when a part of the hardware breaks permanently",
      "\"Soft\" fault a when the Software brakes permanently",
      "\"Soft\" fault is when a part intermittently fails but otherwise operates correctly.",
      "We can use checkpoint/restart to prevent softwadre errors"
    ],
    correctAnswer: [0, 1, 3],
    multipleCorrect: true
  },
  {
    id: 32,
    module: 1,
    session: 2,
    question: "In HPC systems, why is the use of high-speed interconnection networks, like InfiniBand, crucial?",
    options: [
      "For more storage capacity.",
      "To ensure low power consumption.",
      "To allow RGB lighting synchronization.",
      "To ensure efficient communication between thousands of processors.",
      "To cool down the system."
    ],
    correctAnswer: [3],
    multipleCorrect: false
  },
  {
    id: 33,
    module: 1,
    session: 2,
    question: "Which of Flynn's taxonomy classifications is described as multiple instructions operating on a single data stream and is rare in practice?",
    options: [
      "SIMD",
      "SISD",
      "MISD",
      "MIMD",
      "SIPD"
    ],
    correctAnswer: [2],
    multipleCorrect: false
  },
  {
    id: 34,
    module: 1,
    session: 2,
    question: "According to Flynn's Taxonomy, which category does a modern GPU fall into?",
    options: [
      "SISD",
      "SIMD",
      "MISD",
      "MIMD",
      "None of the above"
    ],
    correctAnswer: [1],
    multipleCorrect: false
  },
  {
    id: 35,
    module: 1,
    session: 2,
    question: "Which network topology would you choose for a supercomputer that requires high fault tolerance and multiple direct paths between nodes?",
    options: [
      "Star Topology",
      "Ring Topology",
      "Torus Topology",
      "Mesh Topology",
      "Hypercube Topology"
    ],
    correctAnswer: [4],
    multipleCorrect: false
  },
  {
    id: 36,
    module: 1,
    session: 2,
    question: "In the context of High-Performance Computing (HPC), what advantage does incorporating accelerators like GPUs or FPGAs alongside traditional CPUs provide?",
    options: [
      "Allows better RGB lighting effects.",
      "Enhances the boot-up speed of the system.",
      "Provides better aesthetics to the system build.",
      "Speeds up specific types of computations.",
      "Reduces the power consumption of the entire system."
    ],
    correctAnswer: [3],
    multipleCorrect: false
  },
  {
    id: 37,
    module: 1,
    session: 2,
    question: "Jane is a game developer working on optimizing a graphics engine. She wants to perform the same shading operation on multiple vertices simultaneously. Based on Flynn's Taxonomy, which type of parallelism should Jane's graphics engine utilize?",
    options: [
      "SISD",
      "SIMD (A paradigm where a single instruction operates on multiple data points concurrently)",
      "MISD",
      "MIMD",
      "SIDI"
    ],
    correctAnswer: [1],
    multipleCorrect: false
  },
  {
    id: 38,
    module: 1,
    session: 2,
    question: "Which interconnect technology is known for its microsecond-level latency and is commonly used in high-performance computing environments?",
    options: [
      "Ethernet",
      "InfiniBand",
      "USB",
      "Wi-Fi",
      "Bluetooth"
    ],
    correctAnswer: [1],
    multipleCorrect: false
  },
  {
    id: 39,
    module: 1,
    session: 2,
    question: "Apple's M1 chip is known for its impressive performance in both high-end tasks like video editing and everyday tasks like browsing. The chip contains a combination of high-performance and energy-efficient cores. This diverse mixture of cores on a single chip is an example of what computing structure?",
    options: [
      "Monolithic Computing",
      "Heterogeneous Computing",
      "Homogeneous Computing",
      "Singular Computing",
      "Binary Computing"
    ],
    correctAnswer: [1],
    multipleCorrect: false
  },
  {
    id: 40,
    module: 1,
    session: 2,
    question: "Dr. Thompson is researching the protein structures of a newly discovered virus. He needs to run simulations involving millions of atoms and requires a system that can handle multiple sets of instructions on multiple data points. According to Flynn's Taxonomy, which type of parallelism should Dr. Thompson's HPC system employ for his research?",
    options: [
      "SISD",
      "SIMD",
      "MISD",
      "MIMD (Multiple instructions operating on multiple data points)",
      "SISD-MIMD"
    ],
    correctAnswer: [3],
    multipleCorrect: false
  },
  {
    id: 41,
    module: 1,
    session: 2,
    question: "The StarGaze Observatory is attempting to map the entire Milky Way. Their computational needs involve processing vast amounts of data from different telescopes concurrently. They're considering using a Beowulf cluster. Why might a Beowulf cluster be suitable for StarGaze's computational demands?",
    options: [
      "It focuses solely on SIMD operations.",
      "It is a single powerful machine with a large CPU.",
      "It's a cluster of networked computers acting as one system (often using commodity hardware).",
      "It exclusively uses quantum computing.",
      "It operates on MISD principles."
    ],
    correctAnswer: [2],
    multipleCorrect: false
  },
  {
    id: 42,
    module: 1,
    session: 2,
    question: "Order the memory technologies by speed from faster to slower:",
    options: [
      "Magnetic storage, NVRAM, DRAM, SRAM",
      "SRAM, DRAM, NVRAM, Magnetic Storage",
      "DRAM, SRAM, NVRAM, Magnetic storage",
      "Magnetic storage, NVRAM, DRAM, SRAM"
    ],
    correctAnswer: [1],
    multipleCorrect: false
  },
  {
    id: 43,
    module: 1,
    session: 2,
    question: "What is true about von Neumann architecture?",
    options: [
      "Define in 1940 the modern architecture for computers",
      "Uses an ALU, registers, processor and main memory",
      "The ALU (arithmetic logic unit) stores memory",
      "A load operation reads a word from memory and places its value into a register, to be used by the ALU.",
      "Operation of the processor is managed by the Controller"
    ],
    correctAnswer: [0, 1, 3, 4],
    multipleCorrect: true
  },
  {
    id: 44,
    module: 1,
    session: 2,
    question: "Suppose 50% of a program can be executed in parallel. What is the maximum speed up for a computer with 5 cores?",
    code: `Speedup = 1 / ((1 - P) + P/N)
where P = parallel portion (0.5)
      N = number of processors (5)`,
    options: [
      "1.82 times",
      "1.66 times",
      "2.21 times",
      "0.89 times"
    ],
    correctAnswer: [1],
    multipleCorrect: false
  },
  {
    id: 45,
    module: 1,
    session: 2,
    question: "What is true about MPPs clusters? MPP stands for Massively Parallel Processing. An MPP cluster is a high-performance computing system composed of multiple interconnected computers (nodes) working together to solve complex problems",
    options: [
      "MPPs are single systems comprising many integrated computer processors.",
      "Easily scales to extremes of computing system size and performance",
      "MPPs always have shared-memory by all nodes",
      "They use Message passing by a system area network (SAN)",
      "Typically, MPPs exhibit lower efficiencies with respect to number of cores than Commodity Clusters"
    ],
    correctAnswer: [0, 1, 3],
    multipleCorrect: true
  },

  // Session 3: Resource Management and Performance Metrics in Parallel Systems Quiz
  {
    id: 46,
    module: 1,
    session: 3,
    question: "What service is responsible for monitoring the state of system resources and deciding when and on which subset of resources each job is to run?",
    options: [
      "Server",
      "Communication service",
      "Scheduler",
      "MoM"
    ],
    correctAnswer: [2],
    multipleCorrect: false
  },
  {
    id: 47,
    module: 1,
    session: 3,
    question: "What srun command has been sent for this execution: A srun command is submitted on a machine equipped with dual quad-core processors (each core supporting single thread of execution), two nodes will be allocated for the job. Assuming the first socket of node 0 includes cores numbered 0–3 and the second cores 4–7, task 0 will run on cores 0 and 1, task 1 on cores 4 and 5, task 2 on cores 2 and 3, and task 3 on cores 6 and 7. The remaining tasks will be instantiated on node 1, with task 4 using cores 0 and 1 and task 5 cores 4 and 5.",
    options: [
      "srun –n6 –c2 –m'block:cyclic' my_app",
      "srun –n6 –c2 –mplane=2:fcyclic,NoPack my_app",
      "srun –n6 –c2 –m'block:block' my_app",
      "srun –wnode0[4-6],node08 –N6 my_app"
    ],
    correctAnswer: [1],
    multipleCorrect: false
  },
  {
    id: 48,
    module: 1,
    session: 3,
    question: "What will this command do? (multiple true)",
    code: `qsub –q debug –l nodes=4,walltime=30:00 job.sh`,
    options: [
      "Submit the job to the specific queue (\"debug\" in this case)",
      "will start four instances of the job.sh program (one per host)",
      "the maximum amount of time a job is permitted to run is 30 min",
      "will launch a Slurm job in debug partition"
    ],
    correctAnswer: [0, 2],
    multipleCorrect: true
  },
  {
    id: 49,
    module: 1,
    session: 3,
    question: "What are the resource management tools' principal functions? (Multiple correct answers)",
    options: [
      "resource allocation",
      "workload scheduling",
      "support for distributed workload execution and monitoring",
      "Replaces the OS in the nodes"
    ],
    correctAnswer: [0, 1, 2],
    multipleCorrect: true
  },
  {
    id: 50,
    module: 1,
    session: 3,
    question: "What is true about job queues in resource managers?",
    options: [
      "Is possible to find interactive queue solely for interactive jobs.",
      "defines the order in which jobs are selected",
      "Most systems typically use multiple job queues",
      "FIFO is a job queue strategy",
      "All answers are correct"
    ],
    correctAnswer: [4],
    multipleCorrect: false
  },
  {
    id: 51,
    module: 1,
    session: 3,
    question: "Amdahl's Law is often cited in the context of SMP. If 20% of a program cannot be parallelized and runs on a single processor, what is the theoretical maximum speedup you can achieve with infinite processors in an SMP system?",
    code: `Speedup = 1 / ((1 - P) + P/N)
where P = parallel portion (0.8)
      N = infinite processors`,
    options: [
      "2x",
      "4x",
      "5x",
      "10x",
      "Infinite"
    ],
    correctAnswer: [2],
    multipleCorrect: false
  },
  {
    id: 52,
    module: 1,
    session: 3,
    question: "What is true about the HPL benchmark? (Multiple correct answers)",
    options: [
      "The Linpack benchmark solves a dense, regular system of linear equations",
      "The Linpack benchmark provides an estimate of a system's effective floating-point performance.",
      "The HPL benchmark is used for ranking supercomputers in the Top 500 list.",
      "HPL is part of the HPC Challenge benchmark suite that contains seven widely used HPC benchmarks",
      "Early versions of the HPL include the floating-point-intensive Whetstone benchmark and the integer-oriented Dhrystone benchmark."
    ],
    correctAnswer: [0, 1, 2],
    multipleCorrect: true
  },
  {
    id: 53,
    module: 1,
    session: 3,
    question: "What is true about this image? (Multiple correct answers)",
    image: "data:image/png;base64,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",
    options: [
      "20-node cluster that has been partitioned into two disjoint node sets, Partition 1 and Partition 2",
      "Job 1 has been assigned all nodes in Partition 1 and all are currently utilized by Job Step 1",
      "In partition 2, the scheduler designated only 9 out of 12 available nodes for Job 2 and 8 of them are in use by two concurrent job steps, Job Steps 5 and 6",
      "Remaining three nodes in Partition 2 could not be allocated to another job"
    ],
    correctAnswer: [0, 1, 2],
    multipleCorrect: true
  },
  {
    id: 54,
    module: 1,
    session: 3,
    question: "What is the primary purpose of benchmarking in HPC?",
    options: [
      "To debug software programs.",
      "To compare different programming languages.",
      "To measure and compare the performance of supercomputers empirically.",
      "To enhance the graphical user interface of software.",
      "To upgrade the operating system."
    ],
    correctAnswer: [2],
    multipleCorrect: false
  },
  {
    id: 55,
    module: 1,
    session: 3,
    question: "What is Slurm primarily used for in HPC environments?",
    options: [
      "Data storage",
      "Network security",
      "Task scheduling",
      "Graphics rendering",
      "Virtualization"
    ],
    correctAnswer: [2],
    multipleCorrect: false
  },
  {
    id: 56,
    module: 1,
    session: 3,
    question: "If a user submits a job using the 'srun' command in Slurm without specifying any nodes, what will Slurm do?",
    options: [
      "The job will be rejected.",
      "The job will be executed on the master node.",
      "Slurm will choose appropriate nodes based on available resources.",
      "The job will be executed on all nodes in the cluster.",
      "Slurm will prompt the user to specify nodes."
    ],
    correctAnswer: [2],
    multipleCorrect: false
  },
  {
    id: 57,
    module: 1,
    session: 3,
    question: "Which command in Slurm provides information about current job status, node availability, and other cluster states?",
    options: [
      "srun",
      "sinfo",
      "spart",
      "sstate",
      "snodes"
    ],
    correctAnswer: [1],
    multipleCorrect: false
  },
  {
    id: 58,
    module: 1,
    session: 3,
    question: "Imagine a user needs to run a job that requires 4 nodes and 32 tasks with 8 tasks on each node. Which of the following Slurm commands correctly specifies this requirement?",
    options: [
      "srun -N4 -n32 --ntasks-per-node=8 job_script.sh",
      "srun -N4 -n8 --ntasks-per-node=32 job_script.sh",
      "srun -N32 -n4 --ntasks-per-node=8 job_script.sh",
      "srun -N8 -n4 --ntasks-per-node=32 job_script.sh",
      "srun -N4 --ntasks-per-node=32 job_script.sh"
    ],
    correctAnswer: [0],
    multipleCorrect: false
  },
  {
    id: 59,
    module: 1,
    session: 3,
    question: "Which of the following statements about Slurm's job priority mechanism is true?",
    options: [
      "Jobs are executed based on the order they are received.",
      "Priority is determined only by the age of the job.",
      "Priority is based on a combination of factors including job size, age, and partition configurations.",
      "Larger jobs always have higher priority.",
      "Older jobs are always executed last."
    ],
    correctAnswer: [2],
    multipleCorrect: false
  },
  {
    id: 60,
    module: 1,
    session: 3,
    question: "Alice is working on a climate modeling project and has three large simulation tasks to run. Each simulation requires 10 nodes. She wants to ensure that if one simulation fails, it doesn't impact the others. Which of the following Slurm commands should she use to submit these simulations? Note: In Slurm, the sbatch command is used to submit a job script for later execution.",
    options: [
      "srun -N10 simulation1.sh; srun -N10 simulation2.sh; srun -N10 simulation3.sh",
      "sbatch -N10 simulation1.sh && sbatch -N10 simulation2.sh && sbatch -N10 simulation3.sh",
      "srun -N30 simulation1.sh simulation2.sh simulation3.sh",
      "sbatch --array=1-3 -N10 simulation.sh",
      "srun -N10 simulation1.sh & srun -N10 simulation2.sh & srun -N10"
    ],
    correctAnswer: [3],
    multipleCorrect: false
  },
  {
    id: 61,
    module: 1,
    session: 3,
    question: "Which component of the HPC Challenge Benchmark Suite is best suited for measuring the sustainable memory bandwidth of an HPC system?",
    options: [
      "HPL",
      "RandomAccess",
      "STREAM",
      "FFT",
      "DeepBench"
    ],
    correctAnswer: [2],
    multipleCorrect: false
  },
  {
    id: 62,
    module: 1,
    session: 3,
    question: "Caroline, a data scientist, has been given access to an HPC cluster for her deep learning experiments. For her initial tests, she wants to run her TensorFlow training script on a GPU node. Which of the following Slurm commands would be appropriate for her to request a GPU node? Note: In Slurm, the --gres=gpu option is used to request generic resources, specifically GPUs.",
    options: [
      "srun --gres=gpu:1 tensorflow_script.sh",
      "srun --gpus=1 tensorflow_script.sh",
      "srun --request-gpu tensorflow_script.sh",
      "sbatch --gpu tensorflow_script.sh",
      "srun --resource=gpu tensorflow_script.sh"
    ],
    correctAnswer: [0],
    multipleCorrect: false
  },
  {
    id: 63,
    module: 1,
    session: 3,
    question: "A team is developing a machine learning model that requires benchmarking the training times and accuracy of various frameworks. Which benchmark should they use?",
    options: [
      "HPL",
      "STREAM",
      "HPCG",
      "MLPerf",
      "RandomAccess"
    ],
    correctAnswer: [3],
    multipleCorrect: false
  },
  {
    id: 64,
    module: 1,
    session: 3,
    question: "An HPC system needs a comprehensive performance evaluation that includes memory bandwidth, computation power, and data access patterns. Which benchmark suite should be used and why?",
    options: [
      "HPL, because it measures floating-point computation power.",
      "STREAM, because it measures memory bandwidth.",
      "HPCG, because it focuses on sparse matrix operations.",
      "HPC Challenge Benchmark Suite, because it includes HPL, STREAM, RandomAccess, and FFT.",
      "DeepBench, because it benchmarks deep learning operations."
    ],
    correctAnswer: [3],
    multipleCorrect: false
  },

  // Session 4: Cloud-based HPC Virtualization/Containers
  {
    id: 65,
    module: 1,
    session: 4,
    question: "Which of the following best describes the primary function of Infrastructure as a Service (IaaS) in HPC?",
    options: [
      "Provides platforms for developing, running, and managing HPC application",
      "Offers HPC applications over the internet with pay-per-use pricing",
      "Provides virtualized computing resources over the internet on a pay-as-you-go basis",
      "Delivers pre-configured environments for specific HPC applications",
      "Manages containerized applications across multiple cloud providers"
    ],
    correctAnswer: [2],
    multipleCorrect: false
  },
  {
    id: 66,
    module: 1,
    session: 4,
    question: "A bioinformatics researcher needs to ensure that their analysis pipeline is reproducible across different HPC systems. Which technology should they use and why?",
    options: [
      "Virtual Machines (VMs) because they provide full hardware virtualization",
      "Bare metal servers because they offer direct hardware access",
      "Singularity containers because they encapsulate entire software environments",
      "Docker containers because they share the host OS kernel",
      "On-premises HPC clusters because they ensure control over resources"
    ],
    correctAnswer: [2],
    multipleCorrect: false
  },
  {
    id: 67,
    module: 1,
    session: 4,
    question: "What is the main difference between Platform as a Service (PaaS) and Infrastructure as a Service (IaaS) in the context of HPC?",
    options: [
      "PaaS provides hardware resources, while IaaS provides software applications",
      "IaaS provides a pay-as-you-go pricing model, while PaaS does not",
      "PaaS offers pre-configured environments for HPC applications, while IaaS provides virtualized hardware resources",
      "IaaS is used for job scheduling, while PaaS is for container management",
      "PaaS requires higher upfront costs compared to IaaS"
    ],
    correctAnswer: [2],
    multipleCorrect: false
  },
  {
    id: 68,
    module: 1,
    session: 4,
    question: "Which use case is best suited for hybrid cloud strategies in HPC?",
    options: [
      "Running real-time data processing tasks with low latency",
      "Performing routine calculations requiring consistent computational power",
      "Handling peak computational demands without permanent infrastructure investment",
      "Ensuring maximum performance with direct hardware access",
      "Avoiding vendor lock-in by distributing workloads across multiple providers"
    ],
    correctAnswer: [2],
    multipleCorrect: false
  },
  {
    id: 69,
    module: 1,
    session: 4,
    question: "What is one key advantage of using containers like Singularity in HPC environments?",
    options: [
      "Requires root privileges to run",
      "Offers full hardware virtualization",
      "Provides lightweight, user-level containerization",
      "Increases overhead compared to VMs",
      "Limits flexibility in resource allocation"
    ],
    correctAnswer: [2],
    multipleCorrect: false
  },
  {
    id: 70,
    module: 1,
    session: 4,
    question: "What is the benefit of using MPI-based applications within Singularity containers in an HPC cluster, and how can you integrate it with SLURM for job scheduling?",
    options: [
      "Enhanced security through user-level permissions",
      "Reduced overhead by using lightweight containers",
      "Efficient parallel computing and resource utilization",
      "Simplified software dependency management",
      "Improved scalability with cloud bursting capabilities"
    ],
    correctAnswer: [2],
    multipleCorrect: false
  },
  {
    id: 71,
    module: 1,
    session: 4,
    question: "How does Singularity ensure security when running containers in an HPC environment?",
    options: [
      "By requiring root privileges for container execution",
      "By using a proprietary file system for containers",
      "By running containers with user-level permissions",
      "By isolating containers using full hardware virtualization",
      "By limiting the use of Message Passing Interface (MPI) applications"
    ],
    correctAnswer: [2],
    multipleCorrect: false
  },
  {
    id: 72,
    module: 1,
    session: 4,
    question: "Which Singularity command is used to build a container image from a definition file, and what does this process encapsulate?",
    options: [
      "singularity exec",
      "singularity run",
      "singularity build",
      "singularity pull",
      "singularity start"
    ],
    correctAnswer: [2],
    multipleCorrect: false
  },
  {
    id: 73,
    module: 1,
    session: 4,
    question: "In the context of hybrid cloud strategies for HPC, what role does a tool like AWS Direct Connect play?",
    options: [
      "It provides a high-performance computing instance",
      "It facilitates job scheduling across different HPC clusters",
      "It offers dedicated, high-speed connectivity between on-premises and AWS",
      "It automates the deployment of containerized applications",
      "It manages cost and budget for HPC resources"
    ],
    correctAnswer: [2],
    multipleCorrect: false
  },
  {
    id: 74,
    module: 1,
    session: 4,
    question: "A biotech company needs to run a protein folding simulation that requires high computational power and low latency communication between nodes. They have an on-premises HPC cluster but need additional resources for peak demand. Which hybrid cloud strategy and tools would you recommend, and why?",
    options: [
      "Use AWS EC2 Spot Instances with Elastic Fabric Adapter (EFA) for low-latency communication",
      "Use Google Cloud's Preemptible VMs for cost-effective additional resources",
      "Use Azure Batch for job scheduling and scaling of large workloads",
      "Use VMware vSphere for managing on-premises resources",
      "Use IBM Watson for AI-driven data analysis"
    ],
    correctAnswer: [0],
    multipleCorrect: false
  },
  {
    id: 75,
    module: 1,
    session: 4,
    question: "A research team is running climate modeling simulations that require significant computational resources. They have decided to use a hybrid cloud strategy to handle peak workloads. Which tools and techniques would best support their needs, and why?",
    options: [
      "Use AWS ParallelCluster for managing and scaling HPC clusters",
      "Use Docker containers for all their workloads",
      "Use Azure Blob Storage for storing climate data",
      "Use IBM Watson for predictive analysis",
      "Use Google Cloud Preemptible VMs for cost-effective computing"
    ],
    correctAnswer: [0],
    multipleCorrect: false
  },
  {
    id: 76,
    module: 1,
    session: 4,
    question: "Your company needs to implement a secure, scalable HPC environment for financial risk modeling. Given the requirement for high security and compliance, which cloud service model and associated tools would you choose, and why?",
    options: [
      "Use IaaS with AWS EC2 instances and Elastic Fabric Adapter (EFA)",
      "Use SaaS with Rescale for on-demand software tools",
      "Use PaaS with Azure Batch for job scheduling and resource management",
      "Use IaaS with Google Compute Engine and custom VMs",
      "Use PaaS with Google Cloud AI Platform for model training and deployment"
    ],
    correctAnswer: [2],
    multipleCorrect: false
  },
  {
    id: 77,
    module: 1,
    session: 4,
    question: "A biotech startup needs to perform large-scale genomics analysis using a bioinformatics pipeline. They decide to use Singularity containers to ensure reproducibility and portability. How would they create, run, and manage these containers in an HPC environment, and why is this approach advantageous?",
    options: [
      "Use VMware vSphere for managing virtual machines",
      "Build Docker images and convert them to Singularity images using singularity build",
      "Use Azure CycleCloud for HPC cluster management",
      "Use Google Cloud Preemptible VMs for cost savings",
      "Run the analysis directly on bare metal servers for maximum performance"
    ],
    correctAnswer: [1],
    multipleCorrect: false
  },
  {
    id: 78,
    module: 1,
    session: 4,
    question: "A university research team is working on a project that requires running millions of Monte Carlo simulations for financial risk analysis. They have decided to use cloud resources to complement their on-premises HPC infrastructure. Which setup would you recommend to optimize cost and performance, and why?",
    options: [
      "Use Google Cloud TPU VMs for all simulations",
      "Use AWS EC2 Spot Instances for cost-effective computation during peak loads",
      "Use Azure Blob Storage for storing simulation data D. Use IBM Watson for AI-driven insights",
      "Use Docker containers for running simulations"
    ],
    correctAnswer: [1],
    multipleCorrect: false
  },
  {
    id: 79,
    module: 1,
    session: 4,
    question: "A pharmaceutical company is conducting high-throughput drug screening using machine learning models. They need to ensure high performance and fast deployment across different HPC systems. Which containerization technology should they use, and how would it benefit their workflow?",
    options: [
      "Use VMware vSphere for managing virtual machines",
      "Use Docker for containerization of machine learning models",
      "Use Singularity for encapsulating machine learning workflows in HPC environments",
      "Use Azure Batch for job scheduling and resource scaling",
      "Use Google Cloud Storage for storing drug screening data"
    ],
    correctAnswer: [2],
    multipleCorrect: false
  },
  {
    id: 80,
    module: 1,
    session: 4,
    question: "A research team is utilizing AWS for large-scale genomics data analysis. They need to ensure the data is processed efficiently and cost-effectively. Which combination of AWS services would best support their needs, and why?",
    options: [
      "AWS EC2 Spot Instances with Amazon S3 for storage",
      "AWS Lambda for on-demand computation",
      "AWS RDS for database management",
      "AWS LightSail for simple cloud deployment",
      "AWS CloudFront for content delivery"
    ],
    correctAnswer: [0],
    multipleCorrect: false
  },
  {
    id: 81,
    module: 1,
    session: 4,
    question: "A financial firm wants to enhance their real-time risk analysis capabilities using cloud-based HPC. They aim to integrate edge computing for faster data processing. Which cloud and edge computing services should they leverage, and why?",
    options: [
      "Azure Batch and Azure IoT Edge",
      "Google Cloud AI Platform and Google Kubernetes Engine",
      "AWS Lambda and AWS Greengrass",
      "IBM Watson and IBM Cloud Functions",
      "Google Cloud Storage and Google Cloud Function"
    ],
    correctAnswer: [2],
    multipleCorrect: false
  },
  {
    id: 82,
    module: 1,
    session: 4,
    question: "Your team is tasked with deploying an HPC application that requires high throughput and low-latency networking for a simulation. Which cloud-based HPC instance type would you choose and why?",
    options: [
      "AWS EC2 C5n Instances",
      "Google Cloud TPU Instances",
      "Microsoft Azure A-Series Instances",
      "AWS LightSail Instances",
      "Google Cloud GKE Instances"
    ],
    correctAnswer: [0],
    multipleCorrect: false
  },
  {
    id: 83,
    module: 1,
    session: 4,
    question: "A biotech company is using Singularity containers for HPC workloads on a SLURM-managed cluster. They need to ensure the reproducibility of their bioinformatics pipelines. How should they create and manage these containers, and what are the benefits?",
    options: [
      "Use Docker containers with Kubernetes",
      "Create Singularity containers using a definition file and manage them with SLURM",
      "Use Azure Batch for container management",
      "Use Google Cloud AI Platform for container orchestration",
      "Use bare metal servers for maximum performance"
    ],
    correctAnswer: [1],
    multipleCorrect: false
  },
  {
    id: 84,
    module: 1,
    session: 4,
    question: "A university is exploring multi-cloud strategies for their HPC needs to avoid vendor lock-in and enhance resilience. Which tools and approaches should they use to manage this multi-cloud environment effectively?",
    options: [
      "Use AWS Cost Explorer for cost management",
      "Use Terraform and Kubernetes for orchestration and deployment",
      "Use Azure Blob Storage for all data storage needs",
      "Use Google Cloud Functions for serverless computing",
      "Use IBM Watson for AI and machine learning task"
    ],
    correctAnswer: [1],
    multipleCorrect: false
  }
];

