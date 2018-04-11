Unit 1 - apt
---

`apt` is Debian's package management suite. You can use apt's `apt-get` and `apt-cache` commands to install and remove software as well as search the package cache for programs that you can install. For example if we wanted to search the package cache for the `cowsay` program we would run the following command:

     hypatian@hypatia:~$ apt-cache search cowsay
     ...

As you can see the `cowsay` program exists, so it can be installed. We can do this with `apt-get`:

     hypatian@hypatia:~$ sudo apt-get install cowsay

Take note that we must use the `sudo` command to "Switch Users and DO" the `apt-get` command. By default this uses the `root` account, which is the administrative account for Linux and Unix based Operating Systems.

### **Exercises**

  * Search for the package `figlet`
  * Install the package `figlet`
  * Run figlet and have it print out "hello"
  * Remove the package figlet
