Unit1 - Gitting with Git!
---

This is the final part of Unit 1 and the last piece of the basic skill set you will need to successfully write your first Python program. So what is *git*? Git is a type of program known as a Version Control System (VCS). A VCS is program that tracks changes in your code and allows you to share your changes with others. Think of git as a tool to "save" your work. The basic functions of git are as follows:

* **commit** you work to save it and add a log message to document why you made the changes
* **push** your work to the remote git server so others can see your changes
* Best practices mean **commit** and **push** your work often so work history is not lost!
 * With advanced usage this will allow you to **revert** your changes if you decide you made a mistake.

**Getting Setup**

Now that you have an idea of the basics lets git! But first we have some initial setup to do:

1) Open a web-browser and navigate to **github.com** (if you already have an account, you can skip this step), create an account,

2) Now lets use our *comand line* skills we learned earlier. Open up a terminal on your virtual machine, lets create an install *git* with *pkg*:

    pkg install git

3) Now lets create an **ssh-key**. You do not have to worry about the specifics of this now, but you do need to know that it works as a strong *password* that allows you to **push** your changes to github.com. Create the ssh-key with the following command:

    ssh-keygen -t ed25519

4) Now we have to display the public peice of our ssh-key, do this with the following command:

    cat ~/.ssh/id_ed25519.pub

5) Go back to github.com, and navigate to your account settings. Click the option to add an SSH Key to your account.

6) Copy the ssh key you displayed to the screen, and add it to your github.com account. You can name it anything you like. The ssh-key should look something like:

    ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIAj7b/sXdlzasdfj/S0drcKasdfiIwCfh2o+ztxE2I6S username@hostname

And thats it! That is all the setup you need to begin using *git*.

The next and last section of Unit 1 will be making your first git commit! Happy Gitting!
