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

Just a simple page. Nothing really to see here. Basically just a "Hello World".

### Hashes

```Shell
http://localhost:3000/hashes
```

Something I made this for messing around md5 hashes a long time ago. I've long since forgotten what I actually used it for. But they're here anyway.

### Video Capture

```Shell
http://localhost:3000/video-capture
```

This is one of my most recent tools. The gist, I have a Chromecast plugged into the HDMI port on my monitor. Occasionally I'd like to have content playing on my Chromecast in a window on my desktop. So I got myself one of them cheap USB HDMI capture devices and a HDMI splitter from Amazon. Then using this webpage I can view the USB HDMI capture device's output (the Chromecast). You can select any other video and audio input device for that matter. Change the settings via the cog in the top left corner (move mouse to show). You'll need to give this page webcam and mic permissions in order for it to work. Also, there's a stand-alone html version of this page [here](https://github.com/DanielBatesUK/my-tools/blob/89e35a8d1a0993bdb5e20cdac1fd744ca176777a/public/video-capture.html).

### More to come

I'd add more stuff here, as and when I get around to it. But I wouldn't hold out much hope of any of it being useful to you. Here's my current todo list:

- Get the age of something
- Aspect ratio calculator
- Colour stepper
- LAN device IPs
- Lorem Ipsum
- QR Code
- And more!

## GitHub Webhooks

I've added a GitHub webhook handler. This is for the demo that is hosted on <https://glitch.com> (see links below). This is used to keep the my-tools demo constanstly up-to-date. As it pulls whenever a push is made to the default ('main') branch. If you want to use this feature, then you will need to run your server with a  environment variable: `GITHUB_WEBHOOK_SECRET="[your-seceret]"`. This needs to match the secret used when creating the webhook for your repo (Settings -> Webhooks). Otherwise signature verifacation will always fail and the pull will not happen.

## Demo

You can look at a demo here: <https://my-tools-demo.glitch.me/>
- [/index](https://my-tools-demo.glitch.me/) - Index
- [/hashes](https://my-tools-demo.glitch.me/hashes) - Hashes
- [/video-capture](https://my-tools-demo.glitch.me/video-capture) - Video Capture (and [stand-alone HTML](https://my-tools-demo.glitch.me/video-capture.html) version)

## Author

### **Daniel Bates**

- Github: [@DanielBatesUK](https://github.com/DanielBatesUK)
- Twitter: [@DanielBatesUK](https://twitter.com/DanielBatesUK)
- LinkedIn: [@DanielBatesUK](https://linkedin.com/in/DanielBatesUK)

## License

- Copyright © 2022 [Daniel Bates](https://github.com/DanielBatesUK).
- This project is [GNU v3.0](https://github.com/DanielBatesUK/photo-gallery/blob/67efb74092928f88e5ed685ee61020db399a4635/LICENSE.md) licensed.
