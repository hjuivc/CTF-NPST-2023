
## Decryption Process

### Initial Considerations

The message consisted of a series of number pairs in the format `X-Y`. Initial decryption attempts included considering these pairs as coordinates on a standard Norwegian keyboard layout. However, this approach did not yield a coherent message, suggesting the need for a different decryption method.

### Correct Approach: Phone Keypad Decryption

Given the context of the message being sent via SMS, it was hypothesized that the numbers corresponded to a traditional phone keypad, where each number key is associated with multiple letters. In this interpretation, the first number in each pair `X` indicates the keypad number, and the second number `Y` indicates the Yth letter associated with that key.

### Decryption Key

A standard phone keypad layout was used for decryption:

- Key 1: [No letters]
- Key 2: ABC
- Key 3: DEF
- Key 4: GHI
- Key 5: JKL
- Key 6: MNO
- Key 7: PQRS
- Key 8: TUV
- Key 9: WXYZ
- Key 0: [Space]


### Decrypted Message

The successful decryption of the SMS resulted in the following message:

`SYSTEM INFISERT GRUNKER INCOMING`

### Submission

Upon successfully decrypting the message, the flag to be submitted was:

`PST{SYSTEM INFISERT GRUNKER INCOMING}`

## Conclusion

The message "SYSTEM INFISERT GRUNKER INCOMING," once decrypted, appeared to be an alert or notification, likely pertinent to the context of the emergency response system at the workshop. This challenge demonstrated the importance of context (SMS format) in decryption and underscored the effectiveness of applying the correct decryption technique.

