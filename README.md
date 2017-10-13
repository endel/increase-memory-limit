<a target='_blank' rel='nofollow' href='https://app.codesponsor.io/link/Pa34TYK6ySj3zGr7u124Dgnn/endel/increase-memory-limit'>
  <img alt='Sponsor' width='888' height='68' src='https://app.codesponsor.io/embed/Pa34TYK6ySj3zGr7u124Dgnn/endel/increase-memory-limit.svg' />
</a>

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
