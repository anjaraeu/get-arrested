# Get arrested

This project is freely inspired from [hamukazu/lets-get-arrested](https://github.com/hamukazu/lets-get-arrested). But now it is a npm module!

If you don't know that, a Japanese schoolgirl was caught by the police for putting a link to a website with a endless loop of `alert();`, as simple as:

```JavaScript
while (1) {
    alert("hey!");
}
```

So, in Japan, putting an endless loop is a "crime". So let's be criminals and **get arrested**!

Enjoy your new criminal life!

## Get started quickly!

```Shell
npm install -g @anjaraeu/get-arrested
get-arrested
```

or even faster!

`npx @anjaraeu/get-arrested`

The npm module is supereasy too!

```Javascript
// example
require("@anjaraeu/get-arrested").loop();
```
