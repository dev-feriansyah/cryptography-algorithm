# Cryptography Algorithm With Node JS
This is node.js command that you can use to encrypt and decrypt your message using **ceasar chiper** or **running key chiper**.

## Table of contents
- [Cryptography Algorithm With Node JS](#cryptography-algorithm-with-node-js)
  - [Table of contents](#table-of-contents)
  - [General info](#general-info)
  - [Technologies](#technologies)
  - [Setup](#setup)
  - [Usage](#usage)
    - [Ceaser Chiper Example](#ceaser-chiper-example)
    - [Running Key Chiper Example](#running-key-chiper-example)

## General info
This project is inspired after I Learn Cryptography on information security major at my University.

## Technologies
* Node - version 10.13.0
* Yargs - version 14.2.0

## Setup
If you don't have node js installed, you can find it in [here](https://nodejs.org)
Clone this repo to your desktop and run `npm install` to install all the dependencies.

## Usage
After you clone this project and have dependencies installed. Run the app with `node app.js {method} --message {message} --{step / key} {step / secret key}`

you can use `-m` or `--message`, `-s` or `--step` and `-k` or `--key` for shorter

**Method**

- `c:encrypt` - Ceasar Chiper Encrypt
- `c:decrypt` - Ceasar Chiper Decrypt
- `r:encrypt` - Running Key Chiper Encrypt
- `r:decrypt` - Running Key Chiper Decrypt

### Ceaser Chiper Example
Ceaser chiper using steps rotation for encrypt or decrypt message


`node app.js c:encrypt --message "test" --step 13`

Output:
```
  =================
  =    Message    =
  =================
  Before: test

  After: grfg
```

### Running Key Chiper Example
Running key chiper using secret key for encrypt or decrypt message


`node app.js r:encrypt --message "hello there" --key "cat"`

Output:
```
  =================
  =    Message    =
  =================
  Before: hello there

  After: jeeno vhxte
```