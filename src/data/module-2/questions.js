export const questions = [
  {
    "id": 1,
    "module": 2,
    "session": 1,
    "question": "How does transitioning from an SMP to a NUMA architecture help address scalability issues in high-performance computing systems?",
    "options": [
      "NUMA reduces the number of processors in the system.",
      "NUMA allows processors to access memory banks more quickly by localizing memory access.",
      "NUMA increases the overall power consumption of the system.",
      "NUMA simplifies the programming model for developers.",
      "NUMA reduces the total memory available to each processor"
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 2,
    "module": 2,
    "session": 1,
    "question": "A weather research team is using a distributed memory system to run climatesimulations. Each node in their system\nsimulates a different region of the atmosphere,and nodes communicate via MPI to exchange boundary data. They notice\nthat as thenumber of nodes increases, the overall performance improvement diminishes due to communication\noverhead. Which strategies can they implement to address this issue and improve scalability?",
    "options": [
      "Increase the number of processors per node to reduce the total number of nodes.",
      "Optimize data distribution to ensure that each node has an equal amount of work.",
      "Use synchronous MPI communication to simplify data exchange.",
      "Implement advanced MPI features like non-blocking communication and collective operations to reduce synchronization overhead.",
      "Reduce the size of each simulated region to decrease the amount of data exchangedbetween nodes."
    ],
    "correctAnswer": [
      3
    ],
    "multipleCorrect": false
  },
  {
    "id": 3,
    "module": 2,
    "session": 1,
    "question": "A research lab is using a heterogeneous computing system for their computational biology simulations. The system\nintegrates CPUs for control tasks, GPUs for parallel processing of molecular dynamics, and FPGAs for specific signal\nprocessing tasks. They have noticed that their simulations run faster on this system compared to a traditional\nhomogeneous system. Which of the following explanations best describes why heterogeneous computing offers better\nperformance for their simulations?",
    "options": [
      "Heterogeneous computing reduces the number of cores in each processor, increasing overall performance.",
      "Heterogeneous computing assigns tasks to the most suitable processors, optimizing resource utilization and improving performance.",
      "Heterogeneous computing simplifies the code required for parallel processing, reducing development time.",
      "Heterogeneous computing ensures that all processors have equal access to a single shared memory space, reducing latency.",
      "Heterogeneous computing increases the power consumption of the system, which correlates to higher performance"
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 4,
    "module": 2,
    "session": 1,
    "question": "You are tasked with benchmarking the runtime performance of three programming languages—Python, C, and Fortran—\nfor a simple matrix multiplication operation. Assume that all implementations use efficient algorithms and appropriate\nlibraries. Which language would you expect to have the best runtime performance and why?",
    "options": [
      "Python, because it has high-level matrix libraries like NumPy.",
      "C, because it provides low-level memory control and high optimization capabilities.",
      "Fortran, because of its optimization for array operations and scientific computing.",
      "Python, because it is widely used in data science and machine learning.",
      "C, because it is more modern and has broader use in system-level programming"
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 5,
    "module": 2,
    "session": 1,
    "question": "Which of the following is NOT a challenge associated with Symmetric Multiprocessing (SMP) systems?",
    "options": [
      "Simplified memory management",
      "Memory contention",
      "Scalability limits due to cache coherence",
      "Serialized access to RAM",
      "Higher fault tolerance compared to distributed memory systems"
    ],
    "correctAnswer": [
      4
    ],
    "multipleCorrect": false
  },
  {
    "id": 6,
    "module": 2,
    "session": 1,
    "question": "In a distributed memory system using MPI, which\ntechnique can be used to improve performance by\noverlapping communication and computation?",
    "options": [
      "Blocking communication",
      "Collective operations",
      "Non-blocking communication",
      "Static scheduling",
      "Cache coherence"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 7,
    "module": 2,
    "session": 1,
    "question": "Consider a scientific simulation that requires both high computational power and frequent access to shared data. Which\nmemory model and tools combination would be most effective?",
    "options": [
      "Distributed memory model using MPI",
      "Shared memory model using OpenMP",
      "Hybrid model using MPI and OpenMP",
      "Distributed memory model using PGAS",
      "Heterogeneous computing using CUDA and OpenCL"
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 8,
    "module": 2,
    "session": 1,
    "question": "Why is NUMA (Non-Uniform Memory Access) architecture beneficial for large SMP systems?",
    "options": [
      "It centralizes memory access for all processors",
      "It reduces latency by localizing data to specific processors",
      "It simplifies the programming model by eliminating the need for data partitioning",
      "It increases the scalability by using a single shared system bus",
      "It eliminates the need for cache coherence mechanisms"
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 9,
    "module": 2,
    "session": 1,
    "question": "Your team is developing a molecular dynamics simulation that needs to minimize data transfer between\nprocessors. You are using a distributed memory system with MPI. How can you optimize the performance of\nyour application?",
    "options": [
      "Use blocking communication to ensure data consistency",
      "Employ non-blocking communication to overlap computation and communication",
      "Centralize memory access to a single node",
      "Increase the number of threads using OpenMP",
      "Implement a global address space with PGAS"
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 10,
    "module": 2,
    "session": 1,
    "question": "A video rendering application is being developed to run on a system with multiple\nprocessors sharing a single memory space. Which programming tool and approach would be most effective?",
    "options": [
      "MPI for message passing between processors",
      "OpenMP for multithreaded processing within shared memory",
      "CUDA for offloading tasks to GPUs",
      "PGAS for a global address space",
      "Lustre for parallel file access"
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 11,
    "module": 2,
    "session": 1,
    "question": "Your research project involves training a deep neural network, requiring significant computational resources and efficient\nparallelism. You have access to both CPUs and GPUs. Which approach and tools would you use to optimize training?",
    "options": [
      "MPI for inter-node communication",
      "OpenMP for CPU parallelism",
      "CUDA for GPU acceleration",
      "Hybrid model with MPI and OpenMP",
      "Heterogeneous computing with CUDA and OpenCL"
    ],
    "correctAnswer": [
      4
    ],
    "multipleCorrect": false
  },
  {
    "id": 12,
    "module": 2,
    "session": 1,
    "question": "You are tasked with developing a weather forecasting model that needs to run simulations across a large distributed\nmemory system. You decide to use MPI for inter-node communication. Which MPI feature would best help you manage\ncommunication efficiency, especially when needing to perform many-to-many data exchanges?",
    "options": [
      "Blocking send and receive",
      "Non-blocking send and receive",
      "Collective operations",
      "Point-to-point communication",
      "Persistent communication"
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 13,
    "module": 2,
    "session": 1,
    "question": "In a financial firm, you are implementing a real-time trading system that requires low latency and high throughput. The\nsystem uses both CPUs for control logic and GPUs for rapid data processing. You decide to use CUDA for the GPU\ntasks. What is the main advantage of using CUDA for this scenario?",
    "options": [
      "Simplifies memory management across nodes",
      "Allows efficient message passing between nodes",
      "Enables low-latency, high-throughput parallel processing on GPUs",
      "Provides a global address space for all processors",
      "Automatically balances load across processors"
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 14,
    "module": 2,
    "session": 1,
    "question": "A research lab is running a climate simulation on a cluster with distributed memory. To minimize communication\noverhead, which MPI feature should they use for frequent data exchanges?",
    "options": [
      "Blocking send and receive",
      "Non-blocking send and receive",
      "Collective operations",
      "One-sided communication",
      "Persistent communication"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 15,
    "module": 2,
    "session": 1,
    "question": "In a genomic analysis project, you need to process large datasets on a shared memory system. Which tool\nwould be most effective for managing parallel tasks within this system?",
    "options": [
      "MPI",
      "OpenMP",
      "CUDA",
      "PGAS",
      "Lustre"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 16,
    "module": 2,
    "session": 1,
    "question": "A team is developing a real-time image processing application that leverages both CPUs and GPUs. Which\ncombination of tools would best optimize performance?",
    "options": [
      "MPI and OpenMP",
      "MPI and CUDA",
      "OpenMP and CUDA",
      "PGAS and CUDA",
      "MPI and PGAS"
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 17,
    "module": 2,
    "session": 1,
    "question": "For a financial modelling application running on a distributed memory system, you need to ensure minimal\nlatency in data exchanges. What is the best approach to achieve this?",
    "options": [
      "Use blocking communication to ensure data consistency",
      "Implement non-blocking communication to overlap computation and communication",
      "Use a single node for centralized memory access",
      "Employ static scheduling to pre-assign tasks",
      "Use OpenMP for inter-node communication"
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 18,
    "module": 2,
    "session": 1,
    "question": "In a bioinformatics project, you need to perform complex sequence alignment across multiple nodes. Which\nMPI feature would help in reducing communication overhead during this task?",
    "options": [
      "Point-to-point communication",
      "Collective operations",
      "One-sided communication",
      "Blocking communication",
      "Persistent communication"
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 19,
    "module": 2,
    "session": 1,
    "question": "A company is using a hybrid model with MPI and OpenMP for a large-scale simulation. What is the primary\nbenefit of using this hybrid approach?",
    "options": [
      "Simplifies memory management",
      "Enhances load balancing across nodes",
      "Increases single-threaded performance",
      "Optimizes both inter-node and intra-node parallelism",
      "Reduces need for explicit synchronization"
    ],
    "correctAnswer": [
      3
    ],
    "multipleCorrect": false
  },
  {
    "id": 20,
    "module": 2,
    "session": 1,
    "question": "In a deep learning project, you need to utilize GPUs for training neural networks. What is the main advantage of using CUDA in this context?",
    "options": [
      "Provides a global address space",
      "Simplifies memory management",
      "Enables high-throughput parallel processing on GPUs",
      "Automatically balances load across nodes",
      "Reduces communication overhead"
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 21,
    "module": 2,
    "session": 1,
    "question": "A university research team is implementing a molecular dynamics simulation on a cluster. To ensure efficient data\ntransfer and minimal latency, which MPI technique should they use?",
    "options": [
      "Blocking communication",
      "Non-blocking communication",
      "One-sided communication",
      "Point-to-point communication",
      "Static scheduling"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 22,
    "module": 2,
    "session": 1,
    "question": "In a large-scale weather prediction model, you need to ensure that all nodes have a consistent view of the data. Which MPI feature can help\nachieve this?",
    "options": [
      "Point-to-point communication",
      "Non-blocking communication",
      "Collective operations",
      "One-sided communication",
      "Persistent communication"
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 23,
    "module": 2,
    "session": 1,
    "question": "A team is working on a high-frequency trading system that requires ultra-low latency. They decide to use FPGAs along with CPUs. What is\nthe primary benefit of using FPGAs in this scenario?",
    "options": [
      "Simplifies programming",
      "Provides high-throughput parallel processing",
      "Enables low-latency custom hardware acceleration",
      "Enhances load balancing",
      "Offers a global address space"
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 24,
    "module": 2,
    "session": 1,
    "question": "You are optimizing a large-scale scientific simulation on a hybrid HPC system. Which combination of tools would best\nleverage both shared and distributed memory models?",
    "options": [
      "MPI and OpenMP",
      "OpenMP and CUDA",
      "MPI and PGAS",
      "OpenMP and PGAS",
      "MPI and Lustre"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 25,
    "module": 2,
    "session": 1,
    "question": "In a real-time data processing application for autonomous vehicles, you need to handle data from multiple sensors.\nWhich combination of processors and tools would best optimize this task?",
    "options": [
      "CPUs and MPI",
      "CPUs and OpenMP",
      "GPUs and CUDA",
      "CPUs, GPUs, and OpenMP",
      "CPUs, GPUs, and CUDA"
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 26,
    "module": 2,
    "session": 1,
    "question": "What will be the output of the following OpenMP code, considering the correct use of data-sharing clauses?\n#include <omp.h>\n#include <stdio.h>\nint main() {\nint x = 10;\n#pragma omp parallel default(none) shared(x)\n{\nint y = x + omp_get_thread_num();\nprintf(\"Thread %d has y = %d\\n\", omp_get_thread_num(), y);\n}\nreturn 0;\n}",
    "options": [
      "\"Thread 0 has y = 10\", \"Thread 1 has y = 11\", ..., up to the number of threads.",
      "\"Thread 0 has y = 0\", \"Thread 1 has y = 1\", ..., with unpredictable values.",
      "A compilation error due to missing shared clause.",
      "\"Thread 0 has y = 10\" repeated for each thread.",
      "\"Thread x has y = x\" for all threads."
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 27,
    "module": 2,
    "session": 1,
    "question": "Consider the following OpenMP code using master and single directives. How do these directives influence the\nexecution of the program, and what is the expected output?\n#include <omp.h>\n#include <stdio.h>\nint main() {\nint data_initialized = 0;\n#pragma omp parallel\n{\n#pragma omp master\n{\n// This block is executed by the master thread only\nprintf(\"Master thread initializing data\\n\");\ndata_initialized = 1;\n}\n#pragma omp single\n{\n// This block is executed by a single thread only\nprintf(\"Single thread handling setup\\n\");\n}\n#pragma omp barrier // Ensures all threads have reached this point\n#pragma omp critical\n{\n// All threads execute this, but one at a time\nprintf(\"Thread %d: data_initialized = %d\\n\", omp_get_thread_num(), data_initialized);\n}\n}\nreturn 0;\n}",
    "options": [
      "The program outputs the initialization message from multiple threads due to incorrect directive usage.",
      "It prints \"Master thread initializing data\" once and \"Single thread handling setup\" once, followed by multiple critical section messages.",
      "Results in a deadlock due to the misuse of the master directive without a barrier.",
      "Causes a segmentation fault because the master thread does not initialize the data.",
      "Outputs the initialization message twice due to improper use of the single directive."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 28,
    "module": 2,
    "session": 1,
    "question": "Which of the following statements correctly explains why the followingOpenMP code results in a race condition and how\nto fix it?\n#include <omp.h>\n#include <stdio.h>\nint main() {\nint counter = 0;\n#pragma omp parallel for\nfor (int i = 0; i < 1000; i++) {\ncounter++;\n}\nprintf(\"Final Counter: %d\\n\", counter);\nreturn 0;\n}",
    "options": [
      "Each thread independently modifies counter, causing unpredictable results. Use #pragma omp atomic for the increment operation.",
      "The code is correctly synchronized and will always print 1000.",
      "Race condition occurs due to insufficient loop iterations. Increase the loop range.",
      "The issue lies with the printf statement. It should be inside the parallel region.",
      "Counter overflow causes a race condition; use a larger data type."
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 29,
    "module": 2,
    "session": 1,
    "question": "The following code will result in a data race:\n#pragma omp parallel for\nfor (i=1; i < 10; i++)\n{\nfactorial[i] = i * factorial[i - 1];\n}",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 30,
    "module": 2,
    "session": 1,
    "question": "which of these is a correct way to set the number of available threads for an OpenMP program to 4?",
    "options": [
      "In a OpenMP program, use the library function omp_get_num_threads(4) to set the number of threads to 4 at the beginning of the main function.",
      "In a OpenMP program, use the library function num_threads(4) to set the number of threads to 4 at the beginning of the main function.",
      "In bash, esport OMP_NUM_THREADS=4",
      "In a OpenMP program, use the library function omp_max_threads(4) to set the number of threads to 4 at the beginning of the main function"
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 31,
    "module": 2,
    "session": 1,
    "question": "Which of the following about OpenMP is incorrect:",
    "options": [
      "OpenMP is an API that enables explicit multi-threaded parallelism.",
      "The prinary components of OpenMP are compiler directives, runtime library, and environment variables.",
      "OpenMP implementations exist for the Microsoft Windows platform.",
      "OpenMP is designed for distributes memory parallel systems and guarantees efficient use of memory.",
      "OpenMP supports UMA and NUMA architectures."
    ],
    "correctAnswer": [
      3
    ],
    "multipleCorrect": false
  },
  {
    "id": 32,
    "module": 2,
    "session": 1,
    "question": "Within a parallel region, declared variables are by default ________ .",
    "options": [
      "Private",
      "Local",
      "Loco",
      "Shared"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 33,
    "module": 2,
    "session": 1,
    "question": "A ______________ construct by itself creates a “single program multiple data”program, i.e., each thread executes the\nsame code.",
    "options": [
      "Parallel",
      "Section",
      "Single",
      "Master"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 34,
    "module": 2,
    "session": 1,
    "question": "The ______________ specifies that the iterations of the for loop should be executed in parallel by multiple threads",
    "options": [
      "Sections construct",
      "for pragma",
      "Single construct",
      "Parallel for construct"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 35,
    "module": 2,
    "session": 1,
    "question": "If the command: MPI_Reduce (b, c, 4, MPI_INT, MPI_SUM, 2, MPI_COMM_WORLD);\nis executed, what variable recieves the result of the reduction?",
    "options": [
      "a",
      "b",
      "c",
      "Cannot tell without having the entire program"
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 36,
    "module": 2,
    "session": 1,
    "question": "How many iterations are executed if four\nthreads execute the above program?\n#pragma omp parallel private(i)\nfor (int i = 0; i < 100; i++)\n{ a[i] = i; }",
    "options": [
      "20",
      "40",
      "25",
      "35"
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 37,
    "module": 2,
    "session": 1,
    "question": "The following code force threads to wait till all are done",
    "options": [
      "#pragma omp parallel",
      "#pragma omp barrier",
      "#pragma omp critical",
      "#pragma omp sections"
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 38,
    "module": 2,
    "session": 1,
    "question": "All variables have a data-sharing attribute of shared by default, so all threads can access all variables (except parallel\nloop counters).",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 39,
    "module": 2,
    "session": 1,
    "question": "What is the primary purpose of OpenMP?",
    "options": [
      "Object-oriented programming.",
      "Network programming.",
      "Shared memory parallel programming.",
      "Graphics rendering.",
      "Database management"
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 40,
    "module": 2,
    "session": 1,
    "question": "Consider the following code snippet:\n#pragma omp parallel for for (int i = 0; i < 10; i++) {\nprintf(\"Thread %d executes loop\niteration %d\\n\", omp_get_thread_num(), i);\n}\nWhich of the following statements is true about the output of the code?",
    "options": [
      "Only one thread will execute the loop.",
      "Each loop iteration will be executed by a different thread.",
      "The loop iterations may be divided among available threads, and the order of the printed messages can vary.",
      "The omp_get_thread_num() function will always return 0.",
      "The code will produce a compilation error."
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 41,
    "module": 2,
    "session": 1,
    "question": "Which OpenMP clause ensures that each thread has its own copy of a variable so they can operate\nindependently without any interference?",
    "options": [
      "Reduction",
      "shared",
      "firstprivate",
      "private",
      "lastprivate"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 42,
    "module": 2,
    "session": 1,
    "question": "In OpenMP, which directive is specifically designed to ensure that a certain section of the code is executed\nby only one thread at a time, providing mutual exclusion access to shared resources or variables?",
    "options": [
      "#pragma omp barrier",
      "#pragma omp single",
      "#pragma omp master",
      "#pragma omp parallel",
      "#pragma omp critical"
    ],
    "correctAnswer": [
      4
    ],
    "multipleCorrect": false
  },
  {
    "id": 43,
    "module": 2,
    "session": 1,
    "question": "Given a scenario where you're trying to sum elements of an array using multiple threads, which OpenMP\nclause would be particularly helpful in safely combining values from each thread into a single summary value?",
    "options": [
      "Default",
      "schedule",
      "reduction",
      "section",
      "atomic"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 44,
    "module": 2,
    "session": 1,
    "question": "Imagine you're building a photo processing application that applies a filter to a set of images. To speed up the process,\nyou decided to use OpenMP to parallelize the task. Which OpenMP construct would you most likely use to distribute the\ntask of applying the filter to each individual image among multiple threads?",
    "options": [
      "#pragma omp barrier",
      "#pragma omp single",
      "#pragma omp parallel for",
      "#pragma omp critical",
      "#pragma omp atomic"
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 45,
    "module": 2,
    "session": 1,
    "question": "In a scientific simulation, you need to compute the total kinetic energy of particles in a system. Given the shared nature\nof the total energy variable, which OpenMP tool or construct can ensure that updates to this shared variable are\nperformed atomically, avoiding race conditions?",
    "options": [
      "atomic: Ensures a specific memory location is updated atomically.",
      "parallel: Creates a team of threads.",
      "barrier: Synchronizes all threads in a team.",
      "private: Gives each thread its own copy of a variable.",
      "schedule: Determines how iterations of a loop are assigned to threads."
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 46,
    "module": 2,
    "session": 1,
    "question": "\"A company is designing weather prediction software that calculates temperature gradients in a region. Given that different parts of the region can be processed independently, which OpenMP construct would be suitable to divide the region into multiple sections and process them concurrently?",
    "options": [
      "#pragma omp sections",
      "#pragma omp for",
      "#pragma omp single",
      "#pragma omp master",
      "#pragma omp barrier"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 47,
    "module": 2,
    "session": 1,
    "question": "A financial firm is running Monte Carlo simulations to model stock market movements. During the simulation, random\npaths are generated, and each path is independent of others. To ensure that only one thread accesses the shared\nrandom number generator at a time, which OpenMP directive should they use?",
    "options": [
      "#pragma omp parallel for",
      "#pragma omp single",
      "#pragma omp sections",
      "#pragma omp critical",
      "#pragma omp parallel"
    ],
    "correctAnswer": [
      3
    ],
    "multipleCorrect": false
  },
  {
    "id": 48,
    "module": 2,
    "session": 1,
    "question": "An e-commerce platform is implementing a recommendation system that processes user actions (like clicks, views, and\npurchases) to suggest products. Given the high volume of user actions, the platform decides to use OpenMP to\nparallelize the processing. However, the developers notice that when multiple threads update the recommendation\nscores simultaneously, incorrect results are produced. Which OpenMP construct should they use to ensure the safe\naccumulation of scores?",
    "options": [
      "#pragma omp single",
      "#pragma omp parallel",
      "#pragma omp reduction(+:scores)",
      "#pragma omp sections",
      "#pragma omp atomic"
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 49,
    "module": 2,
    "session": 1,
    "question": "Consider the following pseudocode for a parallel matrix multiplication using OpenMP. What is the purpose of the\n#pragma omp parallel for directive?\nmatrix_multiply(A, B, C, N):\n#pragma omp parallel for\nfor i = 0 to N-1:\nfor j = 0 to N-1:\nC[i][j] = 0\nfor k = 0 to N-1:\nC[i][j] = C[i][j] + A[i][k] * B[k][j]",
    "options": [
      "It defines a critical section for synchronization.",
      "It initializes the parallel environment.",
      "It distributes the outer loop iterations across multiple threads.",
      "It combines the results from different threads.",
      "It ensures the loop is executed sequentially"
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 50,
    "module": 2,
    "session": 1,
    "question": "The following pseudocode uses MPI to perform a reduction operation. What is the expected outcome of the\nMPI_Reduce function?\nMPI_Init()\nrank = MPI_Comm_rank()\nsize = MPI_Comm_size()\nlocal_sum = calculate_local_sum(data[rank])\nglobal_sum = 0\nMPI_Reduce(local_sum, global_sum, MPI_SUM, 0, MPI_COMM_WORLD)\nif rank == 0:\nprint(\"Global Sum:\", global_sum)\nMPI_Finalize()",
    "options": [
      "Each process prints its local sum.",
      "Each process computes the global sum independently.",
      "The global sum is computed and available on all processes.",
      "The global sum is computed and available only on the root process.",
      "Each process computes the sum of the local sums from its neighbors"
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 51,
    "module": 2,
    "session": 1,
    "question": "In financial analytics, you are tasked with optimizing a Monte Carlo simulation to model stock price movements. The goal\nis to improve computation speed using OpenMP while ensuring the results are accurate.\n#include <omp.h>\n#include <stdio.h>\n#include <stdlib.h>\n#define NUM_SIMULATIONS 1000000\ndouble simulate_stock_price(int seed) {\nsrand(seed);\ndouble price = 100.0; // Initial stock price\nfor (int i = 0; i < 365; i++) { // Simulate for one year\ndouble change = ((double)rand() / RAND_MAX) * 2 - 1; // Random change\nprice += change;\n}\nreturn price;\n}\nint main() {\ndouble results[NUM_SIMULATIONS];\ndouble sum = 0.0;\nfor (int i = 0; i < NUM_SIMULATIONS; i++) {\nresults[i] = simulate_stock_price(i);\nsum += results[i];\n}\ndouble average = sum / NUM_SIMULATIONS;\nprintf(\"Average stock price: %f\\n\", average);\nreturn 0;\n}",
    "options": [
      "Use #pragma omp parallel for reduction(+:sum) to parallelize the simulation loop, ensuring accurate aggregation of results.",
      "Apply #pragma omp sections to distribute different ranges of simulations across threads.",
      "Use #pragma omp single to maintain sequential execution for correctness.",
      "No changes needed; OpenMP is unnecessary due to the simplicity of the computation.",
      "Use #pragma omp task to dynamically distribute simulations based on runtime conditions"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 52,
    "module": 2,
    "session": 1,
    "question": "Consider the following pseudocode for a parallel matrix multiplication using OpenMP. What is the purpose of the\n#pragma omp parallel for directive?\nmatrix_multiply(A, B, C, N):\n#pragma omp parallel for\nfor i = 0 to N-1:\nfor j = 0 to N-1:\nC[i][j] = 0\nfor k = 0 to N-1:\nC[i][j] = C[i][j] + A[i][k] * B[k][j]",
    "options": [
      "It defines a critical section for synchronization.",
      "It initializes the parallel environment.",
      "It distributes the outer loop iterations across multiple threads.",
      "It combines the results from different threads.",
      "It ensures the loop is executed sequentially"
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 53,
    "module": 2,
    "session": 1,
    "question": "The following pseudocode uses MPI to perform a reduction operation. What is the expected outcome of the\nMPI_Reduce function?\nMPI_Init()\nrank = MPI_Comm_rank()\nsize = MPI_Comm_size()\nlocal_sum = calculate_local_sum(data[rank])\nglobal_sum = 0\nMPI_Reduce(local_sum, global_sum, MPI_SUM, 0,\nMPI_COMM_WORLD)\nif rank == 0:\nprint(\"Global Sum:\", global_sum)\nMPI_Finalize()",
    "options": [
      "Each process prints its local sum.",
      "Each process computes the global sum independently.",
      "The global sum is computed and available on all processes.",
      "The global sum is computed and available only on the root process.",
      "Each process computes the sum of the local sums from its neighbours"
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 54,
    "module": 2,
    "session": 1,
    "question": "Given the following pseudocode for a parallel for loop using OpenMP, what will be the final value of the variable sum?\nsum = 0\narray = [1, 2, 3, 4, 5]\n#pragma omp parallel for reduction(+:sum)\nfor i = 0 to 4:\nsum = sum + array[i]",
    "options": [
      "0",
      "1",
      "5",
      "10",
      "15"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 55,
    "module": 2,
    "session": 1,
    "question": "Consider the following pseudocode using MPI for a scatter operation. What does the MPI_Scatter function achieve in\nthis context?\nMPI_Init()\nrank = MPI_Comm_rank()\nsize = MPI_Comm_size()\nif rank == 0:\ndata = [1, 2, 3, 4, 5, 6, 7, 8]\nelse:\ndata = None\nrecv_data = allocate_memory(size)\nMPI_Scatter(data, 1, MPI_INT, recv_data, 1, MPI_INT, 0,\nMPI_COMM_WORLD)\nprint(\"Rank\", rank, \"received\", recv_data)\nMPI_Finalize()",
    "options": [
      "Distributes chunks of the data array to all processes.",
      "Gathers data from all processes to the root process.",
      "Reduces data from all processes to a single value.",
      "Broadcasts the entire data array to all processes.",
      "Synchronizes all processes before data distribution."
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 56,
    "module": 2,
    "session": 1,
    "question": "Which of the following statements correctly describes the role of the #pragma ompparallel directive in OpenMP, and what\nwould be the output of the following code snippet if run on a machine with 4 cores?\n#include <omp.h>\n#include <stdio.h>\nint main() {\n#pragma omp parallel\n{\nprintf(\"OpenMP is running on thread %d\\n\",\nomp_get_thread_num());\n}\nreturn 0;\n}",
    "options": [
      "It initiates a parallel region and creates as many threads as available cores, printing a message from each thread.",
      "It creates a single thread to execute the block and outputs \"OpenMP is running on thread 0\" once.",
      "It does nothing and executes the block sequentially.",
      "It limits execution to a single core, outputting \"OpenMP is running on thread 0\" four times.",
      "It compiles the code but throws a runtime error due to incorrect usage of OpenMP."
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 57,
    "module": 2,
    "session": 1,
    "question": "You’re asked to parallelize a dot product. Consider the following buggy\nattempt:\n#include <omp.h>\n#include <stdio.h>\ndouble dot(const double *a, const double *b, int n) {\ndouble sum = 0.0;\n#pragma omp parallel for default(none) shared(a,b,n) private(sum)\nfor (int i = 0; i < n; ++i) {\nsum += a[i]*b[i];\n}\nreturn sum;\n}\nWhich option is the best correction to make the result correct and deterministic,\nwith minimal added overhead?",
    "options": [
      "Replace private(sum) by shared(sum) and add #pragma omp critical around the update.",
      "Keep private(sum) and add #pragma omp atomic to the update.",
      "Replace private(sum) by firstprivate(sum) and use #pragma omp critical around the update.",
      "Replace private(sum) by a reduction(+:sum) clause on the parallel-for and drop private(sum).",
      "Keep everything and simply add #pragma omp barrier after the loop"
    ],
    "correctAnswer": [
      3
    ],
    "multipleCorrect": false
  },
  {
    "id": 58,
    "module": 2,
    "session": 1,
    "question": "Suppose:\n#include <omp.h>\n#include <stdio.h>\nint main() {\nconst int N = 16;\nint owner[16];\n#pragma omp parallel\n{\nint tid = omp_get_thread_num();\n#pragma omp for schedule(static,3)\nfor (int i = 0; i < N; ++i) {\n// heavy(i) is irregular (i%5==0 is 100x slower)\n// simulate work...\nowner[i] = tid;\n}\n}\nfor (int i=0;i<N;++i) printf(\"%d \", owner[i]);\nprintf(\"\\n\");\n}\nAssume 4 threads (T0..T3). Which statement is most accurate about work distribution\nand performance?",
    "options": [
      "Static, chunk 3 assigns (0–2)->T0, (3–5)->T1, (6–8)->T2, (9–11)->T3, (12–14)->T0, (15)- >T1, which can load-imbalance if heavy iterations cluster.",
      "Static, chunk 3 round-robins threads, not chunks; thus T0 gets indices 0,4,8,12.",
      "Static, chunk 3 ensures perfect balance under any workload because every thread executes the same count.",
      "Use dynamic,1 to guarantee deterministic output order and perfect balance.",
      "guided always outperforms dynamic for any irregular workload"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 59,
    "module": 2,
    "session": 1,
    "question": "Real system: concurrent account updates plus a two-lock section. Consider:\n#include <omp.h>\n#include <stdio.h>\nint balance = 0;\nomp_lock_t l1, l2;\nint main() {\nomp_init_lock(&l1);\nomp_init_lock(&l2);\n#pragma omp parallel num_threads(4)\n{\n// A: increment balance many times\n#pragma omp for\nfor (int i=0;i<100000;i++) {\nbalance++; // (1) BUG?\n}\n// B: two-lock region (potential deadlock)\nint tid = omp_get_thread_num();\nif (tid % 2 == 0) {\nomp_set_lock(&l1);\nomp_set_lock(&l2);\n} else {\nomp_set_lock(&l2);\nomp_set_lock(&l1);\n}\n// work...\nomp_unset_lock(&l2);\nomp_unset_lock(&l1);\n}\nomp_destroy_lock(&l1);\nomp_destroy_lock(&l2);\nprintf(\"Final balance = %d\\n\", balance);\n}\nWhich option yields a correct, deadlock-free solution with least synchronization\noverhead?",
    "options": [
      "Put the balance++ in a #pragma omp critical and reverse the unlock order.",
      "Use #pragma omp atomic on balance++ and acquire locks in a consistent order for all threads.",
      "Add #pragma omp barrier before and after the for-loop; keep the rest.",
      "Replace locks by a single global critical region for the two-lock work.",
      "Make balance volatile to avoid compiler reordering and keep lock order as-is"
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 60,
    "module": 2,
    "session": 1,
    "question": "False sharing in a real use case (image filtering)\nYou port a simple image blur that writes per-pixel accumulators into an AoS buffer:\ntypedef struct { float sum; int count; } PixelAcc; // tightly packed\nPixelAcc *acc; // width*height elements\n#pragma omp parallel for\nfor (int y = 0; y < H; ++y) {\nfor (int x = 0; x < W; ++x) {\nint i = y*W + x;\n// each thread updates a disjoint strip, but neighbors land in same cache\nline\nacc[i].sum += input[i];\nacc[i].count += 1;\n}\n}\nOn a many-core CPU, speed drops as threads increase. What change is most likely to fix\nthe slowdown without adding locks?",
    "options": [
      "Replace inner loop with #pragma omp atomic updates on both fields.",
      "Change to schedule(dynamic) so threads hop around more.",
      "Pad PixelAcc to a cache line (e.g., add dummy bytes) or switch to SoA (float *sum; int *count;).",
      "Add #pragma omp critical around the two updates.",
      "Switch to nested parallelism (OMP_NESTED=TRUE) so each strip has its own team."
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 61,
    "module": 2,
    "session": 1,
    "question": "Predict the output pattern (qualitatively) and choose the true statement:\n#include <omp.h>\n#include <stdio.h>\nint main() {\nint data_initialized = 0;\n#pragma omp parallel\n{\n#pragma omp master\n{\n// executed only by the master thread\nprintf(\"Master thread initializing data\\n\");\ndata_initialized = 1;\n}\n#pragma omp single\n{\n// executed by exactly one (any) thread\nprintf(\"Single thread handling setup\\n\");\n}\n#pragma omp barrier\n#pragma omp critical\n{\nprintf(\"Thread %d: data_initialized = %d\\n\",\nomp_get_thread_num(), data_initialized);\n}\n}\n}",
    "options": [
      "The “master” block may run multiple times; use single to restrict.",
      "The program deadlocks because master implies an implicit barrier not reached by others.",
      "Output prints the “master” line once, the “single” line once, then every thread reports data_initialized = 1 in some order.",
      "data_initialized is a private variable in single; others see 0.",
      "To make it correct you must add flush statements."
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 62,
    "module": 2,
    "session": 1,
    "question": "You’re porting a scaling kernel to a GPU:\n#include <omp.h>\n#include <stdio.h>\nint main() {\nconst int N = 1<<20;\nstatic double A[1<<20], B[1<<20];\nfor (int i=0;i<N;i++) { A[i] = i; B[i] = 0; }\nomp_event_handle_t ev;\n#pragma omp target teams distribute parallel for nowait \\\nmap(?1) map(?2) depend(out: ev)\nfor (int i=0;i<N;i++) B[i] = 2.0*A[i];\n#pragma omp task depend(in: ev)\n{\n// must print B[10] == 20.0 deterministically\nprintf(\"B[10] = %.1f\\n\", B[10]);\n}\n#pragma omp taskwait\n}\nWhich pair of map-clauses (?1, ?2) ensures correctness with minimal transfers?",
    "options": [
      "map(tofrom: A), map(to: B)",
      "map(to: A), map(from: B)",
      "map(alloc: A), map(tofrom: B)",
      "map(tofrom: A,B)",
      "map(always, to: A), map(release: B)"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 63,
    "module": 2,
    "session": 1,
    "question": "Real use case: 3-stage pipeline over 2D tiles: blur → sobel → histogram. Fill the\nmissing depend clauses so stages respect per-tile order while different tiles\noverlap:\n#pragma omp parallel\n#pragma omp single\nfor (int t=0; t<T; ++t) {\n#pragma omp task /* A: blur tile t */ depend(?A)\nblur(tile[t], tmp[t]);\n#pragma omp task /* B: sobel tile t */ depend(?B)\nsobel(tmp[t], edge[t]);\n#pragma omp task /* C: histogram tile t */ depend(?C)\nhist(edge[t], H[t]);\n}\n#pragma omp taskwait\nChoose the best tuple (?A, ?B, ?C):",
    "options": [
      "out: tmp[t], out: edge[t], in: edge[t]",
      "in: tile[t], in: tmp[t], in: edge[t]",
      "out: tile[t], in: tile[t], in: tmp[t]",
      "out: tmp[t], in: tmp[t] out: edge[t], in: edge[t]",
      "mutexinoutset: t, mutexinoutset: t, mutexinoutset: t"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 64,
    "module": 2,
    "session": 1,
    "question": "You parallelized three statistics with sections, but results fluctuate:\n#pragma omp parallel shared(x)\n{\n#pragma omp sections\n{\n{ for (int i=0;i<N;i++) if (x[i] > thr) upper++; }\n#pragma omp section\n{ for (int i=0;i<N;i++) if (x[i] <= thr) lower++; }\n#pragma omp section\n{ for (int i=0;i<N;i++) sum += x[i]; }\n}\n}\nprintf(\"upper=%d lower=%d sum=%d\\n\", upper, lower, sum);\nWhat’s the most surgical fix to make all three correct and scalable?",
    "options": [
      "Wrap each section in its own #pragma omp critical.",
      "Make upper, lower, sum private and print them inside the sections.",
      "Use separate reductions: reduction(+:upper), reduction(+:lower), reduction(+:sum) on a combined parallel for.",
      "Keep sections, but add atomic on each increment and on sum +=.",
      "Add a barrier after sections."
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 65,
    "module": 2,
    "session": 1,
    "question": "Removing the implicit barrier with nowait (and when not to)\nYou’ve got two adjacent loops in one parallel region:\n#pragma omp parallel\n{\n// L1: initialize\n#pragma omp for\nfor (int i=0;i<N;i++) a[i] = i;\n// L2: uses a[i] fully initialized\n#pragma omp for\nfor (int i=1;i<N;i++) b[i] = a[i] + a[i-1];\n}\nYou want to overlap L1/L2 for performance by adding nowait. Which option is\ncorrect?",
    "options": [
      "Add nowait to L1 and L2.",
      "Add nowait to L1 only, keep L2 as-is.",
      "Add nowait to L2 only.",
      "Add nowait to both and insert a barrier before L2’s body.",
      "Keep as-is; for has no implicit barrier."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 66,
    "module": 2,
    "session": 1,
    "question": "Consider a bandwidth-bound stencil that touches a[i-1..i+1] linearly. You try:\nexport OMP_NUM_THREADS=16\nexport OMP_PROC_BIND=spread\nexport OMP_PLACES=cores\nand you also try without those variables (letting the OS migrate threads). On a\ndual-socket CPU, which statement is most accurate?",
    "options": [
      "Disabling binding always wins; migration improves fairness.",
      "Binding threads to cores with PROC_BIND often improves cache locality and reduces latency, especially for regular access patterns.",
      "Binding is only useful on GPUs with OpenMP target; it has no effect on CPUs.",
      "Binding helps only if schedule(dynamic) is used.",
      "Binding hurts performance for any bandwidth-bound loop."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 67,
    "module": 2,
    "session": 1,
    "question": "Which of the following is incorrect about MPI:",
    "options": [
      "You can compile your MPI code using any MPI implementation, running on your architecture",
      "MPI uses a shared memory programming model, which means all processes can access shared memory",
      "MPI functions are standardized, which means function calls behave the same regardless of which implementation is used",
      "Any MPI process can directly send and receive messages, to and from other processes"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 68,
    "module": 2,
    "session": 1,
    "question": "A rank number from 0 to N-1 is assigned to each process in an MPI process group of size N, and the higher rank processes are given higher resource priority.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 69,
    "module": 2,
    "session": 1,
    "question": "What does the following MPI code illustrate when executed with 4 processes?\nint main(int argc, char *argv[]) {\nMPI_Init(&argc, &argv);\nint rank, size;\nMPI_Comm_rank(MPI_COMM_WORLD, &rank);\nMPI_Comm_size(MPI_COMM_WORLD, &size);\nint send_data = rank;\nint recv_data;\nif (rank != size - 1) {\nMPI_Send(&send_data, 1, MPI_INT, rank + 1, 0, MPI_COMM_WORLD);\n}\nif (rank != 0) {\nMPI_Recv(&recv_data, 1, MPI_INT, rank - 1, 0, MPI_COMM_WORLD, MPI_STATUS_IGNORE);\nprintf(\"Rank %d received %d from Rank %d\\n\", rank, recv_data, rank - 1);\n}\nMPI_Finalize();\nreturn 0;\n}",
    "options": [
      "Each rank receives the next rank's data",
      "Each rank receives the previous rank's data",
      "Rank 3 receives data from Rank 0",
      "Rank 0 receives data from Rank 3",
      "Ranks print nothing due to deadlock"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 70,
    "module": 2,
    "session": 1,
    "question": "What is the primary purpose of the following MPI code?\n#include <mpi.h>\nint main(int argc, char *argv[]) {\nMPI_Init(&argc, &argv);\nint rank;\nMPI_Comm_rank(MPI_COMM_WORLD, &rank);\nint data = 0;\nif (rank == 0) {\ndata = 100;\nMPI_Bcast(&data, 1, MPI_INT, 0, MPI_COMM_WORLD);\n} else {\nMPI_Bcast(&data, 1, MPI_INT, 0, MPI_COMM_WORLD);\n}\nprintf(\"Rank %d received data: %d\\n\", rank, data);\nMPI_Finalize();\nreturn 0;\n}",
    "options": [
      "Broadcast data from rank 0 to all processes",
      "Gather data from all ranks into rank 0",
      "Reduce data to find maximum value",
      "Scatter different data to each process",
      "Cause a deadlock in the program"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 71,
    "module": 2,
    "session": 1,
    "question": "Analyse the following MPI code and determine the output when executed with 3 processes.\n#include <mpi.h>\n#include <stdio.h>\nint main(int argc, char *argv[]) {\nMPI_Init(&argc, &argv);\nint rank, size;\nMPI_Comm_rank(MPI_COMM_WORLD, &rank);\nMPI_Comm_size(MPI_COMM_WORLD, &size);\nint send_data = rank * 5;\nint gathered[3];\nMPI_Gather(&send_data, 1, MPI_INT, gathered, 1, MPI_INT, 0, MPI_COMM_WORLD);\nif (rank == 0) {\nfor (int i = 0; i < size; i++) {\nprintf(\"gathered[%d] = %d\\n\", i, gathered[i]);\n}\n}\nMPI_Finalize();\nreturn 0;\n}",
    "options": [
      "Rank 0 prints \"gathered[0] = 5, gathered[1] = 10, gathered[2] = 15\"",
      "Each rank prints its own gathered data",
      "No ranks print gathered data",
      "Runtime error occurs due to incorrect MPI_Gather",
      "Rank 0 prints \"gathered[0] = 0, gathered[1] = 5, gathered[2] = 10\""
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 72,
    "module": 2,
    "session": 1,
    "question": "Analyse the following code for potential issues with non-blocking MPI communication. What problem might arise if\nexecuted with 2 processes, and how can it be resolved?\nint main(int argc, char *argv[]) {\nMPI_Init(&argc, &argv);\nint rank;\nMPI_Comm_rank(MPI_COMM_WORLD, &rank);\nint data = 100;\nMPI_Request request;\nif (rank == 0) {\nMPI_Isend(&data, 1, MPI_INT, 1, 0, MPI_COMM_WORLD, &request);\n} else if (rank == 1) {\nMPI_Irecv(&data, 1, MPI_INT, 0, 0, MPI_COMM_WORLD, &request);\n}\nprintf(\"Rank %d: Data = %d\\n\", rank, data);\nMPI_Finalize();\nreturn 0;\n}",
    "options": [
      "The program might deadlock.",
      "Data might not be transferred correctly without MPI_Wait.",
      "MPI_Isend should be MPI_Send.",
      "The code is correct and will run without any issues.",
      "MPI_Irecv should be MPI_Recv."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 73,
    "module": 2,
    "session": 1,
    "question": "Which of the following is not required for a MPI message passing\ncall:\nint MPI_Send (void ∗message, int count, MPI_Datatype\ndatatype, int dest, int tag, MPI_Comm comm)",
    "options": [
      "The starting memory address of your message",
      "Message type",
      "Size of the message in number of bytes",
      "Number of elements of data in the message"
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 74,
    "module": 2,
    "session": 1,
    "question": "You must specify the rank for both source and destination processes, when sending a message using MPI_Send:",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 75,
    "module": 2,
    "session": 1,
    "question": "MPI. Describe for what is used the parameter “tag” in the following function call:\nMPI_Recv(message, 4, MPI_CHAR, 5, tag, MPI_COMM_WORLD, &status)",
    "options": [
      "The message type of the incoming message",
      "Type of communication method",
      "A user-assigned number that must match on both sender and receiver",
      "The type of the process group"
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 76,
    "module": 2,
    "session": 1,
    "question": "In MPI, what purpose does a communicator serve?",
    "options": [
      "It prevents your main program’s MPI calls from being confused with a library’s MPI calls",
      "It can be used to identify a subgroup of processes that will participate in message passing",
      "If equal to MPI_COMM_WORLD, it shows that the communication involves all processes",
      "All of the above"
    ],
    "correctAnswer": [
      3
    ],
    "multipleCorrect": false
  },
  {
    "id": 77,
    "module": 2,
    "session": 1,
    "question": "In MPI, what does MPI_COMM_RANK return?",
    "options": [
      "Number of processes in an MPI program",
      "Priority of the current process",
      "Numerical identifier of the current process within an MPI communicator",
      "Linux process ID"
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 78,
    "module": 2,
    "session": 1,
    "question": "What is the result of this MPI mapreduce if it is run on 3 processes or more?\n#include <mpi.h>\n#include <stdio.h>\nint main(int argc, char **argv) {\nMPI_Init(&argc, &argv);\nint rank;\nMPI_Comm_rank(MPI_COMM_WORLD, &rank); // identify rank\nint input = 0;\nif (rank == 0) {\ninput = 2;\n} else if (rank == 1) {\ninput = 7;\n} else if (rank == 2) {\ninput = 1;\n}\nint output;\nMPI_Allreduce(&input, &output, 1, MPI_INT, MPI_SUM, MPI_COMM_WORLD);\nprintf(\"The result is %d rank %d\\n\", output, rank);\nMPI_Finalize();\nreturn 0;\n}",
    "options": [
      "15",
      "10",
      "5",
      "20"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 79,
    "module": 2,
    "session": 1,
    "question": "Consider the following (pseudo) code - remember that Isend is a nonblocking / immediate send. What happens at\nruntime?\nProcess A\nMPI_Isend(sendmsg1,B,tag=1)\nMPI_Isend(sendmsg2,B,tag=2)\nProcess B\nMPI_Recv(recvmsg2,A,tag=2)\nMPI_Recv(recvmsg1,A,tag=1",
    "options": [
      "The code is guaranteed to deadlock",
      "The code might deadlock",
      "recvmsg1 = sendmsg1 and recvmsg2 = sendmsg2",
      "recvmsg1 = sendmsg2 and recvmsg2 = sendmsg1",
      "both receives complete but their contents are undefined"
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 80,
    "module": 2,
    "session": 1,
    "question": "Explain if the following MPI code segment is correct or not, and why:\nProcess 0 executes:\nMPI_Recv(&yourdata, 1, MPI_FLOAT, 1, tag, MPI_COMM_WORLD,\n&status);\nMPI_Send(&mydata, 1, MPI_FLOAT, 1, tag, MPI_COMM_WORLD);\nProcess 1 executes:\nMPI_Recv(&yourdata, 1, MPI_FLOAT, 0, tag,MPI_COMM_WORLD,\n&status);\nMPI_Send(&mydata, 1, MPI_FLOAT, 0, tag, MPI_COMM_WORLD);",
    "options": [
      "Correct",
      "Incorrect, system will be in deadlock"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 81,
    "module": 2,
    "session": 1,
    "question": "What is the primary objective of using MPI in parallel computing?",
    "options": [
      "Text Processing",
      "Image Rendering",
      "Communication and coordination between parallel processes",
      "Cybersecurity",
      "None of the above"
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 82,
    "module": 2,
    "session": 1,
    "question": "Which MPI function is utilized for sending a message from one process to another specific process in a point-\nto-point communication manner?",
    "options": [
      "MPI_Bcast()",
      "MPI_Send()",
      "MPI_Reduce()",
      "MPI_Scatter()",
      "MPI_Gather()"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 83,
    "module": 2,
    "session": 1,
    "question": "In the context of collective communication in MPI, what does the MPI_Reduce() function do?",
    "options": [
      "Distributes data from one process to all other processes",
      "Gathers data from all processes and distributes it back to all",
      "Applies a reduction operation on all processes and stores the result in one process",
      "Sends a message from one process to another",
      "Gathers data from all processes to one process without applying any"
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 84,
    "module": 2,
    "session": 1,
    "question": "When using MPI_Barrier(), what happens to all the processes involved?",
    "options": [
      "They all simultaneously broadcast a message",
      "They are all synchronized to a defined state",
      "They all perform a reduction operation",
      "They bypass synchronization and execute the next instruction",
      "They immediately terminate"
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 85,
    "module": 2,
    "session": 1,
    "question": "In a parallel computation of the sum of array elements using MPI with 4 processes, if the array has 400\nelements, how many elements are processed by each MPI process in a balanced workload scenario?",
    "options": [
      "50",
      "100",
      "200",
      "400",
      "1600"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 86,
    "module": 2,
    "session": 1,
    "question": "Parallel Image Processing Imagine a scenario where you have a huge image dataset that needs to be processed in\nparallel to identify certain patterns. Which of the following MPI functions would be most suitable for sending portions of\nan image to different processes for parallel processing?",
    "options": [
      "MPI_Scatter()",
      "MPI_Gather()",
      "MPI_Barrier()",
      "MPI_Reduce()",
      "MPI_Bcast()"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 87,
    "module": 2,
    "session": 1,
    "question": "High-Performance Weather Simulation In high-performance computing scenarios like simulating weather patterns,\nensuring all processes have consistent weather data is crucial. Which MPI function would be effective in making sure\nthat an updated weather parameter (e.g., temperature) from the master process is communicated to all other\nprocesses?",
    "options": [
      "MPI_Bcast()",
      "MPI_Send()",
      "MPI_Recv()",
      "MPI_Scatter()",
      "MPI_Reduce()"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 88,
    "module": 2,
    "session": 1,
    "question": "Large Scale Numerical Simulation In large-scale numerical simulations, suppose process 0 computes a pivotal scalar\nvalue that needs to be used by all other processes to proceed with their calculations. Which MPI function is suitable for\ndistributing this scalar value to all processes?",
    "options": [
      "MPI_Reduce()",
      "MPI_Bcast()",
      "MPI_Scatter()",
      "MPI_Gather()",
      "MPI_Send()"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 89,
    "module": 2,
    "session": 1,
    "question": "Analyzing Large Text Data For analyzing a large text dataset for specific keyword occurrences across multiple parallel\nprocesses, after each process calculates its local keyword count, which MPI function would be suitable to collect all the\nlocal counts and sum them up in the master process to get the total count?",
    "options": [
      "MPI_Gather()",
      "MPI_Scatter()",
      "MPI_Reduce()",
      "MPI_Send()",
      "MPI_Bcast()"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 90,
    "module": 2,
    "session": 1,
    "question": "Database Query Execution In a database query execution scenario, if you need to execute a query in parallel where\neach process handles a chunk of the database and the resultant data from all processes need to be collected at a\nmaster process for final processing, which MPI function could be used to gather data from all processes to the master\nprocess?",
    "options": [
      "MPI_Bcast()",
      "MPI_Reduce()",
      "MPI_Gather()",
      "MPI_Scatter()",
      "MPI_Barrier()"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 91,
    "module": 2,
    "session": 1,
    "question": "Given the following MPI code snippet, what will be the output if the program is executed with 4 processes?\n#include <mpi.h>\n#include <stdio.h>\nint main(int argc, char *argv[]) {\nMPI_Init(&argc, &argv);\nint rank, size;\nMPI_Comm_rank(MPI_COMM_WORLD, &rank);\nMPI_Comm_size(MPI_COMM_WORLD, &size);\nint data = rank * 10;\nif (rank == 0) {\nMPI_Send(&data, 1, MPI_INT, 1, 0, MPI_COMM_WORLD);\nMPI_Recv(&data, 1, MPI_INT, 3, 0, MPI_COMM_WORLD, MPI_STATUS_IGNORE);\nprintf(\"Rank 0 received %d from Rank 3\\n\", data);\n} else if (rank == 1) {\nMPI_Recv(&data, 1, MPI_INT, 0, 0, MPI_COMM_WORLD, MPI_STATUS_IGNORE);\ndata += 5;\nMPI_Send(&data, 1, MPI_INT, 2, 0, MPI_COMM_WORLD);\n} else if (rank == 2) {\nMPI_Recv(&data, 1, MPI_INT, 1, 0, MPI_COMM_WORLD, MPI_STATUS_IGNORE);\ndata += 5;\nMPI_Send(&data, 1, MPI_INT, 3, 0, MPI_COMM_WORLD);\n} else if (rank == 3) {\nMPI_Recv(&data, 1, MPI_INT, 2, 0, MPI_COMM_WORLD, MPI_STATUS_IGNORE);\nMPI_Send(&data, 1, MPI_INT, 0, 0, MPI_COMM_WORLD);\n}\nMPI_Finalize();\nreturn 0;",
    "options": [
      "Rank 0 received 0 from Rank 3",
      "Rank 0 received 5 from Rank 3",
      "Rank 0 received 10 from Rank 3",
      "Rank 0 received 15 from Rank 3",
      "Rank 0 received 20 from Rank 3"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 92,
    "module": 2,
    "session": 1,
    "question": "What will be the output of the following code when executed with 4 processes?\n#include <mpi.h>\n#include <stdio.h>\nint main(int argc, char *argv[]) {\nMPI_Init(&argc, &argv);\nint rank, size;\nMPI_Comm_rank(MPI_COMM_WORLD, &rank);\nMPI_Comm_size(MPI_COMM_WORLD, &size);\nint send_data = rank + 1;\nint recv_data = 0;\nMPI_Reduce(&send_data, &recv_data, 1, MPI_INT, MPI_SUM, 0,\nMPI_COMM_WORLD);\nif (rank == 0) {\nprintf(\"The total sum is %d\\n\", recv_data);\n}\nMPI_Finalize();\nreturn 0;\n}",
    "options": [
      "The total sum is 6",
      "The total sum is 10",
      "The total sum is 15",
      "The total sum is 7",
      "The total sum is 9"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 93,
    "module": 2,
    "session": 1,
    "question": "Consider the following MPI code that defines a custom data type. What will be the output when the program is executed with 2 processes?\n#include <mpi.h>\n#include <stdio.h>\n#include <stddef.h>\nstruct Particle {\nint id;\ndouble mass;\nchar type;\n};\nint main(int argc, char *argv[]) {\nMPI_Init(&argc, &argv);\nint rank;\nMPI_Comm_rank(MPI_COMM_WORLD, &rank);\nMPI_Datatype particle_type;\nint block_lengths[3] = {1, 1, 1};\nMPI_Aint displacements[3];\nMPI_Datatype types[3] = {MPI_INT, MPI_DOUBLE, MPI_CHAR};\ndisplacements[0] = offsetof(struct Particle, id);\ndisplacements[1] = offsetof(struct Particle, mass);\ndisplacements[2] = offsetof(struct Particle, type);\nMPI_Type_create_struct(3, block_lengths, displacements, types,\n&particle_type);\nMPI_Type_commit(&particle_type);\nstruct Particle my_particle;\nif (rank == 0) {\nmy_particle.id = 1;\nmy_particle.mass = 2.5;\nmy_particle.type = 'A';\nMPI_Send(&my_particle, 1, particle_type, 1, 0, MPI_COMM_WORLD);\n} else if (rank == 1) {\nMPI_Recv(&my_particle, 1, particle_type, 0, 0, MPI_COMM_WORLD,\nMPI_STATUS_IGNORE);\nprintf(\"Received Particle: id=%d, mass=%f, type=%c\\n\",\nmy_particle.id, my_particle.mass, my_particle.type);\n}\nMPI_Type_free(&particle_type);\nMPI_Finalize();\nreturn 0;\n}",
    "options": [
      "Received Particle: id=1, mass=2.5, type=A",
      "Received Particle: id=1, mass=0.0, type=B",
      "Received Particle: id=0, mass=0.0, type=A",
      "Received Particle: id=1, mass=2.5, type=B",
      "The program will not compile due to errors in type handling"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 94,
    "module": 2,
    "session": 1,
    "question": "Consider the following MPI code that performs a collective communication operation. Identify the mistake that might\ncause this code to fail or produce unexpected results.\n#include <mpi.h>\n#include <stdio.h>\nint main(int argc, char *argv[]) {\nMPI_Init(&argc, &argv);\nint rank, size, data;\nMPI_Comm_rank(MPI_COMM_WORLD, &rank);\nMPI_Comm_size(MPI_COMM_WORLD, &size);\ndata = rank + 1;\nint sum;\nMPI_Reduce(&data, &sum, 1, MPI_INT, MPI_SUM, 1, MPI_COMM_WORLD);\nif (rank == 1) {\nprintf(\"Total sum: %d\\n\", sum);\n}\nMPI_Finalize();\nreturn 0;",
    "options": [
      "The root process for MPI_Reduce should be rank 0 instead of rank 1.",
      "The data should be initialized to 0 for all ranks.",
      "MPI_Reduce cannot be used with MPI_SUM.",
      "The MPI_Reduce call is missing MPI_Barrier.",
      "The sum variable must be initialized before MPI_Reduce."
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 95,
    "module": 2,
    "session": 1,
    "question": "You prototype a 1-D ring for a weather stencil:\n// ring: send to north, recv from south, then recv north, send south\nint north = (rank + 1) % size;\nint south = (rank - 1 + size) % size;\ndouble my = computeLocalWeather(); // pretend\ndouble northVal, southVal;\nMPI_Send(&my, 1, MPI_DOUBLE, north, 0, MPI_COMM_WORLD);\nMPI_Recv(&southVal, 1, MPI_DOUBLE, south, 0, MPI_COMM_WORLD, MPI_STATUS_IGNORE);\nMPI_Recv(&northVal, 1, MPI_DOUBLE, north, 0, MPI_COMM_WORLD, MPI_STATUS_IGNORE);\nMPI_Send(&my, 1, MPI_DOUBLE, south, 0, MPI_COMM_WORLD);\nWhat’s the most realistic outcome on many ranks?",
    "options": [
      "Always terminates; point-to-point is ordered.",
      "May hang due to circular wait on blocking sends/recvs.",
      "Always works if size is even.",
      "Always works if rank==0 posts its Recv first.",
      "Will reorder messages automatically to avoid cycles"
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 96,
    "module": 2,
    "session": 1,
    "question": "Pick the smallest change to make the code safe without adding barriers:\n// ring: send to north, recv from south, then recv north, send south\nint north = (rank + 1) % size;\nint south = (rank - 1 + size) % size;\ndouble my = computeLocalWeather(); // pretend\ndouble northVal, southVal;\nMPI_Send(&my, 1, MPI_DOUBLE, north, 0, MPI_COMM_WORLD);\nMPI_Recv(&southVal, 1, MPI_DOUBLE, south, 0, MPI_COMM_WORLD, MPI_STATUS_IGNORE);\nMPI_Recv(&northVal, 1, MPI_DOUBLE, north, 0, MPI_COMM_WORLD, MPI_STATUS_IGNORE);\nMPI_Send(&my, 1, MPI_DOUBLE, south, 0, MPI_COMM_WORLD);\nPick the smallest change to the code safe without adding barriers:",
    "options": [
      "Replace the first MPI_Send with MPI_Isend and MPI_Wait it after the matching Recv.",
      "Add MPI_Barrier before the first Send.",
      "Change tags to different values (0→1).",
      "Use synchronous send MPI_Ssend.",
      "Set both neighbors to MPI_ANY_SOURCE."
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 97,
    "module": 2,
    "session": 1,
    "question": "Given the manager–worker example where rank 0 receives from all others in rank order:\nif (rank != 0) {\nint msg[2] = {rank, size};\nMPI_Send(msg, 2, MPI_INT, 0, 0, MPI_COMM_WORLD);\n} else {\nfor (int src = 1; src < size; ++src) {\nMPI_Recv(msg, 2, MPI_INT, src, MPI_ANY_TAG, MPI_COMM_WORLD, &status);\nprintf(\"Hello from process %d of %d\\n\", msg[0], msg[1]);\n}\n}\nWhich statement best explains why the output is deterministically ordered by rank?",
    "options": [
      "MPI_Recv with MPI_ANY_TAG sorts messages by rank.",
      "The loop in rank 0 iterates src=1..size-1 and blocks until that exact src arrives.",
      "MPI guarantees FIFO across all sources.",
      "Determinism comes from tags being all zero.",
      "There’s an implicit barrier in MPI_Recv"
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 98,
    "module": 2,
    "session": 1,
    "question": "Two ranks do:\nif (rank == 0) {\nMPI_Isend(&a,1,MPI_INT,1,0,MPI_COMM_WORLD,&reqS);\nMPI_Irecv(&b,1,MPI_INT,1,0,MPI_COMM_WORLD,&reqR);\n// missing waits here\nprintf(\"P0 got %d\\n\", b);\n} else {\nMPI_Isend(&a,1,MPI_INT,0,0,MPI_COMM_WORLD,&reqS);\nMPI_Irecv(&b,1,MPI_INT,0,0,MPI_COMM_WORLD,&reqR);\n// missing waits here\nprintf(\"P1 got %d\\n\", b);\n}\nChoose the best answer:",
    "options": [
      "Always correct—non-blocking completes before printf.",
      "Might print uninitialized b because operations haven’t completed.",
      "Deadlocks because both use Isend.",
      "Requires MPI_Test but not MPI_Wait.",
      "Works only if tags differ"
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 99,
    "module": 2,
    "session": 1,
    "question": "Broadcast vs Scatter: diagnose a misuse\nConsider:\nint A[4] = {3,5,4,1};\nint x;\nif (rank==0) x=A[rank];\nMPI_Bcast(&x, 1, MPI_INT, 0, MPI_COMM_WORLD);\nprintf(\"rank %d: x=%d\\n\", rank, x);\nYou intended each rank to get a different element of A. What’s true?",
    "options": [
      "Works: rank gets A[rank] after bcast.",
      "Everyone prints x=3.",
      "Everyone prints x=A[rank] because rank differs.",
      "This is a gather, not a broadcast.",
      "Need MPI_Allgather to get different values per rank"
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 100,
    "module": 2,
    "session": 1,
    "question": "Given:\nint send = rank;\nint recv[4] = {0};\nMPI_Allgather(&send, 1, MPI_INT, recv, 1, MPI_INT, MPI_COMM_WORLD);\nWhat must hold about recv after the call on every rank (for 4 processes)?",
    "options": [
      "recv={1,2,3,4}",
      "recv={0,1,2,3}",
      "Only rank 0 has recv filled; others zeros.",
      "Contents are unspecified without tags.",
      "Deterministic only if a barrier precedes it."
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 101,
    "module": 2,
    "session": 1,
    "question": "With 4 ranks:\nint send[4]; for (int i=0;i<4;i++) send[i] = i+1 + 4*rank;\nint recv[4];\nMPI_Alltoall(send,1,MPI_INT, recv,1,MPI_INT, MPI_COMM_WORLD);\nprintf(\"rank %d: %d %d %d %d\\n\", rank, recv[0],recv[1],recv[2],recv[3]);\nWhat prints?",
    "options": [
      "r0: 1 2 3 4 ; r1: 5 6 7 8 ; …",
      "r0: 1 5 9 13 ; r1: 2 6 10 14 ; r2: 3 7 11 15 ; r3: 4 8 12 16",
      "r0: 1 6 11 16 ; r1: 2 7 12 17 ; …",
      "Unspecified; alltoall reorders.",
      "Deadlocks unless tags differ."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 102,
    "module": 2,
    "session": 1,
    "question": "Consider:\nMPI_Barrier(MPI_COMM_WORLD); // B0\nMPI_Comm_rank(MPI_COMM_WORLD,&rank);\nMPI_Comm_size(MPI_COMM_WORLD,&size);\nMPI_Get_processor_name(name,&len);\nMPI_Barrier(MPI_COMM_WORLD); // B1\nprintf(\"Hello from %d of %d on %s\\n\", rank, size, name);\nWhat does B1 guarantee for the printfs?",
    "options": [
      "They will print in rank order.",
      "All processes have reached the same point before printing; order still arbitrary.",
      "It flushes stdout line-buffering across nodes.",
      "It equalizes processor names.",
      "It reduces network congestion."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 103,
    "module": 2,
    "session": 1,
    "question": "You pipeline halo exchanges across timesteps for a weather sim to overlap comm/compute:\ndouble sendbuf_n[2], sendbuf_s[2], recvbuf_n[2], recvbuf_s[2];\nMPI_Request rreq[2], sreq[2];\nfor (int t = 0; t < T; ++t) {\n// Fill next outbound payloads into slot t%2\nint k = t & 1;\nsendbuf_n[k] = pack_to_north(t);\nsendbuf_s[k] = pack_to_south(t);\n// Post receives/sends for this timestep\nMPI_Irecv(&recvbuf_n[k], 1, MPI_DOUBLE, north, 1, MPI_COMM_WORLD, &rreq[0]);\nMPI_Irecv(&recvbuf_s[k], 1, MPI_DOUBLE, south, 2, MPI_COMM_WORLD, &rreq[1]);\nMPI_Isend(&sendbuf_n[k], 1, MPI_DOUBLE, north, 2, MPI_COMM_WORLD, &sreq[0]);\nMPI_Isend(&sendbuf_s[k], 1, MPI_DOUBLE, south, 1, MPI_COMM_WORLD, &sreq[1]);\n// Immediately start computing next step...\n// (no waits here)\nupdate_interior(t);\n// BUG: next loop iteration overwrites sendbuf_*[k] before transfers finish\n}\nWhat is the right minimal fix to guarantee correctness and preserve overlap?",
    "options": [
      "Replace all non-blocking calls by blocking MPI_Send/MPI_Recv.",
      "Add MPI_Barrier at the end of the loop.",
      "After update_interior(t), call MPI_Waitall(2, rreq, MPI_STATUSES_IGNORE) and MPI_Waitall(2, sreq, MPI_STATUSES_IGNORE) before the loop iterates.",
      "Use MPI_ANY_SOURCE on the receives to “speed them up.”",
      "Only wait on the receives; sends complete implicitly"
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 104,
    "module": 2,
    "session": 1,
    "question": "What are advantages of GPUs against CPUs?",
    "options": [
      "Limited memory capacity",
      "High bandwidth main memory",
      "Low per-thread performance",
      "Latency tolerant (parallelism)",
      "More compute resources F. High energy efficiency (Flop / Watt)"
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 105,
    "module": 2,
    "session": 1,
    "question": "What is the easiest in terms of programming effort and technical expertise for a GPU programmer to use?",
    "options": [
      "Use Libraries like AmgX or cuBlas",
      "Use directives like openACC",
      "Use programming languages like CUDA",
      "None of the above"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 106,
    "module": 2,
    "session": 1,
    "question": "What is true about CUDA when programming GPUS? (multiple true)",
    "options": [
      "Supports most of the GPU vendors",
      "Uses compiler extension and runtime library",
      "nvcc is a compiler for C/C++ for CUDA",
      "Supports libraries optimized for specific tasks such as graph analytics"
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 107,
    "module": 2,
    "session": 1,
    "question": "What does this OpenACC code will do?\n9       // initialization\n10      for (int i = 0; i < N; i++) vec[i] = i+1;\n11\n12      #pragma acc parallel async\n13      for (int i = 100; i < N; i++) gpu_sum += vec[i];\n14\n15      // the following code executes without waiting for GPU result\n16      for (int i = 0; i < 100; i++) cpu_sum += vec[i];\n17\n18      // synchronize and verify results\n19      #pragma acc wait\n20      printf(“Result: %d (expected: %d)\\n”, gpu_sum+cpu_sum, (N+1)∗N/2);",
    "options": [
      "Sums vector of 1000 elements, first 100 with CPU, 900 with GPU asynchronous.",
      "Sums vector of 1000 elements, first 100 with GPU, 900 with CPU asynchronous.",
      "Sums vector of 1000 elements, first 100 with GPU, 900 with CPU synchronous.",
      "Sums vector of 1000 elements, first 100 with CPU, 900 with GPU synchronous."
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 108,
    "module": 2,
    "session": 1,
    "question": "When using variables in OpenACC when programming accelerators, why you will use firstprivate instead of private?",
    "options": [
      "With firstprivate the private arrays are initialized to the value of the host array. With private they are initialized to the value of the accelerator array.",
      "With firstprivate the private arrays are initialized to the value of the host array. With private they are unitialized.",
      "With firstprivate the private arrays are initialized to the value of the accelerator array. With private they are initialized to the value of the host array.",
      "With private the private arrays are initialized to the value of the host array. With first private they are unitialized."
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 109,
    "module": 2,
    "session": 1,
    "question": "Given the hardware configuration of the host is unknown until run-time, it will not be possible to use the OpenACC API\nlibrary calls to dynamically determine what optimizations should be done.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 110,
    "module": 2,
    "session": 1,
    "question": "When using OpenACC for GPUS and you want to sync the access to some data structure in predefined order, what\npragma will you use?",
    "options": [
      "#pragma acc parallel [clause-list]",
      "#pragma acc kernels [clause-list]",
      "#pragma acc loop [clause-list] for (…)",
      "#pragma acc atomic [atomic-clause]"
    ],
    "correctAnswer": [
      3
    ],
    "multipleCorrect": false
  },
  {
    "id": 111,
    "module": 2,
    "session": 1,
    "question": "Please review this code using OpenACC. What the reduction clause is used for?\n9       #pragma acc kernels\n10      {\n11         // initialize the vectors\n12         #pragma acc loop gang worker\n13         for (int i = 0; i < N; i++) {\n14             x[i] = 1.0;\n15             y[i] = -1.0;\n16       }\n17\n18      // perform computation\n19   #pragma acc loop independent reduction(+:r)\n20   for (int i = 0; i < N; i++) {\n21    y[i] = a∗x[i]+y[i];\n22    r += y[i];\n23   }",
    "options": [
      "reduction clause sums product elements of the result vector y into variable i.",
      "reduction clause bitwise-or all elements of the result vector y into variable r.",
      "reduction clause sums all elements of the result vector y into variable r.",
      "reduction clause that gets maximum of the result vector x into variable r."
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 112,
    "module": 2,
    "session": 1,
    "question": "How would you modify the following OpenACC code to ensure parallel execution of the loop?\nvoid addArrays(float *A, float *B, float *C, int N) {\nfor (int i = 0; i < N; i++) {\nC[i] = A[i] + B[i];\n}\n}",
    "options": [
      "Add #pragma acc parallel",
      "Add #pragma acc loop independent",
      "Add #pragma acc parallel loop",
      "Add #pragma acc parallel reduction(+:C[i])",
      "Add #pragma acc data region"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 113,
    "module": 2,
    "session": 1,
    "question": "How can you efficiently manage data transfer for this matrix addition in OpenACC?\nvoid matrixAdd(float A[N][N], float B[N][N], float C[N][N]) {\n#pragma acc parallel loop\nfor (int i = 0; i < N; i++) {\nfor (int j = 0; j < N; j++) {\nC[i][j] = A[i][j] + B[i][j];\n}\n}\n}",
    "options": [
      "#pragma acc data copy(A, B, C)",
      "#pragma acc data copyin(A, B) copyout(C)",
      "#pragma acc data copyout(A, B, C)",
      "#pragma acc data copyin(C) copyout(A, B)",
      "#pragma acc data present(A, B, C)"
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 114,
    "module": 2,
    "session": 1,
    "question": "For a CUDA kernel operating on a 1D array with N=1024N = 1024N=1024, what is the appropriate grid and block\nconfiguration?\nkernelFunction<<<???, ???>>>(...);",
    "options": [
      "kernelFunction<<<1, 1024>>>",
      "kernelFunction<<<4, 256>>>",
      "kernelFunction<<<16, 64>>>",
      "kernelFunction<<<32, 32>>>",
      "kernelFunction<<<64, 16>>>"
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 115,
    "module": 2,
    "session": 1,
    "question": "How would you implement a sum reduction using OpenACC for the following loop?\nfloat sum = 0.0f;\n#pragma acc parallel loop\nfor (int i = 0; i < N; i++) {\nsum += data[i];\n}",
    "options": [
      "#pragma acc parallel loop private(sum)",
      "#pragma acc parallel loop reduction(sum)",
      "#pragma acc parallel loop reduction(+:sum)",
      "#pragma acc parallel loop independent",
      "#pragma acc parallel loop copy(sum)"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 116,
    "module": 2,
    "session": 1,
    "question": "In the context of CUDA, which statement correctly utilizes shared memory for a tile-based matrix multiplication?\n__global__ void matrixMulShared(float *A, float *B, float *C, int width) {\n__shared__ float tileA[16][16];\n__shared__ float tileB[16][16];\n// Load tiles into shared memory\nint row = threadIdx.y;\nint col = threadIdx.x;\n// Missing code for loading tiles\n// Compute result\nfloat sum = 0;\nfor (int k = 0; k < width / 16; k++) {\n// Code to utilize shared memory\n__syncthreads();\n}\nC[row * width + col] = sum;\n}",
    "options": [
      "tileA[row][col] = A[row * width + col];",
      "tileA[row][col] = A[(blockIdx.y * 16 + row) * width + (k * 16 + col)];",
      "tileA[row][col] = A[row + k * width];",
      "tileA[row][col] = A[blockIdx.y * blockDim.y + threadIdx.y];",
      "tileA[row][col] = A[col];"
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 117,
    "module": 2,
    "session": 1,
    "question": "How would you transform the following OpenACC code to allow the compiler more flexibility in optimizing loop\nexecution?\n#pragma acc parallel loop\nfor (int i = 0; i < N; i++) {\ncompute(data[i]);\n}",
    "options": [
      "#pragma acc kernels",
      "#pragma acc parallel loop gang",
      "#pragma acc kernels loop",
      "#pragma acc parallel",
      "#pragma acc loop independent"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 118,
    "module": 2,
    "session": 1,
    "question": "You are tasked with parallelizing a simple matrix addition C=A+B using OpenACC to enhance its execution on a GPU.\nEach element in matrix C is calculated as Cij=Aij+Bij. Question: Which of the following OpenACC directives is most\nappropriate to parallelize the nested loops performing the matrix addition?",
    "options": [
      "#pragma acc data copyin(A,B) copyout(C)",
      "#pragma acc parallel loop collapse(2)",
      "#pragma acc kernels",
      "Both #pragma acc data copyin(A,B) copyout(C) and #pragma acc parallel loop collapse(2)",
      "Both #pragma acc data copyin(A,B) copyout(C) and #pragma acc kernels f) Both #pragma acc parallel loop collapse(2) and #pragma acc kernels"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 119,
    "module": 2,
    "session": 1,
    "question": "You’re optimizing a computational fluid dynamics (CFD) simulation using OpenACC. The simulation includes a loop that\niteratively updates velocity and pressure fields in the domain until convergence is reached. The velocity and pressure\nfields are large 3D arrays, and data transfer time between host and device memory is a concern.\nQuestion: Which OpenACC directive should you consider to minimize data transfer between the host and device across\niterations?",
    "options": [
      "#pragma acc parallel loop",
      "#pragma acc data copy(velocity, pressure)",
      "#pragma acc atomic update",
      "#pragma acc kernels",
      "#pragma acc cache(velocity, pressure)"
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 120,
    "module": 2,
    "session": 1,
    "question": "You are parallelizing a loop that increments a counter whenever a condition is met within the loop. You observe that the\nfinal counter value is inconsistent between runs.\nQuestion: What directive and clause might be useful to resolve the issue and ensure a consistent counter value?",
    "options": [
      "#pragma acc parallel loop independent",
      "#pragma acc parallel loop reduction(+:counter)",
      "#pragma acc kernels loop",
      "#pragma acc parallel loop vector(32)",
      "#pragma acc serial loop"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 121,
    "module": 2,
    "session": 1,
    "question": "You have a matrix multiplication algorithm involving three nested loops. The innermost loop performs the dot product of a\nrow from the first matrix and a column from the second matrix.\nQuestion: Which OpenACC directive and clause combination could potentially optimize the nested loops' parallelization?",
    "options": [
      "#pragma acc parallel loop collapse(2)",
      "#pragma acc parallel loop collapse(3)",
      "#pragma acc parallel loop independent",
      "#pragma acc parallel loop vector(64)",
      "#pragma acc kernels loop"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 122,
    "module": 2,
    "session": 1,
    "question": "Examine the following OpenACC code and determine how to optimize its performance by adjusting the directives.\nIdentify any missing directives. 2 answers are correct.\n#include <stdio.h>\n#define N 1024\nvoid vectorAdd(float *A, float *B, float *C) {\n#pragma acc parallel\nfor (int i = 0; i < N; i++) {\nC[i] = A[i] + B[i];\n}\n}\nint main() {\nfloat A[N], B[N], C[N];\n// Initialize arrays\nfor (int i = 0; i < N; i++) {\nA[i] = i;\nB[i] = i;\n}\n// Perform vector addition\nvectorAdd(A, B, C);\n// Print result for verification\nprintf(\"C[0] = %f\\n\", C[0]);\nreturn 0;\n}",
    "options": [
      "Use #pragma acc parallel loop to parallelize the loop directly.",
      "Add a data directive to manage data transfer.",
      "Change #pragma acc parallel to #pragma acc kernels.",
      "Introduce #pragma acc loop gang for better optimization.",
      "No changes needed; the code is already optimized."
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 123,
    "module": 2,
    "session": 1,
    "question": "The following OpenACC program aims to perform element-wise multiplication of two matrices. What data management\nstrategy should be implemented to ensure efficient execution?\n#include <stdio.h>\n#define N 1024\nvoid matrixMultiply(float A[N][N], float B[N][N], float C[N][N]) {\n#pragma acc parallel loop\nfor (int i = 0; i < N; i++) {\nfor (int j = 0; j < N; j++) {\nC[i][j] = A[i][j] * B[i][j];\n}\n}\n}\nint main() {\nfloat A[N][N], B[N][N], C[N][N];\n// Initialize matrices\nfor (int i = 0; i < N; i++) {\nfor (int j = 0; j < N; j++) {\nA[i][j] = 1.0;\nB[i][j] = 2.0;\n}\n}\n// Perform multiplication\nmatrixMultiply(A, B, C);\n// Verify result\nprintf(\"C[0][0] = %f\\n\", C[0][0]);\nreturn 0;\n}",
    "options": [
      "Use #pragma acc data copy(A, B, C) to manage data.",
      "Utilize #pragma acc data copyin(A, B) copyout(C) for efficient data transfer.",
      "Implement #pragma acc parallel loop gang for parallel execution.",
      "Use #pragma acc data present(A, B, C) to check data locality.",
      "Data management is not required as arrays are small."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  }
];
