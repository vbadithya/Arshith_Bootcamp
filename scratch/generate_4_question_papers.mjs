// scratch/generate_4_question_papers.mjs
// Defines the 4 official Question Papers set in student names for Python (and applicable courses)

export const PYTHON_QUESTION_PAPERS = [
  {
    id: "qp-arshith-kumar",
    studentName: "Arshith Kumar",
    candidateId: "ARB-STD-001",
    rollNo: "2026-AK-101",
    paperCode: "ARB-PY-QP01",
    title: "Paper 1: Arshith Kumar Examination Set",
    subtitle: "Architecture, Memory Model, Syntax Semantics & Data Structures",
    timeLimitMinutes: 45,
    passingScore: 80,
    totalMarks: 100,
    questions: [
      {
        id: "ak-1",
        questionNumber: 1,
        topic: "Python Execution Model & Bytecode",
        questionText: "During the execution of a Python script by CPython, which statement accurately describes the role of bytecode and the .pyc files located in __pycache__?",
        codeSnippet: null,
        options: [
          "Bytecode is CPU-native machine code directly executed by hardware registers without an interpreter",
          "Bytecode is an intermediate, platform-independent instruction set executed by the Python Virtual Machine (PVM); .pyc files cache this bytecode to accelerate subsequent startup times",
          "Bytecode is generated exclusively by JIT compilers like PyPy and is never produced in standard CPython",
          ".pyc files store compressed source code to save disk space and have no impact on execution speed"
        ],
        correctAnswer: 1,
        explanation: "CPython compiles source code (.py) into intermediate bytecode (.pyc) stored in __pycache__. On subsequent runs, CPython skips parsing and compilation if the source file timestamp matches the cached bytecode header."
      },
      {
        id: "ak-2",
        questionNumber: 2,
        topic: "Memory References & In-Place Mutation",
        questionText: "What will be the exact values of 'a' and 'c' after executing the following Python code snippet?",
        codeSnippet: "a = [10, 20, 30]\nb = a\nc = list(a)\nb.append(40)\na += [50]",
        options: [
          "a is [10, 20, 30, 40, 50], c is [10, 20, 30]",
          "a is [10, 20, 30, 50], c is [10, 20, 30, 40]",
          "a is [10, 20, 30, 40, 50], c is [10, 20, 30, 40, 50]",
          "a is [10, 20, 30, 40], c is [10, 20, 30]"
        ],
        correctAnswer: 0,
        explanation: "b = a binds 'b' to the same object in heap memory. c = list(a) creates a shallow clone. b.append(40) mutates the list. For lists, '+=' is an in-place extend (calls __iadd__), so 'a' becomes [10, 20, 30, 40, 50] while 'c' remains unaffected [10, 20, 30]."
      },
      {
        id: "ak-3",
        questionNumber: 3,
        topic: "Logical Operators & Short-Circuit Precedence",
        questionText: "What is the evaluated result of the following compound expression in Python?",
        codeSnippet: "result = [] or 0 or 'Arshith' and [1, 2, 3] or False",
        options: [
          "True",
          "'Arshith'",
          "[1, 2, 3]",
          "False"
        ],
        correctAnswer: 2,
        explanation: "'and' has higher precedence than 'or'. In ''Arshith' and [1, 2, 3]', since 'Arshith' is truthy, it evaluates to [1, 2, 3]. Then '[] or 0 or [1, 2, 3] or False' short-circuits at the first truthy value, which is [1, 2, 3]."
      },
      {
        id: "ak-4",
        questionNumber: 4,
        topic: "Assignment Expressions & Scoping",
        questionText: "What will be printed by the following code utilizing the walrus operator (:=)?",
        codeSnippet: "data = [2, 4, 6, 8]\nif (n := len(data)) > 3:\n    print(f'Length: {n}')\nprint(n)",
        options: [
          "Length: 4 followed by NameError: name 'n' is not defined",
          "Length: 4 followed by 4",
          "Length: 4 followed by None",
          "SyntaxError: invalid syntax"
        ],
        correctAnswer: 1,
        explanation: "The walrus operator := assigns the expression value to 'n' in the enclosing scope (not isolated to the if block). Thus 'n' persists after the if statement with the value 4."
      },
      {
        id: "ak-5",
        questionNumber: 5,
        topic: "Loop Else Clause Semantics",
        questionText: "What is the output of the following nested loop construct?",
        codeSnippet: "nums = [1, 3, 5, 7]\nfor x in nums:\n    if x % 2 == 0:\n        print('Even found')\n        break\nelse:\n    print('All odd')",
        options: [
          "Even found",
          "All odd",
          "No output printed",
          "Even found followed by All odd"
        ],
        correctAnswer: 1,
        explanation: "The 'else' block attached to a for or while loop executes only if the loop completes normally without encountering a 'break' statement. Since no even number was found, the loop completed fully and printed 'All odd'."
      },
      {
        id: "ak-6",
        questionNumber: 6,
        topic: "Mutable Default Parameter Trap",
        questionText: "What will be printed upon calling the function twice as shown below?",
        codeSnippet: "def record_score(score, history=[]):\n    history.append(score)\n    return history\n\nprint(record_score(85))\nprint(record_score(92))",
        options: [
          "[85] and [92]",
          "[85] and [85, 92]",
          "None and None",
          "[85, 92] and [85, 92]"
        ],
        correctAnswer: 1,
        explanation: "Default parameter expressions are evaluated once when the function is defined, not each time it is invoked. The mutable list is shared across subsequent calls, printing [85] then [85, 92]."
      },
      {
        id: "ak-7",
        questionNumber: 7,
        topic: "LEGB Scope Resolution & Nonlocal",
        questionText: "What is printed when outer() is executed?",
        codeSnippet: "def outer():\n    x = 10\n    def inner():\n        nonlocal x\n        x += 5\n    inner()\n    return x\nprint(outer())",
        options: [
          "10",
          "15",
          "UnboundLocalError",
          "NameError"
        ],
        correctAnswer: 1,
        explanation: "The 'nonlocal' keyword binds 'x' to the nearest enclosing non-global scope, modifying outer's local variable 'x' from 10 to 15."
      },
      {
        id: "ak-8",
        questionNumber: 8,
        topic: "Hashability & Dictionary Keys",
        questionText: "Which of the following data structures can be safely used as a key in a Python dictionary?",
        codeSnippet: null,
        options: [
          "['user_1', 'user_2']",
          "{'role': 'admin'}",
          "('admin', 101, [1, 2])",
          "('admin', 101, (1, 2))"
        ],
        correctAnswer: 3,
        explanation: "Dictionary keys must be hashable (__hash__). Tuples are only hashable if all elements contained within them are also hashable. A tuple containing a mutable list raises TypeError: unhashable type: 'list'."
      },
      {
        id: "ak-9",
        questionNumber: 9,
        topic: "Late Binding Closures in Comprehensions",
        questionText: "What will be printed when calling funcs[0]() and funcs[2]()?",
        codeSnippet: "funcs = [lambda: i * 2 for i in range(4)]\nprint(funcs[0](), funcs[2]())",
        options: [
          "0 4",
          "6 6",
          "0 0",
          "NameError: 'i' is not defined"
        ],
        correctAnswer: 1,
        explanation: "Python closures exhibit late binding: variables in closures are looked up when the inner function is called. When range(4) completes, 'i' equals 3. Both funcs[0]() and funcs[2]() evaluate 3 * 2 = 6."
      },
      {
        id: "ak-10",
        questionNumber: 10,
        topic: "Advanced Slicing with Negative Step",
        questionText: "What is the output of the slice text[6:1:-2]?",
        codeSnippet: "text = 'ABCDEFGH'",
        options: [
          "'GE'",
          "'GEC'",
          "'FDB'",
          "'HFD'"
        ],
        correctAnswer: 1,
        explanation: "Indices of 'ABCDEFGH' are A:0, B:1, C:2, D:3, E:4, F:5, G:6, H:7. Starting at index 6 ('G'), moving backwards by step 2 stops before index 1: yields index 6 ('G'), index 4 ('E'), index 2 ('C') -> 'GEC'."
      },
      {
        id: "ak-11",
        questionNumber: 11,
        topic: "Object Identity (is) vs Value Equality (==)",
        questionText: "Why does (1000 + 1 is 1001) evaluate to False in standard CPython interactive shell while (10 + 1 is 11) evaluates to True?",
        codeSnippet: null,
        options: [
          "Python integers above 256 are automatically converted to float types in memory",
          "CPython pre-allocates an integer cache array for small integers between -5 and 256; larger integers create distinct heap objects",
          "The 'is' operator checks value equality only for numbers smaller than 100",
          "Large integers cannot be compared with 'is' due to integer overflow restrictions"
        ],
        correctAnswer: 1,
        explanation: "CPython maintains an internal small integer singleton cache for values in the range [-5, 256]. Values outside this range allocate fresh PyObject instances on the heap, producing different memory addresses (id)."
      },
      {
        id: "ak-12",
        questionNumber: 12,
        topic: "Tuple Immutability & Nested References",
        questionText: "What happens when executing the following statement?",
        codeSnippet: "t = (1, 2, [3, 4])\nt[2] += [5]",
        options: [
          "TypeError is raised and the list remains [3, 4]",
          "TypeError is raised, but the list is mutated to [3, 4, 5]",
          "The tuple is successfully modified to (1, 2, [3, 4, 5]) without errors",
          "SyntaxError: invalid assignment"
        ],
        correctAnswer: 1,
        explanation: "In-place += calls [3, 4].__iadd__([5]), successfully extending the list in heap memory. Then Python attempts to assign the result back to t[2], which raises TypeError because tuples are immutable. The list is mutated despite the error."
      },
      {
        id: "ak-13",
        questionNumber: 13,
        topic: "List Comprehensions vs Generator Expressions",
        questionText: "Which statement correctly distinguishes a list comprehension from a generator expression?",
        codeSnippet: null,
        options: [
          "List comprehensions are lazy while generators compute everything eagerly into RAM",
          "Generator expressions produce a generator object that evaluates items lazily on demand (O(1) memory), whereas list comprehensions allocate the full list in memory immediately",
          "Generator expressions can be indexed with bracket notation [0] while list comprehensions cannot",
          "List comprehensions cannot be used inside for loops"
        ],
        correctAnswer: 1,
        explanation: "Generator expressions (x for x in data) generate values on-the-fly using the iterator protocol (__next__), consuming constant O(1) memory regardless of dataset size."
      },
      {
        id: "ak-14",
        questionNumber: 14,
        topic: "Set Operations & Symmetric Difference",
        questionText: "What is the result of set_a ^ set_b given the sets below?",
        codeSnippet: "set_a = {1, 2, 3, 4}\nset_b = {3, 4, 5, 6}",
        options: [
          "{3, 4}",
          "{1, 2, 5, 6}",
          "{1, 2, 3, 4, 5, 6}",
          "Empty set set()"
        ],
        correctAnswer: 1,
        explanation: "The caret (^) operator represents symmetric difference: elements present in either set_a or set_b, but not in both. Common elements 3 and 4 are excluded, leaving {1, 2, 5, 6}."
      },
      {
        id: "ak-15",
        questionNumber: 15,
        topic: "Dictionary Views & Dynamic Mutation",
        questionText: "What does the following snippet print?",
        codeSnippet: "d = {'a': 1, 'b': 2}\nkeys = d.keys()\nd['c'] = 3\nprint(len(keys))",
        options: [
          "2",
          "3",
          "RuntimeError: dictionary changed size during iteration",
          "TypeError: dict_keys has no len"
        ],
        correctAnswer: 1,
        explanation: "In Python 3, d.keys() returns a dynamic dictionary view object (dict_keys) linked to the underlying hash table. When new keys are added, the view reflects changes immediately, so len(keys) is 3."
      }
    ]
  },
  {
    id: "qp-priya-sharma",
    studentName: "Priya Sharma",
    candidateId: "ARB-STD-002",
    rollNo: "2026-PS-102",
    paperCode: "ARB-PY-QP02",
    title: "Paper 2: Priya Sharma Examination Set",
    subtitle: "Object-Oriented Protocols, Magic Methods & Exception Architecture",
    timeLimitMinutes: 45,
    passingScore: 80,
    totalMarks: 100,
    questions: [
      {
        id: "ps-1",
        questionNumber: 1,
        topic: "Object Creation: __new__ vs __init__",
        questionText: "What is the primary role of __new__ compared to __init__ in Python's object model?",
        codeSnippet: null,
        options: [
          "__init__ allocates the raw memory block for the object while __new__ assigns attribute values",
          "__new__ is a static method responsible for creating and returning the object instance; __init__ is an instance method that initializes that created instance",
          "__new__ is only called when sub-classing built-in C types like int or str, while __init__ is called for user-defined classes",
          "__new__ and __init__ are identical aliases and can be used interchangeably"
        ],
        correctAnswer: 1,
        explanation: "__new__(cls, ...) is the actual constructor that allocates and returns a new instance of cls. Once returned, Python passes that instance as 'self' to __init__(self, ...) for attribute initialization."
      },
      {
        id: "ps-2",
        questionNumber: 2,
        topic: "Multiple Inheritance & C3 Linearization (MRO)",
        questionText: "Given the class hierarchy below, in what order does Python resolve method calls on an instance of D?",
        codeSnippet: "class A: pass\nclass B(A): pass\nclass C(A): pass\nclass D(B, C): pass",
        options: [
          "D -> B -> A -> C -> object",
          "D -> B -> C -> A -> object",
          "D -> C -> B -> A -> object",
          "TypeError: Cannot create a consistent method resolution order"
        ],
        correctAnswer: 1,
        explanation: "Python uses the C3 Linearization algorithm to compute the Method Resolution Order (MRO). In diamond inheritance, sibling classes (B and C) are searched before common ancestors (A): D -> B -> C -> A -> object."
      },
      {
        id: "ps-3",
        questionNumber: 3,
        topic: "Class Attributes vs Instance Shadowing",
        questionText: "What will be printed after executing this code?",
        codeSnippet: "class Device:\n    count = 0\n\nd1 = Device()\nd2 = Device()\nd1.count = 5\nDevice.count = 10\nprint(d1.count, d2.count)",
        options: [
          "5 10",
          "10 10",
          "5 0",
          "10 0"
        ],
        correctAnswer: 0,
        explanation: "d1.count = 5 creates an instance attribute on d1's __dict__, shadowing the class attribute. d2 has no instance attribute, so d2.count resolves to Device.count which was updated to 10. Thus: 5 10."
      },
      {
        id: "ps-4",
        questionNumber: 4,
        topic: "Classmethod vs Staticmethod Mechanics",
        questionText: "Which statement accurately describes the difference between @classmethod and @staticmethod?",
        codeSnippet: null,
        options: [
          "@classmethod receives the class object (cls) as its implicit first argument, whereas @staticmethod receives no implicit arguments",
          "@staticmethod can modify class state while @classmethod cannot",
          "@classmethod cannot be called on class instances, only directly on the class",
          "@staticmethod is deprecated in Python 3.10 and replaced by regular functions"
        ],
        correctAnswer: 0,
        explanation: "@classmethod binds the method to the class, passing cls as the first parameter (useful for alternate constructors). @staticmethod behaves like a plain function placed inside a class namespace without implicit self or cls."
      },
      {
        id: "ps-5",
        questionNumber: 5,
        topic: "Property Decorator Encapsulation",
        questionText: "What happens when attempting to assign a negative value in the following class?",
        codeSnippet: "class Account:\n    def __init__(self, bal):\n        self._bal = bal\n    @property\n    def balance(self):\n        return self._bal\n    @balance.setter\n    def balance(self, v):\n        if v < 0:\n            raise ValueError('Negative balance')\n        self._bal = v\n\nacc = Account(100)\nacc.balance = -50",
        options: [
          "acc.balance becomes -50 quietly",
          "ValueError: Negative balance is raised",
          "AttributeError: can't set attribute",
          "SyntaxError: invalid setter"
        ],
        correctAnswer: 1,
        explanation: "The @balance.setter decorator intercepts assignments to acc.balance. Because -50 < 0, the setter executes the validation check and raises ValueError('Negative balance')."
      },
      {
        id: "ps-6",
        questionNumber: 6,
        topic: "Context Manager Protocol & Exception Suppression",
        questionText: "If __exit__(self, exc_type, exc_val, exc_tb) returns True, what happens to an exception raised within the with block?",
        codeSnippet: null,
        options: [
          "The exception is re-raised automatically to the outer caller",
          "The exception is suppressed and program execution continues normally after the with block",
          "Python terminates the program immediately with exit code 1",
          "The exception is converted into a Warning message"
        ],
        correctAnswer: 1,
        explanation: "According to the Context Management protocol (PEP 343), returning a truthy value from __exit__ signals that the exception was handled, suppressing it from propagating up the stack."
      },
      {
        id: "ps-7",
        questionNumber: 7,
        topic: "Finally Block Return Override",
        questionText: "What is returned by calling calculate()?",
        codeSnippet: "def calculate():\n    try:\n        return 10 / 2\n    finally:\n        return 99\nprint(calculate())",
        options: [
          "5.0",
          "99",
          "ZeroDivisionError",
          "10.0"
        ],
        correctAnswer: 1,
        explanation: "When a return statement is encountered in a try block, the finally clause is still guaranteed to execute before leaving the function. A return inside finally overrides any pending return value, returning 99."
      },
      {
        id: "ps-8",
        questionNumber: 8,
        topic: "Explicit Exception Chaining",
        questionText: "What is the primary debugging advantage of using 'raise CustomError from original_err'?",
        codeSnippet: null,
        options: [
          "It suppresses the original exception traceback entirely to hide sensitive code",
          "It sets the __cause__ attribute on the new exception, explicitly preserving the full root-cause traceback for diagnostics",
          "It restarts the try block from the beginning",
          "It forces the error to be caught by standard Exception handlers only"
        ],
        correctAnswer: 1,
        explanation: "Explicit exception chaining (PEP 3134) populates the __cause__ attribute of the newly raised exception, printing: 'The above exception was the direct cause of the following exception:' in tracebacks."
      },
      {
        id: "ps-9",
        questionNumber: 9,
        topic: "Custom Exception Hierarchy",
        questionText: "Why should custom application exceptions inherit from Exception rather than BaseException?",
        codeSnippet: null,
        options: [
          "BaseException does not support error messages or args",
          "Inheriting from BaseException prevents KeyboardInterrupt (Ctrl+C) and SystemExit from functioning normally when caught by generic 'except Exception' handlers",
          "Python raises a TypeError if user classes inherit from BaseException",
          "BaseException is only available in Python C extensions"
        ],
        correctAnswer: 1,
        explanation: "BaseException is reserved for system-exiting exceptions like KeyboardInterrupt and SystemExit. Standard application exceptions must inherit from Exception so they don't hijack graceful system shutdowns."
      },
      {
        id: "ps-10",
        questionNumber: 10,
        topic: "Abstract Base Classes (ABCs)",
        questionText: "What error is raised when instantiating a subclass that fails to implement an @abstractmethod?",
        codeSnippet: "from abc import ABC, abstractmethod\nclass Worker(ABC):\n    @abstractmethod\n    def do_work(self): pass\nclass Engineer(Worker): pass\ne = Engineer()",
        options: [
          "TypeError: Can't instantiate abstract class Engineer with abstract method do_work",
          "NotImplementedError: Method do_work is not implemented",
          "AttributeError: 'Engineer' object has no attribute 'do_work'",
          "Instantiates successfully with do_work returning None"
        ],
        correctAnswer: 0,
        explanation: "Python's abc module overrides class instantiation via __call__ in ABCMeta, checking if __abstractmethods__ is non-empty. If any abstract method remains unimplemented, TypeError is raised immediately."
      },
      {
        id: "ps-11",
        questionNumber: 11,
        topic: "String Representations: __repr__ vs __str__",
        questionText: "What is the recommended design convention distinguishing __repr__ from __str__?",
        codeSnippet: null,
        options: [
          "__str__ should return JSON while __repr__ returns XML",
          "__repr__ is for developers and should ideally be an unambiguous string that could recreate the object (eval()); __str__ is for end-user readability",
          "__repr__ is called by print() and __str__ is called in the interactive REPL",
          "__str__ is mandatory for every class while __repr__ is optional"
        ],
        correctAnswer: 1,
        explanation: "PEP 8 convention states that __repr__ should be formal and unambiguous (for debugging/logging), while __str__ provides an informal, human-friendly presentation. If __str__ is omitted, Python falls back to __repr__."
      },
      {
        id: "ps-12",
        questionNumber: 12,
        topic: "Iterable Protocol: __iter__ and __next__",
        questionText: "What exception must an iterator's __next__() method raise when there are no further items?",
        codeSnippet: null,
        options: [
          "IndexError",
          "StopIteration",
          "EOFError",
          "GeneratorExit"
        ],
        correctAnswer: 1,
        explanation: "The Python iterator protocol requires __next__() to raise StopIteration when the collection is exhausted. Built-in loops (for, comprehensions) catch StopIteration to terminate iteration cleanly."
      },
      {
        id: "ps-13",
        questionNumber: 13,
        topic: "Operator Overloading: __eq__ and __hash__",
        questionText: "What happens to a class's hashability when you define custom __eq__ without defining __hash__?",
        codeSnippet: "class Point:\n    def __init__(self, x, y):\n        self.x, self.y = x, y\n    def __eq__(self, other):\n        return self.x == other.x and self.y == other.y",
        options: [
          "The class inherits the default object id hash function",
          "Python sets __hash__ = None, making instances unhashable (cannot be added to sets or dict keys)",
          "Python automatically computes a hash based on attribute values",
          "Compilation error: __hash__ must always accompany __eq__"
        ],
        correctAnswer: 1,
        explanation: "In Python 3, defining __eq__ automatically sets __hash__ to None to uphold the fundamental hash contract (equal objects MUST have equal hashes). Instances become unhashable unless __hash__ is explicitly defined."
      },
      {
        id: "ps-14",
        questionNumber: 14,
        topic: "__slots__ Memory Optimization",
        questionText: "What is the primary benefit and consequence of defining __slots__ in a class?",
        codeSnippet: "class Coordinate:\n    __slots__ = ('x', 'y')\n    def __init__(self, x, y):\n        self.x, self.y = x, y",
        options: [
          "Restricts method definitions and makes the class immutable",
          "Eliminates the per-instance __dict__ descriptor, drastically reducing RAM overhead for millions of instances while preventing dynamic attribute addition",
          "Enables automatic multiprocessing serialization across network sockets",
          "Encrypts instance attributes in memory"
        ],
        correctAnswer: 1,
        explanation: "__slots__ replaces dynamic per-instance dictionary (__dict__) with fixed C-level array pointers. This saves significant memory for high-frequency objects, but disallows assigning undeclared attributes."
      },
      {
        id: "ps-15",
        questionNumber: 15,
        topic: "Callable Instances: __call__ Protocol",
        questionText: "What does implementing __call__ on a class allow an instance to do?",
        codeSnippet: "class Multiplier:\n    def __init__(self, factor):\n        self.factor = factor\n    def __call__(self, x):\n        return x * self.factor\n\ndouble = Multiplier(2)",
        options: [
          "Allows the instance to be invoked like a regular function: double(10) -> 20",
          "Enables multithreaded asynchronous invocation using async/await",
          "Permits the instance to be used in context manager with statements",
          "Makes the instance indexable with bracket notation double[10]"
        ],
        correctAnswer: 0,
        explanation: "Implementing __call__(self, ...) makes the object an instance of Callable. Calling double(10) invokes Multiplier.__call__(double, 10), returning 20."
      }
    ]
  },
  {
    id: "qp-rahul-verma",
    studentName: "Rahul Verma",
    candidateId: "ARB-STD-003",
    rollNo: "2026-RV-103",
    paperCode: "ARB-PY-QP03",
    title: "Paper 3: Rahul Verma Examination Set",
    subtitle: "File Persistence, Serialization, Regular Expressions & Network Sockets",
    timeLimitMinutes: 45,
    passingScore: 80,
    totalMarks: 100,
    questions: [
      {
        id: "rv-1",
        questionNumber: 1,
        topic: "File Access Modes (r+ vs w+)",
        questionText: "What critical difference occurs when opening an existing non-empty file with mode 'r+' compared to mode 'w+'?",
        codeSnippet: null,
        options: [
          "mode 'r+' allows writing binary bytes only, while 'w+' allows UTF-8 strings only",
          "mode 'r+' opens the file for reading and writing without truncation; mode 'w+' immediately truncates the file to 0 bytes upon opening",
          "mode 'r+' creates the file if it does not exist, while 'w+' raises FileNotFoundError",
          "There is no functional difference between 'r+' and 'w+' in Python 3"
        ],
        correctAnswer: 1,
        explanation: "Mode 'r+' opens an existing file for reading and writing with the file pointer at the beginning without truncating. Mode 'w+' immediately overwrites (truncates to length 0) any existing file content."
      },
      {
        id: "rv-2",
        questionNumber: 2,
        topic: "File Pointer Mechanics: seek() and tell()",
        questionText: "What does file.seek(0, 2) accomplish when working with a binary file in Python?",
        codeSnippet: null,
        options: [
          "Rewinds the file pointer to the very beginning of the file",
          "Positions the file pointer at offset 0 relative to the end of the file (EOF)",
          "Reads the first 2 bytes from the file into memory",
          "Skips 2 lines forward in a text file"
        ],
        correctAnswer: 1,
        explanation: "The second argument (whence) in seek(offset, whence) defines the reference point: 0 for start, 1 for current position, and 2 for end-of-file. Thus seek(0, 2) jumps directly to the end of the file."
      },
      {
        id: "rv-3",
        questionNumber: 3,
        topic: "JSON Serialization Constraints",
        questionText: "Attempting to serialize which of the following Python objects via json.dumps() raises a TypeError?",
        codeSnippet: null,
        options: [
          "{'status': 'active', 'tags': ['python', 'backend'], 'count': 42}",
          "{'timestamp': 1696161600, 'verified': True, 'score': 98.5}",
          "{'user_id': 101, 'registered_ips': {'192.168.1.1', '10.0.0.1'}}",
          "{'settings': None, 'preferences': {'theme': 'dark'}}"
        ],
        correctAnswer: 2,
        explanation: "The JSON standard has no primitive data type for Python 'set'. Attempting json.dumps() on a set raises TypeError: Object of type set is not JSON serializable (must convert to list first or use custom JSONEncoder)."
      },
      {
        id: "rv-4",
        questionNumber: 4,
        topic: "Pickle Security Vulnerabilities",
        questionText: "Why is unpickling untrusted data using pickle.loads() considered a critical security vulnerability?",
        codeSnippet: null,
        options: [
          "Pickle files can cause buffer overflows in the operating system kernel",
          "Pickle serialization executes arbitrary Python code during deserialization via the __reduce__ method",
          "Pickle cannot encrypt data across network connections",
          "Pickle automatically exposes local passwords stored in environment variables"
        ],
        correctAnswer: 1,
        explanation: "Python's pickle module allows classes to define a __reduce__ method that specifies callable functions and arguments to run upon unpickling. Malicious payloads can execute os.system() commands during deserialization."
      },
      {
        id: "rv-5",
        questionNumber: 5,
        topic: "Regex Greedy vs Non-Greedy Quantifiers",
        questionText: "What does re.findall(r'<.*?>', '<div><p>Hello</p></div>') return compared to re.findall(r'<.*>', ...)?",
        codeSnippet: null,
        options: [
          "Non-greedy returns ['<div>', '<p>', '</p>', '</div>']; greedy returns ['<div><p>Hello</p></div>']",
          "Non-greedy returns ['<div><p>Hello</p></div>']; greedy returns []",
          "Both expressions return identical output",
          "SyntaxError: ? cannot follow * in regular expressions"
        ],
        correctAnswer: 0,
        explanation: "The '.*' quantifier is greedy and matches as many characters as possible up to the final '>'. Appending '?' makes it non-greedy, matching the minimum characters up to the very next '>', yielding individual tags."
      },
      {
        id: "rv-6",
        questionNumber: 6,
        topic: "Lookaround Assertions in Regex",
        questionText: "What will re.findall(r'\\d+(?=px)', 'width: 100px; height: 50em; margin: 20px;') return?",
        codeSnippet: null,
        options: [
          "['100px', '20px']",
          "['100', '20']",
          "['100', '50', '20']",
          "['px', 'px']"
        ],
        correctAnswer: 1,
        explanation: "The syntax (?=px) is a positive lookahead assertion: it asserts that the match is immediately followed by 'px', but does not include 'px' in the captured matched text. Hence: ['100', '20']."
      },
      {
        id: "rv-7",
        questionNumber: 7,
        topic: "Regex Named Capturing Groups",
        questionText: "How do you access the 'year' component using named capturing groups?",
        codeSnippet: "import re\nmatch = re.search(r'(?P<year>\\d{4})-(?P<month>\\d{2})', '2026-10-01')",
        options: [
          "match.group('year')",
          "match['year']",
          "match.named('year')",
          "match.year"
        ],
        correctAnswer: 0,
        explanation: "In Python's re module, named capturing groups created with (?P<name>...) are accessed using match.group('name') or match.groupdict()['name']."
      },
      {
        id: "rv-8",
        questionNumber: 8,
        topic: "TCP Stream Sockets & Packet Fragmentation",
        questionText: "Why must network socket code receive TCP stream data in a while loop rather than relying on a single socket.recv(4096) call?",
        codeSnippet: null,
        options: [
          "TCP is a packet-oriented protocol that limits messages to 512 bytes",
          "TCP is a byte-stream protocol with no intrinsic message boundaries; data may arrive fragmented across multiple arbitrary network segments",
          "socket.recv() disconnects the client automatically after receiving 1024 bytes",
          "Operating systems queue data in reverse order without a loop"
        ],
        correctAnswer: 1,
        explanation: "TCP guarantees ordered byte streams but does not preserve application message boundaries. A sender sending 2000 bytes might be delivered in multiple smaller IP chunks. Callers must loop until all expected bytes arrive."
      },
      {
        id: "rv-9",
        questionNumber: 9,
        topic: "Socket Blocking vs Non-Blocking Modes",
        questionText: "What exception is raised when calling recv() on a non-blocking socket (sock.setblocking(False)) if no incoming data is immediately available?",
        codeSnippet: null,
        options: [
          "TimeoutError",
          "BlockingIOError",
          "ConnectionResetError",
          "BrokenPipeError"
        ],
        correctAnswer: 1,
        explanation: "When a socket is set to non-blocking mode and an I/O operation cannot complete immediately without waiting, Python raises BlockingIOError (or socket.error with errno EAGAIN/EWOULDBLOCK)."
      },
      {
        id: "rv-10",
        questionNumber: 10,
        topic: "HTTP User-Agent Scraping Defenses",
        questionText: "When scraping a web service using urllib.request or requests, why do servers frequently return '403 Forbidden' unless a custom User-Agent header is set?",
        codeSnippet: null,
        options: [
          "Servers require client IP encryption via SSL certificates before reading requests",
          "Default client libraries send identifiers like 'Python-urllib/3.x', which automated bot defense filters block to protect against scrapers",
          "Python disables HTTP GET requests unless authorized by DNS records",
          "The User-Agent header specifies the Python version required to parse the HTML"
        ],
        correctAnswer: 1,
        explanation: "Web application firewalls (WAFs) and CDN bot filters inspect the User-Agent header. Requests with identifiable script headers like 'Python-urllib' or 'python-requests' are blocked by default."
      },
      {
        id: "rv-11",
        questionNumber: 11,
        topic: "BeautifulSoup DOM Parsing",
        questionText: "In BeautifulSoup4, what is the key difference between soup.find() and soup.find_all()?",
        codeSnippet: null,
        options: [
          "soup.find() searches the entire DOM tree; soup.find_all() only searches direct children",
          "soup.find() returns the first matching Tag object (or None); soup.find_all() returns a list of all matching Tag objects (or empty list)",
          "soup.find() accepts CSS selectors while soup.find_all() only accepts HTML tag names",
          "soup.find() is asynchronous while soup.find_all() is synchronous"
        ],
        correctAnswer: 1,
        explanation: "soup.find() returns the single first matching Tag element or None if no match is found. soup.find_all() returns a ResultSet (list) containing all elements matching the query filters."
      },
      {
        id: "rv-12",
        questionNumber: 12,
        topic: "CSV Parsing with Dialects & Delimiters",
        questionText: "Why is opening CSV files with newline='' recommended when using Python's csv module?",
        codeSnippet: "with open('students.csv', 'w', newline='', encoding='utf-8') as f:\n    writer = csv.writer(f)",
        options: [
          "It compresses the file automatically to reduce disk space",
          "It prevents the csv module and Python's universal newline translation from producing extra blank lines on Windows (\\r\\r\\n)",
          "It disables CSV quoting for fields containing commas",
          "It forces the CSV dialect to strict RFC 4180 mode"
        ],
        correctAnswer: 1,
        explanation: "On Windows, Python's default text mode converts '\\n' to '\\r\\n'. The csv module handles its own line terminators ('\\r\\n'), so without newline='', extra blank rows ('\\r\\r\\n') are written to the file."
      },
      {
        id: "rv-13",
        questionNumber: 13,
        topic: "HTTP Status Codes & REST Conventions",
        questionText: "Which HTTP status code should a RESTful API return when a client successfully creates a new resource?",
        codeSnippet: null,
        options: [
          "200 OK",
          "201 Created",
          "204 No Content",
          "302 Found"
        ],
        correctAnswer: 1,
        explanation: "Under HTTP RFC 7231 and standard REST API design conventions, status 201 Created indicates that the request has succeeded and led to the creation of a new resource (often returning a Location header)."
      },
      {
        id: "rv-14",
        questionNumber: 14,
        topic: "Handling JSON Streaming with Generators",
        questionText: "What is the recommended approach for processing a 5GB JSON Lines (.jsonl) log file without exceeding memory?",
        codeSnippet: null,
        options: [
          "Use json.loads(open('file.jsonl').read())",
          "Iterate line by line with a generator: for line in open('file.jsonl'): yield json.loads(line)",
          "Convert the entire file to a dictionary using json.load()",
          "Use multiprocessing to read all 5GB simultaneously"
        ],
        correctAnswer: 1,
        explanation: "Reading line by line lazily ensures only one line is loaded into memory at any given time, maintaining constant O(1) memory overhead regardless of the multi-gigabyte file size."
      },
      {
        id: "rv-15",
        questionNumber: 15,
        topic: "Network Socket Timeouts",
        questionText: "What method should you call on a socket to ensure operations raise socket.timeout if the server does not respond within 5 seconds?",
        codeSnippet: null,
        options: [
          "sock.settimeout(5.0)",
          "sock.sleep(5.0)",
          "sock.wait_until(5000)",
          "sock.set_deadline(5)"
        ],
        correctAnswer: 0,
        explanation: "sock.settimeout(5.0) configures a timeout of 5 seconds on blocking socket operations (like connect, recv, send). If the timer expires, socket.timeout is raised."
      }
    ]
  },
  {
    id: "qp-adithya-v",
    studentName: "Adithya V",
    candidateId: "ARB-STD-004",
    rollNo: "2026-AV-104",
    paperCode: "ARB-PY-QP04",
    title: "Paper 4: Adithya V Examination Set",
    subtitle: "Relational Database Engineering, SQLite ACID Transactions & System Automation",
    timeLimitMinutes: 45,
    passingScore: 80,
    totalMarks: 100,
    questions: [
      {
        id: "av-1",
        questionNumber: 1,
        topic: "SQLite Foreign Key Enforcement Pragma",
        questionText: "In Python's built-in sqlite3 module, what statement must be explicitly executed on every new database connection to enforce Foreign Key constraints?",
        codeSnippet: null,
        options: [
          "cursor.execute('ENABLE FOREIGN KEYS;')",
          "cursor.execute('PRAGMA foreign_keys = ON;')",
          "cursor.execute('SET FOREIGN_KEY_CHECKS = 1;')",
          "Foreign keys are permanently enabled by default and require no PRAGMA command"
        ],
        correctAnswer: 1,
        explanation: "For backwards compatibility with legacy SQLite databases, foreign key constraint enforcement is disabled by default in SQLite. Every new connection must issue 'PRAGMA foreign_keys = ON;' to activate cascade and validation checks."
      },
      {
        id: "av-2",
        questionNumber: 2,
        topic: "Parameterized SQL vs Injection Vulnerabilities",
        questionText: "Why is cursor.execute('SELECT * FROM users WHERE name = ?', (user_input,)) secure against SQL injection, while f-strings are vulnerable?",
        codeSnippet: null,
        options: [
          "Parameterized queries compile the SQL query plan first; user inputs are transmitted strictly as literal data parameters, never interpreted as executable syntax",
          "The sqlite3 module strips all quotes and special characters from user inputs before insertion",
          "Parameterized queries run inside a sandboxed Python virtual environment",
          "f-strings convert all variables to raw machine instructions"
        ],
        correctAnswer: 0,
        explanation: "With parameterized queries (using '?' placeholders), the SQL statement is pre-parsed and compiled into an execution tree. User parameter values are bound separately as data values, neutralizing injection payloads like \"' OR '1'='1\"."
      },
      {
        id: "av-3",
        questionNumber: 3,
        topic: "SQLite Transaction Isolation & Rollback",
        questionText: "What happens if an unhandled exception occurs inside a 'with conn:' context manager block in Python's sqlite3?",
        codeSnippet: "with conn:\n    cursor.execute('UPDATE accounts SET bal = bal - 100 WHERE id = 1')\n    raise ValueError('Network Failure')\n    cursor.execute('UPDATE accounts SET bal = bal + 100 WHERE id = 2')",
        options: [
          "The first UPDATE is permanently committed anyway",
          "The transaction is automatically rolled back (conn.rollback()), restoring previous database state without partial writes",
          "The database file becomes corrupted",
          "sqlite3 raises OperationalError: database locked"
        ],
        correctAnswer: 1,
        explanation: "When a connection object is used as a context manager (with conn:), it manages transaction boundaries. If the block completes successfully, it commits; if an exception is raised, it automatically issues conn.rollback()."
      },
      {
        id: "av-4",
        questionNumber: 4,
        topic: "Cursor Fetchall vs Generator Iteration",
        questionText: "When querying a table containing 10,000,000 rows, why is 'for row in cursor:' preferred over 'rows = cursor.fetchall()'?",
        codeSnippet: null,
        options: [
          "cursor.fetchall() is deprecated in Python 3.12",
          "'for row in cursor:' fetches rows incrementally from the database engine using an internal buffer, avoiding allocating millions of Python tuple objects in RAM at once",
          "cursor.fetchall() automatically closes the database connection",
          "There is no difference; both use identical memory"
        ],
        correctAnswer: 1,
        explanation: "Calling fetchall() forces the entire result set into a massive Python list of tuples in memory, risking Out-Of-Memory (OOM) crashes. Iterating over the cursor yields rows lazily using constant memory."
      },
      {
        id: "av-5",
        questionNumber: 5,
        topic: "Database Normalization (1NF to 3NF)",
        questionText: "Which statement best describes the requirement for Third Normal Form (3NF)?",
        codeSnippet: null,
        options: [
          "All columns must have unique names and no NULL values",
          "The table must be in 2NF and contain no transitive functional dependencies (non-key attributes must depend only on the primary key)",
          "The table must have at least three foreign keys linked to other tables",
          "All tables must be denormalized into a single flat view"
        ],
        correctAnswer: 1,
        explanation: "3NF requires that the relation is in 2NF and that no non-prime attribute is transitively dependent on the primary key ('Every non-key attribute must provide a fact about the key, the whole key, and nothing but the key')."
      },
      {
        id: "av-6",
        questionNumber: 6,
        topic: "Many-to-Many Relationships & Junction Tables",
        questionText: "How should a Many-to-Many relationship between 'Students' and 'Courses' be implemented in a relational schema?",
        codeSnippet: null,
        options: [
          "Store comma-separated Course IDs in a single text column inside the Students table",
          "Create a separate Junction (Association) table containing foreign keys student_id and course_id, forming a composite primary key",
          "Duplicate student rows for every course they enroll in",
          "Use a JSON array column inside the Courses table"
        ],
        correctAnswer: 1,
        explanation: "Relational best practice establishes a bridge/junction table (e.g. Enrollments) with foreign keys to both parent tables, breaking down the M:N relationship into two clean 1:N relationships without violating 1NF."
      },
      {
        id: "av-7",
        questionNumber: 7,
        topic: "Database Indexing & B-Trees",
        questionText: "What trade-off is introduced when adding B-tree indexes (CREATE INDEX) to multiple columns of a high-volume database table?",
        codeSnippet: null,
        options: [
          "SELECT query lookups become exponentially slower",
          "SELECT lookups become significantly faster (O(log N)), but INSERT, UPDATE, and DELETE operations become slower because index trees must be recalculated on each write",
          "Foreign keys can no longer be used on indexed tables",
          "Transactions are disabled on indexed tables"
        ],
        correctAnswer: 1,
        explanation: "Indexes speed up WHERE filtering and JOIN performance from O(N) table scans to O(log N) tree traverses. However, every write operation (INSERT/UPDATE/DELETE) incurs additional I/O overhead to maintain the balance of the B-tree."
      },
      {
        id: "av-8",
        questionNumber: 8,
        topic: "Environment Variable Configuration",
        questionText: "Why should database credentials and API secrets be loaded via os.environ (or python-dotenv) rather than hardcoded in source files?",
        codeSnippet: null,
        options: [
          "Python cannot connect to databases without environment variables",
          "Hardcoded credentials risk accidental leak in version control (git), and environment variables enable seamless configuration per deployment environment (dev, staging, prod)",
          "Environment variables execute faster than local Python string constants",
          "Operating systems encrypt all environment variables with AES-256"
        ],
        correctAnswer: 1,
        explanation: "Following Twelve-Factor App methodology, storing secrets in environment variables keeps sensitive credentials out of version control and allows dynamic configuration across development, CI/CD, and production."
      },
      {
        id: "av-9",
        questionNumber: 9,
        topic: "Python Logging Architecture",
        questionText: "Which logging level should be used for expected events during normal system operation (e.g., 'Server started on port 5000')?",
        codeSnippet: null,
        options: [
          "logging.DEBUG",
          "logging.INFO",
          "logging.WARNING",
          "logging.CRITICAL"
        ],
        correctAnswer: 1,
        explanation: "Standard Python logging hierarchy: DEBUG (low-level diagnostics), INFO (confirmation that things are working as expected), WARNING (unexpected event or upcoming problem), ERROR (failure of specific operation), CRITICAL (fatal system halting error)."
      },
      {
        id: "av-10",
        questionNumber: 10,
        topic: "Unit Testing & Mocking",
        questionText: "In Python's unittest.mock module, what does @patch('module.requests.get') allow you to do during automated test runs?",
        codeSnippet: null,
        options: [
          "It forces the test to run twice as fast by skipping assert statements",
          "It replaces the live network HTTP request with a mock object, allowing predictable unit testing without hitting external network servers",
          "It patches security bugs in the requests library",
          "It encrypts the test output"
        ],
        correctAnswer: 1,
        explanation: "Mocking replaces real external dependencies (databases, external APIs, network connections) with simulated objects, ensuring tests are deterministic, fast, and isolated from external outages."
      },
      {
        id: "av-11",
        questionNumber: 11,
        topic: "Multithreading vs Multiprocessing & GIL",
        questionText: "Why does Python's Global Interpreter Lock (GIL) prevent CPU-bound tasks from running in parallel across multiple CPU cores using threading.Thread?",
        codeSnippet: null,
        options: [
          "The GIL restricts Python scripts to a single thread total",
          "The GIL ensures only one native OS thread executes Python bytecode at any given instant to safeguard CPython memory management and reference counting",
          "CPU cores can only be accessed using C++ extensions",
          "Threads are simulated using coroutines and have no OS thread backing"
        ],
        correctAnswer: 1,
        explanation: "The CPython GIL is a mutual-exclusion lock protecting internal memory structures. For CPU-bound tasks, threads contend for the lock without speedup. CPU-bound concurrency requires the multiprocessing module to run distinct Python processes."
      },
      {
        id: "av-12",
        questionNumber: 12,
        topic: "Subprocess Execution & Shell Injection",
        questionText: "Why is subprocess.run(['ls', user_input], shell=False) safer than subprocess.run(f'ls {user_input}', shell=True)?",
        codeSnippet: null,
        options: [
          "shell=False runs the command without starting a system shell, preventing shell injection metacharacters (like ';' or '&&') from executing secondary commands",
          "shell=False automatically encrypts standard output",
          "shell=True is restricted to Administrator accounts only",
          "shell=False causes Python to emulate the command in pure Python"
        ],
        correctAnswer: 0,
        explanation: "With shell=False, the executable is invoked directly by OS syscalls with arguments passed in an array. Malicious inputs like '; rm -rf /' are treated as literal file names rather than interpreted commands."
      },
      {
        id: "av-13",
        questionNumber: 13,
        topic: "SQLite Concurrency: Database Locked",
        questionText: "When multiple threads write to the same SQLite database file, what parameter can be configured to prevent immediate 'OperationalError: database is locked' crashes?",
        codeSnippet: "conn = sqlite3.connect('app.db', timeout=10.0)",
        options: [
          "The timeout parameter sets a retry threshold in seconds before SQLite gives up waiting for the write lock to be released",
          "timeout disables all locking entirely, allowing dirty writes",
          "timeout specifies the session expiry time in hours",
          "timeout converts SQLite into a client-server architecture"
        ],
        correctAnswer: 0,
        explanation: "sqlite3.connect(database, timeout=10.0) sets the busy timeout. When another connection holds a write lock, SQLite repeatedly sleeps and retries until the timeout expires before raising OperationalError."
      },
      {
        id: "av-14",
        questionNumber: 14,
        topic: "Algorithmic Time Complexity: Sets vs Lists",
        questionText: "What is the average time complexity of checking membership (item in collection) for a Python set compared to a Python list?",
        codeSnippet: null,
        options: [
          "Set: O(1) average; List: O(N)",
          "Set: O(N); List: O(1)",
          "Both are O(log N)",
          "Set: O(N log N); List: O(N)"
        ],
        correctAnswer: 0,
        explanation: "Python sets use hash tables, offering O(1) average time complexity for lookups. Lists must perform linear scans from the beginning to the end, resulting in O(N) worst-case time complexity."
      },
      {
        id: "av-15",
        questionNumber: 15,
        topic: "Graceful Shutdown with Signal Handlers",
        questionText: "In a production Python backend service, what standard signal should be caught using signal.signal() to handle graceful container termination (Docker/Kubernetes)?",
        codeSnippet: null,
        options: [
          "SIGKILL (Signal 9)",
          "SIGTERM (Signal 15)",
          "SIGSEGV (Signal 11)",
          "SIGSTOP"
        ],
        correctAnswer: 1,
        explanation: "Docker and Kubernetes send SIGTERM (15) to notify a container to gracefully stop (close DB connections, finish active requests). SIGKILL cannot be caught or ignored and terminates processes immediately."
      }
    ]
  }
];
