export const questions = [
  {
    "id": 1,
    "module": 5,
    "session": 1,
    "question": "Consider the following loop that attempts to use SIMD parallelism\r\nin OpenMP. Why is this loop not suitable for SIMD parallelism?\r\n#pragma omp simd\r\nfor (int i = 1; i < N; i++) {\r\narray[i] = array[i - 1] + 1;\r\n}",
    "options": [
      "The loop has independent iterations",
      "The memory access pattern is optimized",
      "There is a loop-carried dependency",
      "The loop size is too small",
      "SIMD cannot be applied to floating-point operations"
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 2,
    "module": 5,
    "session": 1,
    "question": "What role does the #pragma omp taskwait directive play in this recursive function? In\nrecursive algorithms like the Fibonacci computation, tasks can be created at each recursive\nstep. Consider the following code snippet:\nint fib(int n) {\nif (n < 2) return n;\nint x, y;\n#pragma omp task shared(x)\nx = fib(n - 1);\n#pragma omp task shared(y)\ny = fib(n - 2);\n#pragma omp taskwait\nreturn x + y;\n}",
    "options": [
      "It ensures that the tasks for fib(n-1) and fib(n-2) complete before combining their results",
      "It prevents tasks from being created too early",
      "It forces the program to wait for all threads to finish",
      "It balances the workload among threads",
      "It prevents memory access conflicts"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 3,
    "module": 5,
    "session": 1,
    "question": "Imagine you are tasked with optimizing the performance of a\r\ndynamic workload in a parallel program. You decide to use\r\nOpenMP's task-based parallelism. In the following situation,\r\nyou have many small, independent tasks to execute, but their\r\nexecution times vary significantly.\r\nWhich OpenMP directive or clause would you use to ensure\r\nthat tasks are distributed dynamically among threads, and no\r\nthread remains idle while there are still tasks to execute?",
    "options": [
      "#pragma omp parallel for schedule(static)",
      "#pragma omp task",
      "#pragma omp parallel for schedule(guided)",
      "#pragma omp sections",
      "#pragma omp taskwait"
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 4,
    "module": 5,
    "session": 1,
    "question": "Consider the following loop designed to apply a transformation\r\nto an array using SIMD parallelism. To maximize performance\r\nusing SIMD instructions, what is the most important factor to\r\nensure when designing this loop?\r\n#pragma omp simd\r\nfor (int i = 0; i < N; i++) {\r\narray[i] = array[i] * 2.0;\r\n}",
    "options": [
      "Ensure loop iterations are dependent on each other",
      "Ensure memory alignment using #pragma omp simd\r\naligned(array:32)",
      "Use nested loops to reduce iteration count",
      "Use complex control flows inside the loop",
      "Manually split the loop into separate chunks"
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 5,
    "module": 5,
    "session": 1,
    "question": "You are developing a program to offload computations to a GPU\r\nusing OpenMP 4.0's GPU offloading features. The program must\r\ntransfer data arrays A and B to the GPU, perform computations,\r\nand then retrieve the result in array C. Which of the following\r\nOpenMP directives should you use to efficiently manage the\r\nmemory transfers between the host (CPU) and the device (GPU)\r\nin this scenario?",
    "options": [
      "#pragma omp target data map(to: A, B)",
      "#pragma omp parallel for schedule(dynamic)",
      "#pragma omp simd",
      "#pragma omp critical",
      "#pragma omp target map(to: A, B) map(from: C)"
    ],
    "correctAnswer": [
      4
    ],
    "multipleCorrect": false
  },
  {
    "id": 6,
    "module": 5,
    "session": 1,
    "question": "In a program that computes recursive Fibonacci numbers using OpenMP tasks, the following code is used. What\r\nis the role of the #pragma omp taskwait directive in this code?\r\n#pragma omp parallel\r\n{\r\n#pragma omp single\r\n{\r\nresult = fib(30);\r\n}\r\n}\r\nint fib(int n) {\r\nint x, y;\r\nif (n < 2) return n;\r\n#pragma omp task shared(x)\r\nx = fib(n - 1);\r\n#pragma omp task shared(y)\r\ny = fib(n - 2);\r\n#pragma omp taskwait\r\nreturn x + y;\r\n}",
    "options": [
      "It ensures that all threads have completed execution",
      "It prevents race conditions by synchronizing threads",
      "It ensures that the fib(n-1) and fib(n-2) tasks complete before returning their results",
      "It forces all tasks in the program to finish before proceeding",
      "It balances the load among threads"
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 7,
    "module": 5,
    "session": 1,
    "question": "You are tasked with optimizing a parallel loop with a large number of iterations. Each iteration\r\nperforms some processing on elements of an array. To reduce overhead while maintaining load\r\nbalance, you decide to use the OpenMP taskloop directive. How can you control the granularity of\r\ntasks created by #pragma omp taskloop to reduce the task creation overhead while ensuring\r\nefficient parallelism?",
    "options": [
      "By using the schedule(static) clause",
      "By specifying a grainsize clause to control the number of iterations per task",
      "By adding a critical section to reduce the number of tasks",
      "By using #pragma omp single",
      "By using #pragma omp taskwait to avoid task creation overhead"
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 8,
    "module": 5,
    "session": 1,
    "question": "You are implementing a simulation where different\r\nsections of the simulation grid require varying levels of\r\ncomputation. To avoid idle threads, you decide to\r\ndynamically balance the workload among threads. Which\r\nOpenMP directive and scheduling clause would best\r\nbalance the load by dynamically assigning chunks of work\r\nto threads as they become available?",
    "options": [
      "#pragma omp for schedule(static, 1)",
      "#pragma omp parallel for schedule(dynamic, 1)",
      "#pragma omp task",
      "#pragma omp sections",
      "#pragma omp critical"
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 9,
    "module": 5,
    "session": 1,
    "question": "Consider the following loop that attempts to use SIMD\nparallelism in OpenMP. Why is this loop not suitable for SIMD\nparallelism?\n#pragma omp simd\nfor (int i = 1; i < N; i++) {\narray[i] = array[i - 1] + 1;\n}",
    "options": [
      "The loop has independent iterations",
      "The memory access pattern is optimized",
      "There is a loop-carried dependency",
      "The loop size is too small",
      "SIMD cannot be applied to floating-point operations"
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 10,
    "module": 5,
    "session": 1,
    "question": "You are writing a program that processes\r\nlarge arrays using parallelism. You are deciding between\r\nusing #pragma omp parallel for and #pragma omp\r\ntaskloop for dividing work among threads. What is a key\r\nadvantage of using #pragma omp taskloop over\r\n#pragma omp parallel for?",
    "options": [
      "Taskloop is faster than parallel for",
      "Taskloop allows finer control over task creation and\r\ngranularity",
      "Parallel for can handle dynamic workloads better",
      "Parallel for requires fewer synchronization points",
      "Taskloop forces static scheduling"
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 11,
    "module": 5,
    "session": 1,
    "question": "You have offloaded a computation to the GPU using\r\nOpenMP’s target directives. Despite this, you observe that\r\nthe performance gain is minimal. Profiling reveals significant\r\ntime spent on data transfers between the CPU and the GPU.\r\nWhat is the most effective strategy to reduce the data\r\ntransfer bottleneck?",
    "options": [
      "Use #pragma omp task",
      "Use map(tofrom:) to reduce data transfers between the\r\nCPU and GPU",
      "Increase the number of CPU threads",
      "Use #pragma omp barrier to synchronize threads",
      "Avoid using GPU offloading for small data sets"
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 12,
    "module": 5,
    "session": 1,
    "question": "In the following OpenMP task-based code, there are dependencies between\r\ntasks that must be respected. What is the purpose of the depend(in: A[i-1])\r\ndepend(out: A[i]) clauses?\r\n#pragma omp parallel\r\n{\r\n#pragma omp single\r\n{\r\nfor (int i = 1; i < N; i++) {\r\n#pragma omp task depend(in: A[i-1]) depend(out: A[i])\r\nprocess(A[i]);\r\n}\r\n}\r\n}",
    "options": [
      "They define which thread will execute each task",
      "They enforce a specific order of task execution based on data dependencies",
      "They balance the load across threads",
      "They reduce the number of synchronization points",
      "They ensure SIMD vectorization"
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 13,
    "module": 5,
    "session": 1,
    "question": "When using SIMD parallelism in OpenMP, memory alignment\r\ncan significantly affect performance. Why is the\r\naligned(data:32) clause used here?\r\n#pragma omp simd aligned(data:32)\r\nfor (int i = 0; i < N; i++) {\r\ndata[i] = data[i] * 2.0;\r\n}",
    "options": [
      "To reduce loop iterations",
      "To ensure that memory accesses are properly aligned for\r\nefficient SIMD execution",
      "To prevent race conditions",
      "To force the compiler to vectorize the loop",
      "To increase the size of each SIMD instruction"
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 14,
    "module": 5,
    "session": 1,
    "question": "When creating tasks in OpenMP, you notice a performance drop due to the overhead of\r\ncreating too many small tasks. Which OpenMP clause can help you reduce task creation\r\noverhead by adjusting the granularity of tasks?",
    "options": [
      "schedule(static)",
      "grainsize",
      "critical",
      "collapse",
      "atomic"
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 15,
    "module": 5,
    "session": 1,
    "question": "You have implemented an OpenMP target region to\r\noffload a computation to the GPU. However, the computation\r\ninvolves both data transfers and kernel executions. To improve\r\nperformance, you decide to overlap data transfers and\r\ncomputations. Which OpenMP clause can you use to ensure that\r\ndata transfers do not block computation on the GPU?",
    "options": [
      "nowait",
      "atomic",
      "schedule(guided)",
      "taskwait",
      "aligned"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 16,
    "module": 5,
    "session": 1,
    "question": "What role does the #pragma omp taskwait directive play in\r\nthis recursive function? In recursive algorithms like the Fibonacci\r\ncomputation, tasks can be created at each recursive step. Consider the\r\nfollowing code snippet:\r\nint fib(int n) {\r\nif (n < 2) return n;\r\nint x, y;\r\n#pragma omp task shared(x)\r\nx = fib(n - 1);\r\n#pragma omp task shared(y)\r\ny = fib(n - 2);\r\n#pragma omp taskwait\r\nreturn x + y;\r\n}",
    "options": [
      "It ensures that the tasks for fib(n-1) and fib(n-2) complete before\r\ncombining their results",
      "It prevents tasks from being created too early",
      "It forces the program to wait for all threads to finish",
      "It balances the workload among threads",
      "It prevents memory access conflicts"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 17,
    "module": 5,
    "session": 1,
    "question": "Guided scheduling can be useful when\r\nthe workload size decreases over time. You are\r\nimplementing an algorithm with decreasing\r\ncomputation per iteration. Which OpenMP scheduling\r\nstrategy would best adapt to this situation?",
    "options": [
      "schedule(static)",
      "schedule(dynamic)",
      "schedule(guided)",
      "schedule(auto)",
      "schedule(runtime)"
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 18,
    "module": 5,
    "session": 1,
    "question": "Consider the following loop for matrix multiplication.\r\nWhat is the main benefit of using #pragma omp simd in this matrix\r\nmultiplication loop?\r\n#pragma omp simd\r\nfor (int i = 0; i < N; i++) {\r\nfor (int j = 0; j < M; j++) {\r\nfor (int k = 0; k < K; k++) {\r\nC[i][j] += A[i][k] * B[k][j];\r\n}\r\n}\r\n}",
    "options": [
      "Reduces the number of iterations",
      "Increases parallelism by vectorizing inner loops",
      "Avoids race conditions between threads",
      "Forces the loop to run sequentially",
      "Synchronizes threads at the end of each loop"
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 19,
    "module": 5,
    "session": 1,
    "question": "You are working on a real-time weather\r\nsimulation where different regions require varying amounts\r\nof computation based on localized weather phenomena\r\n(e.g., storms vs. calm areas). To ensure efficient use of\r\ncomputational resources, you want to dynamically distribute\r\nthese computation-heavy regions across multiple CPU\r\nthreads. Which OpenMP scheduling technique should you\r\nuse to dynamically assign work so that threads remain busy\r\nregardless of how long computations take in different\r\nregions?",
    "options": [
      "schedule(static)",
      "schedule(dynamic)",
      "schedule(guided)",
      "schedule(auto)",
      "schedule(runtime)"
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 20,
    "module": 5,
    "session": 1,
    "question": "You are tasked with improving the\r\nperformance of an image-processing\r\napplication that applies a filter to each pixel of a\r\nlarge image. Each pixel operation is\r\nindependent and involves a simple arithmetic\r\ncalculation. You want to use SIMD to speed up\r\nthis operation. What OpenMP directive and\r\nclause would you use to ensure that multiple\r\npixels are processed simultaneously using SIMD,\r\nand what memory condition must be satisfied?",
    "options": [
      "#pragma omp simd with aligned memory\r\naccess",
      "#pragma omp parallel for with dynamic\r\nscheduling",
      "#pragma omp critical to avoid race conditions",
      "#pragma omp task for each pixel",
      "#pragma omp barrier to synchronize threads"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 21,
    "module": 5,
    "session": 1,
    "question": "You are implementing a genome\r\nsequencing application where each DNA sequence is\r\nprocessed independently but the computation time\r\nvaries significantly based on the sequence complexity.\r\nYou want to ensure that tasks are dynamically assigned\r\nto threads and no thread is left idle. Which\r\ncombination of OpenMP constructs would allow you\r\nto dynamically schedule tasks across threads and\r\nensure that tasks are properly synchronized?",
    "options": [
      "#pragma omp parallel for schedule(static)",
      "#pragma omp task and #pragma omp taskwait",
      "#pragma omp parallel for schedule(guided)",
      "#pragma omp critical and #pragma omp single",
      "#pragma omp sections"
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 22,
    "module": 5,
    "session": 1,
    "question": "You are working on a financial application\r\nthat calculates risk metrics (such as Value at Risk) for a\r\nlarge number of financial instruments. Each instrument's\r\ncalculation is independent, but you want to offload the\r\ncomputations to a GPU to speed up the process. How\r\nshould you structure the OpenMP directives to ensure\r\nefficient GPU offloading and minimize data transfer\r\noverhead?",
    "options": [
      "#pragma omp target map(tofrom: risk_data)",
      "#pragma omp parallel for schedule(static)",
      "#pragma omp simd aligned(risk_data:32)",
      "#pragma omp critical",
      "#pragma omp taskloop"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 23,
    "module": 5,
    "session": 1,
    "question": "You are optimizing a CFD simulation that performs a\r\nseries of stencil computations on a 3D grid. The simulation involves\r\nsignificant data reuse and you want to maximize the performance\r\nusing both SIMD and task parallelism in OpenMP. Which OpenMP\r\nfeatures should you use to optimize both the memory access\r\npatterns and the parallel task execution for this type of problem?",
    "options": [
      "#pragma omp taskloop with #pragma omp simd aligned(grid:32)",
      "#pragma omp critical with #pragma omp barrier",
      "#pragma omp parallel for schedule(static)",
      "#pragma omp sections",
      "#pragma omp atomic with #pragma omp single"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 24,
    "module": 5,
    "session": 1,
    "question": "You are implementing a recursive quicksort\r\nalgorithm and want to parallelize the sorting process\r\nusing OpenMP tasks. Since quicksort is a divide-and-\r\nconquer algorithm, you want each partitioning step to\r\nbe executed in parallel. However, you must ensure that\r\nall tasks are synchronized correctly before merging the\r\nresults. Which OpenMP construct allows you to create\r\ntasks for each partitioning step and ensure that all tasks\r\nare completed before merging the results?",
    "options": [
      "#pragma omp task and #pragma omp taskwait",
      "#pragma omp parallel for",
      "#pragma omp sections and #pragma omp critical",
      "#pragma omp simd",
      "#pragma omp single and #pragma omp barrier"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 25,
    "module": 5,
    "session": 1,
    "question": "You are tasked with improving the performance of matrix\r\nmultiplication for two large matrices, A and B, using OpenMP. Below is\r\nthe basic sequential code for matrix multiplication. Which OpenMP\r\ndirective would you use to parallelize the outer two loops efficiently,\r\nensuring that all iterations are independent?\r\nfor (int i = 0; i < N; i++) {\r\nfor (int j = 0; j < N; j++) {\r\nC[i][j] = 0;\r\nfor (int k = 0; k < N; k++) {\r\nC[i][j] += A[i][k] * B[k][j];\r\n}\r\n}\r\n}",
    "options": [
      "#pragma omp simd",
      "#pragma omp parallel for",
      "#pragma omp task",
      "#pragma omp single",
      "#pragma omp critical"
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 26,
    "module": 5,
    "session": 1,
    "question": "You are working on an application where\r\nyou need to apply a transformation to each element in\r\nan array. The operation is independent for each\r\nelement, making it ideal for SIMD vectorization. The\r\nfollowing code shows the sequential version. Which\r\nOpenMP directive should you use to enable SIMD\r\nparallelism, and what condition must be satisfied for\r\nefficient SIMD execution?\r\nfor (int i = 0; i < N; i++) {\r\narray[i] = array[i] * 2.0;\r\n}",
    "options": [
      "#pragma omp task",
      "#pragma omp simd aligned(array:32)",
      "#pragma omp parallel for",
      "#pragma omp sections",
      "#pragma omp critical"
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 27,
    "module": 5,
    "session": 2,
    "question": "You are implementing a parallel merge sort\r\nusing OpenMP tasks. The following code shows a simplified\r\nversion of the sequential merge sort algorithm. How would\r\nyou parallelize the recursive calls to merge_sort using\r\nOpenMP tasks, ensuring that both halves of the array are\r\nsorted in parallel?\r\nvoid merge_sort(int arr[], int left, int\r\nright) {\r\nif (left < right) {\r\nint mid = (left + right) / 2;\r\nmerge_sort(arr, left, mid);\r\nmerge_sort(arr, mid + 1, right);\r\nmerge(arr, left, mid, right);\r\n}\r\n}",
    "options": [
      "#pragma omp parallel for",
      "#pragma omp task and #pragma omp taskwait",
      "#pragma omp sections",
      "#pragma omp simd",
      "#pragma omp critical"
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 28,
    "module": 5,
    "session": 2,
    "question": "You are implementing a stencil\r\ncomputation over a 2D grid in a heat diffusion\r\nsimulation. Each point in the grid is updated based\r\non its neighbors in the previous time step. The\r\nfollowing code shows a simplified version of the\r\nstencil computation:\r\nWhich OpenMP directive would you use to\r\nparallelize this loop with tasks, allowing finer control\r\nover the granularity of task creation?\r\nfor (int i = 1; i < N-1; i++) {\r\nfor (int j = 1; j < M-1; j++) {\r\ngrid[i][j] = (grid[i-1][j] +\r\ngrid[i+1][j] + grid[i][j-1] +\r\ngrid[i][j+1]) * 0.25;\r\n}\r\n}",
    "options": [
      "#pragma omp parallel for",
      "#pragma omp taskloop with grainsize",
      "#pragma omp simd",
      "#pragma omp sections",
      "#pragma omp critical"
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 29,
    "module": 5,
    "session": 2,
    "question": "You are implementing a parallel\r\nreduction to sum the elements of a large array using\r\nOpenMP. The following code shows a basic parallel\r\nreduction using a critical section. Which OpenMP\r\ndirective should you use to avoid the overhead of a\r\ncritical section and achieve efficient parallel\r\nreduction?\r\nint sum = 0;\r\n#pragma omp parallel for\r\nfor (int i = 0; i < N; i++) {\r\n#pragma omp critical\r\nsum += array[i];\r\n}",
    "options": [
      "#pragma omp task",
      "#pragma omp reduction(+: sum)",
      "#pragma omp simd",
      "#pragma omp barrier",
      "#pragma omp sections"
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 30,
    "module": 5,
    "session": 2,
    "question": "Consider an MPI application where Process 0 needs to directly write data to Process 1's memory using\r\none-sided communication. Which function is responsible for writing the data? Identify the function\r\nthat enables Process 0 to write data into Process 1’s memory without requiring Process 1 to be\r\ninvolved in the communication.\r\n#include <mpi.h>\r\n#include <stdio.h>\r\nint main(int argc, char *argv[]) {\r\nMPI_Init(&argc, &argv);\r\nint rank, size;\r\nMPI_Comm_rank(MPI_COMM_WORLD, &rank);\r\nint data = 100; // Data to be transferred\r\nMPI_Win win;\r\nMPI_Win_create(&data, sizeof(int), sizeof(int), MPI_INFO_NULL,\r\nMPI_COMM_WORLD, &win);\r\nif (rank == 0) {\r\nint new_data = 42;\r\nMPI_Win_fence(0, win);\r\nMPI_Put(&new_data, 1, MPI_INT, 1, 0, 1, MPI_INT, win); // Write\r\nto Process 1\r\nMPI_Win_fence(0, win);\r\n}\r\nMPI_Win_free(&win);\r\nMPI_Finalize();\r\nreturn 0;\r\n}",
    "options": [
      "MPI_Get",
      "MPI_Send",
      "MPI_Put",
      "MPI_Reduce",
      "MPI_Bcast"
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 31,
    "module": 5,
    "session": 2,
    "question": "In iterative applications such as solvers, the same communication pattern is repeated in every iteration.\r\nTo reduce communication overhead, you decide to use persistent communication requests. Complete the\r\ncode below to initialize and use a persistent send request. Which function initializes a persistent send\r\nrequest that can be reused in multiple iterations?\r\n#include <mpi.h>\r\n#include <stdio.h>\r\nint main(int argc, char *argv[]) {\r\nMPI_Init(&argc, &argv);\r\nint rank;\r\nMPI_Comm_rank(MPI_COMM_WORLD, &rank);\r\nint data = 42;\r\nMPI_Request request;\r\n// Initialize a persistent send request\r\nMPI_Send_init(&data, 1, MPI_INT, 1, 0, MPI_COMM_WORLD, &request);\r\n// Iterative communication loop\r\nfor (int i = 0; i < 10; i++) {\r\nMPI_Start(&request); // Start the persistent communication\r\nMPI_Wait(&request, MPI_STATUS_IGNORE); // Wait for completion\r\n}\r\nMPI_Request_free(&request); // Free the request\r\nMPI_Finalize();\r\nreturn 0;\r\n}",
    "options": [
      "MPI_Isend",
      "MPI_Send",
      "MPI_Send_init",
      "MPI_Comm_spawn",
      "MPI_Gather"
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 32,
    "module": 5,
    "session": 2,
    "question": "You are running a simulation where processes frequently need to perform\r\ncollective reductions on large datasets, which becomes a bottleneck. You\r\ndecide to use non-blocking collective operations to allow the processes to\r\ncontinue computation while waiting for the reduction to complete. Which\r\nMPI function allows you to overlap collective reduction operations with\r\ncomputation, and how do you ensure the reduction is completed before\r\nusing the result?\r\nMPI_Request request;\r\nMPI_Ireduce(sendbuf, recvbuf, count, MPI_DOUBLE,\r\nMPI_SUM, 0, MPI_COMM_WORLD, &request);\r\n// Perform other computations while reduction is in\r\nprogress\r\ncompute_step();\r\n// Ensure reduction is completed before using\r\nrecvbuf\r\nMPI_Wait(&request, MPI_STATUS_IGNORE);",
    "options": [
      "MPI_Ireduce and MPI_Wait",
      "MPI_Reduce and MPI_Barrier",
      "MPI_Bcast and MPI_Isend",
      "MPI_Isend and MPI_Irecv",
      "MPI_Gather and MPI_Reduce"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 33,
    "module": 5,
    "session": 2,
    "question": "In an adaptive climate simulation, the\r\ncomputational workload increases drastically in certain\r\nregions as the simulation progresses. You need to allocate\r\nadditional computational resources to those regions\r\ndynamically. Which MPI function is best suited for adding\r\nprocesses at runtime to handle this increased load? Which\r\nof the following functions should you use in MPI to\r\ndynamically add new processes during execution?",
    "options": [
      "MPI_Barrier",
      "MPI_Comm_spawn",
      "MPI_Isend",
      "MPI_Comm_create",
      "MPI_Reduce"
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 34,
    "module": 5,
    "session": 2,
    "question": "Consider an MPI application where Process 0 needs to\r\ndirectly write data to Process 1's memory using one-sided\r\ncommunication. Which function is responsible for writing the data?\r\nIdentify the function that enables Process 0 to write data into Process 1’s\r\nmemory without requiring Process 1 to be involved in the\r\ncommunication.\r\n#include <mpi.h>\r\n#include <stdio.h>\r\nint main(int argc, char *argv[]) {\r\nMPI_Init(&argc, &argv);\r\nint rank, size;\r\nMPI_Comm_rank(MPI_COMM_WORLD, &rank);\r\nint data = 100; // Data to be transferred\r\nMPI_Win win;\r\nMPI_Win_create(&data, sizeof(int), sizeof(int), MPI_INFO_NULL, MPI_COMM_WORLD,\r\n&win);\r\nif (rank == 0) {\r\nint new_data = 42;\r\nMPI_Win_fence(0, win);\r\nMPI_Put(&new_data, 1, MPI_INT, 1, 0, 1, MPI_INT, win); // Write to Process\r\n1 MPI_Win_fence(0, win);\r\n}\r\nMPI_Win_free(&win);\r\nMPI_Finalize();\r\nreturn 0;\r\n}",
    "options": [
      "MPI_Get",
      "MPI_Send",
      "MPI_Put",
      "MPI_Reduce",
      "MPI_Bcast"
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 35,
    "module": 5,
    "session": 2,
    "question": "In a matrix multiplication task, you want to send matrix rows between processes without blocking the\ncomputation. The following code shows an attempt to overlap communication and computation.\nWhich function allows non-blocking communication, allowing the process to continue computation while the data\nis being sent?\n#include <mpi.h>\n#include <stdio.h>\nint main(int argc, char *argv[]) {\nMPI_Init(&argc, &argv);\nint rank, size;\nMPI_Comm_rank(MPI_COMM_WORLD, &rank);\nint buffer[100]; // Data to send\nMPI_Request request;\nif (rank == 0) {\n// Send data to Process 1 without blocking\nMPI_Isend(buffer, 100, MPI_INT, 1, 0, MPI_COMM_WORLD, &request);\nprintf(\"Data sent asynchronously.\\n\");\n// Perform some computation while the data is being transmitted\nfor (int i = 0; i < 1000000; i++) {\n// Simulate computation\n}\n// Wait for the non-blocking send to complete\nMPI_Wait(&request, MPI_STATUS_IGNORE);\n}\nMPI_Finalize();\nreturn 0;\n}",
    "options": [
      "MPI_Send",
      "MPI_Irecv",
      "MPI_Isend",
      "MPI_Put",
      "MPI_Comm_spawn"
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 36,
    "module": 5,
    "session": 2,
    "question": "You are working on a distributed memory application where\r\nProcess 0 needs to retrieve data from Process 1’s memory using one-sided\r\ncommunication. Complete the following code by choosing the correct MPI\r\nfunction to perform this operation. Which function retrieves data from\r\nProcess 1’s memory into Process 0?\r\n#include <mpi.h>\r\n#include <stdio.h>\r\nint main(int argc, char *argv[]) {\r\nMPI_Init(&argc, &argv);\r\nint rank;\r\nMPI_Comm_rank(MPI_COMM_WORLD, &rank);\r\nint data = rank; // Data at each process\r\nMPI_Win win;\r\nMPI_Win_create(&data, sizeof(int), sizeof(int), MPI_INFO_NULL,\r\nMPI_COMM_WORLD, &win);\r\nif (rank == 0) {\r\nint received_data;\r\nMPI_Win_fence(0, win);\r\nMPI_Get(&received_data, 1, MPI_INT, 1, 0, 1, MPI_INT, win); // Get\r\ndata from Process 1\r\nMPI_Win_fence(0, win);\r\nprintf(\"Data received from Process 1: %d\\n\", received_data);\r\n}\r\nMPI_Win_free(&win);\r\nMPI_Finalize();\r\nreturn 0;\r\n}",
    "options": [
      "MPI_Put",
      "MPI_Get",
      "MPI_Isend",
      "MPI_Comm_split",
      "MPI_Irecv"
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 37,
    "module": 5,
    "session": 2,
    "question": "In large-scale simulations, collective communication often becomes a bottleneck. You decide to use non-blocking collective\r\noperations to broadcast data without blocking computations. Complete the code below by selecting the appropriate function. Which MPI\r\nfunction should be used to perform a non-blocking broadcast?\r\n#include <mpi.h>\r\n#include <stdio.h>\r\nint main(int argc, char *argv[]) {\r\nMPI_Init(&argc, &argv);\r\nint rank;\r\nMPI_Comm_rank(MPI_COMM_WORLD, &rank);\r\nint data;\r\nif (rank == 0) {\r\ndata = 42; // Data to broadcast\r\n}\r\nMPI_Request request;\r\nMPI_Ibcast(&data, 1, MPI_INT, 0, MPI_COMM_WORLD, &request); // Non-blocking broadcast\r\n// Perform computation while the broadcast happens\r\nfor (int i = 0; i < 100000; i++) {\r\n// Simulate computation\r\n}\r\nMPI_Wait(&request, MPI_STATUS_IGNORE); // Wait for broadcast to complete\r\nprintf(\"Rank %d received data: %d\\n\", rank, data);\r\nMPI_Finalize();\r\nreturn 0;\r\n}",
    "options": [
      "MPI_Bcast",
      "MPI_Gather",
      "MPI_Ibcast",
      "MPI_Isend",
      "MPI_Wait"
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 38,
    "module": 5,
    "session": 2,
    "question": "After spawning new processes, the parent and child processes\nmust communicate using an intercommunicator. Complete the following code\nto send a message from the parent to the spawned child processes. Which MPI\nfunction is used to send a message from the parent process to the child\nprocesses through the intercommunicator?\n#include <mpi.h>\n#include <stdio.h>\nint main(int argc, char *argv[]) {\nMPI_Init(&argc, &argv);\nint rank;\nMPI_Comm_rank(MPI_COMM_WORLD, &rank);\nif (rank == 0) {\n// Spawn 2 worker processes\nMPI_Comm intercomm;\nMPI_Comm_spawn(\"worker_program\", MPI_ARGV_NULL, 2,\nMPI_INFO_NULL, 0, MPI_COMM_SELF, &intercomm,\nMPI_ERRCODES_IGNORE);\nint msg = 100;\nMPI_Send(&msg, 1, MPI_INT, 0, 0, intercomm); // Send\nmessage to child processes\n}\nMPI_Finalize();\nreturn 0;\n}",
    "options": [
      "MPI_Bcast",
      "MPI_Send",
      "MPI_Isend",
      "MPI_Put",
      "MPI_Recv"
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 39,
    "module": 5,
    "session": 2,
    "question": "You are tasked with optimizing an MPI application\nwhere one process receives data from another process\nasynchronously. Choose the correct function to initiate the non-\nblocking receive operation. Which function allows a process to\nreceive data without blocking until the data is actually available?\n#include <mpi.h>\n#include <stdio.h>\nint main(int argc, char *argv[]) {\nMPI_Init(&argc, &argv);\nint rank;\nMPI_Comm_rank(MPI_COMM_WORLD, &rank);\nint buffer[10]; // Buffer for receiving data\nMPI_Request request;\nif (rank == 1) {\n// Non-blocking receive from process 0\nMPI_Irecv(buffer, 10, MPI_INT, 0, 0, MPI_COMM_WORLD, &request);\nprintf(\"Non-blocking receive initiated.\\n\");\n// Perform some computation\nfor (int i = 0; i < 100000; i++) {\n// Simulate computation\n}\n// Wait for the receive operation to complete\nMPI_Wait(&request, MPI_STATUS_IGNORE);\n}\nMPI_Finalize();\nreturn 0;\n}",
    "options": [
      "MPI_Recv",
      "MPI_Isend",
      "MPI_Irecv",
      "MPI_Win_fence",
      "MPI_Put"
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 40,
    "module": 5,
    "session": 2,
    "question": "In a distributed simulation, you need to update a\r\nshared variable across multiple processes atomically. Choose the\r\ncorrect MPI function to perform this atomic operation using one-\r\nsided communication. Which function should be used to perform\r\natomic updates to a shared variable across processes?\r\n#include <mpi.h>\r\n#include <stdio.h>\r\nint main(int argc, char *argv[]) {\r\nMPI_Init(&argc, &argv);\r\nint rank;\r\nMPI_Comm_rank(MPI_COMM_WORLD, &rank);\r\nint shared_data = 0;\r\nMPI_Win win;\r\nMPI_Win_create(&shared_data, sizeof(int),\r\nsizeof(int), MPI_INFO_NULL, MPI_COMM_WORLD, &win);\r\nif (rank == 1) {\r\nint value_to_add = 10;\r\nMPI_Win_fence(0, win);\r\nMPI_Accumulate(&value_to_add, 1, MPI_INT, 0,\r\n0, 1, MPI_INT, MPI_SUM, win); // Atomic update on\r\nshared variable\r\nMPI_Win_fence(0, win);\r\n}\r\nMPI_Win_free(&win);\r\nMPI_Finalize();\r\nreturn 0;\r\n}",
    "options": [
      "MPI_Put",
      "MPI_Get",
      "MPI_Accumulate",
      "MPI_Send",
      "MPI_Irecv"
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 41,
    "module": 5,
    "session": 2,
    "question": "You are developing a high-performance MPI application\r\nwhere Process 0 needs exclusive access to Process 1's memory for a one-\r\nsided write operation. Complete the code by choosing the correct function\r\nto lock the memory. Which function allows Process 0 to lock Process 1’s\r\nmemory for exclusive access?\r\n#include <mpi.h>\r\n#include <stdio.h>\r\nint main(int argc, char *argv[]) {\r\nMPI_Init(&argc, &argv);\r\nint rank;\r\nMPI_Comm_rank(MPI_COMM_WORLD, &rank);\r\nint shared_data = 100;\r\nMPI_Win win;\r\nMPI_Win_create(&shared_data, sizeof(int), sizeof(int),\r\nMPI_INFO_NULL, MPI_COMM_WORLD, &win);\r\nif (rank == 0) {\r\nint new_data = 42;\r\nMPI_Win_lock(MPI_LOCK_EXCLUSIVE, 1, 0, win); // Lock\r\nProcess 1's memory\r\nMPI_Put(&new_data, 1, MPI_INT, 1, 0, 1, MPI_INT,\r\nwin); // Write to Process 1's memory\r\nMPI_Win_unlock(1, win); // Unlock Process 1's memory\r\n}\r\nMPI_Win_free(&win);\r\nMPI_Finalize();\r\nreturn 0;\r\n}",
    "options": [
      "MPI_Put",
      "MPI_Get",
      "MPI_Win_lock",
      "MPI_Comm_split",
      "MPI_Accumulate"
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 42,
    "module": 5,
    "session": 2,
    "question": "In iterative applications such as solvers, the same communication\r\npattern is repeated in every iteration. To reduce communication overhead, you\r\ndecide to use persistent communication requests. Complete the code below to\r\ninitialize and use a persistent send request. Which function initializes a persistent\r\nsend request that can be reused in multiple iterations?\r\n#include <mpi.h>\r\n#include <stdio.h>\r\nint main(int argc, char *argv[]) {\r\nMPI_Init(&argc, &argv);\r\nint rank;\r\nMPI_Comm_rank(MPI_COMM_WORLD, &rank);\r\nint data = 42;\r\nMPI_Request request;\r\n// Initialize a persistent send request\r\nMPI_Send_init(&data, 1, MPI_INT, 1, 0, MPI_COMM_WORLD, &request);\r\n// Iterative communication loop\r\nfor (int i = 0; i < 10; i++) {\r\nMPI_Start(&request); // Start the persistent communication\r\nMPI_Wait(&request, MPI_STATUS_IGNORE); // Wait for\r\ncompletion\r\n}\r\nMPI_Request_free(&request); // Free the request\r\nMPI_Finalize();\r\nreturn 0;\r\n}",
    "options": [
      "MPI_Isend",
      "MPI_Send",
      "MPI_Send_init",
      "MPI_Comm_spawn",
      "MPI_Gather"
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 43,
    "module": 5,
    "session": 2,
    "question": "You are running a climate simulation where certain regions\r\n(e.g., storms or high-pressure areas) require more computational\r\nresources than others. The simulation should dynamically allocate new\r\nprocesses when these regions become active and release them when the\r\nload decreases. Which MPI function would you use to dynamically allocate\r\nmore processes when the storm regions require additional resources, and\r\nwhy?\r\nint main(int argc, char *argv[]) {\r\nMPI_Init(&argc, &argv);\r\nint rank;\r\nMPI_Comm_rank(MPI_COMM_WORLD, &rank);\r\nif (rank == 0) {\r\nint extra_processes = 4; // Number of\r\nprocesses needed for storm regions\r\nMPI_Comm intercomm;\r\nMPI_Comm_spawn(\"storm_simulation\",\r\nMPI_ARGV_NULL, extra_processes, MPI_INFO_NULL, 0,\r\nMPI_COMM_SELF, &intercomm, MPI_ERRCODES_IGNORE);\r\nprintf(\"Dynamically allocated %d additional\r\nprocesses for storm regions.\\n\", extra_processes);\r\n}\r\nMPI_Finalize();\r\nreturn 0;\r\n}",
    "options": [
      "MPI_Comm_spawn",
      "MPI_Barrier",
      "MPI_Isend",
      "MPI_Comm_split",
      "MPI_Wait"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 44,
    "module": 5,
    "session": 2,
    "question": "You are working on a distributed matrix multiplication program\r\nwhere each process holds part of the matrix. Instead of using traditional two-\r\nsided communication (send/receive), you decide to optimize by using one-sided\r\ncommunication to write the results directly into other processes' memory spaces.\r\nWhich MPI function allows you to directly write the computed results from one\r\nprocess into another process’s memory without their active involvement?\r\nint main(int argc, char *argv[]) {\r\nMPI_Init(&argc, &argv);\r\nint rank;\r\nMPI_Comm_rank(MPI_COMM_WORLD, &rank);\r\nint result = rank * 10; // Result of some\r\ncomputation\r\nMPI_Win win;\r\nMPI_Win_create(&result, sizeof(int), sizeof(int),\r\nMPI_INFO_NULL, MPI_COMM_WORLD, &win);\r\nif (rank == 0) {\r\nint new_value = 42;\r\nMPI_Win_fence(0, win);\r\nMPI_Put(&new_value, 1, MPI_INT, 1, 0, 1, MPI_INT,\r\nwin); // Write result to process 1\r\nMPI_Win_fence(0, win);\r\n}\r\nMPI_Win_free(&win);\r\nMPI_Finalize();\r\nreturn 0;\r\n}",
    "options": [
      "MPI_Send",
      "MPI_Put",
      "MPI_Bcast",
      "MPI_Recv",
      "MPI_Isend"
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 45,
    "module": 5,
    "session": 2,
    "question": "You are developing an ocean circulation model that\r\nfrequently exchanges boundary data between neighbouring\r\nprocesses. The model suffers from delays due to blocking\r\ncommunication. You want to overlap communication with\r\ncomputation to reduce these delays. Which MPI function allows you\r\nto initiate communication without waiting for it to complete,\r\nallowing the process to continue computation while the data is\r\nbeing sent or received?\r\nint boundary_data[100]; // Boundary data to send\r\nMPI_Request request;\r\nMPI_Isend(boundary_data, 100, MPI_INT, neighbor_rank,\r\n0, MPI_COMM_WORLD, &request); // Non-blocking send\r\n// Continue computation while communication happens\r\nperform_computation();\r\n// Ensure that the communication is complete before\r\nusing the data\r\nMPI_Wait(&request, MPI_STATUS_IGNORE);",
    "options": [
      "MPI_Isend",
      "MPI_Send",
      "MPI_Barrier",
      "MPI_Gather",
      "MPI_Comm_split"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 46,
    "module": 5,
    "session": 2,
    "question": "You are building a high-performance computing system\r\nfor processing financial transactions in real time. The load fluctuates\r\nthroughout the day, so you want the system to spawn additional\r\nprocesses dynamically when transaction volume spikes and terminate\r\nthem when the load subsides. Which MPI function should you use to\r\nmanage processes dynamically as the load changes, ensuring optimal\r\nresource usage?\r\nif (current_load > threshold) {\r\nint extra_workers = 5; // Spawn 5 more processes\r\nMPI_Comm intercomm;\r\nMPI_Comm_spawn(\"worker_program\", MPI_ARGV_NULL,\r\nextra_workers, MPI_INFO_NULL, 0, MPI_COMM_SELF,\r\n&intercomm, MPI_ERRCODES_IGNORE);\r\nprintf(\"Spawned %d additional processes to handle\r\nhigh load.\\n\", extra_workers);\r\n}",
    "options": [
      "MPI_Comm_spawn",
      "MPI_Reduce",
      "MPI_Gather",
      "MPI_Wait",
      "MPI_Barrier"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 47,
    "module": 5,
    "session": 2,
    "question": "You are running a large molecular dynamics simulation\r\nwhere multiple processes need to frequently exchange small pieces of\r\ndata. Instead of sending many small messages, you want to aggregate\r\nthese messages into larger packets to reduce communication\r\noverhead. Which MPI technique is most suitable for aggregating small\r\nmessages into larger ones to improve communication efficiency?\r\nstruct data_packet {\r\ndouble velocity;\r\ndouble position;\r\ndouble temperature;\r\n};\r\nstruct data_packet packet;\r\npacket.velocity = compute_velocity();\r\npacket.position = compute_position();\r\npacket.temperature = compute_temperature();\r\n// Send the entire packet as a single message instead of\r\nthree separate messages\r\nMPI_Send(&packet, sizeof(packet), MPI_BYTE,\r\ndestination_rank, tag, MPI_COMM_WORLD);",
    "options": [
      "MPI_Gather",
      "MPI_Reduce",
      "Message Aggregation",
      "MPI_Bcast",
      "MPI_Isend"
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 48,
    "module": 5,
    "session": 2,
    "question": "You are designing a large-scale physics simulation that runs on a\nheterogeneous system with a mix of CPUs and GPUs. The workload is dynamic, and\ndifferent sections of the simulation have varying computational requirements over time.\nYou want to dynamically adjust the computational resources to balance the load\nbetween CPUs and GPUs as efficiently as possible. The spawned processes may need to\ncommunicate across different architectures. Which combination of MPI functions and\nconcepts should you use to dynamically manage the processes and allow cross-\ncommunication between different groups of processes (CPU and GPU)?\nMPI_Comm intercomm_cpu_gpu, intercomm_gpu_cpu;\nif (rank == 0) {\n// Spawning additional processes for GPU computation\nMPI_Comm_spawn(\"gpu_program\", MPI_ARGV_NULL, 4,\nMPI_INFO_NULL, 0, MPI_COMM_SELF, &intercomm_cpu_gpu,\nMPI_ERRCODES_IGNORE);\n// Establishing communication between CPU and GPU processes\nMPI_Comm_connect(port_name, MPI_INFO_NULL, 0,\nMPI_COMM_SELF, &intercomm_gpu_cpu);\n}",
    "options": [
      "MPI_Comm_spawn and MPI_Comm_connect",
      "MPI_Barrier and MPI_Send",
      "MPI_Comm_split and MPI_Comm_accept",
      "MPI_Isend and MPI_Recv",
      "MPI_Gather and MPI_Reduce"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 49,
    "module": 5,
    "session": 2,
    "question": "You are implementing a scientific simulation that uses one-sided\r\ncommunication to update multiple shared variables across processes. Each process can\r\nmodify a set of shared variables, but you want to ensure that only one process can access\r\nthe memory of another process at a time, and you need fine-grained control over the\r\nsynchronization. Which MPI function is used to ensure that exclusive access to a shared\r\nwindow is granted to a single process, and which synchronization method should be used to\r\nmanage this access?\r\nMPI_Win_lock(MPI_LOCK_EXCLUSIVE, target_rank, 0, win); // Lock\r\nwindow for exclusive access\r\nMPI_Put(&data, 1, MPI_INT, target_rank, target_disp, 1, MPI_INT,\r\nwin); // Perform RMA operation\r\nMPI_Win_unlock(target_rank, win); // Unlock window after operation",
    "options": [
      "MPI_Win_lock and MPI_Win_unlock",
      "MPI_Win_fence",
      "MPI_Barrier",
      "MPI_Isend and MPI_Irecv",
      "MPI_Put and MPI_Get"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 50,
    "module": 5,
    "session": 2,
    "question": "You are running a simulation where processes frequently need to\nperform collective reductions on large datasets, which becomes a bottleneck. You\ndecide to use non-blocking collective operations to allow the processes to\ncontinue computation while waiting for the reduction to complete. Which MPI\nfunction allows you to overlap collective reduction operations with computation,\nand how do you ensure the reduction is completed before using the result?\nMPI_Request request;\nMPI_Ireduce(sendbuf, recvbuf, count, MPI_DOUBLE, MPI_SUM, 0,\nMPI_COMM_WORLD, &request);\n// Perform other computations while reduction is in progress\ncompute_step();\n// Ensure reduction is completed before using recvbuf\nMPI_Wait(&request, MPI_STATUS_IGNORE);",
    "options": [
      "MPI_Ireduce and MPI_Wait",
      "MPI_Reduce and MPI_Barrier",
      "MPI_Bcast and MPI_Isend",
      "MPI_Isend and MPI_Irecv",
      "MPI_Gather and MPI_Reduce"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 51,
    "module": 5,
    "session": 2,
    "question": "In a large-scale 3D CFD (Computational Fluid Dynamics) simulation, neighboring\r\nprocesses need to frequently exchange ghost cell data. You want to optimize this by using one-\r\nsided communication to directly write the updated boundary data into each neighboring process’s\r\nmemory. Which combination of MPI functions should you use to write boundary data into\r\nneighboring processes’ memory regions while ensuring synchronization?\r\nint ghost_data[100]; // Data to update ghost cells\r\nMPI_Win win;\r\nMPI_Win_create(ghost_data, sizeof(ghost_data), sizeof(int),\r\nMPI_INFO_NULL, MPI_COMM_WORLD, &win);\r\nMPI_Win_fence(0, win); // Start RMA epoch\r\nMPI_Put(&updated_data, 100, MPI_INT, neighbor_rank, 0, 100, MPI_INT,\r\nwin); // Write to neighbor's memory\r\nMPI_Win_fence(0, win); // End RMA epoch to synchronize",
    "options": [
      "MPI_Put and MPI_Win_fence",
      "MPI_Send and MPI_Recv",
      "MPI_Isend and MPI_Irecv",
      "MPI_Barrier and MPI_Gather",
      "MPI_Get and MPI_Wait"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 52,
    "module": 5,
    "session": 2,
    "question": "In a real-time high-performance computing\r\nenvironment, some processes might fail due to hardware issues.\r\nYou are tasked with designing a system that can detect process\r\nfailures and spawn new processes dynamically to replace the\r\nfailed ones. This ensures fault tolerance in a large distributed MPI\r\napplication. Which MPI techniques would you employ to detect\r\nthe failure of a process and dynamically spawn replacement\r\nprocesses during execution?\r\nint err_class;\r\nMPI_Comm intercomm;\r\nif (MPI_Comm_spawn(\"replacement_program\", MPI_ARGV_NULL, 1,\r\nMPI_INFO_NULL, 0, MPI_COMM_SELF, &intercomm,\r\nMPI_ERRCODES_IGNORE) != MPI_SUCCESS) {\r\nMPI_Error_class(err_class);\r\nif (err_class == MPI_ERR_COMM) {\r\nprintf(\"Error: Failed process detected, replacing\r\nit.\\n\");\r\n}\r\n}",
    "options": [
      "MPI_Comm_spawn, MPI_Error_class",
      "MPI_Comm_disconnect and MPI_Barrier",
      "MPI_Gather and MPI_Reduce",
      "MPI_Comm_split and MPI_Comm_connect",
      "MPI_Send and MPI_Recv"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 53,
    "module": 5,
    "session": 3,
    "question": "You are managing a large-scale scientific simulation that models fluid\r\ndynamics, requiring both distributed memory and shared memory\r\nparallelism to scale across a supercomputer. Initially, your system uses\r\nMPI (Message Passing Interface) to distribute the workload across\r\nmultiple nodes. However, performance improvements have begun to\r\ntaper off, particularly on nodes with many cores and available GPUs.\r\nWhy might a hybrid computing approach using MPI + OpenMP + GPU\r\nbe a better solution to further improve performance, and what\r\nspecific advantages does it offer for this HPC task?",
    "options": [
      "MPI alone cannot fully utilize the computational power of multi-\r\ncore processors and GPUs, but OpenMP can manage shared-\r\nmemory parallelism on each node and GPUs can offload compute-\r\nheavy tasks.",
      "MPI is not suitable for parallel computing, while OpenMP and\r\nGPUs are inherently better at distributing tasks across multiple\r\nnodes.",
      "OpenMP is designed for heterogeneous computing, and adding\r\nMPI allows more effective task distribution across different GPUs.",
      "Using MPI to manage inter-node communication and OpenMP for\r\nparallelism inside each CPU core increases communication\r\noverhead, making it less efficient than using only GPUs.",
      "Hybrid computing only improves energy efficiency, not\r\nperformance, so it’s only useful for reducing power consumption on\r\nlarge clusters."
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 54,
    "module": 5,
    "session": 3,
    "question": "In a hybrid MPI+OpenMP application designed for a\r\nmulti-node HPC system, which of the following best\r\ndescribes the complementary roles of MPI and OpenMP?",
    "options": [
      "MPI manages distributed memory parallelism across\r\nnodes, and OpenMP handles shared memory parallelism\r\nwithin each node.",
      "MPI handles intra-node parallelism using threads,\r\nwhile OpenMP manages inter-node communication.",
      "Both MPI and OpenMP are used interchangeably for\r\ninter-node communication.",
      "OpenMP is solely responsible for all parallelism,\r\nrendering MPI unnecessary in a hybrid model.",
      "MPI is used only for GPU acceleration, while OpenMP\r\nhandles CPU computations."
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 55,
    "module": 5,
    "session": 3,
    "question": "Which of the following is a primary advantage of using\r\nCUDA-aware MPI in MPI+GPU hybrid applications?",
    "options": [
      "It allows MPI to handle communication exclusively\r\nthrough CPU memory, simplifying the programming model.",
      "It enables direct data transfers between GPU memories\r\nacross different nodes, bypassing the CPU.",
      "It automatically balances the load between MPI\r\nprocesses and OpenMP threads without manual tuning.",
      "It eliminates the need for CUDA streams by managing all\r\nGPU operations internally.",
      "It converts all double-precision computations to single-\r\nprecision to enhance performance."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 56,
    "module": 5,
    "session": 3,
    "question": "In the context of minimizing communication overhead in\r\nMPI+OpenMP+GPU hybrid applications, which of the following\r\nstrategies is most effective?",
    "options": [
      "Using blocking MPI calls to ensure data consistency before\r\ncomputation.",
      "Performing all computations on the CPU to avoid GPU-related\r\ncommunication delays.",
      "Overlapping communication and computation using non-\r\nblocking MPI calls and CUDA streams.",
      "Increasing the number of MPI processes per node to distribute\r\nthe communication load.",
      "Using only OpenMP for all parallelism, eliminating the need for\r\nMPI communication."
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 57,
    "module": 5,
    "session": 3,
    "question": "In a hybrid MPI+OpenMP application designed for a multi-\r\nnode HPC system, which of the following best describes\r\nthe complementary roles of MPI and OpenMP?",
    "options": [
      "MPI handles intra-node parallelism using threads, while\r\nOpenMP manages inter-node communication.",
      "MPI manages distributed memory parallelism across\r\nnodes, and OpenMP handles shared memory parallelism\r\nwithin each node.",
      "Both MPI and OpenMP are used interchangeably for\r\ninter-node communication.",
      "OpenMP is solely responsible for all parallelism,\r\nrendering MPI unnecessary in a hybrid model.",
      "MPI is used only for GPU acceleration, while OpenMP\r\nhandles CPU computations."
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 58,
    "module": 5,
    "session": 3,
    "question": "Consider the following code snippet from a hybrid\nMPI+OpenMP+CUDA application used for matrix multiplication:\n#include <mpi.h>\n#include <omp.h>\n#include <cuda_runtime.h>\n#include <iostream>\n__global__ void gpu_matrix_mult(double *A, double *B, double *C, int N) {\nint row = blockIdx.y * blockDim.y + threadIdx.y;\nint col = blockIdx.x * blockDim.x + threadIdx.x;\nif (row < N && col < N) {\ndouble sum = 0;\nfor (int i = 0; i < N; ++i) {\nsum += A[row * N + i] * B[i * N + col];\n}\nC[row * N + col] = sum;\n}\n}\nint main(int argc, char *argv[]) {\nMPI_Init(&argc, &argv);\nint world_size, rank;\nMPI_Comm_size(MPI_COMM_WORLD, &world_size);\nMPI_Comm_rank(MPI_COMM_WORLD, &rank);\nint N = 1024; // Matrix size\ndouble *A, *B, *C;\n// Allocate memory for matrices\nA = (double*)malloc(N * N * sizeof(double));\nB = (double*)malloc(N * N * sizeof(double));\nC = (double*)malloc(N * N * sizeof(double));\n// Initialize matrices with OpenMP\n#pragma omp parallel for\nfor (int i = 0; i < N * N; i++) {\nA[i] = rand() / double(RAND_MAX);\nB[i] = rand() / double(RAND_MAX);\n}\n// CUDA kernel configuration\r\ndim3 threadsPerBlock(16, 16);\r\ndim3 blocksPerGrid((N + threadsPerBlock.x - 1) /\r\nthreadsPerBlock.x,\r\n(N + threadsPerBlock.y - 1) /\r\nthreadsPerBlock.y);\r\n// Allocate device memory\r\ndouble *d_A, *d_B, *d_C;\r\ncudaMalloc(&d_A, N * N * sizeof(double));\r\ncudaMalloc(&d_B, N * N * sizeof(double));\r\ncudaMalloc(&d_C, N * N * sizeof(double));\r\n// Copy data to GPU\r\ncudaMemcpy(d_A, A, N * N * sizeof(double),\r\ncudaMemcpyHostToDevice);\r\ncudaMemcpy(d_B, B, N * N * sizeof(double),\r\ncudaMemcpyHostToDevice);\r\n// Launch GPU kernel\r\ngpu_matrix_mult<<<blocksPerGrid,\r\nthreadsPerBlock>>>(d_A, d_B, d_C, N); \r\n// Copy result back to host\r\ncudaMemcpy(C, d_C, N * N * sizeof(double), cudaMemcpyDeviceToHost);\r\n// Finalize MPI\r\nMPI_Finalize();\r\n// Free memory\r\nfree(A); free(B); free(C);\r\ncudaFree(d_A); cudaFree(d_B); cudaFree(d_C);\r\nreturn 0;\r\n}\r\n\nWhich of the following statements is incorrect regarding the integration of MPI,\r\nOpenMP, and CUDA in this code?",
    "options": [
      "MPI is initialized to handle inter-node communication, although it is not\r\nexplicitly used in the provided snippet.",
      "OpenMP parallelizes the initialization of matrices A and B across multiple CPU\r\ncores.",
      "CUDA is used to offload the matrix multiplication operation to the GPU for\r\nacceleration.",
      "The code ensures that each MPI process uses a separate GPU by assigning\r\ndevice_id based on the process rank.",
      "Memory allocated on the GPU is copied back to the host after the CUDA kernel\r\nexecution."
    ],
    "correctAnswer": [
      3
    ],
    "multipleCorrect": false
  },
  {
    "id": 59,
    "module": 5,
    "session": 3,
    "question": "In the context of minimizing communication overhead in\r\nMPI+OpenMP+GPU hybrid applications, which of the\r\nfollowing strategies is most effective?\r\nOptions:",
    "options": [
      "Using blocking MPI calls to ensure data consistency\r\nbefore computation.",
      "Performing all computations on the CPU to avoid GPU-\r\nrelated communication delays.",
      "Overlapping communication and computation using\r\nnon-blocking MPI calls and CUDA streams.",
      "Increasing the number of MPI processes per node to\r\ndistribute the communication load.",
      "Using only OpenMP for all parallelism, eliminating the\r\nneed for MPI communication."
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 60,
    "module": 5,
    "session": 3,
    "question": "Which of the following is a primary advantage of using CUDA-\naware MPI in MPI+GPU hybrid applications?",
    "options": [
      "It allows MPI to handle communication exclusively through\nCPU memory, simplifying the programming model.",
      "It enables direct data transfers between GPU memories across\ndifferent nodes, bypassing the CPU.",
      "It automatically balances the load between MPI processes and\nOpenMP threads without manual tuning.",
      "It eliminates the need for CUDA streams by managing all GPU\noperations internally.",
      "It converts all double-precision computations to single-\nprecision to enhance performance."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 61,
    "module": 5,
    "session": 3,
    "question": "In the provided TensorFlow and Horovod code example for\nmixed precision training, what is the main purpose of\nsetting the mixed precision policy to 'mixed_float16'?",
    "options": [
      "To ensure all computations are performed in single-\nprecision (FP32) for maximum accuracy.",
      "To enable the model to use half-precision (FP16) for\nmost operations while maintaining FP32 for critical\naccumulations, enhancing computational speed and\nreducing memory usage.",
      "To convert all floating-point operations to integer\noperations for better compatibility with MPI.",
      "To allow MPI to handle communication between nodes\nusing mixed precision data types.",
      "To disable GPU acceleration and perform all\ncomputations on the CPU."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 62,
    "module": 5,
    "session": 3,
    "question": "In a hybrid MPI+OpenMP application where\r\nsome MPI processes handle more\r\ncomputationally intensive tasks than others,\r\nwhich strategy is most effective in achieving load\r\nbalancing?",
    "options": [
      "Use static scheduling in OpenMP to assign\r\nfixed chunks of work to threads.",
      "Increase the number of MPI processes to\r\ndistribute the workload evenly.",
      "Implement dynamic scheduling in OpenMP to\r\nallow threads to take on additional work as they\r\nbecome available.",
      "Reduce the number of OpenMP threads to\r\nmatch the least loaded MPI process.",
      "Disable OpenMP parallelism and rely solely on\r\nMPI for load distribution."
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 63,
    "module": 5,
    "session": 3,
    "question": "Why is memory affinity important in NUMA (Non-\r\nUniform Memory Access) architectures when developing\r\nhybrid MPI+OpenMP applications?",
    "options": [
      "It ensures that all MPI processes share the same\r\nmemory space.",
      "It minimizes the latency by allocating memory close to\r\nthe CPU cores that access it.",
      "It allows GPUs to directly access all memory regions\r\nwithout data transfer.",
      "It simplifies the programming model by treating all\r\nmemory as uniform.",
      "It enables automatic load balancing across different\r\nnodes."
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 64,
    "module": 5,
    "session": 3,
    "question": "You are working on optimizing a large-scale weather simulation using the\r\nWeather Research and Forecasting (WRF) model. The simulation domain is\r\ndivided among multiple MPI processes, each running on separate nodes.\r\nHowever, some regions of the simulation require more computational resources\r\ndue to complex atmospheric phenomena, leading to uneven workloads across\r\nMPI processes. As a result, some MPI processes finish their tasks earlier and\r\nremain idle while others are still processing. Which strategy would best address\r\nthe uneven workloads in this hybrid MPI+OpenMP weather simulation to improve\r\noverall performance?",
    "options": [
      "Increase the number of MPI processes to ensure each process handles fewer\r\ngrid points.",
      "Implement dynamic scheduling in OpenMP to allow threads to take on\r\nadditional tasks as they become available.",
      "Use static scheduling in OpenMP to assign fixed chunks of work to each thread\r\nwithin an MPI process.",
      "Assign GPUs to only the MPI processes with the highest computational load.",
      "Disable OpenMP parallelism and rely solely on MPI to manage all parallelism."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 65,
    "module": 5,
    "session": 3,
    "question": "You are developing a molecular dynamics simulation using\r\nLAMMPS on a high-performance computing (HPC) cluster. The\r\nsimulation involves frequent communication of particle data\r\nbetween nodes, resulting in high communication latency that\r\nslows down the overall simulation. Which technique would most\r\neffectively reduce the communication latency in your\r\nMPI+OpenMP+GPU molecular dynamics simulation?",
    "options": [
      "Switching from CUDA to OpenCL for GPU programming.",
      "Using CUDA-aware MPI to enable direct GPU-to-GPU data\r\ntransfers across nodes.",
      "Increasing the number of OpenMP threads per MPI process to\r\nhandle more computations locally.",
      "Implementing blocking MPI communication to ensure data\r\nconsistency before proceeding.",
      "Disabling GPU acceleration to rely solely on CPU computations,\r\nreducing communication dependencies."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 66,
    "module": 5,
    "session": 3,
    "question": "You are training a large-scale deep learning model using TensorFlow\r\nand Horovod on an HPC system with multiple GPUs. To accelerate\r\ntraining and reduce memory usage, you decide to use mixed precision\r\narithmetic. What is the main benefit of setting the mixed precision\r\npolicy to 'mixed_float16' in your TensorFlow and Horovod setup?",
    "options": [
      "It ensures all computations are performed in single-precision\r\n(FP32) for maximum accuracy.",
      "It allows the model to use half-precision (FP16) for most operations\r\nwhile maintaining FP32 for critical accumulations, enhancing speed\r\nand reducing memory usage.",
      "It converts all floating-point operations to integer operations to\r\nincrease compatibility with MPI.",
      "It disables GPU acceleration and forces all computations to run on\r\nthe CPU for better precision.",
      "It automatically balances the workload between CPUs and GPUs\r\nwithout manual intervention."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 67,
    "module": 5,
    "session": 3,
    "question": "You have developed a hybrid MPI+OpenMP+GPU application for\r\nsimulating fluid dynamics. After running the simulation, you notice\r\nthat the GPU utilization is lower than expected, and the overall\r\nexecution time is longer than anticipated. You decide to use\r\nprofiling tools to identify performance bottlenecks. Which profiling\r\ntool would be best suited to analyze both GPU performance and\r\nMPI communication patterns in your hybrid application, and why?",
    "options": [
      "gprof, because it provides detailed CPU performance metrics.",
      "Valgrind, because it detects memory leaks and errors.",
      "NVIDIA Nsight Systems, because it offers comprehensive\r\nprofiling for GPU operations and can also capture MPI\r\ncommunication timelines.",
      "Intel VTune Profiler, because it exclusively focuses on CPU\r\nthread performance.",
      "MPI_P, because it specializes in profiling MPI communication\r\nonly."
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 68,
    "module": 5,
    "session": 3,
    "question": "You are enhancing a hybrid MPI+OpenMP+GPU application that simulates 2D\r\nheat conduction over a large grid. The current implementation performs MPI\r\ncommunication to exchange boundary data between nodes and then\r\nupdates the temperature grid on the GPU. However, this sequential approach\r\nleads to idle GPU time while waiting for communication to complete. How\r\ncan you modify your application to overlap communication and computation,\r\nthereby improving GPU utilization and overall performance?",
    "options": [
      "Perform all MPI communication before any GPU computations begin.",
      "Use blocking MPI calls to ensure that all communication is complete before\r\nstarting GPU updates.",
      "Initiate non-blocking MPI communication (e.g., MPI_Isend, MPI_Irecv) and\r\nstart GPU computations on interior grid points while boundary data is being\r\nexchanged.",
      "Disable MPI communication and perform all updates locally on each\r\nnode’s GPU.",
      "Increase the number of MPI processes to distribute the communication\r\nload across more GPUs."
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 69,
    "module": 5,
    "session": 3,
    "question": "You are optimizing a hybrid MPI+OpenMP+GPU application used for fluid dynamics\r\nsimulations. While profiling the application, you observe that the CPU threads managed\r\nby OpenMP are not fully utilizing all available cores, leading to suboptimal performance.\r\nWhich profiling tool would you choose to specifically analyse the performance and\r\nutilization of OpenMP threads, and what feature does it offer to help improve thread\r\nefficiency?",
    "options": [
      "NVIDIA Nsight Systems, because it provides detailed GPU memory usage reports.",
      "Intel VTune Profiler, because it offers insights into OpenMP thread performance,\r\nincluding load imbalance and synchronization overhead.",
      "Valgrind, because it detects threading-related memory errors in OpenMP regions.",
      "gprof, because it profiles OpenMP thread execution times.",
      "MPI_P, because it specializes in profiling OpenMP threads within MPI processes."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 70,
    "module": 5,
    "session": 3,
    "question": "In CUDA programming, how do CUDA streams facilitate the\r\noverlapping of data transfers and computations in a hybrid\r\nMPI+OpenMP+GPU application?",
    "options": [
      "By ensuring that all GPU operations are executed sequentially.",
      "By allowing multiple kernels to execute on the GPU\r\nsimultaneously, independent of data transfers.",
      "By queuing data transfer and computation tasks into separate\r\nstreams that can run concurrently.",
      "By automatically managing memory allocation between CPU and\r\nGPU.",
      "By increasing the clock speed of the GPU to handle more tasks."
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 71,
    "module": 5,
    "session": 3,
    "question": "What is the primary advantage of using hierarchical\r\ncommunication strategies in MPI+OpenMP hybrid models?",
    "options": [
      "They eliminate the need for OpenMP within nodes.",
      "They allow communication to be handled exclusively by the\r\nGPU.",
      "They first perform communication within nodes using shared\r\nmemory, then between nodes using MPI, reducing inter-node\r\ncommunication volume.",
      "They prioritize CPU computations over communication tasks.",
      "They simplify the programming model by using a single\r\ncommunication layer."
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 72,
    "module": 5,
    "session": 3,
    "question": "In a system with 16 CPU cores and 2 GPUs per node, what is an\r\noptimal configuration to avoid thread oversubscription in an\r\nMPI+OpenMP+GPU hybrid application?",
    "options": [
      "Launch 16 MPI processes with 1 OpenMP thread each.",
      "Launch 2 MPI processes, each with 8 OpenMP threads, and\r\nassign one GPU per MPI process.",
      "Launch 1 MPI process with 16 OpenMP threads and assign\r\nboth GPUs to this process.",
      "Launch 4 MPI processes with 4 OpenMP threads each and\r\nassign both GPUs to each process.",
      "Launch 32 MPI processes with 1 OpenMP thread each and\r\nassign one GPU to every 2 MPI processes."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 73,
    "module": 5,
    "session": 3,
    "question": "Which of the following practices enhances data locality in hybrid\nMPI+OpenMP+GPU applications, thereby improving\nperformance?",
    "options": [
      "Allocating all data in global memory accessible by all threads\nand processes.",
      "Reordering data structures to align with cache lines and using\nshared memory on the GPU.",
      "Increasing the number of MPI processes regardless of the data\ndistribution.",
      "Using random memory allocation to distribute data\nunpredictably across memory regions.",
      "Frequent data transfers between CPU and GPU to ensure data\nfreshness."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 74,
    "module": 5,
    "session": 3,
    "question": "You are developing a hybrid MPI+OpenMP application for a\r\nfluid dynamics simulation where different regions of the\r\nsimulation domain have varying computational loads. Which\r\nof the following strategies would best address the load\r\nbalancing challenge?",
    "options": [
      "Use static scheduling in OpenMP and fixed domain\r\ndecomposition in MPI.",
      "Implement dynamic scheduling in OpenMP and use a\r\ngraph-partitioning tool like Metis for MPI domain\r\ndecomposition.",
      "Increase the number of MPI processes until each has only\r\none OpenMP thread.",
      "Disable OpenMP and rely solely on MPI for all parallelism.",
      "Use a single MPI process with maximum OpenMP threads\r\nto handle all regions."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 75,
    "module": 5,
    "session": 3,
    "question": "In the context of hierarchical parallelism in hybrid\r\ncomputing, which layer is primarily responsible for\r\nmanaging multi-threading within each node?",
    "options": [
      "MPI",
      "OpenMP",
      "CUDA",
      "Operating System",
      "Compiler"
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 76,
    "module": 5,
    "session": 3,
    "question": "Which practice most effectively minimizes data transfers between\nCPU and GPU in hybrid MPI+OpenMP+GPU applications?",
    "options": [
      "Frequent synchronization between CPU and GPU after each\ncomputation step.",
      "Keeping data on the GPU as much as possible and performing\nmultiple computations before transferring results back to the CPU.",
      "Using large, unaligned memory buffers to store data.",
      "Transferring data back to the CPU after every single kernel\nexecution.",
      "Allocating separate memory spaces for CPU and GPU without\nsharing data."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 77,
    "module": 5,
    "session": 3,
    "question": "How do profiling tools like NVIDIA Nsight Systems and\r\nIntel VTune Profiler contribute to the optimization of\r\nhybrid MPI+OpenMP+GPU applications?",
    "options": [
      "They automatically parallelize serial code without\r\ndeveloper intervention.",
      "They identify performance bottlenecks in\r\ncomputation and communication, enabling targeted\r\noptimizations.",
      "They replace the need for MPI and OpenMP by\r\nproviding their own parallel frameworks.",
      "They enforce thread safety and prevent race\r\nconditions in OpenMP regions.",
      "They convert CUDA code to OpenMP for better CPU\r\nutilization."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 78,
    "module": 5,
    "session": 3,
    "question": "Given the following MPI+CUDA code snippet, what is the purpose\r\nof using cudaMemcpyAsync in combination with MPI_Isend?\r\n// Initiate a non-blocking send from GPU to another node\r\nMPI_Isend(gpu_buffer, count, MPI_FLOAT, dest, tag,\r\nMPI_COMM_WORLD, &request);\r\n// Continue computation while data is being transferred\r\ncudaMemcpyAsync(destination, gpu_buffer, size,\r\ncudaMemcpyDeviceToDevice, stream);\r\n// Wait for MPI communication to complete\r\nMPI_Wait(&request, MPI_STATUS_IGNORE);",
    "options": [
      "To ensure that data is fully copied before initiating MPI communication.",
      "To overlap data transfer and computation, thereby reducing idle time\r\nand improving performance.",
      "To convert GPU data to CPU data before sending.",
      "To serialize data transfers to maintain data consistency.",
      "To disable GPU acceleration during communication."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 79,
    "module": 5,
    "session": 3,
    "question": "In the case study of LAMMPS (Large-scale\nAtomic/Molecular Massively Parallel\nSimulator), how does hybrid MPI+GPU\nacceleration improve simulation performance?",
    "options": [
      "By replacing MPI with GPU communication protocols.",
      "By using MPI to handle inter-node communication\nand GPUs to accelerate force calculations and velocity integration.",
      "By running all computations on the GPU and using\nMPI only for initial setup.",
      "By using MPI to offload data storage to GPUs, freeing CPU memory.",
      "By eliminating the need for OpenMP threading within nodes."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 80,
    "module": 5,
    "session": 3,
    "question": "What is the main advantage of using mixed precision\r\narithmetic (e.g., FP16 and FP32) in MPI+GPU\r\nenvironments for scientific computations?",
    "options": [
      "It increases the accuracy of all calculations compared to\r\nusing FP32 alone.",
      "It reduces memory usage and accelerates computations\r\nby leveraging GPU hardware optimized for lower precision\r\noperations.",
      "It simplifies the programming model by eliminating the\r\nneed for data type conversions.",
      "It allows MPI to communicate data without considering\r\nprecision.",
      "It ensures that all data remains in GPU memory, avoiding\r\nCPU-GPU transfers."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 81,
    "module": 5,
    "session": 3,
    "question": "Why is thread affinity important in hybrid\r\nMPI+OpenMP applications, and how can it be\r\nachieved?",
    "options": [
      "Thread affinity is not important; threads can run on\r\nany available core without impact on performance.",
      "Thread affinity ensures that OpenMP threads are\r\nevenly distributed across all nodes in the MPI\r\nenvironment.",
      "Thread affinity binds OpenMP threads to specific\r\nCPU cores, reducing cache misses and improving\r\nmemory access patterns.",
      "Thread affinity allows MPI processes to migrate\r\nbetween GPU devices dynamically.",
      "Thread affinity is used to allocate memory\r\nexclusively to specific MPI processes."
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 82,
    "module": 5,
    "session": 3,
    "question": "In the following MPI+OpenMP+GPU code snippet, what is the\r\npurpose of initiating non-blocking MPI communication before\r\nupdating the interior points?\r\n// Start non-blocking communication\r\nMPI_Isend(...);\r\nMPI_Irecv(...);\r\n// Compute interior points (excluding boundaries)\r\nupdate_interior();\r\n// Wait for communication to complete\r\nMPI_Waitall(...);\r\n// Compute boundary points\r\nupdate_boundaries();",
    "options": [
      "To ensure that boundary data is updated before interior points\r\nare processed.",
      "To allow communication of boundary data to occur\r\nconcurrently with the computation of interior points, thereby\r\noverlapping communication and computation.",
      "To prevent any computation from starting until all\r\ncommunication is complete.",
      "To prioritize communication tasks over computation tasks.",
      "To serialize the communication and computation steps for\r\nbetter data consistency."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 83,
    "module": 5,
    "session": 3,
    "question": "In a dynamic load balancing scenario within an\r\nMPI+OpenMP+GPU application, how does Horovod\r\nhelp in balancing the workload across multiple GPUs\r\nand CPU threads?",
    "options": [
      "By statically assigning fixed workloads to each GPU and\r\nCPU thread at the start of the application.",
      "By dynamically assigning tasks such as batch processing\r\nto GPUs and CPU threads based on their current load,\r\nensuring no device remains underutilized.",
      "By limiting the number of MPI processes to match the\r\nnumber of GPUs available.",
      "By converting all GPU operations to CPU operations\r\nwhen a GPU is overloaded.",
      "By using OpenMP to handle all task assignments, leaving\r\nGPUs to perform only fixed computations."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 84,
    "module": 5,
    "session": 3,
    "question": "In a hierarchical communication strategy for a\r\nweather simulation using MPI+OpenMP, why is a\r\nlocal reduction using OpenMP performed before an\r\nMPI_Allreduce operation?",
    "options": [
      "To ensure that all threads within a node synchronize\r\nbefore communicating with other nodes.",
      "To aggregate results within each node first, thereby\r\nreducing the total amount of data that needs to be\r\ncommunicated between nodes during the MPI_Allreduce.",
      "To offload the reduction computation entirely to the\r\nCPU, avoiding GPU usage.",
      "To enable each thread to independently perform the\r\nMPI_Allreduce operation.",
      "To convert floating-point results to integer before\r\ncommunication."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 85,
    "module": 5,
    "session": 3,
    "question": "In optimizing a CUDA kernel for a hybrid\r\nMPI+OpenMP+GPU application, which of the\r\nfollowing practices most effectively improves\r\nmemory access efficiency on the GPU?",
    "options": [
      "Using global memory for all data accesses without\r\nutilizing shared memory.",
      "Aligning data structures to ensure coalesced memory\r\naccesses and utilizing shared memory for frequently\r\naccessed data.",
      "Increasing the number of threads per block beyond\r\nthe GPU's maximum capability.",
      "Using separate memory spaces for each thread to\r\navoid shared data.",
      "Running the kernel in a single CUDA stream to ensure\r\nserial execution."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 86,
    "module": 5,
    "session": 3,
    "question": "In a hybrid MPI+OpenMP+GPU application,\nwhy is it important to allocate memory close to\nthe threads or cores that will access it,\nespecially in NUMA architectures?",
    "options": [
      "To ensure that all threads have equal access to all\nmemory regions.",
      "To prevent any thread from accessing memory,\nincreasing security.",
      "To minimize memory access latency and improve\ncache performance by keeping data near the processing\nunits.",
      "To allow MPI to handle memory distribution\nautomatically without developer intervention.",
      "To ensure that GPU memory is used exclusively by\nMPI processes."
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 87,
    "module": 5,
    "session": 3,
    "question": "How does Amdahl's Law affect the scalability\r\nof hybrid MPI+OpenMP+GPU applications?",
    "options": [
      "It states that the scalability is unlimited as more\r\nresources are added.",
      "It highlights that the overall speedup is limited by the\r\nserial portion of the application, regardless of how many\r\nparallel resources are added.",
      "It suggests that adding more GPUs will always linearly\r\nincrease performance.",
      "It indicates that memory bandwidth is the only\r\nlimiting factor in scalability.",
      "It explains that hybrid applications do not suffer from\r\nany scalability issues."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 88,
    "module": 5,
    "session": 3,
    "question": "Which of the following practices reduces\r\ncommunication overhead in hybrid\r\nMPI+OpenMP+GPU applications?",
    "options": [
      "Using small, frequent MPI messages instead of\r\nlarger, batched messages.",
      "Implementing non-blocking MPI calls and\r\noverlapping communication with computation.",
      "Increasing the frequency of boundary data\r\nexchanges between MPI processes.",
      "Using synchronous MPI communication to\r\nensure data consistency before proceeding.",
      "Avoiding the use of CUDA streams to simplify\r\ndata transfers."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 89,
    "module": 5,
    "session": 3,
    "question": "What is the benefit of using shared memory\r\nwithin a CUDA kernel in a hybrid\r\nMPI+OpenMP+GPU application?",
    "options": [
      "It allows all threads in the block to access the\r\nsame data with lower latency compared to global\r\nmemory.",
      "It increases the available memory bandwidth by\r\nduplicating data across multiple blocks.",
      "It enables direct communication between MPI\r\nprocesses without using GPU memory.",
      "It simplifies the CUDA kernel code by removing the\r\nneed for memory allocations.",
      "It allows the GPU to access host memory directly\r\nwithout data transfers."
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 90,
    "module": 5,
    "session": 3,
    "question": "In a hybrid MPI+OpenMP+GPU application,\r\nwhat is the primary role of OpenMP?",
    "options": [
      "To manage inter-node communication between MPI\r\nprocesses.",
      "To parallelize tasks across multiple CPU cores within\r\neach MPI process, leveraging shared memory.",
      "To offload compute-intensive tasks to the GPU.",
      "To allocate memory on the GPU for MPI processes.",
      "To replace MPI for handling all parallelism in the\r\napplication."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 91,
    "module": 5,
    "session": 3,
    "question": "Which of the following is a best practice when\r\nusing CUDA-aware MPI in hybrid\r\nMPI+OpenMP+GPU applications?",
    "options": [
      "Always copy GPU data to CPU memory before\r\nsending it with MPI.",
      "Ensure that CUDA-aware MPI libraries are\r\nsupported and properly configured on the cluster.",
      "Use only blocking MPI calls to maintain data\r\nconsistency.",
      "Avoid using multiple GPUs to prevent memory\r\ncontention.",
      "Disable OpenMP to simplify GPU\r\ncommunication."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 92,
    "module": 5,
    "session": 3,
    "question": "What is a limitation of hybrid\r\nMPI+OpenMP+GPU applications as\r\nhighlighted in the provided content?",
    "options": [
      "They cannot scale beyond a single node.",
      "Communication overhead can become a\r\nbottleneck at high process counts.",
      "They do not benefit from GPU acceleration.",
      "OpenMP cannot be used alongside MPI in\r\nhybrid models.",
      "MPI cannot handle inter-node\r\ncommunication in the presence of GPUs."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 93,
    "module": 5,
    "session": 4,
    "question": "In a hybrid MPI+OpenMP+GPU application,\r\nwhich of the following code modifications\r\nwould best implement dynamic load balancing\r\nfor uneven workloads?",
    "options": [
      "Using #pragma omp parallel for schedule(static) for\r\nall loops.",
      "Using #pragma omp parallel for schedule(dynamic)\r\nfor loops with varying iteration times.",
      "Assigning fixed chunks of data to each OpenMP\r\nthread based on rank.",
      "Increasing the number of OpenMP threads to cover\r\nall possible workloads.",
      "Eliminating OpenMP parallelism to rely solely on MPI\r\nfor load balancing."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 94,
    "module": 5,
    "session": 4,
    "question": "Which of the following best practices\r\neffectively overlaps communication and\r\ncomputation in hybrid MPI+OpenMP+GPU\r\napplications?",
    "options": [
      "Performing all data transfers before starting any\r\ncomputation.",
      "Using blocking MPI calls to ensure data consistency\r\nbefore computation.",
      "Initiating non-blocking MPI calls and launching CUDA\r\nkernels simultaneously.",
      "Separating communication and computation into\r\ndistinct phases with no overlap.",
      "Increasing the frequency of synchronization points to\r\nmanage data dependencies."
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 95,
    "module": 5,
    "session": 4,
    "question": "You are tasked with optimizing a high-performance computing\r\n(HPC) system for a real-time financial trading application. The\r\napplication must process a large volume of data streams with\r\nultra-low latency to make split-second decisions. Initially, your\r\nsystem uses CPUs and GPUs, but it still struggles to meet the\r\nstringent timing constraints. Why might an accelerator like\r\nFPGAs (Field-Programmable Gate Arrays) be a better solution\r\nthan continuing to rely solely on CPUs or GPUs, and what\r\nunique advantages does it offer for this specific use case?",
    "options": [
      "FPGAs allow for fine-grained, low-latency data processing and\r\ncan be customized at the hardware level for specific algorithms.",
      "FPGAs provide higher floating-point performance than GPUs,\r\nmaking them ideal for general numerical computations.",
      "FPGAs consume more power than GPUs, making them better\r\nsuited for long-running tasks where energy efficiency is not a\r\nconcern.",
      "FPGAs have more general-purpose cores than CPUs, making\r\nthem ideal for running parallel tasks like GPUs.",
      "FPGAs are optimized for deep learning tasks, which makes\r\nthem better than CPUs for workloads requiring matrix operations."
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 96,
    "module": 5,
    "session": 4,
    "question": "How does the reconfigurability of FPGAs provide an\r\nadvantage over traditional CPUs and GPUs in high-\r\nperformance computing?",
    "options": [
      "FPGAs have higher clock speeds than CPUs and GPUs.",
      "FPGAs can be reprogrammed post-manufacture to\r\noptimize hardware for specific tasks.",
      "FPGAs consume more power, enabling higher\r\nperformance.",
      "FPGAs have a larger number of cores compared to CPUs\r\nand GPUs.",
      "FPGAs support higher-level programming languages\r\nnatively."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 97,
    "module": 5,
    "session": 4,
    "question": "What is a primary advantage of FPGAs\r\nover ASICs in high-performance\r\ncomputing applications?",
    "options": [
      "FPGAs provide higher performance\r\nfor specific tasks.",
      "FPGAs are more energy-efficient for\r\nrepetitive computations.",
      "FPGAs can be reprogrammed for\r\ndifferent tasks post-manufacture.",
      "FPGAs have lower initial development\r\ncosts compared to ASICs.",
      "FPGAs consume more power, leading\r\nto higher performance."
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 98,
    "module": 5,
    "session": 4,
    "question": "Why do NPUs typically use low-precision arithmetic (e.g., INT8) for\r\nneural network inference, and how does this benefit edge\r\ncomputing devices?",
    "options": [
      "Low-precision arithmetic increases computational accuracy,\r\nwhich is crucial for inference tasks.",
      "Low-precision arithmetic reduces the computational load and\r\npower consumption, enabling efficient AI processing on power-\r\nconstrained edge devices.",
      "Low-precision arithmetic allows NPUs to support a wider range\r\nof neural network models.",
      "Low-precision arithmetic simplifies the programming model for\r\nNPUs.",
      "Low-precision arithmetic is required to interface with other\r\nhardware components in edge devices."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 99,
    "module": 5,
    "session": 4,
    "question": "How does the reconfigurability of FPGAs provide an\r\nadvantage over traditional CPUs and GPUs in high-\r\nperformance computing?",
    "options": [
      "FPGAs have higher clock speeds than CPUs and GPUs.",
      "FPGAs can be reprogrammed post-manufacture to\r\noptimize hardware for specific tasks.",
      "FPGAs consume more power, enabling higher\r\nperformance.",
      "FPGAs have a larger number of cores compared to CPUs\r\nand GPUs.",
      "FPGAs support higher-level programming languages\r\nnatively."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 100,
    "module": 5,
    "session": 4,
    "question": "FPGA Programming Models. Which of the following is\r\na high-level programming approach for FPGAs that\r\nallows developers to use C or C++ instead of\r\ntraditional HDLs?",
    "options": [
      "Verilog",
      "VHDL",
      "OpenCL",
      "High-Level Synthesis (HLS)",
      "Assembly language"
    ],
    "correctAnswer": [
      3
    ],
    "multipleCorrect": false
  },
  {
    "id": 101,
    "module": 5,
    "session": 4,
    "question": "In Microsoft's Catapult Project, FPGAs were\r\nintegrated into data centres primarily to accelerate\r\nwhich of the following applications?",
    "options": [
      "Cryptocurrency mining",
      "Real-time AI tasks and Bing search engine\r\nalgorithms",
      "Video rendering for gaming",
      "Blockchain consensus mechanisms",
      "Autonomous vehicle navigation"
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 102,
    "module": 5,
    "session": 4,
    "question": "What are the primary components of an FPGA's\r\nConfigurable Logic Blocks (CLBs)?",
    "options": [
      "CPU cores and caches",
      "Lookup Tables (LUTs) and flip-flops",
      "Neural processing units and tensor cores",
      "High-bandwidth memory and interconnects",
      "Application-specific integrated circuits"
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 103,
    "module": 5,
    "session": 4,
    "question": "Tensor Processing Units (TPUs) are specifically optimized for which\r\ntype of computations?",
    "options": [
      "Integer arithmetic operations",
      "Graphics rendering",
      "Matrix multiplications and tensor operations in deep learning",
      "Signal processing tasks",
      "General-purpose computing tasks"
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 104,
    "module": 5,
    "session": 4,
    "question": "In high-frequency trading (HFT), why are FPGAs\r\npreferred over GPUs?",
    "options": [
      "FPGAs have higher computational power than\r\nGPUs.",
      "FPGAs offer lower latency for real-time data\r\nprocessing and trade execution.",
      "GPUs are not capable of handling financial data.",
      "FPGAs are easier to program for trading\r\nalgorithms.",
      "FPGAs consume more power, providing better\r\nperformance."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 105,
    "module": 5,
    "session": 4,
    "question": "How do FPGAs achieve extreme parallelism at the hardware level compared to\r\nCPUs and GPUs?",
    "options": [
      "By using a higher number of general-purpose cores.",
      "Through software-based thread scheduling.",
      "By configuring multiple dedicated hardware pipelines that execute operations\r\nconcurrently.",
      "By increasing the clock speed to execute more instructions per second.",
      "By integrating specialized AI cores."
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 106,
    "module": 5,
    "session": 4,
    "question": "Given the following Verilog code for a 2-to-1 multiplexer, what\r\nis the output y when sel is 0?\r\nmodule mux2to1(\r\ninput wire a,\r\ninput wire b,\r\ninput wire sel,\r\noutput wire y\r\n);\r\nassign y = sel ? b : a;\r\nendmodule",
    "options": [
      "y = a",
      "y = b",
      "y = sel",
      "y = a + b",
      "y = 0"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 107,
    "module": 5,
    "session": 4,
    "question": "How do high-level synthesis (HLS) tools optimize the following C code for\r\nFPGA implementation?\r\nvoid matrix_multiply(int A[N][N], int B[N][N], int\r\nC[N][N]) {\r\nfor (int i = 0; i < N; i++) {\r\nfor (int j = 0; j < N; j++) {\r\nC[i][j] = 0;\r\nfor (int k = 0; k < N; k++) {\r\nC[i][j] += A[i][k] * B[k][j];\r\n}\r\n}\r\n}\r\n}",
    "options": [
      "Converts it into sequential hardware logic with minimal parallelism.",
      "Maps the nested loops to parallel hardware pipelines to exploit FPGA's\r\nparallelism.",
      "Translates it directly into an equivalent HDL without optimization.",
      "Uses the FPGA's CPU cores to execute the code.",
      "It cannot be optimized by HLS tools."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 108,
    "module": 5,
    "session": 4,
    "question": "What is a primary advantage of FPGAs over ASICs in\r\nhigh-performance computing applications?",
    "options": [
      "FPGAs provide higher performance for specific tasks.",
      "FPGAs are more energy-efficient for repetitive\r\ncomputations.",
      "FPGAs can be reprogrammed for different tasks post-\r\nmanufacture.",
      "FPGAs have lower initial development costs\r\ncompared to ASICs.",
      "FPGAs consume more power, leading to higher\r\nperformance."
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 109,
    "module": 5,
    "session": 4,
    "question": "Given the following C code for vector addition, how can High-Level Synthesis (HLS)\r\ntools optimize it for FPGA implementation to achieve parallelism?\r\nvoid vector_add(int *A, int *B, int *C, int N) {\r\nfor(int i = 0; i < N; i++) {\r\nC[i] = A[i] + B[i];\r\n}\r\n}",
    "options": [
      "Convert the loop into a sequential hardware pipeline with no parallelism.",
      "Unroll the loop to perform multiple additions concurrently, increasing parallelism.",
      "Replace the addition operation with a multiplication to utilize FPGA resources.",
      "Implement the loop as a single hardware thread without any pipelining.",
      "Optimize the code to reduce the number of memory accesses without parallelism."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 110,
    "module": 5,
    "session": 4,
    "question": "Consider the following OpenCL kernel for matrix\r\nmultiplication. What is the primary advantage of using\r\nOpenCL to program FPGAs for this task?\r\n__kernel void mat_mul(__global float* A, __global float*\r\nB, __global float* C, int N) {\r\nint row = get_global_id(0);\r\nint col = get_global_id(1);\r\nfloat sum = 0.0;\r\nfor(int k = 0; k < N; k++) {\r\nsum += A[row * N + k] * B[k * N + col];\r\n}\r\nC[row * N + col] = sum;\r\n}",
    "options": [
      "OpenCL allows the kernel to run exclusively on the CPU.",
      "OpenCL automatically optimizes the kernel for lower\r\npower consumption without developer intervention.",
      "OpenCL provides a high-level abstraction that enables\r\nportability across different hardware accelerators, including\r\nFPGAs.",
      "OpenCL restricts the kernel to execute sequentially,\r\nensuring deterministic performance.",
      "OpenCL requires no knowledge of parallel programming,\r\nmaking it easier to use."
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 111,
    "module": 5,
    "session": 4,
    "question": "In the context of FPGA architecture, what is\r\nthe primary benefit of having a hierarchical\r\nmemory structure that includes both on-chip\r\nand external memory?",
    "options": [
      "It simplifies the FPGA programming model by using\r\nonly on-chip memory.",
      "It allows for higher memory bandwidth by separating\r\ndata storage from processing units.",
      "It reduces the total amount of memory available to\r\nthe FPGA.",
      "It enforces sequential data processing to improve\r\ndata integrity.",
      "It eliminates the need for memory management in\r\nFPGA applications."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 112,
    "module": 5,
    "session": 4,
    "question": "Imagine you are developing a real-time encryption\r\nsystem for secure communications in a military\r\napplication. Which feature of FPGAs makes them\r\nparticularly suitable for this task?",
    "options": [
      "Fixed architecture that cannot be altered post-\r\nmanufacture",
      "Ability to execute encryption algorithms sequentially\r\nwith high latency",
      "Reconfigurability to implement custom encryption\r\nprotocols and low latency processing",
      "High power consumption suitable for high-\r\nperformance tasks",
      "Lack of parallel processing capabilities to ensure data\r\nintegrity"
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 113,
    "module": 5,
    "session": 4,
    "question": "Which scenario best illustrates the advantage of using an FPGA over an ASIC?",
    "options": [
      "Developing a mass-produced product where the functionality will not\r\nchange.",
      "Implementing a one-time, highly specialized cryptographic algorithm.",
      "Creating a prototype for a new communication protocol that may evolve\r\nover time.",
      "Mining cryptocurrency with a fixed hashing algorithm.",
      "Designing a smartphone's dedicated camera processing unit."
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 114,
    "module": 5,
    "session": 4,
    "question": "TPU Integration with TensorFlow\r\nGiven the following TensorFlow code snippet, what is the role of the TPUStrategy in utilizing TPUs for model training?\r\nimport tensorflow as tf\r\n# Initialize a TPU strategy\r\nresolver = tf.distribute.cluster_resolver.TPUClusterResolver()\r\ntf.config.experimental_connect_to_cluster(resolver)\r\ntf.tpu.experimental.initialize_tpu_system(resolver)\r\nstrategy = tf.distribute.TPUStrategy(resolver)\r\n# Build and compile the model within the TPU strategy scope\r\nwith strategy.scope():\r\nmodel = tf.keras.Sequential([\r\ntf.keras.layers.Dense(128, activation='relu'),\r\ntf.keras.layers.Dense(10, activation='softmax')\r\n])\r\nmodel.compile(optimizer='adam', loss='categorical_crossentropy')\r\n# Train the model on the TPU\r\nmodel.fit(x_train, y_train, epochs=10)\r\n•",
    "options": [
      "TPUStrategy automatically converts the model to run on the CPU.",
      "TPUStrategy manages the distribution of model training across multiple TPU cores, enabling\r\nparallel processing.",
      "TPUStrategy reduces the model's complexity to fit TPU constraints.",
      "TPUStrategy disables parallelism to ensure deterministic training results.",
      "TPUStrategy is used to initialize GPU resources for training."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 115,
    "module": 5,
    "session": 4,
    "question": "Consider a smartphone that uses an NPU for real-\r\ntime facial recognition. What is a key advantage\r\nof using an NPU in this scenario compared to\r\nrelying solely on a CPU?",
    "options": [
      "NPUs consume more power, allowing for faster\r\nprocessing.",
      "NPUs provide higher flexibility for general-purpose\r\ncomputing tasks.",
      "NPUs enable real-time AI inference with lower power\r\nconsumption, preserving battery life.",
      "NPUs are easier to program than CPUs, requiring no\r\nspecialized knowledge.",
      "NPUs increase the overall cost of the smartphone\r\nwithout significant performance benefits."
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 116,
    "module": 5,
    "session": 4,
    "question": "Given the following pseudo-code for a Fast Fourier\r\nTransform (FFT) operation, which aspect makes DSPs\r\nparticularly well-suited for executing this algorithm in real-\r\ntime applications?\r\nvoid perform_fft(float* input, float* output, int N) {\r\n// FFT algorithm implementation\r\n// Includes multiple stages of complex multiplications\r\nand additions\r\n}",
    "options": [
      "DSPs can execute the FFT algorithm using general-purpose computing\r\ninstructions.",
      "DSPs have specialized instruction sets and parallel processing capabilities\r\noptimized for repetitive mathematical operations like those in FFT.",
      "DSPs require no memory management for signal processing tasks.",
      "DSPs are designed to handle graphical computations, which FFT indirectly\r\nsupports.",
      "DSPs have built-in support for machine learning frameworks."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 117,
    "module": 5,
    "session": 4,
    "question": "You are tasked with implementing an image\r\nprocessing pipeline on an FPGA that includes\r\nfiltering, color correction, and object detection.\r\nHow can the FPGA's parallelism be best utilized in\r\nthis scenario?",
    "options": [
      "Execute filtering, color correction, and object\r\ndetection sequentially on a single pipeline.",
      "Allocate separate processing pipelines for filtering,\r\ncolor correction, and object detection to run\r\nconcurrently.",
      "Use the FPGA to only perform one of the three tasks\r\nwhile relying on a CPU for the others.",
      "Implement all three tasks in a single monolithic\r\nhardware block without separation.",
      "Run the tasks on different clock cycles within the same\r\npipeline."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 118,
    "module": 5,
    "session": 4,
    "question": "In a data center environment where power\r\nefficiency is critical, why might FPGAs be chosen\r\nover GPUs for certain workloads?",
    "options": [
      "FPGAs generally offer higher computational\r\nthroughput than GPUs.",
      "FPGAs can be reconfigured to minimize power usage\r\nfor specific tasks, providing better energy efficiency for\r\nthose tasks compared to GPUs.",
      "GPUs are inherently more power-efficient than FPGAs\r\nfor all types of workloads.",
      "FPGAs require less specialized knowledge to optimize\r\nfor power efficiency.",
      "GPUs cannot handle data-parallel workloads as\r\neffectively as FPGAs."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 119,
    "module": 5,
    "session": 4,
    "question": "Which feature of FPGAs makes them\r\nparticularly effective for implementing\r\ncryptographic algorithms like RSA or ECC?",
    "options": [
      "Fixed-function hardware that cannot be\r\naltered",
      "Reconfigurable interconnects and logic\r\nblocks that allow parallel execution of\r\nmathematical operations",
      "Higher clock speeds compared to CPUs",
      "Built-in support for cryptographic libraries",
      "Limited ability to handle complex\r\narithmetic operations"
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 120,
    "module": 5,
    "session": 4,
    "question": "In a mixed acceleration environment where FPGAs handle\r\ndata preprocessing and GPUs handle parallel computations,\r\nwhat is a critical factor to ensure optimal performance?",
    "options": [
      "Ensuring that both FPGAs and GPUs run at the same clock\r\nspeed",
      "Efficient data movement and communication between\r\nFPGAs and GPUs",
      "Programming both accelerators using the same\r\nprogramming language",
      "Disabling parallel processing on one of the accelerators",
      "Using FPGAs only for non-critical tasks"
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 121,
    "module": 5,
    "session": 4,
    "question": "Which FPGA development tool mentioned\r\nbelow is known for supporting High-Level\r\nSynthesis (HLS) and facilitating the\r\ntranslation of C/C++ code into hardware\r\nconfigurations?",
    "options": [
      "NVIDIA CUDA Toolkit",
      "Xilinx Vivado HLS",
      "Intel Quartus Prime",
      "TensorFlow TPU Tools",
      "OpenCL Compiler"
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 122,
    "module": 5,
    "session": 4,
    "question": "How do cloud-based FPGA platforms benefit\r\ndevelopers working on large-scale HPC applications?",
    "options": [
      "They provide fixed-function FPGA hardware that\r\ncannot be reprogrammed.",
      "They eliminate the need for understanding FPGA\r\nprogramming by automating all tasks.",
      "They allow developers to deploy and scale FPGA\r\nresources on-demand without managing physical\r\nhardware.",
      "They restrict access to FPGA resources, limiting\r\nscalability.",
      "They convert FPGA configurations into GPU-\r\ncompatible code."
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 123,
    "module": 5,
    "session": 4,
    "question": "In the FPGA case study for genomic data\r\nprocessing, what was the primary benefit achieved\r\nby using FPGAs for DNA sequence alignment\r\ncompared to traditional CPU-based approaches?",
    "options": [
      "FPGAs reduced the accuracy of DNA sequence\r\nalignment to improve speed.",
      "FPGAs allowed for real-time visualization of DNA\r\nsequences during alignment.",
      "FPGAs accelerated DNA sequence alignment by\r\n10x to 100x, significantly reducing processing time.",
      "FPGAs enabled DNA sequence alignment without\r\nthe need for memory resources.",
      "FPGAs automated the entire genomic research\r\nprocess without human intervention."
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 124,
    "module": 5,
    "session": 4,
    "question": "Given an FPGA configured with multiple dedicated\r\narithmetic units, how would this configuration benefit a\r\nmatrix multiplication task compared to a CPU\r\nimplementation?",
    "options": [
      "It would sequentially execute each multiplication,\r\nreducing power consumption.",
      "It would allow for parallel execution of multiple\r\nmultiplications, significantly increasing throughput.",
      "It would limit the matrix size that can be processed.",
      "It would require more clock cycles to perform the same\r\ntask as a CPU.",
      "It would increase the latency of each multiplication\r\noperation."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 125,
    "module": 5,
    "session": 4,
    "question": "Why do NPUs typically use low-precision arithmetic\r\n(e.g., INT8) for neural network inference, and how\r\ndoes this benefit edge computing devices?",
    "options": [
      "Low-precision arithmetic increases computational\r\naccuracy, which is crucial for inference tasks.",
      "Low-precision arithmetic reduces the\r\ncomputational load and power consumption,\r\nenabling efficient AI processing on power-constrained\r\nedge devices.",
      "Low-precision arithmetic allows NPUs to support a\r\nwider range of neural network models.",
      "Low-precision arithmetic simplifies the\r\nprogramming model for NPUs.",
      "Low-precision arithmetic is required to interface\r\nwith other hardware components in edge devices."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 126,
    "module": 5,
    "session": 4,
    "question": "In a voice-over-IP (VoIP) system, how do DSPs\r\nensure seamless and high-quality audio\r\ncommunication?",
    "options": [
      "By handling only the encryption of audio data.",
      "By performing real-time compression and\r\ndecompression of audio streams with low latency.",
      "By routing audio data through multiple CPUs for\r\nprocessing.",
      "By storing audio data in high-capacity external\r\nmemory.",
      "By converting audio signals into video streams for\r\ntransmission."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 127,
    "module": 5,
    "session": 4,
    "question": "Which statement best describes the flexibility\r\ncomparison between FPGAs and General-\r\nPurpose GPUs (GPGPUs) in HPC applications?",
    "options": [
      "FPGAs are more flexible than GPGPUs because they\r\ncan handle a wider range of parallel tasks without\r\ncustomization.",
      "GPGPUs are more flexible than FPGAs as they can be\r\nprogrammed for various parallel tasks using high-level\r\nAPIs, whereas FPGAs require hardware-specific\r\nconfigurations.",
      "Both FPGAs and GPGPUs offer the same level of\r\nflexibility in handling different HPC tasks.",
      "FPGAs are only suitable for fixed tasks, while GPGPUs\r\ncan be reprogrammed for different tasks.",
      "GPGPUs are less flexible than FPGAs because they are\r\noptimized only for graphics processing."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 128,
    "module": 5,
    "session": 4,
    "question": "You are developing a high-thourghput image classification system that needs to process millions of images\nquickly. Which accelerator would be the most appropriate choice and why?",
    "options": [
      "FPGA, because it offers low latency for real-time processing",
      "NPU, because it is optimized for low-power AI inference",
      "GPU, because it provides massive parallelism suitable for processing large datasets efficiently",
      "DSP, because it excels in continuous signal processing",
      "ASIC, because it can be reprogrammed for different tasks easily"
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  }
];
