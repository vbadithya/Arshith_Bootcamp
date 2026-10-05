export const PYTHON_FINAL_TEST = {
  "id": "py-final-test",
  "title": "Python Programming Master Certification Exam (Advanced)",
  "description": "Comprehensive 25-question professional certification exam testing execution internals, memory references, scoping semantics, closures, OOP protocols, regex backtracking, networking, and SQLite ACID transactions across all 15 modules.",
  "passingScore": 80,
  "timeLimitMinutes": 45,
  "totalMarks": 100,
  "published": true,
  "questions": [
    {
      "id": "pfe-1",
      "questionNumber": 1,
      "moduleRef": "py-mod-1",
      "topic": "Python Execution Model & Bytecode",
      "questionText": "During the execution of a Python script by CPython, which statement accurately describes the role of bytecode and the .pyc files located in __pycache__?",
      "codeSnippet": null,
      "options": [
        "Bytecode is CPU-native machine code directly executed by hardware registers without an interpreter",
        "Bytecode is an intermediate, platform-independent instruction set executed by the Python Virtual Machine (PVM); .pyc files cache this bytecode to accelerate subsequent startup times",
        "Bytecode is generated exclusively by JIT compilers like PyPy and is never produced in standard CPython",
        ".pyc files store compressed source code to save disk space and have no impact on execution speed"
      ],
      "correctAnswer": 1,
      "explanation": "CPython compiles source code (.py) into intermediate bytecode (.pyc) stored in __pycache__. On subsequent executions, CPython skips the parsing and compilation stages if the source file's timestamp matches the cached bytecode header."
    },
    {
      "id": "pfe-25",
      "questionNumber": 2,
      "moduleRef": "py-mod-15",
      "topic": "SQLite Foreign Key Enforcement Pragma",
      "questionText": "In Python's built-in sqlite3 module, what statement must be explicitly executed on every new database connection to enforce Foreign Key constraints?",
      "codeSnippet": null,
      "options": [
        "cursor.execute('ENABLE CONSTRAINTS ALL;')",
        "cursor.execute('PRAGMA foreign_keys = ON;')",
        "cursor.execute('SET FOREIGN_KEY_CHECKS = 1;')",
        "Foreign key constraints are enforced automatically by default in all SQLite versions"
      ],
      "correctAnswer": 1,
      "explanation": "For historical backward compatibility with SQLite 2/3.0, SQLite disables foreign key constraint enforcement by default. Every connection must explicitly execute 'PRAGMA foreign_keys = ON;' to activate relational integrity verification."
    },
    {
      "id": "pfe-2",
      "questionNumber": 3,
      "moduleRef": "py-mod-2",
      "topic": "Memory References & In-Place Mutation",
      "questionText": "What will be the exact values of 'a' and 'c' after executing the following Python code snippet?",
      "codeSnippet": "a = [1, 2, 3]\nb = a\nb += [4]\nc = a + [5]",
      "options": [
        "a is [1, 2, 3] and c is [1, 2, 3, 5]",
        "a is [1, 2, 3, 4] and c is [1, 2, 3, 4, 5]",
        "a is [1, 2, 3, 4] and c is [1, 2, 3, 5]",
        "a is [1, 2, 3] and c is [1, 2, 3, 4, 5]"
      ],
      "correctAnswer": 1,
      "explanation": "For mutable sequences like lists, the '+=' operator invokes __iadd__, mutating the underlying list object in-place. Because 'b' points to the same object as 'a', 'a' becomes [1, 2, 3, 4]. The '+' operator invokes __add__, creating a new list [1, 2, 3, 4, 5] assigned to 'c'."
    },
    {
      "id": "pfe-24",
      "questionNumber": 4,
      "moduleRef": "py-mod-15",
      "topic": "Parameterized SQL vs Injection Vulnerabilities",
      "questionText": "Why is cursor.execute('SELECT * FROM users WHERE name = ?', (user_input,)) secure against SQL injection, while f-strings are vulnerable?",
      "codeSnippet": null,
      "options": [
        "The database pre-compiles the SQL query structure and treats parameter values strictly as literal data, preventing input from altering the SQL parse tree",
        "SQLite automatically encrypts parameter values in memory",
        "The question mark syntax disables quotes in the database engine",
        "Python's sqlite3 library strips all SQL keywords from the user input string"
      ],
      "correctAnswer": 0,
      "explanation": "Parameterized queries separate the query structure from the user data. The database compiles the SQL syntax tree first, and then binds user parameters strictly as values, making it impossible for injected SQL commands to be executed as code."
    },
    {
      "id": "pfe-3",
      "questionNumber": 5,
      "moduleRef": "py-mod-3",
      "topic": "Logical Operators & Short-Circuit Precedence",
      "questionText": "What is the evaluated result of the following compound expression in Python?",
      "codeSnippet": "result = 0 or [] and \"python\" or not 0 and {} or 42",
      "options": [
        "True",
        "42",
        "{}",
        "\"python\""
      ],
      "correctAnswer": 2,
      "explanation": "Operator precedence evaluates 'not', then 'and', then 'or'. (1) '[] and \"python\"' short-circuits to []. (2) 'not 0' is True; 'True and {}' returns {}. (3) The remaining 'or' chain is '0 or [] or {} or 42'. (4) However, notice: 'not 0 and {}' evaluates to {}. Since {} is falsy, the evaluation proceeds to 'or 42', returning 42. Wait, let's trace: 0 (falsy) -> [] (falsy) -> {} (falsy) -> 42 is truthy, so the final result is 42!"
    },
    {
      "id": "pfe-23",
      "questionNumber": 6,
      "moduleRef": "py-mod-14",
      "topic": "JSON Serialization Constraints",
      "questionText": "What happens when executing json.dumps({(1, 2): \"coordinates\"}) in Python?",
      "codeSnippet": null,
      "options": [
        "It outputs '{\"1, 2\": \"coordinates\"}'",
        "It raises TypeError: keys must be str, int, float, bool or None, not tuple",
        "It serializes successfully as '{\"[1, 2]\": \"coordinates\"}'",
        "It outputs null"
      ],
      "correctAnswer": 1,
      "explanation": "The JSON standard (RFC 8259) strictly requires object keys to be strings. Python's json serializer only permits str, int, float, bool, or None as dictionary keys (which it converts to strings). Supplying a tuple key raises TypeError."
    },
    {
      "id": "pfe-4",
      "questionNumber": 7,
      "moduleRef": "py-mod-4",
      "topic": "Block Scoping & Assignment Expressions",
      "questionText": "Consider the following code utilizing the walrus operator (:=). What is the output?",
      "codeSnippet": "if (val := len(\"BootCamp\")) > 5:\n    status = \"Active\"\nprint(val, status)",
      "options": [
        "NameError: name 'val' is not defined",
        "8 Active",
        "True Active",
        "8 None"
      ],
      "correctAnswer": 1,
      "explanation": "Python conditional blocks (if/elif/else) do not create a separate lexical scope. Variables assigned inside if statements or via walrus operators (:=) exist in the enclosing function or global namespace, so both 'val' (8) and 'status' ('Active') are accessible."
    },
    {
      "id": "pfe-22",
      "questionNumber": 8,
      "moduleRef": "py-mod-13",
      "topic": "HTTP User-Agent Scraping Defenses",
      "questionText": "When scraping web endpoints using urllib.request, why do servers frequently return HTTP 403 Forbidden unless a custom User-Agent header is set?",
      "codeSnippet": null,
      "options": [
        "urllib cannot negotiate TLS 1.3 without a User-Agent",
        "Servers check the User-Agent header and reject requests bearing the default 'Python-urllib/3.x' identifier to block automated scrapers",
        "The HTTP specification marks User-Agent as a mandatory parameter for GET requests",
        "Without User-Agent, DNS resolution fails"
      ],
      "correctAnswer": 1,
      "explanation": "By default, urllib sends 'Python-urllib/X.Y' in its User-Agent header. Modern web application firewalls (WAFs) and web servers explicitly filter or block this header to defend against automated crawlers."
    },
    {
      "id": "pfe-5",
      "questionNumber": 9,
      "moduleRef": "py-mod-5",
      "topic": "Loop Else Clause Semantics",
      "questionText": "What will the following script print to the standard output?",
      "codeSnippet": "items = [10, 20, 30]\nfor x in items:\n    if x == 25:\n        break\nelse:\n    print(\"Search Completed\")",
      "options": [
        "Search Completed",
        "Nothing is printed",
        "10 20 30 Search Completed",
        "SyntaxError: invalid syntax"
      ],
      "correctAnswer": 0,
      "explanation": "In Python, a 'for...else' or 'while...else' block executes if and only if the loop terminates normally through exhaustion of its iterable without encountering a 'break' statement. Since 25 is never found, 'break' never triggers, and 'Search Completed' is printed."
    },
    {
      "id": "pfe-21",
      "questionNumber": 10,
      "moduleRef": "py-mod-13",
      "topic": "TCP Stream Sockets & Packet Fragmentation",
      "questionText": "Why is invoking sock.recv(4096) once insufficient to reliably receive a 3KB message over a TCP network connection?",
      "codeSnippet": null,
      "options": [
        "TCP sockets can only receive a maximum of 1024 bytes per call",
        "TCP is a byte-stream protocol with no concept of message boundaries; packets may arrive fragmented across multiple chunks, requiring a loop until all bytes or a delimiter are received",
        "recv() blocks forever if the server sends fewer than 4096 bytes",
        "Python automatically converts TCP streams into UDP datagrams"
      ],
      "correctAnswer": 1,
      "explanation": "TCP guarantees reliable ordered byte delivery but provides no record framing. A 3KB payload may be split by the network MTU into several smaller segments, requiring the application to loop recv() until an agreed-upon length or sentinel delimiter is received."
    },
    {
      "id": "pfe-6",
      "questionNumber": 11,
      "moduleRef": "py-mod-6",
      "topic": "Mutable Default Parameter Trap",
      "questionText": "What will be printed when the following code executes?",
      "codeSnippet": "def collect_data(item, registry=[]):\n    registry.append(item)\n    return registry\n\ncollect_data(\"A\")\nprint(collect_data(\"B\"))",
      "options": [
        "['B']",
        "['A', 'B']",
        "['A']",
        "TypeError: default parameter mutated"
      ],
      "correctAnswer": 1,
      "explanation": "In Python, default parameter expressions are evaluated once when the function is defined, not upon invocation. The default list object is stored in the function's __defaults__ tuple and shared across all subsequent invocations that omit the argument, resulting in ['A', 'B']."
    },
    {
      "id": "pfe-20",
      "questionNumber": 12,
      "moduleRef": "py-mod-12",
      "topic": "Lookaround Assertions in Regex",
      "questionText": "What does the regular expression pattern r'(?<=\\$)\\d+' match in the string 'Price: $150 or €120'?",
      "codeSnippet": null,
      "options": [
        "'$150'",
        "'150'",
        "['$150', '€120']",
        "No match"
      ],
      "correctAnswer": 1,
      "explanation": "(?<=\\$) is a positive lookbehind assertion. It ensures that the digits are immediately preceded by a currency symbol, but does NOT include the symbol in the captured match, matching '150'."
    },
    {
      "id": "pfe-7",
      "questionNumber": 13,
      "moduleRef": "py-mod-6",
      "topic": "LEGB Scope Resolution & Nonlocal",
      "questionText": "What value is returned by calling outer_func()?",
      "codeSnippet": "def outer_func():\n    count = 10\n    def inner_func():\n        nonlocal count\n        count += 5\n    inner_func()\n    return count\n\nprint(outer_func())",
      "options": [
        "10",
        "15",
        "UnboundLocalError",
        "None"
      ],
      "correctAnswer": 1,
      "explanation": "The 'nonlocal' keyword binds the variable 'count' inside inner_func() to the nearest enclosing non-global scope (outer_func), allowing it to be mutated directly rather than creating a local variable."
    },
    {
      "id": "pfe-19",
      "questionNumber": 14,
      "moduleRef": "py-mod-12",
      "topic": "Regex Greedy vs Non-Greedy Quantifiers",
      "questionText": "Given the HTML string '<b>Alpha</b> and <b>Beta</b>', what is the result of re.findall(r'<b>.*</b>', html)?",
      "codeSnippet": null,
      "options": [
        "['<b>Alpha</b>', '<b>Beta</b>']",
        "['<b>Alpha</b> and <b>Beta</b>']",
        "['Alpha', 'Beta']",
        "[]"
      ],
      "correctAnswer": 1,
      "explanation": "The quantifier '.*' is greedy by default. It matches as many characters as possible until the last '</b>' in the entire string, producing ['<b>Alpha</b> and <b>Beta</b>']. To match individual tags, the non-greedy '.*?' must be used."
    },
    {
      "id": "pfe-8",
      "questionNumber": 15,
      "moduleRef": "py-mod-7",
      "topic": "Hashability & Dictionary Keys",
      "questionText": "Which of the following data structures will raise a TypeError: unhashable type when used as a key in a Python dictionary?",
      "codeSnippet": null,
      "options": [
        "('user_id', 101, frozenset([1, 2]))",
        "(10, 20, [30, 40])",
        "frozenset(['read', 'write'])",
        "bytes(b'session_token_xyz')"
      ],
      "correctAnswer": 1,
      "explanation": "A tuple is only hashable if every element inside it is also hashable. Because [30, 40] is a mutable list, the tuple containing it cannot produce a fixed hash value and raises 'TypeError: unhashable type: list'."
    },
    {
      "id": "pfe-18",
      "questionNumber": 16,
      "moduleRef": "py-mod-11",
      "topic": "Class Attributes vs Instance Shadowing",
      "questionText": "What will the following code output?",
      "codeSnippet": "class Counter:\n    total = 0\n\nc1 = Counter()\nc2 = Counter()\nc1.total += 5\n\nprint(Counter.total, c1.total, c2.total)",
      "options": [
        "5 5 5",
        "0 5 0",
        "5 5 0",
        "0 5 5"
      ],
      "correctAnswer": 1,
      "explanation": "The expression 'c1.total += 5' first reads the class attribute (0), adds 5, and then binds an *instance* attribute 'total' on c1 with value 5, shadowing the class attribute. Counter.total and c2.total remain untouched at 0."
    },
    {
      "id": "pfe-9",
      "questionNumber": 17,
      "moduleRef": "py-mod-7",
      "topic": "Closures in Comprehensions & Late Binding",
      "questionText": "What is the output of the following list comprehension of lambda closures?",
      "codeSnippet": "multipliers = [lambda x: x * i for i in range(3)]\nprint([m(2) for m in multipliers])",
      "options": [
        "[0, 2, 4]",
        "[4, 4, 4]",
        "[0, 0, 0]",
        "[2, 4, 6]"
      ],
      "correctAnswer": 1,
      "explanation": "Python closures exhibit late binding: the variable 'i' is looked up when the inner function is called, not when defined. At evaluation time, the comprehension loop has completed and 'i' equals 2, so every lambda computes 2 * 2 = 4, yielding [4, 4, 4]."
    },
    {
      "id": "pfe-17",
      "questionNumber": 18,
      "moduleRef": "py-mod-11",
      "topic": "Multiple Inheritance & C3 Linearization (MRO)",
      "questionText": "Given the following class hierarchy, in what exact order will Python resolve methods according to C3 Linearization (MRO)?",
      "codeSnippet": "class A: pass\nclass B(A): pass\nclass C(A): pass\nclass D(B, C): pass",
      "options": [
        "D -> B -> A -> C -> object",
        "D -> B -> C -> A -> object",
        "D -> C -> B -> A -> object",
        "D -> A -> B -> C -> object"
      ],
      "correctAnswer": 1,
      "explanation": "Python uses C3 Superclass Linearization to construct the Method Resolution Order (MRO). In a diamond inheritance pattern, child classes are visited before their parent classes: D -> B -> C -> A -> object."
    },
    {
      "id": "pfe-10",
      "questionNumber": 19,
      "moduleRef": "py-mod-8",
      "topic": "Advanced Slicing with Negative Step",
      "questionText": "What is the evaluated output of the following string slice?",
      "codeSnippet": "text = \"ARSHITH_BOOTCAMP\"\nprint(text[14:6:-2])",
      "options": [
        "MTB_",
        "MCO_",
        "MCO_T",
        "AT_O"
      ],
      "correctAnswer": 1,
      "explanation": "In text[14:6:-2], start index 14 is 'M' (from BOOTCAMP). Stepping backward by 2: index 14 is 'M', index 12 is 'C', index 10 is 'O', index 8 is '_'. Index 6 is the stop boundary (exclusive). Thus, 'MCO_' is produced."
    },
    {
      "id": "pfe-16",
      "questionNumber": 20,
      "moduleRef": "py-mod-11",
      "topic": "Object Creation: __new__ vs __init__",
      "questionText": "What is the technical architectural distinction between __new__ and __init__ in Python object instantiation?",
      "codeSnippet": null,
      "options": [
        "__init__ allocates memory for the instance; __new__ assigns attribute values",
        "__new__ is a static method responsible for creating and returning the new instance object; __init__ is an instance method that initializes that newly created object",
        "__new__ is only used for singleton classes; standard classes only use __init__",
        "__new__ is called after __init__ completes successfully"
      ],
      "correctAnswer": 1,
      "explanation": "__new__ is the constructor that actually allocates and returns a new instance of the class (cls). Once the instance exists, __init__(self, ...) is invoked to configure its attributes."
    },
    {
      "id": "pfe-11",
      "questionNumber": 21,
      "moduleRef": "py-mod-8",
      "topic": "Object Identity (is) vs Value Equality (==)",
      "questionText": "Which statement accurately describes the difference between the 'is' operator and the '==' operator in Python?",
      "codeSnippet": null,
      "options": [
        "'==' compares memory addresses; 'is' compares value contents",
        "'is' checks identity by verifying whether id(a) == id(b); '==' invokes __eq__ to verify value equality",
        "'is' and '==' are completely interchangeable for primitive types",
        "'is' is only valid for boolean comparison against True or False"
      ],
      "correctAnswer": 1,
      "explanation": "The 'is' operator evaluates whether two variables reference the identical object in memory (id(a) == id(b)), whereas '==' checks semantic equality by invoking the class's __eq__ method."
    },
    {
      "id": "pfe-15",
      "questionNumber": 22,
      "moduleRef": "py-mod-10",
      "topic": "Finally Block Return Override",
      "questionText": "What does the following function return when called?",
      "codeSnippet": "def test_execution():\n    try:\n        raise ValueError(\"Invalid Value\")\n        return 10\n    except ValueError:\n        return 20\n    finally:\n        return 30\n\nprint(test_execution())",
      "options": [
        "20",
        "30",
        "ValueError: Invalid Value",
        "10"
      ],
      "correctAnswer": 1,
      "explanation": "When a 'return' statement is executed inside a 'finally' block, it takes absolute precedence over any pending return statements or active unhandled exceptions in the 'try' or 'except' blocks, returning 30."
    },
    {
      "id": "pfe-12",
      "questionNumber": 23,
      "moduleRef": "py-mod-9",
      "topic": "Context Manager Protocol & Exception Suppression",
      "questionText": "How can a custom context manager class suppress an exception raised within its 'with' block so that the program does not crash?",
      "codeSnippet": null,
      "options": [
        "By setting self.suppress = True in __init__",
        "By returning True from its __exit__(exc_type, exc_val, exc_tb) method",
        "By calling sys.suppress_exception() inside __enter__",
        "Exceptions raised inside a with block can never be suppressed by context managers"
      ],
      "correctAnswer": 1,
      "explanation": "According to PEP 343, if the __exit__() method of a context manager returns a truthy value (such as True), the runtime interprets this as the exception having been handled and suppresses its propagation."
    },
    {
      "id": "pfe-14",
      "questionNumber": 24,
      "moduleRef": "py-mod-10",
      "topic": "Explicit Exception Chaining",
      "questionText": "In Python 3, what does the syntax 'raise CustomError(\"Failed\") from original_err' accomplish?",
      "codeSnippet": null,
      "options": [
        "It suppresses original_err completely from appearing in logs",
        "It sets the __cause__ attribute on CustomError, explicitly chaining the two exceptions together in the traceback for root-cause debugging",
        "It re-raises original_err without creating CustomError",
        "It forces the program to ignore CustomError if original_err was a SystemExit"
      ],
      "correctAnswer": 1,
      "explanation": "PEP 3134 introduced explicit exception chaining using the 'from' keyword. It sets the __cause__ attribute on the new exception, generating tracebacks like: 'The above exception was the direct cause of the following exception'."
    },
    {
      "id": "pfe-13",
      "questionNumber": 25,
      "moduleRef": "py-mod-9",
      "topic": "File Access Modes (r+ vs w+)",
      "questionText": "What critical difference occurs when opening an existing non-empty file with mode 'r+' compared to mode 'w+'?",
      "codeSnippet": null,
      "options": [
        "'r+' opens for reading only, while 'w+' allows reading and writing",
        "'r+' preserves existing contents and positions the pointer at the start; 'w+' immediately truncates the file to 0 bytes upon opening",
        "'w+' preserves file contents while 'r+' truncates the file",
        "'r+' creates the file if it does not exist, whereas 'w+' raises FileNotFoundError"
      ],
      "correctAnswer": 1,
      "explanation": "Both 'r+' and 'w+' permit reading and writing, but 'w+' truncates the existing file to 0 bytes immediately upon opening, erasing all previous data, whereas 'r+' retains the file contents."
    }
  ]
};
