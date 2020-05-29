# This package was created with Create React Embeddable

Create and embed your react app on any app or website!

---

## Quick start

### npm

```
npx create-react-embeddable app
cd app
npm i
npm run dev
```

### yarn

```
yarn create react-embeddable app
cd app
yarn install
yarn dev
```

Create React Embeddable comes with preconfigured [parcel-bundler](https://github.com/parcel-bundler/parcel), [babel](https://github.com/babel/babel) as well as other development tools based on the starter kit of your choice. All of these tools can be tweaked to your liking.

---

## Development

All of your development assets are kept in `/dev`. These will have no impact on any build ever made, and just serve to showcase the app you are currently developing. The dev environment can also be configured (and it is highly encouraged you do so), even to the point where you can develop directly on the build of your target app.

## Building and deployment

Simply running the `build` script will provide you with a single file bundle inside `/build`. This bundle can later be imported into any other app as a script.

## CLI

Create React Embeddable provides a easy to use CLI similar to that of [CRA](https://github.com/facebook/create-react-app)

Arguments will be resolved in the following order:

```
create-react-embeddable <path> <template>
```

Either can be specified via the option tag:

```
create-react-embeddable --template <template> --path <path>
```

## Dependency

Create React Embeddable can also be installed as a dependency, exposing a `handleCreate` method, which can be used to trigger the creation of a React Embeddable programmatically.

Although, why would you ever do that.

Create React App works on macOS, Windows, and Linux.
If something doesn’t work, please file an issue.

---

## Pitfalls

This package should only be used at scale at your own risk. Huge apps created with Create React Embeddable can severely increase load times on your target app due to the sheer bundle size. Using a lot of React Embeddables on a single page might also not be good idea, since they do not share each other's assets (yet), resulting in a lot of possibly unnecessary duplicate code. We look forward to resolving this as soon as possible.

---

If something doesn't work (or there is somehing you miss), feel free to post an issue.

All PR's are welcome!
