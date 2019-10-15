from functools import reduce

nested_list = [[1, 2], [3], [4, 5, 6]]
flat_list = list(reduce(lambda a, x: a + x, nested_list))
print(flat_list)

