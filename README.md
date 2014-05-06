# SankakuValidator

Development environment for Hatena blog theme based on [boilerplate](https://github.com/hatena/Hatena-Blog-Themes/tree/master/boilerplate)

This project includes [distkloc/Hatena-Blog-Themes](https://github.com/distkloc/Hatena-Blog-Themes) as subtree merge.

[三角Validator](http://sankakuvalidator.hatenablog.com/) uses this theme.

## Dependencies

* node.js
* [gruntjs/grunt-cli](https://github.com/gruntjs/grunt-cli)

## Development (reminder)

1. Create `index.html` in `view/` directory.
2. Load `sankakuvalidator.css` in the `index.html` by link tag. `sankakuvalidator.css` is supposed to be generated in the project's root directory by grunt task.
2. Change current directory to the project's root one.
3. Run `npm install`
4. Run `grunt`

## Compiling production css

If you want to compile minified css, run the following

```
grunt less:production
```
