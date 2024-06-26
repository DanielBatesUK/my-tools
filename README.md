# **My-Tools :hammer::wrench:**

![GitHub package.json version](https://img.shields.io/github/package-json/v/DanielBatesUK/my-tools) ![GitHub last commit](https://img.shields.io/github/last-commit/DanielBatesUK/my-tools) ![GitHub repo file count](https://img.shields.io/github/directory-file-count/DanielBatesUK/my-tools) ![GitHub repo size](https://img.shields.io/github/repo-size/DanielBatesUK/my-tools) ![GitHub issues](https://img.shields.io/github/issues-raw/DanielBatesUK/my-tools)

![GitHub forks](https://img.shields.io/github/forks/DanielBatesUK/my-tools?style=social)

![Twitter Follow](https://img.shields.io/twitter/follow/DanielBatesUK?style=social)

## Description

A simple node.js express server with with useful tools I've built and used for myself over time. I have had a lot some of these tools for a very long time. Some (okay most) are so old that I've forgotten why I made them. Nonetheless, I gave myself the exercise of converting the tools to run on a node.js express server. I'm hobbyist, so I've made a lot of things just for the sake of it.

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

```Shell
http://localhost:3000/
```

Just a simple page with links to the other tools.

### Age of Things

```Shell
http://localhost:3000/age-of-things
```

Get the age of something now or between two start and end date/times.

### Aspect Ratio Calculator

```Shell
http://localhost:3000/aspect-ratio-calculator
```

Title for this tool's name maybe a little miss leading. I was helping somebody making overlays for a presentation. They wanted (nigh on) pixel perfect 4:3 and 16:9 video feeds of varying sizes throughout their presentation. This quick and easy tool gave me the dimensions (resolution) of a box, with a given aspect ratio, via a given height or width.

### Blank Page

```Shell
http://localhost:3000/blank-page
```

Nothing to see here: just a simple _"Hello World"_ blank page.

### Hashes

```Shell
http://localhost:3000/hashes
```

Something I made for messing around with md5 hashes a long time ago. I've long since forgotten what I actually used it for. But they're here anyway.

### IP Address

```Shell
http://localhost:3000/ip-address
```

I made this page for my Uncle. With me being the "tech-guy" of the family. He would repeatedly be asking me how it finds his internet IP address; when setting up multiplayer lobbies for online games. This page simply displays you public ip address (and stops Uncles bothering you).

### Lorem Ipsum

```Shell
http://localhost:3000/lorem-ipsum
```

This was one of the first tools I made for myself. A _Lorem Ipsum_ text generator that I used when designing webpages. The text generated can be used to populate areas on a webpage that would generally have text.

### QR Code

```Shell
http://localhost:3000/qr-code
```

I can't remember why I created this page. It creates QR codes.

### URI Encode/Decode

```Shell
http://localhost:3000/uri-encode-decode
```

This simply converts text into a uri string; or a uri string into text. Nothing fancy here. I made this to help convert svg elements to uri strings, so I could embed into them css: `background-image: url("data:image/svg+xml;utf8,%3Csvg ... ");`

### Video Capture

```Shell
http://localhost:3000/video-capture
```

This is one of my most recent tools. The gist, I have a Chromecast plugged into the HDMI port on my monitor. Occasionally I'd like to have content playing on my Chromecast in a window on my desktop. So I got myself one of them cheap USB HDMI capture devices and a HDMI splitter from Amazon. Then using this webpage I can view the USB HDMI capture device's output (the Chromecast). You can select any other video and audio input device for that matter. Change the settings via the cog in the top left corner (move mouse to show). You'll need to give this page webcam and mic permissions in order for it to work. Also, there's a stand-alone html version of this page [here](https://github.com/DanielBatesUK/my-tools/blob/89e35a8d1a0993bdb5e20cdac1fd744ca176777a/public/video-capture.html).

### More to come

I'd add more stuff here, as and when I get around to it. But I wouldn't hold out much hope of any of it being useful to you.

## GitHub Webhooks

I've added a GitHub webhook handler. This is for the demo that is hosted on <https://glitch.com> (see links below). This is used to keep the my-tools demo constantly up-to-date. As it pulls whenever a push is made to the default ('main') branch. If you want to use this feature, then you will need to run your server with a environment variable: `GITHUB_WEBHOOK_SECRET="[your-secret]"`. This needs to match the secret used when creating the webhook for your repo (Settings -> Webhooks). Otherwise signature verification will always fail and the pull will not happen.

## Demo

You can look at a demo here: <https://my-tools-demo.glitch.me/>

- [/index](https://my-tools-demo.glitch.me/) - Index
  - [/age-of-things](https://my-tools-demo.glitch.me/age-of-things) - Age of Things
  - [/aspect-ratio-calculator](https://my-tools-demo.glitch.me/aspect-ratio-calculator) - Aspect Ratio Calculator
  - [/blank-page](https://my-tools-demo.glitch.me/blank-page) - Blank Page
  - [/hashes](https://my-tools-demo.glitch.me/hashes) - Hashes
  - [/ip-address](https://my-tools-demo.glitch.me/ip-address) - IP Address
  - [/lorem-ipsum](https://my-tools-demo.glitch.me/lorem-ipsum) - Lorem Ipsum
  - [/qr-code](https://my-tools-demo.glitch.me/qr-code) - QR Code
  - [/uri-encode-decode](https://my-tools-demo.glitch.me/uri-encode-decode) - URI Encode/Decode
  - [/video-capture](https://my-tools-demo.glitch.me/video-capture) - Video Capture (and [stand-alone HTML](https://my-tools-demo.glitch.me/video-capture.html) version)

## Author

### **Daniel Bates**

- Github: [@DanielBatesUK](https://github.com/DanielBatesUK)
- Twitter: [@DanielBatesUK](https://twitter.com/DanielBatesUK)
- LinkedIn: [@DanielBatesUK](https://linkedin.com/in/DanielBatesUK)

## License

- Copyright © 2022 [Daniel Bates](https://github.com/DanielBatesUK).
- This project is [GNU v3.0](https://github.com/DanielBatesUK/photo-gallery/blob/67efb74092928f88e5ed685ee61020db399a4635/LICENSE.md) licensed.
