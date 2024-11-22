# React-ink-tsx
Simple template for CLI development based on React, Ink and Typescript. It implements a bluesky profile card.

```bash
mendes@fedora:~/Dev/react-ink-tsx$ ./cli.js
[CONFIG] Reading config from /home/mendes/Dev/react-ink-tsx/config.toml

 Name:  Mendes
 Handle:  @mendes.software
 Followers:  357
 Following:  1022
```

# Getting Started
1. Clone this repository and install all dependencies with yarn:

```bash
$ yarn install
```

2. Create the config.toml file, with the following content:
```toml
[user]
did = "did:plc:kjxzqls2uo...w"
authorization = "Bearer eyJ0eXAiOiJ...1fNQbew"
```

> Tip: you can find both configs within any request in the network console, using bluesky web client.

3. Compile the application:
```bash
$ yarn build
```

4. Run the `cli.js` script (you may need to add execution permission with `chmod +x cli.js`):

```bash
$ ./cli.js
```