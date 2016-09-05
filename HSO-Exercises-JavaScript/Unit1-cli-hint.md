Unit1 - Command Line Interface (cli)
---

The command line provides a more advanced interface to interact
with the operating system.  Textual commands are entered in the "shell"
to issue various operations.

### **Exercises**

* Create a JavaScript program to print out "Hello JavaScript!" with the text editor and run it from the command line.
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

Contents of `hello_js.py`:

    ~ cat hello_js.py
    console.log("Hello JavaScript!");

Run `hello_js.py`:

    ~ node hello_js.py
    Hello JavaScript!

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

    ~ mv ../hello_js.py .
