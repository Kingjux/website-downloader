## Complete Website Downloader 💾
Download the Complete Source Code of any Website (including all Assets) 🔨.

![enter image description here](https://github.com/mouricedevs/website-downloader/blob/master/public/Record.gif?raw=true)
<div align="center">

</div>

## Description 📒
 Website downloader works with `wget` and `archiver` to download all websites assets and compress then sends it back to the user through socket channel
 
 **wget params the being used**
 
 `wget --mirror --convert-links --adjust-extension --page-requisites 
--no-parent http://example.org`

 **Explanation of the various flags:**

 - --mirror – Makes (among other things) the download recursive.
- --convert-links – convert all the links (also to stuff like CSS stylesheets) to relative, so it will be suitable for offline viewing.
- --adjust-extension – Adds suitable extensions to filenames (html or css) depending on their content-type.
- --page-requisites – Download things like CSS style-sheets and images required to properly display the page offline.
- --no-parent – When recursing do not ascend to the parent directory. It useful for restricting the download to only a portion of the site
### Deploy on cloud providers
[![Run on Replit](https://binbashbanana.github.io/deploy-buttons/buttons/remade/replit.svg)](https://replit.com/github/mouricedevs/website-downloader)
[![Remix on Glitch](https://binbashbanana.github.io/deploy-buttons/buttons/remade/glitch.svg)](https://glitch.com/edit/#!/import/github/mouricedevs/website-downloader)
[![Deploy on Railway](https://binbashbanana.github.io/deploy-buttons/buttons/remade/railway.svg)](https://railway.app/new/template?template=https://github.com/mouricedevs/website-downloader)
[![Deploy to Cyclic](https://binbashbanana.github.io/deploy-buttons/buttons/remade/cyclic.svg)](https://app.cyclic.sh/api/app/deploy/mouricedevs/website-downloader)
[![Deploy to Koyeb](https://binbashbanana.github.io/deploy-buttons/buttons/remade/koyeb.svg)](https://app.koyeb.com/deploy?type=git&repository=github.com/mouricedevs/website-downloader&branch=main&name=website-downloader)
[![Deploy to Render](https://binbashbanana.github.io/deploy-buttons/buttons/remade/render.svg)](https://render.com/deploy?repo=https://github.com/mouricedevs/website-downloader)


## How to run it on Termux/Vps/Pc
- Copy paste these commands one by one:
```
git clone https://github.com/mouricedevs/website-downloader.git
```
```
cd website-downloader
```
```
npm install
```
```
npm start
```
- Open your browser and paste: 
```
http://localhost:3000
```
### Enjoy ###

Thank you,

Email: admin@giftedtechnexus.co.ke

https://www.giftedtechnexus.co.ke
