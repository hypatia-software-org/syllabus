Unit 1 - Command Line Interface (cli)
---

The command line provides a more advanced interface to interact
with the operating system.  Textual commands are entered in the "shell"
to issue various operations.

The main advantage to working in the "shell" is that it enables the
user (you) to have full control over the way commands are executed.
While there are graphical tools that allow you to do many of these
same functions, it is very important that you learn what is going
on behind the scenes. This way if a graphical program is not working
right you will know what is going on under the hood, and will most
likely be equipped to solve the problem.


While navigating your shell there are some basics commands that you
will need to know to get started (when you see DIRECTORY_NAME or
FILE_NAME be sure to replace this with the directory of your choice):

* `pwd` - Show the Present Working Directory that you are currently in (where you are)
* `ls` - List current files and directories in your current working
directory (what is here)
* `cd DIRECTORY_NANE` - Change Directory to the DIRECTORY_NAME you give (move around)
* `mkdir DIRECTORY_NAME` - Create a new directory with the name DIRECTORY_NAME
* `cat FILE_NAME` - Print a file to the screen
* `rm FILE_NAME` - Remove a file (delete)
* `nano` - A Text Editor that can be used to edit files at the command line

**WARNING**: Using commands like `rm -rf` can delete large parts of your filesystem if you are not careful. Always double check your command before typing it. If you are unsure of yourself, use `rm -ri` instead so that `rm` will confirm the filename with you before deleting it.

Patrice creating and deleting files and directories:

     hypatian@hypatia:~$ mkdir testing
     hypatian@hypatia:~/testing$ cd testing
     hypatian@hypatia:~/testing$ mkdir dir1 dir2 dir3
     hypatian@hypatia:~/testing$ ls
     dir1 dir2 dir3
     hypatian@hypatia:~/testing$ rm -rf dir2
     hypatian@hypatia:~/testing$ ls
     dir1 dir3

When you are done clean up your testing directory:

     hypatian@hypatia:~/testing$ pwd
     /home/hypatian/testing
     hypatian@hypatia:~$ cd ..
     hypatian@hypatia:~$ rm -rf testing

Do this for a while until you feel you have the hang of creating and deleting files and directories. Be sure you understand how to navigate files and directories at the shell before moving on.

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
