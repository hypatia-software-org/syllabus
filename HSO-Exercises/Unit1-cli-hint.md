Unit 1 - Command Line Interface (cli) [HINT]
---

The command line provides a more advanced interface to interact
with the operating system.  Textual commands are entered in the "shell"
to issue various operations.

### **Exercises**

* Create a Python program to print out "Hello Python!" with the text editor and run it from the command line.
* list a directory
* show the current directory
* create a directory
* go into the newly created directory
* list the directory with hidden files
* print something out on the shell
* put something into a file
* show contents of file
* remove a file
* move a file

### Hints

Contents of `hello_python.py`:

    ~ cat hello_python.py
    print "Hello Python!"

Run `hello_python.py`:

    ~ python hello_python.py
    Hello Python!

List a directory:

    ~ ls

Print the directory:

    ~ pwd

Make a directory:

    ~ mkdir sandbox

Go into the newly created `sandbox` directory:

    ~ cd sandbox

List the hiddne files in the directory:

    ~ ls -la

Print out "hello" from the command line:

    ~ echo hello

Put the "hello" into a file:

    ~ echo hello > file.txt

Show the contents of the file:

    ~ cat file.txt

Remove the file:

    ~ rm file.txt

Move a file:

    ~ mv ../hello_python.py .
