def unexplode(input, antall, otp):
    størrelse = len(input) // antall
    fragmenter = []

    for i in range(0, len(input), størrelse):
        fragment = input[i:i+størrelse]
        fragmenter.append(fragment)

    reordered = [None] * antall
    for i, index in enumerate(otp):
        reordered[index] = fragmenter[i]

    return reordered

with open("04 - Pinneved/pinneved.txt", "r") as file:
    encrypted_content = file.read()

otp = [23, 2, 0, 5, 13, 16, 22, 7, 9, 4, 19, 21, 18, 10, 20, 11, 12, 14, 6, 1, 3, 8, 17, 15]
reordered_fragments = unexplode(encrypted_content, 24, otp)
original_text = [''.join([chr(ord(c) - 2) for c in fragment]) for fragment in reordered_fragments]

with open("04 - Pinneved/slede_decrypted.txt", "w") as file:
    file.write(''.join(original_text))
