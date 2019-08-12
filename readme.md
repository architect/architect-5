[<img src="https://s3-us-west-2.amazonaws.com/arc.codes/architect-logo-500b@2x.png" width=500>](https://www.npmjs.com/package/@architect/architect@5)

## [`@architect/architect@5`](https://www.npmjs.com/package/@architect/architect)

> [Maintenance / LTS] Create, deploy, and maintain next-generation AWS cloud function-based serverless infrastructure with full local, offline workflows, and more.

[![Travis Build Status](https://travis-ci.com/architect/architect-5.svg?branch=master)](https://travis-ci.com/architect/architect-5) [![Appveyor Build Status](https://ci.appveyor.com/api/projects/status/7q30bexnt5pdrlby/branch/master?svg=true)](https://ci.appveyor.com/project/ArchitectCI/architect-5/branch/master) <!--TODO: [![codecov](https://codecov.io/gh/architect/architect-5/branch/master/graph/badge.svg)](https://codecov.io/gh/architect/architect-5)-->


## Quickstart
No AWS account required!

1. Create a Node project:

```bash
mkdir testapp
cd testapp
npm init --yes
```

2. Install Architect

```bash
npm i @architect/architect
```

3. Add an `.arc` file:

```arc
@app
testapp

@http
get /
```

4. Generate your project code locally:

```bash
npx create local
```

5. Fire up the Architect sandbox to preview your work:

```bash
npx sandbox
```

To see all commands run:

```bash
npx help
```


### Learn more

Full docs found at https://arc.codes

[Architect changelog here](./changelog.md)


### Founding team

[Amber Costley](https://github.com/amberdawn), [Angelina Fabbro](https://github.com/afabbro), [Brian LeRoux](https://github.com/brianleroux), Jen Fong-Adwent, [Kristofer Joseph](https://github.com/kristoferjoseph), [Kris Borchers](https://github.com/kborchers), [Ryan Block](https://github.com/ryanblock), [Spencer Kelley](https://github.com/spencermountain)


### Special thanks

[Pinyao Guo](https://github.com/pug132) for the [Architect GitHub name](https://github.com/architect)
