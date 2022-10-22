# Baby food introduction UI

This UI is part of the Baby Food Introduction application, which aims to help technological parents keep track of the food introductions they make for their babies.

## Motivation
I'm really forgetful, and food introduction in babies can be tricky.
When you first start introducing food at around 6 months old, you need to do it in an orderly and spaced manner.

You need to introduce one food at one given week, and then in the next week you introduce another, and so on. The problem with food introduction arises when your babies have an allergy!

When an allergy happens, you need to backtrack the food introductions you have been doing one by one.
You remove the latest one introduced and wait a week. If the baby is still not ok, you remove the previous one, and so on.

For this exact purpose, I created the Baby Food Introduction application, to help parents keep their babies food introductions in check and easily backtrackable in case of allergies!

## Architecture

In order to get things more tidy in the repository, we're using [atomic design](https://bradfrost.com/blog/post/atomic-web-design/).
This isn't something that highly restricts code structure, instead it helps provide guidance in the composition that we make of our component hierarchy and structure.
In the next section we'll briefly explain each of the members of the atomic design and how they're being applied in this repo.

## Project Structure

Inside your project, you'll see the following directory structure:

```
├── public/
│   └── ...
└── src/
    ├── components/
    │   └── atoms
    │       └── ...
    │   └── molecules
    │       └── ...
    │   └── organisms
    │       └── ...
    │   └── templates
    │       └── ...
    └── routes/
        └── ...
```

### `src/components`
> Recommended directory for components.
>
> Inside the components folder you'll find our division for almost every aspect of the atomic design. 
> - `atoms`: the most basic level of components. Highly reusable and composable. They are meant to be the building blocks of everything we do in the application.
> e.g: a text input or a button
> - `molecules`: Highly usable and composable. They are not as basic as the atoms, but they still are meant to be used in many situations throughout the application.
> e.g: a search input (composing a button + text input)
> - `organisms`: More specialized components. They are not as reusable, but they start to symbolize more complex ideas.
> e.g: a header (with a menu, navigation links, actions)
> - `templates`: The classes for our pages. They are the skeleton of what a page will be. They compose organisms and other low level structures in order to achieve the outcome of a page when data is given to them.
> e.g: dashboard template (a simple analogy with template and pages is: think of a template as a `class`, and think of a `page` as it's instance)

### `src/routes`
> Provides the directory based routing, which can include a hierarchy of `layout.tsx` layout files, and an `index.tsx` file as the page. Additionally, `index.ts` files are endpoints. Please see the [routing docs](https://qwik.builder.io/qwikcity/routing/overview/) for more info.
> 
> The routes folder will hold our actual `pages` for the atomic design.
> - `pages`: The actual pages the final user will see. They are filled with data in order to make the template meaningful.

### `public`
> Any static assets, like images, can be placed in the public directory. Please see the [Vite public directory](https://vitejs.dev/guide/assets.html#the-public-directory) for more info.

## Development

Development mode uses [Vite's development server](https://vitejs.dev/). During development, the `dev` command will server-side render (SSR) the output.

```shell
npm run dev
```

> Note: during dev mode, Vite may request a significant number of `.js` files. This does not represent a Qwik production build.

## Preview

The preview command will create a production build of the client modules, a production build of `src/entry.preview.tsx`, and run a local server. The preview server is only for convenience to locally preview a production build, and it should not be used as a production server.

```shell
npm run preview
```

## Production

The production build will generate client and server modules by running both client and server build commands. Additionally, the build command will use Typescript to run a type check on the source code.

```shell
npm run build
```

## Contributing Guide

[CONTRIBUTING.md](CONTRIBUTING.md).

## COC

[CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://github.com/comoser"><img src="https://avatars.githubusercontent.com/u/5495320?v=4?s=100" width="100px;" alt="David Alecrim"/><br /><sub><b>David Alecrim</b></sub></a><br /><a href="https://github.com/comoser/baby-food-intro-api/commits?author=comoser" title="Code">💻</a> <a href="https://github.com/comoser/baby-food-intro-api/commits?author=comoser" title="Documentation">📖</a> <a href="#ideas-comoser" title="Ideas, Planning, & Feedback">🤔</a> <a href="#maintenance-comoser" title="Maintenance">🚧</a> <a href="https://github.com/comoser/baby-food-intro-api/pulls?q=is%3Apr+reviewed-by%3Acomoser" title="Reviewed Pull Requests">👀</a> <a href="#tool-comoser" title="Tools">🔧</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

## License

[MIT licensed](LICENSE).

