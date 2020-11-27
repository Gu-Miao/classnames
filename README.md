# classnames

A simple implement of concating classnames. This lib is only support for [Deno](https://deno.land/), if you want to use it in Node.js/Browser, please see [this](https://github.com/JedWatson/classnames).

## Usage

```js
classNames("foo", "bar"); // => 'foo bar'
classNames("foo", { bar: true }); // => 'foo bar'
classNames({ "foo-bar": true }); // => 'foo-bar'
classNames({ "foo-bar": false }); // => ''
classNames({ foo: true }, { bar: true }); // => 'foo bar'
classNames({ foo: true, bar: true }); // => 'foo bar'

// lots of arguments of various types
classNames("foo", { bar: true, duck: false }, "baz", { quux: true }); // => 'foo bar baz quux'

// other falsy values are just ignored
classNames(null, false, "bar", undefined, 0, 1, { baz: null }, ""); // => 'bar 1'
```

> The usage of this function is similar with [classnames](https://github.com/JedWatson/classnames#usage), the different is we use `Set` to remove the repetition so that there is no `dedupe` version.

> No `bind` function for CSS Moduless support yet.

## License

MIT
