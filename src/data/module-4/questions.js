export const questions = [
  {
    "id": 1,
    "module": 4,
    "session": 1,
    "question": "The algorithms Fast Fourier Transform and\nparallel sort are examples of what class of algorithm?",
    "options": [
      "Fork–join",
      "Divide and conquer",
      "Halo exchange",
      "Permutation",
      "Embarrassingly parallel",
      "Manager–worker",
      "Task dataflow"
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 2,
    "module": 4,
    "session": 1,
    "question": "What type of algorithm is the one in the code?\n1 if ( my_rank == master ) {\n2 send_action(INITIALIZE);\n3\n4 for (int i=0;i<num_timesteps;i++) {\n5 send_action(REFINE);\n6 send_action(INTEGRATE);\n7 send_action(OUTPUT);\n8 }\n9} else {\n10listen_for_actions();\n11}",
    "options": [
      "Divide-and-conquer",
      "manager–worker",
      "Halo-exchange",
      "Non of the above"
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 3,
    "module": 4,
    "session": 1,
    "question": "______ matrix calculations exploit arrays\n(e.g., vectors) that are mostly populated\nwith elements of value zero and where\nonly a relatively small number of the\nelements are nonzero",
    "options": [
      "Quadratic",
      "Dense",
      "Sparse",
      "None of the above"
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 4,
    "module": 4,
    "session": 1,
    "question": "Scenario: You are building a weather\nsimulation program that processes data for\nmultiple cities concurrently. Each city's data\nprocessing is independent and does not rely\non the results from another city.\nQuestion: Which type of algorithm would best\nfit this scenario?",
    "options": [
      "Fork-join parallelism",
      "Divide-and-conquer parallelism",
      "Quicksort",
      "Halo exchange",
      "Embarrassingly parallel algorithms"
    ],
    "correctAnswer": [
      4
    ],
    "multipleCorrect": false
  },
  {
    "id": 5,
    "module": 4,
    "session": 1,
    "question": "Question: In the context of the word count operation for Company XYZ's Twitter data analysis, why might a\nCombiner be beneficial in Hadoop's MapReduce?",
    "options": [
      "b) c) e) It renames all the output files. It changes the input split size. It aggregates intermediate data on the Mapper side, reducing the amount of data shuffled.",
      "It replaces the Reducer. It encrypts the data before the Reducer stage"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 6,
    "module": 4,
    "session": 1,
    "question": "A halo is a region __________ to the data subset\nmapped to a parallel task. It acts as an artificial\nboundary to that data subset and contains\ninformation that originates from the data subsets\nof neighboring parallel tasks.",
    "options": [
      "Interior",
      "Exterior",
      "Central",
      "adjacent"
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 7,
    "module": 4,
    "session": 1,
    "question": "Embarrassingly parallel algorithms are a subclass of\n________ algorithms. They are called embarrassingly\nparallel because the available concurrency is trivially\nextracted from the workflow.",
    "options": [
      "Fork-join",
      "Divide-and-conquer",
      "Manager-worker",
      "Task dataflows"
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 8,
    "module": 4,
    "session": 1,
    "question": "Task dataflow algorithms represent the\nprecedent constraints among subtasks by\ntheir dependencies in the form of a\ndirected acyclic graph. This establishes\nwhich tasks must be completed prior to\ninitiating a succeeding task.",
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
    "id": 9,
    "module": 4,
    "session": 1,
    "question": "For what type of data structures is\nbreadth first search algorithm\nused for?",
    "options": [
      "sparse Matrixes",
      "graph data structures",
      "Dense matrixes",
      "vectors"
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 10,
    "module": 4,
    "session": 1,
    "question": "What type of algorithm is the one\nfrom the image?\nSee image P.80 M4S1",
    "options": [
      "Fork–join",
      "Divide and conquer",
      "Halo exchange",
      "Embarrassingly parallel",
      "Manager–worker"
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 11,
    "module": 4,
    "session": 1,
    "question": "One of the simplest ways to solve these\nwavelike partial differential equations on\na supercomputer is through the use of:",
    "options": [
      "Divide and conquer",
      "Embarrassingly parallel algorithms",
      "finite differencing and halo exchange",
      "Fork–join"
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 12,
    "module": 4,
    "session": 1,
    "question": "Match each algorithm type with an example",
    "options": [
      "Fork–join",
      "Divide and conquer",
      "Halo exchange",
      "Permutation",
      "Embarrassingly parallel",
      "Manager–worker",
      "Task dataflow",
      "Cannon's algorithm, Fast Fourier Transform",
      "OpenMP parallel for-loop",
      "Breadth first search",
      "Fast Fourier Transform, parallel sort",
      "Finite difference/finite element partial differential equation solvers",
      "Monte Carlo",
      "Simple adaptive mesh refinement"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 13,
    "module": 4,
    "session": 1,
    "question": "Question 12: What best describes Fork-join parallelism?",
    "options": [
      "A method to subdivide a problem repeatedly until tasks are trivial.",
      "A process where one manager controls the remaining worker processes.",
      "A technique that starts at a fork and ends when all concurrent tasks have reached the join point.",
      "A strategy mainly used for sparse matrix calculations.",
      "A workflow in which concurrency is trivially extracted."
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 14,
    "module": 4,
    "session": 1,
    "question": "Question 14: Why are certain algorithms labeled as \"Embarrassingly Parallel\"?",
    "options": [
      "They cannot be divided into subtasks.",
      "They are overly complex and hard to understand.",
      "Their available concurrency is difficult to extract from the workflow.",
      "They lack efficiency in distributed computing.",
      "The available concurrency is trivially extracted from the workflow."
    ],
    "correctAnswer": [
      4
    ],
    "multipleCorrect": false
  },
  {
    "id": 15,
    "module": 4,
    "session": 1,
    "question": "Question 15: Sparse matrix calculations are advantageous because:",
    "options": [
      "They utilize arrays that are entirely populated with zeros.",
      "They represent matrices larger than what the main memory of a computer could store by only saving nonzero elements.",
      "They always improve the efficiency of distributed computing.",
      "They follow the manager-worker workflow.",
      "They employ the divide-and-conquer strategy for ordering data."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 16,
    "module": 4,
    "session": 1,
    "question": "Imagine a tool named 'MatrixMaster', which is designed to handle and operate on massive matrices. However,\ndue to memory constraints, it cannot load the entire matrix into memory. Instead, it's known to efficiently handle matrices\nwhere most of its elements are zeros. Which data structure should 'MatrixMaster' ideally utilize?",
    "options": [
      "Full matrix representation",
      "Sparse matrix",
      "Linked list",
      "Binary tree",
      "Hash map"
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 17,
    "module": 4,
    "session": 1,
    "question": "Question 17: You're using a tool called 'TaskFlowGrapher' that visually represents tasks as nodes and their dependencies as\nedges in a directed graph. The tool ensures that tasks are executed in the correct order based on their dependencies. Which\nparallel algorithm concept does 'TaskFlowGrapher' most closely align with?",
    "options": [
      "Fork-join parallelism",
      "Embarrassingly parallel algorithms",
      "Halo exchange",
      "Task dataflow algorithms",
      "Divide-and-conquer parallelism"
    ],
    "correctAnswer": [
      3
    ],
    "multipleCorrect": false
  },
  {
    "id": 18,
    "module": 4,
    "session": 1,
    "question": "Question 18: You're developing an e-commerce platform and need an algorithm that recursively breaks down the product\nlist into smaller chunks to sort them efficiently before merging them back together. Which algorithm or parallelism\napproach would be suitable for this case?",
    "options": [
      "Fork-join parallelism",
      "Halo exchange",
      "Manager–worker workflow",
      "Embarrassingly parallel algorithms",
      "Divide-and-conquer parallelism"
    ],
    "correctAnswer": [
      4
    ],
    "multipleCorrect": false
  },
  {
    "id": 19,
    "module": 4,
    "session": 1,
    "question": "Question 20: Consider a tool named 'ConcurrentTreeSearch' that allows researchers to explore\nmultiple paths of a decision tree simultaneously. Instead of exploring one path and then\nbacktracking, it evaluates many paths in parallel to find a solution faster. The operation of\n'ConcurrentTreeSearch' is a prime example of which parallel algorithm technique?",
    "options": [
      "Divide-and-conquer parallelism",
      "Embarrassingly parallel algorithms",
      "Fork-join parallelism",
      "Task dataflow algorithms",
      "Parallel depth-first search"
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 20,
    "module": 4,
    "session": 1,
    "question": "Question 21: Why is velocity an essential factor when considering big data, and what role does real-time processing play in industries like finance or healthcare?",
    "options": [
      "Velocity refers to the amount of data generated at a specific time and plays no role in real-time processing.",
      "Velocity refers to the speed of communication between processors in a parallel system.",
      "Velocity is synonymous with the volume of data stored in big data applications.",
      "Velocity refers to the need for more storage in a system.",
      "Velocity refers to the speed at which data is generated and processed. In industries like finance, real-time processing is crucial for executing timely trades or fraud detection."
    ],
    "correctAnswer": [
      4
    ],
    "multipleCorrect": false
  },
  {
    "id": 21,
    "module": 4,
    "session": 1,
    "question": "In the Fork–Join model, why is the collapse(2) directive used in OpenMP, and what is its practical advantage when adding two matrices of size N x N in parallel?",
    "options": [
      "collapse(2) is used to collapse nested loops into a single loop for better load balancing and thread efficiency, making it ideal for matrix operations where both row and column operations are independent.",
      "collapse(2) splits the matrix into two parts and processes them sequentially to ensure accuracy.",
      "collapse(2) is used to prevent race conditions between threads.",
      "It allows two threads to work on the same row of the matrix at the same time.",
      "It is used to reduce memory consumption during parallel matrix addition."
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 22,
    "module": 4,
    "session": 1,
    "question": "Question 23: In a parallel merge sort implementation, how does the divide and conquer strategy improve the efficiency of sorting large datasets?",
    "options": [
      "By dividing the dataset into smaller parts, each sorted independently in parallel, the time complexity is reduced to O(n), making it faster than traditional merge sort.",
      "It sorts only the largest subarray in parallel, and the rest are sorted sequentially.",
      "It divides the problem recursively, solves smaller subproblems in parallel, and then combines the solutions, resulting in improved load balancing and reduced total execution time.",
      "Divide and conquer improves memory usage by splitting the dataset into several small arrays.",
      "It converts a serial sort into a bubble sort."
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 23,
    "module": 4,
    "session": 1,
    "question": "Question 24: Given a word count problem in MapReduce, what is the main reason for using the shuffle and sort phase between the Map and Reduce steps?",
    "options": [
      "To ensure that all values associated with a particular key are grouped together for aggregation in the Reduce phase.",
      "To sort the data in lexicographic order.",
      "To randomly distribute data across the network for fault tolerance.",
      "To reduce the amount of data sent to the reduce function by eliminating duplicates.",
      "To compress the output from the Map function for faster processing."
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 24,
    "module": 4,
    "session": 1,
    "question": "High-Performance Computing (HPC) is vital in big data analytics. Which of the following best explains the role of HPC in solving the challenges posed by large-scale data processing?",
    "options": [
      "HPC provides a larger storage capacity for big data, reducing the need for distributed storage systems like HDFS.",
      "HPC systems offer high computational power, enabling parallel processing of massive datasets, which is crucial for applications like weather prediction models that require timely and accurate results.",
      "HPC systems eliminate the need for distributed file systems by using a single processor with faster clock speeds.",
      "HPC can only be used in academic research and has limited applicability in industries like finance or healthcare.",
      "HPC systems can only handle structured data efficiently."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 25,
    "module": 4,
    "session": 1,
    "question": "You are tasked with processing terabytes of customer transaction data from an online marketplace using the MapReduce programming model. What would be the correct way to divide\nthis task?",
    "options": [
      "Use the map() function to distribute tasks across nodes and the reduce() function to combine intermediate results for each customer transaction.",
      "Use the map() function to aggregate the data and the reduce() function to split the data into smaller chunks.",
      "Store all data in memory, use the map() function to aggregate transactions and discard the reduce() function.",
      "Use the reduce() function to count the total number of transactions before mapping them.",
      "Split the data manually into smaller parts and execute both functions in sequence."
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 26,
    "module": 4,
    "session": 1,
    "question": "You are building a parallel application to simulate molecular interactions. Which parallel algorithm model would you choose to handle the large number of independent computations, and\nwhy?",
    "options": [
      "Fork-Join model, because molecular interactions are highly dependent on boundary conditions.",
      "Divide and Conquer, since the interactions between molecules need to be recursively split into smaller interactions.",
      "Embarrassingly Parallel, because each molecular interaction can be computed independently without the need for communication between computations.",
      "Halo Exchange, since molecular interactions involve constant communication of boundary data between processors.",
      "Task Dataflow, as it ensures that all dependencies are resolved before each task runs."
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 27,
    "module": 4,
    "session": 1,
    "question": "Your task is to improve the performance of an image processing system by applying parallel computing. The system applies filters to\ndifferent sections of a large image. Which parallel algorithm is most suitable for this task, and why?",
    "options": [
      "Halo Exchange, because filters need to exchange data with neighboring sections.",
      "Fork-Join, as each filter can be applied independently to different sections of the image.",
      "Divide and Conquer, as the image should be recursively split into smaller chunks.",
      "Embarrassingly Parallel, since each filter must communicate its results to the other filters.",
      "Task Dataflow, because filters are dependent on the order in which they are applied."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 28,
    "module": 4,
    "session": 1,
    "question": "You are tasked with optimizing a large-scale matrix multiplication using Cannon’s algorithm on an HPC system. How does Cannon’s\nalgorithm improve performance in parallel matrix multiplication?",
    "options": [
      "By dividing the matrix into blocks and systematically shifting them across processors to minimize data movement and optimize processor usage.",
      "By splitting the matrix into rows and distributing them across processors for independent computation.",
      "By applying a divide and conquer strategy to recursively split matrices into smaller matrices.",
      "By precomputing the matrix inverses and storing them across nodes for faster access.",
      "By using shared memory to store matrix blocks and reduce access time."
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 29,
    "module": 4,
    "session": 1,
    "question": "Question 32: You are working on a distributed computational fluid dynamics (CFD) application that requires frequent communication between\nprocessors for boundary data exchange. Which parallel algorithm model would be most suitable for this type of communication?",
    "options": [
      "Fork-Join, because it handles independent computations with ease.",
      "Embarrassingly Parallel, as CFD computations require no communication between processors.",
      "Halo Exchange, as it focuses on exchanging boundary data between adjacent processors, which is essential for CFD applications.",
      "Divide and Conquer, as it breaks down the fluid model into smaller sections that can be solved recursively.",
      "Manager-Worker, because it involves distributing CFD tasks to worker processors dynamically."
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 30,
    "module": 4,
    "session": 1,
    "question": "Question 34: In the following MapReduce program, what will happen if the combine() method is not\nimplemented?\nimport java.io.IOException;\nimport org.apache.hadoop.io.IntWritable;\nimport org.apache.hadoop.io.Text;\nimport org.apache.hadoop.mapreduce.Mapper;\nimport org.apache.hadoop.mapreduce.Reducer;\npublic class WordCount {\npublic static class TokenizerMapper extends Mapper<Object, Text,\nText, IntWritable>{\nprivate final static IntWritable one = new IntWritable(1);\nprivate Text word = new Text();\npublic void map(Object key, Text value, Context context)\nthrows IOException, InterruptedException {\nString[] tokens = value.toString().split(\"\\\\s+\");\nfor (String token : tokens) {\nword.set(token);\ncontext.write(word, one);\n}\n}\n}\npublic static class IntSumReducer extends Reducer<Text,\nIntWritable, Text, IntWritable> {\npublic void reduce(Text key, Iterable<IntWritable> values,\nContext context) throws IOException, InterruptedException {\nint sum = 0;\nfor (IntWritable val : values) {\nsum += val.get();\n}\ncontext.write(key, new IntWritable(sum));\n}}}",
    "options": [
      "The job will fail as Hadoop requires a combine() method for word count programs.",
      "The program will run, but the performance will be slower as all intermediate data is sent to the reducer without local aggregation.",
      "The map() function will not execute if combine() is missing.",
      "Hadoop will automatically implement the combine() method in this case.",
      "The reducer will not receive any data since the combiner acts as an intermediary step"
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 31,
    "module": 4,
    "session": 1,
    "question": "In the following Hadoop MapReduce program, what is the purpose of the\nsetInputFormatClass() method?\nimport org.apache.hadoop.mapreduce.lib.input.TextInputFormat;\nimport org.apache.hadoop.mapreduce.Job;\npublic class MapReduceJob {\npublic static void main(String[] args) throws Exception {\nJob job = Job.getInstance();\njob.setJarByClass(MapReduceJob.class);\njob.setMapperClass(MyMapper.class);\njob.setReducerClass(MyReducer.class);\njob.setInputFormatClass(TextInputFormat.class);\njob.setOutputKeyClass(Text.class);\njob.setOutputValueClass(IntWritable.class);\n// Rest of job configuration...\nSystem.exit(job.waitForCompletion(true) ? 0 : 1);\n}}",
    "options": [
      "It specifies the format of the output data, ensuring it's compatible with HDFS.",
      "It sets how the output data will be structured before being written to the HDFS.",
      "It defines how the input data is split into key-value pairs to be processed by the mapper.",
      "It specifies the type of data the reducer will produce after processing.",
      "It defines the scheduling priority for this job in the Hadoop cluster."
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 32,
    "module": 4,
    "session": 1,
    "question": "Question 19: Consider the following Fork-Join implementation for summing an array. What is the issue\nin this code regarding scalability in a parallel system?\n#include <omp.h>\n#define N 1000000\nint sum_array(int *array) {\nint sum = 0;\n#pragma omp parallel\n{\n#pragma omp for\nfor (int i = 0; i < N; i++) {\nsum += array[i];\n}\n}\nreturn sum;\n}",
    "options": [
      "The variable sum should be private to each thread and then reduced after the parallel section.",
      "The array should be split and processed by different processes rather than threads.",
      "The OpenMP for loop should use collapse(2) for better performance.",
      "The array is not large enough for parallelism to improve performance.",
      "The outer #pragma omp parallel is unnecessary and reduces performance."
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 33,
    "module": 4,
    "session": 1,
    "question": "In a divide-and-conquer approach, consider the following code for calculating Fibonacci\nnumbers. What optimization can be applied to improve its parallel execution?\n#include <omp.h>\nint fib(int n) {\nif (n <= 1) return n;\nint x, y;\n#pragma omp task shared(x)\nx = fib(n-1);\n#pragma omp task shared(y)\ny = fib(n-2);\n#pragma omp taskwait\nreturn x + y;\n}",
    "options": [
      "The tasks should be created only for larger values of n to avoid overhead from excessive task creation for small values.",
      "The #pragma omp taskwait is unnecessary and can be removed.",
      "The fib() function should be rewritten as a loop for better parallelism.",
      "Shared variables x and y should be declared outside the function to improve task performance.",
      "The recursion should be replaced with a sequential divide-and-conquer algorithm."
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 34,
    "module": 4,
    "session": 1,
    "question": "Question 21: The following code implements a manager-worker model for computing the sum of a large array in parallel. What is\nthe issue in the current approach?\n#include <omp.h>\n#define N 1000000\nvoid compute_sum(int *array, int *result) {\n#pragma omp parallel\n{\nint local_sum = 0;\n#pragma omp for\nfor (int i = 0; i < N; i++) {\nlocal_sum += array[i];\n}\n#pragma omp critical\n{\n*result += local_sum;\n}\n}\n}",
    "options": [
      "Using #pragma omp critical for updating the result introduces significant overhead; instead, the reduction clause should be used.",
      "The local_sum should be declared outside the parallel block for better performance.",
      "The array is not split evenly among workers, leading to load imbalance.",
      "OpenMP tasks should be used instead of threads to better distribute the workload.",
      "The critical section should use a mutex instead of #pragma omp critical."
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 35,
    "module": 4,
    "session": 1,
    "question": "What type of MapReduce functional is the one described\nin the example below?\nfunction counts the number of characters of an input word,\nreturning as a key the word length and returning as a value\nthe input word\nIF we supplied as input “computing”, it would return the\nkey–value pair “9:computing”",
    "options": [
      "Shuffle",
      "Map",
      "Reduce",
      "Short-Merge"
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 36,
    "module": 4,
    "session": 1,
    "question": "What type of MapReduce functional is the one described in the example below? takes as an argument a key and all values associated with that key. For example:\n• crossword-puzzle designer would like to know the number of words with a length of four characters that occur in a large-input dataset.\n• would simply count the number of grouped values associated with each key.",
    "options": [
      "Shuffle",
      "Map",
      "Reduce",
      "Short-Merge"
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 37,
    "module": 4,
    "session": 1,
    "question": "What is the following Hadoop distributed filesystem\ncommand doing?\nhdfs dfs -put hamlet.txt /hamlet",
    "options": [
      "Placing a text file of Shakespeare's Hamlet (hamlet.txt) stored in HDFS in the local file system",
      "Placing a text file of Shakespeare's Hamlet (hamlet.txt) stored in the local file system in HDFS",
      "Converting a text file of Shakespeare’s Hamlet (hamlet.txt) from a HDFS format into one that can be readable",
      "None of the above"
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 38,
    "module": 4,
    "session": 1,
    "question": "Match the different following Hadoop components with\nits main function is used for:",
    "options": [
      "HDFS",
      "Hbase",
      "MapReduce",
      "Pig",
      "Zookeper",
      "Oozie",
      "Hive",
      "Mahout",
      "NoSQL Database",
      "Distributed Storage",
      "Distributed Processing",
      "Query",
      "Machine Learning",
      "Scripting",
      "Workflow & Scheduling",
      "Coordination"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 39,
    "module": 4,
    "session": 1,
    "question": "Question 13: Considering the parallel nature of AI computations, which architectural decision is often recommended for AI workloads in HPC?",
    "options": [
      "Scale-out architectures",
      "Scale-up architectures",
      "Centralized architectures",
      "Edge computing architectures",
      "Decentralized architectures"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 40,
    "module": 4,
    "session": 1,
    "question": "In 2015, the city of Flint, Michigan, faced a severe public health crisis due to lead contamination in its drinking water. Imagine you're a team of scientists and engineers tasked\nwith studying the flow of water through Flint's pipe system, assessing the spread of lead contamination in different regions, and visualizing the integrity of the city's aging pipe\ninfrastructure.\nUsing HPC visualization techniques, propose a comprehensive study to assess and present the situation to city officials.\nWhich of the following HPC visualization concepts would you choose to effectively communicate your findings, and why?",
    "options": [
      "Streamlines",
      "Isosurface",
      "Volume rendering through ray tracing",
      "Mesh tessellation",
      "areas of equal lead concentration in the water",
      "interior of the city's aging pipes",
      "3D model of the city's pipe infrastructure",
      "flow of water through the city's pipe system"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 41,
    "module": 4,
    "session": 1,
    "question": "In VTK, what mappers and actors mean?",
    "options": [
      "“mappers” convert data into graphics primitives while “actors” alter the visual properties of those graphics",
      "“mappers” create data from graphics primitives while “actors” provide data for those graphics",
      "“actors” convert data into graphics primitives while “mappers” alter the visual properties of those graphics",
      "None of the above"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 42,
    "module": 4,
    "session": 1,
    "question": "What is true about VTK?",
    "options": [
      "VTK is one of the most important open-source visualization libraries for HPC users",
      "VTK provides many 3D visualization algorithms, parallel computing support",
      "VTK interfaces to interpreted languages like Python",
      "All of them"
    ],
    "correctAnswer": [
      3
    ],
    "multipleCorrect": false
  },
  {
    "id": 43,
    "module": 4,
    "session": 1,
    "question": "What type of visualization representation is the one\nin the image?\nSee image P52 M4S2",
    "options": [
      "Streamlines",
      "Isosurfaces",
      "volume rendering through ray tracing",
      "mesh tessellations"
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 44,
    "module": 4,
    "session": 1,
    "question": "What type of visualization representation is the one\nin the image?\nSee image P53 M4S2",
    "options": [
      "Streamlines",
      "Isosurfaces",
      "volume rendering through ray tracing",
      "mesh tessellations"
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 45,
    "module": 4,
    "session": 1,
    "question": "What type of visualization representation is the one\nin the image?\nSee image P54 M4S2",
    "options": [
      "Streamlines",
      "Isosurfaces",
      "volume rendering through ray tracing",
      "mesh tessellations"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 46,
    "module": 4,
    "session": 1,
    "question": "What toolkit that is one of the most used visualization toolkits is also used in several full visualization tools such as ParaView and Vislt",
    "options": [
      "Gnuplot",
      "Matplotlib",
      "VTK",
      "None of the above"
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 47,
    "module": 4,
    "session": 1,
    "question": "What is a big difference between Gnuplot and Matplotlib",
    "options": [
      "Matplotlib itself does not support 3D surface plots or other 3D-type visualizations",
      "Gnuplot itself does not support 3D surface plots or other 3D type visualizations",
      "Gnuplot is open source and Matplotlib is proprietary",
      "Gnuplot is python-based and matplotlib is Fortran-based"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 48,
    "module": 4,
    "session": 1,
    "question": "What type of visualization will plot the following code using VTK?\nimport vtk # the VTK Python interface\nrt = vtk.vtkRTAnalyticSource()# data for testing\ncontour_filter = vtk.vtkContourFilter()\ncontour_filter.SetInputConnection(rt.GetOutputPort())\ncontour_filter.SetValue(0, 190)\nmapper = vtk.vtkPolyDataMapper()\nmapper.SetInputConnection(contour_filter.GetOutputPort())",
    "options": [
      "streamlines",
      "polygon geometric structure",
      "isosurfaces of 3D data",
      "volume rendering"
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 49,
    "module": 4,
    "session": 1,
    "question": "Question 12. What is the primary motivation for utilizing data visualization on HPC systems?",
    "options": [
      "To make the data look more colorful",
      "To ease the burden of storage on HPC systems",
      "To prepare presentation graphics for business meetings",
      "To debug and explore data for scientific insights",
      "To encrypt the data for security purposes"
    ],
    "correctAnswer": [
      3
    ],
    "multipleCorrect": false
  },
  {
    "id": 50,
    "module": 4,
    "session": 1,
    "question": "An aerospace engineer wants to visualize airflow around an airplane's wing using a technique that\nshows curves tangent to the vector field. Which visualization concept should they use?",
    "options": [
      "Isosurfaces",
      "Mesh tessellations",
      "Streamlines",
      "Ray tracing",
      "Volume rendering"
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 51,
    "module": 4,
    "session": 1,
    "question": "Question 14. If a researcher has a 3D dataset where they want to visualize surfaces that connect data points of the\nsame value, which technique should they apply?",
    "options": [
      "Volume rendering by ray tracing",
      "Mesh tessellations",
      "Streamlines",
      "Gnuplot plots",
      "Isosurfaces"
    ],
    "correctAnswer": [
      4
    ],
    "multipleCorrect": false
  },
  {
    "id": 52,
    "module": 4,
    "session": 1,
    "question": "A medical practitioner wishes to visualize MRI scan data to look inside a human body without\ninvasive procedures. Which technique allows rays to be cast through the data volume and samples the volume?",
    "options": [
      "Mesh tessellations",
      "Isosurfaces",
      "Volume rendering by ray tracing",
      "Streamlines",
      "Gnuplot plots"
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 53,
    "module": 4,
    "session": 1,
    "question": "A data scientist wants to create a customized visualization solution for a specific application. Which\ntool or library provides a collection of visualization algorithms to achieve this?",
    "options": [
      "Matplotlib",
      "Gnuplot",
      "ParaView",
      "VTK",
      "VisIt"
    ],
    "correctAnswer": [
      3
    ],
    "multipleCorrect": false
  },
  {
    "id": 54,
    "module": 4,
    "session": 1,
    "question": "Question 17. A geologist is examining the crust layers of the Earth. They have data points of varying depths and\nvalues and want to visualize the connectivity between these points using polygons. Which foundational\nvisualization concept should they utilize?",
    "options": [
      "Streamlines",
      "Volume rendering by ray tracing",
      "Isosurfaces",
      "Mesh tessellations",
      "ParaView"
    ],
    "correctAnswer": [
      3
    ],
    "multipleCorrect": false
  },
  {
    "id": 55,
    "module": 4,
    "session": 1,
    "question": "Question 18. Eleanor, an environmental scientist, is studying patterns of air pollution across a city.\nShe collects data over time and wants to generate a series of 2D plots for her research paper. Which\ntool, described as a simple command-line visualization tool, would be apt for her needs?",
    "options": [
      "Streamlines – used for visualizing curves tangent to a vector field.",
      "Gnuplot – a command-line tool specifically for creating 2D and 3D plots.",
      "VTK – a toolkit for creating application-specific visualizations.",
      "Isosurfaces – used for visualizing surfaces connecting data points of the same value.",
      "Volume rendering by ray tracing – technique for seeing inside data volumes."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 56,
    "module": 4,
    "session": 1,
    "question": "Question 19. Mike, a meteorologist, is trying to predict storm patterns. He has accumulated a vast\namount of weather data, including wind speeds and directions at various altitudes. He wishes to\nvisualize the potential paths these winds would follow. Which technique, known for showing curves\ntangent to vector fields, should he use?",
    "options": [
      "Mesh tessellations – technique for showing data point connections with polygons.",
      "Isosurfaces – used to visualize points of the same value in 3D space.",
      "Streamlines – represent curves that are tangent to a vector field.",
      "Matplotlib – a Python-based tool mainly for 2D visualizations.",
      "VTK – a general collection of visualization algorithms."
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 57,
    "module": 4,
    "session": 1,
    "question": "Question 20. Jenny, an archaeologist, has used ground-penetrating radar to map an ancient\nunderground structure. She possesses a 3D dataset of this underground area and wants to\ninteractively explore it using a tool with a graphical user interface. Which tool, equipped with a GUI\nand built on VTK algorithms, would be ideal for her?",
    "options": [
      "Matplotlib – primarily used for 2D plotting using Python.",
      "Gnuplot – a command-line interface for 2D and 3D plots.",
      "ParaView – a visualization solution with a GUI, built on VTK algorithms.",
      "Streamlines – technique for visualizing vector fields.",
      "Isosurfaces – technique for connecting data points with similar values."
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 58,
    "module": 4,
    "session": 1,
    "question": "Question 2: In a high-performance application, you observe that a code accessing elements of an array with a stride of 4 (i.e., accessing every 4th element)\nperforms poorly due to cache inefficiency. Which of the following techniques can help mitigate this performance issue?",
    "options": [
      "Increase the cache size of the system.",
      "Change the access pattern to sequential access within a loop.",
      "Change the array layout to column-major order.",
      "Use software prefetching to load the data ahead of use.",
      "Add more processors to reduce computation time."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 59,
    "module": 4,
    "session": 1,
    "question": "In distributed computing, load balancing is critical for optimizing performance. Consider a weather simulation model where different\ngeographical regions are processed on multiple nodes. Which data structure and strategy would you use to minimize load imbalance and communication\noverhead between nodes?",
    "options": [
      "Use an array structure with static assignment of regions to nodes.",
      "Implement a dynamic load balancing mechanism with a distributed hash table (DHT) to evenly distribute workloads.",
      "Partition the grid using a row-major layout and assign rows to processors sequentially.",
      "Use a linked list structure to store regions and assign them to processors dynamically.",
      "Assign more computationally intensive regions to more powerful nodes manually."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 60,
    "module": 4,
    "session": 1,
    "question": "Question 6: Sparse matrices are widely used in HPC for handling large, sparse datasets. Which sparse matrix storage\nformat is the most efficient for parallelizing matrix-vector multiplication on a distributed memory system?",
    "options": [
      "Compressed Sparse Row (CSR)",
      "Compressed Sparse Column (CSC)",
      "Coordinate List (COO)",
      "Blocked Sparse Row (BSR)",
      "Diagonal (DIA)"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 61,
    "module": 4,
    "session": 1,
    "question": "When parallelizing a task using OpenMP for a large dataset with irregular workloads across iterations,\nwhich scheduling policy is most appropriate to ensure load balancing and efficient use of all threads?",
    "options": [
      "Static scheduling",
      "Dynamic scheduling",
      "Guided scheduling",
      "Affinity scheduling",
      "Static chunk scheduling"
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 62,
    "module": 4,
    "session": 1,
    "question": "Which of the following data structures is most suited for evenly distributing computational workloads\nacross nodes in a distributed memory system to minimize communication overhead?",
    "options": [
      "Array with static partitioning",
      "Linked list with dynamic updates",
      "Distributed Hash Table (DHT)",
      "Heap with dynamic rebalancing",
      "Priority queue with synchronized access"
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 63,
    "module": 4,
    "session": 1,
    "question": "Question 12: In high-performance computing, prefetching can be used to hide memory access latencies. Which type of\nprefetching is most suitable for improving performance in applications with predictable memory access patterns?",
    "options": [
      "Hardware prefetching",
      "Software prefetching",
      "Random prefetching",
      "Cache-aware prefetching",
      "Compiler-directed prefetching"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 64,
    "module": 4,
    "session": 1,
    "question": "Question 13: In a parallel environment with multiple threads accessing a shared hash table, which mechanism is most\nappropriate to ensure thread-safe operations without introducing significant contention?",
    "options": [
      "Coarse-grained locking",
      "Fine-grained locking",
      "Lock-free hash tables",
      "Read-write locks",
      "Atomic operations for all hash table updates"
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 65,
    "module": 4,
    "session": 1,
    "question": "Question 14: For sparse matrices with irregular sparsity patterns, which storage format provides the best balance of memory\nefficiency and computational performance for sparse matrix-vector multiplication?",
    "options": [
      "Compressed Sparse Row (CSR)",
      "Ellpack-Itpack (ELL)",
      "Diagonal (DIA)",
      "Coordinate List (COO)",
      "Jagged Diagonal Storage (JDS)"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 66,
    "module": 4,
    "session": 1,
    "question": "Question 15: In high-performance computing, matrix multiplication can be optimized using blocked algorithms to\ntake advantage of cache locality. Given the following C++ code for a simple blocked matrix multiplication, identify\nthe key performance improvement provided by this approach.\n#define BLOCK_SIZE 64\nvoid blocked_matrix_multiply(double* A, double* B, double* C, int N) {\nfor (int i = 0; i < N; i += BLOCK_SIZE) {\nfor (int j = 0; j < N; j += BLOCK_SIZE) {\nfor (int k = 0; k < N; k += BLOCK_SIZE) {\nfor (int ii = i; ii < i + BLOCK_SIZE && ii < N; ++ii) {\nfor (int jj = j; jj < j + BLOCK_SIZE && jj < N; ++jj) {\nfor (int kk = k; kk < k + BLOCK_SIZE && kk < N; ++kk) {\nC[ii * N + jj] += A[ii * N + kk] * B[kk * N + jj];\n}\n}\n}\n}\n}\n}\n}\nWhat is the primary performance benefit of using the blocked algorithm in this code?",
    "options": [
      "It minimizes memory usage.",
      "It improves cache locality by accessing small blocks of data that fit in the cache.",
      "It reduces computational complexity.",
      "It reduces the number of arithmetic operations."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 67,
    "module": 4,
    "session": 1,
    "question": "Question 17: Consider the following C++ code for parallelizing in-order traversal of a binary search tree (BST) using OpenMP. WhichOpenMP construct ensures that tree\nnodes are processed in parallel?\n#include <omp.h>\n#include <iostream>\nstruct Node {\nint key;\nNode* left;\nNode* right;\n};\nvoid parallel_inorder_traversal(Node* node) {\nif (node == nullptr) return;\n#pragma omp task shared(node)\nparallel_inorder_traversal(node->left);\n#pragma omp taskwait\nstd::cout << node->key << \" \";\n#pragma omp task shared(node)\nparallel_inorder_traversal(node->right);\n}\nint main() {\nNode* root = ...; // Assume BST is initialized here\n#pragma omp parallel\n{\n#pragma omp single\nparallel_inorder_traversal(root);\n}\nreturn 0;\n}\nWhat does the #pragma omp task directive achieve in this parallel in-order traversal?",
    "options": [
      "It divides the work between multiple processes.",
      "It spawns new parallel tasks for left and right subtree traversals.",
      "It ensures that node access is synchronized across threads.",
      "It vectorizes the traversal loop for faster execution."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 68,
    "module": 4,
    "session": 1,
    "question": "Question 18: In a concurrent hash table, fine-grained locks are used to reduce contention.\nAnalyze the following C++ implementation of a thread-safe hash table using fine-grained locking.\nWhat is the advantage of using fine-grained locks here?\n#include <iostream>\n#include <vector>\n#include <mutex>\n#include <list>\ntemplate <typename K, typename V>\nclass ConcurrentHashTable {\nstruct Entry {\nK key;\nV value;\n};\nstd::vector<std::list<Entry>> table;\nstd::vector<std::mutex> locks;\nsize_t hashFunction(const K& key) {\nreturn std::hash<K>{}(key) % table.size();\n}\npublic:\nConcurrentHashTable(size_t size) : table(size), locks(size) {}\nvoid insert(const K& key, const V& value) {\nsize_t index = hashFunction(key);\nstd::lock_guard<std::mutex> lock(locks[index]);\nfor (auto& entry : table[index]) {\nif (entry.key == key) {\nentry.value = value;\nreturn;\n}\n}\ntable[index].emplace_back(Entry{key, value});\n}\nbool find(const K& key, V& value) {\nsize_t index = hashFunction(key);\nstd::lock_guard<std::mutex> lock(locks[index]);\nfor (const auto& entry : table[index]) {\nif (entry.key == key) {\nvalue = entry.value;\nreturn true;\n}\n}\nreturn false;\n}\nWhat is the primary advantage of using fine-grained locks\nin this hash table implementation?",
    "options": [
      "It ensures faster hash computations.",
      "It reduces contention by allowing multiple threads to operate on different buckets concurrently.",
      "It locks the entire hash table to ensure thread-safety.",
      "It ensures atomic access to individual hash entries."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 69,
    "module": 4,
    "session": 1,
    "question": "The following CUDA code performs sparse matrix-vector multiplication using the CSR format. Analyse the performance characteristics of this CUDA kernel.\n__global__ void spmv_csr_cuda(int n, const double* values, const int* col_idx,\nconst int* row_ptr, const double* x, double* y) {\nint row = blockIdx.x * blockDim.x + threadIdx.x;\nif (row < n) {\ndouble sum = 0.0;\nfor (int j = row_ptr[row]; j < row_ptr[row + 1]; j++) {\nsum += values[j] * x[col_idx[j]];\n}\ny[row] = sum;\n}\n}\nvoid spmv_csr_launch(int n, const double* values, const int* col_idx,\nconst int* row_ptr, const double* x, double* y) {\nint blockSize = 256;\nint gridSize = (n + blockSize - 1) / blockSize;\nspmv_csr_cuda<<<gridSize, blockSize>>>(n, values, col_idx, row_ptr, x, y);\n}\nWhat is the key advantage of using CUDA for sparse matrix-vector multiplication in this implementation?",
    "options": [
      "It reduces the computational complexity of the algorithm.",
      "It parallelizes the computation by assigning each row to a GPU thread, maximizing data throughput.",
      "It uses atomic operations to ensure thread-safety.",
      "It reduces the memory footprint of the matrix by compressing the data"
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 70,
    "module": 4,
    "session": 1,
    "question": "Question 20: You have a large dataset that needs to be processed and visualized in parallel using Python's multiprocessing library and matplotlib.\nThe following code parallelizes the computation of data and visualizes the results. What is the purpose of using multiprocessing in this visualization task?\nimport matplotlib.pyplot as plt\nimport numpy as np\nfrom multiprocessing import Pool\ndef compute_and_plot(data_chunk):\nplt.figure()\nplt.plot(data_chunk)\nplt.savefig(f'plot_{data_chunk[0]}.png')\nif __name__ == \"__main__\":\ndata = np.random.randn(100000)\nchunks = np.array_split(data, 10) # Split data into 10 chunks\nwith Pool(4) as p: # Use 4 parallel processes",
    "options": [
      "map(compute_and_plot, chunks) What is the main advantage of using multiprocessing for visualizing large datasets?",
      "It reduces memory usage.",
      "It allows data to be processed and visualized concurrently, reducing total execution time.",
      "It generates more accurate visualizations.",
      "It simplifies the visualization logic."
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 71,
    "module": 4,
    "session": 1,
    "question": "Question 22: In HPC, high-dimensional data can be visualized using Principal Component Analysis (PCA) to reduce dimensionality. The following Python code applies PCA to a\nhigh-dimensional dataset and visualizes the results in 2D. What is the role of PCA in this visualization?\nimport matplotlib.pyplot as plt\nfrom sklearn.decomposition import PCA\nfrom sklearn.datasets import load_iris\n# Load dataset\ndata = load_iris()\nX = data.data\n# Apply PCA to reduce dimensionality to 2D\npca = PCA(n_components=2)\nX_pca = pca.fit_transform(X)\n# Plot the transformed data\nplt.scatter(X_pca[:, 0], X_pca[:, 1], c=data.target)\nplt.xlabel('PC 1')\nplt.ylabel('PC 2')\nplt.title('PCA of Iris Dataset')\nplt.show()\nWhat does PCA achieve in this visualization task?",
    "options": [
      "It reduces the number of data points to be plotted.",
      "It reduces the dimensionality of the data from 4D to 2D, making it possible to visualize.",
      "It clusters the data into distinct groups for easier visualization.",
      "It increases the computational efficiency of the plot."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 72,
    "module": 4,
    "session": 1,
    "question": "You are training a deep learning model on a dataset that is too large to fit\ninto the memory of a single GPU. You have access to a system with multiple\nGPUs across several machines. Your objective is to minimize training time\nwhile maintaining the accuracy of the model. What is the most suitable\nTensorFlow strategy to use in this scenario, and why?",
    "options": [
      "Mirrored Strategy: Single machine with multiple GPUs, synchronous training.",
      "Parameter Server Strategy: Multiple machines, asynchronous training.",
      "Central Storage Strategy: Single machine with multiple GPUs, synchronous training.",
      "Multi-Worker Mirrored Strategy: Multiple machines, synchronous training.",
      "Sequential Strategy: Single machine with a single GPU, training one step at a time."
    ],
    "correctAnswer": [
      3
    ],
    "multipleCorrect": false
  },
  {
    "id": 73,
    "module": 4,
    "session": 1,
    "question": "You want to train a model on multiple GPUs using TensorFlow. Below is a snippet of code\nfor single-GPU training. How should you modify the code to use all available GPUs on the\nmachine?\nimport tensorflow as tf\nstrategy = ??? # Fill in the missing part\nwith strategy.scope():\nmodel = create_model()\nmodel.compile(optimizer='adam',\nloss='sparse_categorical_crossentropy')\nmodel.fit(train_dataset, epochs=5)",
    "options": [
      "tf.distribute.MultiWorkerMirroredStrategy()",
      "tf.distribute.MirroredStrategy()",
      "tf.distribute.Strategy()",
      "tf.distribute.experimental.CentralStorageStrategy()",
      "tf.distribute.DistributeTPUStrategy()"
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 74,
    "module": 4,
    "session": 1,
    "question": "You want to perform distributed training across multiple nodes with TensorFlow. How\ncan you adapt the following code to work across 4 nodes, each with multiple GPUs?\nimport tensorflow as tf\nstrategy = ??? # Fill in the missing part\nwith strategy.scope():\nmodel = create_model()\nmodel.compile(optimizer='adam',\nloss='sparse_categorical_crossentropy')\nmodel.fit(train_dataset, epochs=5)",
    "options": [
      "Use tf.distribute.MirroredStrategy()",
      "Use tf.distribute.MultiWorkerMirroredStrategy()",
      "Run the model separately on each node without distributing",
      "Use tf.distribute.experimental.ParameterServerStrategy()",
      "Use tf.distribute.experimental.TPUStrategy()"
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 75,
    "module": 4,
    "session": 1,
    "question": "Consider the following PyTorch code where you are training a large model that does not fit on a single GPU, so you apply model parallelism by manually\nsplitting the model across two GPUs. In this implementation of model parallelism, what is a major drawback of the current approach, and how can it be\nimproved for better performance?\nimport torch\nimport torch.nn as nn\n# Model with two components placed on different GPUs\nclass LargeModel(nn.Module):\ndef\n__\ninit__(self):\nsuper(LargeModel, self).\n__\ninit__()\nself.layer1 = nn.Linear(4096, 2048).cuda(0) # Place on GPU 0\nself.layer2 = nn.Linear(2048, 1024).cuda(1) # Place on GPU 1\ndef forward(self, x):\nx = x.cuda(0)\nx = self.layer1(x)\nx = x.cuda(1)\nx = self.layer2(x)\nreturn x\n# Instantiate model\nmodel = LargeModel()\n# Example input\ninput_data = torch.randn(64, 4096).cuda(0)\n# Forward pass\noutput = model(input_data)",
    "options": [
      "The model is not parallelized effectively since both layers could be run on the same GPU to avoid data transfer.",
      "There is inefficient GPU utilization because the second layer runs on CPU, which increases latency.",
      "The data transfer between GPUs causes synchronization delays, and it can be improved by using more efficient interconnects like NVLink or using torch.distributed for communication.",
      "Model parallelism reduces memory usage, but it also increases the risk of gradient vanishing due to additional GPU operations.",
      "Using larger batch sizes would mitigate the impact of GPU communication overhead, making this implementation efficient."
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 76,
    "module": 4,
    "session": 1,
    "question": "Which of the following is NOT a benefit of integrating AI models into HPC\nenvironments for weather prediction?",
    "options": [
      "Reduced model training time due to parallel processing.",
      "Ability to handle more complex simulations.",
      "Efficient use of multiple GPUs for data processing.",
      "Reduced need for data preprocessing.",
      "Ability to predict extreme weather events with higher accuracy."
    ],
    "correctAnswer": [
      3
    ],
    "multipleCorrect": false
  },
  {
    "id": 77,
    "module": 4,
    "session": 1,
    "question": "A startup wants to implement an AI solution to analyze customer behavior. They are in the early stages and have limited data, but they anticipate the data size to grow exponentially. Considering future growth, what architectural advice would you give them for their AI workload in HPC?",
    "options": [
      "Focus on a scale-up architecture, adding more power to a single machine.",
      "Use only TensorFlow for its scalability.",
      "Focus on a scale-out architecture, adding more machines to the setup.",
      "Rely solely on CPU-based computations.",
      "Store all dat"
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 78,
    "module": 4,
    "session": 1,
    "question": "The use of mixed precision training can reduce memory usage and improve performance when\ntraining large models. Given the following PyTorch code, identify what change should be made\nto enable mixed precision training:\nimport torch\nimport torch.optim as optim\nmodel = LargeModel().cuda()\noptimizer = optim.Adam(model.parameters(), lr=1e-4)\nfor data, target in train_loader:\noptimizer.zero_grad()\noutput = model(data)\nloss = loss_function(output, target)\nloss.backward()\noptimizer.step()",
    "options": [
      "Add with torch.cuda.amp.autocast() context around forward pass",
      "Reduce the learning rate",
      "Add .half() to the model parameters",
      "Use FP16 for the optimizer",
      "Increase the batch size"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 79,
    "module": 4,
    "session": 1,
    "question": "You are training a large-scale model that does not fit into the memory\nof your GPUs when using a batch size of 2048. Using gradient\naccumulation over 4 mini-batches, each of size 512, enables you to\nsimulate the desired batch size without memory overflow. Which of the\nfollowing is true regarding the training process with gradient\naccumulation?",
    "options": [
      "The model updates its parameters after each mini-batch of size 512.",
      "The gradients are accumulated over four mini-batches, and the parameters are updated after each mini-batch.",
      "The loss for each mini-batch must be normalized by 4 during gradient accumulation.",
      "Gradient accumulation requires more memory compared to using a single large batch.",
      "Gradient accumulation reduces the effective batch size."
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 80,
    "module": 4,
    "session": 1,
    "question": "The use of mixed precision training can reduce memory usage and improve performance\nwhen training large models. Given the following PyTorch code, identify what change\nshould be made to enable mixed precision training:\nimport torch\nimport torch.optim as optim\nmodel = LargeModel().cuda()\noptimizer = optim.Adam(model.parameters(), lr=1e-4)\nfor data, target in train_loader:\noptimizer.zero_grad()\noutput = model(data)\nloss = loss_function(output, target)\nloss.backward()\noptimizer.step()",
    "options": [
      "Add with torch.cuda.amp.autocast() context around forward pass",
      "Reduce the learning rate",
      "Add .half() to the model parameters",
      "Use FP16 for the optimizer",
      "Increase the batch size"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 81,
    "module": 4,
    "session": 1,
    "question": "Efficient parallelism is essential when training large deep learning\nmodels like BERT and GPT-3. Which of the following types of\nhardware interconnects would most likely minimize communication\noverhead in a large-scale, distributed deep learning setup with\nthousands of GPUs?",
    "options": [
      "PCI Express (PCIe)",
      "Ethernet",
      "Infiniband",
      "USB 3.0",
      "SATA"
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 82,
    "module": 4,
    "session": 1,
    "question": "You are training a deep learning model too large to fit\non a single GPU using model parallelism. Each layer\nof the model is split across two GPUs. However, you\nnotice a significant delay in training due to\ncommunication between GPUs. Which of the\nfollowing adjustments is most likely to reduce the\ndelay without compromising the training?",
    "options": [
      "Increase the batch size",
      "Use asynchronous updates across GPUs",
      "Increase the learning rate",
      "Use larger GPUs with more memory",
      "Minimize communication between GPUs by redistributing layers"
    ],
    "correctAnswer": [
      4
    ],
    "multipleCorrect": false
  },
  {
    "id": 83,
    "module": 4,
    "session": 1,
    "question": "When optimizing time-to-solution for training a large-scale deep learning model,\nwhich of the following techniques would most effectively reduce the overall time\nrequired for training, assuming the same hardware configuration?",
    "options": [
      "Using a lower learning rate throughout training",
      "Running the model on CPUs instead of GPUs",
      "Using gradient accumulation to increase effective batch size",
      "Applying mixed precision training",
      "Reducing the number of layers in the model"
    ],
    "correctAnswer": [
      3
    ],
    "multipleCorrect": false
  },
  {
    "id": 84,
    "module": 4,
    "session": 1,
    "question": "In a data parallelism setup, you distribute the training data across 8 GPUs,\neach with a batch size of 64. After every mini-batch, each GPU computes\ngradients locally, which are then synchronized across GPUs. What would be\nthe effective batch size for the training job, and what is a potential downside\nof increasing the batch size further?",
    "options": [
      "Effective batch size: 512, downside: increased communication overhead",
      "Effective batch size: 512, downside: slower gradient updates",
      "Effective batch size: 64, downside: underfitting due to small gradients",
      "Effective batch size: 64, downside: reduced memory usage",
      "Effective batch size: 8, downside: insufficient data per batch"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 85,
    "module": 4,
    "session": 1,
    "question": "When training deep neural networks with many\nlayers, vanishing gradients can be a significant\nissue, particularly with activation functions like\nsigmoid or tanh. Suppose you are using ReLU\n(Rectified Linear Unit) activation in your model.\nWhich of the following strategies is most likely to\nfurther mitigate vanishing gradients while training a\n50-layer deep convolutional neural network?",
    "options": [
      "Use dropout to reduce overfitting",
      "Apply weight regularization (L2)",
      "Implement residual connections (ResNet)",
      "Use gradient clipping",
      "Use batch normalization only in the last layer"
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 86,
    "module": 4,
    "session": 1,
    "question": "You are tasked with training a convolutional neural network (CNN) on two GPUs using PyTorch. You want to distribute the training across both GPUs. Below is a partial code\nsnippet for training on one GPU. Which modification would you make to train the model\nusing both GPUs?\nimport torch\nimport torch.nn as nn\nimport torch.optim as optim",
    "options": [
      "Use nn.DistributedDataParallel(model) model = CNNModel().cuda() optimizer = optim.Adam(model.parameters())",
      "Replace model = CNNModel().cuda() with model = nn.DataParallel(CNNModel())",
      "Use torch.multiprocessing.spawn() to launch multiple processes for data, target in dataloader:",
      "Use .half() precision for mixed precision training optimizer.zero_grad()",
      "Initialize the model inside a with torch.cuda.amp.autocast() contextoutput = model(data.cuda()) loss = loss_function(output, target.cuda()) loss.backward() optimizer.step()"
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 87,
    "module": 4,
    "session": 1,
    "question": "Question 15: When performing distributed training across multiple nodes with PyTorch’s DistributedDataParallel, which environment variables must be set to ensure\nproper communication between nodes, and what role does each play?",
    "options": [
      "MASTER_ADDR, MASTER_PORT, RANK, WORLD_SIZE",
      "CUDA_VISIBLE_DEVICES, RANK, NODE_COUNT, GPUS_PER_NODE",
      "MASTER_NODE, PROCESS_COUNT, GPU_COUNT, RANK",
      "RANK, MASTER_IP, GPU_COUNT, BATCH_SIZE",
      "WORLD_RANK, NODE_IP, GPU_ID, MASTER_PORT"
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 88,
    "module": 4,
    "session": 1,
    "question": "Question 20: You are training a deep learning model using Horovod for distributed training across 8 GPUs. Each GPU calculates its own gradient, and then gradients are\naveraged across all GPUs using the AllReduce operation. Suppose you observe that the training process becomes communication-bound as the number of GPUs increases.\nWhat is the most effective way to minimize the communication\noverhead while maintaining convergence?",
    "options": [
      "Reduce the batch size to make gradient synchronization faster.",
      "Use Horovod's gradient compression to reduce the size of data transferred during synchronization.",
      "Switch from Horovod to PyTorch’s native DistributedDataParallel.",
      "Reduce the number of GPUs to reduce synchronization time.",
      "Increase the frequency of synchronization across GPUs."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 89,
    "module": 4,
    "session": 1,
    "question": "Question 21: Imagine you are training a distributed model for classifying medical images across multiple GPUs, but the dataset is highly imbalanced\n(with far fewer images of rare conditions). Which strategy\nwould best handle this imbalance while taking advantage of distributed training?",
    "options": [
      "Use over-sampling of the minority class on each GPU.",
      "Train separate models on different GPUs for each class.",
      "Use data augmentation to create synthetic examples of the minority class.",
      "Implement weighted loss functions to give more importance to rare classes.",
      "Train with a smaller batch size to prevent the imbalance from affecting convergence."
    ],
    "correctAnswer": [
      3
    ],
    "multipleCorrect": false
  },
  {
    "id": 90,
    "module": 4,
    "session": 1,
    "question": "Question 22: You are training a large-scale transformer model across multiple GPUs. The training was initially done with a batch size of 128 on\na single GPU, but after moving to a distributed setup with 8 GPUs, the effective batch size is now 1024. The model struggles with convergence,\nand accuracy is not improving. What should you adjust to maintain good model performance?",
    "options": [
      "Increase the learning rate proportionally to the batch size.",
      "Reduce the number of GPUs to reduce the batch size.",
      "Switch to a smaller model to prevent overfitting.",
      "Use gradient accumulation to simulate a smaller batch size.",
      "Lower the learning rate to avoid large gradient updates."
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 91,
    "module": 4,
    "session": 1,
    "question": "While training a model with mixed precision (FP16) on NVIDIA V100 GPUs, you observe that the training is fast but sometimes\nsuffers from numerical instability. What is the best approach to prevent instability while continuing to benefit from mixed precision training?",
    "options": [
      "Switch to FP32 for all operations to avoid numerical instability.",
      "Use dynamic loss scaling, which automatically scales the loss to prevent overflow and underflow.",
      "Decrease the batch size to improve stability.",
      "Switch from mixed precision to lower precision formats like FP8 to reduce memory usage further.",
      "Disable backpropagation to avoid instability"
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 92,
    "module": 4,
    "session": 1,
    "question": "Question 24: Your company is developing a natural language processing model with 350 billion parameters. Due to the size of the model, a\nsingle GPU does not have enough memory to store all the model parameters. You are considering whether to use model parallelism or data\nparallelism. Which statement about model parallelism is correct, and why might it be a better choice in this scenario?",
    "options": [
      "Model parallelism is less efficient than data parallelism because it leads to communication bottlenecks between GPUs.",
      "Model parallelism is better for large models since it distributes model layers across multiple GPUs, reducing memory usage per GPU.",
      "Data parallelism should always be used because it improves gradient synchronization efficiency.",
      "Model parallelism is less flexible than data parallelism since it requires each GPU to have the same portion of data.",
      "Model parallelism is faster because it reduces the overall number of GPUs needed."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 93,
    "module": 4,
    "session": 1,
    "question": "You are training a deep neural network with multiple hidden layers using the\nsigmoid activation function, and you observe very slow learning. You decide\nto switch to the ReLU (Rectified Linear Unit) activation function. Why would\nthis help mitigate the vanishing gradient problem?",
    "options": [
      "ReLU has a non-linear output range that ensures large gradients in every layer.",
      "ReLU prevents vanishing gradients by allowing negative outputs, which ensures better gradient flow.",
      "ReLU does not saturate in the positive range, allowing gradients to propagate effectively through many layers.",
      "ReLU increases the learning rate, which helps avoid vanishing gradients.",
      "ReLU operates in the same way as sigmoid, so there is no improvement in gradient flow."
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 94,
    "module": 4,
    "session": 1,
    "question": "Question 15: You are training a deep learning model on a GPU with limited\nmemory, so you decide to use gradient accumulation. What is the primary\nreason for using gradient accumulation?",
    "options": [
      "It allows training with larger effective batch sizes by accumulating gradients over multiple mini-batches.",
      "It reduces the number of weight updates, resulting in faster convergence.",
      "It increases memory efficiency by performing gradient updates more frequently.",
      "It speeds up training by reducing the time spent computing gradients.",
      "It reduces overfitting by performing smaller gradient updates."
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 95,
    "module": 4,
    "session": 1,
    "question": "You are training a large deep learning model on multiple GPUs using data parallelism in PyTorch. Below is the partial code of the training loop. What\nwould be the result of running this script on a machine with 4 GPUs?\nimport torch\nimport torch.nn as nn\nimport torch.optim as optim\nclass SimpleModel(nn.Module):\ndef\n__\ninit__(self):\nsuper(SimpleModel, self).\n__\ninit__()\nself.fc1 = nn.Linear(1024, 512)\nself.fc2 = nn.Linear(512, 10)\ndef forward(self, x):\nx = torch.relu(self.fc1(x))\nreturn self.fc2(x)\n# Model instantiation\nmodel = SimpleModel()\n# Setting up Data Parallelism\nif torch.cuda.device_count() > 1:\nmodel = nn.DataParallel(model)\nmodel.cuda()\noptimizer = optim.SGD(model.parameters(), lr=0.01)\n# Data input for one batch\ninput_data = torch.randn(64, 1024).cuda()\n# Forward pass\noutput = model(input_data)",
    "options": [
      "The script will throw an error since nn.DataParallel does not support multi-GPU.",
      "The script will run, but only one GPU will be utilized.",
      "The script will execute using all 4 GPUs, and each GPU will handle a separate portion of the data batch.",
      "Only two GPUs will be utilized since PyTorch limits data parallelism to 2 GPUs.",
      "The script will execute on 4 GPUs, but all data will be processed on the main GPU, reducing efficiency."
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 96,
    "module": 4,
    "session": 1,
    "question": "You are training a transformer model that exceeds your GPUS's memory capacity. To solve this, you use gradient\naccumulation to simulate larger batch sizes. What is the main purpose of dividing the loss by accumulation_Steps? Consider\nthe following code snippet:\naccumulation_steps = 4\noptimizer.zero_grad()\nfor i, data in enumerate(dataloader):\noutput = model(data)\nloss = loss_function(output, labels)\nloss = loss / accumulation_steps # Scale loss\nloss.backward()\nif (i + 1) % accumulation_steps == 0:\noptimizer.step()\noptimizer.zero_grad()",
    "options": [
      "To reduce the overall memory usage during training.",
      "To make the loss values smaller for numerical stability during backpropagation.",
      "To average the gradients over the accumulated mini-batches, ensuring the same effective batch size.",
      "To prevent overfitting by introducing random noise to the gradient updates.",
      "To increase the number of updates for each epoch."
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 97,
    "module": 4,
    "session": 1,
    "question": "Consider the following TensorFlow code to train a model using mixed precision. What is the\nprimary advantage of using mixed precision training for large-scale deep learning models?\nimport tensorflow as tf\nfrom tensorflow.keras.mixed_precision import experimental as mixed_precision\npolicy = mixed_precision.Policy('mixed_float16')\nmixed_precision.set_policy(policy)\n# Model and optimizer setup\nmodel = create_model()\noptimizer = tf.keras.optimizers.Adam()\n# Compile the model with loss and metrics\nmodel.compile(optimizer=optimizer,loss='sparse_categorical_crossentropy',\nmetrics=['accuracy'])\n# Train the model\nmodel.fit(train_dataset, epochs=5)",
    "options": [
      "It reduces the number of training epochs needed for convergence.",
      "It decreases memory usage and speeds up computation by using 16-bit floating-point (FP16) operations where possible.",
      "It prevents overfitting by using lower-precision gradients during backpropagation.",
      "It increases model accuracy by using higher-precision weights in the forward pass.",
      "It makes the model compatible with TPU hardware, which only supports FP16 precision."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 98,
    "module": 4,
    "session": 1,
    "question": "You are training a model with 1 billion parameters on an HPC cluster\nusing data parallelism across 32 GPUs. Training the model on a single\nGPU takes 100 days. Assuming perfect scaling, how long would it take\nto train the model on 32 GPUs?",
    "options": [
      "100 days.",
      "50 days.",
      "3.125 days.",
      "25 days.",
      "10 days."
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 99,
    "module": 4,
    "session": 1,
    "question": "You are training a large deep learning model that exceeds the memory capacity of a single GPU. You implement\nmodel parallelism by splitting the model layers across two GPUs. Which of the following best describes the effect of\nthis change?",
    "options": [
      "The training time will be halved because two GPUs will perform the same operations in parallel.",
      "The memory footprint on each GPU will be reduced, but the communication overhead between GPUs may increase the total training time.",
      "The training time will remain unchanged, but you will now be able to use larger batch sizes.",
      "Model parallelism will reduce the overall memory usage but increase the risk of vanishing gradients.",
      "The training will now run twice as fast because each GPU handles half of the model’s operations."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 100,
    "module": 4,
    "session": 1,
    "question": "You add batch normalization to your deep neural\nnetwork, and it significantly improves training speed.\nWhat is the primary reason that batch normalization\nhelps mitigate the vanishing gradient problem?",
    "options": [
      "It reduces the learning rate, preventing large oscillations in the loss function.",
      "It normalizes the input of each layer, keeping the input values within a range that prevents gradients from vanishing.",
      "It adds noise to the model weights, which helps prevent overfitting and improves gradient propagation.",
      "It forces all activations to be positive, which guarantees non-vanishing gradients.",
      "It automatically adjusts the learning rate, ensuring faster convergence."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 101,
    "module": 4,
    "session": 1,
    "question": "You are designing a deep residual network (ResNet) to avoid\nthe vanishing gradient problem. Which of the following best\nexplains how residual connections help in this regard?",
    "options": [
      "They average the gradients across layers, ensuring no vanishing gradients.",
      "They introduce a new activation function that prevents gradients from vanishing.",
      "They bypass layers using shortcut connections, allowing gradients to flow directly to earlier layers without diminishing.",
      "They allow for a larger learning rate, which prevents gradients from vanishing.",
      "They ensure that gradients are always positive by using ReLU in the residual connections."
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 102,
    "module": 4,
    "session": 1,
    "question": "You are training a convolutional neural network (CNN) on an NVIDIA GPU and decide to use cuDNN to accelerate the training process. How does\ncuDNN optimize convolution operations in deep learning?",
    "options": [
      "It changes the model’s architecture to reduce the number of layers.",
      "It performs automatic batch normalization to prevent overfitting.",
      "It provides highly optimized implementations of convolution operations that run efficiently on NVIDIA GPUs.",
      "It automatically reduces the model’s memory footprint by splitting large tensors across multiple GPUs.",
      "It compresses the input data to reduce the number of calculations needed during training."
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 103,
    "module": 4,
    "session": 1,
    "question": "You are training a recurrent neural network (RNN) for sequence data. How does cuDNN\nimprove the performance of RNNs on NVIDIA GPUs?",
    "options": [
      "It optimizes gradient calculations during backpropagation to reduce memory usage.",
      "It provides optimized implementations for recurrent layers, reducing computation time and improving memory efficiency.",
      "It parallelizes the RNN across multiple GPUs without requiring any code changes.",
      "It automatically handles vanishing gradients by scaling the gradients during backpropagation.",
      "It reduces the need for hidden layers, making the RNN model simpler and faster."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 104,
    "module": 4,
    "session": 1,
    "question": "When increasing the batch size by a factor of 4 during training, what should you do to the learning rate according to the linear scaling rule?",
    "options": [
      "Decrease the learning rate by a factor of 4.",
      "Keep the learning rate unchanged.",
      "Increase the learning rate by a factor of 4.",
      "Double the learning rate to compensate for fewer updates.",
      "Reduce the learning rate by half to avoid overfitting."
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 105,
    "module": 4,
    "session": 1,
    "question": "You are scaling the batch size to fit more data in GPU memory for distributed training. What is a potential drawback of using very large batch sizes (e.g.,",
    "options": [
      "?",
      "Larger batch sizes lead to noisier gradient updates, which increases the risk of overfitting.",
      "Using larger batch sizes significantly increases the risk of vanishing gradients during training.",
      "Large batch sizes reduce the number of weight updates per epoch, which may slow down convergence and degrade generalization.",
      "Larger batch sizes make the training process less stable due to frequent gradient clipping.",
      "Large batch sizes eliminate the need for data parallelism, causing synchronization overhead."
    ],
    "correctAnswer": [
      3
    ],
    "multipleCorrect": false
  },
  {
    "id": 106,
    "module": 4,
    "session": 1,
    "question": "Question 16: Consider the following code snippet using gradient accumulation. Why is it important to divide the loss by accumulation_steps in this code?\naccumulation_steps = 4\noptimizer.zero_grad()\nfor i, data in enumerate(dataloader):\noutput = model(data)\nloss = loss_function(output, labels)\nloss = loss / accumulation_steps\nloss.backward()\nif (i + 1) % accumulation_steps == 0:\noptimizer.step()\noptimizer.zero_grad()",
    "options": [
      "To prevent the model from overfitting to the training data.",
      "To ensure that the gradients are properly averaged over the accumulated mini-batches.",
      "To reduce the overall memory footprint during training.",
      "To increase the learning rate for faster convergence.",
      "To limit the gradient updates to a smaller portion of the dataset."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 107,
    "module": 4,
    "session": 1,
    "question": "Question 17: You are training a model using gradient accumulation with 8 mini-batches, each of size 32. What is the effective batch size in this case?",
    "options": [
      "8",
      "32",
      "256",
      "64",
      "128"
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 108,
    "module": 4,
    "session": 1,
    "question": "You are working on training a large transformer model using mixed precision and gradient accumulation to fit it into memory. Below is a code snippet that implements\nboth. What is the role of GradScaler and why is it necessary when using both gradient accumulation and mixed precision training in this context?\nimport torch\nfrom torch.cuda.amp import autocast, GradScaler\n# Model, optimizer, and loss function setup\nmodel = TransformerModel().cuda()\noptimizer = torch.optim.Adam(model.parameters(), lr=3e-4)\nscaler = GradScaler()\naccumulation_steps = 4\noptimizer.zero_grad()\n# Training loop\nfor i, (inputs, labels) in enumerate(dataloader):\ninputs, labels = inputs.cuda(), labels.cuda()\nwith autocast(): # Mixed precision enabled\noutputs = model(inputs)\nloss = loss_function(outputs, labels)\nloss = loss / accumulation_steps # Accumulate loss\nscaler.scale(loss).backward() # Scale loss for mixed precision\nif (i + 1) % accumulation_steps == 0:\nscaler.step(optimizer) # Perform optimization step\nscaler.update() # Update scaling factor\noptimizer.zero_grad() # Clear gradients",
    "options": [
      "GradScaler dynamically scales the gradients to prevent overflow during backpropagation, which is critical when using FP16 precision.",
      "GradScaler ensures that the model's gradients are averaged correctly when accumulating gradients across mini-batches.",
      "GradScaler adjusts the learning rate based on the mini-batch size to stabilize training in mixed precision.",
      "GradScaler ensures the accumulation of loss across mini-batches is performed in FP32 precision, which is required for stability.",
      "GradScaler reduces the memory usage of gradient accumulation by storing gradients in lower precision."
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 109,
    "module": 4,
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
    "id": 110,
    "module": 4,
    "session": 1,
    "question": "In a Hadoop MapReduce job, the following code defines a custom partitioner to distribute data among reducers. What is the likely outcome of using this partitioner?\nimport org.apache.hadoop.mapreduce.Partitioner;\npublic class CustomPartitioner extends Partitioner<Text, IntWritable> {\n@Override\npublic int getPartition(Text key, IntWritable value, int numReduceTasks) {\nif (key.toString().charAt(0) < 'N') {\nreturn 0;\n} else {\nreturn 1;\n}\n}\n}",
    "options": [
      "The key-value pairs will be distributed to reducers randomly.",
      "All key-value pairs will go to the same reducer regardless of their content.",
      "The partitioner will divide the data based on the first letter of the key, sending keys starting with letters A-M to one reducer and N-Z to another.",
      "The partitioner will balance the load evenly across all reducers.",
      "The partitioner guarantees an equal number of keys per reducer."
    ],
    "correctAnswer": [
      2
    ],
    "multipleCorrect": false
  },
  {
    "id": 111,
    "module": 4,
    "session": 1,
    "question": "Examine the following MapReduce code snippet for counting the frequency of product IDs in a large dataset. What would be the most suitable input format for this program?\npublic class ProductCount {\npublic static class ProductMapper extends Mapper<Object, Text, Text, IntWritable> {\nprivate final static IntWritable one = new IntWritable(1);\nprivate Text productID = new Text();\npublic void map(Object key, Text value, Context context) throws IOException, InterruptedException {\nString[] fields = value.toString().split(\",\");\nproductID.set(fields[0]); // Product ID is the first field\ncontext.write(productID, one);\n}\n}\n}",
    "options": [
      "TextInputFormat, because each line in the dataset represents a single record that contains the product ID.",
      "SequenceFileInputFormat, because product IDs need to be stored in sequence for faster access.",
      "KeyValueTextInputFormat, because each line represents key-value pairs with multiple fields.",
      "BinaryInputFormat, since product IDs may be binary-encoded.",
      "NullInputFormat, because the mapper doesn't require the input."
    ],
    "correctAnswer": [
      0
    ],
    "multipleCorrect": false
  },
  {
    "id": 112,
    "module": 4,
    "session": 1,
    "question": "In parallel computing, how does graph partitioning help to improve load balancing and reduce communication overhead when processing large distributed graphs?",
    "options": [
      "By evenly distributing the number of vertices across processors.",
      "By minimizing the number of edges that cross partition boundaries.",
      "By centralizing all graph data in one processor.",
      "By storing only the highest-degree vertices in each partition.",
      "By replicating vertices across partitions to minimize communication."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  },
  {
    "id": 113,
    "module": 4,
    "session": 1,
    "question": "In the following Hadoop MapReduce program, what role does the cleanup() method in the mapper play, and when is it executed?\nimport java.io.IOException;\nimport org.apache.hadoop.io.IntWritable;\nimport org.apache.hadoop.io.Text;\nimport org.apache.hadoop.mapreduce.Mapper;\npublic class CustomMapper extends Mapper<Object, Text, Text, IntWritable> {\nprivate int recordCount = 0;\npublic void map(Object key, Text value, Context context) throws IOException, InterruptedException {\nrecordCount++;\n// Process each record...\n}\nprotected void cleanup(Context context) throws IOException, InterruptedException {\ncontext.write(new Text(\"Total Records Processed\"), new IntWritable(recordCount));\n}\n}",
    "options": [
      "It is executed after each record is processed to reset the state of the mapper.",
      "It runs once after all records have been processed by the mapper, allowing for final cleanup operations, such as emitting the total record count.",
      "It is called after each map task is completed to clean up temporary files.",
      "The cleanup() method is not needed and will never be executed in this case.",
      "It runs after the reduce phase to finalize the output."
    ],
    "correctAnswer": [
      1
    ],
    "multipleCorrect": false
  }
];
