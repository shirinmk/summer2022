# Functions allow you to name and group a set of instructions together. Functions allow you to optionally return a value from the function.

# Example

# Declare a function with a single argument

# # Function declaration has the def keyword.
# def is_even(integer):
#     return (integer % 2) == 0
# Question

# What will be printed in the function call?

# # Function call
# is_even(100)
 

# Example

# The following function accepts a variable number of arguments

# def keep_tally(*args):
#     for arg in args:
#         print(arg)
 

# Question

# What will be printed in the function call?

# keep_tally(1, 2, 3, 4, 5, 6, 7)
 

# Example

# The following example uses "keyword arguments"

# def keep_tally(**kwargs):
#     for kw in kwargs.items():
#         print(kw)
 

# What will be printed in the function call?

# keep_tally(score_one=1, score_two="2.0", score_three="100%")
 

# Question

# The IRS uses a progressive marginal tax system. Read the following article on marginal tax brackets (Links to an external site.). Use the tax bracket information within the article in order to write a function named calculate_marginal_tax_2022() which computes and returns the marginal tax for 2022.

# Calculate the total tax for an individual earning $50,000.