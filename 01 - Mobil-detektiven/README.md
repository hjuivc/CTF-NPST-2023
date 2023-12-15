# SMS Decryption Task

Here's your first task!

During the investigation of the incident at the Christmas workshop, we discovered something strange. One of the messaging systems that sends alerts to the emergency guards for the workshop has sent an SMS to an unknown number. Unfortunately, the message is completely unreadable to us, so we need your mobile detective skills. Once you figure it out, send me your answer in the format PST{your answer here}.

```
7-4 9-3 7-4 8-1 3-2 6-1 0-1
4-3 6-2 3-3 4-3 7-4 3-2 7-3
8-1 0-1 4-1 7-3 8-2 6-2 5-2
3-2 7-3 0-1 4-3 6-2 2-3 6-3
6-1 4-3 6-2 4-1
```

\- Tastefinger


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

