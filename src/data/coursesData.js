export const INITIAL_COURSES = [
  {
    id: "python-programming",
    title: "Python Programming",
    category: "Programming",
    level: "Beginner to Intermediate",
    duration: "40 hours",
    rating: 4.9,
    studentsCount: "14.2k",
    studentsNumeric: 14200,
    price: 999,
    isFree: false,
    bestseller: true,
    progress: 47, // 7/15 completed
    iconBg: "bg-blue-50 border 2 border-blue-200 text-blue-600",
    iconType: "python",
    introVideoUrl: "https://www.youtube.com/embed/kqtD5dpn9C8",
    description: "Master Python from absolute scratch! Based on the world-renowned 'Python for Everybody' curriculum by Dr. Charles Severance, cover variables, conditionals, loops, functions, data structures, files, regex, web services, OOP, and databases.",
    instructor: {
      name: "Dr. Ananya Sharma & Dr. Charles Severance",
      role: "Lead Educators @ Arshith Boot Camp & Authors of Python for Everybody",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
    },
    whatYouWillLearn: [
      "Computer hardware architecture, interpreter vs compiler, and Python syntax foundations",
      "Variables, expressions, PEMDAS order of operations, and input handling",
      "Conditional execution, Boolean logic, and try/except exception catching",
      "Function definition, parameters, fruitful vs void functions, and scope",
      "Iteration patterns: while/for loops, break, continue, accumulators, min/max search",
      "Data Structures: Strings, Lists, Dictionaries, and Tuples (DSU pattern & list comprehensions)",
      "File persistence: reading/writing text files and parsing mbox log data",
      "Regular expressions (re module) for pattern searching and data extraction",
      "Networked programming (HTTP, sockets, urllib) and Web Scraping (BeautifulSoup)",
      "Web Services: Parsing XML (ElementTree) and JSON data formats",
      "Object-Oriented Programming: Classes, instances, self, constructors, and inheritance",
      "Databases: Relational data modeling, SQL queries, and SQLite (sqlite3) integration"
    ],
    modules: [
      {
        id: "py-mod-1",
        title: "Module 01 — Introduction to Python",
        description: "This module introduces Python programming from the ground up. You will learn what Python is, why it is widely used, how to install and run Python, the basic structure of a Python program, and the core concepts needed before moving into variables, data types, operators, and control flow.",
        completed: true,
        readingMaterial: {
          introduction: "This module introduces Python programming from the ground up. You will learn what Python is, why it is widely used, how to install and run Python, the basic structure of a Python program, and the core concepts needed before moving into variables, data types, operators, and control flow.\n\nLearning Level: Beginner | Module Type: Theory + Practical\nPrerequisite: No prior programming experience is required.",
          objectives: [
            "Understand the purpose and characteristics of Python.",
            "Identify common applications and career areas where Python is used.",
            "Set up a Python development environment.",
            "Write and execute a basic Python program.",
            "Understand Python syntax, indentation, comments, and keywords.",
            "Use the Python interpreter and run a simple script."
          ],
          sections: [
            {
              heading: "1. What is Python?",
              text: "Python is a high-level, general-purpose programming language known for its simple syntax and readability. It was designed to make programs easier to write, understand, test, and maintain. Python supports multiple programming styles, including procedural, object-oriented, and functional programming.\n\nPython source code is commonly executed by the Python interpreter. This allows developers to write instructions in Python and run them without manually converting the entire program into machine code."
            },
            {
              heading: "2. Why Learn Python?",
              text: "Python is used across software development, data analysis, automation, artificial intelligence, web development, testing, and education. Its readable syntax makes it a useful first language while its large ecosystem supports advanced development.",
              bulletPoints: [
                "Easy to read: Python syntax is designed to be clear and concise.",
                "Versatile: The same language can be used for web applications, automation, data science, AI, scripting, and more.",
                "Large ecosystem: Thousands of libraries and frameworks extend Python's capabilities.",
                "Cross-platform: Python programs can run on Windows, macOS, and Linux with appropriate Python installations.",
                "Strong community: Developers can access extensive documentation, tutorials, and community resources."
              ]
            },
            {
              heading: "3. Applications of Python",
              text: "Python is applied widely across multiple engineering and technology domains:",
              table: {
                headers: ["Area", "Typical Uses"],
                rows: [
                  ["Web Development", "Web applications, APIs, backend services"],
                  ["Data Science", "Data cleaning, analysis, visualization"],
                  ["Artificial Intelligence", "Machine learning, deep learning, NLP"],
                  ["Automation", "File handling, repetitive tasks, reporting"],
                  ["Testing", "Automated software and API testing"],
                  ["Cybersecurity", "Security scripts, analysis, tooling"],
                  ["Education", "Programming fundamentals and academic projects"],
                  ["Desktop Applications", "Utilities and graphical applications"]
                ]
              }
            },
            {
              heading: "4. Installing Python",
              text: "To start programming in Python, install a current Python 3 release from the official Python website. During installation on Windows, enable the option that adds Python to the system PATH if it is offered.\n\nVerify the installation from a terminal:\n• python --version\nOn some systems, the command may be:\n• python3 --version\n\nIf Python is installed correctly, the terminal displays the installed Python 3 version. Common development options include the Python interactive interpreter, Visual Studio Code, PyCharm, and other editors or IDEs."
            },
            {
              heading: "5. Python Interpreter",
              text: "The Python interpreter reads Python instructions and executes them. The interactive interpreter, often called the REPL (Read-Evaluate-Print Loop), lets you test small pieces of code immediately.\n\nA Python file normally uses the .py extension. For example, save a program as hello.py and run it from a terminal using:\npython hello.py"
            },
            {
              heading: "6. Basic Python Syntax",
              text: "Python emphasizes readability. Unlike many languages, Python uses indentation to define blocks of code. Consistent indentation is therefore part of Python's syntax.\n\nThe indented print() statement belongs to the if block. Four spaces are commonly used for one indentation level.\n\nImportant: Mixing tabs and spaces inconsistently can cause indentation errors. Use a consistent indentation style."
            },
            {
              heading: "7. Comments in Python",
              text: "Comments are notes written in source code for developers. Python ignores comments during normal execution. Comments can explain the purpose of code, assumptions, or important implementation details. Avoid unnecessary comments that merely repeat obvious code."
            },
            {
              heading: "8. Identifiers and Keywords",
              text: "Identifiers are names used for variables, functions, classes, and other program elements. An identifier can contain letters, digits, and underscores, but it cannot begin with a digit.\n\nPython also has reserved keywords such as if, else, for, while, class, def, return, and import. These words have special meanings and should not be used as ordinary variable names."
            },
            {
              heading: "9. Basic Input and Output",
              text: "The print() function displays information. The input() function reads text entered by the user.\n\nBy default, input() returns text (a string). If numeric input is required, conversion can be performed using functions such as int() or float()."
            },
            {
              heading: "10. Common Beginner Errors",
              text: "When starting with Python, watch out for these frequent error categories:",
              bulletPoints: [
                "SyntaxError: The code does not follow Python's syntax rules.",
                "IndentationError: Indentation is missing or inconsistent where a block is required.",
                "NameError: A name is used before it has been defined.",
                "TypeError: An operation is attempted with incompatible data types.",
                "ValueError: A function receives a value of the correct general type but an inappropriate value."
              ]
            },
            {
              heading: "13. Module Summary",
              text: "In this module, you learned what Python is, why it is popular, where it is used, how to install and run it, and how Python's basic syntax works. You also learned about the interpreter, comments, identifiers, keywords, input/output, and common beginner errors.\n\nThe next modules can build on these foundations by introducing variables, data types, operators, conditional statements, loops, functions, collections, and practical programming exercises."
            },
            {
              heading: "Module Completion Check",
              text: "Verify your module learning checklist:",
              table: {
                headers: ["Skill", "Completed?"],
                rows: [
                  ["Explain what Python is", "■ Completed"],
                  ["Identify Python applications", "■ Completed"],
                  ["Run Python from a terminal", "■ Completed"],
                  ["Write and execute a .py file", "■ Completed"],
                  ["Use print() and input()", "■ Completed"],
                  ["Understand indentation and comments", "■ Completed"]
                ]
              }
            }
          ],
          codeExamples: [
            {
              title: "1. What is Python? — Example & Output",
              code: `print("Hello, Python!")\n\n# Output:\n# Hello, Python!`,
              explanation: "print() sends output to the standard console."
            },
            {
              title: "5. Python Interpreter (REPL)",
              code: `>>> 5 + 3\n8\n>>> print("Learning Python")\nLearning Python\n\n# Run from terminal:\n# python hello.py`,
              explanation: "The interactive prompt executes expressions line-by-line."
            },
            {
              title: "6. Basic Python Syntax & Indentation",
              code: `name = "Bhavana"\nif name:\n    print("Hello,", name)`,
              explanation: "The indented print() belongs to the if block. 4 spaces are standard."
            },
            {
              title: "7. Comments in Python",
              code: `print("Hello")`,
              explanation: "Python ignores comments (#) during execution."
            },
            {
              title: "8. Identifiers and Keywords",
              code: `student_name = "Anu"\nage = 21\n_total = 100\n\n# Reserved keywords cannot be variable names:\n# if, else, for, while, class, def, return, import`,
              explanation: "Identifiers cannot begin with a number."
            },
            {
              title: "9. Basic Input and Output",
              code: `name = input("Enter your name: ")\nprint("Welcome,", name)\n\n# Numeric input\nage = int(input("Enter your age: "))\nprint("Age:", age)`,
              explanation: "Convert text input to int() or float() when numbers are required."
            },
            {
              title: "11. Your First Python Program (hello.py)",
              code: `print("Hello, World!")\nprint("Welcome to Python programming.")\n\n# Terminal execution command:\n# python hello.py`,
              explanation: "Cycle: write code -> save hello.py -> execute in terminal -> observe output."
            }
          ],
          bestPractices: [
            "Use meaningful variable and function names.",
            "Keep indentation consistent.",
            "Write small programs and test them frequently.",
            "Read error messages carefully before changing code.",
            "Practice by modifying working examples instead of only reading theory.",
            "Use comments when they add useful context.",
            "Keep learning through small hands-on exercises."
          ],
          commonMistakes: [
            "Mixing tabs and spaces inconsistently causing IndentationError.",
            "Using reserved words like 'class' or 'def' as variable identifiers.",
            "SyntaxError caused by forgetting colons at the end of if/for/def lines.",
            "TypeError caused by performing math operations directly on unconverted input()."
          ],
          practiceExercise: {
            title: "14. Practice Exercises (Module 1)",
            problem: "1. Install Python 3 and verify the installation from a terminal.\n2. Write a program that prints your name, college, and favorite programming language.\n3. Write a program that asks for the user's name and prints a welcome message.\n4. Write a program that asks for two numbers and prints them.\n5. Add comments to a small Python program explaining what each section does.\n6. Create a program containing an if statement and practice correct indentation.",
            solutionCode: `name = "Bhavana"\ncollege = "Engineering College"\nfav_lang = "Python"\nprint(f"Name: {name}\\nCollege: {college}\\nLanguage: {fav_lang}")\n\n# 3. User welcome:\nuser_name = input("Enter your name: ")\nprint("Welcome,", user_name)\n\n# 4. Ask for two numbers:\nnum1 = int(input("Enter first number: "))\nnum2 = int(input("Enter second number: "))\nprint("Numbers:", num1, "and", num2)\n\n# 5 & 6. Comments & indentation:\nage = 21\nif age >= 18:\n    # Indented block\n    print("Eligible for advanced module")`
          },
          keyTakeaways: [
            "Python is a high-level, interpreted language with clean syntax and versatile applications.",
            "Indentation is part of Python syntax and defines code blocks.",
            "Identifiers must not start with digits; keywords are reserved by Python.",
            "The print() function outputs data and input() takes user inputs as strings.",
            "Common beginner errors include SyntaxError, IndentationError, NameError, TypeError, and ValueError."
          ],
          references: [
            { title: "Python Official Website (python.org)", url: "https://www.python.org" },
            { title: "Python 3 Official Documentation & Tutorial", url: "https://docs.python.org/3/tutorial/" }
          ],
          mcqs: [
            {
              id: 1,
              question: "What is the primary role of the Python interpreter during program execution?",
              options: [
                "It compiles source code directly into a standalone machine-code binary (.exe)",
                "It reads Python instructions and translates them line-by-line into executable actions at runtime",
                "It formats source code according to PEP 8 styling rules",
                "It manually manages RAM address allocation for CPU registers"
              ],
              correctAnswer: 1,
              explanation: "Python is an interpreted language; the interpreter parses and executes source instructions line-by-line, enabling rapid interactive development."
            },
            {
              id: 2,
              question: "Which of the following character sequences denotes a single-line comment in Python?",
              options: [
                "// This is a comment",
                "/* This is a comment */",
                "# This is a comment",
                "-- This is a comment"
              ],
              correctAnswer: 2,
              explanation: "In Python, the hash symbol (#) begins a single-line comment. Everything following # on that line is ignored by the interpreter."
            },
            {
              id: 3,
              question: "Which of the following is an INVALID variable identifier in Python?",
              options: [
                "_total_score",
                "student_name_2",
                "2nd_place_score",
                "MAX_BUFFER_LIMIT"
              ],
              correctAnswer: 2,
              explanation: "Python identifiers cannot begin with a decimal digit (0-9). '2nd_place_score' starts with '2', which triggers a SyntaxError."
            },
            {
              id: 4,
              question: "What is the return data type of Python's built-in input() function?",
              options: [
                "int if numbers are typed, str otherwise",
                "Always str (string)",
                "None",
                "Dynamic object based on content"
              ],
              correctAnswer: 1,
              explanation: "The input() function always returns user input as a string (str). To use it in calculations, it must be explicitly cast using int() or float()."
            },
            {
              id: 5,
              question: "What error does Python raise when indentation levels within a code block are inconsistent or mixed with tabs and spaces?",
              options: [
                "TypeError",
                "IndentationError",
                "BlockStructureError",
                "ScopeResolutionError"
              ],
              correctAnswer: 1,
              explanation: "Indentation is part of Python's formal syntax. Inconsistent whitespace or mixing tabs and spaces raises an IndentationError."
            }
          ]
        }
      },
      {
        id: "py-mod-2",
        title: "Module 02 — Variables, Expressions and Statements",
        description: "Variables and data types are fundamental concepts in Python programming. Learn variable assignment, naming rules, dynamic typing, built-in numeric/string/collection types, mutability, type conversion, and practice programs.",
        completed: true,
        readingMaterial: {
          introduction: "Variables and data types are fundamental concepts in Python programming.\n\nA variable is a name that refers to a value or object stored in memory. Variables allow us to store information and use that information later in a program.\n\nA data type tells us what kind of value an object represents and what operations can be performed with that value.\n\nPython is dynamically typed, which means you do not have to explicitly declare the type of a variable before assigning a value to it. The same variable name can refer to objects of different types at different times.",
          objectives: [
            "Understand what a variable is and how assignment binds names to objects in memory",
            "Master single, multiple, and chained variable assignments (a, b, c = 10, 20, 30 and x = y = z = 100)",
            "Learn Python variable naming rules, case sensitivity, and snake_case style conventions",
            "Explore Python built-in data types: int, float, complex, bool, str, list, tuple, set, dict, range, NoneType, bytes",
            "Understand the difference between mutable (list, dict, set) and immutable (int, float, bool, str, tuple) types",
            "Perform implicit and explicit type conversions using int(), float(), str(), bool(), etc.",
            "Check and verify object types using type() and isinstance()"
          ],
          sections: [
            {
              heading: "2. What is a Variable & How Assignment Works",
              text: "A variable is a name that is bound to an object. When you assign 'age = 25', 'age' is the variable name, '=' is the assignment operator, and '25' is an integer object stored in memory.\n\nThe basic syntax is 'variable_name = value'. Python evaluates the value on the right side and assigns the resulting object to the name on the left side.\n\nMultiple variables can be assigned in one statement: 'a, b, c = 10, 20, 30'. You can also assign the same object to multiple names simultaneously: 'x = y = z = 100'."
            },
            {
              heading: "5. Variable Naming Rules & Style Conventions",
              text: "Python has strict rules and conventions for creating variable names:",
              bulletPoints: [
                "1. A variable name can contain letters, numbers, and underscores (_).",
                "2. A variable name cannot start with a number (e.g., '2name' is invalid).",
                "3. Variable names are case-sensitive: 'name', 'Name', and 'NAME' are three completely distinct variables.",
                "4. Spaces are not allowed in variable names (e.g., 'student name' is invalid; use 'student_name').",
                "5. Python keywords cannot be used as variable names (e.g., 'class', 'def', 'if', 'for', 'return').",
                "Recommended Style: Python developers use snake_case (e.g., 'student_age = 21', 'total_marks = 450'). Meaningful names make programs easier to read and maintain."
              ]
            },
            {
              heading: "8. What is a Data Type?",
              text: "A data type represents the kind of value stored in an object and what operations can be performed on it. Python provides many built-in data types:",
              table: {
                headers: ["Data Type", "Python Type", "Example", "Description"],
                rows: [
                  ["Integer", "int", "10, -5", "Whole numbers without decimals"],
                  ["Floating point", "float", "10.5, 99.99", "Numbers with a decimal point"],
                  ["Complex", "complex", "3 + 4j", "Numbers with real and imaginary parts"],
                  ["Boolean", "bool", "True, False", "Truth values for logical conditions"],
                  ["String", "str", "\"Hello\", 'Rahul'", "Ordered sequence of Unicode characters"],
                  ["List", "list", "[1, 2, 3]", "Ordered, mutable collection in [ ]"],
                  ["Tuple", "tuple", "(1, 2, 3)", "Ordered, immutable collection in ( )"],
                  ["Set", "set", "{1, 2, 3}", "Unordered collection of unique items in { }"],
                  ["Dictionary", "dict", "{\"name\": \"Rahul\"}", "Key-value mapping pairs in { }"],
                  ["Range", "range", "range(5)", "Immutable sequence of numbers"],
                  ["None", "NoneType", "None", "Represents the absence of a value"],
                  ["Bytes", "bytes", "b\"Hello\"", "Binary data representation"]
                ]
              }
            },
            {
              heading: "10. Numeric Data Types (int, float, complex)",
              text: "Python has three main built-in numeric types:\n\n• 10.1 Integer (int): Represents whole numbers without a decimal component (e.g., age = 21, marks = 95, count = 0). Supports standard arithmetic (+, -, *, /).\n\n• 10.2 Floating-Point (float): Represents numbers containing a decimal point (e.g., price = 99.99, height = 5.8, temperature = 36.5).\n\n• 10.3 Complex Numbers (complex): A complex number has a real part and an imaginary part (e.g., z = 3 + 4j, where z.real gives 3.0 and z.imag gives 4.0)."
            },
            {
              heading: "11. Boolean Data Type (bool)",
              text: "The Boolean type is represented by bool and has exactly two values: True and False.\n\nBoolean values are commonly used in conditions and logical expressions (e.g., age >= 18 evaluates to True or False). For example, 'if is_student: print(\"Student account\")'."
            },
            {
              heading: "12. Strings (str)",
              text: "A string is an immutable sequence of characters enclosed in single quotes ('...') or double quotes (\"...\").\n\n• Zero-Based Indexing: The first character has index 0 (e.g. word = \"Python\"; word[0] is 'P', word[1] is 'y').\n• String Length: len(name) returns the total number of characters.\n• String Concatenation: Combine strings using the + operator (e.g. 'Rahul' + ' ' + 'Kumar')."
            },
            {
              heading: "13 & 14. Lists (list) vs Tuples (tuple)",
              text: "Lists and tuples are ordered collections of items that can hold multiple data types. The crucial difference is mutability:",
              table: {
                headers: ["Feature", "List (list)", "Tuple (tuple)"],
                rows: [
                  ["Syntax", "[ 1, 2, 3 ]", "( 1, 2, 3 )"],
                  ["Ordered", "Yes", "Yes"],
                  ["Mutable", "Yes (can modify and append)", "No (immutable, cannot change)"],
                  ["Heterogeneous", "Yes (can hold mixed types)", "Yes (can hold mixed types)"],
                  ["Common Use", "Changeable collection", "Fixed, protected records"]
                ]
              }
            },
            {
              heading: "15. Sets (set)",
              text: "A set is an unordered collection of unique elements enclosed in curly braces {}.\n\n• Duplicate Removal: Sets automatically eliminate duplicate entries (e.g., {10, 20, 30, 20, 10} becomes {10, 20, 30}).\n• Important — Empty Set: An empty set must be created using set(). Writing {} creates an empty dictionary!\n• Set Operations: Supports Union (a | b), Intersection (a & b), and Difference (a - b)."
            },
            {
              heading: "16. Dictionaries (dict)",
              text: "A dictionary stores data as key-value pairs in {}.\n\n• Accessing: student[\"name\"] returns 'Rahul'.\n• Modifying: student[\"age\"] = 22 updates the value.\n• Adding: student[\"city\"] = \"Bengaluru\" dynamically adds a new key-value pair."
            },
            {
              heading: "17, 18 & 19. NoneType, Range, and Bytes",
              text: "• NoneType (None): Represents the absence of a value or a null placeholder. Check with 'if result is None:'.\n\n• Range (range): Immutable sequence of numbers commonly used with loops. Supports range(stop), range(start, stop), and range(start, stop, step) (e.g., range(0, 10, 2) produces 0, 2, 4, 6, 8).\n\n• Bytes (bytes): Binary data type (e.g. b\"Hello\") used for binary files, networking, and byte-level operations."
            },
            {
              heading: "20. Mutable vs Immutable Data Types",
              text: "An essential concept in Python is the distinction between mutable and immutable objects:\n\n• Mutable Objects: Can be changed after creation (e.g., list, dict, set). You can modify elements in-place or add new items.\n• Immutable Objects: Cannot be modified once created (e.g., int, float, bool, str, tuple). Attempting to reassign an index like name[0] = 'J' raises a TypeError."
            },
            {
              heading: "21 & 22. Dynamic Typing & Object References",
              text: "Python variables are symbolic names that refer to objects stored in memory, not fixed memory containers.\n\n• Dynamic Typing: A variable name can refer to an integer (x = 10) and later be reassigned to a string (x = \"Hello\"). Python manages this automatically.\n• Shared References: Writing 'y = x' binds both 'x' and 'y' to the same underlying object in memory."
            },
            {
              heading: "23, 24 & 25. Sequence Unpacking, Swapping & Type Conversion",
              text: "• Sequence Unpacking: Unpack elements directly into variables: 'a, b, c = (10, 20, 30)'.\n• Pythonic Swapping: Swap two variables cleanly without temporary storage: 'a, b = b, a'.\n• Implicit Conversion: Python automatically converts compatible types (e.g., int + float = float; 10 + 2.5 = 12.5).\n• Explicit Conversion: Use conversion functions like int(), float(), str(), bool(), list(), tuple(), set()."
            },
            {
              heading: "26. Checking Types with type() and isinstance()",
              text: "• type(obj): Determines and returns the exact class type of an object (e.g., type(100) -> <class 'int'>).\n• isinstance(obj, Class): Returns True or False indicating whether an object is an instance of a specified type (e.g., isinstance(age, int) -> True). Highly recommended for type validation in production code."
            },
            {
              heading: "28. Quick Comparison of Python Data Types",
              text: "Comprehensive reference matrix for Python's core data types:",
              table: {
                headers: ["Type", "Ordered", "Mutable", "Example Syntax"],
                rows: [
                  ["int", "No", "No", "10"],
                  ["float", "No", "No", "10.5"],
                  ["complex", "No", "No", "3 + 4j"],
                  ["bool", "No", "No", "True, False"],
                  ["str", "Yes", "No", "\"Python\""],
                  ["list", "Yes", "Yes", "[1, 2, 3]"],
                  ["tuple", "Yes", "No", "(1, 2, 3)"],
                  ["set", "No fixed order", "Yes", "{1, 2, 3}"],
                  ["dict", "Key-value mapping", "Yes", "{\"name\": \"Rahul\"}"],
                  ["range", "Yes", "No", "range(5)"],
                  ["bytes", "Yes", "No", "b\"Hello\""],
                  ["NoneType", "No", "No", "None"]
                ]
              }
            }
          ],
          codeExamples: [
            {
              title: "1 & 2. Variables & Multiple Assignment",
              code: `name = "Arun"\ncity = "Bengaluru"\nage = 22\n\nprint(name)\nprint(city)\nprint(age)\n\n# Multiple assignment in one line\na, b, c = 10, 20, 30\nprint(a, b, c)\n\n# Same value to multiple variables\nx = y = z = 100\nprint(x, y, z)`,
              explanation: "Variables store references to objects. Multiple variables can be initialized cleanly in one line."
            },
            {
              title: "5 & 6. Variable Naming Rules & Case Sensitivity",
              code: `name = "Rahul"\nage = 25\nstudent_name = "Arun"\nemployee123 = "John"\n_total = 500\n\n# Case sensitivity demonstration: 3 distinct variables\nname = "Rahul"\nName = "Arun"\nNAME = "John"\n\nprint(name)  # Rahul\nprint(Name)  # Arun\nprint(NAME)  # John`,
              explanation: "Python is case-sensitive. Variable names cannot begin with numbers or include spaces."
            },
            {
              title: "9 & 26. Inspecting Types: type() and isinstance()",
              code: `x = 100\nname = "Rahul"\nsalary = 45000.50\nstudent = True\n\nprint(type(x))        # <class 'int'>\nprint(type(name))     # <class 'str'>\nprint(type(salary))   # <class 'float'>\nprint(type(student))  # <class 'bool'>\n\n# Checking types with isinstance()\nprint(isinstance(age, int))    # True\nprint(isinstance(name, str))   # True`,
              explanation: "type() returns the class type; isinstance() tests inheritance and class membership."
            },
            {
              title: "10, 11 & 12. Numeric Types, Booleans & Strings",
              code: `z = 3 + 4j\nprint(z.real)  # 3.0\nprint(z.imag)  # 4.0\n\n# Boolean conditions\nage = 20\nprint(age >= 18)  # True\n\n# Strings: Indexing, length & concatenation\nword = "Python"\nprint(word[0])    # 'P'\nprint(len(word))   # 6\n\nfirst = "Rahul"\nlast = "Kumar"\nfull = first + " " + last\nprint(full)       # 'Rahul Kumar'`,
              explanation: "Python supports real/imaginary complex numbers, truth logic, and zero-based string indexing."
            },
            {
              title: "13, 14, 15 & 16. Collections: List, Tuple, Set & Dict",
              code: `numbers = [10, 20, 30]\nnumbers.append(40)\nnumbers[0] = 100\nprint(numbers)  # [100, 20, 30, 40]\n\n# Tuple: Immutable\nstudent = ("Rahul", 21, 85.5)\nprint(student[0])  # Rahul\n# student[0] = "Arun"  # Raises TypeError!\n\n# Set: Unique elements & operations\ns1 = {1, 2, 3}\ns2 = {3, 4, 5}\nprint(s1 | s2)  # Union: {1, 2, 3, 4, 5}\nprint(s1 & s2)  # Intersection: {3}\n\n# Dictionary: Key-value mapping\nemp = {"name": "Rahul", "age": 21}\nemp["city"] = "Bengaluru"\nprint(emp["name"])  # Rahul`,
              explanation: "Lists are mutable, tuples are immutable, sets store unique values, and dicts map keys to values."
            },
            {
              title: "23, 24 & 25. Unpacking, Swapping & Type Conversion",
              code: `coords = (10, 20, 30)\na, b, c = coords\nprint(a, b, c)  # 10 20 30\n\n# Variable swapping\nx = 10\ny = 20\nx, y = y, x\nprint(x, y)  # 20 10\n\n# Type conversion\nage_str = "21"\nage_int = int(age_str)\nprice_float = float("99.50")\nprint(age_int, price_float)`,
              explanation: "Pythonic unpacking and swapping eliminate boilerplate code; casting functions convert compatible types."
            }
          ],
          bestPractices: [
            "Use snake_case for variable names (student_name, total_marks).",
            "Choose meaningful, descriptive names instead of single letters (total_marks vs x).",
            "Use set() instead of {} to initialize an empty set (since {} creates an empty dict).",
            "Prefer isinstance(obj, class) over type(obj) == class for robust type validation.",
            "Remember that strings and tuples are immutable; use lists when items need to be added or modified.",
            "Never use Python reserved keywords (class, def, if, for, etc.) as variable names."
          ],
          commonMistakes: [
            "SyntaxError: Starting variable names with numbers (e.g., 2name = 'Rahul').",
            "SyntaxError: Including spaces in variable names (student name = 'A').",
            "TypeError: Attempting to modify an immutable sequence (e.g., name[0] = 'J' or tuple[0] = 5).",
            "Logic Bug: Initializing an empty set with {} instead of set() (which creates an empty dict).",
            "TypeError: Trying to concatenate strings and numbers directly without str() conversion."
          ],
          practiceExercise: {
            title: "30. Practice Programs (Python Variables & Data Types)",
            problem: "Complete the following 4 hands-on practice programs:\n\nPractice 1: Student Information\nCreate variables for student name, age, course, percentage, eligible (bool), then print each value and its type.\n\nPractice 2: Employee Information\nCreate a dictionary containing name, age, salary, and department, then print it.\n\nPractice 3: List Operations\nCreate a list of 5 numbers, append a new number, modify index 0, and print the updated list.\n\nPractice 4: Type Conversion\nConvert string age = '21' to int and salary = '45000.50' to float, then print them.",
            solutionCode: `name = "Rahul"\nage = 21\ncourse = "Python"\npercentage = 85.5\neligible = True\n\nprint(name, type(name))\nprint(age, type(age))\nprint(course, type(course))\nprint(percentage, type(percentage))\nprint(eligible, type(eligible))\n\n# Practice 2: Employee Information Dictionary\nemployee = {\n    "name": "Rahul",\n    "age": 25,\n    "salary": 45000,\n    "department": "IT"\n}\nprint("Employee:", employee)\n\n# Practice 3: List Operations\nnumbers = [10, 20, 30, 40, 50]\nnumbers.append(60)\nnumbers[0] = 100\nprint("Updated List:", numbers)\n\n# Practice 4: Type Conversion\nage_str = "21"\nsalary_str = "45000.50"\nage_num = int(age_str)\nsalary_num = float(salary_str)\nprint("Converted:", age_num, type(age_num), salary_num, type(salary_num))`
          },
          keyTakeaways: [
            "Python variables are dynamic references bound to objects in memory without type declarations.",
            "Python provides 12 core built-in types: int, float, complex, bool, str, list, tuple, set, dict, range, bytes, NoneType.",
            "Lists, sets, and dictionaries are mutable; numbers, strings, and tuples are immutable.",
            "Use isinstance() for type checking and int(), float(), str() for explicit conversion.",
            "Unpacking (a, b, c = values) and pythonic swapping (a, b = b, a) enable clean, concise code."
          ],
          references: [
            { title: "Python Standard Data Types (Official Docs)", url: "https://docs.python.org/3/library/stdtypes.html" },
            { title: "Python for Everybody Chapter 2: Variables", url: "https://www.py4e.com/html3/02-variables" }
          ],
          mcqs: [
            {
              id: 1,
              question: "What happens in computer memory when the statement x = 100 is executed in Python?",
              options: [
                "A fixed memory box named 'x' is allocated, and the binary value 100 is copied into it",
                "An integer object with value 100 is created in RAM, and reference label 'x' is bound to it",
                "The computer reserves 4 bytes in the CPU cache for variable 'x'",
                "The variable 'x' is declared as a static integer type"
              ],
              correctAnswer: 1,
              explanation: "Python variables are reference tags. x = 100 creates an integer object 100 in heap memory and points the identifier 'x' to its memory address."
            },
            {
              id: 2,
              question: "Which data type in Python is ordered, indexed, and STRICTLY IMMUTABLE?",
              options: [
                "List ([...])",
                "Dictionary ({...})",
                "Tuple ((...))",
                "Set ({...})"
              ],
              correctAnswer: 2,
              explanation: "Tuples are ordered sequences accessed by position, but their elements cannot be modified, reordered, or deleted once created."
            },
            {
              id: 3,
              question: "How can two variables a and b be swapped in a single, atomic Python statement?",
              options: [
                "swap(a, b)",
                "a, b = b, a",
                "a = b; b = a",
                "a.swap(b)"
              ],
              correctAnswer: 1,
              explanation: "Python evaluates the right-hand tuple (b, a) first, then unpacks the values into the left-hand targets a and b simultaneously."
            },
            {
              id: 4,
              question: "What is the result of executing type(3 + 4j) in Python?",
              options: [
                "<class 'int'>",
                "<class 'float'>",
                "<class 'complex'>",
                "<class 'tuple'>"
              ],
              correctAnswer: 2,
              explanation: "Python natively supports complex numbers using the 'j' suffix for the imaginary component, represented by the <class 'complex'> type."
            },
            {
              id: 5,
              question: "Which of the following expressions will raise a TypeError in Python?",
              options: [
                "str(42) + ' items'",
                "int('100') + 50",
                "'Total: ' + 95",
                "float('3.14') * 2"
              ],
              correctAnswer: 2,
              explanation: "Python is strongly typed and does not implicitly coerce integers to strings in concatenation. 'Total: ' + 95 raises a TypeError."
            }
          ]
        }
      },
      {
        id: "py-mod-3",
        title: "Module 03 — Operators, Expressions & Precedence",
        description: "Operators and expressions are fundamental building blocks of Python programs. Master arithmetic, assignment, comparison, logical, bitwise, membership, and identity operators, operator precedence (PEMDAS), short-circuiting, ternary expressions, and hands-on coding practice.",
        completed: true,
        readingMaterial: {
          introduction: `Operators and expressions are fundamental building blocks of Python programs.

An operator is a symbol or keyword that tells Python to perform an operation.
An operand is a value or object on which an operator performs an operation.
An expression is a combination of values, variables, operators, function calls, or other elements that Python can evaluate to produce a value.

For example:
a = 10
b = 20
result = a + b

Here:
• a and b are operands.
• + is an operator.
• a + b is an expression.
• 30 is the value produced by the expression.

Operators allow us to perform essential tasks such as:
• Mathematical calculations
• Comparing values
• Assigning and updating values
• Performing logical decision-making
• Working with binary bits
• Checking membership within sequences and mappings
• Comparing object memory identity`,
          objectives: [
            "Understand operators, operands, and expressions as fundamental Python building blocks",
            "Master arithmetic operators (+, -, *, /, //, %, **) and integer vs float division rules",
            "Utilize assignment and augmented assignment operators (=, +=, -=, *=, /=, //=, %=, **=)",
            "Apply comparison operators (==, !=, >, <, >=, <=) and chained comparisons (18 <= age <= 60)",
            "Combine Boolean logic with logical operators (and, or, not) and understand short-circuit evaluation",
            "Work with bitwise operators (&, |, ^, ~, <<, >>) and binary representations",
            "Perform membership testing (in, not in) on strings, lists, and dictionary keys",
            "Evaluate object identity (is, is not) versus value equality (==, !=)",
            "Master operator precedence (PEMDAS) and operator associativity rules",
            "Write pythonic conditional expressions (ternary) and walrus assignment expressions (:=)"
          ],
          sections: [
            {
              heading: "5 & 6. Types of Operators & Arithmetic Operators Overview",
              text: `Python provides seven major categories of operators, along with specialized constructs such as conditional expressions, the walrus operator (:=), and matrix multiplication (@):

1. Arithmetic operators (+, -, *, /, //, %, **)
2. Assignment operators (=, +=, -=, *=, /=, //=, %=, **=)
3. Comparison operators (==, !=, >, <, >=, <=)
4. Logical operators (and, or, not)
5. Bitwise operators (&, |, ^, ~, <<, >>)
6. Membership operators (in, not in)
7. Identity operators (is, is not)

Arithmetic operators are used to perform mathematical calculations:`,
              table: {
                headers: ["Operator", "Name", "Description", "Example", "Result"],
                rows: [
                  ["+", "Addition", "Adds two numeric values; concatenates sequences", "10 + 5", "15"],
                  ["-", "Subtraction", "Subtracts right operand from left; unary negation", "10 - 5", "5 / -x"],
                  ["*", "Multiplication", "Multiplies numbers; repeats strings and sequences", "10 * 5", "50 / 'Hi ' * 3"],
                  ["/", "Division", "Divides left by right; ALWAYS produces a float", "10 / 5", "2.0 (float)"],
                  ["//", "Floor Division", "Divides and rounds down towards negative infinity", "10 // 3", "3 (-10 // 3 = -4)"],
                  ["%", "Modulus", "Returns the division remainder (10 = 3*3 + 1)", "10 % 3", "1"],
                  ["**", "Exponentiation", "Raises base to the power of exponent", "2 ** 3", "8 (2 * 2 * 2)"]
                ]
              }
            },
            {
              heading: "7 to 13. Deep Dive: Arithmetic Operators & Sequence Operations",
              text: `Key nuances and behaviors of Python's arithmetic operators:

• 7. Addition Operator (+): Adds two numbers (10 + 20 = 30). When applied to strings or lists, it performs concatenation ('Rahul' + ' ' + 'Kumar' -> 'Rahul Kumar').

• 8. Subtraction Operator (-): Performs binary subtraction (20 - 5 = 15). It also functions as a unary operator to negate numbers (if x = 10, -x produces -10).

• 9. Multiplication Operator (*): Multiplies numbers (10 * 5 = 50). When applied to a sequence, it repeats the content ('Hi ' * 3 -> 'Hi Hi Hi ').

• 10. Division Operator (/): Normal division always produces a floating-point result in Python 3 (10 / 2 = 5.0, 10 / 4 = 2.5).

• 11. Floor Division Operator (//): Produces the mathematical floor of the quotient. For positive numbers, 10 // 3 is 3. For negative numbers, it rounds toward negative infinity: -10 // 3 is -4.

• 12. Modulus Operator (%): Computes the integer remainder of a division. For example, 10 % 3 is 1 because 10 = 3 × 3 + 1. Practical application: checking whether an integer is even or odd (number % 2 == 0).

• 13. Exponentiation Operator (**): Raises a base number to a power (2 ** 3 = 8, 5 ** 2 = 25, 10 ** 3 = 1000, 4 ** 0 = 1).`
            },
            {
              heading: "15 to 21. Assignment & Augmented Assignment Operators",
              text: `Assignment operators store or update values in variables. The basic assignment operator is '=' (e.g., x = 10). Python also provides augmented assignment operators that perform an operation and reassign the result in one compact step:`,
              table: {
                headers: ["Operator", "Example", "Equivalent Concept", "Effect / Result"],
                rows: [
                  ["=", "x = 5", "x = 5", "Direct assignment"],
                  ["+=", "x += 5", "x = x + 5", "Add and assign (10 -> 15)"],
                  ["-=", "x -= 5", "x = x - 5", "Subtract and assign (20 -> 15)"],
                  ["*=", "x *= 3", "x = x * 3", "Multiply and assign (10 -> 30)"],
                  ["/=", "x /= 4", "x = x / 4", "Divide and assign (20 -> 5.0)"],
                  ["//=", "x //= 5", "x = x // 5", "Floor divide and assign (16 -> 3)"],
                  ["%=", "x %= 3", "x = x % 3", "Modulus and assign (10 -> 1)"],
                  ["**=", "x **= 3", "x = x ** 3", "Power and assign (2 -> 8)"]
                ]
              }
            },
            {
              heading: "22 to 29. Comparison Operators & Chained Comparisons",
              text: `Comparison operators compare values and return a Boolean (True or False):

• Equal to (==): True if values are equal (10 == 10 is True). Notice that '=' assigns while '==' checks equality.
• Not equal (!=): True if values differ (10 != 5 is True).
• Greater than (>): True if left is strictly greater than right (age = 25; age > 18 is True).
• Less than (<): True if left is strictly less than right (age = 15; age < 18 is True).
• Greater than or equal (>=): True if left is greater than or equal to right (age = 18; age >= 18 is True).
• Less than or equal (<=): True if left is less than or equal to right (marks = 40; marks <= 40 is True).

Chained Comparisons:
Python elegantly supports chained comparisons. For example:
18 <= age <= 60
This is evaluated conceptually as:
18 <= age and age <= 60
Chaining makes range boundary checks clean, natural, and expressive.`,
              table: {
                headers: ["Operator", "Meaning", "Example", "Evaluation"],
                rows: [
                  ["==", "Equal to", "10 == 10", "True"],
                  ["!=", "Not equal to", "10 != 5", "True"],
                  [">", "Greater than", "25 > 18", "True"],
                  ["<", "Less than", "15 < 18", "True"],
                  [">=", "Greater than or equal to", "18 >= 18", "True"],
                  ["<=", "Less than or equal to", "40 <= 40", "True"],
                  ["Chained", "Multiple bounds", "18 <= 25 <= 60", "True"]
                ]
              }
            },
            {
              heading: "30 to 35. Logical Operators, Truth Tables & Short-Circuit Evaluation",
              text: `Logical operators combine or modify Boolean conditions:

• and: True only when BOTH operands are true.
• or: True when AT LEAST ONE operand is true.
• not: Unary operator that reverses the Boolean state (not True -> False).

Short-Circuit Evaluation:
Python evaluates logical expressions lazily from left to right:
• In 'False and func()', because the first operand is False, Python stops immediately and never invokes func().
• In 'True or func()', because the first operand is True, Python stops immediately and never invokes func().

Truth Value Testing (Truthy and Falsy):
Any Python object can be tested for its Boolean truth value using bool(). The following values evaluate to False:
False, None, 0, 0.0, empty strings (""), empty lists ([]), empty tuples (()), empty dictionaries ({}), empty sets (set()).
Most other objects evaluate to True (e.g. bool("Python") is True, bool([1, 2, 3]) is True).`,
              table: {
                headers: ["A", "B", "A and B", "A or B", "not A"],
                rows: [
                  ["False", "False", "False", "False", "True"],
                  ["False", "True", "False", "True", "True"],
                  ["True", "False", "False", "True", "False"],
                  ["True", "True", "True", "True", "False"]
                ]
              }
            },
            {
              heading: "36 to 43. Bitwise Operators & Binary Representation",
              text: `Bitwise operators work directly on the individual bits of integers. They are fundamental in networking, flags, low-level systems, cryptography, and performance-sensitive code:

Binary Representation:
Decimal 10 = 1010 in binary; Decimal 5 = 0101 in binary.

• Bitwise AND (&): Bit is 1 only when both corresponding bits are 1.
  1010 & 0101 = 0000 (0 in decimal).

• Bitwise OR (|): Bit is 1 if at least one corresponding bit is 1.
  1010 | 0101 = 1111 (15 in decimal).

• Bitwise XOR (^): Bit is 1 when corresponding bits are different.
  1010 ^ 0101 = 1111 (15 in decimal).

• Bitwise NOT (~): Inverts all bits. Follows the integer rule ~x = -(x + 1).
  ~5 = -(5 + 1) = -6.

• Left Shift (<<): Shifts bits to the left, appending zeros (multiplies by 2 per position).
  5 << 1 (0101 -> 1010) = 10.

• Right Shift (>>): Shifts bits to the right (divides by 2 per position).
  10 >> 1 (1010 -> 0101) = 5.`,
              table: {
                headers: ["Operator", "Name", "Formula / Rule", "Example", "Result"],
                rows: [
                  ["&", "Bitwise AND", "1 only if both bits are 1", "10 & 5 (1010 & 0101)", "0"],
                  ["|", "Bitwise OR", "1 if at least one bit is 1", "10 | 5 (1010 | 0101)", "15"],
                  ["^", "Bitwise XOR", "1 if bits differ", "10 ^ 5 (1010 ^ 0101)", "15"],
                  ["~", "Bitwise NOT", "~x = -(x + 1)", "~5 = -(5 + 1)", "-6"],
                  ["<<", "Left Shift", "x * (2 ** n)", "5 << 1 (0101 -> 1010)", "10"],
                  [">>", "Right Shift", "x // (2 ** n)", "10 >> 1 (1010 -> 0101)", "5"]
                ]
              }
            },
            {
              heading: "44 to 47. Membership Operators (in, not in)",
              text: `Membership operators test whether a value is contained inside a collection (list, tuple, string, set, or dictionary):

• 'in': Returns True if the specified item exists in the collection.
  fruits = ["apple", "banana", "orange"]
  "apple" in fruits  # True
  "Python" in "Python Programming"  # True

• 'not in': Returns True if the item is absent.
  names = ["Rahul", "Arun", "Priya"]
  "John" not in names  # True

• Membership in Dictionaries:
  When used directly on a dictionary, membership tests check the dictionary's KEYS, not its values:
  student = {"name": "Rahul", "age": 21}
  "name" in student  # True (checks if "name" is a key)
  "Rahul" in student # False (checks keys, not values)`
            },
            {
              heading: "48 to 51. Identity Operators (is, is not) vs Equality (==)",
              text: `Identity operators test whether two references point to the exact same object in computer memory:

• 'is': True if both variables refer to the identical object in RAM (id(a) == id(b)).
• 'is not': True if both variables refer to distinct objects.

CRITICAL DISTINCTION: == vs is
• '==' compares VALUES (content equality: do they contain the same data?).
• 'is' checks OBJECT IDENTITY (are they the same object in RAM?).

Example:
a = [1, 2, 3]
b = [1, 2, 3]
a == b  # True (contents match)
a is b  # False (two distinct list instances in memory)

Best Practice:
Always use 'is' when checking for None:
if result is None:
    print("No result")`
            },
            {
              heading: "52 to 58. Operator Precedence & Associativity (PEMDAS Rules)",
              text: `When an expression contains multiple operators, Python follows defined precedence rules to determine evaluation order:

Parentheses have the highest priority and override default precedence:
result = 10 + 5 * 2    # 10 + 10 = 20 (Multiplication before Addition)
result = (10 + 5) * 2  # 15 * 2 = 30 (Parentheses override precedence)

Operator Associativity:
• Most operators evaluate from Left to Right:
  20 - 5 - 3 = (20 - 5) - 3 = 12
• Exponentiation (**) evaluates from Right to Left:
  2 ** 3 ** 2 = 2 ** (3 ** 2) = 2 ** 9 = 512 (NOT (2 ** 3) ** 2 = 64)`,
              table: {
                headers: ["Priority", "Operators / Constructs", "Description"],
                rows: [
                  ["1 (Highest)", "( )", "Parenthesized expressions"],
                  ["2", "**", "Exponentiation (evaluated right-to-left)"],
                  ["3", "+x, -x, ~x", "Unary positive, unary negation, bitwise NOT"],
                  ["4", "*, /, //, %", "Multiplication, division, floor division, modulus"],
                  ["5", "+, -", "Addition and subtraction"],
                  ["6", "<<, >>", "Bitwise left shift, right shift"],
                  ["7", "&", "Bitwise AND"],
                  ["8", "^", "Bitwise XOR"],
                  ["9", "|", "Bitwise OR"],
                  ["10", "==, !=, >, <, >=, <=, in, not in, is, is not", "Comparisons, membership, and identity"],
                  ["11", "not", "Logical NOT"],
                  ["12", "and", "Logical AND"],
                  ["13", "or", "Logical OR"],
                  ["14 (Lowest)", "x if cond else y", "Conditional ternary expression"]
                ]
              }
            },
            {
              heading: "59 & 60. Conditional Expressions (Ternary) & Walrus Operator (:=)",
              text: `Python provides modern constructs for concise conditional values and in-expression assignments:

• 59. Conditional Expression (Ternary Operator):
Syntax: value_if_true if condition else value_if_false
Example:
age = 20
result = "Adult" if age >= 18 else "Minor"  # "Adult"

• 60. Assignment Expressions (The Walrus Operator :=):
Introduced in Python 3.8, ':=' assigns a value to a variable while returning that value for use in surrounding expressions:
if (n := len("Python")) > 5:
    print(n)  # Prints 6
This is useful for avoiding repeated function calls in conditions.`
            },
            {
              heading: "62 to 64. Expressions with Sequences & Operator Overloading",
              text: `Operators in Python are polymorphic—their behavior adapts to operand types:

• String Concatenation & Repetition:
  first = "Hello"; second = "Python"
  result = first + " " + second   # "Hello Python"
  message = "Hi " * 3             # "Hi Hi Hi "

• List Concatenation & Repetition:
  a = [1, 2]; b = [3, 4]
  print(a + b)                    # [1, 2, 3, 4]
  print(a * 3)                    # [1, 2, 1, 2, 1, 2]

• Operator Overloading:
Python objects can define custom operator behavior using special dunder methods (e.g. __add__, __mul__). The same '+' operator performs numeric addition on integers, concatenation on strings, and merging on lists.`
            },
            {
              heading: "80. Summary of Differences Between Operator Categories",
              text: "Key characteristics distinguishing Python operator categories:",
              bulletPoints: [
                "Arithmetic (+, -, *, /, //, %, **): Used for mathematical calculations on numeric operands.",
                "Assignment (=, +=, -=, *=, etc.): Used to store or update values in variables.",
                "Comparison (==, !=, >, <, >=, <=): Used to compare values and return Boolean True or False.",
                "Logical (and, or, not): Used to combine or negate Boolean conditions with short-circuiting.",
                "Bitwise (&, |, ^, ~, <<, >>): Used to manipulate integer bits directly at the binary level.",
                "Membership (in, not in): Used to test existence inside sequences, collections, and dict keys.",
                "Identity (is, is not): Used to verify whether two variables reference the identical memory object in RAM.",
                "Conditional Expression (x if c else y): Compact inline ternary selection.",
                "Walrus Operator (:=): Inline assignment within expressions."
              ]
            }
          ],
          codeExamples: [
            {
              title: "14. Arithmetic Operators in Action",
              code: `a = 20
b = 6

print("Addition:", a + b)           # 26
print("Subtraction:", a - b)        # 14
print("Multiplication:", a * b)     # 120
print("Division (/):", a / b)       # 3.3333333333333335 (float)
print("Floor Division (//):", a // b) # 3 (integer quotient)
print("Modulus (%):", a % b)        # 2 (remainder)
print("Power (**):", a ** 2)        # 400 (20^2)

# Unary minus and negative floor division
x = 10
print("Unary Negation:", -x)        # -10
print("Floor div with negative:", -10 // 3) # -4 (rounds toward -infinity)`,
              explanation: "Demonstrates all 7 arithmetic operations, float division vs floor division, and negative rounding."
            },
            {
              title: "15 to 21. Augmented Assignment Operators",
              code: `x = 10
x += 5   # x = x + 5 -> 15
print("After += 5:", x)

x -= 3   # x = x - 3 -> 12
print("After -= 3:", x)

x *= 2   # x = x * 2 -> 24
print("After *= 2:", x)

x /= 4   # x = x / 4 -> 6.0 (float)
print("After /= 4:", x)

x //= 2  # x = x // 2 -> 3.0
print("After //= 2:", x)

x %= 2   # x = x % 2 -> 1.0
print("After %= 2:", x)

p = 2
p **= 3  # p = p ** 3 -> 8
print("After **= 3:", p)`,
              explanation: "Augmented assignments modify the variable in place cleanly without repeating its name."
            },
            {
              title: "22 to 29. Comparison Operators & Chained Comparisons",
              code: `age = 25
marks = 85

print("Equal (age == 25):", age == 25)         # True
print("Not Equal (age != 18):", age != 18)     # True
print("Greater than (marks > 90):", marks > 90) # False
print("Less than or equal (age <= 30):", age <= 30) # True

# Chained Comparison (equivalent to 18 <= age and age <= 60)
is_working_age = 18 <= age <= 60
print("18 <= age <= 60:", is_working_age)       # True`,
              explanation: "Comparisons yield Boolean results. Chained comparisons provide clean interval checking."
            },
            {
              title: "30 to 35. Logical Operators, Short-Circuiting & Truth Value Testing",
              code: `age = 25
has_id = True
is_student = False

# and / or / not
print("age >= 18 and has_id:", age >= 18 and has_id) # True
print("is_student or age < 18:", is_student or age < 18) # False
print("not is_student:", not is_student)             # True

# Short-circuit evaluation demonstration
def expensive_call():
    print("Function executed!")
    return True

# expensive_call is NEVER invoked because the first operand is False
short_circuit_result = False and expensive_call()
print("Result of False and expensive_call():", short_circuit_result)

# Truth Value Testing: Falsy values
falsy = [False, None, 0, 0.0, "", [], (), {}, set()]
for item in falsy:
    print(f"bool({repr(item)}):", bool(item)) # All False`,
              explanation: "Logical operators evaluate lazily and Python treats zero, None, and empty collections as False."
            },
            {
              title: "36 to 43. Bitwise Operators & Binary Mathematics",
              code: `a = 10  # Binary: 1010
b = 5   # Binary: 0101

print("a & b (Bitwise AND):", a & b)   # 0000 -> 0
print("a | b (Bitwise OR):", a | b)    # 1111 -> 15
print("a ^ b (Bitwise XOR):", a ^ b)   # 1111 -> 15
print("~a (Bitwise NOT):", ~a)         # -(10 + 1) -> -11

# Bit shifting
x = 5  # Binary: 0101
print("5 << 1 (Left Shift):", x << 1)   # 1010 -> 10 (multiply by 2)
print("10 >> 1 (Right Shift):", 10 >> 1) # 0101 -> 5 (divide by 2)`,
              explanation: "Bitwise operators manipulate integer binary bits; ~x produces -(x + 1)."
            },
            {
              title: "44 to 51. Membership, Identity & '==' vs 'is'",
              code: `fruits = ["apple", "banana", "orange"]
print("'apple' in fruits:", "apple" in fruits)           # True
print("'grapes' not in fruits:", "grapes" not in fruits) # True
print("'Python' in 'Python Code':", "Python" in "Python Code") # True

student = {"name": "Rahul", "age": 21}
print("'name' in student (checks keys):", "name" in student) # True

# Identity Testing: == vs is
list_a = [1, 2, 3]
list_b = [1, 2, 3]
list_c = list_a

print("list_a == list_b (Value equality):", list_a == list_b) # True
print("list_a is list_b (Object identity):", list_a is list_b) # False (different memory addresses)
print("list_a is list_c (Same object):", list_a is list_c)   # True

# Checking for None
val = None
if val is None:
    print("val is None verified correctly")`,
              explanation: "Use == to compare values; reserve 'is' for checking identity and singletons like None."
            },
            {
              title: "59 to 64. Ternary Operator, Walrus (:=) & Overloading",
              code: `age = 20
status = "Adult" if age >= 18 else "Minor"
print("Status:", status)

# Assignment expression (Walrus :=)
if (n := len("Python")) > 5:
    print(f"Length {n} is greater than 5")

# Sequence repetition and concatenation
print("Concatenation:", "Hello " + "Python")
print("String repeat:", "Hi! " * 3)
print("List concatenation:", [1, 2] + [3, 4])
print("List repetition:", [0] * 4)`,
              explanation: "Highlights concise ternary conditions, walrus in-expression assignment, and sequence operator overloading."
            },
            {
              title: "69 to 78. Real-World Practical Systems",
              code: `username = "admin"
password = "python123"
is_valid = (username == "admin") and (password == "python123")
print("Login Valid:", is_valid)

# 2. Total & Discount Calculation
price = 2000.0
discount_pct = 10.0
discount_amount = price * discount_pct / 100
final_price = price - discount_amount
print("Discount:", discount_amount, "Final:", final_price)

# 3. Even or Odd Classification
num = 25
parity = "Even" if num % 2 == 0 else "Odd"
print(f"{num} is {parity}")

# 4. Sign Classifier
val = -10
if val > 0:
    sign = "Positive"
elif val < 0:
    sign = "Negative"
else:
    sign = "Zero"
print(f"{val} is {sign}")`,
              explanation: "Combines arithmetic, comparison, logical, and ternary operators into realistic application workflows."
            }
          ],
          bestPractices: [
            "Use parentheses freely to make operator precedence explicit and prevent subtle calculation bugs.",
            "Use '==' when comparing values; reserve 'is' strictly for identity checks (especially 'is None').",
            "Understand integer floor division (//) vs float division (/) when computing indices and counts.",
            "Leverage chained comparisons (e.g., 18 <= age <= 60) for clean and readable range conditions.",
            "Take advantage of short-circuit evaluation for safe guards (e.g., 'obj is not None and obj.value > 0').",
            "Use augmented assignment operators (+=, -=, *=, etc.) for clean, concise state updates.",
            "Keep expressions simple and break complex formulas into well-named intermediate variables."
          ],
          commonMistakes: [
            "Confusing '=' (assignment) with '==' (equality comparison): 'x = 10' assigns, 'x == 10' checks equality.",
            "Assuming '/' yields an integer: 10 / 2 yields float 5.0. Use '//' if an integer is required.",
            "Forgetting that floor division (//) rounds toward negative infinity: -10 // 3 is -4, not -3.",
            "Confusing '%' (remainder) with '/' (division quotient): 10 % 3 is 1, whereas 10 / 3 is 3.333...",
            "Using 'is' instead of '==' to compare numbers or strings, which can fail across different memory allocations.",
            "Misunderstanding precedence without parentheses: 10 + 5 * 2 yields 20, not 30.",
            "Assuming exponentiation (**) is left-associative: 2 ** 3 ** 2 is 2 ** (3 ** 2) = 512, NOT 64."
          ],
          practiceExercise: {
            title: "83. Comprehensive Coding Practice Suite (6 Programs)",
            problem: `Write and verify the following 6 essential Python operator programs:

Program 1: All-in-One Calculator
Accepts two numbers (e.g. a = 20, b = 5) and displays: Addition, Subtraction, Multiplication, Division, Floor division, Remainder, and Exponentiation.

Program 2: Even or Odd Checker
Checks whether a given number is even or odd using the modulus operator (%).

Program 3: Largest of Two Numbers
Finds the larger of two numbers using a conditional expression (ternary operator).

Program 4: Largest of Three Numbers
Finds the greatest among three numbers using comparison and logical operators (and).

Program 5: Student Eligibility Checker
Evaluates eligibility based on two criteria: Age must be at least 18 AND Marks must be at least 60.

Program 6: Simple Discount Calculator
Accepts product price and discount percentage, computes discount amount (price * discount / 100) and final price.`,
            solutionCode: `a = 20
b = 5
print("--- Program 1: Calculator ---")
print("Addition:", a + b)           # 25
print("Subtraction:", a - b)        # 15
print("Multiplication:", a * b)     # 100
print("Division:", a / b)           # 4.0
print("Floor Division:", a // b)    # 4
print("Remainder (%):", a % b)      # 0
print("Power (**):", a ** b)        # 3200000

# Program 2: Even or Odd
print("\\n--- Program 2: Even or Odd ---")
number = 42
if number % 2 == 0:
    print(f"{number} is Even")
else:
    print(f"{number} is Odd")

# Program 3: Largest of Two Numbers
print("\\n--- Program 3: Largest of Two ---")
x = 50
y = 75
largest_two = x if x > y else y
print(f"Largest of {x} and {y}: {largest_two}")

# Program 4: Largest of Three Numbers
print("\\n--- Program 4: Largest of Three ---")
n1, n2, n3 = 45, 89, 62
if n1 >= n2 and n1 >= n3:
    largest_three = n1
elif n2 >= n1 and n2 >= n3:
    largest_three = n2
else:
    largest_three = n3
print(f"Largest of {n1}, {n2}, {n3}: {largest_three}")

# Program 5: Student Eligibility Checker
print("\\n--- Program 5: Eligibility Checker ---")
age = 22
marks = 75
if age >= 18 and marks >= 60:
    print("Eligible for Admission")
else:
    print("Not eligible")

# Program 6: Simple Discount Calculator
print("\\n--- Program 6: Discount Calculator ---")
price = 2000.0
discount_percent = 10.0
discount_amount = price * discount_percent / 100
final_price = price - discount_amount
print("Original Price:", price)
print("Discount Amount:", discount_amount)
print("Final Price:", final_price)`
          },
          keyTakeaways: [
            "An operator is a symbol/keyword performing an action; operands are the values acted upon; an expression evaluates to a value.",
            "Python supports 7 core operator categories: Arithmetic, Assignment, Comparison, Logical, Bitwise, Membership, and Identity.",
            "Standard division (/) always yields float; floor division (//) rounds toward negative infinity; modulus (%) yields remainder.",
            "Augmented assignment operators (+=, -=, *=, etc.) modify variables in place concisely.",
            "Chained comparisons (18 <= age <= 60) allow intuitive, readable range constraints.",
            "Logical operators (and, or) utilize short-circuit evaluation; falsy values include 0, 0.0, None, '', [], (), {}, set().",
            "Bitwise operators (&, |, ^, ~, <<, >>) operate on binary bits; ~x equals -(x + 1).",
            "Use '==' for value equality and reserve 'is' for object memory identity (especially 'is None').",
            "Parentheses (PEMDAS) override precedence and make complex mathematical logic unambiguous.",
            "Conditional ternary (x if cond else y) and walrus operator (:=) enable expressive, compact syntax."
          ],
          references: [
            { title: "Python Official Documentation: Expressions & Operators", url: "https://docs.python.org/3/reference/expressions.html" },
            { title: "Python for Everybody Chapter 3: Conditional Execution", url: "https://www.py4e.com/html3/03-conditional" }
          ],
          mcqs: [
            {
              id: 1,
              question: "According to Python operator precedence (PEMDAS), what is the value of 10 + 5 * 2 ** 2?",
              options: [
                "60",
                "30",
                "100",
                "240"
              ],
              correctAnswer: 1,
              explanation: "Exponentiation (2 ** 2 = 4) executes first, followed by multiplication (5 * 4 = 20), followed by addition (10 + 20 = 30)."
            },
            {
              id: 2,
              question: "What is the crucial difference between the '==' operator and the 'is' operator in Python?",
              options: [
                "'==' compares memory addresses; 'is' compares value equality",
                "'==' compares values for equality; 'is' tests object identity (same memory address)",
                "'==' is used for strings; 'is' is used for numbers",
                "There is no difference; they are synonymous"
              ],
              correctAnswer: 1,
              explanation: "a == b checks whether two objects have equivalent contents; a is b checks whether both reference labels point to the exact same object in RAM."
            },
            {
              id: 3,
              question: "What is 'short-circuit evaluation' in Python logical expressions?",
              options: [
                "Python terminates the program when an error occurs in an expression",
                "Evaluation stops as soon as the overall truth value is determined without evaluating remaining operands",
                "Logical operators are automatically converted to bitwise operators",
                "Expressions inside parentheses are skipped"
              ],
              correctAnswer: 1,
              explanation: "For 'and', if the first operand is False, the result is guaranteed False. For 'or', if the first operand is True, the result is guaranteed True."
            },
            {
              id: 4,
              question: "What does the expression 'admin' in user_dict evaluate when user_dict is a Python dictionary?",
              options: [
                "It checks if 'admin' exists among the dictionary's values",
                "It checks if 'admin' exists among the dictionary's KEYS",
                "It checks both keys and values simultaneously",
                "It raises a KeyError"
              ],
              correctAnswer: 1,
              explanation: "When applied directly to a dictionary, the 'in' membership operator tests strictly for the existence of keys, not values."
            },
            {
              id: 5,
              question: "What is the result of floor division 7 // 2 versus true division 7 / 2 in Python 3?",
              options: [
                "Both return 3.5",
                "7 // 2 returns 3; 7 / 2 returns 3.5",
                "7 // 2 returns 3.5; 7 / 2 returns 3",
                "Both return integer 3"
              ],
              correctAnswer: 1,
              explanation: "// truncates the decimal component down to the nearest integer (3), while / always performs floating-point division (3.5)."
            }
          ]
        }
      },
      {
        id: "py-mod-4",
        title: "Module 04 — Conditional Execution & Exception Handling",
        description: "A practical Python study guide. Master Boolean expressions, comparison and logical operators, if/elif/else decision structures, nested conditionals, try/except error handling, input validation, and real-world worked exercises.",
        completed: true,
        readingMaterial: {
          introduction: `Conditional Execution & Exception Handling: A practical Python study guide.

Python normally runs statements sequentially from top to bottom. Conditional execution allows programs to select alternative execution paths based on whether a condition evaluates to True or False.

Meanwhile, runtime errors (exceptions) can unexpectedly halt program execution when unexpected inputs occur (such as non-numeric text input or division by zero). The try/except construct provides an essential mechanism to catch anticipated errors, validate inputs, and produce helpful user feedback without crashing.`,
          objectives: [
            "Compare values using Python comparison operators (==, !=, >, <, >=, <=)",
            "Combine and reverse conditions with logical operators (and, or, not)",
            "Understand short-circuit evaluation and apply the guardian pattern",
            "Evaluate truthy and falsy values (empty strings, empty containers, None, zero)",
            "Use if, elif, and else statements to construct clean decision branches",
            "Structure nested conditionals and simplify them using compound logical expressions",
            "Catch specific runtime exceptions using try, except, else, and finally blocks",
            "Validate user inputs gracefully and produce meaningful error messages"
          ],
          sections: [
            {
              heading: "2 & 3. Conditional Execution & Boolean Comparisons",
              text: `Python normally runs statements from top to bottom. A conditional lets the program select statements based on whether a condition is true or false.

temperature = 32
if temperature > 30:
    print("It is a hot day.")

The expression 'temperature > 30' evaluates to True, so Python runs the indented statement. If the condition were false, Python would skip that block.

Boolean Values and Comparisons:
A Boolean is one of two values: True or False (capitalization matters in Python). A Boolean expression evaluates to one of these values.

Assignment is different from comparison:
• '=' assigns a value to a variable (score = 90 stores 90 in score).
• '==' compares two values (score == 90 evaluates to True).`,
              table: {
                headers: ["Operator", "Meaning", "Example", "Result"],
                rows: [
                  ["==", "Equal to", "5 == 5", "True"],
                  ["!=", "Not equal to", "5 != 3", "True"],
                  [">", "Greater than", "8 > 4", "True"],
                  ["<", "Less than", "2 < 7", "True"],
                  [">=", "Greater than or equal to", "5 >= 5", "True"],
                  ["<=", "Less than or equal to", "4 <= 6", "True"]
                ]
              }
            },
            {
              heading: "4. Logical Operators & Short-Circuit Evaluation",
              text: `Logical operators combine Boolean expressions or reverse a condition:

• and: Both conditions must be true for the combined condition to be true.
• or: At least one condition must be true.
• not: Reverses a logical condition (e.g. not False evaluates to True).

Combine Conditions Clearly:
Use parentheses to make grouping explicit and readable:
age = 16
has_permission = True
if age >= 18 or (age >= 16 and has_permission):
    print("You can participate.")
else:
    print("You cannot participate yet.")

Short-Circuit Evaluation:
Python stops evaluating a logical expression as soon as its result is known:
• With 'and', if the first condition is False, the entire expression is False; the second condition is never evaluated.
• With 'or', if the first condition is True, the entire expression is True; the second condition is never evaluated.

Guardian Pattern Example:
number = 0
if number != 0 and 10 / number > 1:
    print("The condition is true.")
Because 'number != 0' is false, Python never evaluates the division, safely preventing a ZeroDivisionError.`,
              table: {
                headers: ["A", "B", "A and B", "A or B", "not A"],
                rows: [
                  ["True", "True", "True", "True", "False"],
                  ["True", "False", "False", "True", "False"],
                  ["False", "True", "False", "True", "True"],
                  ["False", "False", "False", "False", "True"]
                ]
              }
            },
            {
              heading: "5. Truthy and Falsy Values",
              text: `A condition can use a value directly. Python treats some values as false (falsy) and most other values as true (truthy).

Common Falsy Values in Python:
• False
• None
• Numeric zero (0, 0.0)
• Empty strings ("")
• Empty containers such as [], (), {}, and set()

Practical Pythonic Check:
name = ""
if name:
    print("A name was entered.")
else:
    print("The name is empty.")

An empty string is falsy, so the program prints that the name is empty. Checking a list directly is also useful: 'if items:' means the list has at least one element.`
            },
            {
              heading: "6 & 7. if, elif, else & Nested Conditionals",
              text: `• The if Statement:
Runs a block only when its condition is true. The colon (:) starts the block, and consistent 4-space indentation defines which statements belong to it.

• Adding else:
Provides an alternative branch when the condition is false:
number = 7
if number % 2 == 0:
    print("The number is even.")
else:
    print("The number is odd.")

• Using elif for Multiple Choices:
Python checks from top to bottom, runs the first matching block, and skips the remaining branches. Order matters: always put the highest or most specific condition first!

• Nested Conditionals vs Combined Conditions:
A nested conditional is an if statement inside another conditional block:
age = 20
has_id = True
if age >= 18:
    if has_id:
        print("Entry approved.")
    else:
        print("Please show identification.")
else:
    print("You must be at least 18.")

Sometimes a logical expression is simpler than nesting:
if age >= 18 and has_id:
    print("Entry approved.")
else:
    print("Entry requirements were not met.")
Use nesting when the second decision only matters after the first; combine conditions when they form one unified rule.`
            },
            {
              heading: "8. Exception Handling with try and except",
              text: `An exception is an error or unexpected event raised while a program runs (e.g. converting non-numeric text to an integer, dividing by zero, or accessing missing keys). An unhandled exception terminates the program abruptly.

Core Exception Handling Mechanics:
• try: The code that might raise an error goes here.
• except SpecificError: Catches and handles expected exceptions (e.g. ValueError, ZeroDivisionError).
• else: Optional clause that runs ONLY when the try block completes successfully without any exception.
• except SpecificError as error: Captures the exception object to inspect its diagnostic message.
• finally: Optional block that executes unconditionally whether or not an exception occurred, ideal for cleanup.

Best Practice:
Always catch specific exceptions! Avoid a bare 'except:' that catches everything; it can hide programming mistakes, typos, and syntax errors, making debugging difficult.`
            },
            {
              heading: "10. Common Mistakes & Pitfalls",
              text: `Frequent mistakes and their corrections:`,
              table: {
                headers: ["Mistake", "Why It Fails", "Correction"],
                rows: [
                  ["Using '=' for comparison", "Single '=' is assignment, not comparison", "Use '==' to compare; use '=' to assign (e.g., if answer == 42:)"],
                  ["Forgetting the colon ':'", "Python syntax requires a colon to open a code block", "End if, elif, else, try, and except headers with ':'"],
                  ["Inconsistent indentation", "Mixing tabs and spaces or varying indent depth triggers IndentationError", "Indent every statement in a block consistently with 4 spaces"],
                  ["Broad ranges in wrong order", "Conditions evaluate top-down; broad checks shadow specific branches", "Check the highest grade or most specific condition first"],
                  ["Catching every exception (bare except:)", "Conceals programming bugs like typos, NameErrors, and SystemExit", "Catch specific exceptions you expect and know how to handle"]
                ]
              }
            },
            {
              heading: "13. Quick Review & Glossary",
              text: "Key vocabulary and foundational concepts in conditional control flow:",
              bulletPoints: [
                "Boolean: A value that is either True or False.",
                "Condition: An expression evaluated to choose an execution path.",
                "Branch: One possible path through a conditional statement.",
                "Short-circuit: Stopping logical evaluation as soon as the final outcome is guaranteed.",
                "Falsy: A value Python treats as false in a condition (0, None, '', [], {}).",
                "Exception: A runtime event that interrupts normal program execution unless caught.",
                "try / except: The standard Python pattern for safe runtime error recovery."
              ]
            }
          ],
          codeExamples: [
            {
              title: "2 & 6. Basic Conditionals & Modulo Even/Odd",
              code: `temperature = 32
if temperature > 30:
    print("It is a hot day.")

# Even or odd with modulo operator (%)
number = 7
if number % 2 == 0:
    print("The number is even.")
else:
    print("The number is odd.")`,
              explanation: "Demonstrates if execution when true and if/else branching using remainder division."
            },
            {
              title: "4 & 5. Logical Operators, Short-Circuiting & Falsy Checks",
              code: `age = 20
has_ticket = True
if age >= 18 and has_ticket:
    print("You may enter.")

# or: at least one condition must be true
is_weekend = True
is_holiday = False
if is_weekend or is_holiday:
    print("There is no school today.")

# not: reverse a condition
is_raining = False
if not is_raining:
    print("You do not need an umbrella.")

# Combining conditions clearly with parentheses
user_age = 16
has_permission = True
if user_age >= 18 or (user_age >= 16 and has_permission):
    print("You can participate.")
else:
    print("You cannot participate yet.")

# Short-circuit evaluation (Guardian Pattern avoids ZeroDivisionError)
num = 0
if num != 0 and 10 / num > 1:
    print("Condition is true.")
else:
    print("Division by zero safely avoided via short-circuit.")

# Truthy and falsy values
name = ""
if name:
    print("A name was entered.")
else:
    print("The name is empty (falsy value).")`,
              explanation: "Covers and, or, not logic, parentheses grouping, short-circuit guardian patterns, and falsy checks."
            },
            {
              title: "6 & 7. Multi-Branch elif Chains & Nested Conditionals",
              code: `score = 82
if score >= 90:
    print("Grade: A")
elif score >= 80:
    print("Grade: B")
elif score >= 70:
    print("Grade: C")
elif score >= 60:
    print("Grade: D")
else:
    print("Grade: F")

# Nested conditional
user_age = 20
has_id = True
if user_age >= 18:
    if has_id:
        print("Entry approved.")
    else:
        print("Please show identification.")
else:
    print("You must be at least 18.")

# Simplified combined conditional
if user_age >= 18 and has_id:
    print("Entry approved.")
else:
    print("Entry requirements were not met.")`,
              explanation: "Shows top-to-bottom elif precedence and compares nested decisions with composite boolean expressions."
            },
            {
              title: "8. Robust Exception Handling (try, except, else, finally)",
              code: `try:
    number = int(input("Enter a whole number: "))
    print("You entered:", number)
except ValueError:
    print("That was not a valid whole number.")

# 2. Handling different errors differently with else clause
try:
    numerator = int(input("Numerator: "))
    denominator = int(input("Denominator: "))
    result = numerator / denominator
except ValueError:
    print("Please enter whole numbers.")
except ZeroDivisionError:
    print("The denominator cannot be zero.")
else:
    print("The result is:", result)

# 3. Inspecting exception message and using finally for cleanup
try:
    print("Trying an operation...")
    val = int("not a number")
except ValueError as error:
    print("Conversion failed:", error)
finally:
    print("This cleanup message always runs regardless of errors.")`,
              explanation: "Demonstrates specific except blocks, error diagnostics via 'as error', else for success-only code, and finally for cleanup."
            },
            {
              title: "9. Complete Worked Example: Score & Grade Validator",
              code: `try:
    score = int(input("Enter a score from 0 to 100: "))
    if score < 0 or score > 100:
        print("The score must be between 0 and 100.")
    elif score >= 90:
        print("Grade: A")
    elif score >= 80:
        print("Grade: B")
    elif score >= 70:
        print("Grade: C")
    elif score >= 60:
        print("Grade: D")
    else:
        print("Grade: F")
except ValueError:
    print("Please enter a whole number.")`,
              explanation: "Combines input conversion with try/except, boundary validation with 'or', and multi-way branch classification."
            }
          ],
          bestPractices: [
            "Use '==' for comparison tests and '=' strictly for variable assignment.",
            "Always indent code blocks consistently with 4 spaces per indentation level.",
            "Catch specific exceptions (e.g. ValueError, ZeroDivisionError) instead of bare except: clauses.",
            "Order elif branches from the most specific / highest threshold to the lowest.",
            "Use the else block in try/except for code that should only execute after successful completion.",
            "Use parentheses to make compound logical conditions clear and easy to read.",
            "Leverage short-circuit evaluation as a guardian check before performing risky operations."
          ],
          commonMistakes: [
            "Using '=' instead of '==' in an if statement (e.g., 'if answer = 42:' causes SyntaxError).",
            "Forgetting the colon (:) at the end of if, elif, else, try, and except lines.",
            "Inconsistent indentation mixing tabs and spaces causing IndentationError.",
            "Checking broad ranges in the wrong order (e.g. checking score >= 60 before score >= 90).",
            "Using bare 'except:' which catches and conceals unintended bugs like typos and NameErrors."
          ],
          practiceExercise: {
            title: "11 & 12. Practice Exercises & Worked Answer Key (5 Exercises)",
            problem: `Complete the following 5 hands-on Python exercises:

Exercise 1: Positive, Negative, or Zero
Ask the user for a number (float) and print whether it is Positive, Negative, or Zero.

Exercise 2: Even or Odd with Exception Handling
Ask for a whole number. Print Even or Odd. Handle input that cannot be converted to an integer gracefully.

Exercise 3: Login Authentication Check
Set username = "student" and password = "python123". Ask the user for both. Print "Login successful" only if both match; otherwise print "Incorrect username or password".

Exercise 4: Age Category Classifier with Validation
Ask for an age and classify as: Child (under 13), Teenager (13-17), Adult (18-64), or Senior (65+). Handle non-numeric input and reject negative ages.

Exercise 5: Safe Arithmetic Calculator
Ask for two numbers and an operator (+, -, *, /). Display the result. Handle non-numeric input and prevent division by zero.`,
            solutionCode: `number = float(input("Enter a number: "))
if number > 0:
    print("Positive")
elif number < 0:
    print("Negative")
else:
    print("Zero")

# Exercise 2: Even or Odd with try/except
try:
    number = int(input("Enter a whole number: "))
    if number % 2 == 0:
        print("Even")
    else:
        print("Odd")
except ValueError:
    print("Please enter a whole number.")

# Exercise 3: Login Check
username = "student"
password = "python123"
entered_username = input("Username: ")
entered_password = input("Password: ")
if entered_username == username and entered_password == password:
    print("Login successful")
else:
    print("Incorrect username or password")

# Exercise 4: Age Category Classifier
try:
    age = int(input("Enter your age: "))
    if age < 0:
        print("Age cannot be negative.")
    elif age < 13:
        print("Child")
    elif age < 18:
        print("Teenager")
    elif age < 65:
        print("Adult")
    else:
        print("Senior")
except ValueError:
    print("Please enter your age as a whole number.")

# Exercise 5: Simple Calculator
try:
    first = float(input("First number: "))
    operator = input("Operator (+, -, *, /): ")
    second = float(input("Second number: "))

    if operator == "+":
        result = first + second
        print("Result:", result)
    elif operator == "-":
        result = first - second
        print("Result:", result)
    elif operator == "*":
        result = first * second
        print("Result:", result)
    elif operator == "/":
        if second == 0:
            print("You cannot divide by zero.")
        else:
            result = first / second
            print("Result:", result)
    else:
        print("Choose +, -, *, or /.")
except ValueError:
    print("Please enter valid numbers.")`
          },
          keyTakeaways: [
            "Boolean expressions evaluate to True or False; use '==' for comparison and '=' for assignment.",
            "Logical operators combine conditions: 'and' requires all true, 'or' requires one true, 'not' inverts.",
            "Short-circuit evaluation stops evaluating logical expressions as soon as the outcome is known.",
            "if, elif, and else execute the first matching branch from top to bottom.",
            "Order matters in elif ladders: place the highest or most specific condition first.",
            "try/except catches expected runtime errors and prevents program crashes.",
            "The else clause in try runs only upon success; finally runs unconditionally for cleanup.",
            "Always catch specific exceptions (ValueError, ZeroDivisionError) rather than bare except:."
          ],
          references: [
            { title: "Python Documentation: More Control Flow Tools", url: "https://docs.python.org/3/tutorial/controlflow.html" },
            { title: "Python Documentation: Errors and Exceptions", url: "https://docs.python.org/3/tutorial/errors.html" }
          ],
          mcqs: [
            {
              id: 1,
              question: "In an if-elif-else conditional ladder, what happens once a condition evaluates to True?",
              options: [
                "Python evaluates all remaining elif statements to check for conflicts",
                "Python executes that block and immediately exits the entire ladder, skipping subsequent elif/else blocks",
                "Python restarts the ladder from the top",
                "Python raises a BranchResolutionError"
              ],
              correctAnswer: 1,
              explanation: "Python conditionals are mutually exclusive: once a branch evaluates to True, its block runs and execution jumps to the end of the entire chain."
            },
            {
              id: 2,
              question: "Which of the following values evaluates to True in a Python boolean context (truthy)?",
              options: [
                "[] (empty list)",
                "\"\" (empty string)",
                "0 (zero)",
                "\"0\" (string containing character '0')"
              ],
              correctAnswer: 3,
              explanation: "Any non-empty string—including \"0\" or \" \"—has a length > 0 and evaluates to True in boolean contexts."
            },
            {
              id: 3,
              question: "When does the 'else' block execute in a try-except-else-finally construct?",
              options: [
                "When an exception was caught and handled successfully",
                "Only when the try block completes with ZERO exceptions raised",
                "Always, immediately before the finally block",
                "When the finally block raises an error"
              ],
              correctAnswer: 1,
              explanation: "The else block in a try construct runs strictly if and only if no exceptions were raised during execution of the try block."
            },
            {
              id: 4,
              question: "Why is using a bare 'except:' clause strongly discouraged in production code?",
              options: [
                "It slows down Python program execution by 50%",
                "It catches BaseException, swallowing KeyboardInterrupt (Ctrl+C) and masking unexpected bugs like NameError",
                "It only works with numbers, not strings",
                "It causes an automatic SyntaxError in Python 3.10+"
              ],
              correctAnswer: 1,
              explanation: "A bare 'except:' catches all subclasses of BaseException, trapping system shutdown signals and masking typos or logic errors."
            },
            {
              id: 5,
              question: "What is the execution guarantee of the 'finally' clause in Python exception handling?",
              options: [
                "It only runs if an unhandled exception occurred",
                "It runs in 100% of execution paths, including after return, break, or unhandled exceptions",
                "It only runs if the try block completed cleanly",
                "It is bypassed if an exception is caught"
              ],
              correctAnswer: 1,
              explanation: "finally is guaranteed to execute unconditionally, making it the ideal location for cleanup tasks (closing files, releasing network sockets)."
            }
          ]
        }
      },
      {
        id: "py-mod-5",
        title: "Module 05 — Iteration & Loops",
        description: "Updating variables, while statements, infinite loops, break & continue, for loops, counting, summing, and min/max search patterns.",
        completed: true,
        readingMaterial: {
          introduction: `Loops let a program repeat instructions. Repetition is useful when processing a list, asking for input until it is valid, counting items, adding values, or searching for the smallest or largest value.

This module covers updating variables, while and for loops, infinite loops, break and continue, counting, summing, and min/max search patterns. Examples use Python 3.`,
          objectives: [
            "Explain why programs use loops.",
            "Update variables safely inside a loop.",
            "Use a while loop for condition-controlled repetition.",
            "Recognize and prevent unintended infinite loops.",
            "Use break and continue to control a loop.",
            "Use for loops to process strings, lists, and other iterables.",
            "Use range() to repeat code a known number of times.",
            "Build counting, summing, and min/max search patterns."
          ],
          sections: [
            {
              heading: "3 & 4. What Is Iteration & Main Types of Loops",
              text: `Iteration means repeating a set of instructions. Each single pass through the loop body is called an iteration.

A loop avoids repetitive code: instead of writing print("Hello") three times, a loop executes the same statement with clean, concise syntax:
for _ in range(3):
    print("Hello")

Python provides two primary loop statements:
• The while loop: Repeats statements as long as an underlying condition remains True (indefinite iteration).
• The for loop: Iterates over each item in a collection or sequence, such as a list, string, or range (definite iteration).

Rule of thumb: Choose while when repetition depends on a dynamic condition or user input. Choose for when iterating over known collections or repeating a fixed number of times.`
            },
            {
              heading: "5 & 6. Updating Variables & Augmented Assignment",
              text: `An update changes a variable by referencing its current value (e.g., count = count + 1 increases count by 1).

Important: The variable must be initialized before its value can be read on the right-hand side of an assignment; otherwise, Python raises a NameError.

Augmented Assignment:
Python provides augmented assignment operators as a clean, idiomatic shorthand for updating variables in place:`,
              table: {
                headers: ["Operator", "Example", "Equivalent Form", "Description"],
                rows: [
                  ["+=", "count += 1", "count = count + 1", "Increment / Add to existing value"],
                  ["-=", "count -= 1", "count = count - 1", "Decrement / Subtract from existing value"],
                  ["*=", "total *= 2", "total = total * 2", "Multiply existing value by factor"],
                  ["/=", "total /= 2", "total = total / 2", "Divide existing value (produces float)"],
                  ["//=", "total //= 2", "total = total // 2", "Floor divide existing value"]
                ]
              }
            },
            {
              heading: "7 to 12. The while Loop & Condition Control",
              text: `A while loop evaluates its Boolean condition before each pass. If True, Python executes the indented body, then tests the condition again. The loop terminates as soon as the condition evaluates to False.

The 3 Essential Parts of a while Loop:
1. Initialization: Set starting variable state before entering the loop.
2. Condition: Test the expression that governs whether another pass should run.
3. Update: Modify the loop variable inside the body to move toward the stopping condition.

Counting Up and Down:
Counters can increment (count += 1) or decrement (countdown -= 1) toward a boundary.

Input-Controlled Loops & Sentinel Values:
A while loop can repeatedly prompt the user until a specific sentinel value is entered (e.g. entering 0 or 'quit'). The sentinel value signals termination and should not be processed as normal data.`
            },
            {
              heading: "13 to 17. Infinite Loops, break, and continue",
              text: `An infinite loop occurs when a loop condition never evaluates to False (typically caused by a missing or flawed update step).

• Intentional Infinite Loops (while True):
Often used in event listeners, menus, and servers. An intentional infinite loop requires a conditional break statement to ensure an exit path.

• The break Statement:
Immediately terminates the nearest enclosing for or while loop and jumps to the first statement following the loop.

• The continue Statement:
Immediately skips the remaining statements in the current iteration and jumps directly to the next iteration's condition or item.

• Caution in while Loops:
Ensure the loop counter is updated BEFORE continue, otherwise the loop will repeat the same state infinitely!`
            },
            {
              heading: "18 to 23. The for Loop & The range() Function",
              text: `A for loop iterates directly over items in an iterable (lists, tuples, strings, dictionaries, ranges) without requiring manual indexing or counter increments.

Looping Through Strings:
Because strings are character sequences, 'for letter in "Python":' visits each character in order.

The range() Function:
Generates an immutable sequence of integers. Remember that the stop value is always EXCLUDED:
• range(stop): Starts at 0, steps by 1, stops before 'stop' (e.g. range(5) yields 0, 1, 2, 3, 4).
• range(start, stop): Starts at 'start', stops before 'stop' (e.g. range(2, 6) yields 2, 3, 4, 5).
• range(start, stop, step): Increments by 'step' (e.g. range(0, 10, 2) yields 0, 2, 4, 6, 8; negative steps count down).

Throwaway Variable (_):
When the loop variable is not used inside the body, use an underscore '_' by convention (e.g., 'for _ in range(3):').`
            },
            {
              heading: "24 to 27. Loop Patterns: Counting, Accumulators, Averages & Searching",
              text: `• Counting Pattern: Tracks how many items satisfy a condition by initializing a counter to 0 and incrementing inside an if statement (e.g., if num % 2 == 0: count += 1).

• Accumulator Pattern: Maintains a running total. Initialize total = 0 (the additive identity) before the loop, then add each item during iteration (total += number).

• Computing Averages: Divide the accumulator sum by the item count. Always guard against empty collections with 'if len(scores) > 0:' to prevent ZeroDivisionError.

• Search Pattern: Iterates through items to find a target. Uses a Boolean flag (e.g., found = False) and stops early with 'break' once found.`
            },
            {
              heading: "28 to 34. Min/Max Search, enumerate(), Nested Loops & Loop else",
              text: `• Finding Minimum & Maximum Values:
Always initialize the current minimum and maximum using actual data from the collection (e.g., smallest = numbers[0]), NOT arbitrary values like 0. Initializing to 0 fails for all-negative or all-positive lists!

• Empty Collection Guard:
Check 'if numbers:' before indexing numbers[0] to prevent IndexError, or use Python's built-in min(numbers, default=None).

• enumerate(iterable, start=0):
Provides both the index and value simultaneously without manual counters (e.g., 'for idx, item in enumerate(fruits):').

• Nested Loops:
A loop inside another loop. The inner loop completes all its iterations for every single iteration of the outer loop (useful for grids, tables, and permutations).

• Loop else Clause:
A for or while loop can have an else block. The loop's else executes ONLY when the loop finishes normally without hitting a break statement (invaluable for search loops).`
            },
            {
              heading: "35 to 39. Common Mistakes & How to Avoid Them",
              text: `Common pitfalls and their corrections:`,
              table: {
                headers: ["Mistake", "Why It Fails", "Correction"],
                rows: [
                  ["Off-by-one with range()", "range(1, 5) produces 1, 2, 3, 4; stop value 5 is excluded", "Use range(1, 6) if 5 must be included"],
                  ["Forgetting while update", "Condition never changes to False, causing an infinite loop", "Ensure the loop variable updates inside every iteration"],
                  ["Updating in wrong order", "Placing update before print prints 1..N; updating after print prints 0..N-1", "Place print and update in the order that matches required output"],
                  ["continue skips update", "In while loops, continue jumping over count += 1 causes an infinite loop", "Increment counter before triggering continue in a branch"],
                  ["Indexing empty list for min/max", "numbers[0] raises IndexError if numbers is empty []", "Guard with 'if numbers:' or use min(numbers, default=None)"]
                ]
              }
            },
            {
              heading: "46. Key Takeaways & Review",
              text: "Essential concepts to remember:",
              bulletPoints: [
                "A loop repeats a block of code; while is condition-controlled and for is collection-driven.",
                "A while loop requires three distinct parts: initialization, condition, and update.",
                "Unchanged conditions create unintended infinite loops; while True requires break.",
                "break exits the nearest enclosing loop; continue skips directly to the next pass.",
                "range(start, stop, step) produces integers and excludes the stop boundary.",
                "Counters track item frequencies; accumulators compute running totals.",
                "Initialize min/max algorithms using the first data element, never hardcoded zeros.",
                "enumerate() cleanly yields both index position and value.",
                "The loop else clause runs only when the loop completes without executing break."
              ]
            }
          ],
          codeExamples: [
            {
              title: "3, 7, 8, 9 & 10. while Loops: Counting Up & Down",
              code: `count = 1
while count <= 4:
    print("Number:", count)
    count += 1

# Counting down
countdown = 3
while countdown > 0:
    print(countdown)
    countdown -= 1
print("Go!")`,
              explanation: "Illustrates initialization, condition, and counter updates for ascending and descending loops."
            },
            {
              title: "11, 12 & 14. Sentinel-Controlled Loops & Intentional while True",
              code: `total = 0
value = int(input("Enter a number (0 to finish): "))
while value != 0:
    total += value
    value = int(input("Enter a number (0 to finish): "))
print("Total sum:", total)

# 2. Intentional infinite loop with break exit
while True:
    command = input("Enter command (quit to stop): ")
    if command == "quit":
        break
    print("Executing:", command)
print("Finished")`,
              explanation: "Shows how sentinel values and while True with break handle variable-length user input streams."
            },
            {
              title: "15, 16 & 17. Controlling Loops with break and continue",
              code: `for number in range(1, 10):
    if number == 4:
        break
    print(number) # Prints 1, 2, 3

# continue in a for loop
for number in range(1, 6):
    if number == 3:
        continue
    print(number) # Prints 1, 2, 4, 5

# Safe continue in a while loop (update before continue!)
num = 0
while num < 5:
    num += 1
    if num == 3:
        continue
    print(num)`,
              explanation: "Demonstrates breaking early, skipping iterations with continue, and avoiding while-loop update traps."
            },
            {
              title: "18 to 23. for Loops, Sequences & range() Variations",
              code: `colors = ["red", "green", "blue"]
for color in colors:
    print(color)

# Iterating over characters in a string
for char in "Python":
    print(char)

# range(stop), range(start, stop), range(start, stop, step)
print("range(5):", list(range(5)))             # [0, 1, 2, 3, 4]
print("range(2, 6):", list(range(2, 6)))       # [2, 3, 4, 5]
print("range(0, 10, 2):", list(range(0, 10, 2))) # [0, 2, 4, 6, 8]
print("Counting down:", list(range(5, 0, -1))) # [5, 4, 3, 2, 1]

# Throwaway variable (_)
for _ in range(3):
    print("Practice makes progress")`,
              explanation: "Shows how for loops process collections directly and details range() arguments and the throwaway variable convention."
            },
            {
              title: "24 to 27. Counters, Accumulators, Averages & Search Flags",
              code: `numbers = [4, 7, 10, 13, 16]

# 1. Counter Pattern
even_count = 0
for n in numbers:
    if n % 2 == 0:
        even_count += 1
print("Even numbers count:", even_count)

# 2. Accumulator Pattern & Average
scores = [80, 90, 100]
total = 0
for s in scores:
    total += s

if len(scores) > 0:
    avg = total / len(scores)
    print(f"Total: {total}, Average: {avg}")

# 3. Search Pattern with Flag
names = ["Asha", "Ben", "Chloe"]
target = "Ben"
found = False
for name in names:
    if name == target:
        found = True
        break
print("Target Found:" if found else "Target Not Found")`,
              explanation: "Demonstrates the 4 classic algorithmic loop patterns: counting, summing, averaging, and searching with flags."
            },
            {
              title: "28 to 34. Robust Min/Max, enumerate(), Nested Loops & Loop else",
              code: `data = [-8, -3, -12, -5]
if data:
    smallest = data[0]
    largest = data[0]
    for val in data[1:]:
        if val < smallest: smallest = val
        if val > largest: largest = val
    print(f"Smallest: {smallest}, Largest: {largest}")

# enumerate() for index and item
fruits = ["apple", "banana", "mango"]
for idx, fruit in enumerate(fruits, start=1):
    print(f"{idx}. {fruit}")

# Nested loops (grid coordinates)
for r in range(1, 3):
    for c in range(1, 4):
        print(f"({r}, {c})", end=" ")
    print()

# Loop else clause (runs only if NO break occurred)
test_numbers = [2, 4, 6]
for num in test_numbers:
    if num % 2 != 0:
        print("Odd found!")
        break
else:
    print("No odd numbers found (normal completion).")`,
              explanation: "Shows robust min/max logic, clean enumeration, matrix grid coordinates, and the Python-specific loop else clause."
            }
          ],
          bestPractices: [
            "Initialize counters and accumulators before entering loop bodies.",
            "Prefer for loops over while loops when iterating over sequences, ranges, or collections.",
            "Always initialize min/max tracking variables from the dataset itself (e.g. data[0]), not hardcoded zeros.",
            "Guard divisions and element lookups against empty collections using 'if items:'.",
            "In while loops, ensure the counter increments before any continue statement.",
            "Use enumerate() instead of range(len(items)) when both the index and value are needed.",
            "Use the loop else clause for search routines to avoid redundant flag variables."
          ],
          commonMistakes: [
            "Off-by-one errors from forgetting that range() excludes the stop value.",
            "Omitting the counter increment in a while loop, resulting in a frozen infinite loop.",
            "Placing the counter update after a continue statement in a while loop, which skips the update forever.",
            "Initializing min or max to 0, which yields incorrect results for all-negative or all-positive lists.",
            "Accessing data[0] without verifying that the collection is not empty, causing an IndexError."
          ],
          practiceExercise: {
            title: "42 & 44. Coding Practice & Worked Solutions (5 Programs)",
            problem: `Complete the following 5 hands-on Python loop programs:

Program 1: Count to N
Ask the user for a positive integer and print every number from 1 through that number.

Program 2: Sum from 1 to N
Ask for a positive integer and calculate the sum from 1 through N using an accumulator loop.

Program 3: Count Vowels
Count how many vowels (a, e, i, o, u) appear in a word. Treat uppercase and lowercase letters the same.

Program 4: Find the Minimum and Maximum
Given a list of numbers, use loops to find the smallest and largest values. Handle an empty list gracefully.

Program 5: Search a List
Ask the user for a target and report whether it appears in a list. Stop searching once the target is found.`,
            solutionCode: `n = int(input("Enter a positive integer: "))
for number in range(1, n + 1):
    print(number)

# Program 2: Sum from 1 to N
n = int(input("Enter a positive integer: "))
total = 0
for number in range(1, n + 1):
    total += number
print("Sum:", total)

# Program 3: Count Vowels
word = input("Enter a word: ")
vowel_count = 0
for letter in word.lower():
    if letter in "aeiou":
        vowel_count += 1
print("Vowels:", vowel_count)

# Program 4: Find the Minimum and Maximum
numbers = [8, -3, 12, 5]
if numbers:
    smallest = numbers[0]
    largest = numbers[0]
    for number in numbers[1:]:
        if number < smallest:
            smallest = number
        if number > largest:
            largest = number
    print("Smallest:", smallest)
    print("Largest:", largest)
else:
    print("There are no values to search")

# Program 5: Search a List
names = ["Asha", "Ben", "Chloe"]
target = input("Enter a name to find: ")
found = False
for name in names:
    if name == target:
        found = True
        break
if found:
    print("Name found")
else:
    print("Name not found")`
          },
          keyTakeaways: [
            "A loop repeats a block of code; while is condition-controlled and for is collection-driven.",
            "A while loop needs a plan for initialization, condition, and update.",
            "An unchanged condition can create an unintended infinite loop; while True requires a clear break.",
            "break exits the nearest loop; continue skips to its next iteration.",
            "range() excludes its stop value: range(1, 5) produces 1, 2, 3, and 4.",
            "Counters track item counts; accumulators build running totals.",
            "Min/max searches should initialize from actual data and account for empty collections.",
            "enumerate() provides both index and item simultaneously.",
            "A loop else clause runs only when the loop finishes without executing break."
          ],
          references: [
            { title: "Python Documentation: More Control Flow Tools (Loops & range)", url: "https://docs.python.org/3/tutorial/controlflow.html" },
            { title: "Python Language Reference: The for statement", url: "https://docs.python.org/3/reference/compound_stmts.html#the-for-statement" }
          ],
          mcqs: [
            {
              id: 1,
              question: "What is the primary conceptual difference between a while loop and a for loop?",
              options: [
                "while loops are condition-controlled (indefinite); for loops are sequence-controlled (definite)",
                "while loops can only iterate 100 times maximum",
                "for loops can only be used with numbers",
                "while loops do not support the break statement"
              ],
              correctAnswer: 0,
              explanation: "A while loop repeats until a boolean condition becomes False. A for loop iterates through a predetermined collection or iterable."
            },
            {
              id: 2,
              question: "What is the effect of the 'break' statement when executed inside a nested loop?",
              options: [
                "It terminates all enclosing loops in the entire function",
                "It terminates only the innermost loop in which it is placed",
                "It skips to the next iteration of the outer loop",
                "It raises a StopIteration exception"
              ],
              correctAnswer: 1,
              explanation: "break terminates only the immediate, innermost loop enclosing it. Outer loops continue execution normally."
            },
            {
              id: 3,
              question: "What integers are generated by the expression range(2, 11, 3)?",
              options: [
                "[2, 3, 4, 5, 6, 7, 8, 9, 10, 11]",
                "[2, 5, 8]",
                "[3, 6, 9]",
                "[2, 5, 8, 11]"
              ],
              correctAnswer: 1,
              explanation: "range(start, stop, step) starts at 2, steps by 3, and stops BEFORE 11: 2, 2+3=5, 5+3=8. (Next would be 11, which reaches stop)."
            },
            {
              id: 4,
              question: "When does the 'else' block attached to a for or while loop execute?",
              options: [
                "Whenever the loop terminates via a break statement",
                "When the loop completes its iterations naturally WITHOUT encountering a break statement",
                "Before the loop begins its first pass",
                "Only when the loop encounters an exception"
              ],
              correctAnswer: 1,
              explanation: "A loop's else clause runs only when the loop terminates normally (exhausting the sequence or condition becoming False), not when broken by break."
            },
            {
              id: 5,
              question: "What is the recommended idiom for initializing a min-value search accumulator across a sequence?",
              options: [
                "Set smallest = 0",
                "Set smallest = 999999",
                "Set smallest = None or initialize from the first actual data element (smallest = data[0])",
                "Set smallest = -1"
              ],
              correctAnswer: 2,
              explanation: "Initializing to an arbitrary constant like 0 fails if all values in the dataset are negative. Using None or data[0] guarantees correctness."
            }
          ]
        }
      },
      {
        id: "py-mod-6",
        title: "Module 06 — Functions & Modular Code",
        description: "Built-in functions, type conversion, math & random modules, defining custom functions (def), parameters, arguments, fruitful vs void functions, and scope.",
        completed: true,
        readingMaterial: {
          introduction: `Functions help programmers organize instructions into named, reusable units. As a program grows, placing every instruction in one long sequence makes it difficult to understand and maintain. Functions provide a way to divide a program into smaller tasks. A function can accept information, perform work, and return a result to the part of the program that called it.

Python also provides built-in functions and an extensive standard library. Built-ins handle everyday tasks such as displaying output, counting items, and finding totals. Modules group related tools; for example, math provides mathematical functions and constants, while random provides pseudo-random choices for simulations and games.`,
          objectives: [
            "Use common built-in functions such as len(), sum(), min(), and max().",
            "Convert values with int(), float(), str(), and bool().",
            "Import and use tools from the math and random modules.",
            "Define and call custom functions using def.",
            "Distinguish parameters from arguments and use positional, keyword, and default arguments.",
            "Explain the difference between returning a value and printing it.",
            "Recognize local and global variables and use scope appropriately."
          ],
          sections: [
            {
              heading: "3. Built-in Functions and Type Conversion",
              text: `Python's built-in functions are available directly without importing a module. For example, len() counts items in a collection, sum() adds numeric values, and min() and max() find the smallest and largest values.

Input read with input() is always returned as text (str). You must convert it before using it in numeric calculations:
• int(): Creates an integer from a numeric string or truncates a float toward zero.
• float(): Creates a floating-point number from an integer or string.
• str(): Creates a string representation of any object.
• bool(): Converts a value to Boolean True or False based on truthiness.

Important nuances:
1. Converting a floating-point value to an integer truncates toward zero rather than rounding (e.g., int(6.9) produces 6).
2. Converting text that is not a valid number (such as int("six")) raises a ValueError.`,
              table: {
                headers: ["Function", "Input Type", "Example", "Result / Output", "Notes"],
                rows: [
                  ["len()", "Sequence / Collection", "len([72, 85, 91])", "3", "Returns number of elements"],
                  ["sum()", "Iterable of numbers", "sum([72, 85, 91])", "248", "Additive total"],
                  ["min()", "Iterable or arguments", "min(72, 85, 91)", "72", "Smallest value"],
                  ["max()", "Iterable or arguments", "max(72, 85, 91)", "91", "Largest value"],
                  ["int()", "String or float", "int(6.9) / int(\"42\")", "6 / 42", "Truncates toward zero"],
                  ["float()", "String or int", "float(\"3.14\")", "3.14", "Parses decimal value"],
                  ["str()", "Any type", "str(100)", "\"100\"", "String representation"],
                  ["bool()", "Any type", "bool(0) / bool(\"hi\")", "False / True", "0 and '' are False"]
                ]
              }
            },
            {
              heading: "4. Using the math and random Modules",
              text: `A module is a file containing reusable Python code. The import statement makes its functions, classes, and constants available to a program.

The math Module:
Provides standard mathematical tools such as square roots, rounding operations, and mathematical constants:
• math.pi: The mathematical constant π (~3.14159)
• math.sqrt(x): Computes the square root of x (returns a float)
• math.ceil(x): Rounds upward to the nearest integer (math.ceil(4.2) -> 5)
• math.floor(x): Rounds downward to the nearest integer (math.floor(4.8) -> 4)

The random Module:
Generates pseudo-random results, which are useful for simulations, games, randomized algorithms, and demonstrations:
• random.randint(a, b): Returns a pseudo-random integer N such that a <= N <= b (both endpoints inclusive).
• random.choice(sequence): Picks a random element from a non-empty sequence.
• random.random(): Returns a random float in the range [0.0, 1.0).

Security Warning:
The standard random module produces deterministic pseudo-random numbers and is NOT cryptographically secure. For security-sensitive needs (such as generating passwords, authentication tokens, or encryption keys), use Python's built-in secrets module.`
            },
            {
              heading: "5. Defining and Calling Custom Functions",
              text: `A custom function is defined with the def keyword. Defining a function and calling it are two separate, distinct actions:
1. Definition: Specifies the function name, parameters in parentheses, and the indented body of statements. Python records the function definition but does not run the body yet.
2. Call / Invocation: Uses the function name followed by parentheses and arguments. Python jumps to the function body, executes it, and then returns control to the calling site.

Parameters vs Arguments:
• Parameter: A variable listed in the function definition header that acts as a placeholder for incoming data (e.g. 'name' in def greet(name):).
• Argument: The actual concrete value supplied to the function when it is called (e.g. "Asha" in greet("Asha")).`
            },
            {
              heading: "6. Arguments: Positional, Keyword, and Default Values",
              text: `Python provides flexible ways to pass arguments to functions:

1. Positional Arguments:
Matched to parameters strictly by position/order from left to right.
add(4, 7) assigns 4 to 'first' and 7 to 'second'.

2. Keyword Arguments:
You explicitly name the parameter in the call (e.g., describe_pet(animal="dog", name="Rex")).
Keyword arguments can be provided in any order and greatly improve code readability when functions take multiple configuration options.

3. Default Arguments:
Allow parameters to have fallback default values if the caller omits them (e.g. def describe_pet(animal, name="Milo"):).
CRITICAL RULE: In a function definition, all required parameters must appear before parameters with default values. Defining def func(a=1, b): causes a SyntaxError!`
            },
            {
              heading: "7. Fruitful vs Void Functions (return vs print)",
              text: `Understanding the difference between fruitful and void functions is one of the most critical concepts in modular programming:

Fruitful Functions:
A fruitful function produces and sends back a useful value using the return statement. The caller can capture this value in a variable, pass it into another function, or use it in an expression.
When Python executes a return statement, the function immediately terminates and hands the value back.

Void Functions:
A void function performs an action (such as printing output to the console, writing to a file, or modifying an external state) without returning a useful value.
In Python, if a function finishes without encountering an explicit return statement, it automatically returns None.

Common Beginner Trap:
print() displays information visually on the screen for humans to read. return sends data back inside the program for code to use. They are NOT interchangeable!`
            },
            {
              heading: "8. Variable Scope & Lifetime (Local vs Global)",
              text: `Scope defines the region of a program where a variable name is recognized and accessible:

1. Local Scope:
Variables defined inside a function (including its parameters) belong to the local scope of that function. They come into existence when the function is called and are destroyed when the function finishes. They cannot be accessed from outside the function.

2. Global Scope:
Variables declared at the top level of a script/module outside of any function belong to the global scope. They can be read from anywhere within the module.

3. The global Keyword:
If a function needs to reassign or modify a global variable, it must explicitly declare it with 'global var_name'.
Best Practice: Minimize the use of global variables. Relying on global state makes code brittle, hard to test, and difficult to debug. Prefer passing needed data via parameters and returning results.`
            },
            {
              heading: "9. Good Practices for Modular Code",
              text: `Follow these industry-standard principles to write clean, reusable, professional Python functions:`,
              bulletPoints: [
                "Descriptive Names: Use clear snake_case verbs and verb phrases that describe the action (e.g., calculate_tax, is_valid_email, format_user_name).",
                "Single Responsibility Principle (SRP): Each function should do one thing well. If a function is calculating and printing and saving to disk, break it down.",
                "Pure & Predictable: Where possible, write fruitful functions that rely only on their parameters and do not produce unexpected side effects.",
                "Never Shadow Built-ins: Do not name variables or parameters after Python built-ins like sum, min, max, list, dict, or type.",
                "Validate Inputs & Handle Empty Collections: Guard against empty lists before calling min() or max() to prevent ValueError.",
                "Namespace Imports: Prefer 'import math' and calling 'math.sqrt()' over 'from math import *', which pollutes the namespace.",
                "Security Awareness: Use the secrets module instead of random for cryptographic keys, tokens, and password generation."
              ]
            },
            {
              heading: "10 & 11. Worked Example & Module Conclusion",
              text: `Putting it all together: Building a clean, modular temperature conversion pipeline. Functions allow complex logic to be defined once and reused across different inputs and data streams cleanly without duplicate code.`
            }
          ],
          codeExamples: [
            {
              title: "3. Built-in Functions & Type Conversion in Action",
              code: `scores = [72, 85, 91]

print("Number of scores:", len(scores))
print("Total:", sum(scores))
print("Lowest:", min(scores))
print("Highest:", max(scores))

# Type conversion
age_text = "21"
age = int(age_text)
print("Next year you will be:", age + 1)

# Float truncation vs rounding
print("int(6.9) truncates to:", int(6.9))   # 6
print("round(6.9) rounds to:", round(6.9)) # 7`,
              explanation: "Demonstrates core built-ins len(), sum(), min(), max(), type casting with int(), and truncation vs rounding."
            },
            {
              title: "4. The math and random Modules",
              code: `import math
import random

# Math operations and constants
radius = 3
area = math.pi * (radius ** 2)
print("Square root of 49:", math.sqrt(49))
print("Circle area:", round(area, 2))
print("Round up 4.2:", math.ceil(4.2))
print("Round down 4.8:", math.floor(4.8))

# Random simulations
roll = random.randint(1, 6) # Includes 1 and 6
colors = ["red", "green", "blue"]
chosen_color = random.choice(colors)

print("Dice roll:", roll)
print("Chosen color:", chosen_color)`,
              explanation: "Illustrates importing math and random standard libraries, calling namespaced functions, and utilizing constants."
            },
            {
              title: "5 & 6. Custom Functions, Parameters & Defaults",
              code: `def show_welcome():
    print("Welcome to the program")

show_welcome()

# Parameters and arguments
def greet(name):
    print(f"Hello, {name}!")

greet("Asha")

# Multiple parameters with return
def add(first, second):
    return first + second

answer = add(4, 7)
print("4 + 7 =", answer)

# Default arguments and keyword arguments
def describe_pet(animal, name="Milo"):
    print(f"{name} is a {animal}")

describe_pet("cat")                       # Uses default name Milo
describe_pet(animal="dog", name="Rex")   # Keyword arguments`,
              explanation: "Covers def syntax, positional parameters, keyword arguments, and optional parameters with default values."
            },
            {
              title: "7. Fruitful vs Void Functions (return vs print)",
              code: `def rectangle_area(width, height):
    return width * height

area = rectangle_area(5, 3)
print("Calculated Area:", area)

# Void function: performs an action, returns None
def show_banner():
    print("Welcome to Python Modular Programming")

result = show_banner()
print("Return value of show_banner():", result) # Prints None`,
              explanation: "Clearly highlights how fruitful functions return values for expressions while void functions return None."
            },
            {
              title: "8. Variable Scope (Local vs Global)",
              code: `def double(number):
    result = number * 2
    return result

print("Double 4:", double(4))
# Attempting print(result) here would raise NameError!

# Global scope: reading global variables
tax_rate = 0.1

def calculate_tax(price):
    # Reads global tax_rate
    return price * tax_rate

print("Tax on $100:", calculate_tax(100))`,
              explanation: "Shows how local variables are encapsulated within function execution frames while global variables are accessible throughout."
            },
            {
              title: "10. Worked Example: Modular Temperature Converter",
              code: `def celsius_to_fahrenheit(celsius):
    """Converts a temperature from Celsius to Fahrenheit."""
    return celsius * 9 / 5 + 32

readings = [0, 20, 30]

for reading in readings:
    converted = celsius_to_fahrenheit(reading)
    print(f"{reading} degrees C = {converted:.1f} degrees F")`,
              explanation: "Clean demonstration of modular code where formula logic is defined once and called repeatedly inside a loop."
            }
          ],
          bestPractices: [
            "Give functions descriptive snake_case names that start with a verb (e.g. calculate_total, get_user_input).",
            "Keep each function focused on a single responsibility (Single Responsibility Principle).",
            "Always place required parameters before parameters with default values in function definitions.",
            "Use 'return' when the calling code needs the computed value; reserve 'print()' for user displays.",
            "Avoid mutating or relying on global variables; pass data through parameters and return results.",
            "Document functions using clear docstrings (\"\"\"...\"\"\") right after the def line.",
            "Import whole modules (e.g. 'import math') to keep function calls explicit and namespace-safe."
          ],
          commonMistakes: [
            "Confusing 'print()' with 'return': printing inside a function leaves the return value as None.",
            "Placing default parameters before required parameters (e.g., def f(x=10, y): causes SyntaxError).",
            "Attempting to access a local function variable outside the function, triggering a NameError.",
            "Shadowing Python built-in names by creating variables named 'sum', 'min', 'max', 'list', or 'str'.",
            "Assuming random.randint(a, b) excludes b: unlike range(), randint includes both endpoints.",
            "Using float-to-int conversion expecting rounding: int(4.9) truncates to 4; use round() to round."
          ],
          practiceExercise: {
            title: "Hands-On Coding Practice: Functions & Modular Utility Suite (4 Programs)",
            problem: `Write and test the following 4 modular Python programs using custom functions:

Program 1: Gross Pay Calculator with Overtime
Define a function 'computepay(hours, rate)' that calculates total pay. Any hours worked above 40 are paid at 1.5 times the normal rate.

Program 2: Circle Geometry Helper
Define a function 'circle_properties(radius)' that imports math and returns both the circumference (2 * π * r) and area (π * r²) rounded to 2 decimal places.

Program 3: Dice Rolling Simulator
Define a function 'roll_dice(num_dice=2, sides=6)' that imports random and returns a list of rolled dice numbers and their total sum.

Program 4: Temperature & Grade Classifier
Define a function 'classify_temperature(temp_c)' that converts Celsius to Fahrenheit and returns a descriptive status string ("Freezing", "Moderate", "Hot").`,
            solutionCode: `import math
import random

# Program 1: Gross Pay Calculator
def computepay(hours, rate):
    if hours > 40:
        regular_pay = 40 * rate
        overtime_pay = (hours - 40) * (rate * 1.5)
        return regular_pay + overtime_pay
    return hours * rate

print("Pay for 45 hrs @ $10/hr:", computepay(45, 10))

# Program 2: Circle Geometry Helper
def circle_properties(radius):
    circumference = 2 * math.pi * radius
    area = math.pi * (radius ** 2)
    return round(circumference, 2), round(area, 2)

circ, area = circle_properties(5)
print(f"Radius 5 -> Circumference: {circ}, Area: {area}")

# Program 3: Dice Rolling Simulator
def roll_dice(num_dice=2, sides=6):
    rolls = [random.randint(1, sides) for _ in range(num_dice)]
    return rolls, sum(rolls)

rolls, total = roll_dice()
print(f"Rolled {rolls} with Total = {total}")

# Program 4: Temperature Classifier
def classify_temperature(temp_c):
    temp_f = temp_c * 9 / 5 + 32
    if temp_f <= 32:
        status = "Freezing"
    elif temp_f >= 85:
        status = "Hot"
    else:
        status = "Moderate"
    return f"{temp_c}°C ({temp_f:.1f}°F) is {status}"

print(classify_temperature(0))
print(classify_temperature(20))
print(classify_temperature(35))`
          },
          keyTakeaways: [
            "Functions organize code into named, reusable blocks, breaking large programs into manageable units.",
            "Python built-ins (len, sum, min, max, int, float, str, bool) provide foundational everyday tools.",
            "The math and random modules offer standard mathematical functions and pseudo-random generators.",
            "Functions are defined using 'def' with parameters, and called using arguments in parentheses.",
            "Positional arguments match by order; keyword arguments match by parameter name; defaults make arguments optional.",
            "Fruitful functions return values with 'return'; void functions perform actions and return None.",
            "Local variables exist only during function execution; avoid modifying global state directly."
          ],
          references: [
            { title: "Python Documentation: Defining Functions", url: "https://docs.python.org/3/tutorial/controlflow.html#defining-functions" },
            { title: "Python Documentation: Standard Library Modules (math & random)", url: "https://docs.python.org/3/library/" }
          ],
          mcqs: [
            {
              id: 1,
              question: "What is the distinction between a 'fruitful' function and a 'void' function in Python?",
              options: [
                "Fruitful functions use def; void functions use lambda",
                "Fruitful functions return a meaningful value using return; void functions execute actions and return None",
                "Fruitful functions accept parameters; void functions accept zero parameters",
                "Void functions cannot contain print statements"
              ],
              correctAnswer: 1,
              explanation: "Fruitful functions calculate and return a result back to the caller with return. Void functions execute side-effects and implicitly return None."
            },
            {
              id: 2,
              question: "What value is returned by a Python function that reaches the end of its body without executing a return statement?",
              options: [
                "0",
                "False",
                "None",
                "An empty string (\"\")"
              ],
              correctAnswer: 2,
              explanation: "If execution flows off the end of a function without encountering return, Python implicitly returns the special singleton object None."
            },
            {
              id: 3,
              question: "Why should mutable default arguments (e.g. def append_to(item, target_list=[])) NEVER be used in Python?",
              options: [
                "They cause an immediate SyntaxError",
                "The default list is created only once when the function is defined, sharing the same list across all calls",
                "They slow down function calls by converting lists to tuples",
                "Python does not permit default arguments on functions"
              ],
              correctAnswer: 1,
              explanation: "Default parameter values are evaluated once at module load time. If mutable, modifications persist across subsequent calls to that function."
            },
            {
              id: 4,
              question: "What scope rule governs a variable assigned inside a function body without the 'global' keyword?",
              options: [
                "It becomes accessible throughout the entire module",
                "It has local scope: exists only inside that function call and is destroyed on exit",
                "It is saved permanently to secondary storage",
                "It becomes a class attribute"
              ],
              correctAnswer: 1,
              explanation: "Variables assigned inside a function belong to the local namespace and are inaccessible outside the function."
            },
            {
              id: 5,
              question: "Which built-in function returns both the current index and the element when traversing a sequence?",
              options: [
                "range()",
                "zip()",
                "enumerate()",
                "map()"
              ],
              correctAnswer: 2,
              explanation: "enumerate(iterable) yields pairs of (index, item) during loop iteration, eliminating manual counter variables."
            }
          ]
        }
      },
      {
        id: "py-mod-7",
        title: "Module 07 — Data Structures: Lists, Dictionaries & Tuples",
        description: "Sequences, mutability, lists, dictionaries as key-value mappings & counters, tuples immutability, DSU sorting pattern, and list comprehensions.",
        completed: true,
        readingMaterial: {
          introduction: `Python data structures store and organize related values. Lists and tuples are ordered sequences accessed by position, while dictionaries map unique keys to values, and sets store unique, unordered elements.

Programs often need to work with groups of related information: a set of quiz scores, a record of a person's details, a collection of product names, or unique user permissions. A data structure stores that information in a useful form. The choice of structure affects how values are accessed, updated, searched, and processed.

Python's core collection types include lists, dictionaries, tuples, and sets. Lists are ordered and mutable. Dictionaries store key-value mappings and allow values to be retrieved by key in O(1) average time. Tuples are ordered sequences that cannot be structurally changed after creation. Sets store unique elements with ultra-fast mathematical set operations. This comprehensive module covers sequence operations, mutability, multi-dimensional lists, shallow vs deep copying, dictionary counters, dictionary comprehensions, modern merge operators, tuple immutability, namedtuples, sets & set theory, the collections module (Counter, defaultdict, deque), the Decorate-Sort-Undecorate (DSU) pattern, Big-O computational complexity, and list comprehensions.`,
          objectives: [
            "Describe sequences, indexing, slicing, mutability, and Big-O computational complexity.",
            "Create, access, update, shallow copy, deep copy, and iterate through 1D and 2D lists.",
            "Use dictionaries to map keys to values, build frequency counters, and perform dictionary comprehensions.",
            "Master Python 3.9+ dictionary merge (|) and update (|=) operations along with setdefault().",
            "Leverage collections module power tools: Counter, defaultdict, and deque.",
            "Utilize sets for fast uniqueness checks, mathematical operations, and order-preserving deduplication.",
            "Explain tuple immutability, understand the mutable-in-immutable paradox, and apply namedtuples.",
            "Apply the Decorate-Sort-Undecorate (DSU) sorting pattern with stability tie-breakers.",
            "Write concise, readable list and dictionary comprehensions with conditional filtering."
          ],
          sections: [
            {
              heading: "3. Sequences and Collection Types Comparison",
              text: `A sequence is an ordered collection of items. Lists and tuples are sequences, as are strings. Sequence items have positions called indexes, and many sequence operations work consistently across these types:`,
              table: {
                headers: ["Structure", "Ordered?", "Mutable?", "Duplicates?", "Lookup Time", "Syntax Example"],
                rows: [
                  ["List", "Yes", "Yes", "Yes", "O(N) by value, O(1) by index", "[1, 2, 3]"],
                  ["Tuple", "Yes", "No", "Yes", "O(N) by value, O(1) by index", "(1, 2, 3)"],
                  ["Dictionary", "Insertion order (3.7+)", "Yes", "Keys: No, Values: Yes", "O(1) average by key", "{\"key\": \"val\"}"],
                  ["Set", "No", "Yes", "No (Unique only)", "O(1) average membership", "{1, 2, 3}"]
                ]
              }
            },
            {
              heading: "4 & 5. Indexing, Slicing & Mutability Principles",
              text: `Sequence indexes start at zero (0). Negative indexes count backward from the end (-1 is the last item). A slice selects a portion of a sequence with [start:stop:step]; its stop index is always excluded.

colors = ["red", "green", "blue", "gold"]
colors[0]     # "red"
colors[-1]    # "gold"
colors[1:3]   # ["green", "blue"]
colors[::-1]  # Reverses sequence: ["gold", "blue", "green", "red"]

Slice Assignments:
Because lists are mutable, you can replace or delete an entire contiguous slice of elements at once:
nums = [10, 20, 30, 40, 50]
nums[1:4] = [99, 100]  # nums becomes [10, 99, 100, 50]
del nums[1:3]          # nums becomes [10, 50]

Mutability:
• Mutable objects can be changed in-place after creation (lists, dictionaries, sets). Items can be added, updated, or removed without changing the object's identity in memory.
• Immutable objects cannot have their stored structure changed after creation (tuples, strings, integers, floats, booleans).
Understanding mutability helps prevent accidental side-effects when multiple variables refer to the same object.`
            },
            {
              heading: "6 to 8. Creating, Accessing, Updating & List Operations",
              text: `A list is written with square brackets [] and comma-separated items. Lists can contain values of the same type or mixed types.

Updating Lists:
Because lists are mutable, items can be replaced, added, or removed:
• items[0] = "pencil": Replaces an existing element in-place (O(1)).
• .append(item): Adds one item to the end of the list (O(1) amortized).
• .extend(iterable): Appends all items from another collection to the end (O(K)).
• .insert(index, item): Inserts an item at a specific position (O(N) due to memory shifts).
• .remove(val): Removes the first occurrence of a matching value (O(N)).
• .pop(index): Removes and returns the item at index (O(1) for end, O(N) for beginning).
• .clear(): Removes all elements from the list in-place.

List Operations:
Lists support concatenation (+), repetition (*), membership checks (in, not in), and built-in aggregate functions:
• Concatenation: [2, 4, 6] + [8] -> [2, 4, 6, 8]
• Repetition: [2, 4] * 2 -> [2, 4, 2, 4]
• Membership: 4 in [2, 4, 6] -> True (O(N) linear search)
• Built-ins: len(), sum(), min(), max()`
            },
            {
              heading: "9 & 10. Iterating, Aliasing & Shallow vs Deep Copying",
              text: `Iterating Through Lists:
A for loop processes each list item in order. When both the index and value are required, use enumerate():
fruits = ["apple", "banana", "mango"]
for index, fruit in enumerate(fruits, start=1):
    print(index, fruit)

Aliasing Trap:
Assigning a list to another variable (second = first) does NOT copy the list. Both names point to the exact same list in memory (aliasing). A modification through either name affects both!

Shallow Copy vs Deep Copy:
• Shallow Copy (first.copy() or first[:]): Creates a new outer list. However, if the list contains nested mutable objects (e.g. lists of lists), the inner objects are still shared references!
• Deep Copy (copy.deepcopy(nested_list)): Recursively duplicates all nested objects, creating a completely independent copy at all levels.`
            },
            {
              heading: "11. Multi-Dimensional Lists (Matrices & Grids)",
              text: `A multi-dimensional list is a list containing other lists as its elements. It is commonly used for matrices, 2D coordinates, board games, and pixel buffers.

Creating a 2D Grid:
# Correct approach using list comprehension:
grid = [[0 for _ in range(3)] for _ in range(3)]

# SEVERE PITFALL: Do NOT write grid = [[0] * 3] * 3!
This creates 3 references to the EXACT SAME row list. Modifying grid[0][0] = 1 would change all rows simultaneously!

Traversing & Transposing Matrices:
Access elements using double indexing: matrix[row][col].
Matrix transposition swaps rows and columns:
transposed = [[row[i] for row in matrix] for i in range(len(matrix[0]))]`
            },
            {
              heading: "12 to 14. Dictionaries as Key-Value Mappings",
              text: `A dictionary stores key-value pairs in curly braces {}. Each key is unique within the dictionary and must be hashable (immutable, such as strings, numbers, or tuples of primitives). Lists cannot be keys.

Adding, Updating & Deleting:
• Assignment (dict[k] = v) adds a new key or overwrites the existing value.
• del dict[k] or dict.pop(k) removes a key and returns its value.

Safe Lookup with .get() & .setdefault():
Accessing a missing key with square brackets (dict["missing"]) raises a KeyError.
• dict.get(key, default): Safely returns None or a fallback value without modifying the dictionary.
• dict.setdefault(key, default): Returns the value if present; if not, inserts key with default value and returns it (ideal for grouping into lists: dict.setdefault(k, []).append(v)).

Iterating Through Dictionaries:
• 'for k in d:' visits keys.
• 'for k, v in d.items():' visits key-value pairs simultaneously.
• 'd.keys()' and 'd.values()' yield views of keys and values.`
            },
            {
              heading: "15 & 16. Frequency Counters & collections.Counter",
              text: `Counting Pattern with Dictionaries:
A dictionary can track how often items occur in a dataset. Using .get(item, 0) provides a starting count of zero before incrementing:
colors = ["red", "blue", "red", "green", "blue", "red"]
counts = {}
for color in colors:
    counts[color] = counts.get(color, 0) + 1
# {"red": 3, "blue": 2, "green": 1}

The collections.Counter Class:
Python provides a specialized dictionary in the standard library for tallying hashable items directly:
from collections import Counter
counts = Counter(words)
print(counts.most_common(1)) # [("sun", 3)]
Counter supports arithmetic operations like union, intersection, and subtraction.`
            },
            {
              heading: "17. Modern Dictionary Operations & Dict Comprehensions",
              text: `Python 3.9+ Union & Merge Operators:
• Merge Operator (|): Combines two dictionaries into a new one:
merged = dict_a | dict_b  # Values in dict_b overwrite duplicate keys in dict_a.
• Update Operator (|=): Modifies a dictionary in place: dict_a |= dict_b.

Dictionary Comprehensions:
Construct new dictionaries dynamically with concise syntax:
squares = {x: x ** 2 for x in range(1, 6)}
# Inverting a dictionary (swapping keys and values):
inverted = {v: k for k, v in original.items()}`
            },
            {
              heading: "18 & 19. Tuples, Immutability, Star Unpacking & namedtuple",
              text: `Creating Tuples:
A tuple is an ordered, immutable sequence, commonly written with parentheses () and commas:
point = (4, 7)
person = ("Maya", 25, "designer")
CRITICAL SYNTAX: A single-item tuple REQUIRES a trailing comma: single = (5,). Without the comma, (5) is treated as an integer expression in parentheses!

Tuple Immutability:
Item positions cannot be reassigned once created (coords[0] = 15 raises TypeError). This makes tuples ideal for fixed records, dictionary keys, and returning multiple values from functions.

Star (*) Extended Unpacking:
Captures variable numbers of elements cleanly:
first, *middle, last = [10, 20, 30, 40, 50]
# first = 10, middle = [20, 30, 40], last = 50

Lightweight NamedTuples:
from collections import namedtuple
Student = namedtuple("Student", ["name", "grade", "major"])
s = Student("Asha", 95, "Computer Science")
print(s.name, s.grade)  # Named attribute access with tuple memory efficiency!`
            },
            {
              heading: "20. Sets, Mathematical Operations & Fast Deduplication",
              text: `A set is an unordered collection of unique, hashable elements defined with curly braces {1, 2, 3} or set().

Creating Sets:
• Empty set must be created with set(), NOT {} (which creates an empty dictionary!).
• Duplicates are eliminated automatically: set([1, 2, 2, 3]) -> {1, 2, 3}.

Set Mathematical Operations:
• Union (a | b or a.union(b)): All elements in either set.
• Intersection (a & b or a.intersection(b)): Only elements common to both sets.
• Difference (a - b or a.difference(b)): Elements in a that are not in b.
• Symmetric Difference (a ^ b): Elements in either set, but NOT in both.
• Subset check: a.issubset(b) or a <= b.

Deduplication Techniques:
• Fast unordered deduplication: list(set(items)) (destroys original order).
• Order-preserving deduplication (Python 3.7+): list(dict.fromkeys(items)) (preserves first appearance order in O(N) time!).`
            },
            {
              heading: "21. Advanced Collections: collections.defaultdict & collections.deque",
              text: `The standard library collections module provides high-performance data structures:

collections.defaultdict:
A subclass of dict that calls a factory function (e.g. list, int, set) whenever a missing key is accessed, completely eliminating KeyError exceptions and boilerplate if-checks:
from collections import defaultdict
grouped = defaultdict(list)
grouped["python"].append("guido")  # Automatically initializes empty list!

counts = defaultdict(int)
counts["apple"] += 1              # Automatically starts at 0!

collections.deque (Double-Ended Queue):
Standard Python lists are fast for appending/popping at the end (O(1)), but inserting or removing at index 0 requires shifting all elements (O(N)).
A deque provides O(1) appends and pops from BOTH ends:
from collections import deque
q = deque([1, 2, 3])
q.appendleft(0)    # O(1) prepend!
q.popleft()        # O(1) pop from front!`
            },
            {
              heading: "22. The Tuple Mutability Paradox & Memory Efficiency",
              text: `The Mutable-in-Immutable Paradox:
A tuple itself is immutable: its references cannot be replaced or reordered. However, if an element inside a tuple is a mutable object (such as a list), that nested object CAN be modified in-place!

t = (1, [10, 20])
t[1].append(30)   # Allowed! t is now (1, [10, 20, 30])

The Augmented Assignment Trap:
Writing 't[1] += [40]' raises a TypeError (because tuple element reassignment fails), BUT the list is still mutated! This classic Python interview question occurs because '+=' modifies the list in place and then attempts to assign the result back to t[1].

Memory Footprint:
Tuples are more lightweight than lists because they are immutable and do not allocate extra buffer capacity for future appends:
import sys
print(sys.getsizeof([1, 2, 3]))  # Typically 88 bytes
print(sys.getsizeof((1, 2, 3)))  # Typically 64 bytes`
            },
            {
              heading: "23. Sorting Data & The DSU Pattern",
              text: `Sorting in Python:
• list.sort(): Sorts a list in-place and returns None.
• sorted(iterable): Returns a new sorted list without modifying the original.
• key argument: Specifies a function or lambda used to derive comparison keys (e.g. sorted(students, key=lambda s: s[1])).

The DSU (Decorate-Sort-Undecorate) Pattern:
DSU is a classic 3-step pattern for sorting items using derived keys:
1. Decorate: Pair each item with a sort key and original index: [(score, index, name) for index, (name, score) in enumerate(students)]
2. Sort: Sort the decorated list of tuples. Python compares tuples element-by-element; the index acts as a stable tie-breaker.
3. Undecorate: Extract the original items in their sorted order: [name for score, index, name in decorated]`
            },
            {
              heading: "24. List Comprehensions & Readability",
              text: `A list comprehension provides a concise syntax for constructing a new list from an iterable:

1. Basic Transformation:
squares = [n ** 2 for n in numbers]

2. Filtering with 'if':
even_numbers = [n for n in numbers if n % 2 == 0]

3. Transforming and Filtering Together:
raw_names = [" Asha ", "", " Ben", "Maya "]
clean_names = [name.strip() for name in raw_names if name.strip()]
# ["Asha", "Ben", "Maya"]

Readability Best Practice:
List comprehensions are intended for short, readable transformations. If a comprehension contains nested loops or complicated conditions, a standard for loop with explicit steps is clearer and easier to debug.`
            },
            {
              heading: "25. Computational Complexity Matrix (Big-O)",
              text: `Understanding algorithm efficiency across Python collection types is essential for writing scalable code:`,
              table: {
                headers: ["Operation", "List (list)", "Tuple (tuple)", "Dictionary (dict)", "Set (set)"],
                rows: [
                  ["Indexing by position", "O(1)", "O(1)", "N/A", "N/A"],
                  ["Key / Element Lookup", "O(N) linear", "O(N) linear", "O(1) average", "O(1) average"],
                  ["Append / Add", "O(1) amortized", "N/A (Immutable)", "O(1) average", "O(1) average"],
                  ["Insert at beginning [0]", "O(N) shifts all elements", "N/A", "O(1) average", "N/A"],
                  ["Pop from end", "O(1)", "N/A", "O(1) average", "O(1) arbitrary"],
                  ["Pop from beginning [0]", "O(N) shifts all elements", "N/A", "O(1) average", "N/A"],
                  ["Delete key / element", "O(N)", "N/A", "O(1) average", "O(1) average"],
                  ["Iteration", "O(N)", "O(N)", "O(N)", "O(N)"]
                ]
              }
            },
            {
              heading: "26. Common Mistakes & Module Summary",
              text: `Summary of key concepts and common pitfalls to avoid:`,
              bulletPoints: [
                "Indexes vs Values: An index is a zero-based numeric position; a value is the item stored at that position.",
                "Aliasing Trap: Assigning 'b = a' shares the same list; use 'a.copy()' or 'copy.deepcopy(a)' for nested data.",
                "Grid Multiplication Trap: '[[0]*3]*3' duplicates the same row list; always use '[[0 for _ in range(3)] for _ in range(3)]'.",
                "Missing Keys: Accessing dict[k] directly raises KeyError; guard with 'k in dict', 'dict.get(k, default)', or use 'defaultdict'.",
                "Mutable Keys Error: Lists and sets cannot be dictionary keys because they are unhashable; use tuples or frozensets.",
                "Single-Item Tuple Comma: Always include a trailing comma for single-item tuples (e.g., '(5,)', not '(5)').",
                "Empty Set Initialization: '{}' creates an empty dictionary, not a set; always call 'set()' to create an empty set.",
                "list.sort() Returns None: Calling 'lst = lst.sort()' overwrites lst with None; call 'lst.sort()' directly or use 'sorted(lst)'."
              ]
            }
          ],
          codeExamples: [
            {
              title: "4 & 5. Indexing, Slicing & Mutability",
              code: `colors = ["red", "green", "blue", "gold"]

print("First element (index 0):", colors[0])
print("Last element (index -1):", colors[-1])
print("Slice [1:3]:", colors[1:3]) # ['green', 'blue']
print("Reversed [::-1]:", colors[::-1])

# Slice assignment: replacing a chunk
items = [10, 20, 30, 40, 50]
items[1:4] = [99, 100]
print("Slice assigned items:", items) # [10, 99, 100, 50]

# Mutability: updating in place
items[0] = 5
items.append(60)
print("Updated items:", items)`,
              explanation: "Demonstrates zero-based indexing, negative indexing, step-based slicing, slice replacements, and list mutability."
            },
            {
              title: "7 & 8. List Updates, Methods & Operations",
              code: `tasks = ["read", "write"]
tasks[1] = "review"
tasks.append("submit")
tasks.insert(0, "plan")
tasks.extend(["test", "deploy"])
print("Tasks:", tasks)

# Concatenation, repetition, and membership
numbers = [2, 4, 6]
print("Concatenation:", numbers + [8])
print("Repetition:", numbers * 2)
print("Membership (4 in numbers):", 4 in numbers)
print("Sum of numbers:", sum(numbers))`,
              explanation: "Shows in-place list modification methods, extend(), and sequence arithmetic operators."
            },
            {
              title: "9 & 10. Aliasing vs Shallow Copy vs Deep Copy",
              code: `import copy

# 1. Aliasing trap
a = [[1, 2], [3, 4]]
b = a
b.append([5, 6])
print("a after b.append:", len(a)) # 3 (affected!)

# 2. Shallow copy vs Deep copy on nested lists
shallow = a.copy()
deep = copy.deepcopy(a)

shallow[0][0] = 999
print("a[0][0] after shallow modification:", a[0][0]) # 999 (shared!)
print("deep[0][0] after deepcopy untouched:", deep[0][0]) # 1 (safe!)`,
              explanation: "Clearly proves why copy.deepcopy() is required for nested structures and matrices."
            },
            {
              title: "11. Multi-Dimensional Lists (Matrices & Transposition)",
              code: `matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

print("Center element [1][1]:", matrix[1][1])

# Matrix transposition using nested list comprehension
transposed = [[row[i] for row in matrix] for i in range(len(matrix[0]))]
print("Transposed Matrix:")
for r in transposed:
    print(r)`,
              explanation: "Shows safe grid initialization and row-column transposition using nested list comprehensions."
            },
            {
              title: "12 to 14. Dictionaries: Access, setdefault() & Iteration",
              code: `student = {"name": "Asha", "grade": 92}
student["grade"] = 95
student["city"] = "Pune"

# Grouping items with setdefault()
grades = {}
grades.setdefault("CS101", []).append("Asha")
grades.setdefault("CS101", []).append("Ben")
print("Grouped with setdefault:", grades)

# Safe lookup with .get()
settings = {"theme": "dark"}
print("Theme:", settings.get("theme"))
print("Language (fallback):", settings.get("language", "English"))

# Iterating over items()
for course, roster in grades.items():
    print(f"Course {course}: {', '.join(roster)}")`,
              explanation: "Covers key-value updates, setdefault() grouping, and safe get() lookups."
            },
            {
              title: "15 to 17. Counters, Python 3.9+ Merge & Dict Comprehensions",
              code: `from collections import Counter

# Frequency counting
words = ["sun", "rain", "sun", "wind", "sun", "rain"]
word_counts = Counter(words)
print("Top word:", word_counts.most_common(1))

# Python 3.9+ Dictionary Merge (|) and Update (|=)
defaults = {"theme": "light", "font": "sans", "zoom": 100}
user_pref = {"theme": "dark", "zoom": 120}
active_settings = defaults | user_pref # user_pref overrides defaults
print("Merged settings (|):", active_settings)

# Dictionary comprehension
squares_dict = {x: x ** 2 for x in range(1, 6)}
print("Squares dict:", squares_dict)`,
              explanation: "Demonstrates collections.Counter, Python 3.9+ union merge (|), and dictionary comprehensions."
            },
            {
              title: "18 & 19. Tuples, Star Unpacking & namedtuple",
              code: `from collections import namedtuple

# Single item tuple & immutable points
point = (4, 7)
single_item = (5,) # Notice trailing comma!

# Star (*) Extended Unpacking
first, *middle, last = [10, 20, 30, 40, 50]
print(f"first={first}, middle={middle}, last={last}")

# Swapping variables
a, b = 10, 20
a, b = b, a
print(f"Swapped: a={a}, b={b}")

# namedtuple: readable records
City = namedtuple("City", ["name", "country", "population"])
tokyo = City("Tokyo", "Japan", 37400000)
print(f"{tokyo.name}, {tokyo.country} (Pop: {tokyo.population})")`,
              explanation: "Shows tuple immutability, star unpacking, variable swapping, and collections.namedtuple."
            },
            {
              title: "20. Sets: Mathematical Operations & Deduplication",
              code: `devs_python = {"Asha", "Ben", "Chloe", "David"}
devs_js = {"Chloe", "David", "Elena", "Farhan"}

# Union (|): Developers who know either language
print("All devs (|):", devs_python | devs_js)

# Intersection (&): Developers who know BOTH languages
print("Full-stack (&):", devs_python & devs_js)

# Difference (-): Python devs who don't know JS
print("Pure Python (-):", devs_python - devs_js)

# Order-Preserving Deduplication using dict.fromkeys()
raw_tags = ["python", "ai", "web", "python", "ai", "cloud"]
unique_ordered_tags = list(dict.fromkeys(raw_tags))
print("Unique ordered tags:", unique_ordered_tags)`,
              explanation: "Demonstrates set mathematical operations (union, intersection, difference) and order-preserving deduplication."
            },
            {
              title: "21. Advanced Collections: defaultdict & deque",
              code: `from collections import defaultdict, deque

# 1. defaultdict: Automatic list initialization
departments = defaultdict(list)
departments["Engineering"].append("Asha")
departments["Engineering"].append("Ben")
departments["Design"].append("Chloe")
print("Departments:", dict(departments))

# 2. deque: O(1) front and rear operations
recent_actions = deque(maxlen=3)
for action in ["login", "view_course", "take_quiz", "logout"]:
    recent_actions.append(action)
    print("Action history:", list(recent_actions))`,
              explanation: "Demonstrates defaultdict for eliminating missing key checks and deque for fixed-size sliding history buffers."
            },
            {
              title: "22. The Tuple Mutability Paradox & Memory Inspection",
              code: `import sys

# Tuple containing a mutable list
record = ("ID101", ["physics", "math"])
print("Original record:", record)

# Modifying the mutable inner list is ALLOWED!
record[1].append("chemistry")
print("Modified record:", record)

# Memory comparison
list_obj = [1, 2, 3, 4, 5]
tuple_obj = (1, 2, 3, 4, 5)
print("List byte size:", sys.getsizeof(list_obj))
print("Tuple byte size:", sys.getsizeof(tuple_obj))`,
              explanation: "Shows why inner mutable collections in tuples can mutate, and proves the lower memory footprint of tuples."
            },
            {
              title: "23 & 24. DSU Sorting Pattern vs lambda key",
              code: `students = [("Asha", 88), ("Ben", 95), ("Maya", 88)]

# Decorate-Sort-Undecorate (DSU) with index tie-breaker
decorated = [(score, index, name) for index, (name, score) in enumerate(students)]
decorated.sort()
dsu_result = [name for score, index, name in decorated]
print("DSU sorted by score:", dsu_result)

# Modern sorted() with key
modern_result = sorted(students, key=lambda s: s[1])
print("Modern key sorted:", modern_result)`,
              explanation: "Contrasts the classic DSU pattern with modern lambda sorting."
            }
          ],
          bestPractices: [
            "Use lists for ordered sequences that require in-place modifications and additions.",
            "Use dictionaries when values need to be looked up by meaningful unique keys in O(1) time.",
            "Use tuples for fixed, heterogeneous records and function return values to enforce immutability.",
            "Use sets for ultra-fast O(1) membership testing and mathematical set logic (unions, intersections).",
            "Always use .get(key, default) or collections.defaultdict to avoid KeyError exceptions.",
            "Use copy.deepcopy() when duplicating nested collections or 2D matrices.",
            "Use dict.fromkeys(items) to deduplicate a list while preserving original insertion order.",
            "Use collections.deque when frequent appends or pops occur at the beginning of a queue.",
            "Keep list comprehensions simple and readable; use explicit loops for complex multi-step logic."
          ],
          commonMistakes: [
            "Confusing zero-based indexes with values: lst[1] accesses the second item, not the first.",
            "Assuming assignment 'b = a' copies a list: it creates an alias referencing the exact same list.",
            "Using '[[0]*cols]*rows' to create 2D matrices, which shares row references across the entire grid.",
            "Writing '{}' expecting an empty set: it creates an empty dictionary; use 'set()' instead.",
            "Accessing missing dictionary keys with square brackets, causing KeyError crashes.",
            "Attempting to use a mutable list or set as a dictionary key, raising TypeError: unhashable type.",
            "Creating single-element tuples without a trailing comma: '(5)' is an integer, while '(5,)' is a tuple.",
            "Assuming tuples make inner mutable objects immutable: modifying an inner list still mutates the list!",
            "Assigning the result of list.sort(): 'lst = lst.sort()' sets lst to None because sort() works in place."
          ],
          practiceExercise: {
            title: "Hands-On Coding Practice: Advanced Data Structures Suite (8 Programs)",
            problem: `Complete the following 8 practical Python data structure programs:

Program 1: Word Frequency Histogram & Top-K Counter
Given a sentence, count word frequencies using a dictionary and extract the top 3 most frequent words using Counter.

Program 2: 2D Grid Transposition
Given a 3x3 matrix of numbers, use nested list comprehensions to compute its transpose (swap rows and columns).

Program 3: Dictionary Inverter with Duplicate Value Grouping
Invert a dictionary mapping student names to grades so that each grade maps to a list of student names.

Program 4: DSU Multi-Field Sorter
Given a list of words, use the Decorate-Sort-Undecorate (DSU) pattern to sort words primarily by length (ascending) and secondarily alphabetically (case-insensitive).

Program 5: Configuration Merger with Union Operator
Given default app settings and user custom overrides, merge them using the Python 3.9+ union operator (|) and print the active configuration.

Program 6: Sales Record Grouping with setdefault()
Given a list of sales transactions (category, amount), group the transactions by category and calculate total sales per category.

Program 7: Role-Based Access Control (RBAC) with Sets
Given a set of user permissions and required endpoint permissions, compute missing permissions and determine if access is granted using set difference and subset operations.

Program 8: Sliding Window Rate Limiter with deque
Implement a sliding-window timestamp tracker using collections.deque that records request timestamps and rejects requests exceeding 3 actions within a 10-second window.`,
            solutionCode: `from collections import Counter, defaultdict, deque

# Program 1: Word Frequency Histogram & Top-K
text = "data structures in python include lists dictionaries and tuples lists are mutable tuples are immutable"
words = text.split()
counts = Counter(words)
print("--- Program 1: Top 3 Words ---")
print(counts.most_common(3))

# Program 2: 2D Grid Transposition
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
transposed = [[row[i] for row in matrix] for i in range(len(matrix[0]))]
print("\\n--- Program 2: Matrix Transpose ---")
for r in transposed:
    print(r)

# Program 3: Dictionary Inverter
grades = {"Asha": "A", "Ben": "B", "Chloe": "A", "David": "B", "Elena": "A+"}
inverted = {}
for name, grade in grades.items():
    inverted.setdefault(grade, []).append(name)
print("\\n--- Program 3: Inverted Gradebook ---", inverted)

# Program 4: DSU Multi-Field Sorter
words_list = ["banana", "pie", "apple", "fig", "kiwi", "date"]
# Decorate: (length, word.lower(), word)
decorated = [(len(w), w.lower(), w) for w in words_list]
decorated.sort()
sorted_words = [w for length, low, w in decorated]
print("\\n--- Program 4: DSU Sorted Words ---", sorted_words)

# Program 5: Configuration Merger (|)
defaults = {"theme": "dark", "fontSize": 14, "autoSave": True, "showLineNumbers": True}
user_settings = {"fontSize": 16, "autoSave": False, "theme": "cyberpunk"}
active_config = defaults | user_settings
print("\\n--- Program 5: Merged Config ---", active_config)

# Program 6: Sales Grouping with setdefault
transactions = [
    ("Electronics", 299.99),
    ("Books", 15.50),
    ("Electronics", 89.00),
    ("Groceries", 45.20),
    ("Books", 22.00)
]
category_totals = {}
for category, amount in transactions:
    category_totals[category] = category_totals.get(category, 0.0) + amount

print("\\n--- Program 6: Sales Totals by Category ---")
for cat, total in sorted(category_totals.items()):
    print(f"{cat}: $" + f"{total:.2f}")

# Program 7: Role-Based Access Control (RBAC) with Sets
required_permissions = {"read", "write", "delete", "export"}
user_permissions = {"read", "write", "audit"}

missing_permissions = required_permissions - user_permissions
has_access = required_permissions.issubset(user_permissions)
print("\\n--- Program 7: RBAC Access Check ---")
print(f"User Permissions: {user_permissions}")
print(f"Missing Required: {missing_permissions}")
print(f"Access Granted: {has_access}")

# Program 8: Sliding Window Rate Limiter with deque
class RateLimiter:
    def __init__(self, max_requests=3, window_seconds=10):
        self.max_requests = max_requests
        self.window_seconds = window_seconds
        self.requests = deque()

    def allow_request(self, current_time):
        while self.requests and (current_time - self.requests[0]) > self.window_seconds:
            self.requests.popleft()
        if len(self.requests) < self.max_requests:
            self.requests.append(current_time)
            return True
        return False

limiter = RateLimiter(max_requests=3, window_seconds=10)
test_timestamps = [1, 3, 5, 8, 12, 15]
print("\\n--- Program 8: Rate Limiter History ---")
for ts in test_timestamps:
    allowed = limiter.allow_request(ts)
    print(f"Timestamp {ts}s: {'Allowed' if allowed else 'Blocked (429 Rate Limit)'}")`
          },
          keyTakeaways: [
            "Lists, dictionaries, tuples, and sets provide complementary tools to organize, query, and transform data.",
            "Lists are mutable ordered sequences; use copy.deepcopy() for nested multi-dimensional structures.",
            "Dictionaries provide fast O(1) hash-based key-value lookups; Python 3.9+ supports union merge (|) and update (|=).",
            "Sets provide ultra-fast O(1) uniqueness filtering, subset verification, and mathematical operations.",
            "Tuples are immutable ordered sequences; star unpacking (*rest) and namedtuples offer elegant structured data access.",
            "Collections module tools (Counter, defaultdict, deque) eliminate boilerplate and optimize queue operations.",
            "The DSU pattern sorts sequences using derived keys while preserving stability through index tie-breakers.",
            "List and dictionary comprehensions compactly create, map, and filter collections with expressive syntax.",
            "Understanding Big-O complexity helps select the right data structure for scalable real-world applications."
          ],
          references: [
            { title: "Python Documentation: Data Structures", url: "https://docs.python.org/3/tutorial/datastructures.html" },
            { title: "Python Documentation: Sorting Techniques", url: "https://docs.python.org/3/howto/sorting.html" },
            { title: "Python Documentation: collections Module (Counter, defaultdict, deque, namedtuple)", url: "https://docs.python.org/3/library/collections.html" },
            { title: "Python Documentation: Set Types (set, frozenset)", url: "https://docs.python.org/3/library/stdtypes.html#set-types-set-frozenset" },
            { title: "Python Documentation: Sequence Types (list, tuple, range)", url: "https://docs.python.org/3/library/stdtypes.html#sequence-types-list-tuple-range" }
          ],
          mcqs: [
            {
              id: 1,
              question: "What is the average time complexity of searching or retrieving a value by key in a Python dictionary?",
              options: [
                "O(N) linear time",
                "O(1) constant time",
                "O(N log N) logarithmic time",
                "O(N^2) quadratic time"
              ],
              correctAnswer: 1,
              explanation: "Python dictionaries use hash tables under the hood, providing ultra-fast O(1) average-time lookups regardless of dictionary size."
            },
            {
              id: 2,
              question: "What happens when you attempt to execute tuple_obj[0] = 'new_value' on a Python tuple?",
              options: [
                "The tuple is updated in place",
                "A new tuple is created automatically",
                "A TypeError is raised because tuples are immutable",
                "Python converts the tuple into a list"
              ],
              correctAnswer: 2,
              explanation: "Tuples are immutable; attempting to reassign or modify their index positions raises a TypeError: 'tuple' object does not support item assignment."
            },
            {
              id: 3,
              question: "What are the three steps of the classic Decorate-Sort-Undecorate (DSU) pattern?",
              options: [
                "Filter data, sort values, print output",
                "Create temporary comparison keys, sort by those keys, strip the keys to retrieve original items",
                "Convert list to dict, sort keys, convert to tuple",
                "Reverse list, apply bubble sort, reverse back"
              ],
              correctAnswer: 1,
              explanation: "DSU decorates a sequence with derived sort keys, sorts the decorated tuples reliably, and undecorates to extract original items."
            },
            {
              id: 4,
              question: "Which operator was introduced in Python 3.9 to merge two dictionaries into a new dictionary?",
              options: [
                "+",
                "&",
                "|",
                "^"
              ],
              correctAnswer: 2,
              explanation: "Python 3.9 introduced the union operator (|) to merge dictionaries (d1 | d2) and the update operator (|=) for in-place merging."
            },
            {
              id: 5,
              question: "What is the output of the list comprehension [x ** 2 for x in range(6) if x % 2 == 0]?",
              options: [
                "[0, 4, 16]",
                "[1, 9, 25]",
                "[0, 1, 4, 9, 16, 25]",
                "[4, 16, 36]"
              ],
              correctAnswer: 0,
              explanation: "range(6) gives 0, 1, 2, 3, 4, 5. Even numbers are 0, 2, 4. Squaring them yields 0**2=0, 2**2=4, 4**2=16."
            }
          ]
        }
      },
      {
        id: "py-mod-8",
        title: "Module 08 — Strings, Slicing & Text Parsing",
        description: "Strings as immutable sequences, indexing, slicing with step, string methods (find, strip, split, join, replace), parsing patterns, and f-string formatting.",
        completed: true,
        readingMaterial: {
          introduction: `Strings are among the most versatile and ubiquitous data structures in Python programming. A string is an immutable, ordered sequence of characters representing textual data. From parsing server logs and extracting API parameters to validating email addresses and generating formatted invoices, text processing is a core pillar of software development.

In Python, every character in a string is represented internally using Unicode (UTF-8 by default), allowing programs to manipulate characters, symbols, and emojis across all written languages seamlessly. Because strings are sequences, they share fundamental behaviors with lists and tuples—such as zero-based indexing, slicing, iteration, and membership testing—while enforcing strict immutability.

This comprehensive module covers the full anatomy of Python strings: character indexing, step-based slicing, immutability and memory interning, frequency analysis, case normalization, searching and validation methods, delimiter tokenization with split() and join(), regex-free text extraction patterns, modern f-string interpolation, computational complexity, and 8 real-world practice programs.`,
          objectives: [
            "Access individual characters using zero-based positive indexing s[0] and negative indexing s[-1].",
            "Extract substrings with flexible slice notation s[start:stop:step] and reverse sequences using s[::-1].",
            "Explain string immutability, memory allocation, and the performance cost of repeated concatenation.",
            "Traverse strings with for loops, while loops, and enumerate() to perform character frequency analysis.",
            "Apply the 'in' and 'not in' membership operators and perform case-normalized string comparisons.",
            "Master essential string transformation methods: strip(), lower(), upper(), replace(), split(), and join().",
            "Parse unstructured log files and email headers using find(), rfind(), and multi-step slicing.",
            "Format professional terminal output, tables, and currency using modern Python 3.6+ f-strings.",
            "Analyze string operation computational efficiency using Big-O time and space complexity."
          ],
          sections: [
            {
              heading: "3. Strings as Sequences & Character Encoding (ASCII vs Unicode)",
              text: `A string in Python is an ordered sequence of characters enclosed in single quotes ('...'), double quotes ("..."), or triple quotes ('''...''' or """...""").

Indexing Principles:
Each character has a fixed numeric index:
• Positive indexing starts at 0 for the first character and proceeds to len(s) - 1.
• Negative indexing starts at -1 for the last character and counts backwards to -len(s).

Boundary Errors:
Attempting to access an index beyond the valid range (e.g. s[len(s)]) raises an IndexError: string index out of range.

Character Encoding with ord() and chr():
Under the hood, every character corresponds to an integer code point:
• ord('A') returns 65 (ASCII / Unicode decimal value).
• chr(65) returns 'A'.
• ord('a') returns 97 (lowercase letters have higher numeric code points than uppercase).
• ord('€') returns 8364 (full Unicode international character support).`,
              table: {
                headers: ["Character", "Positive Index", "Negative Index", "Unicode Code Point (ord)", "Binary Byte (ASCII)"],
                rows: [
                  ["'P'", "0", "-6", "80", "01010000"],
                  ["'y'", "1", "-5", "121", "01111001"],
                  ["'t'", "2", "-4", "116", "01110100"],
                  ["'h'", "3", "-3", "104", "01101000"],
                  ["'o'", "4", "-2", "111", "01101111"],
                  ["'n'", "5", "-1", "110", "01101110"]
                ]
              }
            },
            {
              heading: "4. String Traversal & Iteration Patterns",
              text: `Traversal means visiting each character in a sequence one by one. Python provides multiple traversal idioms:

1. Direct Item Traversal (Pythonic):
for char in "Python":
    print(char)

2. Index & Item Traversal with enumerate():
for index, char in enumerate("Python"):
    print(f"Index {index} -> {char}")

3. While Loop Traversal:
Often used when manual pointer manipulation is necessary:
i = 0
s = "Code"
while i < len(s):
    print(s[i])
    i += 1

4. Reverse Traversal:
Traverse backwards using reversed(s) or negative index loops.`
            },
            {
              heading: "5. Comprehensive String Slicing Mechanics (s[start:stop:step])",
              text: `A slice extracts a substring using the bracket syntax s[start:stop:step]:
• start: The beginning index (inclusive). Defaults to 0 if omitted.
• stop: The ending boundary index (exclusive). Defaults to len(s) if omitted.
• step: The stride or increment between characters. Defaults to 1 if omitted.

Omitted Index Rules:
• s[:5]   -> Characters from start up to index 4.
• s[6:]   -> Characters from index 6 to the end.
• s[:]    -> A full shallow copy of the string.
• s[::2]  -> Every second character starting from index 0.
• s[::-1] -> The entire string reversed!

Graceful Slicing Bounds (No IndexError):
Unlike individual indexing (which crashes on out-of-bounds indices), slicing gracefully caps at string boundaries:
text = "Python"
print(text[2:100])  # Returns 'thon' without error!`
            },
            {
              heading: "6. String Immutability & Memory Interning",
              text: `Strings in Python are strictly immutable. Once created in memory, individual characters cannot be mutated, added, or overwritten:
greeting = "Hello World"
# greeting[0] = 'J'  -> TypeError: 'str' object does not support item assignment

Modifying Strings Creates New Objects:
To modify a string, you must construct a brand new string:
new_greeting = 'J' + greeting[1:]  # "Jello World"

The Loop Concatenation Trap vs str.join():
Repeatedly appending strings using '+=' inside a loop creates quadratic O(N^2) memory reallocation overhead because each concatenation allocates a new buffer and copies all preceding characters:
# SLOW (O(N^2)):
result = ""
for word in word_list:
    result += word + " "

# FAST & PYTHONIC (O(N)):
result = " ".join(word_list)  # Pre-computes exact buffer size and copies once!

String Interning:
CPython automatically 'interns' short ASCII strings and identifiers in a global lookup table, reusing existing memory addresses so that 'a is b' evaluates to True for identical literals.`
            },
            {
              heading: "7. Looping, Counting & Frequency Analysis",
              text: `A fundamental text processing pattern is counting character or substring occurrences.

Manual Counting Pattern:
word = "banana"
count = 0
for letter in word:
    if letter == 'a':
        count += 1
print("Count of 'a':", count)  # 3

Built-in .count() Method:
Python provides a high-performance C-level method:
print(word.count('a'))       # 3
print(word.count('an'))      # 2 (non-overlapping occurrences)`
            },
            {
              heading: "8 & 9. The 'in' Membership Operator & Lexicographical Comparisons",
              text: `The 'in' and 'not in' Operators:
The keyword 'in' evaluates whether a substring exists anywhere within a target string, returning a Boolean:
print('a' in 'banana')       # True
print('seed' in 'banana')    # False
print('nan' not in 'banana') # False

String Comparisons & Lexicographical Ordering:
Python compares strings alphabetically based on their underlying Unicode code points using relational operators (<, <=, >, >=, ==, !=):
'apple' < 'banana'  # True ('a' has code point 97, 'b' has 98)

The Uppercase Trap:
In ASCII and Unicode, all uppercase letters (A=65 to Z=90) precede lowercase letters (a=97 to z=122):
'apple' > 'Zebra'   # True! (Because 97 > 90)

Canonical Case-Folded Comparison:
Always normalize case before comparing user input or search queries:
word.casefold() == target.casefold()`
            },
            {
              heading: "10. The String Methods Arsenal: Transforming & Cleaning",
              text: `String methods return new modified strings without altering the original:

Whitespace Trimming:
• .strip(): Removes leading and trailing whitespace (spaces, tabs, newlines).
• .lstrip(): Removes leading whitespace only.
• .rstrip(): Removes trailing whitespace only.
• .strip(chars): Strips specific characters: "$149.99".strip("$") -> "149.99".

Case Transformations:
• .lower(): Converts all characters to lowercase.
• .upper(): Converts all characters to uppercase.
• .title(): Capitalizes the first letter of each word.
• .capitalize(): Capitalizes only the first character of the string.
• .swapcase(): Inverts casing for each letter.
• .casefold(): Aggressive lowercasing for caseless matching (handles German 'ß' -> 'ss').`
            },
            {
              heading: "11. Searching, Inspecting & Validating Methods",
              text: `Finding Substrings:
• .find(sub, start, end): Returns the lowest index where sub is found, or -1 if not found.
• .rfind(sub): Returns the highest index where sub is found (searching from right).
• .index(sub): Like find(), but raises a ValueError if sub is not found!

Prefix and Suffix Checking:
• .startswith(prefix): Returns True if string starts with prefix (supports tuple of prefixes: s.startswith(('http://', 'https://'))).
• .endswith(suffix): Returns True if string ends with suffix (e.g. s.endswith(('.png', '.jpg'))).

Content Validation (Booleans):
• .isalpha(): True if all characters are alphabetic (a-z, A-Z).
• .isdigit(): True if all characters are digits (0-9).
• .isalnum(): True if all characters are alphanumeric.
• .isspace(): True if string contains only whitespace.
• .isidentifier(): True if string is a valid Python variable name.`
            },
            {
              heading: "12. Splitting, Joining & Replacing Text",
              text: `Tokenization and Delimiting:
• .split(sep=None, maxsplit=-1): Splits string by delimiter into a list of substrings. If sep is None, splits on arbitrary whitespace runs.
• .rsplit(sep, maxsplit): Splits from the right, useful when extracting file extensions.
• .splitlines(): Splits on line breaks (\\n, \\r\\n), stripping newlines.

Joining Collections:
• 'sep'.join(iterable): Concatenates elements of an iterable into a single string separated by 'sep':
"-".join(["2026", "10", "03"]) -> "2026-10-03"

Replacing Substrings:
• .replace(old, new, count): Replaces occurrences of 'old' with 'new'. Optional 'count' limits the number of replacements.

Partitioning:
• .partition(sep): Splits at the FIRST occurrence of sep and returns a 3-tuple: (before, sep, after).`
            },
            {
              heading: "13. Text Parsing & Unstructured Data Extraction",
              text: `Parsing is the process of analyzing a text sequence to locate and extract specific semantic components.

Two-Step Parsing with .find() and Slicing:
When working with structured logs or email headers:
line = "From stephen.marquard@uct.ac.za Sat Jan 5 09:14:16 2008"
at_pos = line.find('@')
space_pos = line.find(' ', at_pos)
host = line[at_pos + 1 : space_pos]  # 'uct.ac.za'

Token-Based Parsing with .split():
line = "X-DSPAM-Confidence: 0.8475"
label, value_str = line.split(':')
confidence = float(value_str.strip())  # 0.8475`
            },
            {
              heading: "14. String Formatting Evolution & Modern f-Strings",
              text: `Python String Formatting History:
1. % Operator (Legacy): "User %s has %d points" % (name, points)
2. str.format() (Python 2.7 / 3.0): "User {} has {} points".format(name, points)
3. Formatted String Literals / f-Strings (Python 3.6+): Prefix with 'f' or 'F':
f"User {name} has {points} points"

f-String Format Specifiers:
• Float Precision: f"{pi:.2f}" -> '3.14'
• Thousands Separators: f"{1000000:,}" -> '1,000,000'
• Percentage: f"{0.856:.1%}" -> '85.6%'
• Alignment & Width:
  - Left align: f"{'Python':<10}" -> 'Python    '
  - Right align: f"{'Python':>10}" -> '    Python'
  - Centered: f"{'Python':^10}" -> '  Python  '
  - Zero padding: f"{42:05d}" -> '00042'
• Self-Documenting Debugging (Python 3.8+):
  x = 10; print(f"{x=}") -> 'x=10'

Escape Sequences & Raw Strings:
• Standard escapes: \\n (newline), \\t (tab), \\\\ (literal backslash), \\' (single quote).
• Raw strings (r"path"): Disables escape processing, ideal for regex and Windows file paths:
path = r"C:\\Users\\USER\\Documents\\data.txt"`
            },
            {
              heading: "15. String Computational Complexity Matrix (Big-O)",
              text: `Understanding string operation performance prevents accidental performance bottlenecks in high-throughput applications:`,
              table: {
                headers: ["Operation", "Time Complexity", "Space Complexity", "Notes"],
                rows: [
                  ["Length Check len(s)", "O(1)", "O(1)", "CPython stores string length in struct metadata"],
                  ["Index Access s[i]", "O(1)", "O(1)", "Direct pointer arithmetic in memory"],
                  ["Slicing s[start:stop]", "O(K)", "O(K)", "K = slice length; allocates a new string copy"],
                  ["Concatenation s1 + s2", "O(N + M)", "O(N + M)", "Allocates new buffer of combined length"],
                  ["Repeated Concatenation in Loop", "O(N^2)", "O(N^2)", "Severe bottleneck! Always use str.join()"],
                  ["String Join sep.join(list)", "O(Total Length)", "O(Total Length)", "Single-pass buffer allocation"],
                  ["Substring Search sub in s", "O(N * M)", "O(1)", "Boyer-Moore-Horspool algorithm in CPython"],
                  ["Method Replace s.replace()", "O(N)", "O(N)", "Linear sweep across characters"],
                  ["Method Split s.split()", "O(N)", "O(N)", "Creates list of token substrings"]
                ]
              }
            },
            {
              heading: "16. Common Pitfalls & Module Summary",
              text: `Summary of key concepts and common errors to avoid:`,
              bulletPoints: [
                "IndexError on Edge Index: s[len(s)] is out of bounds; the highest valid index is len(s) - 1.",
                "Immutability Violation: Attempting 's[0] = x' fails; use slicing and concatenation or methods instead.",
                "str.find() vs Truthiness: find() returns -1 on failure; checking 'if s.find(\"x\"):' evaluates True because -1 is truthy! Check 'if s.find(\"x\") != -1:' or 'if \"x\" in s:'.",
                "Case Sensitivity: 'admin' != 'Admin'. Always use .lower() or .casefold() for case-insensitive validation.",
                "Whitespace in Parsing: Whitespace around numbers causes ValueError during float() conversion; always .strip().",
                "Loop String Concatenation: Never build large texts using '+=' in loops; append to a list and use ''.join().",
                "Method In-Place Assumption: String methods never mutate the original string; always assign the returned value."
              ]
            }
          ],
          codeExamples: [
            {
              title: "3 & 4. Indexing, Encodings & Traversal",
              code: `word = "Python"

# Positive and negative indexing
print("First character [0]:", word[0])
print("Last character [-1]:", word[-1])

# Character encoding with ord() and chr()
print("Unicode code point of 'P':", ord(word[0]))  # 80
print("Character for code point 80:", chr(80))       # 'P'

# Traversal with index using enumerate()
print("\\nCharacter Index Mapping:")
for idx, char in enumerate(word):
    print(f"  Index {idx} (Negative {idx - len(word)}) -> {char}")`,
              explanation: "Demonstrates positive/negative indexing, Unicode code points via ord() and chr(), and index-based iteration."
            },
            {
              title: "5. Slicing Mechanics & Sequence Inversion",
              code: `phrase = "Learning Python Programming"

# Slicing syntax: [start:stop:step]
print("First 8 characters [:8]:", phrase[:8])
print("From index 9 to 15 [9:15]:", phrase[9:15])
print("From index 16 to end [16:]:", phrase[16:])
print("Every second character [::2]:", phrase[::2])

# Sequence reversal using negative step
reversed_phrase = phrase[::-1]
print("Reversed string:", reversed_phrase)

# Slicing never raises IndexError on loose bounds
print("Graceful capping [9:1000]:", phrase[9:1000])`,
              explanation: "Shows slice extraction with start, stop, stride, string reversal using [::-1], and safe boundary capping."
            },
            {
              title: "6. Immutability, Memory & str.join() Performance",
              code: `import time

# Immutability: constructing a modified string
original = "Hello World"
# original[0] = 'J' -> TypeError!
modified = "J" + original[1:]
print("Modified string:", modified)

# Quadratic concatenation vs Linear str.join()
words = ["python"] * 10000

# 1. Quadratic loop concatenation
start = time.perf_counter()
quad_result = ""
for w in words:
    quad_result += w
time_quad = time.perf_counter() - start

# 2. Linear join
start = time.perf_counter()
join_result = "".join(words)
time_join = time.perf_counter() - start

print(f"str.join() was {time_quad / max(time_join, 1e-9):.1f}x faster than loop '+=' concatenation!")`,
              explanation: "Demonstrates immutability and empirically proves why str.join() is vastly faster than repeated string concatenation."
            },
            {
              title: "7 to 9. Counting, Membership & Lexicographical Ordering",
              code: `text = "The quick brown fox jumps over the lazy dog"

# Character and substring counting
print("Occurrences of 'o':", text.count('o'))
print("Occurrences of 'the' (case-sensitive):", text.count('the'))

# Membership checking with 'in' and 'not in'
print("Is 'fox' in text?", "fox" in text)
print("Is 'cat' not in text?", "cat" not in text)

# Lexicographical comparison & Uppercase trap
print("'apple' < 'banana':", "apple" < "banana")
print("'apple' > 'Zebra':", "apple" > "Zebra")  # True! ('a'=97 > 'Z'=90)

# Case-normalized canonical comparison
print("Casefold comparison:", "Zebra".casefold() == "zebra".casefold())`,
              explanation: "Covers substring counting, membership testing, and Unicode code-point ordering nuances."
            },
            {
              title: "10. String Cleaning & Case Transformations",
              code: `raw_user_input = "   \t  Dr. Jane Doe, Ph.D.  \n "

# Whitespace stripping
clean_input = raw_user_input.strip()
print("Cleaned input:", repr(clean_input))

# Stripping specific punctuation characters
price_tag = "***$1,299.99 USD***"
stripped_price = price_tag.strip("* USD$")
print("Cleaned price string:", stripped_price)

# Case transformations
title = "mastering PYTHON text parsing"
print("upper():", title.upper())
print("lower():", title.lower())
print("title():", title.title())
print("capitalize():", title.capitalize())
print("swapcase():", title.swapcase())`,
              explanation: "Shows strip(), lstrip(), rstrip() with whitespace and custom characters, plus all casing conversions."
            },
            {
              title: "11. Searching, Inspecting & Content Validation",
              code: `filename = "report_2026_q3_final.pdf"

# Prefix and suffix verification
print("Is PDF file?", filename.endswith(".pdf"))
print("Is Report?", filename.startswith("report_"))
print("Is Document?", filename.endswith((".pdf", ".docx", ".xlsx")))

# find() vs index()
query = "2026"
pos = filename.find(query)
print(f"'{query}' found at index:", pos)

missing_pos = filename.find("archive")
print("Missing query find() result:", missing_pos) # -1 (safe!)

# Validation checks
print("'12345'.isdigit():", "12345".isdigit())
print("'Python3'.isalnum():", "Python3".isalnum())
print("'   '.isspace():", "   ".isspace())
print("'total_sum'.isidentifier():", "total_sum".isidentifier())`,
              explanation: "Demonstrates startswith/endswith with tuples, find() vs index(), and string classification methods."
            },
            {
              title: "12. Splitting, Joining & Replacing Delimited Data",
              code: `csv_line = "Asha,Kumar,Senior Engineer,Bangalore,95000"

# Splitting by delimiter
fields = csv_line.split(",")
print("Parsed fields:", fields)

# Re-joining with custom delimiter
tsv_line = "\\t".join(fields)
print("TSV output:\\n", tsv_line)

# Partitioning into head, separator, tail
email = "asha.kumar@company.com"
username, sep, domain = email.partition("@")
print(f"Username: {username}, Domain: {domain}")

# Replacing text with count limit
text = "cat bat rat mat cat"
print("Replace all:", text.replace("cat", "dog"))
print("Replace first occurrence only:", text.replace("cat", "dog", 1))`,
              explanation: "Covers splitting CSV strings, joining tokens, 3-tuple partitioning, and substring replacements."
            },
            {
              title: "13. Email Header Parsing Pattern (Chapter 6 Classic)",
              code: `header = "From: stephen.marquard@uct.ac.za Sat Jan 5 09:14:16 2008"

# Step 1: Find '@' position
at_pos = header.find("@")

# Step 2: Find the space following the '@'
space_pos = header.find(" ", at_pos)

# Step 3: Slice the domain host
host = header[at_pos + 1 : space_pos]
print("Extracted Host Domain:", host)

# Alternative Token-Based Approach
parts = header.split()
email_address = parts[1]
domain_name = email_address.split("@")[1]
print("Token-Parsed Domain:", domain_name)`,
              explanation: "Contrasts manual index-slicing parsing with token-based split parsing for structured headers."
            },
            {
              title: "14. Modern f-String Formatting Masterclass",
              code: `item = "Mechanical Keyboard"
price = 149.954
quantity = 3
discount = 0.15

# Precision and currency formatting
subtotal = price * quantity
print(f"Item: {item}")
print(f"Unit Price: $" + f"{price:.2f}")
print(f"Discount: {discount:.1%}")
print(f"Total: $" + f"{subtotal * (1 - discount):,.2f}")

# Alignment and column formatting
print("\\n" + "=" * 40)
print(f"{'Description':<25} {'Qty':>5} {'Total':>8}")
print("-" * 40)
print(f"{item:<25} {quantity:>5} $" + f"{subtotal:>7.2f}")
print("=" * 40)

# Self-documenting debugging (Python 3.8+)
x = 42
y = 100
print(f"{x=} | {y=} | {x + y=}")`,
              explanation: "Covers f-string expressions, float rounding, percentage formats, alignment specifiers, and debug printing."
            }
          ],
          bestPractices: [
            "Use s.strip() immediately when reading raw lines from files or user input to eliminate trailing newlines and spaces.",
            "Always normalize text using .lower() or .casefold() before conducting case-insensitive searches or comparisons.",
            "Use ''.join(list_of_strings) instead of repeated '+=' concatenation in loops to avoid O(N^2) memory reallocation.",
            "Prefer f-strings (f'...') over legacy % formatting and str.format() for clarity, performance, and readability.",
            "Use str.find() when a missing substring is an expected possibility; use 'sub in s' for clean Boolean checks.",
            "Leverage str.startswith() and str.endswith() with tuples of suffixes (e.g. ('.jpg', '.png')) for filetype validation.",
            "Use str.partition() when splitting a string on the first delimiter to safely unpack a 3-tuple (head, sep, tail).",
            "Use raw strings (r'...') for regular expressions and Windows file paths to prevent accidental escape character resolution."
          ],
          commonMistakes: [
            "Off-By-One IndexError: Attempting to access s[len(s)]; the final valid character is at index len(s) - 1.",
            "Immutability Mutation Error: Writing s[0] = 'X' which raises TypeError: 'str' object does not support item assignment.",
            "Failing to Catch find() == -1: Writing 'if s.find(\"x\"):' which evaluates to True because -1 is truthy in Python.",
            "Case Sensitivity Blindspots: Assuming 'apple' == 'Apple'; string comparisons are strictly case-sensitive.",
            "Inefficient Concatenation: Appending strings in loops with '+=' causing massive quadratic performance degradations.",
            "Forgetting Methods Return New Strings: Calling 's.strip()' without reassigning 's = s.strip()', leaving s unchanged.",
            "Unchecked Number Conversions: Calling float() or int() on strings containing non-digit characters or currency symbols without cleaning."
          ],
          practiceExercise: {
            title: "Hands-On Coding Practice: Advanced String Processing & Parsing Suite (8 Programs)",
            problem: `Complete the following 8 practical Python string processing and parsing programs:

Program 1: Email Header & Domain Host Extractor
Given an unformatted email log header, use find() and slicing to extract both the username and domain host name.

Program 2: Clean Palindrome & Anagram Verifier
Write functions to determine if a string is a palindrome (ignoring casing, punctuation, and spaces) and whether two strings are anagrams.

Program 3: CamelCase to snake_case and Reverse Converter
Convert a variable name from CamelCase ('userRegistrationDate') to snake_case ('user_registration_date') and back.

Program 4: Web Server Access Log Entry Parser
Given a Common Log Format string, parse and extract the client IP address, timestamp, HTTP request method, resource path, and status code.

Program 5: Financial Invoice Receipt Formatter
Given a list of purchased products (name, quantity, price), generate an aligned ASCII receipt with subtotal, tax (8.5%), and total using f-strings.

Program 6: URL Component & Query String Parser
Given a full web URL, extract the protocol, host domain, resource path, and parse query parameters into a structured dictionary.

Program 7: Sensitive Data Masker (Credit Cards & Emails)
Mask sensitive payment card numbers (leaving only the last 4 digits visible) and email addresses (e.g. 'j***e@domain.com').

Program 8: Tokenizer & Character Frequency Histogram
Tokenize a paragraph into unique words, clean punctuation, and output an ASCII bar-chart frequency histogram for the top words.`,
            solutionCode: `log_line = "From: arshith.kumar@technology-labs.org Sat Oct 03 12:30:00 2026"
at_pos = log_line.find("@")
space_after = log_line.find(" ", at_pos)
from_prefix_pos = log_line.find("From: ") + len("From: ")

email = log_line[from_prefix_pos:space_after]
username = email[: email.find("@")]
domain = email[email.find("@") + 1 :]

print("--- Program 1: Email Header Extractor ---")
print(f"Extracted Email: {email}")
print(f"Username: {username}")
print(f"Domain Host: {domain}")

# Program 2: Clean Palindrome & Anagram Verifier
def is_palindrome(s):
    cleaned = "".join(char.lower() for char in s if char.isalnum())
    return cleaned == cleaned[::-1]

def are_anagrams(s1, s2):
    clean1 = sorted(char.lower() for char in s1 if char.isalnum())
    clean2 = sorted(char.lower() for char in s2 if char.isalnum())
    return clean1 == clean2

print("\\n--- Program 2: Palindrome & Anagram ---")
test_phrase = "A man, a plan, a canal: Panama!"
print(f"'{test_phrase}' is palindrome?", is_palindrome(test_phrase))
print("'listen' and 'silent' are anagrams?", are_anagrams("listen", "silent"))

# Program 3: CamelCase to snake_case
def camel_to_snake(name):
    result = []
    for char in name:
        if char.isupper():
            result.append("_" + char.lower())
        else:
            result.append(char)
    return "".join(result).lstrip("_")

def snake_to_camel(name):
    parts = name.split("_")
    return parts[0] + "".join(p.capitalize() for p in parts[1:])

print("\\n--- Program 3: Case Conversion ---")
camel = "userRegistrationDate"
snake = camel_to_snake(camel)
print(f"Camel to Snake: {camel} -> {snake}")
print(f"Snake to Camel: {snake} -> {snake_to_camel(snake)}")

# Program 4: Server Access Log Entry Parser
log_entry = '192.168.1.45 - - [03/Oct/2026:12:34:56 +0000] "GET /api/v1/courses/python HTTP/1.1" 200 4521'
ip = log_entry.split()[0]
time_start = log_entry.find("[") + 1
time_end = log_entry.find("]")
timestamp = log_entry[time_start:time_end]

request_start = log_entry.find('"') + 1
request_end = log_entry.find('"', request_start)
request_line = log_entry[request_start:request_end]
method, path, protocol = request_line.split()

after_request = log_entry[request_end + 1:].strip()
status_code = after_request.split()[0]

print("\\n--- Program 4: Log Entry Parser ---")
print(f"IP: {ip} | Time: {timestamp} | Method: {method} | Path: {path} | Status: {status_code}")

# Program 5: Financial Invoice Receipt Formatter
items = [
    ("Python Bootcamp Handbook", 1, 49.99),
    ("USB-C Development Hub", 2, 29.50),
    ("Ergonomic Keyboard", 1, 129.00)
]
tax_rate = 0.085

print("\\n--- Program 5: Invoice Receipt ---")
print("=" * 48)
print(f"{'Item Description':<26} {'Qty':>4} {'Price':>8} {'Total':>8}")
print("-" * 48)
subtotal = 0.0
for desc, qty, unit_price in items:
    line_total = qty * unit_price
    subtotal += line_total
    print(f"{desc:<26} {qty:>4} $" + f"{unit_price:>7.2f} $" + f"{line_total:>7.2f}")

tax = subtotal * tax_rate
grand_total = subtotal + tax
print("-" * 48)
print(f"{'Subtotal:':<39} $" + f"{subtotal:>7.2f}")
print(f"{'Tax (8.5%):':<39} $" + f"{tax:>7.2f}")
print(f"{'Grand Total:':<39} $" + f"{grand_total:>7.2f}")
print("=" * 48)

# Program 6: URL Component & Query String Parser
url = "https://learn.arshithgroup.com/courses/python?module=8&mode=dark&ref=dashboard"
protocol, rest = url.split("://")
host_and_path, query_string = rest.split("?") if "?" in rest else (rest, "")
host = host_and_path.split("/")[0]
path = "/" + "/".join(host_and_path.split("/")[1:])

query_params = {}
if query_string:
    for pair in query_string.split("&"):
        if "=" in pair:
            k, v = pair.split("=", 1)
            query_params[k] = v

print("\\n--- Program 6: URL Parser ---")
print(f"Protocol: {protocol} | Host: {host} | Path: {path}")
print("Query Parameters:", query_params)

# Program 7: Sensitive Data Masker
def mask_credit_card(card_num):
    cleaned = "".join(c for c in card_num if c.isdigit())
    if len(cleaned) < 4:
        return card_num
    return "*" * (len(cleaned) - 4) + cleaned[-4:]

def mask_email(email):
    user, sep, domain = email.partition("@")
    if len(user) <= 2:
        masked_user = user[0] + "*"
    else:
        masked_user = user[0] + "*" * (len(user) - 2) + user[-1]
    return f"{masked_user}@{domain}"

print("\\n--- Program 7: Sensitive Data Masking ---")
print("Masked Card:", mask_credit_card("4532-7592-8819-1024"))
print("Masked Email:", mask_email("arshith.developer@company.org"))

# Program 8: Tokenizer & Character Frequency Histogram
passage = "Strings are immutable sequences of Unicode characters. Strings support slicing and string methods."
words = passage.lower().replace(".", "").replace(",", "").split()
frequency = {}
for w in words:
    frequency[w] = frequency.get(w, 0) + 1

print("\\n--- Program 8: Frequency Histogram ---")
for word, count in sorted(frequency.items(), key=lambda item: item[1], reverse=True)[:5]:
    bar = "█" * (count * 3)
    print(f"{word:<12} | {bar} ({count})")`
          },
          keyTakeaways: [
            "Strings are immutable ordered sequences of Unicode characters accessed via zero-based indexing.",
            "String slicing s[start:stop:step] extracts sub-sequences and reverses strings cleanly with s[::-1].",
            "Strings cannot be modified in place; modifications construct new string objects in memory.",
            "Use ''.join(list) rather than repeated '+=' concatenation in loops to avoid quadratic O(N^2) bottlenecks.",
            "Methods like strip(), lower(), split(), join(), and replace() form the primary text-processing toolkit.",
            "Unstructured text parsing relies on finding landmark delimiters (e.g. with .find()) and slicing target fields.",
            "Modern f-strings provide expressive, high-performance string interpolation with precise alignment and formatting.",
            "Understanding string complexity ensures scalable performance when parsing massive text files and datasets."
          ],
          references: [
            { title: "Python Documentation: Text Sequence Type — str", url: "https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str" },
            { title: "Python Documentation: Formatted String Literals (f-strings)", url: "https://docs.python.org/3/reference/lexical_analysis.html#f-strings" },
            { title: "Python Documentation: Common String Operations", url: "https://docs.python.org/3/library/string.html" },
            { title: "Python for Everybody: Chapter 6 — Strings", url: "https://www.py4e.com/html3/06-strings" }
          ],
          mcqs: [
            {
              id: 1,
              question: "What does the slice expression s[::-1] achieve on any Python string s?",
              options: [
                "Extracts the first and last characters only",
                "Returns a reversed copy of the string",
                "Deletes all negative index positions",
                "Raises an IndexError"
              ],
              correctAnswer: 1,
              explanation: "Slice syntax s[start:stop:step] with step=-1 iterates backwards from end to beginning, reversing the sequence."
            },
            {
              id: 2,
              question: "What does it mean that Python strings are 'immutable'?",
              options: [
                "Strings cannot contain numbers or special characters",
                "Once a string object is allocated in memory, its characters cannot be modified or replaced in-place",
                "Strings cannot be passed as arguments to functions",
                "Strings cannot be concatenated"
              ],
              correctAnswer: 1,
              explanation: "String immutability means individual characters cannot be changed in-place (s[0] = 'X' fails). Modifications always create new strings in memory."
            },
            {
              id: 3,
              question: "What value is returned by s.find('needle') if 'needle' is NOT present in string s?",
              options: [
                "False",
                "0",
                "-1",
                "Raises a ValueError"
              ],
              correctAnswer: 2,
              explanation: "The str.find() method returns -1 when the substring is not found, unlike str.index() which raises a ValueError."
            },
            {
              id: 4,
              question: "What is the primary function of the str.rstrip() method during text file processing?",
              options: [
                "Removes all numbers from the right side of the string",
                "Strips trailing whitespace, carriage returns (\\r), and newline characters (\\n) from the end of a line",
                "Reverses the right half of the string",
                "Truncates string length to 80 characters"
              ],
              correctAnswer: 1,
              explanation: "rstrip() removes trailing whitespace and newlines, preventing double-spacing when printing lines read from files."
            },
            {
              id: 5,
              question: "In Python f-strings, what formatting specifier formats a floating-point number with exactly 2 decimal places?",
              options: [
                "f\"{val:2d}\"",
                "f\"{val:.2f}\"",
                "f\"{val:%2}\"",
                "f\"{val:round2}\""
              ],
              correctAnswer: 1,
              explanation: ":.2f inside an f-string expression specifies floating-point presentation rounded to 2 digits after the decimal point."
            }
          ]
        }
      },
      {
        id: "py-mod-9",
        title: "Module 09 — File Handling & Persistence",
        description: "Secondary memory persistence, file handles (open), line-by-line streaming, searching & filtering log files, safe writing/appending, context managers (with open), and pathlib integration.",
        completed: true,
        readingMaterial: {
          introduction: `All computer programs operate across two primary memory tiers: volatile Main Memory (RAM), which is fast but instantly erased when a script finishes or power cuts out, and non-volatile Secondary Memory (Solid-State Drives, Hard Drives, and Cloud Storage), where information persists indefinitely. In modern software engineering—from web applications logging user transactions to data science pipelines processing multi-gigabyte telemetry datasets—reading and writing files is the fundamental bridge between transient computation and permanent data persistence.

In Python, file handling is engineered around an elegant, stream-based abstraction known as a 'File Handle'. Rather than attempting to copy an entire massive file directly into system RAM, Python establishes a lightweight pointer to the operating system's disk buffer. This stream architecture enables programmers to iterate line-by-line across files of arbitrary size—even those exceeding physical computer memory—with constant O(1) space complexity.

Based on Chapter 7 of Dr. Charles Severance's 'Python for Everybody' and modern Python 3 best practices, this module provides an exhaustive, production-grade guide to text and structured file manipulation: understanding character encoding standards (UTF-8 vs ASCII vs Latin-1), mastering open modes ('r', 'w', 'a', 'x'), avoiding resource leaks via context managers (with open), filtering server log streams (mbox format), sanitizing whitespace and newlines, implementing atomic write operations, and navigating modern object-oriented file systems using pathlib.`,
          objectives: [
            "Distinguish between volatile main memory (RAM) and non-volatile secondary storage (disk persistence).",
            "Explain the role of file handles as operating system stream cursors with constant O(1) memory overhead.",
            "Open files safely using open() with explicit mode flags ('r', 'w', 'a', 'x') and UTF-8 encoding declarations.",
            "Compare reading techniques: file.read(), file.readline(), file.readlines(), and the memory-efficient line iterator.",
            "Sanitize trailing newline characters (\\n, \\r\\n) cleanly using rstrip() to eliminate double-spaced outputs.",
            "Filter, search, and extract structured metrics from large log files (e.g. MBOX headers, spam confidence floats).",
            "Safely write and append textual data without unintended file truncation or data destruction.",
            "Implement the 'with open(...) as f:' context manager pattern to guarantee deterministic file closure.",
            "Handle critical file system exceptions robustly: FileNotFoundError, PermissionError, and UnicodeDecodeError.",
            "Process delimited tabular records (CSV / TSV) and utilize the modern object-oriented pathlib library."
          ],
          sections: [
            {
              heading: "1. Memory Architecture: Volatile RAM vs. Persistent Storage",
              text: `To understand file handling, you must first understand the fundamental computer hardware hierarchy:

1. Central Processing Unit (CPU):
The CPU executes instructions at billions of cycles per second. However, it possesses virtually no internal storage besides tiny, ultra-fast registers and CPU caches.

2. Main Memory (RAM - Random Access Memory):
Variables, lists, dictionaries, and active objects live inside RAM. While RAM provides lightning-fast nanosecond read/write access, it is strictly volatile. The moment your Python script terminates, crashes, or the computer shuts down, all memory addresses allocated to your variables are reclaimed by the operating system.

3. Secondary Memory (SSD / HDD / Cloud Storage):
Secondary storage is non-volatile. Files stored on disk retain their exact byte sequences indefinitely. Disk access is slower than RAM (measured in microseconds or milliseconds rather than nanoseconds), but provides virtually unlimited, inexpensive permanent storage.

File processing is the deliberate, controlled pipeline of reading byte sequences from persistent secondary memory into temporary RAM for computation, and writing computed results back to secondary storage for permanent archival.`
            },
            {
              heading: "2. The File Handle: Python's Gateway to the Operating System",
              text: `When you call Python's built-in open() function, Python does not instantly read the entire file into RAM. Instead, it asks the host operating system (Windows, Linux, or macOS) to locate the file on disk, verify permissions, and return a stream pointer called a 'File Handle'.

Syntax:
file_handle = open(filename, mode='r', encoding='utf-8')

Key Components of a File Handle:
• File Cursor: An internal pointer tracking the exact byte position where the next read or write operation will begin.
• I/O Buffer: A small chunk of memory managed by the OS that batches disk reads and writes for high performance.
• Encoding Translator: Decodes raw binary bytes from disk into human-readable Unicode Python string objects.

If Python successfully finds and opens the file, it returns a _io.TextIOWrapper object. If the file cannot be found in the specified path, Python halts execution and raises a FileNotFoundError.`
            },
            {
              heading: "3. Text Files vs. Binary Files & Character Encoding (UTF-8)",
              text: `At the physical storage level, all files are simply sequences of binary bits (0s and 1s). The distinction between file types lies in how those bytes are interpreted:

1. Text Files (.txt, .py, .csv, .json, .log, .md):
A text file is a sequence of characters organized into lines. Each character is encoded into bytes using a standardized encoding scheme. In modern computing, UTF-8 (Unicode Transformation Format - 8 bit) is the global standard, capable of representing every character across English, Greek, Cyrillic, Chinese, Arabic, emojis, and mathematical symbols.

Always specify encoding='utf-8' when opening text files to prevent cross-platform encoding errors (such as Windows defaulting to cp1252 while Linux defaults to UTF-8).

2. Binary Files (.jpg, .png, .mp3, .pdf, .zip, .exe):
Binary files store raw non-text byte streams intended for specific software interpreters (e.g. image decoders or audio players). Opening a binary file in text mode causes decoding exceptions. Binary mode is declared by appending 'b' to the mode string (e.g. 'rb' or 'wb').

3. The Newline Character Convention:
Lines in text files end with an invisible newline marker. Across operating systems:
• Linux / macOS: Uses \n (Line Feed, ASCII 10).
• Windows: Uses \r\n (Carriage Return + Line Feed, ASCII 13 + ASCII 10).
Python's universal newline mode automatically translates OS-specific line breaks into standard \n during text reading.`
            },
            {
              heading: "4. File Opening Modes Reference & Cheat Sheet",
              text: `The mode argument in open() determines what operations are permitted and where the file cursor begins:`,
              table: {
                headers: ["Mode Flag","Operations Allowed","Cursor Starting Position","If File Does Not Exist","If File Already Exists"],
                rows: [
                  ["'r' (Read)","Read only","Beginning of file (byte 0)","Raises FileNotFoundError","Preserves existing contents"],
                  ["'w' (Write)","Write only","Beginning of file (byte 0)","Creates new empty file","TRUNCATES (erases all data instantly)"],
                  ["'a' (Append)","Write only","End of file (EOF)","Creates new empty file","Appends new data to the end"],
                  ["'x' (Exclusive)","Write only","Beginning of file (byte 0)","Creates new empty file","Raises FileExistsError (safety mode)"],
                  ["'r+' (Read/Write)","Read and Write","Beginning of file (byte 0)","Raises FileNotFoundError","Overwrites byte-by-byte without truncation"],
                  ["'w+' (Write/Read)","Write and Read","Beginning of file (byte 0)","Creates new empty file","TRUNCATES existing file immediately"],
                  ["'a+' (Append/Read)","Append and Read","End of file (EOF)","Creates new empty file","Appends new writes, can seek to read"],
                  ["'rb' / 'wb'","Raw Binary I/O","Start of file","Same as text equivalent","Operates on raw bytes objects, not strings"]
                ]
              }
            },
            {
              heading: "5. Reading Strategies & Memory Economics: Four Different Approaches",
              text: `Python provides four primary ways to read data from a file handle. Choosing the appropriate method is critical for performance and memory stability:

1. The Line-by-Line Iterator: for line in file_handle: (RECOMMENDED)
Python handles files as iterable streams. This approach reads exactly one line at a time into memory, processes it, discards it, and fetches the next line.
• Time Complexity: O(N) where N is file size.
• Space Complexity: O(1) auxiliary RAM.
• Best For: All files, especially large production logs (500MB to 50GB+) where loading the entire file would crash the server with an OutOfMemory (OOM) error.

2. file.read():
Reads the entire file contents from the cursor to the end into a single giant Python string.
• Space Complexity: O(N) RAM.
• Best For: Small configuration files (.json, .yaml, .ini, short templates) where you need to search or replace text globally.

3. file.readline():
Reads a single line from the current cursor up to and including the next newline character (\n). Returns an empty string ('') when reaching End of File (EOF).
• Best For: Header inspection (reading line 1 of a CSV to discover column headers).

4. file.readlines():
Reads every line into memory at once and returns a Python list of strings: ['line 1\n', 'line 2\n', ...].
• Space Complexity: O(N) RAM.
• Best For: When you need random access to lines by index (e.g. lines[42]), but dangerous on large files.`
            },
            {
              heading: "6. Whitespace Sanitation & The Double Newline Trap",
              text: `One of the most frequent beginner bugs in file handling is accidental double-spaced terminal output.

Why Double Spacing Occurs:
When Python reads a file line-by-line, each string already includes the invisible trailing newline character (\n) stored on disk.
When you pass that line to print():
print(line)
The print() function automatically appends its own newline character at the end (end='\n' by default). Consequently, your terminal displays two consecutive newlines: one from the file, and one from print().

The Solution: line.rstrip()
The string method rstrip() strips whitespace—including spaces, tabs, and newlines—from the right-hand tail of the string:

for line in fhand:
    clean_line = line.rstrip()
    print(clean_line)

Alternative:
print(line, end='')`
            },
            {
              heading: "7. Searching, Filtering & Log Parsing Patterns (MBOX Protocol)",
              text: `A core workload in backend engineering is parsing server telemetry and email mailboxes. The Unix MBOX format stores thousands of messages in a single continuous text file where each new message begins with the prefix 'From '.

Pattern 1: The 'StartsWith' Filter
Process only lines that start with a specific header prefix:
for line in fhand:
    line = line.rstrip()
    if line.startswith('From:'):
        print(line)

Pattern 2: The 'Skip Uninteresting Lines' (continue) Pattern
Writing deeply nested if blocks makes code unreadable. In production, flip the logic to skip lines immediately using continue:
for line in fhand:
    line = line.rstrip()
    if not line.startswith('From:'):
        continue
    # Process interesting lines cleanly at top indentation level
    pieces = line.split()
    email = pieces[1]
    print(email)

Pattern 3: Header Extraction & Conversion
Searching for floating-point metrics (e.g. spam confidence headers in email servers):
# Line format: 'X-DSPAM-Confidence: 0.8475'
for line in fhand:
    if line.startswith('X-DSPAM-Confidence:'):
        col_pos = line.find(':')
        num_str = line[col_pos + 1:].strip()
        confidence = float(num_str)`
            },
            {
              heading: "8. Writing and Appending Files: Best Practices & Truncation Risks",
              text: `Writing files in Python requires caution. Understanding mode behavior prevents accidental data loss:

1. The Write Mode ('w') Truncation Warning:
Opening an existing file in 'w' mode instantly wipes out all existing contents on disk before you even issue a write command! If you need to keep existing data, never use 'w'.

2. The Append Mode ('a'):
Mode 'a' moves the cursor to the end of the file. New write statements append text onto the bottom of the existing content without modifying earlier lines.

3. The Exclusive Creation Mode ('x'):
Mode 'x' safely creates a new file. If a file with the given name already exists, Python immediately raises FileExistsError instead of overwriting it. This is essential for audit logs, invoices, and transaction ledgers.

4. Manual Newline Responsibility:
Unlike print(), the file.write() method does NOT automatically add a newline character to the end of the string. You must explicitly append '\n':
fout.write("First line of record\n")
fout.write("Second line of record\n")

5. Buffer Flushing (flush()):
For performance, Python buffers write operations in RAM before committing them to physical disk. Closing the file automatically flushes the buffer. You can force immediate OS synchronization using fout.flush().`
            },
            {
              heading: "9. Deterministic Resource Management: The 'with open' Context Manager",
              text: `Operating systems enforce strict limits on the number of simultaneous open file descriptors (typically 1024 or 4096 per process). If a program repeatedly opens files without closing them (a 'file descriptor leak'), the operating system eventually blocks the program from opening any more files, causing server outages.

The Old Way (Error-Prone):
f = open('data.txt', 'r')
data = f.read()
# If an exception occurs here, f.close() is NEVER reached!
f.close()

The Robust Production Standard: The with Statement
Python 2.5 introduced the 'with' statement (Context Manager protocol). A context manager guarantees that regardless of how execution leaves the block—whether through normal completion, a return statement, or an unexpected exception—Python automatically calls the file's __exit__() method and cleanly closes the file handle.

Syntax:
with open('data.txt', 'r', encoding='utf-8') as f:
    for line in f:
        print(line.rstrip())

# Outside the block: f.closed is guaranteed to be True!`
            },
            {
              heading: "10. Robust Exception Handling for File Operations",
              text: `Real-world file systems are unpredictable: disks fill up, users provide invalid file names, files are locked by other processes, or network shares disconnect. Production software must catch expected I/O exceptions gracefully:

1. FileNotFoundError:
Raised when the target file path cannot be resolved. Always prompt the user or fall back to sensible defaults.

2. PermissionError:
Raised when the operating system denies access (e.g. attempting to write to a read-only directory or read a file owned by root/administrator).

3. UnicodeDecodeError:
Raised when a file encoded in Latin-1 or Shift-JIS contains byte sequences that are invalid under the requested UTF-8 decoder. Handled by verifying encoding or using errors='replace'.

4. IsADirectoryError:
Raised when code attempts to open a folder path as if it were a text file.`
            },
            {
              heading: "11. Modern File System Navigation with pathlib.Path",
              text: `Historically, Python programmers relied on the os and os.path modules, which treated paths as awkward raw strings with platform differences (e.g. backslashes '\\' on Windows vs forward slashes '/' on Unix).

Python 3.4+ introduced the pathlib module, which treats file system paths as rich, cross-platform objects:

from pathlib import Path

# Create a path object (handles Windows/POSIX slashes automatically)
data_dir = Path('data') / 'reports'
file_path = data_dir / '2026_audit.log'

# Path introspection:
print(file_path.name)       # '2026_audit.log'
print(file_path.stem)       # '2026_audit'
print(file_path.suffix)     # '.log'
print(file_path.parent)     # 'data/reports'
print(file_path.exists())   # True or False
print(file_path.is_file())  # True or False

# Convenient reading & writing:
file_path.write_text("Audit record completed.", encoding='utf-8')
content = file_path.read_text(encoding='utf-8')`
            },
            {
              heading: "12. Processing Structured Delimited Files (CSV & TSV)",
              text: `Tabular business records are predominantly stored as Comma-Separated Values (.csv) or Tab-Separated Values (.tsv).

Manual Splitting Pattern:
with open('students.csv', 'r', encoding='utf-8') as f:
    header = f.readline().rstrip().split(',')
    for line in f:
        row = line.rstrip().split(',')
        name, score, city = row[0], float(row[1]), row[2]

Standard Library csv Module:
When data fields contain commas inside quotation marks (e.g. "Sharma, Dr. Ananya"), naive split(',') breaks. Python's built-in csv module parses complex quoting rules flawlessly:

import csv

with open('employees.csv', mode='r', encoding='utf-8') as f:
    reader = csv.DictReader(f)  # Automatically maps headers to row dictionaries
    for row in reader:
        print(row['Name'], row['Department'], row['Salary'])`
            },
            {
              heading: "13. In-Memory Streams (io.StringIO) & Atomic Write Safety",
              text: `Two advanced file patterns frequently utilized in senior engineering roles:

1. In-Memory Text Streams with io.StringIO:
When writing unit tests or transforming text through pipelines that expect a file-like object, creating dummy files on disk creates slow disk I/O and messy cleanup. io.StringIO provides an in-memory buffer with the exact same API (read, write, seek) as a disk file:

import io

buffer = io.StringIO()
buffer.write("Temporary line 1\n")
buffer.write("Temporary line 2\n")
buffer.seek(0)
print(buffer.read())

2. Atomic File Writes (Preventing Partial File Corruption):
If a power failure or crash occurs halfway through writing a 10MB file in 'w' mode, the original file is already destroyed and the new file is truncated and corrupt.
The Atomic Write Pattern:
1. Write the new data to a temporary file (e.g. data.txt.tmp).
2. Ensure all data is flushed and synced to disk.
3. Use os.replace('data.txt.tmp', 'data.txt') to rename the file. On both Windows and POSIX, file renaming is an atomic operating system operation: the file either exists completely as old or completely as new, never half-written.`
            },
            {
              heading: "14. Big-O Complexity & Performance Analysis for File Operations",
              text: `Understanding computational resource consumption when handling external disk data:`,
              table: {
                headers: ["Operation","Time Complexity","Space (RAM) Complexity","System Bottleneck"],
                rows: [
                  ["for line in fhand: (Iterate N lines)","O(N) sequential scan","O(1) constant buffer RAM","Disk I/O throughput (SATA/NVMe)"],
                  ["fhand.read() (Entire file into str)","O(N) byte copy","O(N) string allocation","Physical RAM availability"],
                  ["fhand.readlines() (All lines to list)","O(N) parsing & pointer allocation","O(N) list & string overhead","RAM & Garbage Collector pressure"],
                  ["fhand.seek(byte_offset)","O(1) pointer relocation","O(1) zero allocation","OS file table metadata update"],
                  ["fhand.write(text_chunk)","O(K) where K is text length","O(K) buffer allocation","OS write-back cache & disk commit"],
                  ["pathlib.Path.glob('**/*.txt')","O(D) where D is directory tree size","O(M) matched path objects","Disk directory inode traversal"]
                ]
              }
            }
          ],
          codeExamples: [
            {
              title: "1. Safe File Reading with Memory-Efficient Line Streaming",
              code: `filename = "server_log.txt"

# Safe reading with context manager and UTF-8 encoding
try:
    with open(filename, mode="r", encoding="utf-8") as file:
        total_lines = 0
        total_chars = 0
        
        for line in file:
            total_lines += 1
            total_chars += len(line)
            # Process each line with O(1) auxiliary RAM
            clean_text = line.rstrip()
            if total_lines <= 3:
                print(f"Sample Line {total_lines}: {clean_text}")

        print(f"\nProcessed {total_lines} total lines ({total_chars} bytes).")

except FileNotFoundError:
    print(f"Error: The target file '{filename}' was not found.")
except PermissionError:
    print(f"Error: Access denied to read '{filename}'.")`,
              explanation: "Demonstrates memory-safe line iteration with O(1) RAM consumption and robust exception catching."
            },
            {
              title: "2. MBOX Log File Search & Domain Extraction (Python for Everybody)",
              code: `log_data = """From: stephen.marquard@uct.ac.za Sat Jan  5 09:14:16 2008
Return-Path: <postmaster@collab.sakaiproject.org>
From: louis@media.berkeley.edu Fri Jan  4 18:10:48 2008
Subject: [sakai] svn commit: r39772
From: zqian@umich.edu Fri Jan  4 16:10:39 2008
From: rjlowe@iupui.edu Fri Jan  4 15:46:24 2008"""

import io

# Simulate a server log file using an in-memory stream
log_stream = io.StringIO(log_data)

sender_count = 0
unique_domains = set()

for line in log_stream:
    line = line.rstrip()
    # Fast guard clause: skip uninteresting lines immediately
    if not line.startswith("From:"):
        continue

    # Extract sender email address
    parts = line.split()
    email = parts[1]
    sender_count += 1
    
    # Extract domain name using find/slice
    at_idx = email.find("@")
    domain = email[at_idx + 1:]
    unique_domains.add(domain)
    print(f"Sender #{sender_count}: {email} (Domain: {domain})")

print(f"\nTotal Senders: {sender_count}")
print(f"Unique Domains ({len(unique_domains)}): {sorted(unique_domains)}")`,
              explanation: "Illustrates the continue skip pattern and header extraction on Unix MBOX log structures."
            },
            {
              title: "3. Computing Spam Confidence Metrics (Numerical Parsing)",
              code: `mbox_sample = """From: source@collab.sakaiproject.org
X-DSPAM-Confidence: 0.8475
X-DSPAM-Probability: 0.0000
From: source@collab.sakaiproject.org
X-DSPAM-Confidence: 0.6178
From: source@collab.sakaiproject.org
X-DSPAM-Confidence: 0.6961
From: source@collab.sakaiproject.org
X-DSPAM-Confidence: 0.7565"""

import io

stream = io.StringIO(mbox_sample)

confidence_total = 0.0
record_count = 0

for line in stream:
    line = line.rstrip()
    if line.startswith("X-DSPAM-Confidence:"):
        # Extract number following colon
        _, value_str = line.split(":")
        confidence_val = float(value_str.strip())
        
        confidence_total += confidence_val
        record_count += 1

if record_count > 0:
    avg_confidence = confidence_total / record_count
    print(f"Processed Records: {record_count}")
    print(f"Total Sum: {confidence_total:.4f}")
    print(f"Average Spam Confidence: {avg_confidence:.6f}")
else:
    print("No valid spam confidence records discovered.")`,
              explanation: "Presents the classic Python for Everybody Chapter 7 parsing pattern for numerical float extraction."
            },
            {
              title: "4. Writing & Appending Logs with Context Managers",
              code: `audit_log = "application_audit.log"

# Step 1: Write header and initial entries (mode 'w' creates/overwrites)
with open(audit_log, mode="w", encoding="utf-8") as f:
    f.write("TIMESTAMP | SEVERITY | EVENT_DESCRIPTION\n")
    f.write("2026-10-03T12:00:00Z | INFO | System boot initialized\n")
    f.write("2026-10-03T12:00:02Z | INFO | Database connection verified\n")

# Step 2: Append new event without overwriting existing data (mode 'a')
with open(audit_log, mode="a", encoding="utf-8") as f:
    f.write("2026-10-03T12:00:05Z | WARN | High CPU load detected on node 4\n")
    f.write("2026-10-03T12:00:09Z | INFO | Memory garbage collection triggered\n")

# Step 3: Verify results by reading
with open(audit_log, mode="r", encoding="utf-8") as f:
    print(f.read())`,
              explanation: "Contrasts write mode 'w' creation with append mode 'a' addition and highlights explicit \\n appending."
            },
            {
              title: "5. Processing Structured CSV Records with the csv Module",
              code: `import csv
import io

raw_csv = """EmployeeID,Name,Department,Salary,Rating
E101,"Sharma, Ananya",Engineering,95000,4.9
E102,"Kumar, Rahul",Analytics,82000,4.7
E103,"Verma, Priya",Engineering,105000,4.95
E104,"Joseph, John",Marketing,71000,4.2"""

# Read with DictReader
csv_stream = io.StringIO(raw_csv)
reader = csv.DictReader(csv_stream)

dept_totals = {}
dept_counts = {}

print(f"{'Name':<20} | {'Department':<14} | {'Salary':>10}")
print("-" * 50)

for row in reader:
    name = row['Name']
    dept = row['Department']
    salary = float(row['Salary'])
    
    print(f"{name:<20} | {dept:<14} | " + f"{salary:>10.2f}")
    
    dept_totals[dept] = dept_totals.get(dept, 0.0) + salary
    dept_counts[dept] = dept_counts.get(dept, 0) + 1

print("\n--- Department Averages ---")
for dept, total in dept_totals.items():
    avg = total / dept_counts[dept]
    print(f"{dept:<14}: " + f"{avg:>10.2f} (Employees: {dept_counts[dept]})")`,
              explanation: "Demonstrates standard library csv.DictReader handling embedded quotes and calculating group aggregates."
            },
            {
              title: "6. Modern File Path Operations with pathlib.Path",
              code: `from pathlib import Path

# Create path references safely across Windows, Linux, and macOS
project_root = Path.cwd()
config_file = project_root / "config" / "settings.json"

print(f"Path Representation: {config_file}")
print(f"File Name:           {config_file.name}")
print(f"File Extension:      {config_file.suffix}")
print(f"Stem (No Extension): {config_file.stem}")
print(f"Parent Directory:    {config_file.parent}")
print(f"Is Absolute Path:    {config_file.is_absolute()}")

# Check existence without try/except
if config_file.exists():
    print(f"File Size: {config_file.stat().st_size} bytes")
else:
    print("Target path does not exist on disk.")`,
              explanation: "Uses Python's modern pathlib module for clean, readable, cross-platform path arithmetic and metadata query."
            },
            {
              title: "7. The Atomic File Writer Pattern (Crash-Safe)",
              code: `import os
from pathlib import Path

def safe_atomic_write(target_path, content):
    path = Path(target_path)
    temp_path = path.with_suffix(".tmp")
    
    try:
        # Step 1: Write all content to temporary swap file
        with open(temp_path, mode="w", encoding="utf-8") as f:
            f.write(content)
            f.flush()
            os.fsync(f.fileno()) # Force hardware write
        
        # Step 2: Atomic rename (replaces target atomically)
        temp_path.replace(path)
        print(f"Atomic update succeeded for: {path.name}")
        return True
    except Exception as e:
        # Step 3: Cleanup temporary file if write failed
        if temp_path.exists():
            temp_path.unlink()
        print(f"Atomic update aborted due to: {e}")
        return False

# Demonstrate atomic write
safe_atomic_write("production_config.txt", "SERVER_HOST=127.0.0.1\nSERVER_PORT=8080\nDEBUG=False\n")`,
              explanation: "Implements production-grade atomic file replacement using temporary files and OS-level atomic rename."
            },
            {
              title: "8. Word & Character Frequency Analyzer on Text Streams",
              code: `sample_text = """Python is an easy to learn, powerful programming language.
Python has efficient high-level data structures and a simple but effective approach to object-oriented programming.
Python elegant syntax and dynamic typing, together with its interpreted nature, make it an ideal language."""

import io
from collections import Counter

stream = io.StringIO(sample_text)
word_counter = Counter()
total_lines = 0

for line in stream:
    total_lines += 1
    # Normalize case and strip punctuation
    clean_line = line.lower().replace(",", "").replace(".", "")
    words = clean_line.split()
    word_counter.update(words)

print(f"Total Lines Processed: {total_lines}")
print(f"Total Words Counted:   {sum(word_counter.values())}")
print(f"Unique Word Vocabulary: {len(word_counter)}\n")

print("Top 5 Most Frequent Words:")
for word, count in word_counter.most_common(5):
    print(f"  • {word:<15} : {count} times")`,
              explanation: "Combines text stream processing with collections.Counter for fast text frequency analytics."
            }
          ],
          bestPractices: [
            "Always declare encoding='utf-8' explicitly when opening text files to ensure cross-platform portability.",
            "Always manage files using the 'with open(...) as f:' context manager to eliminate file descriptor leaks.",
            "Iterate directly over file handles (for line in f:) rather than calling f.readlines() on unknown file sizes.",
            "Always strip trailing newline characters using line.rstrip() before processing or displaying lines.",
            "Handle FileNotFoundError, PermissionError, and UnicodeDecodeError with descriptive, helpful recovery messages.",
            "Never open files in write mode ('w') without verifying whether existing data needs to be preserved or backed up.",
            "Use mode 'x' (exclusive creation) when writing sensitive transactional files to prevent accidental overwrites.",
            "Use the modern pathlib.Path library instead of raw string concatenation or legacy os.path methods.",
            "Use the csv module (csv.reader, csv.DictReader) for delimited data to correctly handle quoted values containing commas.",
            "Apply atomic writing (writing to a .tmp file and renaming via os.replace) for critical persistent application state."
          ],
          commonMistakes: [
            "Forgetting to close files opened with plain f = open(), causing memory leaks and locked file handles on Windows.",
            "Assuming f.read() is safe on all files, causing server crashes (OutOfMemoryError) when reading multi-gigabyte datasets.",
            "Calling f.read() twice and expecting the second call to return data, forgetting that the file cursor is already at EOF.",
            "Accidentally opening a critical file with mode 'w', which instantly truncates and empties the entire file without confirmation.",
            "Forgetting that file.write() does not append newline characters, resulting in a single corrupted, mashed line of text.",
            "Failing to call line.rstrip() and wondering why terminal outputs are double-spaced.",
            "Assuming backslashes in Windows file paths ('C:\\\\data\\\\new.txt') work as literals, where '\\n' is interpreted as a newline escape.",
            "Not catching FileNotFoundError when prompting users for file paths, leading to unhandled crashes."
          ],
          practiceExercise: {
            title: "Module 09 Hands-On Laboratory: Enterprise Log Parsing & File Persistence",
            problem: `Complete the following 8 comprehensive hands-on file handling challenges:

1. Safe File Reader with Statistics:
Write a program that safely prompts for a filename, opens it with UTF-8 encoding, and prints the total number of lines, total word count, and average characters per line. Handle FileNotFoundError gracefully.

2. MBOX Senders & Domain Aggregator:
Read through an MBOX-format log stream, identify all lines starting with 'From:', extract the email address, and calculate the frequency count of each unique email domain.

3. Spam Confidence Metric Calculator & Threshold Filter:
Parse all lines starting with 'X-DSPAM-Confidence:'. Extract the floating-point values, calculate the minimum, maximum, and average confidence, and identify all lines where spam confidence exceeds 0.8500.

4. Formatted CSV Data Transformer:
Given a comma-delimited record of student grades, read each row using csv.DictReader, compute each student's weighted average, and write an output file 'honors_students.csv' containing only students with averages >= 85.0.

5. Search & Replace Batch Processor:
Write a function that accepts an input filename, an output filename, a target search string, and a replacement string. Stream through the input file line-by-line and write the transformed text to the output file without loading the whole file into RAM.

6. Text File Word Frequency & Stop-Word Stripper:
Read a text document, filter out common English stop words ('the', 'is', 'at', 'which', 'on', 'and', 'a', 'an'), and output the top 10 most informative words alongside their percentage frequency.

7. Atomic Configuration Manager:
Implement a class or function that safely updates an application JSON or text configuration file using the atomic write pattern (.tmp file -> flush -> replace) to guarantee fault tolerance against process crashes.

8. Directory Tree Inventory & Disk Usage Auditor:
Using pathlib.Path, scan a target directory recursively (rglob), catalog all files by extension (.py, .txt, .csv, .log), and report the file count and total disk usage in megabytes per file extension.`,
            solutionCode: `import io
import os
import csv
from pathlib import Path
from collections import Counter

# ==============================================================================
# Challenge 1: Safe File Reader with Line, Word & Character Statistics
# ==============================================================================
def analyze_file_statistics(file_stream):
    total_lines = 0
    total_words = 0
    total_chars = 0

    for line in file_stream:
        total_lines += 1
        total_chars += len(line)
        words = line.split()
        total_words += len(words)

    avg_chars = (total_chars / total_lines) if total_lines > 0 else 0
    return {
        "lines": total_lines,
        "words": total_words,
        "characters": total_chars,
        "avg_chars_per_line": round(avg_chars, 2)
    }

sample_doc = """Python is a high-level programming language designed for readability.
File handling in Python connects persistent secondary storage with memory.
Context managers guarantee that operating system resources are released cleanly."""

stats = analyze_file_statistics(io.StringIO(sample_doc))
print("Challenge 1 - File Statistics:")
for k, v in stats.items():
    print(f"  {k:<20}: {v}")


# ==============================================================================
# Challenge 2: MBOX Senders & Domain Aggregator
# ==============================================================================
sample_mbox = """From stephen.marquard@uct.ac.za Sat Jan  5 09:14:16 2008
From: louis@media.berkeley.edu Fri Jan  4 18:10:48 2008
From: zqian@umich.edu Fri Jan  4 16:10:39 2008
From: rjlowe@iupui.edu Fri Jan  4 15:46:24 2008
From: csev@umich.edu Fri Jan  4 15:03:11 2008
From: gsilver@umich.edu Fri Jan  4 11:11:52 2008"""

def aggregate_mbox_domains(mbox_stream):
    domain_counter = Counter()
    
    for line in mbox_stream:
        line = line.rstrip()
        # Filter for lines starting with 'From:'
        if not line.startswith("From:"):
            continue
        
        parts = line.split()
        if len(parts) >= 2:
            email = parts[1]
            if "@" in email:
                domain = email.split("@")[1]
                domain_counter[domain] += 1
                
    return domain_counter

domains = aggregate_mbox_domains(io.StringIO(sample_mbox))
print("\nChallenge 2 - MBOX Email Domains:")
for domain, count in domains.most_common():
    print(f"  Domain: {domain:<25} Count: {count}")


# ==============================================================================
# Challenge 3: Spam Confidence Metric Calculator & Threshold Filter
# ==============================================================================
sample_spam_data = """X-DSPAM-Confidence: 0.8475
X-DSPAM-Probability: 0.0000
X-DSPAM-Confidence: 0.6178
X-DSPAM-Confidence: 0.8920
X-DSPAM-Confidence: 0.9234
X-DSPAM-Confidence: 0.7565"""

def calculate_spam_metrics(stream, threshold=0.8500):
    confidences = []
    
    for line in stream:
        line = line.rstrip()
        if line.startswith("X-DSPAM-Confidence:"):
            try:
                val = float(line.split(":")[1].strip())
                confidences.append(val)
            except ValueError:
                continue
                
    if not confidences:
        return None
        
    high_spam = [c for c in confidences if c >= threshold]
    return {
        "count": len(confidences),
        "total": sum(confidences),
        "min": min(confidences),
        "max": max(confidences),
        "average": sum(confidences) / len(confidences),
        "high_spam_count": len(high_spam)
    }

spam_results = calculate_spam_metrics(io.StringIO(sample_spam_data), 0.8500)
print("\nChallenge 3 - Spam Confidence Metrics:")
print(f"  Total Records: {spam_results['count']}")
print(f"  Average Score: {spam_results['average']:.4f}")
print(f"  Min / Max:     {spam_results['min']:.4f} / {spam_results['max']:.4f}")
print(f"  Critical Spam (>= 0.85): {spam_results['high_spam_count']} detected")


# ==============================================================================
# Challenge 4: Formatted CSV Data Transformer & Honor Roll Filter
# ==============================================================================
raw_students_csv = """StudentID,Name,Midterm,Final,Projects
1001,"Sharma, Ananya",88,94,96
1002,"Patel, Rohan",72,68,75
1003,"Verma, Priya",95,92,98
1004,"Joseph, John",82,85,89"""

def generate_honors_report(input_csv_stream):
    reader = csv.DictReader(input_csv_stream)
    output_buffer = io.StringIO()
    writer = csv.writer(output_buffer)
    writer.writerow(["StudentID", "Name", "WeightedAverage", "Status"])
    
    honors_count = 0
    for row in reader:
        # Midterm 30%, Final 40%, Projects 30%
        midterm = float(row["Midterm"])
        final = float(row["Final"])
        projects = float(row["Projects"])
        weighted_avg = (midterm * 0.30) + (final * 0.40) + (projects * 0.30)
        
        if weighted_avg >= 85.0:
            writer.writerow([row["StudentID"], row["Name"], f"{weighted_avg:.2f}", "Honors"])
            honors_count += 1
            
    output_buffer.seek(0)
    return honors_count, output_buffer.getvalue()

count, report = generate_honors_report(io.StringIO(raw_students_csv))
print(f"\nChallenge 4 - Honors Students Generated ({count} Qualified):")
print(report.strip())


# ==============================================================================
# Challenge 5: Search & Replace Streaming Batch Processor
# ==============================================================================
def stream_search_and_replace(input_stream, output_stream, search_str, replace_str):
    replacements_made = 0
    for line in input_stream:
        occurrences = line.count(search_str)
        if occurrences > 0:
            replacements_made += occurrences
            line = line.replace(search_str, replace_str)
        output_stream.write(line)
    return replacements_made

source_text = """SERVER_URL = http://dev.arshithbootcamp.internal
DATABASE_HOST = http://dev.arshithbootcamp.internal:5432
API_ENDPOINT = http://dev.arshithbootcamp.internal/v1/auth"""

in_stream = io.StringIO(source_text)
out_stream = io.StringIO()

rep_count = stream_search_and_replace(in_stream, out_stream, "http://dev.arshithbootcamp.internal", "https://api.arshithgroup.com")
print(f"\nChallenge 5 - Stream Replacement ({rep_count} replaced):")
print(out_stream.getvalue().strip())


# ==============================================================================
# Challenge 6: Text File Word Frequency with Stop-Word Removal
# ==============================================================================
STOP_WORDS = {"the", "is", "at", "which", "on", "and", "a", "an", "to", "in", "it", "with", "for", "of"}

def compute_meaningful_word_frequency(text_stream, top_n=5):
    counter = Counter()
    total_words = 0
    
    for line in text_stream:
        clean = line.lower()
        for punct in ",.-;:!?\"'()":
            clean = clean.replace(punct, " ")
        words = clean.split()
        for w in words:
            total_words += 1
            if w not in STOP_WORDS and len(w) > 2:
                counter[w] += 1
                
    results = []
    for word, cnt in counter.most_common(top_n):
        pct = (cnt / total_words) * 100 if total_words > 0 else 0
        results.append((word, cnt, round(pct, 2)))
    return results

raw_notes = """Python is an interpreted high-level general-purpose programming language.
Python dynamic typing and garbage collection support multiple programming paradigms.
The language is designed with an emphasis on code readability and clean syntax."""

top_words = compute_meaningful_word_frequency(io.StringIO(raw_notes), top_n=5)
print("\nChallenge 6 - Top Informative Words (Stop-words removed):")
for word, cnt, pct in top_words:
    print(f"  • {word:<15}: {cnt} occurrences ({pct}% of corpus)")


# ==============================================================================
# Challenge 7: Atomic Configuration Manager
# ==============================================================================
class AtomicConfigManager:
    def __init__(self, filepath):
        self.path = Path(filepath)
        
    def write_config(self, key_values):
        temp_path = self.path.with_suffix(".tmp")
        try:
            with open(temp_path, "w", encoding="utf-8") as f:
                for k, v in key_values.items():
                    f.write(f"{k}={v}\n")
                f.flush()
                os.fsync(f.fileno())
            temp_path.replace(self.path)
            return True
        except Exception as e:
            if temp_path.exists():
                temp_path.unlink()
            return False

cfg_mgr = AtomicConfigManager("scratch_app.cfg")
success = cfg_mgr.write_config({"PORT": 8080, "ENV": "production", "WORKERS": 4})
print(f"\nChallenge 7 - Atomic Config Save Status: {'Success' if success else 'Failed'}")
if Path("scratch_app.cfg").exists():
    Path("scratch_app.cfg").unlink() # Cleanup demo file


# ==============================================================================
# Challenge 8: Directory Tree Inventory & Disk Usage Auditor (pathlib)
# ==============================================================================
def audit_directory_inventory(directory_path):
    root = Path(directory_path)
    extension_counts = Counter()
    extension_bytes = Counter()
    
    if not root.exists():
        return None
        
    for p in root.rglob("*"):
        if p.is_file():
            ext = p.suffix.lower() if p.suffix else "[no-ext]"
            extension_counts[ext] += 1
            extension_bytes[ext] += p.stat().st_size
            
    summary = []
    for ext, count in extension_counts.most_common():
        kb = extension_bytes[ext] / 1024
        summary.append((ext, count, round(kb, 2)))
    return summary

inventory = audit_directory_inventory(".")
print("\nChallenge 8 - Workspace File Inventory:")
if inventory:
    for ext, count, kb in inventory[:6]:
        print(f"  {ext:<12}: {count:>4} files ({kb:>8.2f} KB)")`
          },
          keyTakeaways: [
            "Secondary storage is non-volatile and persists data across program executions and power cycles.",
            "A file handle is an operating system stream pointer providing constant O(1) memory footprint during line iteration.",
            "Always declare encoding='utf-8' explicitly to prevent cross-platform text corruption.",
            "The 'with open(...) as f:' context manager guarantees deterministic file closure even when unhandled exceptions occur.",
            "Reading via 'for line in f:' processes multi-gigabyte files safely without memory overflow.",
            "Always apply line.rstrip() to strip invisible trailing newlines and prevent double-spaced output.",
            "Mode 'w' truncates existing files immediately; use 'a' for appending or 'x' for exclusive non-overwriting creation.",
            "Standard library tools (csv.DictReader, pathlib.Path, io.StringIO) provide high-performance, robust file workflows.",
            "Production systems use atomic file writes (.tmp + os.replace) to guard against mid-write corruption."
          ],
          references: [
            {"title":"Python for Everybody: Chapter 7 — Files","url":"https://www.py4e.com/html3/07-files"},
            {"title":"Python Documentation: Reading and Writing Files","url":"https://docs.python.org/3/tutorial/inputoutput.html#reading-and-writing-files"},
            {"title":"Python Documentation: pathlib — Object-oriented filesystem paths","url":"https://docs.python.org/3/library/pathlib.html"},
            {"title":"Python Documentation: csv — CSV File Reading and Writing","url":"https://docs.python.org/3/library/csv.html"},
            {"title":"Python Documentation: io — Core tools for working with streams","url":"https://docs.python.org/3/library/io.html"}
          ],
          mcqs: [
            {
              id: 1,
              question: "Why is iterating over a file with 'for line in f:' preferable to calling 'f.read()' on multi-gigabyte log files?",
              options: [
                "f.read() only works on Windows, not Linux",
                "The line iterator streams one line at a time with O(1) memory, while f.read() loads the entire file into RAM, risking memory crashes",
                "The line iterator automatically translates text into French",
                "for line in f: automatically encrypts file contents"
              ],
              correctAnswer: 1,
              explanation: "The line-by-line iterator operates as a stream with constant O(1) RAM footprint, processing files of arbitrary size safely."
            },
            {
              id: 2,
              question: "What dangerous side-effect occurs when opening an existing file with mode='w' in Python?",
              options: [
                "The file is locked permanently by the operating system",
                "The file is instantly truncated (all existing content is erased) before any write calls occur",
                "An exception is raised if the file is not empty",
                "The file is converted to a binary format"
              ],
              correctAnswer: 1,
              explanation: "Opening an existing file in 'w' mode immediately truncates its size to 0 bytes, erasing all existing contents on disk."
            },
            {
              id: 3,
              question: "What is the primary benefit of using the 'with open(...) as f:' context manager pattern?",
              options: [
                "It makes file read operations 10x faster",
                "It guarantees that the file handle is automatically closed when leaving the block, even if exceptions occur",
                "It bypasses operating system file permission checks",
                "It eliminates the need to specify character encoding"
              ],
              correctAnswer: 1,
              explanation: "Context managers guarantee deterministic resource cleanup by automatically calling __exit__() and closing the file descriptor."
            },
            {
              id: 4,
              question: "Which character encoding parameter should always be declared explicitly when opening text files in Python 3?",
              options: [
                "encoding='ascii'",
                "encoding='utf-8'",
                "encoding='latin-1'",
                "encoding='cp1252'"
              ],
              correctAnswer: 1,
              explanation: "Declaring encoding='utf-8' ensures cross-platform portability, preventing Windows default encoding mismatches on international text."
            },
            {
              id: 5,
              question: "How does the exclusive creation mode 'x' protect data compared to write mode 'w'?",
              options: [
                "Mode 'x' encrypts file data with a secret password",
                "Mode 'x' creates the file only if it does not already exist; if it exists, it raises a FileExistsError instead of overwriting",
                "Mode 'x' allows multiple processes to write to the file at the same time",
                "Mode 'x' deletes the file upon program exit"
              ],
              correctAnswer: 1,
              explanation: "Exclusive mode ('x') prevents accidental data destruction by failing with FileExistsError if a file with that name already exists."
            }
          ]
        }
      },
      {
        id: "py-mod-10",
        title: "Module 10 — Exception Handling & Debugging Strategies",
        description: "Advanced exception hierarchies, try/except/else/finally control flow, custom domain exceptions, exception chaining, traceback diagnostics, the logging module, and scientific debugging by bisection.",
        completed: true,
        readingMaterial: {
          introduction: `In software engineering, the distinction between novice scripting and production-grade programming lies in how a system handles the unexpected. Novice programs operate under the 'happy path' assumption—trusting that inputs are always clean, network connections never timeout, files always exist, and disk space is limitless. When real-world conditions violate these assumptions, unhandled exceptions trigger catastrophic process termination, leaving users with cryptic tracebacks and corrupted application state.

Professional software development treats exceptions not as disastrous failures, but as expected, normal execution branches. Python's exception handling system is engineered around the principle of 'Easier to Ask for Forgiveness than Permission' (EAFP), contrasting with the 'Look Before You Leap' (LBYL) style common in C and Java. Rather than evaluating dozens of defensive boolean conditions prior to every operation, Python encourages attempting the action inside a protected try block and handling domain-specific anomalies cleanly through explicit except handlers.

Based on Chapters 3, 7, and 14 of Dr. Charles Severance's 'Python for Everybody' and enterprise Python reliability standards, this module delivers an exhaustive masterclass in building resilient, fault-tolerant Python applications: mastering the complete four-part try/except/else/finally lifecycle, building custom application exception hierarchies, tracing call stacks with the traceback module, replacing ad-hoc print statements with industrial-grade logging, applying scientific debugging by bisection (O(log N) defect isolation), and utilizing modern interactive debugging with breakpoint() and pdb.`,
          objectives: [
            "Distinguish between compile-time Syntax Errors, runtime Exceptions, and silent Semantic Logic Bugs.",
            "Navigate the Python BaseException and Exception class hierarchy and avoid catastrophic exception swallowing.",
            "Master the complete execution semantics of try, except, else, and finally blocks.",
            "Capture exception instances (as err) and extract error diagnostics, arguments, and type metadata.",
            "Raise custom exceptions explicitly using raise and create domain-specific exception classes.",
            "Preserve original error root causes using exception chaining with 'raise ... from ...'.",
            "Read, interpret, and deconstruct multi-frame Python Traceback call stacks systematically.",
            "Configure the standard library logging module with severity levels (DEBUG through CRITICAL) and formatters.",
            "Apply the scientific method of 'Debugging by Bisection' to locate bugs in large codebases in O(log N) iterations.",
            "Inspect running program state interactively using breakpoint() and the Python debugger (pdb)."
          ],
          sections: [
            {
              heading: "1. The Anatomy of Software Defects: Syntax, Runtime & Semantic Errors",
              text: `Every software bug falls into one of three distinct categories, each requiring different detection and resolution strategies:

1. Syntax Errors (Compile-Time / Parsing Errors):
Occur when source code violates Python's formal grammar rules (missing colons, mismatched parentheses, invalid indentation, unclosed quotes).
• When Detected: Prior to execution, while the Python parser is compiling source code into bytecode.
• Characteristic: No line of code is executed. Python halts immediately with a SyntaxError pointing to the token where parsing failed.

2. Runtime Exceptions (Execution-Time Errors):
The syntax is mathematically valid, but the Python virtual machine encounters an impossible or illegal operation during execution (e.g. dividing by zero, accessing an out-of-bounds list index, opening a missing file, or dereferencing a non-existent dictionary key).
• When Detected: During live program execution.
• Characteristic: Without protective try/except blocks, Python aborts execution and emits a Traceback.

3. Semantic / Logic Errors (Silent Flaws):
The program compiles perfectly and runs without crashing or throwing any exceptions, but produces incorrect outputs or behaves unpredictably (e.g. calculating gross margin using (revenue + cost) instead of (revenue - cost), off-by-one loop indexing, or mutating shared mutable default arguments).
• When Detected: Through unit testing, code review, or user complaints.
• Characteristic: The hardest bugs to diagnose because the Python interpreter cannot help you identify them.`
            },
            {
              heading: "2. The Python Exception Hierarchy & The Bare 'except:' Anti-Pattern",
              text: `All Python exceptions are organized in an object-oriented inheritance tree rooted at BaseException. Understanding this hierarchy is paramount for writing safe error-handling code:

BaseException
 ├── SystemExit (Triggered by sys.exit(); should NEVER be caught in normal code)
 ├── KeyboardInterrupt (Triggered when the user hits Ctrl+C to stop a program)
 ├── GeneratorExit
 └── Exception (The root class for all regular runtime errors)
      ├── ArithmeticError (ZeroDivisionError, OverflowError)
      ├── LookupError (IndexError, KeyError)
      ├── ValueError (Invalid argument value, e.g. int('hello'))
      ├── TypeError (Operation on inappropriate data type)
      ├── OSError (FileNotFoundError, PermissionError, ConnectionError)
      └── ... user-defined custom exceptions

The Disastrous 'Bare except:' Anti-Pattern:
Never write:
try:
    process_data()
except: # BARE EXCEPT - DANGEROUS!
    pass

Why Bare except: is catastrophic:
1. It catches BaseException, meaning if the user presses Ctrl+C to terminate your script, Python traps the KeyboardInterrupt and refuses to stop!
2. It swallows typing mistakes (e.g. NameError if you mistype a variable name as priint instead of print), completely masking defects and creating 'ghost bugs' that take days to isolate.

Always catch specific exception classes (e.g. except (ValueError, KeyError):) or at maximum except Exception as e:.`
            },
            {
              heading: "3. Complete Lifecycle of try, except, else & finally",
              text: `Python provides a four-part control structure for exception management. Each clause serves a strictly defined operational purpose:

1. try Block:
Encloses only the specific statements that might raise an expected exception. Keep try blocks as compact as possible to prevent accidentally masking unrelated errors.

2. except Block(s):
Executes ONLY if an exception matching the declared type occurs inside the try block. Multiple except blocks can be chained to handle different error conditions independently.

3. else Block:
Executes ONLY if the try block completes successfully with ZERO exceptions raised.
• Why use else? Placing non-dangerous follow-up code inside else prevents accidentally catching exceptions raised by the follow-up code itself, maintaining clean separation of concerns.

4. finally Block:
Guaranteed to execute in 100% of execution scenarios, regardless of whether:
• The try block ran successfully,
• An expected exception was handled,
• An unhandled exception was raised,
• Or execution exited early via a return, break, or continue statement!
• Primary Use Case: Deterministic cleanup (closing network sockets, releasing database locks, or removing temporary files).`
            },
            {
              heading: "4. try-except-else-finally Execution Flow Matrix",
              text: `The interaction between the four blocks across different program states:`,
              table: {
                headers: ["Execution Scenario","try Runs?","except Runs?","else Runs?","finally Runs?","Script Continues?"],
                rows: [
                  ["No Exception Occurs","Yes (runs to end)","No (bypassed)","YES (executes)","YES (executes)","Yes (normal flow)"],
                  ["Caught Exception Raised","Yes (halts at error)","YES (matching handler)","No (bypassed)","YES (executes)","Yes (recovers smoothly)"],
                  ["Uncaught Exception Raised","Yes (halts at error)","No (no match)","No (bypassed)","YES (executes)","NO (crashes with traceback)"],
                  ["Early 'return' in try Block","Yes (hits return)","No (bypassed)","No (bypassed)","YES (executes before return)","Exits function with return value"],
                  ["Exception Inside except Block","Yes (halts at error)","Yes (halts at new error)","No (bypassed)","YES (executes)","NO (crashes with chained error)"]
                ]
              }
            },
            {
              heading: "5. Inspecting Exception Instances & Exception Arguments",
              text: `When catching an exception, capture the exception instance using the 'as' keyword:

try:
    val = int(user_input)
except ValueError as err:
    print(f"Exception Type: {type(err).__name__}")
    print(f"Error Message:  {err}")
    print(f"Error Args:     {err.args}")

Key Properties of Exception Instances:
• type(err).__name__: Returns the exact class name ('ValueError', 'KeyError', 'FileNotFoundError').
• str(err): Returns the human-readable explanation provided by the Python runtime.
• err.args: A tuple containing the parameters passed when the exception was instantiated.
• err.__traceback__: A reference to the traceback frame object representing the execution stack at the point of the error.`
            },
            {
              heading: "6. Raising Exceptions & Defining Custom Application Exceptions",
              text: `In addition to catching errors, robust code deliberately signals invalid states to callers by raising exceptions:

1. The raise Statement:
Use raise followed by an exception instance:
if withdraw_amount > balance:
    raise ValueError(f"Insufficient funds: requested {withdraw_amount}, available {balance}")

2. Creating Custom Exception Classes:
In enterprise systems, generic exceptions (like ValueError) are too ambiguous. Creating custom exception classes allows callers to catch domain-specific failures cleanly:

class BankingError(Exception):
    """Base exception for all banking operations."""
    pass

class InsufficientFundsError(BankingError):
    """Raised when an account does not have sufficient balance."""
    def __init__(self, requested, balance):
        super().__init__(f"Cannot withdraw {requested}; balance is only {balance}")
        self.requested = requested
        self.balance = balance

class AccountSuspendedError(BankingError):
    """Raised when attempting transactions on locked accounts."""
    pass`
            },
            {
              heading: "7. Exception Chaining & Root Cause Preservation (raise ... from)",
              text: `When writing higher-level abstraction layers (such as a database client or API wrapper), low-level errors (like socket.timeout or sqlite3.OperationalError) should often be converted into higher-level domain exceptions.

The Problem with Naive Re-raising:
If you catch an error and raise a new one naively, the original stack trace can become fragmented, obscuring the original root cause.

The Solution: Explicit Exception Chaining (raise ... from ...):
Python 3 provides the from keyword to link the original cause to the new exception:

try:
    raw_config = load_from_remote_s3(bucket, key)
except ConnectionError as net_err:
    raise ConfigurationLoadError("Failed to fetch production configuration") from net_err

Traceback Output:
Python displays:
The above exception was the direct cause of the following exception:
ConfigurationLoadError: Failed to fetch production configuration

Suppressing Context (from None):
If the low-level exception exposes sensitive internal details (like database passwords or internal IP addresses), suppress the inner traceback using from None:
raise AuthenticationFailed("Invalid credentials") from None`
            },
            {
              heading: "8. Reading and Deconstructing Python Tracebacks",
              text: `When an unhandled exception terminates a Python script, it outputs a Traceback. A traceback is a chronological reverse snapshot of the call stack:

Structure of a Traceback:
1. Header: 'Traceback (most recent call last):'
Indicates that the oldest call is at the top, and the actual point of failure is at the very bottom!

2. Call Stack Frames:
Each stack frame lists:
• File path: File "/var/app/billing.py"
• Line number: line 142
• Function or scope: in calculate_tax
• Source code snippet: return subtotal * tax_rates[country]

3. Final Error Banner:
The bottom-most line specifies the exact Exception Class and Error Message:
KeyError: 'CA'

How to Read a Traceback Systematically:
• Step 1: Look at the BOTTOM line first to identify WHAT went wrong (Exception type + message).
• Step 2: Scan upward to find the LAST file that YOU authored (ignoring third-party library internals).
• Step 3: Jump directly to that file and line number to inspect the offending statement.`
            },
            {
              heading: "9. Industrial-Grade Diagnostics: The logging Module vs. print()",
              text: `While beginner programmers rely heavily on print() for debugging, production applications require the standard library logging module.

Why print() Fails in Production:
• Cannot be disabled globally without manually removing or commenting out code.
• Outputs indiscriminately to stdout, mixing debug noise with legitimate program output.
• Lacks timestamps, module names, thread IDs, and severity classifications.
• Cannot be routed to log aggregation servers (Datadog, CloudWatch, Splunk) or rotated disk files.

The 5 Standard Logging Levels:
1. DEBUG (10): Detailed forensic diagnostics for developers during problem diagnosis.
2. INFO (20): Normal operational confirmations ('Server started on port 8080', 'Batch job completed').
3. WARNING (30): An unexpected event occurred or a problem is imminent, but software continues functioning.
4. ERROR (40): A serious defect prevented a specific operation from completing.
5. CRITICAL (50): A fatal error forcing the entire application to abort (e.g. database disk corrupted).`
            },
            {
              heading: "10. The Four Core Debugging Actions (Python for Everybody)",
              text: `Dr. Charles Severance outlines four deliberate, scientific actions to systematically conquer difficult bugs:

1. Reading:
Carefully read your source code aloud or to a peer. Scrutinize whether the code says what you INTENDED it to say, rather than assuming it does.

2. Running:
Experiment with small, isolated components. Change variable values, test boundary conditions, or verify behavior inside the interactive REPL.

3. Ruminating (Thinking Deeply):
Step away from the keyboard! Formulate clear, testable hypotheses: 'If hypothesis A is true, then variable X should equal 0 at line 45.' Go back to test your hypothesis.

4. Retreating:
If your debugging attempts have added messy print statements and broken working code further, retreat! Use Git (git checkout or git restore) to return to your last known working state and approach the problem with a fresh perspective.`
            },
            {
              heading: "11. Scientific Debugging by Bisection: Finding Defects in O(log N) Steps",
              text: `When hunting a logic flaw across a 1,000-line script or a large pipeline:

The Inefficient Approach (Linear Search):
Reading line-by-line from line 1 to line 1,000 requires O(N) effort and is mentally exhausting.

The Scientific Bisection Strategy (Binary Search):
1. Place a diagnostic breakpoint or logging probe at the midpoint (Line 500).
2. Inspect whether the program state (all variables and data structures) is 100% correct at line 500:
   • If State is VALID at Line 500: The bug CANNOT be in lines 1–500! It must reside in lines 501–1000.
   • If State is CORRUPTED at Line 500: The bug has ALREADY occurred! It must reside in lines 1–500.
3. Bisect the remaining half by testing line 250 or line 750.
4. Mathematical Efficiency: In a 1,000-line program, bisection isolates the exact defective line in approximately log2(1000) ≈ 10 checks!`
            },
            {
              heading: "12. Interactive Debugging with breakpoint() and pdb",
              text: `Python 3.7 introduced the built-in breakpoint() function, which drops execution into an interactive terminal debugger powered by pdb (Python Debugger):

def compute_payroll(employees):
    for emp in employees:
        rate = emp['hourly_rate']
        hours = emp['hours_worked']
        breakpoint() # Execution freezes here! Interactive prompt opens.
        gross = rate * hours
        ...

Essential pdb Commands:
• n (next): Execute the current line and advance to the next line in the current function.
• s (step): Step into the function call on the current line.
• c (continue): Continue execution until the next breakpoint is encountered or program finishes.
• p <expression> (print): Evaluate and display the value of any variable or expression (e.g. p emp['hourly_rate']).
• l (list): Display 11 lines of source code surrounding the current execution pointer.
• w (where): Print the complete stack trace leading to the current frame.
• q (quit): Abort the debugger and terminate script execution immediately.`
            },
            {
              heading: "13. Defensive Programming: Assertions & Invariant Verification",
              text: `Defensive programming involves embedding self-checks into code to detect internal inconsistencies as early as possible.

The assert Statement:
Syntax: assert <condition>, <error_message>
If the condition evaluates to True, nothing happens. If it evaluates to False, Python immediately raises an AssertionError:

def calculate_discount(price, discount_percent):
    assert price >= 0, f"Price cannot be negative: {price}"
    assert 0 <= discount_percent <= 100, f"Discount must be 0-100%: {discount_percent}"
    return price * (1 - discount_percent / 100)

CRITICAL Production Warning Regarding assert:
Python disables assertions when executed with the -O (optimize) flag (python -O app.py). Therefore, NEVER use assert for security checks, user input validation, or business logic enforcement! Use regular if statements and raise ValueError(...) instead.`
            },
            {
              heading: "14. Standard Exception Reference Table & Common Triggers",
              text: `The definitive reference for standard Python runtime exceptions:`,
              table: {
                headers: ["Exception Class","Common Cause / Trigger","Diagnostic Tip & Fix"],
                rows: [
                  ["ValueError","int('abc'), math.sqrt(-1), float('invalid')","Validate string format with str.isdigit() or check input ranges"],
                  ["TypeError","'score: ' + 95, len(42), [1, 2][0.5]","Check object types with isinstance() or cast with str()/int()"],
                  ["IndexError","lst[10] on a list of length 5, pop() on empty list","Verify index < len(seq) or check 'if seq:' before accessing"],
                  ["KeyError","d['unknown_key'] when key does not exist","Use d.get(key, default) or test 'if key in d:' beforehand"],
                  ["FileNotFoundError","open('nonexistent.txt')","Verify paths with pathlib.Path.exists() before opening"],
                  ["ZeroDivisionError","total / count when count == 0","Guard division with 'if count > 0:'"],
                  ["AttributeError","s.uppercase() (method is lower() or upper())","Check object attributes with dir(obj) or hasattr(obj, name)"],
                  ["NameError","print(usr_name) when variable is user_name","Inspect variable spelling and verify scope declaration"]
                ]
              }
            }
          ],
          codeExamples: [
            {
              title: "1. Robust Multi-Branch Exception Handling with else and finally",
              code: `def safe_divide_records(dividend_str, divisor_str):
    try:
        a = float(dividend_str)
        b = float(divisor_str)
        result = a / b
    except ValueError as val_err:
        print(f"Input Conversion Error: {val_err}")
        return None
    except ZeroDivisionError:
        print("Arithmetic Error: Cannot divide by zero.")
        return None
    else:
        # Runs ONLY when no exceptions occurred
        print(f"Calculation Successful: {a} / {b} = {result:.4f}")
        return result
    finally:
        # ALWAYS runs regardless of outcome
        print("Completed safe_divide transaction attempt.\n")

# Test 1: Clean execution
safe_divide_records("100", "4")

# Test 2: Zero division
safe_divide_records("50", "0")

# Test 3: Invalid text input
safe_divide_records("one hundred", "20")`,
              explanation: "Demonstrates the complete four-part try/except/else/finally control flow handling multiple error types."
            },
            {
              title: "2. Building a Custom Domain Exception Hierarchy",
              code: `class OrderProcessingError(Exception):
    """Base exception for e-commerce order processing."""
    pass

class OutOfStockError(OrderProcessingError):
    def __init__(self, item_id, requested_qty, available_qty):
        message = f"Item '{item_id}' out of stock: requested {requested_qty}, available {available_qty}"
        super().__init__(message)
        self.item_id = item_id
        self.requested_qty = requested_qty
        self.available_qty = available_qty

class InvalidPaymentError(OrderProcessingError):
    def __init__(self, payment_method, reason):
        super().__init__(f"Payment failed via {payment_method}: {reason}")
        self.payment_method = payment_method

def checkout(inventory, item_id, qty):
    if item_id not in inventory:
        raise OrderProcessingError(f"Unrecognized catalog item: {item_id}")
    if inventory[item_id] < qty:
        raise OutOfStockError(item_id, qty, inventory[item_id])
    
    inventory[item_id] -= qty
    print(f"Order confirmed! {qty}x {item_id} purchased.")

stock = {"LAPTOP-01": 3, "MOUSE-05": 10}

try:
    checkout(stock, "LAPTOP-01", 5)
except OutOfStockError as stock_err:
    print(f"Inventory Alert: {stock_err}")
    print(f"Remaining units: {stock_err.available_qty}")
except OrderProcessingError as gen_err:
    print(f"General Order Failure: {gen_err}")`,
              explanation: "Demonstrates class inheritance for domain-specific custom exceptions with custom attributes."
            },
            {
              title: "3. Root Cause Preservation via Exception Chaining (raise ... from)",
              code: `import json

class DatabaseConfigError(Exception):
    """Raised when database settings are corrupted or unreadable."""
    pass

def load_database_credentials(raw_json_str):
    try:
        data = json.loads(raw_json_str)
        host = data['db_host']
        port = int(data['db_port'])
        return {"host": host, "port": port}
    except json.JSONDecodeError as json_err:
        # Chain original error to preserve root cause
        raise DatabaseConfigError("Configuration syntax is malformed") from json_err
    except KeyError as key_err:
        raise DatabaseConfigError(f"Missing mandatory configuration parameter: {key_err}") from key_err

# Test with invalid JSON syntax
try:
    load_database_credentials("HOST=localhost,PORT=5432")
except DatabaseConfigError as cfg_err:
    print(f"High-Level Error: {cfg_err}")
    print(f"Root Cause Error: {cfg_err.__cause__}")`,
              explanation: "Shows how 'raise ... from' links low-level parsing exceptions to higher-level domain exceptions."
            },
            {
              title: "4. Industrial Logging Configuration vs. print() Statements",
              code: `import logging
import io

# Setup logger with custom formatting
logger = logging.getLogger("BillingEngine")
logger.setLevel(logging.DEBUG)

# Create stream handler
log_stream = io.StringIO()
handler = logging.StreamHandler(log_stream)
formatter = logging.Formatter('%(asctime)s | %(levelname)-8s | %(name)s | %(message)s', datefmt='%H:%M:%S')
handler.setFormatter(formatter)
logger.addHandler(handler)

def process_invoice(account_id, amount):
    logger.debug(f"Starting invoice generation for account {account_id}")
    
    if amount <= 0:
        logger.error(f"Failed to generate invoice for {account_id}: Amount must be positive ({amount})")
        return False
        
    if amount > 10000:
        logger.warning(f"Large transaction flagged for account {account_id}: $" + f"{amount:,.2f}")
        
    logger.info(f"Invoice for account {account_id} created successfully.")
    return True

process_invoice("ACC-9041", 12500)
process_invoice("ACC-3312", -50)

print(log_stream.getvalue())`,
              explanation: "Configures Python standard logging with formatted severity levels, timestamps, and log streams."
            },
            {
              title: "5. Scientific Debugging by Bisection Simulation",
              code: `def simulate_data_pipeline(data_records):
    """Simulates a pipeline with an intentional bug in the second half."""
    results = []
    for idx, val in enumerate(data_records):
        # Intentional bug triggered on index 7
        if idx == 7:
            transformed = val / 0.0 # Error!
        else:
            transformed = val * 2
        results.append(transformed)
    return results

data = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

# Scientific Bisection Process:
# Step 1: Probe midpoint (Index 4)
mid = len(data) // 2
print(f"Probe 1 - Testing index 0 to {mid}:")
try:
    sub_1 = simulate_data_pipeline(data[:mid])
    print(f"  First half (0-{mid}) passed cleanly! Bug must be in second half ({mid}-{len(data)}).\n")
except Exception as e:
    print(f"  First half failed: {e}\n")

# Step 2: Probe midpoint of second half (Index 7)
probe_idx = mid + (len(data) - mid) // 2
print(f"Probe 2 - Testing index {mid} to {probe_idx + 1}:")
try:
    sub_2 = simulate_data_pipeline(data[mid:probe_idx + 1])
    print("  Passed.")
except ZeroDivisionError:
    print(f"  Defect detected between index {mid} and {probe_idx}!")
    print(f"  Offending record isolated at index 7: value = {data[7]}")`,
              explanation: "Demonstrates the O(log N) bisection strategy isolating bugs rapidly without linear scanning."
            },
            {
              title: "6. Programmatic Stack Trace Diagnostics with traceback",
              code: `import traceback
import sys

def level_three():
    data = [10, 20, 30]
    return data[10] # Raises IndexError

def level_two():
    return level_three()

def level_one():
    return level_two()

try:
    level_one()
except IndexError:
    # Capture formatted traceback as string without crashing
    tb_string = traceback.format_exc()
    print("Caught Exception Traceback Forensics:")
    print("=" * 60)
    print(tb_string.strip())
    print("=" * 60)
    
    # Inspect exception info tuple
    exc_type, exc_val, exc_tb = sys.exc_info()
    print(f"Error Type: {exc_type.__name__}")
    print(f"Error Desc: {exc_val}")
    print(f"Origin Line: {exc_tb.tb_next.tb_next.tb_next.tb_lineno}")`,
              explanation: "Uses traceback.format_exc() to extract call stacks for logging to monitoring services."
            },
            {
              title: "7. Defensive Invariant Verification with Custom Guard Clauses",
              code: `def calculate_employee_bonus(salary, performance_score, years_tenure):
    # Guard clauses with explicit exceptions
    if not isinstance(salary, (int, float)) or salary <= 0:
        raise TypeError(f"Salary must be a positive number, got: {salary!r}")
    if not (1.0 <= performance_score <= 5.0):
        raise ValueError(f"Performance score must be between 1.0 and 5.0, got: {performance_score}")
    if years_tenure < 0:
        raise ValueError(f"Tenure cannot be negative, got: {years_tenure}")

    # Business calculations
    multiplier = 0.05 if performance_score < 3.0 else 0.15
    tenure_bonus = years_tenure * 500.0
    total_bonus = (salary * multiplier) + tenure_bonus
    return total_bonus

print(f"Senior Engineer Bonus: $" + f"{calculate_employee_bonus(85000, 4.8, 6):,.2f}")

try:
    calculate_employee_bonus(-50000, 4.0, 2)
except (TypeError, ValueError) as err:
    print(f"Defensive Guard Blocked: {err}")`,
              explanation: "Applies defensive programming with type and boundary guards, raising descriptive exceptions."
            },
            {
              title: "8. Automated Input Validation & Retry Loop with Exponential Backoff",
              code: `import time

def resilient_operation_with_retry(operation_func, max_retries=3, base_delay=0.1):
    for attempt in range(1, max_retries + 1):
        try:
            return operation_func()
        except ConnectionResetError as e:
            if attempt == max_retries:
                print(f"Attempt {attempt}/{max_retries} failed permanently: {e}")
                raise
            delay = base_delay * (2 ** (attempt - 1))
            print(f"Attempt {attempt} failed ({e}). Retrying in {delay:.2f}s...")
            time.sleep(delay)

# Simulate an unreliable network service
call_count = 0
def flaky_service():
    global call_count
    call_count += 1
    if call_count < 3:
        raise ConnectionResetError("Remote server dropped connection")
    return {"status": "SUCCESS", "records_synced": 42}

result = resilient_operation_with_retry(flaky_service, max_retries=4)
print(f"Resilient Call Result: {result}")`,
              explanation: "Implements production-grade retry logic with exponential backoff for transient network and I/O failures."
            }
          ],
          bestPractices: [
            "Always catch specific exception types (ValueError, KeyError); never use a bare 'except:' clause.",
            "Keep try blocks as small as possible, containing only the specific operations capable of failing.",
            "Use the 'else' block for code that should run strictly when no exceptions were raised.",
            "Always perform resource cleanup inside 'finally' blocks or via context managers ('with open').",
            "Raise custom domain exceptions inheriting from Exception to communicate clear semantics to callers.",
            "Preserve lower-level root cause tracebacks using 'raise ... from original_error'.",
            "Use the standard library logging module with appropriate levels (DEBUG, INFO, ERROR) instead of print().",
            "Apply the scientific Bisection method (binary search) to isolate bugs in large datasets or pipelines in O(log N) steps.",
            "Read tracebacks from the bottom up to identify the error type, then locate the nearest frame in your own code.",
            "Never use 'assert' statements for critical runtime validation or security checks, as they can be disabled via -O."
          ],
          commonMistakes: [
            "Using bare 'except:' which traps KeyboardInterrupt, preventing users from stopping scripts with Ctrl+C.",
            "Swallowing exceptions silently with 'except: pass', creating undetectable silent bugs.",
            "Placing too much unrelated code inside a single giant try block, masking unexpected errors.",
            "Relying on print() debugging in production code instead of structured logging with configurable log levels.",
            "Confusing SyntaxError (which prevents code from running at all) with runtime exceptions.",
            "Forgetting that finally blocks execute even when early return statements are executed inside try or except.",
            "Catching BaseException instead of Exception, which interferes with Python interpreter shutdown signals.",
            "Fixing the symptoms of a bug (e.g. patching special cases) instead of diagnosing the root cause through bisection."
          ],
          practiceExercise: {
            title: "Module 10 Hands-On Laboratory: Fault-Tolerant Systems & Diagnostic Engineering",
            problem: `Complete the following 8 comprehensive hands-on exception handling and debugging challenges:

1. Resilient Numerical Parser with Type Validation:
Write a function safe_parse_int_list(string_values) that accepts a list of string representations, converts them to integers, logs warnings for unparseable items without halting, and returns a tuple of (valid_integers, error_count).

2. Safe Configuration File Loader with Schema Validation:
Create a function load_validated_config(filepath) that reads a key-value text file. Raise a custom MissingConfigKeyError if mandatory keys ('DATABASE_HOST', 'API_KEY') are absent, and catch FileNotFoundError gracefully with default settings fallback.

3. Complete E-Commerce Transaction Guard (try/except/else/finally):
Implement a process_payment(account, amount) function simulating a payment gateway. Demonstrate the execution of all four blocks: try (charge), except (InsufficientFunds, InvalidCard), else (send receipt), and finally (audit logging).

4. Custom Banking Exception Hierarchy with Account Lockout:
Create an exception hierarchy rooted at BankAccountError. Implement InsufficientFundsError and AccountSuspendedError. Write an account debit method that raises these exceptions and tracks failed attempts to lock accounts after 3 consecutive errors.

5. Chained Exception Translator (API Adapter Pattern):
Simulate an external HTTP API client that catches low-level socket and timeout exceptions (simulate with ConnectionRefusedError) and re-raises an ApplicationGatewayError using the 'raise ... from' syntax.

6. Scientific Bisection Defect Hunter:
Given a list of 1,000 processed transaction records where exactly one record contains corrupted non-numerical data causing a calculation function to crash, implement a binary search bisection algorithm that locates the exact defective index in <= 10 steps.

7. Production Logging & Audit Recorder:
Build a module that configures a rotating memory logger. Record DEBUG, INFO, WARNING, and ERROR events across a simulated user login workflow, and extract all ERROR logs into a separate security incident summary.

8. Automated Retry Strategy with Jitter & Max Attempt Guard:
Write a decorator or higher-order function with_retry(max_attempts, allowed_exceptions) that retries transient operations (e.g. database locks or network timeouts) with exponential backoff before finally raising a MaxRetriesExceededError.`,
            solutionCode: `import io
import time
import logging
from collections import Counter

# ==============================================================================
# Challenge 1: Resilient Numerical Parser with Type Validation
# ==============================================================================
def safe_parse_int_list(raw_values):
    valid_integers = []
    error_count = 0
    
    for item in raw_values:
        try:
            val = int(item)
            valid_integers.append(val)
        except (ValueError, TypeError) as err:
            error_count += 1
            # In production: logger.warning(f"Skipping invalid token '{item}': {err}")
            
    return valid_integers, error_count

tokens = ["42", "100", "invalid", "250", None, "78", "3.1415", "999"]
valid_nums, errs = safe_parse_int_list(tokens)
print("Challenge 1 - Resilient Parser:")
print(f"  Valid Integers ({len(valid_nums)}): {valid_nums}")
print(f"  Errors Filtered: {errs}")


# ==============================================================================
# Challenge 2: Safe Configuration File Loader with Schema Validation
# ==============================================================================
class ConfigError(Exception):
    pass

class MissingConfigKeyError(ConfigError):
    def __init__(self, key):
        super().__init__(f"Mandatory configuration setting '{key}' is missing!")
        self.missing_key = key

def load_validated_config(config_stream):
    config = {}
    for line in config_stream:
        line = line.strip()
        if not line or line.startswith("#"):
            continue
        if "=" in line:
            k, v = line.split("=", 1)
            config[k.strip()] = v.strip()
            
    # Schema validation
    required_keys = ["DATABASE_HOST", "API_KEY"]
    for req in required_keys:
        if req not in config:
            raise MissingConfigKeyError(req)
            
    return config

sample_config = """
# Server Configuration
DATABASE_HOST = db.internal.arshithgroup.com
SERVER_PORT = 8080
API_KEY = arshith_live_secret_key_2026
"""

cfg = load_validated_config(io.StringIO(sample_config))
print(f"\nChallenge 2 - Validated Config Loaded:")
print(f"  Host: {cfg['DATABASE_HOST']}, Port: {cfg['SERVER_PORT']}")


# ==============================================================================
# Challenge 3: Complete E-Commerce Transaction Lifecycle (try/except/else/finally)
# ==============================================================================
class PaymentError(Exception):
    pass

class InsufficientFunds(PaymentError):
    pass

def process_payment(account_balance, charge_amount):
    audit_trail = []
    receipt_issued = False
    
    try:
        audit_trail.append("Step 1: Validating balance")
        if charge_amount > account_balance:
            raise InsufficientFunds(f"Requested $" + f"{charge_amount}, Available: $" + f"{account_balance}")
        account_balance -= charge_amount
        audit_trail.append(f"Step 2: Successfully debited $" + f"{charge_amount}")
    except InsufficientFunds as fund_err:
        audit_trail.append(f"Payment Exception: {fund_err}")
    else:
        audit_trail.append("Step 3 (else): Issuing transaction receipt")
        receipt_issued = True
    finally:
        audit_trail.append("Step 4 (finally): Closing payment gateway session")
        
    return account_balance, receipt_issued, audit_trail

new_bal, success, log = process_payment(500, 150)
print(f"\nChallenge 3 - Payment Lifecycle (Success: {success}):")
for entry in log:
    print(f"  • {entry}")


# ==============================================================================
# Challenge 4: Custom Banking Exception Hierarchy with Account Lockout
# ==============================================================================
class BankAccountError(Exception):
    pass

class InsufficientBalanceError(BankAccountError):
    pass

class AccountLockedError(BankAccountError):
    pass

class SecureAccount:
    def __init__(self, owner, balance):
        self.owner = owner
        self.balance = balance
        self.failed_attempts = 0
        self.is_locked = False
        
    def withdraw(self, amount):
        if self.is_locked:
            raise AccountLockedError(f"Account for {self.owner} is locked due to security thresholds.")
            
        if amount > self.balance:
            self.failed_attempts += 1
            if self.failed_attempts >= 3:
                self.is_locked = True
                raise AccountLockedError(f"Account locked! Exceeded 3 failed withdrawals.")
            raise InsufficientBalanceError(f"Cannot withdraw {amount}. Current balance: {self.balance} (Failed: {self.failed_attempts}/3)")
            
        self.balance -= amount
        self.failed_attempts = 0
        return self.balance

acct = SecureAccount("Rahul Kumar", 100)
print(f"\nChallenge 4 - Account Lockout Simulation:")
for i in range(1, 4):
    try:
        acct.withdraw(500)
    except (InsufficientBalanceError, AccountLockedError) as e:
        print(f"  Attempt {i}: {e}")


# ==============================================================================
# Challenge 5: Chained Exception Translator (API Adapter Pattern)
# ==============================================================================
class ApplicationGatewayError(Exception):
    """High-level enterprise gateway error."""
    pass

def execute_external_network_call(simulate_fail=True):
    try:
        if simulate_fail:
            raise ConnectionRefusedError("Remote TCP connection refused on port 443")
        return {"data": "verified"}
    except ConnectionRefusedError as net_err:
        raise ApplicationGatewayError("External service unavailable; retry scheduled") from net_err

try:
    execute_external_network_call(True)
except ApplicationGatewayError as app_err:
    print(f"\nChallenge 5 - Exception Chaining:")
    print(f"  High-level caught: {app_err}")
    print(f"  Original root cause: {app_err.__cause__}")


# ==============================================================================
# Challenge 6: Scientific Bisection Defect Hunter
# ==============================================================================
def process_record(record):
    # Simulates calculation that crashes on non-numeric value
    return float(record) ** 2

def bisect_corrupted_record(records):
    low = 0
    high = len(records) - 1
    step_count = 0
    
    while low <= high:
        step_count += 1
        mid = (low + high) // 2
        
        # Test if the defect is in the left half [low .. mid]
        left_has_error = False
        for i in range(low, mid + 1):
            try:
                process_record(records[i])
            except (ValueError, TypeError):
                left_has_error = True
                break
                
        if left_has_error:
            if low == mid:
                return low, records[low], step_count
            high = mid
        else:
            low = mid + 1
            
    return -1, None, step_count

# Generate 1,000 valid records with a single defect at index 732
large_dataset = [str(i * 1.5) for i in range(1000)]
large_dataset[732] = "CORRUPTED_TOKEN"

bad_idx, bad_val, steps = bisect_corrupted_record(large_dataset)
print(f"\nChallenge 6 - Bisection Defect Hunter:")
print(f"  Corrupted record isolated at index: {bad_idx}")
print(f"  Offending payload: {bad_val}")
print(f"  Steps required: {steps} iterations (O(log N) efficiency)")


# ==============================================================================
# Challenge 7: Production Logging & Security Audit Recorder
# ==============================================================================
log_buffer = io.StringIO()
audit_logger = logging.getLogger("SecurityAudit")
audit_logger.setLevel(logging.DEBUG)

handler = logging.StreamHandler(log_buffer)
handler.setFormatter(logging.Formatter('%(levelname)s: %(message)s'))
audit_logger.addHandler(handler)

def simulate_user_authentication(username, password):
    audit_logger.debug(f"Auth attempt initiated for user: {username}")
    if username == "admin" and password == "secret2026":
        audit_logger.info(f"User {username} authenticated successfully.")
        return True
    elif username == "admin":
        audit_logger.error(f"Failed password attempt for privileged account: {username}")
        return False
    else:
        audit_logger.warning(f"Unknown username attempt: {username}")
        return False

simulate_user_authentication("unknown_user", "pass")
simulate_user_authentication("admin", "wrong_pass")
simulate_user_authentication("admin", "secret2026")

print("\nChallenge 7 - Security Audit Log Output:")
print(log_buffer.getvalue().strip())


# ==============================================================================
# Challenge 8: Automated Retry Strategy with Jitter & Max Attempt Guard
# ==============================================================================
class MaxRetriesExceededError(Exception):
    pass

def execute_with_retry(func, max_attempts=3, backoff_base=0.05):
    for attempt in range(1, max_attempts + 1):
        try:
            return func()
        except TimeoutError as te:
            if attempt == max_attempts:
                raise MaxRetriesExceededError(f"Operation failed after {max_attempts} attempts") from te
            delay = backoff_base * (2 ** (attempt - 1))
            time.sleep(delay)

counter = 0
def intermittent_db_call():
    global counter
    counter += 1
    if counter < 3:
        raise TimeoutError("Database lock acquisition timeout")
    return "Database query committed successfully"

retry_result = execute_with_retry(intermittent_db_call, max_attempts=4)
print(f"\nChallenge 8 - Resilient Retry Mechanism:")
print(f"  Execution Outcome: {retry_result} (Succeeded on attempt {counter})")`
          },
          keyTakeaways: [
            "Syntax errors are compile-time parsing failures; runtime exceptions occur during execution; logic bugs are silent defects.",
            "The Python exception hierarchy inherits from BaseException -> Exception; never catch BaseException directly in application code.",
            "Avoid bare 'except:' clauses; always catch specific, anticipated exception classes or 'Exception as err'.",
            "The 'else' block runs strictly when no exceptions occur; 'finally' runs in 100% of execution paths.",
            "Define custom exception classes inheriting from Exception to communicate domain-specific errors cleanly.",
            "Use 'raise ... from original_error' to preserve lower-level root cause tracebacks during exception translation.",
            "Industrial applications use the standard logging module (DEBUG to CRITICAL) with structured formatters instead of print().",
            "Scientific bisection debugging locates defects in large datasets or programs in O(log N) binary search steps.",
            "Interactive debugging with breakpoint() and pdb provides live variable inspection and step-by-step execution control."
          ],
          references: [
            {"title":"Python Documentation: Errors and Exceptions","url":"https://docs.python.org/3/tutorial/errors.html"},
            {"title":"Python Documentation: Built-in Exceptions Hierarchy","url":"https://docs.python.org/3/library/exceptions.html"},
            {"title":"Python Documentation: logging — Logging facility for Python","url":"https://docs.python.org/3/library/logging.html"},
            {"title":"Python Documentation: pdb — The Python Debugger","url":"https://docs.python.org/3/library/pdb.html"},
            {"title":"Python Documentation: traceback — Print or retrieve stack tracebacks","url":"https://docs.python.org/3/library/traceback.html"}
          ],
          mcqs: [
            {
              id: 1,
              question: "Under what conditions does the 'finally' block in a try-except statement execute?",
              options: [
                "Only when an exception was raised and caught",
                "Only when the try block completed with zero errors",
                "Always, in 100% of execution scenarios, even if a return or unhandled exception occurs",
                "Only if the program is running in debug mode"
              ],
              correctAnswer: 2,
              explanation: "finally executes unconditionally in all circumstances, making it the bedrock of reliable resource deallocation."
            },
            {
              id: 2,
              question: "What is the base class from which all standard non-system-exiting Python runtime exceptions inherit?",
              options: [
                "BaseException",
                "Exception",
                "StandardError",
                "RuntimeError"
              ],
              correctAnswer: 1,
              explanation: "All standard application exceptions inherit from Exception. BaseException is reserved for system exits like KeyboardInterrupt and SystemExit."
            },
            {
              id: 3,
              question: "How does the 'Debugging by Bisection' technique locate a bug in a 1,000-line script in ~10 steps?",
              options: [
                "It runs the code 10 times with different inputs",
                "It tests state at the midpoint (Line 500) and halves the search space iteratively using binary search (O(log N))",
                "It bisects the variable count by half",
                "It deletes half the code randomly until errors disappear"
              ],
              correctAnswer: 1,
              explanation: "Bisection applies binary search to code analysis: inspecting state at the midpoint isolates which half contains the defect in log2(N) steps."
            },
            {
              id: 4,
              question: "What is the purpose of exception chaining using 'raise CustomError() from original_error' in Python 3?",
              options: [
                "It suppresses the original error completely",
                "It links the original low-level root cause to the new exception, preserving the full diagnostic call stack",
                "It converts an error into a warning",
                "It executes both exceptions simultaneously"
              ],
              correctAnswer: 1,
              explanation: "The 'from' clause preserves the original exception on the __cause__ attribute, displaying the complete causal chain in tracebacks."
            },
            {
              id: 5,
              question: "Why is Python's standard logging module preferred over print() statements in production software?",
              options: [
                "print() cannot output text to terminals",
                "logging provides configurable severity levels, timestamps, log rotation, and global disable switches without code modification",
                "print() statements are automatically stripped out by the Python compiler",
                "logging functions run on the GPU"
              ],
              correctAnswer: 1,
              explanation: "The logging framework allows filtering by severity (DEBUG, INFO, ERROR), routing to files or telemetry services, and central configuration."
            }
          ]
        }
      },
      {
        id: "py-mod-11",
        title: "Module 11 — Object-Oriented Programming (OOP)",
        description: "Classes and instances (the cookie cutter analogy), attributes and methods, self mechanics, constructor lifecycle (__init__), encapsulation, inheritance, method overriding, and magic dunder methods.",
        completed: true,
        readingMaterial: {
          introduction: `As software applications grow beyond simple scripts, managing hundreds of isolated variables and functions becomes unwieldy. Procedural programming organizes code around sequential actions, but as data structures expand, tracking which function modifies which global variable creates tightly coupled, fragile codebases. Object-Oriented Programming (OOP) solves this architectural challenge by bundling related state (attributes) and behavior (methods) into self-contained, reusable conceptual entities called 'Objects'.

Based on Chapter 14 of Dr. Charles Severance's 'Python for Everybody' and enterprise Python software design patterns, this module introduces the foundational pillars of object-oriented architecture. Rather than treating code as a continuous series of instructions, OOP models software after real-world domains: bank accounts encapsulate balances and transaction histories; web servers encapsulate request dispatchers and session pools; graphical interfaces encapsulate windows, buttons, and event listeners.

In Python, everything is an object—from simple integers and strings to complex machine learning models. This module provides a rigorous, deep dive into designing robust classes: understanding the class blueprint vs. instance memory allocation, mastering the self parameter and object lifecycle (__init__ constructor and __del__ destructor), implementing clean encapsulation and private attribute protection, leveraging inheritance and super() hierarchies, achieving dynamic polymorphism, and harnessing Python's rich suite of special 'dunder' (double-underscore) magic methods (__str__, __repr__, __eq__, __len__).`,
          objectives: [
            "Explain the paradigm shift from procedural scripting to object-oriented system modeling.",
            "Distinguish between a Class (the reusable blueprint) and an Object / Instance (the instantiated entity in RAM).",
            "Explain the role and mechanics of the 'self' parameter as the explicit instance reference.",
            "Implement the object lifecycle: initialization (__init__), state mutation, and garbage collection.",
            "Apply encapsulation using public, protected (_single_underscore), and private (__double_underscore) conventions.",
            "Leverage class inheritance to share common logic, eliminate code duplication, and invoke super().",
            "Implement dynamic polymorphism and duck typing across interchangeable class interfaces.",
            "Master essential magic dunder methods: __str__, __repr__, __len__, __eq__, and __add__.",
            "Differentiate between Instance Methods, Class Methods (@classmethod), and Static Methods (@staticmethod).",
            "Design real-world domain models using composition, validation properties, and clean class architectures."
          ],
          sections: [
            {
              heading: "1. Procedural vs. Object-Oriented Programming: The Architectural Shift",
              text: `To appreciate object-oriented programming, consider how procedural code manages state:

Procedural Approach:
In procedural code, data structures and functions exist independently:
account_owner = "Ananya"
account_balance = 5000.0
def deposit(balance, amount): return balance + amount
def withdraw(balance, amount): return balance - amount if balance >= amount else balance

Weaknesses of Procedural Architecture:
1. State Disconnection: The variables account_owner and account_balance have no formal relationship in Python's memory. Any function in the codebase can accidentally overwrite account_balance directly.
2. Inability to Scale: Supporting 10,000 distinct accounts requires complex parallel arrays or dictionary lists, requiring manual passing of state variables into every function call.
3. Violation of Encapsulation: Business rules (such as 'balance cannot be negative') cannot be guaranteed because callers can manipulate data variables freely.

The Object-Oriented Approach:
OOP solves this by uniting data and behavior into an indivisible unit:
class BankAccount:
    def __init__(self, owner, balance=0.0):
        self.owner = owner
        self.balance = balance
    def deposit(self, amount):
        if amount <= 0: raise ValueError("Deposit must be positive")
        self.balance += amount`
            },
            {
              heading: "2. Classes vs. Objects: The Cookie Cutter Analogy",
              text: `Dr. Charles Severance illustrates classes and objects using the classic 'Cookie Cutter and Cookie' metaphor:

1. The Class (The Cookie Cutter / Blueprint):
A class is an abstract template defined using the class keyword. It defines what attributes every instance will possess and what methods every instance can execute. The class itself occupies a single namespace in memory but does not store individual customer records.

2. The Object / Instance (The Cookie):
An object is a concrete, individual entity created from the class blueprint in computer RAM.
• You can stamp out thousands of unique cookies from a single cookie cutter.
• Each cookie has the same shape (attributes and methods), but each cookie contains its own distinct frosting, sprinkles, and weight (independent state).

Syntax:
class PartyAnimal: # The Class Definition
    def __init__(self, name):
        self.name = name # Instance attribute
        self.points = 0  # Instance attribute

s = PartyAnimal("Sally") # Instantiation (Creating an Object)
j = PartyAnimal("Jim")   # Instantiation (Creating another Object)`
            },
            {
              heading: "3. The 'self' Parameter: Python's Explicit Instance Binding",
              text: `One of the most distinctive features of Python OOP is the mandatory first parameter self in all instance methods.

What is self?
self represents the specific object instance currently executing the method. When you invoke a method on an object:
s.party()
Python automatically converts that call behind the scenes into:
PartyAnimal.party(s)

Why self is Explicit:
Unlike C++ or Java (which use an implicit 'this' pointer), Python follows the Zen of Python maxim: 'Explicit is better than implicit.'
By receiving self explicitly, method bodies can unambiguously access and modify the invoking object's private namespace:
self.points += 1 # Mutates the calling object's points attribute only!`
            },
            {
              heading: "4. Object Lifecycle: Construction (__init__) & Destruction (__del__)",
              text: `Every Python object undergoes a defined lifecycle from allocation to garbage collection:

1. Construction & Initialization (__init__):
When PartyAnimal("Sally") is called, Python performs two actions:
• Step A: Calls __new__() to allocate raw memory space for the object in RAM.
• Step B: Immediately invokes the constructor method __init__(self, ...) to initialize instance attributes.

2. Active Operation:
During this phase, methods are called, state is modified, and the object interacts with other objects.

3. Destruction & Deallocation (__del__):
When an object's reference count drops to zero (e.g. del s, or the object falls out of variable scope), Python's automatic Garbage Collector deallocates its memory address. Before reclaiming the memory, Python optionally calls the destructor method __del__(self).`
            },
            {
              heading: "5. Instance Attributes vs. Class Attributes",
              text: `Attributes can be attached either to individual instances or shared globally across the entire class:`,
              table: {
                headers: ["Attribute Type","Where Defined","Memory Allocation","Access Syntax","Typical Use Case"],
                rows: [
                  ["Instance Attribute","Inside __init__ via self.x","Allocated uniquely per object instance","self.x or obj.x","Customer name, balance, email, user ID"],
                  ["Class Attribute","Directly in class body (outside methods)","Single shared memory address for entire class","ClassName.x or self.x","Default tax rate, interest rate, instance counter"],
                  ["Class Constant","Directly in class body (ALL_CAPS)","Single immutable reference across all instances","ClassName.API_VERSION","Configuration constants, maximum limits, error codes"]
                ]
              }
            },
            {
              heading: "6. Encapsulation & Python Privacy Conventions",
              text: `Encapsulation restricts direct external access to internal component states, preventing accidental corruption. Python uses naming conventions to signal privacy:

1. Public Attributes (e.g. self.name):
Accessible from anywhere inside or outside the class.

2. Protected Attributes (Single Leading Underscore: self._balance):
Indicates an internal implementation detail. Python does not enforce privacy at the interpreter level, but by PEP 8 convention, external callers should not access or modify it directly.

3. Private Attributes (Double Leading Underscore: self.__pin):
Triggers Python's automatic Name Mangling. Python internally renames __pin to _ClassName__pin to prevent accidental overrides in child subclasses.

4. The @property Decorator:
Provides clean getter and setter methods while preserving natural attribute syntax:

class Account:
    def __init__(self, balance):
        self._balance = balance

    @property
    def balance(self):
        return self._balance

    @balance.setter
    def balance(self, value):
        if value < 0: raise ValueError("Balance cannot be negative")
        self._balance = value`
            },
            {
              heading: "7. Inheritance: Code Reuse & Hierarchy Specialization",
              text: `Inheritance allows a new class (the Child or Subclass) to inherit attributes and methods from an existing class (the Parent or Superclass):

The Problem Inheritance Solves:
Without inheritance, creating specialized classes (e.g. SavingsAccount and CheckingAccount) requires copying identical logic (owner verification, balance queries) into multiple files.

Using super() for Constructor Delegation:
A child class constructor should always call the parent constructor using super().__init__(...) to initialize shared state:

class Account:
    def __init__(self, owner, balance):
        self.owner = owner
        self.balance = balance

class SavingsAccount(Account):
    def __init__(self, owner, balance, interest_rate=0.03):
        super().__init__(owner, balance) # Initializes parent state
        self.interest_rate = interest_rate # Adds specialized state`
            },
            {
              heading: "8. Method Overriding & Dynamic Polymorphism",
              text: `Two complementary capabilities that unlock flexible software architecture:

1. Method Overriding:
A child class can provide a specialized implementation of a method that is already defined in its parent class. When called on a child instance, Python executes the child's version:

class Animal:
    def speak(self): return "Generic sound"

class Dog(Animal):
    def speak(self): return "Woof!" # Overrides Animal.speak()

2. Polymorphism & Duck Typing:
Polymorphism allows different classes to expose the same method interface, enabling client code to treat them interchangeably.
Python embraces 'Duck Typing': 'If it walks like a duck and quacks like a duck, it is a duck.' As long as an object implements the expected method, Python executes it without requiring rigid interface hierarchies:

def announce_speaker(entity):
    print(entity.speak()) # Works for Dog, Cat, Person, or Robot!`
            },
            {
              heading: "9. Magic (Dunder) Methods: Integrating with Python's Data Model",
              text: `Magic methods (surrounded by double underscores) allow custom classes to integrate seamlessly with Python built-in functions:`,
              table: {
                headers: ["Magic Method","Triggered By Expression","Return Expectation","Purpose"],
                rows: [
                  ["__str__(self)","str(obj), print(obj)","Informative readable string","User-friendly presentation"],
                  ["__repr__(self)","repr(obj), interactive REPL","Unambiguous code string","Developer debugging: eval(repr(obj)) == obj"],
                  ["__len__(self)","len(obj)","Non-negative integer","Reports collection size"],
                  ["__eq__(self, other)","obj1 == obj2","Boolean True/False","Value equality comparison instead of memory identity"],
                  ["__add__(self, other)","obj1 + obj2","New object instance","Operator overloading for addition"],
                  ["__getitem__(self, key)","obj[key]","Value at index/key","Allows bracket indexing like a list or dictionary"]
                ]
              }
            },
            {
              heading: "10. Method Types: Instance vs. Class vs. Static Methods",
              text: `Python supports three distinct method types defined using decorators:

1. Instance Methods:
The default method type. Receives self as the first parameter. Can access and modify both instance state and class state.

2. Class Methods (@classmethod):
Receives cls (the class object itself) as the first parameter instead of self. Cannot access instance attributes.
• Primary Use Case: Factory constructors (creating instances from JSON, CSV, or formatted strings).

3. Static Methods (@staticmethod):
Receives neither self nor cls. Behaves like a plain function placed inside the class namespace for logical grouping.
• Primary Use Case: Pure utility functions that do not depend on object or class state.`
            }
          ],
          codeExamples: [
            {
              title: "1. Complete Class Definition with State Mutation & Self",
              code: `class PartyAnimal:
    total_parties = 0 # Class attribute

    def __init__(self, name):
        self.name = name # Instance attribute
        self.points = 0  # Instance attribute
        print(f"Party animal '{self.name}' initialized in memory.")

    def party(self):
        self.points += 1
        PartyAnimal.total_parties += 1
        print(f"{self.name} scored a point! Total points: {self.points}")

    def __del__(self):
        print(f"Party animal '{self.name}' deallocated.")

# Instantiate two distinct objects
sally = PartyAnimal("Sally")
jim = PartyAnimal("Jim")

sally.party()
sally.party()
jim.party()

print(f"Global parties recorded across all instances: {PartyAnimal.total_parties}")`,
              explanation: "Demonstrates class blueprints, independent instance state, class attributes, and method execution."
            },
            {
              title: "2. Clean Encapsulation with @property Getters & Setters",
              code: `class BankAccount:
    def __init__(self, account_holder, initial_balance=0.0):
        self.account_holder = account_holder
        self._balance = float(initial_balance) # Protected internal state

    @property
    def balance(self):
        """Getter method: Read-only external access to balance."""
        return self._balance

    @balance.setter
    def balance(self, new_balance):
        """Setter method: Validates balance updates rigorously."""
        if new_balance < 0:
            raise ValueError(f"Balance cannot fall below zero: {new_balance}")
        self._balance = float(new_balance)

    def deposit(self, amount):
        if amount <= 0:
            raise ValueError("Deposit amount must be positive.")
        self.balance += amount
        return self.balance

account = BankAccount("Dr. Ananya Sharma", 2500)
print(f"Account Balance: $" + f"{account.balance:,.2f}")

account.deposit(750)
print(f"Updated Balance: $" + f"{account.balance:,.2f}")

try:
    account.balance = -500 # Triggers setter validation exception
except ValueError as e:
    print(f"Guard Blocked Invalid Transaction: {e}")`,
              explanation: "Uses Python @property to provide clean attribute access while enforcing business invariants."
            },
            {
              title: "3. Inheritance Hierarchy with super() Constructor Delegation",
              code: `class Employee:
    def __init__(self, emp_id, name, base_salary):
        self.emp_id = emp_id
        self.name = name
        self.base_salary = base_salary

    def calculate_annual_compensation(self):
        return self.base_salary

    def __str__(self):
        return f"[{self.emp_id}] {self.name} (Base: $" + f"{self.base_salary:,.2f})"

class SoftwareEngineer(Employee):
    def __init__(self, emp_id, name, base_salary, stock_options, tech_stack):
        super().__init__(emp_id, name, base_salary) # Delegate to parent
        self.stock_options = stock_options
        self.tech_stack = tech_stack

    def calculate_annual_compensation(self):
        # Override parent method and add stock equity value
        return self.base_salary + (self.stock_options * 25.0)

dev = SoftwareEngineer("DEV-402", "Bhavana", 95000, 1000, ["Python", "SQLite", "FastAPI"])
print(dev)
print(f"Total Annual Compensation: $" + f"{dev.calculate_annual_compensation():,.2f}")
print(f"Specialized Tech Stack: {', '.join(dev.tech_stack)}")`,
              explanation: "Demonstrates class inheritance, constructor delegation with super(), and method overriding."
            },
            {
              title: "4. Dynamic Polymorphism Across Interchangeable Interfaces",
              code: `class PDFReportExporter:
    def export(self, title, data):
        return f"[PDF Rendered]: '{title}' formatted into 2-column vector document ({len(data)} items)."

class CSVReportExporter:
    def export(self, title, data):
        return f"[CSV Exported]: '{title}.csv' generated with comma-delimited columns."

class JSONReportExporter:
    def export(self, title, data):
        return f"[JSON Serialized]: '{title}.json' encoded with UTF-8 payload."

def generate_business_summary(exporter, report_title, dataset):
    # Polymorphic call: exporter can be ANY class with an export() method
    output = exporter.export(report_title, dataset)
    print(output)

telemetry = [89.4, 92.1, 95.7, 88.2]
exporters = [PDFReportExporter(), CSVReportExporter(), JSONReportExporter()]

for exp in exporters:
    generate_business_summary(exp, "Monthly_Telemetry_Report", telemetry)`,
              explanation: "Illustrates duck typing and polymorphism where diverse exporter objects share the same export() signature."
            },
            {
              title: "5. Python Data Model Integration with Magic Dunder Methods",
              code: `class Money:
    def __init__(self, amount, currency="USD"):
        self.amount = round(float(amount), 2)
        self.currency = currency.upper()

    def __str__(self):
        # User readable
        return f"{self.currency} " + f"{self.amount:,.2f}"

    def __repr__(self):
        # Developer debug string
        return f"Money({self.amount}, '{self.currency}')"

    def __eq__(self, other):
        if not isinstance(other, Money): return False
        return self.amount == other.amount and self.currency == other.currency

    def __add__(self, other):
        if not isinstance(other, Money):
            raise TypeError("Cannot add Money to non-Money object")
        if self.currency != other.currency:
            raise ValueError(f"Cannot add mismatched currencies: {self.currency} vs {other.currency}")
        return Money(self.amount + other.amount, self.currency)

m1 = Money(150.50, "USD")
m2 = Money(49.50, "USD")
m3 = m1 + m2

print(f"m1: {m1}")
print(f"m2: {m2}")
print(f"m3 (Sum via + operator): {m3}")
print(f"Is m3 equal to Money(200, 'USD')? {m3 == Money(200, 'USD')}")
print(f"Debug representation: {repr(m3)}")`,
              explanation: "Implements operator overloading with __add__, __eq__, __str__, and __repr__."
            },
            {
              title: "6. Class Methods (@classmethod) as Alternative Factory Constructors",
              code: `class StudentRecord:
    def __init__(self, name, college, gpa):
        self.name = name
        self.college = college
        self.gpa = float(gpa)

    @classmethod
    def from_csv_line(cls, csv_string):
        """Factory constructor creating a student from a CSV line."""
        name, college, gpa = csv_string.strip().split(",")
        return cls(name.strip(), college.strip(), float(gpa))

    @classmethod
    def from_dict(cls, data_dict):
        """Factory constructor creating a student from a dictionary."""
        return cls(data_dict['name'], data_dict['college'], data_dict['gpa'])

    @staticmethod
    def is_honor_roll(gpa):
        """Pure static utility function."""
        return gpa >= 3.8

# Standard constructor
s1 = StudentRecord("Rahul", "Bengaluru Tech", 3.9)

# Factory constructor from CSV
s2 = StudentRecord.from_csv_line("Priya, Delhi Engineering, 3.85")

print(f"Student: {s2.name} | College: {s2.college} | GPA: {s2.gpa}")
print(f"Honor Roll Eligible? {StudentRecord.is_honor_roll(s2.gpa)}")`,
              explanation: "Uses @classmethod as alternative constructors to parse heterogeneous formats cleanly."
            }
          ],
          bestPractices: [
            "Follow PEP 8 naming conventions: PascalCase for class names (BankAccount) and snake_case for methods/attributes.",
            "Keep instance methods focused: each method should perform one clear responsibility.",
            "Always initialize all instance attributes inside the __init__ constructor rather than creating them ad-hoc.",
            "Use @property decorators to validate attribute mutations instead of writing Java-style get_x() and set_x() methods.",
            "Prefer Composition over Inheritance: only inherit when a true 'is-a' relationship exists, not just to borrow code.",
            "Always implement __repr__ on custom classes to provide clear, actionable debugging logs.",
            "Always call super().__init__() in child class constructors to maintain proper parent state initialization.",
            "Use class attributes for shared configuration and instance attributes for state unique to each object.",
            "Embrace Python duck typing: design functions to depend on behavior (methods), not strict type checking."
          ],
          commonMistakes: [
            "Forgetting the mandatory 'self' parameter in method signatures, triggering 'TypeError: method() takes 0 positional arguments'.",
            "Using mutable default arguments (like def __init__(self, items=[]):), which causes ALL instances to share the same list in memory!",
            "Modifying a class attribute via an instance (self.counter += 1), which accidentally shadows the class attribute with a new instance attribute.",
            "Creating deep, multi-level inheritance hierarchies that become fragile and difficult to test and maintain.",
            "Overusing double-underscore private attributes (__x) when single-underscore protected attributes (_x) are standard in Python.",
            "Failing to implement __eq__ and wondering why two objects with identical attribute values return False when compared with =="
          ],
          practiceExercise: {
            title: "Module 11 Hands-On Laboratory: Enterprise Object-Oriented Domain Engineering",
            problem: `Implement the following 6 comprehensive object-oriented challenges:

1. Inventory Item with Property Validation:
Create an InventoryItem class with name, unit_price, and quantity_in_stock. Use @property to ensure price > 0 and stock >= 0. Add a total_value property.

2. Bank Account Hierarchy with Transaction Auditing:
Build an Account base class with deposit and withdraw methods. Create a SavingsAccount subclass that enforces a minimum balance of 500, and a CheckingAccount subclass with an overdraft allowance. Track transaction timestamps in a list.

3. Vector Mathematics Class with Operator Overloading:
Create a Vector2D class representing a 2D coordinate (x, y). Implement __add__, __sub__, __mul__ (scalar multiplication), __eq__, and __str__ returning '(x, y)'.

4. Polymorphic Notification Dispatcher:
Create EmailNotifier, SMSNotifier, and SlackNotifier classes sharing a send_alert(recipient, message) method. Write a broadcast_system_alert(notifiers, message) function demonstrating duck typing.

5. Alternative Factory Constructor from JSON:
Create a CourseModule class with a @classmethod from_json_str(json_text) that safely instantiates module objects from raw JSON text.

6. Library Catalog Management System:
Build a Book class and a LibraryCatalog class. Implement __len__, __getitem__, and add/remove book methods supporting lending and availability tracking.`,
            solutionCode: `import json
from datetime import datetime

# ==============================================================================
# Challenge 1: Inventory Item with Property Validation
# ==============================================================================
class InventoryItem:
    def __init__(self, item_id, name, unit_price, quantity_in_stock=0):
        self.item_id = item_id
        self.name = name
        self.unit_price = unit_price
        self.quantity_in_stock = quantity_in_stock

    @property
    def unit_price(self):
        return self._unit_price

    @unit_price.setter
    def unit_price(self, val):
        if val <= 0: raise ValueError("Unit price must be positive.")
        self._unit_price = float(val)

    @property
    def quantity_in_stock(self):
        return self._quantity

    @quantity_in_stock.setter
    def quantity_in_stock(self, val):
        if val < 0: raise ValueError("Stock quantity cannot be negative.")
        self._quantity = int(val)

    @property
    def total_value(self):
        return self._unit_price * self._quantity

item = InventoryItem("ITM-101", "Mechanical Keyboard", 85.50, 40)
print("Challenge 1 - Inventory Item:")
print(f"  Item: {item.name} | Total Inventory Value: $" + f"{item.total_value:,.2f}")


# ==============================================================================
# Challenge 2: Bank Account Hierarchy with Transaction Auditing
# ==============================================================================
class Account:
    def __init__(self, owner, initial_balance=0.0):
        self.owner = owner
        self.balance = float(initial_balance)
        self.transactions = []

    def deposit(self, amount):
        if amount <= 0: raise ValueError("Deposit must be positive.")
        self.balance += amount
        self.transactions.append((datetime.now().strftime("%H:%M:%S"), "DEPOSIT", amount))
        return self.balance

    def withdraw(self, amount):
        if amount <= 0: raise ValueError("Withdrawal must be positive.")
        if amount > self.balance: raise ValueError("Insufficient funds.")
        self.balance -= amount
        self.transactions.append((datetime.now().strftime("%H:%M:%S"), "WITHDRAW", amount))
        return self.balance

class SavingsAccount(Account):
    MIN_BALANCE = 500.0

    def withdraw(self, amount):
        if (self.balance - amount) < self.MIN_BALANCE:
            raise ValueError(f"Withdrawal denied: must maintain minimum balance of $" + f"{self.MIN_BALANCE}")
        return super().withdraw(amount)

class CheckingAccount(Account):
    def __init__(self, owner, initial_balance=0.0, overdraft_limit=200.0):
        super().__init__(owner, initial_balance)
        self.overdraft_limit = float(overdraft_limit)

    def withdraw(self, amount):
        if amount > (self.balance + self.overdraft_limit):
            raise ValueError("Withdrawal exceeds overdraft limit.")
        self.balance -= amount
        self.transactions.append((datetime.now().strftime("%H:%M:%S"), "WITHDRAW", amount))
        return self.balance

savings = SavingsAccount("Ananya", 1000)
savings.withdraw(300)
print(f"\nChallenge 2 - Savings Account:")
print(f"  Owner: {savings.owner} | Balance: $" + f"{savings.balance:,.2f} | Transactions: {len(savings.transactions)}")


# ==============================================================================
# Challenge 3: Vector2D Class with Operator Overloading
# ==============================================================================
class Vector2D:
    def __init__(self, x, y):
        self.x = float(x)
        self.y = float(y)

    def __add__(self, other):
        return Vector2D(self.x + other.x, self.y + other.y)

    def __sub__(self, other):
        return Vector2D(self.x - other.x, self.y - other.y)

    def __mul__(self, scalar):
        return Vector2D(self.x * scalar, self.y * scalar)

    def __eq__(self, other):
        return isinstance(other, Vector2D) and self.x == other.x and self.y == other.y

    def __str__(self):
        return f"({self.x:.1f}, {self.y:.1f})"

v1 = Vector2D(3, 4)
v2 = Vector2D(1, 2)
v3 = v1 + v2
print(f"\nChallenge 3 - Vector Mathematics:")
print(f"  {v1} + {v2} = {v3}")
print(f"  Scaled {v1} * 2.5 = {v1 * 2.5}")


# ==============================================================================
# Challenge 4: Polymorphic Notification Dispatcher
# ==============================================================================
class EmailNotifier:
    def send_alert(self, recipient, message):
        return f"[EMAIL sent to {recipient}]: {message}"

class SMSNotifier:
    def send_alert(self, recipient, message):
        return f"[SMS sent to {recipient}]: {message}"

class SlackNotifier:
    def send_alert(self, recipient, message):
        return f"[SLACK channel #{recipient}]: {message}"

def broadcast_system_alert(notifiers, recipient, alert_msg):
    logs = []
    for n in notifiers:
        logs.append(n.send_alert(recipient, alert_msg))
    return logs

dispatchers = [EmailNotifier(), SMSNotifier(), SlackNotifier()]
alerts = broadcast_system_alert(dispatchers, "devops-team", "Node 4 CPU load > 90%")
print("\nChallenge 4 - Polymorphic Notifications:")
for log in alerts:
    print(f"  • {log}")


# ==============================================================================
# Challenge 5: Alternative Factory Constructor from JSON
# ==============================================================================
class CourseModule:
    def __init__(self, module_id, title, duration_hours):
        self.module_id = module_id
        self.title = title
        self.duration_hours = int(duration_hours)

    @classmethod
    def from_json_str(cls, json_payload):
        parsed = json.loads(json_payload)
        return cls(parsed['id'], parsed['title'], parsed['hours'])

    def __repr__(self):
        return f"CourseModule('{self.module_id}', '{self.title}', {self.duration_hours}h)"

raw_mod_json = '{"id": "py-mod-11", "title": "Object-Oriented Programming", "hours": 4}'
mod_obj = CourseModule.from_json_str(raw_mod_json)
print(f"\nChallenge 5 - Factory Instantiation:")
print(f"  Created Instance: {mod_obj}")


# ==============================================================================
# Challenge 6: Library Catalog Management System
# ==============================================================================
class Book:
    def __init__(self, isbn, title, author):
        self.isbn = isbn
        self.title = title
        self.author = author
        self.is_checked_out = False

class LibraryCatalog:
    def __init__(self):
        self._books = {}

    def add_book(self, book):
        self._books[book.isbn] = book

    def __len__(self):
        return len(self._books)

    def __getitem__(self, isbn):
        return self._books[isbn]

catalog = LibraryCatalog()
catalog.add_book(Book("978-01", "Python for Everybody", "Dr. Charles Severance"))
catalog.add_book(Book("978-02", "Clean Code", "Robert C. Martin"))

print(f"\nChallenge 6 - Library Catalog Integration:")
print(f"  Total Books in Catalog (via len()): {len(catalog)}")
print(f"  Fetched via Bracket Indexing [ISBN]: '{catalog['978-01'].title}' by {catalog['978-01'].author}")`
          },
          keyTakeaways: [
            "OOP bundles state (attributes) and behavior (methods) into cohesive, reusable conceptual entities.",
            "The Class is the reusable blueprint; the Object / Instance is the allocated entity in memory.",
            "The 'self' parameter explicitly binds method execution to the specific calling object instance.",
            "The __init__ method is the constructor that initializes instance attributes upon allocation.",
            "Encapsulation protects internal object state using protected (_x) and @property getter/setter methods.",
            "Inheritance promotes code reuse, while super() cleanly delegates shared initialization to parent classes.",
            "Dynamic polymorphism enables interchangeable handling of diverse classes through duck typing.",
            "Magic dunder methods (__str__, __len__, __eq__, __add__) seamlessly integrate classes with Python's data model."
          ],
          references: [
            {"title":"Python for Everybody: Chapter 14 — Object-Oriented Programming","url":"https://www.py4e.com/html3/14-objects"},
            {"title":"Python Documentation: Classes and the Data Model","url":"https://docs.python.org/3/tutorial/classes.html"},
            {"title":"Python Documentation: Special Method Names (Dunders)","url":"https://docs.python.org/3/reference/datamodel.html#special-method-names"}
          ],
          mcqs: [
            {
              id: 1,
              question: "What does the 'self' parameter explicitly represent in a Python class method?",
              options: [
                "A reference to the class blueprint itself",
                "The specific instance of the class that is currently invoking the method",
                "A global variable accessible across all files",
                "A pointer to the parent superclass"
              ],
              correctAnswer: 1,
              explanation: "self is the explicit reference to the calling object instance, allowing methods to read and modify that instance's unique attributes."
            },
            {
              id: 2,
              question: "What is the role of the __init__ method in a Python class?",
              options: [
                "It is called when an object is destroyed by the garbage collector",
                "It is the constructor method called automatically after instance allocation to initialize attributes",
                "It converts an object into a JSON string",
                "It compiles the class into machine code"
              ],
              correctAnswer: 1,
              explanation: "__init__ is the initializer constructor called immediately after a new instance is created in memory to set its initial state."
            },
            {
              id: 3,
              question: "In a child subclass constructor, what is the role of super().__init__(*args)?",
              options: [
                "It creates a duplicate copy of the parent class",
                "It delegates execution to the parent superclass constructor, properly initializing inherited attributes",
                "It overrides all methods of the parent class with empty functions",
                "It deletes the parent class from memory"
              ],
              correctAnswer: 1,
              explanation: "super().__init__() calls the parent class's constructor, ensuring that base attributes and validations are executed correctly."
            },
            {
              id: 4,
              question: "How does Python enforce privacy for attributes declared with a double leading underscore (e.g. self.__pin)?",
              options: [
                "It encrypts the attribute value using AES-256",
                "It uses Name Mangling, internally renaming the attribute to _ClassName__pin to prevent accidental subclass override",
                "It raises an AccessDeniedError if accessed outside the class",
                "It stores the attribute in an external secure vault"
              ],
              correctAnswer: 1,
              explanation: "Python mangles double-underscore attributes by prefixing them with _ClassName to avoid name collisions in subclass hierarchies."
            },
            {
              id: 5,
              question: "Which magic dunder method allows a custom class to define behavior for the '==' equality operator?",
              options: [
                "__same__(self, other)",
                "__equals__(self, other)",
                "__eq__(self, other)",
                "__compare__(self, other)"
              ],
              correctAnswer: 2,
              explanation: "Implementing __eq__(self, other) allows custom classes to evaluate value equality when compared using the '==' operator."
            }
          ]
        }
      },
      {
        id: "py-mod-12",
        title: "Module 12 — Regular Expressions (re module)",
        description: "Pattern matching with the re module, character classes, greedy vs non-greedy quantifiers, capture groups, search/findall/sub/split, and real-world email/log extraction.",
        completed: true,
        readingMaterial: {
          introduction: `In earlier modules, text parsing required intricate combinations of string methods: find(), split(), strip(), and multi-step slice arithmetic. While suitable for simple delimiter separation, real-world data is rarely uniform. Server logs contain varying whitespace; user input includes erratic phone number formatting; email addresses have dynamic subdomains; and security audits require matching hexadecimal hashes or IPv4 addresses. Solving these complex text patterns using standard procedural string methods requires dozens of fragile, nested conditional statements.

Regular Expressions (commonly abbreviated as 'Regex') provide a concise, declarative domain-specific language for searching, validating, extracting, and replacing text patterns. Rather than specifying algorithmic step-by-step extraction instructions, you describe the shape and constraints of the target data: 'find a line starting with From:, followed by whitespace, followed by a sequence of non-whitespace characters containing an @ symbol.'

Based on Chapter 11 of Dr. Charles Severance's 'Python for Everybody' and production Python text-processing standards, this module delivers an exhaustive guide to Python's built-in re engine: mastering raw string notation (r'...'), character classes and meta-characters, greedy versus non-greedy quantifiers, capture groups and named groups, high-performance precompiled regex objects (re.compile), search-and-replace transformations (re.sub), and defensive pattern design to prevent catastrophic backtracking.`,
          objectives: [
            "Understand the motivation for regular expressions over manual string slicing and indexing.",
            "Always apply Python raw string notation (r'...') to eliminate backslash escaping hazards.",
            "Master standard meta-characters and character classes: ., \\d, \\w, \\s, \\D, \\W, \\S, and custom ranges [a-z0-9].",
            "Anchor patterns to line and word boundaries using ^, $, \\b, and \\B.",
            "Control repetition using quantifiers (*, +, ?, {m,n}) and distinguish greedy from non-greedy (*?, +?) behavior.",
            "Extract structured substrings using capture groups () and self-documenting named groups (?P<name>...).",
            "Compare and apply core re functions: re.search(), re.match(), re.findall(), re.finditer(), re.sub(), and re.split().",
            "Optimize regex execution across large document corpora using precompiled patterns with re.compile().",
            "Configure search modifiers using compilation flags: re.IGNORECASE, re.MULTILINE, re.DOTALL, and re.VERBOSE.",
            "Identify and eliminate performance bottlenecks such as catastrophic exponential backtracking."
          ],
          sections: [
            {
              heading: "1. The Power of Declarative Pattern Matching: Beyond find() and split()",
              text: `Consider the task of extracting an email address from an unstructured log line:
'From: stephen.marquard@uct.ac.za Sat Jan  5 09:14:16 2008'

Procedural Approach (find & slice):
at_pos = line.find('@')
space_before = line.rfind(' ', 0, at_pos)
space_after = line.find(' ', at_pos)
email = line[space_before + 1:space_after]

Why Procedural Parsing Breaks:
1. Fragility: If the line contains tabs instead of spaces, or leading punctuation, find() selects the wrong boundary indices.
2. Inability to Validate: find() extracts whatever text surrounds '@', even if the result is invalid ('@' preceded by spaces or non-email characters).

The Regular Expression Approach:
import re
emails = re.findall(r'\S+@\S+', line)
In a single line, re.findall() scans the string, evaluates non-whitespace character constraints (\S+), verifies the presence of '@', and extracts all matches cleanly.`
            },
            {
              heading: "2. The Raw String Notation (r'...') Requirement",
              text: `In Python string literals, the backslash character (\) is used as an escape sequence marker:
'\n' = newline, '\t' = tab, '\b' = backspace.

The Collision Hazard in Regular Expressions:
Regex also uses the backslash extensively (\d = digit, \b = word boundary, \s = whitespace).
Without raw strings:
To pass the regex pattern \b to the re engine, Python string escaping requires '\\b' so Python passes '\b' to the regex compiler. If writing complex expressions, you end up needing '\\\\' to match a single literal backslash!

The Solution: Raw Strings (r'...')
Prefixing a string with 'r' tells the Python interpreter to treat backslashes as literal characters without interpreting escape sequences:
pattern = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'
Rule of Thumb: ALWAYS declare regular expression patterns using raw string notation r'...'.`
            },
            {
              heading: "3. Meta-Characters & Standard Character Classes Cheatsheet",
              text: `The core building blocks of the Python regular expression engine:`,
              table: {
                headers: ["Symbol","Meaning","Example Match","Non-Match Example"],
                rows: [
                  [".","Any single character except newline","a.c matches 'abc', 'a9c', 'a#c'","'ac' (missing middle char)"],
                  ["^","Caret: Anchors pattern to start of string/line","^From matches 'From: user@x.com'","'Received From: user@x.com'"],
                  ["$","Dollar: Anchors pattern to end of string/line","jpg$ matches 'photo.jpg'","'photo.jpg.png'"],
                  ["\\d","Any decimal digit (equivalent to [0-9])","\\d\\d\\d matches '404', '808'","'40a'"],
                  ["\\D","Any NON-digit character (equivalent to [^0-9])","\\D+ matches 'Python', 'Error'","'123'"],
                  ["\\w","Word character: letters, digits, underscore [a-zA-Z0-9_]","\\w+ matches 'user_name_42'","'user-name' (hyphen is non-word)"],
                  ["\\W","NON-word character","\\W matches '!', '@', ' ', '-'","'a', '5', '_'"],
                  ["\\s","Whitespace character (space, tab, newline, return)","\\s+ matches '   ', '\\t\\n'","'abc'"],
                  ["\\S","NON-whitespace character","\\S+ matches 'https://arshithgroup.com'","' ' (space)"],
                  ["\\b","Word boundary (transition between \\w and \\W)","\\bcat\\b matches 'cat' in 'the cat sat'","Does NOT match 'cat' in 'catch'"]
                ]
              }
            },
            {
              heading: "4. Custom Character Sets ([...]) & Negated Sets ([^...])",
              text: `Square brackets create custom character sets, matching any single character from the enclosed collection:

1. Explicit Sets:
[aeiou] -> Matches any single lowercase vowel.
[02468] -> Matches any single even digit.

2. Character Ranges (-):
[a-z] -> Matches any single lowercase ASCII character.
[A-Z] -> Matches any single uppercase ASCII character.
[0-9] -> Matches any decimal digit.
[a-zA-Z0-9] -> Matches any alphanumeric character.

3. Negated Character Sets ([^...]):
Placing a caret (^) immediately inside the opening bracket inverts the set:
[^0-9] -> Matches any character that is NOT a digit.
[^aeiouAEIOU] -> Matches any character that is NOT an English vowel.
[^\s,;] -> Matches any character that is not whitespace, comma, or semicolon.`
            },
            {
              heading: "5. Repetition Quantifiers: Greedy vs. Non-Greedy Matching",
              text: `Quantifiers dictate how many times the preceding character or group may repeat:

Quantifier Syntax:
• * (Asterisk): 0 or more times (optional, repeatable).
• + (Plus): 1 or more times (mandatory at least once).
• ? (Question Mark): 0 or 1 time (optional, non-repeatable).
• {n}: Exactly n times (e.g. \d{4} matches a 4-digit year).
• {min,max}: Between min and max times (e.g. \d{2,4}).

The Greedy vs. Non-Greedy Trap:
By default, Python regex quantifiers (*, +, {m,n}) are GREEDY. They consume as many characters as possible before allowing the pattern to complete:
Sample String: '<p>First paragraph</p><p>Second paragraph</p>'
Greedy Pattern: r'<p>.*</p>'
Result: Matches from the VERY FIRST <p> to the VERY LAST </p>, capturing both paragraphs in a single giant string!

The Non-Greedy Solution (?):
Appending ? to any quantifier makes it non-greedy (lazy), consuming the MINIMUM number of characters necessary to satisfy the match:
Non-Greedy Pattern: r'<p>.*?</p>'
Result: Correctly extracts two independent matches: '<p>First paragraph</p>' and '<p>Second paragraph</p>'.`
            },
            {
              heading: "6. Parentheses for Grouping vs. Extraction (Capture Groups)",
              text: `Parentheses () in regular expressions serve a dual purpose:

1. Grouping:
Treating multiple tokens as a single unit for repetition:
r'(ab)+' matches 'ab', 'abab', 'ababab'.

2. Extraction Filtering:
When using re.findall(), parentheses tell Python: 'Match the entire outer pattern, but extract ONLY the substring enclosed inside the parentheses!'

Example (MBOX Email Extraction):
Log Line: 'From: stephen.marquard@uct.ac.za Sat Jan  5'
• Without Parentheses:
  re.findall(r'^From: \S+@\S+', line)
  Returns: ['From: stephen.marquard@uct.ac.za'] (Includes the unwanted prefix 'From: ')
• With Capture Group:
  re.findall(r'^From: (\S+@\S+)', line)
  Returns: ['stephen.marquard@uct.ac.za'] (Matches 'From: ' to anchor the line, but extracts ONLY the email address!)`
            },
            {
              heading: "7. Named Capture Groups: Self-Documenting Pattern Parsing",
              text: `In complex regular expressions containing 5 or more capture groups, accessing matches by numeric index (group(1), group(2)) becomes fragile and unreadable.

Syntax: (?P<name>pattern)
Python allows assigning explicit semantic identifiers to capture groups:
log_pattern = r'(?P<ip>\d{1,3}(?:\.\d{1,3}){3}) - - \[(?P<timestamp>[^\]]+)\] "(?P<method>[A-Z]+) (?P<endpoint>[^ ]+) HTTP/\d\.\d" (?P<status>\d{3})'

Match Dictionary Access:
match = re.search(log_pattern, log_line)
if match:
    data = match.groupdict()
    print(data['ip'])        # '192.168.1.1'
    print(data['endpoint'])  # '/api/v1/courses'
    print(data['status'])    # '200'`
            },
            {
              heading: "8. The Core 're' Function Suite Reference",
              text: `The essential functions in Python's standard re library:`,
              table: {
                headers: ["Function","Return Type","Matching Behavior","Best Practice Use Case"],
                rows: [
                  ["re.search(pattern, str)","Match object or None","Scans entire string for FIRST match","Testing if a pattern exists anywhere in text"],
                  ["re.match(pattern, str)","Match object or None","Matches ONLY at beginning of string (index 0)","Validating exact start formats"],
                  ["re.fullmatch(pattern, str)","Match object or None","Matches ENTIRE string from index 0 to len","Form validation (strict password, email, zip code)"],
                  ["re.findall(pattern, str)","List of strings/tuples","Finds ALL non-overlapping matches","Extracting all emails, links, or numbers"],
                  ["re.finditer(pattern, str)","Iterator of Match objects","Iterates over matches with start/end spans","Large documents where memory and match positions matter"],
                  ["re.sub(pattern, repl, str)","Transformed new string","Replaces matches with replacement string","Data sanitization, redacting sensitive PII data"],
                  ["re.split(pattern, str)","List of strings","Splits string by occurrences of pattern","Splitting text by variable whitespace or punctuation"]
                ]
              }
            },
            {
              heading: "9. Precompiled Regex Objects with re.compile() for High Performance",
              text: `When calling re.findall(pattern, text) inside a loop that iterates over 100,000 log lines:
Python must parse and compile the string pattern into regex bytecode on every single iteration!

The High-Performance Solution: re.compile()
Precompiling the regular expression outside the loop compiles the pattern into a C-level Pattern object once:

# Compile pattern once during module initialization
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$')

# Reuse compiled pattern inside high-frequency loop (5x to 10x faster)
with open('huge_maillog.txt') as f:
    for line in f:
        if EMAIL_REGEX.search(line):
            ...`
            },
            {
              heading: "10. Compilation Flags: Case-Insensitivity, Multiline & Verbose Mode",
              text: `Regex compilation flags alter the fundamental behavior of the regex engine:

1. re.IGNORECASE (re.I):
Performs case-insensitive matching:
re.findall(r'python', 'Python, PYTHON, and pyThon', re.IGNORECASE)

2. re.MULTILINE (re.M):
Makes ^ and $ match the beginning and end of each LINE within a multi-line string, rather than only the start/end of the whole string.

3. re.DOTALL (re.S):
Makes the dot (.) character match ALL characters, including newline (\n). Essential when scraping multi-line HTML blocks.

4. re.VERBOSE (re.X):
Allows writing complex, readable regular expressions spanning multiple lines, complete with whitespace formatting and explanatory comments:

PHONE_REGEX = re.compile(r"""
    ^(\+\d{1,3}\s*)?      # Optional international country code (+91, +1)
    (\(\d{3}\)|\d{3})    # 3-digit area code with or without parentheses
    [-.\s]?                 # Delimiter: dash, dot, or space
    (\d{3})                 # First 3 exchange digits
    [-.\s]?                 # Delimiter
    (\d{4})$                # Final 4 subscriber digits
""", re.VERBOSE)`
            }
          ],
          codeExamples: [
            {
              title: "1. Basic Search & Line-Anchored Extraction (Python for Everybody)",
              code: `log_data = """From stephen.marquard@uct.ac.za Sat Jan  5 09:14:16 2008
Return-Path: <postmaster@collab.sakaiproject.org>
From: louis@media.berkeley.edu Fri Jan  4 18:10:48 2008
Subject: [sakai] svn commit: r39772
From: zqian@umich.edu Fri Jan  4 16:10:39 2008"""

import re

# Goal: Extract only email addresses from lines that begin with 'From: '
# Pattern anatomy:
#   ^From:  -> Must start with 'From: '
#   (\S+@\S+) -> Capture group: non-whitespace, '@', non-whitespace
pattern = r'^From: (\S+@\S+)'

for line in log_data.split('\n'):
    match = re.search(pattern, line)
    if match:
        # group(1) retrieves the content inside the parentheses
        extracted_email = match.group(1)
        print(f"Extracted Sender: {extracted_email}")`,
              explanation: "Demonstrates line anchors (^), non-whitespace character classes (\\S+), and capture group extraction."
            },
            {
              title: "2. Extracting Numbers & Computing Statistics with re.findall()",
              code: `mbox_text = """X-DSPAM-Confidence: 0.8475
X-DSPAM-Probability: 0.0000
X-DSPAM-Confidence: 0.6178
X-DSPAM-Confidence: 0.8920
X-DSPAM-Confidence: 0.9234"""

import re

# Pattern: Match 'X-DSPAM-Confidence: ' followed by float digits
# Extract only the float part inside parentheses
float_pattern = r'^X-DSPAM-Confidence: ([0-9.]+)'

confidence_scores = []
for line in mbox_text.split('\n'):
    matches = re.findall(float_pattern, line)
    for score_str in matches:
        confidence_scores.append(float(score_str))

print(f"Confidence Scores: {confidence_scores}")
print(f"Total Matches:    {len(confidence_scores)}")
print(f"Average Score:    {sum(confidence_scores) / len(confidence_scores):.4f}")
print(f"Maximum Score:    {max(confidence_scores):.4f}")`,
              explanation: "Uses re.findall() with character classes [0-9.] to extract and convert numerical data from logs."
            },
            {
              title: "3. Greedy vs. Non-Greedy HTML Tag Parsing",
              code: `html_snippet = """<div class="course">Python Programming</div><div class="badge">Featured</div>"""

import re

# 1. Greedy Pattern (Consumes up to the LAST closing tag)
greedy_pattern = r'<div.*>.*</div>'
greedy_match = re.search(greedy_pattern, html_snippet)
print(f"Greedy Match (Single giant match):\n  {greedy_match.group(0)}\n")

# 2. Non-Greedy Pattern (Stops at the EARLIEST possible closing tag)
non_greedy_pattern = r'<div.*?>.*?</div>'
non_greedy_matches = re.findall(non_greedy_pattern, html_snippet)
print(f"Non-Greedy Matches ({len(non_greedy_matches)} distinct tags):")
for i, tag in enumerate(non_greedy_matches, 1):
    print(f"  Match {i}: {tag}")`,
              explanation: "Contrasts greedy .* with non-greedy .*? to prevent unintended multi-block consumption."
            },
            {
              title: "4. Named Capture Groups for Structured Log Tokenization",
              code: `log_line = '192.168.1.45 - [03/Oct/2026:14:20:00 +0000] "GET /api/v1/courses/python HTTP/1.1" 200 8452'

import re

pattern = re.compile(r'''
    ^(?P<ip>\d{1,3}(?:\.\d{1,3}){3})        # IPv4 address
    \s-\s\[(?P<timestamp>[^\]]+)\]        # Timestamp between brackets
    \s"(?P<method>[A-Z]+)\s                 # HTTP Method (GET, POST)
    (?P<endpoint>\S+)\sHTTP/\d\.\d"        # URL Endpoint
    \s(?P<status>\d{3})                      # HTTP Status Code
    \s(?P<bytes>\d+)                         # Transferred Bytes
''', re.VERBOSE)

match = pattern.search(log_line)
if match:
    data = match.groupdict()
    print("Parsed Structured Log Record:")
    for k, v in data.items():
        print(f"  {k:<12}: {v}")`,
              explanation: "Uses re.VERBOSE with named capture groups (?P<name>...) for readable, self-documenting log parsing."
            },
            {
              title: "5. Data Cleansing & Redaction with re.sub()",
              code: `uncleaned_text = """Contact us at support@arshithbootcamp.com or billing@arshithgroup.com.
My personal cell is 555-839-2041, and backup phone is (800) 555-0199."""

import re

# Task 1: Redact all email addresses with [CONFIDENTIAL EMAIL]
clean_emails = re.sub(r'[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+', '[CONFIDENTIAL EMAIL]', uncleaned_text)

# Task 2: Standardize all phone numbers to XXX-XXX-XXXX format
# Redact phone numbers with [PROTECTED PHONE]
clean_all = re.sub(r'\(?\d{3}\)?[-\s.]?\d{3}[-\s.]?\d{4}', '[PROTECTED PHONE]', clean_emails)

print("Sanitized Output for Compliance:")
print(clean_all)`,
              explanation: "Demonstrates re.sub() for automated data redaction, data anonymization, and PII protection."
            },
            {
              title: "6. Multi-Delimiter Text Tokenization with re.split()",
              code: `messy_data = """Python;Django,Flask   FastAPI:Pyramid|Tornado"""

import re

# Split by semicolons, commas, colons, pipes, or arbitrary whitespace
delimiters_pattern = r'[;,:\|\s]+'

frameworks = re.split(delimiters_pattern, messy_data.strip())
print(f"Extracted Frameworks ({len(frameworks)} items):")
for f in frameworks:
    print(f"  • {f}")`,
              explanation: "Uses re.split() with character sets to tokenize strings delimited by inconsistent separators."
            }
          ],
          bestPractices: [
            "Always prefix regular expression string literals with raw string notation r'...' to prevent backslash escaping errors.",
            "Precompile patterns using re.compile() whenever searching across loops or large document datasets.",
            "Use non-greedy quantifiers (*?, +?) when parsing structured markup like HTML, XML, or JSON.",
            "Use parentheses () to extract only the necessary substrings rather than manipulating full match strings post-regex.",
            "Leverage named groups (?P<name>...) and groupdict() for complex expressions with 3 or more extracted components.",
            "Use re.VERBOSE (re.X) for complex regexes to include line breaks, indentation, and explanatory comments.",
            "Anchor patterns with ^ and $ whenever validating complete user input strings to prevent partial match bypasses.",
            "Avoid nested repetition quantifiers like (a+)+ to prevent catastrophic exponential backtracking.",
            "Combine regex with standard Python string methods: if line.startswith('From:') is faster for initial coarse filtering."
          ],
          commonMistakes: [
            "Forgetting raw string prefix r'...', leading to unintended Python string escape sequence interpretations (e.g. \\b).",
            "Using re.match() instead of re.search(), forgetting that re.match() matches strictly at character index 0.",
            "Accidental greedy matching where .* swallows multiple lines or unwanted delimiter sequences.",
            "Forgetting that re.findall() returns a list of tuples when multiple capture groups are specified in a pattern.",
            "Writing overly complex monolithic regexes when a simpler combination of split() and regex is cleaner and faster.",
            "Creating catastrophic backtracking vulnerabilities through catastrophic nested quantifiers (e.g. ([a-zA-Z]+)*)."
          ],
          practiceExercise: {
            title: "Module 12 Hands-On Laboratory: Advanced Pattern Recognition & Text Extraction",
            problem: `Implement the following 6 comprehensive regular expression challenges:

1. Strict Email Validator & Component Extractor:
Write a function validate_and_parse_email(email_str) that returns a dictionary with 'username', 'domain', and 'tld' if the email is strictly valid, or None if invalid.

2. Comprehensive Phone Number Normalizer:
Given raw phone inputs in various formats ('(555) 123-4567', '555.123.4567', '5551234567', '+1 555-123-4567'), normalize all valid 10-digit numbers into standard '(555) 123-4567' format using re.sub().

3. Web Log IP and Response Status Aggregator:
Stream through Apache-style log lines, extract the client IP address and HTTP status code using named groups, and return the count of 200 (OK) vs 404 (Not Found) responses.

4. Markdown Link Extractor:
Extract all Markdown hyperlinks in the format [Link Text](https://target.url) from a markdown document, returning a list of tuples: (text, url).

5. Password Complexity Policy Validator:
Validate passwords ensuring they meet security rules: at least 8 characters, at least 1 uppercase letter, at least 1 lowercase letter, at least 1 number, and at least 1 special character (@#$%^&*).

6. Code Comment Stripper:
Write a function that strips all Python single-line comments (# ...) from code lines while preserving string literals containing '#' characters.`,
            solutionCode: `import re
from collections import Counter

# ==============================================================================
# Challenge 1: Strict Email Validator & Component Extractor
# ==============================================================================
EMAIL_STRICT = re.compile(r'^(?P<user>[a-zA-Z0-9_.+-]+)@(?P<domain>[a-zA-Z0-9-]+\.(?P<tld>[a-zA-Z]{2,}))$')

def validate_and_parse_email(email):
    match = EMAIL_STRICT.fullmatch(email.strip())
    if match:
        return match.groupdict()
    return None

test_emails = ["student@arshithbootcamp.com", "invalid-email@", "ananya.sharma@research.org", "bad@domain"]
print("Challenge 1 - Strict Email Parsing:")
for e in test_emails:
    res = validate_and_parse_email(e)
    status = f"Valid: User='{res['user']}', Domain='{res['domain']}', TLD='{res['tld']}'" if res else "INVALID"
    print(f"  {e:<32} -> {status}")


# ==============================================================================
# Challenge 2: Comprehensive Phone Number Normalizer
# ==============================================================================
PHONE_PATTERN = re.compile(r'^(?:\+?1[-.\s]?)?\(?([2-9]\d{2})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})$')

def normalize_phone_number(raw_phone):
    match = PHONE_PATTERN.search(raw_phone.strip())
    if match:
        area, prefix, line = match.groups()
        return f"({area}) {prefix}-{line}"
    return None

samples = ["(555) 123-4567", "555.234.5678", "+1 555-345-6789", "5554567890", "123-bad-phone"]
print("\nChallenge 2 - Phone Normalization:")
for s in samples:
    norm = normalize_phone_number(s)
    print(f"  {s:<20} -> {norm if norm else 'REJECTED'}")


# ==============================================================================
# Challenge 3: Web Log IP and Status Aggregator
# ==============================================================================
sample_logs = """192.168.1.1 - - [03/Oct/2026] "GET /index.html HTTP/1.1" 200 4500
10.0.0.15 - - [03/Oct/2026] "POST /api/login HTTP/1.1" 404 120
172.16.0.4 - - [03/Oct/2026] "GET /about HTTP/1.1" 200 3200
192.168.1.1 - - [03/Oct/2026] "GET /favicon.ico HTTP/1.1" 404 80"""

LOG_REGEX = re.compile(r'^(?P<ip>\S+).+"(?P<method>[A-Z]+)\s(?P<path>\S+)\s.+"\s(?P<status>\d{3})')

status_counts = Counter()
for line in sample_logs.strip().split('\n'):
    m = LOG_REGEX.search(line)
    if m:
        status_counts[m.group('status')] += 1

print("\nChallenge 3 - HTTP Status Distribution:")
for status, cnt in status_counts.items():
    print(f"  HTTP Status {status}: {cnt} requests")


# ==============================================================================
# Challenge 4: Markdown Link Extractor
# ==============================================================================
md_doc = """Explore our [Python Boot Camp](https://arshithbootcamp.com/python) and check our
[Official Documentation](https://docs.python.org/3/) or read [Python for Everybody](https://py4e.com)."""

MD_LINK_REGEX = re.compile(r'\[(?P<text>[^\]]+)\]\((?P<url>https?://[^\)]+)\)')

links = MD_LINK_REGEX.findall(md_doc)
print("\nChallenge 4 - Markdown Hyperlinks Extracted:")
for text, url in links:
    print(f"  • Link Label: '{text}' -> URL: {url}")


# ==============================================================================
# Challenge 5: Password Complexity Policy Validator
# ==============================================================================
def validate_password_security(password):
    if len(password) < 8: return False, "Must be at least 8 characters long."
    if not re.search(r'[A-Z]', password): return False, "Must contain at least 1 uppercase letter."
    if not re.search(r'[a-z]', password): return False, "Must contain at least 1 lowercase letter."
    if not re.search(r'\d', password): return False, "Must contain at least 1 digit."
    if not re.search(r'[@#$%^&*!_\-]', password): return False, "Must contain at least 1 special character (@#$%^&*!_-)."
    return True, "Strong password verified."

passwords_to_test = ["weak", "Password123", "Arshith@2026", "alllowercase!1"]
print("\nChallenge 5 - Password Policy Validation:")
for p in passwords_to_test:
    valid, reason = validate_password_security(p)
    print(f"  '{p}': {'PASS' if valid else 'FAIL'} ({reason})")


# ==============================================================================
# Challenge 6: Code Comment Stripper
# ==============================================================================
python_code = """x = 100 # Initialize x
name = "Dr. Ananya # Lead Educator" # Name attribute
total = x * 2 # Calculate total"""

def strip_code_comments(code_str):
    cleaned_lines = []
    for line in code_str.split('\n'):
        # Match '#' that is not inside quotes
        parts = re.split(r'(?<!["\'])\s*#.*$', line, maxsplit=1)
        cleaned_lines.append(parts[0])
    return '\n'.join(cleaned_lines)

clean_code = strip_code_comments(python_code)
print("\nChallenge 6 - Stripped Comments (Preserving In-String '#' Symbols):")
print(clean_code)`
          },
          keyTakeaways: [
            "Regular expressions provide a declarative syntax for searching, validating, extracting, and replacing text.",
            "Always use raw strings (r'...') to eliminate Python backslash escaping conflicts.",
            "Character classes (\\d, \\w, \\s) match decimal digits, word characters, and whitespace.",
            "Quantifiers (*, +, ?, {m,n}) control repetition; append '?' to make quantifiers non-greedy (*?, +?).",
            "Parentheses () define capture groups; re.findall() returns only the contents of capture groups.",
            "Named capture groups (?P<name>...) produce self-documenting group dictionaries.",
            "Use re.compile() to precompile regex patterns for high-frequency search loops.",
            "Use re.sub() for automated data redaction, string sanitization, and PII anonymization."
          ],
          references: [
            {"title":"Python for Everybody: Chapter 11 — Regular Expressions","url":"https://www.py4e.com/html3/11-regex"},
            {"title":"Python Documentation: re — Regular Expression Operations","url":"https://docs.python.org/3/library/re.html"},
            {"title":"Python Documentation: Regular Expression HOWTO","url":"https://docs.python.org/3/howto/regex.html"}
          ],
          mcqs: [
            {
              id: 1,
              question: "Why should regular expression pattern strings in Python always be prefixed with raw string notation r'...'?",
              options: [
                "Raw strings execute 10x faster in the regex engine",
                "Raw strings treat backslashes as literal characters, preventing Python from interpreting escape sequences like \\b or \\n",
                "Without raw strings, regular expressions cannot match numbers",
                "Raw strings automatically convert patterns to uppercase"
              ],
              correctAnswer: 1,
              explanation: "Raw strings prevent Python's lexical scanner from parsing backslashes, allowing regex escape codes (like \\b, \\d, \\s) to reach the regex engine intact."
            },
            {
              id: 2,
              question: "What is the crucial difference between the greedy quantifier .* and the non-greedy quantifier .*??",
              options: [
                ".* matches digits only; .*? matches all characters",
                ".* consumes the MAXIMUM possible number of characters; .*? consumes the MINIMUM necessary characters",
                ".*? raises an error if more than 5 characters match",
                "There is no difference; ? is ignored"
              ],
              correctAnswer: 1,
              explanation: "Greedy quantifiers expand as far as possible; non-greedy (lazy) quantifiers stop at the earliest opportunity that satisfies the pattern."
            },
            {
              id: 3,
              question: "When re.findall() is called with a pattern containing parentheses like r'^From: (\\S+@\\S+)', what does it return?",
              options: [
                "The entire matching line including 'From: '",
                "A list containing ONLY the substrings matched inside the parentheses (the email addresses)",
                "The boolean value True",
                "The character index where 'From: ' was found"
              ],
              correctAnswer: 1,
              explanation: "Parentheses denote capture groups. When capture groups are present, re.findall() returns only the extracted group content."
            },
            {
              id: 4,
              question: "What does the regex meta-character \\b represent?",
              options: [
                "A backspace character",
                "A binary digit (0 or 1)",
                "A word boundary (the transition between a word character \\w and a non-word character \\W)",
                "A bracket marker"
              ],
              correctAnswer: 2,
              explanation: "\\b asserts a word boundary position, ensuring that patterns like r'\\bcat\\b' match 'cat' as a standalone word, but not inside 'catalog'."
            },
            {
              id: 5,
              question: "Why is it best practice to use re.compile(pattern) when searching across a large file with thousands of lines?",
              options: [
                "It compiles the pattern into a C-level regex object once, eliminating repeated compilation overhead on each iteration",
                "It automatically reads the file into memory",
                "It formats the regex with color coding",
                "It prevents infinite loops"
              ],
              correctAnswer: 0,
              explanation: "re.compile() precompiles the regular expression pattern into bytecode once, significantly improving performance inside repetitive loops."
            }
          ]
        }
      },
      {
        id: "py-mod-13",
        title: "Module 13 — Networked Programs, Sockets & Web Scraping",
        description: "TCP/IP socket communication, HTTP protocol specifications, urllib URL streaming, web scraping with BeautifulSoup, HTML DOM tree navigation, and SSL/TLS security contexts.",
        completed: true,
        readingMaterial: {
          introduction: `In traditional standalone computing, software operates strictly within the confines of local memory and local disk drives. However, the true power of modern programming emerges when Python reaches across the global Internet to communicate with remote servers, retrieve real-time data feeds, automate browser workflows, and harvest knowledge from unstructured web pages.

To write networked Python programs, you must understand the underlying communication architecture: the Transport Control Protocol (TCP) and Internet Protocol (IP). A network connection is established across a 'Socket'—a two-way communication channel between two programs running across the network, uniquely identified by an IP address and a Port number. Atop TCP sockets runs the World Wide Web's foundational application protocol: the HyperText Transfer Protocol (HTTP).

Based on Chapter 12 of Dr. Charles Severance's 'Python for Everybody' and enterprise web scraping engineering standards, this module bridges the gap between low-level network mechanics and high-level data harvesting: constructing raw socket connections to send manual HTTP GET commands, utilizing Python's urllib module to treat global URLs as simple file streams, respecting web scraping ethics and robots.txt protocols, mastering the BeautifulSoup (bs4) HTML parser to navigate complex DOM trees, following hyperlink trails programmatically, and downloading binary media assets via chunked network streams.`,
          objectives: [
            "Understand the TCP/IP network protocol stack, IP addressing, and port multiplexing (Port 80 HTTP, 443 HTTPS).",
            "Explain the client-server architecture and the anatomy of HTTP 1.1 Request and Response envelopes.",
            "Open low-level TCP sockets using the socket module, transmitting encoded byte buffers across the wire.",
            "Decode network byte streams into Python Unicode strings using UTF-8 decoding (.decode('utf-8')).",
            "Stream remote web resources effortlessly using urllib.request as if reading local disk files.",
            "Configure custom HTTP User-Agent headers to prevent server-side 403 Forbidden blocking.",
            "Understand web scraping legal and ethical guidelines, crawling courtesies, and robots.txt parsing.",
            "Parse unstructured HTML documents using BeautifulSoup to extract tags, text content, and attributes.",
            "Follow hyperlink trails iteratively (the classic Python for Everybody web crawler assignment).",
            "Manage SSL/TLS certificate verification contexts safely using the standard ssl module."
          ],
          sections: [
            {
              heading: "1. The Network Protocol Stack: TCP/IP & Socket Architecture",
              text: `To communicate across the Internet, two computers establish a reliable bidirectional pipeline:

1. Internet Protocol (IP):
Routes discrete packets of data from the source computer to the destination computer based on their unique IP addresses (e.g. 192.168.1.1 or 142.250.190.46).

2. Transmission Control Protocol (TCP):
Built atop IP to guarantee reliable, ordered data delivery. TCP automatically fragments large files into packets, verifies checksums, re-transmits lost packets, and reassembles them in exact sequence.

3. The Network Socket & Ports:
A computer runs hundreds of networked programs simultaneously (browser, email, database, SSH). How does the OS know which packet belongs to which application?
Answer: Ports!
A 'Socket' is the combination of an IP address and a Port number:
• Port 80: HyperText Transfer Protocol (HTTP)
• Port 443: Secure HTTP (HTTPS / TLS)
• Port 22: Secure Shell (SSH)
• Port 25 / 587: Simple Mail Transfer Protocol (SMTP)
• Port 5432: PostgreSQL Database Server`
            },
            {
              heading: "2. The HyperText Transfer Protocol (HTTP 1.1): The Language of the Web",
              text: `HTTP is an application-level request-response protocol designed by Tim Berners-Lee in 1989. Understanding HTTP message formatting is essential for raw socket communication:

The Client Request Format:
When your browser requests a web page, it sends an exact ASCII byte stream:
GET /code3/romeo.txt HTTP/1.1\r\n
Host: data.pr4e.org\r\n
User-Agent: Python-Urllib/3.10\r\n
Connection: close\r\n
\r\n

Key Rules of an HTTP Request:
1. Method Line: GET <path> HTTP/1.1 followed by \r\n.
2. Headers: Key: Value pairs providing metadata (Host header is mandatory in HTTP 1.1).
3. The Blank Line (\r\n\r\n): Signals the end of the request headers!

The Server Response Format:
HTTP/1.1 200 OK\r\n
Content-Type: text/plain\r\n
Content-Length: 167\r\n
\r\n
[Response Payload Body]`
            },
            {
              heading: "3. Low-Level Network Programming with Python's 'socket' Module",
              text: `Python's socket module provides direct C-level access to the operating system's networking stack:

Workflow of a Socket Client:
1. Create Socket: s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
   • AF_INET: Specifies IPv4 addressing.
   • SOCK_STREAM: Specifies reliable, stream-oriented TCP.
2. Connect to Remote Host: s.connect(('data.pr4e.org', 80))
3. Send Encoded Bytes: Sockets transmit raw bytes, not Python strings! You must encode text: s.sendall(cmd.encode('utf-8'))
4. Receive Loop: Read chunks of data into a local buffer:
   while True:
       data = s.recv(512) # Reads up to 512 bytes
       if len(data) < 1: break # EOF: Server closed connection
       print(data.decode('utf-8'), end='')
5. Close Socket: s.close()`
            },
            {
              heading: "4. High-Level URL Retrieval with 'urllib.request'",
              text: `While raw sockets illustrate foundational mechanics, writing 20 lines of socket code to download a web page is inefficient. Python provides urllib.request, which abstracts away socket creation, handshakes, header management, and buffering.

Treating URLs like Local Disk Files:
import urllib.request

with urllib.request.urlopen('http://data.pr4e.org/romeo.txt') as response:
    for line in response:
        # Each line arrives as bytes; decode to Unicode
        clean_line = line.decode('utf-8').rstrip()
        print(clean_line)

Key Advantages of urllib:
• Automatically handles HTTP 1.1 Host headers and connection lifecycle.
• Supports streaming iterators: processes multi-gigabyte downloads with O(1) RAM.
• Transparently integrates with authentication, proxies, and cookies.`
            },
            {
              heading: "5. Web Scraping Fundamentals & Ethical Crawling Guidelines",
              text: `Web Scraping is the automated extraction of data from website HTML. Because scrapers can overload servers if unchecked, professional developers adhere to strict ethical guidelines:

1. Inspect robots.txt:
Every responsible website publishes crawling permissions at https://example.com/robots.txt:
User-agent: *
Disallow: /admin/
Disallow: /api/private/
Crawl-delay: 5

2. Respect Rate Limits:
Never hammer a server with hundreds of requests per second. Always insert intentional delays using time.sleep(1.0) between page fetches.

3. Provide an Identifiable User-Agent:
Identify your bot honestly with contact information in the User-Agent header so webmasters can reach you if your script causes issues.

4. Check for Official APIs First:
If a website provides a public REST API (e.g. GitHub, Weather services), always consume the structured API rather than scraping raw HTML.`
            },
            {
              heading: "6. HTML Parsing with BeautifulSoup (bs4): DOM Tree Navigation",
              text: `HTML is notoriously messy: web pages frequently contain unclosed tags, nested tables, mismatched quotes, and dynamic JavaScript scripts. Naive regex searching breaks easily on nested HTML.

BeautifulSoup (bs4):
BeautifulSoup constructs an in-memory Document Object Model (DOM) tree from malformed HTML, allowing clean navigation and querying:

from bs4 import BeautifulSoup

soup = BeautifulSoup(html_doc, 'html.parser')

Key BeautifulSoup Selection Methods:
• soup.find('h1'): Finds the FIRST matching element.
• soup.find_all('a'): Returns a list of ALL matching elements.
• tag.text or tag.get_text(): Strips inner markup and returns clean text content.
• tag['href'] or tag.get('href'): Retrieves HTML attributes safely.
• soup.select('div.course > a'): CSS selector syntax for complex querying.`
            },
            {
              heading: "7. Handling SSL/TLS Certificates and HTTPS Contexts",
              text: `Over 95% of modern web traffic uses encrypted HTTPS (Port 443).
When connecting to HTTPS endpoints with urllib:

Standard Verification:
By default, Python verifies that the remote server's SSL certificate was signed by a trusted Certificate Authority (CA).

Handling Self-Signed Certificates or Legacy Endpoints:
In private enterprise intranets or testing environments, self-signed certificates raise ssl.SSLCertVerificationError. Python's ssl module lets you configure SSL contexts explicitly:

import urllib.request
import ssl

ctx = ssl.create_default_context()
# For internal test labs where CA certs are missing:
# ctx.check_hostname = False
# ctx.verify_mode = ssl.CERT_NONE

response = urllib.request.urlopen('https://data.pr4e.org', context=ctx)`
            },
            {
              heading: "8. Socket vs. urllib vs. requests Comparison Table",
              text: `Comparing Python's network communication options:`,
              table: {
                headers: ["Library / Layer","Abstraction Level","Manual Responsibilities","Best Practice Use Case"],
                rows: [
                  ["socket (Built-in)","Transport Layer (TCP/UDP)","Handshake, HTTP headers, buffer management, byte encoding","Custom protocols, IoT devices, educational networking fundamentals"],
                  ["urllib.request (Built-in)","Application Layer (HTTP/HTTPS)","Byte decoding, parsing headers, status code handling","Standard library scripts without external dependencies"],
                  ["requests (Third-party)","High-Level HTTP Client","Minimal (automatic JSON decoding, session pooling, cookie persistence)","Enterprise production API consumers and web scrapers"],
                  ["BeautifulSoup (Third-party)","Document Parsing (HTML/XML)","Tree traversal, CSS selector extraction, attribute parsing","HTML parsing, web scraping, document text mining"]
                ]
              }
            }
          ],
          codeExamples: [
            {
              title: "1. Low-Level TCP Socket Client (Python for Everybody)",
              code: `import socket

# Step 1: Create a stream TCP/IP socket
sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

# Step 2: Establish connection to host on Port 80 (HTTP)
target_host = "data.pr4e.org"
target_port = 80
sock.connect((target_host, target_port))
print(f"TCP Handshake successful with {target_host}:{target_port}")

# Step 3: Construct strict HTTP 1.1 GET request with CRLF line breaks
http_request = "GET /code3/romeo.txt HTTP/1.1\r\nHost: data.pr4e.org\r\nConnection: close\r\n\r\n"

# Step 4: Encode Unicode string into raw ASCII/UTF-8 bytes and transmit
sock.sendall(http_request.encode('utf-8'))

# Step 5: Receive byte buffer in chunks until EOF
received_payload = ""
while True:
    data_chunk = sock.recv(512)
    if len(data_chunk) < 1:
        break # Connection closed by remote server
    received_payload += data_chunk.decode('utf-8')

sock.close()

# Split headers and body at the blank line marker
headers, body = received_payload.split('\r\n\r\n', 1)
print("--- HTTP Response Headers ---")
print(headers)
print("\n--- Response Body Payload ---")
print(body.strip())`,
              explanation: "Demonstrates socket creation, TCP connection, raw byte encoding, transmission, and stream reception."
            },
            {
              title: "2. Streaming Web Text & Word Frequency Analysis with urllib",
              code: `import urllib.request
from collections import Counter

target_url = "http://data.pr4e.org/romeo.txt"
word_counts = Counter()

# Open URL as a streaming file handle
with urllib.request.urlopen(target_url) as response:
    print(f"HTTP Status: {response.status} {response.reason}")
    print(f"Content Type: {response.headers.get_content_type()}\n")
    
    for line in response:
        # Decode byte stream to string
        clean_line = line.decode('utf-8').strip()
        words = clean_line.lower().split()
        word_counts.update(words)

print("Top 5 Most Common Words in Romeo & Juliet Extract:")
for word, count in word_counts.most_common(5):
    print(f"  • {word:<10}: {count} times")`,
              explanation: "Streams remote text using urllib.request and computes word frequency with collections.Counter."
            },
            {
              title: "3. HTML DOM Navigation & Link Extraction with BeautifulSoup",
              code: `from bs4 import BeautifulSoup

html_document = """
<html>
  <head><title>Arshith Boot Camp Courses</title></head>
  <body>
    <h1>Available Professional Tracks</h1>
    <ul class="course-list">
      <li class="item"><a href="/courses/python" id="c1">Python Masterclass</a></li>
      <li class="item"><a href="/courses/sql" id="c2">SQL for Data Analysis</a></li>
      <li class="item"><a href="/courses/web-dev" id="c3">Full Stack Web Development</a></li>
    </ul>
    <div class="footer">Contact: <a href="mailto:info@arshithbootcamp.com">Support</a></div>
  </body>
</html>
"""

soup = BeautifulSoup(html_document, 'html.parser')

print(f"Page Title: {soup.title.text}")
print(f"Main Header: {soup.find('h1').text}\n")

print("Hyperlinks Extracted:")
for anchor in soup.find_all('a'):
    link_text = anchor.get_text()
    link_href = anchor.get('href')
    link_id = anchor.get('id', 'N/A')
    print(f"  • [{link_id}] '{link_text}' -> {link_href}")`,
              explanation: "Navigates HTML DOM tree using BeautifulSoup, extracting text and tag attributes."
            },
            {
              title: "4. Custom User-Agent Header Injection for API & Scraper Politeness",
              code: `import urllib.request

target_url = "http://data.pr4e.org/romeo.txt"

# Define professional User-Agent headers
custom_headers = {
    'User-Agent': 'ArshithResearchCrawler/1.0 (+https://arshithbootcamp.com/crawler-policy)',
    'Accept': 'text/plain, text/html'
}

# Construct Request object with custom headers
req = urllib.request.Request(target_url, headers=custom_headers)

try:
    with urllib.request.urlopen(req) as resp:
        print(f"Request Succeeded: HTTP {resp.status}")
        sample = resp.read(100).decode('utf-8')
        print(f"Snippet: {sample.strip()}...")
except urllib.error.HTTPError as http_err:
    print(f"HTTP Error: {http_err.code} - {http_err.reason}")`,
              explanation: "Constructs custom urllib.request.Request objects with explicit User-Agent headers."
            },
            {
              title: "5. Downloading Binary Media with Memory-Efficient Chunk Streams",
              code: `import io
import urllib.request

# Simulate downloading a binary asset (e.g. image or manual PDF)
# Using a chunked reading loop to prevent RAM spikes on large media files
def download_stream_to_buffer(url, chunk_size=4096):
    memory_buffer = io.BytesIO()
    total_bytes = 0
    
    req = urllib.request.Request(url, headers={'User-Agent': 'PythonDownloader/3.10'})
    with urllib.request.urlopen(req) as response:
        while True:
            chunk = response.read(chunk_size)
            if not chunk:
                break
            memory_buffer.write(chunk)
            total_bytes += len(chunk)
            
    memory_buffer.seek(0)
    return memory_buffer, total_bytes

# Test on live sample file
buffer, size = download_stream_to_buffer("http://data.pr4e.org/cover3.jpg")
print(f"Binary Download Complete: {size} bytes loaded into memory buffer.")`,
              explanation: "Demonstrates chunked binary streaming preventing high memory consumption during media downloads."
            },
            {
              title: "6. SSL/TLS Context Configuration for Secure HTTPS Connections",
              code: `import urllib.request
import ssl

# Create standard SSL verification context
ssl_context = ssl.create_default_context()

https_target = "https://data.pr4e.org"
try:
    with urllib.request.urlopen(https_target, context=ssl_context) as resp:
        print(f"HTTPS Secure Connection Established: {resp.status}")
        print(f"Security Protocol: {resp.version}")
except Exception as e:
    print(f"SSL / Connection Failure: {e}")`,
              explanation: "Shows how to configure ssl contexts explicitly when connecting to secure HTTPS endpoints."
            }
          ],
          bestPractices: [
            "Always check and comply with robots.txt directives before scraping any website.",
            "Always configure descriptive User-Agent headers so server administrators can identify your script.",
            "Add delays (time.sleep(1.0)) between sequential web requests to prevent server rate limiting or denial-of-service.",
            "Never parse complex HTML using regular expressions; always use a dedicated parser like BeautifulSoup.",
            "Always decode network byte streams using .decode('utf-8') before attempting string operations.",
            "Use streaming chunk loops when downloading binary files (images/PDFs) to prevent memory exhaustion.",
            "Wrap all network requests in try/except blocks catching urllib.error.URLError and urllib.error.HTTPError.",
            "Use urllib.parse.urljoin() when following relative hyperlinks (e.g. '/about.html') to resolve absolute URLs."
          ],
          commonMistakes: [
            "Attempting to send Python Unicode strings across sockets without encoding them to bytes (.encode('utf-8')).",
            "Forgetting the required double CRLF (\\r\\n\\r\\n) delimiter at the end of HTTP request headers, causing the server to hang.",
            "Failing to handle HTTP status codes like 403 Forbidden or 404 Not Found gracefully.",
            "Using greedy regex to parse HTML, leading to corrupted text and missing tags.",
            "Scraping websites at maximum speed without sleep delays, leading to permanent IP bans.",
            "Assuming all web text is encoded in UTF-8 without checking Content-Type charset headers."
          ],
          practiceExercise: {
            title: "Module 13 Hands-On Laboratory: Network Automation & Hyperlink Crawlers",
            problem: `Complete the following 5 hands-on networking and scraping challenges:

1. Low-Level HTTP Protocol Inspector:
Write a socket script that connects to data.pr4e.org on Port 80, requests /code3/intro-short.txt, and separates the response headers from the body, printing each header key and value.

2. Web Page Word Frequency Counter:
Using urllib.request, fetch the text content of http://data.pr4e.org/romeo.txt, filter out words with fewer than 4 characters, and print the top 10 most frequent words.

3. HTML Table Scraper to Dictionary Records:
Parse an HTML table containing student names and grades using BeautifulSoup, converting each row into a clean Python dictionary.

4. Hyperlink Trail Follower (The Spider Crawler):
Simulate Dr. Chuck's classic Python for Everybody assignment: starting from an initial HTML page, find all anchor tags (<a href="...">), follow the link at a specific position (e.g. 3rd link), repeat 4 times, and report the final destination.

5. Robust URL Fetcher with Exponential Backoff Retry:
Build a safe_fetch_url(url, retries=3) function that handles network disconnections and HTTP 500 errors by backing off before failing gracefully.`,
            solutionCode: `import io
import re
import socket
import urllib.request
import urllib.error
from bs4 import BeautifulSoup
from collections import Counter

# ==============================================================================
# Challenge 1: Low-Level HTTP Protocol Inspector
# ==============================================================================
def inspect_http_headers_via_socket(host, path, port=80):
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    s.connect((host, port))
    
    cmd = f"GET {path} HTTP/1.1\r\nHost: {host}\r\nConnection: close\r\n\r\n"
    s.sendall(cmd.encode('utf-8'))
    
    response = ""
    while True:
        data = s.recv(512)
        if len(data) < 1: break
        response += data.decode('utf-8')
    s.close()
    
    header_part, body_part = response.split('\r\n\r\n', 1)
    header_lines = header_part.split('\r\n')
    status_line = header_lines[0]
    
    headers_dict = {}
    for line in header_lines[1:]:
        if ":" in line:
            k, v = line.split(":", 1)
            headers_dict[k.strip()] = v.strip()
            
    return status_line, headers_dict, len(body_part)

status, headers, body_len = inspect_http_headers_via_socket("data.pr4e.org", "/code3/intro-short.txt")
print("Challenge 1 - Low-Level Socket Headers:")
print(f"  Status Line: {status}")
print(f"  Content-Type: {headers.get('Content-Type')}")
print(f"  Body Size: {body_len} bytes")


# ==============================================================================
# Challenge 2: Web Page Word Frequency Counter
# ==============================================================================
def analyze_web_word_frequency(url, min_len=4):
    counts = Counter()
    with urllib.request.urlopen(url) as resp:
        for line in resp:
            words = line.decode('utf-8').lower().split()
            for w in words:
                clean_word = re.sub(r'[^a-z]', '', w)
                if len(clean_word) >= min_len:
                    counts[clean_word] += 1
    return counts

web_counts = analyze_web_word_frequency("http://data.pr4e.org/romeo.txt", min_len=4)
print("\nChallenge 2 - Web Word Frequency (>= 4 chars):")
for word, cnt in web_counts.most_common(5):
    print(f"  • {word:<12}: {cnt} occurrences")


# ==============================================================================
# Challenge 3: HTML Table Scraper to Dictionary Records
# ==============================================================================
sample_table_html = """
<table id="grades">
  <tr><th>Student</th><th>Subject</th><th>Score</th></tr>
  <tr><td>Ananya</td><td>Python</td><td>96</td></tr>
  <tr><td>Rahul</td><td>SQL</td><td>88</td></tr>
  <tr><td>Priya</td><td>Networking</td><td>92</td></tr>
</table>"""

def scrape_table_to_dicts(html_str):
    soup = BeautifulSoup(html_str, 'html.parser')
    table = soup.find('table')
    headers = [th.text.strip() for th in table.find_all('th')]
    
    records = []
    for row in table.find_all('tr')[1:]:
        cells = [td.text.strip() for td in row.find_all('td')]
        if cells:
            records.append(dict(zip(headers, cells)))
    return records

students_data = scrape_table_to_dicts(sample_table_html)
print("\nChallenge 3 - Scraped HTML Table:")
for s in students_data:
    print(f"  Student: {s['Student']:<10} | Subject: {s['Subject']:<12} | Score: {s['Score']}")


# ==============================================================================
# Challenge 4: Hyperlink Trail Follower (Spider Crawler Simulation)
# ==============================================================================
sample_pages = {
    "start.html": '<a href="page2.html">Next 1</a> <a href="page3.html">Next 2</a>',
    "page3.html": '<a href="page4.html">Target</a> <a href="final.html">Winner</a>',
    "final.html": '<h1>Destination Reached!</h1>'
}

def crawl_link_sequence(start_key, link_index, hops):
    current = start_key
    trail = [current]
    
    for _ in range(hops):
        html = sample_pages.get(current, "")
        soup = BeautifulSoup(html, 'html.parser')
        links = [a.get('href') for a in soup.find_all('a')]
        if len(links) > link_index:
            current = links[link_index]
            trail.append(current)
        else:
            break
    return trail

path_taken = crawl_link_sequence("start.html", 1, 2)
print("\nChallenge 4 - Hyperlink Spider Trail:")
print(f"  Crawl Trail: {' -> '.join(path_taken)}")


# ==============================================================================
# Challenge 5: Robust URL Fetcher with Error Handling
# ==============================================================================
def safe_fetch_url(url, timeout=3):
    req = urllib.request.Request(url, headers={'User-Agent': 'BootcampBot/1.0'})
    try:
        with urllib.request.urlopen(req, timeout=timeout) as response:
            return response.status, response.read(60).decode('utf-8')
    except urllib.error.HTTPError as e:
        return e.code, f"HTTP Error: {e.reason}"
    except urllib.error.URLError as e:
        return 0, f"URL Error: {e.reason}"

status_code, preview = safe_fetch_url("http://data.pr4e.org/romeo.txt")
print(f"\nChallenge 5 - Safe URL Fetch Status: HTTP {status_code}")
print(f"  Preview: {preview.strip()}...")`
          },
          keyTakeaways: [
            "TCP/IP sockets establish reliable byte-stream communication channels across IP addresses and port numbers.",
            "HTTP is an application protocol following strict request/response header rules delimited by double CRLF (\\r\\n\\r\\n).",
            "Low-level sockets transmit bytes (.encode('utf-8') / .decode('utf-8')).",
            "urllib.request abstracts network sockets, allowing remote web resources to be streamed like local files.",
            "Always inspect robots.txt and enforce courteous rate limits (time.sleep) when scraping web content.",
            "BeautifulSoup constructs an in-memory DOM tree that navigates messy, unstructured HTML reliably."
          ],
          references: [
            {"title":"Python for Everybody: Chapter 12 — Networked Programs","url":"https://www.py4e.com/html3/12-network"},
            {"title":"Python Documentation: socket — Low-level networking interface","url":"https://docs.python.org/3/library/socket.html"},
            {"title":"Python Documentation: urllib.request — Extensible library for opening URLs","url":"https://docs.python.org/3/library/urllib.request.html"}
          ],
          mcqs: [
            {
              id: 1,
              question: "Which standard port numbers are designated for unencrypted HTTP and encrypted HTTPS web traffic respectively?",
              options: [
                "Port 21 and Port 22",
                "Port 25 and Port 587",
                "Port 80 and Port 443",
                "Port 8080 and Port 3000"
              ],
              correctAnswer: 2,
              explanation: "By global networking convention, unencrypted HTTP traffic operates on Port 80, while encrypted HTTPS traffic operates on Port 443."
            },
            {
              id: 2,
              question: "In the HTTP 1.1 protocol, what exact byte sequence marks the end of request headers and the start of the payload body?",
              options: [
                "END_OF_HEADERS",
                "\\n\\n",
                "\\r\\n\\r\\n (two consecutive Carriage Return + Line Feed pairs)",
                "<CRLF>"
              ],
              correctAnswer: 2,
              explanation: "HTTP headers are separated from the response body by a blank line, represented as \\r\\n\\r\\n in standard network byte streams."
            },
            {
              id: 3,
              question: "Why must Python strings be encoded using .encode('utf-8') before being sent through a low-level socket?",
              options: [
                "Network sockets transmit raw bytes over the physical wire, not abstract Python Unicode string objects",
                "To compress the text by 50%",
                "To encrypt the data against hackers",
                "Because Python 3 does not support text strings"
              ],
              correctAnswer: 0,
              explanation: "Sockets operate at the transport layer (TCP/IP) transmitting raw binary byte sequences. Text must be serialized into bytes before transmission."
            },
            {
              id: 4,
              question: "What is the purpose of the robots.txt file on a web server?",
              options: [
                "It installs automated trading robots",
                "It specifies guidelines and permissions for automated web crawlers and search engine spiders regarding which pages may be crawled",
                "It speeds up webpage loading times",
                "It blocks all Python connections automatically"
              ],
              correctAnswer: 1,
              explanation: "robots.txt provides the Robots Exclusion Protocol directives informing compliant web crawlers which URI paths are permitted or disallowed."
            },
            {
              id: 5,
              question: "Why is BeautifulSoup preferred over regular expressions for web scraping HTML documents?",
              options: [
                "BeautifulSoup runs inside a web browser",
                "HTML is hierarchical and frequently malformed; BeautifulSoup builds a resilient DOM tree that handles nested tags and broken syntax reliably",
                "Regular expressions cannot match strings longer than 100 characters",
                "BeautifulSoup is written in assembly language"
              ],
              correctAnswer: 1,
              explanation: "HTML is non-regular; nested structures, unclosed tags, and dynamic attributes cause regex parsers to fail. BeautifulSoup parses DOM trees robustly."
            }
          ]
        }
      },
      {
        id: "py-mod-14",
        title: "Module 14 — Web Services: XML, JSON & REST APIs",
        description: "Machine-to-machine data exchange, XML tree parsing with ElementTree, JSON serialization/deserialization, REST architecture principles, API authentication, and consuming external web services.",
        completed: true,
        readingMaterial: {
          introduction: `In Module 13, we explored web scraping—extracting data from HTML designed primarily for human visual consumption. While scraping is valuable when no alternative exists, HTML is inherently fragile: a minor redesign of a website's CSS classes or tag structure immediately breaks scraper pipelines. To build robust, enterprise-grade distributed systems, modern software relies on 'Web Services'—structured machine-to-machine application programming interfaces (APIs) where systems exchange raw data over standardized network protocols without presentation markup.

Two dominant data interchange standards power the modern web: eXtensible Markup Language (XML), a hierarchical tag-based format historically dominant in enterprise banking and SOAP architectures; and JavaScript Object Notation (JSON), a lightweight, key-value format that has become the ubiquitous standard for modern RESTful web APIs and microservices.

Based on Chapter 13 of Dr. Charles Severance's 'Python for Everybody' and enterprise API engineering standards, this module provides a complete, professional masterclass in consuming and architecting web services: parsing nested XML trees using the standard xml.etree.ElementTree library, serializing and deserializing JSON payloads using Python's json module, mastering RESTful API design principles (resource endpoints, HTTP verbs, status codes), parameterizing queries with urllib.parse, implementing API Key and Bearer Token authentication, and building defensive clients that handle rate limiting (HTTP 429) and network timeouts gracefully.`,
          objectives: [
            "Explain the fundamental difference between human-oriented HTML scraping and machine-oriented API communication.",
            "Compare and contrast the architectural trade-offs between XML and JSON data interchange formats.",
            "Parse, traverse, and extract text and attributes from hierarchical XML documents using xml.etree.ElementTree.",
            "Master JSON serialization (dumps/dump) and deserialization (loads/load) and understand Python-to-JSON type mappings.",
            "Explain the core tenets of REST architecture: Resource URIs, HTTP verbs (GET, POST, PUT, DELETE), and statelessness.",
            "Interpret standard HTTP API response status codes (200 OK, 201 Created, 400 Bad Request, 401 Unauthorized, 404 Not Found, 429 Rate Limited).",
            "Construct parameterized API queries safely using urllib.parse.urlencode() to prevent encoding errors.",
            "Implement industry-standard API authentication patterns including API Keys and Authorization: Bearer <token> headers.",
            "Consume real-world public web services (Geocoding, Open-Meteo Weather, GitHub REST API) robustly.",
            "Handle API pagination, payload limits, rate limits, and transient error backoff defensively."
          ],
          sections: [
            {
              heading: "1. The Evolution of Web Services: Moving Beyond Screen Scraping",
              text: `To understand web services, compare how applications interact across the web:

1. Web Scraping (HTML):
HTML is designed for presentation to human eyes (fonts, layouts, colors, responsive wrappers).
• Problem: Fragile. When a marketing team updates a website's layout, classes change and scrapers crash.
• Inefficiency: The server spends bandwidth and compute sending megabytes of CSS, images, and HTML styling when the client only wants a single price number.

2. Web Services (REST / JSON / XML):
A Web Service exposes structured programmatic endpoints (APIs) designed strictly for consumption by software code.
• Resilience: The data contract (schema) remains stable even if the company's marketing website changes completely.
• Compact: Transmits raw semantic data payloads (JSON or XML) with minimal network overhead.`
            },
            {
              heading: "2. XML vs. JSON: Head-to-Head Comparative Architecture",
              text: `The two primary data interchange formats compared:`,
              table: {
                headers: ["Feature / Dimension","XML (eXtensible Markup Language)","JSON (JavaScript Object Notation)"],
                rows: [
                  ["Syntax Structure","Tags with open/close markers (<person>...</person>)","Key-value pairs and arrays ({\"name\": \"value\"})"],
                  ["Metadata Storage","Supports both child elements and tag attributes (<item id='1'>)","Values only (metadata represented as nested keys)"],
                  ["Data Typing","Text only; types must be parsed from strings or XSD schemas","Native support for String, Number, Boolean, Array, Null"],
                  ["Python Mapping","Requires specialized tree objects (ElementTree)","Maps 1-to-1 directly to Python dicts, lists, and primitives"],
                  ["Payload Overhead","Verbose; closing tags duplicate character byte counts","Compact; minimal punctuation overhead"],
                  ["Modern Dominance","Legacy enterprise, SOAP web services, Android manifests, RSS","De facto standard for 99% of modern REST APIs and microservices"]
                ]
              }
            },
            {
              heading: "3. XML Parsing with 'xml.etree.ElementTree'",
              text: `Python's standard library includes ElementTree, a fast hierarchical XML parser:

Sample XML:
<person>
  <name>Dr. Ananya Sharma</name>
  <phone type="intl">+91 98765 43210</phone>
  <email hide="yes"/>
</person>

Parsing Workflow:
import xml.etree.ElementTree as ET

# Step 1: Parse XML string into Element tree
root = ET.fromstring(xml_data)

# Step 2: Query child tags using find()
print(root.find('name').text) # 'Dr. Ananya Sharma'

# Step 3: Extract tag attributes using get()
print(root.find('phone').get('type')) # 'intl'
print(root.find('email').get('hide')) # 'yes'

Searching Multiple Children with findall():
users = root.findall('user') # Returns list of Element objects`
            },
            {
              heading: "4. JSON in Python: The 'json' Module & Type Mapping",
              text: `JSON maps directly onto Python's native data structures:

Python <-> JSON Type Mapping Table:
• Python dict <-> JSON Object ({...})
• Python list/tuple <-> JSON Array ([...])
• Python str <-> JSON String ("...")
• Python int/float <-> JSON Number (42, 3.14)
• Python True / False <-> JSON true / false
• Python None <-> JSON null

The 4 Core JSON Functions:
1. json.loads(str): Load from String -> Parses JSON text into a Python dict/list.
2. json.dumps(obj): Dump to String -> Serializes a Python dict/list into a JSON string.
3. json.load(file): Load from File -> Reads JSON directly from an open file handle.
4. json.dump(obj, file): Dump to File -> Writes Python data to an open file in JSON format.`
            },
            {
              heading: "5. REST Architecture & HTTP Verbs",
              text: `REST (Representational State Transfer) is the architectural pattern that governs modern web APIs:

1. Resource-Oriented URIs:
Endpoints represent nouns (resources), not actions:
• Good: /api/v1/courses, /api/v1/students/42
• Bad: /api/v1/get_all_courses, /api/v1/delete_student?id=42

2. Standard HTTP Verbs (CRUD Operations):
• GET: Read / Retrieve a resource (Idempotent: safe to repeat without side effects).
• POST: Create a new resource on the server.
• PUT: Replace an existing resource completely.
• PATCH: Partially update specific fields of a resource.
• DELETE: Remove a resource from the server.

3. Standard HTTP Status Codes:
• 200 OK: Request succeeded.
• 201 Created: New resource successfully created (typical for POST).
• 400 Bad Request: Invalid client payload or missing parameters.
• 401 Unauthorized: Missing or invalid authentication token.
• 403 Forbidden: Authenticated user lacks permission.
• 404 Not Found: Target resource does not exist.
• 429 Too Many Requests: Rate limit exceeded; client must back off.
• 500 Internal Server Error: Unhandled crash inside the server code.`
            },
            {
              heading: "6. Parameterizing Queries with 'urllib.parse.urlencode'",
              text: `When sending query parameters in an HTTP GET request (e.g. ?search=python programming&limit=10), spaces and special characters must be percent-encoded:
• Space becomes '+' or '%20'.
• Ampersand (&) becomes '%26'.

Never Concatenate Query Strings Manually!
Manual string concatenation creates broken URLs and security bugs. Always use urllib.parse.urlencode():

import urllib.parse

params = {
    'query': 'machine learning & python',
    'max_results': 25,
    'format': 'json'
}
query_string = urllib.parse.urlencode(params)
full_url = f"https://api.example.com/v1/search?{query_string}"
# Results in: https://api.example.com/v1/search?query=machine+learning+%26+python&max_results=25&format=json`
            },
            {
              heading: "7. API Authentication Standards: API Keys & Bearer Tokens",
              text: `Most production APIs require client authentication:

1. Query Parameter Authentication (Simpler APIs):
https://api.weather.com/v1/forecast?city=Bengaluru&apikey=secret_key_123

2. HTTP Authorization Header (Industry Standard):
Sending tokens inside HTTP headers keeps sensitive credentials out of server access logs and browser histories:
Authorization: Bearer <jwt_or_oauth_token>

In Python:
req = urllib.request.Request(api_url)
req.add_header('Authorization', f'Bearer {api_token}')
req.add_header('Accept', 'application/json')
with urllib.request.urlopen(req) as resp:
    ...`
            },
            {
              heading: "8. Defensive API Engineering: Handling Rate Limits & Downtime",
              text: `Production applications must anticipate external API failures:
• Rate Limits (HTTP 429): Respect Retry-After headers and apply exponential backoff.
• Network Timeouts: Always specify explicit timeout limits (e.g. timeout=10) on urlopen() calls to prevent worker threads from freezing indefinitely.
• Schema Drift: Use dict.get(key, default) when accessing response dictionaries to prevent KeyError if the API provider removes or renames an optional field.`
            }
          ],
          codeExamples: [
            {
              title: "1. Parsing Nested XML Documents with ElementTree (Python for Everybody)",
              code: `import xml.etree.ElementTree as ET

xml_data = """<app_users>
  <user id="U101" role="admin">
    <name>Dr. Ananya Sharma</name>
    <email>ananya@arshithbootcamp.com</email>
    <skills>
      <skill level="expert">Python</skill>
      <skill level="advanced">SQLite</skill>
    </skills>
  </user>
  <user id="U102" role="student">
    <name>Rahul Kumar</name>
    <email>rahul@gmail.com</email>
    <skills>
      <skill level="intermediate">Python</skill>
    </skills>
  </user>
</app_users>"""

# Parse root element
tree_root = ET.fromstring(xml_data)
print(f"Root Tag: {tree_root.tag}\n")

for user in tree_root.findall('user'):
    user_id = user.get('id')
    user_role = user.get('role')
    user_name = user.find('name').text
    user_email = user.find('email').text
    
    skill_nodes = user.find('skills').findall('skill')
    skill_list = [f"{s.text} ({s.get('level')})" for s in skill_nodes]
    
    print(f"User: {user_name} [{user_id}] | Role: {user_role}")
    print(f"  Email:  {user_email}")
    print(f"  Skills: {', '.join(skill_list)}\n")`,
              explanation: "Demonstrates XML hierarchy traversal, finding children, extracting text, and reading attributes."
            },
            {
              title: "2. JSON Serialization & Deserialization in Action",
              code: `import json

# Python Data Structure (Dictionary containing lists and nested dicts)
course_payload = {
    "course_id": "python-01",
    "title": "Python Programming Masterclass",
    "is_certified": True,
    "rating": 4.9,
    "instructors": ["Dr. Ananya Sharma", "Dr. Charles Severance"],
    "metrics": {
        "enrolled_students": 14200,
        "completion_rate": 0.88
    },
    "prerequisites": None
}

# 1. Serialization: Convert Python object -> Formatted JSON String
json_string = json.dumps(course_payload, indent=2, sort_keys=True)
print("--- Serialized JSON String ---")
print(json_string[:250] + "\n...\n")

# 2. Deserialization: Convert JSON String -> Native Python Dictionary
reconstructed = json.loads(json_string)
print("--- Deserialized Native Python Access ---")
print(f"Course: {reconstructed['title']}")
print(f"Is Certified: {reconstructed['is_certified']} (Python Type: {type(reconstructed['is_certified']).__name__})")
print(f"Prerequisites: {reconstructed['prerequisites']} (Python Type: {type(reconstructed['prerequisites']).__name__})")`,
              explanation: "Contrasts json.dumps() formatting with json.loads() native Python dictionary parsing."
            },
            {
              title: "3. Parameterizing API Requests with urllib.parse",
              code: `import urllib.parse
import urllib.request
import json

base_api_url = "https://nominatim.openstreetmap.org/search"

# Dictionary of raw search query parameters
search_parameters = {
    "q": "Bengaluru, Karnataka, India",
    "format": "json",
    "limit": 1
}

# Safe URL encoding
encoded_query = urllib.parse.urlencode(search_parameters)
complete_url = f"{base_api_url}?{encoded_query}"

print(f"Constructed URL:\n  {complete_url}\n")

# Request with polite User-Agent header (required by OpenStreetMap policy)
req = urllib.request.Request(
    complete_url,
    headers={'User-Agent': 'ArshithBootCampGeocodingLab/1.0'}
)

try:
    with urllib.request.urlopen(req, timeout=5) as response:
        raw_json = response.read().decode('utf-8')
        results = json.loads(raw_json)
        if results:
            first_match = results[0]
            print(f"Location: {first_match['display_name']}")
            print(f"Latitude: {first_match['lat']}, Longitude: {first_match['lon']}")
except Exception as err:
    print(f"Live API Query Note: Network or timeout ({err}) - simulated query successfully built.")`,
              explanation: "Uses urllib.parse.urlencode() for safe query string generation and consumes JSON responses."
            },
            {
              title: "4. Consuming REST Endpoints with Bearer Token Authorization",
              code: `import urllib.request
import json

def fetch_github_repository_metadata(owner, repo, api_token=None):
    url = f"https://api.github.com/repos/{owner}/{repo}"
    
    headers = {
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'PythonRESTClient-v1'
    }
    
    # Inject Authorization header if token provided
    if api_token:
        headers['Authorization'] = f"Bearer {api_token}"
        
    req = urllib.request.Request(url, headers=headers)
    
    try:
        with urllib.request.urlopen(req, timeout=5) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            return {
                "name": data.get("name"),
                "stars": data.get("stargazers_count"),
                "forks": data.get("forks_count"),
                "description": data.get("description")
            }
    except Exception as e:
        # Fallback simulation for offline testing
        return {
            "name": repo,
            "stars": 45000,
            "forks": 12000,
            "description": f"Simulated metadata for {owner}/{repo}"
        }

repo_info = fetch_github_repository_metadata("python", "cpython")
print("GitHub Repository Metadata:")
for k, v in repo_info.items():
    print(f"  {k:<14}: {v}")`,
              explanation: "Demonstrates standard REST API headers, Authorization Bearer injection, and response parsing."
            },
            {
              title: "5. Resilient API Client with Rate Limit (429) & Backoff Handling",
              code: `import time

def mock_weather_api_call(attempt_counter):
    if attempt_counter[0] < 2:
        attempt_counter[0] += 1
        # Simulate HTTP 429 Too Many Requests
        raise Exception("HTTP Error 429: Too Many Requests (Rate limit exceeded)")
    return {"city": "Bengaluru", "temperature_c": 28.5, "condition": "Partly Cloudy"}

def fetch_with_backoff(api_func, max_attempts=3, backoff_factor=0.2):
    attempts = [0]
    for i in range(1, max_attempts + 1):
        try:
            return api_func(attempts)
        except Exception as err:
            if "429" in str(err) and i < max_attempts:
                sleep_time = backoff_factor * (2 ** (i - 1))
                print(f"Rate limited on attempt {i}. Backing off for {sleep_time:.2f}s...")
                time.sleep(sleep_time)
            else:
                raise

weather_data = fetch_with_backoff(mock_weather_api_call)
print(f"\nResilient API Response Received:")
print(f"  City: {weather_data['city']} | Temp: {weather_data['temperature_c']}°C | Weather: {weather_data['condition']}")`,
              explanation: "Implements exponential backoff to handle HTTP 429 rate limits gracefully."
            }
          ],
          bestPractices: [
            "Always prefer consuming structured JSON REST APIs over scraping unstructured HTML.",
            "Always construct URL query parameters using urllib.parse.urlencode() to prevent encoding errors.",
            "Keep API tokens and secret keys out of source code; load them from environment variables (os.environ).",
            "Pass sensitive credentials in HTTP headers (Authorization: Bearer) rather than in URL query strings.",
            "Always declare explicit timeouts (timeout=10) on HTTP calls to prevent indefinite thread hangs.",
            "Use dict.get('key', default) when extracting fields from JSON responses to defend against schema changes.",
            "Respect API rate limits and HTTP 429 Retry-After directives using exponential backoff retry algorithms.",
            "Use indent=2 and sort_keys=True with json.dumps() when writing logs or debugging output for human readability."
          ],
          commonMistakes: [
            "Attempting to serialize non-serializable objects (like custom class instances or datetimes) directly with json.dumps().",
            "Manually building URL query strings with string concatenation, causing breakages on spaces and special symbols.",
            "Forgetting to decode HTTP byte responses (.decode('utf-8')) before passing them to json.loads().",
            "Hardcoding private API keys in Git-tracked repositories, resulting in credential leaks.",
            "Assuming API responses always return HTTP 200 without checking response status codes.",
            "Failing to handle network timeouts, leading to frozen server processes when third-party APIs experience outages."
          ],
          practiceExercise: {
            title: "Module 14 Hands-On Laboratory: Distributed Web Services & API Integration",
            problem: `Implement the following 5 hands-on web services and data interchange challenges:

1. XML Course Catalog Parser:
Parse an XML document containing courses, modules, and instructors. Extract each course title, duration, and list of modules into a structured Python list of dictionaries.

2. JSON User Profile Transformer:
Given a raw JSON string of user accounts, parse the data, filter users who are active, compute the average age, and return a clean serialized JSON report with indentation.

3. Safe Geocoding Query Builder:
Write a function build_geocoding_request(address, api_key) that validates inputs, safely encodes query parameters, and generates a valid HTTPS request URL.

4. Open-Meteo Weather API Consumer:
Build a function that simulates querying weather data for coordinates (latitude, longitude) and extracts the current temperature, windspeed, and weather code.

5. API Token Authenticated Gateway Client:
Implement a client class that maintains an authentication token, makes simulated requests, handles expired tokens (HTTP 401) by refreshing credentials, and retries the request.`,
            solutionCode: `import json
import urllib.parse
import xml.etree.ElementTree as ET

# ==============================================================================
# Challenge 1: XML Course Catalog Parser
# ==============================================================================
xml_catalog = """
<catalog>
  <course id="PY-101" category="Programming">
    <title>Python Masterclass</title>
    <duration_hours>40</duration_hours>
    <modules>
      <module order="1">Introduction to Python</module>
      <module order="2">Variables &amp; Types</module>
      <module order="3">Data Structures</module>
    </modules>
  </course>
  <course id="SQL-201" category="Data">
    <title>SQL for Analytics</title>
    <duration_hours>25</duration_hours>
    <modules>
      <module order="1">RDBMS Fundamentals</module>
      <module order="2">Complex Queries &amp; Joins</module>
    </modules>
  </course>
</catalog>
"""

def parse_xml_catalog(raw_xml):
    root = ET.fromstring(raw_xml.strip())
    courses = []
    
    for c in root.findall('course'):
        course_id = c.get('id')
        category = c.get('category')
        title = c.find('title').text
        hours = int(c.find('duration_hours').text)
        
        mods = [m.text for m in c.find('modules').findall('module')]
        courses.append({
            "id": course_id,
            "category": category,
            "title": title,
            "hours": hours,
            "modules": mods
        })
    return courses

parsed_catalog = parse_xml_catalog(xml_catalog)
print("Challenge 1 - Parsed XML Course Catalog:")
for c in parsed_catalog:
    print(f"  [{c['id']}] {c['title']} ({c['hours']}h) - {len(c['modules'])} modules")


# ==============================================================================
# Challenge 2: JSON User Profile Transformer
# ==============================================================================
raw_users_json = """
[
  {"id": 1, "name": "Ananya", "active": true, "age": 28},
  {"id": 2, "name": "Rahul", "active": false, "age": 22},
  {"id": 3, "name": "Priya", "active": true, "age": 31},
  {"id": 4, "name": "John", "active": true, "age": 25}
]
"""

def transform_active_user_metrics(json_str):
    users = json.loads(json_str)
    active_users = [u for u in users if u.get('active')]
    avg_age = sum(u['age'] for u in active_users) / len(active_users) if active_users else 0
    
    report = {
        "total_records": len(users),
        "active_count": len(active_users),
        "average_active_age": round(avg_age, 1),
        "active_members": [u['name'] for u in active_users]
    }
    return json.dumps(report, indent=2)

report_json = transform_active_user_metrics(raw_users_json)
print(f"\nChallenge 2 - Active User JSON Report:\n{report_json}")


# ==============================================================================
# Challenge 3: Safe Geocoding Query Builder
# ==============================================================================
def build_geocoding_request(address, api_key):
    if not address or not isinstance(address, str):
        raise ValueError("Address must be a non-empty string.")
        
    base_endpoint = "https://maps.googleapis.com/maps/api/geocode/json"
    params = {
        "address": address.strip(),
        "key": api_key,
        "sensor": "false"
    }
    encoded = urllib.parse.urlencode(params)
    return f"{base_endpoint}?{encoded}"

test_url = build_geocoding_request("MG Road, Bengaluru, Karnataka, India", "AIzaSy_demo_key_2026")
print(f"\nChallenge 3 - Encoded Geocoding URL:\n  {test_url}")


# ==============================================================================
# Challenge 4: Open-Meteo Weather Data Consumer
# ==============================================================================
mock_weather_response = """{
  "latitude": 12.97,
  "longitude": 77.59,
  "current_weather": {
    "temperature": 27.8,
    "windspeed": 11.2,
    "weathercode": 2
  }
}"""

def parse_weather_payload(json_payload):
    data = json.loads(json_payload)
    current = data.get("current_weather", {})
    return {
        "coordinates": f"{data.get('latitude')}, {data.get('longitude')}",
        "temperature_celsius": current.get("temperature"),
        "wind_speed_kmh": current.get("windspeed"),
        "status_code": current.get("weathercode")
    }

weather_report = parse_weather_payload(mock_weather_response)
print("\nChallenge 4 - Weather Metrics Parsed:")
for k, v in weather_report.items():
    print(f"  {k:<22}: {v}")


# ==============================================================================
# Challenge 5: API Authenticated Gateway Client with Token Refresh
# ==============================================================================
class AuthenticatedApiClient:
    def __init__(self, client_id, secret):
        self.client_id = client_id
        self.secret = secret
        self.token = None

    def authenticate(self):
        # Simulates acquiring a new Bearer token
        self.token = f"tok_bearer_{self.client_id}_active"
        return self.token

    def execute_request(self, endpoint, simulate_expired=False):
        if not self.token or simulate_expired:
            self.authenticate()
            
        headers = {"Authorization": f"Bearer {self.token}"}
        return {"status": 200, "endpoint": endpoint, "auth_header": headers["Authorization"]}

client = AuthenticatedApiClient("app-901", "sec-xyz")
res1 = client.execute_request("/v1/profile")
print(f"\nChallenge 5 - Authenticated API Client:")
print(f"  Token Initialized: {res1['auth_header']}")
res2 = client.execute_request("/v1/billing", simulate_expired=True)
print(f"  Token Refreshed:   {res2['auth_header']}")`
          },
          keyTakeaways: [
            "Web Services allow distributed programs to exchange raw data without HTML presentation markup.",
            "XML provides a hierarchical tag-based format parsed with xml.etree.ElementTree.",
            "JSON is lightweight, maps 1-to-1 onto Python dictionaries and lists, and is the standard for REST APIs.",
            "Use json.dumps() to serialize to JSON strings and json.loads() to parse JSON into Python objects.",
            "REST architecture models resources as nouns and manipulates them using standard HTTP verbs (GET, POST, PUT, DELETE).",
            "Always construct query strings using urllib.parse.urlencode() to prevent character encoding bugs.",
            "Implement defensive retry mechanisms with exponential backoff to handle HTTP 429 rate limiting gracefully."
          ],
          references: [
            {"title":"Python for Everybody: Chapter 13 — Web Services","url":"https://www.py4e.com/html3/13-web"},
            {"title":"Python Documentation: json — JSON encoder and decoder","url":"https://docs.python.org/3/library/json.html"},
            {"title":"Python Documentation: xml.etree.ElementTree — The ElementTree XML API","url":"https://docs.python.org/3/library/xml.etree.elementtree.html"}
          ],
          mcqs: [
            {
              id: 1,
              question: "What is the primary architectural difference between human-facing HTML and machine-facing Web Services (JSON / REST)?",
              options: [
                "HTML contains styling and presentation markup; Web Services transmit raw semantic data payloads with stable programmatic contracts",
                "HTML is only used on mobile phones",
                "Web Services cannot be transferred over HTTP",
                "JSON requires a web browser to be decoded"
              ],
              correctAnswer: 0,
              explanation: "Web Services transmit structured data (JSON/XML) intended for automated consumption by software, free of visual formatting markup."
            },
            {
              id: 2,
              question: "Which Python function converts a raw JSON string into a native Python dictionary or list?",
              options: [
                "json.dumps()",
                "json.loads()",
                "json.encode()",
                "json.to_dict()"
              ],
              correctAnswer: 1,
              explanation: "json.loads() (Load from String) parses a JSON-formatted string and returns the corresponding Python dictionary, list, or primitive."
            },
            {
              id: 3,
              question: "What HTTP status code does a REST API return to indicate that the client has sent too many requests and exceeded rate limits?",
              options: [
                "200 OK",
                "400 Bad Request",
                "404 Not Found",
                "429 Too Many Requests"
              ],
              correctAnswer: 3,
              explanation: "HTTP 429 Too Many Requests indicates that the client has exceeded rate limits and must pause requests (often indicated in a Retry-After header)."
            },
            {
              id: 4,
              question: "Why should API query parameters always be assembled using urllib.parse.urlencode() rather than string concatenation?",
              options: [
                "urlencode() converts Python code into JavaScript",
                "urlencode() properly percent-encodes special characters, spaces, and ampersands, preventing broken URLs and injection bugs",
                "It encrypts the URL with SSL",
                "It limits query strings to 10 parameters"
              ],
              correctAnswer: 1,
              explanation: "urllib.parse.urlencode() converts parameter dictionaries into properly escaped query strings (e.g. converting ' ' to '+' and '&' to '%26')."
            },
            {
              id: 5,
              question: "What is the industry-standard HTTP header used to transmit Bearer authentication tokens to REST APIs?",
              options: [
                "Authentication-Token: Bearer <token>",
                "Authorization: Bearer <token>",
                "Security-Key: Bearer <token>",
                "User-Token: Bearer <token>"
              ],
              correctAnswer: 1,
              explanation: "RFC 6750 establishes 'Authorization: Bearer <token>' as the standard HTTP header for transmitting OAuth2 and API bearer credentials."
            }
          ]
        }
      },
      {
        id: "py-mod-15",
        title: "Module 15 — Database Connectivity (SQLite) & Data Visualization",
        description: "Relational database modeling, SQLite integration with sqlite3, SQL queries, parameterized statements preventing SQL injection, multi-table JOINs, many-to-many junction tables, and exporting data for interactive web visualization.",
        completed: true,
        readingMaterial: {
          introduction: `Throughout the previous fourteen modules of this boot camp, we have progressed from basic syntax, variables, and loops to object-oriented programming, regular expressions, and networked web services. Yet every application we have built faced a fundamental data storage limitation: flat text files and JSON documents are linear. As dataset sizes grow to hundreds of thousands or millions of records, searching a flat file requires scanning every byte sequentially ($O(N)$ linear time), and updating a single record requires rewriting the entire file to disk.

Relational Database Management Systems (RDBMS) solve these performance and scalability limits. Databases store structured tables indexed with balanced B-trees, enabling instant $O(\log N)$ lookups across billions of rows. Furthermore, databases enforce ACID guarantees (Atomicity, Consistency, Isolation, Durability), ensuring that financial transactions and multi-user updates never leave data partially written or corrupted.

Based on Chapters 15 and 16 of Dr. Charles Severance's 'Python for Everybody', this capstone module unites every skill acquired in this boot camp into a complete, enterprise-grade data engineering pipeline. You will master Python's built-in sqlite3 engine: modeling normalized relational schemas (1-to-many and many-to-many relationships), executing parameterized SQL queries to eliminate SQL injection vulnerabilities, joining tables across Primary and Foreign Keys, managing transaction rollbacks and commits, and building the complete Capstone Project: an automated pipeline that ingests data from external sources, structures it inside SQLite, and exports it for high-impact interactive web visualization.`,
          objectives: [
            "Understand the motivation for Relational Databases over flat files, including ACID transactional guarantees.",
            "Explain the serverless, zero-configuration architecture of SQLite embedded within Python's standard library.",
            "Master the complete Python sqlite3 lifecycle: connect, cursor, execute, commit, fetch, and close.",
            "Execute Data Definition Language (DDL) commands: CREATE TABLE, DROP TABLE, and PRIMARY KEY constraints.",
            "Execute Data Manipulation Language (DML) commands: INSERT INTO, SELECT, UPDATE, and DELETE.",
            "Eliminate SQL Injection security vulnerabilities completely using parameterized queries (? placeholders).",
            "Model normalized relational database schemas: 1-to-many relationships and many-to-many junction tables.",
            "Perform multi-table relational queries using INNER JOIN and LEFT JOIN with explicit ON clauses.",
            "Implement the complete Capstone Pipeline: Web Ingestion -> SQLite Staging -> JSON Data Visualization Export.",
            "Complete the Python Programming Masterclass curriculum with an end-to-end data engineering portfolio project!"
          ],
          sections: [
            {
              heading: "1. Why Relational Databases? ACID Guarantees vs. Flat Files",
              text: `Consider building an e-commerce platform that processes 100 orders per second:

Why Flat Files Fail:
1. Concurrency Bottlenecks: If two users write to orders.csv simultaneously, file write collisions corrupt the file.
2. Slow Query Performance: Searching a 10GB CSV file for customer 'Rahul Kumar' requires reading all 10GB from disk (O(N) full table scan).
3. No Transactional Safety: If power fails while writing an invoice, the file is half-written and unusable.

The Relational Database Solution (ACID Properties):
• Atomicity: An entire transaction succeeds, or it is completely rolled back (all-or-nothing).
• Consistency: Enforces schema data types and foreign key constraints; invalid data cannot be saved.
• Isolation: Concurrent transactions execute independently without interfering with each other.
• Durability: Once a transaction is committed, data is permanently recorded on physical storage even if the server immediately crashes.`
            },
            {
              heading: "2. The SQLite Architecture: Python's Embedded Engine",
              text: `Unlike enterprise client-server databases (such as PostgreSQL, MySQL, or Oracle) which require separate server daemons, port configurations, and user permission setups:

SQLite is Serverless and Embedded:
• The entire database engine is compiled directly into Python via the sqlite3 C library.
• The entire database—including tables, indexes, schemas, and millions of rows—lives inside a single cross-platform disk file (e.g. bootcamp.sqlite).
• Zero configuration: You can create, populate, and query a database in three lines of Python without installing external database software.`
            },
            {
              heading: "3. The Python sqlite3 Lifecycle & Cursor Mechanics",
              text: `Working with SQLite in Python follows a strict 5-stage lifecycle:

1. Connect: Establish a connection handle to the database file:
conn = sqlite3.connect('academy.db')

2. Cursor: Create a cursor object to execute SQL commands and fetch results:
cur = conn.cursor()

3. Execute: Transmit SQL commands to the engine:
cur.execute('CREATE TABLE Students (id INTEGER PRIMARY KEY, name TEXT)')

4. Commit: Commit pending transactional changes permanently to disk:
conn.commit() # Essential! Without commit(), INSERT and UPDATE operations are lost on script exit!

5. Close: Release cursor and file locks cleanly:
cur.close()
conn.close()`
            },
            {
              heading: "4. Preventing SQL Injection: Parameterized Queries vs. String Formatting",
              text: `SQL Injection is consistently ranked as one of the most critical security vulnerabilities in software engineering (OWASP Top 10).

The Vulnerable Anti-Pattern (NEVER DO THIS):
user_input = "admin' OR '1'='1"
# DANGEROUS STRING FORMATTING:
query = f"SELECT * FROM Users WHERE username = '{user_input}'"
cur.execute(query)
Result: The query executes as: SELECT * FROM Users WHERE username = 'admin' OR '1'='1', granting the attacker instant administrative bypass!

The Secure Standard: Parameterized Queries (?)
Always pass values as a separate tuple parameter to cur.execute():
cur.execute("SELECT * FROM Users WHERE username = ? AND password = ?", (username, password))
How Parameterization Protects You:
The SQLite engine treats the ? placeholders strictly as data literals. Even if the user inputs SQL syntax or quotes, SQLite never interprets the input as executable SQL commands!`
            },
            {
              heading: "5. Relational Modeling & Database Normalization",
              text: `In a naive spreadsheet, a track list repeats artist names, albums, and genres thousands of times:
Row 1: 'Thunderstruck', 'AC/DC', 'The Razors Edge', 'Rock'
Row 2: 'Moneytalks', 'AC/DC', 'The Razors Edge', 'Rock'
Row 3: 'Are You Ready', 'AC/DC', 'The Razors Edge', 'Rock'

Problems with Denormalized Data:
1. Massive Disk Waste: The string 'AC/DC' is repeated millions of times.
2. Update Anomalies: If the artist changes their name, you must execute a million updates. If one fails, data becomes inconsistent.

The Normalized Relational Solution:
Divide data into specialized tables linked by numeric IDs:
• Artist Table: id (PK), name
• Album Table: id (PK), title, artist_id (FK)
• Track Table: id (PK), title, album_id (FK)`
            },
            {
              heading: "6. Primary Keys vs. Foreign Keys",
              text: `The architectural foundation of relational databases:`,
              table: {
                headers: ["Key Concept","Abbreviation","Role in Database","Integrity Rule"],
                rows: [
                  ["Primary Key","PK","A unique numeric identifier for each row in a table (e.g. id INTEGER PRIMARY KEY AUTOINCREMENT)","Must be unique, non-null, and immutable across the row lifecycle"],
                  ["Foreign Key","FK","A column in a table that references the Primary Key of another table (e.g. album_id INTEGER)","Enforces Referential Integrity: cannot point to a non-existent parent row"],
                  ["Junction Table","Association Table","A table containing Foreign Keys from two tables to represent Many-to-Many relationships","e.g. Member (user_id FK, course_id FK, role TEXT)"]
                ]
              }
            },
            {
              heading: "7. Multi-Table Relational Queries with JOIN ... ON",
              text: `To query normalized data across multiple tables, use the SQL JOIN clause:

Syntax:
SELECT Track.title, Album.title, Artist.name
FROM Track
JOIN Album ON Track.album_id = Album.id
JOIN Artist ON Album.artist_id = Artist.id
WHERE Artist.name = 'AC/DC'

Types of Joins:
1. INNER JOIN (Default):
Returns rows only where there is an exact match in both joined tables.

2. LEFT OUTER JOIN:
Returns ALL rows from the left table, even if no corresponding row exists in the right table (unmatched columns are filled with NULL).`
            },
            {
              heading: "8. Many-to-Many Relationships: Junction Tables",
              text: `Consider modeling Course Enrollment:
• A Student can enroll in Many Courses.
• A Course can have Many Students.

This Many-to-Many relationship cannot be represented with a single Foreign Key.
The Solution: A Junction (Membership) Table:
1. User Table: id (PK), name, email
2. Course Table: id (PK), title
3. Member Table: user_id (FK), course_id (FK), role (0=Student, 1=Instructor), PRIMARY KEY (user_id, course_id)

Querying Many-to-Many:
SELECT User.name, Course.title, Member.role
FROM User
JOIN Member ON User.id = Member.user_id
JOIN Course ON Member.course_id = Course.id`
            },
            {
              heading: "9. The Complete Capstone Data Pipeline: Ingest -> Stage -> Visualize",
              text: `In enterprise data engineering, Python programs follow a 3-tier architecture:

Stage 1: Ingestion (Scraping / REST API):
Network scripts (Module 13 & 14) fetch external raw data payloads (JSON or HTML).

Stage 2: Staging & Relational Modeling (SQLite):
Data is cleaned, normalized, deduplicated, and stored inside SQLite tables with proper indexes (Module 15).

Stage 3: Visualization Export:
Python executes analytical SQL aggregations (GROUP BY, COUNT, AVG) and writes clean JSON/CSV files ready for frontend rendering with Chart.js, D3.js, or Leaflet mapping.`
            }
          ],
          codeExamples: [
            {
              title: "1. Complete SQLite Table Creation & Parameterized Insertion",
              code: `import sqlite3

# Connect to database file (creates it if not existing)
conn = sqlite3.connect('academy_demo.db')
cur = conn.cursor()

# Step 1: Create fresh schema
cur.execute('DROP TABLE IF EXISTS Student')
cur.execute('''
CREATE TABLE Student (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    gpa REAL DEFAULT 0.0
)
''')

# Step 2: Insert records using secure parameterized queries (?)
students_data = [
    ("Dr. Ananya Sharma", "ananya@arshithbootcamp.com", 3.98),
    ("Rahul Kumar", "rahul.k@technology.org", 3.82),
    ("Priya Verma", "priya.v@analytics.edu", 3.91)
]

for name, email, gpa in students_data:
    cur.execute('''
    INSERT INTO Student (name, email, gpa) 
    VALUES (?, ?, ?)
    ''', (name, email, gpa))

# Step 3: Commit changes permanently to disk
conn.commit()

# Step 4: Query records
cur.execute('SELECT id, name, gpa FROM Student WHERE gpa >= ? ORDER BY gpa DESC', (3.90,))
print("Honor Students (GPA >= 3.90):")
for row in cur:
    print(f"  [ID #{row[0]}] {row[1]:<20} | GPA: {row[2]:.2f}")

cur.close()
conn.close()`,
              explanation: "Demonstrates schema creation, parameterized SQL insertion, commit, and query ordering."
            },
            {
              title: "2. Normalized Relational Schema with Multi-Table JOINs",
              code: `import sqlite3

conn = sqlite3.connect('music_catalog.db')
cur = conn.cursor()

cur.executescript('''
DROP TABLE IF EXISTS Track;
DROP TABLE IF EXISTS Album;
DROP TABLE IF EXISTS Artist;

CREATE TABLE Artist (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT UNIQUE NOT NULL
);

CREATE TABLE Album (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    artist_id INTEGER,
    FOREIGN KEY (artist_id) REFERENCES Artist (id)
);

CREATE TABLE Track (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    duration_seconds INTEGER,
    album_id INTEGER,
    FOREIGN KEY (album_id) REFERENCES Album (id)
);
''')

# Insert Normalized Entities
cur.execute('INSERT INTO Artist (name) VALUES (?)', ('AC/DC',))
artist_id = cur.lastrowid

cur.execute('INSERT INTO Album (title, artist_id) VALUES (?, ?)', ('Back in Black', artist_id))
album_id = cur.lastrowid

cur.execute('INSERT INTO Track (title, duration_seconds, album_id) VALUES (?, ?, ?)', ('Hells Bells', 312, album_id))
cur.execute('INSERT INTO Track (title, duration_seconds, album_id) VALUES (?, ?, ?)', ('Shoot to Thrill', 317, album_id))
conn.commit()

# Multi-Table Relational JOIN Query
cur.execute('''
SELECT Track.title, Album.title, Artist.name, Track.duration_seconds
FROM Track
JOIN Album ON Track.album_id = Album.id
JOIN Artist ON Album.artist_id = Artist.id
''')

print("Relational Query Results:")
for track, album, artist, duration in cur:
    print(f"  Track: '{track}' | Album: '{album}' | Artist: '{artist}' | Length: {duration}s")

conn.close()`,
              explanation: "Demonstrates 1-to-many foreign key relationships and multi-table relational SQL JOIN queries."
            },
            {
              title: "3. Many-to-Many Enrollment Modeling with Junction Tables",
              code: `import sqlite3

conn = sqlite3.connect('university.db')
cur = conn.cursor()

cur.executescript('''
DROP TABLE IF EXISTS Member;
DROP TABLE IF EXISTS User;
DROP TABLE IF EXISTS Course;

CREATE TABLE User (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL
);

CREATE TABLE Course (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL
);

CREATE TABLE Member (
    user_id INTEGER,
    course_id INTEGER,
    role INTEGER, -- 1=Instructor, 0=Student
    PRIMARY KEY (user_id, course_id)
);
''')

# Populate Users and Courses
cur.execute('INSERT INTO User (name) VALUES (?)', ('Dr. Charles Severance',))
u_chuck = cur.lastrowid
cur.execute('INSERT INTO User (name) VALUES (?)', ('Bhavana',))
u_bhavana = cur.lastrowid

cur.execute('INSERT INTO Course (title) VALUES (?)', ('Python for Everybody',))
c_python = cur.lastrowid

# Link via Junction Table (Member)
cur.execute('INSERT INTO Member VALUES (?, ?, ?)', (u_chuck, c_python, 1)) # Chuck is Instructor
cur.execute('INSERT INTO Member VALUES (?, ?, ?)', (u_bhavana, c_python, 0)) # Bhavana is Student
conn.commit()

# Query Many-to-Many Roster
cur.execute('''
SELECT User.name, Course.title, Member.role
FROM User
JOIN Member ON User.id = Member.user_id
JOIN Course ON Member.course_id = Course.id
ORDER BY Member.role DESC
''')

print("Course Roster:")
for name, course, role in cur:
    role_str = "Instructor" if role == 1 else "Student"
    print(f"  [{role_str:<10}] {name} in '{course}'")

conn.close()`,
              explanation: "Models complex many-to-many relationships using junction tables and composite primary keys."
            },
            {
              title: "4. Capstone Pipeline: Analytical Aggregation to Web JSON Export",
              code: `import sqlite3
import json

conn = sqlite3.connect(':memory:') # High-speed in-memory database for pipeline
cur = conn.cursor()

cur.execute('CREATE TABLE PageVisits (endpoint TEXT, response_time_ms INTEGER)')

# Ingest sample telemetry
mock_visits = [
    ('/courses/python', 45), ('/courses/python', 52), ('/courses/python', 48),
    ('/courses/sql', 65), ('/courses/sql', 72),
    ('/api/v1/auth', 110), ('/api/v1/auth', 125)
]
cur.executemany('INSERT INTO PageVisits VALUES (?, ?)', mock_visits)
conn.commit()

# Analytical SQL Aggregation (GROUP BY, COUNT, AVG)
cur.execute('''
SELECT endpoint, COUNT(*) as hits, ROUND(AVG(response_time_ms), 1) as avg_latency
FROM PageVisits
GROUP BY endpoint
ORDER BY hits DESC
''')

visualization_data = []
for endpoint, hits, avg_lat in cur:
    visualization_data.append({
        "route": endpoint,
        "traffic_hits": hits,
        "latency_ms": avg_lat
    })

# Export to clean JSON ready for frontend charts (Chart.js / D3)
exported_json = json.dumps(visualization_data, indent=2)
print("Pipeline Export for Dashboard Visualization:")
print(exported_json)

conn.close()`,
              explanation: "Aggregates data inside SQLite and exports clean JSON formatted for modern dashboard visualization."
            }
          ],
          bestPractices: [
            "Always use parameterized queries (?) to insert variables into SQL statements, preventing SQL injection.",
            "Always commit changes (conn.commit()) after executing INSERT, UPDATE, or DELETE operations.",
            "Always design normalized relational schemas with integer Primary Keys rather than storing repeated strings.",
            "Always close cursor and database connection handles (cur.close(), conn.close()) to release file locks.",
            "Use executescript() when running multi-statement schema migration scripts (CREATE TABLE, DROP TABLE).",
            "Use executemany() for high-performance bulk insertions instead of looping single insert statements.",
            "Index frequently queried columns (CREATE INDEX idx_name ON Table(column)) for O(log N) lookup performance.",
            "Use in-memory databases (sqlite3.connect(':memory:')) for fast unit testing and intermediate data transformations."
          ],
          commonMistakes: [
            "Using f-strings or % formatting to assemble SQL queries, creating catastrophic SQL injection vulnerabilities.",
            "Forgetting to call conn.commit(), causing all database modifications to disappear upon script exit.",
            "Leaving open database handles in external applications (like DB Browser for SQLite) that lock the database file.",
            "Duplicating foreign key references or failing to specify ON clauses in JOIN queries, causing Cartesian products.",
            "Not handling database exceptions (sqlite3.IntegrityError) when violating UNIQUE or NOT NULL constraints.",
            "Selecting all columns (SELECT *) indiscriminately instead of querying only the specific columns needed."
          ],
          practiceExercise: {
            title: "Module 15 Hands-On Laboratory: Enterprise Relational Database Capstone",
            problem: `Implement the following 4 comprehensive database capstone challenges:

1. Student Grading Database System:
Create a Students table (id, name, course, score). Insert 4 records using executemany() and parameterized queries. Calculate the average score per course using SQL GROUP BY.

2. Normalized Music Library Database:
Construct normalized Artist, Album, and Track tables linked by Foreign Keys. Insert 2 artists and 3 albums, and query the complete catalog using a 3-table INNER JOIN.

3. Many-to-Many University Enrollment System:
Implement User, Course, and Member tables. Enroll multiple students across courses and write a query that lists each course along with the total count of enrolled students.

4. Data Visualization Exporter:
Run an aggregation query on the University database that calculates course enrollment statistics and exports the results as a formatted JSON document ready for Chart.js bar graphs.`,
            solutionCode: `import sqlite3
import json

# ==============================================================================
# Challenge 1: Student Grading Database System
# ==============================================================================
conn = sqlite3.connect(':memory:')
cur = conn.cursor()

cur.execute('''
CREATE TABLE StudentGrades (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    course TEXT NOT NULL,
    score INTEGER NOT NULL
)
''')

records = [
    ("Ananya", "Python", 98),
    ("Rahul", "Python", 92),
    ("Priya", "SQL", 95),
    ("John", "SQL", 85)
]
cur.executemany('INSERT INTO StudentGrades (name, course, score) VALUES (?, ?, ?)', records)
conn.commit()

cur.execute('''
SELECT course, COUNT(*) as total_students, ROUND(AVG(score), 1) as avg_score
FROM StudentGrades
GROUP BY course
ORDER BY avg_score DESC
''')

print("Challenge 1 - Course Averages:")
for course, count, avg in cur:
    print(f"  Course: {course:<10} | Enrolled: {count} | Average Score: {avg}")


# ==============================================================================
# Challenge 2: Normalized Music Library Database
# ==============================================================================
cur.executescript('''
CREATE TABLE Artist (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT);
CREATE TABLE Album (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, artist_id INTEGER);
CREATE TABLE Track (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, album_id INTEGER);
''')

cur.execute('INSERT INTO Artist (name) VALUES (?)', ('Pink Floyd',))
art_id = cur.lastrowid
cur.execute('INSERT INTO Album (title, artist_id) VALUES (?, ?)', ('The Dark Side of the Moon', art_id))
alb_id = cur.lastrowid
cur.execute('INSERT INTO Track (title, album_id) VALUES (?, ?)', ('Time', alb_id))
cur.execute('INSERT INTO Track (title, album_id) VALUES (?, ?)', ('Money', alb_id))
conn.commit()

cur.execute('''
SELECT Track.title, Album.title, Artist.name
FROM Track
JOIN Album ON Track.album_id = Album.id
JOIN Artist ON Album.artist_id = Artist.id
''')
print("\nChallenge 2 - Normalized Catalog JOIN:")
for track, album, artist in cur:
    print(f"  '{track}' from album '{album}' by {artist}")


# ==============================================================================
# Challenge 3: Many-to-Many University Enrollment System
# ==============================================================================
cur.executescript('''
CREATE TABLE User (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT);
CREATE TABLE Course (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT);
CREATE TABLE Member (user_id INTEGER, course_id INTEGER, PRIMARY KEY (user_id, course_id));
''')

cur.execute('INSERT INTO User (name) VALUES (?)', ('Ananya',))
u1 = cur.lastrowid
cur.execute('INSERT INTO User (name) VALUES (?)', ('Rahul',))
u2 = cur.lastrowid
cur.execute('INSERT INTO Course (title) VALUES (?)', ('Python Masterclass',))
c1 = cur.lastrowid
cur.execute('INSERT INTO Course (title) VALUES (?)', ('SQL Analytics',))
c2 = cur.lastrowid

# Enrollments
cur.executemany('INSERT INTO Member VALUES (?, ?)', [(u1, c1), (u1, c2), (u2, c1)])
conn.commit()

cur.execute('''
SELECT Course.title, COUNT(Member.user_id) as enrolled_count
FROM Course
LEFT JOIN Member ON Course.id = Member.course_id
GROUP BY Course.id
''')
print("\nChallenge 3 - Course Enrollment Totals:")
for title, cnt in cur:
    print(f"  Course: {title:<22} | Total Students: {cnt}")


# ==============================================================================
# Challenge 4: Data Visualization Exporter
# ==============================================================================
cur.execute('''
SELECT Course.title, COUNT(Member.user_id) as count
FROM Course
LEFT JOIN Member ON Course.id = Member.course_id
GROUP BY Course.id
''')

chart_payload = {
    "chart_type": "bar",
    "labels": [],
    "data_points": []
}

for title, cnt in cur:
    chart_payload["labels"].append(title)
    chart_payload["data_points"].append(cnt)

exported = json.dumps(chart_payload, indent=2)
print("\nChallenge 4 - Chart.js JSON Export:\n" + exported)

conn.close()`
          },
          keyTakeaways: [
            "Relational databases provide ACID guarantees, persistent storage, and indexed fast search queries.",
            "sqlite3 is embedded directly in Python's standard library with zero configuration required.",
            "Always use parameterized queries (?) to prevent dangerous SQL injection security vulnerabilities.",
            "Always commit changes (conn.commit()) to ensure database modifications persist to disk.",
            "Normalize database schemas into separate tables linked by Primary and Foreign Keys to eliminate data duplication.",
            "Query multi-table relational schemas using SQL JOIN ... ON clauses.",
            "Model many-to-many relationships using junction tables with composite primary keys.",
            "You have completed the entire Python Programming Masterclass curriculum!"
          ],
          references: [
            {"title":"Python for Everybody: Chapter 15 — Using Databases and SQL","url":"https://www.py4e.com/html3/15-database"},
            {"title":"Python for Everybody: Chapter 16 — Visualizing Data","url":"https://www.py4e.com/html3/16-tasks"},
            {"title":"Python Documentation: sqlite3 — DB-API 2.0 interface for SQLite databases","url":"https://docs.python.org/3/library/sqlite3.html"}
          ],
          mcqs: [
            {
              id: 1,
              question: "What do the ACID properties in relational database management systems guarantee?",
              options: [
                "Asynchronous, Compiled, Indexed, Distributed queries",
                "Atomicity, Consistency, Isolation, and Durability for reliable transactional state management",
                "Automatic Code Inspection and Debugging",
                "Application Creation In Databases"
              ],
              correctAnswer: 1,
              explanation: "ACID guarantees that database transactions are processed reliably: all-or-nothing (Atomicity), valid (Consistency), isolated, and durable on disk."
            },
            {
              id: 2,
              question: "Why must values in SQL statements ALWAYS be passed using parameterized placeholders (?) rather than Python f-strings?",
              options: [
                "Parameterized queries run on the GPU",
                "String formatting exposes the database to catastrophic SQL Injection attacks where malicious user input can execute arbitrary SQL commands",
                "f-strings are not supported in Python 3",
                "Parameterized queries only work with numbers"
              ],
              correctAnswer: 1,
              explanation: "Parameterized queries pass variables as separate literal data parameters, completely preventing attackers from injecting malicious SQL commands."
            },
            {
              id: 3,
              question: "What happens if a Python script executes cur.execute('INSERT INTO ...') on an SQLite database but terminates without calling conn.commit()?",
              options: [
                "The changes are automatically committed upon script exit",
                "The pending transaction is aborted and rolled back; no changes are saved permanently to the database file",
                "SQLite corrupts the database file",
                "Python raises an UncommittedTransactionError"
              ],
              correctAnswer: 1,
              explanation: "SQLite requires an explicit conn.commit() to persist transactional changes to disk. Without commit(), uncommitted changes are discarded on exit."
            },
            {
              id: 4,
              question: "What is the architectural purpose of a Foreign Key (FK) in a relational database schema?",
              options: [
                "It stores passwords for international users",
                "It establishes a verified link to the Primary Key (PK) of another table, enforcing referential integrity and eliminating string duplication",
                "It encrypts the table using an external key",
                "It speeds up file downloads over the network"
              ],
              correctAnswer: 1,
              explanation: "A Foreign Key points to a Primary Key in another table, enabling normalized relational schemas and guaranteeing referential integrity."
            },
            {
              id: 5,
              question: "How is a Many-to-Many relationship (e.g. Students enrolled in multiple Courses) modeled in a normalized relational database?",
              options: [
                "By storing a comma-separated string of course IDs inside the Student table",
                "By using an intermediary Junction (Membership) table containing Foreign Keys referencing both the Student and Course tables",
                "By duplicating the entire Student table for every course",
                "Many-to-Many relationships cannot be modeled in relational databases"
              ],
              correctAnswer: 1,
              explanation: "A Junction (Association) table breaks a Many-to-Many relationship into two 1-to-Many relationships, linking foreign keys with composite keys."
            }
          ]
        }
      }
    ],
    finalTest: {
          "id": "py-final-test",
          "title": "Python Programming Master Certification Exam (4 Student Paper Sets)",
          "description": "Official certification exam series featuring 4 comprehensive question papers set for specific candidates. Select your assigned paper set to proceed.",
          "passingScore": 80,
          "timeLimitMinutes": 45,
          "totalMarks": 100,
          "published": true,
          "questionPapers": [
                {
                      "id": "qp-arshith-kumar",
                      "studentName": "Arshith Kumar",
                      "candidateId": "ARB-STD-001",
                      "rollNo": "2026-AK-101",
                      "paperCode": "ARB-PY-QP01",
                      "title": "Paper 1: Arshith Kumar Examination Set",
                      "subtitle": "Architecture, Memory Model, Syntax Semantics & Data Structures",
                      "timeLimitMinutes": 45,
                      "passingScore": 80,
                      "totalMarks": 100,
                      "questions": [
                            {
                                  "id": "ak-1",
                                  "questionNumber": 1,
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
                                  "explanation": "CPython compiles source code (.py) into intermediate bytecode (.pyc) stored in __pycache__. On subsequent runs, CPython skips parsing and compilation if the source file timestamp matches the cached bytecode header."
                            },
                            {
                                  "id": "ak-2",
                                  "questionNumber": 2,
                                  "topic": "Memory References & In-Place Mutation",
                                  "questionText": "What will be the exact values of 'a' and 'c' after executing the following Python code snippet?",
                                  "codeSnippet": "a = [10, 20, 30]\nb = a\nc = list(a)\nb.append(40)\na += [50]",
                                  "options": [
                                        "a is [10, 20, 30, 40, 50], c is [10, 20, 30]",
                                        "a is [10, 20, 30, 50], c is [10, 20, 30, 40]",
                                        "a is [10, 20, 30, 40, 50], c is [10, 20, 30, 40, 50]",
                                        "a is [10, 20, 30, 40], c is [10, 20, 30]"
                                  ],
                                  "correctAnswer": 0,
                                  "explanation": "b = a binds 'b' to the same object in heap memory. c = list(a) creates a shallow clone. b.append(40) mutates the list. For lists, '+=' is an in-place extend (calls __iadd__), so 'a' becomes [10, 20, 30, 40, 50] while 'c' remains unaffected [10, 20, 30]."
                            },
                            {
                                  "id": "ak-3",
                                  "questionNumber": 3,
                                  "topic": "Logical Operators & Short-Circuit Precedence",
                                  "questionText": "What is the evaluated result of the following compound expression in Python?",
                                  "codeSnippet": "result = [] or 0 or 'Arshith' and [1, 2, 3] or False",
                                  "options": [
                                        "True",
                                        "'Arshith'",
                                        "[1, 2, 3]",
                                        "False"
                                  ],
                                  "correctAnswer": 2,
                                  "explanation": "'and' has higher precedence than 'or'. In ''Arshith' and [1, 2, 3]', since 'Arshith' is truthy, it evaluates to [1, 2, 3]. Then '[] or 0 or [1, 2, 3] or False' short-circuits at the first truthy value, which is [1, 2, 3]."
                            },
                            {
                                  "id": "ak-4",
                                  "questionNumber": 4,
                                  "topic": "Assignment Expressions & Scoping",
                                  "questionText": "What will be printed by the following code utilizing the walrus operator (:=)?",
                                  "codeSnippet": "data = [2, 4, 6, 8]\nif (n := len(data)) > 3:\n    print(f'Length: {n}')\nprint(n)",
                                  "options": [
                                        "Length: 4 followed by NameError: name 'n' is not defined",
                                        "Length: 4 followed by 4",
                                        "Length: 4 followed by None",
                                        "SyntaxError: invalid syntax"
                                  ],
                                  "correctAnswer": 1,
                                  "explanation": "The walrus operator := assigns the expression value to 'n' in the enclosing scope (not isolated to the if block). Thus 'n' persists after the if statement with the value 4."
                            },
                            {
                                  "id": "ak-5",
                                  "questionNumber": 5,
                                  "topic": "Loop Else Clause Semantics",
                                  "questionText": "What is the output of the following nested loop construct?",
                                  "codeSnippet": "nums = [1, 3, 5, 7]\nfor x in nums:\n    if x % 2 == 0:\n        print('Even found')\n        break\nelse:\n    print('All odd')",
                                  "options": [
                                        "Even found",
                                        "All odd",
                                        "No output printed",
                                        "Even found followed by All odd"
                                  ],
                                  "correctAnswer": 1,
                                  "explanation": "The 'else' block attached to a for or while loop executes only if the loop completes normally without encountering a 'break' statement. Since no even number was found, the loop completed fully and printed 'All odd'."
                            },
                            {
                                  "id": "ak-6",
                                  "questionNumber": 6,
                                  "topic": "Mutable Default Parameter Trap",
                                  "questionText": "What will be printed upon calling the function twice as shown below?",
                                  "codeSnippet": "def record_score(score, history=[]):\n    history.append(score)\n    return history\n\nprint(record_score(85))\nprint(record_score(92))",
                                  "options": [
                                        "[85] and [92]",
                                        "[85] and [85, 92]",
                                        "None and None",
                                        "[85, 92] and [85, 92]"
                                  ],
                                  "correctAnswer": 1,
                                  "explanation": "Default parameter expressions are evaluated once when the function is defined, not each time it is invoked. The mutable list is shared across subsequent calls, printing [85] then [85, 92]."
                            },
                            {
                                  "id": "ak-7",
                                  "questionNumber": 7,
                                  "topic": "LEGB Scope Resolution & Nonlocal",
                                  "questionText": "What is printed when outer() is executed?",
                                  "codeSnippet": "def outer():\n    x = 10\n    def inner():\n        nonlocal x\n        x += 5\n    inner()\n    return x\nprint(outer())",
                                  "options": [
                                        "10",
                                        "15",
                                        "UnboundLocalError",
                                        "NameError"
                                  ],
                                  "correctAnswer": 1,
                                  "explanation": "The 'nonlocal' keyword binds 'x' to the nearest enclosing non-global scope, modifying outer's local variable 'x' from 10 to 15."
                            },
                            {
                                  "id": "ak-8",
                                  "questionNumber": 8,
                                  "topic": "Hashability & Dictionary Keys",
                                  "questionText": "Which of the following data structures can be safely used as a key in a Python dictionary?",
                                  "codeSnippet": null,
                                  "options": [
                                        "['user_1', 'user_2']",
                                        "{'role': 'admin'}",
                                        "('admin', 101, [1, 2])",
                                        "('admin', 101, (1, 2))"
                                  ],
                                  "correctAnswer": 3,
                                  "explanation": "Dictionary keys must be hashable (__hash__). Tuples are only hashable if all elements contained within them are also hashable. A tuple containing a mutable list raises TypeError: unhashable type: 'list'."
                            },
                            {
                                  "id": "ak-9",
                                  "questionNumber": 9,
                                  "topic": "Late Binding Closures in Comprehensions",
                                  "questionText": "What will be printed when calling funcs[0]() and funcs[2]()?",
                                  "codeSnippet": "funcs = [lambda: i * 2 for i in range(4)]\nprint(funcs[0](), funcs[2]())",
                                  "options": [
                                        "0 4",
                                        "6 6",
                                        "0 0",
                                        "NameError: 'i' is not defined"
                                  ],
                                  "correctAnswer": 1,
                                  "explanation": "Python closures exhibit late binding: variables in closures are looked up when the inner function is called. When range(4) completes, 'i' equals 3. Both funcs[0]() and funcs[2]() evaluate 3 * 2 = 6."
                            },
                            {
                                  "id": "ak-10",
                                  "questionNumber": 10,
                                  "topic": "Advanced Slicing with Negative Step",
                                  "questionText": "What is the output of the slice text[6:1:-2]?",
                                  "codeSnippet": "text = 'ABCDEFGH'",
                                  "options": [
                                        "'GE'",
                                        "'GEC'",
                                        "'FDB'",
                                        "'HFD'"
                                  ],
                                  "correctAnswer": 1,
                                  "explanation": "Indices of 'ABCDEFGH' are A:0, B:1, C:2, D:3, E:4, F:5, G:6, H:7. Starting at index 6 ('G'), moving backwards by step 2 stops before index 1: yields index 6 ('G'), index 4 ('E'), index 2 ('C') -> 'GEC'."
                            },
                            {
                                  "id": "ak-11",
                                  "questionNumber": 11,
                                  "topic": "Object Identity (is) vs Value Equality (==)",
                                  "questionText": "Why does (1000 + 1 is 1001) evaluate to False in standard CPython interactive shell while (10 + 1 is 11) evaluates to True?",
                                  "codeSnippet": null,
                                  "options": [
                                        "Python integers above 256 are automatically converted to float types in memory",
                                        "CPython pre-allocates an integer cache array for small integers between -5 and 256; larger integers create distinct heap objects",
                                        "The 'is' operator checks value equality only for numbers smaller than 100",
                                        "Large integers cannot be compared with 'is' due to integer overflow restrictions"
                                  ],
                                  "correctAnswer": 1,
                                  "explanation": "CPython maintains an internal small integer singleton cache for values in the range [-5, 256]. Values outside this range allocate fresh PyObject instances on the heap, producing different memory addresses (id)."
                            },
                            {
                                  "id": "ak-12",
                                  "questionNumber": 12,
                                  "topic": "Tuple Immutability & Nested References",
                                  "questionText": "What happens when executing the following statement?",
                                  "codeSnippet": "t = (1, 2, [3, 4])\nt[2] += [5]",
                                  "options": [
                                        "TypeError is raised and the list remains [3, 4]",
                                        "TypeError is raised, but the list is mutated to [3, 4, 5]",
                                        "The tuple is successfully modified to (1, 2, [3, 4, 5]) without errors",
                                        "SyntaxError: invalid assignment"
                                  ],
                                  "correctAnswer": 1,
                                  "explanation": "In-place += calls [3, 4].__iadd__([5]), successfully extending the list in heap memory. Then Python attempts to assign the result back to t[2], which raises TypeError because tuples are immutable. The list is mutated despite the error."
                            },
                            {
                                  "id": "ak-13",
                                  "questionNumber": 13,
                                  "topic": "List Comprehensions vs Generator Expressions",
                                  "questionText": "Which statement correctly distinguishes a list comprehension from a generator expression?",
                                  "codeSnippet": null,
                                  "options": [
                                        "List comprehensions are lazy while generators compute everything eagerly into RAM",
                                        "Generator expressions produce a generator object that evaluates items lazily on demand (O(1) memory), whereas list comprehensions allocate the full list in memory immediately",
                                        "Generator expressions can be indexed with bracket notation [0] while list comprehensions cannot",
                                        "List comprehensions cannot be used inside for loops"
                                  ],
                                  "correctAnswer": 1,
                                  "explanation": "Generator expressions (x for x in data) generate values on-the-fly using the iterator protocol (__next__), consuming constant O(1) memory regardless of dataset size."
                            },
                            {
                                  "id": "ak-14",
                                  "questionNumber": 14,
                                  "topic": "Set Operations & Symmetric Difference",
                                  "questionText": "What is the result of set_a ^ set_b given the sets below?",
                                  "codeSnippet": "set_a = {1, 2, 3, 4}\nset_b = {3, 4, 5, 6}",
                                  "options": [
                                        "{3, 4}",
                                        "{1, 2, 5, 6}",
                                        "{1, 2, 3, 4, 5, 6}",
                                        "Empty set set()"
                                  ],
                                  "correctAnswer": 1,
                                  "explanation": "The caret (^) operator represents symmetric difference: elements present in either set_a or set_b, but not in both. Common elements 3 and 4 are excluded, leaving {1, 2, 5, 6}."
                            },
                            {
                                  "id": "ak-15",
                                  "questionNumber": 15,
                                  "topic": "Dictionary Views & Dynamic Mutation",
                                  "questionText": "What does the following snippet print?",
                                  "codeSnippet": "d = {'a': 1, 'b': 2}\nkeys = d.keys()\nd['c'] = 3\nprint(len(keys))",
                                  "options": [
                                        "2",
                                        "3",
                                        "RuntimeError: dictionary changed size during iteration",
                                        "TypeError: dict_keys has no len"
                                  ],
                                  "correctAnswer": 1,
                                  "explanation": "In Python 3, d.keys() returns a dynamic dictionary view object (dict_keys) linked to the underlying hash table. When new keys are added, the view reflects changes immediately, so len(keys) is 3."
                            }
                      ]
                },
                {
                      "id": "qp-priya-sharma",
                      "studentName": "Priya Sharma",
                      "candidateId": "ARB-STD-002",
                      "rollNo": "2026-PS-102",
                      "paperCode": "ARB-PY-QP02",
                      "title": "Paper 2: Priya Sharma Examination Set",
                      "subtitle": "Object-Oriented Protocols, Magic Methods & Exception Architecture",
                      "timeLimitMinutes": 45,
                      "passingScore": 80,
                      "totalMarks": 100,
                      "questions": [
                            {
                                  "id": "ps-1",
                                  "questionNumber": 1,
                                  "topic": "Object Creation: __new__ vs __init__",
                                  "questionText": "What is the primary role of __new__ compared to __init__ in Python's object model?",
                                  "codeSnippet": null,
                                  "options": [
                                        "__init__ allocates the raw memory block for the object while __new__ assigns attribute values",
                                        "__new__ is a static method responsible for creating and returning the object instance; __init__ is an instance method that initializes that created instance",
                                        "__new__ is only called when sub-classing built-in C types like int or str, while __init__ is called for user-defined classes",
                                        "__new__ and __init__ are identical aliases and can be used interchangeably"
                                  ],
                                  "correctAnswer": 1,
                                  "explanation": "__new__(cls, ...) is the actual constructor that allocates and returns a new instance of cls. Once returned, Python passes that instance as 'self' to __init__(self, ...) for attribute initialization."
                            },
                            {
                                  "id": "ps-2",
                                  "questionNumber": 2,
                                  "topic": "Multiple Inheritance & C3 Linearization (MRO)",
                                  "questionText": "Given the class hierarchy below, in what order does Python resolve method calls on an instance of D?",
                                  "codeSnippet": "class A: pass\nclass B(A): pass\nclass C(A): pass\nclass D(B, C): pass",
                                  "options": [
                                        "D -> B -> A -> C -> object",
                                        "D -> B -> C -> A -> object",
                                        "D -> C -> B -> A -> object",
                                        "TypeError: Cannot create a consistent method resolution order"
                                  ],
                                  "correctAnswer": 1,
                                  "explanation": "Python uses the C3 Linearization algorithm to compute the Method Resolution Order (MRO). In diamond inheritance, sibling classes (B and C) are searched before common ancestors (A): D -> B -> C -> A -> object."
                            },
                            {
                                  "id": "ps-3",
                                  "questionNumber": 3,
                                  "topic": "Class Attributes vs Instance Shadowing",
                                  "questionText": "What will be printed after executing this code?",
                                  "codeSnippet": "class Device:\n    count = 0\n\nd1 = Device()\nd2 = Device()\nd1.count = 5\nDevice.count = 10\nprint(d1.count, d2.count)",
                                  "options": [
                                        "5 10",
                                        "10 10",
                                        "5 0",
                                        "10 0"
                                  ],
                                  "correctAnswer": 0,
                                  "explanation": "d1.count = 5 creates an instance attribute on d1's __dict__, shadowing the class attribute. d2 has no instance attribute, so d2.count resolves to Device.count which was updated to 10. Thus: 5 10."
                            },
                            {
                                  "id": "ps-4",
                                  "questionNumber": 4,
                                  "topic": "Classmethod vs Staticmethod Mechanics",
                                  "questionText": "Which statement accurately describes the difference between @classmethod and @staticmethod?",
                                  "codeSnippet": null,
                                  "options": [
                                        "@classmethod receives the class object (cls) as its implicit first argument, whereas @staticmethod receives no implicit arguments",
                                        "@staticmethod can modify class state while @classmethod cannot",
                                        "@classmethod cannot be called on class instances, only directly on the class",
                                        "@staticmethod is deprecated in Python 3.10 and replaced by regular functions"
                                  ],
                                  "correctAnswer": 0,
                                  "explanation": "@classmethod binds the method to the class, passing cls as the first parameter (useful for alternate constructors). @staticmethod behaves like a plain function placed inside a class namespace without implicit self or cls."
                            },
                            {
                                  "id": "ps-5",
                                  "questionNumber": 5,
                                  "topic": "Property Decorator Encapsulation",
                                  "questionText": "What happens when attempting to assign a negative value in the following class?",
                                  "codeSnippet": "class Account:\n    def __init__(self, bal):\n        self._bal = bal\n    @property\n    def balance(self):\n        return self._bal\n    @balance.setter\n    def balance(self, v):\n        if v < 0:\n            raise ValueError('Negative balance')\n        self._bal = v\n\nacc = Account(100)\nacc.balance = -50",
                                  "options": [
                                        "acc.balance becomes -50 quietly",
                                        "ValueError: Negative balance is raised",
                                        "AttributeError: can't set attribute",
                                        "SyntaxError: invalid setter"
                                  ],
                                  "correctAnswer": 1,
                                  "explanation": "The @balance.setter decorator intercepts assignments to acc.balance. Because -50 < 0, the setter executes the validation check and raises ValueError('Negative balance')."
                            },
                            {
                                  "id": "ps-6",
                                  "questionNumber": 6,
                                  "topic": "Context Manager Protocol & Exception Suppression",
                                  "questionText": "If __exit__(self, exc_type, exc_val, exc_tb) returns True, what happens to an exception raised within the with block?",
                                  "codeSnippet": null,
                                  "options": [
                                        "The exception is re-raised automatically to the outer caller",
                                        "The exception is suppressed and program execution continues normally after the with block",
                                        "Python terminates the program immediately with exit code 1",
                                        "The exception is converted into a Warning message"
                                  ],
                                  "correctAnswer": 1,
                                  "explanation": "According to the Context Management protocol (PEP 343), returning a truthy value from __exit__ signals that the exception was handled, suppressing it from propagating up the stack."
                            },
                            {
                                  "id": "ps-7",
                                  "questionNumber": 7,
                                  "topic": "Finally Block Return Override",
                                  "questionText": "What is returned by calling calculate()?",
                                  "codeSnippet": "def calculate():\n    try:\n        return 10 / 2\n    finally:\n        return 99\nprint(calculate())",
                                  "options": [
                                        "5.0",
                                        "99",
                                        "ZeroDivisionError",
                                        "10.0"
                                  ],
                                  "correctAnswer": 1,
                                  "explanation": "When a return statement is encountered in a try block, the finally clause is still guaranteed to execute before leaving the function. A return inside finally overrides any pending return value, returning 99."
                            },
                            {
                                  "id": "ps-8",
                                  "questionNumber": 8,
                                  "topic": "Explicit Exception Chaining",
                                  "questionText": "What is the primary debugging advantage of using 'raise CustomError from original_err'?",
                                  "codeSnippet": null,
                                  "options": [
                                        "It suppresses the original exception traceback entirely to hide sensitive code",
                                        "It sets the __cause__ attribute on the new exception, explicitly preserving the full root-cause traceback for diagnostics",
                                        "It restarts the try block from the beginning",
                                        "It forces the error to be caught by standard Exception handlers only"
                                  ],
                                  "correctAnswer": 1,
                                  "explanation": "Explicit exception chaining (PEP 3134) populates the __cause__ attribute of the newly raised exception, printing: 'The above exception was the direct cause of the following exception:' in tracebacks."
                            },
                            {
                                  "id": "ps-9",
                                  "questionNumber": 9,
                                  "topic": "Custom Exception Hierarchy",
                                  "questionText": "Why should custom application exceptions inherit from Exception rather than BaseException?",
                                  "codeSnippet": null,
                                  "options": [
                                        "BaseException does not support error messages or args",
                                        "Inheriting from BaseException prevents KeyboardInterrupt (Ctrl+C) and SystemExit from functioning normally when caught by generic 'except Exception' handlers",
                                        "Python raises a TypeError if user classes inherit from BaseException",
                                        "BaseException is only available in Python C extensions"
                                  ],
                                  "correctAnswer": 1,
                                  "explanation": "BaseException is reserved for system-exiting exceptions like KeyboardInterrupt and SystemExit. Standard application exceptions must inherit from Exception so they don't hijack graceful system shutdowns."
                            },
                            {
                                  "id": "ps-10",
                                  "questionNumber": 10,
                                  "topic": "Abstract Base Classes (ABCs)",
                                  "questionText": "What error is raised when instantiating a subclass that fails to implement an @abstractmethod?",
                                  "codeSnippet": "from abc import ABC, abstractmethod\nclass Worker(ABC):\n    @abstractmethod\n    def do_work(self): pass\nclass Engineer(Worker): pass\ne = Engineer()",
                                  "options": [
                                        "TypeError: Can't instantiate abstract class Engineer with abstract method do_work",
                                        "NotImplementedError: Method do_work is not implemented",
                                        "AttributeError: 'Engineer' object has no attribute 'do_work'",
                                        "Instantiates successfully with do_work returning None"
                                  ],
                                  "correctAnswer": 0,
                                  "explanation": "Python's abc module overrides class instantiation via __call__ in ABCMeta, checking if __abstractmethods__ is non-empty. If any abstract method remains unimplemented, TypeError is raised immediately."
                            },
                            {
                                  "id": "ps-11",
                                  "questionNumber": 11,
                                  "topic": "String Representations: __repr__ vs __str__",
                                  "questionText": "What is the recommended design convention distinguishing __repr__ from __str__?",
                                  "codeSnippet": null,
                                  "options": [
                                        "__str__ should return JSON while __repr__ returns XML",
                                        "__repr__ is for developers and should ideally be an unambiguous string that could recreate the object (eval()); __str__ is for end-user readability",
                                        "__repr__ is called by print() and __str__ is called in the interactive REPL",
                                        "__str__ is mandatory for every class while __repr__ is optional"
                                  ],
                                  "correctAnswer": 1,
                                  "explanation": "PEP 8 convention states that __repr__ should be formal and unambiguous (for debugging/logging), while __str__ provides an informal, human-friendly presentation. If __str__ is omitted, Python falls back to __repr__."
                            },
                            {
                                  "id": "ps-12",
                                  "questionNumber": 12,
                                  "topic": "Iterable Protocol: __iter__ and __next__",
                                  "questionText": "What exception must an iterator's __next__() method raise when there are no further items?",
                                  "codeSnippet": null,
                                  "options": [
                                        "IndexError",
                                        "StopIteration",
                                        "EOFError",
                                        "GeneratorExit"
                                  ],
                                  "correctAnswer": 1,
                                  "explanation": "The Python iterator protocol requires __next__() to raise StopIteration when the collection is exhausted. Built-in loops (for, comprehensions) catch StopIteration to terminate iteration cleanly."
                            },
                            {
                                  "id": "ps-13",
                                  "questionNumber": 13,
                                  "topic": "Operator Overloading: __eq__ and __hash__",
                                  "questionText": "What happens to a class's hashability when you define custom __eq__ without defining __hash__?",
                                  "codeSnippet": "class Point:\n    def __init__(self, x, y):\n        self.x, self.y = x, y\n    def __eq__(self, other):\n        return self.x == other.x and self.y == other.y",
                                  "options": [
                                        "The class inherits the default object id hash function",
                                        "Python sets __hash__ = None, making instances unhashable (cannot be added to sets or dict keys)",
                                        "Python automatically computes a hash based on attribute values",
                                        "Compilation error: __hash__ must always accompany __eq__"
                                  ],
                                  "correctAnswer": 1,
                                  "explanation": "In Python 3, defining __eq__ automatically sets __hash__ to None to uphold the fundamental hash contract (equal objects MUST have equal hashes). Instances become unhashable unless __hash__ is explicitly defined."
                            },
                            {
                                  "id": "ps-14",
                                  "questionNumber": 14,
                                  "topic": "__slots__ Memory Optimization",
                                  "questionText": "What is the primary benefit and consequence of defining __slots__ in a class?",
                                  "codeSnippet": "class Coordinate:\n    __slots__ = ('x', 'y')\n    def __init__(self, x, y):\n        self.x, self.y = x, y",
                                  "options": [
                                        "Restricts method definitions and makes the class immutable",
                                        "Eliminates the per-instance __dict__ descriptor, drastically reducing RAM overhead for millions of instances while preventing dynamic attribute addition",
                                        "Enables automatic multiprocessing serialization across network sockets",
                                        "Encrypts instance attributes in memory"
                                  ],
                                  "correctAnswer": 1,
                                  "explanation": "__slots__ replaces dynamic per-instance dictionary (__dict__) with fixed C-level array pointers. This saves significant memory for high-frequency objects, but disallows assigning undeclared attributes."
                            },
                            {
                                  "id": "ps-15",
                                  "questionNumber": 15,
                                  "topic": "Callable Instances: __call__ Protocol",
                                  "questionText": "What does implementing __call__ on a class allow an instance to do?",
                                  "codeSnippet": "class Multiplier:\n    def __init__(self, factor):\n        self.factor = factor\n    def __call__(self, x):\n        return x * self.factor\n\ndouble = Multiplier(2)",
                                  "options": [
                                        "Allows the instance to be invoked like a regular function: double(10) -> 20",
                                        "Enables multithreaded asynchronous invocation using async/await",
                                        "Permits the instance to be used in context manager with statements",
                                        "Makes the instance indexable with bracket notation double[10]"
                                  ],
                                  "correctAnswer": 0,
                                  "explanation": "Implementing __call__(self, ...) makes the object an instance of Callable. Calling double(10) invokes Multiplier.__call__(double, 10), returning 20."
                            }
                      ]
                },
                {
                      "id": "qp-rahul-verma",
                      "studentName": "Rahul Verma",
                      "candidateId": "ARB-STD-003",
                      "rollNo": "2026-RV-103",
                      "paperCode": "ARB-PY-QP03",
                      "title": "Paper 3: Rahul Verma Examination Set",
                      "subtitle": "File Persistence, Serialization, Regular Expressions & Network Sockets",
                      "timeLimitMinutes": 45,
                      "passingScore": 80,
                      "totalMarks": 100,
                      "questions": [
                            {
                                  "id": "rv-1",
                                  "questionNumber": 1,
                                  "topic": "File Access Modes (r+ vs w+)",
                                  "questionText": "What critical difference occurs when opening an existing non-empty file with mode 'r+' compared to mode 'w+'?",
                                  "codeSnippet": null,
                                  "options": [
                                        "mode 'r+' allows writing binary bytes only, while 'w+' allows UTF-8 strings only",
                                        "mode 'r+' opens the file for reading and writing without truncation; mode 'w+' immediately truncates the file to 0 bytes upon opening",
                                        "mode 'r+' creates the file if it does not exist, while 'w+' raises FileNotFoundError",
                                        "There is no functional difference between 'r+' and 'w+' in Python 3"
                                  ],
                                  "correctAnswer": 1,
                                  "explanation": "Mode 'r+' opens an existing file for reading and writing with the file pointer at the beginning without truncating. Mode 'w+' immediately overwrites (truncates to length 0) any existing file content."
                            },
                            {
                                  "id": "rv-2",
                                  "questionNumber": 2,
                                  "topic": "File Pointer Mechanics: seek() and tell()",
                                  "questionText": "What does file.seek(0, 2) accomplish when working with a binary file in Python?",
                                  "codeSnippet": null,
                                  "options": [
                                        "Rewinds the file pointer to the very beginning of the file",
                                        "Positions the file pointer at offset 0 relative to the end of the file (EOF)",
                                        "Reads the first 2 bytes from the file into memory",
                                        "Skips 2 lines forward in a text file"
                                  ],
                                  "correctAnswer": 1,
                                  "explanation": "The second argument (whence) in seek(offset, whence) defines the reference point: 0 for start, 1 for current position, and 2 for end-of-file. Thus seek(0, 2) jumps directly to the end of the file."
                            },
                            {
                                  "id": "rv-3",
                                  "questionNumber": 3,
                                  "topic": "JSON Serialization Constraints",
                                  "questionText": "Attempting to serialize which of the following Python objects via json.dumps() raises a TypeError?",
                                  "codeSnippet": null,
                                  "options": [
                                        "{'status': 'active', 'tags': ['python', 'backend'], 'count': 42}",
                                        "{'timestamp': 1696161600, 'verified': True, 'score': 98.5}",
                                        "{'user_id': 101, 'registered_ips': {'192.168.1.1', '10.0.0.1'}}",
                                        "{'settings': None, 'preferences': {'theme': 'dark'}}"
                                  ],
                                  "correctAnswer": 2,
                                  "explanation": "The JSON standard has no primitive data type for Python 'set'. Attempting json.dumps() on a set raises TypeError: Object of type set is not JSON serializable (must convert to list first or use custom JSONEncoder)."
                            },
                            {
                                  "id": "rv-4",
                                  "questionNumber": 4,
                                  "topic": "Pickle Security Vulnerabilities",
                                  "questionText": "Why is unpickling untrusted data using pickle.loads() considered a critical security vulnerability?",
                                  "codeSnippet": null,
                                  "options": [
                                        "Pickle files can cause buffer overflows in the operating system kernel",
                                        "Pickle serialization executes arbitrary Python code during deserialization via the __reduce__ method",
                                        "Pickle cannot encrypt data across network connections",
                                        "Pickle automatically exposes local passwords stored in environment variables"
                                  ],
                                  "correctAnswer": 1,
                                  "explanation": "Python's pickle module allows classes to define a __reduce__ method that specifies callable functions and arguments to run upon unpickling. Malicious payloads can execute os.system() commands during deserialization."
                            },
                            {
                                  "id": "rv-5",
                                  "questionNumber": 5,
                                  "topic": "Regex Greedy vs Non-Greedy Quantifiers",
                                  "questionText": "What does re.findall(r'<.*?>', '<div><p>Hello</p></div>') return compared to re.findall(r'<.*>', ...)?",
                                  "codeSnippet": null,
                                  "options": [
                                        "Non-greedy returns ['<div>', '<p>', '</p>', '</div>']; greedy returns ['<div><p>Hello</p></div>']",
                                        "Non-greedy returns ['<div><p>Hello</p></div>']; greedy returns []",
                                        "Both expressions return identical output",
                                        "SyntaxError: ? cannot follow * in regular expressions"
                                  ],
                                  "correctAnswer": 0,
                                  "explanation": "The '.*' quantifier is greedy and matches as many characters as possible up to the final '>'. Appending '?' makes it non-greedy, matching the minimum characters up to the very next '>', yielding individual tags."
                            },
                            {
                                  "id": "rv-6",
                                  "questionNumber": 6,
                                  "topic": "Lookaround Assertions in Regex",
                                  "questionText": "What will re.findall(r'\\d+(?=px)', 'width: 100px; height: 50em; margin: 20px;') return?",
                                  "codeSnippet": null,
                                  "options": [
                                        "['100px', '20px']",
                                        "['100', '20']",
                                        "['100', '50', '20']",
                                        "['px', 'px']"
                                  ],
                                  "correctAnswer": 1,
                                  "explanation": "The syntax (?=px) is a positive lookahead assertion: it asserts that the match is immediately followed by 'px', but does not include 'px' in the captured matched text. Hence: ['100', '20']."
                            },
                            {
                                  "id": "rv-7",
                                  "questionNumber": 7,
                                  "topic": "Regex Named Capturing Groups",
                                  "questionText": "How do you access the 'year' component using named capturing groups?",
                                  "codeSnippet": "import re\nmatch = re.search(r'(?P<year>\\d{4})-(?P<month>\\d{2})', '2026-10-01')",
                                  "options": [
                                        "match.group('year')",
                                        "match['year']",
                                        "match.named('year')",
                                        "match.year"
                                  ],
                                  "correctAnswer": 0,
                                  "explanation": "In Python's re module, named capturing groups created with (?P<name>...) are accessed using match.group('name') or match.groupdict()['name']."
                            },
                            {
                                  "id": "rv-8",
                                  "questionNumber": 8,
                                  "topic": "TCP Stream Sockets & Packet Fragmentation",
                                  "questionText": "Why must network socket code receive TCP stream data in a while loop rather than relying on a single socket.recv(4096) call?",
                                  "codeSnippet": null,
                                  "options": [
                                        "TCP is a packet-oriented protocol that limits messages to 512 bytes",
                                        "TCP is a byte-stream protocol with no intrinsic message boundaries; data may arrive fragmented across multiple arbitrary network segments",
                                        "socket.recv() disconnects the client automatically after receiving 1024 bytes",
                                        "Operating systems queue data in reverse order without a loop"
                                  ],
                                  "correctAnswer": 1,
                                  "explanation": "TCP guarantees ordered byte streams but does not preserve application message boundaries. A sender sending 2000 bytes might be delivered in multiple smaller IP chunks. Callers must loop until all expected bytes arrive."
                            },
                            {
                                  "id": "rv-9",
                                  "questionNumber": 9,
                                  "topic": "Socket Blocking vs Non-Blocking Modes",
                                  "questionText": "What exception is raised when calling recv() on a non-blocking socket (sock.setblocking(False)) if no incoming data is immediately available?",
                                  "codeSnippet": null,
                                  "options": [
                                        "TimeoutError",
                                        "BlockingIOError",
                                        "ConnectionResetError",
                                        "BrokenPipeError"
                                  ],
                                  "correctAnswer": 1,
                                  "explanation": "When a socket is set to non-blocking mode and an I/O operation cannot complete immediately without waiting, Python raises BlockingIOError (or socket.error with errno EAGAIN/EWOULDBLOCK)."
                            },
                            {
                                  "id": "rv-10",
                                  "questionNumber": 10,
                                  "topic": "HTTP User-Agent Scraping Defenses",
                                  "questionText": "When scraping a web service using urllib.request or requests, why do servers frequently return '403 Forbidden' unless a custom User-Agent header is set?",
                                  "codeSnippet": null,
                                  "options": [
                                        "Servers require client IP encryption via SSL certificates before reading requests",
                                        "Default client libraries send identifiers like 'Python-urllib/3.x', which automated bot defense filters block to protect against scrapers",
                                        "Python disables HTTP GET requests unless authorized by DNS records",
                                        "The User-Agent header specifies the Python version required to parse the HTML"
                                  ],
                                  "correctAnswer": 1,
                                  "explanation": "Web application firewalls (WAFs) and CDN bot filters inspect the User-Agent header. Requests with identifiable script headers like 'Python-urllib' or 'python-requests' are blocked by default."
                            },
                            {
                                  "id": "rv-11",
                                  "questionNumber": 11,
                                  "topic": "BeautifulSoup DOM Parsing",
                                  "questionText": "In BeautifulSoup4, what is the key difference between soup.find() and soup.find_all()?",
                                  "codeSnippet": null,
                                  "options": [
                                        "soup.find() searches the entire DOM tree; soup.find_all() only searches direct children",
                                        "soup.find() returns the first matching Tag object (or None); soup.find_all() returns a list of all matching Tag objects (or empty list)",
                                        "soup.find() accepts CSS selectors while soup.find_all() only accepts HTML tag names",
                                        "soup.find() is asynchronous while soup.find_all() is synchronous"
                                  ],
                                  "correctAnswer": 1,
                                  "explanation": "soup.find() returns the single first matching Tag element or None if no match is found. soup.find_all() returns a ResultSet (list) containing all elements matching the query filters."
                            },
                            {
                                  "id": "rv-12",
                                  "questionNumber": 12,
                                  "topic": "CSV Parsing with Dialects & Delimiters",
                                  "questionText": "Why is opening CSV files with newline='' recommended when using Python's csv module?",
                                  "codeSnippet": "with open('students.csv', 'w', newline='', encoding='utf-8') as f:\n    writer = csv.writer(f)",
                                  "options": [
                                        "It compresses the file automatically to reduce disk space",
                                        "It prevents the csv module and Python's universal newline translation from producing extra blank lines on Windows (\\r\\r\\n)",
                                        "It disables CSV quoting for fields containing commas",
                                        "It forces the CSV dialect to strict RFC 4180 mode"
                                  ],
                                  "correctAnswer": 1,
                                  "explanation": "On Windows, Python's default text mode converts '\\n' to '\\r\\n'. The csv module handles its own line terminators ('\\r\\n'), so without newline='', extra blank rows ('\\r\\r\\n') are written to the file."
                            },
                            {
                                  "id": "rv-13",
                                  "questionNumber": 13,
                                  "topic": "HTTP Status Codes & REST Conventions",
                                  "questionText": "Which HTTP status code should a RESTful API return when a client successfully creates a new resource?",
                                  "codeSnippet": null,
                                  "options": [
                                        "200 OK",
                                        "201 Created",
                                        "204 No Content",
                                        "302 Found"
                                  ],
                                  "correctAnswer": 1,
                                  "explanation": "Under HTTP RFC 7231 and standard REST API design conventions, status 201 Created indicates that the request has succeeded and led to the creation of a new resource (often returning a Location header)."
                            },
                            {
                                  "id": "rv-14",
                                  "questionNumber": 14,
                                  "topic": "Handling JSON Streaming with Generators",
                                  "questionText": "What is the recommended approach for processing a 5GB JSON Lines (.jsonl) log file without exceeding memory?",
                                  "codeSnippet": null,
                                  "options": [
                                        "Use json.loads(open('file.jsonl').read())",
                                        "Iterate line by line with a generator: for line in open('file.jsonl'): yield json.loads(line)",
                                        "Convert the entire file to a dictionary using json.load()",
                                        "Use multiprocessing to read all 5GB simultaneously"
                                  ],
                                  "correctAnswer": 1,
                                  "explanation": "Reading line by line lazily ensures only one line is loaded into memory at any given time, maintaining constant O(1) memory overhead regardless of the multi-gigabyte file size."
                            },
                            {
                                  "id": "rv-15",
                                  "questionNumber": 15,
                                  "topic": "Network Socket Timeouts",
                                  "questionText": "What method should you call on a socket to ensure operations raise socket.timeout if the server does not respond within 5 seconds?",
                                  "codeSnippet": null,
                                  "options": [
                                        "sock.settimeout(5.0)",
                                        "sock.sleep(5.0)",
                                        "sock.wait_until(5000)",
                                        "sock.set_deadline(5)"
                                  ],
                                  "correctAnswer": 0,
                                  "explanation": "sock.settimeout(5.0) configures a timeout of 5 seconds on blocking socket operations (like connect, recv, send). If the timer expires, socket.timeout is raised."
                            }
                      ]
                },
                {
                      "id": "qp-adithya-v",
                      "studentName": "Adithya V",
                      "candidateId": "ARB-STD-004",
                      "rollNo": "2026-AV-104",
                      "paperCode": "ARB-PY-QP04",
                      "title": "Paper 4: Adithya V Examination Set",
                      "subtitle": "Relational Database Engineering, SQLite ACID Transactions & System Automation",
                      "timeLimitMinutes": 45,
                      "passingScore": 80,
                      "totalMarks": 100,
                      "questions": [
                            {
                                  "id": "av-1",
                                  "questionNumber": 1,
                                  "topic": "SQLite Foreign Key Enforcement Pragma",
                                  "questionText": "In Python's built-in sqlite3 module, what statement must be explicitly executed on every new database connection to enforce Foreign Key constraints?",
                                  "codeSnippet": null,
                                  "options": [
                                        "cursor.execute('ENABLE FOREIGN KEYS;')",
                                        "cursor.execute('PRAGMA foreign_keys = ON;')",
                                        "cursor.execute('SET FOREIGN_KEY_CHECKS = 1;')",
                                        "Foreign keys are permanently enabled by default and require no PRAGMA command"
                                  ],
                                  "correctAnswer": 1,
                                  "explanation": "For backwards compatibility with legacy SQLite databases, foreign key constraint enforcement is disabled by default in SQLite. Every new connection must issue 'PRAGMA foreign_keys = ON;' to activate cascade and validation checks."
                            },
                            {
                                  "id": "av-2",
                                  "questionNumber": 2,
                                  "topic": "Parameterized SQL vs Injection Vulnerabilities",
                                  "questionText": "Why is cursor.execute('SELECT * FROM users WHERE name = ?', (user_input,)) secure against SQL injection, while f-strings are vulnerable?",
                                  "codeSnippet": null,
                                  "options": [
                                        "Parameterized queries compile the SQL query plan first; user inputs are transmitted strictly as literal data parameters, never interpreted as executable syntax",
                                        "The sqlite3 module strips all quotes and special characters from user inputs before insertion",
                                        "Parameterized queries run inside a sandboxed Python virtual environment",
                                        "f-strings convert all variables to raw machine instructions"
                                  ],
                                  "correctAnswer": 0,
                                  "explanation": "With parameterized queries (using '?' placeholders), the SQL statement is pre-parsed and compiled into an execution tree. User parameter values are bound separately as data values, neutralizing injection payloads like \"' OR '1'='1\"."
                            },
                            {
                                  "id": "av-3",
                                  "questionNumber": 3,
                                  "topic": "SQLite Transaction Isolation & Rollback",
                                  "questionText": "What happens if an unhandled exception occurs inside a 'with conn:' context manager block in Python's sqlite3?",
                                  "codeSnippet": "with conn:\n    cursor.execute('UPDATE accounts SET bal = bal - 100 WHERE id = 1')\n    raise ValueError('Network Failure')\n    cursor.execute('UPDATE accounts SET bal = bal + 100 WHERE id = 2')",
                                  "options": [
                                        "The first UPDATE is permanently committed anyway",
                                        "The transaction is automatically rolled back (conn.rollback()), restoring previous database state without partial writes",
                                        "The database file becomes corrupted",
                                        "sqlite3 raises OperationalError: database locked"
                                  ],
                                  "correctAnswer": 1,
                                  "explanation": "When a connection object is used as a context manager (with conn:), it manages transaction boundaries. If the block completes successfully, it commits; if an exception is raised, it automatically issues conn.rollback()."
                            },
                            {
                                  "id": "av-4",
                                  "questionNumber": 4,
                                  "topic": "Cursor Fetchall vs Generator Iteration",
                                  "questionText": "When querying a table containing 10,000,000 rows, why is 'for row in cursor:' preferred over 'rows = cursor.fetchall()'?",
                                  "codeSnippet": null,
                                  "options": [
                                        "cursor.fetchall() is deprecated in Python 3.12",
                                        "'for row in cursor:' fetches rows incrementally from the database engine using an internal buffer, avoiding allocating millions of Python tuple objects in RAM at once",
                                        "cursor.fetchall() automatically closes the database connection",
                                        "There is no difference; both use identical memory"
                                  ],
                                  "correctAnswer": 1,
                                  "explanation": "Calling fetchall() forces the entire result set into a massive Python list of tuples in memory, risking Out-Of-Memory (OOM) crashes. Iterating over the cursor yields rows lazily using constant memory."
                            },
                            {
                                  "id": "av-5",
                                  "questionNumber": 5,
                                  "topic": "Database Normalization (1NF to 3NF)",
                                  "questionText": "Which statement best describes the requirement for Third Normal Form (3NF)?",
                                  "codeSnippet": null,
                                  "options": [
                                        "All columns must have unique names and no NULL values",
                                        "The table must be in 2NF and contain no transitive functional dependencies (non-key attributes must depend only on the primary key)",
                                        "The table must have at least three foreign keys linked to other tables",
                                        "All tables must be denormalized into a single flat view"
                                  ],
                                  "correctAnswer": 1,
                                  "explanation": "3NF requires that the relation is in 2NF and that no non-prime attribute is transitively dependent on the primary key ('Every non-key attribute must provide a fact about the key, the whole key, and nothing but the key')."
                            },
                            {
                                  "id": "av-6",
                                  "questionNumber": 6,
                                  "topic": "Many-to-Many Relationships & Junction Tables",
                                  "questionText": "How should a Many-to-Many relationship between 'Students' and 'Courses' be implemented in a relational schema?",
                                  "codeSnippet": null,
                                  "options": [
                                        "Store comma-separated Course IDs in a single text column inside the Students table",
                                        "Create a separate Junction (Association) table containing foreign keys student_id and course_id, forming a composite primary key",
                                        "Duplicate student rows for every course they enroll in",
                                        "Use a JSON array column inside the Courses table"
                                  ],
                                  "correctAnswer": 1,
                                  "explanation": "Relational best practice establishes a bridge/junction table (e.g. Enrollments) with foreign keys to both parent tables, breaking down the M:N relationship into two clean 1:N relationships without violating 1NF."
                            },
                            {
                                  "id": "av-7",
                                  "questionNumber": 7,
                                  "topic": "Database Indexing & B-Trees",
                                  "questionText": "What trade-off is introduced when adding B-tree indexes (CREATE INDEX) to multiple columns of a high-volume database table?",
                                  "codeSnippet": null,
                                  "options": [
                                        "SELECT query lookups become exponentially slower",
                                        "SELECT lookups become significantly faster (O(log N)), but INSERT, UPDATE, and DELETE operations become slower because index trees must be recalculated on each write",
                                        "Foreign keys can no longer be used on indexed tables",
                                        "Transactions are disabled on indexed tables"
                                  ],
                                  "correctAnswer": 1,
                                  "explanation": "Indexes speed up WHERE filtering and JOIN performance from O(N) table scans to O(log N) tree traverses. However, every write operation (INSERT/UPDATE/DELETE) incurs additional I/O overhead to maintain the balance of the B-tree."
                            },
                            {
                                  "id": "av-8",
                                  "questionNumber": 8,
                                  "topic": "Environment Variable Configuration",
                                  "questionText": "Why should database credentials and API secrets be loaded via os.environ (or python-dotenv) rather than hardcoded in source files?",
                                  "codeSnippet": null,
                                  "options": [
                                        "Python cannot connect to databases without environment variables",
                                        "Hardcoded credentials risk accidental leak in version control (git), and environment variables enable seamless configuration per deployment environment (dev, staging, prod)",
                                        "Environment variables execute faster than local Python string constants",
                                        "Operating systems encrypt all environment variables with AES-256"
                                  ],
                                  "correctAnswer": 1,
                                  "explanation": "Following Twelve-Factor App methodology, storing secrets in environment variables keeps sensitive credentials out of version control and allows dynamic configuration across development, CI/CD, and production."
                            },
                            {
                                  "id": "av-9",
                                  "questionNumber": 9,
                                  "topic": "Python Logging Architecture",
                                  "questionText": "Which logging level should be used for expected events during normal system operation (e.g., 'Server started on port 5000')?",
                                  "codeSnippet": null,
                                  "options": [
                                        "logging.DEBUG",
                                        "logging.INFO",
                                        "logging.WARNING",
                                        "logging.CRITICAL"
                                  ],
                                  "correctAnswer": 1,
                                  "explanation": "Standard Python logging hierarchy: DEBUG (low-level diagnostics), INFO (confirmation that things are working as expected), WARNING (unexpected event or upcoming problem), ERROR (failure of specific operation), CRITICAL (fatal system halting error)."
                            },
                            {
                                  "id": "av-10",
                                  "questionNumber": 10,
                                  "topic": "Unit Testing & Mocking",
                                  "questionText": "In Python's unittest.mock module, what does @patch('module.requests.get') allow you to do during automated test runs?",
                                  "codeSnippet": null,
                                  "options": [
                                        "It forces the test to run twice as fast by skipping assert statements",
                                        "It replaces the live network HTTP request with a mock object, allowing predictable unit testing without hitting external network servers",
                                        "It patches security bugs in the requests library",
                                        "It encrypts the test output"
                                  ],
                                  "correctAnswer": 1,
                                  "explanation": "Mocking replaces real external dependencies (databases, external APIs, network connections) with simulated objects, ensuring tests are deterministic, fast, and isolated from external outages."
                            },
                            {
                                  "id": "av-11",
                                  "questionNumber": 11,
                                  "topic": "Multithreading vs Multiprocessing & GIL",
                                  "questionText": "Why does Python's Global Interpreter Lock (GIL) prevent CPU-bound tasks from running in parallel across multiple CPU cores using threading.Thread?",
                                  "codeSnippet": null,
                                  "options": [
                                        "The GIL restricts Python scripts to a single thread total",
                                        "The GIL ensures only one native OS thread executes Python bytecode at any given instant to safeguard CPython memory management and reference counting",
                                        "CPU cores can only be accessed using C++ extensions",
                                        "Threads are simulated using coroutines and have no OS thread backing"
                                  ],
                                  "correctAnswer": 1,
                                  "explanation": "The CPython GIL is a mutual-exclusion lock protecting internal memory structures. For CPU-bound tasks, threads contend for the lock without speedup. CPU-bound concurrency requires the multiprocessing module to run distinct Python processes."
                            },
                            {
                                  "id": "av-12",
                                  "questionNumber": 12,
                                  "topic": "Subprocess Execution & Shell Injection",
                                  "questionText": "Why is subprocess.run(['ls', user_input], shell=False) safer than subprocess.run(f'ls {user_input}', shell=True)?",
                                  "codeSnippet": null,
                                  "options": [
                                        "shell=False runs the command without starting a system shell, preventing shell injection metacharacters (like ';' or '&&') from executing secondary commands",
                                        "shell=False automatically encrypts standard output",
                                        "shell=True is restricted to Administrator accounts only",
                                        "shell=False causes Python to emulate the command in pure Python"
                                  ],
                                  "correctAnswer": 0,
                                  "explanation": "With shell=False, the executable is invoked directly by OS syscalls with arguments passed in an array. Malicious inputs like '; rm -rf /' are treated as literal file names rather than interpreted commands."
                            },
                            {
                                  "id": "av-13",
                                  "questionNumber": 13,
                                  "topic": "SQLite Concurrency: Database Locked",
                                  "questionText": "When multiple threads write to the same SQLite database file, what parameter can be configured to prevent immediate 'OperationalError: database is locked' crashes?",
                                  "codeSnippet": "conn = sqlite3.connect('app.db', timeout=10.0)",
                                  "options": [
                                        "The timeout parameter sets a retry threshold in seconds before SQLite gives up waiting for the write lock to be released",
                                        "timeout disables all locking entirely, allowing dirty writes",
                                        "timeout specifies the session expiry time in hours",
                                        "timeout converts SQLite into a client-server architecture"
                                  ],
                                  "correctAnswer": 0,
                                  "explanation": "sqlite3.connect(database, timeout=10.0) sets the busy timeout. When another connection holds a write lock, SQLite repeatedly sleeps and retries until the timeout expires before raising OperationalError."
                            },
                            {
                                  "id": "av-14",
                                  "questionNumber": 14,
                                  "topic": "Algorithmic Time Complexity: Sets vs Lists",
                                  "questionText": "What is the average time complexity of checking membership (item in collection) for a Python set compared to a Python list?",
                                  "codeSnippet": null,
                                  "options": [
                                        "Set: O(1) average; List: O(N)",
                                        "Set: O(N); List: O(1)",
                                        "Both are O(log N)",
                                        "Set: O(N log N); List: O(N)"
                                  ],
                                  "correctAnswer": 0,
                                  "explanation": "Python sets use hash tables, offering O(1) average time complexity for lookups. Lists must perform linear scans from the beginning to the end, resulting in O(N) worst-case time complexity."
                            },
                            {
                                  "id": "av-15",
                                  "questionNumber": 15,
                                  "topic": "Graceful Shutdown with Signal Handlers",
                                  "questionText": "In a production Python backend service, what standard signal should be caught using signal.signal() to handle graceful container termination (Docker/Kubernetes)?",
                                  "codeSnippet": null,
                                  "options": [
                                        "SIGKILL (Signal 9)",
                                        "SIGTERM (Signal 15)",
                                        "SIGSEGV (Signal 11)",
                                        "SIGSTOP"
                                  ],
                                  "correctAnswer": 1,
                                  "explanation": "Docker and Kubernetes send SIGTERM (15) to notify a container to gracefully stop (close DB connections, finish active requests). SIGKILL cannot be caught or ignored and terminates processes immediately."
                            }
                      ]
                }
          ],
          "questions": [
                {
                      "id": "ak-1",
                      "questionNumber": 1,
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
                      "explanation": "CPython compiles source code (.py) into intermediate bytecode (.pyc) stored in __pycache__. On subsequent runs, CPython skips parsing and compilation if the source file timestamp matches the cached bytecode header."
                },
                {
                      "id": "ak-2",
                      "questionNumber": 2,
                      "topic": "Memory References & In-Place Mutation",
                      "questionText": "What will be the exact values of 'a' and 'c' after executing the following Python code snippet?",
                      "codeSnippet": "a = [10, 20, 30]\nb = a\nc = list(a)\nb.append(40)\na += [50]",
                      "options": [
                            "a is [10, 20, 30, 40, 50], c is [10, 20, 30]",
                            "a is [10, 20, 30, 50], c is [10, 20, 30, 40]",
                            "a is [10, 20, 30, 40, 50], c is [10, 20, 30, 40, 50]",
                            "a is [10, 20, 30, 40], c is [10, 20, 30]"
                      ],
                      "correctAnswer": 0,
                      "explanation": "b = a binds 'b' to the same object in heap memory. c = list(a) creates a shallow clone. b.append(40) mutates the list. For lists, '+=' is an in-place extend (calls __iadd__), so 'a' becomes [10, 20, 30, 40, 50] while 'c' remains unaffected [10, 20, 30]."
                },
                {
                      "id": "ak-3",
                      "questionNumber": 3,
                      "topic": "Logical Operators & Short-Circuit Precedence",
                      "questionText": "What is the evaluated result of the following compound expression in Python?",
                      "codeSnippet": "result = [] or 0 or 'Arshith' and [1, 2, 3] or False",
                      "options": [
                            "True",
                            "'Arshith'",
                            "[1, 2, 3]",
                            "False"
                      ],
                      "correctAnswer": 2,
                      "explanation": "'and' has higher precedence than 'or'. In ''Arshith' and [1, 2, 3]', since 'Arshith' is truthy, it evaluates to [1, 2, 3]. Then '[] or 0 or [1, 2, 3] or False' short-circuits at the first truthy value, which is [1, 2, 3]."
                },
                {
                      "id": "ak-4",
                      "questionNumber": 4,
                      "topic": "Assignment Expressions & Scoping",
                      "questionText": "What will be printed by the following code utilizing the walrus operator (:=)?",
                      "codeSnippet": "data = [2, 4, 6, 8]\nif (n := len(data)) > 3:\n    print(f'Length: {n}')\nprint(n)",
                      "options": [
                            "Length: 4 followed by NameError: name 'n' is not defined",
                            "Length: 4 followed by 4",
                            "Length: 4 followed by None",
                            "SyntaxError: invalid syntax"
                      ],
                      "correctAnswer": 1,
                      "explanation": "The walrus operator := assigns the expression value to 'n' in the enclosing scope (not isolated to the if block). Thus 'n' persists after the if statement with the value 4."
                },
                {
                      "id": "ak-5",
                      "questionNumber": 5,
                      "topic": "Loop Else Clause Semantics",
                      "questionText": "What is the output of the following nested loop construct?",
                      "codeSnippet": "nums = [1, 3, 5, 7]\nfor x in nums:\n    if x % 2 == 0:\n        print('Even found')\n        break\nelse:\n    print('All odd')",
                      "options": [
                            "Even found",
                            "All odd",
                            "No output printed",
                            "Even found followed by All odd"
                      ],
                      "correctAnswer": 1,
                      "explanation": "The 'else' block attached to a for or while loop executes only if the loop completes normally without encountering a 'break' statement. Since no even number was found, the loop completed fully and printed 'All odd'."
                },
                {
                      "id": "ak-6",
                      "questionNumber": 6,
                      "topic": "Mutable Default Parameter Trap",
                      "questionText": "What will be printed upon calling the function twice as shown below?",
                      "codeSnippet": "def record_score(score, history=[]):\n    history.append(score)\n    return history\n\nprint(record_score(85))\nprint(record_score(92))",
                      "options": [
                            "[85] and [92]",
                            "[85] and [85, 92]",
                            "None and None",
                            "[85, 92] and [85, 92]"
                      ],
                      "correctAnswer": 1,
                      "explanation": "Default parameter expressions are evaluated once when the function is defined, not each time it is invoked. The mutable list is shared across subsequent calls, printing [85] then [85, 92]."
                },
                {
                      "id": "ak-7",
                      "questionNumber": 7,
                      "topic": "LEGB Scope Resolution & Nonlocal",
                      "questionText": "What is printed when outer() is executed?",
                      "codeSnippet": "def outer():\n    x = 10\n    def inner():\n        nonlocal x\n        x += 5\n    inner()\n    return x\nprint(outer())",
                      "options": [
                            "10",
                            "15",
                            "UnboundLocalError",
                            "NameError"
                      ],
                      "correctAnswer": 1,
                      "explanation": "The 'nonlocal' keyword binds 'x' to the nearest enclosing non-global scope, modifying outer's local variable 'x' from 10 to 15."
                },
                {
                      "id": "ak-8",
                      "questionNumber": 8,
                      "topic": "Hashability & Dictionary Keys",
                      "questionText": "Which of the following data structures can be safely used as a key in a Python dictionary?",
                      "codeSnippet": null,
                      "options": [
                            "['user_1', 'user_2']",
                            "{'role': 'admin'}",
                            "('admin', 101, [1, 2])",
                            "('admin', 101, (1, 2))"
                      ],
                      "correctAnswer": 3,
                      "explanation": "Dictionary keys must be hashable (__hash__). Tuples are only hashable if all elements contained within them are also hashable. A tuple containing a mutable list raises TypeError: unhashable type: 'list'."
                },
                {
                      "id": "ak-9",
                      "questionNumber": 9,
                      "topic": "Late Binding Closures in Comprehensions",
                      "questionText": "What will be printed when calling funcs[0]() and funcs[2]()?",
                      "codeSnippet": "funcs = [lambda: i * 2 for i in range(4)]\nprint(funcs[0](), funcs[2]())",
                      "options": [
                            "0 4",
                            "6 6",
                            "0 0",
                            "NameError: 'i' is not defined"
                      ],
                      "correctAnswer": 1,
                      "explanation": "Python closures exhibit late binding: variables in closures are looked up when the inner function is called. When range(4) completes, 'i' equals 3. Both funcs[0]() and funcs[2]() evaluate 3 * 2 = 6."
                },
                {
                      "id": "ak-10",
                      "questionNumber": 10,
                      "topic": "Advanced Slicing with Negative Step",
                      "questionText": "What is the output of the slice text[6:1:-2]?",
                      "codeSnippet": "text = 'ABCDEFGH'",
                      "options": [
                            "'GE'",
                            "'GEC'",
                            "'FDB'",
                            "'HFD'"
                      ],
                      "correctAnswer": 1,
                      "explanation": "Indices of 'ABCDEFGH' are A:0, B:1, C:2, D:3, E:4, F:5, G:6, H:7. Starting at index 6 ('G'), moving backwards by step 2 stops before index 1: yields index 6 ('G'), index 4 ('E'), index 2 ('C') -> 'GEC'."
                },
                {
                      "id": "ak-11",
                      "questionNumber": 11,
                      "topic": "Object Identity (is) vs Value Equality (==)",
                      "questionText": "Why does (1000 + 1 is 1001) evaluate to False in standard CPython interactive shell while (10 + 1 is 11) evaluates to True?",
                      "codeSnippet": null,
                      "options": [
                            "Python integers above 256 are automatically converted to float types in memory",
                            "CPython pre-allocates an integer cache array for small integers between -5 and 256; larger integers create distinct heap objects",
                            "The 'is' operator checks value equality only for numbers smaller than 100",
                            "Large integers cannot be compared with 'is' due to integer overflow restrictions"
                      ],
                      "correctAnswer": 1,
                      "explanation": "CPython maintains an internal small integer singleton cache for values in the range [-5, 256]. Values outside this range allocate fresh PyObject instances on the heap, producing different memory addresses (id)."
                },
                {
                      "id": "ak-12",
                      "questionNumber": 12,
                      "topic": "Tuple Immutability & Nested References",
                      "questionText": "What happens when executing the following statement?",
                      "codeSnippet": "t = (1, 2, [3, 4])\nt[2] += [5]",
                      "options": [
                            "TypeError is raised and the list remains [3, 4]",
                            "TypeError is raised, but the list is mutated to [3, 4, 5]",
                            "The tuple is successfully modified to (1, 2, [3, 4, 5]) without errors",
                            "SyntaxError: invalid assignment"
                      ],
                      "correctAnswer": 1,
                      "explanation": "In-place += calls [3, 4].__iadd__([5]), successfully extending the list in heap memory. Then Python attempts to assign the result back to t[2], which raises TypeError because tuples are immutable. The list is mutated despite the error."
                },
                {
                      "id": "ak-13",
                      "questionNumber": 13,
                      "topic": "List Comprehensions vs Generator Expressions",
                      "questionText": "Which statement correctly distinguishes a list comprehension from a generator expression?",
                      "codeSnippet": null,
                      "options": [
                            "List comprehensions are lazy while generators compute everything eagerly into RAM",
                            "Generator expressions produce a generator object that evaluates items lazily on demand (O(1) memory), whereas list comprehensions allocate the full list in memory immediately",
                            "Generator expressions can be indexed with bracket notation [0] while list comprehensions cannot",
                            "List comprehensions cannot be used inside for loops"
                      ],
                      "correctAnswer": 1,
                      "explanation": "Generator expressions (x for x in data) generate values on-the-fly using the iterator protocol (__next__), consuming constant O(1) memory regardless of dataset size."
                },
                {
                      "id": "ak-14",
                      "questionNumber": 14,
                      "topic": "Set Operations & Symmetric Difference",
                      "questionText": "What is the result of set_a ^ set_b given the sets below?",
                      "codeSnippet": "set_a = {1, 2, 3, 4}\nset_b = {3, 4, 5, 6}",
                      "options": [
                            "{3, 4}",
                            "{1, 2, 5, 6}",
                            "{1, 2, 3, 4, 5, 6}",
                            "Empty set set()"
                      ],
                      "correctAnswer": 1,
                      "explanation": "The caret (^) operator represents symmetric difference: elements present in either set_a or set_b, but not in both. Common elements 3 and 4 are excluded, leaving {1, 2, 5, 6}."
                },
                {
                      "id": "ak-15",
                      "questionNumber": 15,
                      "topic": "Dictionary Views & Dynamic Mutation",
                      "questionText": "What does the following snippet print?",
                      "codeSnippet": "d = {'a': 1, 'b': 2}\nkeys = d.keys()\nd['c'] = 3\nprint(len(keys))",
                      "options": [
                            "2",
                            "3",
                            "RuntimeError: dictionary changed size during iteration",
                            "TypeError: dict_keys has no len"
                      ],
                      "correctAnswer": 1,
                      "explanation": "In Python 3, d.keys() returns a dynamic dictionary view object (dict_keys) linked to the underlying hash table. When new keys are added, the view reflects changes immediately, so len(keys) is 3."
                }
          ]
    }
  },
  {
    id: "sql-data-analysis",
    title: "SQL for Data Analysis",
    category: "SQL",
    level: "Beginner to Advanced",
    duration: "25 hours",
    rating: 4.8,
    studentsCount: "10.8k",
    studentsNumeric: 10800,
    price: 0,
    isFree: true,
    bestseller: false,
    progress: 20, // 3/15 completed
    iconBg: "bg-cyan-50 border 2 border-cyan-200 text-cyan-600",
    iconType: "database",
    introVideoUrl: "https://www.youtube.com/embed/HXV3zeQKqGY",
    description: "Master Relational Databases & SQL! Query databases, filter rows, aggregate metrics, perform complex JOINs, CTEs, Window Functions, and data cleaning.",
    instructor: {
      name: "Siddharth Nair",
      role: "Principal Data Architect @ Arshith Boot Camp",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    },
    whatYouWillLearn: [
      "Relational Database concepts (Tables, Primary Keys, Foreign Keys)",
      "Writing SELECT, WHERE, ORDER BY, and LIMIT queries",
      "Data aggregation with COUNT, SUM, AVG, MIN, MAX & GROUP BY / HAVING",
      "Mastering INNER JOIN, LEFT JOIN, RIGHT JOIN, and FULL OUTER JOIN",
      "Advanced Window Functions (ROW_NUMBER, RANK, DENSE_RANK, LAG, LEAD)",
      "Common Table Expressions (CTEs) & Subqueries for business intelligence"
    ],
    modules: [
      {
        id: "sql-mod-1",
        title: "Module 01 — Introduction to Databases and SQL",
        description: "Learn what relational databases are, SQL standards, RDBMS systems (PostgreSQL, MySQL), and basic database structure.",
        completed: true,
        readingMaterial: {
          introduction: "SQL (Structured Query Language) is the domain-specific standard language used to store, manipulate, and query relational databases.",
          objectives: [
            "Understand RDBMS concepts",
            "Difference between SQL queries and database engines",
            "Structure of database tables, rows, and columns"
          ],
          sections: [
            {
              heading: "Relational Database Structure",
              text: "Databases consist of tables organized into rows (records) and columns (attributes). Tables are linked together using Primary Keys and Foreign Keys."
            }
          ],
          codeExamples: [
            {
              title: "Basic SELECT Query",
              code: `-- Query all columns from courses table
SELECT * FROM courses;`,
              explanation: "SELECT retrieves data from specified tables."
            }
          ],
          bestPractices: [
            "Write SQL keywords in UPPERCASE (SELECT, FROM, WHERE) for readability."
          ],
          commonMistakes: [
            "Forgetting semicolon (;) at the end of SQL statements."
          ],
          practiceExercise: {
            title: "Query Table Names",
            problem: "Write a query to select student names from students table.",
            solutionCode: `SELECT student_name, email FROM students;`
          },
          keyTakeaways: [
            "SQL is declarative: you specify what data you want.",
            "PostgreSQL is our primary reference database engine."
          ],
          references: [
            { title: "PostgreSQL Official Documentation", url: "https://www.postgresql.org/docs/current/tutorial-sql.html" }
          ],
          mcqs: [
          {
                    "id": 1,
                    "question": "What does the acronym RDBMS stand for in modern software engineering?",
                    "options": [
                              "Relational Database Management System",
                              "Realtime Data Byte Management Software",
                              "Recursive Database Memory Storage",
                              "Remote Document Backup System"
                    ],
                    "correctAnswer": 0,
                    "explanation": "RDBMS stands for Relational Database Management System, a system that manages data stored in relational tables using SQL."
          },
          {
                    "id": 2,
                    "question": "In a relational database table, what does each individual horizontal row (record) represent?",
                    "options": [
                              "A specific column property or attribute definition",
                              "A single, discrete entity instance (e.g., a specific student or transaction)",
                              "An indexed primary key constraint",
                              "A database schema migration log"
                    ],
                    "correctAnswer": 1,
                    "explanation": "In relational architecture, columns define attributes while rows (tuples) store discrete individual records of entities."
          },
          {
                    "id": 3,
                    "question": "What is the defining characteristic of a Primary Key in a relational table?",
                    "options": [
                              "It allows duplicate values but cannot contain strings",
                              "It must uniquely identify every row and cannot contain NULL values",
                              "It is optional and only used for sorting queries",
                              "It must reference a column in an external table"
                    ],
                    "correctAnswer": 1,
                    "explanation": "A Primary Key uniquely distinguishes each record in a table, guaranteeing uniqueness and strictly prohibiting NULL values."
          },
          {
                    "id": 4,
                    "question": "Which SQL command is universally used to retrieve or query data from one or more database tables?",
                    "options": [
                              "RETRIEVE",
                              "GET",
                              "SELECT",
                              "EXTRACT"
                    ],
                    "correctAnswer": 2,
                    "explanation": "The SELECT statement is the standard declarative SQL query command used to project and retrieve data from database tables."
          },
          {
                    "id": 5,
                    "question": "Why is SQL categorized as a declarative language rather than an imperative procedural language?",
                    "options": [
                              "The developer specifies what data to retrieve rather than the step-by-step algorithms for how to fetch it",
                              "It can only declare variables without executing computations",
                              "It does not require a database engine to execute queries",
                              "It cannot be compiled into machine instructions"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Declarative programming specifies the desired output ('what'), leaving query planning and algorithmic retrieval ('how') to the database engine optimizer."
          }
]
        }
      },
      {
        id: "sql-mod-2",
        title: "Module 02 — Database and Table Creation (DDL)",
        description: "Create tables, define column data types (VARCHAR, INT, TIMESTAMP, BOOLEAN), primary keys, and constraints.",
        completed: true,
        readingMaterial: {
          introduction: "Data Definition Language (DDL) commands (CREATE, ALTER, DROP) define the schema architecture of relational tables.",
          objectives: [
            "Use CREATE TABLE with appropriate data types",
            "Set PRIMARY KEY and FOREIGN KEY constraints",
            "Apply NOT NULL and UNIQUE constraints"
          ],
          sections: [
            {
              heading: "Data Types Overview",
              text: "Common data types include INT (numbers), VARCHAR(n) (strings), TIMESTAMP (dates), and NUMERIC(p,s) (precise currency)."
            }
          ],
          codeExamples: [
            {
              title: "CREATE TABLE Statement",
              code: `CREATE TABLE learners (
    learner_id SERIAL PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`,
              explanation: "SERIAL automatically generates auto-incrementing integer IDs."
            }
          ],
          bestPractices: [
            "Always set a UNIQUE constraint on user email fields."
          ],
          commonMistakes: [
            "Creating tables without a primary key."
          ],
          practiceExercise: {
            title: "Create Courses Schema",
            problem: "Create a courses table with course_id, title, price.",
            solutionCode: `CREATE TABLE courses (
    course_id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    price NUMERIC(10,2) DEFAULT 0.00
);`
          },
          keyTakeaways: [
            "Primary keys uniquely identify each row in a table.",
            "Constraints guarantee data integrity."
          ],
          references: [
            { title: "PostgreSQL CREATE TABLE Manual", url: "https://www.postgresql.org/docs/current/sql-createtable.html" }
          ],
          mcqs: [
          {
                    "id": 1,
                    "question": "Which category of SQL statements includes commands like CREATE, ALTER, and DROP to manage schema structures?",
                    "options": [
                              "Data Manipulation Language (DML)",
                              "Data Definition Language (DDL)",
                              "Transaction Control Language (TCL)",
                              "Data Control Language (DCL)"
                    ],
                    "correctAnswer": 1,
                    "explanation": "Data Definition Language (DDL) manages schema structures such as creating, altering, and dropping tables, indexes, and constraints."
          },
          {
                    "id": 2,
                    "question": "What is the fundamental difference between CHAR(n) and VARCHAR(n) data types in SQL?",
                    "options": [
                              "VARCHAR(n) allocates fixed memory regardless of input length, whereas CHAR(n) is variable",
                              "CHAR(n) is fixed-length padded with spaces, whereas VARCHAR(n) stores variable-length strings up to n characters",
                              "CHAR(n) only stores uppercase letters",
                              "VARCHAR(n) cannot be indexed in relational tables"
                    ],
                    "correctAnswer": 1,
                    "explanation": "CHAR(n) always reserves exactly n characters using space padding, while VARCHAR(n) dynamically adjusts storage to string length up to n."
          },
          {
                    "id": 3,
                    "question": "In PostgreSQL, what does the SERIAL pseudo-type do when defining a primary key column?",
                    "options": [
                              "It converts text strings into serialized binary blobs",
                              "It automatically creates a sequence generator that increments integer IDs for each new inserted row",
                              "It enforces encryption on the column",
                              "It prevents duplicate rows from being inserted into foreign tables"
                    ],
                    "correctAnswer": 1,
                    "explanation": "SERIAL creates an underlying auto-incrementing sequence object, assigning sequential integers (1, 2, 3...) to new rows automatically."
          },
          {
                    "id": 4,
                    "question": "What integrity guarantee does the NOT NULL column constraint provide in a database table?",
                    "options": [
                              "It ensures that the column only contains positive integers",
                              "It prevents rows from being inserted or updated without providing an explicit value for that column",
                              "It forces all text values to be lowercase",
                              "It ensures the value is unique across all rows"
                    ],
                    "correctAnswer": 1,
                    "explanation": "The NOT NULL constraint guarantees that every record must possess a valid, non-null value for that specific attribute."
          },
          {
                    "id": 5,
                    "question": "Why is NUMERIC(p, s) or DECIMAL preferred over FLOAT for storing monetary financial amounts?",
                    "options": [
                              "FLOAT uses binary approximation leading to IEEE 754 rounding inaccuracies, while NUMERIC guarantees exact decimal precision",
                              "NUMERIC uses half the storage space of FLOAT",
                              "FLOAT cannot be used with arithmetic operators (+, -, *)",
                              "Database engines do not allow financial columns to be named with FLOAT"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Binary floating-point types (FLOAT/REAL) introduce rounding drift due to IEEE 754 representations, whereas NUMERIC/DECIMAL guarantees exact precision."
          }
]
        }
      },
      {
        id: "sql-mod-3",
        title: "Module 03 — SELECT Queries and Expressions",
        description: "Query specific columns, perform math expressions on columns, alias column names with AS.",
        completed: true,
        readingMaterial: {
          introduction: "The SELECT statement forms the core of SQL data retrieval.",
          objectives: [
            "Select specific column subsets",
            "Calculate derived columns on the fly",
            "Assign alias names with AS"
          ],
          sections: [
            {
              heading: "Column Projection & Aliasing",
              text: "Rather than fetching * (all columns), specifying exact columns reduces memory footprint and speeds up execution."
            }
          ],
          codeExamples: [
            {
              title: "Derived Columns Query",
              code: `SELECT 
    title,
    price,
    price * 0.18 AS tax_amount,
    price * 1.18 AS total_price_with_tax
FROM courses;`,
              explanation: "AS creates friendly column header titles."
            }
          ],
          bestPractices: [
            "Avoid SELECT * in production applications."
          ],
          commonMistakes: [
            "Misspelling column names."
          ],
          practiceExercise: {
            title: "Select Course Summaries",
            problem: "Select title and level with alias Course_Level.",
            solutionCode: `SELECT title, level AS Course_Level FROM courses;`
          },
          keyTakeaways: [
            "SELECT projects desired columns.",
            "AS renames column headers in query output."
          ],
          references: [
            { title: "PostgreSQL SELECT Syntax", url: "https://www.postgresql.org/docs/current/sql-select.html" }
          ],
          mcqs: [
          {
                    "id": 1,
                    "question": "Why is specifying explicit column names in a SELECT query considered a best practice over SELECT * in production?",
                    "options": [
                              "SELECT * is deprecated in modern SQL-92 standards",
                              "Explicit columns reduce network I/O, decrease memory consumption, and safeguard code against unexpected schema alterations",
                              "SELECT * cannot be combined with a WHERE filter",
                              "Relational databases disable query caching when SELECT * is executed"
                    ],
                    "correctAnswer": 1,
                    "explanation": "Explicit column selection minimizes bandwidth and memory consumption, prevents schema drift issues, and allows query optimizers to utilize covering indexes."
          },
          {
                    "id": 2,
                    "question": "What is the function of the AS keyword in a SQL SELECT statement?",
                    "options": [
                              "It permanently renames the column in the physical database disk schema",
                              "It assigns a temporary alias name to an expression or column in the returned query result set",
                              "It filters rows based on case-insensitive patterns",
                              "It converts data types during query compilation"
                    ],
                    "correctAnswer": 1,
                    "explanation": "The AS keyword creates an alias for a column or expression in query output without altering the underlying table structure."
          },
          {
                    "id": 3,
                    "question": "Given the query: SELECT title, price, price * 0.18 AS tax FROM courses;, what type of column is tax?",
                    "options": [
                              "A persistent stored disk column",
                              "A derived (computed) column calculated on the fly during query evaluation",
                              "A foreign key column referencing the tax rates table",
                              "An indexed clustered column"
                    ],
                    "correctAnswer": 1,
                    "explanation": "Derived columns are computed dynamically in runtime memory using arithmetic expressions during query execution."
          },
          {
                    "id": 4,
                    "question": "What will be the output of SELECT 10 / 4; in SQL engines that perform integer arithmetic?",
                    "options": [
                              "2.5",
                              "2 (integer truncation)",
                              "2.0",
                              "Syntax Error"
                    ],
                    "correctAnswer": 1,
                    "explanation": "When both operands in a division are integers, SQL engines perform integer division, truncating the fractional part to produce 2."
          },
          {
                    "id": 5,
                    "question": "How can you concatenate two string columns or literals in standard SQL and PostgreSQL?",
                    "options": [
                              "column1 + column2",
                              "column1 & column2",
                              "column1 || column2 (or CONCAT function)",
                              "column1 . column2"
                    ],
                    "correctAnswer": 2,
                    "explanation": "Standard ANSI SQL and PostgreSQL use the double-pipe operator (||) or the CONCAT() function for string concatenation."
          }
]
        }
      },
      {
        id: "sql-mod-4",
        title: "Module 04 — WHERE Filtering",
        description: "Filter query results using WHERE clause with comparison operators, AND/OR/NOT, BETWEEN, IN, and LIKE pattern matching.",
        completed: false,
        readingMaterial: {
          introduction: "The WHERE clause filters rows before aggregation occurs.",
          objectives: [
            "Filter rows matching precise criteria",
            "Use LIKE '%pattern%' for wildcard search",
            "Use IN ('val1', 'val2') for discrete values"
          ],
          sections: [
            {
              heading: "Pattern Matching Wildcards",
              text: "% matches zero or more characters. _ matches exactly one character."
            }
          ],
          codeExamples: [
            {
              title: "Filtering Query",
              code: `SELECT title, category, price 
FROM courses 
WHERE category = 'Programming' 
  AND price <= 1000 
  AND title LIKE '%Python%';`,
              explanation: "Filters rows satisfying all three conditional criteria."
            }
          ],
          bestPractices: [
            "Use ILIKE in PostgreSQL for case-insensitive pattern matching."
          ],
          commonMistakes: [
            "Using = NULL instead of IS NULL to check missing values."
          ],
          practiceExercise: {
            title: "Find Free Courses",
            problem: "Query courses where price is 0 or is_free is TRUE.",
            solutionCode: `SELECT * FROM courses WHERE price = 0 OR is_free = TRUE;`
          },
          keyTakeaways: [
            "WHERE evaluates condition for each candidate row.",
            "Use IS NULL / IS NOT NULL for null checks."
          ],
          references: [
            { title: "PostgreSQL WHERE Clause Reference", url: "https://www.postgresql.org/docs/current/queries-table-expressions.html#QUERIES-WHERE" }
          ],
          mcqs: [
          {
                    "id": 1,
                    "question": "At what stage of SQL query processing is the WHERE clause evaluated?",
                    "options": [
                              "After aggregate functions and GROUP BY groups are formed",
                              "Before row aggregation occurs, filtering individual candidate rows from the source tables",
                              "After ORDER BY sorts the final output",
                              "After LIMIT slices the result set"
                    ],
                    "correctAnswer": 1,
                    "explanation": "The WHERE clause acts as a row-level filter executed before grouping and aggregation (HAVING filters after aggregation)."
          },
          {
                    "id": 2,
                    "question": "Which SQL condition correctly filters for records where the email column does not have an assigned value?",
                    "options": [
                              "WHERE email = NULL",
                              "WHERE email == \"\"",
                              "WHERE email IS NULL",
                              "WHERE email EQUALS NULL"
                    ],
                    "correctAnswer": 2,
                    "explanation": "In SQL three-valued logic, NULL represents unknown data and cannot be compared with '='. You must use 'IS NULL' or 'IS NOT NULL'."
          },
          {
                    "id": 3,
                    "question": "What pattern does the query WHERE title LIKE 'Py%' match in SQL?",
                    "options": [
                              "Any string that contains the characters 'Py' anywhere in the text",
                              "Any string that starts with 'Py' followed by zero or more characters",
                              "Any string that ends with 'Py'",
                              "Exactly the two-letter string 'Py'"
                    ],
                    "correctAnswer": 1,
                    "explanation": "The '%' wildcard matches zero, one, or multiple characters. Placing it after 'Py' matches strings starting with 'Py'."
          },
          {
                    "id": 4,
                    "question": "What is the primary advantage of using the IN operator over multiple OR statements?",
                    "options": [
                              "It provides cleaner, more readable syntax and allows dynamic subquery matching",
                              "OR operators cannot be evaluated by relational query optimizers",
                              "IN only works on numeric integer data types",
                              "IN forces the database to sort the rows in ascending order"
                    ],
                    "correctAnswer": 0,
                    "explanation": "The IN operator simplifies multi-value matching into clean readable code and seamlessly accepts subquery result sets."
          },
          {
                    "id": 5,
                    "question": "In PostgreSQL, what is the key difference between the LIKE and ILIKE operators?",
                    "options": [
                              "ILIKE performs case-insensitive pattern matching, whereas LIKE is case-sensitive",
                              "ILIKE only matches integer numeric columns",
                              "ILIKE is strictly reserved for regular expression regex syntax",
                              "ILIKE cannot use the % wildcard character"
                    ],
                    "correctAnswer": 0,
                    "explanation": "ILIKE is PostgreSQL's case-insensitive matching operator, making 'Python' and 'python' evaluate as identical matches."
          }
]
        }
      },
      {
        id: "sql-mod-5",
        title: "Module 05 — Sorting (ORDER BY) and Limiting (LIMIT/OFFSET)",
        description: "Sort query outputs in ASC/DESC order and paginate results with LIMIT and OFFSET.",
        completed: false,
        readingMaterial: {
          introduction: "Sorting organizes query outputs. Pagination divides large datasets into bite-sized pages.",
          objectives: [
            "Sort by single and multiple columns (ORDER BY col1 DESC, col2 ASC)",
            "Restrict row counts using LIMIT",
            "Implement pagination with OFFSET"
          ],
          sections: [
            {
              heading: "Pagination Math",
              text: "To fetch page N with PageSize rows: LIMIT PageSize OFFSET (N-1)*PageSize."
            }
          ],
          codeExamples: [
            {
              title: "Top 5 Most Popular Courses",
              code: `SELECT title, students_count, rating 
FROM courses 
ORDER BY students_count DESC 
LIMIT 5;`,
              explanation: "ORDER BY DESC ranks highest values at the top."
            }
          ],
          bestPractices: [
            "Always include ORDER BY when using LIMIT to ensure deterministic output."
          ],
          commonMistakes: [
            "Forgetting DESC when ranking top items."
          ],
          practiceExercise: {
            title: "Paginate Page 2",
            problem: "Write a query fetching 10 rows starting from row 11.",
            solutionCode: `SELECT * FROM courses ORDER BY course_id ASC LIMIT 10 OFFSET 10;`
          },
          keyTakeaways: [
            "ORDER BY defaults to ASC (ascending).",
            "LIMIT restricts maximum rows returned."
          ],
          references: [
            { title: "PostgreSQL ORDER BY Docs", url: "https://www.postgresql.org/docs/current/queries-order.html" }
          ],
          mcqs: [
          {
                    "id": 1,
                    "question": "What is the default sorting direction in SQL when the ORDER BY clause does not explicitly declare ASC or DESC?",
                    "options": [
                              "Descending (DESC)",
                              "Ascending (ASC)",
                              "Random insertion order",
                              "Clustered primary key index order"
                    ],
                    "correctAnswer": 1,
                    "explanation": "SQL specifies ASC (ascending: lowest to highest, A to Z) as the default sorting order when omitted."
          },
          {
                    "id": 2,
                    "question": "In multi-column sorting: ORDER BY department ASC, salary DESC;, how does the database order the rows?",
                    "options": [
                              "It sorts primarily by department alphabetically; for rows with the same department, it sorts by salary highest to lowest",
                              "It sorts by salary first, and ignores department entirely",
                              "It sorts alternating rows between department and salary",
                              "It produces a syntax error because two directions cannot be specified"
                    ],
                    "correctAnswer": 0,
                    "explanation": "SQL sorts hierarchically: rows are ordered first by department ascending; ties within the same department are broken by salary descending."
          },
          {
                    "id": 3,
                    "question": "Why is it critical to combine a deterministic ORDER BY clause whenever using LIMIT and OFFSET for pagination?",
                    "options": [
                              "Without ORDER BY, the database does not guarantee row order, leading to missing or duplicated records across paginated views",
                              "SQL syntax throws a compiler exception if LIMIT is used without ORDER BY",
                              "LIMIT cannot return fewer than 10 rows without ORDER BY",
                              "ORDER BY is required to compute the total number of pages"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Relational tables are unordered mathematical sets. Without explicit ORDER BY, physical retrieval order may change between queries, scrambling pagination."
          },
          {
                    "id": 4,
                    "question": "To fetch page 3 of a data grid with a page size of 20 items per page, what are the appropriate LIMIT and OFFSET values?",
                    "options": [
                              "LIMIT 20 OFFSET 60",
                              "LIMIT 20 OFFSET 40",
                              "LIMIT 40 OFFSET 20",
                              "LIMIT 3 OFFSET 20"
                    ],
                    "correctAnswer": 1,
                    "explanation": "Pagination formula: OFFSET = (PageNumber - 1) * PageSize. For Page 3 with 20 items: (3 - 1) * 20 = 40, so LIMIT 20 OFFSET 40."
          },
          {
                    "id": 5,
                    "question": "How are NULL values ordered by default in PostgreSQL when sorting with ORDER BY column ASC?",
                    "options": [
                              "They are always converted to 0",
                              "They appear last by default (or can be configured with NULLS FIRST / NULLS LAST)",
                              "They cause the query to fail with an exception",
                              "They are automatically excluded from query results"
                    ],
                    "correctAnswer": 1,
                    "explanation": "In PostgreSQL, ORDER BY ASC places NULL values last by default, while ORDER BY DESC places them first, customizable with NULLS FIRST/LAST."
          }
]
        }
      }
    ]
  },
  {
    id: "web-development",
    title: "Web Development",
    category: "Web Development",
    level: "Beginner to Advanced",
    duration: "50 hours",
    rating: 4.9,
    studentsCount: "18.5k",
    studentsNumeric: 18500,
    price: 1499,
    isFree: false,
    bestseller: true,
    progress: 18, // 3/16 completed
    iconBg: "bg-emerald-50 border 2 border-emerald-200 text-emerald-600",
    iconType: "code",
    introVideoUrl: "https://www.youtube.com/embed/dpw9EHDh2bM",
    description: "Become a Full-Stack Web Developer! HTML5, CSS3, Flexbox, Grid, Responsive Design, JavaScript ES6+, DOM Manipulation, Fetch API, Git, and Modern Frontend Architecture.",
    instructor: {
      name: "Rahul Verma",
      role: "Lead Web Engineer @ Arshith Boot Camp",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    },
    whatYouWillLearn: [
      "How HTTP, DNS, Browsers, and Web Servers interact",
      "Semantic HTML5 tags, accessibility (a11y), and SEO standards",
      "CSS3 Box Model, Flexbox, Grid, Animations & Custom Variables",
      "Responsive Web Design across Mobile, Tablet, and Desktop displays",
      "JavaScript ES6+: Async/Await, Promises, Closures, DOM Events",
      "Building a complete, production-ready Full-Stack Web Application"
    ],
    modules: [
      {
        id: "web-mod-1",
        title: "Module 01 — How the Web Works",
        description: "Clients, Servers, HTTP request/response cycle, IP addresses, DNS resolution, and browser rendering engines.",
        completed: true,
        readingMaterial: {
          introduction: "Understanding how browsers communicate with web servers over HTTP/HTTPS is the foundation of web development.",
          objectives: [
            "Understand Client-Server architecture",
            "Trace HTTP GET/POST request lifecycle",
            "Role of HTML, CSS, and JavaScript in browsers"
          ],
          sections: [
            {
              heading: "The Request-Response Cycle",
              text: "1. Browser enters URL -> 2. DNS resolves IP -> 3. TCP Handshake -> 4. HTTP Request -> 5. Server responds HTML -> 6. Browser renders DOM."
            }
          ],
          codeExamples: [
            {
              title: "HTTP Response Status Codes",
              code: `200 OK          - Request succeeded
201 Created     - Resource created
400 Bad Request - Invalid client syntax
404 Not Found   - Resource does not exist
500 Server Error - Internal server crash`,
              explanation: "HTTP status codes indicate request outcome."
            }
          ],
          bestPractices: [
            "Always serve web applications over encrypted HTTPS."
          ],
          commonMistakes: [
            "Confusing domain registrar with web host server."
          ],
          practiceExercise: {
            title: "Inspect Network Tab",
            problem: "Open browser DevTools (F12) Network tab and inspect loaded assets.",
            solutionCode: `Press F12 -> Select Network tab -> Refresh page`
          },
          keyTakeaways: [
            "Browsers render HTML structure, CSS styling, and JS interactivity.",
            "DNS maps human domain names to IP addresses."
          ],
          references: [
            { title: "MDN How the Web Works", url: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works" }
          ],
          mcqs: [
          {
                    "id": 1,
                    "question": "What is the primary role of the Domain Name System (DNS) in web architecture?",
                    "options": [
                              "Translating human-friendly domain names (e.g. example.com) into machine-routable IP addresses",
                              "Storing HTML web pages on distributed web server disks",
                              "Encrypting user passwords using SSL certificates",
                              "Compiling JavaScript code before browser execution"
                    ],
                    "correctAnswer": 0,
                    "explanation": "DNS acts as the phonebook of the Internet, resolving domain names entered by users into numerical IP addresses needed by network routers."
          },
          {
                    "id": 2,
                    "question": "In the HTTP protocol, what does the 404 status code signify to the client?",
                    "options": [
                              "The client is unauthorized to view the resource",
                              "The requested URL/resource could not be found on the server",
                              "The server crashed due to an unhandled internal exception",
                              "The client submitted an invalid JSON payload syntax"
                    ],
                    "correctAnswer": 1,
                    "explanation": "HTTP 404 Not Found indicates that the client was able to communicate with the server, but the server could not locate the requested resource."
          },
          {
                    "id": 3,
                    "question": "What is the fundamental difference between HTTP GET and POST request methods?",
                    "options": [
                              "GET requests retrieve data and should be idempotent with parameters in the URL, whereas POST submits data in the request body to alter server state",
                              "GET can only transfer JSON data, while POST only transfers HTML",
                              "POST requests are always unencrypted, whereas GET is automatically encrypted",
                              "GET requests do not generate server log entries"
                    ],
                    "correctAnswer": 0,
                    "explanation": "GET is a safe, idempotent method intended for data retrieval, while POST sends payloads in the body intended to create or mutate server state."
          },
          {
                    "id": 4,
                    "question": "What three core technologies form the foundation of client-side web browser rendering?",
                    "options": [
                              "Python (backend), SQL (database), and Docker (containers)",
                              "HTML (semantic structure), CSS (visual styling), and JavaScript (client-side interactivity)",
                              "C++ (engine), Rust (memory), and Bash (terminal)",
                              "JSON (storage), XML (markup), and YAML (configuration)"
                    ],
                    "correctAnswer": 1,
                    "explanation": "HTML provides the document structure (DOM), CSS provides styling and presentation, and JavaScript enables dynamic interactivity and logic."
          },
          {
                    "id": 5,
                    "question": "What happens during the initial TCP 3-Way Handshake before an HTTP exchange can occur?",
                    "options": [
                              "The client and server exchange SYN, SYN-ACK, and ACK packets to establish a synchronized, reliable connection",
                              "The browser downloads all CSS files and renders the DOM tree",
                              "The server verifies the user's login session token",
                              "The database executes pending schema migrations"
                    ],
                    "correctAnswer": 0,
                    "explanation": "TCP establishes reliable connection transport via SYN (synchronize), SYN-ACK (synchronize-acknowledge), and ACK (acknowledge) packets."
          }
]
        }
      }
    ]
  },
  {
    id: "ai-data-science",
    title: "AI with Data Science",
    category: "AI",
    level: "Intermediate to Advanced",
    duration: "60 hours",
    rating: 4.9,
    studentsCount: "12.1k",
    studentsNumeric: 12100,
    price: 2499,
    isFree: false,
    bestseller: false,
    progress: 12, // 2/16 completed
    iconBg: "bg-purple-50 border 2 border-purple-200 text-purple-600",
    iconType: "barchart",
    introVideoUrl: "https://www.youtube.com/embed/LHBE6Q9XlzI",
    description: "Master Data Analysis, Machine Learning, & AI! NumPy arrays, Pandas DataFrames, Data Visualization, Scikit-Learn Regression/Classification, and Generative AI applications.",
    instructor: {
      name: "Dr. Ananya Sharma & Karan Mehta",
      role: "AI Research Specialists @ Arshith Boot Camp",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
    },
    whatYouWillLearn: [
      "NumPy vectorization, matrix mathematics, and N-dimensional arrays",
      "Pandas DataFrames for data cleaning, transformation, indexing, and merging",
      "Exploratory Data Analysis (EDA) and plotting with Matplotlib & Seaborn",
      "Supervised Machine Learning algorithms: Linear/Logistic Regression, Decision Trees, Random Forests",
      "Model Evaluation metrics: Precision, Recall, F1-score, ROC-AUC curves",
      "Building an end-to-end AI Predictive Capstone Project"
    ],
    modules: [
      {
        id: "ds-mod-1",
        title: "Module 01 — Introduction to AI and Data Science",
        description: "Overview of Data Science pipeline, Machine Learning paradigms (Supervised, Unsupervised, Reinforcement), and AI industry applications.",
        completed: true,
        readingMaterial: {
          introduction: "Data Science extracts actionable business insights from raw structured and unstructured datasets using scientific methods, algorithms, and Machine Learning.",
          objectives: [
            "Understand Data Science Lifecycle: Collection -> Cleaning -> EDA -> Modeling -> Deployment",
            "Difference between AI, Machine Learning, and Deep Learning",
            "Configure Jupyter Notebook & Anaconda environments"
          ],
          sections: [
            {
              heading: "AI vs ML vs Deep Learning Hierarchy",
              text: "Artificial Intelligence (Broadest domain) -> Machine Learning (Statistical learning from data) -> Deep Learning (Multi-layer Neural Networks)."
            }
          ],
          codeExamples: [
            {
              title: "Jupyter Environment Test",
              code: `import sys
print(f"Python Version: {sys.version}")
print("Arshith Boot Camp AI Workspace Active!")`,
              explanation: "Verifies Python runtime inside Jupyter environment."
            }
          ],
          bestPractices: [
            "Use virtual environments to manage data science dependencies."
          ],
          commonMistakes: [
            "Jumping directly into ML modeling without exploratory data analysis."
          ],
          practiceExercise: {
            title: "Check Environment",
            problem: "Verify Python kernel version in Jupyter.",
            solutionCode: `import sys; print(sys.version)`
          },
          keyTakeaways: [
            "Data Science combines statistics, computer science, and domain expertise.",
            "Jupyter Notebooks are the industry standard for interactive analysis."
          ],
          references: [
            { title: "NumPy Documentation Overview", url: "https://numpy.org/doc/stable/" }
          ],
          mcqs: [
          {
                    "id": 1,
                    "question": "What represents the correct hierarchical nesting relationship between AI, Machine Learning, and Deep Learning?",
                    "options": [
                              "Deep Learning ⊃ Machine Learning ⊃ Artificial Intelligence",
                              "Artificial Intelligence ⊃ Machine Learning ⊃ Deep Learning",
                              "Machine Learning ⊃ Deep Learning ⊃ Artificial Intelligence",
                              "Artificial Intelligence and Machine Learning are mutually exclusive fields"
                    ],
                    "correctAnswer": 1,
                    "explanation": "Artificial Intelligence is the broad umbrella discipline; Machine Learning is a subset focusing on learning from data; Deep Learning is a specialized subfield of ML using multi-layered neural networks."
          },
          {
                    "id": 2,
                    "question": "What is the primary distinction between Supervised Learning and Unsupervised Learning?",
                    "options": [
                              "Supervised learning trains models on labeled ground-truth targets (features + target), whereas unsupervised learning finds hidden patterns in unlabeled data",
                              "Supervised learning does not require computer processors",
                              "Unsupervised learning only works on image computer vision datasets",
                              "Supervised learning models can never overfit training data"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Supervised learning maps inputs X to known labels y, whereas unsupervised learning discovers intrinsic groupings, patterns, or clusters in unlabeled data."
          },
          {
                    "id": 3,
                    "question": "What is the purpose of Exploratory Data Analysis (EDA) in the Data Science lifecycle?",
                    "options": [
                              "Writing unit test suites for deployment pipelines",
                              "Inspecting distributions, detecting missing values, identifying outliers, and understanding feature correlations prior to modeling",
                              "Deploying models to production cloud Kubernetes clusters",
                              "Compiling Python source code to C binaries for speed"
                    ],
                    "correctAnswer": 1,
                    "explanation": "EDA allows practitioners to visually and statistically explore datasets to understand patterns, uncover anomalies, test hypotheses, and guide feature engineering."
          },
          {
                    "id": 4,
                    "question": "Why are Jupyter Notebooks (.ipynb) the preferred development interface for data scientists?",
                    "options": [
                              "They provide an interactive REPL environment allowing inline execution, markdown documentation, and instant data visualizations",
                              "They run faster than compiled C++ executables",
                              "They automatically fix data quality anomalies without user code",
                              "They eliminate the need to install external libraries like NumPy and Pandas"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Jupyter provides a cell-based computational notebook blending code execution, mathematical formulas, explanatory narrative, and rich visualization charts."
          },
          {
                    "id": 5,
                    "question": "In a machine learning classification task with heavily imbalanced classes (e.g., 99% negative, 1% positive), why is raw Accuracy misleading?",
                    "options": [
                              "A naive model predicting negative 100% of the time achieves 99% accuracy while failing to detect a single positive case",
                              "Accuracy cannot be expressed as a mathematical percentage",
                              "Accuracy is only applicable to continuous regression problems",
                              "Scikit-Learn disallows accuracy scoring on classification models"
                    ],
                    "correctAnswer": 0,
                    "explanation": "With extreme class imbalance, a model that classifies everything as the majority class produces deceptive high accuracy despite zero predictive utility for the minority class (hence Precision, Recall, and ROC-AUC are used)."
          }
]
        }
      }
    ]
  }
];

export const CATEGORIES = [
  "All Categories",
  "Programming",
  "SQL",
  "Web Development",
  "AI"
];

export const STUDENT_PROFILE = {
  name: "Arshith Kumar",
  email: "arshith@arshithbootcamp.com",
  role: "Learner",
  avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80",
  joinDate: "January 2026",
  completedCoursesCount: 1,
  enrolledCoursesCount: 4,
  certificatesEarned: 1
};

export const SAMPLE_CERTIFICATES = [
  {
    id: "ABC-2026-PY0128",
    courseId: "python-programming",
    courseTitle: "Python Programming",
    studentName: "Arshith Kumar",
    issueDate: "October 1, 2026",
    instructorName: "Dr. Ananya Sharma",
    grade: "98% Distinction",
    skills: ["Python 3", "OOP", "File I/O", "SQLite", "Automation"]
  }
];
