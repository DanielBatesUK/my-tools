# **My-Tools :hammer::wrench:**

![GitHub package.json version](https://img.shields.io/github/package-json/v/DanielBatesUK/my-tools) ![GitHub last commit](https://img.shields.io/github/last-commit/DanielBatesUK/my-tools) ![GitHub repo file count](https://img.shields.io/github/directory-file-count/DanielBatesUK/my-tools) ![GitHub repo size](https://img.shields.io/github/repo-size/DanielBatesUK/my-tools) ![GitHub issues](https://img.shields.io/github/issues-raw/DanielBatesUK/my-tools)

![GitHub forks](https://img.shields.io/github/forks/DanielBatesUK/my-tools?style=social)

![Twitter Follow](https://img.shields.io/twitter/follow/DanielBatesUK?style=social)

## Description

 A simple node.js express server with with useful tools I've built and used for myself over time.

## Installation

### Clone the repository

Clone the my-tools repo from GitHub.

```Shell
git clone https://github.com/DanielBatesUK/my-tools
```

Then, in the clone's root directory, install required dependencies from npm.

```Shell
npm install
```

### Run

Then start the app with either:

```Shell
node server.js
```

or

```Shell
npm start
```

## Tools

### Index

To access the photo gallery use a web browser and goto the server's ip address and add the port number given with variable `PORT` in the .env file. e.g. `http://192.168.0.100:3000/` or if on the same machine try `http://localhost:3000/`. If you are running a web server (apache, nginx, etc), maybe consider adding a proxy to your site config files. You can navigate around the three pages using the links in navigation bar/dropdown.

### Gallery page

There are pagination links at the bottom of each page of the gallery. With links to first, previous, next and last pages to help you navigate. You can also use a left and right swipe gesture to go to the next and previous pages too.

Clicking on a photo will open a modal displaying a full screen version of that photo. You can download a full resolution image of the photo via the download button (downward arrow with a line). You can also display the next and previous photos via the left and right arrows on the screen (these are removed if viewing on a phone), by using the left and right arrows on your keyboard, or by using a left or right swiping gesture. The next or previous page of the gallery will be loaded automatically if you navigate beyond the bounds of the current gallery page.

### Upload page (access via passcode)

When first using the upload page, you will be greeted with a 'Enter passcode' form. This is where you enter the text contained in the `PASSCODE` variable in your .env file.

You can share a link to the upload page that automatically submits the passcode. You can do this by adding `?p=PASSCODE` (replace PASSCODE with your own passcode) to the URL.

## Demo

You can look at a demo here: <https://www.danielbates.co.uk/photo-gallery/>

## Fonts

Here's a credit for the designers of the fonts I used.

- Cute Egg - Free for personal use only - by [Khurasan](https://www.creativefabrica.com/product/cute-egg-5/ref/53/)
- Hany Petter - Free for personal use only - by [StringLabs](https://stringlabscreative.com/hany-petter)
- Louis George Cafe - Free for personal and commercial use - by Chen Yining

- Night DEMO - Free for personal use only - by [Vilogsign](https://www.creativefabrica.com/product/jolly-night-duo/ref/237966)

## Story

I was getting married. We thought it would be good to have a place where our guests could share with us and upload their photos; of our special day. Therefore, I made this. And, thankfully, it worked very for us. I wouldn't dare call myself a 'programmer', I'm just a hobbyist. I have no doubt there are many things I'm doing wrong, or can be done way more efficiently. So I please be kind.

## Author

### **Daniel Bates**

- Github: [@DanielBatesUK](https://github.com/DanielBatesUK)
- Twitter: [@DanielBatesUK](https://twitter.com/DanielBatesUK)
- LinkedIn: [@DanielBatesUK](https://linkedin.com/in/DanielBatesUK)

## License

- Copyright © 2022 [Daniel Bates](https://github.com/DanielBatesUK).
- This project is [GNU v3.0](https://github.com/DanielBatesUK/photo-gallery/blob/67efb74092928f88e5ed685ee61020db399a4635/LICENSE.md) licensed.
