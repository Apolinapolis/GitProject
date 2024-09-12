from os import remove


def descending_order(num):
    temp = sorted([int(el) for el in str(num)], reverse=True)
    return int(''.join(map(str,temp)))

descending_order(123456789)