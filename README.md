increase-memory-limit
===

Workaround to fix `heap out of memory` when running node binaries. It's a common
issue when using TypeScript 2.1+ and webpack.

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

This tool will append `--max-old-space-size=4096` in all `node` calls inside
your `node_modules/.bin/*` files.


License
---

MIT
