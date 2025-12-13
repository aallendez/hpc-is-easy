export const questions = [
  {
    "id": 1,
    "module": 3,
    "session": 1,
    "question": "You are optimizing a computational task on a supercomputer known for its high energy consumption. Which of the\nfollowing strategies would most effectively reduce the energy usage of your computation?",
    "options": [
      "Increasing the clock speed of the processors.",
      "Reducing the precision of calculations (e.g., from double to single precision).",
      "Running the computation in a single thread.",
      "Disabling all power-saving features of the hardware.",
      "Rewriting the code in a more energy-efficient programming language"
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 2,
    "module": 3,
    "session": 1,
    "question": "A genomics data analysis algorithm scales poorly as the number of processors increases on an HPC\nsystem. What is the most likely cause of this scalability issue?",
    "options": [
      "The algorithm's time complexity is too low.",
      "The algorithm has excessive inter-processor communication.",
      "The input data is too small to benefit from parallelism.",
      "The algorithm uses too much memory.",
      "The code is written in a high-level programming language."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 3,
    "module": 3,
    "session": 1,
    "question": "Given a basic matrix multiplication algorithm, which optimization technique would most effectively reduce\ncache misses on a modern HPC system?",
    "options": [
      "Loop unrolling",
      "Loop tiling (blocking)",
      "Vectorization",
      "Dynamic scheduling",
      "Speculative execution"
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 4,
    "module": 3,
    "session": 1,
    "question": "In an HPC environment, you are tasked with optimizing a matrix multiplication operation for a large-scale scientific simulation. Which\ncombination of the following techniques would likely yield the best performance improvement?",
    "options": [
      "Using a naive triple-nested loop",
      "Applying loop unrolling and loop tiling (blocking)",
      "Leveraging parallelism with OpenMP and using vectorization with SIMD instructions",
      "Relying solely on compiler optimizations without code modifications",
      "Switching to a different programming language"
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 5,
    "module": 3,
    "session": 1,
    "question": "Why is code optimization particularly crucial in HPC environments?",
    "options": [
      "To reduce the code size.",
      "To ensure compatibility with different compilers.",
      "To maximize performance by effectively utilizing hardware resources.",
      "To make the code easier to read.",
      "To minimize the number of programming errors"
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 6,
    "module": 3,
    "session": 1,
    "question": "Which profiling technique is most suitable for identifying performance bottlenecks in parallel applications?",
    "options": [
      "Sampling",
      "Instrumentation",
      "Tracing",
      "Call graph profiling",
      "Memory profiling"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 7,
    "module": 3,
    "session": 1,
    "question": "When choosing a parallel algorithm for HPC, why is scalability a critical consideration?",
    "options": [
      "It ensures that the code is more readable.",
      "It guarantees the lowest possible execution time on a single processor.",
      "It allows the algorithm to utilize increasing numbers of processors effectively.",
      "It simplifies the debugging process.",
      "It makes the algorithm compatible with multiple programming languages."
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 8,
    "module": 3,
    "session": 1,
    "question": "In the context of HPC, why might arrays be preferred over linked lists for data processing?",
    "options": [
      "Arrays are more flexible in memory allocation.",
      "Arrays support better data locality, which is crucial for cache performance.",
      "Linked lists allow for faster access to random elements.",
      "Linked lists are easier to parallelize.",
      "Arrays require less synchronization in multi-threaded environments."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 9,
    "module": 3,
    "session": 1,
    "question": "Consider the following code for adding elements of two arrays:\nfor (int i = 0; i < n; i++) {\nC[i] = A[i] + B[i];\n}\nWhich of the following is the correct unrolled version of the loop, and what is the primary benefit of loop unrolling in this context?\nWhich of the following is the correct unrolled version of the loop, assuming that n is guaranteed to be a multiple of 4 and no out-of-bounds access should occur?",
    "options": [
      " for (int i = 0; i < n; i++) { C[i] = A[i] + B[i]; C[i+1] = A[i+1] + B[i+1]; }",
      " for (int i = 0; i < n; i += 4) { C[i] = A[i] + B[i]; C[i+1] = A[i+1] + B[i+1]; C[i+2] = A[i+2] + B[i+2]; C[i+3] = A[i+3] + B[i+3]; }",
      " for (int i = 0; i < n; i += 2) { C[i] = A[i] + B[i]; C[i+1] = A[i+1] + B[i+1]; }",
      " for (int i = 0; i < n; i += 8) { C[i] = A[i] + B[i]; C[i+1] = A[i+1] + B[i+1]; C[i+2] = A[i+2] + B[i+2]; C[i+3] = A[i+3] + B[i+3]; C[i+4] = A[i+4] + B[i+4]; C[i+5] = A[i+5] + B[i+5]; C[i+6] = A[i+6] + B[i+6]; C[i+7] = A[i+7] + B[i+7]; }",
      " for (int i = 0; i < n; i++) { C[i] = A[i] + B[i]; }"
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 10,
    "module": 3,
    "session": 1,
    "question": "Analyse the following matrix multiplication code and identify which optimization\ntechnique would most effectively improve cache performance:\nfor (int i = 0; i < n; i++) {\nfor (int j = 0; j < n; j++) {\nfor (int k = 0; k < n; k++) {\nC[i][j] += A[i][k] * B[k][j];\n}\n}\n}",
    "options": [
      "Loop unrolling",
      "Loop fusion",
      "Loop tiling (blocking)",
      "Vectorization",
      "Speculative execution"
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 11,
    "module": 3,
    "session": 1,
    "question": "The following code uses a linked list to sum its elements. What is a major drawback of using a linked list in this context, particularly in an HPC environment?\nstruct Node { int data; struct Node* next; };\nint sum_linked_list(struct Node* head) {\nint sum = 0;\nstruct Node* current = head;\nwhile (current != NULL) {\nsum += current->data; current = current->next;\n} return sum;\n}",
    "options": [
      "Linked lists use more memory than arrays.",
      "Linked lists have poor data locality, leading to inefficient cache usage.",
      "Linked lists are more complex to implement.",
      "Linked lists are harder to parallelize.",
      "Linked lists require dynamic memory allocation"
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 12,
    "module": 3,
    "session": 1,
    "question": "Consider the following code for vector addition using scalar operations. Which SIMD intrinsic-based code correctly\noptimizes this for vectorization on a CPU with AVX instructions? Original Code:\nvoid add_vectors(float* x, float* y, float* z, int n) {\nfor (int i = 0; i < n; i++) {\nz[i] = x[i] + y[i];\n}\n}",
    "options": [
      " #include <immintrin.h> void add_vectors(float* x, float* y, float* z, int n) { for (int i = 0; i < n; i += 8) { __m256 vx = _mm256_load_ps(&x[i]); __m256 vy = _mm256_load_ps(&y[i]); __m256 vz = _mm256_add_ps(vx, vy); _mm256_store_ps(&z[i], vz); } }",
      " #include <emmintrin.h> void add_vectors(float* x, float* y, float* z, int n) { for (int i = 0; i < n; i += 4) { __m128 vx = _mm_load_ps(&x[i]); __m128 vy = _mm_load_ps(&y[i]); __m128 vz = _mm_add_ps(vx, vy); _mm_store_ps(&z[i], vz); } }",
      " #include <xmmintrin.h> void add_vectors(float* x, float* y, float* z, int n) { for (int i = 0; i < n; i += 2) { __m64 vx = _mm_load_si64((__m64*)&x[i]); __m64 vy = _mm_load_si64((__m64*)&y[i]); __m64 vz = _mm_add_pi32(vx, vy); _mm_store_si64((__m64*)&z[i], vz); } }",
      " void add_vectors(float* x, float* y, float* z, int n) { for (int i = 0; i < n; i++) { z[i] = x[i] + y[i]; } }",
      "None of the above"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 13,
    "module": 3,
    "session": 1,
    "question": "Given the following loop intended for parallel execution using OpenMP, identify the issue with the parallelization strategy:\nvoid scale_array(float* array, int n, float scalar) {\n#pragma omp parallel for\nfor (int i = 0; i < n; i++) {\narray[i] *= scalar;\n}\n}",
    "options": [
      "The code will result in a race condition.",
      "The loop cannot be parallelized because the array elements depend on each other.",
      "There is no issue; the loop is correctly parallelized.",
      "The use of scalar in the loop might cause incorrect results due to data races.",
      "The array should be split into chunks manually for parallel processing."
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 14,
    "module": 3,
    "session": 1,
    "question": "You are optimizing a computational fluid dynamics (CFD) code running on an HPC system. The code frequently accesses large\n3D arrays representing fluid properties. What is the most effective way to optimize memory access patterns to improve cache utilization?",
    "options": [
      "Randomize the memory access patterns to reduce cache conflicts.",
      "Implement loop tiling to process small blocks of the 3D arrays that fit into the cache.",
      "Use linked lists to store the data instead of arrays.",
      "Increase the size of the cache through hardware upgrades.",
      "Disable cache usage to avoid cache misses."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 15,
    "module": 3,
    "session": 1,
    "question": "In a molecular dynamics simulation, pairwise force calculations between particles are a performance bottleneck. How\nwould you optimize this calculation to improve throughput on a modern HPC system?",
    "options": [
      "Convert the code to a scripting language for better readability.",
      "Use SIMD vectorization to compute forces between multiple pairs of particles simultaneously.",
      "Replace all floating-point calculations with integer arithmetic.",
      "Increase the number of conditional checks to avoid unnecessary calculations.",
      "Use single-threaded execution to avoid race conditions."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 16,
    "module": 3,
    "session": 1,
    "question": "Weather forecasting models on HPC systems often involve large-scale matrix operations.\nWhat data structure choice would most efficiently utilize the system's memory hierarchy?",
    "options": [
      "Using linked lists to store matrix data.",
      "Using arrays with contiguous memory allocation.",
      "Using hash tables for matrix storage.",
      "Using dynamic memory allocation for each matrix element.",
      "Storing data on disk and accessing it as needed."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 17,
    "module": 3,
    "session": 1,
    "question": "In a large-scale simulation running on an HPC cluster, the time spent on I/O operations (reading/writing\ndata) is significant. Which optimization strategy would help reduce I/O bottlenecks?",
    "options": [
      "Use a single thread to handle all I/O operations.",
      "Implement parallel I/O using MPI-IO.",
      "Store data in a global variable to minimize I/O operations.",
      "Increase the size of I/O buffers on the master node.",
      "Write data to disk after every iteration to prevent data loss."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 18,
    "module": 3,
    "session": 1,
    "question": "In an image processing application running on an HPC system, the memory bandwidth is the primary bottleneck.\nWhich technique would most likely improve performance?",
    "options": [
      "Increasing the size of the images being processed.",
      "Storing images as linked lists for faster access.",
      "Using loop tiling and prefetching to optimize data access patterns.",
      "Using higher precision for image pixel values.",
      "Converting the images to grayscale before processing."
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 19,
    "module": 3,
    "session": 1,
    "question": "In a parallel computational chemistry application, certain processes take significantly longer to complete than others,\nleading to idle times on some processors. What strategy would best address this issue?",
    "options": [
      "Use a static load balancing approach where each process handles an equal portion of the data.",
      "Implement dynamic load balancing to redistribute work among processors during runtime.",
      "Increase the clock speed of the slower processors.",
      "Use a single-threaded approach to avoid imbalances.",
      "Allocate more memory to the slower processes."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 20,
    "module": 3,
    "session": 1,
    "question": "When optimizing a deep learning model on an HPC system, which of the following would most effectively leverage the\nsystem's vector processing capabilities?",
    "options": [
      "Converting all matrix operations to scalar operations.",
      "Implementing manual vectorization using SIMD intrinsics for key operations.",
      "Using a single CPU core to perform all computations.",
      "Relying on the operating system to optimize vector operations.",
      "Disabling vector instructions to simplify debugging."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 21,
    "module": 3,
    "session": 1,
    "question": "The BlueFrost supercomputer, known for its robust SMP architecture, uses a tool called HPCToolkit, an open-source suite for\nmeasuring and analyzing program performance on computers ranging from multicore desktop systems to the largest supercomputers.\nUsing this tool, engineers detected performance bottlenecks in their applications.\nQuestion: What is a primary advantage of using HPCToolkit on an SMP-based supercomputer like BlueFrost?",
    "options": [
      "It can help in increasing the storage capacity of the supercomputer.",
      "It assists in distributing tasks evenly across processors to avoid bottlenecks.",
      "The tool can reduce power consumption of the system.",
      "It helps in recompiling programs to run on single-core systems.",
      "The tool assists in redesigning the physical architecture of the machine."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 22,
    "module": 3,
    "session": 1,
    "question": "GenoTech Corp. runs DNA simulations on its HPC cluster, ThunderPeak. While the cluster is not purely SMP, it has nodes with\nSMP architecture. GenoTech uses MPI (Message Passing Interface), a standardized and portable message-passing system designed\nto function on a wide variety of parallel computers. Question: How can GenoTech best optimize DNA simulations on its SMP nodes\nwithin the ThunderPeak cluster using MPI?",
    "options": [
      "By passing messages only between nodes and not within SMP processors.",
      "By using MPI to facilitate fine-grained communication within SMP nodes.",
      "Avoiding MPI and using only single-threaded operations within SMP nodes.",
      "Restricting MPI operations to only data storage tasks.",
      "Utilizing MPI to ensure cache coherence within SMP nodes."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 23,
    "module": 3,
    "session": 1,
    "question": "UrbanPlanner Inc. utilizes an SMP-based HPC system, CityStream, to run real-time traffic simulations. The company recently integrated\na tool called OpenMP, a parallel programming model for shared-memory parallel computers. Question: What benefit does OpenMP\noffer in enhancing real-time traffic simulations on CityStream?",
    "options": [
      "OpenMP helps in rendering high-definition graphics for the simulations.",
      "It ensures that data is stored securely on the system.",
      "OpenMP assists in distributing simulation tasks across the SMP processors efficiently.",
      "The tool assists in network connectivity between different HPC systems.",
      "It ensures the SMP system remains cool during intensive operations."
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 24,
    "module": 3,
    "session": 1,
    "question": "WeatherX Corp. runs a complex weather forecasting application on its StormBlitz HPC system, which is based on SMP architecture.\nThey recently started employing CUDA, a parallel computing platform and API model created by NVIDIA, to leverage the power of GPU\nalong with SMP cores. Question: How does integrating CUDA in StormBlitz enhance the performance of WeatherX's forecasting application?",
    "options": [
      "It optimizes storage systems for faster data retrieval.",
      "CUDA ensures the consistent performance of all SMP cores.",
      "It offloads certain parallelizable tasks from SMP cores to the GPU for faster processing.",
      "CUDA improves the resolution of weather graphics.",
      "It focuses on enhancing the network connectivity of the HPC system."
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 25,
    "module": 3,
    "session": 1,
    "question": "AeroDynamics Inc. is running simulations on its SkyHigh SMP-based HPC system. They incorporated PETSc, a suite of data structures and\nroutines for scalable parallel solutions of scientific applications modeled by partial differential equations. Question: Why might AeroDynamics\nprefer to use PETSc on their SMP-based system for their simulations?",
    "options": [
      "PETSc specializes in rendering high-quality aerospace graphics.",
      "It ensures better internet connectivity for the HPC system.",
      "PETSc helps in maintaining the hardware health of the SMP system.",
      "The suite provides scalable parallel solutions optimal for SMP architecture.",
      "It focuses on improving the sound quality of simulation outputs."
    ],
    "correctAnswer": [
      3
    ],
    "multipleCorrect": false
  },
  {
    "id": 26,
    "module": 3,
    "session": 1,
    "question": "What are possinle ways of debugging an MPI program using GNU debugger (GDB)?",
    "options": [
      "Launching xterm/gdb for each process",
      "Adding PID for each process in the code to allow GSB to attach the process",
      "Compiling the program with --debug_MPI",
      "Launching xterm/gcc --MPI for each process",
      "None of the above"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 27,
    "module": 3,
    "session": 1,
    "question": "_________ checkpointing performs the checkpoint and restart procedures via a full memory dump. This\ntype of checkpointing _______require any changes to the application to enable its use.",
    "options": [
      "System-level, does not",
      "Application-level, does",
      "System-level, does",
      "Application-level, does not"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 28,
    "module": 3,
    "session": 1,
    "question": "In a hybrid approach to checkpointing, you decide to use application-level checkpointing along with a system-level\nmechanism provided by the HPC environment. What is a possible benefit of this hybrid checkpointing approach?",
    "options": [
      "It simplifies the process by eliminating the need for application- level checkpointing.",
      "It enhances the recovery process with the system-level checkpointing acting as a backup to application-level checkpoints.",
      "It completely replaces the application-level checkpointing with system-level checkpointing.",
      "It minimizes the frequency of checkpoints needed, as system- level checkpointing is considered more reliable.",
      "It significantly reduces the size of each checkpoint, as system- level checkpointing is more space-efficient."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 29,
    "module": 3,
    "session": 1,
    "question": "In an HPC environment, you're running a computational fluid dynamics simulation with a mean time between failures (MTBF) of 100 hours. If\nyour checkpointing process takes 30 minutes to complete and you can only afford a maximum of 5% overhead due to checkpointing, how\nfrequently should you schedule your checkpoints?",
    "options": [
      "Every 5 hours",
      "Every 10 hours",
      "Every 20 hours",
      "Every 50 hours",
      "Every 100 hours"
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 30,
    "module": 3,
    "session": 1,
    "question": "You have been tasked with optimizing a computational fluid dynamics (CFD) simulation running on a distributed HPC system. The\nsimulation uses MPI for parallel processing and has been exhibiting performance bottlenecks due to uneven workload distribution. Which\nprofiling tool would be most appropriate for identifying the root cause of this issue, and why?",
    "options": [
      "Intel VTune Amplifier",
      "Scalasca",
      "Gprof",
      "Valgrind",
      "Perf"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 31,
    "module": 3,
    "session": 1,
    "question": "Consider a scenario where you need to profile a long-running molecular dynamics simulation for memory leaks. Which tool would you\nchoose to gather detailed information about memory allocation and deallocation, and what would you be looking for in the tool's output?",
    "options": [
      "Gprof",
      "Valgrind Memcheck",
      "Scalasca",
      "PAPI",
      "TAU"
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 32,
    "module": 3,
    "session": 1,
    "question": "You are working on a high-performance application that uses both CPU and GPU resources. Profiling\nreveals that the GPU is underutilized during certain operations. Which tool would be most appropriate for\ndiagnosing and optimizing this issue, and what specific metrics should you focus on?",
    "options": [
      "Perf",
      "Gperftools",
      "NVIDIA Nsight",
      "Intel VTune Amplifier",
      "Massif"
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 33,
    "module": 3,
    "session": 1,
    "question": "When implementing checkpointing in an HPC application, what is the primary trade-off you\nneed to consider when determining the frequency of checkpoints?",
    "options": [
      "The trade-off between checkpoint size and recovery speed",
      "The trade-off between checkpointing overhead and the potential loss of computation time in the event of a failure",
      "The trade-off between checkpoint consistency and parallel execution efficiency",
      "The trade-off between system-level and application-level checkpointing",
      "The trade-off between fault tolerance and computational precision"
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 34,
    "module": 3,
    "session": 1,
    "question": "You have instrumented an application with the gprof tool to collect profiling data. The output indicates that 60% of the execution time is spent in a\nspecific function. What optimization strategies could you employ based on this profiling data?",
    "options": [
      "Increase the checkpointing frequency to reduce overhead",
      "Apply loop unrolling or vectorization to optimize the identified function",
      "Utilize application-level checkpointing to save only the relevant state of the application",
      "Replace the function with an external library call",
      "Use hardware performance counters to measure cache misses"
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 35,
    "module": 3,
    "session": 1,
    "question": "While using PAPI to profile an HPC application, you observe a high number of cache misses. What are some techniques you could employ to\nreduce these cache misses and improve performance?",
    "options": [
      "Increase the number of MPI processes",
      "Optimize data structures for better cache locality",
      "Increase the clock speed of the CPU",
      "Use checkpointing to save frequently used data",
      "Implement more aggressive branch prediction algorithms"
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 36,
    "module": 3,
    "session": 1,
    "question": "In a parallel application, you use Scalasca to analyze MPI communication patterns. The tool reports a high percentage of time spent in\nMPI_Barrier calls. What does this suggest, and how could you optimize the application?",
    "options": [
      "Indicates load imbalance; improve workload distribution among processes.",
      "Indicates excessive data movement; reduce the number of MPI_Barrier calls.",
      "Indicates poor memory access patterns; optimize data layout.",
      "Indicates inefficient thread management; reduce the number of threads.",
      "Indicates excessive branching; simplify conditional statements."
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 37,
    "module": 3,
    "session": 1,
    "question": "During performance analysis with Intel VTune Amplifier, you discover that your application has poor memory\naccess efficiency due to frequent cache line invalidations. What is a likely cause, and how can you mitigate this issue?",
    "options": [
      "Inefficient CPU scheduling; increase thread affinity.",
      "False sharing in parallel threads; align data to cache line boundaries.",
      "Insufficient CPU cores; increase core allocation.",
      "High memory fragmentation; use a custom memory allocator.",
      "Poor thread synchronization; implement fine-grained locks."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 38,
    "module": 3,
    "session": 1,
    "question": "You have identified a critical section in your HPC application where multiple threads are contending for a lock, causing performance degradation.\nHow can you address this bottleneck?",
    "options": [
      "Replace the lock with atomic operations to reduce contention.",
      "Increase the number of threads to overcome the bottleneck.",
      "Use more frequent checkpointing to reduce the time spent in the critical section.",
      "Implement MPI to distribute the workload across nodes.",
      "Use a semaphore instead of a lock to manage thread synchronization."
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 39,
    "module": 3,
    "session": 1,
    "question": "In a memory-bound HPC application, you observe that the majority of time is spent waiting for memory accesses. Which profiling tool would help you\nidentify the specific causes of memory stalls, and what kind of optimizations could you consider?",
    "options": [
      "Gprof; optimize function call hierarchy.",
      "Valgrind Massif; reduce memory footprint.",
      "Intel VTune Amplifier; improve cache locality or increase memory bandwidth.",
      "Scalasca; balance workload distribution.",
      "Perf; increase the number of CPU cores."
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 40,
    "module": 3,
    "session": 1,
    "question": "A developer needs to implement checkpointing in an application that runs on a heterogeneous HPC environment (combining CPUs and GPUs).\nWhich checkpointing strategy and tool combination would be most suitable, considering performance and complexity?",
    "options": [
      "System-level checkpointing with BLCR; handles all components transparently.",
      "Application-level checkpointing with SCR; tailored to specific application needs.",
      "Coordinated checkpointing with DMTCP; manages CPU-GPU interactions.",
      "Incremental checkpointing with PAPI; focuses on hardware counters.",
      "Uncoordinated checkpointing with Valgrind; suitable for diverse environments."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 41,
    "module": 3,
    "session": 1,
    "question": "You are tasked with reducing the frequency of checkpointing in a weather simulation running on an HPC system. What factors should\nyou consider when determining the optimal checkpoint interval?",
    "options": [
      "The overhead of I/O operations and the likelihood of system failures.",
      "The number of MPI processes and the size of the simulation grid.",
      "The clock speed of the CPU and the total simulation time.",
      "The number of checkpoints stored and the memory usage of the application.",
      "The precision of the simulation and the complexity of the atmospheric model."
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 42,
    "module": 3,
    "session": 1,
    "question": "Which of the following techniques is most likely to reduce the checkpointing overhead in an application using Berkeley Lab\nCheckpoint/Restart (BLCR)?",
    "options": [
      "Increase the checkpoint frequency.",
      "Compress checkpoint data before saving.",
      "Use application-level checkpointing instead.",
      "Store checkpoints on a network file system.",
      "Reduce the number of processes checkpointed simultaneously."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 43,
    "module": 3,
    "session": 1,
    "question": "You are implementing checkpointing in an MPI application using the Scalable Checkpoint/Restart\n(SCR) library. Consider the following code snippet:\n#include \"scr.h\"\nint main() {\nSCR_Init();\nif (SCR_Have_restart()) {\nSCR_Restart_checkpoint();\n}\nfor (int i = 0; i < 1000; i++) {\n// Simulation code\n// Checkpoint every 100 iterations\nif (i % 100 == 0) {\nSCR_Start_checkpoint();\n// Save state\nSCR_Complete_checkpoint(1);\n}\n}\nSCR_Finalize();\nreturn 0;\n}",
    "options": [
      "What is the purpose of calling SCR_Have_restart() at the beginning of the program, and why is it important?",
      "To determine if a previous checkpoint exists and restart from it; ensures the simulation continues smoothly after a failure.",
      "To check if the file system supports checkpointing; prevents errors in unsupported environments.",
      "To initialize SCR with the correct configuration; ensures SCR is properly set up before use.",
      "To optimize memory usage before starting the simulation; reduces overhead. f) To verify that the application has sufficient resources; prevents running out of memory."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 44,
    "module": 3,
    "session": 1,
    "question": "You are using TAU (Tuning and Analysis Utilities) to profile a parallel application and notice that some processes are spending a significant amount of\ntime in the MPI_Wait function. What does this suggest, and how might you optimize the application?",
    "options": [
      "The application has excessive I/O operations; reduce I/O frequency.",
      "There is a load imbalance; redistribute work among processes.",
      "The application has too many MPI barriers; reduce the number of barriers.",
      "The network bandwidth is insufficient; upgrade the network infrastructure.",
      "The processes are not properly synchronized; implement a better locking mechanism."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 45,
    "module": 3,
    "session": 1,
    "question": "You are integrating checkpointing into a large-scale HPC application using DMTCP (Distributed MultiThreaded CheckPointing). What are the key\nconsiderations to ensure minimal performance impact while maintaining robust fault tolerance?",
    "options": [
      "The checkpoint interval, the size of checkpoint files, and the overhead of network communication.",
      "The number of threads used, the file system type, and the memory usage of the application.",
      "The number of nodes involved, the frequency of synchronization, and the CPU clock speed.",
      "The precision of floating-point operations, the cache size, and the number of I/O operations.",
      "The use of hardware counters, the clock speed of the CPU, and the size of the application binaries"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 46,
    "module": 3,
    "session": 1,
    "question": "During profiling with Valgrind's Massif tool, you observe that memory consumption peaks during a specific phase of your application. Which of the\nfollowing strategies could help reduce this memory usage?",
    "options": [
      "Optimize the cache usage with loop tiling.",
      "Reduce the number of processes running concurrently.",
      "Refactor the code to use stack allocation instead of heap allocation.",
      "Split the workload into smaller, more manageable chunks.",
      "Implement checkpointing to save memory state periodically"
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 47,
    "module": 3,
    "session": 1,
    "question": "While analysing performance data using Intel VTune Amplifier, you identify that a certain function has high L3 cache misses. What might be\ncausing this, and how could you optimize the function to improve cache performance?",
    "options": [
      "Excessive branching in the function; optimize branch prediction.",
      "Large data structures not fitting into the cache; implement data blocking or partitioning.",
      "Insufficient parallelism; increase the number of threads.",
      "Frequent I/O operations within the function; reduce I/O frequency.",
      "The function is too small; consider inlining it."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 48,
    "module": 3,
    "session": 1,
    "question": "You are implementing checkpointing using Berkeley Lab Checkpoint/Restart (BLCR) in an MPI-based application. What is a key advantage of using\nsystem-level checkpointing with BLCR compared to application-level checkpointing?",
    "options": [
      "It reduces the need for synchronization among MPI processes.",
      "It does not require any changes to the application code.",
      "It generates smaller checkpoint files.",
      "It allows more frequent checkpointing without impacting performance.",
      "It provides better control over what data is saved."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 49,
    "module": 3,
    "session": 1,
    "question": "You are profiling a C++ application using gprof. After compiling and running the program with gprof instrumentation, you receive the following output:\nFlat profile:\nEach sample counts as 0.01 seconds.\n% cumulative self self total\ntime seconds seconds calls ms/call ms/call name\n60.00 0.60 0.60 1000 0.60 0.60 compute\n40.00 1.00 0.40 main\nGiven this output, what would be the most effective optimization strategy?",
    "options": [
      "Reduce the number of calls to compute.",
      "Inline the main function.",
      "Optimize the compute function for better cache performance.",
      "Use a different profiling tool with lower overhead.",
      "Increase the sampling rate in gprof."
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 50,
    "module": 3,
    "session": 1,
    "question": "Consider the following C program that allocates memory dynamically:\n#include <stdio.h>\n#include <stdlib.h>\nint main() {\nint *array = (int*)malloc(1000 * sizeof(int));\nfor (int i = 0; i < 1000; ++i) {\narray[i] = i;\n}\n// Missing free(array);\nreturn 0;\n}\nIf you run this program with Valgrind using the command valgrind --leak-check=full ./mem_test, what issue will Valgrind report,\nand how can you fix it?",
    "options": [
      "It will report an invalid memory access; fix it by using free(array).",
      "It will report a memory leak; fix it by adding free(array) before the program ends.",
      "It will report uninitialized memory usage; initialize array with zeros.",
      "It will report stack overflow; reduce the size of array.",
      "No issues will be reported; the code is correct."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 51,
    "module": 3,
    "session": 1,
    "question": "You are profiling a parallel MPI application using TAU. After running the profiling session, you observe that a significant amount of time is spent in the\nfollowing code segment:\nMPI_Reduce(&local_sum, &global_sum, 1, MPI_DOUBLE, MPI_SUM, 0, MPI_COMM_WORLD);\nWhat optimization could reduce the time spent in this MPI function?",
    "options": [
      "Use MPI_Bcast instead of MPI_Reduce.",
      "Replace the reduction operation with point-to-point communication.",
      "Optimize the data structure used for local_sum.",
      "Implement non-blocking communication using MPI_Ireduce.",
      "Reduce the frequency of calling MPI_Reduce."
    ],
    "correctAnswer": [
      3
    ],
    "multipleCorrect": false
  },
  {
    "id": 52,
    "module": 3,
    "session": 1,
    "question": "In the following C++ code, you are using Intel VTune Amplifier to identify performance bottlenecks:\n#include <iostream>\n#include <vector>\nvoid compute(std::vector<int>& data) {\nfor (auto& x : data) {\nx *= 2;\n}\n}\nint main() {\nstd::vector<int> data(1000000, 1);\ncompute(data);\nstd::cout << \"Data processed.\" << std::endl;\nreturn 0;\n}\nVTune indicates that the compute function has poor memory access patterns. What could you do to improve this?",
    "options": [
      "Replace std::vector with a raw array.",
      "Parallelize the loop using OpenMP.",
      "Use SIMD instructions to optimize the loop.",
      "Reorganize the loop to improve cache locality.",
      "Reduce the size of data."
    ],
    "correctAnswer": [
      3
    ],
    "multipleCorrect": false
  },
  {
    "id": 53,
    "module": 3,
    "session": 1,
    "question": "What are possible ways of debugging an MPI program using GNU debugger (GDB)?",
    "options": [
      "Launching xterm/gdb for each process",
      "Adding PID for each process in the code to allow GSB to attach the process",
      "Compiling the program with --debug_MPI",
      "Launching xterm/gcc --MPI for each process",
      "None of the above"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 54,
    "module": 3,
    "session": 1,
    "question": "What is the true about hotspots and bottlenecks in HPC application debugging?",
    "options": [
      "Hotspots are parts of code the program spend most of the time executing.",
      "Bottlenecks are hotspots that have unduly adverse effects on the application's performance.",
      "Program optimization may relocate the bottleneck to another part of the code.",
      "Every bottleneck is a hotspot",
      "Some hotspot may be bottleneck"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 55,
    "module": 3,
    "session": 1,
    "question": "One of the fundamental metrics for performance monitoring is time. Its measurement may be invoked from the command line using\nthe ______ system utility or by instrumenting an application with timestamp collection functions such as clock_gettime.",
    "options": [
      "date",
      "time",
      "gettime",
      "now"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 56,
    "module": 3,
    "session": 1,
    "question": "The tools Intel Vtune Amplifier, CodeXL and Nvidia CUDA toolkit are:",
    "options": [
      "Debuggers",
      "Performance monitoring",
      "compilers",
      "APIs for GPU development"
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 57,
    "module": 3,
    "session": 1,
    "question": "What is true about the gperftools profiler suite?",
    "options": [
      "Very used profiler. Originally Google Performance Tools.",
      "The statistical CPU profiler is pprof",
      "No need to add it as option to compiler to permit access",
      "CPU profiler does require changes to the source code",
      "For MPI programs, we need to add ProfilerStart(filename); following MPI_Init"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 58,
    "module": 3,
    "session": 1,
    "question": "We are executing the following commands:\n> gcc -O2 mvmult_papi.c -o mvmult_papi -lcblas -lpapi.\nand later:\n> ./mvmult_papi 20000\nSize 20000; abs. sum: 10000.000000 (expected: 10000)\nPAPI counts:\ninit: event1: 0 event2: 0\nmult: event1: 804193640 event2: 0\nsum: event1: 20276 event2: 0\nWhat are we doing?",
    "options": [
      "Compile and link with the PAPI library and run papi to check performance",
      "Compile and run mvmult to debug the program lpapi",
      "Run the program mvmult 20000 times for getting performance information",
      "None of the above"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 59,
    "module": 3,
    "session": 1,
    "question": "Debugging an application on a high performance computer frequently requires a fairly detailed view of the supercomputer software only. The hardware\nstack is managed by the OS and it could not affect the performance of the program.",
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
    "id": 60,
    "module": 3,
    "session": 1,
    "question": "Which of the following statements best captures the difficulty associated with debugging on a supercomputer compared to a serial application?",
    "options": [
      "Debugging on a supercomputer is easier because it uses parallel processing.",
      "Debugging a serial application is more difficult because it runs on a single core.",
      "The origin of anomalies in a parallel application on a supercomputer is generally easier to track.",
      "Tracking the origin of a parallel application execution anomaly on a supercomputer is generally much more difficult than debugging a serial application.",
      "Debugging tools for supercomputers are more efficient than for serial applications"
    ],
    "correctAnswer": [
      3
    ],
    "multipleCorrect": false
  },
  {
    "id": 61,
    "module": 3,
    "session": 1,
    "question": "When debugging an MPI code with open-source tools, what might be a required approach?",
    "options": [
      "Using a single instance of a serial debugger.",
      "Using multiple instances of parallel debuggers.",
      "Attaching several serial debuggers to a simulation.",
      "Using only commercial debuggers as open-source tools are not effective.",
      "Ignoring MPI and focusing only on OpenMP."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 62,
    "module": 3,
    "session": 1,
    "question": "Which of the following tools is particularly useful for debugging applications and identifying issues like memory leaks?",
    "options": [
      "MPI Debugger",
      "OpenMP Debugger",
      "GDB Suite",
      "Valgrind Suite",
      "System Monitor"
    ],
    "correctAnswer": [
      3
    ],
    "multipleCorrect": false
  },
  {
    "id": 63,
    "module": 3,
    "session": 1,
    "question": "If a developer wants to examine program execution and verify if it matches their expectations, what tool might they use?",
    "options": [
      "GDB Suite",
      "Valgrind Suite",
      "Compiler flags",
      "OpenMP Debugger",
      "System monitors"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 64,
    "module": 3,
    "session": 1,
    "question": "When a developer wants to step through the code, view variables, and change their values during debugging, which tool should they use?",
    "options": [
      "Valgrind",
      "MPI Debugger",
      "GDB",
      "Compiler flags",
      "System monitors"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 65,
    "module": 3,
    "session": 1,
    "question": "How can developers utilize compiler support to enhance their debugging process?",
    "options": [
      "By running the code on multiple threads.",
      "By using specific flags to enable pointer bounds checking and other memory checking.",
      "By attaching multiple instances of serial debuggers.",
      "By relying solely on system monitors for feedback.",
      "By ignoring any potential memory leaks."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 66,
    "module": 3,
    "session": 1,
    "question": "Imagine you're working on a large-scale fluid dynamics simulation on a supercomputer. The simulation uses MPI for parallel processing.\nDuring a long run, you notice an unexpected behavior in one of the distributed processes, but not in all. What approach would be most effective in\ndebugging this scenario?",
    "options": [
      "Apply a single instance of a serial debugger, hoping it captures the specific process.",
      "Run a system monitor and check overall system health.",
      "Attach several serial debuggers to the simulation, one for each MPI process.",
      "Use a commercial debugger exclusively designed for OpenMP codes.",
      "Increase the computational resources and run the simulation again."
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 67,
    "module": 3,
    "session": 1,
    "question": "You're building a multi-threaded application for a supercomputer. At some point, the application crashes, and you suspect that two threads\nmight be accessing shared memory simultaneously, causing data races. Which tool, described as providing tools for debugging applications and\nrectifying data races, would you employ?",
    "options": [
      "GDB Suite: Provides multiple tools for debugging a code, allowing the user to step through the code and view variables.",
      "Valgrind Suite: Provides tools for debugging applications, including rectifying data races and memory leaks.",
      "Compiler Flags: Offers options to enable pointer bounds checking and memory verification.",
      "System Monitors: Independently examines program execution.",
      "OpenMP Debugger: Focuses primarily on parallel processing codes."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 68,
    "module": 3,
    "session": 1,
    "question": "You're a part of a team developing an application with multiple threads. One of the team members reports that while debugging, they were\nunable to view the behavior of individual threads. Which debugging tool would you recommend for a more detailed view of multi-threaded code\nexecution?",
    "options": [
      "Valgrind Suite: Mainly for memory leaks and data races.",
      "GDB: Offers support for debugging codes with multiple threads.",
      "MPI Debugger: Primarily for parallel processing codes.",
      "Compiler Flags: Used for memory verification and pointer checking.",
      "System Monitors: Gives an overview of the system's execution."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 69,
    "module": 3,
    "session": 1,
    "question": "While working on a complex project, a colleague reaches out and mentions that their code is having memory leak issues. They've tried\nseveral tools, but can't identify the source. Which debugging tool, known for identifying memory leaks, would you recommend?",
    "options": [
      "MPI Debugger: Focuses on parallel processing.",
      "System Monitors: Provides an overview of execution.",
      "Compiler Flags: Enables pointer bounds checks.",
      "Valgrind Suite: Contains tools for rectifying data races and memory leaks.",
      "OpenMP Debugger: Primarily for parallel processing codes."
    ],
    "correctAnswer": [
      3
    ],
    "multipleCorrect": false
  },
  {
    "id": 70,
    "module": 3,
    "session": 1,
    "question": "After compiling an application, you receive an error message related to memory bounds. You realize you've forgotten to enable a tool during\ncompilation that would assist in verifying memory issues. Which tool or option would you employ to help with this issue?",
    "options": [
      "GDB: Steps through the code and observes variables.",
      "Valgrind Suite: Mainly targets memory leaks and data races.",
      "Compiler Flags: Specific flags that help in enabling pointer bounds checking and memory verification.",
      "System Monitors: Offers an overall view of system performance.",
      "MPI Debugger: Focuses on debugging parallel processing codes."
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 71,
    "module": 3,
    "session": 1,
    "question": "BLAS (Basic Linear Algebra Subprograms) provides a standard interface to vector, matrix–vector, and matrix–\nmatrix routines. What is the main difference between Blas level 1 and Blas level 2 and 3?",
    "options": [
      "Blas 1 supports matrix and vectors operations",
      "Blas 1 does not support matrix operations",
      "Blas 1 does not support scalar and vectors operations",
      "All of the above"
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 72,
    "module": 3,
    "session": 1,
    "question": "In the context of High Performance Computing, why are Partial Differential Equations (PDEs) significant?",
    "options": [
      "They represent simple algebraic problems.",
      "They are used to visualize complex datasets.",
      "They help in mesh decomposition.",
      "They model many real-world problems like fluid dynamics.",
      "They are fundamental in graph algorithms."
    ],
    "correctAnswer": [
      3
    ],
    "multipleCorrect": false
  },
  {
    "id": 73,
    "module": 3,
    "session": 1,
    "question": "Imagine you are working on a weather simulation program that requires solving a large system of linear\nequations. Which tool, known for providing routines to solve systems of linear equations, would you consider using?",
    "options": [
      "Basic Linear Algebra Subprograms (BLAS)",
      "Parallel Boost Graph Library",
      "VTK",
      "Linear Algebra Package (LAPACK)",
      "METIS"
    ],
    "correctAnswer": [
      3
    ],
    "multipleCorrect": false
  },
  {
    "id": 74,
    "module": 3,
    "session": 1,
    "question": "Imagine you are working on a weather simulation program that requires solving a large system of linear\nequations. Which tool, known for providing routines to solve systems of linear equations, would you consider using?",
    "options": [
      "Basic Linear Algebra Subprograms (BLAS) - Focuses on basic vector and matrix operations.",
      "Parallel Boost Graph Library - Designed for large-scale graph operations.",
      "VTK - Used for 3D data rendering and visualization.",
      "Linear Algebra Package (LAPACK) - Provides routines for solving systems of linear equations, eigenvalue problems, and matrix inversion.",
      "METIS - Used for decomposing graphs/meshes for parallel computing."
    ],
    "correctAnswer": [
      3
    ],
    "multipleCorrect": false
  },
  {
    "id": 75,
    "module": 3,
    "session": 1,
    "question": "Why would a programmer developing HPC software want to use libraries?",
    "options": [
      "Libraries save the programmer significant time by implementing “low-level” code that is likely to be far removed from the research question the programmer is interested in.",
      "Libraries (especially those for HPC) have been optimized for efficiency, typically for various hardware platforms, which is a very difficult task.",
      "Since libraries have usually been widely tested, there will very likely be fewer bugs in the library functions than in one’s own code.",
      "All of the above"
    ],
    "correctAnswer": [
      3
    ],
    "multipleCorrect": false
  },
  {
    "id": 76,
    "module": 3,
    "session": 1,
    "question": "Which statement about Parallel Input/Output (I/O) in HPC is TRUE?",
    "options": [
      "It focuses on visualizing data.",
      "It deals with the decomposition of meshes.",
      "It is used to solve linear equations.",
      "It allows simultaneous reading/writing of data across multiple processors.",
      "It is primarily used for signal processing."
    ],
    "correctAnswer": [
      3
    ],
    "multipleCorrect": false
  },
  {
    "id": 77,
    "module": 3,
    "session": 1,
    "question": "What is true about FFTW “fastest Fourier transform in the West” signal processing Library?",
    "options": [
      "Supports SMP architectures with threads",
      "Supports distributed-memory architectures with MPI",
      "It is used in the molecular dynamics toolkits NAMD and Gromacs",
      "Optimized for speed by means of a special-purpose codelet generator called “genfft,” which actually produces the C code that is used",
      "All of the above"
    ],
    "correctAnswer": [
      4
    ],
    "multipleCorrect": false
  },
  {
    "id": 78,
    "module": 3,
    "session": 1,
    "question": "You're trying to optimize a fluid dynamics simulation running on a supercomputer. You notice that certain parts of the program run significantly slower\nthan others. Which tool, designed for collecting performance metrics and visualizing data for profiling, would be most suitable to diagnose the issue?",
    "options": [
      "FFTW - Used for Discrete Fourier Transforms.",
      "PAPI - Gives users access to hardware counters to collect performance metrics.",
      "PETSc - Aims to solve PDEs on various grid types.",
      "HDF5 - Used for structured storage and retrieval of large datasets.",
      "Trilinos - Another tool for solving PDEs."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 79,
    "module": 3,
    "session": 1,
    "question": "What are advantages of software libraries in HPC?",
    "options": [
      "Serve as repository for software reuse",
      "Reuse existing performance-tuned software",
      "Server as a knowledge base for specific computational science domains",
      "Become community standards",
      "All of the above"
    ],
    "correctAnswer": [
      4
    ],
    "multipleCorrect": false
  },
  {
    "id": 80,
    "module": 3,
    "session": 1,
    "question": "What HPC software libraries will you use for partial differential equations?",
    "options": [
      "SuperLU, PETSc, SLEPc, ELPA, Hypre",
      "PAPI, Vampir",
      "PETSc, Trilinos",
      "Pthreads, MPI, Boost MPI",
      "METIS, ParMETIS"
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 81,
    "module": 3,
    "session": 1,
    "question": "Library BLAS Levels 2 and 3 names are of the form cblas_pmmoo, where the p indicates the ______, mm indicates the ____ type, and oo\nindicates the _________",
    "options": [
      "Position, matrix, objects",
      "Precision, matrix, operation",
      "Position, malloc object, operation",
      "None of the above"
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 82,
    "module": 3,
    "session": 1,
    "question": "What are the main three libraries from SuperLU?",
    "options": [
      "Sequential SuperLU, designed for sequential execution on processors with cache-based memory hierarchies.",
      "Multithreaded SuperLU designed for SMP architectures.",
      "Distributed SuperLU is designed for distributed- memory architectures.",
      "AccSuperLU used only for architectures with Accelerators (GPUS)"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 83,
    "module": 3,
    "session": 1,
    "question": "MTL4 and Blaze are examples of higher-level abstraction interfaces that application developers can use to develop distributed linear\nalgebra applications using code that is very simple to read.",
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
    "id": 84,
    "module": 3,
    "session": 1,
    "question": "h5dump is a tool that is part of HDF5 library. What is the main use of h5dump?",
    "options": [
      "analogous to the Unix ls command for HDF5 files",
      "dump to screen the data stored in the hdf5 file",
      "dump to recycle bin the data stored in the hdf5 file",
      "analogous to the Unix rm command for HDF5 files"
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 85,
    "module": 3,
    "session": 1,
    "question": "What is the most important library for distributed-memory architectures?",
    "options": [
      "OpenMP",
      "Pthreads",
      "MPI",
      "VTK"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 86,
    "module": 3,
    "session": 1,
    "question": "Lapack incorporates BLAS Levels 2 and 3 to provide full problem drivers such as eigenvalue problems and linear solvers. A high\nperformance version of Lapack is available: ___________.",
    "options": [
      "ScaLapack",
      "Laplack 2",
      "VampirTrace",
      "PAPI",
      "None of the above"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 87,
    "module": 3,
    "session": 1,
    "question": "Match each library with the application domain",
    "options": [
      "Linear algebra",
      "Partial differential equations",
      "Graph algorithms",
      "input/output",
      "Parallelization 1. Boost Graph Library, Parallel Boost Graph Library 2. PETSc, Trilinos 3. Pthreads, MPI, Boost MPI 4. HDF5, Netcdf, Silo 5. BLAS, Lapack, ScaLapack, GNU Scientific Library"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 88,
    "module": 3,
    "session": 1,
    "question": "Which of the following is NOT a function of Basic Linear Algebra Subprograms (BLAS)?",
    "options": [
      "Vector addition",
      "Matrix-vector product",
      "Matrix inversion",
      "Vector scaling",
      "Dot product"
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 89,
    "module": 3,
    "session": 1,
    "question": "In HPC, graph algorithms can be used to:",
    "options": [
      "Render 3D models",
      "Monitor performance",
      "Process signals",
      "Determine shortest paths in large-scale networks",
      "Decompose matrices"
    ],
    "correctAnswer": [
      3
    ],
    "multipleCorrect": false
  },
  {
    "id": 90,
    "module": 3,
    "session": 1,
    "question": "When optimizing a high-performance computing application, performance monitoring is crucial to:",
    "options": [
      "Visualize 3D datasets.",
      "Solve partial differential equations.",
      "Decompose meshes.",
      "Process signals.",
      "Identify bottlenecks and inefficiencies in the code"
    ],
    "correctAnswer": [
      4
    ],
    "multipleCorrect": false
  },
  {
    "id": 91,
    "module": 3,
    "session": 1,
    "question": "A geophysicist is working with seismic data and needs a tool for 3D data rendering and visualization to interpret underground\nstructures. Which tool would be best suited for this?",
    "options": [
      "VTK - Supports large data and offers a wide range of visualization techniques.",
      "Boost Graph Library - Used for graph operations.",
      "ParMETIS - Decomposes meshes for parallel computing.",
      "Pthreads - Standard tool for distributing tasks over multi-core systems.",
      "HDF5 - Efficiently stores and retrieves large datasets"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 92,
    "module": 3,
    "session": 1,
    "question": "An aerospace engineer is working on a simulation of airflow over an aircraft wing. To ensure parallel computing efficiency, the engineer needs\nto decompose the computational mesh around the wing. Which tool specializes in this?",
    "options": [
      "VTK - Used for 3D data visualization.",
      "SuperLU - Solves systems of linear equations.",
      "METIS - Efficiently decomposes graphs and meshes for parallel computing.",
      "ELPA - Performs matrix operations.",
      "Boost MPI - C++ interface for Message Passing Interface."
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 93,
    "module": 3,
    "session": 1,
    "question": "An astrophysicist is working on a galaxy simulation project and generates terabytes of data daily. To efficiently store and retrieve this massive\namount of data, which tool, known for structured storage and retrieval of large datasets in scientific formats, would they consider?",
    "options": [
      "ScaLapack - Used for matrix operations.",
      "Hypre - A tool to solve linear equations.",
      "HDF5 - Allows structured storage and retrieval of large datasets in scientific formats.",
      "Trilinos - Used to solve PDEs.",
      "Boost Graph Library - Handles graph operations"
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 94,
    "module": 3,
    "session": 1,
    "question": "What is true about NFS file system?",
    "options": [
      "It is a Parallel file system",
      "It is a Distributed file system",
      "any POSIX-compliant file system can be accessed via NFS",
      "Only GPFS files system can be “exported” to permit remote access",
      "None of the above"
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 95,
    "module": 3,
    "session": 1,
    "question": "You are running a large-scale climate modelling simulation that generates terabytes of data. However, you notice significant idle CPU time, with\nthe system waiting for data to be read and written. Which of the following is the most likely cause of this issue?",
    "options": [
      "Insufficient CPU processing power",
      "Network latency between compute nodes",
      "Limited storage bandwidth and slow I/O operations",
      "Poor algorithm efficiency",
      "Insufficient memory capacity"
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 96,
    "module": 3,
    "session": 1,
    "question": "Which filesystem would you choose for a high-performance computing (HPC) application that requires high concurrency and large-scale\ndata processing, and why?",
    "options": [
      "NFS because it is simple to implement and widely supported.",
      "Ext4 because it is highly reliable for single-machine environments.",
      "HDFS because it offers redundancy and parallel data access.",
      "Lustre because it is optimized for high concurrency and massive data throughput.",
      "NTFS because it is compatible with Windows operating systems."
    ],
    "correctAnswer": [
      3
    ],
    "multipleCorrect": false
  },
  {
    "id": 97,
    "module": 3,
    "session": 1,
    "question": "Consider a parallel filesystem using data striping to improve I/O performance. How does data striping work, and what is its primary benefit?",
    "options": [
      "Data is compressed before storage, reducing space but not affecting performance.",
      "Data is mirrored across multiple storage devices, improving fault tolerance.",
      "Data blocks are distributed across multiple storage devices, allowing simultaneous access by multiple processes.",
      "Data is stored sequentially on a single storage device to maximize read/write speeds.",
      "Data is encrypted across all storage devices to enhance security."
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 98,
    "module": 3,
    "session": 1,
    "question": "You are tasked with selecting a filesystem for a genomic sequencing application that will generate and process petabytes of data. Which filesystem\nwould be most appropriate, and what feature makes it particularly suitable?",
    "options": [
      "NTFS for its reliability on Windows systems.",
      "HDFS for its redundancy and fault tolerance.",
      "NFS for its ease of use in network environments.",
      "Lustre for its scalability and high throughput in managing massive datasets.",
      "Ext4 for its widespread use and simplicity."
    ],
    "correctAnswer": [
      3
    ],
    "multipleCorrect": false
  },
  {
    "id": 99,
    "module": 3,
    "session": 1,
    "question": "In a parallel filesystem like Lustre, what role does the Metadata Server (MDS) play, and why is it crucial for performance?",
    "options": [
      "It stores all the data blocks across the storage devices.",
      "It manages the communication between compute nodes and storage devices.",
      "It handles metadata operations such as file attributes and directory structures, ensuring efficient data access.",
      "It encrypts data before storing it in the filesystem.",
      "It monitors and manages network traffic within the HPC cluster."
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 100,
    "module": 3,
    "session": 1,
    "question": "Which of the following challenges is most likely to arise when scaling I/O operations in HPC systems with a large number of compute nodes?",
    "options": [
      "Increased CPU processing time due to more data.",
      "Excessive network bandwidth that exceeds available capacity.",
      "Contention and delays due to a single metadata server becoming a bottleneck.",
      "Decreased disk seek times leading to faster data access.",
      "Redundant data processing across multiple nodes."
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 101,
    "module": 3,
    "session": 1,
    "question": "How do solid-state drives (SSDs) improve I/O performance in HPC storage systems compared to traditional spinning disks?",
    "options": [
      "By providing larger storage capacity at a lower cost.",
      "By reducing latency and increasing IOPS (input/output operations per second).",
      "By offering better data redundancy and fault tolerance.",
      "By simplifying the management of data across multiple nodes.",
      "By reducing the need for metadata management."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 102,
    "module": 3,
    "session": 1,
    "question": "Why is HDF5 particularly well-suited for managing complex scientific datasets in HPC environments?",
    "options": [
      "It is a lightweight format with minimal features.",
      "It only supports small-scale, single-node applications.",
      "It provides hierarchical data structures and supports parallel I/O operations.",
      "It encrypts data by default for enhanced security.",
      "It is primarily used for big data analytics, not HPC."
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 103,
    "module": 3,
    "session": 1,
    "question": "What is the primary benefit of implementing load balancing in a parallel filesystem?",
    "options": [
      "It increases the storage capacity of the filesystem.",
      "It reduces the complexity of managing the filesystem.",
      "It ensures an even distribution of I/O workloads across all available resources.",
      "It simplifies the process of adding new storage devices to the system.",
      "It encrypts data before it is written to disk."
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 104,
    "module": 3,
    "session": 1,
    "question": "Which of the following best describes the role of MPI-IO in parallel I/O operations within an HPC environment?",
    "options": [
      "MPI-IO is used to compress data before transmission to reduce network load.",
      "MPI-IO provides an interface for collective I/O operations, enabling efficient data access by multiple processes simultaneously.",
      "MPI-IO encrypts data to ensure secure storage across the filesystem.",
      "MPI-IO manages the storage devices directly, bypassing the filesystem layer.",
      "MPI-IO is a replacement for traditional I/O libraries, not compatible with parallel filesystems."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 105,
    "module": 3,
    "session": 1,
    "question": "Which data replication strategy is most effective in ensuring fault tolerance in an HPC environment?",
    "options": [
      "Single-point replication where data is duplicated on a single backup node.",
      "Asynchronous replication where data is periodically copied to a remote site.",
      "RAID-0, which focuses on performance rather than redundancy.",
      "Multi-node replication where data is replicated across multiple nodes in real-time.",
      "Dynamic replication based on current I/O load."
    ],
    "correctAnswer": [
      3
    ],
    "multipleCorrect": false
  },
  {
    "id": 106,
    "module": 3,
    "session": 1,
    "question": "In the context of I/O optimization, how does caching improve data access performance in HPC systems?",
    "options": [
      "By storing all data in the CPU cache, eliminating the need for disk access.",
      "By preloading frequently accessed data into faster storage layers like RAM, reducing disk access times.",
      "By compressing data on the fly to save storage space.",
      "By distributing data evenly across all available nodes.",
      "By automatically encrypting data before it is cached."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 107,
    "module": 3,
    "session": 1,
    "question": "Given the I/O demands of a genomic sequencing application that generates petabytes of data, which filesystem is most appropriate, and why?",
    "options": [
      "NTFS for its reliability in single-node environments.",
      "NFS for its ease of use in networked environments.",
      "Lustre for its scalability and ability to manage large datasets efficiently.",
      "HDFS for its redundancy and big data analytics capabilities.",
      "Ext4 for its widespread support across Linux systems."
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 108,
    "module": 3,
    "session": 1,
    "question": "Which emerging technology is expected to have the most significant impact on reducing I/O latency and improving performance in HPC systems?",
    "options": [
      "Increased CPU clock speeds.",
      "Enhanced network security protocols.",
      "Non-volatile memory (NVM) technologies like Intel Optane.",
      "Traditional HDDs with larger storage capacities.",
      "Improved user interfaces for I/O management software."
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 109,
    "module": 3,
    "session": 1,
    "question": "In a parallel filesystem like Lustre, what is the purpose of the Lustre Distributed Lock Manager (LDLM), and how does it contribute to\nsystem performance?",
    "options": [
      "LDLM encrypts data before it is written to the storage devices.",
      "LDLM manages the locks for accessing resources, preventing conflicts in high-concurrency environments.",
      "LDLM monitors network traffic and manages load balancing across nodes.",
      "LDLM is responsible for compressing data to save storage space.",
      "LDLM handles the backup and recovery operations for the filesystem."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 110,
    "module": 3,
    "session": 1,
    "question": "As we approach the exascale era, what is one of the primary challenges for the scalability of parallel filesystems?",
    "options": [
      "Decreasing the number of compute nodes required.",
      "Simplifying the file system interface for end-users.",
      "Managing metadata efficiently as the scale of data and number of nodes increase.",
      "Reducing the cost of storage hardware.",
      "Eliminating the need for network communication between nodes."
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 111,
    "module": 3,
    "session": 1,
    "question": "Which of the following is a direct consequence of I/O bottlenecks in a high-performance computing (HPC) system?",
    "options": [
      "Increased CPU utilization.",
      "Reduced storage capacity.",
      "Idle CPU cycles waiting for data.",
      "Improved data redundancy.",
      "Faster data retrieval times."
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 112,
    "module": 3,
    "session": 1,
    "question": "How does adjusting the stripe size in a parallel filesystem like Lustre influence I/O performance, particularly for sequential data access patterns?",
    "options": [
      "Larger stripe sizes reduce the need for metadata management.",
      "Smaller stripe sizes decrease network traffic between nodes.",
      "Properly tuned stripe sizes can enhance read/write speeds by matching the I/O block size of the application.",
      "Stripe size adjustments only affect the redundancy of data, not performance.",
      "Larger stripe sizes increase the overall storage capacity of the filesystem."
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 113,
    "module": 3,
    "session": 1,
    "question": "Which role does machine learning play in optimizing I/O operations in HPC environments?",
    "options": [
      "Encrypting data before it is stored.",
      "Predicting future data access patterns to optimize caching and data placement.",
      "Automatically scaling storage capacity based on usage.",
      "Reducing the need for metadata management.",
      "Compressing data to save storage space."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 114,
    "module": 3,
    "session": 1,
    "question": "For a large-scale simulation that requires high throughput and low latency, which filesystem would be more appropriate: NFS or Lustre, and why?",
    "options": [
      "NFS, because it is easier to manage in large clusters.",
      "NFS, because it supports high-concurrency applications better.",
      "Lustre, because it is designed for high throughput and handles large datasets efficiently.",
      "Lustre, because it is more cost-effective for small workloads.",
      "Both filesystems are equally suited for high-performance applications."
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 115,
    "module": 3,
    "session": 1,
    "question": "What technique is commonly used in parallel filesystems like GPFS to ensure data integrity and availability in the event of hardware failures?",
    "options": [
      "Data compression.",
      "Dynamic load balancing.",
      "Data replication and erasure coding.",
      "Increased CPU clock speeds.",
      "Manual backup of all data."
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 116,
    "module": 3,
    "session": 1,
    "question": "In a climate modeling simulation that generates large volumes of data, which parallel I/O strategy would be most effective to avoid I/O bottlenecks?",
    "options": [
      "Storing all data on a single SSD.",
      "Writing data sequentially to a single file without parallel I/O.",
      "Using MPI-IO to enable multiple processes to write to different parts of a shared file simultaneously.",
      "Compressing data after the simulation completes.",
      "Using NFS to share data across the network."
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 117,
    "module": 3,
    "session": 1,
    "question": "Why are high-speed interconnects like InfiniBand crucial for parallel filesystems in HPC environments?",
    "options": [
      "They reduce the cost of storage devices.",
      "They increase the storage capacity of the filesystem.",
      "They facilitate fast data transfers between compute nodes and storage systems, reducing latency.",
      "They simplify the management of metadata across nodes.",
      "They provide better data redundancy."
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 118,
    "module": 3,
    "session": 1,
    "question": "What feature of GPFS makes it particularly well-suited for data-intensive projects like the Square Kilometre Array (SKA)?",
    "options": [
      "Its support for single-node operations.",
      "Its ability to manage vast data volumes across global data centers.",
      "Its simple installation and configuration process.",
      "Its integration with low-speed network infrastructures.",
      "Its focus on local storage management."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 119,
    "module": 3,
    "session": 1,
    "question": "How does non-volatile memory (NVM) technology like Intel Optane impact I/O performance in HPC systems?",
    "options": [
      "It increases latency due to slower access speeds.",
      "It reduces data redundancy in the system.",
      "It provides high-speed, persistent storage, reducing I/O latency and enhancing data availability.",
      "It simplifies the file system management process.",
      "It increases the need for frequent backups."
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 120,
    "module": 3,
    "session": 1,
    "question": "In which scenario would data compression and chunking be most beneficial for optimizing I/O performance in an HPC application?",
    "options": [
      "When managing small, randomly accessed files.",
      "When dealing with large, sequential datasets that are frequently accessed.",
      "When data security is the primary concern.",
      "When the primary goal is to reduce CPU usage.",
      "When the application only requires local storage."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 121,
    "module": 3,
    "session": 1,
    "question": "Imagine you're developing a real-time data processing system that requires fast, immediate file operations with minimal\nlatency. Which method would be most suitable for this requirement?",
    "options": [
      "Buffered I/O with fopen(), fread(), and fwrite().",
      "System calls like open(), read(), and write().",
      "Either, since both methods offer identical performance.",
      "Buffered I/O only with fread().",
      "System call only with open()."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 122,
    "module": 3,
    "session": 1,
    "question": "Given the following code snippet, identify what kind of file operation method is being used:\nFILE *fp;\nfp = fopen(\"sample.txt\", \"r\");\nif (fp != NULL) {\nchar buffer[100];\nfread(buffer, sizeof(char), 100, fp);\nfclose(fp);\n}",
    "options": [
      "POSIX System call.",
      "POSIX Buffered I/O.",
      "Neither.",
      "Combination of both System call and Buffered I/O.",
      "Cannot determine from the code."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 123,
    "module": 3,
    "session": 1,
    "question": "Practical Application of HDF5. Consider you are working on a climate model that generates large datasets with multiple variables (e.g., temperature, pressure) that need to be stored efficiently. Which features of the HDF5 library make it particularly suitable for this task?",
    "options": [
      "HDF5 is limited to handling small datasets and is not optimized for parallel processing.",
      "HDF5 only supports serial I/O operations, making it unsuitable for large-scale data handling.",
      "HDF5 does not provide tools for metadata management, making it challenging to handle large datasets.",
      "HDF5 offers a hierarchical data model that can manage complex data relationships and allows parallel I/O operations, ensuring efficient data storage and retrieval.",
      "HDF5 is designed specifically for image processing and does not support multidimensional data arrays."
    ],
    "correctAnswer": [
      3
    ],
    "multipleCorrect": false
  },
  {
    "id": 124,
    "module": 3,
    "session": 1,
    "question": "#include \"hdf5.h\"\n#include <mpi.h>\nint main(int argc, char **argv) {\nMPI_Init(&argc, &argv);\n// Initialize MPI and HDF5 file access properties\nMPI_Comm comm = MPI_COMM_WORLD;\nMPI_Info info = MPI_INFO_NULL;\nhid_t plist_id = H5Pcreate(H5P_FILE_ACCESS);\nH5Pset_fapl_mpio(plist_id, comm, info);\n// Create and open the HDF5 file for parallel I/O\nhid_t file_id = H5Fcreate(\"data.h5\", H5F_ACC_TRUNC, H5P_DEFAULT, plist_id);\n// Write data (assume data buffer exists)\nhid_t dspace_id = H5Screate_simple(1, dims, NULL); // Dataset dimensions\nhid_t dset_id = H5Dcreate(file_id, \"Dataset\", H5T_NATIVE_DOUBLE,\ndspace_id, H5P_DEFAULT, H5P_DEFAULT, H5P_DEFAULT);\nH5Dwrite(dset_id, H5T_NATIVE_DOUBLE, H5S_ALL, H5S_ALL, H5P_DEFAULT, data);\n// Close resources\nH5Dclose(dset_id);\nH5Sclose(dspace_id);\nH5Fclose(file_id);\nH5Pclose(plist_id);\nMPI_Finalize();\nreturn 0;\n}\nOptions:",
    "options": [
      "The file should be created with H5P_DEFAULT as the file access property list for parallel I/O.",
      "The dataset creation and writing must be done with individual file access property lists for each process.",
      "The code correctly initializes the HDF5 file for parallel I/O.",
      "The H5Pset_fapl_mpio call is unnecessary in parallel I/O.",
      "The code should use H5F_ACC_RDWR instead of H5F_ACC_TRUNC to open the file for parallel I/O."
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 125,
    "module": 3,
    "session": 1,
    "question": "What is the correct output of the following C program that computes the Fast Fourier Transform (FFT) of a 1D array using the FFTW library?\n#include <fftw3.h>\n#include <stdio.h>\n#include <math.h>\nint main() {\nint N = 4; // Size of the array\nfftw_complex in[N], out[N];\nfftw_plan plan;\n// Initialize input array with a simple pattern\nfor (int i = 0; i < N; i++) {\nin[i][0] = i;   // Real part\nin[i][1] = 0.0; // Imaginary part\n}\n// Create a plan for FFT\nplan = fftw_plan_dft_1d(N, in, out, FFTW_FORWARD, FFTW_ESTIMATE);\n// Execute the FFT\nfftw_execute(plan);\n// Print the output\nprintf(\"FFT output:\\n\");\nfor (int i = 0; i < N; i++) {\nprintf(\"(%.2f, %.2f)\\n\", out[i][0], out[i][1]);\n}\n// Clean up\nfftw_destroy_plan(plan);\nreturn 0;\n}\nOptions:",
    "options": [
      " (10.00, 0.00) (-2.00, 2.00) (-2.00, 0.00) (-2.00, -2.00)",
      " (0.00, 0.00) (-4.00, 4.00) (-4.00, 0.00) (-4.00, -4.00)",
      " (-4.00, -4.00) (6.00, 0.00) (-4.00, 0.00) (4.00, -4.00)",
      " (6.00, 0.00) (-4.00, 4.00) (0.00, 0.00) (-4.00, -4.00)",
      " (6.00, 0.00) (-2.00, 2.00) (-2.00, 0.00) (-2.00, -2.00)"
    ],
    "correctAnswer": [
      4
    ],
    "multipleCorrect": false
  },
  {
    "id": 126,
    "module": 3,
    "session": 1,
    "question": "In a distributed-memory environment using ScaLAPACK, you want to solve a system of linear equations Ax=b (A·x=b) where A is a large, dense matrix distributed across multiple processors. Which ScaLAPACK function would you use, and how would you initialize the required descriptors for the matrix distribution? (Assume MPI environment is already initialized.)\n#include <mpi.h>\n#include <scalapack.h>\nint main(int argc, char *argv[]) {\nMPI_Init(&argc, &argv);\nint n = 1000; // Matrix size\nint nb = 100; // Block size\nint nprow = 2, npcol = 2; // Processor grid size\n// Initialize process grid\nint ictxt, myrow, mycol, info;\nCblacs_get(0, 0, &ictxt);\nCblacs_gridinit(&ictxt, \"Row\", nprow, npcol);\nCblacs_gridinfo(ictxt, &nprow, &npcol, &myrow, &mycol);\n// Initialize matrix descriptors (Assume arrays A, B, and result X are allocated and filled)\nint descA[9], descB[9], descX[9];\nint lda = nb, ldb = nb, ldx = nb;\nint rsrc = 0;\n// Initialize matrix descriptors\ndescinit(descA, &n, &n, &nb, &nb, &rsrc, &rsrc, &ictxt, &lda, &info);\ndescinit(descB, &n, &n, &nb, &nb, &rsrc, &rsrc, &ictxt, &ldb, &info);\ndescinit(descX, &n, &n, &nb, &nb, &rsrc, &rsrc, &ictxt, &ldx, &info);\n// Call to ScaLAPACK routine to solve the system\nint ipiv[n];\npdgesv_(&n, &n, A, &1, &1, descA, ipiv, B, &1, &1, descB, &info);\nMPI_Finalize();\nreturn 0;\n}\nOptions:",
    "options": [
      "The Cblacs_gridinit should use \"Col\" instead of \"Row\" for the correct process grid orientation.",
      "Descriptors are incorrectly initialized; the block size nb should not be included in descinit.",
      "The function pdgesv_ is correct, and descriptors are correctly initialized.",
      "The processor grid size should match the matrix dimensions, so nprow and npcol are incorrect.",
      "The function pdgesv_ is incorrect for solving linear equations; use pdgetrf_ instead."
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 127,
    "module": 3,
    "session": 1,
    "question": "PETSc for PDEs. In the context of solving partial differential equations (PDEs) with PETSc, what is a significant advantage of using this library?",
    "options": [
      "PETSc is limited to solving algebraic equations and cannot handle PDEs.",
      "PETSc provides a range of solvers and preconditioners optimized for large-scale, parallel computations.",
      "PETSc is designed to work exclusively with serial computations.",
      "PETSc offers limited scalability across distributed-memory systems.",
      "PETSc does not support the integration with other HPC libraries."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 128,
    "module": 3,
    "session": 1,
    "question": "Given the following C code using the BLAS library, what is the correct output for the resulting matrix C?\n#include <stdio.h>\n#include <cblas.h>\nint main() {\nint m = 2, n = 3, k = 2;\ndouble A[6] = {1, 2, 3, 4, 5, 6}; // 2x3 matrix\ndouble B[6] = {7, 8, 9, 10, 11, 12}; // 3x2 matrix\ndouble C[4] = {0}; // 2x2 result matrix\n// Perform C = A * B using DGEMM\ncblas_dgemm(CblasRowMajor, CblasNoTrans, CblasNoTrans,\nm, k, n, 1.0, A, n, B, k, 0.0, C, k);\nprintf(\"Result matrix C:\\n\");\nfor (int i = 0; i < 4; i++) {\nprintf(\"%6.2f \", C[i]);\nif ((i + 1) % k == 0) printf(\"\\n\");\n}\nreturn 0;\n}\nOptions:",
    "options": [
      " 37.00 42.00 85.00 96.00",
      " 58.00 64.00 139.00 154.00",
      " 67.00 76.00 150.00 165.00",
      " 34.00 42.00 85.00 100.00",
      " 19.00 22.00 43.00 50.00"
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 129,
    "module": 3,
    "session": 1,
    "question": "An astrophysicist is dealing with vast datasets from cosmic simulations. The data needs to be read and written efficiently in a parallel manner across multiple nodes of a supercomputer. Which tool is designed for this specific task?",
    "options": [
      "METIS – Decomposes meshes for parallel computing.",
      "SuperLU – Solves systems of linear equations.",
      "Trilinos – Aims at solving PDEs.",
      "HDF5 – Enables efficient storage and retrieval of vast datasets in parallel.",
      "PAPI – Provides performance metrics from hardware counters."
    ],
    "correctAnswer": [
      3
    ],
    "multipleCorrect": false
  }
];
