Final Next.js 14 conversion (interactive).

What I did:
- Render original HTML body (minus <script> tags) via a client component (RenderRaw) using dangerouslySetInnerHTML to preserve layout exactly.
- Inline <script> blocks extracted from the original HTML are executed in the browser global scope (via new Function) inside useEffect so original inline handlers and functions continue to work.
- External <script src=> references are loaded dynamically at runtime (you should place those files under /public or ensure their URLs are correct).

What's included:
- app/layout.jsx
- app/page.jsx
- app/components/RenderRaw.jsx
- app/globals.css
- next.config.js, tailwind config, postcss config, package.json

Assets (images, bts, etc.) are NOT included per your request.
To add assets: put them in /public (for static files) or update script src paths.

Notes / Caveats:
- The automatic migration attempts to preserve behavior. Complex scripts that depend on being placed before HTML or certain load timing may still need manual adjustments.
- If original HTML used inline event attributes like onclick="...", they will work if the referenced functions are defined globally by the executed scripts.
- Test the site locally: run `npm install` then `npm run dev`. Watch the browser console for any errors and let me know if you'd like me to patch them.

Extracted 1 inline script(s) and 1 external script reference(s).
