# 0x01-ES6_Promises

This project is part of the ALX Backend JavaScript curriculum and focuses on JavaScript Promises and asynchronous programming.

## Concepts
    - Promises (how, why, and what)
    - How to use the `then`, `resolve`, `catch` methods
    - How to use every method of the Promise object
    - Throw / Try
    - The await operator
    - How to use an `async` function

## Environment
* This project was developed on Ubuntu 18.04 LTS using NodeJS 12.11.x

## Setup

1. Install NodeJS 12.11.x
   ```bash
   curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
   sudo bash nodesource_setup.sh
   sudo apt install nodejs -y
   ```

2. Verify the installation:
   ```bash
   nodejs -v
   npm -v
   ```

3. Install Jest, Babel, and ESLint
   In your project directory, install Jest, Babel and ESLint by using the supplied `package.json` and run `npm install`.

## Configuration Files

Add the following files to your project directory:
- `package.json`
- `babel.config.js`
- `utils.js`
- `.eslintrc.js`

Don't forget to run `$ npm install` when you have the `package.json`

## Response Data Format

`uploadPhoto` returns a response with the format:
```json
{
  "status": 200,
  "body": "photo-profile-1"
}
```

`createUser` returns a response with the format:
```json
{
  "firstName": "Guillaume",
  "lastName": "Salva"
}
```

## Author

Emmanuel Niyonshuti

- [LinkedIn](https://www.linkedin.com/in/niyonshuti-emmanuel-82877b285/)
- [(X)Twitter](https://x.com/NIYONSH77028058)

## License

This project is licensed under the MIT License.