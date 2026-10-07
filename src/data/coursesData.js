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
        title: "Module 01 — Introduction to Python & Computer Architecture",
        description: "Overview of Python language, computer hardware architecture (CPU, Main vs Secondary Memory), interpreter vs compiler, reserved words, and writing your first program.",
        completed: true,
        readingMaterial: {
          introduction: "Welcome to Python Programming! Based on Chapter 1 of 'Python for Everybody', programming is the art of telling a computer what to do next. Computers act as high-speed Personal Digital Assistants that excel at repetitive tasks, reading data, and calculating results.",
          objectives: [
            "Understand computer hardware architecture: CPU, Main Memory (RAM), Secondary Memory (Disk), Input/Output devices, and Network connections",
            "Differentiate between high-level interpreted languages (Python) and machine code (0s and 1s)",
            "Learn Python's 35 reserved keywords and syntax rules",
            "Write and execute your first script (hello.py) using the print() function",
            "Identify the 3 main types of programming errors: Syntax, Logic, and Semantic errors",
            "Master the 4 debugging strategies: Reading, Running, Ruminating, and Retreating"
          ],
          sections: [
            {
              heading: "Computer Hardware Architecture",
              text: "To write effective software, you must understand the basic hardware components inside modern computers:",
              bulletPoints: [
                "Central Processing Unit (CPU): The brain of the computer that continuously asks 'What is next?' at billions of cycles per second (Gigahertz).",
                "Main Memory (RAM): Fast, volatile storage used by the CPU for active execution. Data vanishes when power turns off.",
                "Secondary Memory (Disk / Flash): Permanent storage (hard drives, SSDs) that retains data even when powered down.",
                "Input and Output Devices: Keyboard, mouse, screen, and speakers for human-computer interaction.",
                "Network Connection: Slower form of remote secondary storage for fetching data over the Internet."
              ],
              table: {
                headers: ["Hardware Component", "Speed", "Persistence", "Primary Function"],
                rows: [
                  ["CPU", "Ultra Fast", "Volatile (Registers)", "Executes instructions"],
                  ["Main Memory (RAM)", "Fast", "Volatile (Temporary)", "Stores active program data"],
                  ["Secondary Memory", "Slower", "Persistent (Permanent)", "Stores files & databases"],
                  ["Network Connection", "Slowest", "Remote/External", "Fetches web data"]
                ]
              }
            },
            {
              heading: "Interpreter vs Compiler",
              text: "Computers only understand Machine Code (0s and 1s). High-level languages like Python use an Interpreter to translate source code into machine code on-the-fly, line by line. Compilers, by contrast, translate the entire program at once into an executable binary (.exe)."
            },
            {
              heading: "Python 35 Reserved Words",
              text: "Python has a tiny vocabulary of 35 reserved keywords that cannot be used as variable names:",
              bulletPoints: [
                "Control & Conditionals: if, elif, else, for, while, break, continue, pass, return, yield",
                "Boolean & Logic: True, False, None, and, or, not, is, in",
                "Functions & Classes: def, class, lambda, global, nonlocal",
                "Error Handling: try, except, finally, raise, assert",
                "Imports & Context: import, from, as, with, async, await, del"
              ]
            },
            {
              heading: "Three Types of Errors",
              text: "When writing code, you will encounter three distinct error categories:",
              bulletPoints: [
                "Syntax Errors: Violating Python grammar rules. Python catches these before executing.",
                "Logic Errors: Code syntax is correct, but statements are executed in the wrong order or logic.",
                "Semantic Errors: Code runs without error messages, but produces the wrong result (e.g. calculated value is incorrect)."
              ]
            }
          ],
          codeExamples: [
            {
              title: "Hello World Script (hello.py)",
              code: `# First Python Script - Python for Everybody
print('Hello world!')

# Interactive Prompt (>>>)
# >>> x = 6
# >>> print(x)
# 6
# >>> y = x * 7
# >>> print(y)
# 42`,
              explanation: "print() outputs string text enclosed in single or double quotes. Commands typed in interactive mode (>>>) execute immediately."
            },
            {
              title: "Word Frequency Count Script (words.py)",
              code: `# Word Frequency Counter from Chapter 1
name = input('Enter file name: ')
handle = open(name, 'r')
counts = dict()

for line in handle:
    words = line.split()
    for word in words:
        counts[word] = counts.get(word, 0) + 1

bigcount = None
bigword = None
for word, count in list(counts.items()):
    if bigcount is None or count > bigcount:
        bigword = word
        bigcount = count

print(f"Most common word: '{bigword}' occurs {bigcount} times.")`,
              explanation: "Demonstrates the core building blocks of programming: input, sequential execution, repetition (for loop), conditional logic, and output."
            }
          ],
          bestPractices: [
            "Write code in a text editor saved with .py extension for complex scripts.",
            "Use indentation (4 spaces per block) consistently.",
            "When stuck debugging, practice 'retreating'—back up to working code before rebuilding."
          ],
          commonMistakes: [
            "Using reserved words like 'class' or 'def' as variable names.",
            "Mismatched quotes around string literals (SyntaxError: unterminated string literal)."
          ],
          practiceExercise: {
            title: "Hardware Role Identification",
            problem: "Write a Python script that prompts the user for a number, multiplies it by 7, and prints the result while commenting which computer hardware component handles each step.",
            solutionCode: `# Input: Keyboard (Input Device)
val_str = input("Enter a number: ")

# Main Memory stores val_int & result; CPU performs multiplication
val_int = int(val_str)
result = val_int * 7

# Output Device: Display screen prints result
print(f"Result: {result}")`
          },
          keyTakeaways: [
            "Programming is orchestrating CPU, Main Memory, and Storage resources.",
            "Python is an interpreted, high-level language with 35 reserved words.",
            "Building blocks: Input, Output, Sequential, Conditional, Iterative execution, and Functions."
          ],
          references: [
            { title: "Python for Everybody Chapter 1 (Dr. Charles Severance)", url: "https://www.py4e.com/html3/01-intro" },
            { title: "Python 3.12 Official Documentation", url: "https://docs.python.org/3/tutorial/index.html" }
          ]
        }
      },
      {
        id: "py-mod-2",
        title: "Module 02 — Variables, Expressions and Statements",
        description: "Values, data types (int, float, str), assignment statements, variable naming rules, arithmetic operators, and user input.",
        completed: true,
        readingMaterial: {
          introduction: "Based on Chapter 2 of 'Python for Everybody', variables are named symbolic references pointing to stored values in memory. Python uses dynamic typing to determine variable data types automatically.",
          objectives: [
            "Identify primitive data types: int, float, str, and bool",
            "Use type() to inspect object types",
            "Master variable assignment statements (=)",
            "Learn variable naming rules and mnemonic variable naming benefits",
            "Understand operators (+, -, *, /, //, %, **) and operands",
            "Convert user input using input() and explicit type casting (int(), float(), str())"
          ],
          sections: [
            {
              heading: "Values and Data Types",
              text: "Values are basic units of data manipulated by programs. In Python, every value belongs to a specific type class:",
              table: {
                headers: ["Data Type", "Example Literal", "Python Class", "Description"],
                rows: [
                  ["Integer", "42, -10, 0", "<class 'int'>", "Whole numbers without decimals"],
                  ["Floating-Point", "3.14159, 0.5", "<class 'float'>", "Numbers with decimal fractional parts"],
                  ["String", "'Hello', \"Python\"", "<class 'str'>", "Sequence of Unicode characters in quotes"]
                ]
              }
            },
            {
              heading: "Variable Naming Rules & Mnemonic Names",
              text: "Variable names can be arbitrarily long, containing letters, numbers, and underscores (_). Rules:",
              bulletPoints: [
                "Must NOT start with a number (e.g. 76trombones is illegal).",
                "Must NOT contain special symbols like @, $, or dashes (e.g. more@ is illegal).",
                "Must NOT use any of Python's 35 reserved keywords.",
                "Mnemonic Names: Choose names that reflect intent (e.g. hours * rate vs a * b) to make code self-documenting."
              ]
            },
            {
              heading: "Operators and Division Changes in Python 3",
              text: "Python 3 introduced floating-point division by default for the / operator (e.g., 59/60 yields 0.98333...). To perform integer floor division, use the // operator (e.g., 59//60 yields 0)."
            },
            {
              heading: "Modulus Operator (%)",
              text: "The modulus operator (%) yields the remainder when the first operand is divided by the second. Applications:",
              bulletPoints: [
                "Checking divisibility: if x % y == 0, then x is divisible by y.",
                "Extracting right-most digits: x % 10 yields the last digit; x % 100 yields the last two digits."
              ]
            }
          ],
          codeExamples: [
            {
              title: "Variables and Type Inspection",
              code: `# Chapter 2: Variables & Type Checking
message = 'And now for something completely different'
n = 17
pi = 3.1415926535897931

print(type(message)) # <class 'str'>
print(type(n))       # <class 'int'>
print(type(pi))      # <class 'float'>`,
              explanation: "type() returns the class object of the given variable."
            },
            {
              title: "User Input and Gross Pay Calculation",
              code: `# Prompting user for numeric input
hours_str = input('Enter Hours: ')
rate_str = input('Enter Rate: ')

# Convert string inputs to floating-point numbers
hours = float(hours_str)
rate = float(rate_str)

pay = hours * rate
print('Pay:', pay)`,
              explanation: "input() always returns a string; float() converts it to a number before arithmetic computation."
            }
          ],
          bestPractices: [
            "Use mnemonic variable names (e.g. gross_pay instead of p).",
            "Always prompt users with clear instructions before input().",
            "Use comments (#) to document non-obvious code logic."
          ],
          commonMistakes: [
            "Formatting numbers with commas in code: print(1,000,000) prints '1 0 0' (a tuple of integers) instead of 1000000.",
            "Concatenating string and integer without converting types (TypeError)."
          ],
          practiceExercise: {
            title: "Celsius to Fahrenheit Converter",
            problem: "Write a program that prompts the user for a Celsius temperature, converts it to Fahrenheit using (Celsius * 9/5) + 32, and prints the converted temperature.",
            solutionCode: `celsius_str = input("Enter Celsius temperature: ")
celsius = float(celsius_str)
fahrenheit = (celsius * 9/5) + 32
print(f"Fahrenheit Temperature: {fahrenheit:.2f}°F")`
          },
          keyTakeaways: [
            "Variables refer to values stored in memory.",
            "Python 3 division (/) returns float; floor division (//) truncates decimal.",
            "Modulus (%) extracts remainders.",
            "input() returns strings that require explicit type casting for math."
          ],
          references: [
            { title: "Python for Everybody Chapter 2", url: "https://www.py4e.com/html3/02-variables" },
            { title: "Python Standard Data Types", url: "https://docs.python.org/3/library/stdtypes.html" }
          ]
        }
      },
      {
        id: "py-mod-3",
        title: "Module 03 — Operators, Expressions & Precedence",
        description: "Expressions, operator precedence (PEMDAS), string operations, modulus calculations, and writing clean mathematical statements.",
        completed: true,
        readingMaterial: {
          introduction: "An expression is a combination of values, variables, and operators that evaluates to a single value. Python evaluates mathematical expressions following standard mathematical order of precedence (PEMDAS).",
          objectives: [
            "Evaluate complex expressions using operator precedence rules (PEMDAS)",
            "Perform string concatenation (+) and string multiplication (*)",
            "Apply modulus (%) for cyclic calculations and unit conversions",
            "Avoid common expression pitfalls and operator precedence bugs"
          ],
          sections: [
            {
              heading: "Order of Operations (PEMDAS Rules)",
              text: "When more than one operator appears in an expression, evaluation order follows PEMDAS:",
              bulletPoints: [
                "Parentheses (): Highest precedence. Used to force evaluation order (e.g. 2 * (3 - 1) = 4).",
                "Exponentiation **: Second highest precedence (e.g. 2**1+1 = 3, not 4).",
                "Multiplication * and Division / (and //, %): Higher than addition/subtraction.",
                "Addition + and Subtraction -: Lowest mathematical precedence.",
                "Left-to-Right Evaluation: Operators with equal precedence evaluate from left to right (e.g. 5 - 3 - 1 = 1)."
              ]
            },
            {
              heading: "String Operations (+ and *)",
              text: "The + operator concatenates strings by linking them end-to-end. The * operator multiplies string contents by an integer repeater:",
              codeExamples: [
                {
                  title: "String Multiplication and Concatenation",
                  code: `first = 'Test '
second = 3
print(first * second) # Output: 'Test Test Test '

str1 = '100'
str2 = '150'
print(str1 + str2)    # Output: '100150' (String concatenation)`,
                  explanation: "String + joins strings; string * repeat-duplicates text."
                }
              ]
            }
          ],
          codeExamples: [
            {
              title: "PEMDAS & Modulus Examples",
              code: `# Order of Operations Examples
minute = 59
percentage = (minute * 100) / 60
print("Percentage of hour:", percentage)

# Modulus remainder calculations
quotient = 7 // 3
remainder = 7 % 3
print(f"7 divided by 3 is {quotient} with remainder {remainder}")`,
              explanation: "Demonstrates parentheses overriding default evaluation order."
            }
          ],
          bestPractices: [
            "Use parentheses freely to make operator evaluation explicit and readable.",
            "Do not rely on memorizing obscure operator precedence tables."
          ],
          commonMistakes: [
            "Writing 1.0 / 2.0 * pi expecting 1/(2π)—division happens first, resulting in (1/2)*π."
          ],
          practiceExercise: {
            title: "Evaluate Expressions",
            problem: "Given width = 17 and height = 12.0, evaluate: (1) width//2, (2) width/2.0, (3) height/3, (4) 1 + 2 * 5.",
            solutionCode: `width = 17
height = 12.0

ans1 = width // 2     # 8 (int)
ans2 = width / 2.0    # 8.5 (float)
ans3 = height / 3     # 4.0 (float)
ans4 = 1 + 2 * 5      # 11 (int)

print(ans1, ans2, ans3, ans4)`
          },
          keyTakeaways: [
            "PEMDAS governs operator evaluation order.",
            "String + concatenates; string * repeats.",
            "Parentheses prevent ambiguous expression bugs."
          ],
          references: [
            { title: "Python Expressions Documentation", url: "https://docs.python.org/3/reference/expressions.html" }
          ]
        }
      },
      {
        id: "py-mod-4",
        title: "Module 04 — Conditional Execution & Exception Handling",
        description: "Boolean expressions, logical operators, if/elif/else statements, nested conditionals, and catching exceptions using try/except.",
        completed: true,
        readingMaterial: {
          introduction: "Based on Chapter 3 of 'Python for Everybody', conditional execution allows programs to branch execution paths based on evaluated truth conditions. The try/except construct provides an insurance policy against runtime crashes.",
          objectives: [
            "Evaluate Boolean expressions returning True or False (class 'bool')",
            "Use comparison operators (==, !=, >, <, >=, <=, is, is not)",
            "Combine conditions using logical operators (and, or, not)",
            "Construct if, elif, and else conditional decision trees",
            "Understand Guardian Pattern and short-circuit evaluation",
            "Handle runtime errors using try and except blocks"
          ],
          sections: [
            {
              heading: "Boolean Expressions & Comparison Operators",
              text: "A Boolean expression evaluates to either True or False (class bool). Note: = is assignment, while == tests equality.",
              table: {
                headers: ["Operator", "Meaning", "Example", "Result (x=5, y=10)"],
                rows: [
                  ["==", "Equal to", "x == y", "False"],
                  ["!=", "Not equal to", "x != y", "True"],
                  [">", "Greater than", "x > y", "False"],
                  ["<=", "Less than or equal", "x <= y", "True"],
                  ["is", "Identical object reference", "x is y", "False"]
                ]
              }
            },
            {
              heading: "Logical Operators & Short-Circuit Evaluation",
              text: "Logical operators (and, or, not) evaluate conditions. Python short-circuits evaluation: if the left operand of 'and' is False, the right operand is not evaluated.",
              codeExamples: [
                {
                  title: "Guardian Pattern Example",
                  code: `x = 6
y = 0
# y != 0 acts as a 'guard' preventing division by zero error!
if x >= 2 and y != 0 and (x / y) > 2:
    print("Condition met!")
else:
    print("Safely skipped division by zero.")`,
                  explanation: "y != 0 acts as a guardian evaluation preventing ZeroDivisionError."
                }
              ]
            },
            {
              heading: "Catching Exceptions with try / except",
              text: "When invalid input occurs (e.g. converting 'fred' to float), Python raises an exception and halts execution. A try/except block catches the error and executes fallback code gracefully."
            }
          ],
          codeExamples: [
            {
              title: "Overtime Pay Calculator with try/except",
              code: `# Chapter 3: Overtime Pay with Error Handling
hours_raw = input('Enter Hours: ')
rate_raw = input('Enter Rate: ')

try:
    hours = float(hours_raw)
    rate = float(rate_raw)
except:
    print('Error, please enter numeric input')
    quit() # Terminate execution safely

if hours > 40:
    regular_pay = 40 * rate
    overtime_pay = (hours - 40) * (rate * 1.5)
    pay = regular_pay + overtime_pay
else:
    pay = hours * rate

print('Pay:', pay)`,
              explanation: "try/except catches invalid non-numeric inputs gracefully using quit()."
            },
            {
              title: "Score to Grade Converter",
              code: `score_raw = input('Enter score (0.0 to 1.0): ')
try:
    score = float(score_raw)
    if 0.0 <= score <= 1.0:
        if score >= 0.9: grade = 'A'
        elif score >= 0.8: grade = 'B'
        elif score >= 0.7: grade = 'C'
        elif score >= 0.6: grade = 'D'
        else: grade = 'F'
        print('Grade:', grade)
    else:
        print('Bad score: out of range')
except:
    print('Bad score: non-numeric input')`,
              explanation: "Combines try/except validation with chained if/elif/else grading."
            }
          ],
          bestPractices: [
            "Use try/except blocks to wrap user input parsing and file opening.",
            "Avoid overly deep nested conditionals; refactor using chained elif or logical 'and'."
          ],
          commonMistakes: [
            "Using single = instead of == in conditional checks.",
            "Forgetting colon (:) at the end of if/elif/else headers."
          ],
          practiceExercise: {
            title: "Safe Temperature Converter",
            problem: "Write a Fahrenheit to Celsius converter wrapped in try/except to catch invalid input.",
            solutionCode: `inp = input("Enter Fahrenheit Temperature: ")
try:
    fahr = float(inp)
    cel = (fahr - 32.0) * 5.0 / 9.0
    print(f"Celsius: {cel:.2f}°C")
except:
    print("Please enter a valid numeric temperature.")`
          },
          keyTakeaways: [
            "if/elif/else controls program execution branching.",
            "try/except prevents program crashes from invalid input.",
            "Short-circuiting enables Guardian Pattern checks."
          ],
          references: [
            { title: "Python for Everybody Chapter 3", url: "https://www.py4e.com/html3/03-conditional" }
          ]
        }
      },
      {
        id: "py-mod-5",
        title: "Module 05 — Iteration & Loops",
        description: "Updating variables, while statements, infinite loops, break & continue, for loops, counting, summing, and min/max search patterns.",
        completed: true,
        readingMaterial: {
          introduction: "Based on Chapter 5 of 'Python for Everybody', iteration automates repetitive tasks. Indefinite loops (while) repeat until a condition becomes false, while definite loops (for) iterate through known sequences.",
          objectives: [
            "Understand variable incrementing (x = x + 1) and decrementing",
            "Construct indefinite while loops and prevent infinite loops",
            "Use break to exit loops early and continue to skip iterations",
            "Construct definite for loops over sequences",
            "Master loop patterns: counting, summing, average, and min/max search"
          ],
          sections: [
            {
              heading: "The while Statement & Infinite Loops",
              text: "A while loop evaluates a boolean condition before each iteration. If the condition never changes to False, an infinite loop occurs.",
              codeExamples: [
                {
                  title: "Countdown Loop & break Pattern",
                  code: `# Countdown using while
n = 5
while n > 0:
    print(n)
    n = n - 1
print('Blastoff!')

# Infinite loop with break
while True:
    line = input('> ')
    if line == 'done':
        break
    print(line)
print('Done!')`,
                  explanation: "break jumps out of the loop immediately when user enters 'done'."
                }
              ]
            },
            {
              heading: "Finishing Iterations with continue",
              text: "The continue statement skips the remainder of the current loop body and jumps directly to the next iteration (e.g. ignoring comment lines starting with #)."
            },
            {
              heading: "Loop Search & Accumulator Patterns",
              text: "Common loop idioms iterate through lists of data to compute aggregates or find extreme values:",
              bulletPoints: [
                "Counting Loop: count = count + 1",
                "Summing Loop (Accumulator): total = total + value",
                "Maximum Loop: compare if largest is None or value > largest",
                "Minimum Loop: compare if smallest is None or value < smallest"
              ]
            }
          ],
          codeExamples: [
            {
              title: "Finding Maximum & Minimum Values",
              code: `largest = None
smallest = None

while True:
    num_str = input('Enter a number: ')
    if num_str == 'done':
        break
    try:
        num = int(num_str)
    except:
        print('Invalid input')
        continue

    if largest is None or num > largest:
        largest = num
    if smallest is None or num < smallest:
        smallest = num

print('Maximum is', largest)
print('Minimum is', smallest)`,
              explanation: "Initializes max/min to None ('empty') and updates extremes dynamically."
            }
          ],
          bestPractices: [
            "Initialize iteration variables before entering loops.",
            "Use for loops when iterating over lists, strings, or known ranges."
          ],
          commonMistakes: [
            "Forgetting to update iteration variables in while loops causing infinite loops."
          ],
          practiceExercise: {
            title: "Total, Count, and Average Calculator",
            problem: "Write a program that repeatedly prompts for numbers until 'done' is entered, then prints total sum, count, and average.",
            solutionCode: `total = 0
count = 0

while True:
    inp = input("Enter a number: ")
    if inp == "done": break
    try:
        val = float(inp)
        total += val
        count += 1
    except:
        print("Invalid input")
        continue

if count > 0:
    print(f"Total: {total} | Count: {count} | Average: {total/count:.2f}")`
          },
          keyTakeaways: [
            "while loops are indefinite; for loops are definite.",
            "break exits loops; continue skips to next iteration.",
            "Initialize min/max tracking variables to None."
          ],
          references: [
            { title: "Python for Everybody Chapter 5", url: "https://www.py4e.com/html3/05-iterations" }
          ]
        }
      },
      {
        id: "py-mod-6",
        title: "Module 06 — Functions & Modular Code",
        description: "Built-in functions, type conversion, math & random modules, defining custom functions (def), parameters, arguments, fruitful vs void functions, and scope.",
        completed: true,
        readingMaterial: {
          introduction: "Based on Chapter 4 of 'Python for Everybody', a function is a named sequence of statements performing a computation. Functions promote code reuse, eliminate duplication, and break complex problems into manageable sub-tasks.",
          objectives: [
            "Understand function calls, arguments, parameters, and return values",
            "Use built-in functions: max(), min(), len(), type(), int(), float(), str()",
            "Import standard modules: math (sin, log10, pi, sqrt) and random (randint, choice)",
            "Define custom functions using the def keyword",
            "Distinguish between fruitful functions (return values) and void functions (return None)",
            "Understand variable scope (local vs global)"
          ],
          sections: [
            {
              heading: "Anatomy of a Function Definition",
              text: "A function definition includes the def keyword, function name, parameter list in parentheses, docstring explanation, indented body, and optional return statement.",
              codeExamples: [
                {
                  title: "Custom Fruitful Function",
                  code: `def computepay(hours, rate):
    """Calculates gross pay including overtime pay (1.5x after 40 hrs)."""
    if hours > 40:
        reg_pay = 40 * rate
        overtime_pay = (hours - 40) * (rate * 1.5)
        return reg_pay + overtime_pay
    else:
        return hours * rate

pay = computepay(45, 10)
print('Pay:', pay) # Output: 475.0`,
                  explanation: "computepay takes two parameters and returns computed gross pay."
                }
              ]
            },
            {
              heading: "Fruitful Functions vs Void Functions",
              text: "Fruitful functions return a result value using the return statement. Void functions perform an action (like printing) without returning a value; attempting to assign their result yields None."
            }
          ],
          codeExamples: [
            {
              title: "Grade Calculation Function",
              code: `def computegrade(score):
    if 0.0 <= score <= 1.0:
        if score >= 0.9: return 'A'
        elif score >= 0.8: return 'B'
        elif score >= 0.7: return 'C'
        elif score >= 0.6: return 'D'
        else: return 'F'
    else:
        return 'Bad score'

print(computegrade(0.95)) # Output: A
print(computegrade(0.5))  # Output: F`,
              explanation: "Encapsulates grading logic into reusable function returning grade string."
            }
          ],
          bestPractices: [
            "Define functions at the top of your script before calling them.",
            "Write docstrings (\"\"\"Docstring\"\"\") to document purpose and parameters.",
            "Keep functions focused on a single responsibility."
          ],
          commonMistakes: [
            "Forgetting return statement in a fruitful function (defaults to returning None).",
            "Confusing function parameters (placeholders) with arguments (actual values passed)."
          ],
          practiceExercise: {
            title: "Custom Math Helper Function",
            problem: "Write a function calculate_circle_area(radius) that imports math and returns area = π * r².",
            solutionCode: `import math

def calculate_circle_area(radius):
    if radius < 0:
        return None
    return math.pi * (radius ** 2)

print(f"Area (r=5): {calculate_circle_area(5):.2f}")`
          },
          keyTakeaways: [
            "def keyword defines reusable function blocks.",
            "Fruitful functions use return to output values.",
            "Void functions return None."
          ],
          references: [
            { title: "Python for Everybody Chapter 4", url: "https://www.py4e.com/html3/04-functions" }
          ]
        }
      },
      {
        id: "py-mod-7",
        title: "Module 07 — Data Structures: Lists, Dictionaries & Tuples",
        description: "Sequences, mutability, lists, dictionaries as key-value mappings & counters, tuples immutability, DSU sorting pattern, and list comprehensions.",
        completed: true,
        readingMaterial: {
          introduction: "Based on Chapters 8, 9, and 10 of 'Python for Everybody', data structures organize complex data. Lists are ordered and mutable. Dictionaries are fast key-value mappings. Tuples are immutable sequences useful for sorting and dictionary keys.",
          objectives: [
            "Create and manipulate mutable lists (append, extend, pop, remove, sort)",
            "Understand list operations, indexing, and slicing",
            "Use dictionaries as histograms/counters using the d.get(key, 0) idiom",
            "Understand tuple immutability, tuple assignment, and swapping (a, b = b, a)",
            "Master the DSU (Decorate-Sort-Undecorate) pattern for complex sorting",
            "Write concise list comprehensions"
          ],
          sections: [
            {
              heading: "Data Structures Comparison Matrix",
              text: "Understanding the trade-offs between Python's core built-in collection types:",
              table: {
                headers: ["Data Structure", "Syntax", "Mutable?", "Key Characteristic", "Lookup Speed"],
                rows: [
                  ["List", "[1, 2, 3]", "Yes", "Ordered indexed sequence", "O(N) search"],
                  ["Dictionary", "{'key': 'val'}", "Yes", "Unordered key-value mapping", "O(1) Hash Table lookup"],
                  ["Tuple", "(1, 2, 3)", "No (Immutable)", "Comparable & Hashable", "O(N) search"],
                  ["Set", "{1, 2, 3}", "Yes", "Unordered unique elements", "O(1) Hash Table lookup"]
                ]
              }
            },
            {
              heading: "Dictionary Histogram Idiom: d.get(key, default)",
              text: "The get() method returns the value for a key if present, or a default value (0) if absent, enabling single-line word counting:",
              codeExamples: [
                {
                  title: "Word Frequency Counter with dict.get()",
                  code: `word = 'brontosaurus'
d = dict()
for c in word:
    d[c] = d.get(c, 0) + 1
print(d)
# Output: {'b': 1, 'r': 2, 'o': 2, 'n': 1, 't': 1, 's': 2, 'a': 1, 'u': 2}`,
                  explanation: "d.get(c, 0) + 1 replaces multi-line if/else checks."
                }
              ]
            },
            {
              heading: "Tuples & The DSU (Decorate-Sort-Undecorate) Pattern",
              text: "Because tuples are comparable (compared element by element), we can sort data by prepending a sort key tuple:",
              codeExamples: [
                {
                  title: "DSU Sorting Words by Length",
                  code: `txt = 'but soft what light in yonder window breaks'
words = txt.split()
t = list()

# Decorate: tuple (len(word), word)
for word in words:
    t.append((len(word), word))

# Sort: by length descending
t.sort(reverse=True)

# Undecorate: extract word
res = [word for length, word in t]
print(res)
# Output: ['yonder', 'window', 'breaks', 'light', 'what', 'soft', 'but']`,
                  explanation: "Sorts words by length descending using list of tuples."
                }
              ]
            }
          ],
          codeExamples: [
            {
              title: "Top 10 Most Common Words in Text",
              code: `# Chapter 10: Finding Top 10 Most Common Words
import string

fname = 'romeo.txt'
counts = dict()
with open(fname) as fhand:
    for line in fhand:
        line = line.translate(line.maketrans('', '', string.punctuation)).lower()
        for word in line.split():
            counts[word] = counts.get(word, 0) + 1

# Convert dict items to list of (val, key) tuples for sorting
lst = [(val, key) for key, val in counts.items()]
lst.sort(reverse=True)

print("Top 10 Words:")
for val, key in lst[:10]:
    print(f"{key}: {val}")`,
              explanation: "Combines string cleaning, dictionary counting, and tuple sorting."
            }
          ],
          bestPractices: [
            "Use dictionaries when you need ultra-fast key lookups.",
            "Use tuples for returning multiple values from functions.",
            "Use list comprehensions [x for x in list] for concise sequence mapping."
          ],
          commonMistakes: [
            "Trying to mutate tuple elements: t[0] = 'A' (TypeError).",
            "Writing t = t.sort()—list.sort() modifies in-place and returns None."
          ],
          practiceExercise: {
            title: "Hour Distribution Histogram",
            problem: "Write a script that parses email timestamps from 'From stephen@uct.ac.za Sat Jan 5 09:14:16 2008' lines and counts distribution of hours using a dictionary.",
            solutionCode: `fname = "mbox-short.txt"
hours = dict()
try:
    with open(fname) as fhand:
        for line in fhand:
            if line.startswith("From "):
                time_str = line.split()[5]
                hour = time_str.split(":")[0]
                hours[hour] = hours.get(hour, 0) + 1
    for h in sorted(hours.keys()):
        print(f"{h} {hours[h]}")
except FileNotFoundError:
    print("Sample file mbox-short.txt not found.")`
          },
          keyTakeaways: [
            "Lists = mutable ordered; Tuples = immutable ordered; Dicts = key-value hash tables.",
            "dict.get(key, 0) simplifies counter histograms.",
            "DSU pattern sorts sequences using tuple comparison."
          ],
          references: [
            { title: "Python for Everybody Chapter 8 (Lists)", url: "https://www.py4e.com/html3/08-lists" },
            { title: "Python for Everybody Chapter 9 (Dictionaries)", url: "https://www.py4e.com/html3/09-dictionaries" },
            { title: "Python for Everybody Chapter 10 (Tuples)", url: "https://www.py4e.com/html3/10-tuples" }
          ]
        }
      },
      {
        id: "py-mod-8",
        title: "Module 08 — Strings, Slicing & Text Parsing",
        description: "Strings as sequences, indexing, len(), string slicing, immutability, string methods (find, strip, lower), string parsing, and f-strings.",
        completed: false,
        readingMaterial: {
          introduction: "Based on Chapter 6 of 'Python for Everybody', strings are immutable sequences of characters. Text processing, slicing, and string methods are foundational to parsing unstructured data files.",
          objectives: [
            "Access characters using zero-based indexing s[0] and negative indexing s[-1]",
            "Extract substrings using slice syntax s[start:stop]",
            "Understand string immutability",
            "Use string methods: strip(), lower(), upper(), find(), startswith()",
            "Parse unstructured text strings to extract specific sub-fields",
            "Format text using f-strings"
          ],
          sections: [
            {
              heading: "String Slicing Mechanics",
              text: "The slice operator s[n:m] returns characters from index n up to but not including m. Omitted indices default to start or end:",
              codeExamples: [
                {
                  title: "Slicing Examples",
                  code: `s = 'Monty Python'
print(s[0:5])  # Output: 'Monty'
print(s[6:12]) # Output: 'Python'
print(s[:5])   # Output: 'Monty'
print(s[6:])   # Output: 'Python'`,
                  explanation: "s[:n] gets first n chars; s[n:] gets remaining chars."
                }
              ]
            },
            {
              heading: "Parsing Strings with find() and Slicing",
              text: "Extracting specific sub-data (e.g. email domain names) from unformatted text lines:",
              codeExamples: [
                {
                  title: "Extracting Domain Name from Log Line",
                  code: `data = 'From stephen.marquard@uct.ac.za Sat Jan 5 09:14:16 2008'

# Find position of '@'
atpos = data.find('@')

# Find position of first space AFTER '@'
sppos = data.find(' ', atpos)

# Slice extracted domain
host = data[atpos + 1 : sppos]
print('Extracted Host Domain:', host) # Output: uct.ac.za`,
                  explanation: "Combines str.find() and slicing to extract targeted substrings."
                }
              ]
            }
          ],
          codeExamples: [
            {
              title: "Float Extraction Exercise (Chapter 6)",
              code: `text = 'X-DSPAM-Confidence: 0.8475'

# Find colon position
colon_pos = text.find(':')

# Extract text after colon and strip whitespace
number_str = text[colon_pos + 1:].strip()

# Convert to float
confidence = float(number_str)
print(f"Extracted Confidence Value: {confidence} (Type: {type(confidence)})")`,
              explanation: "Parses floating point number out of string header."
            }
          ],
          bestPractices: [
            "Use str.strip() to sanitize leading/trailing whitespace before parsing.",
            "Use str.lower() before comparing text strings to prevent case-sensitivity bugs."
          ],
          commonMistakes: [
            "IndexError when trying to access s[len(s)]—indices run from 0 to len(s)-1.",
            "Attempting s[0] = 'A' (Strings are immutable)."
          ],
          practiceExercise: {
            title: "Reverse String Traversal",
            problem: "Write a while loop that prints characters of a string backwards, one character per line.",
            solutionCode: `fruit = "banana"
index = len(fruit) - 1
while index >= 0:
    print(fruit[index])
    index -= 1`
          },
          keyTakeaways: [
            "Strings are zero-indexed and immutable.",
            "s[n:m] extracts substrings.",
            "str.find() and slicing parse unstructured text."
          ],
          references: [
            { title: "Python for Everybody Chapter 6", url: "https://www.py4e.com/html3/06-strings" }
          ]
        }
      },
      {
        id: "py-mod-9",
        title: "Module 09 — File Handling & Persistence",
        description: "Secondary memory persistence, opening files (open()), file handles, reading lines, searching files, writing files, and using context managers (with open).",
        completed: false,
        readingMaterial: {
          introduction: "Based on Chapter 7 of 'Python for Everybody', working with files enables data persistence across program executions. Python treats text files as sequences of lines separated by newline characters (\\n).",
          objectives: [
            "Understand secondary memory persistence vs main memory volatility",
            "Open files using open('filename', 'r') and handle FileNotFoundError",
            "Read files line-by-line using memory-efficient for loops",
            "Strip newline characters using rstrip()",
            "Write text files using mode 'w' and append using mode 'a'",
            "Use the with open() context manager for automatic resource cleanup"
          ],
          sections: [
            {
              heading: "File Handles & Memory Efficiency",
              text: "When you open a file, Python creates a file handle object. Iterating through a file handle using a for loop reads one line at a time into memory, allowing Python to process multi-gigabyte log files without running out of RAM."
            },
            {
              heading: "Searching Through a File",
              text: "Common file processing patterns filter lines using str.startswith() or skipping uninteresting lines using continue:"
            }
          ],
          codeExamples: [
            {
              title: "Log File Filtering Script",
              code: `# Chapter 7: Searching Log File
fname = input('Enter file name: ')
try:
    fhand = open(fname)
except:
    print('File cannot be opened:', fname)
    exit()

count = 0
for line in fhand:
    line = line.rstrip() # Remove trailing \\n
    if line.startswith('Subject:'):
        count += 1

print(f"There were {count} subject lines in {fname}")`,
              explanation: "Safely opens user file and counts lines matching criteria."
            },
            {
              title: "Writing to Text File",
              code: `# Writing output file
with open('output.txt', 'w') as fout:
    fout.write("Arshith Boot Camp Python Manual\\n")
    fout.write("Learn Today, Build Tomorrow.\\n")

print("File written successfully!")`,
              explanation: "with open() guarantees file handle is closed upon completion."
            }
          ],
          bestPractices: [
            "Always use 'with open(...) as fhand:' syntax for file operations.",
            "Always strip trailing newlines with line.rstrip() when printing file lines."
          ],
          commonMistakes: [
            "Opening file in 'w' mode accidentally overwriting existing file content.",
            "Forgetting that line iteration retains trailing newline characters."
          ],
          practiceExercise: {
            title: "Average Spam Confidence Calculator",
            problem: "Prompt for file name, read lines starting with 'X-DSPAM-Confidence:', extract the floats, and compute average spam confidence.",
            solutionCode: `fname = input("Enter file name: ")
total = 0.0
count = 0

try:
    with open(fname) as fhand:
        for line in fhand:
            if line.startswith("X-DSPAM-Confidence:"):
                val = float(line.split(":")[1].strip())
                total += val
                count += 1
    if count > 0:
        print(f"Average spam confidence: {total/count:.12f}")
except FileNotFoundError:
    print("File not found.")`
          },
          keyTakeaways: [
            "Files store data permanently in secondary memory.",
            "Iterating handles line-by-line is memory efficient.",
            "with open() auto-closes handles."
          ],
          references: [
            { title: "Python for Everybody Chapter 7", url: "https://www.py4e.com/html3/07-files" }
          ]
        }
      },
      {
        id: "py-mod-10",
        title: "Module 10 — Exception Handling & Debugging Strategies",
        description: "Deep dive into try/except, handling specific errors (ValueError, FileNotFoundError, ZeroDivisionError), debugging by bisection, and traceback analysis.",
        completed: false,
        readingMaterial: {
          introduction: "Debugging is the scientific process of finding and fixing software bugs. Based on Chapters 3, 7, and 14 of 'Python for Everybody', learning how to read tracebacks and catch expected errors makes your code production-ready.",
          objectives: [
            "Interpret Python tracebacks (error name, line number, execution context)",
            "Catch specific exception types explicitly",
            "Use try, except, else, and finally blocks",
            "Apply Debugging by Bisection on large codebases"
          ],
          sections: [
            {
              heading: "Four Debugging Actions",
              text: "When hunting hard bugs, try these four core debugging activities:",
              bulletPoints: [
                "Reading: Examine your code carefully, reading it back line by line.",
                "Running: Experiment by adding print statements or testing isolated code fragments.",
                "Ruminating: Take time to think! Formulate hypotheses about why the bug occurs.",
                "Retreating: Undo recent changes back to a known working state before rebuilding."
              ]
            },
            {
              heading: "Debugging by Bisection",
              text: "If a 100-line script has a bug, place a print statement near line 50. If the output is correct, the bug is in the second half; if wrong, it's in the first half. Repeat to isolate bugs in O(log N) steps."
            }
          ],
          codeExamples: [
            {
              title: "Robust Exception Handling Block",
              code: `def calculate_ratio(filename):
    try:
        with open(filename) as f:
            lines = f.readlines()
            total_items = len(lines)
            active_items = sum(1 for line in lines if 'active' in line)
            return active_items / total_items
    except FileNotFoundError:
        print(f"Error: File '{filename}' does not exist.")
    except ZeroDivisionError:
        print("Error: File is empty (division by zero).")
    except Exception as e:
        print(f"Unexpected Error: {e}")
    finally:
        print("File ratio operation attempt complete.")

print(calculate_ratio('missing.txt'))`,
              explanation: "Catches specific errors explicitly and provides cleanup via finally."
            }
          ],
          bestPractices: [
            "Never use empty bare 'except:' without specifying exception types.",
            "Use print('Debug:', var) statements to inspect variable values."
          ],
          commonMistakes: [
            "Swallowing exceptions silently without logging error messages.",
            "Fixing symptoms instead of addressing the root cause."
          ],
          practiceExercise: {
            title: "Integer Input Retry Loop",
            problem: "Write a function get_valid_age() that loops prompting for age until user inputs a valid integer between 1 and 120.",
            solutionCode: `def get_valid_age():
    while True:
        try:
            age = int(input("Enter your age (1-120): "))
            if 1 <= age <= 120:
                return age
            print("Age out of valid range.")
        except ValueError:
            print("Invalid input! Please enter digits only.")

# Test: age = get_valid_age()`
          },
          keyTakeaways: [
            "Tracebacks indicate error type and line number.",
            "Catch specific exceptions (ValueError, FileNotFoundError).",
            "Bisection debugging rapidly isolates bugs."
          ],
          references: [
            { title: "Python Errors and Exceptions Manual", url: "https://docs.python.org/3/tutorial/errors.html" }
          ]
        }
      },
      {
        id: "py-mod-11",
        title: "Module 11 — Object-Oriented Programming (OOP)",
        description: "Managing larger programs, classes, objects, instance attributes, methods, self, __init__ constructors, __del__ destructors, and inheritance.",
        completed: false,
        readingMaterial: {
          introduction: "Based on Chapter 14 of 'Python for Everybody', Object-Oriented Programming (OOP) groups code and data structures into reusable Class blueprints. OOP hides internal complexity and organizes large software applications into interacting networks of objects.",
          objectives: [
            "Understand Classes (blueprints) vs Objects (instances)",
            "Define classes using class keyword and instantiate objects",
            "Use self to reference instance attributes and methods",
            "Construct objects using __init__() constructor",
            "Understand object lifecycle (__init__ construction and __del__ destruction)",
            "Extend classes using Inheritance and super().__init__()"
          ],
          sections: [
            {
              heading: "Classes vs Objects (The Cookie Cutter Analogy)",
              text: "A Class is like a cookie cutter (template blueprint). An Object is the actual cookie constructed from that cookie cutter. Each object instance contains independent attribute values."
            },
            {
              heading: "Object Lifecycle: Construction & Destruction",
              text: "When Python creates an object instance, it automatically invokes __init__() to set up initial attributes. When an object is discarded, __del__() is invoked for cleanup."
            }
          ],
          codeExamples: [
            {
              title: "PartyAnimal Class & Multiple Instances (Chapter 14)",
              code: `# Chapter 14: Class Definition & Lifecycle
class PartyAnimal:
    def __init__(self, nam):
        self.x = 0
        self.name = nam
        print(f"{self.name} constructed")

    def party():
        self.x += 1
        print(f"{self.name} party count: {self.x}")

    def __del__(self):
        print(f"{self.name} destructed at count {self.x}")

s = PartyAnimal('Sally')
s.party()

j = PartyAnimal('Jim')
j.party()
s.party()`,
              explanation: "s and j are independent PartyAnimal instances tracking separate x counts."
            },
            {
              title: "Inheritance: Extending Classes",
              code: `from PartyAnimal class
class CricketFan(PartyAnimal):
    def __init__(self, nam):
        super().__init__(nam) # Call parent constructor
        self.points = 0

    def six(self):
        self.points += 6
        self.party()
        print(f"{self.name} points: {self.points}")

j = CricketFan("Jim")
j.six() # Inherits party() and adds six() capability!`,
              explanation: "CricketFan extends PartyAnimal inheriting attributes and methods."
            }
          ],
          bestPractices: [
            "Always name the first method parameter 'self' by Python convention.",
            "Use inheritance to extend existing classes rather than copying code."
          ],
          commonMistakes: [
            "Forgetting 'self.' when assigning instance attributes inside methods.",
            "Forgetting to call super().__init__() when overriding constructors in child classes."
          ],
          practiceExercise: {
            title: "Student BootCamp Class",
            problem: "Create a Student class with name, email, courses list, enroll(course) method, and get_summary() method.",
            solutionCode: `class Student:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.courses = []

    def enroll(self, course_name):
        self.courses.append(course_name)
        print(f"{self.name} enrolled in {course_name}")

    def get_summary(self):
        return f"Student: {self.name} | Courses: {', '.join(self.courses)}"

s1 = Student("Arshith", "arshith@example.com")
s1.enroll("Python")
print(s1.get_summary())`
          },
          keyTakeaways: [
            "class defines object templates; __init__() sets initial state.",
            "self points to the current object instance.",
            "Inheritance allows child classes to reuse parent code."
          ],
          references: [
            { title: "Python for Everybody Chapter 14", url: "https://www.py4e.com/html3/14-objects" }
          ]
        }
      },
      {
        id: "py-mod-12",
        title: "Module 12 — Regular Expressions (re module)",
        description: "Pattern matching, re.search(), re.findall(), special regex characters (^, $, ., \\s, \\S, *, +, ?), character classes, and data extraction.",
        completed: false,
        readingMaterial: {
          introduction: "Based on Chapter 11 of 'Python for Everybody', Regular Expressions (regex) provide a concise programming language for searching, matching, and extracting text patterns from unformatted document streams.",
          objectives: [
            "Import the re regular expression module",
            "Use re.search() to test if a pattern exists in text",
            "Use re.findall() to extract matching data substrings",
            "Master regex special characters (^, $, ., \\s, \\S, *, +, ?)",
            "Use character sets [a-zA-Z0-9] and extraction parentheses ()",
            "Understand greedy (*, +) vs non-greedy (*?, +?) matching"
          ],
          sections: [
            {
              heading: "Regex Special Character Cheatsheet",
              text: "Essential special characters in Python regular expressions:",
              table: {
                headers: ["Symbol", "Meaning", "Example", "Matches"],
                rows: [
                  ["^", "Matches start of line", "^From", "Lines starting with 'From'"],
                  ["$", "Matches end of line", "2008$", "Lines ending with '2008'"],
                  [".", "Wildcard: matches any single character", "F..m:", "'From:', 'F12m:'"],
                  ["\\s / \\S", "Whitespace / Non-whitespace character", "\\S+@\\S+", "Email strings"],
                  ["*", "Matches zero or more repetitions", "a*", "'' or 'a' or 'aaa'"],
                  ["+", "Matches one or more repetitions", "a+", "'a' or 'aaa'"],
                  ["()", "Extraction target area inside findall()", "^X-.*: ([0-9.]+)", "Extracts numbers only"]
                ]
              }
            }
          ],
          codeExamples: [
            {
              title: "Extracting Email Addresses with re.findall()",
              code: `# Chapter 11: Email Extraction Regex
import re

text = 'From stephen.marquard@uct.ac.za Sat Jan 5 09:14:16 2008'

# Extract email string matching non-whitespace characters around @
emails = re.findall(r'\\S+@\\S+', text)
print("Extracted Emails:", emails) # ['stephen.marquard@uct.ac.za']

# Extraction using precise character set
clean_emails = re.findall(r'[a-zA-Z0-9]\\S*@\\S*[a-zA-Z]', text)
print("Clean Emails:", clean_emails)`,
              explanation: "r'\\S+@\\S+' extracts email patterns from text string."
            },
            {
              title: "Combining Search and Number Extraction",
              code: `import re

log_line = 'X-DSPAM-Confidence: 0.8475'

# Matches lines starting with X-DSPAM-Confidence:, but extracts ONLY the float inside ()
nums = re.findall(r'^X-DSPAM-Confidence: ([0-9.]+)', log_line)
if len(nums) > 0:
    val = float(nums[0])
    print("Extracted Confidence:", val)`,
              explanation: "Parentheses () instruct findall() to extract only the matching float pattern."
            }
          ],
          bestPractices: [
            "Use raw strings (r'pattern') for regex patterns to prevent backslash escaping issues.",
            "Use non-greedy quantifiers (.+?) when matching exact quoted substrings."
          ],
          commonMistakes: [
            "Forgetting that regular expressions are greedy by default, expanding to match the longest string possible."
          ],
          practiceExercise: {
            title: "Sum Numbers in File Regex Exercise",
            problem: "Write a script that uses re.findall('[0-9]+', text) to extract all numbers in a document and prints their sum.",
            solutionCode: `import re
sample_text = "Why should 42 and 108 be added to 250?"
numbers = re.findall(r'[0-9]+', sample_text)
total_sum = sum(int(n) for n in numbers)
print(f"Total Sum: {total_sum}")`
          },
          keyTakeaways: [
            "re module performs advanced text search and extraction.",
            "re.findall() returns a list of matching substrings.",
            "Parentheses () isolate targeted extraction fields."
          ],
          references: [
            { title: "Python for Everybody Chapter 11", url: "https://www.py4e.com/html3/11-regex" }
          ]
        }
      },
      {
        id: "py-mod-13",
        title: "Module 13 — Networked Programs, Sockets & Web Scraping",
        description: "HTTP protocol, socket network connections, retrieving web pages with urllib, reading binary files, and scraping HTML using BeautifulSoup.",
        completed: false,
        readingMaterial: {
          introduction: "Based on Chapter 12 of 'Python for Everybody', Python can act as a web client to retrieve data over HTTP network sockets or using the urllib library. Web scraping allows programs to parse and extract structured HTML elements using BeautifulSoup.",
          objectives: [
            "Understand HTTP request/response protocol (GET, Port 80, CRLF \\r\\n)",
            "Create network sockets using import socket",
            "Retrieve web pages effortlessly using import urllib.request",
            "Download binary files (images/videos) in buffered chunks",
            "Parse HTML web pages using BeautifulSoup (bs4)"
          ],
          sections: [
            {
              heading: "Low-Level Network Sockets vs urllib",
              text: "A socket creates a 2-way network connection. urllib simplifies HTTP communication by allowing web pages to be read much like local text files:",
              codeExamples: [
                {
                  title: "Simple Web Page Retrieval with urllib",
                  code: `import urllib.request

# Open HTTP connection to remote file
fhand = urllib.request.urlopen('http://data.pr4e.org/romeo.txt')

counts = dict()
for line in fhand:
    words = line.decode().split()
    for word in words:
        counts[word] = counts.get(word, 0) + 1

print("Word Counts from Web File:\\n", counts)`,
                  explanation: "line.decode() converts byte streams from network into Python strings."
                }
              ]
            },
            {
              heading: "Web Scraping with BeautifulSoup (bs4)",
              text: "BeautifulSoup tolerates imperfect HTML and parses page tags into accessible objects:"
            }
          ],
          codeExamples: [
            {
              title: "HTML Web Scraper Script (urllinks.py)",
              code: `import urllib.request, urllib.parse, urllib.error
from bs4 import BeautifulSoup
import ssl

# Ignore SSL certificate errors for web scraping
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

url = 'https://docs.python.org/3/'
html = urllib.request.urlopen(url, context=ctx).read()
soup = BeautifulSoup(html, 'html.parser')

# Retrieve all anchor <a> tags
tags = soup('a')
print(f"Found {len(tags)} links on page.")
for tag in tags[:5]:
    print(tag.get('href', None))`,
              explanation: "Scrapes anchor links from HTML webpage using BeautifulSoup."
            }
          ],
          bestPractices: [
            "Always handle network stream bytes decoding (bytes.decode('utf-8')).",
            "Respect website robots.txt rules when writing web scrapers."
          ],
          commonMistakes: [
            "Downloading huge binary files at once without buffering chunks (causes out-of-memory crashes)."
          ],
          practiceExercise: {
            title: "Download Remote Image",
            problem: "Write a script using urllib.request.urlopen() to download an image file in 100KB chunks and save it locally.",
            solutionCode: `import urllib.request

url = 'http://data.pr4e.org/cover3.jpg'
img = urllib.request.urlopen(url)
with open('cover.jpg', 'wb') as fout:
    while True:
        info = img.read(100000)
        if len(info) < 1: break
        fout.write(info)
print("Image downloaded successfully!")`
          },
          keyTakeaways: [
            "urllib reads web pages like local files over HTTP.",
            "BeautifulSoup parses HTML tags for web scraping."
          ],
          references: [
            { title: "Python for Everybody Chapter 12", url: "https://www.py4e.com/html3/12-network" }
          ]
        }
      },
      {
        id: "py-mod-14",
        title: "Module 14 — Web Services: XML, JSON & REST APIs",
        description: "Data exchange formats, parsing XML with ElementTree, parsing JSON with json library, REST APIs, and Service-Oriented Architecture (SOA).",
        completed: false,
        readingMaterial: {
          introduction: "Based on Chapter 13 of 'Python for Everybody', web services allow programs to exchange structured data across networks. XML and JSON are the two primary data formats, with JSON being the modern standard for REST APIs.",
          objectives: [
            "Compare XML (node trees) vs JSON (key-value dictionaries & lists)",
            "Parse XML data using xml.etree.ElementTree",
            "Parse JSON strings using import json and json.loads()",
            "Understand Service-Oriented Architecture (SOA) and REST APIs",
            "Handle API keys and authentication"
          ],
          sections: [
            {
              heading: "XML vs JSON Data Formats",
              text: "XML uses nested opening/closing tags (<person><name>Chuck</name></person>). JSON maps directly to Python dictionaries and lists ({'name': 'Chuck'}), making JSON faster and simpler to parse.",
              table: {
                headers: ["Feature", "eXtensible Markup Language (XML)", "JavaScript Object Notation (JSON)"],
                rows: [
                  ["Syntax", "Tag-based (<user>content</user>)", "Key-Value Object ({'user': 'content'})"],
                  ["Python Mapping", "Requires ElementTree parsing", "Directly maps to dict / list"],
                  ["Verbosity", "High (closing tags & attributes)", "Low / Compact"],
                  ["Primary Use Case", "Document markup & enterprise legacy", "Modern Web REST APIs"]
                ]
              }
            }
          ],
          codeExamples: [
            {
              title: "Parsing XML with ElementTree (xml1.py)",
              code: `import xml.etree.ElementTree as ET

data = '''
<person>
  <name>Chuck</name>
  <phone type="intl">+1 734 303 4456</phone>
  <email hide="yes"/>
</person>'''

tree = ET.fromstring(data)
print('Name:', tree.find('name').text)
print('Phone Type:', tree.find('phone').get('type'))`,
              explanation: "ET.fromstring converts XML string into searchable element tree."
            },
            {
              title: "Parsing JSON Data (json2.py)",
              code: `import json

data = '''
[
  { "id" : "001", "x" : "2", "name" : "Chuck" },
  { "id" : "009", "x" : "7", "name" : "Brent" }
]'''

info = json.loads(data) # Converts JSON string to Python list of dicts
print('User count:', len(info))

for item in info:
    print(f"ID: {item['id']} | Name: {item['name']} | Attribute: {item['x']}")`,
              explanation: "json.loads() parses JSON string directly into native Python structures."
            }
          ],
          bestPractices: [
            "Use JSON for modern web services and API endpoints.",
            "Always wrap json.loads() calls in try/except blocks to catch invalid JSON syntax."
          ],
          commonMistakes: [
            "Confusing json.loads() (parse string) with json.load() (parse file handle)."
          ],
          practiceExercise: {
            title: "Sum Comments from JSON API",
            problem: "Parse a JSON string containing a list of comments [{'name': 'A', 'count': 42}, ...] and compute total count sum.",
            solutionCode: `import json

json_data = '[{"name": "Arshith", "count": 95}, {"name": "Student", "count": 88}]'
comments = json.loads(json_data)
total_count = sum(c['count'] for c in comments)
print(f"Total Comment Count: {total_count}")`
          },
          keyTakeaways: [
            "JSON maps natively to Python dicts and lists.",
            "json.loads() parses JSON strings.",
            "APIs exchange structured data between applications."
          ],
          references: [
            { title: "Python for Everybody Chapter 13", url: "https://www.py4e.com/html3/13-web" }
          ]
        }
      },
      {
        id: "py-mod-15",
        title: "Module 15 — Database Connectivity (SQLite) & Data Visualization",
        description: "Relational database concepts, SQLite integration with sqlite3, SQL queries (CREATE, INSERT, SELECT, JOIN), DB Browser, and building a data visualization capstone project.",
        completed: false,
        readingMaterial: {
          introduction: "Based on Chapters 15 and 16 of 'Python for Everybody', relational databases store data permanently on disk in structured tables. SQLite comes built directly into Python via sqlite3. In this final capstone module, you will build relational database applications and export data visualizations.",
          objectives: [
            "Understand Database concepts: Tables, Rows (tuples), Columns (attributes)",
            "Connect to SQLite databases using import sqlite3",
            "Execute SQL commands: CREATE TABLE, INSERT INTO, SELECT, WHERE, JOIN",
            "Use parameterized queries (?) to prevent SQL Injection security vulnerabilities",
            "Model relational 1-to-many and many-to-many junction table relationships",
            "Complete the Python Capstone Data Application!"
          ],
          sections: [
            {
              heading: "Database Connection & Cursor Lifecycle",
              text: "1. sqlite3.connect('db.sqlite') -> 2. conn.cursor() -> 3. cursor.execute(SQL) -> 4. conn.commit() -> 5. conn.close()."
            },
            {
              heading: "Relational Modeling & JOINs",
              text: "To avoid duplicating text data across thousands of rows (Database Normalization), store entities in separate tables linked via Primary Keys (id) and Foreign Keys (artist_id). Use JOIN ... ON to query related records."
            }
          ],
          codeExamples: [
            {
              title: "SQLite Database Setup Script (db1.py & db2.py)",
              code: `# Chapter 15: SQLite Integration in Python
import sqlite3

conn = sqlite3.connect('bootcamp.db')
cur = conn.cursor()

# Create Tracks Table
cur.execute('DROP TABLE IF EXISTS Track')
cur.execute('CREATE TABLE Track (title TEXT, plays INTEGER)')

# Insert Records with Parameterized Queries
cur.execute('INSERT INTO Track (title, plays) VALUES (?, ?)', ('Thunderstruck', 20))
cur.execute('INSERT INTO Track (title, plays) VALUES (?, ?)', ('My Way', 15))
conn.commit()

# Query Database Records
cur.execute('SELECT title, plays FROM Track WHERE plays >= 15')
for row in cur:
    print(f"Track: {row[0]} | Plays: {row[1]}")

cur.close()
conn.close()`,
              explanation: "Demonstrates SQLite connection, schema creation, row insertion, and querying."
            },
            {
              title: "Multi-Table Relational JOIN Query",
              code: `import sqlite3

conn = sqlite3.connect('music.sqlite')
cur = conn.cursor()

# Relational Join Query connecting Tracks, Albums, and Artists
query = '''
SELECT Track.title, Album.title, Artist.name 
FROM Track 
JOIN Album ON Track.album_id = Album.id 
JOIN Artist ON Album.artist_id = Artist.id 
LIMIT 5
'''

cur.execute(query)
for row in cur:
    print(f"Track: {row[0]} | Album: {row[1]} | Artist: {row[2]}")

conn.close()`,
              explanation: "Executes SQL JOIN connecting 3 relational tables."
            }
          ],
          bestPractices: [
            "Always use parameterized queries (?) rather than f-strings to prevent SQL Injection.",
            "Always commit changes (conn.commit()) after INSERT or UPDATE statements."
          ],
          commonMistakes: [
            "Forgetting conn.commit() causing database insertions to be lost.",
            "Leaving SQLite database handles open in DB Browser locking the database file."
          ],
          practiceExercise: {
            title: "Build Student Database System",
            problem: "Write a script that creates a Students table (name TEXT, course TEXT, score INTEGER) in student_db.sqlite, inserts 2 rows, and queries top students.",
            solutionCode: `import sqlite3

conn = sqlite3.connect("student_db.sqlite")
cur = conn.cursor()

cur.execute("CREATE TABLE IF NOT EXISTS Students (name TEXT, course TEXT, score INTEGER)")
cur.execute("INSERT INTO Students VALUES (?, ?, ?)", ("Arshith", "Python", 98))
cur.execute("INSERT INTO Students VALUES (?, ?, ?)", ("Student", "SQL", 92))
conn.commit()

cur.execute("SELECT * FROM Students WHERE score >= 90")
print("Top Students:", cur.fetchall())
conn.close()`
          },
          keyTakeaways: [
            "sqlite3 provides embedded SQL database persistence.",
            "JOIN ... ON queries multi-table relational models.",
            "You have completed the entire Python for Everybody Boot Camp curriculum!"
          ],
          references: [
            { title: "Python for Everybody Chapter 15 (Databases)", url: "https://www.py4e.com/html3/15-database" },
            { title: "Python for Everybody Chapter 16 (Visualization)", url: "https://www.py4e.com/html3/16-tasks" }
          ]
        }
      }
    ]
  },
  {
    id: "sql-data-analysis",
    title: "SQL & Relational Databases",
    category: "SQL",
    level: "All Levels",
    duration: "35 hours",
    rating: 4.9,
    studentsCount: "14.8k",
    studentsNumeric: 14800,
    price: 0,
    isFree: true,
    bestseller: true,
    progress: 0,
    iconBg: "bg-cyan-50 border-2 border-cyan-200 text-cyan-600",
    iconType: "database",
    introVideoUrl: "https://www.youtube.com/embed/HXV3zeQKqGY",
    description: "Master Relational Databases & SQL with our comprehensive 15-module curriculum based on the complete SQL manual. Covers DDL, DML, filtering, aggregation, Joins, Subqueries, CTEs, Views, Indexes, Transactions, DCL security, Python integration, AI-assisted SQL, and Capstone E-Commerce Project.",
    instructor: {
      name: "Siddharth Nair & Dr. Ananya Sharma",
      role: "Principal Data Architect @ Arshith Boot Camp",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    },
    whatYouWillLearn: [
      "Introduction to SQL, Databases, RDBMS, and Data Types",
      "Data Definition Language (DDL): CREATE, ALTER, DROP, TRUNCATE",
      "Constraints: Primary Key, Foreign Key, UNIQUE, CHECK, NOT NULL",
      "Data Manipulation Language (DML): INSERT, UPDATE, DELETE",
      "SELECT queries, Projection, Column/Table Aliases (AS)",
      "Filtering with WHERE, Comparison/Logical Operators, LIKE, IN, BETWEEN",
      "Sorting (ORDER BY ASC/DESC), Distinct values, LIMIT & Pagination",
      "Aggregate Functions (COUNT, SUM, AVG, MIN, MAX), GROUP BY & HAVING",
      "Relational Joins: INNER, LEFT, RIGHT, FULL OUTER, SELF, CROSS JOIN",
      "Subqueries, Common Table Expressions (CTEs), UNION & UNION ALL",
      "Scalar Functions (String, Math, Date) & Conditional CASE Statements",
      "Views, B-Tree Indexes, EXPLAIN performance tuning & ACID Transactions",
      "Data Analytics, Python sqlite3 + Pandas integration & AI-Assisted SQL"
    ],
    modules: [

      {
      "id": "sql-mod-1",
      "title": "Module 01 — Introduction to SQL & Databases",
      "description": "Master foundational relational database engineering: Dr. Edgar F. Codd's Relational Theory, RDBMS vs Flat Files vs NoSQL, deep RDBMS Engine Architecture (Parser, AST, Cost-Based Optimizer, Execution Engine, WAL, Buffer Pool), Localhost (127.0.0.1) vs Enterprise Cloud Servers, Connection Strings, DBA Security Roles, and complete breakdown of the 5 SQL Sub-Languages (DDL, DML, DQL, DCL, TCL).",
      "completed": false,
      "order": 1,
      "published": true,
      "readingMaterial": {
            "introduction": "Welcome to Module 1! Structured Query Language (SQL) is the universal, industry-standard computer language used to define, query, manage, and manipulate structured data stored inside Relational Database Management Systems (RDBMS). Developed in the early 1970s by IBM Computer Scientists (led by Dr. Edgar F. 'Ted' Codd, father of relational databases) and standardized by ANSI in 1986 and ISO in 1987, SQL remains the bedrock of software engineering, financial tech, healthcare architectures, data science, and cloud analytics. Data is the core asset of modern software applications; SQL provides the declarative language to interact with database engines safely, efficiently, and concurrently.",
            "objectives": [
                  "Master the history of relational databases: Dr. Edgar F. Codd (1970), System/R at IBM, ANSI (1986) & ISO (1987) standards evolution",
                  "Understand why relational databases outperform flat files (CSV, TSV, Excel) in concurrency, data integrity, B-Tree index speeds, and ACID transactions",
                  "Deconstruct RDBMS Engine Architecture: Query Dispatcher, Parser & AST, Logical Planner, Cost-Based Optimizer (CBO), Execution Nodes, WAL, and Buffer Pool RAM",
                  "Compare Database Server Environments: Local Host ('localhost': IP 127.0.0.1, Port 5432/3306) vs Managed Enterprise Cloud Clusters (AWS RDS, GCP Cloud SQL, Azure SQL)",
                  "Analyze Database Security & Roles: Database Administrators (DBAs with SUPERUSER access) vs Application Accounts vs Read-Only Business Analysts",
                  "Master the 5 core SQL Sub-Languages: Data Definition Language (DDL), Data Manipulation Language (DML), Data Query Language (DQL), Data Control Language (DCL), and Transaction Control Language (TCL)",
                  "Evaluate major SQL Vendor Dialects: PostgreSQL (PL/pgSQL, JSONB), MySQL/MariaDB (InnoDB engine), Microsoft SQL Server (T-SQL), and Oracle Database (PL/SQL)"
            ],
            "sections": [
                  {
                        "heading": "1. Relational Database Theory vs Flat Files & NoSQL Systems",
                        "text": "Before relational databases, applications stored data in simple flat text files (CSV, TSV, JSON). Flat files suffer from catastrophic enterprise limitations: severe data redundancy, zero structural type enforcement, high vulnerability to file corruption during concurrent multi-user writes, slow full table scans (O(N) search complexity), and zero transaction safety. Relational databases solve these issues by organizing data into structured tables linked by logical key relationships (Primary and Foreign Keys) managed by a centralized engine that guarantees mathematical data integrity.",
                        "bulletPoints": [
                              "Elimination of Data Redundancy: Normalization divides data into logical entities (e.g. Customers, Orders) to eliminate duplicate records.",
                              "Structural Type Enforcement: Columns require strict data types (INTEGER, VARCHAR, TIMESTAMP, NUMERIC) and constraints (NOT NULL, UNIQUE, CHECK).",
                              "ACID Transaction Safety: Ensures all multi-step business transactions complete 100% or roll back completely without partial state corruption.",
                              "High-Speed B-Tree Indexing: B-Tree indexes enable sub-millisecond lookups across multi-billion row tables (O(log N) search complexity).",
                              "Concurrent Multi-User Locking: Fine-grained row-level locking allows thousands of concurrent users to read and write without thread deadlock or file lock errors."
                        ],
                        "table": {
                              "headers": [
                                    "Database Paradigm",
                                    "Data Model / Format",
                                    "Primary Strength",
                                    "Weakness / Trade-off",
                                    "Popular Enterprise Engine"
                              ],
                              "rows": [
                                    [
                                          "Relational Database (RDBMS)",
                                          "Structured Tables (Rows & Columns)",
                                          "ACID compliance, complex JOINs, strict schema",
                                          "Requires schema design upfront",
                                          "PostgreSQL, MySQL, MS SQL Server, Oracle"
                                    ],
                                    [
                                          "NoSQL Document Store",
                                          "Semi-Structured (JSON / BSON)",
                                          "Flexible schema, rapid rapid prototyping",
                                          "Weak JOIN support, eventual consistency",
                                          "MongoDB, Couchbase"
                                    ],
                                    [
                                          "NoSQL Key-Value Store",
                                          "Hash Map (Key -> Value)",
                                          "Ultra-fast in-memory caching (sub-ms speed)",
                                          "No complex query capabilities",
                                          "Redis, Memcached"
                                    ],
                                    [
                                          "NoSQL Column-Family",
                                          "Wide Column Rows",
                                          "Massive write throughput across petabytes",
                                          "Complex query syntax, eventual consistency",
                                          "Apache Cassandra, ScyllaDB"
                                    ],
                                    [
                                          "Flat Text File",
                                          "CSV / TSV / Excel",
                                          "Simple, human-readable file format",
                                          "No concurrency, data corruption, slow search",
                                          "Local Filesystem"
                                    ]
                              ]
                        }
                  },
                  {
                        "heading": "2. Deep Dive: RDBMS Engine Architecture & Internal Execution Pipeline",
                        "text": "When an application sends a SQL string over a network socket connection to an RDBMS server, the database engine processes the command through a sophisticated multi-stage pipeline before touching disk storage:",
                        "bulletPoints": [
                              "1. Network Listener & Connection Handler: Receives TCP packets from the client application connection pool and validates user authentication credentials.",
                              "2. Query Parser & AST Generator: Checks SQL string syntax rules, resolves table/column identifiers, and generates an Abstract Syntax Tree (AST).",
                              "3. Logical Planner & Preprocessor: Validates user permissions, expands database views, and constructs an unoptimized logical query tree.",
                              "4. Cost-Based Optimizer (CBO): Evaluates hundreds of candidate execution strategies, analyzes table statistics (column histograms, index density), and chooses the physical execution plan with the lowest estimated CPU/IO cost.",
                              "5. Physical Execution Engine: Executes query plan operators (Sequential Table Scans, B-Tree Index Scans, Hash Joins, Nested Loops, Bitmaps).",
                              "6. Transaction Manager & Write-Ahead Logger (WAL): Guarantees durablity by recording change vectors into WAL disk logs before writing modified data pages to RAM buffer pools.",
                              "7. Buffer Pool RAM Manager: Manages in-memory data page caches (8KB or 16KB pages), using LRU (Least Recently Used) algorithms to minimize disk read latency."
                        ],
                        "table": {
                              "headers": [
                                    "Engine Component",
                                    "Primary Architectural Responsibility",
                                    "Input Stage",
                                    "Output Artifact"
                              ],
                              "rows": [
                                    [
                                          "Query Parser",
                                          "Grammar validation & lexical tokenization",
                                          "Raw SQL Text String",
                                          "Abstract Syntax Tree (AST)"
                                    ],
                                    [
                                          "Query Rewriter",
                                          "View expansion, rule enforcement & constant folding",
                                          "Abstract Syntax Tree",
                                          "Logical Query Plan"
                                    ],
                                    [
                                          "Cost-Based Optimizer",
                                          "Scans table stats to find lowest cost execution path",
                                          "Logical Query Plan",
                                          "Physical Execution Plan"
                                    ],
                                    [
                                          "Execution Engine",
                                          "Iterates through plan nodes to process rows",
                                          "Physical Plan Nodes",
                                          "Result Row Set Stream"
                                    ],
                                    [
                                          "WAL Manager",
                                          "Persists transaction logs to disk before memory write",
                                          "Transaction Modifies",
                                          "Append-Only Log File on Disk"
                                    ],
                                    [
                                          "Buffer Pool",
                                          "Caches data pages in RAM to accelerate reads/writes",
                                          "Disk Page Blocks",
                                          "In-Memory Cached Page Blocks"
                                    ]
                              ]
                        }
                  },
                  {
                        "heading": "3. Complete Categorization of the 5 SQL Sub-Languages",
                        "text": "SQL is not a monolithic language; it is divided into 5 distinct functional sub-languages based on operation type and engine behavior:",
                        "table": {
                              "headers": [
                                    "SQL Sub-Language",
                                    "Primary Purpose",
                                    "Core Statements / Keywords",
                                    "Auto-Commit Behavior",
                                    "Target Audience"
                              ],
                              "rows": [
                                    [
                                          "DDL (Data Definition Language)",
                                          "Defines, alters, and drops database schemas, tables, indexes, and constraints",
                                          "CREATE, ALTER, DROP, TRUNCATE, RENAME",
                                          "Auto-commits immediately (in MySQL/Oracle)",
                                          "Database Architects & DBAs"
                                    ],
                                    [
                                          "DML (Data Manipulation Language)",
                                          "Inserts, updates, deletes, and modifies data records inside tables",
                                          "INSERT, UPDATE, DELETE, MERGE",
                                          "Transactional (Requires explicit COMMIT/ROLLBACK)",
                                          "Backend Software Engineers"
                                    ],
                                    [
                                          "DQL (Data Query Language)",
                                          "Queries and retrieves selective data streams from single or multiple tables",
                                          "SELECT",
                                          "Read-only (No state mutation on disk)",
                                          "Data Analysts & Engineers"
                                    ],
                                    [
                                          "DCL (Data Control Language)",
                                          "Grants and revokes user access permissions and role-based security controls",
                                          "GRANT, REVOKE",
                                          "Auto-commits immediately",
                                          "Security Engineers & DBAs"
                                    ],
                                    [
                                          "TCL (Transaction Control Language)",
                                          "Manages transactional boundaries, multi-query atomic units, and savepoints",
                                          "COMMIT, ROLLBACK, SAVEPOINT, SET TRANSACTION",
                                          "Controls transaction state explicitly",
                                          "Backend Engineers & Financial Developers"
                                    ]
                              ]
                        },
                        "bulletPoints": [
                              "Critical Difference: DROP vs TRUNCATE vs DELETE:",
                              "• DROP TABLE: Destroys the table definition, schema, indexes, and all data permanently from disk storage.",
                              "• TRUNCATE TABLE: A fast DDL operation that deallocates all data storage pages at once, resetting auto-increment counters back to 1. Cannot be rolled back in some engines.",
                              "• DELETE FROM: A DML operation that removes rows individually, writing undo logs for every row deleted. Does NOT reset auto-increment counters."
                        ]
                  },
                  {
                        "heading": "4. Database Server Infrastructure: Localhost vs Enterprise Cloud Servers",
                        "text": "Understanding database host deployment topologies is critical for building web applications:",
                        "bulletPoints": [
                              "Local Server Environment ('localhost'): Uses loopback IP address 127.0.0.1. The database server runs on your developer laptop or desktop machine. Typical default TCP ports include PostgreSQL (5432), MySQL (3306), MS SQL Server (1433), and MongoDB (27017). Local servers are used for rapid development, unit testing, and sandbox experimentation.",
                              "Managed Enterprise Cloud Clusters: Large enterprise applications deploy databases on cloud infrastructure (e.g. Amazon Web Services RDS / Aurora, Google Cloud Platform Cloud SQL, Microsoft Azure SQL Database). Cloud clusters feature multi-region availability zones, automated point-in-time automated backups, read-replicas for horizontal scaling, and encrypted connection pools.",
                              "Connection Strings: Applications establish database connections using a standardized connection URI string: postgresql://username:password@hostname:5432/databasename?sslmode=require",
                              "Role-Based Access Control (RBAC): Superusers (DBAs) possess unrestricted schema control. Production application services connect using dedicated service accounts granted limited permissions (SELECT, INSERT, UPDATE on specific tables only) to mitigate SQL injection risk."
                        ]
                  },
                  {
                        "heading": "5. Standard SQL Dialects & Vendor Implementations",
                        "text": "While ANSI (American National Standards Institute) and ISO (International Organization for Standardization) govern core SQL specifications, major database vendors maintain unique extensions and features:",
                        "bulletPoints": [
                              "PostgreSQL: The world's most advanced open-source relational database. Known for strict ANSI compliance, native JSONB support, custom data types, PostGIS spatial queries, and PL/pgSQL procedural code.",
                              "MySQL / MariaDB: The most popular web server database powering Linux-Apache-MySQL-PHP (LAMP) and WordPress stacks. Uses the high-performance InnoDB transactional storage engine.",
                              "Microsoft SQL Server: Enterprise database system widely used in corporate Windows environments. Uses T-SQL (Transact-SQL) featuring built-in TRY...CATCH error blocks and stored procedures.",
                              "Oracle Database: Enterprise powerhouse for global financial institutions, airlines, and logistics. Uses PL/SQL, advanced partitioning, and multi-tenant container architecture."
                        ]
                  }
            ],
            "codeExamples": [
                  {
                        "title": "Database Engine Diagnostics & Environment Session Metadata",
                        "code": "-- 1. Query database engine version and build parameters\nSELECT version();\n\n-- 2. Inspect active database, session user identity, client IP, and server port\nSELECT \n    current_database() AS active_database_name,\n    current_user AS active_session_user,\n    session_user AS original_login_user,\n    inet_client_addr() AS client_ip_address,\n    inet_server_port() AS database_server_port,\n    current_setting('server_encoding') AS database_encoding;\n\n-- 3. Check database uptime and active connection counts\nSELECT \n    datname AS database_name,\n    numbackends AS active_concurrent_connections,\n    xact_commit AS committed_transactions,\n    xact_rollback AS rolled_back_transactions\nFROM pg_stat_database\nWHERE datname = current_database();",
                        "explanation": "Diagnostic SQL queries inspect database server uptime, active user sessions, connection pools, and encoding properties."
                  },
                  {
                        "title": "Full Workflow: Schema Definition (DDL), Data Insert (DML) & Privilege Control (DCL)",
                        "code": "-- Step 1: DDL — Create a secure production schema and table\nCREATE TABLE enterprise_employees (\n    employee_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,\n    full_name VARCHAR(100) NOT NULL,\n    email VARCHAR(150) UNIQUE NOT NULL,\n    department VARCHAR(50) NOT NULL,\n    salary NUMERIC(10, 2) CHECK (salary > 0),\n    hire_date DATE DEFAULT CURRENT_DATE\n);\n\n-- Step 2: DML — Insert initial seed records inside a transaction\nBEGIN TRANSACTION;\n\nINSERT INTO enterprise_employees (full_name, email, department, salary)\nVALUES \n    ('Dr. Edgar Codd', 'edgar.codd@ibm.research.com', 'Research', 145000.00),\n    ('Ada Lovelace', 'ada.lovelace@analytics.org', 'Engineering', 160000.00);\n\nCOMMIT; -- TCL: Commit changes permanently to disk\n\n-- Step 3: DQL — Query inserted records\nSELECT employee_id, full_name, department, salary \nFROM enterprise_employees \nWHERE department = 'Engineering';\n\n-- Step 4: DCL — Create read-only role and grant SELECT privileges\nCREATE ROLE analyst_read_only WITH LOGIN PASSWORD 'SecurePass123!';\nGRANT SELECT ON enterprise_employees TO analyst_read_only;",
                        "explanation": "Demonstrates an end-to-end relational database workflow combining DDL table creation, DML data population, TCL transaction commit, DQL querying, and DCL role-based access control."
                  }
            ],
            "bestPractices": [
                  "Always design database schemas with normalization principles (1NF, 2NF, 3NF) before writing production queries.",
                  "Never connect web applications using the 'postgres' or 'root' DBA superuser account; always provision restricted service roles.",
                  "Understand the difference between TRUNCATE (fast DDL page reset) and DELETE (row-by-row DML logging).",
                  "Use explicit column names in SELECT statements instead of SELECT * to avoid network latency and memory overhead."
            ],
            "commonMistakes": [
                  "Assuming flat CSV files are an acceptable substitute for enterprise database storage during multi-user concurrent writes.",
                  "Executing 'DELETE FROM table' without a WHERE clause, wiping out all table records accidentally.",
                  "Attempting to use '= NULL' instead of 'IS NULL' when filtering missing data values."
            ],
            "practiceExercise": {
                  "title": "Classifying SQL Sub-Languages & Engine Concepts",
                  "problem": "Perform the following two exercises:\n1. Categorize each statement into its correct sub-language (DDL, DML, DQL, DCL, TCL):\n   a. CREATE TABLE customers (...)\n   b. INSERT INTO orders VALUES (...)\n   c. COMMIT;\n   d. GRANT SELECT ON products TO app_user;\n   e. TRUNCATE TABLE audit_logs;\n   f. SELECT * FROM users WHERE status = 'Active';\n\n2. Explain why TRUNCATE TABLE is significantly faster than DELETE FROM on a table with 10 million rows.",
                  "solutionCode": "-- Exercise 1 Answers:\n-- a. CREATE TABLE       -> DDL (Data Definition Language)\n-- b. INSERT INTO         -> DML (Data Manipulation Language)\n-- c. COMMIT              -> TCL (Transaction Control Language)\n-- d. GRANT               -> DCL (Data Control Language)\n-- e. TRUNCATE TABLE      -> DDL (Data Definition Language)\n-- f. SELECT              -> DQL (Data Query Language)\n\n-- Exercise 2 Answer:\n-- TRUNCATE TABLE is a DDL command that deallocates data storage pages directly on disk in a single operation, \n-- writing minimal log entries and resetting auto-increment counters back to 1.\n-- DELETE FROM is a DML command that scans every row individually, generates undo/redo transaction log entries \n-- for all 10 million rows, and does NOT deallocate disk storage pages or reset auto-increment counters."
            },
            "keyTakeaways": [
                  "SQL is the declarative industry-standard language developed by IBM in 1970s and standardized by ANSI/ISO.",
                  "Relational Databases (RDBMS) solve flat-file limitations by enforcing data integrity, ACID transaction safety, and sub-millisecond B-Tree indexing.",
                  "The RDBMS engine pipeline includes the Parser (AST), Logical Planner, Cost-Based Optimizer (CBO), Physical Execution Engine, Write-Ahead Logger (WAL), and RAM Buffer Pool.",
                  "SQL commands are categorized into 5 sub-languages: DDL (structure), DML (records), DQL (retrieval), DCL (security), and TCL (transactions).",
                  "Localhost (127.0.0.1) servers provide local developer sandboxes, while corporate cloud clusters manage enterprise availability and replication."
            ]
      }
},

      {
      "id": "sql-mod-2",
      "title": "Module 02 — SQL Syntax, Keywords & Data Types",
      "description": "Master SQL lexical rules, uppercase keyword conventions, single/multi-line comments, identifier quoting rules, and the complete relational Data Type System: Integers (SMALLINT, INT, BIGINT), Financial Fixed-Point Decimals (NUMERIC/DECIMAL), Floating-Point (REAL, DOUBLE PRECISION), Strings (CHAR, VARCHAR, TEXT), Timestamps (TIMESTAMP, TIMESTAMPTZ, INTERVAL), Booleans, JSONB, UUIDs, and Type Casting (CAST, ::).",
      "completed": false,
      "order": 2,
      "published": true,
      "readingMaterial": {
            "introduction": "Welcome to Module 2! Writing professional SQL requires a crystal-clear understanding of SQL lexical syntax, reserved keywords, identifier naming rules, and the relational Data Type System. Every column in a relational database table must be assigned a specific data type during table creation. The choice of data type governs the range of valid values, physical storage footprint on disk, memory alignment in RAM, indexing speed, and mathematical precision. Choosing appropriate data types is the fundamental first step in relational database schema design.",
            "objectives": [
                  "Master SQL lexical rules: Case sensitivity, statement terminators (;), and whitespace indentation conventions",
                  "Understand Identifier Quoting Conventions: ANSI double quotes (\"col\"), MySQL backticks (`col`), and SQL Server brackets ([col])",
                  "Differentiate Single-Line comments (-- or #) from Multi-Line block comments (/* ... */)",
                  "Identify SQL Reserved Keywords (SELECT, FROM, WHERE, GROUP, ORDER, JOIN) and escaping rules",
                  "Master Numeric Data Types: Fixed-width Integers (SMALLINT, INT, BIGINT), Auto-Incrementing Sequences (SERIAL/IDENTITY), Fixed-Point Decimals (NUMERIC/DECIMAL), and Approximate Floating-Point (REAL, DOUBLE PRECISION)",
                  "Evaluate Character & Text Types: Fixed-Length CHAR(n), Variable-Length VARCHAR(n), and Extended Out-of-Page TEXT / CLOB",
                  "Master Temporal Data Types: DATE, TIME, TIMESTAMP, TIMESTAMPTZ (UTC offset handling), and INTERVAL durations",
                  "Explore Modern Enterprise Data Types: BOOLEAN, JSONB (Binary JSON with GIN indexing), UUID (128-bit microservice keys), and BYTEA/BLOB",
                  "Perform Explicit Type Conversion using ANSI CAST(expr AS target_type) and PostgreSQL shorthand (expr::target_type)"
            ],
            "sections": [
                  {
                        "heading": "1. SQL Lexical Structure, Case Sensitivity & Quoting Rules",
                        "text": "SQL statements consist of lexical tokens: keywords, identifiers, literals, operators, and special characters. While standard SQL keywords are case-insensitive, professional database engineers strictly follow industry formatting standards to maintain clean, readable code bases.",
                        "bulletPoints": [
                              "Keyword Uppercasing Best Practice: Write all SQL keywords in UPPERCASE (e.g. SELECT, FROM, WHERE, INNER JOIN) and table/column names in lowercase (e.g. users, order_id).",
                              "Statement Semicolon Terminator (;): Terminates individual SQL statements. Required when executing multi-statement batch scripts or API transactions.",
                              "Case Sensitivity of Identifiers: SQL keywords are case-insensitive (`select` equals `SELECT`). However, table and column name case sensitivity depends on the operating system file system (Linux vs Windows) and database configuration (e.g., MySQL `lower_case_table_names`).",
                              "Identifier Quoting Rules: Unquoted identifiers are automatically folded to lowercase (in PostgreSQL) or uppercase (in Oracle). To preserve mixed-case or use reserved words as identifiers, wrap them in engine-specific quotes:",
                              "• ANSI SQL & PostgreSQL: Use double quotes -> SELECT \"First Name\" FROM \"User Accounts\";",
                              "• MySQL / MariaDB: Use backticks -> SELECT `first name` FROM `user accounts`;",
                              "• Microsoft SQL Server: Use square brackets -> SELECT [first name] FROM [user accounts];",
                              "Single Quote Literal Rule: String literals and dates MUST always be enclosed in SINGLE QUOTES ('John Doe', '2026-10-03'). Double quotes are reserved for identifiers."
                        ],
                        "table": {
                              "headers": [
                                    "SQL Lexical Element",
                                    "Syntax Example",
                                    "Standard Convention",
                                    "Engine Execution Rule"
                              ],
                              "rows": [
                                    [
                                          "Reserved Keywords",
                                          "SELECT, FROM, WHERE, JOIN",
                                          "ALWAYS UPPERCASE",
                                          "Case-insensitive"
                                    ],
                                    [
                                          "Table & Column Names",
                                          "users, employee_id, total_amount",
                                          "lowercase_snake_case",
                                          "Folds case unless quoted"
                                    ],
                                    [
                                          "Quoted Identifiers",
                                          "\"First Name\", `order-id`, [Zip]",
                                          "Avoid mixed case if possible",
                                          "Preserves exact case & spaces"
                                    ],
                                    [
                                          "String Literals",
                                          "'Jane Smith', 'Active'",
                                          "Always Single Quotes ('')",
                                          "Case-sensitive string value"
                                    ],
                                    [
                                          "Numeric Literals",
                                          "42, 199.99, -15.50",
                                          "Unquoted numbers",
                                          "Parsed directly as Int/Decimal"
                                    ],
                                    [
                                          "Single-Line Comments",
                                          "-- Filter active records",
                                          "Double-dash prefix (--)",
                                          "Ignored by SQL parser"
                                    ],
                                    [
                                          "Multi-Line Comments",
                                          "/* Block explanation */",
                                          "Slash-asterisk wrapper",
                                          "Ignored across multiple lines"
                                    ]
                              ]
                        }
                  },
                  {
                        "heading": "2. The Numeric Data Type System: Integer, Fixed-Point Decimal & Floating-Point",
                        "text": "Relational engines provide distinct numeric types tailored for storage efficiency and mathematical accuracy:",
                        "bulletPoints": [
                              "Fixed-Width Integers:",
                              "• SMALLINT (2 Bytes): Range -32,768 to +32,767. Used for small status codes, month numbers, or age.",
                              "• INT / INTEGER (4 Bytes): Range ~-2.14 Billion to +2.14 Billion. Standard default for surrogate keys and counts.",
                              "• BIGINT (8 Bytes): Range ~-9 Quintillion to +9 Quintillion. Required for high-volume primary keys (e.g. global transactions, log event IDs).",
                              "• Auto-Increment Sequences: SERIAL (PostgreSQL), AUTO_INCREMENT (MySQL), or IDENTITY (MS SQL) automatically generate incrementing integer keys.",
                              "Fixed-Point Exact Decimals — DECIMAL(p, s) / NUMERIC(p, s):",
                              "• Precision (p): Total count of significant digits across the entire number (both left and right of the decimal point).",
                              "• Scale (s): Count of digits to the right of the decimal point (e.g. NUMERIC(10, 2) stores up to $99,999,999.99).",
                              "• MANDATORY FOR MONEY: Always use NUMERIC/DECIMAL for financial calculations, account balances, and pricing. It guarantees exact decimal precision with zero rounding error.",
                              "Approximate Floating-Point — REAL (4 Bytes) & DOUBLE PRECISION (8 Bytes):",
                              "• Stores floating-point numbers according to IEEE 754 binary floating-point standards.",
                              "• FORBIDDEN FOR CURRENCY: Floating-point math exhibits binary rounding artifacts (e.g. 0.1 + 0.2 = 0.30000000000000004). Use ONLY for scientific measurements, GPS coordinates, or statistical data where approximate precision is acceptable."
                        ],
                        "table": {
                              "headers": [
                                    "Numeric Type",
                                    "Storage Size",
                                    "Valid Range / Format",
                                    "Exact vs Approximate",
                                    "Best Enterprise Use Case"
                              ],
                              "rows": [
                                    [
                                          "SMALLINT",
                                          "2 Bytes",
                                          "-32,768 to +32,767",
                                          "Exact Integer",
                                          "Status codes, month numbers (1-12)"
                                    ],
                                    [
                                          "INTEGER (INT)",
                                          "4 Bytes",
                                          "-2.14B to +2.14B",
                                          "Exact Integer",
                                          "Standard primary keys, user IDs"
                                    ],
                                    [
                                          "BIGINT",
                                          "8 Bytes",
                                          "-9.22E18 to +9.22E18",
                                          "Exact Integer",
                                          "Global transaction IDs, audit logs"
                                    ],
                                    [
                                          "DECIMAL(12,2)",
                                          "Variable (5-9B)",
                                          "Up to 10 digits left, 2 right",
                                          "Exact Fixed-Point",
                                          "Financial balances, prices, salaries"
                                    ],
                                    [
                                          "REAL (FLOAT4)",
                                          "4 Bytes",
                                          "6 decimal digits precision",
                                          "Approximate Float",
                                          "Scientific readings, temperature"
                                    ],
                                    [
                                          "DOUBLE PRECISION",
                                          "8 Bytes",
                                          "15 decimal digits precision",
                                          "Approximate Float",
                                          "Geospatial coordinates, physics models"
                                    ]
                              ]
                        }
                  },
                  {
                        "heading": "3. Character & Text Data Types: CHAR, VARCHAR, and Extended TEXT",
                        "text": "String data types manage textual information with different memory alignment and storage characteristics:",
                        "bulletPoints": [
                              "Fixed-Length String — CHAR(n):",
                              "• Allocates exactly n bytes on disk regardless of actual text length.",
                              "• If the input string is shorter than n, the engine pads trailing blank spaces (e.g. CHAR(5) storing 'US' pads 3 spaces: 'US   ').",
                              "• Ideal for fixed-length codes: Country ISO Codes ('USA', 'IND'), State Codes ('NY', 'CA'), or Hash Digests (SHA-256).",
                              "Variable-Length String — VARCHAR(n):",
                              "• Stores variable-length text up to a maximum limit of n characters.",
                              "• Stores only actual character bytes plus a 1 or 2 byte length prefix. No space padding occurs.",
                              "• Standard default for names, email addresses, usernames, and street addresses.",
                              "Unlimited Extended Text — TEXT / CLOB:",
                              "• Stores large blocks of text (blog posts, JSON documents, HTML bodies, raw logs) up to 1GB or 4GB in size.",
                              "• TOAST Storage Engine (PostgreSQL): When text exceeds 2KB, PostgreSQL automatically compresses and stores the text out-of-page in TOAST (The Oversized-Attribute Storage Technique) tables to keep main data pages small and index scans fast."
                        ]
                  },
                  {
                        "heading": "4. Temporal & Advanced Enterprise Data Types",
                        "text": "Modern relational databases provide rich data types for time tracking, document storage, and distributed architectures:",
                        "bulletPoints": [
                              "DATE: Stores calendar date (Year, Month, Day: YYYY-MM-DD) across 4 bytes.",
                              "TIME: Stores clock time of day (Hours, Minutes, Seconds, Microseconds: HH:MI:SS.ms) across 8 bytes.",
                              "TIMESTAMP (without timezone): Stores date and time combined (YYYY-MM-DD HH:MI:SS). Vulnerable to timezone ambiguity bugs across global servers.",
                              "TIMESTAMPTZ (TIMESTAMP WITH TIME ZONE): Industry standard for global backend applications. Converts incoming client timestamps into UTC (Coordinated Universal Time) for storage on disk, and automatically converts UTC back to the client's local session timezone upon retrieval.",
                              "INTERVAL: Represents elapsed time durations (e.g. INTERVAL '1 year 2 months', INTERVAL '3 hours 30 minutes').",
                              "BOOLEAN: Stores logical truth values (TRUE, FALSE, UNKNOWN/NULL) across 1 byte. (Note: MySQL implements BOOLEAN as TINYINT(1) where 1 = TRUE and 0 = FALSE).",
                              "JSONB (Binary JSON): Stores binary-formatted JSON documents inside relational tables. Supports indexing via GIN (Generalized Inverted Index) for ultra-fast nested JSON key lookups.",
                              "UUID (Universally Unique Identifier): 128-bit globally unique identifier formatted as 32 hexadecimal digits (e.g. `550e8400-e29b-41d4-a716-446655440000`). Essential for distributed microservice architectures to prevent primary key collision errors."
                        ],
                        "table": {
                              "headers": [
                                    "Temporal / Enterprise Type",
                                    "Storage Size",
                                    "Format Example",
                                    "Timezone Awareness",
                                    "Production Application"
                              ],
                              "rows": [
                                    [
                                          "DATE",
                                          "4 Bytes",
                                          "2026-10-03",
                                          "None",
                                          "Birth dates, hire dates, holidays"
                                    ],
                                    [
                                          "TIME",
                                          "8 Bytes",
                                          "14:30:00.00",
                                          "None",
                                          "Store opening hours, scheduled jobs"
                                    ],
                                    [
                                          "TIMESTAMP",
                                          "8 Bytes",
                                          "2026-10-03 14:30:00",
                                          "No Timezone Offset",
                                          "Local events, offline log entries"
                                    ],
                                    [
                                          "TIMESTAMPTZ",
                                          "8 Bytes",
                                          "2026-10-03 14:30:00+00",
                                          "Stored in UTC",
                                          "Global transaction logs, API timestamps"
                                    ],
                                    [
                                          "INTERVAL",
                                          "16 Bytes",
                                          "3 days 04:00:00",
                                          "Duration",
                                          "Subscription validity, session timeout"
                                    ],
                                    [
                                          "JSONB",
                                          "Variable",
                                          "{\"role\": \"admin\"}",
                                          "Structured JSON",
                                          "Semi-structured document attributes"
                                    ],
                                    [
                                          "UUID",
                                          "16 Bytes",
                                          "550e8400-e29b-41d4...",
                                          "N/A",
                                          "Microservice cross-system entity keys"
                                    ]
                              ]
                        }
                  },
                  {
                        "heading": "5. Explicit vs Implicit Type Conversion (Casting)",
                        "text": "When performing queries or comparisons across different data types, relational engines perform type coercion:",
                        "bulletPoints": [
                              "Implicit Coercion: The database engine automatically converts data types when compatible (e.g. comparing INTEGER 10 to NUMERIC 10.00).",
                              "Explicit Type Casting: Forces data conversion explicitly using standard ANSI syntax or vendor shortcuts:",
                              "• ANSI Standard: CAST(expression AS target_type) -> CAST('2026-10-03' AS DATE), CAST(price AS VARCHAR)",
                              "• PostgreSQL Shorthand: expression::target_type -> '2026-10-03'::DATE, price::NUMERIC(10,2)",
                              "Data Conversion Failures:",
                              "• Numeric Overflow Error: Attempting to insert 99999 into a NUMERIC(4,2) column.",
                              "• String Truncation Error: Attempting to insert a 20-character string into a VARCHAR(10) column (`STRING DATA RIGHT TRUNCATION`)."
                        ]
                  }
            ],
            "codeExamples": [
                  {
                        "title": "Enterprise Table Definition with Comprehensive Data Types & Constraints",
                        "code": "-- Create a complete production user accounts table incorporating diverse data types\nCREATE TABLE enterprise_users (\n    -- Surrogate Primary Key using 128-bit UUID\n    user_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),\n    \n    -- Integer sequence for internal sequential billing invoice numbers\n    account_number BIGINT GENERATED ALWAYS AS IDENTITY UNIQUE,\n    \n    -- Fixed-length string for 2-character country ISO codes\n    country_code CHAR(2) NOT NULL DEFAULT 'US',\n    \n    -- Variable-length strings with strict length boundaries\n    first_name VARCHAR(50) NOT NULL,\n    last_name VARCHAR(50) NOT NULL,\n    email VARCHAR(255) UNIQUE NOT NULL,\n    \n    -- Exact fixed-point decimal for wallet balance (never use FLOAT for currency!)\n    wallet_balance NUMERIC(12, 2) NOT NULL DEFAULT 0.00 CHECK (wallet_balance >= 0.00),\n    \n    -- Boolean status flag\n    is_verified BOOLEAN NOT NULL DEFAULT FALSE,\n    \n    -- Binary JSON document for flexible user preference settings\n    user_preferences JSONB DEFAULT '{\"theme\": \"dark\", \"notifications\": true}'::jsonb,\n    \n    -- Timestamp with Timezone (stored in UTC)\n    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,\n    last_login_at TIMESTAMPTZ NULL\n);",
                        "explanation": "Demonstrates production database schema design using UUIDs, BIGINT sequences, CHAR(2), VARCHAR, exact NUMERIC currency, BOOLEAN, JSONB, and TIMESTAMPTZ."
                  },
                  {
                        "title": "Type Conversion (CAST), String Formatting & Temporal Math Queries",
                        "code": "-- 1. Explicit Type Casting using ANSI CAST and PostgreSQL :: operator\nSELECT \n    CAST('1250.75' AS NUMERIC(10, 2)) AS parsed_amount,\n    '2026-10-03'::DATE AS parsed_date,\n    CAST(CURRENT_TIMESTAMP AS VARCHAR) AS timestamp_text;\n\n-- 2. Calculating temporal intervals and subscription expiry dates\nSELECT \n    email,\n    created_at AS subscription_start,\n    created_at + INTERVAL '30 days' AS subscription_expiration_date,\n    CURRENT_TIMESTAMP - created_at AS account_age_duration\nFROM enterprise_users;\n\n-- 3. Querying nested JSONB document attributes using JSON operators\nSELECT \n    email,\n    user_preferences->>'theme' AS selected_theme,\n    (user_preferences->>'notifications')::BOOLEAN AS notifications_enabled\nFROM enterprise_users\nWHERE user_preferences->>'theme' = 'dark';",
                        "explanation": "Illustrates explicit type casting with CAST and ::, date-time interval math, and extracting typed fields from binary JSONB documents."
                  }
            ],
            "bestPractices": [
                  "Always use uppercase for SQL keywords (SELECT, FROM, WHERE) and lowercase_snake_case for table/column identifiers.",
                  "Always use NUMERIC or DECIMAL for financial balances and monetary amounts; NEVER use FLOAT or DOUBLE PRECISION for currency.",
                  "Use TIMESTAMPTZ (Timestamp with Time Zone) for all application timestamps to prevent global timezone conversion bugs.",
                  "Use CHAR(n) only when text entries have a guaranteed fixed character length (e.g. State codes 'NY', ISO country codes 'US'). Use VARCHAR(n) for variable text.",
                  "Single quotes ('text') are for string literals; double quotes (\"identifier\") are for reserved or mixed-case database identifiers."
            ],
            "commonMistakes": [
                  "Using double quotes around string literals (e.g. WHERE name = \"John\"), causing syntax errors in ANSI-compliant SQL engines.",
                  "Storing financial values as FLOAT or REAL, leading to floating-point binary rounding errors in accounting reports.",
                  "Storing dates as plain VARCHAR strings ('10/03/2026') instead of native DATE or TIMESTAMPTZ data types, preventing index optimization and date math.",
                  "Forgetting that MySQL BOOLEAN is an alias for TINYINT(1), where 1 = TRUE and 0 = FALSE."
            ],
            "practiceExercise": {
                  "title": "Data Type Selection & Type Conversion Challenge",
                  "problem": "Perform the following two tasks:\n1. Recommend the exact SQL data type (with precision/scale if applicable) for each of the following 6 real-world attributes:\n   a. Account Balance ($99,999,999.99)\n   b. US State Abbreviation ('NY', 'CA')\n   c. User Age (0 to 120)\n   d. User Profile Bio (up to 5,000 words)\n   e. User Account Creation Date & Time (Global App)\n   f. Microservice Transaction ID (`a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11`)\n\n2. Write a SQL SELECT query that converts a string literal '499.99' to a NUMERIC(10,2) type, and calculates an expiration date 1 year after '2026-01-01'.",
                  "solutionCode": "-- Exercise 1 Data Type Recommendations:\n-- a. Account Balance     -> NUMERIC(10, 2) or DECIMAL(10, 2) [Exact fixed-point decimal]\n-- b. State Abbreviation  -> CHAR(2) [Fixed length 2 characters]\n-- c. User Age            -> SMALLINT [2 bytes, range -32,768 to 32,767]\n-- d. Profile Bio         -> TEXT [Unlimited variable-length text]\n-- e. Creation Date & Time-> TIMESTAMPTZ [Timestamp with timezone stored in UTC]\n-- f. Transaction ID      -> UUID [128-bit globally unique key]\n\n-- Exercise 2 SQL Query Answer:\nSELECT \n    CAST('499.99' AS NUMERIC(10, 2)) AS price_numeric,\n    '2026-01-01'::DATE + INTERVAL '1 year' AS expiration_date;"
            },
            "keyTakeaways": [
                  "SQL keywords should be written in UPPERCASE, while identifiers use lowercase_snake_case.",
                  "Single quotes ('') define string literals, while double quotes (\"\"), backticks (``), or brackets ([]) quote identifiers.",
                  "Financial amounts MUST use NUMERIC/DECIMAL; floating-point types (FLOAT/REAL) exhibit dangerous binary rounding errors.",
                  "TIMESTAMPTZ stores timestamps in UTC and converts automatically to client session timezones.",
                  "PostgreSQL supports advanced modern enterprise types like binary JSONB documents and 128-bit UUIDs."
            ]
      }
},

      {
      "id": "sql-mod-3",
      "title": "Module 03 — DDL: Creating & Managing Database Structures",
      "description": "Master Data Definition Language (DDL) architecture: CREATE DATABASE, CREATE SCHEMA, CREATE TABLE, Generated Columns, Temporary Tables (CTAS), zero-downtime ALTER TABLE migrations (ADD, DROP, RENAME, ALTER TYPE), and structural destruction mechanics (DROP TABLE vs TRUNCATE TABLE vs DELETE FROM).",
      "completed": false,
      "order": 3,
      "published": true,
      "readingMaterial": {
            "introduction": "Welcome to Module 3! Data Definition Language (DDL) is the sub-language of SQL responsible for defining, altering, managing, and destroying relational database structures—including databases, schemas, tables, views, indexes, and constraints. Unlike DML (which manipulates row data inside tables), DDL statements modify the system catalog (data dictionary) and physical storage allocations on disk. Mastering DDL is essential for database architects, software engineers, and DevOps professionals who design resilient database schemas and manage production schema migrations.",
            "objectives": [
                  "Master DDL statement fundamentals: CREATE, ALTER, DROP, TRUNCATE, and RENAME",
                  "Understand System Catalogs & Data Dictionaries (pg_catalog, information_schema)",
                  "Provision Databases & Multi-Tenant Schemas (CREATE DATABASE, CREATE SCHEMA, SET search_path)",
                  "Configure Character Encodings (UTF8, UTF8MB4) and Collations (Case/Accent Sensitivity)",
                  "Design Production Tables (CREATE TABLE) with Column Defaults, Identity Sequences, and Generated Stored Columns",
                  "Utilize Temporary Tables (CREATE TEMP TABLE) and CTAS (CREATE TABLE AS SELECT) for ETL pipelines",
                  "Execute Zero-Downtime Database Schema Migrations (ALTER TABLE ADD, DROP, RENAME, ALTER TYPE USING)",
                  "Deconstruct Storage Page Mechanics: DROP TABLE vs TRUNCATE TABLE vs DELETE FROM",
                  "Understand Transactional DDL (PostgreSQL) vs Immediate Auto-Commit DDL (MySQL, Oracle)"
            ],
            "sections": [
                  {
                        "heading": "1. Data Definition Language (DDL) & The Relational Data Dictionary",
                        "text": "When you execute a DDL statement, the database engine updates internal system metadata tables known as the System Catalog or Data Dictionary (e.g., `information_schema.tables`, `pg_class`, `pg_attribute`). DDL statements alter table schemas, physical page layouts, and index definitions.",
                        "bulletPoints": [
                              "Transactional DDL vs Auto-Commit DDL:",
                              "• PostgreSQL: Supports fully transactional DDL! You can execute `CREATE TABLE` or `ALTER TABLE` inside a `BEGIN...COMMIT` block. If an error occurs, `ROLLBACK` restores the previous schema state perfectly.",
                              "• MySQL / Oracle: DDL statements issue an implicit `COMMIT` immediately before and after execution. DDL operations CANNOT be rolled back in MySQL or Oracle!",
                              "Metadata Locking (AccessExclusiveLock): Executing `ALTER TABLE` or `DROP TABLE` acquires an exclusive lock on the table. While a DDL lock is held, all concurrent client `SELECT`, `INSERT`, `UPDATE`, and `DELETE` queries are blocked in a queue. Minimizing lock duration is crucial for zero-downtime production migrations.",
                              "Defensive DDL Guard Clauses: Always use `IF EXISTS` and `IF NOT EXISTS` in migration scripts to prevent script execution crashes (e.g. `CREATE TABLE IF NOT EXISTS users (...)`, `DROP TABLE IF EXISTS audit_logs`)."
                        ],
                        "table": {
                              "headers": [
                                    "DDL Keyword",
                                    "Primary Functional Target",
                                    "Metadata Catalog Action",
                                    "Can Be Rolled Back? (Postgres)"
                              ],
                              "rows": [
                                    [
                                          "CREATE DATABASE",
                                          "Database Instance Allocation",
                                          "Creates physical directory & tablespace",
                                          "NO (Must run outside transaction)"
                                    ],
                                    [
                                          "CREATE SCHEMA",
                                          "Logical Namespace Partition",
                                          "Adds entry to pg_namespace catalog",
                                          "YES"
                                    ],
                                    [
                                          "CREATE TABLE",
                                          "Table Definition & Heap Creation",
                                          "Adds entry to pg_class & allocates disk pages",
                                          "YES"
                                    ],
                                    [
                                          "ALTER TABLE",
                                          "Schema Structure Modification",
                                          "Updates column attributes & acquires metadata lock",
                                          "YES"
                                    ],
                                    [
                                          "DROP TABLE",
                                          "Permanent Table Destruction",
                                          "Removes catalog entries & deletes disk pages",
                                          "YES"
                                    ],
                                    [
                                          "TRUNCATE TABLE",
                                          "Fast Page Storage Reset",
                                          "Deallocates heap storage pages instantly",
                                          "YES"
                                    ]
                              ]
                        }
                  },
                  {
                        "heading": "2. Database & Schema Creation: Encodings, Collations & Multi-Tenancy",
                        "text": "Creating a production database requires specifying physical storage parameters, character encodings, and collations:",
                        "bulletPoints": [
                              "Character Encodings (UTF8 / UTF8MB4): UTF-8 is the universal standard for web applications, supporting international languages, accents, and symbols. MySQL requires `utf8mb4` to fully support 4-byte UTF-8 characters including modern Emojis.",
                              "Collations (String Comparison Rules): Governs how string values are sorted, compared, and matched:",
                              "• `en_US.UTF-8` or `utf8mb4_bin`: Case-sensitive string matching ('Admin' != 'admin').",
                              "• `utf8mb4_unicode_ci`: Case-insensitive (`_ci`) string matching ('Admin' == 'admin').",
                              "Multi-Tenant Logical Isolation (CREATE SCHEMA): A single database container can host multiple logical namespaces called Schemas. Using schemas isolates microservice data or multi-tenant customer accounts without needing separate database servers:",
                              "• `CREATE SCHEMA tenant_a;`, `CREATE SCHEMA tenant_b;`",
                              "• `SET search_path TO tenant_a, public;` (Directs default query resolution to the `tenant_a` schema)."
                        ]
                  },
                  {
                        "heading": "3. Complete Table Creation Anatomy (CREATE TABLE, CTAS & Temp Tables)",
                        "text": "The `CREATE TABLE` command defines column names, data types, default values, sequences, and computed generated columns:",
                        "bulletPoints": [
                              "Column Default Values: `DEFAULT CURRENT_TIMESTAMP` automatically stamps creation dates; `DEFAULT 'Pending'` populates default status strings when values are omitted during INSERT operations.",
                              "Identity Sequences (ANSI Standard): `GENERATED ALWAYS AS IDENTITY` replaces legacy proprietary auto-increment types (`SERIAL`), automatically generating sequential numbers (1, 2, 3...).",
                              "Generated Stored Columns: Automatically computes values on-the-fly or persists them on disk:",
                              "• Syntax: `total_price NUMERIC(10,2) GENERATED ALWAYS AS (unit_price * quantity) STORED`",
                              "• The engine calculates `total_price` automatically upon INSERT or UPDATE. Client applications cannot manually overwrite generated columns!",
                              "Create Table As Select (CTAS): Copies existing table data and structure into a new table instantly:",
                              "• `CREATE TABLE archived_orders AS SELECT * FROM orders WHERE order_date < '2025-01-01';`",
                              "Session Temporary Tables (CREATE TEMP TABLE):",
                              "• Temporary tables exist only for the duration of a client database connection session. They are automatically dropped when the connection closes, making them perfect for complex ETL data transformations."
                        ],
                        "table": {
                              "headers": [
                                    "Table Creation Strategy",
                                    "Syntax Pattern",
                                    "Persistence Lifecycle",
                                    "Common Enterprise Application"
                              ],
                              "rows": [
                                    [
                                          "Standard Table",
                                          "CREATE TABLE users (...)",
                                          "Permanent Disk Heap",
                                          "Core domain entity tables"
                                    ],
                                    [
                                          "Generated Stored Column",
                                          "col GENERATED ALWAYS AS (expr) STORED",
                                          "Permanent Calculated Field",
                                          "Invoice subtotals, tax totals"
                                    ],
                                    [
                                          "CTAS (Data Copy)",
                                          "CREATE TABLE copy AS SELECT...",
                                          "Permanent Disk Heap",
                                          "Data warehouse snapshots, backups"
                                    ],
                                    [
                                          "Temporary Table",
                                          "CREATE TEMP TABLE stage_data (...)",
                                          "Session-scoped (RAM/Disk)",
                                          "ETL staging, reporting pipelines"
                                    ],
                                    [
                                          "On-Commit Drop Temp",
                                          "CREATE TEMP TABLE t (...) ON COMMIT DROP",
                                          "Transaction-scoped",
                                          "Multi-step stored procedures"
                                    ]
                              ]
                        }
                  },
                  {
                        "heading": "4. Zero-Downtime Schema Alterations (ALTER TABLE)",
                        "text": "As software applications evolve, database table structures must adapt without disrupting active production traffic. The `ALTER TABLE` statement modifies existing table definitions:",
                        "bulletPoints": [
                              "Adding Columns (ADD COLUMN):",
                              "• `ALTER TABLE employees ADD COLUMN middle_name VARCHAR(50) NULL;`",
                              "• Rule: When adding a `NOT NULL` column to a table with existing rows, you MUST provide a `DEFAULT` value (e.g. `ADD COLUMN status VARCHAR(20) NOT NULL DEFAULT 'Active'`), otherwise the migration crashes.",
                              "Dropping Columns (DROP COLUMN):",
                              "• `ALTER TABLE employees DROP COLUMN IF EXISTS middle_name CASCADE;` (`CASCADE` drops dependent views or foreign keys automatically).",
                              "Renaming Columns & Tables (RENAME):",
                              "• `ALTER TABLE employees RENAME COLUMN surname TO last_name;`",
                              "• `ALTER TABLE employees RENAME TO staff_members;`",
                              "Altering Data Types (ALTER COLUMN TYPE / USING):",
                              "• Changing data types (e.g. converting `VARCHAR` to `INTEGER`) can cause data truncation errors.",
                              "• PostgreSQL Explicit Conversion: `ALTER TABLE products ALTER COLUMN code TYPE INT USING (code::integer);`"
                        ]
                  },
                  {
                        "heading": "5. Structural Destruction & Storage Page Deallocation: DROP vs TRUNCATE vs DELETE",
                        "text": "Understanding the low-level engine differences between `DROP TABLE`, `TRUNCATE TABLE`, and `DELETE FROM` is essential to prevent catastrophic data loss and storage bloat:",
                        "table": {
                              "headers": [
                                    "Operation Aspect",
                                    "DROP TABLE",
                                    "TRUNCATE TABLE",
                                    "DELETE FROM"
                              ],
                              "rows": [
                                    [
                                          "SQL Category",
                                          "DDL (Data Definition Language)",
                                          "DDL (Data Definition Language)",
                                          "DML (Data Manipulation Language)"
                                    ],
                                    [
                                          "Target Effect",
                                          "Destroys table schema, columns, metadata & data",
                                          "Deallocates all data storage pages; retains table schema",
                                          "Removes specific filtered rows or all rows"
                                    ],
                                    [
                                          "WHERE Clause Support?",
                                          "NO",
                                          "NO",
                                          "YES (Filters specific target rows)"
                                    ],
                                    [
                                          "Execution Speed",
                                          "Instant",
                                          "Ultra-Fast (Deallocates disk pages at once)",
                                          "Slow (Scans rows sequentially)"
                                    ],
                                    [
                                          "WAL Log Overhead",
                                          "Minimal metadata log entries",
                                          "Minimal page deallocation log entries",
                                          "High (Writes undo/redo logs per row)"
                                    ],
                                    [
                                          "Auto-Increment Reset?",
                                          "Resets (Table destroyed)",
                                          "RESETS sequence back to 1",
                                          "Does NOT reset sequence counter"
                                    ],
                                    [
                                          "Storage Page Retention",
                                          "Deallocates all disk pages",
                                          "Deallocates all disk pages instantly",
                                          "Keeps empty pages allocated (Heap bloat)"
                                    ],
                                    [
                                          "Trigger Execution",
                                          "Fires DROP event triggers",
                                          "Fires TRUNCATE triggers (Does not fire row triggers)",
                                          "Fires BEFORE/AFTER DELETE row triggers"
                                    ]
                              ]
                        },
                        "bulletPoints": [
                              "Safety Warning: Executing `DROP TABLE` or `TRUNCATE TABLE` in production permanently destroys data. Always test DDL scripts in sandbox environments first!"
                        ]
                  }
            ],
            "codeExamples": [
                  {
                        "title": "Multi-Tenant Schema Setup & Table Creation with Generated Columns",
                        "code": "-- 1. Provision a dedicated logical schema for tenant isolation\nCREATE SCHEMA IF NOT EXISTS ecommerce_tenant_a;\nSET search_path TO ecommerce_tenant_a, public;\n\n-- 2. Create production orders table with defaults, identity, and generated stored column\nCREATE TABLE IF NOT EXISTS orders (\n    order_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,\n    customer_id INT NOT NULL,\n    order_status VARCHAR(30) NOT NULL DEFAULT 'Pending',\n    \n    -- Pricing components\n    unit_price NUMERIC(10, 2) NOT NULL CHECK (unit_price >= 0),\n    quantity INT NOT NULL CHECK (quantity > 0),\n    discount_amount NUMERIC(10, 2) NOT NULL DEFAULT 0.00,\n    \n    -- Generated Stored Column: Calculated automatically by the RDBMS engine!\n    net_total NUMERIC(10, 2) GENERATED ALWAYS AS ((unit_price * quantity) - discount_amount) STORED,\n    \n    order_timestamp TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP\n);\n\n-- 3. Create a Data Warehouse Analytics Snapshot using CTAS (Create Table As Select)\nCREATE TABLE orders_high_value_archive AS \nSELECT order_id, customer_id, net_total, order_timestamp\nFROM orders\nWHERE net_total >= 1000.00;",
                        "explanation": "Demonstrates creating isolated multi-tenant schemas, generated stored columns for calculated invoice totals, and archiving data with CTAS."
                  },
                  {
                        "title": "Zero-Downtime Safe Schema Migration Script (ALTER TABLE & TRUNCATE)",
                        "code": "-- Wrap migration in a transaction block (PostgreSQL supports Transactional DDL!)\nBEGIN TRANSACTION;\n\n-- Step 1: Safely add a new column with a default value for existing rows\nALTER TABLE orders \nADD COLUMN IF NOT EXISTS payment_method VARCHAR(50) NOT NULL DEFAULT 'Credit Card';\n\n-- Step 2: Rename an outdated column cleanly\nALTER TABLE orders \nRENAME COLUMN order_timestamp TO created_at;\n\n-- Step 3: Modify column type with explicit USING conversion expression\nALTER TABLE orders \nALTER COLUMN order_status TYPE VARCHAR(50);\n\n-- Step 4: Drop legacy temporary staging table using TRUNCATE then DROP\nTRUNCATE TABLE orders_high_value_archive; -- Instantly deallocates disk pages\nDROP TABLE IF EXISTS orders_high_value_archive CASCADE;\n\nCOMMIT; -- Commit schema migration atomically to disk!",
                        "explanation": "Demonstrates transactional DDL schema migration using ALTER TABLE (ADD, RENAME, TYPE USING), TRUNCATE page resetting, and atomic COMMIT execution."
                  }
            ],
            "bestPractices": [
                  "Always wrap schema migrations in explicit transaction blocks (`BEGIN...COMMIT`) when using PostgreSQL.",
                  "Use `IF EXISTS` and `IF NOT EXISTS` guard clauses in all DDL migration scripts to guarantee idempotent execution.",
                  "Always provide a `DEFAULT` value when adding a `NOT NULL` column to an existing table with rows.",
                  "Use `TRUNCATE TABLE` instead of `DELETE FROM table` when clearing large staging tables to deallocate storage pages instantly.",
                  "Never execute DDL schema changes during peak production traffic hours without testing lock durations."
            ],
            "commonMistakes": [
                  "Executing `DELETE FROM table` to clear millions of rows, causing high WAL transaction log overhead and disk heap bloat.",
                  "Forgetting that MySQL and Oracle auto-commit DDL immediately, preventing `ROLLBACK` if a migration script fails midway.",
                  "Executing `ALTER TABLE ... ADD COLUMN NOT NULL` without a default value on populated tables, causing migration failure.",
                  "Attempting to manually write or update a `GENERATED ALWAYS AS (...) STORED` column in an `INSERT` or `UPDATE` statement."
            ],
            "practiceExercise": {
                  "title": "DDL Migration & Table Management Challenge",
                  "problem": "Perform the following two tasks:\n1. Compare `DROP TABLE`, `TRUNCATE TABLE`, and `DELETE FROM` across three criteria:\n   a. Ability to use a `WHERE` clause\n   b. Execution speed on 5 million rows\n   c. Impact on Auto-Increment sequence counters\n\n2. Write a SQL DDL script that performs the following:\n   a. Creates a table `products_v1` with `product_id` (BIGINT IDENTITY), `name` (VARCHAR 100), `cost` (NUMERIC 10,2), `tax` (NUMERIC 10,2), and a generated stored column `total_cost` (`cost + tax`).\n   b. Alters `products_v1` to add a new column `category` (VARCHAR 50) defaulting to 'General'.\n   c. Renames `products_v1` to `products_master`.",
                  "solutionCode": "-- Exercise 1 Comparison Answers:\n-- a. WHERE Clause    : Supported ONLY by DELETE FROM. Not supported by DROP or TRUNCATE.\n-- b. Execution Speed : TRUNCATE and DROP are instant (deallocate disk pages). DELETE is slow (scans row-by-row).\n-- c. Sequence Reset  : TRUNCATE resets auto-increment counters back to 1. DELETE does NOT reset counters.\n\n-- Exercise 2 DDL Script Answer:\nBEGIN TRANSACTION;\n\n-- Step a: Create products_v1 table with generated stored column\nCREATE TABLE products_v1 (\n    product_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,\n    name VARCHAR(100) NOT NULL,\n    cost NUMERIC(10, 2) NOT NULL,\n    tax NUMERIC(10, 2) NOT NULL,\n    total_cost NUMERIC(10, 2) GENERATED ALWAYS AS (cost + tax) STORED\n);\n\n-- Step b: Alter table to add category column with default value\nALTER TABLE products_v1 \nADD COLUMN category VARCHAR(50) NOT NULL DEFAULT 'General';\n\n-- Step c: Rename table to products_master\nALTER TABLE products_v1 RENAME TO products_master;\n\nCOMMIT;"
            },
            "keyTakeaways": [
                  "DDL commands (CREATE, ALTER, DROP, TRUNCATE, RENAME) modify the database system catalog and physical storage page layouts.",
                  "PostgreSQL supports Transactional DDL (`BEGIN...COMMIT`), while MySQL/Oracle execute implicit immediate auto-commits.",
                  "Generated Stored Columns automatically compute calculated values upon INSERT/UPDATE without manual application coding.",
                  "`TRUNCATE TABLE` deallocates storage pages instantly and resets sequence counters back to 1, whereas `DELETE FROM` scans rows individually.",
                  "Always use `IF EXISTS` / `IF NOT EXISTS` and test DDL lock durations to execute zero-downtime production schema migrations."
            ]
      }
},

      {
      "id": "sql-mod-4",
      "title": "Module 04 — Constraints & Keys",
      "description": "Master Relational Database Integrity: Column vs Table-Level Constraints, PRIMARY KEY (Single & Composite), UNIQUE Constraints (and NULL handling rules), FOREIGN KEY Referential Integrity with ON DELETE / ON UPDATE Cascading Actions (CASCADE, RESTRICT, SET NULL, SET DEFAULT), CHECK Constraints, NOT NULL, DEFAULT, and Deferred Constraint Validation (DEFERRABLE INITIALLY DEFERRED).",
      "completed": false,
      "order": 4,
      "published": true,
      "readingMaterial": {
            "introduction": "Welcome to Module 4! Constraints are the fundamental rules enforced by a Relational Database Management System (RDBMS) to guarantee Data Integrity across all database operations. Without constraints, databases degrade into chaotic stores of dirty, orphaned, duplicate, or corrupted data. Constraints operate directly inside the storage engine, enforcing Domain Integrity, Entity Integrity, and Referential Integrity automatically—regardless of what buggy code backend applications or external clients attempt to execute.",
            "objectives": [
                  "Differentiate the 3 Pillars of Database Integrity: Entity Integrity, Referential Integrity, and Domain Integrity",
                  "Understand Column-Level vs Table-Level Constraint syntax and Named Constraints (CONSTRAINT pk_name)",
                  "Master PRIMARY KEY Constraints: Single-column surrogate keys vs Composite Primary Keys in junction tables",
                  "Evaluate UNIQUE Constraints: Deduplication rules, B-Tree index creation, and NULL handling behavior",
                  "Master FOREIGN KEY Constraints: Parent-Child table relationships and Referential Cascading Actions (RESTRICT, CASCADE, SET NULL, SET DEFAULT)",
                  "Implement Domain Integrity with CHECK Constraints, NOT NULL, and DEFAULT expressions",
                  "Manage Production Constraints: Adding/dropping constraints via ALTER TABLE, NOT VALID pattern, and Deferred Constraints (DEFERRABLE INITIALLY DEFERRED)"
            ],
            "sections": [
                  {
                        "heading": "1. The 3 Pillars of Relational Data Integrity",
                        "text": "Relational database systems enforce three distinct layers of data integrity to prevent data corruption:",
                        "bulletPoints": [
                              "1. Entity Integrity: Ensures that every row in a table is uniquely identifiable and non-null. Enforced by PRIMARY KEY constraints.",
                              "2. Referential Integrity: Ensures that relationships between tables remain consistent, preventing 'orphaned child records' (e.g. an order referencing a customer ID that does not exist). Enforced by FOREIGN KEY constraints.",
                              "3. Domain Integrity: Restricts valid values, formats, and ranges for a specific column. Enforced by NOT NULL, CHECK, DEFAULT, and DATA TYPE definitions."
                        ],
                        "table": {
                              "headers": [
                                    "Constraint Type",
                                    "Integrity Level",
                                    "Core Function / Rule",
                                    "Automatically Creates Index?"
                              ],
                              "rows": [
                                    [
                                          "PRIMARY KEY",
                                          "Entity Integrity",
                                          "Uniquely identifies each row; Implies NOT NULL + UNIQUE",
                                          "YES (Clustered or B-Tree Index)"
                                    ],
                                    [
                                          "UNIQUE",
                                          "Entity Integrity",
                                          "Prevents duplicate values; Allows NULLs under ANSI rules",
                                          "YES (Unique B-Tree Index)"
                                    ],
                                    [
                                          "FOREIGN KEY",
                                          "Referential Integrity",
                                          "Enforces parent-child table key matching & cascading actions",
                                          "NO (Requires explicit index!)"
                                    ],
                                    [
                                          "NOT NULL",
                                          "Domain Integrity",
                                          "Forbids missing or undefined NULL entries",
                                          "NO"
                                    ],
                                    [
                                          "CHECK",
                                          "Domain Integrity",
                                          "Enforces custom boolean logic expressions (e.g. price > 0)",
                                          "NO"
                                    ],
                                    [
                                          "DEFAULT",
                                          "Domain Integrity",
                                          "Supplies fallback values when columns are omitted during INSERT",
                                          "NO"
                                    ]
                              ]
                        }
                  },
                  {
                        "heading": "2. PRIMARY KEY & UNIQUE Constraints",
                        "text": "Entity integrity requires that rows can be uniquely identified and retrieved without ambiguity:",
                        "bulletPoints": [
                              "PRIMARY KEY Constraints:",
                              "• A table can have at most ONE Primary Key.",
                              "• Implicity enforces `NOT NULL` and `UNIQUE` on all key columns.",
                              "• Single-Column Key: Usually an auto-incrementing integer (`BIGINT IDENTITY`) or a 128-bit `UUID`.",
                              "• Composite Primary Key: Composed of two or more columns combined (e.g. `PRIMARY KEY (order_id, product_id)` in an `order_items` junction table).",
                              "UNIQUE Constraints:",
                              "• A table can have MULTIPLE Unique constraints.",
                              "• Prevents duplicate non-null entries (e.g. `email VARCHAR(255) UNIQUE`).",
                              "• ANSI NULL Rule: Standard SQL allows multiple `NULL` values in a UNIQUE column because `NULL != NULL` in relational logic. (Note: Microsoft SQL Server restricts UNIQUE columns to a single NULL unless filtered indexes are used)."
                        ]
                  },
                  {
                        "heading": "3. FOREIGN KEY Constraints & Referential Cascading Actions",
                        "text": "FOREIGN KEY constraints establish logical parent-child links between tables. When a parent row is modified or deleted, the database engine enforces referential actions on related child records:",
                        "table": {
                              "headers": [
                                    "Cascading Option",
                                    "ON DELETE Behavior",
                                    "ON UPDATE Behavior",
                                    "Recommended Enterprise Use Case"
                              ],
                              "rows": [
                                    [
                                          "RESTRICT / NO ACTION",
                                          "Blocks parent deletion if child records exist (Throws Error)",
                                          "Blocks parent key change if child records exist",
                                          "Default setting; protects critical historical audit data"
                                    ],
                                    [
                                          "CASCADE",
                                          "Automatically deletes all child records when parent is deleted",
                                          "Automatically updates child foreign keys to match parent key",
                                          "Junction tables, invoice line items, order line items"
                                    ],
                                    [
                                          "SET NULL",
                                          "Sets child foreign key column to NULL when parent is deleted",
                                          "Sets child foreign key column to NULL when parent key updates",
                                          "Nullable ownership (e.g. assigning task to deleted employee)"
                                    ],
                                    [
                                          "SET DEFAULT",
                                          "Sets child foreign key to column DEFAULT value upon parent delete",
                                          "Sets child foreign key to column DEFAULT value upon parent update",
                                          "Fallback category assignments (e.g. reassigning to 'General' category)"
                                    ]
                              ]
                        },
                        "bulletPoints": [
                              "Crucial Foreign Key Performance Rule: Relational database engines DO NOT automatically create indexes on FOREIGN KEY columns! You MUST explicitly create a B-Tree index on foreign key columns (e.g. `CREATE INDEX idx_orders_customer ON orders(customer_id);`) to prevent full table scans and severe lock escalation during JOINs and parent DELETE operations."
                        ]
                  },
                  {
                        "heading": "4. Domain Integrity: CHECK, NOT NULL & DEFAULT Constraints",
                        "text": "Domain constraints enforce business validation rules directly inside the storage engine:",
                        "bulletPoints": [
                              "NOT NULL: Guarantees that a column cannot store missing or undefined values.",
                              "DEFAULT: Supplies an automatic fallback value when an INSERT statement omits the column (`DEFAULT 'Pending'`, `DEFAULT CURRENT_TIMESTAMP`).",
                              "CHECK Constraints: Evaluates a boolean expression on every INSERT or UPDATE operation. If the expression evaluates to FALSE, the transaction aborts with a constraint violation error:",
                              "• Single-Column Check: `salary NUMERIC(10,2) CHECK (salary >= 0)`",
                              "• Pattern Matching Check: `email VARCHAR(255) CHECK (email LIKE '%@%.%')`",
                              "• Multi-Column Cross-Field Check: `CHECK (end_date >= start_date)` (Enforces that event end dates cannot precede start dates)."
                        ]
                  },
                  {
                        "heading": "5. Constraint Management & Deferred Transaction Validation",
                        "text": "In high-throughput enterprise environments, constraints must be added or managed without locking tables or breaking complex transactions:",
                        "bulletPoints": [
                              "Named Constraints Syntax: Always assign explicit, descriptive names to constraints (e.g. `CONSTRAINT fk_orders_customers FOREIGN KEY (customer_id) REFERENCES customers(customer_id)`). Named constraints ensure clear debugging error messages and allow clean dropping via `ALTER TABLE orders DROP CONSTRAINT fk_orders_customers;`.",
                              "Deferred Constraint Validation (DEFERRABLE):",
                              "• Standard constraints are evaluated immediately after every individual SQL statement.",
                              "• `DEFERRABLE INITIALLY DEFERRED` instructs the engine to delay foreign key validation until the final `COMMIT` statement of a transaction.",
                              "• Critical for circular table dependencies (e.g., Table A references Table B, and Table B references Table A) or bulk ETL data loading.",
                              "Zero-Lock Migration Pattern (NOT VALID): In PostgreSQL, adding a constraint to a table with 50 million rows can lock the table for minutes while validating existing data. The `NOT VALID` pattern solves this:",
                              "• Step 1: `ALTER TABLE orders ADD CONSTRAINT fk_cust FOREIGN KEY (customer_id) REFERENCES customers(customer_id) NOT VALID;` (Acquires a split-second lock, validating new rows only).",
                              "• Step 2: `ALTER TABLE orders VALIDATE CONSTRAINT fk_cust;` (Scans existing data in the background without blocking concurrent writes!)."
                        ]
                  }
            ],
            "codeExamples": [
                  {
                        "title": "Multi-Table E-Commerce Schema with Composite Keys & Referential Cascading",
                        "code": "-- 1. Parent Customers Table\nCREATE TABLE customers (\n    customer_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,\n    email VARCHAR(255) CONSTRAINT uq_customers_email UNIQUE NOT NULL,\n    first_name VARCHAR(50) NOT NULL,\n    last_name VARCHAR(50) NOT NULL,\n    account_status VARCHAR(20) DEFAULT 'Active' \n        CONSTRAINT chk_customer_status CHECK (account_status IN ('Active', 'Suspended', 'Closed')),\n    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP\n);\n\n-- 2. Parent Orders Table referencing Customers\nCREATE TABLE orders (\n    order_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,\n    -- Named Foreign Key with RESTRICT rule (cannot delete customer if active orders exist!)\n    customer_id INT NOT NULL,\n    order_date TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,\n    order_status VARCHAR(30) DEFAULT 'Pending',\n    \n    CONSTRAINT fk_orders_customers \n        FOREIGN KEY (customer_id) REFERENCES customers(customer_id) \n        ON DELETE RESTRICT ON UPDATE CASCADE\n);\n\n-- Essential Index on Foreign Key column to optimize JOINs and parent deletions\nCREATE INDEX idx_orders_customer_id ON orders(customer_id);\n\n-- 3. Child Order Line Items Table with Composite Primary Key & CASCADE deletion rule\nCREATE TABLE order_items (\n    order_id BIGINT NOT NULL,\n    line_item_id INT NOT NULL,\n    product_name VARCHAR(100) NOT NULL,\n    unit_price NUMERIC(10, 2) NOT NULL CONSTRAINT chk_item_price CHECK (unit_price > 0),\n    quantity INT NOT NULL CONSTRAINT chk_item_qty CHECK (quantity > 0),\n    \n    -- Composite Primary Key combining order_id and line_item_id\n    CONSTRAINT pk_order_items PRIMARY KEY (order_id, line_item_id),\n    \n    -- Named Foreign Key with CASCADE rule (deleting order automatically deletes line items!)\n    CONSTRAINT fk_items_orders \n        FOREIGN KEY (order_id) REFERENCES orders(order_id) \n        ON DELETE CASCADE\n);",
                        "explanation": "Demonstrates Entity Integrity (Primary Keys & Composite Keys), Referential Integrity with ON DELETE RESTRICT and CASCADE rules, B-Tree FK indexing, and Domain Integrity CHECK constraints."
                  },
                  {
                        "title": "Deferred Constraints & Zero-Lock NOT VALID Production Migrations",
                        "code": "-- 1. Deferred Constraint Validation inside a Transaction Block\nCREATE TABLE authors (\n    author_id INT PRIMARY KEY,\n    name VARCHAR(100) NOT NULL,\n    featured_book_id INT -- Circular reference to books table\n);\n\nCREATE TABLE books (\n    book_id INT PRIMARY KEY,\n    title VARCHAR(150) NOT NULL,\n    author_id INT NOT NULL\n);\n\n-- Add Deferrable Foreign Key constraint to solve circular insertion dependency\nALTER TABLE authors \nADD CONSTRAINT fk_authors_books \nFOREIGN KEY (featured_book_id) REFERENCES books(book_id)\nDEFERRABLE INITIALLY DEFERRED;\n\nBEGIN TRANSACTION;\n-- Deferred validation allows inserting author before book exists within the same transaction!\nINSERT INTO authors (author_id, name, featured_book_id) VALUES (1, 'Dr. Edgar Codd', 101);\nINSERT INTO books (book_id, title, author_id) VALUES (101, 'Relational Database Model', 1);\nCOMMIT; -- Engine validates foreign key integrity at COMMIT time!\n\n-- 2. Zero-Lock PostgreSQL Migration Pattern for 10M Row Tables\n-- Step 1: Add constraint without validating existing rows (Split-second lock!)\nALTER TABLE books \nADD CONSTRAINT fk_books_authors \nFOREIGN KEY (author_id) REFERENCES authors(author_id) \nNOT VALID;\n\n-- Step 2: Validate existing rows in background without blocking production reads/writes\nALTER TABLE books VALIDATE CONSTRAINT fk_books_authors;",
                        "explanation": "Demonstrates solving circular key dependencies with DEFERRABLE INITIALLY DEFERRED and running zero-downtime production migrations using NOT VALID and VALIDATE CONSTRAINT."
                  }
            ],
            "bestPractices": [
                  "Always assign explicit names to constraints (e.g. CONSTRAINT fk_orders_customers) for clear error logging and easy ALTER TABLE maintenance.",
                  "Always explicitly create a B-Tree index on FOREIGN KEY columns; relational engines do NOT index foreign keys automatically.",
                  "Use ON DELETE RESTRICT (the default) for critical historical records like invoices and customer profiles to prevent accidental deletion.",
                  "Use ON DELETE CASCADE only for tightly coupled child entity tables like order line items or shopping cart items.",
                  "Utilize the `NOT VALID` and `VALIDATE CONSTRAINT` two-step pattern when adding constraints to massive production tables to prevent lock contention."
            ],
            "commonMistakes": [
                  "Assuming relational engines automatically index Foreign Key columns, leading to slow JOIN performance and severe table lock escalation.",
                  "Using `ON DELETE CASCADE` on critical parent tables, accidentally wiping out thousands of historical orders when a customer record is deleted.",
                  "Forgetting that standard ANSI SQL allows multiple `NULL` values in a `UNIQUE` column because `NULL != NULL` in relational logic.",
                  "Adding un-deferred circular foreign keys between two tables, making it impossible to insert initial seed data into either table."
            ],
            "practiceExercise": {
                  "title": "Referential Integrity & Cascading Action Challenge",
                  "problem": "Perform the following two tasks:\n1. Choose the correct foreign key ON DELETE cascading action (RESTRICT, CASCADE, or SET NULL) for each scenario:\n   a. Deleting a `Customer` record when related `Orders` exist.\n   b. Deleting an `Order` record when related `Order_Line_Items` exist.\n   c. Deleting an `Employee` record assigned as a `Manager` to other employees.\n\n2. Write a SQL DDL statement to create a table `event_schedules` with:\n   a. `schedule_id` (BIGINT PRIMARY KEY IDENTITY)\n   b. `event_name` (VARCHAR 100 NOT NULL)\n   c. `start_time` (TIMESTAMPTZ NOT NULL)\n   d. `end_time` (TIMESTAMPTZ NOT NULL)\n   e. A multi-column CHECK constraint ensuring `end_time > start_time`.",
                  "solutionCode": "-- Exercise 1 Cascading Action Answers:\n-- a. Deleting Customer with Orders      -> RESTRICT / NO ACTION (Prevents deleting customer with transaction history)\n-- b. Deleting Order with Order Line Items-> CASCADE (Automatically cleans up orphan line items)\n-- c. Deleting Employee who is Manager    -> SET NULL (Clears manager reference without deleting managed employees)\n\n-- Exercise 2 Table Creation Answer:\nCREATE TABLE event_schedules (\n    schedule_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,\n    event_name VARCHAR(100) NOT NULL,\n    start_time TIMESTAMPTZ NOT NULL,\n    end_time TIMESTAMPTZ NOT NULL,\n    \n    -- Multi-column CHECK constraint enforcing temporal logic\n    CONSTRAINT chk_event_times CHECK (end_time > start_time)\n);"
            },
            "keyTakeaways": [
                  "Relational constraints enforce Entity Integrity (PRIMARY KEY, UNIQUE), Referential Integrity (FOREIGN KEY), and Domain Integrity (NOT NULL, CHECK, DEFAULT).",
                  "FOREIGN KEY columns require explicit B-Tree indexing to ensure high-speed JOINs and prevent parent deletion locks.",
                  "Use `ON DELETE RESTRICT` for historical audit data and `ON DELETE CASCADE` for dependent child line-item records.",
                  "CHECK constraints enforce custom multi-column business logic directly within the storage engine.",
                  "`DEFERRABLE INITIALLY DEFERRED` delays foreign key checking until transaction `COMMIT`, solving circular table insertion dependencies."
            ]
      }
},

      {
      "id": "sql-mod-5",
      "title": "Module 05 — DML: INSERT, UPDATE & DELETE",
      "description": "Master Data Manipulation Language (DML): Single & Bulk Batch INSERT INTO, RETURNING clause, INSERT INTO ... SELECT, WHERE Safety Controls in UPDATE & DELETE, UPDATE ... JOIN, Hard Deletes vs Soft Deletes (is_deleted, partial indexes), and Atomic UPSERT operations (INSERT ... ON CONFLICT DO UPDATE, MERGE INTO).",
      "completed": false,
      "order": 5,
      "published": true,
      "readingMaterial": {
            "introduction": "Welcome to Module 5! Data Manipulation Language (DML) encompasses the core SQL commands used to insert, modify, update, and delete data records stored inside relational database tables. While DDL defines the empty schema containers, DML manages the live data state of the application. DML operations acquire Row-Level Exclusive Locks (X-Locks) and generate Write-Ahead Logging (WAL) entries to guarantee ACID transaction safety. Mastering DML statements—including bulk insertions, multi-table updates, soft delete patterns, and atomic UPSERT operations—is essential for building high-concurrency backend web applications and ETL data pipelines.",
            "objectives": [
                  "Master single-row and high-performance multi-row batch INSERT INTO statements",
                  "Retrieve auto-generated primary keys instantly using the RETURNING clause",
                  "Execute bulk data ingestion using INSERT INTO ... SELECT from staging tables",
                  "Master UPDATE statement syntax, multi-column expressions, and WHERE safety safeguards",
                  "Perform multi-table updates using UPDATE ... FROM / JOIN queries",
                  "Compare Hard Deletes (DELETE FROM) versus Soft Deletes (is_deleted, deleted_at timestamps)",
                  "Implement Partial Unique Indexes to handle soft-deleted record re-registration",
                  "Master Atomic UPSERT operations using PostgreSQL INSERT ... ON CONFLICT (DO UPDATE / DO NOTHING)",
                  "Execute ANSI standard MERGE INTO statements for data warehouse synchronization"
            ],
            "sections": [
                  {
                        "heading": "1. Data Insertion (INSERT INTO) & Bulk Data Pipeline Operations",
                        "text": "The `INSERT INTO` command adds new data rows to a table. In high-throughput enterprise applications, how you structure INSERT statements dramatically impacts database I/O performance:",
                        "bulletPoints": [
                              "Single-Row INSERT: Inserts one row per network round-trip. (Anti-pattern when inserting thousands of rows due to network latency).",
                              "Multi-Row Batch INSERT: Combines hundreds of rows into a single SQL statement: `INSERT INTO users (name, email) VALUES ('Alice', 'a@test.com'), ('Bob', 'b@test.com'), ('Carol', 'c@test.com');`. Reduces network overhead by up to 90%!",
                              "The RETURNING Clause (PostgreSQL / Oracle / SQL Server OUTPUT):",
                              "• By default, `INSERT` returns only the count of inserted rows (e.g., `INSERT 0 1`).",
                              "• Adding `RETURNING id, created_at` instructs the engine to return the auto-generated primary key and default values instantly without requiring a second `SELECT` query.",
                              "Bulk Copying with INSERT INTO ... SELECT:",
                              "• Ingests filtered data streams directly from a source table into a target table: `INSERT INTO archived_orders (order_id, total) SELECT id, amount FROM orders WHERE status = 'Completed';`"
                        ],
                        "table": {
                              "headers": [
                                    "Insertion Pattern",
                                    "Syntax Pattern",
                                    "Network Round-Trips",
                                    "Best Application Scenario"
                              ],
                              "rows": [
                                    [
                                          "Single-Row Insert",
                                          "INSERT INTO t (c) VALUES (v1);",
                                          "1 round-trip per row",
                                          "Single user signup or form submission"
                                    ],
                                    [
                                          "Multi-Row Batch Insert",
                                          "INSERT INTO t (c) VALUES (v1), (v2)...;",
                                          "1 round-trip per batch",
                                          "Bulk CSV upload, batch event logging"
                                    ],
                                    [
                                          "INSERT with RETURNING",
                                          "INSERT INTO t (c) VALUES (v) RETURNING id;",
                                          "1 round-trip total",
                                          "API creating child records needing new Parent ID"
                                    ],
                                    [
                                          "INSERT INTO ... SELECT",
                                          "INSERT INTO target SELECT * FROM source;",
                                          "0 network round-trips (Server internal)",
                                          "ETL staging, database archiving pipelines"
                                    ],
                                    [
                                          "COPY / Bulk Loader",
                                          "COPY t FROM '/path/file.csv' WITH CSV;",
                                          "Internal direct file read",
                                          "Importing gigabytes of raw data files"
                                    ]
                              ]
                        }
                  },
                  {
                        "heading": "2. Data Modification (UPDATE) & WHERE Safety Safeguards",
                        "text": "The `UPDATE` command modifies existing column values in table rows matching specific filter criteria:",
                        "bulletPoints": [
                              "CATASTROPHIC ACCIDENT WARNING: Executing `UPDATE users SET status = 'Inactive';` WITHOUT a `WHERE` clause modifies EVERY SINGLE ROW in the table! Always test `WHERE` clause filters using a `SELECT` statement first before executing an `UPDATE`.",
                              "Multi-Column Updates & Arithmetic Expressions: Modify multiple columns simultaneously using calculated expressions:",
                              "• `UPDATE products SET unit_price = unit_price * 1.10, updated_at = CURRENT_TIMESTAMP WHERE category_id = 4;`",
                              "Multi-Table Updates (UPDATE ... FROM / JOIN): Update target table rows based on join matches in secondary reference tables:",
                              "• `UPDATE employees e SET salary = salary + 5000 FROM departments d WHERE e.department_id = d.id AND d.name = 'Engineering';`",
                              "The RETURNING Clause on UPDATE: `UPDATE accounts SET balance = balance - 100 WHERE id = 5 RETURNING id, balance;` returns the updated row values instantly."
                        ]
                  },
                  {
                        "heading": "3. Hard Deletes vs Soft Deletes",
                        "text": "Removing data records from a relational database requires choosing between permanent destruction and logical archiving:",
                        "table": {
                              "headers": [
                                    "Deletion Strategy",
                                    "SQL Implementation Pattern",
                                    "Physical Heap Impact",
                                    "Data Recoverability"
                              ],
                              "rows": [
                                    [
                                          "Hard Delete (DELETE)",
                                          "DELETE FROM users WHERE user_id = 42;",
                                          "Removes row tuple permanently from disk page heap",
                                          "NO recovery (Requires restoring database backup)"
                                    ],
                                    [
                                          "Soft Delete (UPDATE)",
                                          "UPDATE users SET is_deleted = TRUE, deleted_at = CURRENT_TIMESTAMP WHERE user_id = 42;",
                                          "Retains row tuple on disk; updates boolean status flag",
                                          "INSTANT recovery (`UPDATE users SET is_deleted = FALSE`)"
                                    ]
                              ]
                        },
                        "bulletPoints": [
                              "Why Enterprises Prefer Soft Deletes:",
                              "1. Audit & Regulatory Compliance: Financial, healthcare, and security standards require audit trails of all user accounts and transactions.",
                              "2. Accidental Deletion Recovery: Reversing an accidental deletion is a simple `UPDATE` query.",
                              "3. Referential Integrity Protection: Prevents foreign key constraint violation errors when deleting parent rows referenced by historical child orders.",
                              "Handling UNIQUE Constraints with Soft Deletes (Partial Indexes):",
                              "• Problem: If a soft-deleted user has `email = 'alex@test.com'`, a new user attempting to register with `'alex@test.com'` will crash due to the `UNIQUE` email constraint!",
                              "• Solution: Use a Partial Unique Index in PostgreSQL: `CREATE UNIQUE INDEX uq_active_users_email ON users(email) WHERE is_deleted = FALSE;` This allows new active users to register while preserving soft-deleted historical rows!"
                        ]
                  },
                  {
                        "heading": "4. Atomic UPSERT Mechanics (INSERT ... ON CONFLICT / MERGE)",
                        "text": "In concurrent multi-threaded web applications, checking if a record exists with a `SELECT` and then issuing an `INSERT` or `UPDATE` causes severe Race Conditions. An UPSERT ('Update or Insert') performs this atomically in a single statement:",
                        "bulletPoints": [
                              "PostgreSQL UPSERT (INSERT ... ON CONFLICT):",
                              "• ON CONFLICT DO UPDATE (Update existing record):",
                              "  `INSERT INTO user_stats (user_id, login_count) VALUES (42, 1) ON CONFLICT (user_id) DO UPDATE SET login_count = user_stats.login_count + EXCLUDED.login_count;`",
                              "• Note: `EXCLUDED` is a special pseudo-table referencing the values attempted in the `INSERT` clause.",
                              "• ON CONFLICT DO NOTHING (Idempotent write operation):",
                              "  `INSERT INTO newsletter_subscribers (email) VALUES ('user@test.com') ON CONFLICT (email) DO NOTHING;` (Silently skips insertion if email already exists, preventing duplicate key errors).",
                              "ANSI Standard MERGE INTO (SQL Server, Oracle, PostgreSQL 15+):",
                              "• Synchronizes a target table with a source dataset based on join key matching:",
                              "  `MERGE INTO inventory t USING staging_inventory s ON (t.product_id = s.product_id) WHEN MATCHED THEN UPDATE SET t.stock = t.stock + s.stock WHEN NOT MATCHED THEN INSERT (product_id, stock) VALUES (s.product_id, s.stock);`"
                        ]
                  }
            ],
            "codeExamples": [
                  {
                        "title": "Bulk Ingestion with RETURNING, Archive SELECT & UPDATE FROM",
                        "code": "-- 1. Single batch INSERT returning auto-generated Primary Key IDs instantly\nINSERT INTO products (product_name, category, unit_price, stock_quantity)\nVALUES \n    ('Mechanical Keyboard', 'Electronics', 120.00, 50),\n    ('Ergonomic Mouse', 'Electronics', 65.50, 100),\n    ('USB-C Hub', 'Electronics', 45.00, 200)\nRETURNING product_id, product_name, created_at;\n\n-- 2. Bulk Copy Archiving using INSERT INTO ... SELECT\nINSERT INTO archived_products (product_id, product_name, unit_price, archived_at)\nSELECT product_id, product_name, unit_price, CURRENT_TIMESTAMP\nFROM products\nWHERE stock_quantity = 0;\n\n-- 3. Multi-table UPDATE using UPDATE ... FROM join\nUPDATE products p\nSET unit_price = p.unit_price * 0.85, -- Apply 15% clearance discount\n    updated_at = CURRENT_TIMESTAMP\nFROM categories c\nWHERE p.category_id = c.category_id\n  AND c.category_name = 'Clearance Items'\nRETURNING p.product_id, p.product_name, p.unit_price;",
                        "explanation": "Demonstrates batch insertion with immediate key retrieval via RETURNING, bulk archiving with INSERT INTO SELECT, and cross-table updates with UPDATE FROM."
                  },
                  {
                        "title": "Atomic UPSERT (ON CONFLICT), Soft Delete & Partial Unique Index",
                        "code": "-- 1. Create table with Soft Delete flag and Partial Unique Index\nCREATE TABLE user_accounts (\n    user_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,\n    username VARCHAR(50) NOT NULL,\n    email VARCHAR(255) NOT NULL,\n    is_deleted BOOLEAN NOT NULL DEFAULT FALSE,\n    deleted_at TIMESTAMPTZ NULL\n);\n\n-- Partial Unique Index: Enforces unique email ONLY among active non-deleted users!\nCREATE UNIQUE INDEX uq_active_user_email \nON user_accounts(email) \nWHERE is_deleted = FALSE;\n\n-- 2. Soft Delete Execution (Preserves record for compliance)\nUPDATE user_accounts\nSET is_deleted = TRUE, \n    deleted_at = CURRENT_TIMESTAMP\nWHERE user_id = 104;\n\n-- 3. Atomic UPSERT (Insert new user visit or update existing visit count)\nCREATE TABLE user_page_views (\n    user_id INT PRIMARY KEY,\n    view_count INT NOT NULL DEFAULT 1,\n    last_visit TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP\n);\n\nINSERT INTO user_page_views (user_id, view_count, last_visit)\nVALUES (104, 1, CURRENT_TIMESTAMP)\nON CONFLICT (user_id) \nDO UPDATE SET \n    view_count = user_page_views.view_count + 1,\n    last_visit = EXCLUDED.last_visit\nRETURNING user_id, view_count, last_visit;",
                        "explanation": "Demonstrates soft deletes with partial unique indexes, and atomic UPSERT handling using INSERT ... ON CONFLICT DO UPDATE SET EXCLUDED."
                  }
            ],
            "bestPractices": [
                  "Always test `WHERE` clause filters using a `SELECT` statement before executing an `UPDATE` or `DELETE` statement.",
                  "Use multi-row batch `INSERT INTO` (or `COPY`) instead of looping single-row inserts to eliminate network latency.",
                  "Use `RETURNING id` on `INSERT` operations to obtain newly generated primary keys without extra database queries.",
                  "Prefer Soft Deletes (`is_deleted = TRUE`) over Hard Deletes (`DELETE FROM`) for core domain entities to preserve audit compliance.",
                  "Combine Soft Deletes with Partial Unique Indexes (`WHERE is_deleted = FALSE`) to allow re-registration of historical unique identifiers.",
                  "Use atomic `UPSERT` (`ON CONFLICT DO UPDATE`) to prevent concurrent race conditions in high-volume API endpoints."
            ],
            "commonMistakes": [
                  "Executing `UPDATE table SET column = val;` without a `WHERE` clause, accidentally overwriting every row in the production table.",
                  "Executing `DELETE FROM table;` to clear data, generating massive WAL log overhead and keeping disk page heaps allocated.",
                  "Issuing a `SELECT` followed by an `INSERT`/`UPDATE` in application code instead of using an atomic `UPSERT`, causing duplicate key race condition crashes.",
                  "Forgetting to create a Partial Unique Index when implementing soft deletes, causing duplicate key conflicts when users re-register."
            ],
            "practiceExercise": {
                  "title": "DML Operations & Atomic UPSERT Challenge",
                  "problem": "Perform the following two tasks:\n1. Compare Hard Delete (`DELETE FROM`) versus Soft Delete (`UPDATE ... SET is_deleted = TRUE`) across three dimensions:\n   a. Data recoverability\n   b. Regulatory audit compliance\n   c. Impact on foreign key referential integrity\n\n2. Write a SQL statement that performs an atomic UPSERT on a `product_stock` table (`product_id` PRIMARY KEY, `quantity` INT):\n   a. Attempts to insert `product_id = 501` with `quantity = 10`.\n   b. If `product_id` 501 already exists, adds 10 to the existing `quantity`.\n   c. Returns the updated `product_id` and new `quantity` using the `RETURNING` clause.",
                  "solutionCode": "-- Exercise 1 Comparison Answers:\n-- a. Recoverability : Hard Delete requires restoring database backups. Soft Delete recovers instantly with an UPDATE query.\n-- b. Audit Compliance: Hard Delete destroys audit logs. Soft Delete preserves full historic records for compliance.\n-- c. FK Integrity   : Hard Delete causes FK constraint errors or cascades. Soft Delete maintains referential integrity intact.\n\n-- Exercise 2 Atomic UPSERT Solution:\nINSERT INTO product_stock (product_id, quantity)\nVALUES (501, 10)\nON CONFLICT (product_id) \nDO UPDATE SET quantity = product_stock.quantity + EXCLUDED.quantity\nRETURNING product_id, quantity;"
            },
            "keyTakeaways": [
                  "DML statements (INSERT, UPDATE, DELETE) mutate live table state, acquire Exclusive Locks (X-Locks), and record WAL logs.",
                  "Use `RETURNING id` on INSERT/UPDATE statements to retrieve generated primary keys in a single network round-trip.",
                  "Soft Deletes (`is_deleted = TRUE`) preserve historical audit compliance and prevent foreign key breakage; pair with Partial Unique Indexes.",
                  "Atomic UPSERT (`INSERT ... ON CONFLICT DO UPDATE`) eliminates application-level race conditions during concurrent writes.",
                  "Always verify `WHERE` clause filters prior to executing `UPDATE` or `DELETE` statements to avoid overwriting production data."
            ]
      }
},

      {
      "id": "sql-mod-6",
      "title": "Module 06 — SELECT Statement: Retrieving Data",
      "description": "Master Data Query Language (DQL): Declarative Querying, the 8-step Logical Query Processing Order (FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> DISTINCT -> ORDER BY -> LIMIT), Selective Column Projection vs SELECT * Anti-Pattern, Computed Arithmetic Fields, Division-by-Zero Protection (NULLIF), String Concatenation (||, CONCAT), Constant Literals, Table Aliases, and Index-Only Scan Optimization.",
      "completed": false,
      "order": 6,
      "published": true,
      "readingMaterial": {
            "introduction": "Welcome to Module 6! The SELECT statement is the foundational command of Data Query Language (DQL). It enables software engineers, database architects, and data analysts to extract, project, compute, transform, and format structured data streams stored within database tables. SQL is a declarative language—meaning you specify *what* data you require, while the database engine's Cost-Based Optimizer (CBO) determines *how* to execute the retrieval using index scans, table heap scans, or hash joins. Mastering SELECT statement projection, logical processing order, and expression evaluation is critical for writing performant, enterprise-grade database queries.",
            "objectives": [
                  "Master the Declarative Nature of SQL: Distinguishing query intent from physical execution strategy",
                  "Deconstruct the 8-Step Logical Query Processing Order of SQL clauses",
                  "Understand why SELECT column aliases cannot be referenced in WHERE or GROUP BY clauses",
                  "Evaluate Selective Column Projection vs the severe SELECT * production anti-pattern",
                  "Perform Mathematical Calculations and Computed Field Projections (+, -, *, /, %)",
                  "Prevent Division-by-Zero Runtime Crashes using NULLIF(denominator, 0)",
                  "Concatenate String Columns using standard || operators, CONCAT(), and CONCAT_WS()",
                  "Project Constant Literals and assign human-readable Column & Table Aliases (AS)",
                  "Optimize Query Performance using Index-Only Scans and RAM Buffer Management"
            ],
            "sections": [
                  {
                        "heading": "1. The Declarative Model & The 8-Step Logical Query Execution Order",
                        "text": "Although developers write `SELECT` first at the top of a SQL query, the database engine processes clauses in a completely different logical order. Understanding this execution pipeline explains key SQL syntax rules and scoping constraints:",
                        "bulletPoints": [
                              "Why WHERE Cannot See SELECT Aliases: Because step 2 (`WHERE`) runs BEFORE step 5 (`SELECT`), column aliases created in `SELECT` do not exist yet when `WHERE` is evaluated! Attempting to write `WHERE annual_salary > 50000` (where `annual_salary` is an alias created in SELECT) results in a `Column Does Not Exist` error.",
                              "Why ORDER BY CAN See SELECT Aliases: Because step 7 (`ORDER BY`) runs AFTER step 5 (`SELECT`), `ORDER BY` can freely sort results using aliases created in `SELECT`."
                        ],
                        "table": {
                              "headers": [
                                    "Execution Order",
                                    "SQL Clause",
                                    "Logical Function",
                                    "Can Reference SELECT Aliases?"
                              ],
                              "rows": [
                                    [
                                          "Step 1",
                                          "FROM / JOIN",
                                          "Gathers source tables and resolves join keys",
                                          "NO"
                                    ],
                                    [
                                          "Step 2",
                                          "WHERE",
                                          "Filters raw data rows using boolean predicates",
                                          "NO"
                                    ],
                                    [
                                          "Step 3",
                                          "GROUP BY",
                                          "Groups rows into categorical buckets",
                                          "NO"
                                    ],
                                    [
                                          "Step 4",
                                          "HAVING",
                                          "Filters aggregate group statistics",
                                          "NO"
                                    ],
                                    [
                                          "Step 5",
                                          "SELECT",
                                          "Projects columns and evaluates computed expressions",
                                          "N/A (Defines Aliases)"
                                    ],
                                    [
                                          "Step 6",
                                          "DISTINCT",
                                          "Removes duplicate output row tuples",
                                          "YES"
                                    ],
                                    [
                                          "Step 7",
                                          "ORDER BY",
                                          "Sorts final result set rows",
                                          "YES"
                                    ],
                                    [
                                          "Step 8",
                                          "LIMIT / OFFSET",
                                          "Restricts total rows returned to client",
                                          "YES"
                                    ]
                              ]
                        }
                  },
                  {
                        "heading": "2. Column Projection vs The SELECT * Production Anti-Pattern",
                        "text": "Column projection specifies which fields are retrieved from physical disk storage. Using `SELECT *` fetches every single column defined on a table:",
                        "table": {
                              "headers": [
                                    "Query Projection Strategy",
                                    "Disk & RAM Impact",
                                    "Network Latency",
                                    "Production Resilience"
                              ],
                              "rows": [
                                    [
                                          "SELECT *",
                                          "High (Reads entire table heap pages into RAM)",
                                          "High (Transfers unneeded text/BLOB bytes)",
                                          "Fragile (Breaks when schema columns change)"
                                    ],
                                    [
                                          "Explicit Projection (SELECT col1, col2)",
                                          "Low (Reads only required columns; enables Index-Only Scans)",
                                          "Low (Transfers minimal required payload bytes)",
                                          "Resilient (Un-affected by table schema alterations)"
                                    ]
                              ]
                        },
                        "bulletPoints": [
                              "Why SELECT * Is a Severe Enterprise Anti-Pattern:",
                              "1. Destroys Index-Only Scans: If a B-Tree index contains `(id, email)`, a query requesting `SELECT id, email` is served instantly from index memory. `SELECT *` forces the engine to perform expensive disk heap lookups for all other unindexed columns.",
                              "2. Inflates Network Bandwidth & Latency: Fetching unneeded `TEXT`, `JSONB`, or `BYTEA` columns increases network payload sizes by orders of magnitude.",
                              "3. Breaks Backend Application Code: If a migration adds or re-orders columns, positional code relying on `SELECT *` will parse incorrect data fields."
                        ]
                  },
                  {
                        "heading": "3. Computed Fields, Arithmetic Math & Division-by-Zero Protection",
                        "text": "SELECT projections can perform dynamic mathematical calculations directly on column values:",
                        "bulletPoints": [
                              "Arithmetic Math Operators: Use `+`, `-`, `*`, `/`, and `%` on numeric columns (e.g., `unit_price * quantity AS subtotal`).",
                              "Division-by-Zero Protection (NULLIF):",
                              "• Dividing by zero causes relational query execution to crash with a `division by zero` error.",
                              "• Solution: Wrap denominators in `NULLIF(denominator, 0)`. The `NULLIF(a, b)` function returns `NULL` if `a == b`, preventing crashes because any number divided by `NULL` safely yields `NULL` instead of an error!",
                              "• Example: `SELECT total_revenue / NULLIF(total_orders, 0) AS avg_order_value;`",
                              "Constant Literal Projections: Project static values, strings, or current timestamps alongside column data (e.g., `SELECT 'USD' AS currency_code, 0.08 AS sales_tax_rate`)."
                        ]
                  },
                  {
                        "heading": "4. String Concatenation & Formatting",
                        "text": "Combining textual columns is a common requirement for generating display names, addresses, and API response streams:",
                        "bulletPoints": [
                              "ANSI Standard Concatenation Operator (||): Combines strings directly: `first_name || ' ' || last_name AS full_name`. Note: If any operand is `NULL`, standard `||` returns `NULL`.",
                              "CONCAT() Function: Concatenates arguments while converting `NULL` values to empty strings automatically: `CONCAT(first_name, ' ', last_name)`.",
                              "CONCAT_WS() Function (Concatenate With Separator): Formats strings with a specified separator as the first argument, skipping `NULL` entries: `CONCAT_WS(', ', city, state, country)` yields `'New York, NY, USA'`."
                        ]
                  },
                  {
                        "heading": "5. Table Aliases & Index-Only Scan Optimization",
                        "text": "Assigning table aliases simplifies multi-table queries and improves code legibility:",
                        "bulletPoints": [
                              "Table Aliases (AS): Assign short identifiers to tables in the `FROM` clause: `FROM enterprise_employees AS e`. Once defined, prefix all projected columns with the table alias (`e.employee_id`, `e.first_name`) to eliminate column ambiguity errors.",
                              "Index-Only Scan Optimization: When a SELECT query projects ONLY columns present in a B-Tree index, the database engine executes an Index-Only Scan. The engine fetches results directly from high-speed RAM index pages without touching physical disk table heaps!"
                        ]
                  }
            ],
            "codeExamples": [
                  {
                        "title": "Computed Financial Projections, Division-by-Zero Protection & String Formatting",
                        "code": "-- Calculate comprehensive employee compensation metrics with dynamic calculations and safe division\nSELECT \n    e.employee_id,\n    \n    -- String Concatenation using CONCAT_WS\n    CONCAT_WS(' ', e.first_name, e.last_name) AS full_name,\n    \n    e.department,\n    e.salary AS monthly_salary,\n    \n    -- Arithmetic Calculations\n    e.salary * 12 AS annual_gross_salary,\n    (e.salary * 12) * 0.15 AS estimated_tax_deduction,\n    (e.salary * 12) * 0.85 AS net_annual_take_home,\n    \n    -- Division-by-Zero Protection using NULLIF\n    ROUND(e.sales_volume / NULLIF(e.deals_closed, 0), 2) AS avg_deal_size,\n    \n    -- Constant Literal Projection\n    'USD' AS currency\nFROM enterprise_employees AS e\nWHERE e.is_active = TRUE;",
                        "explanation": "Demonstrates table aliases (e), string concatenation with CONCAT_WS, computed financial fields, division-by-zero protection using NULLIF, and constant literal projections."
                  },
                  {
                        "title": "E-Commerce Multi-Item Pricing Projections with Tax & Discounts",
                        "code": "-- Calculate detailed line-item subtotals, discount subtractions, and tax calculations\nSELECT \n    oi.order_id,\n    oi.item_name,\n    oi.unit_price,\n    oi.quantity,\n    \n    -- Computed Subtotal\n    (oi.unit_price * oi.quantity) AS raw_subtotal,\n    \n    -- Computed Discount Amount\n    ROUND((oi.unit_price * oi.quantity) * oi.discount_rate, 2) AS discount_savings,\n    \n    -- Net Total after Discount\n    ROUND((oi.unit_price * oi.quantity) * (1 - oi.discount_rate), 2) AS net_subtotal,\n    \n    -- Grand Total including 8% Sales Tax\n    ROUND(((oi.unit_price * oi.quantity) * (1 - oi.discount_rate)) * 1.08, 2) AS grand_total_with_tax\nFROM order_items AS oi\nWHERE oi.order_id = 10482;",
                        "explanation": "Computes line-item totals, dynamic percentage discounts, and sales tax additions directly inside query projections."
                  }
            ],
            "bestPractices": [
                  "Avoid using `SELECT *` in production code; explicitly specify required columns to enable Index-Only Scans and conserve bandwidth.",
                  "Always use `NULLIF(denominator, 0)` when dividing numeric columns to prevent unexpected runtime `division by zero` crashes.",
                  "Assign short, intuitive table aliases (e.g., `FROM orders AS o`) and prefix all projected columns (`o.order_id`) to prevent ambiguity.",
                  "Remember the 8-step logical execution order: `FROM` runs first, `WHERE` runs second, and `SELECT` runs fifth.",
                  "Use `CONCAT()` or `CONCAT_WS()` instead of `||` when concatenating strings that may contain `NULL` values."
            ],
            "commonMistakes": [
                  "Attempting to reference a `SELECT` column alias inside a `WHERE` or `GROUP BY` clause, causing a `Column Does Not Exist` error.",
                  "Using `SELECT *` in high-volume production APIs, degrading query performance and breaking code when schemas evolve.",
                  "Performing division without `NULLIF`, causing catastrophic production query crashes when zero values occur.",
                  "Using standard `||` string concatenation on nullable columns, causing the entire concatenated result to evaluate to `NULL`."
            ],
            "practiceExercise": {
                  "title": "Logical Execution Order & Expression Projection Challenge",
                  "problem": "Perform the following two tasks:\n1. State whether each of the following 4 SQL clauses can reference a column alias created in the `SELECT` clause, and explain why based on the 8-step execution order:\n   a. WHERE\n   b. GROUP BY\n   c. ORDER BY\n   d. LIMIT\n\n2. Write a SQL SELECT query on a `sales_reps` table returning:\n   a. `rep_id`\n   b. Full name concatenated (`first_name` and `last_name` separated by space)\n   c. `total_revenue` divided by `clients_served` (with protection against division-by-zero), aliased as `revenue_per_client`\n   d. Constant literal string 'Q4-2026' aliased as `reporting_period`.",
                  "solutionCode": "-- Exercise 1 Answers:\n-- a. WHERE    : NO  (WHERE executes in Step 2; SELECT executes later in Step 5)\n-- b. GROUP BY : NO  (GROUP BY executes in Step 3; SELECT executes later in Step 5)\n-- c. ORDER BY : YES (ORDER BY executes in Step 7; AFTER SELECT in Step 5)\n-- d. LIMIT    : YES (LIMIT executes in Step 8; AFTER SELECT in Step 5)\n\n-- Exercise 2 SQL Query Answer:\nSELECT \n    sr.rep_id,\n    CONCAT_WS(' ', sr.first_name, sr.last_name) AS full_name,\n    ROUND(sr.total_revenue / NULLIF(sr.clients_served, 0), 2) AS revenue_per_client,\n    'Q4-2026' AS reporting_period\nFROM sales_reps AS sr;"
            },
            "keyTakeaways": [
                  "SQL is declarative: you specify *what* data to retrieve, while the Cost-Based Optimizer determines *how* to execute the query.",
                  "The 8-Step Execution Order is: FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> DISTINCT -> ORDER BY -> LIMIT.",
                  "`SELECT *` is a severe production anti-pattern that destroys Index-Only Scans and inflates network payload sizes.",
                  "Wrap denominators in `NULLIF(denominator, 0)` to prevent production query crashes from division-by-zero errors.",
                  "Column aliases defined in SELECT can be used in ORDER BY and LIMIT clauses, but CANNOT be used in WHERE or GROUP BY."
            ]
      }
},

      {
      "id": "sql-mod-7",
      "title": "Module 07 — Filtering Data with WHERE & Operators",
      "description": "Master Row-Level Data Filtering: SARGable Queries vs Non-SARGable Index Traps, Functional B-Tree Expression Indexes, Comparison Operators (=, <>, !=, <, >, <=, >=), Inclusive Ranges (BETWEEN ... AND ...), Set Membership (IN, NOT IN), Three-Valued Logic (3VL: TRUE, FALSE, UNKNOWN), IS NULL / IS NOT NULL, Null-Safe Equality (IS DISTINCT FROM), The Catastrophic NOT IN (..., NULL) Trap, Boolean Precedence (NOT > AND > OR), Short-Circuit Evaluation, Pattern Matching (LIKE, ILIKE, %, _), Wildcard Escaping, and POSIX Regular Expressions (~, ~*).",
      "completed": false,
      "order": 7,
      "published": true,
      "readingMaterial": {
            "introduction": "Welcome to Module 7! The WHERE clause is the primary mechanism for restricting query result sets to rows that satisfy explicit boolean filtering criteria. In relational database engines, the WHERE clause is evaluated during Step 2 of the 8-step logical execution pipeline—filtering raw table heap rows *before* any grouping, aggregate calculations, or sorting take place. Mastering WHERE clause operators, Three-Valued Logic (3VL), parenthetical boolean precedence, and SARGable index optimization is essential for writing high-performance database queries across multi-million row datasets.",
            "objectives": [
                  "Master the WHERE clause role in Step 2 of the 8-step logical execution pipeline",
                  "Understand SARGable Queries (Search Argumentable): Writing predicates that utilize B-Tree index scans",
                  "Avoid Non-SARGable Index Traps: Why wrapping columns in functions (UPPER(), YEAR()) forces full table scans",
                  "Utilize Expression Indexes (CREATE INDEX ... ON UPPER(col)) to optimize non-SARGable functions",
                  "Master Comparison Operators (=, <>, !=, <, >, <=, >=) and Range Filtering (BETWEEN ... AND ...)",
                  "Evaluate Set Membership with IN and analyze the catastrophic NOT IN (..., NULL) trap",
                  "Deconstruct Three-Valued Logic (3VL): Handling TRUE, FALSE, and UNKNOWN with IS NULL and IS DISTINCT FROM",
                  "Enforce Boolean Operator Precedence (NOT > AND > OR) using explicit parenthetical scoping",
                  "Master String Pattern Matching: LIKE, ILIKE, Percent (%), Underscore (_), ESCAPE clauses, and POSIX Regex (~, ~*)"
            ],
            "sections": [
                  {
                        "heading": "1. SARGable Queries vs Non-SARGable Index Traps & Expression Indexes",
                        "text": "A query predicate is SARGable (Search Argumentable) if the database optimizer can use an existing B-Tree index to navigate directly to matching rows ($O(\\log N)$ complexity). Writing non-SARGable queries forces the engine to perform slow Full Table Scans ($O(N)$ complexity) on millions of rows:",
                        "table": {
                              "headers": [
                                    "Predicate Category",
                                    "Non-SARGable Syntax (Index Disabled!)",
                                    "SARGable Syntax (B-Tree Index Active!)",
                                    "Performance Impact"
                              ],
                              "rows": [
                                    [
                                          "Function on Column",
                                          "WHERE UPPER(email) = 'USER@TEST.COM'",
                                          "WHERE email = 'user@test.com'",
                                          "SARGable is ~1,000x faster"
                                    ],
                                    [
                                          "Date Part Function",
                                          "WHERE YEAR(created_at) = 2026",
                                          "WHERE created_at >= '2026-01-01' AND created_at < '2027-01-01'",
                                          "SARGable utilizes date index"
                                    ],
                                    [
                                          "Math on Column",
                                          "WHERE salary * 12 > 120000",
                                          "WHERE salary > 10000",
                                          "SARGable isolates column"
                                    ],
                                    [
                                          "Wildcard Prefix",
                                          "WHERE name LIKE '%Smith'",
                                          "WHERE name LIKE 'Smith%'",
                                          "Leading % forces full scan"
                                    ]
                              ]
                        },
                        "bulletPoints": [
                              "Golden Rule of Index Utilization: NEVER wrap indexed column names inside functions (e.g. `UPPER(col)`, `DATE(col)`, `ROUND(col)`) on the left-hand side of a WHERE predicate! Always isolate the bare column on the left side of the operator.",
                              "Functional Expression Indexes: If an application MUST perform case-insensitive queries like `UPPER(email)`, you can create a Functional Expression Index in PostgreSQL: `CREATE INDEX idx_users_upper_email ON users (UPPER(email));`. This allows non-SARGable function calls to use a dedicated pre-computed B-Tree index!"
                        ]
                  },
                  {
                        "heading": "2. Comparison, Range & Set Membership Operators Matrix",
                        "text": "Filtering operators evaluate boolean expressions to determine which rows are returned:",
                        "table": {
                              "headers": [
                                    "Operator",
                                    "Syntax Pattern",
                                    "Description & Behavior",
                                    "Index Friendly?"
                              ],
                              "rows": [
                                    [
                                          "Comparison",
                                          "salary >= 75000.00",
                                          "Standard equality and inequality comparisons (=, <>, !=, <, >, <=, >=)",
                                          "YES (B-Tree Index)"
                                    ],
                                    [
                                          "BETWEEN ... AND",
                                          "hire_date BETWEEN '2025-01-01' AND '2025-12-31'",
                                          "Inclusive range test (includes both lower and upper endpoints)",
                                          "YES"
                                    ],
                                    [
                                          "IN (List)",
                                          "department IN ('IT', 'Finance', 'Security')",
                                          "Matches any row value that matches an element in the explicit list",
                                          "YES"
                                    ],
                                    [
                                          "NOT IN",
                                          "status NOT IN ('Terminated', 'Archived')",
                                          "Excludes rows matching any list element (DANGER if list contains NULL!)",
                                          "YES (Unless NULL is present)"
                                    ],
                                    [
                                          "IS NULL / IS NOT NULL",
                                          "phone_number IS NULL",
                                          "Tests if a column contains a missing NULL value",
                                          "YES (In modern RDBMS)"
                                    ],
                                    [
                                          "IS DISTINCT FROM",
                                          "col1 IS DISTINCT FROM col2",
                                          "Null-safe equality comparison (returns TRUE even if one value is NULL)",
                                          "YES"
                                    ]
                              ]
                        }
                  },
                  {
                        "heading": "3. Three-Valued Logic (3VL) & The NOT IN (..., NULL) Trap",
                        "text": "In standard binary computer logic, expressions evaluate to either TRUE or FALSE. Relational SQL uses Three-Valued Logic (3VL), introducing a third state: UNKNOWN (resulting from operations on NULL values):",
                        "bulletPoints": [
                              "3VL Truth Tables:",
                              "• `TRUE AND UNKNOWN` -> `UNKNOWN` | `TRUE OR UNKNOWN` -> `TRUE`",
                              "• `FALSE AND UNKNOWN` -> `FALSE` | `FALSE OR UNKNOWN` -> `UNKNOWN`",
                              "• `NOT (UNKNOWN)` -> `UNKNOWN`",
                              "Why 'col = NULL' Fails: Comparing anything to NULL using `= NULL` or `!= NULL` yields `UNKNOWN`, which evaluates as `FALSE` in WHERE clauses, returning zero rows!",
                              "Null-Safe Equality (IS DISTINCT FROM): Evaluates whether two values are distinct, handling NULLs gracefully without yielding UNKNOWN (`NULL IS DISTINCT FROM NULL` returns `FALSE`; `5 IS DISTINCT FROM NULL` returns `TRUE`).",
                              "THE CATASTROPHIC 'NOT IN (..., NULL)' TRAP:",
                              "• Consider: `WHERE status NOT IN ('Active', 'Pending', NULL)`",
                              "• Internally, SQL expands `NOT IN` to: `status != 'Active' AND status != 'Pending' AND status != NULL`.",
                              "• Because `status != NULL` evaluates to `UNKNOWN`, the entire `AND` expression evaluates to `UNKNOWN`/`FALSE` for EVERY ROW in the table! The query returns ZERO rows unconditionally!",
                              "• Solution: Always filter out NULLs before using `NOT IN` (or use `NOT EXISTS`)."
                        ]
                  },
                  {
                        "heading": "4. Boolean Logic Precedence & Parenthetical Scoping",
                        "text": "When combining multiple filtering conditions, operator precedence determines the order of evaluation:",
                        "bulletPoints": [
                              "Operator Precedence Order: `NOT` is evaluated first, `AND` is evaluated second, and `OR` is evaluated third ($NOT > AND > OR$).",
                              "Catastrophic Security Logic Bug Example:",
                              "• Query: `WHERE department = 'IT' OR department = 'Sales' AND status = 'Active'`",
                              "• Because `AND` takes precedence over `OR`, SQL evaluates this as: `department = 'IT' OR (department = 'Sales' AND status = 'Active')`!",
                              "• Consequence: ALL employees in the IT department are returned, INCLUDING terminated/inactive IT employees! Security checks are completely bypassed.",
                              "• Correct Scoped Query: `WHERE (department = 'IT' OR department = 'Sales') AND status = 'Active'`.",
                              "Short-Circuit Evaluation: Relational engines evaluate boolean expressions left-to-right and stop as soon as the result is guaranteed (e.g. if the left side of `AND` is `FALSE`, the right side is skipped)."
                        ]
                  },
                  {
                        "heading": "5. Pattern Matching Mechanics: LIKE, ILIKE, Wildcards & Regex",
                        "text": "Searching text data requires flexible pattern matching operators:",
                        "bulletPoints": [
                              "Percent Wildcard (%): Matches zero, one, or multiple arbitrary characters (`'A%'` matches `'A'`, `'Alex'`, `'Amanda'`).",
                              "Underscore Wildcard (_): Matches exactly one single character (`'_cat'` matches `'cat'`, `'hat'`, but NOT `'flat'`).",
                              "LIKE vs ILIKE:",
                              "• `LIKE`: Case-sensitive pattern matching (`'admin%'` does NOT match `'Admin'`).",
                              "• `ILIKE`: Case-insensitive pattern matching (PostgreSQL extension: `'admin%'` matches `'Admin'`, `'ADMIN'`).",
                              "Escaping Wildcards: To search for literal `%` or `_` characters inside text, specify an `ESCAPE` clause:",
                              "• `WHERE discount_code LIKE '10%' ESCAPE ''` (Matches literal string `'10%'`).",
                              "Regular Expression Matching (~ and ~*): PostgreSQL provides POSIX regex operators:",
                              "• `WHERE email ~ '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$'` (Enforces regex email validation)."
                        ]
                  }
            ],
            "codeExamples": [
                  {
                        "title": "SARGable Enterprise Risk & Compliance Filtering Query",
                        "code": "-- Retrieve active employees hired in 2025/2026 in IT or Finance earning between $60k and $120k with verified email\nSELECT \n    e.employee_id, \n    e.first_name, \n    e.department, \n    e.salary, \n    e.hire_date\nFROM enterprise_employees AS e\nWHERE \n    -- 1. SARGable Date Range (Avoids YEAR(hire_date) index trap!)\n    e.hire_date >= '2025-01-01' AND e.hire_date <= '2026-12-31'\n    \n    -- 2. Explicit Parentheses enforcing OR precedence\n    AND (e.department IN ('IT', 'Finance', 'Security'))\n    \n    -- 3. Inclusive Range Filtering\n    AND (e.salary BETWEEN 60000.00 AND 120000.00)\n    \n    -- 4. Explicit NULL check\n    AND (e.email IS NOT NULL);",
                        "explanation": "Demonstrates SARGable date range predicates, parenthetical scoping surrounding OR/IN conditions, inclusive range filtering with BETWEEN, and IS NOT NULL testing."
                  },
                  {
                        "title": "Pattern Matching, Wildcard Escaping & POSIX Regex Security Filtering",
                        "code": "-- 1. Case-insensitive wildcard pattern matching with ILIKE\nSELECT user_id, username, email\nFROM users\nWHERE email ILIKE 'admin_%@enterprise.com';\n\n-- 2. Escaping literal percent (%) and underscore (_) characters\nSELECT promo_id, promo_code, discount_percentage\nFROM promotions\nWHERE promo_code LIKE 'SUMMER_2026_10%' ESCAPE '';\n\n-- 3. Advanced POSIX Regular Expression matching in PostgreSQL\nSELECT user_id, email, phone_number\nFROM users\nWHERE email ~* '^[a-z0-9._%+-]+@(tech|cyber|dev).io$'\n  AND phone_number IS NOT NULL;",
                        "explanation": "Demonstrates case-insensitive ILIKE pattern matching, escaping literal wildcards with ESCAPE '\\', and POSIX regex email domain validation using ~*."
                  }
            ],
            "bestPractices": [
                  "Always write SARGable predicates: keep indexed columns bare on the left side of operators (e.g. `col >= '2026-01-01'` instead of `YEAR(col) = 2026`).",
                  "Always wrap `OR` conditions inside explicit parentheses when combining them with `AND` conditions.",
                  "Never use `= NULL` or `!= NULL`; always use `IS NULL` or `IS NOT NULL`.",
                  "Be extremely cautious with `NOT IN` subqueries; if the subquery returns even a single `NULL`, the entire query returns zero rows. Use `NOT EXISTS` instead.",
                  "Avoid leading wildcards in `LIKE` queries (e.g. `LIKE '%search'`) unless necessary, as leading wildcards disable B-Tree index scans."
            ],
            "commonMistakes": [
                  "Wrapping indexed columns in functions (e.g. `WHERE UPPER(email) = 'TEST@GMAIL.COM'`), forcing the engine to perform full table scans on millions of rows.",
                  "Neglecting parenthetical scoping in `WHERE dept = 'IT' OR dept = 'Sales' AND status = 'Active'`, accidentally bypassing security filters for IT staff.",
                  "Executing `WHERE status NOT IN ('Active', NULL)`, causing the query to return zero rows unconditionally due to Three-Valued Logic.",
                  "Using standard `=` to compare NULL values (`WHERE phone = NULL`), which yields `UNKNOWN`/`FALSE` and fails to retrieve NULL records."
            ],
            "practiceExercise": {
                  "title": "SARGable Predicates & Three-Valued Logic Challenge",
                  "problem": "Perform the following two tasks:\n1. Rewrite the following non-SARGable query so that it becomes SARGable and can utilize a B-Tree index on `created_at`:\n   `SELECT * FROM orders WHERE YEAR(created_at) = 2026 AND MONTH(created_at) = 6;` \n\n2. Explain why the query `SELECT * FROM products WHERE category_id NOT IN (1, 2, NULL);` returns zero rows, and write the corrected query using `IS NOT NULL` or `NOT EXISTS`.",
                  "solutionCode": "-- Exercise 1 SARGable Rewrite Solution:\nSELECT * \nFROM orders \nWHERE created_at >= '2026-06-01' \n  AND created_at < '2026-07-01';\n\n-- Exercise 2 Explanation & Solution:\n-- Explanation: NOT IN expands to: category_id != 1 AND category_id != 2 AND category_id != NULL.\n-- Because category_id != NULL evaluates to UNKNOWN under 3VL, the entire AND chain evaluates to UNKNOWN/FALSE for all rows!\n\n-- Corrected Query Solution:\nSELECT * \nFROM products \nWHERE category_id NOT IN (1, 2) \n  AND category_id IS NOT NULL;"
            },
            "keyTakeaways": [
                  "The WHERE clause runs in Step 2 of query execution, filtering raw rows before grouping or aggregation.",
                  "SARGable queries keep indexed columns bare on the left side of operators, enabling $O(\\log N)$ B-Tree index scans.",
                  "SQL uses Three-Valued Logic (3VL: TRUE, FALSE, UNKNOWN). Always use `IS NULL` or `IS NOT NULL` instead of `= NULL`.",
                  "Never include `NULL` in `NOT IN` lists, or the query will unconditionally return zero rows.",
                  "Operator precedence is `NOT > AND > OR`. Always use explicit parentheses around `OR` conditions."
            ]
      }
},

      {
      "id": "sql-mod-8",
      "title": "Module 08 — DISTINCT, ORDER BY & LIMIT",
      "description": "Master Result Set Presentation & Pagination Architecture: Single & Multi-Column SELECT DISTINCT Deduplication, Memory Allocation (work_mem Hash vs Sort Aggregates), PostgreSQL DISTINCT ON (expression), Deterministic Multi-Column ORDER BY Sorting (ASC/DESC), Custom CASE Statement Priority Sorting, Expression Sorting, NULL Positioning (NULLS FIRST / NULLS LAST), ANSI FETCH FIRST n ROWS ONLY, Web API Pagination Mechanics (LIMIT n OFFSET m), Deep Pagination Penalty Analysis, Keyset / Cursor-Based Composite Tuple Pagination (WHERE (created_at, id) < (:last_time, :last_id)), and Top-N Tie-Breaking Strategies.",
      "completed": false,
      "order": 8,
      "published": true,
      "readingMaterial": {
            "introduction": "Welcome to Module 8! Formatting, ordering, deduplicating, and controlling result set output is a core requirement for database presentation layers, analytical reporting engines, and high-concurrency web application APIs. The DISTINCT keyword eliminates redundant duplicate row tuples from output streams, ORDER BY sorts result sets deterministically according to explicit ordering rules, and LIMIT/OFFSET powers multi-page web application pagination. Mastering output formatting and understanding low-level sorting algorithms (Hash Aggregates vs Sort Aggregates in RAM `work_mem` buffer memory) is essential for database software engineers and system architects.",
            "objectives": [
                  "Master Tuple Deduplication using SELECT DISTINCT across single and multiple composite columns",
                  "Deconstruct RAM Memory Allocation: Hash Aggregates vs Sort Aggregates in work_mem memory",
                  "Utilize PostgreSQL SELECT DISTINCT ON (expression) to retain the top row per unique group",
                  "Understand Deterministic Result Set Sorting using multi-column ORDER BY (ASC vs DESC)",
                  "Execute Custom Priority Sorting using CASE WHEN statements (e.g. Urgent -> High -> Normal)",
                  "Control NULL Positioning in sorted outputs using NULLS FIRST and NULLS LAST overrides",
                  "Compare Vendor Pagination Syntax: LIMIT / OFFSET vs ANSI SQL FETCH FIRST n ROWS ONLY",
                  "Analyze the Deep Pagination Performance Penalty of OFFSET-based queries on large tables",
                  "Implement Keyset / Cursor-Based Composite Tuple Pagination (WHERE (created_at, id) < (:last_time, :last_id)) for sub-millisecond API response feeds",
                  "Implement Deterministic Top-N Query Patterns with Primary Key tie-breaking rules"
            ],
            "sections": [
                  {
                        "heading": "1. Deduplication Mechanics: SELECT DISTINCT, Memory Allocation & DISTINCT ON",
                        "text": "Relational table queries often return duplicate row tuples when projecting specific subset columns. The DISTINCT keyword instructs the database engine to perform deduplication:",
                        "bulletPoints": [
                              "Single-Column Deduplication: `SELECT DISTINCT department FROM employees;` scans output rows and returns unique department strings.",
                              "Multi-Column Tuple Deduplication: `SELECT DISTINCT department, status FROM employees;` compares the combined tuple value across all projected columns.",
                              "Engine Memory Allocation (work_mem):",
                              "• Hash Aggregates: The engine builds an in-memory hash table of unique tuple keys inside RAM (`work_mem`). Ideal for unsorted data.",
                              "• Sort Aggregates: The engine sorts output rows first, then scans sequentially to drop adjacent duplicates. Used when data is pre-sorted by an index.",
                              "• Spill to Disk (External Sort): If deduplication memory exceeds `work_mem`, the engine spills temporary work files to disk, drastically increasing query latency.",
                              "PostgreSQL DISTINCT ON (expression):",
                              "• Standard ANSI SQL `DISTINCT` operates on ALL projected columns in `SELECT`.",
                              "• PostgreSQL `DISTINCT ON (department)` evaluates uniqueness based ONLY on the specified group key, while allowing you to project other un-deduplicated columns!",
                              "• Must be paired with `ORDER BY department, salary DESC` to control which specific row per group is retained (e.g., retrieving the highest-paid employee per department in a single query pass)."
                        ],
                        "table": {
                              "headers": [
                                    "Deduplication Method",
                                    "Syntax Example",
                                    "RAM Memory Strategy",
                                    "Primary Enterprise Use Case"
                              ],
                              "rows": [
                                    [
                                          "Single-Column DISTINCT",
                                          "SELECT DISTINCT category FROM products;",
                                          "Hash Aggregate (work_mem)",
                                          "Populating UI dropdown selection lists"
                                    ],
                                    [
                                          "Multi-Column DISTINCT",
                                          "SELECT DISTINCT city, state FROM addresses;",
                                          "Tuple Hash Aggregate",
                                          "Extracting unique geographical regions"
                                    ],
                                    [
                                          "PostgreSQL DISTINCT ON",
                                          "SELECT DISTINCT ON (dept) dept, name, salary...",
                                          "Sort Aggregate with ORDER BY",
                                          "Retrieving top record per categorical group"
                                    ]
                              ]
                        }
                  },
                  {
                        "heading": "2. Advanced Result Set Sorting: Expressions, Custom Priority & NULL Positioning",
                        "text": "Without an explicit `ORDER BY` clause, relational database engines return rows in arbitrary, non-deterministic order based on physical disk page storage. Adding `ORDER BY` enforces strict sorting order:",
                        "bulletPoints": [
                              "Multi-Column Precedence ($A \\rightarrow B \\rightarrow C$): `ORDER BY department ASC, salary DESC, employee_id ASC` sorts primarily by department alphabetically, breaks ties by highest salary, and breaks secondary ties by primary key ID.",
                              "Custom Priority Sorting (CASE Statements): Sort rows by business priority rules rather than alphabetical or numerical order:",
                              "• `ORDER BY CASE priority WHEN 'Critical' THEN 1 WHEN 'High' THEN 2 WHEN 'Medium' THEN 3 ELSE 4 END, created_at DESC;`",
                              "Sorting by Calculated Expressions & Aliases: Because `ORDER BY` executes in Step 7 (AFTER `SELECT` in Step 5), you can sort by calculated aliases: `SELECT salary * 12 AS annual_pay FROM employees ORDER BY annual_pay DESC;`.",
                              "Explicit NULL Positioning (NULLS FIRST / NULLS LAST):",
                              "• Relational engines differ in default NULL sorting (PostgreSQL puts NULLs last in ASC, first in DESC; MySQL puts NULLs first in ASC).",
                              "• Explicit Overrides: `ORDER BY bonus DESC NULLS LAST` guarantees missing bonus rows appear at the bottom of executive compensation reports!",
                              "• MySQL Workaround: In MySQL (which lacks native NULLS LAST), use boolean sorting: `ORDER BY (bonus IS NULL) ASC, bonus DESC`."
                        ],
                        "table": {
                              "headers": [
                                    "Sorting Option",
                                    "Syntax Pattern",
                                    "Engine Execution Rule",
                                    "Custom Override / Workaround"
                              ],
                              "rows": [
                                    [
                                          "Ascending Sort",
                                          "ORDER BY price ASC",
                                          "Lowest values first (A-Z, 0-9)",
                                          "Default if ASC/DESC omitted"
                                    ],
                                    [
                                          "Descending Sort",
                                          "ORDER BY price DESC",
                                          "Highest values first (Z-A, 9-0)",
                                          "Must explicitly specify DESC"
                                    ],
                                    [
                                          "Custom Priority Sort",
                                          "ORDER BY CASE status WHEN 'Urgent' THEN 1...",
                                          "Evaluates CASE expression per row",
                                          "Sorts by custom integer rank"
                                    ],
                                    [
                                          "Explicit NULL Positioning",
                                          "ORDER BY bonus DESC NULLS LAST",
                                          "Forces NULLs to top or bottom",
                                          "MySQL: ORDER BY (col IS NULL) ASC"
                                    ]
                              ]
                        }
                  },
                  {
                        "heading": "3. Web API Pagination: Offset-Based vs Keyset Cursor-Based Pagination",
                        "text": "Web, mobile, and API applications present large datasets across multi-page views (Page 1, Page 2, Page 3...). Two primary strategies exist for implementing database pagination:",
                        "bulletPoints": [
                              "1. Offset-Based Pagination (LIMIT n OFFSET m / ANSI FETCH FIRST):",
                              "• `LIMIT n` (or `FETCH FIRST n ROWS ONLY`): Page Size (number of items returned per page, e.g., `LIMIT 20`).",
                              "• `OFFSET m`: Skip Count, calculated as `OFFSET = (PageNumber - 1) * PageSize`.",
                              "• Page 1: `LIMIT 20 OFFSET 0` | Page 2: `LIMIT 20 OFFSET 20` | Page 3: `LIMIT 20 OFFSET 40`.",
                              "• THE DEEP PAGINATION PERFORMANCE PENALTY: When requesting Page 10,000 (`OFFSET 200000 LIMIT 20`), the database engine MUST read, parse, sort, and discard 200,000 rows from disk before returning the 20 target rows! Query execution latency degrades exponentially.",
                              "2. Keyset / Cursor-Based Composite Tuple Pagination (High-Performance Alternative):",
                              "• Remembers the last seen composite tuple `(created_at, id)` from the bottom of the previous feed page:",
                              "• Syntax: `WHERE (created_at, article_id) < (:last_created_at, :last_article_id) ORDER BY created_at DESC, article_id DESC LIMIT 20;`",
                              "• Uses a composite B-Tree index scan to jump directly to target rows in sub-milliseconds ($O(\\log N)$ complexity), regardless of page depth! Page 10,000 executes just as fast as Page 1!"
                        ],
                        "table": {
                              "headers": [
                                    "Pagination Strategy",
                                    "Syntax Pattern",
                                    "Page 1 Latency",
                                    "Page 10,000 Latency",
                                    "Best Enterprise Application"
                              ],
                              "rows": [
                                    [
                                          "Offset-Based Pagination",
                                          "LIMIT 20 OFFSET 200000",
                                          "Sub-millisecond",
                                          "Very Slow (Scans & discards 200k rows)",
                                          "Simple admin dashboards, small datasets"
                                    ],
                                    [
                                          "Keyset / Cursor Pagination",
                                          "WHERE (created_at, id) < (:t, :id)...",
                                          "Sub-millisecond",
                                          "Sub-millisecond ($O(\\log N)$ B-Tree lookup)",
                                          "Infinite scroll feeds, mobile APIs, high-volume apps"
                                    ]
                              ]
                        }
                  },
                  {
                        "heading": "4. Deterministic Top-N Queries & Tie-Breaking Strategies",
                        "text": "When requesting Top-N items (e.g. Top 5 Best-Selling Products), queries MUST be deterministic:",
                        "bulletPoints": [
                              "Non-Deterministic Sorting Trap: If 10 products share the exact same `sales_count = 100`, executing `ORDER BY sales_count DESC LIMIT 5` will return 5 arbitrary products. Subsequent API calls can return different items across page breaks!",
                              "Deterministic Tie-Breaker Rule: ALWAYS append the unique Primary Key as the final tie-breaker column in `ORDER BY`: `ORDER BY sales_count DESC, product_id ASC LIMIT 5;`. This guarantees 100% deterministic, consistent pagination output across all client sessions."
                        ]
                  }
            ],
            "codeExamples": [
                  {
                        "title": "PostgreSQL DISTINCT ON, Custom CASE Priority Sorting & NULLS LAST",
                        "code": "-- 1. PostgreSQL DISTINCT ON: Retrieve highest-paid active employee per department\nSELECT DISTINCT ON (e.department)\n    e.department,\n    e.employee_id,\n    e.first_name,\n    e.last_name,\n    e.salary,\n    e.bonus\nFROM enterprise_employees AS e\nWHERE e.is_active = TRUE\n-- ORDER BY MUST start with the DISTINCT ON column(s), followed by target sort rules\nORDER BY e.department ASC, e.salary DESC NULLS LAST, e.employee_id ASC;\n\n-- 2. Custom Business Priority Sorting using CASE WHEN statements\nSELECT \n    ticket_id,\n    title,\n    priority_level,\n    created_at\nFROM support_tickets\nWHERE status != 'Resolved'\nORDER BY \n    CASE priority_level\n        WHEN 'Urgent'   THEN 1\n        WHEN 'High'     THEN 2\n        WHEN 'Medium'   THEN 3\n        WHEN 'Low'      THEN 4\n        ELSE 5\n    END ASC,\n    created_at ASC,\n    ticket_id ASC;",
                        "explanation": "Demonstrates PostgreSQL DISTINCT ON (department) combined with ORDER BY department ASC, salary DESC NULLS LAST, and custom business priority sorting using CASE WHEN expressions."
                  },
                  {
                        "title": "High-Performance API Pagination: Offset vs Composite Keyset Cursor",
                        "code": "-- Strategy 1: Standard Offset-Based Pagination for Web Dashboard (Page 4, Page Size = 25)\n-- Offset Math: (4 - 1) * 25 = 75\nSELECT product_id, product_name, category, unit_price\nFROM products\nWHERE is_available = TRUE\nORDER BY category ASC, product_id ASC\nLIMIT 25 OFFSET 75;\n\n-- Strategy 2: High-Performance Composite Keyset Cursor Pagination for Mobile Feeds\n-- Remembers last (created_at, article_id) tuple from the bottom of the previous page\nSELECT \n    article_id,\n    title,\n    author_name,\n    created_at\nFROM articles\nWHERE is_published = TRUE\n  -- Composite Tuple Comparison utilizing B-Tree Index (created_at DESC, article_id DESC)\n  AND (created_at, article_id) < ('2026-10-01 14:30:00+00'::timestamptz, 10482)\nORDER BY created_at DESC, article_id DESC\nLIMIT 25;",
                        "explanation": "Compares standard Offset-Based Pagination (LIMIT 25 OFFSET 75) with high-performance Composite Keyset Cursor Pagination utilizing tuple comparison (created_at, article_id) < (:time, :id)."
                  }
            ],
            "bestPractices": [
                  "Always include an explicit `ORDER BY` clause when using `LIMIT`/`OFFSET`; without `ORDER BY`, result row ordering is non-deterministic.",
                  "Always append a unique Primary Key as a final tie-breaker column in `ORDER BY` to guarantee consistent pagination across API pages.",
                  "Use `NULLS LAST` (or `NULLS FIRST`) explicitly to prevent engine-dependent default NULL sorting in analytical reports.",
                  "Use Keyset Cursor-Based Pagination (`WHERE (created_at, id) < (:time, :id)`) instead of `OFFSET` for high-volume mobile APIs and infinite scroll feeds.",
                  "Leverage PostgreSQL `DISTINCT ON (column)` to retrieve the top record per categorical group cleanly."
            ],
            "commonMistakes": [
                  "Using `LIMIT` and `OFFSET` without an `ORDER BY` clause, causing API endpoints to return arbitrary rows that change randomly.",
                  "Relying on deep `OFFSET` pagination (`OFFSET 500000`), forcing the database engine to read and discard half a million rows on every request.",
                  "Forgetting tie-breaker columns in `ORDER BY`, causing duplicate or missing items across paginated web pages when values match.",
                  "Assuming `DISTINCT` applies to only the first column listed in `SELECT`; `DISTINCT` evaluates the combination of ALL projected columns."
            ],
            "practiceExercise": {
                  "title": "Result Formatting & Keyset Pagination Challenge",
                  "problem": "Perform the following two tasks:\n1. Calculate the exact `OFFSET` value required for Page 7 when the Page Size (`LIMIT`) is set to 25 items per page.\n\n2. Write a SQL query for a mobile app feed that retrieves the 15 most recently published articles (`article_id`, `title`, `published_at`) that were published *before* '2026-10-01 12:00:00+00', using Keyset Cursor Pagination.",
                  "solutionCode": "-- Exercise 1 Offset Calculation Solution:\n-- Formula: OFFSET = (PageNumber - 1) * PageSize\n-- OFFSET = (7 - 1) * 25 = 6 * 25 = 150.\n-- SQL Clause: LIMIT 25 OFFSET 150.\n\n-- Exercise 2 Keyset Cursor Query Solution:\nSELECT article_id, title, published_at\nFROM articles\nWHERE published_at < '2026-10-01 12:00:00+00'\nORDER BY published_at DESC, article_id DESC\nLIMIT 15;"
            },
            "keyTakeaways": [
                  "DISTINCT operates across all projected columns; PostgreSQL `DISTINCT ON (expression)` retains the first row per unique group.",
                  "`ORDER BY` executes in Step 7 of query processing, allowing sorting by calculated column aliases.",
                  "Use `NULLS FIRST` or `NULLS LAST` to control missing value positions explicitly.",
                  "Offset-Based Pagination (`LIMIT n OFFSET m`) suffers from performance degradation at deep offsets.",
                  "Keyset Cursor Pagination (`WHERE (created_at, id) < (:time, :id)`) utilizes B-Tree indexes for $O(\\log N)$ sub-millisecond pagination at any page depth."
            ]
      }
},

      {
      "id": "sql-mod-9",
      "title": "Module 09 — Aggregate Functions, GROUP BY & HAVING",
      "description": "Master Data Analytics & Aggregation Architecture: The 5 Core Aggregate Functions (COUNT(*), COUNT(col), COUNT(DISTINCT col), SUM, AVG, MIN, MAX), Whitespace Syntax Rules, NULL Handling Mechanics, Conditional Aggregation (FILTER (WHERE ...)), Categorical Grouping (GROUP BY Single & Composite Keys), The Golden Rule of SQL Aggregation, WHERE vs HAVING Execution Order, and Multidimensional Enterprise Reporting (ROLLUP, CUBE, GROUPING SETS).",
      "completed": false,
      "order": 9,
      "published": true,
      "readingMaterial": {
            "introduction": "Welcome to Module 9! Data aggregation transforms high-volume, detailed transactional logs into executive financial summaries, key performance indicators (KPIs), and analytical business intelligence. SQL aggregate functions perform mathematical calculations across sets of rows, while the GROUP BY clause categorizes records into analytical sub-groups and the HAVING clause filters aggregated group metrics. Mastering aggregation, understanding NULL handling rules, and writing multidimensional reports (using ROLLUP and CUBE) is fundamental for data analysts, financial engineers, and backend developers.",
            "objectives": [
                  "Master the 5 Standard Aggregate Functions: COUNT(*), COUNT(column), COUNT(DISTINCT column), SUM, AVG, MIN, and MAX",
                  "Deconstruct NULL Handling Mechanics: Why aggregate functions ignore NULLs (and how AVG divides by non-NULL count)",
                  "Enforce Aggregate Whitespace Syntax Rules: Preventing parser errors with strict function syntax",
                  "Implement Conditional Aggregation using the ANSI SQL FILTER (WHERE condition) clause",
                  "Group records by single and multi-column composite keys using GROUP BY",
                  "Enforce The Golden Rule of SQL Aggregation: Resolving 'Expression not in GROUP BY key' errors",
                  "Distinguish WHERE (row filtering before grouping) from HAVING (group filtering after aggregation)",
                  "Master Multidimensional Super-Aggregate Reporting: GROUP BY ROLLUP, CUBE, and GROUPING SETS"
            ],
            "sections": [
                  {
                        "heading": "1. The 5 Core Aggregate Functions & NULL Handling Rules",
                        "text": "Aggregate functions take a collection of row values as input and return a single summary value as output. Note that all aggregate functions ignore NULL values except for `COUNT(*)`:",
                        "table": {
                              "headers": [
                                    "Aggregate Function",
                                    "Description",
                                    "NULL Handling Behavior",
                                    "Enterprise Production Example"
                              ],
                              "rows": [
                                    [
                                          "COUNT(*)",
                                          "Counts total raw rows in the group regardless of content",
                                          "Includes NULL rows",
                                          "SELECT COUNT(*) FROM orders;"
                                    ],
                                    [
                                          "COUNT(col)",
                                          "Counts total non-NULL values in a specific column",
                                          "Ignores NULLs",
                                          "SELECT COUNT(phone_number) FROM users;"
                                    ],
                                    [
                                          "COUNT(DISTINCT col)",
                                          "Counts unique non-NULL values in a column",
                                          "Ignores NULLs",
                                          "SELECT COUNT(DISTINCT customer_id) FROM sales;"
                                    ],
                                    [
                                          "SUM(col)",
                                          "Calculates mathematical sum of numeric column",
                                          "Ignores NULLs",
                                          "SELECT SUM(total_amount) FROM invoices;"
                                    ],
                                    [
                                          "AVG(col)",
                                          "Calculates arithmetic mean value",
                                          "Ignores NULLs",
                                          "SELECT AVG(salary) FROM employees;"
                                    ],
                                    [
                                          "MIN(col) / MAX(col)",
                                          "Returns lowest or highest value in set (numbers, dates, text)",
                                          "Ignores NULLs",
                                          "SELECT MIN(price), MAX(price) FROM products;"
                                    ]
                              ]
                        },
                        "bulletPoints": [
                              "Crucial AVG() NULL Trap: `AVG(salary)` divides the total sum by the count of NON-NULL salary entries, NOT total table rows! If 4 employees earn $100k and 1 employee has a `NULL` salary, `AVG()` computes `$400k / 4 = $100k`, NOT `$400k / 5 = $80k`. If you want NULLs treated as zero, use `AVG(COALESCE(salary, 0))`.",
                              "Whitespace Syntax Rule: No whitespace is allowed between the aggregate function name and the opening parenthesis (e.g. `COUNT(*)` is valid; `COUNT (*)` causes a syntax error in strict database parsers).",
                              "Conditional Aggregation (FILTER Clause): ANSI SQL and PostgreSQL allow embedding a `WHERE` condition directly inside an aggregate function:",
                              "• Syntax: `SUM(order_total) FILTER (WHERE status = 'Completed') AS completed_revenue`",
                              "• Computes status-specific subtotals in a single query pass without requiring multiple subqueries!"
                        ]
                  },
                  {
                        "heading": "2. Categorical Grouping (GROUP BY) & The Golden Rule of SQL",
                        "text": "The `GROUP BY` clause collapses multiple data rows sharing identical key values into single summary rows (evaluated during Step 3 of query execution):",
                        "bulletPoints": [
                              "Single-Column Grouping: `GROUP BY department` aggregates rows by unique department names.",
                              "Composite Multi-Column Grouping: `GROUP BY region, department` aggregates rows by unique combinations of region and department.",
                              "THE GOLDEN RULE OF SQL AGGREGATION:",
                              "• Every non-aggregated column listed in the `SELECT` projection list MUST be explicitly included in the `GROUP BY` clause!",
                              "• Invalid Query: `SELECT department, job_title, AVG(salary) FROM employees GROUP BY department;` (Crashes with `job_title must appear in the GROUP BY clause` because `job_title` has multiple values per department!).",
                              "• Valid Query: `SELECT department, job_title, AVG(salary) FROM employees GROUP BY department, job_title;`."
                        ]
                  },
                  {
                        "heading": "3. Group Filtering with HAVING vs Row Filtering with WHERE",
                        "text": "Understanding when to filter using `WHERE` versus `HAVING` is a fundamental requirement for writing correct SQL queries:",
                        "table": {
                              "headers": [
                                    "Filtering Aspect",
                                    "WHERE Clause",
                                    "HAVING Clause"
                              ],
                              "rows": [
                                    [
                                          "Execution Pipeline Stage",
                                          "Step 2 (Executes BEFORE GROUP BY)",
                                          "Step 4 (Executes AFTER GROUP BY)"
                                    ],
                                    [
                                          "Target Filter Object",
                                          "Raw individual table heap rows",
                                          "Aggregated group summary buckets"
                                    ],
                                    [
                                          "Can Use Aggregate Functions?",
                                          "NO (e.g., WHERE SUM(salary) > 50000 causes Syntax Error)",
                                          "YES (e.g., HAVING SUM(salary) > 50000)"
                                    ],
                                    [
                                          "Can Use B-Tree Indexes?",
                                          "YES (Scans indexed raw table columns)",
                                          "NO (Filters calculated group summary statistics)"
                                    ],
                                    [
                                          "Performance Best Practice",
                                          "Filter out unneeded rows early to reduce grouping RAM load",
                                          "Use ONLY for conditions involving aggregate functions"
                                    ]
                              ]
                        },
                        "bulletPoints": [
                              "Combining WHERE and HAVING for Maximum Performance:",
                              "• Always use `WHERE` to filter raw rows first (e.g. `WHERE is_active = TRUE`), reducing the volume of rows that must be processed in RAM during the `GROUP BY` step.",
                              "• Use `HAVING` solely to filter aggregate group totals (e.g. `HAVING COUNT(employee_id) > 5`)."
                        ]
                  },
                  {
                        "heading": "4. Multidimensional Enterprise Reporting (ROLLUP, CUBE & GROUPING SETS)",
                        "text": "Enterprise financial dashboards require subtotals and grand totals alongside standard grouped metrics. Modern SQL engines provide super-aggregate extensions:",
                        "bulletPoints": [
                              "1. GROUP BY ROLLUP(region, department):",
                              "• Generates hierarchical subtotals and a grand total row in a single query pass!",
                              "• Produces 3 grouping levels: `(region, department)`, `(region)`, and `()` (Grand Total).",
                              "2. GROUP BY CUBE(region, department):",
                              "• Generates ALL possible subtotal combinations across all listed dimensions.",
                              "• Produces 4 grouping levels: `(region, department)`, `(region)`, `(department)`, and `()` (Grand Total).",
                              "3. GROUP BY GROUPING SETS ((region), (department)):",
                              "• Explicitly defines exact subtotal dimensions to compute without generating unneeded combinations.",
                              "4. Identifying Subtotal Rows with GROUPING():",
                              "• The `GROUPING(column)` function returns `1` if a column is aggregated into a subtotal/grand total row, and `0` for regular rows. Use `CASE WHEN GROUPING(region) = 1 THEN 'All Regions' ELSE region END` to format clean report headers!"
                        ],
                        "table": {
                              "headers": [
                                    "Super-Aggregate Clause",
                                    "Generated Subtotal Combinations",
                                    "Primary Enterprise Use Case"
                              ],
                              "rows": [
                                    [
                                          "ROLLUP (A, B)",
                                          "(A, B), (A), ()",
                                          "Hierarchical organizational sales reports (Year -> Quarter -> Month)"
                                    ],
                                    [
                                          "CUBE (A, B)",
                                          "(A, B), (A), (B), ()",
                                          "Multidimensional OLAP data cube analysis"
                                    ],
                                    [
                                          "GROUPING SETS ((A), (B))",
                                          "(A), (B)",
                                          "Custom summary dashboards skipping intermediate hierarchies"
                                    ]
                              ]
                        }
                  }
            ],
            "codeExamples": [
                  {
                        "title": "Departmental Compensation Analytics & Headcount Audit with FILTER & HAVING",
                        "code": "-- Calculate comprehensive departmental metrics with conditional aggregates and HAVING filters\nSELECT \n    e.department,\n    \n    -- Row counts (COUNT(*) vs COUNT(col) vs COUNT(DISTINCT col))\n    COUNT(*) AS total_staff_count,\n    COUNT(e.commission) AS staff_receiving_commission,\n    COUNT(DISTINCT e.job_title) AS unique_job_titles_count,\n    \n    -- Conditional Aggregation using ANSI SQL FILTER (WHERE ...)\n    SUM(e.salary) FILTER (WHERE e.is_full_time = TRUE) AS full_time_payroll,\n    SUM(e.salary) FILTER (WHERE e.is_full_time = FALSE) AS part_time_payroll,\n    \n    -- Standard Aggregates\n    ROUND(AVG(e.salary), 2) AS average_monthly_salary,\n    MIN(e.salary) AS lowest_salary,\n    MAX(e.salary) AS highest_salary\nFROM enterprise_employees AS e\nWHERE e.is_active = TRUE -- Step 2: Filter active staff BEFORE grouping\nGROUP BY e.department  -- Step 3: Group remaining rows by department\nHAVING COUNT(*) >= 3    -- Step 4: Filter departments with at least 3 active staff\n   AND AVG(e.salary) > 4000.00\nORDER BY average_monthly_salary DESC;",
                        "explanation": "Demonstrates WHERE filtering active staff, grouping by department, conditional aggregation with FILTER (WHERE ...), aggregate calculations, and group-level filtering with HAVING."
                  },
                  {
                        "title": "Multidimensional Executive Financial Reporting using ROLLUP & GROUPING()",
                        "code": "-- Executive Financial Report with Regional Subtotals and Grand Total\nSELECT \n    -- Use GROUPING() to label Subtotal and Grand Total rows cleanly\n    CASE WHEN GROUPING(s.region) = 1 THEN '=== GRAND TOTAL ===' ELSE s.region END AS region_label,\n    CASE WHEN GROUPING(s.department) = 1 THEN '--- Region Subtotal ---' ELSE s.department END AS dept_label,\n    \n    COUNT(s.sale_id) AS total_transactions,\n    ROUND(SUM(s.sale_amount), 2) AS total_revenue,\n    ROUND(AVG(s.sale_amount), 2) AS avg_transaction_value\nFROM regional_sales AS s\nWHERE s.sale_date >= '2026-01-01'\n-- GROUP BY ROLLUP generates (region, department), (region), and () grand total!\nGROUP BY ROLLUP(s.region, s.department)\nORDER BY s.region NULLS LAST, s.department NULLS LAST;",
                        "explanation": "Demonstrates generating hierarchical sales subtotals and grand totals using GROUP BY ROLLUP, and formatting summary headers using the GROUPING() helper function."
                  }
            ],
            "bestPractices": [
                  "Remember The Golden Rule of SQL: Every non-aggregated column selected in `SELECT` MUST appear in `GROUP BY`.",
                  "Use `WHERE` to filter raw rows *before* grouping to reduce memory overhead in RAM buffer pools.",
                  "Use `HAVING` solely for conditions that involve aggregate functions (`SUM()`, `AVG()`, `COUNT()`).",
                  "Use `COALESCE(salary, 0)` inside `AVG()` if missing `NULL` salaries should be treated as `$0` in average calculations.",
                  "Leverage `FILTER (WHERE condition)` inside aggregate functions for clean, high-performance conditional reporting.",
                  "Use `GROUP BY ROLLUP` and `GROUPING()` to generate executive subtotals and grand totals in a single database query pass."
            ],
            "commonMistakes": [
                  "Attempting to use aggregate functions inside a `WHERE` clause (e.g. `WHERE SUM(salary) > 50000`), causing syntax compilation errors.",
                  "Selecting non-aggregated columns without including them in `GROUP BY`, triggering `Expression not in GROUP BY key` crashes.",
                  "Forgetting that `AVG()` ignores `NULL` values, leading to skewed arithmetic mean calculations in financial reports.",
                  "Adding whitespace between aggregate function names and parentheses (e.g. `COUNT (*)`), breaking strict SQL parsers."
            ],
            "practiceExercise": {
                  "title": "Aggregation & Multidimensional Reporting Challenge",
                  "problem": "Perform the following two tasks:\n1. Explain why the following query fails with an error and provide the corrected SQL code:\n   `SELECT department, region, SUM(salary) FROM employees WHERE SUM(salary) > 100000 GROUP BY department;` \n\n2. Write a SQL query on an `orders` table (`region`, `category`, `order_total`) that generates regional subtotals and a grand total of `SUM(order_total)` using `GROUP BY ROLLUP`.",
                  "solutionCode": "-- Exercise 1 Explanation & Correction:\n-- Failure Reasons:\n-- 1. 'region' is selected in SELECT but missing from GROUP BY (Violates Golden Rule of SQL).\n-- 2. SUM(salary) > 100000 is placed in WHERE instead of HAVING (Aggregate functions cannot go in WHERE).\n\n-- Corrected Query:\nSELECT department, region, SUM(salary) AS total_payroll\nFROM employees\nGROUP BY department, region\nHAVING SUM(salary) > 100000;\n\n-- Exercise 2 Multidimensional ROLLUP Query:\nSELECT \n    COALESCE(region, 'GRAND TOTAL') AS region,\n    COALESCE(category, 'Regional Subtotal') AS category,\n    SUM(order_total) AS total_revenue\nFROM orders\nGROUP BY ROLLUP(region, category);"
            },
            "keyTakeaways": [
                  "Aggregate functions (COUNT, SUM, AVG, MIN, MAX) summarize multiple rows into a single output value while ignoring NULLs (except COUNT(*)).",
                  "The Golden Rule of SQL: Every non-aggregated column in `SELECT` MUST be included in the `GROUP BY` clause.",
                  "`WHERE` filters raw rows BEFORE grouping in Step 2; `HAVING` filters aggregated group metrics AFTER grouping in Step 4.",
                  "Use `FILTER (WHERE condition)` inside aggregate functions for clean conditional summary metrics.",
                  "`GROUP BY ROLLUP` and `CUBE` compute hierarchical subtotals and grand totals in a single high-performance query pass."
            ]
      }
},

      {
      "id": "sql-mod-10",
      "title": "Module 10 — SQL Joins & Relationships",
      "description": "Master Relational Normalization (1NF, 2NF, 3NF, BCNF), Relational Algebra (Selection, Projection, Join), Entity Relationships (1:1, 1:N, N:M Junction Tables), Complete Join Family: INNER JOIN, Non-Equi Joins, LEFT (OUTER) JOIN, RIGHT JOIN, FULL OUTER JOIN, CROSS JOIN (Cartesian Product), SELF JOIN (Hierarchical Trees), Anti-Join Pattern (LEFT JOIN ... WHERE right.id IS NULL), Semi-Join Pattern (EXISTS), RDBMS Physical Join Algorithms (Nested Loop, Hash Join, Sort-Merge Join), and Foreign Key B-Tree Indexing Optimization.",
      "completed": false,
      "order": 10,
      "published": true,
      "readingMaterial": {
            "introduction": "Welcome to Module 10! Relational database normalization breaks flat, redundant data files down into logical, atomic tables connected by Primary and Foreign Key relationships. SQL Joins allow software developers, database architects, and data engineers to reconstruct related data across multiple tables on-the-fly. Understanding how the relational engine parses join conditions and selects physical join algorithms (Nested Loop, Hash Join, Sort-Merge Join) is essential for writing high-performance multi-table queries across enterprise datasets.",
            "objectives": [
                  "Master Relational Normalization: 1NF (Atomicity), 2NF (Partial Key Dependencies), 3NF (Transitive Dependencies), and Boyce-Codd Normal Form (BCNF)",
                  "Analyze Relational Algebra Operations: Selection (σ), Projection (π), Cartesian Product (×), and Natural Join (⋈)",
                  "Map Entity Relationships: One-to-One (1:1), One-to-Many (1:N), and Many-to-Many (N:M) with Composite Key Junction Tables",
                  "Master INNER JOIN & Non-Equi Joins: Joining on equality predicates and numeric range bounds (BETWEEN)",
                  "Master LEFT (OUTER) JOIN: Preserving all rows from the primary left table ($A \\cup (A \\cap B)$)",
                  "Evaluate RIGHT JOIN and FULL OUTER JOIN for complete relational set coverage",
                  "Execute CROSS JOIN to generate Cartesian product grids and matrix datasets",
                  "Master SELF JOIN to query hierarchical data trees (Employee-Manager, Parent-Child Categories)",
                  "Utilize Anti-Join (LEFT JOIN ... WHERE right.id IS NULL) and Semi-Join (EXISTS) patterns",
                  "Deconstruct RDBMS Join Algorithms: Nested Loop Join, Hash Join, and Sort-Merge Join"
            ],
            "sections": [
                  {
                        "heading": "1. Relational Algebra, Normalization & Anomaly Elimination",
                        "text": "Database normalization organizes tables according to Dr. Edgar F. Codd's Relational Algebra to eliminate insertion, update, and deletion anomalies:",
                        "bulletPoints": [
                              "Relational Algebra Operators:",
                              "• Selection ($sigma$): Filters rows matching a predicate (equivalent to SQL `WHERE`).",
                              "• Projection ($pi$): Selects specific columns (equivalent to SQL `SELECT col1, col2`).",
                              "• Cartesian Product ($\\times$): Generates all paired combinations (equivalent to SQL `CROSS JOIN`).",
                              "• Natural Join ($\\bowtie$): Combines rows sharing matching key attributes.",
                              "Database Normalization Levels:",
                              "• First Normal Form (1NF): Atomic values per cell (no array strings or comma-separated values). Every row must have a unique Primary Key.",
                              "• Second Normal Form (2NF): Meets 1NF, and all non-key attributes are fully functionally dependent on the ENTIRE Primary Key (eliminates partial key dependencies on composite keys).",
                              "• Third Normal Form (3NF): Meets 2NF, and no non-key attribute depends on another non-key attribute (eliminates transitive dependencies: $A \\rightarrow B \\rightarrow C$).",
                              "• Boyce-Codd Normal Form (BCNF): A stricter version of 3NF ensuring every determinant is a super key."
                        ],
                        "table": {
                              "headers": [
                                    "Normalization Level",
                                    "Core Requirement Rule",
                                    "Anomaly Eliminated",
                                    "Enterprise Example Solution"
                              ],
                              "rows": [
                                    [
                                          "1NF (First Normal Form)",
                                          "Atomic cells; unique primary key",
                                          "Repeating group redundancy",
                                          "Splitting 'NY, CA' array cell into 2 separate rows"
                                    ],
                                    [
                                          "2NF (Second Normal Form)",
                                          "1NF + No partial dependencies on composite keys",
                                          "Partial key update anomalies",
                                          "Moving product description out of order_items table"
                                    ],
                                    [
                                          "3NF (Third Normal Form)",
                                          "2NF + No transitive dependencies between non-keys",
                                          "Transitive update anomalies",
                                          "Moving zip_code city/state into a separate zip_codes table"
                                    ],
                                    [
                                          "BCNF (Boyce-Codd)",
                                          "3NF + Every determinant is a candidate super key",
                                          "Overlapping composite key anomalies",
                                          "Splitting complex multi-instructor course schedules"
                                    ]
                              ]
                        }
                  },
                  {
                        "heading": "2. Entity Relationships & Junction Tables (1:1, 1:N, N:M)",
                        "text": "Relational data modeling connects business entities through key relationships:",
                        "bulletPoints": [
                              "One-to-One (1:1): Primary key of Table A maps to Primary Key of Table B (e.g. `users` <-> `user_profiles`). Used to isolate sensitive or rarely-accessed columns.",
                              "One-to-Many (1:N): Foreign key on child Table B references Primary Key of parent Table A (e.g. `customers` <-> `orders`). The foundational relationship in relational databases.",
                              "Many-to-Many (N:M): Implemented using a dedicated Bridge/Junction Table containing Foreign Keys referencing both parent tables (e.g. `students` <-> `courses` via `student_courses` junction table with composite key `PRIMARY KEY (student_id, course_id)`)."
                        ]
                  },
                  {
                        "heading": "3. Complete SQL Join Family & Execution Semantics",
                        "text": "SQL Joins combine columns from one or more tables based on matching join keys defined in the `ON` clause:",
                        "table": {
                              "headers": [
                                    "Join Type",
                                    "Venn Set Equivalent",
                                    "Unmatched Left Rows?",
                                    "Unmatched Right Rows?",
                                    "Common Production Use Case"
                              ],
                              "rows": [
                                    [
                                          "INNER JOIN",
                                          "Intersection ($A \\cap B$)",
                                          "EXCLUDED (Dropped)",
                                          "EXCLUDED (Dropped)",
                                          "Fetching orders with valid customer profiles"
                                    ],
                                    [
                                          "LEFT (OUTER) JOIN",
                                          "Left Set ($A \\cup (A \\cap B)$)",
                                          "RETAINED (Filled with NULL)",
                                          "EXCLUDED (Dropped)",
                                          "Fetching all customers and their optional orders"
                                    ],
                                    [
                                          "RIGHT (OUTER) JOIN",
                                          "Right Set ($B \\cup (A \\cap B)$)",
                                          "EXCLUDED (Dropped)",
                                          "RETAINED (Filled with NULL)",
                                          "Equivalent to inverted LEFT JOIN (rarely used)"
                                    ],
                                    [
                                          "FULL OUTER JOIN",
                                          "Union ($A \\cup B$)",
                                          "RETAINED (Filled with NULL)",
                                          "RETAINED (Filled with NULL)",
                                          "Reconciling data between 2 financial ledgers"
                                    ],
                                    [
                                          "CROSS JOIN",
                                          "Cartesian Product ($A \\times B$)",
                                          "ALL combinations",
                                          "ALL combinations",
                                          "Generating test matrix grids (Color x Size)"
                                    ],
                                    [
                                          "SELF JOIN",
                                          "Hierarchical Graph",
                                          "Depends on Join Type",
                                          "Depends on Join Type",
                                          "Querying Employee-Manager or Parent-Child trees"
                                    ]
                              ]
                        },
                        "bulletPoints": [
                              "Non-Equi Joins: Joining tables on inequality or range predicates instead of exact key equality (e.g., `ON e.salary BETWEEN g.min_salary AND g.max_salary`).",
                              "Anti-Join Pattern (Locating Missing Records): Combines `LEFT JOIN` with `WHERE right.key IS NULL` to identify unmatched records (e.g. Customers who have NEVER placed an order).",
                              "Semi-Join Pattern: Uses `WHERE EXISTS (SELECT 1 FROM orders o WHERE o.customer_id = c.id)` to test matching existence without multiplying outer row cardinality."
                        ]
                  },
                  {
                        "heading": "4. Physical Join Execution Algorithms: RDBMS Engine Internals",
                        "text": "The Cost-Based Optimizer (CBO) evaluates table sizes, join predicates, and index structures to select one of three physical join algorithms:",
                        "bulletPoints": [
                              "1. Nested Loop Join: Iterates outer table rows and searches for matches in the inner table. Ultra-fast ($O(N \\log M)$) when the inner join column has a B-Tree index!",
                              "2. Hash Join: Builds an in-memory hash table of the smaller dataset in RAM (`work_mem`), then probes the hash table with rows from the larger dataset ($O(N + M)$). Ideal for large un-indexed tables.",
                              "3. Sort-Merge Join: Sorts both datasets on join keys, then merges matching streams ($O(N \\log N + M \\log M)$). Ideal when datasets are pre-sorted by B-Tree indexes.",
                              "CRITICAL INDEXING RULE: Always create explicit B-Tree indexes on all Foreign Key columns to allow the optimizer to choose sub-millisecond B-Tree Nested Loop joins!"
                        ]
                  }
            ],
            "codeExamples": [
                  {
                        "title": "Multi-Table INNER JOIN, Non-Equi Range Join & Anti-Join Pattern",
                        "code": "-- 1. Multi-Table INNER JOIN with Non-Equi Salary Grade Range Join\nSELECT \n    e.employee_id,\n    e.first_name || ' ' || e.last_name AS employee_name,\n    e.salary,\n    g.grade_level AS salary_grade\nFROM enterprise_employees AS e\n-- Non-Equi Join on salary range bounds!\nINNER JOIN salary_grades AS g \n    ON e.salary BETWEEN g.min_salary AND g.max_salary\nWHERE e.is_active = TRUE;\n\n-- 2. Anti-Join Pattern: Identify Active Customers with NO Order History\nSELECT \n    c.customer_id,\n    c.email,\n    c.created_at\nFROM customers AS c\nLEFT JOIN orders AS o ON c.customer_id = o.customer_id\nWHERE o.order_id IS NULL -- Anti-join condition: Unmatched left records!\n  AND c.account_status = 'Active';",
                        "explanation": "Demonstrates Non-Equi range joins (BETWEEN), multi-table INNER JOINs, and the Anti-Join pattern to locate un-purchasing customers."
                  },
                  {
                        "title": "SELF JOIN for Org Charts & CROSS JOIN for Matrix Product Variants",
                        "code": "-- 1. SELF JOIN for Hierarchical Employee-Manager Organization Chart\nSELECT \n    e.employee_id,\n    e.full_name AS employee_name,\n    e.job_title,\n    COALESCE(m.full_name, '=== TOP EXECUTIVE ===') AS manager_name\nFROM employees AS e\nLEFT JOIN employees AS m ON e.manager_id = m.employee_id\nORDER BY e.employee_id ASC;\n\n-- 2. CROSS JOIN for Generating Complete Product SKU Combinations (Color x Size)\nSELECT \n    c.color_name,\n    s.size_code,\n    c.color_name || '-' || s.size_code AS generated_sku_variant\nFROM product_colors AS c\nCROSS JOIN product_sizes AS s;",
                        "explanation": "Demonstrates SELF JOIN mapping employees to managers within a single table, and CROSS JOIN generating Cartesian product variant grids."
                  }
            ],
            "bestPractices": [
                  "Always assign short, meaningful table aliases (e.g. `FROM orders AS o`) and prefix all projected columns.",
                  "Always explicitly create a B-Tree index on FOREIGN KEY columns to enable $O(N \\log M)$ Nested Loop joins.",
                  "Place join predicates in the `ON` clause, NOT in `WHERE`; filtering outer join columns in `WHERE` converts `LEFT JOIN` to `INNER JOIN`.",
                  "Use the Anti-Join pattern (`LEFT JOIN ... WHERE right.id IS NULL`) for ultra-fast missing record identification.",
                  "Verify query execution plans with `EXPLAIN ANALYZE` to ensure the optimizer selects Hash Joins or Index-backed Nested Loops."
            ],
            "commonMistakes": [
                  "Omitting the `ON` clause in a join, accidentally executing a `CROSS JOIN` Cartesian Product on multi-million row tables.",
                  "Placing filtering predicates on the right table of a `LEFT JOIN` inside `WHERE`, accidentally stripping outer join rows.",
                  "Joining un-indexed foreign key columns, forcing the database engine to fall back to slow full table scans.",
                  "Attempting to normalize database tables beyond 3NF prematurely, causing excessive join overhead on simple queries."
            ],
            "practiceExercise": {
                  "title": "Join Identification & Anti-Join Challenge",
                  "problem": "Perform the following two tasks:\n1. Choose the correct join type (INNER JOIN, LEFT JOIN, CROSS JOIN, or SELF JOIN) for each scenario:\n   a. Querying a table of `categories` to display parent category names alongside sub-category names.\n   b. Generating a grid of all possible t-shirt color (5 colors) and size (4 sizes) combinations.\n   c. Retrieving all registered customers, including those who have not placed any orders.\n\n2. Write a SQL Anti-Join query returning all `customer_id` and `email` addresses from a `customers` table for customers who do NOT exist in a `newsletters` subscription table.",
                  "solutionCode": "-- Exercise 1 Join Selection Answers:\n-- a. Parent-Child Categories -> SELF JOIN\n-- b. All Color x Size Grids -> CROSS JOIN (5 x 4 = 20 total rows)\n-- c. All Customers + Optional -> LEFT JOIN\n\n-- Exercise 2 Anti-Join Query Answer:\nSELECT \n    c.customer_id, \n    c.email\nFROM customers AS c\nLEFT JOIN newsletters AS n ON c.email = n.email\nWHERE n.email IS NULL;"
            },
            "keyTakeaways": [
                  "Relational Normalization (1NF, 2NF, 3NF, BCNF) eliminates data redundancy and update anomalies.",
                  "INNER JOIN returns intersecting rows ($A \\cap B$); LEFT JOIN preserves all left table rows ($A$).",
                  "SELF JOIN links rows within the same table to query organizational trees and parent-child hierarchies.",
                  "The Anti-Join pattern (`LEFT JOIN ... WHERE right.id IS NULL`) identifies missing or unlinked records efficiently.",
                  "Database optimizers choose physical join algorithms (Nested Loop, Hash Join, Sort-Merge Join) based on table size and B-Tree indexes."
            ]
      }
},

      {
      "id": "sql-mod-11",
      "title": "Module 11 — Subqueries, UNION & Advanced Querying",
      "description": "Master Advanced Querying Architectures: Subquery Classification (Scalar, Multi-Row, Multi-Column Row Constructors), Multi-Row Operators (IN, NOT IN, ANY/SOME, ALL), Correlated Subqueries, Existence Optimization (EXISTS vs NOT EXISTS), Common Table Expressions (CTEs - WITH clause, AS MATERIALIZED optimization fences), Recursive CTEs (WITH RECURSIVE for Graphs, Trees & Cycle Detection), and Set Operators (UNION, UNION ALL, INTERSECT, EXCEPT/MINUS).",
      "completed": false,
      "order": 11,
      "published": true,
      "readingMaterial": {
            "introduction": "Welcome to Module 11! As business requirements become more complex, simple single-table SELECT queries are insufficient. Advanced SQL querying techniques allow software developers and data engineers to break complex analytical tasks down into clean, modular, and maintainable query structures. Subqueries (nested queries), Correlated Subqueries, Common Table Expressions (CTEs with the `WITH` clause), Recursive CTEs for graph traversal, and Set Operators (`UNION`, `INTERSECT`, `EXCEPT`) provide the complete toolkit for enterprise data engineering.",
            "objectives": [
                  "Master Subquery Classifications: Scalar Subqueries, Multi-Row Subqueries, and Multi-Column Row Constructors",
                  "Evaluate Multi-Row Comparison Operators: IN, NOT IN, ANY / SOME, and ALL",
                  "Master Correlated Subqueries and optimize existence checks using EXISTS and NOT EXISTS",
                  "Avoid the catastrophic NOT IN (..., NULL) trap by preferring NOT EXISTS",
                  "Refactor complex nested queries into clean Common Table Expressions (CTEs) using the WITH clause",
                  "Control CTE Materialization Optimization Fences (AS MATERIALIZED vs AS NOT MATERIALIZED)",
                  "Execute Graph & Tree Traversal using Recursive CTEs (WITH RECURSIVE) with Cycle Detection",
                  "Master Set Operators: UNION (deduplicated) vs UNION ALL (high-performance retain all)",
                  "Compare INTERSECT and EXCEPT / MINUS set operators across datasets"
            ],
            "sections": [
                  {
                        "heading": "1. Subquery Architecture & Classification",
                        "text": "A subquery is a nested `SELECT` query embedded inside an outer SQL statement (inside `SELECT`, `FROM`, `WHERE`, or `HAVING` clauses):",
                        "table": {
                              "headers": [
                                    "Subquery Category",
                                    "Returned Cell Structure",
                                    "Placement Location",
                                    "Supported Operators"
                              ],
                              "rows": [
                                    [
                                          "Scalar Subquery",
                                          "Single Cell (1 Row, 1 Column)",
                                          "SELECT, WHERE, HAVING",
                                          "=, <, >, <=, >=, <>"
                                    ],
                                    [
                                          "Multi-Row Subquery",
                                          "Single Column (N Rows, 1 Column)",
                                          "WHERE, HAVING",
                                          "IN, NOT IN, ANY / SOME, ALL"
                                    ],
                                    [
                                          "Multi-Column Row Constructor",
                                          "Row Vector (1 Row, N Columns)",
                                          "WHERE (col1, col2) IN (...)",
                                          "IN, =, <>"
                                    ],
                                    [
                                          "Derived Table Subquery",
                                          "Table Grid (N Rows, M Columns)",
                                          "FROM (Must have table alias)",
                                          "JOIN, SELECT *"
                                    ]
                              ]
                        },
                        "bulletPoints": [
                              "Multi-Row Operators (ANY & ALL):",
                              "• `WHERE salary > ANY (SELECT salary FROM employees WHERE dept = 'IT')`: Returns TRUE if salary exceeds AT LEAST ONE IT salary (equivalent to `> MIN()`).",
                              "• `WHERE salary > ALL (SELECT salary FROM employees WHERE dept = 'IT')`: Returns TRUE if salary exceeds EVERY SINGLE IT salary (equivalent to `> MAX()`)."
                        ]
                  },
                  {
                        "heading": "2. Correlated Subqueries & The EXISTS vs IN Optimization",
                        "text": "Unlike independent subqueries (which execute once and pass static values to the outer query), a Correlated Subquery references columns from the outer query, re-evaluating once for EVERY ROW processed by the outer query:",
                        "bulletPoints": [
                              "Correlated Subquery Mechanism: `WHERE salary > (SELECT AVG(salary) FROM employees WHERE department = e.department)` (Calculates department-specific averages dynamically per row!).",
                              "EXISTS vs IN Performance Optimization:",
                              "• `EXISTS (subquery)`: Returns TRUE as soon as the subquery finds a SINGLE matching row, short-circuiting execution immediately.",
                              "• `IN (subquery)`: Builds the complete result list in memory before evaluating the predicate.",
                              "• Golden Rule: Use `EXISTS` and `NOT EXISTS` instead of `IN` / `NOT IN` when testing for record existence across large child tables. `EXISTS` short-circuits instantly and avoids the `NOT IN (..., NULL)` trap!"
                        ]
                  },
                  {
                        "heading": "3. Common Table Expressions (CTEs - WITH Clause) & Recursive CTEs",
                        "text": "Common Table Expressions (CTEs) define named temporary result sets using the `WITH` clause, replacing unreadable nested subqueries with clean, modular code blocks:",
                        "bulletPoints": [
                              "Standard CTE Syntax: `WITH dept_averages AS (SELECT department, AVG(salary) AS avg_sal FROM employees GROUP BY department) SELECT * FROM employees e JOIN dept_averages d ON e.department = d.department WHERE e.salary > d.avg_sal;`",
                              "Multiple Chained CTEs: You can chain multiple CTEs separated by commas (`WITH cte1 AS (...), cte2 AS (...)`).",
                              "CTE Materialization Optimization Fences (PostgreSQL 12+):",
                              "• `WITH cte AS MATERIALIZED (...)`: Forces the engine to evaluate the CTE into a physical temporary RAM storage block once.",
                              "• `WITH cte AS NOT MATERIALIZED (...)`: Allows the query optimizer to inline the CTE directly into the main query tree for join optimizations.",
                              "Recursive CTEs (WITH RECURSIVE):",
                              "• Used to query hierarchical graph structures (org charts, bill of materials, category trees, network routing).",
                              "• Structure: Consists of an **Anchor Member** (base query), `UNION ALL`, and a **Recursive Member** referencing the CTE name until a termination condition is met."
                        ]
                  },
                  {
                        "heading": "4. Set Operators: UNION, UNION ALL, INTERSECT & EXCEPT",
                        "text": "Set operators combine result sets from two or more independent `SELECT` queries vertically into a single output stream:",
                        "table": {
                              "headers": [
                                    "Set Operator",
                                    "Venn Set Equivalent",
                                    "Deduplication Behavior",
                                    "Performance Impact"
                              ],
                              "rows": [
                                    [
                                          "UNION",
                                          "Set Union ($A \\cup B$)",
                                          "REMOVES duplicate rows (Performs Sort/Hash)",
                                          "Higher CPU/RAM cost"
                                    ],
                                    [
                                          "UNION ALL",
                                          "Multiset Union ($A + B$)",
                                          "RETAINS all duplicate rows (Appends directly)",
                                          "Ultra-Fast (Zero sorting overhead)"
                                    ],
                                    [
                                          "INTERSECT",
                                          "Set Intersection ($A \\cap B$)",
                                          "Returns ONLY rows present in BOTH sets",
                                          "Performs Hash/Sort deduplication"
                                    ],
                                    [
                                          "EXCEPT / MINUS",
                                          "Set Difference ($A - B$)",
                                          "Returns rows in Set A NOT present in Set B",
                                          "Performs Hash/Sort deduplication"
                                    ]
                              ]
                        },
                        "bulletPoints": [
                              "Set Operator Rules: All queries combined with set operators MUST have the exact same number of projected columns, and corresponding columns MUST share compatible data types."
                        ]
                  }
            ],
            "codeExamples": [
                  {
                        "title": "Modular Analytics with Chained CTEs & EXISTS Existence Checking",
                        "code": "-- Modular CTEs analyzing high-value active customers and product sales\nWITH high_value_orders AS (\n    SELECT order_id, customer_id, order_total\n    FROM orders\n    WHERE order_total >= 1000.00\n      AND order_date >= '2026-01-01'\n),\ncustomer_summary AS (\n    SELECT \n        customer_id, \n        COUNT(order_id) AS premium_order_count,\n        SUM(order_total) AS total_premium_spend\n    FROM high_value_orders\n    GROUP BY customer_id\n)\nSELECT \n    c.customer_id,\n    c.first_name || ' ' || c.last_name AS customer_name,\n    cs.premium_order_count,\n    cs.total_premium_spend\nFROM customers AS c\nJOIN customer_summary AS cs ON c.customer_id = cs.customer_id\n-- Use EXISTS for short-circuit existence checking\nWHERE EXISTS (\n    SELECT 1 FROM support_tickets AS t \n    WHERE t.customer_id = c.customer_id AND t.status = 'Resolved'\n)\nORDER BY cs.total_premium_spend DESC;",
                        "explanation": "Demonstrates modular chained CTEs (high_value_orders, customer_summary) and using EXISTS for fast short-circuit subquery existence checking."
                  },
                  {
                        "title": "Recursive CTE Org Chart & Set Operators (UNION ALL vs EXCEPT)",
                        "code": "-- 1. Recursive CTE: Traversing complete Org Chart hierarchy starting from CEO\nWITH RECURSIVE org_chart AS (\n    -- Anchor Member: Find top CEO (manager_id IS NULL)\n    SELECT employee_id, full_name, manager_id, 1 AS management_level\n    FROM employees\n    WHERE manager_id IS NULL\n    \n    UNION ALL\n    \n    -- Recursive Member: Join employees to org_chart on manager_id\n    SELECT e.employee_id, e.full_name, e.manager_id, o.management_level + 1\n    FROM employees AS e\n    JOIN org_chart AS o ON e.manager_id = o.employee_id\n)\nSELECT * FROM org_chart ORDER BY management_level ASC, employee_id ASC;\n\n-- 2. Set Operators: Compare US vs European Customer lists\nSELECT email, country FROM us_customers\nUNION ALL -- Fast append without deduplication!\nSELECT email, country FROM eu_customers\n\nEXCEPT -- Exclude customers who are in the opt-out suppression list\n\nSELECT email, country FROM marketing_suppression_list;",
                        "explanation": "Demonstrates graph traversal using WITH RECURSIVE to generate organizational hierarchy levels, and combining datasets vertically using UNION ALL and EXCEPT."
                  }
            ],
            "bestPractices": [
                  "Use Common Table Expressions (CTEs) with `WITH` instead of deeply nested subqueries to improve code readability and maintainability.",
                  "Prefer `EXISTS` and `NOT EXISTS` over `IN` / `NOT IN` for subquery existence checks; `EXISTS` short-circuits instantly and avoids NULL traps.",
                  "Always prefer `UNION ALL` over `UNION` when you know result sets are disjoint or when duplicates are acceptable, eliminating unneeded sorting overhead.",
                  "Ensure all queries combined with `UNION`, `INTERSECT`, or `EXCEPT` project identical column counts and matching data types.",
                  "Use `WITH RECURSIVE` for tree structures (org charts, category hierarchies, bill of materials)."
            ],
            "commonMistakes": [
                  "Using `UNION` instead of `UNION ALL`, forcing the database engine to perform expensive sort/hash deduplication unnecessarily.",
                  "Using `NOT IN (subquery)` when the subquery can return `NULL` values, causing the outer query to return zero rows unconditionally.",
                  "Creating infinite loops in `WITH RECURSIVE` by failing to specify a proper join termination condition.",
                  "Writing deeply nested un-aliased subqueries in `FROM` clauses, making code impossible to read or debug."
            ],
            "practiceExercise": {
                  "title": "CTE & Set Operator Refactoring Challenge",
                  "problem": "Perform the following two tasks:\n1. State the difference between `UNION` and `UNION ALL` across performance and duplicate retention.\n\n2. Refactor the following nested subquery into a clean CTE using the `WITH` clause:\n   `SELECT * FROM employees WHERE salary > (SELECT AVG(salary) FROM employees WHERE department = 'Engineering');`",
                  "solutionCode": "-- Exercise 1 Answers:\n-- UNION     : Retains unique rows only, performing RAM sort/hash deduplication (Slower).\n-- UNION ALL : Retains ALL rows including duplicates, appending streams directly (Fastest).\n\n-- Exercise 2 CTE Refactoring Solution:\nWITH eng_avg AS (\n    SELECT AVG(salary) AS avg_salary\n    FROM employees\n    WHERE department = 'Engineering'\n)\nSELECT e.*\nFROM employees AS e, eng_avg AS a\nWHERE e.salary > a.avg_salary;"
            },
            "keyTakeaways": [
                  "Subqueries can be Scalar (1 cell), Multi-Row (1 column), Row Constructors, or Derived Tables.",
                  "`EXISTS` and `NOT EXISTS` short-circuit execution on the first match, outperforming `IN` on large subqueries.",
                  "Common Table Expressions (CTEs) with `WITH` make complex queries modular, readable, and maintainable.",
                  "`WITH RECURSIVE` enables graph and tree hierarchy traversal (org charts, category trees).",
                  "`UNION ALL` appends datasets vertically without sorting overhead; `UNION` removes duplicates."
            ]
      }
},

      {
      "id": "sql-mod-12",
      "title": "Module 12 — SQL Functions & Conditional Logic",
      "description": "Master Built-in SQL Functions & Expression Architecture: Deterministic vs Non-Deterministic Functions, String Functions (LENGTH, SUBSTRING, REPLACE, TRIM, POSITION, UPPER, LOWER, INITCAP, LPAD/RPAD, REGEXP_REPLACE), Mathematical Functions (ROUND, TRUNC, CEIL, FLOOR, ABS, MOD, POWER), Date/Time Functions (CURRENT_DATE, EXTRACT, DATE_TRUNC time-series bucketing, AGE, INTERVAL math), Conditional Expressions (Simple CASE, Searched CASE WHEN ... THEN ... ELSE ... END), and Null Handling Functions (COALESCE, NULLIF, NVL, IFNULL).",
      "completed": false,
      "order": 12,
      "published": true,
      "readingMaterial": {
            "introduction": "Welcome to Module 12! Built-in SQL functions and conditional expressions allow database developers, software architects, and data analysts to perform powerful data transformations, string parsing, mathematical rounding, date-time arithmetic, and dynamic branching logic directly inside the database engine. Processing transformations on the database server minimizes network bandwidth usage, accelerates API latency, and offloads compute from application servers. Mastering string, math, date-time, CASE expressions, and COALESCE functions is essential for enterprise database engineering.",
            "objectives": [
                  "Differentiate Deterministic Functions (UPPER, ABS) from Non-Deterministic Functions (NOW, RANDOM)",
                  "Master String Transformation Functions: LENGTH, SUBSTRING, REPLACE, TRIM, POSITION, UPPER, LOWER, INITCAP, and LPAD/RPAD",
                  "Perform Pattern Replacement using Regular Expressions (REGEXP_REPLACE)",
                  "Master Mathematical & Numeric Functions: ROUND, TRUNC, CEIL, FLOOR, ABS, MOD, and POWER",
                  "Master Date & Time Manipulation: CURRENT_DATE, CURRENT_TIMESTAMP, EXTRACT(field FROM date), DATE_TRUNC(), and AGE()",
                  "Bucket Timestamps into Time-Series Analytics Intervals using DATE_TRUNC('month', timestamp)",
                  "Implement Dynamic Branching Logic using Searched CASE WHEN ... THEN ... ELSE ... END expressions",
                  "Implement Simple CASE Expressions for discrete value mapping",
                  "Master Null Handling Functions: COALESCE(val1, val2, ...), NULLIF(val1, val2), and Vendor Equivalents (NVL, IFNULL)"
            ],
            "sections": [
                  {
                        "heading": "1. Function Processing Architecture & Determinism",
                        "text": "Built-in SQL functions perform transformations on column values. Understanding function determinism governs how the relational engine optimizes queries:",
                        "bulletPoints": [
                              "Deterministic Functions: Functions that always return the exact same output value given the same input arguments (e.g. `UPPER('admin')`, `ROUND(12.5)`). Allowed inside Functional Expression Indexes (`CREATE INDEX ... ON UPPER(email)`).",
                              "Non-Deterministic Functions: Functions whose output varies across executions or system clock ticks (e.g. `CURRENT_TIMESTAMP`, `RANDOM()`, `UUID_GENERATE_V4()`). Cannot be used inside static expression indexes because output values change dynamically."
                        ]
                  },
                  {
                        "heading": "2. String Parsing & Transformation Functions Matrix",
                        "text": "String functions manipulate textual column data for cleaning, parsing, and formatting output streams:",
                        "table": {
                              "headers": [
                                    "String Function",
                                    "Syntax Pattern",
                                    "Output Example",
                                    "Primary Enterprise Use Case"
                              ],
                              "rows": [
                                    [
                                          "LENGTH(str)",
                                          "LENGTH('Database')",
                                          "8",
                                          "Validating password/input string lengths"
                                    ],
                                    [
                                          "SUBSTRING(str, start, len)",
                                          "SUBSTRING('ABCDEF', 2, 3)",
                                          "'BCD'",
                                          "Parsing fixed-format codes or serial numbers"
                                    ],
                                    [
                                          "REPLACE(str, old, new)",
                                          "REPLACE('v1.0', '1.0', '2.0')",
                                          "'v2.0'",
                                          "Cleaning domain names or URL paths"
                                    ],
                                    [
                                          "TRIM(str)",
                                          "TRIM('  hello  ')",
                                          "'hello'",
                                          "Stripping leading/trailing whitespace"
                                    ],
                                    [
                                          "POSITION(sub IN str)",
                                          "POSITION('@' IN email)",
                                          "6",
                                          "Locating delimiter positions"
                                    ],
                                    [
                                          "UPPER(str) / LOWER(str)",
                                          "UPPER('admin')",
                                          "'ADMIN'",
                                          "Standardizing string casing for comparison"
                                    ],
                                    [
                                          "INITCAP(str)",
                                          "INITCAP('john doe')",
                                          "'John Doe'",
                                          "Formatting human proper names"
                                    ],
                                    [
                                          "LPAD(str, len, pad)",
                                          "LPAD('42', 5, '0')",
                                          "'00042'",
                                          "Formatting fixed-width invoice numbers"
                                    ],
                                    [
                                          "REGEXP_REPLACE()",
                                          "REGEXP_REPLACE(phone, '\\D', '', 'g')",
                                          "'5551234567'",
                                          "Stripping non-numeric characters from phone strings"
                                    ]
                              ]
                        }
                  },
                  {
                        "heading": "3. Mathematical & Numeric Functions Matrix",
                        "text": "Numeric functions perform rounding, truncation, and absolute value calculations on integer and decimal columns:",
                        "table": {
                              "headers": [
                                    "Numeric Function",
                                    "Syntax Pattern",
                                    "Output Example",
                                    "Description / Behavior"
                              ],
                              "rows": [
                                    [
                                          "ROUND(num, decimals)",
                                          "ROUND(125.456, 2)",
                                          "125.46",
                                          "Rounds to specified decimal places"
                                    ],
                                    [
                                          "TRUNC(num, decimals)",
                                          "TRUNC(125.456, 2)",
                                          "125.45",
                                          "Truncates digits without rounding"
                                    ],
                                    [
                                          "CEIL(num) / CEILING",
                                          "CEIL(4.1)",
                                          "5",
                                          "Rounds up to next integer"
                                    ],
                                    [
                                          "FLOOR(num)",
                                          "FLOOR(4.9)",
                                          "4",
                                          "Rounds down to lower integer"
                                    ],
                                    [
                                          "ABS(num)",
                                          "ABS(-42.5)",
                                          "42.5",
                                          "Returns positive absolute magnitude"
                                    ],
                                    [
                                          "MOD(n, m)",
                                          "MOD(10, 3)",
                                          "1",
                                          "Returns remainder of division"
                                    ],
                                    [
                                          "POWER(base, exp)",
                                          "POWER(2, 3)",
                                          "8",
                                          "Calculates base raised to exponent"
                                    ]
                              ]
                        }
                  },
                  {
                        "heading": "4. Temporal (Date & Time) Manipulation & Time-Series Bucketing",
                        "text": "Temporal functions process timestamps, calculate elapsed intervals, and bucket dates into time-series intervals:",
                        "bulletPoints": [
                              "CURRENT_DATE & CURRENT_TIMESTAMP: Returns current session date and timezone-aware timestamp.",
                              "EXTRACT(field FROM timestamp): Extracts date components (e.g. `EXTRACT(YEAR FROM created_at)`, `EXTRACT(DOW FROM created_at)` for Day of Week).",
                              "DATE_TRUNC('unit', timestamp): Truncates timestamp to specified precision (e.g. `DATE_TRUNC('month', created_at)` rounds all timestamps in June 2026 to `'2026-06-01 00:00:00'`). Crucial for monthly time-series analytics!",
                              "AGE(timestamp1, timestamp2): Calculates precise elapsed duration intervals between two dates (e.g. `AGE(CURRENT_DATE, birth_date)` returns `'34 years 5 months 12 days'`).",
                              "Date Interval Arithmetic: Add or subtract explicit interval durations: `CURRENT_TIMESTAMP + INTERVAL '30 days'` or `order_date - INTERVAL '2 hours'`."
                        ]
                  },
                  {
                        "heading": "5. Conditional Expressions (CASE) & Null Handling (COALESCE, NULLIF)",
                        "text": "Conditional expressions provide `if-then-else` branching logic directly inside SQL queries:",
                        "bulletPoints": [
                              "Searched CASE Expression (Most Versatile):",
                              "• Syntax: `CASE WHEN salary > 100000 THEN 'Executive' WHEN salary > 60000 THEN 'Senior' ELSE 'Junior' END AS tier`",
                              "• Evaluates boolean conditions sequentially; returns the `THEN` value of the first matching `TRUE` condition.",
                              "Simple CASE Expression: Evaluates discrete matches: `CASE department_id WHEN 1 THEN 'IT' WHEN 2 THEN 'HR' ELSE 'Other' END`.",
                              "COALESCE(val1, val2, ...): Returns the FIRST NON-NULL value in a list of arguments. Used to substitute fallback values for missing data: `COALESCE(phone_number, mobile_number, 'N/A')`.",
                              "NULLIF(val1, val2): Returns `NULL` if `val1 == val2`; otherwise returns `val1`. Prevents division-by-zero errors: `total / NULLIF(count, 0)`.",
                              "Vendor Compatibility Matrix: `COALESCE` and `NULLIF` are standard ANSI SQL. Oracle uses `NVL(a, b)`, MySQL uses `IFNULL(a, b)`, and SQL Server uses `ISNULL(a, b)`."
                        ]
                  }
            ],
            "codeExamples": [
                  {
                        "title": "Complex String Parsing, Regex Replacement & Date Truncation",
                        "code": "-- 1. Extract email domain, strip non-numeric phone chars, and format account codes\nSELECT \n    user_id,\n    email,\n    -- Extract domain name after '@' character\n    LOWER(SUBSTRING(email FROM POSITION('@' IN email) + 1)) AS email_domain,\n    -- Strip non-numeric characters from phone numbers using Regex\n    REGEXP_REPLACE(phone_number, 'D', '', 'g') AS clean_phone_digits,\n    -- Format zero-padded fixed-width account code\n    LPAD(user_id::text, 8, '0') AS formatted_account_code\nFROM users;\n\n-- 2. Monthly Revenue Time-Series Analytics with Searched CASE classification\nSELECT \n    DATE_TRUNC('month', o.order_date) AS sales_month,\n    COUNT(o.order_id) AS total_orders,\n    ROUND(SUM(o.order_total), 2) AS gross_revenue,\n    \n    -- Searched CASE statement categorizing monthly performance tiers\n    CASE \n        WHEN SUM(o.order_total) >= 100000.00 THEN 'Platinum Month'\n        WHEN SUM(o.order_total) >= 50000.00  THEN 'Gold Month'\n        ELSE 'Standard Month'\n    END AS performance_tier\nFROM orders AS o\nWHERE o.order_date >= '2026-01-01'\nGROUP BY DATE_TRUNC('month', o.order_date)\nORDER BY sales_month ASC;",
                        "explanation": "Demonstrates string parsing (SUBSTRING, POSITION), REGEXP_REPLACE phone cleaning, padding (LPAD), date truncation for time-series grouping (DATE_TRUNC), and Searched CASE statement tiering."
                  },
                  {
                        "title": "Temporal Math (AGE, EXTRACT) & Null Handling (COALESCE, NULLIF)",
                        "code": "-- 1. Calculate employee tenure and age intervals\nSELECT \n    employee_id,\n    first_name || ' ' || last_name AS full_name,\n    hire_date,\n    AGE(CURRENT_DATE, hire_date) AS exact_tenure_duration,\n    EXTRACT(YEAR FROM AGE(CURRENT_DATE, hire_date)) AS years_employed\nFROM enterprise_employees;\n\n-- 2. Null handling with COALESCE fallback values and safe division with NULLIF\nSELECT \n    p.product_name,\n    COALESCE(p.secondary_email, p.primary_email, 'no-email@company.com') AS contact_email,\n    p.total_sales_revenue,\n    p.units_sold,\n    -- NULLIF prevents division by zero if units_sold is 0!\n    ROUND(p.total_sales_revenue / NULLIF(p.units_sold, 0), 2) AS avg_unit_price\nFROM products AS p;",
                        "explanation": "Demonstrates date interval arithmetic using AGE and EXTRACT, fallbacks with COALESCE, and safe division using NULLIF."
                  }
            ],
            "bestPractices": [
                  "Use `DATE_TRUNC('month', date)` to bucket timestamps for clean time-series trend reports.",
                  "Use Searched `CASE WHEN` expressions to categorize metrics dynamically inside SELECT projections.",
                  "Always use `COALESCE(col, fallback)` to replace missing NULL values with human-readable text.",
                  "Use `NULLIF(denominator, 0)` when dividing columns to prevent production division-by-zero crashes.",
                  "Remember that functions applied to indexed columns in `WHERE` predicates disable SARGable B-Tree index scans."
            ],
            "commonMistakes": [
                  "Forgetting the `END` keyword in `CASE` expressions, causing SQL parser syntax errors.",
                  "Using `SUBSTRING` without checking string length bounds, causing truncation bugs.",
                  "Confusing `COALESCE` (returns first non-null) with `NULLIF` (returns NULL if args match).",
                  "Using `ROUND()` on floating-point `REAL` columns instead of `NUMERIC`, causing floating-point binary representation artifacts."
            ],
            "practiceExercise": {
                  "title": "Date Functions & CASE Expression Challenge",
                  "problem": "Perform the following two tasks:\n1. Write a SQL query using `COALESCE` that returns `work_phone`, `mobile_phone`, or 'No Phone On File' in order of preference.\n\n2. Write a SQL SELECT query on an `orders` table returning `order_id`, `order_total`, and a column `shipping_speed` calculated via `CASE`:\n   • 'Express' if `order_total >= 200`\n   • 'Priority' if `order_total >= 100`\n   • 'Standard' for all other amounts.",
                  "solutionCode": "-- Exercise 1 COALESCE Solution:\nSELECT COALESCE(work_phone, mobile_phone, 'No Phone On File') AS contact_phone\nFROM contacts;\n\n-- Exercise 2 CASE Query Solution:\nSELECT \n    order_id,\n    order_total,\n    CASE \n        WHEN order_total >= 200.00 THEN 'Express'\n        WHEN order_total >= 100.00 THEN 'Priority'\n        ELSE 'Standard'\n    END AS shipping_speed\nFROM orders;"
            },
            "keyTakeaways": [
                  "Built-in SQL functions perform string, math, and date transformations on the database server.",
                  "`DATE_TRUNC('unit', date)` truncates timestamps to specified units (month, day, year) for time-series grouping.",
                  "Searched `CASE WHEN ... THEN ... ELSE ... END` provides versatile if-then-else branching logic.",
                  "`COALESCE(a, b, c)` returns the first non-null argument in a list.",
                  "`NULLIF(a, b)` returns NULL if arguments match, preventing division-by-zero errors."
            ]
      }
},

      {
      "id": "sql-mod-13",
      "title": "Module 13 — Views, Indexes & Database Optimization",
      "description": "Master Database Performance Engineering & Architecture: Standard Virtual Views (CREATE VIEW, Updatable Views, Security Column Masking), Materialized Views (CREATE MATERIALIZED VIEW, REFRESH MATERIALIZED VIEW CONCURRENTLY), B-Tree Index Architecture (Root, Branch, Leaf TIDs, O(log N) logarithmic search), Composite Multi-Column Indexes, Leftmost Prefix Rule, Unique Indexes, Partial / Filtered Indexes (WHERE clause scoped), Expression / Functional Indexes (UPPER/LOWER), Specialized Indexes (Hash, GIN for JSONB, GiST), Cost-Based Optimizer (CBO Table Statistics), EXPLAIN ANALYZE Plan Inspection (Seq Scan, Index Scan, Index-Only Scan, Bitmap Heap Scan), Index Write Penalties, and Unused Index Cleanup.",
      "completed": false,
      "order": 13,
      "published": true,
      "readingMaterial": {
            "introduction": "Welcome to Module 13! As enterprise database tables grow to millions or billions of rows, query performance engineering becomes the top priority for database architects, system engineers, and backend developers. Unindexed queries cause high CPU utilization, disk I/O bottlenecks, and slow application latency. Views encapsulate complex query logic, Materialized Views cache expensive aggregate calculations physically on disk, and B-Tree Indexes enable sub-millisecond data lookups. Mastering indexing strategy, query execution plan analysis (`EXPLAIN ANALYZE`), and SARGable optimization is essential for senior database engineers.",
            "objectives": [
                  "Master Standard Virtual Views (CREATE VIEW): Encapsulating complex joins, simplifying query code, and enforcing column security masking",
                  "Understand Updatable Virtual Views and rules for issuing INSERT/UPDATE statements through views",
                  "Master Materialized Views (CREATE MATERIALIZED VIEW): Caching expensive aggregate summaries with zero-downtime background updates (REFRESH MATERIALIZED VIEW CONCURRENTLY)",
                  "Deconstruct B-Tree Index Architecture: Root nodes, branch nodes, leaf node TIDs, and logarithmic $O(\\log N)$ search complexity",
                  "Design Composite Multi-Column Indexes and enforce the strict Leftmost Prefix Rule",
                  "Implement Specialized Indexes: Unique Indexes, Partial Filtered Indexes, Expression Functional Indexes, and GIN Indexes for JSONB",
                  "Deconstruct the Cost-Based Optimizer (CBO) and table statistics (ANALYZE, column histograms, distinct value counts)",
                  "Analyze Query Execution Plans using EXPLAIN ANALYZE (Seq Scan, Index Scan, Index-Only Scan, Bitmap Heap Scan)",
                  "Evaluate Index Maintenance Overhead: Understanding INSERT/UPDATE/DELETE write penalties and dropping bloated unused indexes"
            ],
            "sections": [
                  {
                        "heading": "1. Virtual Views vs Materialized Views Architecture",
                        "text": "Views encapsulate complex SQL queries into reusable virtual tables:",
                        "table": {
                              "headers": [
                                    "View Type",
                                    "Physical Storage",
                                    "Query Execution Behavior",
                                    "Data Freshness",
                                    "Primary Enterprise Scenario"
                              ],
                              "rows": [
                                    [
                                          "Standard Virtual View",
                                          "Virtual (Stores SQL text in catalog)",
                                          "Executes underlying SQL query on-the-fly every time view is queried",
                                          "Always 100% Real-Time",
                                          "Simplifying complex joins & masking sensitive columns"
                                    ],
                                    [
                                          "Materialized View",
                                          "Physical Disk Heap (Caches result rows on disk)",
                                          "Reads cached physical rows directly from disk pages without re-running query",
                                          "Snapshot (Updated via REFRESH MATERIALIZED VIEW)",
                                          "High-volume analytical dashboards & complex aggregate caching"
                                    ]
                              ]
                        },
                        "bulletPoints": [
                              "Security Column Masking: Virtual Views allow granting users access to calculated or masked fields without exposing raw table columns (e.g. `SELECT id, name, 'XXX-XX-' || RIGHT(ssn, 4) AS masked_ssn FROM employees`).",
                              "Refreshing Materialized Views:",
                              "• `REFRESH MATERIALIZED VIEW view_name;` (Default: Acquires an exclusive lock, blocking concurrent client read queries while refreshing).",
                              "• `REFRESH MATERIALIZED VIEW CONCURRENTLY view_name;` (Zero-Downtime Refresh: Updates cached rows in the background without blocking concurrent client reads; requires a unique index on the materialized view!)."
                        ]
                  },
                  {
                        "heading": "2. Relational Index Architecture & B-Tree Mechanics",
                        "text": "An index is a specialized data structure (typically a self-balancing B-Tree) that stores column values in sorted order alongside Tuple IDs (TIDs/CTIDs) pointing to physical table heap blocks:",
                        "bulletPoints": [
                              "B-Tree Search Complexity: Navigating a B-Tree index requires $O(\\log N)$ operations. Looking up a row in a 10,000,000 row table requires only ~3 to 4 index page reads!",
                              "Composite Multi-Column Indexes & The Leftmost Prefix Rule:",
                              "• A composite index created on `(country, state, city)` is sorted primarily by `country`, then `state`, then `city`.",
                              "• Leftmost Prefix Rule: Queries filtering by `country` or `(country, state)` use the index. Queries filtering ONLY by `city` CANNOT use the index because the leftmost lead column (`country`) is omitted!",
                              "Partial Indexes (Filtered Indexes):",
                              "• `CREATE INDEX idx_active_users ON users (email) WHERE is_active = TRUE;`",
                              "• Indexes ONLY matching rows, saving up to 90% of disk space and reducing index maintenance write penalties!",
                              "Expression Indexes (Functional Indexes):",
                              "• `CREATE INDEX idx_upper_email ON users (UPPER(email));` enables non-SARGable function calls like `WHERE UPPER(email) = 'TEST@GMAIL.COM'` to use B-Tree index lookups!",
                              "GIN (Generalized Inverted Index): Specialized index for multi-value types (JSONB documents, array columns, full-text search)."
                        ],
                        "table": {
                              "headers": [
                                    "Index Pattern",
                                    "Syntax Example",
                                    "Disk RAM Footprint",
                                    "Primary Enterprise Use Case"
                              ],
                              "rows": [
                                    [
                                          "Standard B-Tree",
                                          "CREATE INDEX idx_email ON users(email);",
                                          "Full (Indexes 100% of rows)",
                                          "Primary keys, foreign keys, exact equality lookups"
                                    ],
                                    [
                                          "Composite Index",
                                          "CREATE INDEX idx_c_s ON users(country, state);",
                                          "Full (Multi-column keys)",
                                          "Multi-column filtering respecting Leftmost Prefix"
                                    ],
                                    [
                                          "Partial Index",
                                          "CREATE INDEX idx ON users(email) WHERE active=TRUE;",
                                          "Tiny (Indexes filtered subset)",
                                          "Indexing active accounts or unfulfilled orders"
                                    ],
                                    [
                                          "Expression Index",
                                          "CREATE INDEX idx ON users(LOWER(email));",
                                          "Full (Pre-computed expression)",
                                          "Case-insensitive searches or calculated formulas"
                                    ],
                                    [
                                          "GIN Index",
                                          "CREATE INDEX idx ON users USING gin(preferences);",
                                          "Variable",
                                          "Fast key/value searches inside JSONB documents"
                                    ]
                              ]
                        }
                  },
                  {
                        "heading": "3. Analyzing Execution Plans with EXPLAIN ANALYZE",
                        "text": "The `EXPLAIN ANALYZE` command executes a SQL statement and outputs the Cost-Based Optimizer's execution plan detailing physical scan nodes, estimated costs, and real timing metrics:",
                        "table": {
                              "headers": [
                                    "Scan Node Type",
                                    "Execution Behavior",
                                    "Performance Level",
                                    "When Engine Chooses Node"
                              ],
                              "rows": [
                                    [
                                          "Sequential Scan (Seq Scan)",
                                          "Scans 100% of table heap pages row-by-row",
                                          "Slow on large tables ($O(N)$)",
                                          "Un-indexed tables or fetching >20% of rows"
                                    ],
                                    [
                                          "Index Scan",
                                          "Navigates B-Tree index to fetch table heap pages",
                                          "Ultra-Fast ($O(\\log N)$)",
                                          "Selective lookups on indexed columns"
                                    ],
                                    [
                                          "Index Only Scan",
                                          "Fetches rows directly from B-Tree RAM pages (Skips heap)",
                                          "Fastest Possible",
                                          "All requested SELECT columns exist in index"
                                    ],
                                    [
                                          "Bitmap Index Scan",
                                          "Scans index to build bitmap of matching pages, then reads heap",
                                          "Very Fast",
                                          "Combining multiple indexes or range queries"
                                    ]
                              ]
                        },
                        "bulletPoints": [
                              "Understanding Plan Cost Notation: `cost=0.00..450.12 rows=105 width=32`",
                              "• `0.00`: Startup cost (cost to fetch first row).",
                              "• `450.12`: Total estimated cost (CPU + Disk I/O units) to complete the node.",
                              "• `rows=105`: Estimated number of rows output by the node.",
                              "• `width=32`: Average byte width per returned row tuple."
                        ]
                  },
                  {
                        "heading": "4. Index Maintenance Overhead & Storage Engineering Trade-Offs",
                        "text": "While indexes accelerate SELECT read queries, they impose storage and write penalties:",
                        "bulletPoints": [
                              "Write Penalty: Every `INSERT`, `UPDATE`, or `DELETE` statement must update the main table heap AND all associated B-Tree index structures. Over-indexing tables degrades write throughput.",
                              "Unused Index Cleanup: Monitor index usage via system catalogs (`pg_stat_user_indexes`) and drop unused or redundant indexes to free up RAM buffer pool memory."
                        ]
                  }
            ],
            "codeExamples": [
                  {
                        "title": "Creating Virtual & Materialized Views with Concurrent Refresh",
                        "code": "-- 1. Standard Virtual View encapsulating multi-table customer summary\nCREATE OR REPLACE VIEW v_customer_order_summary AS\nSELECT \n    c.customer_id,\n    c.first_name || ' ' || c.last_name AS customer_name,\n    c.email,\n    COUNT(o.order_id) AS total_orders_placed,\n    COALESCE(SUM(o.order_total), 0.00) AS lifetime_spend\nFROM customers AS c\nLEFT JOIN orders AS o ON c.customer_id = o.customer_id\nGROUP BY c.customer_id, c.first_name, c.last_name, c.email;\n\n-- 2. Materialized View caching heavy monthly sales analytics on disk\nCREATE MATERIALIZED VIEW mv_monthly_sales_summary AS\nSELECT \n    DATE_TRUNC('month', order_date) AS sales_month,\n    COUNT(order_id) AS order_count,\n    SUM(order_total) AS gross_revenue\nFROM orders\nGROUP BY DATE_TRUNC('month', order_date);\n\n-- Unique index required for zero-downtime concurrent refreshes!\nCREATE UNIQUE INDEX uq_mv_monthly_sales ON mv_monthly_sales_summary (sales_month);\n\n-- Refresh Materialized View concurrently in background without blocking reads\nREFRESH MATERIALIZED VIEW CONCURRENTLY mv_monthly_sales_summary;",
                        "explanation": "Demonstrates Virtual Views for query encapsulation, Materialized Views for caching expensive aggregates, and zero-downtime background refreshes."
                  },
                  {
                        "title": "Advanced B-Tree Indexing Strategies & EXPLAIN ANALYZE Inspection",
                        "code": "-- 1. Composite B-Tree Index respecting Leftmost Prefix Rule\nCREATE INDEX idx_orders_customer_status_date \nON orders (customer_id, order_status, order_date DESC);\n\n-- 2. Partial Index (Filters active records only)\nCREATE INDEX idx_pending_orders \nON orders (order_id) \nWHERE order_status = 'Pending';\n\n-- 3. Expression Index for case-insensitive search\nCREATE INDEX idx_users_lower_email \nON users (LOWER(email));\n\n-- 4. Inspecting Query Execution Plan with EXPLAIN ANALYZE\nEXPLAIN ANALYZE\nSELECT order_id, order_date, order_total\nFROM orders\nWHERE customer_id = 10482\n  AND order_status = 'Pending'\nORDER BY order_date DESC;",
                        "explanation": "Demonstrates composite indexes, partial indexes, expression indexes, and inspecting physical scan nodes using EXPLAIN ANALYZE."
                  }
            ],
            "bestPractices": [
                  "Always create B-Tree indexes on Foreign Key columns to accelerate JOINs and avoid lock escalation.",
                  "Place the most selective column first in composite indexes to respect the Leftmost Prefix Rule.",
                  "Use Partial Indexes (`WHERE is_active = TRUE`) to keep index sizes small and save RAM buffer memory.",
                  "Use Materialized Views for heavy reporting dashboards, refreshing them on a scheduled background cron job.",
                  "Always analyze query execution plans with `EXPLAIN ANALYZE` to identify Sequential Scans and non-SARGable predicates."
            ],
            "commonMistakes": [
                  "Over-indexing tables with 15+ indexes, severely degrading `INSERT`, `UPDATE`, and `DELETE` write throughput.",
                  "Creating a composite index on `(A, B, C)` and attempting to query by `C` alone, violating the Leftmost Prefix Rule.",
                  "Assuming Virtual Views improve query performance; Virtual Views execute their underlying SQL query on-the-fly every time.",
                  "Forgetting to create a unique index on a Materialized View, preventing `REFRESH MATERIALIZED VIEW CONCURRENTLY`."
            ],
            "practiceExercise": {
                  "title": "Indexing Strategy & EXPLAIN ANALYZE Challenge",
                  "problem": "Perform the following two tasks:\n1. Explain why a query `SELECT * FROM users WHERE state = 'NY'` CANNOT use a composite B-Tree index created on `(last_name, first_name, state)`.\n\n2. Write a SQL DDL statement to create a Partial B-Tree Index named `idx_unpaid_invoices` on an `invoices` table (`customer_id`, `due_date`) that indexes ONLY rows where `status = 'Unpaid'`.",
                  "solutionCode": "-- Exercise 1 Explanation:\n-- Leftmost Prefix Rule Violation: A composite index on (last_name, first_name, state) is sorted \n-- primarily by last_name. Querying by 'state' alone skips the leftmost lead columns, forcing a Sequential Scan.\n\n-- Exercise 2 Partial Index Solution:\nCREATE INDEX idx_unpaid_invoices \nON invoices (customer_id, due_date) \nWHERE status = 'Unpaid';"
            },
            "keyTakeaways": [
                  "Virtual Views simplify query code; Materialized Views cache aggregate results physically on disk pages.",
                  "B-Tree Indexes provide $O(\\log N)$ lookup performance by storing ordered keys alongside heap page pointers.",
                  "Composite indexes require queries to filter by the Leftmost Prefix column to utilize the index.",
                  "Partial Indexes (`WHERE condition`) reduce disk and RAM footprints by indexing only matching rows.",
                  "`EXPLAIN ANALYZE` reveals whether the database engine executes an Index Scan, Index-Only Scan, or Sequential Scan."
            ]
      }
},

      {
      "id": "sql-mod-14",
      "title": "Module 14 — Transactions, TCL & Database Security",
      "description": "Master Database Reliability & Security Engineering: ACID Properties (Atomicity, Consistency, Isolation, Durability), Write-Ahead Logging (WAL), Multi-Version Concurrency Control (MVCC tuple xmin/xmax), Transaction Control Language (BEGIN, COMMIT, ROLLBACK, SAVEPOINT), Concurrency Anomalies (Dirty Reads, Non-Repeatable Reads, Phantom Reads, Serialization Anomalies), Transaction Isolation Levels (READ UNCOMMITTED, READ COMMITTED, REPEATABLE READ, SERIALIZABLE), Pessimistic Row Locking (SELECT ... FOR UPDATE), Database Security (DCL GRANT, REVOKE, RBAC Principle of Least Privilege), and PostgreSQL Row-Level Security (RLS) Multi-Tenant Isolation.",
      "completed": false,
      "order": 14,
      "published": true,
      "readingMaterial": {
            "introduction": "Welcome to Module 14! In modern multi-user enterprise applications, thousands of client transactions execute concurrently against the database server. Ensuring data correctness requires robust Transaction Control Language (TCL), strict concurrency isolation levels, explicit row locking, and fine-grained security role permissions. Transactions guarantee ACID properties (Atomicity, Consistency, Isolation, Durability)—ensuring multi-step operations (like bank funds transfers or inventory allocation) either succeed 100% or fail safely with zero data corruption. Mastering TCL transactions, MVCC concurrency control, and Role-Based Access Security (RBAC) is mandatory for enterprise backend engineers.",
            "objectives": [
                  "Master the 4 ACID Guarantees: Atomicity, Consistency, Isolation, and Durability",
                  "Understand Write-Ahead Logging (WAL) and Multi-Version Concurrency Control (MVCC xmin/xmax tuple versions)",
                  "Execute Transaction Control Language (TCL) commands: BEGIN / START TRANSACTION, COMMIT, ROLLBACK, and SAVEPOINT",
                  "Analyze Concurrency Anomalies: Dirty Reads, Non-Repeatable Reads, Phantom Reads, and Serialization Anomalies",
                  "Deconstruct the 4 ANSI Transaction Isolation Levels: READ UNCOMMITTED, READ COMMITTED, REPEATABLE READ, and SERIALIZABLE",
                  "Master Explicit Row Locking using SELECT ... FOR UPDATE to eliminate application-level race conditions",
                  "Implement Database Access Security using DCL statements (GRANT, REVOKE) and Role-Based Access Control (RBAC)",
                  "Configure PostgreSQL Row-Level Security (RLS) policies for multi-tenant data isolation"
            ],
            "sections": [
                  {
                        "heading": "1. The 4 ACID Properties & Relational Engine Guarantees",
                        "text": "ACID is the set of database engine guarantees that ensure transactional reliability across concurrent operations:",
                        "bulletPoints": [
                              "1. Atomicity ('All-or-Nothing'): Ensures that all SQL statements within a transaction boundary complete successfully. If any statement fails, the engine rolls back ALL changes, leaving the database in its original state.",
                              "2. Consistency: Guarantees that a transaction transforms the database from one valid state to another, strictly obeying all schema constraints (NOT NULL, UNIQUE, CHECK, Foreign Keys).",
                              "3. Isolation (MVCC): Ensures that concurrently executing transactions do not interfere with or observe incomplete transient states of other transactions. PostgreSQL and MySQL achieve isolation using Multi-Version Concurrency Control (MVCC), maintaining multiple version tuples (`xmin`, `xmax`) in RAM/heap memory.",
                              "4. Durability: Guarantees that once a transaction commits, its modifications are permanently written to Write-Ahead Logs (WAL) and disk storage (`fsync`), surviving power failures or system crashes."
                        ]
                  },
                  {
                        "heading": "2. Transaction Control Language (TCL) & Savepoints",
                        "text": "TCL manages transactional boundaries and state modifications:",
                        "bulletPoints": [
                              "BEGIN / START TRANSACTION: Marks the starting boundary of an explicit multi-query transaction.",
                              "COMMIT: Permanently writes all uncommitted transactional state changes to disk storage.",
                              "ROLLBACK: Aborts the transaction and reverts all uncommitted modifications back to the initial state.",
                              "SAVEPOINT name & ROLLBACK TO name:",
                              "• Creates intermediate checkpoints within a long multi-step transaction.",
                              "• Allows rolling back partial failures to a specific savepoint without aborting the entire transaction!"
                        ]
                  },
                  {
                        "heading": "3. Concurrency Anomalies & The 4 ANSI Isolation Levels",
                        "text": "When multiple transactions execute concurrently, isolation level settings determine protection against concurrency anomalies:",
                        "table": {
                              "headers": [
                                    "Isolation Level",
                                    "Dirty Read",
                                    "Non-Repeatable Read",
                                    "Phantom Read",
                                    "Serialization Anomaly",
                                    "Performance / Concurrency"
                              ],
                              "rows": [
                                    [
                                          "READ UNCOMMITTED",
                                          "Possible",
                                          "Possible",
                                          "Possible",
                                          "Possible",
                                          "Highest concurrency (No read locks)"
                                    ],
                                    [
                                          "READ COMMITTED (Postgres Default)",
                                          "Prevented",
                                          "Possible",
                                          "Possible",
                                          "Possible",
                                          "High performance (Default in most RDBMS)"
                                    ],
                                    [
                                          "REPEATABLE READ",
                                          "Prevented",
                                          "Prevented",
                                          "Prevented (In Postgres)",
                                          "Possible",
                                          "Medium concurrency (Snapshot isolation)"
                                    ],
                                    [
                                          "SERIALIZABLE",
                                          "Prevented",
                                          "Prevented",
                                          "Prevented",
                                          "Prevented",
                                          "Lowest concurrency (Strict serial ordering)"
                                    ]
                              ]
                        },
                        "bulletPoints": [
                              "Anomaly Definitions:",
                              "• Dirty Read: Reading uncommitted data modified by another concurrent transaction (which might subsequently roll back!).",
                              "• Non-Repeatable Read: Re-reading a row within the same transaction yields DIFFERENT column values because another transaction committed an UPDATE.",
                              "• Phantom Read: Re-executing a range query within the same transaction yields NEW rows because another transaction committed an INSERT.",
                              "Pessimistic Row Locking (SELECT ... FOR UPDATE): Locks target rows with an Exclusive Lock (X-Lock), forcing concurrent transactions to wait until the current transaction commits."
                        ]
                  },
                  {
                        "heading": "4. Database Security: DCL (GRANT / REVOKE), RBAC & Row-Level Security (RLS)",
                        "text": "Securing database access requires enforcing Principle of Least Privilege security models:",
                        "bulletPoints": [
                              "Role-Based Access Control (RBAC):",
                              "• `CREATE ROLE app_service_user WITH LOGIN PASSWORD 'SecurePass123!';`",
                              "• `GRANT SELECT, INSERT, UPDATE ON ALL TABLES IN SCHEMA public TO app_service_user;`",
                              "• `REVOKE DELETE ON ALL TABLES IN SCHEMA public FROM app_service_user;` (Prevents application service account from deleting data).",
                              "Row-Level Security (RLS in PostgreSQL):",
                              "• Enforces fine-grained security policies directly inside the storage engine, restricting which rows a specific user or tenant can view:",
                              "• `ALTER TABLE tenant_data ENABLE ROW LEVEL SECURITY;`",
                              "• `CREATE POLICY tenant_isolation_policy ON tenant_data FOR ALL USING (tenant_id = current_setting('app.current_tenant_id'));`"
                        ]
                  }
            ],
            "codeExamples": [
                  {
                        "title": "Atomic Bank Transfer Transaction with Savepoints & Row Locking",
                        "code": "-- Bank Account Transfer with Pessimistic Row Locking and Savepoints\nBEGIN TRANSACTION;\n\n-- Step 1: Explicit Row Locking (SELECT FOR UPDATE) to prevent concurrent balance modifications\nSELECT account_id, balance \nFROM bank_accounts \nWHERE account_id IN (101, 202) \nFOR UPDATE;\n\n-- Step 2: Deduct $500 from Sender (Account 101)\nUPDATE bank_accounts \nSET balance = balance - 500.00 \nWHERE account_id = 101 AND balance >= 500.00;\n\n-- Set a Savepoint before secondary operation\nSAVEPOINT transfer_deducted;\n\n-- Step 3: Credit $500 to Recipient (Account 202)\nUPDATE bank_accounts \nSET balance = balance + 500.00 \nWHERE account_id = 202;\n\n-- Step 4: Verify recipient update succeeded; if failed, rollback to savepoint!\n-- Otherwise, commit the atomic transaction permanently\nCOMMIT;",
                        "explanation": "Demonstrates an atomic financial transaction using SELECT FOR UPDATE row locking, balance deduction validation, SAVEPOINT creation, and permanent COMMIT."
                  },
                  {
                        "title": "Role-Based Access Security (DCL) & Row-Level Security (RLS) Setup",
                        "code": "-- 1. Provision Restricted Role-Based Application User (DCL)\nCREATE ROLE analyst_read_only WITH LOGIN PASSWORD 'AnalystPass2026!';\n\n-- Grant schema access and read-only SELECT permissions\nGRANT USAGE ON SCHEMA public TO analyst_read_only;\nGRANT SELECT ON ALL TABLES IN SCHEMA public TO analyst_read_only;\nREVOKE INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public FROM analyst_read_only;\n\n-- 2. Enable PostgreSQL Row-Level Security (RLS) for Multi-Tenant Data Isolation\nALTER TABLE customer_orders ENABLE ROW LEVEL SECURITY;\n\n-- Create policy restricting users to viewing ONLY their own tenant records!\nCREATE POLICY tenant_order_isolation_policy ON customer_orders\n    FOR ALL\n    TO app_service_user\n    USING (tenant_id = current_setting('app.current_tenant_id'));",
                        "explanation": "Demonstrates DCL security setup (GRANT, REVOKE), provision of restricted read-only roles, and enabling PostgreSQL Row-Level Security (RLS)."
                  }
            ],
            "bestPractices": [
                  "Keep explicit transaction boundaries (`BEGIN...COMMIT`) as short as possible to minimize row lock holding durations.",
                  "Always use `SELECT ... FOR UPDATE` when reading financial balances that will be updated in the same transaction.",
                  "Use `READ COMMITTED` (the default) for standard web workloads, and `SERIALIZABLE` or `REPEATABLE READ` for high-precision financial ledgers.",
                  "Never connect web applications using the DBA 'postgres' or 'root' superuser accounts; always create restricted application service roles.",
                  "Implement PostgreSQL Row-Level Security (RLS) for multi-tenant applications to prevent cross-tenant data leakage bugs."
            ],
            "commonMistakes": [
                  "Holding an open transaction during an external HTTP API network call, stalling database connection pools and acquiring long row locks.",
                  "Reading balance data with a plain `SELECT` before updating, allowing concurrent threads to cause Race Condition overdrafts.",
                  "Confusing `ROLLBACK` (reverts all transaction changes) with `ROLLBACK TO SAVEPOINT` (reverts changes back to intermediate checkpoint).",
                  "Granting `ALL PRIVILEGES` to application database users, creating severe security vulnerabilities if SQL Injection occurs."
            ],
            "practiceExercise": {
                  "title": "ACID & Concurrency Anomalies Challenge",
                  "problem": "Perform the following two tasks:\n1. Match each concurrency anomaly to its definition:\n   a. Dirty Read\n   b. Non-Repeatable Read\n   c. Phantom Read\n   • i. Re-reading a row yields different column values committed by another transaction.\n   • ii. Reading uncommitted data that may subsequently be rolled back.\n   • iii. Re-executing a range query returns new rows inserted by another committed transaction.\n\n2. Write a SQL DCL script that creates a role `billing_app`, grants `SELECT`, `INSERT`, `UPDATE` on table `invoices`, and explicitly revokes `DELETE` permissions.",
                  "solutionCode": "-- Exercise 1 Anomaly Matching Answers:\n-- a. Dirty Read          -> ii. Reading uncommitted data that may be rolled back.\n-- b. Non-Repeatable Read -> i. Re-reading a row yields different column values.\n-- c. Phantom Read        -> iii. Range query returns new inserted rows.\n\n-- Exercise 2 DCL Script Answer:\nCREATE ROLE billing_app WITH LOGIN PASSWORD 'BillingSecret2026!';\nGRANT SELECT, INSERT, UPDATE ON TABLE invoices TO billing_app;\nREVOKE DELETE ON TABLE invoices FROM billing_app;"
            },
            "keyTakeaways": [
                  "ACID properties (Atomicity, Consistency, Isolation, Durability) guarantee relational transaction reliability.",
                  "TCL commands (BEGIN, COMMIT, ROLLBACK, SAVEPOINT) define multi-query atomic boundaries.",
                  "`SELECT FOR UPDATE` acquires pessimistic row locks to prevent concurrent race conditions.",
                  "Isolation levels (READ COMMITTED, REPEATABLE READ, SERIALIZABLE) control trade-offs between concurrency speed and anomaly protection.",
                  "DCL (GRANT, REVOKE) and Row-Level Security (RLS) enforce Principle of Least Privilege database security."
            ]
      }
},

      {
      "id": "sql-mod-15",
      "title": "Module 15 — SQL for Data Analytics, Python & AI + Final Project",
      "description": "Master Advanced Data Analytics & AI Integration Architecture: Window Functions (ROW_NUMBER(), RANK(), DENSE_RANK(), NTILE(), FIRST_VALUE, LAST_VALUE), PARTITION BY & Window Framing (ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW), Navigation Functions (LAG, LEAD for MoM / YoY Growth %), Python Data Science Integration (psycopg2, sqlite3, SQLAlchemy create_engine, pandas.read_sql), SQL for AI & Vector Databases (pgvector extension, Cosine Distance <=> for RAG), and Comprehensive Capstone Final Project.",
      "completed": false,
      "order": 15,
      "published": true,
      "readingMaterial": {
            "introduction": "Welcome to Module 15, the capstone master module of the SQL & Relational Databases curriculum! Modern enterprise data engineering extends far beyond standard CRUD queries. Advanced analytical engineering relies on Window Functions (`OVER (PARTITION BY ...)`), cumulative running totals, Period-over-Period trend analysis (`LAG`/`LEAD`), Python data science stack integration (`pandas`, `SQLAlchemy`), and AI Vector Search (`pgvector`). This module synthesizes all curriculum topics into production-grade analytics skills and concludes with a comprehensive capstone final project.",
            "objectives": [
                  "Master Window Functions: OVER (PARTITION BY ... ORDER BY ...)",
                  "Deconstruct Ranking Window Functions: ROW_NUMBER(), RANK(), DENSE_RANK(), and NTILE(n)",
                  "Master Navigation Window Functions: LAG(col, offset) and LEAD(col, offset) for Month-over-Month (MoM) and Year-over-Year (YoY) growth analysis",
                  "Calculate Cumulative Running Totals and Moving Averages using Window Framing (ROWS BETWEEN ...)",
                  "Integrate SQL with Python Data Science Stacks: sqlite3, psycopg2, SQLAlchemy Engine, and pandas.read_sql()",
                  "Explore AI Vector Databases: Storing LLM embeddings and performing similarity searches with pgvector (Cosine Distance <=>)",
                  "Complete a Comprehensive Capstone Final Project synthesizing DDL, DML, Joins, Aggregation, CTEs, and Window Functions"
            ],
            "sections": [
                  {
                        "heading": "1. Advanced Window Functions & Ranking Mechanics",
                        "text": "Unlike standard aggregate functions (which collapse multiple rows into single summary groups), Window Functions calculate aggregate metrics across a subset of rows (a 'window') while preserving individual row identities:",
                        "table": {
                              "headers": [
                                    "Window Function",
                                    "Syntax Pattern",
                                    "Tie-Handling Behavior",
                                    "Primary Analytics Scenario"
                              ],
                              "rows": [
                                    [
                                          "ROW_NUMBER()",
                                          "ROW_NUMBER() OVER (ORDER BY sales DESC)",
                                          "Sequential integers (1, 2, 3, 4); breaks ties arbitrarily",
                                          "Pagination & deduplicating top-1 item per partition"
                                    ],
                                    [
                                          "RANK()",
                                          "RANK() OVER (ORDER BY score DESC)",
                                          "Gaps in rank sequence on ties (1, 2, 2, 4)",
                                          "Official competition leaderboards"
                                    ],
                                    [
                                          "DENSE_RANK()",
                                          "DENSE_RANK() OVER (ORDER BY score DESC)",
                                          "No gaps in rank sequence on ties (1, 2, 2, 3)",
                                          "Financial bonus tiers and product rankings"
                                    ],
                                    [
                                          "NTILE(n)",
                                          "NTILE(4) OVER (ORDER BY spend DESC)",
                                          "Divides dataset into n equal bucket quartiles (1 to 4)",
                                          "Customer segmentation & cohort quartile analysis"
                                    ]
                              ]
                        },
                        "bulletPoints": [
                              "Window Function Structure: `FUNCTION() OVER (PARTITION BY category ORDER BY sales DESC)`",
                              "• `PARTITION BY`: Segregates rows into independent calculation windows (similar to GROUP BY, but rows are NOT collapsed!).",
                              "• `ORDER BY`: Defines row calculation sequence within each partition.",
                              "Window Function Execution Stage: Window functions execute during Step 5 (`SELECT`) of the 8-step logical query pipeline—AFTER `WHERE`, `GROUP BY`, and `HAVING` have executed!"
                        ]
                  },
                  {
                        "heading": "2. Navigation Functions & Cumulative Moving Window Framing",
                        "text": "Analyzing business growth trends requires comparing row values against preceding or following records within a partition:",
                        "bulletPoints": [
                              "LAG(column, offset, default): Accesses data from a PREVIOUS row in the partition (e.g. `LAG(monthly_sales, 1)` retrieves previous month's revenue to calculate Month-over-Month growth %).",
                              "LEAD(column, offset, default): Accesses data from a FOLLOWING row in the partition.",
                              "Window Framing Specifications (ROWS BETWEEN ...):",
                              "• Cumulative Running Total: `SUM(order_total) OVER (PARTITION BY customer_id ORDER BY order_date ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW)` (Calculates a cumulative lifetime spend total that updates dynamically row-by-row!).",
                              "• 3-Period Moving Average: `AVG(sales) OVER (ORDER BY sales_month ROWS BETWEEN 2 PRECEDING AND CURRENT ROW)` (Smooths out short-term fluctuations in financial metrics)."
                        ],
                        "table": {
                              "headers": [
                                    "Window Frame Specification",
                                    "Syntax Pattern",
                                    "Frame Boundary Covered",
                                    "Primary Analytical Use Case"
                              ],
                              "rows": [
                                    [
                                          "Cumulative Running Total",
                                          "ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW",
                                          "From partition start to current row",
                                          "Lifetime account spend, cumulative customer revenue"
                                    ],
                                    [
                                          "Moving Average",
                                          "ROWS BETWEEN 2 PRECEDING AND CURRENT ROW",
                                          "Current row plus 2 preceding rows",
                                          "3-month rolling sales average"
                                    ],
                                    [
                                          "Centered Window",
                                          "ROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING",
                                          "1 row before, current row, 1 row after",
                                          "Smoothing volatile sensor / stock price data"
                                    ]
                              ]
                        }
                  },
                  {
                        "heading": "3. Python Data Science Integration: pandas, SQLAlchemy & psycopg2",
                        "text": "Modern data science workflows connect Python scripts directly to relational database engines for automated reporting pipelines:",
                        "bulletPoints": [
                              "SQLAlchemy Engine: The industry-standard Python Object Relational Mapper (ORM) connection bridge (`create_engine('postgresql://user:pass@host:5432/dbname')`).",
                              "Pandas Integration (pandas.read_sql): Executes SQL queries directly into Pandas DataFrames for immediate data analysis, statistical modeling, and charting: `df = pd.read_sql(query, engine)`.",
                              "Performance Optimization: Always perform filtering and aggregation inside the SQL database engine before loading the result set into Pandas RAM memory."
                        ]
                  },
                  {
                        "heading": "4. SQL for AI, LLMs & Vector Databases (pgvector Embeddings)",
                        "text": "AI and Large Language Model (LLM) applications utilize relational databases extended with vector search capabilities:",
                        "bulletPoints": [
                              "pgvector Extension: PostgreSQL extension for storing high-dimensional vector embeddings generated by AI models (`CREATE EXTENSION vector;`).",
                              "Vector Data Type: `embedding vector(1536)` (Stores 1536-dimensional floating-point vectors representing semantic meaning).",
                              "Cosine Distance Similarity Search Operator (<=>):",
                              "• `SELECT document_text FROM vector_store ORDER BY embedding <=> '[0.015, -0.023, ...]' LIMIT 5;`",
                              "• Performs ultra-fast Retrieval Augmented Generation (RAG) vector searches directly inside SQL queries!"
                        ]
                  },
                  {
                        "heading": "5. Comprehensive Capstone Final Project Architecture",
                        "text": "The capstone project synthesizes all 15 modules into an end-to-end database solution:",
                        "bulletPoints": [
                              "Step 1: Schema Design (DDL) — Multi-tenant schema with identity columns, generated stored columns, and CHECK constraints.",
                              "Step 2: Data Ingestion (DML) — Multi-row batch insertions and atomic UPSERT (`ON CONFLICT DO UPDATE`) handling.",
                              "Step 3: Relational Querying — Multi-table INNER/LEFT JOINs and Anti-Joins.",
                              "Step 4: Advanced Analytics — Chained CTEs, Window Functions (`DENSE_RANK`, `LAG`, running totals), and `GROUP BY ROLLUP` subtotals.",
                              "Step 5: Python Integration — Exporting analytical DataFrames for executive presentation."
                        ]
                  }
            ],
            "codeExamples": [
                  {
                        "title": "Window Functions: DENSE_RANK(), MoM Growth with LAG() & Running Totals",
                        "code": "-- 1. Top 2 Highest Paid Employees per Department using DENSE_RANK()\nWITH ranked_employees AS (\n    SELECT \n        e.employee_id,\n        e.first_name || ' ' || e.last_name AS employee_name,\n        e.department,\n        e.salary,\n        DENSE_RANK() OVER (PARTITION BY e.department ORDER BY e.salary DESC) AS salary_rank\n    FROM enterprise_employees AS e\n)\nSELECT * FROM ranked_employees WHERE salary_rank <= 2;\n\n-- 2. Month-over-Month (MoM) Revenue Growth % using LAG() and Cumulative Running Totals\nWITH monthly_revenue AS (\n    SELECT \n        DATE_TRUNC('month', order_date) AS sales_month,\n        SUM(order_total) AS gross_revenue\n    FROM orders\n    GROUP BY DATE_TRUNC('month', order_date)\n)\nSELECT \n    sales_month,\n    gross_revenue,\n    -- Retrieve previous month's revenue using LAG()\n    LAG(gross_revenue, 1) OVER (ORDER BY sales_month ASC) AS previous_month_revenue,\n    \n    -- Calculate MoM Growth Percentage\n    ROUND(((gross_revenue - LAG(gross_revenue, 1) OVER (ORDER BY sales_month ASC)) / \n           NULLIF(LAG(gross_revenue, 1) OVER (ORDER BY sales_month ASC), 0)) * 100, 2) AS mom_growth_pct,\n           \n    -- Cumulative Lifetime Running Total\n    SUM(gross_revenue) OVER (ORDER BY sales_month ASC ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS running_total_revenue\nFROM monthly_revenue\nORDER BY sales_month ASC;",
                        "explanation": "Demonstrates DENSE_RANK() partitioned by department, calculating Month-over-Month revenue growth % using LAG(), and computing cumulative running totals with window framing."
                  },
                  {
                        "title": "Python Integration (SQLAlchemy + Pandas) & pgvector AI Search",
                        "code": "# Python Pipeline: Querying SQL database into Pandas DataFrame\nimport pandas as pd\nfrom sqlalchemy import create_engine\n\n# 1. Establish SQLAlchemy database connection engine\nengine = create_engine('postgresql://analytics_user:SecurePass2026!@localhost:5432/enterprise_db')\n\n# 2. Execute SQL query directly into Pandas DataFrame\nquery = \"\"\"\nSELECT \n    DATE_TRUNC('month', order_date) AS month,\n    COUNT(order_id) AS total_orders,\n    SUM(order_total) AS total_revenue\nFROM orders\nGROUP BY DATE_TRUNC('month', order_date)\nORDER BY month ASC;\n\"\"\"\ndf = pd.read_sql(query, engine)\nprint(df.head())\n\n-- PostgreSQL pgvector: AI Vector Distance Similarity Search for RAG Applications\n-- SELECT top 3 most semantically similar documents to an input AI embedding\nSELECT \n    doc_id,\n    content_text,\n    1 - (embedding <=> '[0.0152, -0.0234, 0.0891, ...]'::vector) AS cosine_similarity\nFROM ai_knowledge_base\nORDER BY embedding <=> '[0.0152, -0.0234, 0.0891, ...]'::vector ASC\nLIMIT 3;",
                        "explanation": "Demonstrates connecting Python (Pandas/SQLAlchemy) to SQL databases, and executing AI vector cosine similarity searches using pgvector."
                  }
            ],
            "bestPractices": [
                  "Use `DENSE_RANK()` when ranking items with ties if you want consecutive rank numbers without gaps.",
                  "Use `ROW_NUMBER()` inside a CTE to deduplicate rows or select top N items per partition.",
                  "Always use `NULLIF()` when calculating growth percentages with `LAG()` to prevent division-by-zero crashes.",
                  "Use `pandas.read_sql(query, engine)` for seamless Python data science and visualization workflows.",
                  "Leverage `pgvector` in PostgreSQL for high-performance AI vector similarity searches directly within your relational database."
            ],
            "commonMistakes": [
                  "Confusing `RANK()` (leaves gaps on ties: 1, 2, 2, 4) with `DENSE_RANK()` (no gaps: 1, 2, 2, 3).",
                  "Attempting to use Window Functions inside `WHERE` or `HAVING` clauses (Window functions execute in Step 5 `SELECT`; use a CTE to filter window output!).",
                  "Forgetting to specify `ORDER BY` inside `OVER (...)` when calculating cumulative running totals or ranking.",
                  "Loading entire multi-gigabyte tables into Pandas RAM instead of performing aggregation inside SQL first."
            ],
            "practiceExercise": {
                  "title": "Window Functions & Capstone Analytics Challenge",
                  "problem": "Perform the following two tasks:\n1. Compare `ROW_NUMBER()`, `RANK()`, and `DENSE_RANK()` when ranking three employees with salaries `$100k, $100k, $80k`.\n\n2. Write a SQL query using `ROW_NUMBER() OVER (PARTITION BY customer_id ORDER BY order_date DESC)` inside a CTE to retrieve the most recent single order placed by every customer.",
                  "solutionCode": "-- Exercise 1 Ranking Output Answers:\n-- Employee A ($100k): ROW_NUMBER = 1 | RANK = 1 | DENSE_RANK = 1\n-- Employee B ($100k): ROW_NUMBER = 2 | RANK = 1 | DENSE_RANK = 1\n-- Employee C ($80k) : ROW_NUMBER = 3 | RANK = 3 | DENSE_RANK = 2\n\n-- Exercise 2 Most Recent Customer Order CTE Solution:\nWITH ranked_customer_orders AS (\n    SELECT \n        order_id,\n        customer_id,\n        order_date,\n        order_total,\n        ROW_NUMBER() OVER (PARTITION BY customer_id ORDER BY order_date DESC) AS rn\n    FROM orders\n)\nSELECT order_id, customer_id, order_date, order_total\nFROM ranked_customer_orders\nWHERE rn = 1;"
            },
            "keyTakeaways": [
                  "Window functions (`OVER (PARTITION BY ... ORDER BY ...)`) compute analytics across row subsets while preserving individual row identities.",
                  "`DENSE_RANK()` ranks items without sequence gaps; `ROW_NUMBER()` assigns unique sequential integers.",
                  "`LAG()` and `LEAD()` enable Period-over-Period trend analysis and growth percentage calculations.",
                  "Python integration (`SQLAlchemy`, `pandas`) bridges relational databases with data science and machine learning pipelines.",
                  "PostgreSQL `pgvector` enables AI vector similarity search directly alongside structured relational data."
            ]
      }
}
    ],
    finalTest: {
          "id": "sql-final-test",
          "title": "SQL Masterclass Certification Exam (4 Student Paper Sets)",
          "description": "Official certification exam series featuring 4 comprehensive question paper sets assigned dynamically by student candidate name in alphabetical order (A-F, G-L, M-R, S-Z).",
          "passingScore": 70,
          "timeLimitMinutes": 45,
          "totalMarks": 100,
          "published": true,
          "questionPapers": [
                {
                      "id": "qp-sql-set-a",
                      "paperCode": "SQL-QP-SETA",
                      "groupName": "Alphabetical Group A–F",
                      "letterRange": "A-F",
                      "studentNamePattern": "Candidate first name starting with A, B, C, D, E, or F",
                      "title": "Paper 1 (Set A): Database Architecture, Relational Modeling & Core DDL/DML",
                      "subtitle": "Covers Core DDL/DML, Constraints, Foreign Keys, Null Handling & Relational Schema Design",
                      "timeLimitMinutes": 45,
                      "passingScore": 70,
                      "totalMarks": 100,
                      "questions": [
                            {
                                  "id": "sql-a-1",
                                  "questionNumber": 1,
                                  "topic": "Foreign Key Constraints & Cascade Operations",
                                  "questionText": "When creating a Foreign Key constraint with 'ON DELETE CASCADE', what occurs in the child table when a parent row is deleted?",
                                  "codeSnippet": "ALTER TABLE order_items\nADD CONSTRAINT fk_orders\nFOREIGN KEY (order_id) REFERENCES orders(id)\nON DELETE CASCADE;",
                                  "options": [
                                        "The child rows in 'order_items' have their order_id column automatically set to NULL",
                                        "All matching child rows in 'order_items' are automatically deleted along with the parent order row",
                                        "The database engine raises an error and blocks the deletion of the parent order row",
                                        "The parent order row is deleted, but the child rows remain in 'order_items' as orphaned records"
                                  ],
                                  "correctAnswer": 1,
                                  "explanation": "ON DELETE CASCADE specifies that when a row in the referenced parent table is deleted, all matching referencing rows in the child table are automatically deleted as well."
                            },
                            {
                                  "id": "sql-a-2",
                                  "questionNumber": 2,
                                  "topic": "Data Types & Storage Efficiency",
                                  "questionText": "What is the primary operational difference between CHAR(20) and VARCHAR(20) data types in SQL databases?",
                                  "codeSnippet": null,
                                  "options": [
                                        "CHAR(20) stores variable length strings, while VARCHAR(20) pads strings with spaces to 20 bytes",
                                        "CHAR(20) is a fixed-length string padded with spaces to 20 characters regardless of input length; VARCHAR(20) stores variable length strings up to 20 characters plus a length byte",
                                        "CHAR(20) allows storing up to 20 MB of text, whereas VARCHAR(20) allows only 20 characters",
                                        "VARCHAR(20) supports unicode characters, while CHAR(20) supports binary data only"
                                  ],
                                  "correctAnswer": 1,
                                  "explanation": "CHAR(n) is fixed-width and right-pads short strings with trailing spaces to 'n' characters. VARCHAR(n) allocates only the necessary bytes for the string length plus overhead bytes."
                            },
                            {
                                  "id": "sql-a-3",
                                  "questionNumber": 3,
                                  "topic": "3-Valued Logic & NULL Comparison",
                                  "questionText": "What is the evaluated boolean result of the expression 'WHERE status = NULL' in ANSI SQL?",
                                  "codeSnippet": "SELECT * FROM employees WHERE status = NULL;",
                                  "options": [
                                        "TRUE for all rows where status is NULL",
                                        "FALSE for all rows, but syntax error is thrown",
                                        "UNKNOWN (Evaluating to NULL/FALSE), returning 0 rows because NULL cannot be compared with '='",
                                        "TRUE for rows where status contains an empty string ''"
                                  ],
                                  "correctAnswer": 2,
                                  "explanation": "In SQL 3-valued logic, NULL represents an unknown value. Any equality comparison with NULL (including NULL = NULL) evaluates to UNKNOWN, which resolves to false in WHERE filters. IS NULL must be used instead."
                            },
                            {
                                  "id": "sql-a-4",
                                  "questionNumber": 4,
                                  "topic": "DDL vs DML Execution Differences",
                                  "questionText": "Which statement accurately describes the difference between TRUNCATE TABLE and DELETE FROM table without a WHERE clause?",
                                  "codeSnippet": "TRUNCATE TABLE logs;\n-- vs --\nDELETE FROM logs;",
                                  "options": [
                                        "DELETE is a DDL command that resets identity counters; TRUNCATE is a DML command that logs each row deletion individually",
                                        "TRUNCATE is a DDL command that deallocates data pages instantly with minimal logging and resets identity seeds; DELETE is a DML command that deletes rows one by one",
                                        "TRUNCATE can be executed on tables referenced by active Foreign Keys, while DELETE cannot",
                                        "DELETE locks the entire database instance, while TRUNCATE locks only the target row"
                                  ],
                                  "correctAnswer": 1,
                                  "explanation": "TRUNCATE is a DDL operation that deallocates data pages directly, minimizing transaction log overhead and resetting auto-increment counters. DELETE is DML and logs each deleted tuple individually."
                            },
                            {
                                  "id": "sql-a-5",
                                  "questionNumber": 5,
                                  "topic": "INSERT INTO SELECT Data Migration",
                                  "questionText": "Which SQL command correctly copies active customer records from the 'prospects' table into the 'customers' table?",
                                  "codeSnippet": null,
                                  "options": [
                                        "COPY INTO customers FROM prospects WHERE is_active = 1;",
                                        "INSERT INTO customers (name, email) SELECT name, email FROM prospects WHERE is_active = 1;",
                                        "UPDATE customers SET (name, email) = (SELECT name, email FROM prospects WHERE is_active = 1);",
                                        "SELECT INTO customers (name, email) FROM prospects WHERE is_active = 1;"
                                  ],
                                  "correctAnswer": 1,
                                  "explanation": "The standard ANSI SQL syntax for inserting query results into an existing target table is 'INSERT INTO target_table (cols) SELECT cols FROM source_table WHERE condition'."
                            },
                            {
                                  "id": "sql-a-6",
                                  "questionNumber": 6,
                                  "topic": "UNIQUE vs PRIMARY KEY Constraints",
                                  "questionText": "How do UNIQUE constraints differ from PRIMARY KEY constraints in relational databases?",
                                  "codeSnippet": null,
                                  "options": [
                                        "A table can have multiple UNIQUE constraints and they allow NULL values (depending on RDBMS standards); a table can have only ONE PRIMARY KEY constraint which strictly forbids NULLs",
                                        "UNIQUE constraints create clustered indexes automatically, whereas PRIMARY KEY constraints never create indexes",
                                        "PRIMARY KEY constraints allow up to 5 NULL values per table, whereas UNIQUE constraints allow none",
                                        "There is no functional difference; UNIQUE and PRIMARY KEY are aliases for the exact same constraint"
                                  ],
                                  "correctAnswer": 0,
                                  "explanation": "A table is limited to one PRIMARY KEY (which automatically enforces NOT NULL). A table can define multiple UNIQUE constraints, which allow NULL values (in standard SQL, multiple NULLs are allowed since NULL != NULL)."
                            },
                            {
                                  "id": "sql-a-7",
                                  "questionNumber": 7,
                                  "topic": "ALTER TABLE Column Addition",
                                  "questionText": "What happens when you execute an ALTER TABLE statement adding a NOT NULL column with a DEFAULT value to a table with 100,000 existing rows?",
                                  "codeSnippet": "ALTER TABLE users ADD COLUMN tier_level VARCHAR(20) DEFAULT 'Standard' NOT NULL;",
                                  "options": [
                                        "The statement fails with an error because existing rows contain NULL for the new column",
                                        "The column is added and all 100,000 existing rows are populated with the default value 'Standard'",
                                        "The column is added, but only future INSERT statements will receive 'Standard'",
                                        "The table is duplicated into a temporary file and existing rows are deleted"
                                  ],
                                  "correctAnswer": 1,
                                  "explanation": "Adding a column with DEFAULT 'Standard' NOT NULL populates all existing rows with 'Standard', satisfying the NOT NULL requirement across the table."
                            },
                            {
                                  "id": "sql-a-8",
                                  "questionNumber": 8,
                                  "topic": "UPDATE with Subqueries",
                                  "questionText": "What will be the result of executing the following UPDATE query?",
                                  "codeSnippet": "UPDATE products\nSET price = price * 1.10\nWHERE category_id IN (SELECT id FROM categories WHERE name = 'Electronics');",
                                  "options": [
                                        "Increases the price by 10% for all products belonging to the 'Electronics' category",
                                        "Decreases the price of 'Electronics' products by 10%",
                                        "Fails because subqueries are strictly forbidden inside UPDATE statements",
                                        "Updates category names to 1.10 in the categories table"
                                  ],
                                  "correctAnswer": 0,
                                  "explanation": "The query uses an IN clause with a scalar subquery to find category IDs named 'Electronics', and increases the matching products' prices by 10% (price * 1.10)."
                            },
                            {
                                  "id": "sql-a-9",
                                  "questionNumber": 9,
                                  "topic": "LIKE Wildcards & Escaping",
                                  "questionText": "Which LIKE pattern correctly matches product codes that start with 'AB_', where '_' is a literal underscore character and not a single-character wildcard?",
                                  "codeSnippet": null,
                                  "options": [
                                        "WHERE code LIKE 'AB_%'",
                                        "WHERE code LIKE 'AB\\_%' ESCAPE '\\'",
                                        "WHERE code LIKE 'AB*%'",
                                        "WHERE code LIKE 'AB[1-9]%'"
                                  ],
                                  "correctAnswer": 1,
                                  "explanation": "In SQL LIKE clauses, '_' is a single-character wildcard. To match a literal underscore, it must be escaped (e.g. 'AB\\_%') with an explicit ESCAPE '\\' declaration."
                            },
                            {
                                  "id": "sql-a-10",
                                  "questionNumber": 10,
                                  "topic": "COALESCE & NULL Handling",
                                  "questionText": "What value is returned by COALESCE(NULL, NULL, 'Default Value', 'Secondary Value')?",
                                  "codeSnippet": "SELECT COALESCE(NULL, NULL, 'Default Value', 'Secondary Value') AS result;",
                                  "options": [
                                        "NULL",
                                        "'Default Value'",
                                        "'Secondary Value'",
                                        "An array containing both 'Default Value' and 'Secondary Value'"
                                  ],
                                  "correctAnswer": 1,
                                  "explanation": "COALESCE returns the first non-NULL expression in its list of arguments. Here, the first two arguments are NULL, so it evaluates and returns 'Default Value'."
                            },
                            {
                                  "id": "sql-a-11",
                                  "questionNumber": 11,
                                  "topic": "Referential Integrity Violations",
                                  "questionText": "What error occurs if an application attempts to insert a record into 'orders' with customer_id = 999 when customer_id 999 does not exist in 'customers'?",
                                  "codeSnippet": null,
                                  "options": [
                                        "Check Constraint Violation",
                                        "Foreign Key / Referential Integrity Constraint Violation",
                                        "Unique Key Violation",
                                        "Deadlock Timeout Exception"
                                  ],
                                  "correctAnswer": 1,
                                  "explanation": "Inserting a referencing foreign key value that does not exist in the referenced parent table violates Foreign Key (Referential Integrity) constraints."
                            },
                            {
                                  "id": "sql-a-12",
                                  "questionNumber": 12,
                                  "topic": "CHECK Constraints Logic",
                                  "questionText": "Which statement best describes the evaluation of a CHECK constraint on row insertion?",
                                  "codeSnippet": "ALTER TABLE accounts ADD CONSTRAINT chk_balance CHECK (balance >= 0);",
                                  "options": [
                                        "The row is accepted if the expression evaluates to TRUE or UNKNOWN (NULL); it is rejected only if it evaluates to FALSE",
                                        "The row is accepted only if the expression evaluates strictly to TRUE; NULL balance values trigger an immediate error",
                                        "CHECK constraints run asynchronously in background cron jobs",
                                        "CHECK constraints are enforced only during DELETE operations"
                                  ],
                                  "correctAnswer": 0,
                                  "explanation": "In SQL standards, a CHECK constraint allows the insert/update if the predicate evaluates to TRUE or UNKNOWN (NULL). It fails only if the condition evaluates explicitly to FALSE."
                            },
                            {
                                  "id": "sql-a-13",
                                  "questionNumber": 13,
                                  "topic": "Date Filtering Functions",
                                  "questionText": "Which ANSI SQL function extracts the calendar year from a timestamp column named 'created_at'?",
                                  "codeSnippet": "SELECT EXTRACT(YEAR FROM created_at) FROM orders;",
                                  "options": [
                                        "YEAROF(created_at)",
                                        "EXTRACT(YEAR FROM created_at)",
                                        "GET_YEAR(created_at)",
                                        "DATE_TO_YEAR(created_at)"
                                  ],
                                  "correctAnswer": 1,
                                  "explanation": "The ANSI SQL standard function for extracting sub-fields (such as YEAR, MONTH, DAY) from date/timestamp values is EXTRACT(field FROM timestamp)."
                            },
                            {
                                  "id": "sql-a-14",
                                  "questionNumber": 14,
                                  "topic": "Logical Operator Precedence",
                                  "questionText": "In SQL WHERE clauses, what is the evaluation precedence among NOT, AND, and OR operators?",
                                  "codeSnippet": "SELECT * FROM items WHERE status = 'A' OR status = 'B' AND price < 50;",
                                  "options": [
                                        "OR is evaluated first, followed by AND, followed by NOT",
                                        "Left-to-right evaluation regardless of operator keywords",
                                        "NOT is evaluated first, followed by AND, followed by OR",
                                        "AND and OR have equal precedence and evaluate right-to-left"
                                  ],
                                  "correctAnswer": 2,
                                  "explanation": "In standard SQL operator precedence: NOT has highest precedence, followed by AND, and finally OR. Parentheses should be used to override default precedence."
                            },
                            {
                                  "id": "sql-a-15",
                                  "questionNumber": 15,
                                  "topic": "Identity & Auto Increment Sequences",
                                  "questionText": "What happens to auto-increment identity sequence values when an INSERT transaction fails and rolls back?",
                                  "codeSnippet": null,
                                  "options": [
                                        "The sequence generator rolls back to its previous number, ensuring zero gaps in sequence",
                                        "The generated sequence number is consumed and lost, leaving a gap in the identity sequence",
                                        "The entire database table is locked until a manual sequence repair script is executed",
                                        "The database converts the column to a random GUID"
                                  ],
                                  "correctAnswer": 1,
                                  "explanation": "Sequence generators operate outside of transaction rollback boundaries for performance and concurrency. If an INSERT rolls back, the generated number is discarded, resulting in sequential gaps."
                            },
                            {
                                  "id": "sql-a-16",
                                  "questionNumber": 16,
                                  "topic": "ORDER BY & NULL Sorting Behavior",
                                  "questionText": "By default in ANSI SQL, where are NULL values sorted when executing ORDER BY column ASC?",
                                  "codeSnippet": "SELECT name, score FROM students ORDER BY score ASC;",
                                  "options": [
                                        "NULL values are discarded from the result set entirely",
                                        "NULL values are placed at the beginning or end depending on RDBMS (e.g. PostgreSQL places NULLs last for ASC, MySQL/SQL Server place NULLs first for ASC)",
                                        "NULL values cause the query execution to fail with a sorting error",
                                        "NULL values are automatically converted to zero"
                                  ],
                                  "correctAnswer": 1,
                                  "explanation": "ANSI SQL allows RDBMS implementations to determine default NULL ordering (or explicit NULLS FIRST / NULLS LAST). In PostgreSQL ASC defaults to NULLS LAST, while MySQL/SQL Server place NULLs first."
                            },
                            {
                                  "id": "sql-a-17",
                                  "questionNumber": 17,
                                  "topic": "CASCADE vs RESTRICT Constraints",
                                  "questionText": "When dropping a parent table referenced by foreign keys, what does the RESTRICT option enforce?",
                                  "codeSnippet": "DROP TABLE categories RESTRICT;",
                                  "options": [
                                        "Drops the parent table and automatically drops all dependent child tables",
                                        "Aborts the drop operation if any dependent objects or foreign key constraints reference the table",
                                        "Converts the table to a temporary read-only state for 24 hours",
                                        "Deletes only rows that have no matching foreign keys"
                                  ],
                                  "correctAnswer": 1,
                                  "explanation": "RESTRICT (the default in SQL standard) blocks the deletion of a schema object if any dependent objects (such as foreign key constraints or views) reference it."
                            },
                            {
                                  "id": "sql-a-18",
                                  "questionNumber": 18,
                                  "topic": "CASE Expressions Syntax",
                                  "questionText": "What will be the output value of the following searched CASE expression when grade = 85?",
                                  "codeSnippet": "SELECT CASE \n  WHEN grade >= 90 THEN 'A'\n  WHEN grade >= 80 THEN 'B'\n  WHEN grade >= 70 THEN 'C'\n  ELSE 'F'\nEND AS letter_grade;",
                                  "options": [
                                        "'A'",
                                        "'B'",
                                        "'C'",
                                        "'B' and 'C'"
                                  ],
                                  "correctAnswer": 1,
                                  "explanation": "CASE expressions evaluate WHEN conditions sequentially. For grade = 85, the first condition (>= 90) is false, and the second condition (>= 80) is true, returning 'B' immediately."
                            },
                            {
                                  "id": "sql-a-19",
                                  "questionNumber": 19,
                                  "topic": "View Materialization & Updateability",
                                  "questionText": "Which factor prevents a SQL view from being directly updateable via UPDATE or INSERT operations?",
                                  "codeSnippet": null,
                                  "options": [
                                        "The view definition includes an INNER JOIN between two tables",
                                        "The view definition contains aggregate functions (SUM, COUNT), GROUP BY, or DISTINCT clauses",
                                        "The view contains more than 3 columns",
                                        "The view is queried by more than one user concurrently"
                                  ],
                                  "correctAnswer": 1,
                                  "explanation": "Views containing aggregate functions, GROUP BY, DISTINCT, HAVING, or UNION cannot map modified view rows 1-to-1 back to underlying base table rows, rendering them non-updateable."
                            },
                            {
                                  "id": "sql-a-20",
                                  "questionNumber": 20,
                                  "topic": "Database Normalization (3NF)",
                                  "questionText": "What condition must a table satisfy to be in Third Normal Form (3NF)?",
                                  "codeSnippet": null,
                                  "options": [
                                        "It must be in 2NF and contain no transitive functional dependencies (non-key attributes must depend strictly on the primary key)",
                                        "It must contain no duplicate rows regardless of primary key definitions",
                                        "It must store all data in a single JSON column without indexes",
                                        "Every column in the table must be a foreign key pointing to another table"
                                  ],
                                  "correctAnswer": 0,
                                  "explanation": "Third Normal Form (3NF) requires the table to be in 2NF and have no transitive dependencies: every non-prime attribute must depend non-transitively directly on the primary key ('the key, the whole key, and nothing but the key')."
                            }
                      ]
                },
                {
                      "id": "qp-sql-set-b",
                      "paperCode": "SQL-QP-SETB",
                      "groupName": "Alphabetical Group G–L",
                      "letterRange": "G-L",
                      "studentNamePattern": "Candidate first name starting with G, H, I, J, K, or L",
                      "title": "Paper 2 (Set B): Advanced Multi-Table JOINs, Aggregations & Grouping Sets",
                      "subtitle": "Covers INNER/LEFT/RIGHT/FULL/CROSS/SELF JOINs, GROUP BY, HAVING, ROLLUP & CUBE Aggregations",
                      "timeLimitMinutes": 45,
                      "passingScore": 70,
                      "totalMarks": 100,
                      "questions": [
                            {
                                  "id": "sql-b-1",
                                  "questionNumber": 1,
                                  "topic": "INNER vs LEFT JOIN Behavior",
                                  "questionText": "How does a LEFT OUTER JOIN differ from an INNER JOIN when querying 'customers' LEFT JOIN 'orders'?",
                                  "codeSnippet": "SELECT c.name, o.order_date \nFROM customers c \nLEFT JOIN orders o ON c.id = o.customer_id;",
                                  "options": [
                                        "INNER JOIN returns all customers even if they have no orders; LEFT JOIN returns only customers with orders",
                                        "LEFT JOIN returns ALL rows from 'customers', filling missing 'orders' columns with NULL if no match exists; INNER JOIN returns ONLY customers that have matching orders",
                                        "LEFT JOIN automatically deletes orders that have no matching customer",
                                        "INNER JOIN operates only on primary keys, while LEFT JOIN operates on text columns"
                                  ],
                                  "correctAnswer": 1,
                                  "explanation": "LEFT OUTER JOIN preserves all rows from the left table ('customers'). If a left row has no match in the right table ('orders'), NULL is produced for right-table attributes. INNER JOIN discards non-matching rows."
                            },
                            {
                                  "id": "sql-b-2",
                                  "questionNumber": 2,
                                  "topic": "RIGHT JOIN Equivalence",
                                  "questionText": "Which statement is semantically identical to: 'SELECT * FROM tableA a RIGHT JOIN tableB b ON a.id = b.a_id'?",
                                  "codeSnippet": null,
                                  "options": [
                                        "SELECT * FROM tableB b LEFT JOIN tableA a ON a.id = b.a_id",
                                        "SELECT * FROM tableA a INNER JOIN tableB b ON a.id = b.a_id",
                                        "SELECT * FROM tableA a FULL JOIN tableB b ON a.id = b.a_id",
                                        "SELECT * FROM tableB b CROSS JOIN tableA a"
                                  ],
                                  "correctAnswer": 0,
                                  "explanation": "Swapping table positions in a RIGHT JOIN converts it into a LEFT JOIN ('tableB LEFT JOIN tableA'), preserving all rows from tableB."
                            },
                            {
                                  "id": "sql-b-3",
                                  "questionNumber": 3,
                                  "topic": "FULL OUTER JOIN Mechanics",
                                  "questionText": "When executing a FULL OUTER JOIN between Table A (10 rows) and Table B (10 rows), where 6 rows match on the join key, how many rows are returned in the result set?",
                                  "codeSnippet": null,
                                  "options": [
                                        "6 rows",
                                        "10 rows",
                                        "14 rows (6 matching + 4 unmatched from A + 4 unmatched from B)",
                                        "20 rows"
                                  ],
                                  "correctAnswer": 2,
                                  "explanation": "FULL OUTER JOIN returns all matching rows (6) plus unmatched rows from the left table (10 - 6 = 4) and unmatched rows from the right table (10 - 6 = 4), yielding 6 + 4 + 4 = 14 rows."
                            },
                            {
                                  "id": "sql-b-4",
                                  "questionNumber": 4,
                                  "topic": "CROSS JOIN Cartesian Product",
                                  "questionText": "If Table A contains 5 rows and Table B contains 20 rows, how many rows will be produced by a CROSS JOIN without a WHERE clause?",
                                  "codeSnippet": "SELECT * FROM TableA CROSS JOIN TableB;",
                                  "options": [
                                        "25 rows",
                                        "100 rows (5 x 20 Cartesian product)",
                                        "20 rows",
                                        "5 rows"
                                  ],
                                  "correctAnswer": 1,
                                  "explanation": "A CROSS JOIN produces a Cartesian product combining every row of the first table with every row of the second table ($5 \times 20 = 100$ rows)."
                            },
                            {
                                  "id": "sql-b-5",
                                  "questionNumber": 5,
                                  "topic": "SELF JOIN Hierarchical Queries",
                                  "questionText": "What query correctly pairs each employee's name with their manager's name from a single 'employees' table containing (emp_id, name, manager_id)?",
                                  "codeSnippet": null,
                                  "options": [
                                        "SELECT e.name AS employee, m.name AS manager FROM employees e LEFT JOIN employees m ON e.manager_id = m.emp_id;",
                                        "SELECT e.name AS employee, m.name AS manager FROM employees e INNER JOIN employees m ON e.emp_id = m.emp_id;",
                                        "SELECT name, manager_id FROM employees WHERE emp_id = manager_id;",
                                        "SELECT CROSS JOIN employees ON manager_id = emp_id;"
                                  ],
                                  "correctAnswer": 0,
                                  "explanation": "A SELF JOIN joins a table to itself using aliases ('e' for employee, 'm' for manager), linking e.manager_id = m.emp_id."
                            },
                            {
                                  "id": "sql-b-6",
                                  "questionNumber": 6,
                                  "topic": "WHERE vs HAVING Filtering Sequence",
                                  "questionText": "What is the key functional difference between the WHERE clause and the HAVING clause in a GROUP BY query?",
                                  "codeSnippet": "SELECT department_id, COUNT(*) \nFROM employees \nWHERE salary > 50000 \nGROUP BY department_id \nHAVING COUNT(*) > 5;",
                                  "options": [
                                        "WHERE filters individual rows BEFORE grouping and aggregation occur; HAVING filters aggregated groups AFTER grouping is performed",
                                        "HAVING filters individual rows before grouping; WHERE filters aggregated groups after grouping",
                                        "WHERE can contain aggregate functions like SUM(), whereas HAVING cannot",
                                        "There is no difference; WHERE and HAVING are completely interchangeable"
                                  ],
                                  "correctAnswer": 0,
                                  "explanation": "WHERE filters raw candidate rows prior to grouping. HAVING filters summarized group rows after the GROUP BY and aggregate functions have been evaluated."
                            },
                            {
                                  "id": "sql-b-7",
                                  "questionNumber": 7,
                                  "topic": "COUNT(*) vs COUNT(column) & NULLs",
                                  "questionText": "Given a table with 5 rows where column 'bonus' contains values: [100, 200, NULL, 300, NULL]. What are the results of COUNT(*) vs COUNT(bonus)?",
                                  "codeSnippet": null,
                                  "options": [
                                        "COUNT(*) = 5, COUNT(bonus) = 3",
                                        "COUNT(*) = 3, COUNT(bonus) = 5",
                                        "COUNT(*) = 5, COUNT(bonus) = 5",
                                        "COUNT(*) = 3, COUNT(bonus) = 3"
                                  ],
                                  "correctAnswer": 0,
                                  "explanation": "COUNT(*) counts total row records regardless of NULLs (5 rows). COUNT(column) counts non-NULL values in that specific column (3 non-NULL bonus values)."
                            },
                            {
                                  "id": "sql-b-8",
                                  "questionNumber": 8,
                                  "topic": "GROUP BY Rules & Non-Aggregated Columns",
                                  "questionText": "Why does the following SQL statement trigger an execution error in standard SQL engines?",
                                  "codeSnippet": "SELECT department_id, job_title, AVG(salary)\nFROM employees\nGROUP BY department_id;",
                                  "options": [
                                        "AVG() cannot be calculated on salary columns",
                                        "'job_title' appears in the SELECT list but is neither enclosed in an aggregate function nor listed in the GROUP BY clause",
                                        "department_id must be cast to string before grouping",
                                        "The query lacks an explicit ORDER BY clause"
                                  ],
                                  "correctAnswer": 1,
                                  "explanation": "In standard SQL, every column in the SELECT list that is not wrapped inside an aggregate function MUST be explicitly included in the GROUP BY clause."
                            },
                            {
                                  "id": "sql-b-9",
                                  "questionNumber": 9,
                                  "topic": "GROUP BY ROLLUP Hierarchical Subtotals",
                                  "questionText": "What subtotal combinations are calculated when executing GROUP BY ROLLUP (region, year, category)?",
                                  "codeSnippet": null,
                                  "options": [
                                        "(region, year, category), (region, year), (region), and Grand Total ()",
                                        "Only (region, year, category) and Grand Total ()",
                                        "(category), (year), (region) independently without combinations",
                                        "All $2^3 = 8$ possible combinations of region, year, and category"
                                  ],
                                  "correctAnswer": 0,
                                  "explanation": "ROLLUP generates progressive hierarchical subtotals from left to right: (N+1) grouping sets: (A, B, C), (A, B), (A), and Grand Total ()."
                            },
                            {
                                  "id": "sql-b-10",
                                  "questionNumber": 10,
                                  "topic": "GROUP BY CUBE Combinations",
                                  "questionText": "How many distinct grouping sets does GROUP BY CUBE (dept, location) generate?",
                                  "codeSnippet": null,
                                  "options": [
                                        "2 sets: (dept, location) and Grand Total ()",
                                        "4 sets: (dept, location), (dept), (location), and Grand Total ()",
                                        "3 sets: (dept), (location), and Grand Total ()",
                                        "8 sets"
                                  ],
                                  "correctAnswer": 1,
                                  "explanation": "CUBE produces all $2^n$ possible grouping set combinations for $n$ columns. For 2 columns, $2^2 = 4$ grouping sets: (dept, location), (dept), (location), and ()."
                            },
                            {
                                  "id": "sql-b-11",
                                  "questionNumber": 11,
                                  "topic": "USING Clause vs ON Clause",
                                  "questionText": "What is the effect of using the USING(department_id) clause in a JOIN query?",
                                  "codeSnippet": "SELECT * FROM employees JOIN departments USING(department_id);",
                                  "options": [
                                        "It joins the tables on employees.department_id = departments.department_id and coalesces department_id to a single column in SELECT *",
                                        "It performs a cross join ignoring department_id",
                                        "It requires department_id to be a primary key in both tables",
                                        "It creates an index on department_id before joining"
                                  ],
                                  "correctAnswer": 0,
                                  "explanation": "USING(col) simplifies joins where the join column has the exact same name in both tables, returning the join column only once when SELECT * is used."
                            },
                            {
                                  "id": "sql-b-12",
                                  "questionNumber": 12,
                                  "topic": "Handling NULLs in AVG() & SUM()",
                                  "questionText": "Given a column with values [10, 20, NULL, 30], what is the result of SELECT AVG(val)?",
                                  "codeSnippet": null,
                                  "options": [
                                        "15.0 (60 divided by 4 rows)",
                                        "20.0 (60 divided by 3 non-NULL rows)",
                                        "NULL (because NULL invalidates arithmetic averages)",
                                        "0.0"
                                  ],
                                  "correctAnswer": 1,
                                  "explanation": "SQL aggregate functions (except COUNT(*)) ignore NULL values entirely. The sum is 60 and the count of non-NULL values is 3, yielding an average of $60 / 3 = 20.0$."
                            },
                            {
                                  "id": "sql-b-13",
                                  "questionNumber": 13,
                                  "topic": "Conditional Aggregations (Pivot)",
                                  "questionText": "What technique counts the number of high-value orders (amount > 1000) per region in a single SQL query?",
                                  "codeSnippet": null,
                                  "options": [
                                        "SELECT region, COUNT(CASE WHEN amount > 1000 THEN 1 END) FROM orders GROUP BY region;",
                                        "SELECT region, SUM(amount > 1000) FROM orders WHERE amount > 1000 GROUP BY region;",
                                        "SELECT region, HAVING(amount > 1000) FROM orders GROUP BY region;",
                                        "SELECT region, COUNT(*) WHERE amount > 1000 GROUP BY region;"
                                  ],
                                  "correctAnswer": 0,
                                  "explanation": "Combining COUNT(CASE WHEN condition THEN 1 END) or SUM(CASE WHEN condition THEN 1 ELSE 0 END) performs conditional aggregation (pivoting) per group."
                            },
                            {
                                  "id": "sql-b-14",
                                  "questionNumber": 14,
                                  "topic": "HAVING Clause with Multiple Conditions",
                                  "questionText": "Which HAVING clause filters departments where the average salary exceeds 60,000 AND the total headcount is at least 10?",
                                  "codeSnippet": null,
                                  "options": [
                                        "WHERE AVG(salary) > 60000 AND COUNT(*) >= 10",
                                        "HAVING AVG(salary) > 60000 AND COUNT(*) >= 10",
                                        "HAVING salary > 60000 AND headcount >= 10",
                                        "GROUP BY HAVING AVG(salary) > 60000"
                                  ],
                                  "correctAnswer": 1,
                                  "explanation": "Aggregate conditions filtering summarized groups belong in the HAVING clause: HAVING AVG(salary) > 60000 AND COUNT(*) >= 10."
                            },
                            {
                                  "id": "sql-b-15",
                                  "questionNumber": 15,
                                  "topic": "Non-Equi JOINs & Range Matching",
                                  "questionText": "What type of JOIN uses operators like BETWEEN or >= instead of '=' to match employee salaries against salary grade bands?",
                                  "codeSnippet": "SELECT e.name, g.grade_level \nFROM employees e \nJOIN salary_grades g ON e.salary BETWEEN g.min_salary AND g.max_salary;",
                                  "options": [
                                        "Equi-Join",
                                        "Non-Equi Join",
                                        "Self Join",
                                        "Natural Join"
                                  ],
                                  "correctAnswer": 1,
                                  "explanation": "A Non-Equi Join joins tables based on inequality conditions (such as BETWEEN, >=, <), commonly used for tax brackets, date ranges, and grade bands."
                            },
                            {
                                  "id": "sql-b-16",
                                  "questionNumber": 16,
                                  "topic": "UNION vs UNION ALL Performance",
                                  "questionText": "Why is UNION ALL faster than UNION when combining two result sets of 500,000 rows each?",
                                  "codeSnippet": null,
                                  "options": [
                                        "UNION ALL sorts and deduplicates the merged dataset; UNION skips deduplication",
                                        "UNION performs a costly distinct sorting/hashing pass to eliminate duplicate rows; UNION ALL simply appends result sets without checking duplicates",
                                        "UNION ALL runs in memory while UNION writes temporary files to disk",
                                        "UNION ALL can only be executed on primary key columns"
                                  ],
                                  "correctAnswer": 1,
                                  "explanation": "UNION requires deduplication (sorting/hashing) to remove duplicate rows across sets. UNION ALL appends the sets directly without duplicate checks, making it much faster."
                            },
                            {
                                  "id": "sql-b-17",
                                  "questionNumber": 17,
                                  "topic": "INTERSECT & EXCEPT Set Operations",
                                  "questionText": "What does the EXCEPT (or MINUS) set operator return when executing: 'Query A EXCEPT Query B'?",
                                  "codeSnippet": null,
                                  "options": [
                                        "All rows present in Query B but absent in Query A",
                                        "All distinct rows present in Query A that DO NOT appear in Query B",
                                        "All rows present in both Query A and Query B",
                                        "All rows from Query A and Query B combined with duplicates"
                                  ],
                                  "correctAnswer": 1,
                                  "explanation": "EXCEPT (MINUS) returns distinct rows from the left result set (Query A) that do not exist in the right result set (Query B)."
                            },
                            {
                                  "id": "sql-b-18",
                                  "questionNumber": 18,
                                  "topic": "LEFT JOIN ON Filter vs WHERE Filter",
                                  "questionText": "What is the structural difference between placing a filter condition in the ON clause vs placing it in the WHERE clause during a LEFT JOIN?",
                                  "codeSnippet": "-- Query 1: ON condition\nSELECT * FROM A LEFT JOIN B ON A.id = B.a_id AND B.status = 'Active';\n\n-- Query 2: WHERE condition\nSELECT * FROM A LEFT JOIN B ON A.id = B.a_id WHERE B.status = 'Active';",
                                  "options": [
                                        "Query 1 keeps all rows from A (unmatched B rows get NULLs); Query 2 effectively converts the LEFT JOIN into an INNER JOIN by filtering out NULL B.status rows",
                                        "Query 1 and Query 2 produce identical execution plans and results",
                                        "Query 1 throws a syntax error because status belongs in WHERE",
                                        "Query 2 preserves all rows from A while Query 1 discards A rows"
                                  ],
                                  "correctAnswer": 0,
                                  "explanation": "Placing 'B.status = Active' in the ON clause filters matching B rows before joining (preserving all A rows). Placing it in WHERE filters after joining, discarding NULL B rows and turning the LEFT JOIN into an INNER JOIN."
                            },
                            {
                                  "id": "sql-b-19",
                                  "questionNumber": 19,
                                  "topic": "Aggregations in Correlated Scalar Subqueries",
                                  "questionText": "What does the following query calculate for each employee?",
                                  "codeSnippet": "SELECT e.name, e.salary, \n       e.salary - (SELECT AVG(salary) FROM employees WHERE dept_id = e.dept_id) AS diff\nFROM employees e;",
                                  "options": [
                                        "The overall average salary across the entire company",
                                        "The difference between the employee's salary and their own department's average salary",
                                        "The total payroll budget of the employee's department",
                                        "A syntax error because AVG() cannot be correlated"
                                  ],
                                  "correctAnswer": 1,
                                  "explanation": "The scalar correlated subquery calculates the average salary for the specific employee's department (e.dept_id), subtracting it from the employee's individual salary."
                            },
                            {
                                  "id": "sql-b-20",
                                  "questionNumber": 20,
                                  "topic": "String Aggregation (STRING_AGG)",
                                  "questionText": "Which ANSI SQL standard function concatenates string values from multiple rows into a single string per group?",
                                  "codeSnippet": "SELECT dept_id, STRING_AGG(employee_name, ', ' ORDER BY hire_date) FROM employees GROUP BY dept_id;",
                                  "options": [
                                        "GROUP_CONCAT() or STRING_AGG()",
                                        "CONCAT_ALL()",
                                        "MERGE_STRINGS()",
                                        "SUM_TEXT()"
                                  ],
                                  "correctAnswer": 0,
                                  "explanation": "STRING_AGG() (ANSI SQL / PostgreSQL / SQL Server) and GROUP_CONCAT() (MySQL/SQLite) aggregate column string values across rows in a group into a delimiter-separated string."
                            }
                      ]
                },
                {
                      "id": "qp-sql-set-c",
                      "paperCode": "SQL-QP-SETC",
                      "groupName": "Alphabetical Group M–R",
                      "letterRange": "M-R",
                      "studentNamePattern": "Candidate first name starting with M, N, O, P, Q, or R",
                      "title": "Paper 3 (Set C): Subqueries, CTEs, Window Functions & Analytical SQL",
                      "subtitle": "Covers ROW_NUMBER, RANK, DENSE_RANK, LAG/LEAD, Common Table Expressions & Subqueries",
                      "timeLimitMinutes": 45,
                      "passingScore": 70,
                      "totalMarks": 100,
                      "questions": [
                            {
                                  "id": "sql-c-1",
                                  "questionNumber": 1,
                                  "topic": "Window Functions: ROW_NUMBER vs RANK vs DENSE_RANK",
                                  "questionText": "If three employees tie for the highest salary (100k), what rank numbers are assigned to the subsequent employee (90k) by ROW_NUMBER(), RANK(), and DENSE_RANK() respectively?",
                                  "codeSnippet": null,
                                  "options": [
                                        "ROW_NUMBER assigns 4, RANK assigns 4, DENSE_RANK assigns 2",
                                        "ROW_NUMBER assigns 1, RANK assigns 2, DENSE_RANK assigns 3",
                                        "ROW_NUMBER assigns 4, RANK assigns 2, DENSE_RANK assigns 4",
                                        "ROW_NUMBER assigns 2, RANK assigns 4, DENSE_RANK assigns 2"
                                  ],
                                  "correctAnswer": 0,
                                  "explanation": "For tied top 3 values (100k): ROW_NUMBER yields unique sequence [1, 2, 3] so next is 4. RANK yields [1, 1, 1] and skips positions, assigning 4 to next. DENSE_RANK yields [1, 1, 1] without gaps, assigning 2 to next."
                            },
                            {
                                  "id": "sql-c-2",
                                  "questionNumber": 2,
                                  "topic": "PARTITION BY vs ORDER BY in OVER Clause",
                                  "questionText": "What is the purpose of the PARTITION BY clause inside a window function OVER() specification?",
                                  "codeSnippet": "SELECT name, dept_id, salary,\n       AVG(salary) OVER (PARTITION BY dept_id) as dept_avg\nFROM employees;",
                                  "options": [
                                        "It sorts the final query output by department ID",
                                        "It divides result set rows into separate partition groups across which the window function evaluates independently",
                                        "It deletes duplicate rows in each department",
                                        "It restricts the query to return only 1 row per department"
                                  ],
                                  "correctAnswer": 1,
                                  "explanation": "PARTITION BY divides the input rowset into partitions. The window function is computed independently for each partition, preserving all original detail rows in the final output."
                            },
                            {
                                  "id": "sql-c-3",
                                  "questionNumber": 3,
                                  "topic": "LAG and LEAD Functions",
                                  "questionText": "What does the LAG(sales_amount, 1) OVER (ORDER BY sale_date) window function return for a given row?",
                                  "codeSnippet": null,
                                  "options": [
                                        "The sales_amount of the subsequent row in chronological order",
                                        "The sales_amount of the immediately preceding row in chronological order (or NULL for the first row)",
                                        "The average sales_amount of all previous rows combined",
                                        "The maximum sales_amount in the table"
                                  ],
                                  "correctAnswer": 1,
                                  "explanation": "LAG(col, offset) accesses data from a preceding row at a specified physical offset prior to the current position within the window partition."
                            },
                            {
                                  "id": "sql-c-4",
                                  "questionNumber": 4,
                                  "topic": "Common Table Expressions (CTEs)",
                                  "questionText": "What is a primary architectural benefit of Common Table Expressions (WITH clause) compared to deeply nested subqueries?",
                                  "codeSnippet": "WITH regional_sales AS (\n    SELECT region, SUM(amount) AS total_sales FROM sales GROUP BY region\n)\nSELECT * FROM regional_sales WHERE total_sales > 100000;",
                                  "options": [
                                        "CTEs are stored permanently on disk as physical tables",
                                        "CTEs improve code readability, modularity, and can be referenced multiple times within the same parent statement",
                                        "CTEs disable transaction logging to make queries run 100x faster",
                                        "CTEs automatically create primary keys on all CTE columns"
                                  ],
                                  "correctAnswer": 1,
                                  "explanation": "CTEs provide a clean named temporary result set defined using WITH that improves SQL readability, modular structure, and reusability within a single execution."
                            },
                            {
                                  "id": "sql-c-5",
                                  "questionNumber": 5,
                                  "topic": "Recursive CTE Structure",
                                  "questionText": "What two SELECT queries must be combined with UNION ALL inside a Recursive CTE (WITH RECURSIVE)?",
                                  "codeSnippet": "WITH RECURSIVE org_tree AS (\n    -- Query 1\n    SELECT emp_id, manager_id, name FROM employees WHERE manager_id IS NULL\n    UNION ALL\n    -- Query 2\n    SELECT e.emp_id, e.manager_id, e.name \n    FROM employees e JOIN org_tree t ON e.manager_id = t.emp_id\n)\nSELECT * FROM org_tree;",
                                  "options": [
                                        "The Anchor Member (initial base case) and the Recursive Member (referencing the CTE name)",
                                        "The Primary Key query and the Foreign Key query",
                                        "The Aggregate query and the Grouping query",
                                        "The Update query and the Delete query"
                                  ],
                                  "correctAnswer": 0,
                                  "explanation": "A Recursive CTE requires an Anchor Member (base non-recursive query) UNION ALLed with a Recursive Member that references the CTE itself until recursion terminates."
                            },
                            {
                                  "id": "sql-c-6",
                                  "questionNumber": 6,
                                  "topic": "Correlated Subqueries Execution",
                                  "questionText": "Why can correlated subqueries exhibit poor performance ($O(N^2)$ time complexity) on large datasets?",
                                  "codeSnippet": "SELECT * FROM orders o \nWHERE amount > (SELECT AVG(amount) FROM orders WHERE customer_id = o.customer_id);",
                                  "options": [
                                        "Correlated subqueries lock the entire database server on every row read",
                                        "The subquery references outer query column values ('o.customer_id') and must be re-evaluated once for EVERY candidate row processed by the outer query",
                                        "Correlated subqueries disable all indexes on the outer table",
                                        "Correlated subqueries convert all integers into floating point numbers"
                                  ],
                                  "correctAnswer": 1,
                                  "explanation": "A correlated subquery relies on outer query values. Conceptual evaluation requires executing the subquery once per candidate row of the outer table unless optimized to a join by the query optimizer."
                            },
                            {
                                  "id": "sql-c-7",
                                  "questionNumber": 7,
                                  "topic": "EXISTS vs IN Semantics",
                                  "questionText": "Which statement accurately describes the evaluation behavior of EXISTS (subquery)?",
                                  "codeSnippet": "SELECT name FROM customers c WHERE EXISTS (SELECT 1 FROM orders o WHERE o.customer_id = c.id);",
                                  "options": [
                                        "EXISTS returns true as soon as the subquery yields at least one matching row, short-circuiting further evaluation for that outer row",
                                        "EXISTS calculates the total sum of all rows returned by the subquery",
                                        "EXISTS returns false if the subquery contains any NULL values",
                                        "EXISTS requires the subquery to return all table columns"
                                  ],
                                  "correctAnswer": 0,
                                  "explanation": "EXISTS tests for row existence. As soon as the subquery produces a single matching row, EXISTS short-circuits to TRUE without scanning remaining subquery rows for that outer record."
                            },
                            {
                                  "id": "sql-c-8",
                                  "questionNumber": 8,
                                  "topic": "NOT IN NULL Trap",
                                  "questionText": "Why does the query 'WHERE id NOT IN (SELECT manager_id FROM employees)' return zero rows if ANY manager_id in the subquery is NULL?",
                                  "codeSnippet": null,
                                  "options": [
                                        "NOT IN with a list containing NULL evaluates to 'NOT (id = val1 OR id = NULL)', which resolves to UNKNOWN (false) for every row",
                                        "The SQL engine crashes when encountering NULL in IN lists",
                                        "NOT IN requires all column data types to be fixed-width CHAR",
                                        "Subqueries are not allowed inside NOT IN clauses"
                                  ],
                                  "correctAnswer": 0,
                                  "explanation": "If the subquery result contains NULL, 'x NOT IN (1, 2, NULL)' expands to '(x != 1 AND x != 2 AND x != NULL)'. Since 'x != NULL' is UNKNOWN, the whole AND condition evaluates to UNKNOWN, returning 0 rows. NOT EXISTS avoids this trap."
                            },
                            {
                                  "id": "sql-c-9",
                                  "questionNumber": 9,
                                  "topic": "Derived Tables in FROM Clause",
                                  "questionText": "What syntax requirement is mandatory when using a subquery in the FROM clause (Derived Table)?",
                                  "codeSnippet": "SELECT avg_salary FROM (SELECT dept_id, AVG(salary) AS avg_salary FROM employees GROUP BY dept_id) AS dept_summary;",
                                  "options": [
                                        "The derived subquery MUST be assigned a table alias (e.g. 'AS dept_summary')",
                                        "The subquery must contain a WHERE clause",
                                        "The subquery cannot contain GROUP BY clauses",
                                        "The outer query must use a UNION operator"
                                  ],
                                  "correctAnswer": 0,
                                  "explanation": "ANSI SQL requires subqueries in the FROM clause (derived tables) to have an explicit table alias so that outer SELECT expressions can reference its columns."
                            },
                            {
                                  "id": "sql-c-10",
                                  "questionNumber": 10,
                                  "topic": "Cumulative Running Totals",
                                  "questionText": "Which window function specification correctly calculates a cumulative running total of 'amount' sorted by 'order_date'?",
                                  "codeSnippet": null,
                                  "options": [
                                        "SUM(amount) OVER (ORDER BY order_date ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW)",
                                        "SUM(amount) OVER (PARTITION BY amount)",
                                        "TOTAL(amount) OVER (ORDER BY order_date)",
                                        "CUMULATIVE_SUM(amount) BY order_date"
                                  ],
                                  "correctAnswer": 0,
                                  "explanation": "SUM(amount) OVER (ORDER BY order_date ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) accumulates values from the first row of the partition up to the current row."
                            },
                            {
                                  "id": "sql-c-11",
                                  "questionNumber": 11,
                                  "topic": "Window Frame: ROWS vs RANGE",
                                  "questionText": "What is the difference between ROWS BETWEEN and RANGE BETWEEN in SQL window frames?",
                                  "codeSnippet": null,
                                  "options": [
                                        "ROWS operates on physical row offsets; RANGE operates on logical value offsets of the ORDER BY column (treating duplicate values as a single peer group)",
                                        "ROWS works only on text columns; RANGE works only on integer columns",
                                        "ROWS requires a GROUP BY clause; RANGE requires a HAVING clause",
                                        "There is no difference; ROWS and RANGE produce identical results for tied values"
                                  ],
                                  "correctAnswer": 0,
                                  "explanation": "ROWS defines window frame bounds based on physical row counts (e.g., 2 rows before). RANGE defines bounds based on value ranges of the ORDER BY key, grouping duplicate peer values together."
                            },
                            {
                                  "id": "sql-c-12",
                                  "questionNumber": 12,
                                  "topic": "FIRST_VALUE and LAST_VALUE Window Frame",
                                  "questionText": "Why does LAST_VALUE(salary) OVER (ORDER BY hire_date) return the CURRENT row's salary instead of the last salary in the partition unless frame bounds are modified?",
                                  "codeSnippet": null,
                                  "options": [
                                        "Default window frame with ORDER BY is 'RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW', capping the frame at the current row",
                                        "LAST_VALUE is a deprecated function that behaves like FIRST_VALUE",
                                        "LAST_VALUE works only when salary is indexed",
                                        "LAST_VALUE evaluates in reverse alphabetical order"
                                  ],
                                  "correctAnswer": 0,
                                  "explanation": "The default window frame when ORDER BY is supplied is RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW. Thus the 'last' value in the frame is the current row. To get the true partition end, use 'ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING'."
                            },
                            {
                                  "id": "sql-c-13",
                                  "questionNumber": 13,
                                  "topic": "NTILE Quantile Distribution",
                                  "questionText": "What does NTILE(4) OVER (ORDER BY test_score DESC) do when applied to 100 student exam scores?",
                                  "codeSnippet": null,
                                  "options": [
                                        "Divides the ordered score records into 4 equal quartiles (1 to 4), assigning 1 to top 25% students and 4 to bottom 25%",
                                        "Multiplies each student score by 4",
                                        "Returns only students whose score ends in 4",
                                        "Calculates 4th degree polynomial averages"
                                  ],
                                  "correctAnswer": 0,
                                  "explanation": "NTILE(n) divides an ordered partition into 'n' roughly equal buckets (quartiles for 4, percentiles for 100), assigning bucket numbers 1 through n."
                            },
                            {
                                  "id": "sql-c-14",
                                  "questionNumber": 14,
                                  "topic": "ANY / SOME vs ALL Subquery Comparison",
                                  "questionText": "What condition makes 'WHERE salary > ALL (SELECT salary FROM employees WHERE dept_id = 5)' evaluate to true?",
                                  "codeSnippet": null,
                                  "options": [
                                        "The candidate salary must be greater than the MAXIMUM salary in department 5",
                                        "The candidate salary must be greater than the MINIMUM salary in department 5",
                                        "The candidate salary must be equal to the average salary in department 5",
                                        "The candidate salary must match at least one salary in department 5"
                                  ],
                                  "correctAnswer": 0,
                                  "explanation": "'> ALL (subquery)' requires the value to be strictly greater than EVERY value returned by the subquery (i.e. greater than the maximum value)."
                            },
                            {
                                  "id": "sql-c-15",
                                  "questionNumber": 15,
                                  "topic": "Scalar Subquery Requirements",
                                  "questionText": "What error occurs if a subquery placed in the SELECT column list returns 2 rows instead of 1 row?",
                                  "codeSnippet": "SELECT name, (SELECT order_id FROM orders WHERE customer_id = c.id) FROM customers c;",
                                  "options": [
                                        "Subquery returns more than 1 row (Scalar Subquery Violation)",
                                        "Division by zero error",
                                        "Table deadlock exception",
                                        "Infinite loop timeout"
                                  ],
                                  "correctAnswer": 0,
                                  "explanation": "A subquery placed where a single scalar value is expected (such as in the SELECT column expression list) must return at most 1 row and 1 column. Returning multiple rows causes a runtime scalar subquery error."
                            },
                            {
                                  "id": "sql-c-16",
                                  "questionNumber": 16,
                                  "topic": "Chaining Multiple CTEs",
                                  "questionText": "How are multiple CTEs declared within a single WITH statement?",
                                  "codeSnippet": "WITH dept_totals AS (\n    SELECT dept_id, SUM(salary) AS total_pay FROM employees GROUP BY dept_id\n),\ncompany_avg AS (\n    SELECT AVG(total_pay) AS avg_dept_pay FROM dept_totals\n)\nSELECT * FROM dept_totals WHERE total_pay > (SELECT avg_dept_pay FROM company_avg);",
                                  "options": [
                                        "Comma-separated list under a single WITH keyword",
                                        "Repeating the WITH keyword for every CTE definition",
                                        "Separated by semicolons",
                                        "Using UNION ALL between CTE blocks"
                                  ],
                                  "correctAnswer": 0,
                                  "explanation": "Multiple CTEs are defined sequentially separated by commas following a single WITH keyword. Subsequent CTEs can reference previously defined CTEs."
                            },
                            {
                                  "id": "sql-c-17",
                                  "questionNumber": 17,
                                  "topic": "Window Functions Placement Restrictions",
                                  "questionText": "Where are window functions allowed to be placed in a SQL query block?",
                                  "codeSnippet": null,
                                  "options": [
                                        "Only in SELECT and ORDER BY clauses (NOT in WHERE or HAVING clauses directly)",
                                        "Only in WHERE and HAVING clauses",
                                        "Only in FROM and GROUP BY clauses",
                                        "Window functions can be placed anywhere without restriction"
                                  ],
                                  "correctAnswer": 0,
                                  "explanation": "Window functions execute AFTER WHERE, GROUP BY, and HAVING phases. Therefore, they are allowed only in the SELECT list and ORDER BY clause. To filter by a window function result, wrap it in a CTE or derived table."
                            },
                            {
                                  "id": "sql-c-18",
                                  "questionNumber": 18,
                                  "topic": "Moving Average Calculation",
                                  "questionText": "Which window frame specification computes a 3-day moving average (current day plus 2 preceding days)?",
                                  "codeSnippet": null,
                                  "options": [
                                        "AVG(daily_sales) OVER (ORDER BY sale_date ROWS BETWEEN 2 PRECEDING AND CURRENT ROW)",
                                        "AVG(daily_sales) OVER (ORDER BY sale_date ROWS BETWEEN 3 PRECEDING AND 3 FOLLOWING)",
                                        "MOVING_AVG(daily_sales, 3)",
                                        "SUM(daily_sales) / 3 OVER (PARTITION BY sale_date)"
                                  ],
                                  "correctAnswer": 0,
                                  "explanation": "'ROWS BETWEEN 2 PRECEDING AND CURRENT ROW' includes 3 physical rows in the window frame (2 previous + current), calculating the exact 3-period moving average."
                            },
                            {
                                  "id": "sql-c-19",
                                  "questionNumber": 19,
                                  "topic": "Top-N Per Group Analytical Pattern",
                                  "questionText": "Which pattern correctly fetches the top 2 highest-paid employees inside EACH department?",
                                  "codeSnippet": "WITH ranked_emps AS (\n    SELECT name, dept_id, salary,\n           DENSE_RANK() OVER (PARTITION BY dept_id ORDER BY salary DESC) as rnk\n    FROM employees\n)\nSELECT * FROM ranked_emps WHERE rnk <= 2;",
                                  "options": [
                                        "Using DENSE_RANK() PARTITION BY dept_id ORDER BY salary DESC in a CTE, then filtering WHERE rnk <= 2",
                                        "SELECT TOP 2 * FROM employees GROUP BY dept_id",
                                        "SELECT * FROM employees WHERE salary = MAX(salary) GROUP BY dept_id",
                                        "ORDER BY salary DESC LIMIT 2 PARTITION BY dept_id"
                                  ],
                                  "correctAnswer": 0,
                                  "explanation": "The standard SQL pattern for Top-N per group uses DENSE_RANK() or ROW_NUMBER() partitioned by group and ordered by metric, filtered in an outer query or CTE."
                            },
                            {
                                  "id": "sql-c-20",
                                  "questionNumber": 20,
                                  "topic": "Anti-Join Pattern (Unmatched Rows)",
                                  "questionText": "What query pattern retrieves customers who have NEVER placed an order?",
                                  "codeSnippet": null,
                                  "options": [
                                        "SELECT c.id, c.name FROM customers c LEFT JOIN orders o ON c.id = o.customer_id WHERE o.id IS NULL;",
                                        "SELECT c.id, c.name FROM customers c INNER JOIN orders o ON c.id = o.customer_id WHERE o.id IS NULL;",
                                        "SELECT c.id, c.name FROM customers c CROSS JOIN orders o;",
                                        "SELECT c.id, c.name FROM customers c WHERE c.id = orders.customer_id;"
                                  ],
                                  "correctAnswer": 0,
                                  "explanation": "The Anti-Join pattern performs a LEFT JOIN from customers to orders and filters 'WHERE orders.id IS NULL', isolating customer records with zero matching orders."
                            }
                      ]
                },
                {
                      "id": "qp-sql-set-d",
                      "paperCode": "SQL-QP-SETD",
                      "groupName": "Alphabetical Group S–Z",
                      "letterRange": "S-Z",
                      "studentNamePattern": "Candidate first name starting with S, T, U, V, W, X, Y, or Z",
                      "title": "Paper 4 (Set D): Query Performance Optimization, Indexing, ACID & Transactions",
                      "subtitle": "Covers B-Tree/Clustered Indexes, ACID Properties, Transaction Isolation Levels, Deadlocks & Triggers",
                      "timeLimitMinutes": 45,
                      "passingScore": 70,
                      "totalMarks": 100,
                      "questions": [
                            {
                                  "id": "sql-d-1",
                                  "questionNumber": 1,
                                  "topic": "B-Tree Index Architecture",
                                  "questionText": "In a standard B-Tree index structure, what data is stored inside the leaf nodes?",
                                  "codeSnippet": null,
                                  "options": [
                                        "The indexed key values along with pointers/row identifiers (or full row data for clustered index) to locate table records",
                                        "Only raw binary hash values of table primary keys",
                                        "Unordered string text copies of table descriptions",
                                        "Transaction log checkpoints"
                                  ],
                                  "correctAnswer": 0,
                                  "explanation": "B-Tree leaf nodes contain sorted index key values paired with row locators (tuple IDs/pointers or clustered row data) allowing logarithmic $O(log N)$ search traversal."
                            },
                            {
                                  "id": "sql-d-2",
                                  "questionNumber": 2,
                                  "topic": "Clustered vs Non-Clustered Indexes",
                                  "questionText": "How does a Clustered Index fundamentally differ from a Non-Clustered Index?",
                                  "codeSnippet": null,
                                  "options": [
                                        "A Clustered Index physically dictates the storage order of table data rows on disk (thus only 1 per table); a Non-Clustered Index is a separate structure pointing to table data (multiple per table)",
                                        "Non-Clustered Indexes store physical rows on disk; Clustered Indexes store pointers",
                                        "A table can have up to 250 Clustered Indexes and only 1 Non-Clustered Index",
                                        "Clustered Indexes slow down SELECT queries but speed up INSERTs"
                                  ],
                                  "correctAnswer": 0,
                                  "explanation": "A Clustered Index sorts and stores table data rows physically on disk according to key order (1 per table). A Non-Clustered Index maintains a separate B-Tree structure storing keys and row locators."
                            },
                            {
                                  "id": "sql-d-3",
                                  "questionNumber": 3,
                                  "topic": "Composite Indexes & Left-Prefix Rule",
                                  "questionText": "Given a composite index INDEX idx_user_loc (country, state, city), which WHERE clause CANNOT utilize this index effectively?",
                                  "codeSnippet": null,
                                  "options": [
                                        "WHERE country = 'USA' AND state = 'CA'",
                                        "WHERE country = 'USA'",
                                        "WHERE city = 'San Francisco' AND state = 'CA' (without specifying country)",
                                        "WHERE country = 'USA' AND state = 'CA' AND city = 'San Francisco'"
                                  ],
                                  "correctAnswer": 2,
                                  "explanation": "Composite B-Tree indexes follow the Left-Prefix Rule. Searches must specify leading index columns ('country'). A query filtering only on 'city' and 'state' skips the leading 'country' column, preventing index lookup."
                            },
                            {
                                  "id": "sql-d-4",
                                  "questionNumber": 4,
                                  "topic": "Index Scan vs Index Seek",
                                  "questionText": "In database query execution plans, why is an 'Index Seek' operation preferred over an 'Index Scan'?",
                                  "codeSnippet": null,
                                  "options": [
                                        "An Index Seek navigates B-Tree pointer levels directly to pinpoint specific matching rows; an Index Scan reads through the entire index page by page",
                                        "An Index Scan uses CPU cache while an Index Seek reads from tape storage",
                                        "An Index Seek converts tables to XML format",
                                        "There is no difference; Seek and Scan are identical operations"
                                  ],
                                  "correctAnswer": 0,
                                  "explanation": "Index Seek traverses B-Tree branches directly to target specific key values in $O(log N)$ steps. Index Scan inspects every leaf page of the index sequentially ($O(N)$), consuming more I/O."
                            },
                            {
                                  "id": "sql-d-5",
                                  "questionNumber": 5,
                                  "topic": "Covering Indexes & Key Lookups",
                                  "questionText": "What is a 'Covering Index' and why does it eliminate 'Key Lookup / Bookmark Lookup' overhead?",
                                  "codeSnippet": "CREATE INDEX idx_emp_dept_sal ON employees (department_id) INCLUDE (salary, name);",
                                  "options": [
                                        "It is an index containing ALL columns required by a query, allowing the database engine to satisfy the query entirely from the index without reading table pages",
                                        "It is an index that encrypts database passwords",
                                        "It is an index created exclusively on temporary tables",
                                        "It is an index that covers multiple database instances across network nodes"
                                  ],
                                  "correctAnswer": 0,
                                  "explanation": "A Covering Index contains all columns referenced in SELECT, WHERE, and JOIN clauses of a query. The engine fulfills the request directly from index pages, skipping table page lookups."
                            },
                            {
                                  "id": "sql-d-6",
                                  "questionNumber": 6,
                                  "topic": "ACID Properties Definition",
                                  "questionText": "Which ACID property guarantees that once a transaction is committed, its changes persist permanently even in the event of a system crash or power outage?",
                                  "codeSnippet": null,
                                  "options": [
                                        "Atomicity",
                                        "Consistency",
                                        "Isolation",
                                        "Durability"
                                  ],
                                  "correctAnswer": 3,
                                  "explanation": "Durability guarantees that once a transaction commits, recorded changes are written to non-volatile transaction logs/disk and survive subsequent system crashes."
                            },
                            {
                                  "id": "sql-d-7",
                                  "questionNumber": 7,
                                  "topic": "READ UNCOMMITTED & Dirty Reads",
                                  "questionText": "What concurrency anomaly can occur under the READ UNCOMMITTED transaction isolation level?",
                                  "codeSnippet": null,
                                  "options": [
                                        "Dirty Reads (reading uncommitted data modifications made by another concurrent transaction that might later roll back)",
                                        "Lost Updates only",
                                        "Strict Serializability enforcement",
                                        "Automatic schema modifications"
                                  ],
                                  "correctAnswer": 0,
                                  "explanation": "READ UNCOMMITTED allows reading dirty (uncommitted) data modified by active concurrent transactions. If the writing transaction rolls back, the reading transaction has acted on invalid data."
                            },
                            {
                                  "id": "sql-d-8",
                                  "questionNumber": 8,
                                  "topic": "READ COMMITTED & Non-Repeatable Reads",
                                  "questionText": "What anomaly occurs when Transaction A reads a row, Transaction B updates and COMMITS that row, and Transaction A re-reads the row obtaining different values?",
                                  "codeSnippet": null,
                                  "options": [
                                        "Dirty Read",
                                        "Non-Repeatable Read (Fuzzy Read)",
                                        "Phantom Read",
                                        "Deadlock Exception"
                                  ],
                                  "correctAnswer": 1,
                                  "explanation": "A Non-Repeatable Read occurs under READ COMMITTED when re-reading a row yields updated column values because another transaction committed changes between reads."
                            },
                            {
                                  "id": "sql-d-9",
                                  "questionNumber": 9,
                                  "topic": "REPEATABLE READ & Phantom Reads",
                                  "questionText": "What is a 'Phantom Read' anomaly under the REPEATABLE READ isolation level?",
                                  "codeSnippet": null,
                                  "options": [
                                        "Transaction A executes a range query (e.g. WHERE age > 30), Transaction B INSERTS a new row matching that condition and commits, and Transaction A re-executes the query seeing new 'phantom' rows",
                                        "Reading data from a deleted database table",
                                        "A transaction reading its own uncommitted updates",
                                        "An index corrupted by power outage"
                                  ],
                                  "correctAnswer": 0,
                                  "explanation": "Phantom Reads occur when a concurrent transaction inserts new records matching a range query criteria. Re-running the range query in the first transaction reveals newly inserted 'phantom' rows."
                            },
                            {
                                  "id": "sql-d-10",
                                  "questionNumber": 10,
                                  "topic": "SERIALIZABLE Isolation Level",
                                  "questionText": "How does the SERIALIZABLE isolation level prevent all transaction concurrency anomalies (Dirty Reads, Non-Repeatable Reads, Phantom Reads)?",
                                  "codeSnippet": null,
                                  "options": [
                                        "By using range locks or Optimistic Concurrency Control (SSI) to ensure concurrent transaction execution yields results equivalent to executing transactions serially one after another",
                                        "By converting all relational tables into flat text files",
                                        "By disabling transaction rollbacks completely",
                                        "By enforcing a 1-second sleep delay between every SQL query"
                                  ],
                                  "correctAnswer": 0,
                                  "explanation": "SERIALIZABLE is the highest isolation level. It uses strict range locking or Serializable Snapshot Isolation (SSI) to guarantee execution outcomes match a strict serial sequential ordering."
                            },
                            {
                                  "id": "sql-d-11",
                                  "questionNumber": 11,
                                  "topic": "SAVEPOINT & Partial Rollback",
                                  "questionText": "What command allows rolling back a portion of a transaction to a specific intermediate checkpoint without discarding the entire transaction?",
                                  "codeSnippet": "BEGIN TRANSACTION;\nINSERT INTO logs VALUES (1);\nSAVEPOINT sp1;\nINSERT INTO logs VALUES (2);\nROLLBACK TO SAVEPOINT sp1;\nCOMMIT;",
                                  "options": [
                                        "ROLLBACK TO SAVEPOINT sp1;",
                                        "RESTORE CHECKPOINT sp1;",
                                        "UNDO TO sp1;",
                                        "CANCEL STATEMENT sp1;"
                                  ],
                                  "correctAnswer": 0,
                                  "explanation": "SAVEPOINT creates a named marker within a transaction. 'ROLLBACK TO SAVEPOINT name' undoes modifications executed after that marker while keeping earlier statements intact for COMMIT."
                            },
                            {
                                  "id": "sql-d-12",
                                  "questionNumber": 12,
                                  "topic": "Deadlock Handling Strategies",
                                  "questionText": "What action does a SQL Database Engine take when a Deadlock is detected between two concurrent transactions?",
                                  "codeSnippet": null,
                                  "options": [
                                        "It chooses one transaction as the 'Deadlock Victim', terminates it, and rolls back its work so the other transaction can complete",
                                        "It pauses both transactions indefinitely until a user restarts the server",
                                        "It merges both transactions into a single combined transaction",
                                        "It deletes the tables involved in the deadlock"
                                  ],
                                  "correctAnswer": 0,
                                  "explanation": "When a deadlock cycle is detected by the lock manager, the database engine selects a transaction (usually the one least costly to undo) as a deadlock victim, aborted with an error so the remaining transaction can proceed."
                            },
                            {
                                  "id": "sql-d-13",
                                  "questionNumber": 13,
                                  "topic": "Database Triggers (BEFORE vs AFTER)",
                                  "questionText": "Which type of trigger is executed PRIOR to writing data changes to disk, allowing input data validation or transformation?",
                                  "codeSnippet": "CREATE TRIGGER trg_check_salary\nBEFORE INSERT ON employees\nFOR EACH ROW\nEXECUTE FUNCTION validate_salary();",
                                  "options": [
                                        "BEFORE Trigger",
                                        "AFTER Trigger",
                                        "INSTEAD OF Trigger",
                                        "EVENT Trigger"
                                  ],
                                  "correctAnswer": 0,
                                  "explanation": "A BEFORE trigger executes prior to committing row modifications, making it ideal for validating constraints, sanitizing input values, or aborting invalid operations before disk write."
                            },
                            {
                                  "id": "sql-d-14",
                                  "questionNumber": 14,
                                  "topic": "Stored Procedures vs Functions",
                                  "questionText": "What is a key difference between Stored Procedures and User-Defined Functions (UDFs) in relational SQL databases?",
                                  "codeSnippet": null,
                                  "options": [
                                        "Stored Procedures can execute transaction control statements (COMMIT/ROLLBACK) and return multiple result sets; UDFs cannot modify database state or manage transactions",
                                        "UDFs can execute DDL commands while Stored Procedures cannot",
                                        "Stored Procedures cannot take input parameters",
                                        "UDFs are stored on client machines while Stored Procedures store on server"
                                  ],
                                  "correctAnswer": 0,
                                  "explanation": "Stored Procedures can perform full data modification, transaction control (COMMIT/ROLLBACK), and return multiple result sets. Pure SQL Functions (UDFs) are restricted from side-effects like transaction commits."
                            },
                            {
                                  "id": "sql-d-15",
                                  "questionNumber": 15,
                                  "topic": "Execution Plans: Hash Join vs Nested Loop",
                                  "questionText": "When does a Query Optimizer typically choose a Hash Join over a Nested Loop Join?",
                                  "codeSnippet": null,
                                  "options": [
                                        "When joining two large, unsorted datasets where build and probe hash tables in memory are faster than performing millions of index lookups",
                                        "When joining a 5-row table with a 10-row indexed table",
                                        "When executing queries with NO JOIN conditions",
                                        "When memory is completely exhausted"
                                  ],
                                  "correctAnswer": 0,
                                  "explanation": "Hash Joins excel at joining large, unsorted datasets. The optimizer builds an in-memory hash table on the smaller input, probing it with rows from the larger input, outperforming nested loops."
                            },
                            {
                                  "id": "sql-d-16",
                                  "questionNumber": 16,
                                  "topic": "Partial / Filtered Indexes",
                                  "questionText": "What benefit does a Filtered (Partial) Index provide: 'CREATE INDEX idx_unpaid ON orders(customer_id) WHERE is_paid = false'?",
                                  "codeSnippet": null,
                                  "options": [
                                        "Reduces index size and maintenance overhead by indexing ONLY rows that satisfy the WHERE condition (unpaid orders)",
                                        "Encrypts customer IDs for unpaid orders",
                                        "Prevents unpaid orders from being updated",
                                        "Deletes paid orders automatically"
                                  ],
                                  "correctAnswer": 0,
                                  "explanation": "A Filtered / Partial Index indexes a subset of table rows matching a predicate. It saves storage space and index maintenance CPU overhead while accelerating queries filtering on that predicate."
                            },
                            {
                                  "id": "sql-d-17",
                                  "questionNumber": 17,
                                  "topic": "SARGable Queries & Index Usage",
                                  "questionText": "Which WHERE clause expression is SARGable (Search Argument Able) and can effectively utilize a standard index on 'hire_date'?",
                                  "codeSnippet": null,
                                  "options": [
                                        "WHERE hire_date >= '2025-01-01' AND hire_date < '2026-01-01'",
                                        "WHERE EXTRACT(YEAR FROM hire_date) = 2025",
                                        "WHERE DATE_FORMAT(hire_date, '%Y') = '2025'",
                                        "WHERE YEAR(hire_date) = 2025"
                                  ],
                                  "correctAnswer": 0,
                                  "explanation": "Wrapping indexed columns inside functions (e.g. YEAR(hire_date)) renders expressions non-SARGable, forcing full table scans. Using raw column range comparisons ('hire_date >= ...') allows index seeking."
                            },
                            {
                                  "id": "sql-d-18",
                                  "questionNumber": 18,
                                  "topic": "Shared Locks (S) vs Exclusive Locks (X)",
                                  "questionText": "What is the lock compatibility rule between Shared Locks (S) and Exclusive Locks (X) during concurrent queries?",
                                  "codeSnippet": null,
                                  "options": [
                                        "Multiple transactions can hold Shared Locks (S) concurrently on the same row; an Exclusive Lock (X) blocks ALL other Shared and Exclusive locks",
                                        "Exclusive Locks allow multiple concurrent writers",
                                        "Shared Locks block other Shared Locks",
                                        "Locks apply only to temporary views"
                                  ],
                                  "correctAnswer": 0,
                                  "explanation": "Shared (S) locks for reading are mutually compatible. Exclusive (X) locks for writing require exclusive access, blocking all other S and X locks on that resource."
                            },
                            {
                                  "id": "sql-d-19",
                                  "questionNumber": 19,
                                  "topic": "Function-Based / Expression Indexes",
                                  "questionText": "How can a database optimize case-insensitive search queries like: 'WHERE LOWER(email) = 'user@example.com''?",
                                  "codeSnippet": null,
                                  "options": [
                                        "By creating an Expression / Function-Based Index: CREATE INDEX idx_lower_email ON users (LOWER(email));",
                                        "By converting the database into a CSV file",
                                        "By removing the email column from the primary key",
                                        "By running ANALYZE TABLE every 5 seconds"
                                  ],
                                  "correctAnswer": 0,
                                  "explanation": "An Expression / Function-Based index evaluates and indexes computed values (such as LOWER(email)), allowing the query optimizer to perform index seeks for function-wrapped queries."
                            },
                            {
                                  "id": "sql-d-20",
                                  "questionNumber": 20,
                                  "topic": "Database Connection Pooling",
                                  "questionText": "Why do enterprise web applications use Database Connection Pools (e.g. PgBouncer, HikariCP)?",
                                  "codeSnippet": null,
                                  "options": [
                                        "To reuse a warm cache of established database connections, avoiding the high latency overhead of opening/authenticating TCP sockets on every HTTP request",
                                        "To bypass database user password authentication",
                                        "To automatically compress SQL source code into zip files",
                                        "To store user passwords in local browser storage"
                                  ],
                                  "correctAnswer": 0,
                                  "explanation": "Opening TCP database connections involves expensive SSL/TLS handshakes and process allocations. Connection pooling maintains reusable open connections, dramatically reducing latency."
                            }
                      ]
                }
          ],
          "questions": [
                {
                      "id": "sql-a-1",
                      "questionNumber": 1,
                      "topic": "Foreign Key Constraints & Cascade Operations",
                      "questionText": "When creating a Foreign Key constraint with 'ON DELETE CASCADE', what occurs in the child table when a parent row is deleted?",
                      "codeSnippet": "ALTER TABLE order_items\nADD CONSTRAINT fk_orders\nFOREIGN KEY (order_id) REFERENCES orders(id)\nON DELETE CASCADE;",
                      "options": [
                            "The child rows in 'order_items' have their order_id column automatically set to NULL",
                            "All matching child rows in 'order_items' are automatically deleted along with the parent order row",
                            "The database engine raises an error and blocks the deletion of the parent order row",
                            "The parent order row is deleted, but the child rows remain in 'order_items' as orphaned records"
                      ],
                      "correctAnswer": 1,
                      "explanation": "ON DELETE CASCADE specifies that when a row in the referenced parent table is deleted, all matching referencing rows in the child table are automatically deleted as well."
                },
                {
                      "id": "sql-a-2",
                      "questionNumber": 2,
                      "topic": "Data Types & Storage Efficiency",
                      "questionText": "What is the primary operational difference between CHAR(20) and VARCHAR(20) data types in SQL databases?",
                      "codeSnippet": null,
                      "options": [
                            "CHAR(20) stores variable length strings, while VARCHAR(20) pads strings with spaces to 20 bytes",
                            "CHAR(20) is a fixed-length string padded with spaces to 20 characters regardless of input length; VARCHAR(20) stores variable length strings up to 20 characters plus a length byte",
                            "CHAR(20) allows storing up to 20 MB of text, whereas VARCHAR(20) allows only 20 characters",
                            "VARCHAR(20) supports unicode characters, while CHAR(20) supports binary data only"
                      ],
                      "correctAnswer": 1,
                      "explanation": "CHAR(n) is fixed-width and right-pads short strings with trailing spaces to 'n' characters. VARCHAR(n) allocates only the necessary bytes for the string length plus overhead bytes."
                },
                {
                      "id": "sql-a-3",
                      "questionNumber": 3,
                      "topic": "3-Valued Logic & NULL Comparison",
                      "questionText": "What is the evaluated boolean result of the expression 'WHERE status = NULL' in ANSI SQL?",
                      "codeSnippet": "SELECT * FROM employees WHERE status = NULL;",
                      "options": [
                            "TRUE for all rows where status is NULL",
                            "FALSE for all rows, but syntax error is thrown",
                            "UNKNOWN (Evaluating to NULL/FALSE), returning 0 rows because NULL cannot be compared with '='",
                            "TRUE for rows where status contains an empty string ''"
                      ],
                      "correctAnswer": 2,
                      "explanation": "In SQL 3-valued logic, NULL represents an unknown value. Any equality comparison with NULL (including NULL = NULL) evaluates to UNKNOWN, which resolves to false in WHERE filters. IS NULL must be used instead."
                },
                {
                      "id": "sql-a-4",
                      "questionNumber": 4,
                      "topic": "DDL vs DML Execution Differences",
                      "questionText": "Which statement accurately describes the difference between TRUNCATE TABLE and DELETE FROM table without a WHERE clause?",
                      "codeSnippet": "TRUNCATE TABLE logs;\n-- vs --\nDELETE FROM logs;",
                      "options": [
                            "DELETE is a DDL command that resets identity counters; TRUNCATE is a DML command that logs each row deletion individually",
                            "TRUNCATE is a DDL command that deallocates data pages instantly with minimal logging and resets identity seeds; DELETE is a DML command that deletes rows one by one",
                            "TRUNCATE can be executed on tables referenced by active Foreign Keys, while DELETE cannot",
                            "DELETE locks the entire database instance, while TRUNCATE locks only the target row"
                      ],
                      "correctAnswer": 1,
                      "explanation": "TRUNCATE is a DDL operation that deallocates data pages directly, minimizing transaction log overhead and resetting auto-increment counters. DELETE is DML and logs each deleted tuple individually."
                },
                {
                      "id": "sql-a-5",
                      "questionNumber": 5,
                      "topic": "INSERT INTO SELECT Data Migration",
                      "questionText": "Which SQL command correctly copies active customer records from the 'prospects' table into the 'customers' table?",
                      "codeSnippet": null,
                      "options": [
                            "COPY INTO customers FROM prospects WHERE is_active = 1;",
                            "INSERT INTO customers (name, email) SELECT name, email FROM prospects WHERE is_active = 1;",
                            "UPDATE customers SET (name, email) = (SELECT name, email FROM prospects WHERE is_active = 1);",
                            "SELECT INTO customers (name, email) FROM prospects WHERE is_active = 1;"
                      ],
                      "correctAnswer": 1,
                      "explanation": "The standard ANSI SQL syntax for inserting query results into an existing target table is 'INSERT INTO target_table (cols) SELECT cols FROM source_table WHERE condition'."
                },
                {
                      "id": "sql-a-6",
                      "questionNumber": 6,
                      "topic": "UNIQUE vs PRIMARY KEY Constraints",
                      "questionText": "How do UNIQUE constraints differ from PRIMARY KEY constraints in relational databases?",
                      "codeSnippet": null,
                      "options": [
                            "A table can have multiple UNIQUE constraints and they allow NULL values (depending on RDBMS standards); a table can have only ONE PRIMARY KEY constraint which strictly forbids NULLs",
                            "UNIQUE constraints create clustered indexes automatically, whereas PRIMARY KEY constraints never create indexes",
                            "PRIMARY KEY constraints allow up to 5 NULL values per table, whereas UNIQUE constraints allow none",
                            "There is no functional difference; UNIQUE and PRIMARY KEY are aliases for the exact same constraint"
                      ],
                      "correctAnswer": 0,
                      "explanation": "A table is limited to one PRIMARY KEY (which automatically enforces NOT NULL). A table can define multiple UNIQUE constraints, which allow NULL values (in standard SQL, multiple NULLs are allowed since NULL != NULL)."
                },
                {
                      "id": "sql-a-7",
                      "questionNumber": 7,
                      "topic": "ALTER TABLE Column Addition",
                      "questionText": "What happens when you execute an ALTER TABLE statement adding a NOT NULL column with a DEFAULT value to a table with 100,000 existing rows?",
                      "codeSnippet": "ALTER TABLE users ADD COLUMN tier_level VARCHAR(20) DEFAULT 'Standard' NOT NULL;",
                      "options": [
                            "The statement fails with an error because existing rows contain NULL for the new column",
                            "The column is added and all 100,000 existing rows are populated with the default value 'Standard'",
                            "The column is added, but only future INSERT statements will receive 'Standard'",
                            "The table is duplicated into a temporary file and existing rows are deleted"
                      ],
                      "correctAnswer": 1,
                      "explanation": "Adding a column with DEFAULT 'Standard' NOT NULL populates all existing rows with 'Standard', satisfying the NOT NULL requirement across the table."
                },
                {
                      "id": "sql-a-8",
                      "questionNumber": 8,
                      "topic": "UPDATE with Subqueries",
                      "questionText": "What will be the result of executing the following UPDATE query?",
                      "codeSnippet": "UPDATE products\nSET price = price * 1.10\nWHERE category_id IN (SELECT id FROM categories WHERE name = 'Electronics');",
                      "options": [
                            "Increases the price by 10% for all products belonging to the 'Electronics' category",
                            "Decreases the price of 'Electronics' products by 10%",
                            "Fails because subqueries are strictly forbidden inside UPDATE statements",
                            "Updates category names to 1.10 in the categories table"
                      ],
                      "correctAnswer": 0,
                      "explanation": "The query uses an IN clause with a scalar subquery to find category IDs named 'Electronics', and increases the matching products' prices by 10% (price * 1.10)."
                },
                {
                      "id": "sql-a-9",
                      "questionNumber": 9,
                      "topic": "LIKE Wildcards & Escaping",
                      "questionText": "Which LIKE pattern correctly matches product codes that start with 'AB_', where '_' is a literal underscore character and not a single-character wildcard?",
                      "codeSnippet": null,
                      "options": [
                            "WHERE code LIKE 'AB_%'",
                            "WHERE code LIKE 'AB\\_%' ESCAPE '\\'",
                            "WHERE code LIKE 'AB*%'",
                            "WHERE code LIKE 'AB[1-9]%'"
                      ],
                      "correctAnswer": 1,
                      "explanation": "In SQL LIKE clauses, '_' is a single-character wildcard. To match a literal underscore, it must be escaped (e.g. 'AB\\_%') with an explicit ESCAPE '\\' declaration."
                },
                {
                      "id": "sql-a-10",
                      "questionNumber": 10,
                      "topic": "COALESCE & NULL Handling",
                      "questionText": "What value is returned by COALESCE(NULL, NULL, 'Default Value', 'Secondary Value')?",
                      "codeSnippet": "SELECT COALESCE(NULL, NULL, 'Default Value', 'Secondary Value') AS result;",
                      "options": [
                            "NULL",
                            "'Default Value'",
                            "'Secondary Value'",
                            "An array containing both 'Default Value' and 'Secondary Value'"
                      ],
                      "correctAnswer": 1,
                      "explanation": "COALESCE returns the first non-NULL expression in its list of arguments. Here, the first two arguments are NULL, so it evaluates and returns 'Default Value'."
                },
                {
                      "id": "sql-a-11",
                      "questionNumber": 11,
                      "topic": "Referential Integrity Violations",
                      "questionText": "What error occurs if an application attempts to insert a record into 'orders' with customer_id = 999 when customer_id 999 does not exist in 'customers'?",
                      "codeSnippet": null,
                      "options": [
                            "Check Constraint Violation",
                            "Foreign Key / Referential Integrity Constraint Violation",
                            "Unique Key Violation",
                            "Deadlock Timeout Exception"
                      ],
                      "correctAnswer": 1,
                      "explanation": "Inserting a referencing foreign key value that does not exist in the referenced parent table violates Foreign Key (Referential Integrity) constraints."
                },
                {
                      "id": "sql-a-12",
                      "questionNumber": 12,
                      "topic": "CHECK Constraints Logic",
                      "questionText": "Which statement best describes the evaluation of a CHECK constraint on row insertion?",
                      "codeSnippet": "ALTER TABLE accounts ADD CONSTRAINT chk_balance CHECK (balance >= 0);",
                      "options": [
                            "The row is accepted if the expression evaluates to TRUE or UNKNOWN (NULL); it is rejected only if it evaluates to FALSE",
                            "The row is accepted only if the expression evaluates strictly to TRUE; NULL balance values trigger an immediate error",
                            "CHECK constraints run asynchronously in background cron jobs",
                            "CHECK constraints are enforced only during DELETE operations"
                      ],
                      "correctAnswer": 0,
                      "explanation": "In SQL standards, a CHECK constraint allows the insert/update if the predicate evaluates to TRUE or UNKNOWN (NULL). It fails only if the condition evaluates explicitly to FALSE."
                },
                {
                      "id": "sql-a-13",
                      "questionNumber": 13,
                      "topic": "Date Filtering Functions",
                      "questionText": "Which ANSI SQL function extracts the calendar year from a timestamp column named 'created_at'?",
                      "codeSnippet": "SELECT EXTRACT(YEAR FROM created_at) FROM orders;",
                      "options": [
                            "YEAROF(created_at)",
                            "EXTRACT(YEAR FROM created_at)",
                            "GET_YEAR(created_at)",
                            "DATE_TO_YEAR(created_at)"
                      ],
                      "correctAnswer": 1,
                      "explanation": "The ANSI SQL standard function for extracting sub-fields (such as YEAR, MONTH, DAY) from date/timestamp values is EXTRACT(field FROM timestamp)."
                },
                {
                      "id": "sql-a-14",
                      "questionNumber": 14,
                      "topic": "Logical Operator Precedence",
                      "questionText": "In SQL WHERE clauses, what is the evaluation precedence among NOT, AND, and OR operators?",
                      "codeSnippet": "SELECT * FROM items WHERE status = 'A' OR status = 'B' AND price < 50;",
                      "options": [
                            "OR is evaluated first, followed by AND, followed by NOT",
                            "Left-to-right evaluation regardless of operator keywords",
                            "NOT is evaluated first, followed by AND, followed by OR",
                            "AND and OR have equal precedence and evaluate right-to-left"
                      ],
                      "correctAnswer": 2,
                      "explanation": "In standard SQL operator precedence: NOT has highest precedence, followed by AND, and finally OR. Parentheses should be used to override default precedence."
                },
                {
                      "id": "sql-a-15",
                      "questionNumber": 15,
                      "topic": "Identity & Auto Increment Sequences",
                      "questionText": "What happens to auto-increment identity sequence values when an INSERT transaction fails and rolls back?",
                      "codeSnippet": null,
                      "options": [
                            "The sequence generator rolls back to its previous number, ensuring zero gaps in sequence",
                            "The generated sequence number is consumed and lost, leaving a gap in the identity sequence",
                            "The entire database table is locked until a manual sequence repair script is executed",
                            "The database converts the column to a random GUID"
                      ],
                      "correctAnswer": 1,
                      "explanation": "Sequence generators operate outside of transaction rollback boundaries for performance and concurrency. If an INSERT rolls back, the generated number is discarded, resulting in sequential gaps."
                },
                {
                      "id": "sql-a-16",
                      "questionNumber": 16,
                      "topic": "ORDER BY & NULL Sorting Behavior",
                      "questionText": "By default in ANSI SQL, where are NULL values sorted when executing ORDER BY column ASC?",
                      "codeSnippet": "SELECT name, score FROM students ORDER BY score ASC;",
                      "options": [
                            "NULL values are discarded from the result set entirely",
                            "NULL values are placed at the beginning or end depending on RDBMS (e.g. PostgreSQL places NULLs last for ASC, MySQL/SQL Server place NULLs first for ASC)",
                            "NULL values cause the query execution to fail with a sorting error",
                            "NULL values are automatically converted to zero"
                      ],
                      "correctAnswer": 1,
                      "explanation": "ANSI SQL allows RDBMS implementations to determine default NULL ordering (or explicit NULLS FIRST / NULLS LAST). In PostgreSQL ASC defaults to NULLS LAST, while MySQL/SQL Server place NULLs first."
                },
                {
                      "id": "sql-a-17",
                      "questionNumber": 17,
                      "topic": "CASCADE vs RESTRICT Constraints",
                      "questionText": "When dropping a parent table referenced by foreign keys, what does the RESTRICT option enforce?",
                      "codeSnippet": "DROP TABLE categories RESTRICT;",
                      "options": [
                            "Drops the parent table and automatically drops all dependent child tables",
                            "Aborts the drop operation if any dependent objects or foreign key constraints reference the table",
                            "Converts the table to a temporary read-only state for 24 hours",
                            "Deletes only rows that have no matching foreign keys"
                      ],
                      "correctAnswer": 1,
                      "explanation": "RESTRICT (the default in SQL standard) blocks the deletion of a schema object if any dependent objects (such as foreign key constraints or views) reference it."
                },
                {
                      "id": "sql-a-18",
                      "questionNumber": 18,
                      "topic": "CASE Expressions Syntax",
                      "questionText": "What will be the output value of the following searched CASE expression when grade = 85?",
                      "codeSnippet": "SELECT CASE \n  WHEN grade >= 90 THEN 'A'\n  WHEN grade >= 80 THEN 'B'\n  WHEN grade >= 70 THEN 'C'\n  ELSE 'F'\nEND AS letter_grade;",
                      "options": [
                            "'A'",
                            "'B'",
                            "'C'",
                            "'B' and 'C'"
                      ],
                      "correctAnswer": 1,
                      "explanation": "CASE expressions evaluate WHEN conditions sequentially. For grade = 85, the first condition (>= 90) is false, and the second condition (>= 80) is true, returning 'B' immediately."
                },
                {
                      "id": "sql-a-19",
                      "questionNumber": 19,
                      "topic": "View Materialization & Updateability",
                      "questionText": "Which factor prevents a SQL view from being directly updateable via UPDATE or INSERT operations?",
                      "codeSnippet": null,
                      "options": [
                            "The view definition includes an INNER JOIN between two tables",
                            "The view definition contains aggregate functions (SUM, COUNT), GROUP BY, or DISTINCT clauses",
                            "The view contains more than 3 columns",
                            "The view is queried by more than one user concurrently"
                      ],
                      "correctAnswer": 1,
                      "explanation": "Views containing aggregate functions, GROUP BY, DISTINCT, HAVING, or UNION cannot map modified view rows 1-to-1 back to underlying base table rows, rendering them non-updateable."
                },
                {
                      "id": "sql-a-20",
                      "questionNumber": 20,
                      "topic": "Database Normalization (3NF)",
                      "questionText": "What condition must a table satisfy to be in Third Normal Form (3NF)?",
                      "codeSnippet": null,
                      "options": [
                            "It must be in 2NF and contain no transitive functional dependencies (non-key attributes must depend strictly on the primary key)",
                            "It must contain no duplicate rows regardless of primary key definitions",
                            "It must store all data in a single JSON column without indexes",
                            "Every column in the table must be a foreign key pointing to another table"
                      ],
                      "correctAnswer": 0,
                      "explanation": "Third Normal Form (3NF) requires the table to be in 2NF and have no transitive dependencies: every non-prime attribute must depend non-transitively directly on the primary key ('the key, the whole key, and nothing but the key')."
                }
          ]
    },
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
