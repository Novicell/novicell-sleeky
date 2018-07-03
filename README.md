# Novicell Sleeky

[![Greenkeeper badge](https://badges.greenkeeper.io/Novicell/novicell-sleeky.svg)](https://greenkeeper.io/)

Simplified popup in the right bottom corner of the screen.

## How it works
Small popup window at the bottom right corner. It shows a small title,
that expands after 5 seconds to the actual content.
A cookie will also be set, so the next time the user reloads a page,
or visits the page, it won't show.


## Get started
1. Add the `novicell.sleeky.js` and `novicell.sleeky.less` to your project.

2. Use the following bit of HTML:
```
<div id="sleeky" class="sleeky collapsed">
    <div class="sleeky-collapsed">
        <span class="sleeky__title">Clickbait title</span>
    </div>
    <div class="sleeky-expanded">
        <button class="sleeky-expanded__close" id="sleeky-toggle">X</button>
        <div class="sleeky-expanded__content">
            <span class="sleeky__title">Clickbait title</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum quas provident, nesciunt, obcaecati pariatur quia laboriosam blanditiis nihil sit sapiente.</p>
        </div>
    </div>
</div>
```

3. Add this one line to your document ready:
```
novicell.sleeky.init({'selector': $('#sleeky')});
```

And thats it!


## Requirements
* jQuery
* js-cookie (https://github.com/js-cookie/js-cookie)


## License
Novicell sleeky is licensed under the MIT license. (http://opensource.org/licenses/MIT)
