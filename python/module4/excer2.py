# Open, Read and Close - Python function

# Returns a file object - https://docs.python.org/3/library/functions.html#open

# fObj = open("main.py")
# str = fObj.read()
# print(str)
# fObj.close()
 

# Returns a file descriptor (POSIX style call).

# import os
# fDescriptor = os.open("main.py", os.O_RDONLY)
# str = os.read(fDescriptor, 100)
# print(str)
# os.close(fDescriptor)
 

# Read

# fobj = open("main.py")
# fstr = fobj.read()
# print(fstr)
 

# Read - POSIX

# import os
# fDescriptor = os.open("main.py", os.O_RDONLY)
# str = os.read(fDescriptor, 100)
# print(str)
# os.close(fDescriptor)
 

# Write

 

# import os
# fdesc = os.open("file.txt", os.O_RDWR)
# fbyte = os.write(fdesc, b"Some datam")
# os.close(fdesc)
# print(fbyte)
 

# Exercise:

# Write a function that accepts the names of three files as arguments. The function should combine the contents of two files, into a single third file.

 

# Exercise:

# If you are assigned a peer review, please use your checklist to review the individual's file.