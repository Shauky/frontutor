## Deploy using Vercel
In their own words : Vercel is a cloud platform for static sites and Serverless Functions that fits perfectly with your workflow. It enables developers to host Jamstack sites and web services that deploy instantly, scale automatically, and requires no supervision, all with no configuration.

## Getting started

```bash
$ git clone git@github.com:Shauky/frontutor.git
$ cd frontutor
$ npm install
$ npx frontity dev

SERVER STARTED -- Listening @ http://localhost:3000
  - mode: development
  - target: module

```

## Build

```bash
$ npx frontity build
```


## Deployment (Vercel (now.sh))

```bash
$ npx vercel login
$ npx vercel --prod
```
