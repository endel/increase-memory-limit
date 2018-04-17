# DEPRECATION NOTICE

As of Node.js v8.0 shipped August 2017, you can now use the `NODE_OPTIONS`
environment variable to set the max_old_space_size globally. ([#19](https://github.com/endel/increase-memory-limit/issues/19))

```
export NODE_OPTIONS=--max_old_space_size=4096
```

increase-memory-limit
===

Workaround to fix `heap out of memory` when running node binaries. It's a common
issue when using TypeScript 2.1+ and webpack.

This tool will append `--max-old-space-size=4096` in all `node` calls inside
your `node_modules/.bin/*` files.

```
FATAL ERROR: CALL_AND_RETRY_LAST Allocation failed - JavaScript heap out of memory
```

How to use
---

```
npm install -g increase-memory-limit
```

Run from the root location of your project:

```
increase-memory-limit
```

Running from NPM task
---

Alternatively, you can configure a npm task to run the fix.

```javascript
// ...
  "scripts": {
    "fix-memory-limit": "cross-env LIMIT=2048 increase-memory-limit"
  },
  "devDependencies": {
    "increase-memory-limit": "^1.0.3",
    "cross-env": "^5.0.5"
  }
// ...
```

```
npm run fix-memory-limit
```

License
---

MIT
