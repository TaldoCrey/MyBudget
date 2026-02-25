from random import randint, choice

letters = "abcdefghijklmnopqrstuvwxyz"
numbers = "01234567890"
special = "!@#$%*.;,:\\/-_=+?"

length = randint(8, 12)

print(f"Generating a {length} char password!")

password = ""

for _ in range(length):
    print(f"# Generating number {_ + 1} character")
    ctype = randint(0, 2)
    if ctype == 0:
        char = choice(letters)
        if randint(0, 1) == 1:
            char = char.upper()
    elif ctype == 1:
        char = choice(numbers)
    else:
        char = choice(special)
    
    password += char

print(f"Final password: {password}")
