# norte.vyde.dev

The landing page of Norte Code. It lives in its own repository: the site has
no code in common with the agent, and the agent does not need the site.

- `app/page.tsx` — the page.
- `app/install-command.tsx` — the install command and its copy button.
- `public/og.png` and `public/icon.png` — the social preview and the icon.
- `/install.sh` — a redirect to the installer of the Norte Code repository,
  which owns it because it owns the release the installer downloads. One copy,
  no sync to forget.

## Running it

```sh
pnpm install
pnpm dev
```

## Deploying it

The page is prerendered as static content, so it can be served by any host
that runs Next.js. The `dev` branch is the default one of the repository:
point the host at it and every push rebuilds the site.

