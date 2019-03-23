# PolitCtrl

## Controlling the politicians' posts

This project is created to control what words the politicians delete.
When a politician, that is followed by this script, writes a tweet, it gets saved on a database. When they realise what they just done and delete their tweets, it's too late. **Their words won't be forgotten, forever.**

### Building, running

You need Node.js and yarn to run this project. This project also needs to be connected with a running [`politctrl/backend`](https://github.com/politctrl/backend) instance to get some data to show.

1. Install dependencies with yarn:
```
$ yarn
```

2. Overwrite needed environment variables

Create .env.local or similar files to do this instead of changing the values in existing global files.

3. Run it lol

To run a development server:
```
$ yarn start
```

To build a production bundle:
```
$ yarn build
```
