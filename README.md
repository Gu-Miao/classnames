# classnames

A simple implement of classname on deno. This lib is only support by deno, if you want to use it in Node.js/Browser, please see [this](https://github.com/JedWatson/classnames).

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

> The usage of this function is similar with [classnames](https://github.com/JedWatson/classnames#usage), different is we use `Set` to remove the repetition so that there is no `dedupe` version. And no `bind` function support yet.

## License

MIT
