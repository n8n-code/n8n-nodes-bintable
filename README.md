# @n8n-dev/n8n-nodes-bintable

![bintable Banner](banner.svg)

[![npm version](https://img.shields.io/npm/v/@n8n-dev/n8n-nodes-bintable.svg)](https://www.npmjs.com/package/@n8n-dev/n8n-nodes-bintable)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

**Stop writing bintable API integrations by hand.**

Every time you connect n8n to bintable, you waste hours mapping endpoints, defining parameters, and debugging schemas. You copy-paste from docs, fix edge cases, and pray nothing breaks.

**What if connecting n8n to bintable took 5 minutes, not half a day?**

This node gives you **2+ resources** out of the box: **Lookup**, **Balance**: with full CRUD operations, typed parameters, and zero manual configuration.

---

## What You Get

- **Zero boilerplate**: Resources, operations, and fields are pre-configured and ready to use
- **Full CRUD**: Create, read, update, and delete support where the API allows it
- **Typed parameters**: No more guessing field types
- **Built-in auth**: API key authentication, ready to go
- **Declarative**: Native n8n performance, no custom execute() overhead

---

## Install

```bash
npm install @n8n-dev/n8n-nodes-bintable
```

**Or in n8n:**
1. **Settings → Community Nodes → Install**
2. Search: `@n8n-dev/n8n-nodes-bintable`
3. Click **Install**

---

## Quick Start

1. Install the node (above)
2. Add credentials: **bintable API** → paste your API key
3. Drag the **bintable** node into your workflow
4. Pick a resource → pick an operation → done.

That's it. No configuration files. No code. It just works.

---

## Resources

<details>
<summary><b>Lookup</b> (1 operations)</summary>

- Get Lookup for bin

</details>

<details>
<summary><b>Balance</b> (1 operations)</summary>

- Get Check Balance

</details>

---

## Why This Node?

**Without this node:**
- Hours of manual API integration
- Copy-pasting from bintable docs
- Debugging auth, pagination, error handling
- Maintaining your own client code

**With this node:**
- Install → configure → use. 5 minutes.
- Auto-generated from the official bintable OpenAPI spec
- Always up to date when the API changes
- Native n8n performance

---

## Auto-Generated
This node was auto-generated from the official **bintable** OpenAPI specification using
[@n8n-dev/n8n-openapi-node-ultimate](https://github.com/kelvinzer0/n8n-openapi-node-ultimate),
then validated against the live API so you get accurate types and real parameters, not guesswork.

When the bintable API updates, this node updates too.

---


## License

MIT © [kelvinzer0](https://github.com/n8n-code)
