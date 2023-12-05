# Hey Skunch! 🎸

This is the source code for your website! If you need help with anything here, give me a call. Otherwise, I'd probably leave all this alone if at all possible. It's easy to fix things here, but also pretty easy to break.

# Hey other developers! 🖥️
You either came here to help Skunch work on this site in the future, or you're checking out my work. In either case, this README serves as a quick breakdown of the tools used in this project.

## The Tools 🛠️
### Astro 🚀
I went with Astro for the meta framework. It provides some image optimzation, works as a JSX engine, has lots of cool tiny features like an easy way to use the transitions API, and is a good candidate for doing other cool stuff if you want to add a framework or whatever. You can even add multiple frameworks. It's also got a pretty low barrier to entry to start. If you can write HTML, CSS, and markdown, you can start with astro and learn JS along the way.

You can find more information as well as a good tutorial on how to get started at https://astro.build/

### Tailwind 🎨
I went with tailwind for the styling. I've used it for a ton of projects. It's only a tiny bit opinionated, so you can use inline styles if you don't feel like fussing with it too much, but it's pretty easy to use. You just write classes for all the styles directly in your markup. Here's an example:
```jsx
<div class="flex flex-col gap-4">
	<h1 class="text-5xl">This is my big title!</h1>
	<span class="text-sm italic">This is my small, italicized subtitle</span>
</div>
```
You can find a full list of utility classes at their website: https://tailwindcss.com/

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
