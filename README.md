# jwt-gen

Use Node.js 22.23.4 (selected by `.nvmrc`) or a patched supported version allowed by `package.json`. Run `nvm install` and `npm ci` before local use.

The Google authentication dependency can decode Brotli HTTP responses through Node.js. CVE-2026-111497 is fixed in Node.js 22.23.4, 24.22.1 and 26.12.1: https://nodejs.org/en/blog/vulnerability/october-2026-security-releases

For Lambda or another managed deployment, verify the actual running Node.js release and the vendor runtime build before invoking the handler. A runtime family label such as `nodejs22.x` does not prove the patch is installed. These local development declarations do not update an existing deployment. Rebuild any container or bundled executable with the patched runtime before release; verify `process.version`, not only `process.versions.brotli`, because vendor backports can retain the older Brotli version string.
