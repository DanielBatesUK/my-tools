# express-template

Simple node.js express server template

## Installation

### Create repo from template

Goto <https://github.com/DanielBatesUK/express-template/generate> and create new repo from the template

### Clone your repo

Clone the new repo to your system. Replacing `YOUR-USERNAME` & `YOUR-REPO-NAME` where appropriate.

```Shell
git clone https://github.com/YOUR-USERNAME/YOUR-REPO-NAME
```

### Install dependencies

Once cloned, goto the project's root directory and install required dependencies from npm.

```Shell
npm install
```

### Configure the .env file

Create an new .env file with the following.

```Shell
cat > .env
```

Then enter the following variables:

```Shell
PORT=3000
ROUTE_INDEX="/"
VIEW_INDEX="index"
```

 With the above press <kbd>Ctrl</kbd> + <kbd>D</kbd> to save.

## Run

After you making the .env file you can then start the app with either:

```Shell
node server.js
```

or

```Shell
npm start
```

### Access via browser

```Shell
http://localhost:3000
```

> Hello World!

## Credits

### Dependencies

- cookie-parser - [GitHub](https://github.com/expressjs/cookie-parser) [npm](https://www.npmjs.com/package/cookie-parser)
- dotenv - [GitHub](https://github.com/motdotla/dotenv) [npm](https://www.npmjs.com/package/dotenv)
- express - [GitHub](https://github.com/expressjs/express) [npm](https://www.npmjs.com/package/express)
- pug - [GitHub](https://github.com/pugjs/pug/tree/master/packages/pug) [npm](https://www.npmjs.com/package/pug)

## Author

### **Daniel Bates**

- Github: [@DanielBatesUK](https://github.com/DanielBatesUK)
- Twitter: [@DanielBatesUK](https://twitter.com/DanielBatesUK)
- LinkedIn: [@DanielBatesUK](https://linkedin.com/in/DanielBatesUK)

## License

- Copyright © 2022 [Daniel Bates](https://github.com/DanielBatesUK).
- This project is [GNU v3.0](https://github.com/DanielBatesUK/express-template/blob/fb095588f22edde7a57a6af9f4cee60bd0f5aa96/LICENSE) licensed.
