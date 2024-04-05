# Q-net-Q Website

This repository contains the source code of the *Q-net-Q* project homepage.

The current state of the main branch is published on https://evernet.duckdns.org.

A preview deployment for the staging branch is available on https://evernet.duckdns.org/staging.

## Docusaurus

We are using [*Docusaurus*](https://docusaurus.io/), an open source static-website generator, written in *TypeScript*, powered by *React* and maintained by *Facebook*. It's core functionality we are making use of is to turn content written in simple *Markdown* files into a modern ready-to-deploy single-page web application. You can even use *MDX* instead of pure *Markdown* which allows you to embed *JSX* and *React* components directly into your content.  
Take a look at the [official documentation](https://docusaurus.io/docs) to learn about all the basic and advanced features this software provides.

## Generate website and start server for local development

When working on a local copy of the repository it can be very hany to preview your changes before committing. The *Docusaurus* developers implemented a *development server* exactly intended for this purpose. It starts a server to host the generated website that is capable of reflecting changes immediately after saving a file without the need to restart the server in most of the times.

*Docusaurus* uses the *Yarn* package manager to download dependencies and to start build and server tasks. So after installing the latest version of [*Classic Yarn*](https://classic.yarnpkg.com/en/docs/install) on your system and cloning the repo to your hard disk you can open a terminal, cd into the repo folder and simply execute
```console
yarn
```
to install the depending packages and then
```console
yarn start
```
to start the server. You can now visit the website in your browser on:

#### http://localhost:3000

To stop the server go back to your terminal and hit `Ctrl+C`.

However, the *development server* can only handle *Docusaurus'* basic features. If you are making major changes in structure, fiddle around with plugins or even to view the website in another language you better use this command to start the server:
```console
yarn clear && yarn build && yarn serve
```
This will do a full fletched static build of the website just like our production server does. The downside is that you would have to do this every time to reflect new changes in the source code.

## Create Content

All content is written in *md* or *mdx* files which are located in the `docs/` directory.

By default *Docusaurus* would use the structure of all its sub folders, as well as the first headline in each file, to automatically create the navigation sidebar to the left in the generated website. To better fit our needs we made some changes to this behavior. Instead of having one big sidebar for all the child elements of the `docs/` directory we moved the location of the buttons for the first level of sub folders to the navigation bar on top of the site and split up the sidebar to be generated from inside the respective sub folder. So hitting one of this buttons on top will open a site with its own sidebar.  
That means files or a folders created directly under `docs/` will **not** be processed automatically and must be added to the navigation bar manually instead.

The default language of our website is English, but we are using the *i18n* plugin to provide versions of the website in other languages. The `i18n/` folder contains all the translation files. There are *json* files to cover react code pages and all elements on the site like buttons, menu items etc. and there is a copy of every *Markdown* file.  
Translations must be done manually.
