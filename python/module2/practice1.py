# https://www.online-python.com/
# use this to compile and visule code to edit
# Exercise 1: Write a program that uses input to prompt a user for their
# name and then welcomes them.


# Enter your name: Chuck
# Hello Chuck

user = input('Enter your name:')
print(f'Hello {user}')

# Exercise 2: Write a program to prompt the user for hours and rate per
# hour to compute gross pay.


# Enter Hours: 35
# Enter Rate: 2.75
# Pay: 96.25

hour = int(input('Enter Hours'))
rate = float(input('Enter rate'))
print(f'Your gross pay for {hour} hours and {rate} rate is {hour*rate}')

# Exercise 3: Execute the following assignment statements into a Python script:

# width = 17
# height = 12.0
# For each of the following expressions, write some Python code to print the value of the expression and the
# type of the value of the expression (e.g. type() function).

# 1. width//2
# 2. width/2.0
# 3. height/3
# 4. 1 + 2 * 5


width = 17
height = 12.0
x = width//2
y = width/2.0
z = height/3
w = 1 + 2 * 5
print(f'x is {x} and type of it is {type(x)}')
print(f'y is {y} and type of it is {type(y)}')
print(f'z is {z} and type of it is {type(z)}')
print(f'x is {w} and type of it is {type(w)}')


# Exercise 4: Write a program which prompts the user for a Celsius temperature, convert the temperature to Fahrenheit, and print out the
# converted temperature.

celsius = int(input('Enter the celsius:'))
def convert(celsius):
    fahrenhite = celsius * 1.8 + 32
    return fahrenhite
y = convert(celsius)
print(f'{celsius} celsius is {y} fahrenhite')