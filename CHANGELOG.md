# Changelog

All notable changes to this project will be documented in this file.

## [6.1.0](https://github.com/hexahigh/blalange.org/compare/v6.0.0..v6.1.0) - 2025-09-13

### ⛰️  Features

- *(article)* Brought back comments - ([5fe6f6a](https://github.com/hexahigh/blalange.org/commit/5fe6f6a83a674002dd1986b085ca0df146ebd074))
```commit-body
Reintroduced comments, now using Directus and DaisyUI.
Also removed Pocketbase.
```

- *(article list)* Implement serverside search with pagination - ([c06c9ab](https://github.com/hexahigh/blalange.org/commit/c06c9abcd276c980f7af85f52a7cd8a9519d9adf))


- *(article list rss)* Added atom feed and updated author names - ([0907cc8](https://github.com/hexahigh/blalange.org/commit/0907cc865efadc442b1ab1184b4fe3e5c22f75bc))


- *(settings)* New fancy settings page - ([d000009](https://github.com/hexahigh/blalange.org/commit/d000009fd4b16392450a5c40c420f2960c81f02a))


- Add assetlinks.json for TWA - ([59163ab](https://github.com/hexahigh/blalange.org/commit/59163ab05e6e98930a5afefa2e69382378e62152))



### 🐛 Bug Fixes

- *(article list)* Improve search input handling and UI - ([f64bcc9](https://github.com/hexahigh/blalange.org/commit/f64bcc9fcc822ecd25d7747a1ac73f4898ef7cda))


- *(footer)* Removed livechat link from contacts - ([7854732](https://github.com/hexahigh/blalange.org/commit/785473223a0fabacfe4a5c316ac162b2f42897fd))


- *(login)* Fixed login not working - ([fcb0a2d](https://github.com/hexahigh/blalange.org/commit/fcb0a2d64676ac80bd1f3822ac32b888faf64d35))
```commit-body
I was so confused that it worked on my local dev environment and not on cloudflare workers, turns out I just had outdated npm packages on my dev server.
```

- *(navbar)* Merch link using redirect page - ([f001e9b](https://github.com/hexahigh/blalange.org/commit/f001e9bc146ce60a2561dba8f322152365eef70d))


- *(theme)* Ensure saved theme is applied correctly during initialization - ([0585b0f](https://github.com/hexahigh/blalange.org/commit/0585b0f214fc8f7de6a1b0086c265b06709ee7b4))


- Undefined colors in dark and light themes - ([d793cd0](https://github.com/hexahigh/blalange.org/commit/d793cd02e3196c2e3446ad5fd262c5935e54dd8b))


- Login page not working - ([4181c09](https://github.com/hexahigh/blalange.org/commit/4181c09ed8dc6ecadf862c20b9603fca78470df5))



### 🚜 Refactor

- Update favicon images - ([2e1c67f](https://github.com/hexahigh/blalange.org/commit/2e1c67fd43e7f0ef1dfbf760b5039f5a34a5126d))


- Removed inlang and unused components - ([c803e29](https://github.com/hexahigh/blalange.org/commit/c803e299d39bb3eaa2feffc095095dbaa2eff5b5))


- Removed unused fonts - ([8285cb9](https://github.com/hexahigh/blalange.org/commit/8285cb914339b215d581c8240c9417898c4d8816))
```commit-body
- Removed unused fonts
- Removed articleCard component
- Removed confetti.js
- Remove pwa-assets.config.js
```


### 📚 Documentation

- Add tech stack section to README - ([5d2f26b](https://github.com/hexahigh/blalange.org/commit/5d2f26b597bc7a14594ad30452fccc98bf0aca8a))



### 🧪 Testing

- *(e2e)* Fix 200 test - ([9408211](https://github.com/hexahigh/blalange.org/commit/940821148b10b59e232bdddb2de8101e2138306f))


- Update playwright config - ([8caceec](https://github.com/hexahigh/blalange.org/commit/8caceec481095f7aa0a8b26ad5b9fa07fd1dc87a))


- Update playwright config - ([a62c8b1](https://github.com/hexahigh/blalange.org/commit/a62c8b1aa6b70743dc3ffa7d6fbe887d006b2cc2))



### ⚙️ Miscellaneous Tasks

- *(deps)* Bump tailwind-merge from 2.5.5 to 2.6.0 (#513) - ([b0260f1](https://github.com/hexahigh/blalange.org/commit/b0260f120b11373626f930f60b2b6a50cfafeeff))
```commit-body
Bumps [tailwind-merge](https://github.com/dcastil/tailwind-merge) from 2.5.5 to 2.6.0.
- [Release notes](https://github.com/dcastil/tailwind-merge/releases)
- [Commits](https://github.com/dcastil/tailwind-merge/compare/v2.5.5...v2.6.0)

---
updated-dependencies:
- dependency-name: tailwind-merge
  dependency-type: direct:production
  update-type: version-update:semver-minor
...
```

- *(deps)* Bump @floating-ui/dom from 1.6.12 to 1.6.13 (#543) - ([a337a14](https://github.com/hexahigh/blalange.org/commit/a337a141eaa30a370e22083c089ce1dbd559d2f2))
```commit-body
Bumps [@floating-ui/dom](https://github.com/floating-ui/floating-ui/tree/HEAD/packages/dom) from 1.6.12 to 1.6.13.
- [Release notes](https://github.com/floating-ui/floating-ui/releases)
- [Changelog](https://github.com/floating-ui/floating-ui/blob/master/packages/dom/CHANGELOG.md)
- [Commits](https://github.com/floating-ui/floating-ui/commits/@floating-ui/dom@1.6.13/packages/dom)

---
updated-dependencies:
- dependency-name: "@floating-ui/dom"
  dependency-type: direct:production
  update-type: version-update:semver-patch
...
```

- *(deps)* Bump @fontsource/roboto-condensed from 5.1.0 to 5.1.1 (#525) - ([1b67be6](https://github.com/hexahigh/blalange.org/commit/1b67be645ad698d61713c4b2bd29bd434c3c184c))
```commit-body
Bumps [@fontsource/roboto-condensed](https://github.com/fontsource/font-files/tree/HEAD/fonts/google/roboto-condensed) from 5.1.0 to 5.1.1.
- [Changelog](https://github.com/fontsource/font-files/blob/main/CHANGELOG.md)
- [Commits](https://github.com/fontsource/font-files/commits/HEAD/fonts/google/roboto-condensed)

---
updated-dependencies:
- dependency-name: "@fontsource/roboto-condensed"
  dependency-type: direct:production
  update-type: version-update:semver-patch
...
```

- *(deps)* Bump @playwright/test to 1.54.2 - ([3a0bca2](https://github.com/hexahigh/blalange.org/commit/3a0bca29e5e1f811296ca60acde656eb8acfbdac))


- *(deps)* Bump @fontsource/krona-one from 5.1.0 to 5.2.6 (#589) - ([8682943](https://github.com/hexahigh/blalange.org/commit/8682943c8e484eb3851e232e3982079ee3eb394d))
```commit-body
Bumps [@fontsource/krona-one](https://github.com/fontsource/font-files/tree/HEAD/fonts/google/krona-one) from 5.1.0 to 5.2.6.
- [Changelog](https://github.com/fontsource/font-files/blob/main/CHANGELOG.md)
- [Commits](https://github.com/fontsource/font-files/commits/HEAD/fonts/google/krona-one)

---
updated-dependencies:
- dependency-name: "@fontsource/krona-one"
  dependency-version: 5.2.6
  dependency-type: direct:production
  update-type: version-update:semver-minor
...
```

- *(deps)* Bump @fontsource/lexend-exa from 5.1.0 to 5.2.9 (#588) - ([8b3b4a5](https://github.com/hexahigh/blalange.org/commit/8b3b4a5ebf464234ca786afcd268ce1f5c72293c))
```commit-body
Bumps [@fontsource/lexend-exa](https://github.com/fontsource/font-files/tree/HEAD/fonts/google/lexend-exa) from 5.1.0 to 5.2.9.
- [Changelog](https://github.com/fontsource/font-files/blob/main/CHANGELOG.md)
- [Commits](https://github.com/fontsource/font-files/commits/HEAD/fonts/google/lexend-exa)

---
updated-dependencies:
- dependency-name: "@fontsource/lexend-exa"
  dependency-version: 5.2.9
  dependency-type: direct:production
  update-type: version-update:semver-minor
...
```

- *(deps)* Bump @fontsource-variable/inter from 5.1.0 to 5.2.6 (#586) - ([d963698](https://github.com/hexahigh/blalange.org/commit/d9636987b7fd608c308d4b7b744f21eff94ba35c))
```commit-body
Bumps [@fontsource-variable/inter](https://github.com/fontsource/font-files/tree/HEAD/fonts/variable/inter) from 5.1.0 to 5.2.6.
- [Changelog](https://github.com/fontsource/font-files/blob/main/CHANGELOG.md)
- [Commits](https://github.com/fontsource/font-files/commits/HEAD/fonts/variable/inter)

---
updated-dependencies:
- dependency-name: "@fontsource-variable/inter"
  dependency-version: 5.2.6
  dependency-type: direct:production
  update-type: version-update:semver-minor
...
```

- *(deps)* Bump @fontsource-variable/material-symbols-outlined (#585) - ([18cf5d2](https://github.com/hexahigh/blalange.org/commit/18cf5d20219bafd96f1261fde0139da7f042e23d))
```commit-body
Bumps [@fontsource-variable/material-symbols-outlined](https://github.com/fontsource/font-files/tree/HEAD/fonts/variable/material-symbols-outlined) from 5.1.3 to 5.2.19.
- [Commits](https://github.com/fontsource/font-files/commits/HEAD/fonts/variable/material-symbols-outlined)

---
updated-dependencies:
- dependency-name: "@fontsource-variable/material-symbols-outlined"
  dependency-version: 5.2.19
  dependency-type: direct:production
  update-type: version-update:semver-minor
...
```

- *(deps)* Bump @directus/sdk from 19.1.0 to 20.0.2 (#591) - ([d72648a](https://github.com/hexahigh/blalange.org/commit/d72648a300e9fbc967eb9daf79ba28051c6a76db))
```commit-body
Bumps [@directus/sdk](https://github.com/directus/directus/tree/HEAD/sdk) from 19.1.0 to 20.0.2.
- [Release notes](https://github.com/directus/directus/releases)
- [Commits](https://github.com/directus/directus/commits/HEAD/sdk)

---
updated-dependencies:
- dependency-name: "@directus/sdk"
  dependency-version: 20.0.2
  dependency-type: direct:production
  update-type: version-update:semver-major
...
```

- *(deps)* Bump @inlang/paraglide-sveltekit from 0.15.5 to 0.16.1 (#598) - ([6405c0d](https://github.com/hexahigh/blalange.org/commit/6405c0da7f5b0b14020cc91b16ec6d77e4c56122))
```commit-body
Bumps [@inlang/paraglide-sveltekit](https://github.com/opral/inlang-paraglide-js) from 0.15.5 to 0.16.1.
- [Commits](https://github.com/opral/inlang-paraglide-js/commits)

---
updated-dependencies:
- dependency-name: "@inlang/paraglide-sveltekit"
  dependency-version: 0.16.1
  dependency-type: direct:production
  update-type: version-update:semver-minor
...
```

- *(deps)* Add @tailwindcss/oxide to built dependencies - ([9396f95](https://github.com/hexahigh/blalange.org/commit/9396f95961671a0969ee15f419df6555f607bf35))


- *(deps-dev)* Bump @sveltejs/enhanced-img from 0.4.1 to 0.4.4 (#485) - ([8cd690a](https://github.com/hexahigh/blalange.org/commit/8cd690ad3e3efd050ffd9523e5539464f43cc67e))
```commit-body
Bumps [@sveltejs/enhanced-img](https://github.com/sveltejs/kit/tree/HEAD/packages/enhanced-img) from 0.4.1 to 0.4.4.
- [Release notes](https://github.com/sveltejs/kit/releases)
- [Changelog](https://github.com/sveltejs/kit/blob/main/packages/enhanced-img/CHANGELOG.md)
- [Commits](https://github.com/sveltejs/kit/commits/@sveltejs/enhanced-img@0.4.4/packages/enhanced-img)

---
updated-dependencies:
- dependency-name: "@sveltejs/enhanced-img"
  dependency-type: direct:development
  update-type: version-update:semver-patch
...
```

- *(deps-dev)* Bump @sveltejs/vite-plugin-svelte from 5.0.1 to 5.1.1 (#587) - ([9916597](https://github.com/hexahigh/blalange.org/commit/9916597669284cf7b776d39f8f22335ac90efba7))
```commit-body
Bumps [@sveltejs/vite-plugin-svelte](https://github.com/sveltejs/vite-plugin-svelte/tree/HEAD/packages/vite-plugin-svelte) from 5.0.1 to 5.1.1.
- [Release notes](https://github.com/sveltejs/vite-plugin-svelte/releases)
- [Changelog](https://github.com/sveltejs/vite-plugin-svelte/blob/@sveltejs/vite-plugin-svelte@5.1.1/packages/vite-plugin-svelte/CHANGELOG.md)
- [Commits](https://github.com/sveltejs/vite-plugin-svelte/commits/@sveltejs/vite-plugin-svelte@5.1.1/packages/vite-plugin-svelte)

---
updated-dependencies:
- dependency-name: "@sveltejs/vite-plugin-svelte"
  dependency-version: 5.1.1
  dependency-type: direct:development
  update-type: version-update:semver-minor
...
```

- *(deps-dev)* Bump @sveltejs/kit from 2.21.5 to 2.33.0 (#593) - ([5f2faee](https://github.com/hexahigh/blalange.org/commit/5f2faee787eb3ae0c32af9f8651e036a4ea59226))


- *(github workflows)* Fix Directus type updater - ([bfaf338](https://github.com/hexahigh/blalange.org/commit/bfaf33815dc4f8bef14ffe301f8528b440cf9c44))


- *(github workflows)* Updated build and test workflow - ([93d66d9](https://github.com/hexahigh/blalange.org/commit/93d66d9582e5c4662317f324d4cb0078cc49edaa))


- *(github workflows)* Update build and test workflow - ([9353c70](https://github.com/hexahigh/blalange.org/commit/9353c7089496cd8b956719eaef5d13ae33755fe2))


- *(github workflows)* Updated build and test workflow - ([cf8bc91](https://github.com/hexahigh/blalange.org/commit/cf8bc919bb0e43f9848484101a9ad780aa325c53))


- *(github workflows)* Added Vitest workflow - ([66a12be](https://github.com/hexahigh/blalange.org/commit/66a12be188c99eab1436840b6621f868f0b784e5))


- Added git-cliff to package.json - ([d12925c](https://github.com/hexahigh/blalange.org/commit/d12925c39597280d321350c8df36c7dee6ca0586))



### Other (unconventional)

- *(wrangler)* Update wrangler config - ([bd4f2c7](https://github.com/hexahigh/blalange.org/commit/bd4f2c7dcfc6d4289cca03d1ad8fcfba3e075d21))


- Fix pnpm lockfile - ([7296a55](https://github.com/hexahigh/blalange.org/commit/7296a55c5404de41345ab63808c8f991d6ea2605))


- Added .aider dir to gitignore - ([01b4ad6](https://github.com/hexahigh/blalange.org/commit/01b4ad6c197665b759ef3c4f30f2631a1fdbe033))


### Commit Statistics

- 42 commit(s) contributed to the release.
- 26 day(s) passed between the first and last commit.
- 41 commit(s) parsed as conventional.
- 0 linked issue(s) detected in commits.
- 27 day(s) passed between releases.

## [6.0.0](https://github.com/hexahigh/blalange.org/compare/v5.1.4..v6.0.0) - 2025-08-17

### ⛰️  Features

- *(article)* Added block articles - ([79b078f](https://github.com/hexahigh/blalange.org/commit/79b078f341da36cb5d4dcf95cd98c4088bf31c0b))


- [**breaking**] Removed terminal - ([2e62403](https://github.com/hexahigh/blalange.org/commit/2e624032f96e447d8d310ce6c5b1265dddbf6d6f))


- [**breaking**] Removed form page - ([dcadd19](https://github.com/hexahigh/blalange.org/commit/dcadd19ee5eb3a7c4aaff58d9fb936fd8ec68bf8))


- [**breaking**] Removed webring page - ([528e95a](https://github.com/hexahigh/blalange.org/commit/528e95a4e56246b514125f1739a20575b883a8dc))


- Changed font to IBM plex sans - ([258a563](https://github.com/hexahigh/blalange.org/commit/258a563d4978c8d87c3617dafcd174b98b03b095))


- Migrated to Tailwind 4 - ([611a7cd](https://github.com/hexahigh/blalange.org/commit/611a7cd2910199f3d06f25dce4e63c4246078d8d))


- Update error page - ([0982741](https://github.com/hexahigh/blalange.org/commit/09827412c95922f1f4f770eff3745f62807e097c))


- Added name formatting utility - ([55a0884](https://github.com/hexahigh/blalange.org/commit/55a08840c0b91fead7ae3f2650869753bd793138))


- Update themes, settings and more - ([9cdd9db](https://github.com/hexahigh/blalange.org/commit/9cdd9db3399f941f0eced7f4c8e6fa3e1a148703))
```commit-body
Finally done!!!
```


### 🐛 Bug Fixes

- *(scripts)* Update scripts tsconfig - ([88271be](https://github.com/hexahigh/blalange.org/commit/88271be72aa73a227613eedaf6584b191caaf16a))


- *(theme)* Theme not getting applied correctly - ([4694e10](https://github.com/hexahigh/blalange.org/commit/4694e10e2ae7f45fed8bc287c440349085ef87d3))


- Removed extra <main> tag - ([7700753](https://github.com/hexahigh/blalange.org/commit/7700753f5d536e976ffa3a4c732d8d398db05bff))


- Reduced FOUC - ([263eb5a](https://github.com/hexahigh/blalange.org/commit/263eb5a398ae4d458bfe2b65225a79243ab4bac8))
```commit-body
Reduced flash of unstyled content (FOUC) by adding a themeSetter script into the document head
```


### 🚜 Refactor

- *(theme)* Changed when shouldUpdate variable is set - ([ef1162f](https://github.com/hexahigh/blalange.org/commit/ef1162fa4aa0c2601551e34a645d14b1e37456d4))


- *(types)* Added directus auto-generated types - ([24abde9](https://github.com/hexahigh/blalange.org/commit/24abde91773194a949bf36a7193601aa19804c3a))



### ⚡ Performance

- *(homepage)* Improved image loading - ([d4bd3d9](https://github.com/hexahigh/blalange.org/commit/d4bd3d9d8b1ac0e29b8ea5f5f66594111bdc42eb))


- *(service worker)* Improved precaching of images - ([cfbcfa0](https://github.com/hexahigh/blalange.org/commit/cfbcfa0c66f13cbb200ff4f78f744b70a3d05fb0))


- Added enhanced-img - ([a1f7817](https://github.com/hexahigh/blalange.org/commit/a1f7817b802753aa77cd3b49b4177a5f67527fb1))


- Added more sizes to enhanced-img - ([110e0d4](https://github.com/hexahigh/blalange.org/commit/110e0d49a7b0463e14f203ea622ad61084032ed8))



### 🧪 Testing

- Added two new tests - ([4f26806](https://github.com/hexahigh/blalange.org/commit/4f26806b0de7cc151efa346951cdfe6e1104d837))
```commit-body
Added a test that tests all links in the sitemap and one that tests the name formatting util
```


### ⚙️ Miscellaneous Tasks

- *(cliff)* Update cliff config - ([269327f](https://github.com/hexahigh/blalange.org/commit/269327f69442cf673713c596013f392e9883b176))


- *(github workflows)* Added workflow for generating directus types - ([4f6a5c6](https://github.com/hexahigh/blalange.org/commit/4f6a5c6160621e7e376297a0a4033d3872f1d5c1))


- Removed old service-worker file - ([2abac68](https://github.com/hexahigh/blalange.org/commit/2abac682819b11fee3ac7bbecf5fd9af0e9b77d1))


- Remove 'other' directory - ([cfa9321](https://github.com/hexahigh/blalange.org/commit/cfa9321b82e8e4672509258c4b6f9d005f9b5320))


- Prepare for release - ([409beb3](https://github.com/hexahigh/blalange.org/commit/409beb30db1716acbb7c06d5c0d9408fb70dbcb2))



### Other (unconventional)

- *(scripts)* Added scripts tsconfig - ([2053af1](https://github.com/hexahigh/blalange.org/commit/2053af1dff31901516cb2a5f0d6bc3e3db1afc70))


- Started work on themes - ([87cf7e2](https://github.com/hexahigh/blalange.org/commit/87cf7e21a3f4a4100299864df2f15be6f6a831f2))


- Freshet opp hjemme siden skikkelig - ([8942c44](https://github.com/hexahigh/blalange.org/commit/8942c44915215b502285b65467e4792292397007))


- Themes - ([62c06f5](https://github.com/hexahigh/blalange.org/commit/62c06f54efb5d45cd79e7339b74c87e142142f36))


- Added themes and updated homepage - ([f2aa65d](https://github.com/hexahigh/blalange.org/commit/f2aa65df3c3d55a617b2d0e069dcee54e912c538))


- 🔥 - ([8c17aca](https://github.com/hexahigh/blalange.org/commit/8c17acac3cacb94dfec9db85a37ff3200da480fd))


- Merge pull request #579 from hexahigh/v6-themes

V6 themes - ([9db367e](https://github.com/hexahigh/blalange.org/commit/9db367e899e1b2b8378b15f1fa3f4062191b64b1))


- Created wrangler config - ([b3899ca](https://github.com/hexahigh/blalange.org/commit/b3899ca31648dc40f5682aab97793bc1417f96a2))


- Switched Sveltekit adapter - ([0075338](https://github.com/hexahigh/blalange.org/commit/00753388cd263213342ff447aafe393dd8eef15d))
```commit-body
Switched the sveltekit adapter from 'adapter-auto' to 'adapter-cloudflare'
```

- Added deploy command - ([94a03ad](https://github.com/hexahigh/blalange.org/commit/94a03ada5d91e09941d011607dcb202fdb4682cb))


- Upgraded and cleaned packages - ([8a0b07d](https://github.com/hexahigh/blalange.org/commit/8a0b07d2e5038951583e89895d0419cc62dbecfd))


- Merge pull request #580 from hexahigh/v6

Version 6 - ([8b613cc](https://github.com/hexahigh/blalange.org/commit/8b613cc298dcd69122bde2ee13b42f234021b4d5))


### Commit Statistics

- 37 commit(s) contributed to the release.
- 79 day(s) passed between the first and last commit.
- 30 commit(s) parsed as conventional.
- 0 linked issue(s) detected in commits.
- 161 day(s) passed between releases.

## [5.1.4](https://github.com/hexahigh/blalange.org/compare/v5.1.3..v5.1.4) - 2025-03-09

### 🐛 Bug Fixes

- *(form)* Form being submitted twice - ([14bff65](https://github.com/hexahigh/blalange.org/commit/14bff65ff1e39617277cc39f442c853226c62a41))



### 🚜 Refactor

- *(form)* Migrated form to Directus - ([c78576b](https://github.com/hexahigh/blalange.org/commit/c78576ba3491fba181e1a9b077e526b4afe085a3))



### ⚙️ Miscellaneous Tasks

- *(deps)* Bump the npm_and_yarn group across 1 directory with 2 updates (#567) - ([dc6cd4a](https://github.com/hexahigh/blalange.org/commit/dc6cd4a076b149b975ea0002823580c5efbe29c3))


- *(deps-dev)* Bump @iconify/svelte from 4.1.0 to 4.2.0 - ([03494b2](https://github.com/hexahigh/blalange.org/commit/03494b21c2dd84584f727aafa9bb4a163ae0b4fc))
```commit-body
Bumps [@iconify/svelte](https://github.com/iconify/iconify/tree/HEAD/components/svelte) from 4.1.0 to 4.2.0.
- [Commits](https://github.com/iconify/iconify/commits/HEAD/components/svelte)

---
updated-dependencies:
- dependency-name: "@iconify/svelte"
  dependency-type: direct:development
  update-type: version-update:semver-minor
...
```

- Prepare for release - ([ef15a61](https://github.com/hexahigh/blalange.org/commit/ef15a610fbbc5cf9c1daaf534544b812949e18c2))



### Other (unconventional)

- Merge pull request #456 from hexahigh/dev

v5.0.1 - ([a0415bc](https://github.com/hexahigh/blalange.org/commit/a0415bc9264119dde859de56d92d4932e70a2f3d))


- Merge pull request #556 from hexahigh/dev

v5.1.0 - ([d1aa7b4](https://github.com/hexahigh/blalange.org/commit/d1aa7b411633845543f7d1ce25d48aebaa06c3be))


- Merge pull request #570 from hexahigh/dev

v5.1.1 - ([61a851a](https://github.com/hexahigh/blalange.org/commit/61a851a37386282c157fa6ea4375eb3759541b6b))


- Merge pull request #571 from hexahigh/dev

v5.1.2 - ([c55d11a](https://github.com/hexahigh/blalange.org/commit/c55d11a7d376c03bc4c26a38ce09c3f9e3ad6568))


- Merge branch 'main' into dev - ([25693fa](https://github.com/hexahigh/blalange.org/commit/25693fa824c10a1581ccd5d5e9621402c79ad369))


- Merge pull request #534 from hexahigh/dependabot/npm_and_yarn/dev/iconify/svelte-4.2.0

chore(deps-dev): bump @iconify/svelte from 4.1.0 to 4.2.0 - ([aabe0fd](https://github.com/hexahigh/blalange.org/commit/aabe0fd263057cfaf4f8b08f3a573a416f9a11ef))


### Commit Statistics

- 11 commit(s) contributed to the release.
- 100 day(s) passed between the first and last commit.
- 5 commit(s) parsed as conventional.
- 0 linked issue(s) detected in commits.
- 31 day(s) passed between releases.

## [5.1.3](https://github.com/hexahigh/blalange.org/compare/v5.1.1..v5.1.3) - 2025-02-06

### 🐛 Bug Fixes

- *(analytics)* Wrong time values - ([2798ef2](https://github.com/hexahigh/blalange.org/commit/2798ef2fed06107af3fe228e992d730cd2e96ba6))


- Rename artId to art_id - ([ee63156](https://github.com/hexahigh/blalange.org/commit/ee63156cc2726a169aab06359817080cc2cc8987))



### 🚜 Refactor

- *(analytics)* Disabled analytics v1 - ([4f32e69](https://github.com/hexahigh/blalange.org/commit/4f32e69be7040b2e9df4ae92340c84d497ff2862))


- *(article list)* Removed auto-search - ([4f8dc56](https://github.com/hexahigh/blalange.org/commit/4f8dc5633100763c1e20e03b278334a9ae287ab2))
```commit-body
Removed auto-search due to it causing an infinite loop. Will (probably) fix later.
```


### ⚙️ Miscellaneous Tasks

- *(deps)* Bump @sveltejs/adapter-node from 5.2.9 to 5.2.12 - ([da5903b](https://github.com/hexahigh/blalange.org/commit/da5903bc3bc35405add04c42894d5b2e374c4b4f))
```commit-body
Bumps [@sveltejs/adapter-node](https://github.com/sveltejs/kit/tree/HEAD/packages/adapter-node) from 5.2.9 to 5.2.12.
- [Release notes](https://github.com/sveltejs/kit/releases)
- [Changelog](https://github.com/sveltejs/kit/blob/main/packages/adapter-node/CHANGELOG.md)
- [Commits](https://github.com/sveltejs/kit/commits/@sveltejs/adapter-node@5.2.12/packages/adapter-node)

---
updated-dependencies:
- dependency-name: "@sveltejs/adapter-node"
  dependency-type: direct:production
  update-type: version-update:semver-patch
...
```

- *(deps-dev)* Bump vite from 6.0.1 to 6.1.0 (#573) - ([5796995](https://github.com/hexahigh/blalange.org/commit/5796995811eb2c868c52503438a140be4c672e5c))


- *(deps-dev)* Bump @playwright/test from 1.49.0 to 1.50.1 (#572) - ([6f79b2c](https://github.com/hexahigh/blalange.org/commit/6f79b2ce4907ecd7502fa491a9d44a7d5cf69bfa))


- *(deps-dev)* Bump flowbite-svelte from 0.47.3 to 0.47.4 (#460) - ([706cd05](https://github.com/hexahigh/blalange.org/commit/706cd05189618994d5ed26ff639cd01ee80cde70))


- *(deps-dev)* Bump tailwindcss from 3.4.15 to 3.4.17 (#500) - ([566b2cc](https://github.com/hexahigh/blalange.org/commit/566b2cc3b57027ce991966e3c8322e2c9321871a))


- *(deps-dev)* Bump typescript from 5.7.2 to 5.7.3 (#551) - ([c04b8e0](https://github.com/hexahigh/blalange.org/commit/c04b8e08c71ae8def4c7523e28a9ee021b1063ed))


- Prepare for release - ([5caed28](https://github.com/hexahigh/blalange.org/commit/5caed2870058dcb0a63bc643ff026b5e17bd5e2f))


- Prepare for release - ([e5c2e7f](https://github.com/hexahigh/blalange.org/commit/e5c2e7fe2a8ade5efb19e78ed4d0d89dbf1c4a1b))



### Other (unconventional)

- Merge pull request #565 from hexahigh/dependabot/npm_and_yarn/dev/sveltejs/adapter-node-5.2.12

chore(deps): bump @sveltejs/adapter-node from 5.2.9 to 5.2.12 - ([4da24d7](https://github.com/hexahigh/blalange.org/commit/4da24d70bdf322eb93c71fb65f1301a7bf2c1572))


### Commit Statistics

- 13 commit(s) contributed to the release.
- 4 day(s) passed between the first and last commit.
- 12 commit(s) parsed as conventional.
- 0 linked issue(s) detected in commits.
- 11 day(s) passed between releases.

## [5.1.1](https://github.com/hexahigh/blalange.org/compare/v5.1.0..v5.1.1) - 2025-01-26

### ⛰️  Features

- Added prefetching - ([d6ef25c](https://github.com/hexahigh/blalange.org/commit/d6ef25c406b928119ea42fefb79fb60a8208645f))



### 🐛 Bug Fixes

- *(article list)* Articles not being fetched using the user account - ([bb903f5](https://github.com/hexahigh/blalange.org/commit/bb903f5a7b80f8fe79f895c576f9dd9f7d23ee7e))


- *(login and signup)* Errors not being displayed correctly - ([17b2e51](https://github.com/hexahigh/blalange.org/commit/17b2e516714cc25e47401e766d4f6b3aa405f5f5))


- Made the "fetch" parameter optional in getDirectusInstance - ([78ed0ba](https://github.com/hexahigh/blalange.org/commit/78ed0ba05cc07199ee08280b287c99bb65ab7d4b))


- Directus token not getting refreshed - ([292be7b](https://github.com/hexahigh/blalange.org/commit/292be7b7844f1ee3274133dff09fc1e8ed4e6799))



### ⚙️ Miscellaneous Tasks

- Prepare for release - ([3dd5d00](https://github.com/hexahigh/blalange.org/commit/3dd5d006540fc9c199a160bcac51dfb8b86ebd5b))



### Other (unconventional)

- Merge branch 'dev' of https://github.com/hexahigh/blalange.org into dev - ([82012b5](https://github.com/hexahigh/blalange.org/commit/82012b51cbd02b076ac05336f346dac31ffb4e35))


### Commit Statistics

- 7 commit(s) contributed to the release.
- 6 day(s) passed between the first and last commit.
- 6 commit(s) parsed as conventional.
- 0 linked issue(s) detected in commits.
- 11 day(s) passed between releases.

## [5.1.0](https://github.com/hexahigh/blalange.org/compare/v5.0.1..v5.1.0) - 2025-01-15

### ⛰️  Features

- *(3cx widget)* Added multiple languages - ([8af1f0f](https://github.com/hexahigh/blalange.org/commit/8af1f0fecfc9b5be256bc041576c4d35d3f57977))


- *(article list)* Added live search preview - ([4653e7c](https://github.com/hexahigh/blalange.org/commit/4653e7ca717aba855b75cf9362549b86b7c66a09))


- Added Eruda - ([590ec6e](https://github.com/hexahigh/blalange.org/commit/590ec6e2810d9f5f2cb3afb51576279afa5c07be))


- Add 3cx widget - ([ddeef8d](https://github.com/hexahigh/blalange.org/commit/ddeef8d65673976d04b2fb04382159d9acf480d2))
```commit-body
jeg lærte meg :)

simon
```

- Added changelog page - ([6f9feaf](https://github.com/hexahigh/blalange.org/commit/6f9feafac203c79a394c3ce4b09f521e3288afb6))


- Switched to tailwind typography - ([7148a72](https://github.com/hexahigh/blalange.org/commit/7148a728c185f1b8ed5f2bd80d0e5644461c9163))


- Moved PP and TOS to tailwind typography - ([b067267](https://github.com/hexahigh/blalange.org/commit/b067267c4ae8bbe27f01e7abfaaf449b9eea08d0))


- Add builddate - ([344baf3](https://github.com/hexahigh/blalange.org/commit/344baf31c398794676a09cc1874b329a91b5dd1e))



### 🐛 Bug Fixes

- *(article list rss)* Fixed the rss feed - ([9361670](https://github.com/hexahigh/blalange.org/commit/9361670490f3bf5c177497bc65e49a5879200bb0))


- *(npm)* Fix lockfile - ([4114ab9](https://github.com/hexahigh/blalange.org/commit/4114ab922ba4f5a7e25aee23637b403e8991ab4f))


- Broken CORS headers - ([5caf5c6](https://github.com/hexahigh/blalange.org/commit/5caf5c62c5da0e6d8f4cb0f36889fbeea5e30a10))


- Running on codespaces - ([5fc3353](https://github.com/hexahigh/blalange.org/commit/5fc3353f4f35c0cbde8724986e848138ef26d0c2))
```commit-body
Fixed codespaces returning a 502 when running the dev server
```


### ⚡ Performance

- *(analytics)* Disabled "beforeNavigate" hook - ([96af07b](https://github.com/hexahigh/blalange.org/commit/96af07be135156dac19dd113c339f9dc55d32c07))


- *(analytics)* Reduced the amount of data sent - ([69d777a](https://github.com/hexahigh/blalange.org/commit/69d777a36c23a2abacf13010f9019763d3999a07))



### ⚙️ Miscellaneous Tasks

- *(deps)* Bump iconify-icon from 2.1.0 to 2.2.0 - ([b3cff14](https://github.com/hexahigh/blalange.org/commit/b3cff146695ebdfa0fafba27b2271e55019d3eea))
```commit-body
Bumps [iconify-icon](https://github.com/iconify/iconify/tree/HEAD/iconify-icon/icon) from 2.1.0 to 2.2.0.
- [Commits](https://github.com/iconify/iconify/commits/HEAD/iconify-icon/icon)

---
updated-dependencies:
- dependency-name: iconify-icon
  dependency-type: direct:production
  update-type: version-update:semver-minor
...
```

- *(deps)* Bump @inlang/paraglide-sveltekit from 0.12.1 to 0.15.0 - ([19b2005](https://github.com/hexahigh/blalange.org/commit/19b20058d6acdddbcefc9c6aa829cf4d1ca3e060))
```commit-body
Bumps [@inlang/paraglide-sveltekit](https://github.com/opral/inlang-paraglide-js) from 0.12.1 to 0.15.0.
- [Commits](https://github.com/opral/inlang-paraglide-js/commits)

---
updated-dependencies:
- dependency-name: "@inlang/paraglide-sveltekit"
  dependency-type: direct:production
  update-type: version-update:semver-minor
...
```

- *(deps)* Bump dompurify from 3.2.2 to 3.2.3 - ([cb9cfd3](https://github.com/hexahigh/blalange.org/commit/cb9cfd3113b923cc2b61c60cd8b4ec1c52baa33f))
```commit-body
Bumps [dompurify](https://github.com/cure53/DOMPurify) from 3.2.2 to 3.2.3.
- [Release notes](https://github.com/cure53/DOMPurify/releases)
- [Commits](https://github.com/cure53/DOMPurify/compare/3.2.2...3.2.3)

---
updated-dependencies:
- dependency-name: dompurify
  dependency-type: direct:production
  update-type: version-update:semver-patch
...
```

- *(deps)* Bump katex from 0.16.11 to 0.16.18 - ([7f10419](https://github.com/hexahigh/blalange.org/commit/7f104195fc9be95d69bcf43274101a99a190aae0))
```commit-body
Bumps [katex](https://github.com/KaTeX/KaTeX) from 0.16.11 to 0.16.18.
- [Release notes](https://github.com/KaTeX/KaTeX/releases)
- [Changelog](https://github.com/KaTeX/KaTeX/blob/main/CHANGELOG.md)
- [Commits](https://github.com/KaTeX/KaTeX/compare/v0.16.11...v0.16.18)

---
updated-dependencies:
- dependency-name: katex
  dependency-type: direct:production
  update-type: version-update:semver-patch
...
```

- *(deps)* Remove unused dependencies - ([6d05822](https://github.com/hexahigh/blalange.org/commit/6d058220da0dc6951bf405c0a482b3e892e63c66))


- *(deps)* Bump @sveltejs/adapter-cloudflare from 4.8.0 to 4.9.0 - ([8244679](https://github.com/hexahigh/blalange.org/commit/82446798f4873306ce5b6f9fdfd6f33e1b65e82c))
```commit-body
Bumps [@sveltejs/adapter-cloudflare](https://github.com/sveltejs/kit/tree/HEAD/packages/adapter-cloudflare) from 4.8.0 to 4.9.0.
- [Release notes](https://github.com/sveltejs/kit/releases)
- [Changelog](https://github.com/sveltejs/kit/blob/main/packages/adapter-cloudflare/CHANGELOG.md)
- [Commits](https://github.com/sveltejs/kit/commits/@sveltejs/adapter-cloudflare@4.9.0/packages/adapter-cloudflare)

---
updated-dependencies:
- dependency-name: "@sveltejs/adapter-cloudflare"
  dependency-type: direct:production
  update-type: version-update:semver-minor
...
```

- *(deps)* Bump iconify-icon from 2.2.0 to 2.3.0 - ([285357b](https://github.com/hexahigh/blalange.org/commit/285357b28dab82be5cfb71eecb74afeae31e0d1b))
```commit-body
Bumps [iconify-icon](https://github.com/iconify/iconify/tree/HEAD/iconify-icon/icon) from 2.2.0 to 2.3.0.
- [Commits](https://github.com/iconify/iconify/commits/HEAD/iconify-icon/icon)

---
updated-dependencies:
- dependency-name: iconify-icon
  dependency-type: direct:production
  update-type: version-update:semver-minor
...
```

- *(deps)* Bump katex from 0.16.18 to 0.16.20 - ([35b8814](https://github.com/hexahigh/blalange.org/commit/35b88140353f60cc0d0c1b8ac25b29538cc765e0))
```commit-body
Bumps [katex](https://github.com/KaTeX/KaTeX) from 0.16.18 to 0.16.20.
- [Release notes](https://github.com/KaTeX/KaTeX/releases)
- [Changelog](https://github.com/KaTeX/KaTeX/blob/main/CHANGELOG.md)
- [Commits](https://github.com/KaTeX/KaTeX/compare/v0.16.18...v0.16.20)

---
updated-dependencies:
- dependency-name: katex
  dependency-type: direct:production
  update-type: version-update:semver-patch
...
```

- *(deps)* Bump @directus/sdk from 18.0.0 to 18.0.3 (#498) - ([66599da](https://github.com/hexahigh/blalange.org/commit/66599da9c7d141a359dcfa040bb5bdc26705c690))


- *(deps)* Bump @fontsource/dela-gothic-one from 5.1.0 to 5.1.1 (#522) - ([291162f](https://github.com/hexahigh/blalange.org/commit/291162f95ce98a1dd81155fbf55a1adf940a6c79))


- *(deps)* Bump highlight.js from 11.10.0 to 11.11.1 (#516) - ([7691eee](https://github.com/hexahigh/blalange.org/commit/7691eee5013471c1916de7724b6eea604120b304))


- *(deps)* Bump marked from 15.0.3 to 15.0.6 (#540) - ([840b853](https://github.com/hexahigh/blalange.org/commit/840b8537a12105eabc884dfcdf0166e440401a68))


- *(deps)* Bump @inlang/paraglide-sveltekit from 0.15.0 to 0.15.5 (#553) - ([51b1bba](https://github.com/hexahigh/blalange.org/commit/51b1bbae982ce5c8dcc2351a30db2c7fdeebbba9))


- *(deps)* Bump @sveltejs/adapter-cloudflare from 4.9.0 to 5.0.1 (#562) - ([49ecf23](https://github.com/hexahigh/blalange.org/commit/49ecf232e61b806455567e3a7c5a7a3ead994f17))


- *(deps)* Bump pocketbase from 0.22.1 to 0.25.0 (#527) - ([709ee27](https://github.com/hexahigh/blalange.org/commit/709ee278007dbcca42b43605dd4746006aafb1c6))
```commit-body
Bumps [pocketbase](https://github.com/pocketbase/js-sdk) from 0.22.1 to 0.25.0.
- [Release notes](https://github.com/pocketbase/js-sdk/releases)
- [Changelog](https://github.com/pocketbase/js-sdk/blob/master/CHANGELOG.md)
- [Commits](https://github.com/pocketbase/js-sdk/compare/v0.22.1...v0.25.0)

---
updated-dependencies:
- dependency-name: pocketbase
  dependency-type: direct:production
  update-type: version-update:semver-minor
...
```

- *(deps)* Bump axios from 1.7.8 to 1.7.9 (#465) - ([1715a00](https://github.com/hexahigh/blalange.org/commit/1715a00144a2c69f9f6be27dbdf66a73345831cb))
```commit-body
Bumps [axios](https://github.com/axios/axios) from 1.7.8 to 1.7.9.
- [Release notes](https://github.com/axios/axios/releases)
- [Changelog](https://github.com/axios/axios/blob/v1.x/CHANGELOG.md)
- [Commits](https://github.com/axios/axios/compare/v1.7.8...v1.7.9)

---
updated-dependencies:
- dependency-name: axios
  dependency-type: direct:production
  update-type: version-update:semver-patch
...
```

- *(deps-dev)* Bump @sveltejs/kit - ([2d0b504](https://github.com/hexahigh/blalange.org/commit/2d0b50427c5646b918d9c117bff0ff69f0f16e81))
```commit-body
Bumps the npm_and_yarn group with 1 update in the / directory: [@sveltejs/kit](https://github.com/sveltejs/kit/tree/HEAD/packages/kit).


Updates `@sveltejs/kit` from 2.7.0 to 2.8.3
- [Release notes](https://github.com/sveltejs/kit/releases)
- [Changelog](https://github.com/sveltejs/kit/blob/main/packages/kit/CHANGELOG.md)
- [Commits](https://github.com/sveltejs/kit/commits/@sveltejs/kit@2.8.3/packages/kit)

---
updated-dependencies:
- dependency-name: "@sveltejs/kit"
  dependency-type: direct:development
  dependency-group: npm_and_yarn
...
```

- *(deps-dev)* Bump svelte from 5.2.11 to 5.10.1 - ([87b9f83](https://github.com/hexahigh/blalange.org/commit/87b9f83daa8b92b767a2f10f6c8e49f40ef3794f))
```commit-body
Bumps [svelte](https://github.com/sveltejs/svelte/tree/HEAD/packages/svelte) from 5.2.11 to 5.10.1.
- [Release notes](https://github.com/sveltejs/svelte/releases)
- [Changelog](https://github.com/sveltejs/svelte/blob/main/packages/svelte/CHANGELOG.md)
- [Commits](https://github.com/sveltejs/svelte/commits/svelte@5.10.1/packages/svelte)

---
updated-dependencies:
- dependency-name: svelte
  dependency-type: direct:development
  update-type: version-update:semver-minor
...
```

- *(deps-dev)* Bump @sveltejs/kit from 2.9.0 to 2.12.1 - ([8183516](https://github.com/hexahigh/blalange.org/commit/818351692e4fe40228e1aba35ce6338e9e8320f0))
```commit-body
Bumps [@sveltejs/kit](https://github.com/sveltejs/kit/tree/HEAD/packages/kit) from 2.9.0 to 2.12.1.
- [Release notes](https://github.com/sveltejs/kit/releases)
- [Changelog](https://github.com/sveltejs/kit/blob/main/packages/kit/CHANGELOG.md)
- [Commits](https://github.com/sveltejs/kit/commits/@sveltejs/kit@2.12.1/packages/kit)

---
updated-dependencies:
- dependency-name: "@sveltejs/kit"
  dependency-type: direct:development
  update-type: version-update:semver-minor
...
```

- *(deps-dev)* Bump @iconify/svelte from 4.0.2 to 4.1.0 - ([794ba6d](https://github.com/hexahigh/blalange.org/commit/794ba6dbb25b5bd31415095a465a6e7e2b08f97d))
```commit-body
Bumps [@iconify/svelte](https://github.com/iconify/iconify/tree/HEAD/components/svelte) from 4.0.2 to 4.1.0.
- [Commits](https://github.com/iconify/iconify/commits/HEAD/components/svelte)

---
updated-dependencies:
- dependency-name: "@iconify/svelte"
  dependency-type: direct:development
  update-type: version-update:semver-minor
...
```

- *(deps-dev)* Bump svelte from 5.10.1 to 5.18.0 - ([57b19f4](https://github.com/hexahigh/blalange.org/commit/57b19f451ad7933d2d34635b9a2e32b6b04d1167))
```commit-body
Bumps [svelte](https://github.com/sveltejs/svelte/tree/HEAD/packages/svelte) from 5.10.1 to 5.18.0.
- [Release notes](https://github.com/sveltejs/svelte/releases)
- [Changelog](https://github.com/sveltejs/svelte/blob/main/packages/svelte/CHANGELOG.md)
- [Commits](https://github.com/sveltejs/svelte/commits/svelte@5.18.0/packages/svelte)

---
updated-dependencies:
- dependency-name: svelte
  dependency-type: direct:development
  update-type: version-update:semver-minor
...
```

- *(deps-dev)* Bump @inlang/paraglide-js from 1.11.3 to 1.11.8 (#554) - ([019411c](https://github.com/hexahigh/blalange.org/commit/019411c853c94b3e3d623d8843856894308e0cf2))


- *(deps-dev)* Bump @tailwindcss/typography from 0.5.15 to 0.5.16 (#542) - ([b63098e](https://github.com/hexahigh/blalange.org/commit/b63098e425e8122993a2f63077016d82388b621f))


- *(deps-dev)* Bump svelte-meta-tags from 4.0.4 to 4.1.0 (#550) - ([ba0e4cc](https://github.com/hexahigh/blalange.org/commit/ba0e4cc4415ce798438927ad74d15c541ce3b1ec))


- *(deps-dev)* Bump @sveltejs/kit from 2.12.1 to 2.15.3 (#563) - ([7e8b388](https://github.com/hexahigh/blalange.org/commit/7e8b388bb99c843cc75745ea7ac63d55935d08d7))
```commit-body
Bumps [@sveltejs/kit](https://github.com/sveltejs/kit/tree/HEAD/packages/kit) from 2.12.1 to 2.15.3.
- [Release notes](https://github.com/sveltejs/kit/releases)
- [Changelog](https://github.com/sveltejs/kit/blob/main/packages/kit/CHANGELOG.md)
- [Commits](https://github.com/sveltejs/kit/commits/@sveltejs/kit@2.15.3/packages/kit)

---
updated-dependencies:
- dependency-name: "@sveltejs/kit"
  dependency-type: direct:development
  update-type: version-update:semver-minor
...
```

- *(deps-dev)* Bump @types/node from 22.10.1 to 22.10.6 (#558) - ([49869af](https://github.com/hexahigh/blalange.org/commit/49869af89e8311897c9cbda4c5b4726fbda5b276))


- *(deps-dev)* Bump postcss from 8.4.49 to 8.5.1 (#561) - ([46211f4](https://github.com/hexahigh/blalange.org/commit/46211f4df9dfa011f81b4c8b1f94a31364f0cb9e))


- Update translations with Fink 🐦 - ([0ae0aab](https://github.com/hexahigh/blalange.org/commit/0ae0aab948a4ccffa53f6af24c41ca4c78d2f266))


- Update codeql.yml - ([f5b71eb](https://github.com/hexahigh/blalange.org/commit/f5b71ebc335b4946305e2af8d93a9cf43007010b))


- Create eslint.yml - ([9729642](https://github.com/hexahigh/blalange.org/commit/97296429558df80d3ef009d5935456b282ea0ec2))


- Prepare for release - ([df5ca98](https://github.com/hexahigh/blalange.org/commit/df5ca9850733419169e150d37686e275e0ea3ad0))



### Other (unconventional)

- *(dependabot)* Decrease open pull requests to 5 - ([7a72883](https://github.com/hexahigh/blalange.org/commit/7a72883f803c2641b091d3d39c8f15b2f3a7557d))


- Merge pull request #343 from hexahigh/dev

v4.0.4 - ([f8a8e02](https://github.com/hexahigh/blalange.org/commit/f8a8e0275262c2e3142e8ffa3ed27da3f0692a37))


- Merge pull request #451 from hexahigh/dev

v5.0.0 - ([5e0d58a](https://github.com/hexahigh/blalange.org/commit/5e0d58a24416cd695f990e8b04e2a3f6e7cb5e71))


- Merge pull request #440 from hexahigh/dependabot/npm_and_yarn/npm_and_yarn-330f789f30

chore(deps-dev): bump @sveltejs/kit from 2.7.0 to 2.8.3 in the npm_and_yarn group across 1 directory - ([74e2fa9](https://github.com/hexahigh/blalange.org/commit/74e2fa900353fe4baf875839285e176e2a11ad38))


- Merge branch 'main' into dev - ([6545841](https://github.com/hexahigh/blalange.org/commit/65458410de292c598eee95ad787bf3b1dd136947))


- Merge pull request #480 from hexahigh/dependabot/npm_and_yarn/dev/svelte-5.10.1

chore(deps-dev): bump svelte from 5.2.11 to 5.10.1 - ([f5c1f77](https://github.com/hexahigh/blalange.org/commit/f5c1f776f30f9bdcea450ac96419c124f4fb6a20))


- Merge pull request #472 from hexahigh/dependabot/npm_and_yarn/dev/iconify-icon-2.2.0

chore(deps): bump iconify-icon from 2.1.0 to 2.2.0 - ([276bad7](https://github.com/hexahigh/blalange.org/commit/276bad70dfe2c863444a204daa2574f4dfed27c7))


- Merge pull request #494 from hexahigh/dependabot/npm_and_yarn/dev/sveltejs/kit-2.12.1

chore(deps-dev): bump @sveltejs/kit from 2.9.0 to 2.12.1 - ([ec8d4f5](https://github.com/hexahigh/blalange.org/commit/ec8d4f5fd32bedb8f407272dadbdd6b8438246bb))


- Merge pull request #471 from hexahigh/dependabot/npm_and_yarn/dev/iconify/svelte-4.1.0

chore(deps-dev): bump @iconify/svelte from 4.0.2 to 4.1.0 - ([1cf802b](https://github.com/hexahigh/blalange.org/commit/1cf802ba418ea6c4e09e3f8e0e900013058957e8))


- Merge pull request #493 from hexahigh/dependabot/npm_and_yarn/dev/inlang/paraglide-sveltekit-0.15.0

chore(deps): bump @inlang/paraglide-sveltekit from 0.12.1 to 0.15.0 - ([17d9369](https://github.com/hexahigh/blalange.org/commit/17d93690462ffc79cf98535eecb9d055f9314e7c))


- Merge pull request #478 from hexahigh/dependabot/npm_and_yarn/dev/dompurify-3.2.3

chore(deps): bump dompurify from 3.2.2 to 3.2.3 - ([a2b7399](https://github.com/hexahigh/blalange.org/commit/a2b73998562d2a07c8c37329d8e9f566e5b3ccc4))


- Merge pull request #503 from hexahigh/dependabot/npm_and_yarn/dev/katex-0.16.18

chore(deps): bump katex from 0.16.11 to 0.16.18 - ([7a782be](https://github.com/hexahigh/blalange.org/commit/7a782be6c153ea9d806812b35d92f5209cfbcd13))


- Merge branch 'dev' of https://github.com/hexahigh/blalange.org into dev - ([8468d6e](https://github.com/hexahigh/blalange.org/commit/8468d6e554e3fe3915336cafe6f417146de69a0c))


- Merge branch 'dev' of https://github.com/hexahigh/blalange.org into dev - ([ff77818](https://github.com/hexahigh/blalange.org/commit/ff778187994f829b280919917c16566af6e52866))


- Merge pull request #507 from hexahigh/dependabot/npm_and_yarn/dev/sveltejs/adapter-cloudflare-4.9.0

chore(deps): bump @sveltejs/adapter-cloudflare from 4.8.0 to 4.9.0 - ([3f6d821](https://github.com/hexahigh/blalange.org/commit/3f6d821ed39b9d12acf6c05ff0c577c684ae8313))


- Revert "feat(3cx widget): Added multiple languages"

This reverts commit 8af1f0fecfc9b5be256bc041576c4d35d3f57977. - ([00926c3](https://github.com/hexahigh/blalange.org/commit/00926c31d325916fb55a8705eb5c8ec336210aba))


- Merge pull request #510 from hexahigh/feature/support

Feature/support - ([a42c46e](https://github.com/hexahigh/blalange.org/commit/a42c46e3f5eeb1eec54c0cdad1d1f194d60dc337))


- Update vite config - ([223357f](https://github.com/hexahigh/blalange.org/commit/223357f833c469a99d9313cd8f6353cee171a0cc))


- Merge pull request #533 from hexahigh/dependabot/npm_and_yarn/dev/iconify-icon-2.3.0

chore(deps): bump iconify-icon from 2.2.0 to 2.3.0 - ([3c96171](https://github.com/hexahigh/blalange.org/commit/3c96171bd81e06853f31071fb36d07090947a723))


- Merge pull request #560 from hexahigh/dependabot/npm_and_yarn/dev/svelte-5.18.0 - ([0679b97](https://github.com/hexahigh/blalange.org/commit/0679b971e35ae9c5d9ccbd73216e1d04b237f6d7))


- Merge pull request #555 from hexahigh/dependabot/npm_and_yarn/dev/katex-0.16.20 - ([0ebc916](https://github.com/hexahigh/blalange.org/commit/0ebc91616f3fb558961f82f6a44d1e81f127cf4b))


### Commit Statistics

- 66 commit(s) contributed to the release.
- 91 day(s) passed between the first and last commit.
- 47 commit(s) parsed as conventional.
- 0 linked issue(s) detected in commits.
- 47 day(s) passed between releases.

## [5.0.1](https://github.com/hexahigh/blalange.org/compare/v5.0.0..v5.0.1) - 2024-11-29

### ⚙️ Miscellaneous Tasks

- *(deps)* Bump axios from 1.7.7 to 1.7.8 - ([e0dfbe9](https://github.com/hexahigh/blalange.org/commit/e0dfbe98e0a7337e168d3ccf7b57b80d92875409))
```commit-body
Bumps [axios](https://github.com/axios/axios) from 1.7.7 to 1.7.8.
- [Release notes](https://github.com/axios/axios/releases)
- [Changelog](https://github.com/axios/axios/blob/v1.x/CHANGELOG.md)
- [Commits](https://github.com/axios/axios/compare/v1.7.7...v1.7.8)

---
updated-dependencies:
- dependency-name: axios
  dependency-type: direct:production
  update-type: version-update:semver-patch
...
```

- *(deps)* Bump @tsparticles/engine from 3.5.0 to 3.7.1 - ([4d91634](https://github.com/hexahigh/blalange.org/commit/4d9163438bfe88c1d02271b3c11c92bfacc0d261))
```commit-body
Bumps [@tsparticles/engine](https://github.com/tsparticles/tsparticles/tree/HEAD/engine) from 3.5.0 to 3.7.1.
- [Release notes](https://github.com/tsparticles/tsparticles/releases)
- [Changelog](https://github.com/tsparticles/tsparticles/blob/v3.7.1/engine/CHANGELOG.md)
- [Commits](https://github.com/tsparticles/tsparticles/commits/v3.7.1/engine)

---
updated-dependencies:
- dependency-name: "@tsparticles/engine"
  dependency-type: direct:production
  update-type: version-update:semver-minor
...
```

- *(deps)* Bump @types/dompurify from 3.0.5 to 3.2.0 - ([167b159](https://github.com/hexahigh/blalange.org/commit/167b159713b95c5894c1eb89f5ff4bc9c7de974d))
```commit-body
Bumps [@types/dompurify](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/HEAD/types/dompurify) from 3.0.5 to 3.2.0.
- [Release notes](https://github.com/DefinitelyTyped/DefinitelyTyped/releases)
- [Commits](https://github.com/DefinitelyTyped/DefinitelyTyped/commits/HEAD/types/dompurify)

---
updated-dependencies:
- dependency-name: "@types/dompurify"
  dependency-type: direct:production
  update-type: version-update:semver-minor
...
```

- *(deps)* Bump marked from 15.0.0 to 15.0.2 - ([5a12cdc](https://github.com/hexahigh/blalange.org/commit/5a12cdcfca0227eaa1b6028d6704a2fe1d8415fb))
```commit-body
Bumps [marked](https://github.com/markedjs/marked) from 15.0.0 to 15.0.2.
- [Release notes](https://github.com/markedjs/marked/releases)
- [Changelog](https://github.com/markedjs/marked/blob/master/.releaserc.json)
- [Commits](https://github.com/markedjs/marked/compare/v15.0.0...v15.0.2)

---
updated-dependencies:
- dependency-name: marked
  dependency-type: direct:production
  update-type: version-update:semver-patch
...
```

- *(deps)* Bump tailwind-merge from 2.5.4 to 2.5.5 - ([244191b](https://github.com/hexahigh/blalange.org/commit/244191bfc50f059a6ef910b0e12b5ad68cfffb3d))
```commit-body
Bumps [tailwind-merge](https://github.com/dcastil/tailwind-merge) from 2.5.4 to 2.5.5.
- [Release notes](https://github.com/dcastil/tailwind-merge/releases)
- [Commits](https://github.com/dcastil/tailwind-merge/compare/v2.5.4...v2.5.5)

---
updated-dependencies:
- dependency-name: tailwind-merge
  dependency-type: direct:production
  update-type: version-update:semver-patch
...
```

- *(deps)* Update dependencies - ([21a232a](https://github.com/hexahigh/blalange.org/commit/21a232af9859ff07c66566fac0b651b3c1cbed9c))


- *(deps-dev)* Bump @types/node from 22.9.0 to 22.10.1 - ([d12d689](https://github.com/hexahigh/blalange.org/commit/d12d6898109a4471fff1c46ce82adb89f08cc556))
```commit-body
Bumps [@types/node](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/HEAD/types/node) from 22.9.0 to 22.10.1.
- [Release notes](https://github.com/DefinitelyTyped/DefinitelyTyped/releases)
- [Commits](https://github.com/DefinitelyTyped/DefinitelyTyped/commits/HEAD/types/node)

---
updated-dependencies:
- dependency-name: "@types/node"
  dependency-type: direct:development
  update-type: version-update:semver-minor
...
```

- *(deps-dev)* Bump typescript from 5.6.3 to 5.7.2 - ([c25c89c](https://github.com/hexahigh/blalange.org/commit/c25c89cae7a7cd3edb887c24c163a88444d55404))
```commit-body
Bumps [typescript](https://github.com/microsoft/TypeScript) from 5.6.3 to 5.7.2.
- [Release notes](https://github.com/microsoft/TypeScript/releases)
- [Changelog](https://github.com/microsoft/TypeScript/blob/main/azure-pipelines.release.yml)
- [Commits](https://github.com/microsoft/TypeScript/compare/v5.6.3...v5.7.2)

---
updated-dependencies:
- dependency-name: typescript
  dependency-type: direct:development
  update-type: version-update:semver-minor
...
```

- *(deps-dev)* Bump @sveltejs/kit from 2.8.1 to 2.9.0 - ([dbe7bfa](https://github.com/hexahigh/blalange.org/commit/dbe7bfa93193a04c746886a62f320825b1bf6ac1))
```commit-body
Bumps [@sveltejs/kit](https://github.com/sveltejs/kit/tree/HEAD/packages/kit) from 2.8.1 to 2.9.0.
- [Release notes](https://github.com/sveltejs/kit/releases)
- [Changelog](https://github.com/sveltejs/kit/blob/main/packages/kit/CHANGELOG.md)
- [Commits](https://github.com/sveltejs/kit/commits/@sveltejs/kit@2.9.0/packages/kit)

---
updated-dependencies:
- dependency-name: "@sveltejs/kit"
  dependency-type: direct:development
  update-type: version-update:semver-minor
...
```

- *(deps-dev)* Bump @playwright/test from 1.48.2 to 1.49.0 - ([603287f](https://github.com/hexahigh/blalange.org/commit/603287fda6e56829fdb0bfbca1422055682b8740))
```commit-body
Bumps [@playwright/test](https://github.com/microsoft/playwright) from 1.48.2 to 1.49.0.
- [Release notes](https://github.com/microsoft/playwright/releases)
- [Commits](https://github.com/microsoft/playwright/compare/v1.48.2...v1.49.0)

---
updated-dependencies:
- dependency-name: "@playwright/test"
  dependency-type: direct:development
  update-type: version-update:semver-minor
...
```

- Prepare for release - ([66f6dd4](https://github.com/hexahigh/blalange.org/commit/66f6dd4da34544e4b22fa9e4dca034558caec673))



### Other (unconventional)

- *(npm)* Remove @tsparticles/svelte package - ([4564d97](https://github.com/hexahigh/blalange.org/commit/4564d970b652c9a9d0f1af32ab13a8314daf881c))


- Merge pull request #450 from hexahigh/dependabot/npm_and_yarn/dev/types/node-22.10.1

chore(deps-dev): bump @types/node from 22.9.0 to 22.10.1 - ([aff00fd](https://github.com/hexahigh/blalange.org/commit/aff00fd7cda356ec9122023c6108e81c10ba92bb))


- Merge pull request #434 from hexahigh/dependabot/npm_and_yarn/dev/typescript-5.7.2

chore(deps-dev): bump typescript from 5.6.3 to 5.7.2 - ([0326115](https://github.com/hexahigh/blalange.org/commit/0326115dd2e729c94cfad3ef51cca5c00e832b3b))


- Merge pull request #444 from hexahigh/dependabot/npm_and_yarn/dev/axios-1.7.8

chore(deps): bump axios from 1.7.7 to 1.7.8 - ([f46e048](https://github.com/hexahigh/blalange.org/commit/f46e048d85357cdf773dfbdc3066bb982fda8739))


- Merge pull request #438 from hexahigh/dependabot/npm_and_yarn/dev/tsparticles/engine-3.7.1

chore(deps): bump @tsparticles/engine from 3.5.0 to 3.7.1 - ([f293abd](https://github.com/hexahigh/blalange.org/commit/f293abd356033d81ed7d71dc3526203b7a16162c))


- Merge pull request #427 from hexahigh/dependabot/npm_and_yarn/dev/types/dompurify-3.2.0

chore(deps): bump @types/dompurify from 3.0.5 to 3.2.0 - ([8be4b64](https://github.com/hexahigh/blalange.org/commit/8be4b64f1bed3319f558d7c55f635957655db787))


- Merge pull request #430 from hexahigh/dependabot/npm_and_yarn/dev/marked-15.0.2

chore(deps): bump marked from 15.0.0 to 15.0.2 - ([384eff2](https://github.com/hexahigh/blalange.org/commit/384eff2b68accf976cc737e4a23d6a4fc8df93b6))


- Merge pull request #452 from hexahigh/dependabot/npm_and_yarn/dev/sveltejs/kit-2.9.0

chore(deps-dev): bump @sveltejs/kit from 2.8.1 to 2.9.0 - ([47e6608](https://github.com/hexahigh/blalange.org/commit/47e66088b0f8f96f23a2b538cb80788b66c8c076))


- Merge pull request #432 from hexahigh/dependabot/npm_and_yarn/dev/tailwind-merge-2.5.5

chore(deps): bump tailwind-merge from 2.5.4 to 2.5.5 - ([d507a08](https://github.com/hexahigh/blalange.org/commit/d507a089665ee662c60f03684c91ef53854962ff))


- Merge pull request #419 from hexahigh/dependabot/npm_and_yarn/dev/playwright/test-1.49.0

chore(deps-dev): bump @playwright/test from 1.48.2 to 1.49.0 - ([24c2f24](https://github.com/hexahigh/blalange.org/commit/24c2f243c406da48ce9a540ae554f419351da259))


### Commit Statistics

- 21 commit(s) contributed to the release.
- 10 day(s) passed between the first and last commit.
- 12 commit(s) parsed as conventional.
- 0 linked issue(s) detected in commits.

## [5.0.0](https://github.com/hexahigh/blalange.org/compare/v4.0.4..v5.0.0) - 2024-11-29

### ⛰️  Features

- *(analytics)* New analytics system - ([e6678b6](https://github.com/hexahigh/blalange.org/commit/e6678b6924911282dc045758398d0d9b2f221323))


- *(analytics)* Added "VITE_FORCE_ANALYTICS" env variable - ([b3cb1de](https://github.com/hexahigh/blalange.org/commit/b3cb1debf3dfdb7fb74e3d99baaaa26254fe2dd1))


- *(analytics)* Added info object to data - ([68481e8](https://github.com/hexahigh/blalange.org/commit/68481e84542f13d96dcd7749d875ec6d8e534600))


- *(analytics)* Added "visiblilychange" event - ([b75e697](https://github.com/hexahigh/blalange.org/commit/b75e6971c2762b0cce56588144d96133d601fb84))


- *(analytics)* Added FPjs and botD - ([b5c18fb](https://github.com/hexahigh/blalange.org/commit/b5c18fbba355430edb256f370c5d5c9402063092))


- *(analytics)* Added visitor_id to payload - ([760a0e5](https://github.com/hexahigh/blalange.org/commit/760a0e5942dd11ffa0feb11e17a5fc9fe9af293d))


- *(article)* Translations on articles - ([5689c1c](https://github.com/hexahigh/blalange.org/commit/5689c1c53cf2ddbfa64ad64ec5f239cfd64aa2d3))


- *(article)* Added highlight.js - ([3d188cc](https://github.com/hexahigh/blalange.org/commit/3d188cc2f51e55102a1b0543bf8bddd9bfca3949))


- *(article list)* Added info when search failed - ([e8f7b3f](https://github.com/hexahigh/blalange.org/commit/e8f7b3fda8a4c76fec31e774be2d864175831b3d))


- *(article list)* New search option - ([91da12e](https://github.com/hexahigh/blalange.org/commit/91da12efc842ce49fc851cc21f18ce6ef275c0f5))


- *(darkmodeSwitcher)* Added noButton prop - ([5f060d0](https://github.com/hexahigh/blalange.org/commit/5f060d0e1e15fa0518ceb5ad696fa2ddadc93979))


- *(translations)* Added spanish - ([4483088](https://github.com/hexahigh/blalange.org/commit/4483088ee0bcf68d38a8d66e8a57596db9bb8c88))


- Darkmode can now be toggled everywhere - ([d79bdeb](https://github.com/hexahigh/blalange.org/commit/d79bdebe6ae4b95891609f64b6479d450bd08041))
```commit-body
Darkmode can now to toggled outside the darkmodeSwitcher component. It does this using a store that gets read and written to by the darkmodeSwitcher
```

- Added trenslations - ([a279466](https://github.com/hexahigh/blalange.org/commit/a279466c2efcbaa43214219d8689e6f6e607fc17))


- Subdomain based locale - ([6327cb0](https://github.com/hexahigh/blalange.org/commit/6327cb07d3fb0327d2958e52f5c02483a97cb9a5))


- Subdir based translations - ([4dba48d](https://github.com/hexahigh/blalange.org/commit/4dba48df712fa0ac2e20b780c40ebe84c3bf4e7c))


- Update to svelte 5 - ([a1ad9a4](https://github.com/hexahigh/blalange.org/commit/a1ad9a4896b2cc93309f15dee0b9cb81496e9a7c))


- Switched to "inlang" - ([b197e57](https://github.com/hexahigh/blalange.org/commit/b197e576476219bfc589790e687e9b7ef17d1604))
```commit-body
Chat, is this rizz?
```

- Updated translations - ([eba6d30](https://github.com/hexahigh/blalange.org/commit/eba6d30920977e96a0f23ffed5a9f06f5a4af0d0))


- Various translations - ([7662c0e](https://github.com/hexahigh/blalange.org/commit/7662c0ec1e819b607e3279b64de3b9377c53bbae))
```commit-body
Translated PP, TOS and various other things
```

- Added various translations - ([740859b](https://github.com/hexahigh/blalange.org/commit/740859b42ed91abd07b81139246db95785052a62))


- Added CSP - ([68aeba7](https://github.com/hexahigh/blalange.org/commit/68aeba7314a74ac42ade645a44d6cab3b2afa325))


- Exported version type - ([2a36da6](https://github.com/hexahigh/blalange.org/commit/2a36da6e8eeea175a95c40cbdce9f3ac40df697d))


- Added $root and $components alias - ([8335568](https://github.com/hexahigh/blalange.org/commit/83355680ad113b3c7b4d7d72d3173002e2ebc5ff))


- Added more ES versions to TS - ([fd80933](https://github.com/hexahigh/blalange.org/commit/fd8093396f75eb5fcc0540f1069360219f57d8b7))



### 🐛 Bug Fixes

- *(Donation component)* Fix OC logo stretching the page when hovered over - ([251c464](https://github.com/hexahigh/blalange.org/commit/251c46482dd6f01f013050243b18fde8d2784556))


- *(analytics)* VisitorId not getting set - ([fde044e](https://github.com/hexahigh/blalange.org/commit/fde044ed58dcd0932aebb10b27978b10e8854f85))


- *(article list)* Masonry losing track of items upon search - ([d0f5c84](https://github.com/hexahigh/blalange.org/commit/d0f5c84c65dbb878cd0017d79bf5ad85a13db5c3))
```commit-body
This fix is a bit hacky. If the grid container disappears then masonry breaks.
```

- *(article list)* Translations - ([5b4e343](https://github.com/hexahigh/blalange.org/commit/5b4e3438f7a7785eaeca04ec3ec9f1717ad5644d))


- *(article list)* Search bugging out the masonry - ([f559eac](https://github.com/hexahigh/blalange.org/commit/f559eac8e2f0bd24e039e3843b6231180deddfec))


- *(article list)* Masonry grid - ([bc14be9](https://github.com/hexahigh/blalange.org/commit/bc14be947dd05abc2729739345dfe297b7d70fee))


- *(chat)* Blocked more html elements - ([de22cb6](https://github.com/hexahigh/blalange.org/commit/de22cb65af6e62fcc25c4b1b265c448a80a432e0))


- *(error page)* Fix translations - ([caf98fb](https://github.com/hexahigh/blalange.org/commit/caf98fb694eb93facdd9a34e64ccb59850088a98))


- *(footer)* Links stretching the whole page - ([8293fd1](https://github.com/hexahigh/blalange.org/commit/8293fd19af778d584211c85db194ebb72107223e))


- *(navbar)* Overlap on language dropdown - ([7f69bf0](https://github.com/hexahigh/blalange.org/commit/7f69bf0b56476024c6e9c74c4b6ebb704566dad9))


- *(navbar)* Removed console.log - ([6568799](https://github.com/hexahigh/blalange.org/commit/6568799982f6ad10476d84749cadc9edb9af048c))


- Darkmode not saving - ([ecd08d9](https://github.com/hexahigh/blalange.org/commit/ecd08d99c5975a175e95728caa4cd47336fcd029))


- Moved term & redirect to [lang] - ([08f1d19](https://github.com/hexahigh/blalange.org/commit/08f1d193c2bb335317be9a421f1448029ec85d3c))


- 500 on CF pages - ([0d76abd](https://github.com/hexahigh/blalange.org/commit/0d76abd74aca6dd7479b0743a4d02ba85d2b68ee))



### 🚜 Refactor

- *(analytics)* Update analytics2 - ([0b412cc](https://github.com/hexahigh/blalange.org/commit/0b412cc9e9279e70b9fd776917542507d84eb9d7))


- *(article)* Improved look of article image - ([bb019c3](https://github.com/hexahigh/blalange.org/commit/bb019c3fe640f104f3712214c9261a0f178333c2))


- *(article)* Update md css - ([5a9ffc3](https://github.com/hexahigh/blalange.org/commit/5a9ffc37b42c195a0a032418d643b7547166e05d))


- *(article)* Made front image better - ([fbfe862](https://github.com/hexahigh/blalange.org/commit/fbfe8624c0473cdda489365609500c911f41074b))


- *(article list)* Reduced CLS - ([3249e82](https://github.com/hexahigh/blalange.org/commit/3249e82384cc5f66593df3e9998d030ec48f349b))


- *(metatags)* Updated metatags wrapper - ([325e6fd](https://github.com/hexahigh/blalange.org/commit/325e6fd2db28cb7abf3624f0c2637d3d4052098d))


- *(session)* Removed console.log - ([ca79a38](https://github.com/hexahigh/blalange.org/commit/ca79a383e8f6366d399225bef2e520bf588e6109))


- Removed adsense - ([94ce36c](https://github.com/hexahigh/blalange.org/commit/94ce36cf393874b76f9f27707d66d78e33f32ef9))


- Added more logging - ([e0a698d](https://github.com/hexahigh/blalange.org/commit/e0a698dcefc5fd4adb721b352b70caa2452f3599))


- Update config - ([1e4544a](https://github.com/hexahigh/blalange.org/commit/1e4544a32d143f536a913b38b85cce3a287360d2))



### ⚡ Performance

- *(article)* Improved loading times - ([015e9ab](https://github.com/hexahigh/blalange.org/commit/015e9ab7d338e1f51383c240c4d481621343dba7))



### 🎨 Styling

- *(article)* Remove obsolete comment - ([0ac3408](https://github.com/hexahigh/blalange.org/commit/0ac340852374260b28cd97e9e4cf5115fa027b3b))


- Added a few comments - ([cd22058](https://github.com/hexahigh/blalange.org/commit/cd220584f742411d5614b3623f02a83b4f99faa2))



### 🧪 Testing

- Added chat benchmark - ([6e78dbe](https://github.com/hexahigh/blalange.org/commit/6e78dbed83defaf5c9057f5e0474e147a5d8012a))



### ⚙️ Miscellaneous Tasks

- *(deps)* Bump the npm_and_yarn group across 1 directory with 6 updates - ([e785c53](https://github.com/hexahigh/blalange.org/commit/e785c539a29b9e498539018720c14db6dbfba4af))
```commit-body
Bumps the npm_and_yarn group with 4 updates in the / directory: [axios](https://github.com/axios/axios), [svelte](https://github.com/sveltejs/svelte/tree/HEAD/packages/svelte), [micromatch](https://github.com/micromatch/micromatch) and [rollup](https://github.com/rollup/rollup).


Updates `axios` from 1.7.2 to 1.7.4
- [Release notes](https://github.com/axios/axios/releases)
- [Changelog](https://github.com/axios/axios/blob/v1.x/CHANGELOG.md)
- [Commits](https://github.com/axios/axios/compare/v1.7.2...v1.7.4)

Updates `svelte` from 4.2.18 to 4.2.19
- [Release notes](https://github.com/sveltejs/svelte/releases)
- [Changelog](https://github.com/sveltejs/svelte/blob/svelte@4.2.19/packages/svelte/CHANGELOG.md)
- [Commits](https://github.com/sveltejs/svelte/commits/svelte@4.2.19/packages/svelte)

Updates `micromatch` from 4.0.7 to 4.0.8
- [Release notes](https://github.com/micromatch/micromatch/releases)
- [Changelog](https://github.com/micromatch/micromatch/blob/master/CHANGELOG.md)
- [Commits](https://github.com/micromatch/micromatch/compare/4.0.7...4.0.8)

Updates `path-to-regexp` from 6.2.2 to 6.3.0
- [Release notes](https://github.com/pillarjs/path-to-regexp/releases)
- [Changelog](https://github.com/pillarjs/path-to-regexp/blob/master/History.md)
- [Commits](https://github.com/pillarjs/path-to-regexp/compare/v6.2.2...v6.3.0)

Updates `rollup` from 2.79.1 to 2.79.2
- [Release notes](https://github.com/rollup/rollup/releases)
- [Changelog](https://github.com/rollup/rollup/blob/master/CHANGELOG.md)
- [Commits](https://github.com/rollup/rollup/compare/v2.79.1...v2.79.2)

Updates `ws` from 8.17.0 to 8.18.0
- [Release notes](https://github.com/websockets/ws/releases)
- [Commits](https://github.com/websockets/ws/compare/8.17.0...8.18.0)

---
updated-dependencies:
- dependency-name: axios
  dependency-type: direct:production
  dependency-group: npm_and_yarn
- dependency-name: svelte
  dependency-type: direct:development
  dependency-group: npm_and_yarn
- dependency-name: micromatch
  dependency-type: indirect
  dependency-group: npm_and_yarn
- dependency-name: path-to-regexp
  dependency-type: indirect
  dependency-group: npm_and_yarn
- dependency-name: rollup
  dependency-type: indirect
  dependency-group: npm_and_yarn
- dependency-name: ws
  dependency-type: indirect
  dependency-group: npm_and_yarn
...
```

- *(deps)* Bump chart.js from 4.4.4 to 4.4.5 - ([d275440](https://github.com/hexahigh/blalange.org/commit/d27544022ab2f81673f35aaef9f2ab922ce4fc99))
```commit-body
Bumps [chart.js](https://github.com/chartjs/Chart.js) from 4.4.4 to 4.4.5.
- [Release notes](https://github.com/chartjs/Chart.js/releases)
- [Commits](https://github.com/chartjs/Chart.js/compare/v4.4.4...v4.4.5)

---
updated-dependencies:
- dependency-name: chart.js
  dependency-type: direct:production
  update-type: version-update:semver-patch
...
```

- *(deps)* Bump tailwind-merge from 2.5.3 to 2.5.4 - ([541a1ee](https://github.com/hexahigh/blalange.org/commit/541a1ee30e513e4944759c7138fe25661d496ad2))
```commit-body
Bumps [tailwind-merge](https://github.com/dcastil/tailwind-merge) from 2.5.3 to 2.5.4.
- [Release notes](https://github.com/dcastil/tailwind-merge/releases)
- [Commits](https://github.com/dcastil/tailwind-merge/compare/v2.5.3...v2.5.4)

---
updated-dependencies:
- dependency-name: tailwind-merge
  dependency-type: direct:production
  update-type: version-update:semver-patch
...
```

- *(deps)* Bump @sveltejs/adapter-node from 5.2.6 to 5.2.8 - ([351bfdb](https://github.com/hexahigh/blalange.org/commit/351bfdbfa2ef2615d19898585b5414a5a9ed36ac))
```commit-body
Bumps [@sveltejs/adapter-node](https://github.com/sveltejs/kit/tree/HEAD/packages/adapter-node) from 5.2.6 to 5.2.8.
- [Release notes](https://github.com/sveltejs/kit/releases)
- [Changelog](https://github.com/sveltejs/kit/blob/main/packages/adapter-node/CHANGELOG.md)
- [Commits](https://github.com/sveltejs/kit/commits/@sveltejs/adapter-node@5.2.8/packages/adapter-node)

---
updated-dependencies:
- dependency-name: "@sveltejs/adapter-node"
  dependency-type: direct:production
  update-type: version-update:semver-patch
...
```

- *(deps)* Bump super-sitemap from 0.15.1 to 1.0.3 - ([4188f5e](https://github.com/hexahigh/blalange.org/commit/4188f5ec06b09953b9c3c29df219f2cbb2bcc3e3))
```commit-body
Bumps [super-sitemap](https://github.com/jasongitmail/super-sitemap) from 0.15.1 to 1.0.3.
- [Commits](https://github.com/jasongitmail/super-sitemap/commits)

---
updated-dependencies:
- dependency-name: super-sitemap
  dependency-type: direct:production
  update-type: version-update:semver-major
...
```

- *(deps)* Bump dompurify from 3.1.7 to 3.2.0 - ([5dbc62b](https://github.com/hexahigh/blalange.org/commit/5dbc62bbbc6912cb5d4ee8a614b1872997fc8a60))
```commit-body
Bumps [dompurify](https://github.com/cure53/DOMPurify) from 3.1.7 to 3.2.0.
- [Release notes](https://github.com/cure53/DOMPurify/releases)
- [Commits](https://github.com/cure53/DOMPurify/compare/3.1.7...3.2.0)

---
updated-dependencies:
- dependency-name: dompurify
  dependency-type: direct:production
  update-type: version-update:semver-minor
...
```

- *(deps)* Bump workbox-expiration from 7.1.0 to 7.3.0 - ([27890ec](https://github.com/hexahigh/blalange.org/commit/27890ec55bbccf0baabb54e7f9b58b5c38c384e9))
```commit-body
Bumps [workbox-expiration](https://github.com/googlechrome/workbox) from 7.1.0 to 7.3.0.
- [Release notes](https://github.com/googlechrome/workbox/releases)
- [Commits](https://github.com/googlechrome/workbox/compare/v7.1.0...v7.3.0)

---
updated-dependencies:
- dependency-name: workbox-expiration
  dependency-type: direct:production
  update-type: version-update:semver-minor
...
```

- *(deps)* Bump marked from 14.1.3 to 15.0.0 - ([bcfef85](https://github.com/hexahigh/blalange.org/commit/bcfef85ca0d4529616f2c5bb032cd6a39402d216))
```commit-body
Bumps [marked](https://github.com/markedjs/marked) from 14.1.3 to 15.0.0.
- [Release notes](https://github.com/markedjs/marked/releases)
- [Changelog](https://github.com/markedjs/marked/blob/master/.releaserc.json)
- [Commits](https://github.com/markedjs/marked/compare/v14.1.3...v15.0.0)

---
updated-dependencies:
- dependency-name: marked
  dependency-type: direct:production
  update-type: version-update:semver-major
...
```

- *(deps)* Bump flowbite-svelte-icons from 1.6.2 to 2.0.2 - ([26d3fb9](https://github.com/hexahigh/blalange.org/commit/26d3fb9041615096ee75a1281dd4aad5fd43d792))
```commit-body
Bumps [flowbite-svelte-icons](https://github.com/themesberg/flowbite-svelte-icons) from 1.6.2 to 2.0.2.
- [Release notes](https://github.com/themesberg/flowbite-svelte-icons/releases)
- [Changelog](https://github.com/themesberg/flowbite-svelte-icons/blob/main/CHANGELOG.md)
- [Commits](https://github.com/themesberg/flowbite-svelte-icons/compare/v1.6.2...v2.0.2)

---
updated-dependencies:
- dependency-name: flowbite-svelte-icons
  dependency-type: direct:production
  update-type: version-update:semver-major
...
```

- *(deps)* Bump @floating-ui/dom from 1.6.11 to 1.6.12 - ([ca6adee](https://github.com/hexahigh/blalange.org/commit/ca6adeecd509170c3724712aae8f74af38197fa5))
```commit-body
Bumps [@floating-ui/dom](https://github.com/floating-ui/floating-ui/tree/HEAD/packages/dom) from 1.6.11 to 1.6.12.
- [Release notes](https://github.com/floating-ui/floating-ui/releases)
- [Changelog](https://github.com/floating-ui/floating-ui/blob/master/packages/dom/CHANGELOG.md)
- [Commits](https://github.com/floating-ui/floating-ui/commits/@floating-ui/dom@1.6.12/packages/dom)

---
updated-dependencies:
- dependency-name: "@floating-ui/dom"
  dependency-type: direct:production
  update-type: version-update:semver-patch
...
```

- *(deps)* Bump chart.js from 4.4.5 to 4.4.6 - ([a1cb0ec](https://github.com/hexahigh/blalange.org/commit/a1cb0ec397a229c5a3442c61c41855ede3767542))
```commit-body
Bumps [chart.js](https://github.com/chartjs/Chart.js) from 4.4.5 to 4.4.6.
- [Release notes](https://github.com/chartjs/Chart.js/releases)
- [Commits](https://github.com/chartjs/Chart.js/compare/v4.4.5...v4.4.6)

---
updated-dependencies:
- dependency-name: chart.js
  dependency-type: direct:production
  update-type: version-update:semver-patch
...
```

- *(deps)* Bump @directus/sdk from 17.0.2 to 18.0.0 - ([2d65e73](https://github.com/hexahigh/blalange.org/commit/2d65e738965927823094099b12598465f67b098f))
```commit-body
Bumps [@directus/sdk](https://github.com/directus/directus/tree/HEAD/sdk) from 17.0.2 to 18.0.0.
- [Release notes](https://github.com/directus/directus/releases)
- [Commits](https://github.com/directus/directus/commits/HEAD/sdk)

---
updated-dependencies:
- dependency-name: "@directus/sdk"
  dependency-type: direct:production
  update-type: version-update:semver-major
...
```

- *(deps)* Bump workbox-build from 7.1.1 to 7.3.0 - ([9e52398](https://github.com/hexahigh/blalange.org/commit/9e52398b9625f1c6100c3f8ee4f99ed81d80e130))
```commit-body
Bumps [workbox-build](https://github.com/googlechrome/workbox) from 7.1.1 to 7.3.0.
- [Release notes](https://github.com/googlechrome/workbox/releases)
- [Commits](https://github.com/googlechrome/workbox/commits/v7.3.0)

---
updated-dependencies:
- dependency-name: workbox-build
  dependency-type: direct:production
  update-type: version-update:semver-minor
...
```

- *(deps-dev)* Bump flowbite-svelte from 0.46.23 to 0.47.0 - ([daacfb4](https://github.com/hexahigh/blalange.org/commit/daacfb4818397d1ddc84ca2e982129e35aa07a80))
```commit-body
Bumps [flowbite-svelte](https://github.com/themesberg/flowbite-svelte) from 0.46.23 to 0.47.0.
- [Release notes](https://github.com/themesberg/flowbite-svelte/releases)
- [Changelog](https://github.com/themesberg/flowbite-svelte/blob/main/CHANGELOG.md)
- [Commits](https://github.com/themesberg/flowbite-svelte/compare/v0.46.23...v0.47.0)

---
updated-dependencies:
- dependency-name: flowbite-svelte
  dependency-type: direct:development
  update-type: version-update:semver-minor
...
```

- *(deps-dev)* Bump @types/node from 22.7.5 to 22.7.6 - ([f0d691b](https://github.com/hexahigh/blalange.org/commit/f0d691b8356c76a19a0a78b28d82e659bdd08613))
```commit-body
Bumps [@types/node](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/HEAD/types/node) from 22.7.5 to 22.7.6.
- [Release notes](https://github.com/DefinitelyTyped/DefinitelyTyped/releases)
- [Commits](https://github.com/DefinitelyTyped/DefinitelyTyped/commits/HEAD/types/node)

---
updated-dependencies:
- dependency-name: "@types/node"
  dependency-type: direct:development
  update-type: version-update:semver-patch
...
```

- *(deps-dev)* Bump @playwright/test from 1.48.0 to 1.48.1 - ([373dc0d](https://github.com/hexahigh/blalange.org/commit/373dc0d2dbbe09170ae359f36e1e09c42f160d72))
```commit-body
Bumps [@playwright/test](https://github.com/microsoft/playwright) from 1.48.0 to 1.48.1.
- [Release notes](https://github.com/microsoft/playwright/releases)
- [Commits](https://github.com/microsoft/playwright/compare/v1.48.0...v1.48.1)

---
updated-dependencies:
- dependency-name: "@playwright/test"
  dependency-type: direct:development
  update-type: version-update:semver-patch
...
```

- *(deps-dev)* Bump tailwindcss from 3.4.13 to 3.4.14 - ([5305f0a](https://github.com/hexahigh/blalange.org/commit/5305f0ae941fe30cc980bde59d4dba94a67af78e))
```commit-body
Bumps [tailwindcss](https://github.com/tailwindlabs/tailwindcss) from 3.4.13 to 3.4.14.
- [Release notes](https://github.com/tailwindlabs/tailwindcss/releases)
- [Changelog](https://github.com/tailwindlabs/tailwindcss/blob/v3.4.14/CHANGELOG.md)
- [Commits](https://github.com/tailwindlabs/tailwindcss/compare/v3.4.13...v3.4.14)

---
updated-dependencies:
- dependency-name: tailwindcss
  dependency-type: direct:development
  update-type: version-update:semver-patch
...
```

- *(deps-dev)* Bump flowbite-svelte from 0.47.0 to 0.47.1 - ([887be3f](https://github.com/hexahigh/blalange.org/commit/887be3f6c4cacb8eb7be4d0024481e00eda30d93))
```commit-body
Bumps [flowbite-svelte](https://github.com/themesberg/flowbite-svelte) from 0.47.0 to 0.47.1.
- [Release notes](https://github.com/themesberg/flowbite-svelte/releases)
- [Changelog](https://github.com/themesberg/flowbite-svelte/blob/main/CHANGELOG.md)
- [Commits](https://github.com/themesberg/flowbite-svelte/compare/v0.47.0...v0.47.1)

---
updated-dependencies:
- dependency-name: flowbite-svelte
  dependency-type: direct:development
  update-type: version-update:semver-patch
...
```

- *(deps-dev)* Bump @sveltejs/kit from 2.7.0 to 2.7.2 - ([89bf1f7](https://github.com/hexahigh/blalange.org/commit/89bf1f747e4c1dde2db73aa09be000b4781683a8))
```commit-body
Bumps [@sveltejs/kit](https://github.com/sveltejs/kit/tree/HEAD/packages/kit) from 2.7.0 to 2.7.2.
- [Release notes](https://github.com/sveltejs/kit/releases)
- [Changelog](https://github.com/sveltejs/kit/blob/main/packages/kit/CHANGELOG.md)
- [Commits](https://github.com/sveltejs/kit/commits/@sveltejs/kit@2.7.2/packages/kit)

---
updated-dependencies:
- dependency-name: "@sveltejs/kit"
  dependency-type: direct:development
  update-type: version-update:semver-patch
...
```

- *(deps-dev)* Bump vite from 5.4.8 to 5.4.9 - ([665c8fe](https://github.com/hexahigh/blalange.org/commit/665c8fe00a55825d7667d390b0ce9d7cbc8cdafa))
```commit-body
Bumps [vite](https://github.com/vitejs/vite/tree/HEAD/packages/vite) from 5.4.8 to 5.4.9.
- [Release notes](https://github.com/vitejs/vite/releases)
- [Changelog](https://github.com/vitejs/vite/blob/v5.4.9/packages/vite/CHANGELOG.md)
- [Commits](https://github.com/vitejs/vite/commits/v5.4.9/packages/vite)

---
updated-dependencies:
- dependency-name: vite
  dependency-type: direct:development
  update-type: version-update:semver-patch
...
```

- *(deps-dev)* Bump workbox-window from 7.1.0 to 7.3.0 - ([bb22879](https://github.com/hexahigh/blalange.org/commit/bb2287902fbffb5b87926286045a745cac85c640))
```commit-body
Bumps [workbox-window](https://github.com/googlechrome/workbox) from 7.1.0 to 7.3.0.
- [Release notes](https://github.com/googlechrome/workbox/releases)
- [Commits](https://github.com/googlechrome/workbox/compare/v7.1.0...v7.3.0)

---
updated-dependencies:
- dependency-name: workbox-window
  dependency-type: direct:development
  update-type: version-update:semver-minor
...
```

- *(deps-dev)* Bump workbox-precaching from 7.1.0 to 7.3.0 - ([41df2e1](https://github.com/hexahigh/blalange.org/commit/41df2e120fa76c999b6858530540c776d7e68e40))
```commit-body
Bumps [workbox-precaching](https://github.com/googlechrome/workbox) from 7.1.0 to 7.3.0.
- [Release notes](https://github.com/googlechrome/workbox/releases)
- [Commits](https://github.com/googlechrome/workbox/compare/v7.1.0...v7.3.0)

---
updated-dependencies:
- dependency-name: workbox-precaching
  dependency-type: direct:development
  update-type: version-update:semver-minor
...
```

- *(deps-dev)* Bump @sveltejs/kit from 2.7.3 to 2.8.1 - ([ee41031](https://github.com/hexahigh/blalange.org/commit/ee41031e354049ed707d9d68ff3699425f29839b))
```commit-body
Bumps [@sveltejs/kit](https://github.com/sveltejs/kit/tree/HEAD/packages/kit) from 2.7.3 to 2.8.1.
- [Release notes](https://github.com/sveltejs/kit/releases)
- [Changelog](https://github.com/sveltejs/kit/blob/main/packages/kit/CHANGELOG.md)
- [Commits](https://github.com/sveltejs/kit/commits/@sveltejs/kit@2.8.1/packages/kit)

---
updated-dependencies:
- dependency-name: "@sveltejs/kit"
  dependency-type: direct:development
  update-type: version-update:semver-minor
...
```

- *(deps-dev)* Bump workbox-cacheable-response from 7.1.0 to 7.3.0 - ([65c5994](https://github.com/hexahigh/blalange.org/commit/65c5994064b9b07dbe5bdcb98752dd60ec074f16))
```commit-body
Bumps [workbox-cacheable-response](https://github.com/googlechrome/workbox) from 7.1.0 to 7.3.0.
- [Release notes](https://github.com/googlechrome/workbox/releases)
- [Commits](https://github.com/googlechrome/workbox/compare/v7.1.0...v7.3.0)

---
updated-dependencies:
- dependency-name: workbox-cacheable-response
  dependency-type: direct:development
  update-type: version-update:semver-minor
...
```

- *(deps-dev)* Bump postcss from 8.4.47 to 8.4.49 - ([3e8448a](https://github.com/hexahigh/blalange.org/commit/3e8448aa0339fda11ebc7139ec19fdd43212b7e3))
```commit-body
Bumps [postcss](https://github.com/postcss/postcss) from 8.4.47 to 8.4.49.
- [Release notes](https://github.com/postcss/postcss/releases)
- [Changelog](https://github.com/postcss/postcss/blob/main/CHANGELOG.md)
- [Commits](https://github.com/postcss/postcss/compare/8.4.47...8.4.49)

---
updated-dependencies:
- dependency-name: postcss
  dependency-type: direct:development
  update-type: version-update:semver-patch
...
```

- *(deps-dev)* Bump @types/node from 22.8.1 to 22.9.0 - ([3e10128](https://github.com/hexahigh/blalange.org/commit/3e10128cb247321bffce99548bf64ae11d6cb992))
```commit-body
Bumps [@types/node](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/HEAD/types/node) from 22.8.1 to 22.9.0.
- [Release notes](https://github.com/DefinitelyTyped/DefinitelyTyped/releases)
- [Commits](https://github.com/DefinitelyTyped/DefinitelyTyped/commits/HEAD/types/node)

---
updated-dependencies:
- dependency-name: "@types/node"
  dependency-type: direct:development
  update-type: version-update:semver-minor
...
```

- *(deps-dev)* Bump workbox-strategies from 7.1.0 to 7.3.0 - ([6edca2e](https://github.com/hexahigh/blalange.org/commit/6edca2ef6c96c1cde5c21e9e00ffda30fdda7112))
```commit-body
Bumps [workbox-strategies](https://github.com/googlechrome/workbox) from 7.1.0 to 7.3.0.
- [Release notes](https://github.com/googlechrome/workbox/releases)
- [Commits](https://github.com/googlechrome/workbox/compare/v7.1.0...v7.3.0)

---
updated-dependencies:
- dependency-name: workbox-strategies
  dependency-type: direct:development
  update-type: version-update:semver-minor
...
```

- *(deps-dev)* Bump svelte from 5.1.3 to 5.2.0 - ([17ef0e3](https://github.com/hexahigh/blalange.org/commit/17ef0e3f9907bd3946baced161e8fafec09c8146))
```commit-body
Bumps [svelte](https://github.com/sveltejs/svelte/tree/HEAD/packages/svelte) from 5.1.3 to 5.2.0.
- [Release notes](https://github.com/sveltejs/svelte/releases)
- [Changelog](https://github.com/sveltejs/svelte/blob/main/packages/svelte/CHANGELOG.md)
- [Commits](https://github.com/sveltejs/svelte/commits/svelte@5.2.0/packages/svelte)

---
updated-dependencies:
- dependency-name: svelte
  dependency-type: direct:development
  update-type: version-update:semver-minor
...
```

- *(deps-dev)* Bump tailwindcss from 3.4.14 to 3.4.15 - ([56222a5](https://github.com/hexahigh/blalange.org/commit/56222a53e82d84e0d159a3c54c03c83d96322b2a))
```commit-body
Bumps [tailwindcss](https://github.com/tailwindlabs/tailwindcss) from 3.4.14 to 3.4.15.
- [Release notes](https://github.com/tailwindlabs/tailwindcss/releases)
- [Changelog](https://github.com/tailwindlabs/tailwindcss/blob/v3.4.15/CHANGELOG.md)
- [Commits](https://github.com/tailwindlabs/tailwindcss/compare/v3.4.14...v3.4.15)

---
updated-dependencies:
- dependency-name: tailwindcss
  dependency-type: direct:development
  update-type: version-update:semver-patch
...
```

- *(deps-dev)* Bump workbox-core from 7.1.0 to 7.3.0 - ([f42f625](https://github.com/hexahigh/blalange.org/commit/f42f62527c075063c5983c5abb8982d775b4dc0f))
```commit-body
Bumps [workbox-core](https://github.com/googlechrome/workbox) from 7.1.0 to 7.3.0.
- [Release notes](https://github.com/googlechrome/workbox/releases)
- [Commits](https://github.com/googlechrome/workbox/compare/v7.1.0...v7.3.0)

---
updated-dependencies:
- dependency-name: workbox-core
  dependency-type: direct:development
  update-type: version-update:semver-minor
...
```

- *(deps-dev)* Bump svelte-meta-tags from 3.1.4 to 4.0.4 - ([63d7c37](https://github.com/hexahigh/blalange.org/commit/63d7c374464e7813dda30f81ac4dc7b6c722acb2))
```commit-body
Bumps [svelte-meta-tags](https://github.com/oekazuma/svelte-meta-tags/tree/HEAD/packages/svelte-meta-tags) from 3.1.4 to 4.0.4.
- [Release notes](https://github.com/oekazuma/svelte-meta-tags/releases)
- [Changelog](https://github.com/oekazuma/svelte-meta-tags/blob/main/packages/svelte-meta-tags/CHANGELOG.md)
- [Commits](https://github.com/oekazuma/svelte-meta-tags/commits/svelte-meta-tags@4.0.4/packages/svelte-meta-tags)

---
updated-dependencies:
- dependency-name: svelte-meta-tags
  dependency-type: direct:development
  update-type: version-update:semver-major
...
```

- *(deps-dev)* Bump workbox-routing from 7.1.0 to 7.3.0 - ([58b34e0](https://github.com/hexahigh/blalange.org/commit/58b34e05731f5d5776131dff121041b625ef855a))
```commit-body
Bumps [workbox-routing](https://github.com/googlechrome/workbox) from 7.1.0 to 7.3.0.
- [Release notes](https://github.com/googlechrome/workbox/releases)
- [Commits](https://github.com/googlechrome/workbox/compare/v7.1.0...v7.3.0)

---
updated-dependencies:
- dependency-name: workbox-routing
  dependency-type: direct:development
  update-type: version-update:semver-minor
...
```

- Update translations with Fink 🐦 - ([2660096](https://github.com/hexahigh/blalange.org/commit/26600965aadf292e21e812cbdf3b787718e095a3))


- Update translations with Fink 🐦 - ([1b2733a](https://github.com/hexahigh/blalange.org/commit/1b2733a4778469be34b119409e97b68218df74e4))


- Update translations with Fink 🐦 - ([f330864](https://github.com/hexahigh/blalange.org/commit/f33086482cac70f07ccbf342340f0b8abafb926c))


- Update translations with Fink 🐦 - ([b7ca790](https://github.com/hexahigh/blalange.org/commit/b7ca790ed88434809a3c1b0c84473326e6d24201))


- Prepare for release - ([1c18676](https://github.com/hexahigh/blalange.org/commit/1c18676c6971e446332308046100bda266e24985))



### Other (unconventional)

- *(cliff)* Updated cliff config - ([fed0703](https://github.com/hexahigh/blalange.org/commit/fed070366b69453ed3ba59d8e3f5effbd513c0f4))


- Merge pull request #322 from hexahigh:dev

v4.0.3 - ([f7f0bd3](https://github.com/hexahigh/blalange.org/commit/f7f0bd3c6e53aa2b0aba525efb0efd5c9fbd4ad9))


- Merge pull request #314 from hexahigh/dependabot/npm_and_yarn/npm_and_yarn-eae48c0094

chore(deps): bump the npm_and_yarn group across 1 directory with 6 updates - ([5e504e6](https://github.com/hexahigh/blalange.org/commit/5e504e6adafc6d80e96895e4a2d0f64a910d6c02))


- Merge remote-tracking branch 'origin/main' into dev - ([d5e374e](https://github.com/hexahigh/blalange.org/commit/d5e374e61b6335df4b685377691394261459a3a4))


- Merge pull request #351 from hexahigh/dependabot/npm_and_yarn/dev/flowbite-svelte-0.47.0

chore(deps-dev): bump flowbite-svelte from 0.46.23 to 0.47.0 - ([43961d1](https://github.com/hexahigh/blalange.org/commit/43961d1d92308144b7fc7058ddfa2fe3d358b5a8))


- Merge pull request #350 from hexahigh/dependabot/npm_and_yarn/dev/types/node-22.7.6

chore(deps-dev): bump @types/node from 22.7.5 to 22.7.6 - ([5bba05f](https://github.com/hexahigh/blalange.org/commit/5bba05fc12fef82d8d357dddf3ec767e1d939103))


- Merge pull request #344 from hexahigh/dependabot/npm_and_yarn/dev/chart.js-4.4.5

chore(deps): bump chart.js from 4.4.4 to 4.4.5 - ([192572a](https://github.com/hexahigh/blalange.org/commit/192572ae0af4cba5fa8d3ebfd26f86e6414144eb))


- Merge pull request #348 from hexahigh/dependabot/npm_and_yarn/dev/tailwind-merge-2.5.4

chore(deps): bump tailwind-merge from 2.5.3 to 2.5.4 - ([89ab70c](https://github.com/hexahigh/blalange.org/commit/89ab70ca670bebd4a5abf69a6f9bc5e3d925b4e4))


- Merge pull request #345 from hexahigh/dependabot/npm_and_yarn/dev/playwright/test-1.48.1

chore(deps-dev): bump @playwright/test from 1.48.0 to 1.48.1 - ([2e950cf](https://github.com/hexahigh/blalange.org/commit/2e950cfa4a15804d3f017c63082a511e5cb42839))


- Merge pull request #352 from hexahigh/dependabot/npm_and_yarn/dev/sveltejs/adapter-node-5.2.8

chore(deps): bump @sveltejs/adapter-node from 5.2.6 to 5.2.8 - ([467e51d](https://github.com/hexahigh/blalange.org/commit/467e51d1829679872e63268128af64694c3a4cd4))


- Merge pull request #346 from hexahigh/dependabot/npm_and_yarn/dev/tailwindcss-3.4.14

chore(deps-dev): bump tailwindcss from 3.4.13 to 3.4.14 - ([12b25f0](https://github.com/hexahigh/blalange.org/commit/12b25f055ceea8c949072fd762890ccac9ff0426))


- Merge pull request #353 from hexahigh/dependabot/npm_and_yarn/dev/flowbite-svelte-0.47.1

chore(deps-dev): bump flowbite-svelte from 0.47.0 to 0.47.1 - ([548c6f6](https://github.com/hexahigh/blalange.org/commit/548c6f6ebe75d7fabff8373f5f7fed7bf3336f7b))


- Merge pull request #354 from hexahigh/dependabot/npm_and_yarn/dev/sveltejs/kit-2.7.2

chore(deps-dev): bump @sveltejs/kit from 2.7.0 to 2.7.2 - ([6712b74](https://github.com/hexahigh/blalange.org/commit/6712b747232701f2fb646303f3e4969aeb7ff3ce))


- Merge pull request #347 from hexahigh/dependabot/npm_and_yarn/dev/vite-5.4.9

chore(deps-dev): bump vite from 5.4.8 to 5.4.9 - ([24ba14f](https://github.com/hexahigh/blalange.org/commit/24ba14f10058fa2acb9add0e31d2a300d2d15154))


- Merge remote-tracking branch 'origin/translations' into dev - ([ab3e620](https://github.com/hexahigh/blalange.org/commit/ab3e6205c5e1e7917737e2c4db38070ce5955d99))


- Merge pull request #357 from hexahigh/dev

update translations from dev - ([40c85c2](https://github.com/hexahigh/blalange.org/commit/40c85c2b2787d5e5d498507efb992d8424f45502))


- Update translations - ([290ce97](https://github.com/hexahigh/blalange.org/commit/290ce9785999320e735e6cfb5c600d46c6d72753))


- Merge pull request #363 from hexahigh/translations-paraglide

Translations-paraglide - ([55ad299](https://github.com/hexahigh/blalange.org/commit/55ad299954e2c2840d4b722639f3cf03eb8c9db3))


- Improved support for deno - ([708b97f](https://github.com/hexahigh/blalange.org/commit/708b97fc3099f1c1562d3c50ef778b3f78d078d5))


- Merge branch 'dev' into translations - ([84923e7](https://github.com/hexahigh/blalange.org/commit/84923e7d2db64be3346f6fa51ee9c05c0618894e))


- Merge pull request #364 from hexahigh/translations

Added translations - ([f26962a](https://github.com/hexahigh/blalange.org/commit/f26962a29c27b91f9c8c9cd1070bfd851a52724e))


- Merge pull request #407 from hexahigh/dependabot/npm_and_yarn/dev/super-sitemap-1.0.3

chore(deps): bump super-sitemap from 0.15.1 to 1.0.3 - ([0d1eaa3](https://github.com/hexahigh/blalange.org/commit/0d1eaa3c3e446fc9649165536bf6b24c2a6894c3))


- Merge pull request #381 from hexahigh/dependabot/npm_and_yarn/dev/workbox-window-7.3.0

chore(deps-dev): bump workbox-window from 7.1.0 to 7.3.0 - ([5155b32](https://github.com/hexahigh/blalange.org/commit/5155b32a3d905a49e34cb6468c892e934e88d09b))


- Merge pull request #375 from hexahigh/dependabot/npm_and_yarn/dev/workbox-precaching-7.3.0

chore(deps-dev): bump workbox-precaching from 7.1.0 to 7.3.0 - ([ead42f8](https://github.com/hexahigh/blalange.org/commit/ead42f846bbf16b6c10713afe372098b7e1db14d))


- Merge pull request #413 from hexahigh/dependabot/npm_and_yarn/dev/sveltejs/kit-2.8.1

chore(deps-dev): bump @sveltejs/kit from 2.7.3 to 2.8.1 - ([da5b4d2](https://github.com/hexahigh/blalange.org/commit/da5b4d22c6abaca06169ab9d2dbde72edf1f5b4a))


- Merge pull request #410 from hexahigh/dependabot/npm_and_yarn/dev/dompurify-3.2.0

chore(deps): bump dompurify from 3.1.7 to 3.2.0 - ([d24e64d](https://github.com/hexahigh/blalange.org/commit/d24e64d068beda1553cacd7ac8c42a5aff082fe1))


- Merge pull request #384 from hexahigh/dependabot/npm_and_yarn/dev/workbox-expiration-7.3.0

chore(deps): bump workbox-expiration from 7.1.0 to 7.3.0 - ([44523f4](https://github.com/hexahigh/blalange.org/commit/44523f4df1bc164b0e428a8507ab8e6e288dd9fa))


- Merge pull request #377 from hexahigh/dependabot/npm_and_yarn/dev/workbox-cacheable-response-7.3.0

chore(deps-dev): bump workbox-cacheable-response from 7.1.0 to 7.3.0 - ([71fa309](https://github.com/hexahigh/blalange.org/commit/71fa3093a475cb3a45d0b40a3afb66cb0f06bbcb))


- Merge pull request #408 from hexahigh/dependabot/npm_and_yarn/dev/postcss-8.4.49

chore(deps-dev): bump postcss from 8.4.47 to 8.4.49 - ([aa3725b](https://github.com/hexahigh/blalange.org/commit/aa3725bd65b22737e34512b74948a61f1cfc04db))


- Merge pull request #395 from hexahigh/dependabot/npm_and_yarn/dev/types/node-22.9.0

chore(deps-dev): bump @types/node from 22.8.1 to 22.9.0 - ([cccaa54](https://github.com/hexahigh/blalange.org/commit/cccaa540f4a4c48ce7ea131a46f0e883e40ccaf8))


- Merge pull request #404 from hexahigh/dependabot/npm_and_yarn/dev/marked-15.0.0

chore(deps): bump marked from 14.1.3 to 15.0.0 - ([a571e68](https://github.com/hexahigh/blalange.org/commit/a571e680588ca40d55fd13ebc4ca7b8d14f036d6))


- Merge pull request #388 from hexahigh/dependabot/npm_and_yarn/dev/flowbite-svelte-icons-2.0.2

chore(deps): bump flowbite-svelte-icons from 1.6.2 to 2.0.2 - ([23b2ab1](https://github.com/hexahigh/blalange.org/commit/23b2ab1709101f4f49922c95c1d8429786667429))


- Merge pull request #378 from hexahigh/dependabot/npm_and_yarn/dev/workbox-strategies-7.3.0

chore(deps-dev): bump workbox-strategies from 7.1.0 to 7.3.0 - ([7f1edae](https://github.com/hexahigh/blalange.org/commit/7f1edae1c2dcc6b6d2986874347f594af6c71259))


- Merge pull request #386 from hexahigh/dependabot/npm_and_yarn/dev/floating-ui/dom-1.6.12

chore(deps): bump @floating-ui/dom from 1.6.11 to 1.6.12 - ([2a7eff7](https://github.com/hexahigh/blalange.org/commit/2a7eff7af5cabde737b689347c23dd36da555f8e))


- Merge pull request #414 from hexahigh/dependabot/npm_and_yarn/dev/svelte-5.2.0

chore(deps-dev): bump svelte from 5.1.3 to 5.2.0 - ([3ffc2c6](https://github.com/hexahigh/blalange.org/commit/3ffc2c60cf90ac32f95a498e7ac6b26d0f4531b2))


- Merge pull request #374 from hexahigh/dependabot/npm_and_yarn/dev/chart.js-4.4.6

chore(deps): bump chart.js from 4.4.5 to 4.4.6 - ([80a8081](https://github.com/hexahigh/blalange.org/commit/80a8081f52e5aecf571862b71f9cfd000ae4905c))


- Merge pull request #415 from hexahigh/dependabot/npm_and_yarn/dev/tailwindcss-3.4.15

chore(deps-dev): bump tailwindcss from 3.4.14 to 3.4.15 - ([e1b25e4](https://github.com/hexahigh/blalange.org/commit/e1b25e464bed58af99fe179f2530a910fc53575e))


- Merge pull request #382 from hexahigh/dependabot/npm_and_yarn/dev/directus/sdk-18.0.0

chore(deps): bump @directus/sdk from 17.0.2 to 18.0.0 - ([322ee4d](https://github.com/hexahigh/blalange.org/commit/322ee4d67318060da7316e2b76bff6f880f62066))


- Merge pull request #380 from hexahigh/dependabot/npm_and_yarn/dev/workbox-core-7.3.0

chore(deps-dev): bump workbox-core from 7.1.0 to 7.3.0 - ([e6e31ae](https://github.com/hexahigh/blalange.org/commit/e6e31ae8f9abcab5de0bf9b00cd5b8e8dac4d309))


- Merge pull request #379 from hexahigh/dependabot/npm_and_yarn/dev/workbox-build-7.3.0

chore(deps): bump workbox-build from 7.1.1 to 7.3.0 - ([e23ddd4](https://github.com/hexahigh/blalange.org/commit/e23ddd4093b1f2d65d6f69cc017f4afdea0b589d))


- Merge pull request #385 from hexahigh/dependabot/npm_and_yarn/dev/svelte-meta-tags-4.0.4

chore(deps-dev): bump svelte-meta-tags from 3.1.4 to 4.0.4 - ([7b50ae8](https://github.com/hexahigh/blalange.org/commit/7b50ae85b90556d64474c2bf04625a8f1af90210))


- Added "test:bench" script - ([a06574b](https://github.com/hexahigh/blalange.org/commit/a06574bac62196c5feffb929453baa4d8dc8ed02))


- Merge pull request #376 from hexahigh/dependabot/npm_and_yarn/dev/workbox-routing-7.3.0

chore(deps-dev): bump workbox-routing from 7.1.0 to 7.3.0 - ([48d1d27](https://github.com/hexahigh/blalange.org/commit/48d1d279ec351d80ea89d9ead32a8300ccf499fd))


### Commit Statistics

- 133 commit(s) contributed to the release.
- 52 day(s) passed between the first and last commit.
- 93 commit(s) parsed as conventional.
- 0 linked issue(s) detected in commits.
- 44 day(s) passed between releases.

## [4.0.4](https://github.com/hexahigh/blalange.org/compare/v4.0.3..v4.0.4) - 2024-10-16

### ⛰️  Features

- *(article)* Added WYSIWYG - ([cf2d80a](https://github.com/hexahigh/blalange.org/commit/cf2d80a012826cd6eea586cad2396ae687af214e))
```commit-body
Added support for WYSIWYG in articles
```

- *(article)* Switched from marked to remarked - ([1cc358d](https://github.com/hexahigh/blalange.org/commit/1cc358d37c677f9cb61e37f5b32e1dd7f721ccd0))
```commit-body
Switched from marked to remarked when rendering articles. Also added a few styles to the css to make it look better
```


### 🐛 Bug Fixes

- *(article)* Removed console log - ([898e0e8](https://github.com/hexahigh/blalange.org/commit/898e0e843b7f55c9351f006a9246009ae3749dd8))


- Build - ([7b0c4ae](https://github.com/hexahigh/blalange.org/commit/7b0c4ae6b1d54148ba468ad7946033d986e15bbb))
```commit-body
Fixed build failing due to wrong import
```


### 🚜 Refactor

- *(service worker)* Cleanup unused routes - ([c3bc91b](https://github.com/hexahigh/blalange.org/commit/c3bc91b75c4dd24085b9c2df666f3754488f335a))


- *(session)* Renamed getPermanentId to getPersistentId - ([145aff2](https://github.com/hexahigh/blalange.org/commit/145aff2ac3a11ecca3d28fcbef2006a53e79af93))



### ⚙️ Miscellaneous Tasks

- *(deps)* Bump axios from 1.7.2 to 1.7.7 - ([7dc3b7a](https://github.com/hexahigh/blalange.org/commit/7dc3b7a54d775324aa349b49350fdab96e9ec6e0))
```commit-body
Bumps [axios](https://github.com/axios/axios) from 1.7.2 to 1.7.7.
- [Release notes](https://github.com/axios/axios/releases)
- [Changelog](https://github.com/axios/axios/blob/v1.x/CHANGELOG.md)
- [Commits](https://github.com/axios/axios/compare/v1.7.2...v1.7.7)

---
updated-dependencies:
- dependency-name: axios
  dependency-type: direct:production
  update-type: version-update:semver-patch
...
```

- *(deps)* Bump tsparticles from 3.4.0 to 3.5.0 - ([ea956a4](https://github.com/hexahigh/blalange.org/commit/ea956a4579a7e1b77b3259010fdde282eee479dc))
```commit-body
Bumps [tsparticles](https://github.com/tsparticles/tsparticles/tree/HEAD/bundles/full) from 3.4.0 to 3.5.0.
- [Release notes](https://github.com/tsparticles/tsparticles/releases)
- [Changelog](https://github.com/tsparticles/tsparticles/blob/main/bundles/full/CHANGELOG.md)
- [Commits](https://github.com/tsparticles/tsparticles/commits/v3.5.0/bundles/full)

---
updated-dependencies:
- dependency-name: tsparticles
  dependency-type: direct:production
  update-type: version-update:semver-minor
...
```

- *(deps)* Bump marked from 13.0.1 to 14.1.2 - ([ddacbdb](https://github.com/hexahigh/blalange.org/commit/ddacbdb0397082a61084d94d16acddb4683acffe))
```commit-body
Bumps [marked](https://github.com/markedjs/marked) from 13.0.1 to 14.1.2.
- [Release notes](https://github.com/markedjs/marked/releases)
- [Changelog](https://github.com/markedjs/marked/blob/master/.releaserc.json)
- [Commits](https://github.com/markedjs/marked/compare/v13.0.1...v14.1.2)

---
updated-dependencies:
- dependency-name: marked
  dependency-type: direct:production
  update-type: version-update:semver-major
...
```

- *(deps)* Bump dompurify from 3.1.5 to 3.1.7 - ([b60c217](https://github.com/hexahigh/blalange.org/commit/b60c217ff42d6e7cb3124bb7e2c5fd0e0edf2104))
```commit-body
Bumps [dompurify](https://github.com/cure53/DOMPurify) from 3.1.5 to 3.1.7.
- [Release notes](https://github.com/cure53/DOMPurify/releases)
- [Commits](https://github.com/cure53/DOMPurify/compare/3.1.5...3.1.7)

---
updated-dependencies:
- dependency-name: dompurify
  dependency-type: direct:production
  update-type: version-update:semver-patch
...
```

- *(deps)* Bump @directus/sdk from 17.0.1 to 17.0.2 - ([b2e9aee](https://github.com/hexahigh/blalange.org/commit/b2e9aee773f52b2e62ebd2b693b476455e82fa9b))
```commit-body
Bumps [@directus/sdk](https://github.com/directus/directus/tree/HEAD/sdk) from 17.0.1 to 17.0.2.
- [Release notes](https://github.com/directus/directus/releases)
- [Commits](https://github.com/directus/directus/commits/HEAD/sdk)

---
updated-dependencies:
- dependency-name: "@directus/sdk"
  dependency-type: direct:production
  update-type: version-update:semver-patch
...
```

- *(deps)* Bump tailwind-merge from 2.5.2 to 2.5.3 - ([117575e](https://github.com/hexahigh/blalange.org/commit/117575eb7b86542ff0c3f5417d04f01006b2c31a))
```commit-body
Bumps [tailwind-merge](https://github.com/dcastil/tailwind-merge) from 2.5.2 to 2.5.3.
- [Release notes](https://github.com/dcastil/tailwind-merge/releases)
- [Commits](https://github.com/dcastil/tailwind-merge/compare/v2.5.2...v2.5.3)

---
updated-dependencies:
- dependency-name: tailwind-merge
  dependency-type: direct:production
  update-type: version-update:semver-patch
...
```

- *(deps)* Bump pocketbase from 0.21.3 to 0.21.5 - ([ac7bf35](https://github.com/hexahigh/blalange.org/commit/ac7bf35e071bcb379f58847e35b1af0dff8b0615))
```commit-body
Bumps [pocketbase](https://github.com/pocketbase/js-sdk) from 0.21.3 to 0.21.5.
- [Release notes](https://github.com/pocketbase/js-sdk/releases)
- [Changelog](https://github.com/pocketbase/js-sdk/blob/master/CHANGELOG.md)
- [Commits](https://github.com/pocketbase/js-sdk/compare/v0.21.3...v0.21.5)

---
updated-dependencies:
- dependency-name: pocketbase
  dependency-type: direct:production
  update-type: version-update:semver-patch
...
```

- *(deps)* Bump @sveltejs/adapter-cloudflare from 4.6.1 to 4.7.2 - ([6f1db7f](https://github.com/hexahigh/blalange.org/commit/6f1db7f113a48b745de9fdeab3d2062f64759b52))
```commit-body
Bumps [@sveltejs/adapter-cloudflare](https://github.com/sveltejs/kit/tree/HEAD/packages/adapter-cloudflare) from 4.6.1 to 4.7.2.
- [Release notes](https://github.com/sveltejs/kit/releases)
- [Changelog](https://github.com/sveltejs/kit/blob/main/packages/adapter-cloudflare/CHANGELOG.md)
- [Commits](https://github.com/sveltejs/kit/commits/@sveltejs/adapter-cloudflare@4.7.2/packages/adapter-cloudflare)

---
updated-dependencies:
- dependency-name: "@sveltejs/adapter-cloudflare"
  dependency-type: direct:production
  update-type: version-update:semver-minor
...
```

- *(deps)* Bump @fontsource/roboto-condensed from 5.0.16 to 5.1.0 - ([2579b9d](https://github.com/hexahigh/blalange.org/commit/2579b9d42d83d32accce153016cd0b7163866e9e))
```commit-body
Bumps [@fontsource/roboto-condensed](https://github.com/fontsource/font-files/tree/HEAD/fonts/google/roboto-condensed) from 5.0.16 to 5.1.0.
- [Changelog](https://github.com/fontsource/font-files/blob/main/CHANGELOG.md)
- [Commits](https://github.com/fontsource/font-files/commits/HEAD/fonts/google/roboto-condensed)

---
updated-dependencies:
- dependency-name: "@fontsource/roboto-condensed"
  dependency-type: direct:production
  update-type: version-update:semver-minor
...
```

- *(deps)* Bump @floating-ui/dom from 1.6.8 to 1.6.11 - ([44667c9](https://github.com/hexahigh/blalange.org/commit/44667c9acb472aae5f4093aef5a7e03ce677d0cf))
```commit-body
Bumps [@floating-ui/dom](https://github.com/floating-ui/floating-ui/tree/HEAD/packages/dom) from 1.6.8 to 1.6.11.
- [Release notes](https://github.com/floating-ui/floating-ui/releases)
- [Changelog](https://github.com/floating-ui/floating-ui/blob/master/packages/dom/CHANGELOG.md)
- [Commits](https://github.com/floating-ui/floating-ui/commits/@floating-ui/dom@1.6.11/packages/dom)

---
updated-dependencies:
- dependency-name: "@floating-ui/dom"
  dependency-type: direct:production
  update-type: version-update:semver-patch
...
```

- *(deps)* Bump flowbite-svelte-icons from 1.6.1 to 1.6.2 - ([ef4f672](https://github.com/hexahigh/blalange.org/commit/ef4f672dac6fef1d5a8ac25051fe9280f8601b83))
```commit-body
Bumps [flowbite-svelte-icons](https://github.com/themesberg/flowbite-svelte-icons) from 1.6.1 to 1.6.2.
- [Release notes](https://github.com/themesberg/flowbite-svelte-icons/releases)
- [Changelog](https://github.com/themesberg/flowbite-svelte-icons/blob/main/CHANGELOG.md)
- [Commits](https://github.com/themesberg/flowbite-svelte-icons/compare/v1.6.1...v1.6.2)

---
updated-dependencies:
- dependency-name: flowbite-svelte-icons
  dependency-type: direct:production
  update-type: version-update:semver-patch
...
```

- *(deps)* Bump @fontsource-variable/material-symbols-outlined - ([ec4b914](https://github.com/hexahigh/blalange.org/commit/ec4b914697506710679e8f54f9cd9a09af1650d4))
```commit-body
Bumps [@fontsource-variable/material-symbols-outlined](https://github.com/fontsource/font-files/tree/HEAD/fonts/variable/material-symbols-outlined) from 5.0.33 to 5.1.2.
- [Commits](https://github.com/fontsource/font-files/commits/HEAD/fonts/variable/material-symbols-outlined)

---
updated-dependencies:
- dependency-name: "@fontsource-variable/material-symbols-outlined"
  dependency-type: direct:production
  update-type: version-update:semver-minor
...
```

- *(deps-dev)* Bump @sveltejs/adapter-auto from 3.2.1 to 3.2.5 - ([d4aa5d4](https://github.com/hexahigh/blalange.org/commit/d4aa5d465725689d5a570cc682d9a082e2dc884c))
```commit-body
Bumps [@sveltejs/adapter-auto](https://github.com/sveltejs/kit/tree/HEAD/packages/adapter-auto) from 3.2.1 to 3.2.5.
- [Release notes](https://github.com/sveltejs/kit/releases)
- [Changelog](https://github.com/sveltejs/kit/blob/main/packages/adapter-auto/CHANGELOG.md)
- [Commits](https://github.com/sveltejs/kit/commits/@sveltejs/adapter-auto@3.2.5/packages/adapter-auto)

---
updated-dependencies:
- dependency-name: "@sveltejs/adapter-auto"
  dependency-type: direct:development
  update-type: version-update:semver-patch
...
```

- *(deps-dev)* Bump @sveltejs/enhanced-img from 0.3.0 to 0.3.8 - ([258f94c](https://github.com/hexahigh/blalange.org/commit/258f94c08bc8d7d9f01e79d3226ba7a536338a4c))
```commit-body
Bumps [@sveltejs/enhanced-img](https://github.com/sveltejs/kit/tree/HEAD/packages/image) from 0.3.0 to 0.3.8.
- [Release notes](https://github.com/sveltejs/kit/releases)
- [Commits](https://github.com/sveltejs/kit/commits/@sveltejs/enhanced-img@0.3.8/packages/image)

---
updated-dependencies:
- dependency-name: "@sveltejs/enhanced-img"
  dependency-type: direct:development
  update-type: version-update:semver-patch
...
```

- *(deps-dev)* Bump flowbite-svelte from 0.46.18 to 0.46.23 - ([633002b](https://github.com/hexahigh/blalange.org/commit/633002b9550061022e53379fc519a44d1f666585))
```commit-body
Bumps [flowbite-svelte](https://github.com/themesberg/flowbite-svelte) from 0.46.18 to 0.46.23.
- [Release notes](https://github.com/themesberg/flowbite-svelte/releases)
- [Changelog](https://github.com/themesberg/flowbite-svelte/blob/main/CHANGELOG.md)
- [Commits](https://github.com/themesberg/flowbite-svelte/compare/v0.46.18...v0.46.23)

---
updated-dependencies:
- dependency-name: flowbite-svelte
  dependency-type: direct:development
  update-type: version-update:semver-patch
...
```

- *(deps-dev)* Bump @playwright/test from 1.47.2 to 1.48.0 - ([c566d49](https://github.com/hexahigh/blalange.org/commit/c566d49ffb6be504c6fb591efe1e1223702c881a))
```commit-body
Bumps [@playwright/test](https://github.com/microsoft/playwright) from 1.47.2 to 1.48.0.
- [Release notes](https://github.com/microsoft/playwright/releases)
- [Commits](https://github.com/microsoft/playwright/compare/v1.47.2...v1.48.0)

---
updated-dependencies:
- dependency-name: "@playwright/test"
  dependency-type: direct:development
  update-type: version-update:semver-minor
...
```

- *(deps-dev)* Bump @vite-pwa/assets-generator from 0.2.4 to 0.2.6 - ([79faf42](https://github.com/hexahigh/blalange.org/commit/79faf42b9308edc5adac2eff17a40d755d6ef1cb))
```commit-body
Bumps [@vite-pwa/assets-generator](https://github.com/vite-pwa/assets-generator) from 0.2.4 to 0.2.6.
- [Release notes](https://github.com/vite-pwa/assets-generator/releases)
- [Commits](https://github.com/vite-pwa/assets-generator/compare/v0.2.4...v0.2.6)

---
updated-dependencies:
- dependency-name: "@vite-pwa/assets-generator"
  dependency-type: direct:development
  update-type: version-update:semver-patch
...
```

- *(deps-dev)* Bump typescript from 5.4.5 to 5.6.3 - ([8b0843f](https://github.com/hexahigh/blalange.org/commit/8b0843f1b75215495453f8b1d8db69af2a3dd4d1))
```commit-body
Bumps [typescript](https://github.com/microsoft/TypeScript) from 5.4.5 to 5.6.3.
- [Release notes](https://github.com/microsoft/TypeScript/releases)
- [Changelog](https://github.com/microsoft/TypeScript/blob/main/azure-pipelines.release.yml)
- [Commits](https://github.com/microsoft/TypeScript/compare/v5.4.5...v5.6.3)

---
updated-dependencies:
- dependency-name: typescript
  dependency-type: direct:development
  update-type: version-update:semver-minor
...
```

- *(deps-dev)* Bump flowbite from 2.5.1 to 2.5.2 - ([3ba7e16](https://github.com/hexahigh/blalange.org/commit/3ba7e16838fb661ffc04215f9e56c23ee3b2798d))
```commit-body
Bumps [flowbite](https://github.com/themesberg/flowbite) from 2.5.1 to 2.5.2.
- [Release notes](https://github.com/themesberg/flowbite/releases)
- [Commits](https://github.com/themesberg/flowbite/compare/v2.5.1...v2.5.2)

---
updated-dependencies:
- dependency-name: flowbite
  dependency-type: direct:development
  update-type: version-update:semver-patch
...
```

- *(deps-dev)* Bump svelte from 4.2.18 to 4.2.19 - ([d12169e](https://github.com/hexahigh/blalange.org/commit/d12169e0cfe2f04ee8e07c95651ef531d50260e1))
```commit-body
Bumps [svelte](https://github.com/sveltejs/svelte/tree/HEAD/packages/svelte) from 4.2.18 to 4.2.19.
- [Release notes](https://github.com/sveltejs/svelte/releases)
- [Changelog](https://github.com/sveltejs/svelte/blob/svelte@4.2.19/packages/svelte/CHANGELOG.md)
- [Commits](https://github.com/sveltejs/svelte/commits/svelte@4.2.19/packages/svelte)

---
updated-dependencies:
- dependency-name: svelte
  dependency-type: direct:development
  update-type: version-update:semver-patch
...
```

- Prepare for release - ([1146b72](https://github.com/hexahigh/blalange.org/commit/1146b728304b8f73f6064237126fb35492ec7abb))



### Other (unconventional)

- *(cliff)* Changed config - ([51e0213](https://github.com/hexahigh/blalange.org/commit/51e02132c4fb2468ea86728e5cbf7139c91074cc))


- *(cliff)* Changed config, again - ([c721e17](https://github.com/hexahigh/blalange.org/commit/c721e17ec72004c9a4b21a98ac4f5001a1afa076))


- *(cliff)* Updated cliff config - ([a0fb4bc](https://github.com/hexahigh/blalange.org/commit/a0fb4bcc50f19b28a73286ebb1ec7b4b35ca768e))


- *(dependabot)* Removed PR limit - ([b6ee02e](https://github.com/hexahigh/blalange.org/commit/b6ee02ec85b4cf668e378bca5a172921b10bf13d))
```commit-body
Removed the open pull request limit from dependabot
```

- Merge pull request #316 from hexahigh:dev

v4.0.2 - ([8ef80bd](https://github.com/hexahigh/blalange.org/commit/8ef80bd99235dea04693e5b83fbb69a3195e1166))


- Merge remote-tracking branch 'origin/main' into dev - ([d9ce9a8](https://github.com/hexahigh/blalange.org/commit/d9ce9a83818e8fd2fd151e570cf51e1608826ee1))


- Merge pull request #318 from hexahigh/dependabot/npm_and_yarn/dev/axios-1.7.7

chore(deps): bump axios from 1.7.2 to 1.7.7 - ([e6fd730](https://github.com/hexahigh/blalange.org/commit/e6fd73051606681fa882cef22b1340bf1d670908))


- Merge pull request #317 from hexahigh/dependabot/npm_and_yarn/dev/tsparticles-3.5.0

chore(deps): bump tsparticles from 3.4.0 to 3.5.0 - ([7e9a784](https://github.com/hexahigh/blalange.org/commit/7e9a7846da217464d057907e70e05172649ce026))


- Merge pull request #319 from hexahigh/dependabot/npm_and_yarn/dev/marked-14.1.2

chore(deps): bump marked from 13.0.1 to 14.1.2 - ([c2547cf](https://github.com/hexahigh/blalange.org/commit/c2547cfd533d10cc12eae60b97a92228f063ad4b))


- Merge pull request #320 from hexahigh/dependabot/npm_and_yarn/dev/sveltejs/adapter-auto-3.2.5

chore(deps-dev): bump @sveltejs/adapter-auto from 3.2.1 to 3.2.5 - ([3573ee3](https://github.com/hexahigh/blalange.org/commit/3573ee3722210b118151b7bf0884bc5f96781692))


- Merge pull request #321 from hexahigh/dependabot/npm_and_yarn/dev/dompurify-3.1.7

chore(deps): bump dompurify from 3.1.5 to 3.1.7 - ([a6cf67c](https://github.com/hexahigh/blalange.org/commit/a6cf67c27c6f431fde35726209eb9a6e143f4ee4))


- Merge pull request #323 from hexahigh/dependabot/npm_and_yarn/dev/sveltejs/enhanced-img-0.3.8

chore(deps-dev): bump @sveltejs/enhanced-img from 0.3.0 to 0.3.8 - ([666f5e0](https://github.com/hexahigh/blalange.org/commit/666f5e0fd0729aa541600cf7146cbf6bb2cec4a2))


- Merge pull request #327 from hexahigh/dependabot/npm_and_yarn/dev/flowbite-svelte-0.46.23

chore(deps-dev): bump flowbite-svelte from 0.46.18 to 0.46.23 - ([ee9e425](https://github.com/hexahigh/blalange.org/commit/ee9e4253a762727a82abdcfb7b962943dacef2d0))


- Merge pull request #326 from hexahigh/dependabot/npm_and_yarn/dev/playwright/test-1.48.0

chore(deps-dev): bump @playwright/test from 1.47.2 to 1.48.0 - ([a1b7463](https://github.com/hexahigh/blalange.org/commit/a1b74630d929724b558dd211bbfef30b23c45cb5))


- Merge pull request #325 from hexahigh/dependabot/npm_and_yarn/dev/directus/sdk-17.0.2

chore(deps): bump @directus/sdk from 17.0.1 to 17.0.2 - ([8e996d5](https://github.com/hexahigh/blalange.org/commit/8e996d595e1f72cd4198159d9d63219a2004bd31))


- Merge pull request #324 from hexahigh/dependabot/npm_and_yarn/dev/tailwind-merge-2.5.3

chore(deps): bump tailwind-merge from 2.5.2 to 2.5.3 - ([c2f8197](https://github.com/hexahigh/blalange.org/commit/c2f81973621f5a1e70705d376b2ceb3940f519d9))


- Merge pull request #332 from hexahigh/dependabot/npm_and_yarn/dev/vite-pwa/assets-generator-0.2.6

chore(deps-dev): bump @vite-pwa/assets-generator from 0.2.4 to 0.2.6 - ([a31d990](https://github.com/hexahigh/blalange.org/commit/a31d990f8eee78a103ebc0df35f204372c81cf04))


- Merge branch 'dev' of https://github.com/hexahigh/blalange.org into dev - ([d644c6f](https://github.com/hexahigh/blalange.org/commit/d644c6fe3e401785f21961a46c41ef2bac3264db))


- Merge pull request #331 from hexahigh/dependabot/npm_and_yarn/dev/pocketbase-0.21.5

chore(deps): bump pocketbase from 0.21.3 to 0.21.5 - ([a121b9a](https://github.com/hexahigh/blalange.org/commit/a121b9af208d0a1c11f67b459d7595a67890c70b))


- Merge pull request #329 from hexahigh/dependabot/npm_and_yarn/dev/typescript-5.6.3

chore(deps-dev): bump typescript from 5.4.5 to 5.6.3 - ([c3f7f66](https://github.com/hexahigh/blalange.org/commit/c3f7f66d1b25bfcdeee0c864670fe058738a1525))


- Merge pull request #330 from hexahigh/dependabot/npm_and_yarn/dev/sveltejs/adapter-cloudflare-4.7.2

chore(deps): bump @sveltejs/adapter-cloudflare from 4.6.1 to 4.7.2 - ([a444f27](https://github.com/hexahigh/blalange.org/commit/a444f270cef28e267e8e53e605dcd104ba57431c))


- Merge pull request #328 from hexahigh/dependabot/npm_and_yarn/dev/fontsource/roboto-condensed-5.1.0

chore(deps): bump @fontsource/roboto-condensed from 5.0.16 to 5.1.0 - ([b9d75a6](https://github.com/hexahigh/blalange.org/commit/b9d75a6b0bf9d10c19aeb730da146ad569146bcf))


- Merge pull request #337 from hexahigh/dependabot/npm_and_yarn/dev/floating-ui/dom-1.6.11

chore(deps): bump @floating-ui/dom from 1.6.8 to 1.6.11 - ([90780b2](https://github.com/hexahigh/blalange.org/commit/90780b2d406aa0072c1954edbb3067c1bcefe29b))


- Merge pull request #336 from hexahigh/dependabot/npm_and_yarn/dev/flowbite-svelte-icons-1.6.2

chore(deps): bump flowbite-svelte-icons from 1.6.1 to 1.6.2 - ([690ef72](https://github.com/hexahigh/blalange.org/commit/690ef72e9c6950b2f8719eba17f66fd5c8019d0a))


- Merge pull request #335 from hexahigh/dependabot/npm_and_yarn/dev/flowbite-2.5.2

chore(deps-dev): bump flowbite from 2.5.1 to 2.5.2 - ([ec04f65](https://github.com/hexahigh/blalange.org/commit/ec04f65f9de3e68ae663c37210becd4b9739e837))


- Merge pull request #333 from hexahigh/dependabot/npm_and_yarn/dev/fontsource-variable/material-symbols-outlined-5.1.2

chore(deps): bump @fontsource-variable/material-symbols-outlined from 5.0.33 to 5.1.2 - ([dcd8e83](https://github.com/hexahigh/blalange.org/commit/dcd8e8317ab330d3ac5c8cda51b095920d7454cf))


- Merge pull request #334 from hexahigh/dependabot/npm_and_yarn/dev/svelte-4.2.19

chore(deps-dev): bump svelte from 4.2.18 to 4.2.19 - ([29e5fac](https://github.com/hexahigh/blalange.org/commit/29e5facee5847494601fd13b7a2a1f91b906738d))


- Merge branch 'dev' of https://github.com/hexahigh/blalange.org into dev - ([787f850](https://github.com/hexahigh/blalange.org/commit/787f85094d81c82aeebea0d7a34dba7f82230af2))


- Regen lockfile - ([0d73947](https://github.com/hexahigh/blalange.org/commit/0d73947b6bed4170bbae9d54fbcd42c2a7c7cdb2))


### Commit Statistics

- 56 commit(s) contributed to the release.
- 8 day(s) passed between the first and last commit.
- 31 commit(s) parsed as conventional.
- 0 linked issue(s) detected in commits.
- 7 day(s) passed between releases.

## [4.0.3](https://github.com/hexahigh/blalange.org/compare/v4.0.1..v4.0.3) - 2024-10-09

### 🐛 Bug Fixes

- *(article list)* Search - ([e1cc088](https://github.com/hexahigh/blalange.org/commit/e1cc0880e75ea1514058abdc60bc4c80661ede59))
```commit-body
Fix search not working properly
```

- *(chat)* Infinite loop - ([c0d3ee4](https://github.com/hexahigh/blalange.org/commit/c0d3ee40ccf64964e7ccf1428dd097bb9901a7f0))
```commit-body
Fixed an infinite loop in the chat which would run if any error occured during message processing
```

- *(chat)* Error handling - ([76dae15](https://github.com/hexahigh/blalange.org/commit/76dae15337ffc99933c7031f3cb463a54e92a126))
```commit-body
So that's why the bug wasn't found during testing
```


### 🚜 Refactor

- *(analytics)* Updated id system - ([024af20](https://github.com/hexahigh/blalange.org/commit/024af20f5a423dcf9370e856a3e61b8be2dc6c25))
```commit-body
SessionId now uses sessionStorage. Added a new function for creating a permanent id that uses localstorage
```


### ⚙️ Miscellaneous Tasks

- Prepare for release - ([f2e6df1](https://github.com/hexahigh/blalange.org/commit/f2e6df142e6ee47e9545da04c5ca74492358f5a1))



### Other (unconventional)

- Added adsense - ([5443ed3](https://github.com/hexahigh/blalange.org/commit/5443ed3527557243390c6bd32656847e56425828))


- Bump version - ([917a97c](https://github.com/hexahigh/blalange.org/commit/917a97cfe6258a703af5821e344507f2e88eb2d7))


- Merge pull request #313 from hexahigh/dev

4.0.0 - ([ae8768a](https://github.com/hexahigh/blalange.org/commit/ae8768a6e90e6d3509804dc06aafd450b9959376))


- Merge pull request #315 from hexahigh:dev

v4.0.1 - ([e131a07](https://github.com/hexahigh/blalange.org/commit/e131a07daaf6f1bf85f14a2cbd4dc1042bc373eb))


- Merge remote-tracking branch 'origin/main' into dev - ([f35d512](https://github.com/hexahigh/blalange.org/commit/f35d512242bd07e0fd168144ed16be753a574f2c))


### Commit Statistics

- 10 commit(s) contributed to the release.
- 1 day(s) passed between the first and last commit.
- 5 commit(s) parsed as conventional.
- 0 linked issue(s) detected in commits.
- 1 day(s) passed between releases.

## [4.0.1](https://github.com/hexahigh/blalange.org/compare/v4.0.0..v4.0.1) - 2024-10-08

### 🐛 Bug Fixes

- *(chat)* Browser crash - ([2362e21](https://github.com/hexahigh/blalange.org/commit/2362e2167b9eb8ddfc376a49966e8084f9624390))
```commit-body
Fixed a browser crash due to the badges
```


### ⚙️ Miscellaneous Tasks

- Added vscode extensions - ([a9c9e79](https://github.com/hexahigh/blalange.org/commit/a9c9e792bd976cdced3d828b2f118d3a8b39d8ff))
```commit-body
Added recommended vscode extensions
```


### Other (unconventional)

- Update changelog - ([f711218](https://github.com/hexahigh/blalange.org/commit/f7112189592ddb5005c421ceef7990649053c76a))


- Bump version - ([3bc8f15](https://github.com/hexahigh/blalange.org/commit/3bc8f15d2c5ff074fe832daa164d5bbe03d41508))


- Update changelog - ([6fc4427](https://github.com/hexahigh/blalange.org/commit/6fc4427c58b68b63d6d221e13a3d96c84f5dffa3))


### Commit Statistics

- 5 commit(s) contributed to the release.
- 0 day(s) passed between the first and last commit.
- 2 commit(s) parsed as conventional.
- 0 linked issue(s) detected in commits.

## [4.0.0](https://github.com/hexahigh/blalange.org/compare/v1.0.0..v4.0.0) - 2024-10-08

### 🐛 Bug Fixes

- Fix - ([8731fb7](https://github.com/hexahigh/blalange.org/commit/8731fb7a470b150bd43ac93c79732e1c89d32b0b))


- Fixed various layout issues - ([5c15469](https://github.com/hexahigh/blalange.org/commit/5c15469004e6ec65ad60e736d35f302cc7153cda))


- Fix build issues - ([09db90c](https://github.com/hexahigh/blalange.org/commit/09db90c5e51291788fb3711ce25c4b6959e6370a))


- Fix - ([6b410ed](https://github.com/hexahigh/blalange.org/commit/6b410ede89973b59fab2b763420eabdcd67091b7))


- Fix bg - ([30973cb](https://github.com/hexahigh/blalange.org/commit/30973cb22a7908e7cecb95f0cb22958a69abf378))


- Fix progressbar in analytics - ([b9a967c](https://github.com/hexahigh/blalange.org/commit/b9a967c4bf52543e00e4a23cdecf7c1fd86de895))


- Fix navbar. yippi - ([4e5e2cb](https://github.com/hexahigh/blalange.org/commit/4e5e2cb050b790ce021bf4c7c52a0679b711f539))


- Fix devmode - ([53aea02](https://github.com/hexahigh/blalange.org/commit/53aea02168f5961b8292c08e991f99d1e1b33e4d))


- Fixed dev mode not being enabled - ([c92f631](https://github.com/hexahigh/blalange.org/commit/c92f631d59a9be0d13e9ec5fd53cefc36b06fb5d))


- Fix analytics - ([ea5b25b](https://github.com/hexahigh/blalange.org/commit/ea5b25b6a2bb7f4ecf135196a51b33f17a2ff13e))


- Fix - ([cacfa03](https://github.com/hexahigh/blalange.org/commit/cacfa03db39c6c25badb04a5cc47e22492f8a96a))


- Fix httping - ([de31ebb](https://github.com/hexahigh/blalange.org/commit/de31ebbf94e1da85f5880bdc4419e1b5144bb115))


- Fix httping - ([acd8dba](https://github.com/hexahigh/blalange.org/commit/acd8dbace097fa03fbe3956848278883b80217fd))


- Fixed not being able to select text in the terminal - ([6b4f0dc](https://github.com/hexahigh/blalange.org/commit/6b4f0dcdd8e423faffbf1bc4b570a03f76e07026))


- Fix exec url - ([4049817](https://github.com/hexahigh/blalange.org/commit/404981780a759cbc90088a7b8b1fa715ef8ae1a4))


- Fix? - ([4460e37](https://github.com/hexahigh/blalange.org/commit/4460e377eab94877df1061095ab0c1369aa87f3a))


- Fix oxipng - ([5dd606d](https://github.com/hexahigh/blalange.org/commit/5dd606d976a8dcaa9c76fb66f062aa4bd4f0be75))


- Fixed audio not being synced on slower connections and made the video format more flexible - ([9e6a0e9](https://github.com/hexahigh/blalange.org/commit/9e6a0e96e1df327eeb7244fe720a5e2f1e6bad0c))


- Fix - ([9a7f4de](https://github.com/hexahigh/blalange.org/commit/9a7f4deeae15f8cb5603637d3ec5165236bbe31b))


- Fix? - ([c1e1ba9](https://github.com/hexahigh/blalange.org/commit/c1e1ba9ffaa1c1c459c435990bf5d439ca6da2f2))


- Fixed autoscrolling in chat - ([7169b2a](https://github.com/hexahigh/blalange.org/commit/7169b2a3ed57dfb31a6b3eb24b2821a256c9aba5))


- Fixed - ([19ebc4d](https://github.com/hexahigh/blalange.org/commit/19ebc4d6d7a65a57aaab67204f787da6903cf0be))


- Fix - ([0a4d8b3](https://github.com/hexahigh/blalange.org/commit/0a4d8b3f1edd9c403d2765e47a7947c72d1bd98d))


- Fix build - ([7f7191c](https://github.com/hexahigh/blalange.org/commit/7f7191cd9bf3176b0e88256852d72fa2c1625a5d))


- Fix, again - ([32938b7](https://github.com/hexahigh/blalange.org/commit/32938b7797c0bbda745030502e4edb94355f9129))


- Fix error when clicking while input is disabled - ([891acee](https://github.com/hexahigh/blalange.org/commit/891aceed2703d2331eabd1558b7f4d006acf0324))


- Fix defaultOptions not being set in video.ts - ([afaf517](https://github.com/hexahigh/blalange.org/commit/afaf517e02355fd0e52d8dfc034a71bf0d69417c))


- Fix donation buttons on mobile - ([4fb19f2](https://github.com/hexahigh/blalange.org/commit/4fb19f2a362f62ca7450dce8ad5d83d81e0da8f2))


- Fix broken author names in rss feed - ([8494020](https://github.com/hexahigh/blalange.org/commit/8494020f918f7e143c774bb16569f44c97d1721e))


- Fix webring - ([9e22bc5](https://github.com/hexahigh/blalange.org/commit/9e22bc5b5eaa06338ccbda4cdb40ddd9495332b7))


- Fix chat not getting rendered correctly - ([8d6f477](https://github.com/hexahigh/blalange.org/commit/8d6f477aacff4afc1c90ef29b71e8624f867569a))


- Fixed some issues in the privacy policy - ([47ad56d](https://github.com/hexahigh/blalange.org/commit/47ad56dd145b3ddd5775f2d1249ab735cc211566))


- Fix font issues - ([1286045](https://github.com/hexahigh/blalange.org/commit/1286045eb70b8828cbc13c9d025a21ed035cabc2))


- Fixed small issue in changelog - ([7088fa3](https://github.com/hexahigh/blalange.org/commit/7088fa3b15f01cf8587f421f34ef0e8e2f190873))



### ⚡ Performance

- Perfect - ([d513b23](https://github.com/hexahigh/blalange.org/commit/d513b23b60a53feb183f6cd6eb5d0e92abe98246))



### 🧪 Testing

- Test catppuccin - ([9c756cb](https://github.com/hexahigh/blalange.org/commit/9c756cb1209ac99b199eca628819e73b3af19396))


- Test betterimg - ([fc01103](https://github.com/hexahigh/blalange.org/commit/fc0110308d9bff499ada4158cfb099d1302db7ed))


- Test fancy masonry - ([6f819ea](https://github.com/hexahigh/blalange.org/commit/6f819ea83f71b0eaaa62ac92dc48e86168db693b))



### ⚙️ Miscellaneous Tasks

- *(changelog)* Prepare for release - ([f53d087](https://github.com/hexahigh/blalange.org/commit/f53d087d818ae25ca4f392c7f88a26b6460d2f8e))


- Added cliff - ([9eb3e09](https://github.com/hexahigh/blalange.org/commit/9eb3e099af713a8668c9c8ccbf5ba511255d3a14))
```commit-body
Added cliff for generating changelogs
```


### Other (unconventional)

- Add commit hash to version num - ([62c0a0b](https://github.com/hexahigh/blalange.org/commit/62c0a0b75519f594eb6127395bf4f48f37543e17))


- Switched to npm version of confetti - ([ac8e0ef](https://github.com/hexahigh/blalange.org/commit/ac8e0ef9eae540df03e51f4d87bb4d8e66417b29))


- Merge pull request #81 from hexahigh:dev

Dev - ([4bfaa5e](https://github.com/hexahigh/blalange.org/commit/4bfaa5e243aa141e816483059611844d2cd8606a))


- Merge remote-tracking branch 'origin/main' into dev - ([26446c6](https://github.com/hexahigh/blalange.org/commit/26446c6930d5a00d9af163e074327e1052473815))


- No more confetti - ([b3fd9af](https://github.com/hexahigh/blalange.org/commit/b3fd9af7298edc8326ef83a30a9b4d459e2035b5))


- Merge pull request #82 from hexahigh:dev

new navbar and optimized confetti - ([197a7a9](https://github.com/hexahigh/blalange.org/commit/197a7a9b31f1674fa646a4284c0b6c23cd2b6d79))


- Merge remote-tracking branch 'origin/main' into dev - ([8a66698](https://github.com/hexahigh/blalange.org/commit/8a666988114eae4e4e1c118fae71af1edf021508))


- Revert "no more confetti"

This reverts commit b3fd9af7298edc8326ef83a30a9b4d459e2035b5. - ([3c77cfc](https://github.com/hexahigh/blalange.org/commit/3c77cfc0f1508328217545d88408597013bd13d6))


- Merge pull request #83 from hexahigh:dev

no more confetti - ([7d86f35](https://github.com/hexahigh/blalange.org/commit/7d86f358e422f3182190711fa2685042dbb804c1))


- Merge remote-tracking branch 'origin/main' into dev - ([5c53e1b](https://github.com/hexahigh/blalange.org/commit/5c53e1bf6f6f49dde68c38179168cda6ce2f6a12))


- Merge pull request #84 from hexahigh:dev

fix confetti chaos - ([97c8be7](https://github.com/hexahigh/blalange.org/commit/97c8be718641c657ae36bff9459e942149789a09))


- Merge remote-tracking branch 'origin/main' into dev - ([8c7d24f](https://github.com/hexahigh/blalange.org/commit/8c7d24f03533dddab9ac2b745d8b30e2438b41fe))


- Update dependabot - ([2d4de77](https://github.com/hexahigh/blalange.org/commit/2d4de779c87ef85a9f462cd48aedfabe5fbde44d))


- Merge pull request #85 from hexahigh:dev

fixed various layout issues - ([4642704](https://github.com/hexahigh/blalange.org/commit/4642704acce9bdf90f1d82f8346cd6cdbbb081b8))


- Merge remote-tracking branch 'origin/main' into dev - ([8e20ff2](https://github.com/hexahigh/blalange.org/commit/8e20ff23c5cedd2713326d7873b658fa20ecf2af))


- Seo - ([fabeab9](https://github.com/hexahigh/blalange.org/commit/fabeab915fa308b79720d2db71c1ab3e53de0bfb))


- Bump postcss from 8.4.31 to 8.4.36

Bumps [postcss](https://github.com/postcss/postcss) from 8.4.31 to 8.4.36.
- [Release notes](https://github.com/postcss/postcss/releases)
- [Changelog](https://github.com/postcss/postcss/blob/main/CHANGELOG.md)
- [Commits](https://github.com/postcss/postcss/compare/8.4.31...8.4.36)

---
updated-dependencies:
- dependency-name: postcss
  dependency-type: direct:development
  update-type: version-update:semver-patch
...

Signed-off-by: dependabot[bot] <support@github.com> - ([68888cc](https://github.com/hexahigh/blalange.org/commit/68888ccf9667fb23676de4a2042d009238ec108a))


- Merge pull request #89 from hexahigh/dependabot/npm_and_yarn/postcss-8.4.36

Bump postcss from 8.4.31 to 8.4.36 - ([1f0dd5e](https://github.com/hexahigh/blalange.org/commit/1f0dd5ef855016963a068d28a5097476c2e8d29e))


- Bump pocketbase from 0.20.1 to 0.21.1

Bumps [pocketbase](https://github.com/pocketbase/js-sdk) from 0.20.1 to 0.21.1.
- [Release notes](https://github.com/pocketbase/js-sdk/releases)
- [Changelog](https://github.com/pocketbase/js-sdk/blob/master/CHANGELOG.md)
- [Commits](https://github.com/pocketbase/js-sdk/compare/v0.20.1...v0.21.1)

---
updated-dependencies:
- dependency-name: pocketbase
  dependency-type: direct:production
  update-type: version-update:semver-minor
...

Signed-off-by: dependabot[bot] <support@github.com> - ([2ba8a18](https://github.com/hexahigh/blalange.org/commit/2ba8a187139e3e4f539423098f2ef4fa399ec6b7))


- Merge pull request #86 from hexahigh/dependabot/npm_and_yarn/pocketbase-0.21.1

Bump pocketbase from 0.20.1 to 0.21.1 - ([11f3a90](https://github.com/hexahigh/blalange.org/commit/11f3a90bdfcfb76f12cdecf592394de725f76a05))


- Merge branch 'dev' of https://github.com/hexahigh/kukfest into dev - ([e34abf7](https://github.com/hexahigh/blalange.org/commit/e34abf7d36f9abe7f9f23f5dc381d6b65c410048))


- Merge pull request #90 from hexahigh:dev

update dependabot - ([5734466](https://github.com/hexahigh/blalange.org/commit/573446645a67679c92155030d77fc1e51666fdd6))


- Merge remote-tracking branch 'origin/main' into dev - ([9138b77](https://github.com/hexahigh/blalange.org/commit/9138b778acd03004204da3ab2cc23795613cecc3))


- Bump flowbite-svelte-icons from 0.4.5 to 1.4.5

Bumps [flowbite-svelte-icons](https://github.com/themesberg/flowbite-svelte-icons) from 0.4.5 to 1.4.5.
- [Release notes](https://github.com/themesberg/flowbite-svelte-icons/releases)
- [Changelog](https://github.com/themesberg/flowbite-svelte-icons/blob/main/CHANGELOG.md)
- [Commits](https://github.com/themesberg/flowbite-svelte-icons/compare/v0.4.5...v1.4.5)

---
updated-dependencies:
- dependency-name: flowbite-svelte-icons
  dependency-type: direct:production
  update-type: version-update:semver-major
...

Signed-off-by: dependabot[bot] <support@github.com> - ([16e45fe](https://github.com/hexahigh/blalange.org/commit/16e45fe91e546919beda9c75f5421674e114c764))


- Merge pull request #93 from hexahigh/dependabot/npm_and_yarn/dev/flowbite-svelte-icons-1.4.5

Bump flowbite-svelte-icons from 0.4.5 to 1.4.5 - ([cbfeb2f](https://github.com/hexahigh/blalange.org/commit/cbfeb2f8732f9a3b193092ee3e25bb2864c46a38))


- Bump tailwindcss from 3.3.5 to 3.4.1

Bumps [tailwindcss](https://github.com/tailwindlabs/tailwindcss) from 3.3.5 to 3.4.1.
- [Release notes](https://github.com/tailwindlabs/tailwindcss/releases)
- [Changelog](https://github.com/tailwindlabs/tailwindcss/blob/master/CHANGELOG.md)
- [Commits](https://github.com/tailwindlabs/tailwindcss/compare/v3.3.5...v3.4.1)

---
updated-dependencies:
- dependency-name: tailwindcss
  dependency-type: direct:development
  update-type: version-update:semver-minor
...

Signed-off-by: dependabot[bot] <support@github.com> - ([d2a95f8](https://github.com/hexahigh/blalange.org/commit/d2a95f8e5aaf2b76836b2ec6aae99a5c81e515a2))


- Merge pull request #52 from hexahigh/dependabot/npm_and_yarn/tailwindcss-3.4.1

Bump tailwindcss from 3.3.5 to 3.4.1 - ([9d60dcc](https://github.com/hexahigh/blalange.org/commit/9d60dccfa6eb18b4d60dfab0e26ebddfda2a2b01))


- Bump @vite-pwa/sveltekit from 0.3.0 to 0.4.0

Bumps [@vite-pwa/sveltekit](https://github.com/vite-pwa/sveltekit) from 0.3.0 to 0.4.0.
- [Release notes](https://github.com/vite-pwa/sveltekit/releases)
- [Commits](https://github.com/vite-pwa/sveltekit/compare/v0.3.0...v0.4.0)

---
updated-dependencies:
- dependency-name: "@vite-pwa/sveltekit"
  dependency-type: direct:development
  update-type: version-update:semver-minor
...

Signed-off-by: dependabot[bot] <support@github.com> - ([c1a291d](https://github.com/hexahigh/blalange.org/commit/c1a291d74d541e55ed7bbdd0afdb5bc2730b2064))


- Merge pull request #91 from hexahigh/dependabot/npm_and_yarn/dev/vite-pwa/sveltekit-0.4.0

Bump @vite-pwa/sveltekit from 0.3.0 to 0.4.0 - ([4fcb1c9](https://github.com/hexahigh/blalange.org/commit/4fcb1c963400425009d8a03d3e5fbafc8b730c5e))


- Removed patreon - ([8ccba54](https://github.com/hexahigh/blalange.org/commit/8ccba541c1f3974a5ba07e7277e1a7e3af9b2cfd))


- Bump tsparticles from 3.2.2 to 3.3.0

Bumps [tsparticles](https://github.com/tsparticles/tsparticles/tree/HEAD/bundles/full) from 3.2.2 to 3.3.0.
- [Release notes](https://github.com/tsparticles/tsparticles/releases)
- [Changelog](https://github.com/tsparticles/tsparticles/blob/main/bundles/full/CHANGELOG.md)
- [Commits](https://github.com/tsparticles/tsparticles/commits/v3.3.0/bundles/full)

---
updated-dependencies:
- dependency-name: tsparticles
  dependency-type: direct:production
  update-type: version-update:semver-minor
...

Signed-off-by: dependabot[bot] <support@github.com> - ([c4c45da](https://github.com/hexahigh/blalange.org/commit/c4c45da43fa3af8e6e2ad0d570ab7651a5e9af0a))


- Merge pull request #88 from hexahigh/dependabot/npm_and_yarn/tsparticles-3.3.0

Bump tsparticles from 3.2.2 to 3.3.0 - ([e1904ad](https://github.com/hexahigh/blalange.org/commit/e1904ad50ca5ccb3d53c18e442c13afb81f64b51))


- Bump flowbite-svelte from 0.44.22 to 0.44.24

Bumps [flowbite-svelte](https://github.com/themesberg/flowbite-svelte) from 0.44.22 to 0.44.24.
- [Release notes](https://github.com/themesberg/flowbite-svelte/releases)
- [Changelog](https://github.com/themesberg/flowbite-svelte/blob/main/CHANGELOG.md)
- [Commits](https://github.com/themesberg/flowbite-svelte/compare/v0.44.22...v0.44.24)

---
updated-dependencies:
- dependency-name: flowbite-svelte
  dependency-type: direct:development
  update-type: version-update:semver-patch
...

Signed-off-by: dependabot[bot] <support@github.com> - ([cb79be9](https://github.com/hexahigh/blalange.org/commit/cb79be97bdb87f2645b20456313a04481bf43c9d))


- Merge pull request #87 from hexahigh/dependabot/npm_and_yarn/flowbite-svelte-0.44.24

Bump flowbite-svelte from 0.44.22 to 0.44.24 - ([cec5785](https://github.com/hexahigh/blalange.org/commit/cec57855dd9a5cc0d6d53aa9a3680d396df525f5))


- Merge branch 'dev' of https://github.com/hexahigh/kukfest into dev - ([c5db8b6](https://github.com/hexahigh/blalange.org/commit/c5db8b6ad5f3a2c0435690cb9cb90e85cac5d034))


- Merge pull request #92 from hexahigh:dev

Dev - ([db09c7f](https://github.com/hexahigh/blalange.org/commit/db09c7fa4a3726629be96e831709bf795baf6741))


- Create codeql.yml - ([02ab906](https://github.com/hexahigh/blalange.org/commit/02ab90621bd5ae4d72e61625a337fe7bcd073460))


- Merge remote-tracking branch 'origin/main' into dev - ([cc7ff72](https://github.com/hexahigh/blalange.org/commit/cc7ff72f562890251f6599cc4511b1e92b796905))


- Added enhanced-img for better images - ([48ff440](https://github.com/hexahigh/blalange.org/commit/48ff44026a920fb57d0d6ae7a65d5a9429d310c2))


- Merge pull request #94 from hexahigh:dev

removed patreon - ([953596e](https://github.com/hexahigh/blalange.org/commit/953596e7809b3b4aae0587ca709d021b49baa08a))


- Merge remote-tracking branch 'origin/main' into dev - ([eb25a09](https://github.com/hexahigh/blalange.org/commit/eb25a09c5509ae24fe3a8320614c0e33856f7704))


- Revert "added enhanced-img for better images"

This reverts commit 48ff44026a920fb57d0d6ae7a65d5a9429d310c2. - ([2beb575](https://github.com/hexahigh/blalange.org/commit/2beb5759cf580baf6f9f50f25dd57759a3a3cdd4))


- Md - ([b739017](https://github.com/hexahigh/blalange.org/commit/b7390177ae844dd10fbe808901891bdb86a0da90))


- Revert "md"

This reverts commit b7390177ae844dd10fbe808901891bdb86a0da90. - ([ed98c2a](https://github.com/hexahigh/blalange.org/commit/ed98c2a066b39e2293bbc111ce7b5c0ec9fa181c))


- Update to sveltekit 2 - ([517f39b](https://github.com/hexahigh/blalange.org/commit/517f39be170171f2a36db48e743261131622dc0f))


- Bump @sveltejs/adapter-cloudflare from 2.3.4 to 4.2.0

Bumps [@sveltejs/adapter-cloudflare](https://github.com/sveltejs/kit/tree/HEAD/packages/adapter-cloudflare) from 2.3.4 to 4.2.0.
- [Release notes](https://github.com/sveltejs/kit/releases)
- [Changelog](https://github.com/sveltejs/kit/blob/main/packages/adapter-cloudflare/CHANGELOG.md)
- [Commits](https://github.com/sveltejs/kit/commits/@sveltejs/adapter-cloudflare@4.2.0/packages/adapter-cloudflare)

---
updated-dependencies:
- dependency-name: "@sveltejs/adapter-cloudflare"
  dependency-type: direct:production
  update-type: version-update:semver-major
...

Signed-off-by: dependabot[bot] <support@github.com> - ([6f0350e](https://github.com/hexahigh/blalange.org/commit/6f0350ef1b6c4a141af0bfbf66c0f3d144634ca0))


- Merge pull request #101 from hexahigh/dependabot/npm_and_yarn/dev/sveltejs/adapter-cloudflare-4.2.0

Bump @sveltejs/adapter-cloudflare from 2.3.4 to 4.2.0 - ([cae613e](https://github.com/hexahigh/blalange.org/commit/cae613e804f30e49cf46d2f95734cb293e84c8bd))


- Bump autoprefixer from 10.4.18 to 10.4.19

Bumps [autoprefixer](https://github.com/postcss/autoprefixer) from 10.4.18 to 10.4.19.
- [Release notes](https://github.com/postcss/autoprefixer/releases)
- [Changelog](https://github.com/postcss/autoprefixer/blob/main/CHANGELOG.md)
- [Commits](https://github.com/postcss/autoprefixer/compare/10.4.18...10.4.19)

---
updated-dependencies:
- dependency-name: autoprefixer
  dependency-type: direct:development
  update-type: version-update:semver-patch
...

Signed-off-by: dependabot[bot] <support@github.com> - ([837b2bb](https://github.com/hexahigh/blalange.org/commit/837b2bb9b58ff8149ef98a7f9614f0d15eacf902))


- Merge pull request #102 from hexahigh/dependabot/npm_and_yarn/dev/autoprefixer-10.4.19

Bump autoprefixer from 10.4.18 to 10.4.19 - ([dcf36f1](https://github.com/hexahigh/blalange.org/commit/dcf36f1c332c5ec5b56abece97bf6b17877e04c7))


- Bump version - ([a0929c1](https://github.com/hexahigh/blalange.org/commit/a0929c17b2e8b9e83a0f20d257cba0691ee27eae))


- Update readme - ([75833d0](https://github.com/hexahigh/blalange.org/commit/75833d0d6babb83abf8cea0b39dea5a9e2fb5211))


- Update footer - ([b6263b8](https://github.com/hexahigh/blalange.org/commit/b6263b8f86d18ac9ea7872017f11d3b040371159))


- Merge pull request #105 from hexahigh:dev

1.1.0 - ([7360415](https://github.com/hexahigh/blalange.org/commit/736041589e2f17d4d6310d5076be0777aaf17ee6))


- Merge remote-tracking branch 'origin/main' into dev - ([174598f](https://github.com/hexahigh/blalange.org/commit/174598ff40a001890b4aa6d12571f0225a4debdb))


- Added dark mode - ([e4961a9](https://github.com/hexahigh/blalange.org/commit/e4961a92a00c1134deb8ceb9f5424f93f1950c12))


- Catppuccin - ([c80c12a](https://github.com/hexahigh/blalange.org/commit/c80c12a3ba3bbde666ebdd3b71c089959945d896))


- Update css - ([188109b](https://github.com/hexahigh/blalange.org/commit/188109bc18a55d7726b03f1c502b8b1c8ec7b69f))


- Update shop url - ([5ec0ac9](https://github.com/hexahigh/blalange.org/commit/5ec0ac9cc12b224ec3dcaceb27c12ec8edeae005))


- Bump version number - ([e9aa043](https://github.com/hexahigh/blalange.org/commit/e9aa043f5dfc331aeb4561c02f6d3e960db670e8))


- Bump postcss from 8.4.36 to 8.4.38

Bumps [postcss](https://github.com/postcss/postcss) from 8.4.36 to 8.4.38.
- [Release notes](https://github.com/postcss/postcss/releases)
- [Changelog](https://github.com/postcss/postcss/blob/main/CHANGELOG.md)
- [Commits](https://github.com/postcss/postcss/compare/8.4.36...8.4.38)

---
updated-dependencies:
- dependency-name: postcss
  dependency-type: direct:development
  update-type: version-update:semver-patch
...

Signed-off-by: dependabot[bot] <support@github.com> - ([04ed4b6](https://github.com/hexahigh/blalange.org/commit/04ed4b68c819f59248b32289e757dc061bd533bd))


- Merge pull request #104 from hexahigh/dependabot/npm_and_yarn/dev/postcss-8.4.38

Bump postcss from 8.4.36 to 8.4.38 - ([dc22de9](https://github.com/hexahigh/blalange.org/commit/dc22de9763fed489e92bee6137f463ad7ad9a4c8))


- Merge branch 'dev' of https://github.com/hexahigh/kukfest into dev - ([f067f45](https://github.com/hexahigh/blalange.org/commit/f067f4537ac320a9bc4bfe3f9378baea8ad27d03))


- Updated the colors in the navbar - ([ccef8ef](https://github.com/hexahigh/blalange.org/commit/ccef8ef5bb671e5462b3fdc4521c4a8f3838eef0))


- Merge pull request #106 from hexahigh:dev

Dev - ([a5a0f06](https://github.com/hexahigh/blalange.org/commit/a5a0f06d5328c426a9c8ffcc3b1f935a775542f6))


- Merge remote-tracking branch 'origin/main' into dev - ([4ad65b1](https://github.com/hexahigh/blalange.org/commit/4ad65b10c81ca2773f75860b9322a3fab974f15e))


- Added analytics - ([ce99ea6](https://github.com/hexahigh/blalange.org/commit/ce99ea6d11ebe7631f20b3c8829a087fa7d816cc))


- Updated analytics viewer - ([6d2e8d5](https://github.com/hexahigh/blalange.org/commit/6d2e8d5ce83f747cf06512a8c94084b476224741))


- Anal - ([b32ffab](https://github.com/hexahigh/blalange.org/commit/b32ffabb3fa8a23721b4e687ef23f8b43b266611))


- Merge pull request #107 from hexahigh:dev

added darkmode - ([1dbd1ce](https://github.com/hexahigh/blalange.org/commit/1dbd1ceb291cc85d3de645b8cf6ed428ea973f4e))


- Merge remote-tracking branch 'origin/main' into dev - ([c56ef89](https://github.com/hexahigh/blalange.org/commit/c56ef89a5270b3562dca55c70161a03b68e1417d))


- Bump version - ([7f5fdf5](https://github.com/hexahigh/blalange.org/commit/7f5fdf532cfab83a8b31f40b845e2745c9b6f077))


- Merge pull request #108 from hexahigh:dev

added analytics viewer - ([ed4e048](https://github.com/hexahigh/blalange.org/commit/ed4e0485e0fac29bb3225e997fbaf13c8b7e8b74))


- Merge remote-tracking branch 'origin/main' into dev - ([c540649](https://github.com/hexahigh/blalange.org/commit/c540649b7aaaff916c1d71c1e0657d3b4ce05594))


- Update analytics viewer - ([5b3bf41](https://github.com/hexahigh/blalange.org/commit/5b3bf415bed3648b4c04a48bb0ce83bf056514e4))


- Update form - ([ca105f4](https://github.com/hexahigh/blalange.org/commit/ca105f451f78badcc3a60b299539b219e9a65c8d))


- I dont want to use chartjs anymore - ([2035609](https://github.com/hexahigh/blalange.org/commit/2035609d6264cfd96c83bd074737a9155028b23f))


- :( - ([7fdbff2](https://github.com/hexahigh/blalange.org/commit/7fdbff2bcf10d5a5c483a80feea7b8aa9ea13cec))


- Jippi - ([95e9f5c](https://github.com/hexahigh/blalange.org/commit/95e9f5ce4c2aacbbb4901944a95d63b4068ec9e2))


- Koselig - ([40d2e85](https://github.com/hexahigh/blalange.org/commit/40d2e85d711daf7c198b8b233b97d73e88f53b09))


- Hyggelig - ([dd3f9de](https://github.com/hexahigh/blalange.org/commit/dd3f9de69b290326bf9c3203aadadcbcf3478a8d))


- Merge pull request #109 from hexahigh:dev

bump version - ([2b5aee8](https://github.com/hexahigh/blalange.org/commit/2b5aee8afd9ee66deb4a9668cf82326a18758f36))


- Merge pull request #110 from hexahigh:dev

Dev - ([8668d46](https://github.com/hexahigh/blalange.org/commit/8668d464f0da416583f7e858f06ff5c21869dc63))


- Merge remote-tracking branch 'origin/main' into dev - ([c5c3cd0](https://github.com/hexahigh/blalange.org/commit/c5c3cd0db5fa2019bdf366c39e9784ed6856ab2c))


- Epic radio - ([1a9787f](https://github.com/hexahigh/blalange.org/commit/1a9787fdcd005e2a5b139fe2c18a43abb473f3f3))


- Merge pull request #115 from hexahigh:dev

hyggelig - ([7e6f857](https://github.com/hexahigh/blalange.org/commit/7e6f857eeb7f4b58d3b5d9e48c47bc5f542d0fa5))


- Merge remote-tracking branch 'origin/main' into dev - ([22ae436](https://github.com/hexahigh/blalange.org/commit/22ae4368501e638232be5ab5fc38663ceccf4ba2))


- Made the radio look better in darkmode - ([827be40](https://github.com/hexahigh/blalange.org/commit/827be40047409919d5ea21e83d0a60d8a1caccec))


- Update footer - ([df3ebf5](https://github.com/hexahigh/blalange.org/commit/df3ebf5186276c182486f795eba96888cd0f2653))


- Bump version - ([8e7d1f2](https://github.com/hexahigh/blalange.org/commit/8e7d1f26db025bb5210278112bd3a80ed6132f35))


- This should fix autoplay - ([5dc628f](https://github.com/hexahigh/blalange.org/commit/5dc628f9562ad6b4a4d36cd0a657ac4612ff4cb5))


- Added radio to footer - ([ab1a911](https://github.com/hexahigh/blalange.org/commit/ab1a9111fcbd72e34d7f852f52fd063b268cf0be))


- Merge pull request #117 from hexahigh/dev

epic radio - ([431b772](https://github.com/hexahigh/blalange.org/commit/431b7724778abbb23192217bd261406af5092f11))


- Merge remote-tracking branch 'origin/main' into dev - ([e50f565](https://github.com/hexahigh/blalange.org/commit/e50f5658a4d1c61409d437e3c38c36b0d032de8b))


- Made footer more responsive - ([09fcaa5](https://github.com/hexahigh/blalange.org/commit/09fcaa5971dc901aaaaf893b1511099cb7495319))


- :( - ([9fa1ae4](https://github.com/hexahigh/blalange.org/commit/9fa1ae47c6f1227258dee5f392fdf6042ee78a87))


- Merge pull request #119 from hexahigh:dev

update footer - ([cca15cd](https://github.com/hexahigh/blalange.org/commit/cca15cd5384b2d8d8048489451f6abcbf847fb74))


- Merge remote-tracking branch 'origin/main' into dev - ([860a92b](https://github.com/hexahigh/blalange.org/commit/860a92bf6e009ed4224de8356573f88d75c233df))


- This should fix the audioplayer becoming out of sync - ([2bfd6b3](https://github.com/hexahigh/blalange.org/commit/2bfd6b38733b10f0c4308b18c98059a2b48a9e02))


- Merge pull request #120 from hexahigh:dev

:( - ([a64a58c](https://github.com/hexahigh/blalange.org/commit/a64a58c163462ed7811bcaaaaf8b143fb32330c8))


- Merge remote-tracking branch 'origin/main' into dev - ([d4efd8b](https://github.com/hexahigh/blalange.org/commit/d4efd8b6e47ebc7a9dcc80adee4105499340fd33))


- Update resync - ([3a19bf8](https://github.com/hexahigh/blalange.org/commit/3a19bf8d6b6ab34ba0f1d5b9d41cfee9dc42b243))


- Merge pull request #121 from hexahigh:dev

this should fix the audioplayer becoming out of sync - ([2de0d0f](https://github.com/hexahigh/blalange.org/commit/2de0d0f03358f2f7f18efebb2df5b0023d162c12))


- Merge remote-tracking branch 'origin/main' into dev - ([ecdb787](https://github.com/hexahigh/blalange.org/commit/ecdb7877a2321c3a6c72f3f8a82454f46c8a59a0))


- Lisens namnam - ([e5da7bb](https://github.com/hexahigh/blalange.org/commit/e5da7bb417261c3d77c2cb0a7347ff9eab31c17d))


- Merge pull request #122 from hexahigh:dev

update resync - ([c7ff584](https://github.com/hexahigh/blalange.org/commit/c7ff584ee16e27b935af33ee685fe4009f45dd44))


- Merge remote-tracking branch 'origin/main' into dev - ([a335b58](https://github.com/hexahigh/blalange.org/commit/a335b58ce469440af9167288aa5743f89311b41a))


- Bump @sveltejs/enhanced-img from 0.1.9 to 0.2.0

Bumps [@sveltejs/enhanced-img](https://github.com/sveltejs/kit/tree/HEAD/packages/image) from 0.1.9 to 0.2.0.
- [Release notes](https://github.com/sveltejs/kit/releases)
- [Commits](https://github.com/sveltejs/kit/commits/@sveltejs/enhanced-img@0.2.0/packages/image)

---
updated-dependencies:
- dependency-name: "@sveltejs/enhanced-img"
  dependency-type: direct:development
  update-type: version-update:semver-minor
...

Signed-off-by: dependabot[bot] <support@github.com> - ([123f451](https://github.com/hexahigh/blalange.org/commit/123f451985032a0788ae0843f93c7085393ef449))


- Merge pull request #124 from hexahigh/dependabot/npm_and_yarn/dev/sveltejs/enhanced-img-0.2.0

Bump @sveltejs/enhanced-img from 0.1.9 to 0.2.0 - ([17eff40](https://github.com/hexahigh/blalange.org/commit/17eff403da7518815415cbc027995539b9bee19d))


- Update README.md - ([b898b23](https://github.com/hexahigh/blalange.org/commit/b898b23235f6432a293aaff1403ba93f42f26036))


- Update README.md - ([f55bc9c](https://github.com/hexahigh/blalange.org/commit/f55bc9c4f953b715ef680a4a83052712c02ab7d1))


- Update source code url - ([f678cda](https://github.com/hexahigh/blalange.org/commit/f678cda69e46662778ca524440ff093ec60c280b))


- Fancy form

ikke publisert med github desktop - ([556ad8d](https://github.com/hexahigh/blalange.org/commit/556ad8dea349cc528ce1b01300f8e9516ce20484))


- Moved again - ([ae1d069](https://github.com/hexahigh/blalange.org/commit/ae1d069b3f94c4a26c36c845ff46e1c0500a666e))


- Merge branch 'dev' of https://github.com/hexahigh/blalange.org into dev - ([9042a46](https://github.com/hexahigh/blalange.org/commit/9042a463a931dcac0373fcf455aa92e02053af37))


- Ekstra fin nå :)

og fikset if greia - ([a8b4258](https://github.com/hexahigh/blalange.org/commit/a8b425855e5c91813e168a8dd20f4df45ec71631))


- Bump version - ([d72cdbb](https://github.com/hexahigh/blalange.org/commit/d72cdbb6da319633f32e862133aa0365d675a8d3))


- Improved analytics logs - ([e7c27ce](https://github.com/hexahigh/blalange.org/commit/e7c27ceb9b79c7d3971cb090cf190633182acb68))


- Merge pull request #123 from hexahigh:dev

lisens namnam - ([7c5406b](https://github.com/hexahigh/blalange.org/commit/7c5406b59fef1ffee67ec5c7874fe589c15209d0))


- Merge pull request #125 from hexahigh/dev

Dev - ([2aa36bf](https://github.com/hexahigh/blalange.org/commit/2aa36bf2c3b68977221c2d9a8572ebcb4d5d3ac5))


- Update build.yml - ([b17c570](https://github.com/hexahigh/blalange.org/commit/b17c57020fa94603180e8f0108ff00687575f6f7))


- Merge pull request #126 from hexahigh/dev

yoyoyo dette EPISKT - ([3b66b88](https://github.com/hexahigh/blalange.org/commit/3b66b8830d78ef73454a723128191190a1d3b2cf))


- Merge remote-tracking branch 'origin/main' into dev - ([92b15bf](https://github.com/hexahigh/blalange.org/commit/92b15bfed3746d245b4469faedd4dbd5de5bd80f))


- Update analytics - ([e453e2f](https://github.com/hexahigh/blalange.org/commit/e453e2ff46bbca256ef8f3bd8fc7ee184e735e2b))


- Added a script to easily change the version number - ([db240c2](https://github.com/hexahigh/blalange.org/commit/db240c2ba240d71ed6e42676f0777005abffbbe8))


- Added robots.txt - ([2bcd9db](https://github.com/hexahigh/blalange.org/commit/2bcd9dbb70caf1c7672f024fc5efc3ceb068d3cf))


- Merge branch 'dev' of https://github.com/hexahigh/blalange.org into dev - ([b75f12a](https://github.com/hexahigh/blalange.org/commit/b75f12a69e6d8e5e0e3e477b1e2aa61439bb93c7))


- Updated analytics and session - ([a2910f6](https://github.com/hexahigh/blalange.org/commit/a2910f6cca936ecf46ac981fcd04a97c819df5ab))


- Added build date - ([cb3ac97](https://github.com/hexahigh/blalange.org/commit/cb3ac9784eb31a42f3e82f4341df4274e3e0bf34))


- Merge pull request #128 from hexahigh/dev

improved analytics logs - ([61a7538](https://github.com/hexahigh/blalange.org/commit/61a75385a2547982203e52ef884e3079b3032426))


- Merge remote-tracking branch 'origin/main' into dev - ([405f445](https://github.com/hexahigh/blalange.org/commit/405f44548fbf2d62c998cf45331a9f08459b4901))


- Added donation leaderboard - ([283fc5c](https://github.com/hexahigh/blalange.org/commit/283fc5cd8baa12a2b87e35c560f6556ef7f74c27))


- Alve er episk - ([1d0e02d](https://github.com/hexahigh/blalange.org/commit/1d0e02d022bb277f3cbc7df8caaca6b869d5a3aa))


- Bump - ([5c7d66e](https://github.com/hexahigh/blalange.org/commit/5c7d66e067e73556f72946325d5c1c871271d6fb))


- Merge pull request #133 from hexahigh/dev

added bump-version script and various qol changes - ([3a0f505](https://github.com/hexahigh/blalange.org/commit/3a0f505a4478fb7f57348c05b5b36f9bd7efa1e8))


- Merge remote-tracking branch 'origin/main' into dev - ([d1dd9fe](https://github.com/hexahigh/blalange.org/commit/d1dd9feea1d6d785f8cce71d3e2151913d2ce998))


- Bump @sveltejs/adapter-cloudflare from 4.2.0 to 4.2.1

Bumps [@sveltejs/adapter-cloudflare](https://github.com/sveltejs/kit/tree/HEAD/packages/adapter-cloudflare) from 4.2.0 to 4.2.1.
- [Release notes](https://github.com/sveltejs/kit/releases)
- [Changelog](https://github.com/sveltejs/kit/blob/main/packages/adapter-cloudflare/CHANGELOG.md)
- [Commits](https://github.com/sveltejs/kit/commits/@sveltejs/adapter-cloudflare@4.2.1/packages/adapter-cloudflare)

---
updated-dependencies:
- dependency-name: "@sveltejs/adapter-cloudflare"
  dependency-type: direct:production
  update-type: version-update:semver-patch
...

Signed-off-by: dependabot[bot] <support@github.com> - ([e7c2164](https://github.com/hexahigh/blalange.org/commit/e7c216478d30aaceb27070c0e3783f9fe282e4b7))


- Merge pull request #131 from hexahigh/dependabot/npm_and_yarn/dev/sveltejs/adapter-cloudflare-4.2.1

Bump @sveltejs/adapter-cloudflare from 4.2.0 to 4.2.1 - ([6435cba](https://github.com/hexahigh/blalange.org/commit/6435cba53c4423875bee527e4531326590726be0))


- Bump vite from 5.2.7 to 5.2.8

Bumps [vite](https://github.com/vitejs/vite/tree/HEAD/packages/vite) from 5.2.7 to 5.2.8.
- [Release notes](https://github.com/vitejs/vite/releases)
- [Changelog](https://github.com/vitejs/vite/blob/main/packages/vite/CHANGELOG.md)
- [Commits](https://github.com/vitejs/vite/commits/v5.2.8/packages/vite)

---
updated-dependencies:
- dependency-name: vite
  dependency-type: direct:development
  update-type: version-update:semver-patch
...

Signed-off-by: dependabot[bot] <support@github.com> - ([e97b2a3](https://github.com/hexahigh/blalange.org/commit/e97b2a334d01650c4bbfd7d28aa842d6f055674f))


- Merge pull request #129 from hexahigh/dependabot/npm_and_yarn/dev/vite-5.2.8

Bump vite from 5.2.7 to 5.2.8 - ([ef17c53](https://github.com/hexahigh/blalange.org/commit/ef17c53009f583759d8062ff97ff047780c99904))


- Merge branch 'dev' of https://github.com/hexahigh/blalange.org into dev - ([b564026](https://github.com/hexahigh/blalange.org/commit/b564026ed61728f98060068a751c53d9e5d5df75))


- Bump version - ([da34d6a](https://github.com/hexahigh/blalange.org/commit/da34d6a532bcc5706d7b04282fabcc825b602490))


- Bump svelte-meta-tags from 3.1.1 to 3.1.2

Bumps [svelte-meta-tags](https://github.com/oekazuma/svelte-meta-tags) from 3.1.1 to 3.1.2.
- [Release notes](https://github.com/oekazuma/svelte-meta-tags/releases)
- [Commits](https://github.com/oekazuma/svelte-meta-tags/compare/svelte-meta-tags@3.1.1...svelte-meta-tags@3.1.2)

---
updated-dependencies:
- dependency-name: svelte-meta-tags
  dependency-type: direct:development
  update-type: version-update:semver-patch
...

Signed-off-by: dependabot[bot] <support@github.com> - ([872f606](https://github.com/hexahigh/blalange.org/commit/872f606b46f4df06a7fc69d2a63c5045c5a0f1fb))


- Merge pull request #135 from hexahigh:dependabot/npm_and_yarn/dev/svelte-meta-tags-3.1.2

Bump svelte-meta-tags from 3.1.1 to 3.1.2 - ([9174372](https://github.com/hexahigh/blalange.org/commit/9174372a33dfbd24bd98984e4ad2c431cad6b0dc))


- Merge branch 'dev' of https://github.com/hexahigh/blalange.org into dev - ([4bc4397](https://github.com/hexahigh/blalange.org/commit/4bc43971e12f9cc65f528d9d576b3aded602ee7d))


- Improved service worker - ([51242e9](https://github.com/hexahigh/blalange.org/commit/51242e90618622dc6ce6ddbdb4acd070c4c1e771))


- Fancy animasjon - ([989865c](https://github.com/hexahigh/blalange.org/commit/989865c1ec45a7ecd3a5febad6d6bec2b0b987fd))


- Update logo spin - ([29bcf98](https://github.com/hexahigh/blalange.org/commit/29bcf980fa1410e19dfa1d5d807e952b2c0c7201))


- Maybe now? - ([e8d1816](https://github.com/hexahigh/blalange.org/commit/e8d1816b5cffe2ab5e210e6e7737229204c35e4b))


- Added font - ([918c134](https://github.com/hexahigh/blalange.org/commit/918c134d33224960c9ee84a410d42023485ee053))


- Cleanup css - ([a2febf0](https://github.com/hexahigh/blalange.org/commit/a2febf0300c0621557b570aa0b23d20c812a8942))


- Update sitemap - ([d69ebbb](https://github.com/hexahigh/blalange.org/commit/d69ebbbd9ff987d3a6b214ce41c32cef73cdc22d))


- Merge pull request #134 from hexahigh:dev

alve er episk - ([15c2a2a](https://github.com/hexahigh/blalange.org/commit/15c2a2a6021b01ac06966d48fd7decf6436d6e78))


- Bump undici from 5.28.3 to 5.28.4

Bumps [undici](https://github.com/nodejs/undici) from 5.28.3 to 5.28.4.
- [Release notes](https://github.com/nodejs/undici/releases)
- [Commits](https://github.com/nodejs/undici/compare/v5.28.3...v5.28.4)

---
updated-dependencies:
- dependency-name: undici
  dependency-type: indirect
...

Signed-off-by: dependabot[bot] <support@github.com> - ([fc8bac8](https://github.com/hexahigh/blalange.org/commit/fc8bac87a931283a4a49248b783d8636f6868621))


- Merge pull request #130 from hexahigh/dependabot/npm_and_yarn/undici-5.28.4

Bump undici from 5.28.3 to 5.28.4 - ([318254d](https://github.com/hexahigh/blalange.org/commit/318254d7d83aa81cb535feaca2e357edad6c2752))


- Merge remote-tracking branch 'origin/main' into dev - ([b8ea228](https://github.com/hexahigh/blalange.org/commit/b8ea22888ed24d1c60bf1f408aa426d662cc976f))


- Update analytics - ([0d454a4](https://github.com/hexahigh/blalange.org/commit/0d454a4e126b84f1b4523ee9ec34999ab82f2cfc))


- Very epic dev mode - ([8ad023f](https://github.com/hexahigh/blalange.org/commit/8ad023fee720476789ffbb9fd58385e2ee53fb83))


- Very super cool devMode - ([cdbbe24](https://github.com/hexahigh/blalange.org/commit/cdbbe24576304fa89aad67f0b8746124c2eb2814))


- Made config persistent - ([812c801](https://github.com/hexahigh/blalange.org/commit/812c8012b33034feea9f38ea01f7f28164d9e675))


- Kosinus - ([a7b1787](https://github.com/hexahigh/blalange.org/commit/a7b17873ec6220d685db5062cbca7c4f27d86024))


- Bump version - ([1d775cc](https://github.com/hexahigh/blalange.org/commit/1d775cc3c9be294827c1760c0e4abaa3bef9fce8))


- Merge pull request #139 from hexahigh:dev

fancy animation - ([cfeb2a8](https://github.com/hexahigh/blalange.org/commit/cfeb2a8d0d244171d031329137d815fbe9a13727))


- Merge remote-tracking branch 'origin/main' into dev - ([6466b0b](https://github.com/hexahigh/blalange.org/commit/6466b0b44256269908d8909c357d751f192a8f96))


- Update radio - ([210dfc6](https://github.com/hexahigh/blalange.org/commit/210dfc6161185baeb4f29e7290038803ddfeaeb1))


- Added faq - ([3b77b81](https://github.com/hexahigh/blalange.org/commit/3b77b816dd414d4a9941f0692143a1f98695b8ab))


- Added new config - ([bec8fa2](https://github.com/hexahigh/blalange.org/commit/bec8fa2e7bb1e52729c79cac8e7b4d885989448b))


- Nvm - ([0f6753d](https://github.com/hexahigh/blalange.org/commit/0f6753de77f86d7ed61e69f9eb28999b87e4872e))


- Update config system - ([8875740](https://github.com/hexahigh/blalange.org/commit/887574097a5bbe09a4106f5ff20bda5d321b73b5))


- Added audio - ([1f64f94](https://github.com/hexahigh/blalange.org/commit/1f64f9466907335fb4da5957a69c786535c8b93d))


- Bump svelte from 4.2.12 to 4.2.13

Bumps [svelte](https://github.com/sveltejs/svelte/tree/HEAD/packages/svelte) from 4.2.12 to 4.2.13.
- [Release notes](https://github.com/sveltejs/svelte/releases)
- [Changelog](https://github.com/sveltejs/svelte/blob/svelte@4.2.13/packages/svelte/CHANGELOG.md)
- [Commits](https://github.com/sveltejs/svelte/commits/svelte@4.2.13/packages/svelte)

---
updated-dependencies:
- dependency-name: svelte
  dependency-type: direct:development
  update-type: version-update:semver-patch
...

Signed-off-by: dependabot[bot] <support@github.com> - ([532e85b](https://github.com/hexahigh/blalange.org/commit/532e85bce63c0450018cc6ae223ab88e9a2c443c))


- Merge pull request #138 from hexahigh/dependabot/npm_and_yarn/dev/svelte-4.2.13

Bump svelte from 4.2.12 to 4.2.13 - ([84c7746](https://github.com/hexahigh/blalange.org/commit/84c77465d1b08cfdff8c907a5fb7cd46eee0de9f))


- Merge branch 'dev' of https://github.com/hexahigh/blalange.org into dev - ([5f69422](https://github.com/hexahigh/blalange.org/commit/5f694221759dc052c3ea6c649fb7387571b6a367))


- Added saveconfig - ([ee63f75](https://github.com/hexahigh/blalange.org/commit/ee63f75a12c5f73f30fe8bef2c88852fca908900))


- Added volume - ([acb48bc](https://github.com/hexahigh/blalange.org/commit/acb48bc58e3a9fd775a7dca2cf255d8bc4bb36dc))


- Bump - ([9945473](https://github.com/hexahigh/blalange.org/commit/99454730a6d44ca441979278ed62818acd951626))


- Added a new easter egg - ([2fd4474](https://github.com/hexahigh/blalange.org/commit/2fd4474deb98982d13daa55c4040a408f669c91b))


- Maybe this will fix it? - ([4dd2cbc](https://github.com/hexahigh/blalange.org/commit/4dd2cbc6fada7edf3abe98007f1bc1b147352400))


- Bump @sveltejs/vite-plugin-svelte from 3.0.2 to 3.1.0

Bumps [@sveltejs/vite-plugin-svelte](https://github.com/sveltejs/vite-plugin-svelte/tree/HEAD/packages/vite-plugin-svelte) from 3.0.2 to 3.1.0.
- [Release notes](https://github.com/sveltejs/vite-plugin-svelte/releases)
- [Changelog](https://github.com/sveltejs/vite-plugin-svelte/blob/main/packages/vite-plugin-svelte/CHANGELOG.md)
- [Commits](https://github.com/sveltejs/vite-plugin-svelte/commits/@sveltejs/vite-plugin-svelte@3.1.0/packages/vite-plugin-svelte)

---
updated-dependencies:
- dependency-name: "@sveltejs/vite-plugin-svelte"
  dependency-type: direct:development
  update-type: version-update:semver-minor
...

Signed-off-by: dependabot[bot] <support@github.com> - ([644223e](https://github.com/hexahigh/blalange.org/commit/644223ebb200cb7f9f7daa5cff3fba617bfee5c9))


- Merge pull request #136 from hexahigh/dependabot/npm_and_yarn/dev/sveltejs/vite-plugin-svelte-3.1.0

Bump @sveltejs/vite-plugin-svelte from 3.0.2 to 3.1.0 - ([f51c446](https://github.com/hexahigh/blalange.org/commit/f51c44699382a47605ed1052ae67a61be1c8320d))


- Bump @sveltejs/adapter-cloudflare from 4.2.1 to 4.3.0

Bumps [@sveltejs/adapter-cloudflare](https://github.com/sveltejs/kit/tree/HEAD/packages/adapter-cloudflare) from 4.2.1 to 4.3.0.
- [Release notes](https://github.com/sveltejs/kit/releases)
- [Changelog](https://github.com/sveltejs/kit/blob/main/packages/adapter-cloudflare/CHANGELOG.md)
- [Commits](https://github.com/sveltejs/kit/commits/@sveltejs/adapter-cloudflare@4.3.0/packages/adapter-cloudflare)

---
updated-dependencies:
- dependency-name: "@sveltejs/adapter-cloudflare"
  dependency-type: direct:production
  update-type: version-update:semver-minor
...

Signed-off-by: dependabot[bot] <support@github.com> - ([2c1dced](https://github.com/hexahigh/blalange.org/commit/2c1dcedffb9dc145c40bfa34bd7683dae5040dfd))


- Merge pull request #141 from hexahigh/dependabot/npm_and_yarn/dev/sveltejs/adapter-cloudflare-4.3.0

Bump @sveltejs/adapter-cloudflare from 4.2.1 to 4.3.0 - ([7464138](https://github.com/hexahigh/blalange.org/commit/74641382922318a23fe3e66c4cd9cbbb8f517cae))


- Merge branch 'dev' of https://github.com/hexahigh/blalange.org into dev - ([c1c181d](https://github.com/hexahigh/blalange.org/commit/c1c181d8ee3d1fb59d11c093d6f5b34e7ae28299))


- I give up - ([c7d854c](https://github.com/hexahigh/blalange.org/commit/c7d854ce05e68a21a029800346fc03bcbf75c2e8))


- Bump @formkit/auto-animate from 0.8.1 to 0.8.2

Bumps [@formkit/auto-animate](https://github.com/formkit/auto-animate) from 0.8.1 to 0.8.2.
- [Release notes](https://github.com/formkit/auto-animate/releases)
- [Commits](https://github.com/formkit/auto-animate/compare/0.8.1...0.8.2)

---
updated-dependencies:
- dependency-name: "@formkit/auto-animate"
  dependency-type: direct:production
  update-type: version-update:semver-patch
...

Signed-off-by: dependabot[bot] <support@github.com> - ([63d4bcd](https://github.com/hexahigh/blalange.org/commit/63d4bcde3bfcbd48386387423b85d54349f1b30c))


- Merge pull request #137 from hexahigh/dependabot/npm_and_yarn/dev/formkit/auto-animate-0.8.2

Bump @formkit/auto-animate from 0.8.1 to 0.8.2 - ([f40e296](https://github.com/hexahigh/blalange.org/commit/f40e296ffeacd9cfc35258d72d0332c1fe28f004))


- Merge branch 'dev' of https://github.com/hexahigh/blalange.org into dev - ([8764ddd](https://github.com/hexahigh/blalange.org/commit/8764ddd028a12bd3789d7303bb5d492667ea1b14))


- Merge pull request #140 from hexahigh:dev

epic dev mode + kosinus - ([b5900c4](https://github.com/hexahigh/blalange.org/commit/b5900c4e0273c7573c87053d91c44e50006f1e6b))


- Merge pull request #142 from hexahigh/dev

added faq and new config system - ([81a993c](https://github.com/hexahigh/blalange.org/commit/81a993c7c6312f74b3024ad42f578956a033de12))


- Merge pull request #143 from hexahigh/dev

fixed dev and added ∂ ?£\|\| €λ?']['3|? 369 - ([b8dbe32](https://github.com/hexahigh/blalange.org/commit/b8dbe32b7dcf03d21c8c8a86c6b547d13d79d177))


- Merge pull request #144 from hexahigh:dev

Dev - ([734737e](https://github.com/hexahigh/blalange.org/commit/734737e5268d546ed7dca09c2d340566c69f22a2))


- Merge pull request #145 from hexahigh/dev

i give up - ([e2ffcd0](https://github.com/hexahigh/blalange.org/commit/e2ffcd046ec097e72c32ba42781e6f774f99ddd0))


- Merge remote-tracking branch 'origin/main' into dev - ([7062e7a](https://github.com/hexahigh/blalange.org/commit/7062e7a1d0083b05eaad31e28d1dc0ea4e974b95))


- Create betterimg - ([d4c7caf](https://github.com/hexahigh/blalange.org/commit/d4c7caf4b167134b2ed1c47f5c1c09ce2eead76f))


- Still needs some work - ([e905eed](https://github.com/hexahigh/blalange.org/commit/e905eeda8452a121b42913e3db2590686490ffc0))


- Added article component and two new fonts - ([72bcac2](https://github.com/hexahigh/blalange.org/commit/72bcac217cfc2e508b2d73b663f2e5552ada8d11))


- Bump version - ([97677e7](https://github.com/hexahigh/blalange.org/commit/97677e749d0e537721c9e29917ccc5ae62abd815))


- Bump version - ([a6bddea](https://github.com/hexahigh/blalange.org/commit/a6bddea5c26eac6f986c8f4ce01807222bdc5dbb))


- Bump svelte from 4.2.13 to 4.2.15

Bumps [svelte](https://github.com/sveltejs/svelte/tree/HEAD/packages/svelte) from 4.2.13 to 4.2.15.
- [Release notes](https://github.com/sveltejs/svelte/releases)
- [Changelog](https://github.com/sveltejs/svelte/blob/svelte@4.2.15/packages/svelte/CHANGELOG.md)
- [Commits](https://github.com/sveltejs/svelte/commits/svelte@4.2.15/packages/svelte)

---
updated-dependencies:
- dependency-name: svelte
  dependency-type: direct:development
  update-type: version-update:semver-patch
...

Signed-off-by: dependabot[bot] <support@github.com> - ([06bca90](https://github.com/hexahigh/blalange.org/commit/06bca90dc2dd1b4000b3ea4d2f37ea67affcbc9b))


- Merge pull request #152 from hexahigh:dependabot/npm_and_yarn/dev/svelte-4.2.15

Bump svelte from 4.2.13 to 4.2.15 - ([fb23c16](https://github.com/hexahigh/blalange.org/commit/fb23c16028dd17bb44c6fb16a8dfec8ac0fd472d))


- Bump @fontsource/material-icons from 5.0.16 to 5.0.17

Bumps [@fontsource/material-icons](https://github.com/fontsource/font-files/tree/HEAD/fonts/google/material-icons) from 5.0.16 to 5.0.17.
- [Commits](https://github.com/fontsource/font-files/commits/HEAD/fonts/google/material-icons)

---
updated-dependencies:
- dependency-name: "@fontsource/material-icons"
  dependency-type: direct:production
  update-type: version-update:semver-patch
...

Signed-off-by: dependabot[bot] <support@github.com> - ([2e437d7](https://github.com/hexahigh/blalange.org/commit/2e437d712603e5e887da49a86a717abd6d42aba9))


- Merge pull request #149 from hexahigh:dependabot/npm_and_yarn/dev/fontsource/material-icons-5.0.17

Bump @fontsource/material-icons from 5.0.16 to 5.0.17 - ([b9cf516](https://github.com/hexahigh/blalange.org/commit/b9cf516f74cf469385ffae11b2f425108105e4b8))


- Bump flowbite-svelte from 0.44.24 to 0.45.0

Bumps [flowbite-svelte](https://github.com/themesberg/flowbite-svelte) from 0.44.24 to 0.45.0.
- [Release notes](https://github.com/themesberg/flowbite-svelte/releases)
- [Changelog](https://github.com/themesberg/flowbite-svelte/blob/main/CHANGELOG.md)
- [Commits](https://github.com/themesberg/flowbite-svelte/compare/v0.44.24...v0.45.0)

---
updated-dependencies:
- dependency-name: flowbite-svelte
  dependency-type: direct:development
  update-type: version-update:semver-minor
...

Signed-off-by: dependabot[bot] <support@github.com> - ([35af6f4](https://github.com/hexahigh/blalange.org/commit/35af6f43691c6e69026dc2d04640ebd6423d1e7a))


- Merge pull request #151 from hexahigh:dependabot/npm_and_yarn/dev/flowbite-svelte-0.45.0

Bump flowbite-svelte from 0.44.24 to 0.45.0 - ([fdc8ca1](https://github.com/hexahigh/blalange.org/commit/fdc8ca1f261ea00c69aba92790e5b1c34e82abf7))


- Bump @sveltejs/adapter-cloudflare from 4.3.0 to 4.4.0

Bumps [@sveltejs/adapter-cloudflare](https://github.com/sveltejs/kit/tree/HEAD/packages/adapter-cloudflare) from 4.3.0 to 4.4.0.
- [Release notes](https://github.com/sveltejs/kit/releases)
- [Changelog](https://github.com/sveltejs/kit/blob/main/packages/adapter-cloudflare/CHANGELOG.md)
- [Commits](https://github.com/sveltejs/kit/commits/@sveltejs/adapter-cloudflare@4.4.0/packages/adapter-cloudflare)

---
updated-dependencies:
- dependency-name: "@sveltejs/adapter-cloudflare"
  dependency-type: direct:production
  update-type: version-update:semver-minor
...

Signed-off-by: dependabot[bot] <support@github.com> - ([8ca858d](https://github.com/hexahigh/blalange.org/commit/8ca858d9f739c8ce27091f29117a143f2550ffc2))


- Merge pull request #148 from hexahigh:dependabot/npm_and_yarn/dev/sveltejs/adapter-cloudflare-4.4.0

Bump @sveltejs/adapter-cloudflare from 4.3.0 to 4.4.0 - ([19e7bf7](https://github.com/hexahigh/blalange.org/commit/19e7bf794bb7c0d02aeef50cfef298447e15680f))


- Merge branch 'dev' of https://github.com/hexahigh/blalange.org into dev - ([e7b89ea](https://github.com/hexahigh/blalange.org/commit/e7b89ea5d49cf600d22d31aa1b2bacea22d28d30))


- Bumpy - ([00f3a00](https://github.com/hexahigh/blalange.org/commit/00f3a00f32527b9fa3d40e06566a2d0b0dfcb527))


- Added terminal - ([a8a0088](https://github.com/hexahigh/blalange.org/commit/a8a0088b3ba3b64b6ab9179959bb4d4d33d3c514))


- Update terminal and add global crt mode - ([b624b8e](https://github.com/hexahigh/blalange.org/commit/b624b8e2adff8748e738f140f022420988f3a272))


- Improved terminal - ([0c76a60](https://github.com/hexahigh/blalange.org/commit/0c76a600803345a4257ca5a0664a23cbe9b46574))


- Update terminal - ([bf5e311](https://github.com/hexahigh/blalange.org/commit/bf5e311798a24a0cffdd51473b4d780edf008c52))


- Vrry epic terminal - ([2fdbcad](https://github.com/hexahigh/blalange.org/commit/2fdbcadc778d07cdb749a548148bd30526ca6498))


- Added autoscrolling - ([255eae6](https://github.com/hexahigh/blalange.org/commit/255eae6c60d8112900decf098206c490a8c4e4b3))


- Added metatags to terminal - ([261666a](https://github.com/hexahigh/blalange.org/commit/261666ace85e330bda2bb1bac7348bea4c5e0ad0))


- Updated terminal - ([3d9a61f](https://github.com/hexahigh/blalange.org/commit/3d9a61ffc685f3a388c870fcf02df33b123c4302))


- Update term - ([1053fab](https://github.com/hexahigh/blalange.org/commit/1053fabdd47ef181cd85467d471b73e38f57c723))


- Nam nam penger - ([9e2be33](https://github.com/hexahigh/blalange.org/commit/9e2be33e1471497b561c92ebb3e542e5edb86a62))


- Added help for commands and longer descriptions to the terminal - ([40e129a](https://github.com/hexahigh/blalange.org/commit/40e129aa333c0b999c773090cf9e0bc62590e30a))


- New donation - ([a189753](https://github.com/hexahigh/blalange.org/commit/a189753baf75ec6e0e46d8998c22572b690a9dfc))


- Switched from eval to function in the terminal - ([240ca8f](https://github.com/hexahigh/blalange.org/commit/240ca8f83931db97ddede6ee790e4adab3385904))


- Increased "pixel" size - ([1ff1273](https://github.com/hexahigh/blalange.org/commit/1ff1273fc151ee1be7a0728e14b2b2188adb4ceb))


- Passed playsound to exec - ([6214000](https://github.com/hexahigh/blalange.org/commit/62140006e7ccbe9f4aec6072bb0992c53d8c6f07))


- Updated terminal, cleanup and added httping - ([245be46](https://github.com/hexahigh/blalange.org/commit/245be461e89b6077b131ea90e075aa314d1df0e1))


- Merge pull request #150 from hexahigh:dev

fix analytics - ([1edfef9](https://github.com/hexahigh/blalange.org/commit/1edfef926e6309ffa99390e89ce1ba989ea2050d))


- Merge pull request #153 from hexahigh/dev

very epic terminal - ([fe5e971](https://github.com/hexahigh/blalange.org/commit/fe5e971f533e029674a3fc70aa54f750ccb6c8ac))


- Merge pull request #154 from hexahigh:dev

added metatags to terminal - ([03a6bfa](https://github.com/hexahigh/blalange.org/commit/03a6bfa1b36f1c92761c0b6735652f34d48dbe84))


- Merge pull request #155 from hexahigh:dev

nam nam penger - ([3624950](https://github.com/hexahigh/blalange.org/commit/36249502c43a94aed8a17cd5735524a45bf2347f))


- Merge pull request #156 from hexahigh:dev

updated terminal + new donation - ([cae1b29](https://github.com/hexahigh/blalange.org/commit/cae1b29b4a828e98d9b717b4aad3ce2b891d16d2))


- Merge remote-tracking branch 'origin/main' into dev - ([e1b24a7](https://github.com/hexahigh/blalange.org/commit/e1b24a73989a9bd835aac4cc3beee400ed3909c4))


- This might not be very safe - ([9f71ee1](https://github.com/hexahigh/blalange.org/commit/9f71ee18bc131cf381b41663e36aa44f06f4e6c6))


- Merge pull request #162 from hexahigh:dev

updated terminal and added httping - ([4c282f5](https://github.com/hexahigh/blalange.org/commit/4c282f5ff25813b341e339329258e67238832581))


- Merge remote-tracking branch 'origin/main' into dev - ([c46efcf](https://github.com/hexahigh/blalange.org/commit/c46efcf84ea8d3d2979acbe05b0eff645c1cc694))


- Merge pull request #163 from hexahigh:dev

this might not be very safe - ([596cb18](https://github.com/hexahigh/blalange.org/commit/596cb1800151f362aa0c5ba65b12b6121706b20b))


- Merge remote-tracking branch 'origin/main' into dev - ([158701c](https://github.com/hexahigh/blalange.org/commit/158701c3ed73d40b044df82050cd4e46066c1412))


- Maybe this will fix it? - ([f99203a](https://github.com/hexahigh/blalange.org/commit/f99203a34153b52c05cd16c3ae08a8537f748e59))


- Merge pull request #164 from hexahigh:dev

fix - ([ec82828](https://github.com/hexahigh/blalange.org/commit/ec828289dfac5fdd06d68a0d549ded10396e6c69))


- Merge remote-tracking branch 'origin/main' into dev - ([71b1f45](https://github.com/hexahigh/blalange.org/commit/71b1f45dfee5cee5d4ec94ffcc9f890f0d74b17a))


- God why - ([c6f4043](https://github.com/hexahigh/blalange.org/commit/c6f40434d2d621f00cb03921719c45c6ceee751b))


- Merge pull request #165 from hexahigh:dev

maybe this will fix it? - ([17a808c](https://github.com/hexahigh/blalange.org/commit/17a808caf1030d2fb8a5fec954b3a0c49b61e289))


- Merge remote-tracking branch 'origin/main' into dev - ([57a2a6e](https://github.com/hexahigh/blalange.org/commit/57a2a6e5ef6bd0585eaf962aa4499a28d5121085))


- :( - ([2e8c0cf](https://github.com/hexahigh/blalange.org/commit/2e8c0cf65a476e74f49c335a5a70959ac81863f1))


- Merge pull request #166 from hexahigh:dev

god why - ([9e93c8f](https://github.com/hexahigh/blalange.org/commit/9e93c8fbe49e6d9ac354a050b1dea8afaf6891ca))


- Merge remote-tracking branch 'origin/main' into dev - ([d24f596](https://github.com/hexahigh/blalange.org/commit/d24f5969f819474e7a293645666e2644a3367fb2))


- Started working on exec url - ([86af1a1](https://github.com/hexahigh/blalange.org/commit/86af1a1cc5b095adf33f0d4e262aca34690e14a8))


- Added docs - ([106fdf1](https://github.com/hexahigh/blalange.org/commit/106fdf1180da29b6d954e792cd0ec7e9ac9a3738))


- Uh - ([1537f79](https://github.com/hexahigh/blalange.org/commit/1537f7994e77ca4389c78112f6b3078e5df4cccc))


- Epic cipher - ([050b966](https://github.com/hexahigh/blalange.org/commit/050b966dced4204309dd04528982c689a630ee3f))


- Added tsil - ([51fb212](https://github.com/hexahigh/blalange.org/commit/51fb212d9390251773ac7cf796366667fef3932b))


- Merge branch 'dev' of https://github.com/hexahigh/blalange.org into dev - ([60254b4](https://github.com/hexahigh/blalange.org/commit/60254b45a2799f37948a06b98b1d1e498fb46c8c))


- Finished exec command - ([e035122](https://github.com/hexahigh/blalange.org/commit/e03512237a9b1760f43c8577ada625f90bbae4f2))


- Update terminal - ([729fe8b](https://github.com/hexahigh/blalange.org/commit/729fe8bf2df157d9cac889dfc035b12f8c819379))


- Improved exec url - ([947c25c](https://github.com/hexahigh/blalange.org/commit/947c25ca429ebc262e679cff5a8eac841381a087))


- Bump - ([08b8b0e](https://github.com/hexahigh/blalange.org/commit/08b8b0ea0faa868808f3c4d3f7f3238f1ebf0263))


- Merge pull request #167 from hexahigh:dev

:( - ([bd4204b](https://github.com/hexahigh/blalange.org/commit/bd4204bb391478efcdfa5e6e7fd7e27ee53ce6ff))


- Merge remote-tracking branch 'origin/main' into dev - ([5469465](https://github.com/hexahigh/blalange.org/commit/546946517e739fcf96fa18e606dd17c5a683420d))


- Added fuzzy searching to the terminal - ([e22d54b](https://github.com/hexahigh/blalange.org/commit/e22d54bb650ec8946ed94455d10a75c7e6c8b059))


- This might fix the issues with howler - ([6300a58](https://github.com/hexahigh/blalange.org/commit/6300a58a871441cc2b24c03054cfa7cee09b2b25))


- Bump - ([78d01d1](https://github.com/hexahigh/blalange.org/commit/78d01d177cbdd1b3df8b7992d25aedb5fd8c7c66))


- Bump flowbite-svelte from 0.45.0 to 0.46.1

Bumps [flowbite-svelte](https://github.com/themesberg/flowbite-svelte) from 0.45.0 to 0.46.1.
- [Release notes](https://github.com/themesberg/flowbite-svelte/releases)
- [Changelog](https://github.com/themesberg/flowbite-svelte/blob/main/CHANGELOG.md)
- [Commits](https://github.com/themesberg/flowbite-svelte/compare/v0.45.0...v0.46.1)

---
updated-dependencies:
- dependency-name: flowbite-svelte
  dependency-type: direct:development
  update-type: version-update:semver-minor
...

Signed-off-by: dependabot[bot] <support@github.com> - ([90358d1](https://github.com/hexahigh/blalange.org/commit/90358d166e11dd8109f962479454c80c6efd57ad))


- Merge pull request #171 from hexahigh/dependabot/npm_and_yarn/dev/flowbite-svelte-0.46.1

Bump flowbite-svelte from 0.45.0 to 0.46.1 - ([1b10728](https://github.com/hexahigh/blalange.org/commit/1b10728e8cfb97eac149b49468d5d14d67653e7b))


- Bump @fontsource/material-icons from 5.0.17 to 5.0.18

Bumps [@fontsource/material-icons](https://github.com/fontsource/font-files/tree/HEAD/fonts/google/material-icons) from 5.0.17 to 5.0.18.
- [Commits](https://github.com/fontsource/font-files/commits/HEAD/fonts/google/material-icons)

---
updated-dependencies:
- dependency-name: "@fontsource/material-icons"
  dependency-type: direct:production
  update-type: version-update:semver-patch
...

Signed-off-by: dependabot[bot] <support@github.com> - ([3bbf25c](https://github.com/hexahigh/blalange.org/commit/3bbf25c1ca262b3e354bcf071006cc20677f403d))


- Merge pull request #157 from hexahigh/dependabot/npm_and_yarn/dev/fontsource/material-icons-5.0.18

Bump @fontsource/material-icons from 5.0.17 to 5.0.18 - ([88ac529](https://github.com/hexahigh/blalange.org/commit/88ac52937466ac1377c9cc669201f5bcc5ae54e8))


- Bump @fontsource/dela-gothic-one from 5.0.18 to 5.0.19

Bumps [@fontsource/dela-gothic-one](https://github.com/fontsource/font-files/tree/HEAD/fonts/google/dela-gothic-one) from 5.0.18 to 5.0.19.
- [Changelog](https://github.com/fontsource/font-files/blob/main/fonts/google/dela-gothic-one/CHANGELOG.md)
- [Commits](https://github.com/fontsource/font-files/commits/HEAD/fonts/google/dela-gothic-one)

---
updated-dependencies:
- dependency-name: "@fontsource/dela-gothic-one"
  dependency-type: direct:production
  update-type: version-update:semver-patch
...

Signed-off-by: dependabot[bot] <support@github.com> - ([9966bd9](https://github.com/hexahigh/blalange.org/commit/9966bd9f44148014b959bca8bf90001e8513fd51))


- Merge pull request #159 from hexahigh/dependabot/npm_and_yarn/dev/fontsource/dela-gothic-one-5.0.19

Bump @fontsource/dela-gothic-one from 5.0.18 to 5.0.19 - ([145b93d](https://github.com/hexahigh/blalange.org/commit/145b93d7f382cbf2bf10226e272666cc78dfa109))


- Bump pocketbase from 0.21.1 to 0.21.2

Bumps [pocketbase](https://github.com/pocketbase/js-sdk) from 0.21.1 to 0.21.2.
- [Release notes](https://github.com/pocketbase/js-sdk/releases)
- [Changelog](https://github.com/pocketbase/js-sdk/blob/master/CHANGELOG.md)
- [Commits](https://github.com/pocketbase/js-sdk/compare/v0.21.1...v0.21.2)

---
updated-dependencies:
- dependency-name: pocketbase
  dependency-type: direct:production
  update-type: version-update:semver-patch
...

Signed-off-by: dependabot[bot] <support@github.com> - ([135c2f8](https://github.com/hexahigh/blalange.org/commit/135c2f806cfef3d8d06b96d1e6130a338efcf056))


- Merge pull request #161 from hexahigh/dependabot/npm_and_yarn/dev/pocketbase-0.21.2

Bump pocketbase from 0.21.1 to 0.21.2 - ([43584c4](https://github.com/hexahigh/blalange.org/commit/43584c4d81920267e919281827c68ab01a7ca0a7))


- Added jokes to the terminal - ([7509595](https://github.com/hexahigh/blalange.org/commit/75095956b984a0334da8a087e58708cc990cde69))


- Added exitpage - ([165ab4f](https://github.com/hexahigh/blalange.org/commit/165ab4f430b1dce44ab08b24ae9fa37ef43ae2cf))


- Merge pull request #168 from hexahigh:dev

2.2.11 - ([3d3f7eb](https://github.com/hexahigh/blalange.org/commit/3d3f7ebc2e8c4a63ec955d0ce0bf3045c589dba0))


- Merge pull request #170 from hexahigh/dev

added fuzzy search to the terminal and (hopefully) fixed the 500 error - ([08aaa47](https://github.com/hexahigh/blalange.org/commit/08aaa47179cbf65b2e000d8a49fc9c332745654e))


- Merge remote-tracking branch 'origin/main' into dev - ([2abf5c2](https://github.com/hexahigh/blalange.org/commit/2abf5c22ae30d18ed9e09c79ee1bb3b35ff2431c))


- Epic comment system which is totally not going to get abused and spammed - ([4478d8f](https://github.com/hexahigh/blalange.org/commit/4478d8fe119ccfce4ab928e62a893bbbfd6b2391))


- I totally did not forget to bump zhe versione no cap frfr - ([f13d3b5](https://github.com/hexahigh/blalange.org/commit/f13d3b50cb113a134ff329c624b76bd786f946d9))


- Merge pull request #176 from hexahigh/dev

added exit page, updated some packages and added jokes to the terminal - ([a9ca2eb](https://github.com/hexahigh/blalange.org/commit/a9ca2eb93cd1bd29317e2d5de5f1fd700f623021))


- Merge pull request #177 from hexahigh/dev

epic comment system which is totally not going to get abused and spammed - ([df0049d](https://github.com/hexahigh/blalange.org/commit/df0049d1e2ba8986403086d53ad2ae53ea162793))


- Merge remote-tracking branch 'origin/main' into dev - ([5c9521c](https://github.com/hexahigh/blalange.org/commit/5c9521cb8f336447241c4ee2acd0b2a782f26a5c))


- Added user tagging - ([895141f](https://github.com/hexahigh/blalange.org/commit/895141f228f798312352a11874b87d68a47dd7bc))


- Merge pull request #178 from hexahigh:dev

i totally did not forget to bump zhe versione no cap frfr - ([4eeb2e5](https://github.com/hexahigh/blalange.org/commit/4eeb2e54a9c9c84a1fe920ac1cd2b32a5c20fc54))


- Merge remote-tracking branch 'origin/main' into dev - ([3b318a3](https://github.com/hexahigh/blalange.org/commit/3b318a3cc49f09f21d7ea5b97b9a4387f05976ec))


- Logins now work in the comment section - ([3b8bbd5](https://github.com/hexahigh/blalange.org/commit/3b8bbd55105c2748d03f1b8fe3e1d97067e98674))


- Merge pull request #179 from hexahigh:dev

added user tagging - ([bdd3c1f](https://github.com/hexahigh/blalange.org/commit/bdd3c1f0007545b7f6bc36491b2f597b353be908))


- Merge remote-tracking branch 'origin/main' into dev - ([86f5352](https://github.com/hexahigh/blalange.org/commit/86f53521e164803bd83ddb89c33507b40713fc7e))


- Added logout button - ([9e4cbae](https://github.com/hexahigh/blalange.org/commit/9e4cbaea4d05d1d458da3e1358e8aad12f1fe6a7))


- Add redirect from www to regular site - ([ef5e4a8](https://github.com/hexahigh/blalange.org/commit/ef5e4a8bb94bc6cb46620f40e296089a7e6d46a6))


- Bump - ([f2cd320](https://github.com/hexahigh/blalange.org/commit/f2cd320618668ffe9ba4d8c466975df50b0a90f0))


- Updated the colors - ([bdf968e](https://github.com/hexahigh/blalange.org/commit/bdf968ec91bd320362fa8dfb4fc6a83523c3acb8))


- Updated donations and changed some css - ([fccb035](https://github.com/hexahigh/blalange.org/commit/fccb035fd4e7929c6de90591ee28753571e5f49b))


- Cleanup unused fonts - ([8af17a5](https://github.com/hexahigh/blalange.org/commit/8af17a5527c8b8c3e54ae7bb545e961c1bb598c4))


- Bump - ([b9fe272](https://github.com/hexahigh/blalange.org/commit/b9fe2720731a51b09a883a6947966558c5a25c1f))


- Compressed the redirect-bg images - ([3cf3b76](https://github.com/hexahigh/blalange.org/commit/3cf3b764f33d00a7f92149c89fe67166b440563d))


- Merge pull request #180 from hexahigh:dev

logins now work in the comment section - ([5b5e9c7](https://github.com/hexahigh/blalange.org/commit/5b5e9c732ee1f65e082486e2fffdf976f9c0bb51))


- Merge pull request #181 from hexahigh:dev

added logout button to the login page and added redirect from www - ([64cac09](https://github.com/hexahigh/blalange.org/commit/64cac095e883fb0a49f01836acaa81291764c660))


- Merge remote-tracking branch 'origin/main' into dev - ([216d143](https://github.com/hexahigh/blalange.org/commit/216d1431eb12b90c7f16365e2cd6ce41bd098056))


- Updated login system - ([3933816](https://github.com/hexahigh/blalange.org/commit/3933816ac6ed30d213c9d5f8ae601a86fa78ea1e))


- Updated analytics - ([4a6e693](https://github.com/hexahigh/blalange.org/commit/4a6e693efbac879cbab9c8601b8f7819df59cfd6))


- Merge pull request #183 from hexahigh:dev

removed unused css, updated colors and compressed redirect images - ([0b30b14](https://github.com/hexahigh/blalange.org/commit/0b30b1479cd37d5d4124cc85b7ac1492ce7e3b00))


- Merge remote-tracking branch 'origin/main' into dev - ([4f29714](https://github.com/hexahigh/blalange.org/commit/4f297146d3c178e66236a293afdb49cee259584c))


- Update comment system - ([4fb3647](https://github.com/hexahigh/blalange.org/commit/4fb36476b563c982c3f1ee02a7ee1dd27937f935))


- Bump - ([e7ce471](https://github.com/hexahigh/blalange.org/commit/e7ce471ed686d1aedced7eff7dbd7005ca86ddad))


- Merge pull request #185 from hexahigh:dev

updated login system and analytics - ([19fb579](https://github.com/hexahigh/blalange.org/commit/19fb57961e030d481cbbe3a960e2370b4f7ff3a4))


- Merge remote-tracking branch 'origin/main' into dev - ([d3f2cd2](https://github.com/hexahigh/blalange.org/commit/d3f2cd27e8c1b8ecd7bd2cef8d9afe9899d21723))


- Comments will now be fetched 25 at a time - ([e688b98](https://github.com/hexahigh/blalange.org/commit/e688b987f72baf17f85880c5fb9cf767a7df1f9b))


- Merge pull request #186 from hexahigh:dev

update comment system - ([8f9bbdb](https://github.com/hexahigh/blalange.org/commit/8f9bbdbbd8bc26bb8ddbd1852dc1df84569e7ed1))


- Merge remote-tracking branch 'origin/main' into dev - ([bfbd4dd](https://github.com/hexahigh/blalange.org/commit/bfbd4dd9b0b23464baf145442e3901064035679f))


- Added custom badges - ([df0ec5e](https://github.com/hexahigh/blalange.org/commit/df0ec5e53d91e4a00c506ec0910964ec94087100))


- Add svg badges, might use them in the future - ([086457e](https://github.com/hexahigh/blalange.org/commit/086457e00aeb1061912a51de0a0b674e42145d2a))


- Merge pull request #187 from hexahigh:dev

comments will now be fetched 25 at a time - ([a833481](https://github.com/hexahigh/blalange.org/commit/a8334818787a007d9d950434cf5cadc5f92559dd))


- Merge remote-tracking branch 'origin/main' into dev - ([c3c2e69](https://github.com/hexahigh/blalange.org/commit/c3c2e6998077671d161d183ae96f3083387c3758))


- Added material symbols - ([2040cd0](https://github.com/hexahigh/blalange.org/commit/2040cd0fe5a8e0eee86517bce18b744176494cbf))


- Bump @vite-pwa/sveltekit from 0.4.0 to 0.5.0

Bumps [@vite-pwa/sveltekit](https://github.com/vite-pwa/sveltekit) from 0.4.0 to 0.5.0.
- [Release notes](https://github.com/vite-pwa/sveltekit/releases)
- [Commits](https://github.com/vite-pwa/sveltekit/compare/v0.4.0...v0.5.0)

---
updated-dependencies:
- dependency-name: "@vite-pwa/sveltekit"
  dependency-type: direct:development
  update-type: version-update:semver-minor
...

Signed-off-by: dependabot[bot] <support@github.com> - ([5c984d7](https://github.com/hexahigh/blalange.org/commit/5c984d7c92c68edda3fb6b501190280a6b6f851d))


- Merge pull request #182 from hexahigh/dependabot/npm_and_yarn/dev/vite-pwa/sveltekit-0.5.0

Bump @vite-pwa/sveltekit from 0.4.0 to 0.5.0 - ([0da1165](https://github.com/hexahigh/blalange.org/commit/0da11659c97d97bb8b73a1ba4e3383456029bd2b))


- Episk chat - ([4989f85](https://github.com/hexahigh/blalange.org/commit/4989f85d036bc8a92c00db1c4f19936716946d51))


- Update chat - ([a8ea516](https://github.com/hexahigh/blalange.org/commit/a8ea5167cebb942545cb34385558e530f8278335))


- Merge branch 'dev' of https://github.com/hexahigh/blalange.org into dev - ([917c7c6](https://github.com/hexahigh/blalange.org/commit/917c7c60f653596136d359af45f0536bb6d9556e))


- Added typescript and updated the chat - ([bd8ae3c](https://github.com/hexahigh/blalange.org/commit/bd8ae3ca6368e8e269672d4f144a151b2780310f))


- Merge pull request #188 from hexahigh:dev

custom badges - ([4bf578f](https://github.com/hexahigh/blalange.org/commit/4bf578fd7caf4d38cd919e807b4c1116376b42ac))


- Merge remote-tracking branch 'origin/main' into dev - ([e13aae8](https://github.com/hexahigh/blalange.org/commit/e13aae824df2c9c19a9881d34c7ba04faab36c24))


- Updated chat and turned some stuff into typescript - ([338c366](https://github.com/hexahigh/blalange.org/commit/338c366c91650f2745124597bcbe6431a25197e5))


- Update chat and comments - ([ec6aa64](https://github.com/hexahigh/blalange.org/commit/ec6aa64dcf3b812bf5ba419171b99de68ddba2fc))


- Merge pull request #190 from hexahigh:dev

added chat + typescript - ([c909eee](https://github.com/hexahigh/blalange.org/commit/c909eee081ea4a04a2967f0a81b32a28e29924f8))


- Merge remote-tracking branch 'origin/main' into dev - ([efbdc83](https://github.com/hexahigh/blalange.org/commit/efbdc8300d6ff28ae48c2ba6812d14df92af5c8c))


- Added image optimizer - ([30e85d6](https://github.com/hexahigh/blalange.org/commit/30e85d65de45f4aaa68d5eb9125f8b705cf1a491))


- Why - ([0c5e2dd](https://github.com/hexahigh/blalange.org/commit/0c5e2dd2f45f23dc4684fbe915e0e310bcbbfb8f))


- That is probably why - ([5a87d09](https://github.com/hexahigh/blalange.org/commit/5a87d09a1c2c4960e19e2c55329c2bc69ce327f5))


- Im going to have to fix that - ([0e2d64a](https://github.com/hexahigh/blalange.org/commit/0e2d64a9295dc3ca309ab4ee1078599e686953b4))


- Update oxipng - ([d861e67](https://github.com/hexahigh/blalange.org/commit/d861e67f8b5f5616d65c4a46be866c806000242d))


- Zopfli might be a little overkill - ([0adc5d7](https://github.com/hexahigh/blalange.org/commit/0adc5d7632979bdae982441c7d939156f38d3ed6))


- :( - ([19df252](https://github.com/hexahigh/blalange.org/commit/19df252b56fee73d1cdd93db4061d099e5bddfce))


- I hate this - ([8b2528e](https://github.com/hexahigh/blalange.org/commit/8b2528ecc0b1b2ea273bf344e2bc5c44007cadd8))


- This should make it significantly faster - ([2354dee](https://github.com/hexahigh/blalange.org/commit/2354deed99b8d2aeab31e0e99ccb62941427bf65))


- Update betterimg - ([0cdad9b](https://github.com/hexahigh/blalange.org/commit/0cdad9b9f9680fd7b9176b47d67af00fdffeaa91))


- New command - ([c3d02e1](https://github.com/hexahigh/blalange.org/commit/c3d02e14df6b434d04fb8626e2231022b3dc81ee))


- Update command system - ([5474649](https://github.com/hexahigh/blalange.org/commit/5474649fc6d460438c49a5699d87b97d7d22c201))


- Added bad apple - ([574f838](https://github.com/hexahigh/blalange.org/commit/574f838013d9d219b383e727054b4b7b8748a538))


- Bump - ([ccd15ba](https://github.com/hexahigh/blalange.org/commit/ccd15baa994a0ab5d2360f0890cde9944f2b0774))


- Merge pull request #191 from hexahigh/dev

update chat and comments - ([22763dc](https://github.com/hexahigh/blalange.org/commit/22763dc9f0ae12cb3710765d61f9bc6b3ad39017))


- Merge pull request #192 from hexahigh/dev

added image optimizer - ([6780724](https://github.com/hexahigh/blalange.org/commit/67807240a6d24c960de78cd8f4abfb0b15ce4b6a))


- Merge pull request #193 from hexahigh/dev

fix? - ([6390a31](https://github.com/hexahigh/blalange.org/commit/6390a31a7fd8763d374b83f74b03001102914d8a))


- Merge remote-tracking branch 'origin/main' into dev - ([56457ab](https://github.com/hexahigh/blalange.org/commit/56457ab58e21095cc081c3dbcfb88a3375cb2241))


- Added speed control to bad-apple - ([07b6a82](https://github.com/hexahigh/blalange.org/commit/07b6a824ff31953083fcaf840db9b051b694ec7d))


- Merge pull request #195 from hexahigh:dev

changed command system and added bad-apple - ([ab5fde6](https://github.com/hexahigh/blalange.org/commit/ab5fde6c1c348db5b7938c1c9bb8b86eda7d4567))


- Merge remote-tracking branch 'origin/main' into dev - ([50a6cfb](https://github.com/hexahigh/blalange.org/commit/50a6cfb284118d735b80311563b5a3fd17bbfc4b))


- Merge pull request #196 from hexahigh:dev

added speed control to bad-apple - ([b3d4f9c](https://github.com/hexahigh/blalange.org/commit/b3d4f9c57b1b0812da8ef1428d62743d467ac390))


- Merge remote-tracking branch 'origin/main' into dev - ([2abcfb9](https://github.com/hexahigh/blalange.org/commit/2abcfb9bd2c16cabf137547cb87db95294404382))


- Updated video system - ([46b3ce3](https://github.com/hexahigh/blalange.org/commit/46b3ce371f4d46dd482e101bf0b50f186d4d0ee7))


- Added go video - ([e5a89c5](https://github.com/hexahigh/blalange.org/commit/e5a89c540a05a14d550a07d31e89cdadbc4dcfa7))


- Merge pull request #197 from hexahigh:dev

fixed audio not being synced on slower connections and made the video format more flexible - ([57f381e](https://github.com/hexahigh/blalange.org/commit/57f381edb7b2f917d8936ecdf7d9459ef1d468ec))


- Merge remote-tracking branch 'origin/main' into dev - ([8c0891e](https://github.com/hexahigh/blalange.org/commit/8c0891e7703547e68ae7a8207dffc3f5f1c23422))


- Bump vite from 5.2.10 to 5.2.11

Bumps [vite](https://github.com/vitejs/vite/tree/HEAD/packages/vite) from 5.2.10 to 5.2.11.
- [Release notes](https://github.com/vitejs/vite/releases)
- [Changelog](https://github.com/vitejs/vite/blob/main/packages/vite/CHANGELOG.md)
- [Commits](https://github.com/vitejs/vite/commits/v5.2.11/packages/vite)

---
updated-dependencies:
- dependency-name: vite
  dependency-type: direct:development
  update-type: version-update:semver-patch
...

Signed-off-by: dependabot[bot] <support@github.com> - ([57a2e00](https://github.com/hexahigh/blalange.org/commit/57a2e0002c93b6258bfbc2d6412cfc72bc777169))


- Merge pull request #189 from hexahigh/dependabot/npm_and_yarn/dev/vite-5.2.11

Bump vite from 5.2.10 to 5.2.11 - ([0b49636](https://github.com/hexahigh/blalange.org/commit/0b49636bfab9d69cb4a9cbab074550495ae8da62))


- Bump tsparticles from 3.3.0 to 3.4.0

Bumps [tsparticles](https://github.com/tsparticles/tsparticles/tree/HEAD/bundles/full) from 3.3.0 to 3.4.0.
- [Release notes](https://github.com/tsparticles/tsparticles/releases)
- [Changelog](https://github.com/tsparticles/tsparticles/blob/main/bundles/full/CHANGELOG.md)
- [Commits](https://github.com/tsparticles/tsparticles/commits/v3.4.0/bundles/full)

---
updated-dependencies:
- dependency-name: tsparticles
  dependency-type: direct:production
  update-type: version-update:semver-minor
...

Signed-off-by: dependabot[bot] <support@github.com> - ([b8dd28d](https://github.com/hexahigh/blalange.org/commit/b8dd28d1a445533d1006c379c8cf7b23baf6a3ce))


- Merge pull request #198 from hexahigh/dependabot/npm_and_yarn/dev/tsparticles-3.4.0

Bump tsparticles from 3.3.0 to 3.4.0 - ([91b5f40](https://github.com/hexahigh/blalange.org/commit/91b5f40c09c4bc321c4bfe42541593f471f183f0))


- Improved video support - ([b28b545](https://github.com/hexahigh/blalange.org/commit/b28b5457362f8163a57f705f5dc5503dc39b7762))


- Bump - ([d7a52ae](https://github.com/hexahigh/blalange.org/commit/d7a52aeda096cdfa1e5866f7a8fd2fb3c179423a))


- Merge pull request #201 from hexahigh/dev

updated video - ([61347c9](https://github.com/hexahigh/blalange.org/commit/61347c9f21a8e55bfc862581e595b8e64c70fcab))


- Merge remote-tracking branch 'origin/main' into dev - ([c5e9771](https://github.com/hexahigh/blalange.org/commit/c5e97715d4e13615392a3563c0b28bc5cf6bd073))


- This should fix it - ([abf2525](https://github.com/hexahigh/blalange.org/commit/abf252577aedef37dbe5f94e964fa0a1b706e5b3))


- Merge pull request #205 from hexahigh:dev

improved video support - ([b36fe95](https://github.com/hexahigh/blalange.org/commit/b36fe951b0acf89309bd5bad6d3d716ebaa8e686))


- Merge remote-tracking branch 'origin/main' into dev - ([a90e1fc](https://github.com/hexahigh/blalange.org/commit/a90e1fc7bb6fbf6d24891b8acb881e68618e443c))


- :( - ([afdd0ca](https://github.com/hexahigh/blalange.org/commit/afdd0cad168bb537d7a0568168ccefb8bb5b3b7b))


- Im starting to get depression - ([1b22f51](https://github.com/hexahigh/blalange.org/commit/1b22f51ea2e497439bde3bd090e03b69a93b5132))


- Please work - ([edffbe6](https://github.com/hexahigh/blalange.org/commit/edffbe62bd788b0884cb3d34310d9a9ab3b0f185))


- Why - ([777b9df](https://github.com/hexahigh/blalange.org/commit/777b9dfa782292f0a13d2598de99d62856ec7019))


- Time to move to vercel - ([b5930f9](https://github.com/hexahigh/blalange.org/commit/b5930f968d954170e5864ec74fed54ee08b93753))


- Merge pull request #206 from hexahigh:dev

this should fix it - ([d572f19](https://github.com/hexahigh/blalange.org/commit/d572f19390a385c0a6d2f15e2e092fd46a8137b3))


- Merge pull request #207 from hexahigh/dev

i give up, we are moving to vercel - ([3df0710](https://github.com/hexahigh/blalange.org/commit/3df071005f13a6f77e2d738a841ded0e4475b37c))


- Merge remote-tracking branch 'origin/main' into dev - ([19e0afb](https://github.com/hexahigh/blalange.org/commit/19e0afb6ce2fc986ababedd19df94c2d095d0bed))


- Finally - ([516f8f8](https://github.com/hexahigh/blalange.org/commit/516f8f8e1c4ea4f4e6f68ae2f6e0a25701570360))


- No more go - ([7e9f5c9](https://github.com/hexahigh/blalange.org/commit/7e9f5c94fd8ef54ebd2bdc7cf06d329e0490dab3))


- Merge pull request #208 from hexahigh:dev

time to move to vercel - ([6481fa3](https://github.com/hexahigh/blalange.org/commit/6481fa3560ac9bce2c6a2cbe44ebfd40ba378dac))


- Merge pull request #209 from hexahigh:dev

finally - ([6aed85a](https://github.com/hexahigh/blalange.org/commit/6aed85a3a1a775c6a374a8875c9a96f5cd107454))


- Merge remote-tracking branch 'origin/main' into dev - ([00da138](https://github.com/hexahigh/blalange.org/commit/00da1381da254b7e106c76a56f97680e23bbb7ea))


- Increase chat limits - ([a7c0635](https://github.com/hexahigh/blalange.org/commit/a7c06359eab4d6d92084fa05fca055bc88c379de))


- We are now dnt complient - ([359546f](https://github.com/hexahigh/blalange.org/commit/359546f5d37adedf2c42c8e27380d043a0ae78f9))


- Added privacy policy - ([fe83a16](https://github.com/hexahigh/blalange.org/commit/fe83a16432b297b3f7c265eb661f474421939de9))


- Bumpy - ([6016106](https://github.com/hexahigh/blalange.org/commit/601610661c9f513f1d7fa7f395d8bc0e0a897515))


- Fiks skrivefeil - ([e73bfc3](https://github.com/hexahigh/blalange.org/commit/e73bfc308b414a1ff12ddfe4770cb4c324d44839))


- Update privacy policy - ([226b642](https://github.com/hexahigh/blalange.org/commit/226b6421bb575c11cb076e7e6397a64d7501e603))


- Merge pull request #210 from hexahigh:dev

no more go - ([831f44f](https://github.com/hexahigh/blalange.org/commit/831f44f6202f56e486a816e503079c2a7574f6c0))


- Merge remote-tracking branch 'origin/main' into dev - ([48e2e07](https://github.com/hexahigh/blalange.org/commit/48e2e07d2349466f9fc4a56e537c82721b6ff031))


- Update metatags - ([6cf35e5](https://github.com/hexahigh/blalange.org/commit/6cf35e573c79d31fe66fd148127b3e770d7360e2))


- Optimized chat loading speed - ([796caa4](https://github.com/hexahigh/blalange.org/commit/796caa4dcb85bbd5a41a7cd1981247b080023885))


- ---
updated-dependencies:
- dependency-name: "@sveltejs/kit"
  dependency-type: direct:development
  update-type: version-update:semver-patch
...

Signed-off-by: dependabot[bot] <support@github.com> - ([5e61291](https://github.com/hexahigh/blalange.org/commit/5e61291b496be3fc96b23b3577980274ca3c777f))


- Merge pull request #212 from hexahigh/dependabot/npm_and_yarn/dev/sveltejs/kit-2.5.10

Bump @sveltejs/kit from 2.5.7 to 2.5.10 - ([d181af5](https://github.com/hexahigh/blalange.org/commit/d181af5abed3c4160ca55a12abc66fc66439a038))


- Bump audiomotion-analyzer from 4.4.0 to 4.5.0

Bumps [audiomotion-analyzer](https://github.com/hvianna/audioMotion-analyzer) from 4.4.0 to 4.5.0.
- [Release notes](https://github.com/hvianna/audioMotion-analyzer/releases)
- [Changelog](https://github.com/hvianna/audioMotion-analyzer/blob/master/Changelog.md)
- [Commits](https://github.com/hvianna/audioMotion-analyzer/compare/4.4.0...4.5.0)

---
updated-dependencies:
- dependency-name: audiomotion-analyzer
  dependency-type: direct:production
  update-type: version-update:semver-minor
...

Signed-off-by: dependabot[bot] <support@github.com> - ([a7da49e](https://github.com/hexahigh/blalange.org/commit/a7da49eac01338bdf43e40117581d19806b5f200))


- Merge pull request #200 from hexahigh/dependabot/npm_and_yarn/dev/audiomotion-analyzer-4.5.0

Bump audiomotion-analyzer from 4.4.0 to 4.5.0 - ([19de99d](https://github.com/hexahigh/blalange.org/commit/19de99da93801c070ea598e3b0621a035c21d59d))


- Bump flowbite-svelte-icons from 1.6.0 to 1.6.1

Bumps [flowbite-svelte-icons](https://github.com/themesberg/flowbite-svelte-icons) from 1.6.0 to 1.6.1.
- [Release notes](https://github.com/themesberg/flowbite-svelte-icons/releases)
- [Changelog](https://github.com/themesberg/flowbite-svelte-icons/blob/main/CHANGELOG.md)
- [Commits](https://github.com/themesberg/flowbite-svelte-icons/compare/v1.6.0...v1.6.1)

---
updated-dependencies:
- dependency-name: flowbite-svelte-icons
  dependency-type: direct:production
  update-type: version-update:semver-patch
...

Signed-off-by: dependabot[bot] <support@github.com> - ([81f4624](https://github.com/hexahigh/blalange.org/commit/81f4624e80ceabb43e4d35a09d7024dbb778343a))


- Merge pull request #199 from hexahigh/dependabot/npm_and_yarn/dev/flowbite-svelte-icons-1.6.1

Bump flowbite-svelte-icons from 1.6.0 to 1.6.1 - ([221ceee](https://github.com/hexahigh/blalange.org/commit/221ceee1f86fc9e4ac33ed5c44778e8142d0b055))


- Merge branch 'dev' of https://github.com/hexahigh/blalange.org into dev - ([beeb0c7](https://github.com/hexahigh/blalange.org/commit/beeb0c77a9d929bc3e3e79c6034600a834025280))


- Added avatar cache - ([079981b](https://github.com/hexahigh/blalange.org/commit/079981b683769c0d113af11ff02947c66a91a675))


- Merge pull request #213 from hexahigh:dev

personvernerklæring - ([f5dc03c](https://github.com/hexahigh/blalange.org/commit/f5dc03c21cc49b7769c03ff0788f8edac4eeb5c0))


- Merge pull request #215 from hexahigh/dev

update metatags and fixed autoscrolling in chat - ([94ed07f](https://github.com/hexahigh/blalange.org/commit/94ed07f258433641304c6428ac6957811d72db48))


- Merge remote-tracking branch 'origin/main' into dev - ([cc4cf91](https://github.com/hexahigh/blalange.org/commit/cc4cf910b19dede10758eb07c86cd0b7a14fd122))


- Update avatar system - ([bbf950f](https://github.com/hexahigh/blalange.org/commit/bbf950fde55df7324565ac45dcba441cccf0f19d))


- Merge pull request #216 from hexahigh:dev

speed improvements in the chat - ([a298bd3](https://github.com/hexahigh/blalange.org/commit/a298bd372a1cda96325f7c84b22a7481f278a331))


- Merge remote-tracking branch 'origin/main' into dev - ([82e3719](https://github.com/hexahigh/blalange.org/commit/82e37191c36249aca990b996f8aea14129d8dde3))


- Comments now properly render v2 badges - ([a957ba3](https://github.com/hexahigh/blalange.org/commit/a957ba373e6f00e4a9f9ae664505752f0982807f))


- Merge pull request #217 from hexahigh:dev

update avatar system - ([2d242b3](https://github.com/hexahigh/blalange.org/commit/2d242b38e938ec5d3bb07aac4407b3874ce01069))


- Merge remote-tracking branch 'origin/main' into dev - ([cc90b58](https://github.com/hexahigh/blalange.org/commit/cc90b58346b0aae70a2f39993fed1e4b2232fa30))


- Update metatags docs - ([46f68aa](https://github.com/hexahigh/blalange.org/commit/46f68aae2b279206ffa13db1a134422123e3dad6))


- Added custom iconify endpoint - ([e76dd2a](https://github.com/hexahigh/blalange.org/commit/e76dd2a7d7aa23959846d0a483126ddde3e295cd))


- Made public api the primary - ([cf06793](https://github.com/hexahigh/blalange.org/commit/cf0679372323931c408e53e3c8956c4e1045090f))


- Removed custom iconify api - ([cc387e8](https://github.com/hexahigh/blalange.org/commit/cc387e805c66228211b4f8f8e47903cbd6c7be72))


- Epic new article system - ([2e00038](https://github.com/hexahigh/blalange.org/commit/2e00038d8cf0423c2b246ad9d2e917a80cfb4d3a))


- Merge pull request #218 from hexahigh:dev

comments now properly render v2 badges - ([083711b](https://github.com/hexahigh/blalange.org/commit/083711b07a02b72900d20cc5d27b4dc4968d8e9a))


- Merge pull request #222 from hexahigh/dev

~~ added ~~ custom iconify api - ([9acca7f](https://github.com/hexahigh/blalange.org/commit/9acca7f3545b884d1c9b7f32ade95a75b7b2e64f))


- Merge remote-tracking branch 'origin/main' into dev - ([45a9351](https://github.com/hexahigh/blalange.org/commit/45a9351db62ae77dc3195c6e9f4b07de958ea7da))


- I wonder if this makes it any faster - ([b62938d](https://github.com/hexahigh/blalange.org/commit/b62938dd4c887e0d3a601cdafee09d8ade3ecf45))


- Update article system, again - ([c467ecd](https://github.com/hexahigh/blalange.org/commit/c467ecdc0ad2043ccdf78658cd3103abba24dc3f))


- Improve error handling - ([e029da0](https://github.com/hexahigh/blalange.org/commit/e029da08330b17327103eafcba5c98102dffffcb))


- Bump @tsparticles/engine from 3.3.0 to 3.4.0

Bumps [@tsparticles/engine](https://github.com/tsparticles/tsparticles/tree/HEAD/engine) from 3.3.0 to 3.4.0.
- [Release notes](https://github.com/tsparticles/tsparticles/releases)
- [Changelog](https://github.com/tsparticles/tsparticles/blob/main/engine/CHANGELOG.md)
- [Commits](https://github.com/tsparticles/tsparticles/commits/v3.4.0/engine)

---
updated-dependencies:
- dependency-name: "@tsparticles/engine"
  dependency-type: direct:production
  update-type: version-update:semver-minor
...

Signed-off-by: dependabot[bot] <support@github.com> - ([9d10773](https://github.com/hexahigh/blalange.org/commit/9d10773dd9f98340a3c23bef24fc7c4130406c37))


- Merge pull request #203 from hexahigh/dependabot/npm_and_yarn/dev/tsparticles/engine-3.4.0

Bump @tsparticles/engine from 3.3.0 to 3.4.0 - ([5881e57](https://github.com/hexahigh/blalange.org/commit/5881e574c25334ce4b2a4cc361a0d74e3fc93216))


- Bump tailwindcss from 3.4.3 to 3.4.4

Bumps [tailwindcss](https://github.com/tailwindlabs/tailwindcss) from 3.4.3 to 3.4.4.
- [Release notes](https://github.com/tailwindlabs/tailwindcss/releases)
- [Changelog](https://github.com/tailwindlabs/tailwindcss/blob/v3.4.4/CHANGELOG.md)
- [Commits](https://github.com/tailwindlabs/tailwindcss/compare/v3.4.3...v3.4.4)

---
updated-dependencies:
- dependency-name: tailwindcss
  dependency-type: direct:development
  update-type: version-update:semver-patch
...

Signed-off-by: dependabot[bot] <support@github.com> - ([a2ddaa0](https://github.com/hexahigh/blalange.org/commit/a2ddaa0906e6803027b469012c0472e86a49e9db))


- Merge pull request #219 from hexahigh/dependabot/npm_and_yarn/dev/tailwindcss-3.4.4

Bump tailwindcss from 3.4.3 to 3.4.4 - ([f39c5a7](https://github.com/hexahigh/blalange.org/commit/f39c5a7a7d3be5738b24369dc5f09df91d27d285))


- Bump @fontsource-variable/material-symbols-outlined

Bumps [@fontsource-variable/material-symbols-outlined](https://github.com/fontsource/font-files/tree/HEAD/fonts/variable/material-symbols-outlined) from 5.0.30 to 5.0.33.
- [Commits](https://github.com/fontsource/font-files/commits/HEAD/fonts/variable/material-symbols-outlined)

---
updated-dependencies:
- dependency-name: "@fontsource-variable/material-symbols-outlined"
  dependency-type: direct:production
  update-type: version-update:semver-patch
...

Signed-off-by: dependabot[bot] <support@github.com> - ([d3325fa](https://github.com/hexahigh/blalange.org/commit/d3325fabd3ac8f3f8d0d7a8133183080d4c38a94))


- Merge pull request #220 from hexahigh/dependabot/npm_and_yarn/dev/fontsource-variable/material-symbols-outlined-5.0.33

Bump @fontsource-variable/material-symbols-outlined from 5.0.30 to 5.0.33 - ([bbf8429](https://github.com/hexahigh/blalange.org/commit/bbf84297555397b383988ed4a47b6b07807aa17d))


- Bump svelte from 4.2.15 to 4.2.18

Bumps [svelte](https://github.com/sveltejs/svelte/tree/HEAD/packages/svelte) from 4.2.15 to 4.2.18.
- [Release notes](https://github.com/sveltejs/svelte/releases)
- [Changelog](https://github.com/sveltejs/svelte/blob/svelte@4.2.18/packages/svelte/CHANGELOG.md)
- [Commits](https://github.com/sveltejs/svelte/commits/svelte@4.2.18/packages/svelte)

---
updated-dependencies:
- dependency-name: svelte
  dependency-type: direct:development
  update-type: version-update:semver-patch
...

Signed-off-by: dependabot[bot] <support@github.com> - ([ca31ccc](https://github.com/hexahigh/blalange.org/commit/ca31ccc6d14388bcd9bc29909f303574e0f9a208))


- Merge pull request #214 from hexahigh/dependabot/npm_and_yarn/dev/svelte-4.2.18

Bump svelte from 4.2.15 to 4.2.18 - ([826599f](https://github.com/hexahigh/blalange.org/commit/826599fb48a16f02ec0c15bc4bb2ad2b8dfd06fe))


- Merge branch 'dev' of https://github.com/hexahigh/blalange.org into dev - ([18eef09](https://github.com/hexahigh/blalange.org/commit/18eef09a15014c6c9c4343fb80d309ae929df950))


- Merge pull request #223 from hexahigh/dev

epic new article system - ([32b6203](https://github.com/hexahigh/blalange.org/commit/32b62034f9439770b256a77fcfc8aa5b2db53b0c))


- Bump braces in the npm_and_yarn group across 1 directory

Bumps the npm_and_yarn group with 1 update in the / directory: [braces](https://github.com/micromatch/braces).


Updates `braces` from 3.0.2 to 3.0.3
- [Changelog](https://github.com/micromatch/braces/blob/master/CHANGELOG.md)
- [Commits](https://github.com/micromatch/braces/compare/3.0.2...3.0.3)

---
updated-dependencies:
- dependency-name: braces
  dependency-type: indirect
  dependency-group: npm_and_yarn
...

Signed-off-by: dependabot[bot] <support@github.com> - ([e6776bb](https://github.com/hexahigh/blalange.org/commit/e6776bb92bede02d206b65c9e842506b6eb392a6))


- Merge pull request #224 from hexahigh/dependabot/npm_and_yarn/npm_and_yarn-5134b82be1

Bump braces from 3.0.2 to 3.0.3 in the npm_and_yarn group across 1 directory - ([50b6cb0](https://github.com/hexahigh/blalange.org/commit/50b6cb09ada45ae0f4dad6b148e923d92f9f64ea))


- Merge branch 'main' into dev - ([e40f0f7](https://github.com/hexahigh/blalange.org/commit/e40f0f72e764267b25cd8b17497482fa629ba0a0))


- Cleaned up article page - ([ed0e228](https://github.com/hexahigh/blalange.org/commit/ed0e228beb351b166db0f9fee75651c40bfda1ed))


- Update error on articles site - ([1615ec4](https://github.com/hexahigh/blalange.org/commit/1615ec40adcecca4b3d5e2aa707f480ce343aa14))


- Added ability to hide articles and update config system - ([2258a95](https://github.com/hexahigh/blalange.org/commit/2258a959ec1c87f8ac3ce809382f05546af36481))


- Bump - ([811789d](https://github.com/hexahigh/blalange.org/commit/811789d708b0e2fec84375eb6aab8f27ffb34f4c))


- Merge pull request #225 from hexahigh:dev

v2.5.1 - ([f9ef381](https://github.com/hexahigh/blalange.org/commit/f9ef3810969f981b3a93779a902828a1e9fe5bd8))


- Merge pull request #226 from hexahigh:dev

cleaned up article page - ([5097381](https://github.com/hexahigh/blalange.org/commit/5097381a56e10aac1f3952cd69d86bcd9a16585a))


- Merge remote-tracking branch 'origin/main' into dev - ([842efb9](https://github.com/hexahigh/blalange.org/commit/842efb9b8e8ccb05616b9654d5c7552ba46a42ad))


- Add backup icon servers - ([974b08e](https://github.com/hexahigh/blalange.org/commit/974b08e42d73488e1a4c1271def48ef31b39fec3))


- Bump @tsparticles/confetti from 3.3.0 to 3.4.0

Bumps [@tsparticles/confetti](https://github.com/tsparticles/tsparticles/tree/HEAD/bundles/confetti) from 3.3.0 to 3.4.0.
- [Release notes](https://github.com/tsparticles/tsparticles/releases)
- [Changelog](https://github.com/tsparticles/tsparticles/blob/main/bundles/confetti/CHANGELOG.md)
- [Commits](https://github.com/tsparticles/tsparticles/commits/v3.4.0/bundles/confetti)

---
updated-dependencies:
- dependency-name: "@tsparticles/confetti"
  dependency-type: direct:production
  update-type: version-update:semver-minor
...

Signed-off-by: dependabot[bot] <support@github.com> - ([a366dbd](https://github.com/hexahigh/blalange.org/commit/a366dbdd205ee983f7b01cbd8783b7c76bd1d731))


- Merge pull request #233 from hexahigh/dependabot/npm_and_yarn/dev/tsparticles/confetti-3.4.0

Bump @tsparticles/confetti from 3.3.0 to 3.4.0 - ([9e48edf](https://github.com/hexahigh/blalange.org/commit/9e48edf50506f9076fd01bd2bc39ce19913fc8af))


- Merge branch 'dev' of https://github.com/hexahigh/blalange.org into dev - ([a322170](https://github.com/hexahigh/blalange.org/commit/a322170bd330b413a7f1e78d430ebf43ceee3b00))


- Set thumbnail size in article list - ([ddad4e8](https://github.com/hexahigh/blalange.org/commit/ddad4e84551065c301eca7c42e28c450949e2516))


- Reenabled csr - ([baf508a](https://github.com/hexahigh/blalange.org/commit/baf508a38d868a251aa908463106f161b621a547))


- Bump - ([dbfcbc0](https://github.com/hexahigh/blalange.org/commit/dbfcbc0fc08a71424069f12839348ad3abf9230c))


- Merge pull request #227 from hexahigh/dev

update dbEndpoint config system - ([2caff8c](https://github.com/hexahigh/blalange.org/commit/2caff8c732ab48944d47125dbddd2f402880e7aa))


- Merge remote-tracking branch 'origin/main' into dev - ([1265f94](https://github.com/hexahigh/blalange.org/commit/1265f940734ba4e773db48062a655ffa92d673d6))


- Update articlecard - ([11d2821](https://github.com/hexahigh/blalange.org/commit/11d2821bd3b8debe6046f9f88267d8d1e70771be))


- Bump - ([a0edae8](https://github.com/hexahigh/blalange.org/commit/a0edae81e8dc9c3fad8f30f9fbe4392c728676ec))


- Merge pull request #236 from hexahigh:dev

v2.5.4 - ([da0c3bb](https://github.com/hexahigh/blalange.org/commit/da0c3bba9c5ac4725318f10f67f780f0ad136cd2))


- Merge remote-tracking branch 'origin/main' into dev - ([702d426](https://github.com/hexahigh/blalange.org/commit/702d426e93749fb000fb3f8c88385d74df40a1dc))


- Update caching - ([8040358](https://github.com/hexahigh/blalange.org/commit/80403587c3c05a20d766cfbb0d5e08120695a38b))


- Update service worker :)) - ([55c81a1](https://github.com/hexahigh/blalange.org/commit/55c81a1b5fd97755c59c90499e2d598530688f35))


- Bump - ([74819fd](https://github.com/hexahigh/blalange.org/commit/74819fd2ec27cd2250d9d9157ca693370296f4b2))


- Merge pull request #237 from hexahigh:dev

update articlecard - ([7951276](https://github.com/hexahigh/blalange.org/commit/7951276fccba5013155d054c7d5abc5946755834))


- Merge remote-tracking branch 'origin/main' into dev - ([fa8bc60](https://github.com/hexahigh/blalange.org/commit/fa8bc60094bbb9209f9b8faa709c79284ba5c472))


- No more vitepwa - ([42840dd](https://github.com/hexahigh/blalange.org/commit/42840ddc342f6f2de173624a6d00ea7f2d142a91))


- Update serviceworker and articleCard - ([01d6e72](https://github.com/hexahigh/blalange.org/commit/01d6e7246f9af9c93ee2c232812e53d335018422))


- Update article date and service worker - ([5b6d103](https://github.com/hexahigh/blalange.org/commit/5b6d10303195926bf98cd12ef02fcbfce60431ed))


- Update service-worker - ([7d01de8](https://github.com/hexahigh/blalange.org/commit/7d01de8be66221102ee0ec5e047f403442afdf05))


- Update sw - ([147ae43](https://github.com/hexahigh/blalange.org/commit/147ae43dc858e275ff0601dc254dd9e1c3e38816))


- Add custom avatar support to chat - ([f6b7711](https://github.com/hexahigh/blalange.org/commit/f6b77113f8586c8f3518ff95ee122b8fe666ec27))


- Update footer - ([1aea776](https://github.com/hexahigh/blalange.org/commit/1aea776f66a0c184213e81b8995e67bb345eee0b))


- Update sitemap.xml - ([b1904d0](https://github.com/hexahigh/blalange.org/commit/b1904d0af0ba7cb5e35260d5b74c0df754eda1b3))


- Switched to new iconify web component - ([a696cc5](https://github.com/hexahigh/blalange.org/commit/a696cc5cec0b22b811eda771ccfbc8d2bace8ddc))


- Improve sw caching - ([746dd6b](https://github.com/hexahigh/blalange.org/commit/746dd6bbb629fd619dc4d86d4dbfe3480fef702f))


- Purged unused code - ([6fd1f05](https://github.com/hexahigh/blalange.org/commit/6fd1f053f156f8947ca08ea50d43ae57740d255d))


- Clean - ([599abfe](https://github.com/hexahigh/blalange.org/commit/599abfebca868ecc7fee8f5c0a9f881a89b88260))


- Removed sound effects - ([c7b093c](https://github.com/hexahigh/blalange.org/commit/c7b093ca361ab31168dc54a3acbbc421e67a3387))


- Cleaned up even more & bump - ([8c080a6](https://github.com/hexahigh/blalange.org/commit/8c080a6d6442acc20e77b24dcb6e91270b6bd684))


- Update +layout.svelte - ([2798c97](https://github.com/hexahigh/blalange.org/commit/2798c971adae280931144775e0bc075173bb4ccd))


- Update manifest - ([c4c7232](https://github.com/hexahigh/blalange.org/commit/c4c723253194d103b3047b5f92e9896c73215c9f))


- Optimized images - ([4692641](https://github.com/hexahigh/blalange.org/commit/46926414709ab55138cfdbb8bb9863e7089b9a7f))


- Update serviceworker registration - ([85bc390](https://github.com/hexahigh/blalange.org/commit/85bc3902d351e5b3642915d297e5594498b45e1c))


- Merge pull request #238 from hexahigh/dev

v2.6.0 - ([d3b2d9c](https://github.com/hexahigh/blalange.org/commit/d3b2d9c1d61e7663f0784a0d12951fd9111e4076))


- Merge pull request #241 from hexahigh:dev

update sw - ([50e44bb](https://github.com/hexahigh/blalange.org/commit/50e44bb1a91072d666ee7bf0a2e84c3ee1dfab10))


- Merge pull request #242 from hexahigh/dev

v2.6.2 - ([f0a71f9](https://github.com/hexahigh/blalange.org/commit/f0a71f9c721b9a78170e083548546e195834e37e))


- Merge remote-tracking branch 'origin/main' into dev - ([029dac7](https://github.com/hexahigh/blalange.org/commit/029dac7b350b55df57d0b1b2d0c41af0532d1ec7))


- Add chat filter - ([8dd9227](https://github.com/hexahigh/blalange.org/commit/8dd92274975891de789a9cc0ed69905a3e3221ed))


- Merge pull request #243 from hexahigh:dev

update sw & optimized images - ([f346576](https://github.com/hexahigh/blalange.org/commit/f3465767e66a3c84b6b597bf308dc5a33abbc8c9))


- Merge remote-tracking branch 'origin/main' into dev - ([d6c74c9](https://github.com/hexahigh/blalange.org/commit/d6c74c9bce851e4c643bd2e640bcceda1bc01352))


- Added performance stuff to the chat - ([668d751](https://github.com/hexahigh/blalange.org/commit/668d7519d79cfeac3b79e453c1807d16afd17734))


- Clean - ([56cf4ad](https://github.com/hexahigh/blalange.org/commit/56cf4ad89bd0c39e9158c1f18b98aced6f6ae357))


- Update badwords list - ([8f2fc9c](https://github.com/hexahigh/blalange.org/commit/8f2fc9ce9bf00817c2ba0b6fdd97c8951b533ac0))


- Optimized chat loading - ([dd553d5](https://github.com/hexahigh/blalange.org/commit/dd553d583ef860eeca8ad3ebd61af787f274431f))


- Removed some words from the filter - ([009236c](https://github.com/hexahigh/blalange.org/commit/009236c84189ee84dbc3913cc7d670f18c19b1ee))


- Bump - ([d9da437](https://github.com/hexahigh/blalange.org/commit/d9da43769a13ca728b54b7266ed125c329077879))


- Added markdown support and added html cleaner to the chat - ([144f68a](https://github.com/hexahigh/blalange.org/commit/144f68a28907877d7d665fc4b35abe88dd528386))


- Bump - ([bae84ff](https://github.com/hexahigh/blalange.org/commit/bae84ffdf8cc7714615d2074a655c80edf902281))


- Merge pull request #244 from hexahigh/dev

add chat filter - ([4a83310](https://github.com/hexahigh/blalange.org/commit/4a83310559bb0aee672db64e9003eb624d148bf5))


- Merge remote-tracking branch 'origin/main' into dev - ([0a63a1b](https://github.com/hexahigh/blalange.org/commit/0a63a1b09d952f3fa93296e81d957ffd15e4281d))


- Update link system - ([15602e2](https://github.com/hexahigh/blalange.org/commit/15602e24caebcb4f1b6d679f490254eb4e626e28))


- Disallow urls - ([0202b16](https://github.com/hexahigh/blalange.org/commit/0202b16daeb53e599198d208cd1bff0600219a4e))


- Changed some files and added build date to footer - ([f097fcb](https://github.com/hexahigh/blalange.org/commit/f097fcbdd4142af0b8d59e220e957840c06300a6))


- Update chat html cleaning - ([cb45112](https://github.com/hexahigh/blalange.org/commit/cb451121bc8c54b993f176616ca1fe0394126275))


- Added playwright - ([cef4695](https://github.com/hexahigh/blalange.org/commit/cef46956adf55fed801ed85b53f3ba1a19f9fcaa))


- Removed playwright from workflow - ([e7fb08f](https://github.com/hexahigh/blalange.org/commit/e7fb08f641771e5f1c915f8194ec8de706aa90c8))


- I forgot to remove that - ([aa858a3](https://github.com/hexahigh/blalange.org/commit/aa858a35a8ce4c1579cf9677a957cc03ce642484))


- Enabled prerendering for sitemap.xml - ([d942e80](https://github.com/hexahigh/blalange.org/commit/d942e8020ed01d235fd086a5dfbc816246076075))


- 2.8.0 - ([1223ee9](https://github.com/hexahigh/blalange.org/commit/1223ee99e1c2da7d04b84474a7e8d57ee006d535))


- Merge pull request #245 from hexahigh/dev

markdown support & html cleaning - ([3154285](https://github.com/hexahigh/blalange.org/commit/3154285180a72489c00fbcaaeae026fb938ba29c))


- Merge pull request #246 from hexahigh/dev

v2.7.3 - ([17394ef](https://github.com/hexahigh/blalange.org/commit/17394efa22bfdf75d55f1a1dde78f4eb73c97a9c))


- Merge remote-tracking branch 'origin/main' into dev - ([e7697a6](https://github.com/hexahigh/blalange.org/commit/e7697a6ebaf4fd139f8a045901f2c2516f0a5602))


- Bump @sveltejs/enhanced-img from 0.2.1 to 0.3.0

Bumps [@sveltejs/enhanced-img](https://github.com/sveltejs/kit/tree/HEAD/packages/image) from 0.2.1 to 0.3.0.
- [Release notes](https://github.com/sveltejs/kit/releases)
- [Commits](https://github.com/sveltejs/kit/commits/@sveltejs/enhanced-img@0.3.0/packages/image)

---
updated-dependencies:
- dependency-name: "@sveltejs/enhanced-img"
  dependency-type: direct:development
  update-type: version-update:semver-minor
...

Signed-off-by: dependabot[bot] <support@github.com> - ([dfd9fe5](https://github.com/hexahigh/blalange.org/commit/dfd9fe5339606dc1210d7ad0bc44b9be8f0f717e))


- Merge pull request #240 from hexahigh/dependabot/npm_and_yarn/dev/sveltejs/enhanced-img-0.3.0

Bump @sveltejs/enhanced-img from 0.2.1 to 0.3.0 - ([823249b](https://github.com/hexahigh/blalange.org/commit/823249bf24598f4c8d326028075cc8c7dad90468))


- Added chatTextCache and userCache to sw - ([ea96292](https://github.com/hexahigh/blalange.org/commit/ea96292365d5726bc3f4d8cc84fae5e00144fd2d))


- Less logging if devmode is not enabled - ([1b01f87](https://github.com/hexahigh/blalange.org/commit/1b01f87a520db87d80fe48bf7625afedc46e81dd))


- Bump - ([cd3888a](https://github.com/hexahigh/blalange.org/commit/cd3888a8e8e1f108ef609f6d1c60f88e30fddfe2))


- Merge pull request #248 from hexahigh/dev

2.8.0 - ([3ba5602](https://github.com/hexahigh/blalange.org/commit/3ba560282813744b75019e6b7f8206cdcd776415))


- Merge remote-tracking branch 'origin/main' into dev - ([8a00b77](https://github.com/hexahigh/blalange.org/commit/8a00b77447a19bd55452d1de170058ee71822dbb))


- Made badges slightly larger - ([7df5f62](https://github.com/hexahigh/blalange.org/commit/7df5f6259bd72a36768071e2e39af888bd2116df))


- Bump - ([e291d1b](https://github.com/hexahigh/blalange.org/commit/e291d1b7d8587e5402b7ba93d4c030b27dedc9f3))


- Added support for compressed videos in the terminal - ([2b7179b](https://github.com/hexahigh/blalange.org/commit/2b7179baed5f1e9f891f2181f40d999930ba30d8))


- Added 480p bad-apple - ([74d1c55](https://github.com/hexahigh/blalange.org/commit/74d1c5593d9b101a9284018bcd140d614b61c076))


- Bump - ([68b0080](https://github.com/hexahigh/blalange.org/commit/68b0080bc26a8b7466035346bf64bfc547d10c50))


- Merge pull request #253 from hexahigh/dev

2.8.1 - ([346772b](https://github.com/hexahigh/blalange.org/commit/346772b4f17362cb272dc62733c588b21d2c8db1))


- Merge remote-tracking branch 'origin/main' into dev - ([4c58d1c](https://github.com/hexahigh/blalange.org/commit/4c58d1c4be3e7ddac471afd830e5c9fc1001a614))


- Updated darkmode - ([989f1f9](https://github.com/hexahigh/blalange.org/commit/989f1f921a1dd2273fe0ab9d1322294f29ed644a))


- Added more tests - ([b76f16f](https://github.com/hexahigh/blalange.org/commit/b76f16f501cb135a00b2998740929fbe06a77b9d))


- Added autoscaling to terminal video - ([bc547fe](https://github.com/hexahigh/blalange.org/commit/bc547fe94058bc6b4c293afe4054117e62f1feb4))


- Decreased textSize of apple-hd - ([c614008](https://github.com/hexahigh/blalange.org/commit/c6140087e29f4f4439945f4cb09c93fd1c72b1b2))


- Updated video scaling system - ([53b2bee](https://github.com/hexahigh/blalange.org/commit/53b2bee83415b88c0405f41784c92cb1c8ffc229))


- Added automatic width calculation - ([d904f4f](https://github.com/hexahigh/blalange.org/commit/d904f4ffc44bec21ac2caed916db74ea71aff2ad))


- Better error handling - ([15a3de7](https://github.com/hexahigh/blalange.org/commit/15a3de77c57733fb48b0abbd51d82f88d13ffe4a))


- Removed the old autoscaler - ([5701444](https://github.com/hexahigh/blalange.org/commit/5701444c5bba66cb353dfbbfc1f28f08581ebe05))


- Update version.json - ([4d74966](https://github.com/hexahigh/blalange.org/commit/4d74966c2838c52d6755489b9aded203b38204c2))


- New video in terminal and basic autosyncing - ([05f9461](https://github.com/hexahigh/blalange.org/commit/05f94619c08d5a9d2bf45d01c63c99e033304854))


- Made the video syncing MUCH better - ([db19d90](https://github.com/hexahigh/blalange.org/commit/db19d901a51c100f2119d9c040cc38deb5387aa9))


- Update .npmrc - ([b06eda5](https://github.com/hexahigh/blalange.org/commit/b06eda582047611281f5516d7ab1ca00acc37cf1))


- Update build.yml - ([7f90c58](https://github.com/hexahigh/blalange.org/commit/7f90c58e746e720ed7c2ebd87eb6bda6204171fe))


- Update build.yml - ([1ffb0ab](https://github.com/hexahigh/blalange.org/commit/1ffb0abb6555396efe8c78f1d618007eb2a5e123))


- Update build.yml - ([4831364](https://github.com/hexahigh/blalange.org/commit/48313648919e6bbea272472c59b528d3f2a2613b))


- Merge branch 'dev' of https://github.com/hexahigh/blalange.org into dev - ([f63f981](https://github.com/hexahigh/blalange.org/commit/f63f981292eca2e65d5bcb835ed3de31c7f809dc))


- Forgot to remove that - ([8638933](https://github.com/hexahigh/blalange.org/commit/8638933bd592eb1484c4cded305cbf7386741c05))


- Bump vite from 5.2.13 to 5.3.3

Bumps [vite](https://github.com/vitejs/vite/tree/HEAD/packages/vite) from 5.2.13 to 5.3.3.
- [Release notes](https://github.com/vitejs/vite/releases)
- [Changelog](https://github.com/vitejs/vite/blob/main/packages/vite/CHANGELOG.md)
- [Commits](https://github.com/vitejs/vite/commits/v5.3.3/packages/vite)

---
updated-dependencies:
- dependency-name: vite
  dependency-type: direct:development
  update-type: version-update:semver-minor
...

Signed-off-by: dependabot[bot] <support@github.com> - ([e1a7ffc](https://github.com/hexahigh/blalange.org/commit/e1a7ffcd725aac6096e5a17e99a468f6d8846296))


- Merge pull request #261 from hexahigh/dependabot/npm_and_yarn/dev/vite-5.3.3

Bump vite from 5.2.13 to 5.3.3 - ([688eaa6](https://github.com/hexahigh/blalange.org/commit/688eaa60541a5e357ec7e458f81e6cdcee619eb0))


- Bump @sveltejs/adapter-cloudflare from 4.5.0 to 4.6.0

Bumps [@sveltejs/adapter-cloudflare](https://github.com/sveltejs/kit/tree/HEAD/packages/adapter-cloudflare) from 4.5.0 to 4.6.0.
- [Release notes](https://github.com/sveltejs/kit/releases)
- [Changelog](https://github.com/sveltejs/kit/blob/main/packages/adapter-cloudflare/CHANGELOG.md)
- [Commits](https://github.com/sveltejs/kit/commits/@sveltejs/adapter-cloudflare@4.6.0/packages/adapter-cloudflare)

---
updated-dependencies:
- dependency-name: "@sveltejs/adapter-cloudflare"
  dependency-type: direct:production
  update-type: version-update:semver-minor
...

Signed-off-by: dependabot[bot] <support@github.com> - ([1400182](https://github.com/hexahigh/blalange.org/commit/1400182fcf194dafaf0b191026ef1f59849e474c))


- Merge pull request #257 from hexahigh/dependabot/npm_and_yarn/dev/sveltejs/adapter-cloudflare-4.6.0

Bump @sveltejs/adapter-cloudflare from 4.5.0 to 4.6.0 - ([f8a49a6](https://github.com/hexahigh/blalange.org/commit/f8a49a665b824348eefb31ffbdb94b5519d1f808))


- Articles support markdown - ([e52aeea](https://github.com/hexahigh/blalange.org/commit/e52aeea5688fc5ddd483982483485469aac60793))


- Bump - ([989e8a3](https://github.com/hexahigh/blalange.org/commit/989e8a3cb10f51c7c5dec4b9a4d66ea04dea853d))


- Merge pull request #256 from hexahigh:dev

updated terminal video system and added hd bad-apple - ([5ed0d80](https://github.com/hexahigh/blalange.org/commit/5ed0d80cc2c2a2906ef8c9d5a67f162854e17250))


- Merge pull request #260 from hexahigh/dev

2.8.4 - ([53c76dd](https://github.com/hexahigh/blalange.org/commit/53c76dd0130b4d5c84e8b9039523c109e818546e))


- Bump ws in the npm_and_yarn group across 1 directory

Bumps the npm_and_yarn group with 1 update in the / directory: [ws](https://github.com/websockets/ws).


Updates `ws` from 8.17.0 to 8.18.0
- [Release notes](https://github.com/websockets/ws/releases)
- [Commits](https://github.com/websockets/ws/compare/8.17.0...8.18.0)

---
updated-dependencies:
- dependency-name: ws
  dependency-type: indirect
  dependency-group: npm_and_yarn
...

Signed-off-by: dependabot[bot] <support@github.com> - ([b80804b](https://github.com/hexahigh/blalange.org/commit/b80804bf13d56c35c00603940547c2175c52009f))


- Merge pull request #262 from hexahigh/dependabot/npm_and_yarn/npm_and_yarn-99150a289a

Bump ws from 8.17.0 to 8.18.0 in the npm_and_yarn group across 1 directory - ([734918e](https://github.com/hexahigh/blalange.org/commit/734918e4767b4e13efb2af29571c621ee3c0788b))


- Merge branch 'main' into dev - ([35718db](https://github.com/hexahigh/blalange.org/commit/35718db7bce3f40b913216b8d0678ca8c2aebbe5))


- Bump @sveltejs/adapter-cloudflare from 4.6.0 to 4.6.1

Bumps [@sveltejs/adapter-cloudflare](https://github.com/sveltejs/kit/tree/HEAD/packages/adapter-cloudflare) from 4.6.0 to 4.6.1.
- [Release notes](https://github.com/sveltejs/kit/releases)
- [Changelog](https://github.com/sveltejs/kit/blob/main/packages/adapter-cloudflare/CHANGELOG.md)
- [Commits](https://github.com/sveltejs/kit/commits/@sveltejs/adapter-cloudflare@4.6.1/packages/adapter-cloudflare)

---
updated-dependencies:
- dependency-name: "@sveltejs/adapter-cloudflare"
  dependency-type: direct:production
  update-type: version-update:semver-patch
...

Signed-off-by: dependabot[bot] <support@github.com> - ([280d368](https://github.com/hexahigh/blalange.org/commit/280d368b2d0a3111803fabf92f58532f58d8b785))


- Merge pull request #263 from hexahigh/dependabot/npm_and_yarn/dev/sveltejs/adapter-cloudflare-4.6.1

Bump @sveltejs/adapter-cloudflare from 4.6.0 to 4.6.1 - ([dafd7df](https://github.com/hexahigh/blalange.org/commit/dafd7df53aa67be55408539fabd4cc287b5d1039))


- Fikset lenker i chatten - ([2bdf55f](https://github.com/hexahigh/blalange.org/commit/2bdf55f34a3c5dea99f5abb91206e47a416e23ee))


- Update chat msg validating - ([0d440bc](https://github.com/hexahigh/blalange.org/commit/0d440bcee40ae40305826c2be524c31d766772c9))


- Added rss feed - ([9d5ac07](https://github.com/hexahigh/blalange.org/commit/9d5ac073ce9cc5d8bc797e113bfa13510aa97e58))


- Bump - ([4d7412e](https://github.com/hexahigh/blalange.org/commit/4d7412ef0f217faecd9ca0b7964a9453a2649496))


- Merge pull request #266 from hexahigh/dev

2.8.5 - ([26a8f91](https://github.com/hexahigh/blalange.org/commit/26a8f91ae868aabc9f4946bbac52ae65ae5c52fe))


- Merge remote-tracking branch 'origin/main' into dev - ([ae8ab8c](https://github.com/hexahigh/blalange.org/commit/ae8ab8cf64d07c0185f7f5e557e34eaf16e6e0b3))


- Purged unused webring images - ([843a97c](https://github.com/hexahigh/blalange.org/commit/843a97c68d7136bff8ec469a51db92b9f92598d2))


- Blocked autoplay in chat - ([90fbf07](https://github.com/hexahigh/blalange.org/commit/90fbf07cfb87f1ec1da8fc14416649b04587a6a3))


- Moved articles.rss - ([e473d6b](https://github.com/hexahigh/blalange.org/commit/e473d6b57888d23169b345272ed552de6e4af18c))


- Updated rss - ([b540e61](https://github.com/hexahigh/blalange.org/commit/b540e617fac777e665200ac6f6aa9d1207537331))


- Bump - ([23f33c3](https://github.com/hexahigh/blalange.org/commit/23f33c37f519fea93a965de77d38c119c0e62e21))


- Merge pull request #269 from hexahigh/dev

2.8.6 - ([3001cf6](https://github.com/hexahigh/blalange.org/commit/3001cf6bf06fa6359ba20ee083c097bb2a9f8986))


- Merge remote-tracking branch 'origin/main' into dev - ([3a55549](https://github.com/hexahigh/blalange.org/commit/3a55549b9a0e3bcc3d204f45b235c36e43c66fe0))


- Add open collective to donations - ([128edb5](https://github.com/hexahigh/blalange.org/commit/128edb53459066cf46164df0fd338716cd212e1f))


- Update tests - ([0bcf056](https://github.com/hexahigh/blalange.org/commit/0bcf0560ad0dccb4a8956591f8a77204c633326c))


- Update rss feed - ([f0dfb35](https://github.com/hexahigh/blalange.org/commit/f0dfb35cb5bf15145374fdb2d875c5483638f07a))


- Poot - ([117bffa](https://github.com/hexahigh/blalange.org/commit/117bffa9ac6d5410953bae7582dec34f32b6f6de))


- Fuck paypal, they are not my pal - ([a99e1d8](https://github.com/hexahigh/blalange.org/commit/a99e1d89c7ffbe7f622116ea006862aaa8bab3c2))


- ✨ feat: New login & signup

Login and signup pages have been updated. - ([51ef8b3](https://github.com/hexahigh/blalange.org/commit/51ef8b31519a5257115d57d61399846f6c304609))


- Started working on settings page and changed background color - ([f127ca7](https://github.com/hexahigh/blalange.org/commit/f127ca7f8e5a4cde292f772a1540e2355c162b11))


- Update settings page - ([96bda1f](https://github.com/hexahigh/blalange.org/commit/96bda1f5e842719715aacc0d684a3e29d28f1435))


- Added fancy user icon in navbar and an option to change email - ([19114fb](https://github.com/hexahigh/blalange.org/commit/19114fb547a56a49502c91065b9ed3a50caf9cff))


- No more tv2 - ([0dc6aec](https://github.com/hexahigh/blalange.org/commit/0dc6aec721ab1be47e7fea232b567e521af8ddb0))


- Damn it - ([a1c0f3e](https://github.com/hexahigh/blalange.org/commit/a1c0f3e33941a2cd7a893e4fe99a337ecfdae11a))


- Added log to try and fix 500 issue - ([54d25bf](https://github.com/hexahigh/blalange.org/commit/54d25bf262ba917ca80d4945d69b646d6530fee2))


- God, why - ([1d2dc3e](https://github.com/hexahigh/blalange.org/commit/1d2dc3ed8a95367b883e303434ce82980cb18a07))


- Det her er ikke gøy - ([2f624e0](https://github.com/hexahigh/blalange.org/commit/2f624e0976f19956f0bd190d3b4fb512f571f1a8))


- No more flowbite-svelte - ([3fcd138](https://github.com/hexahigh/blalange.org/commit/3fcd138b6256842a1ceb160760d4c18f2d827b85))


- Added tos - ([ef4cb3b](https://github.com/hexahigh/blalange.org/commit/ef4cb3b7c61ddd7e5fb50e4bcfb4f54c182b14e0))


- Update badwords.ts - ([94b1909](https://github.com/hexahigh/blalange.org/commit/94b19099d7a347377c6b78840cfe032ab296c696))


- Update tos - ([7ba1a79](https://github.com/hexahigh/blalange.org/commit/7ba1a7995849c2a313ef04b8a9388d6db0a446bb))


- Update service worker - ([5d90215](https://github.com/hexahigh/blalange.org/commit/5d90215b2ed028980f87d2dcc856390cd9903a8f))


- Update betterimg - ([670131b](https://github.com/hexahigh/blalange.org/commit/670131b266941b688a8c44c89c2026f88e740c9b))


- Polyfills & icon improvements - ([b7adf0f](https://github.com/hexahigh/blalange.org/commit/b7adf0f63533d441f348deb5421a39963258eb3c))


- Update font system and added ability to change the default font in settings - ([94fbc03](https://github.com/hexahigh/blalange.org/commit/94fbc03c78880f3385ee804eaebc23479efd4592))


- Bump tailwind-merge from 2.3.0 to 2.5.2

Bumps [tailwind-merge](https://github.com/dcastil/tailwind-merge) from 2.3.0 to 2.5.2.
- [Release notes](https://github.com/dcastil/tailwind-merge/releases)
- [Commits](https://github.com/dcastil/tailwind-merge/compare/v2.3.0...v2.5.2)

---
updated-dependencies:
- dependency-name: tailwind-merge
  dependency-type: direct:production
  update-type: version-update:semver-minor
...

Signed-off-by: dependabot[bot] <support@github.com> - ([f038fd0](https://github.com/hexahigh/blalange.org/commit/f038fd070c41a881fb76e52453d7653c4ce9e82e))


- Merge pull request #278 from hexahigh/dependabot/npm_and_yarn/dev/tailwind-merge-2.5.2

Bump tailwind-merge from 2.3.0 to 2.5.2 - ([1a3a221](https://github.com/hexahigh/blalange.org/commit/1a3a2218af0f1a398d3b2522f7c42932c7f51d5f))


- Merge branch 'dev' of https://github.com/hexahigh/blalange.org into dev - ([88dbe21](https://github.com/hexahigh/blalange.org/commit/88dbe2157a7d3a0461378bf31ec0edfcde8b28cd))


- Bump @fontsource/dela-gothic-one from 5.0.19 to 5.0.20

Bumps [@fontsource/dela-gothic-one](https://github.com/fontsource/font-files/tree/HEAD/fonts/google/dela-gothic-one) from 5.0.19 to 5.0.20.
- [Changelog](https://github.com/fontsource/font-files/blob/main/fonts/google/dela-gothic-one/CHANGELOG.md)
- [Commits](https://github.com/fontsource/font-files/commits/HEAD/fonts/google/dela-gothic-one)

---
updated-dependencies:
- dependency-name: "@fontsource/dela-gothic-one"
  dependency-type: direct:production
  update-type: version-update:semver-patch
...

Signed-off-by: dependabot[bot] <support@github.com> - ([f71177b](https://github.com/hexahigh/blalange.org/commit/f71177b66f04c8ddb07a557bebacf42c860de6e7))


- Merge pull request #279 from hexahigh/dependabot/npm_and_yarn/dev/fontsource/dela-gothic-one-5.0.20

Bump @fontsource/dela-gothic-one from 5.0.19 to 5.0.20 - ([d2e28fe](https://github.com/hexahigh/blalange.org/commit/d2e28fe8c0a60458d4e158a1ec3b02915fefa561))


- Update privacy policy and tos - ([81679d9](https://github.com/hexahigh/blalange.org/commit/81679d9f65f26f5045d86a4e3f02fbe2a7c60220))


- Merge branch 'dev' of https://github.com/hexahigh/blalange.org into dev - ([7cb5d19](https://github.com/hexahigh/blalange.org/commit/7cb5d192850ead31fbfe1b158fc8ac9f64dfc240))


- Merge pull request #270 from hexahigh:dev

2.8.7 - ([9a7685e](https://github.com/hexahigh/blalange.org/commit/9a7685ed6654f4bf1d1462379b7e71d052f19df6))


- Merge pull request #271 from hexahigh:dev

add open collective to donations - ([f865d5c](https://github.com/hexahigh/blalange.org/commit/f865d5cb136c43f6278df342c4a32274ac79ab0a))


- Merge pull request #272 from hexahigh:dev

2.8.9 - ([759e8cd](https://github.com/hexahigh/blalange.org/commit/759e8cd71313610f2ec06b548c583dfcfc64be63))


- Merge remote-tracking branch 'origin/main' into dev - ([33843a8](https://github.com/hexahigh/blalange.org/commit/33843a8eb85741515c5e6475913bafe6635b5cce))


- Removed article component - ([bbbb7b7](https://github.com/hexahigh/blalange.org/commit/bbbb7b75b6c598b941f00000c1f6afebc70e2ab1))


- Oops - ([ed6c1d5](https://github.com/hexahigh/blalange.org/commit/ed6c1d562b2e37c1d9ae052c5364e8e0cbd9d47a))


- Update article - ([6072182](https://github.com/hexahigh/blalange.org/commit/60721823a4779252373a98f8dddf05b57afe115c))


- Merge pull request #283 from hexahigh:update-article-layout

Update-article-layout - ([104a973](https://github.com/hexahigh/blalange.org/commit/104a973398237968a9664c7c5939a315e9f12703))


- Bump - ([10d7ac3](https://github.com/hexahigh/blalange.org/commit/10d7ac3070a149080bfac9fd62d89a0ca9bcd4dd))


- Merge pull request #281 from hexahigh:dev

v3.0 - ([c901d6e](https://github.com/hexahigh/blalange.org/commit/c901d6ebe2766a0810c50e8de52d0e4a9271a5fc))


- Merge pull request #282 from hexahigh:dev

fixed some issues in the privacy policy - ([84c67aa](https://github.com/hexahigh/blalange.org/commit/84c67aaae9107dabbec57108b807521b087187e1))


- Merge remote-tracking branch 'origin/main' into dev - ([9ab26ac](https://github.com/hexahigh/blalange.org/commit/9ab26ac87802f064be3da4a2d42b4fa267aec039))


- Update copyright - ([b62eacb](https://github.com/hexahigh/blalange.org/commit/b62eacb6fc14cb33f22ef64d8958a6636b13e456))


- Update analytics - ([ba593b5](https://github.com/hexahigh/blalange.org/commit/ba593b5e78f8b72e1d9b983d95bba611801eca09))


- Merge pull request #284 from hexahigh:dev

update article layout - ([ade9ea6](https://github.com/hexahigh/blalange.org/commit/ade9ea6ee83eaef19f40c1a324638bf1885631cd))


- Merge remote-tracking branch 'origin/main' into dev - ([156b2d2](https://github.com/hexahigh/blalange.org/commit/156b2d271f06b9e614f3d4bc2db2532412e1995b))


- Update sitemap to super-sitemap - ([2e99151](https://github.com/hexahigh/blalange.org/commit/2e991510877b1e39ae350eb00990207606895bff))


- 🐞 fix(chat & comments): Fixed a few bugs

Improved error handling in the chat. Fixed messages being broken if a user's "extra" value was set to null - ([a940627](https://github.com/hexahigh/blalange.org/commit/a940627393de32e111353d747a4de4623518f98c))


- 🐳 chore: bump version

Bump version from 3.0.2 to 3.0.3 - ([7030f53](https://github.com/hexahigh/blalange.org/commit/7030f53fc067185cf4b2bb3fe79f9ae03e355c05))


- Bump flowbite from 2.3.0 to 2.5.1

Bumps [flowbite](https://github.com/themesberg/flowbite) from 2.3.0 to 2.5.1.
- [Release notes](https://github.com/themesberg/flowbite/releases)
- [Commits](https://github.com/themesberg/flowbite/compare/v2.3.0...v2.5.1)

---
updated-dependencies:
- dependency-name: flowbite
  dependency-type: direct:development
  update-type: version-update:semver-minor
...

Signed-off-by: dependabot[bot] <support@github.com> - ([7a87c44](https://github.com/hexahigh/blalange.org/commit/7a87c4422266bb7e220ae418279bba24ce5c7c22))


- Merge pull request #276 from hexahigh/dependabot/npm_and_yarn/dev/flowbite-2.5.1

Bump flowbite from 2.3.0 to 2.5.1 - ([045fe28](https://github.com/hexahigh/blalange.org/commit/045fe28640463c8a3680ab2b541ed2585235f1bd))


- Bump @fontsource-variable/inter from 5.0.18 to 5.1.0

Bumps [@fontsource-variable/inter](https://github.com/fontsource/font-files/tree/HEAD/fonts/variable/inter) from 5.0.18 to 5.1.0.
- [Changelog](https://github.com/fontsource/font-files/blob/main/CHANGELOG.md)
- [Commits](https://github.com/fontsource/font-files/commits/HEAD/fonts/variable/inter)

---
updated-dependencies:
- dependency-name: "@fontsource-variable/inter"
  dependency-type: direct:production
  update-type: version-update:semver-minor
...

Signed-off-by: dependabot[bot] <support@github.com> - ([4d913f0](https://github.com/hexahigh/blalange.org/commit/4d913f06b1aa1237bfaa948b49faa6c90c4906f8))


- Merge pull request #291 from hexahigh/dependabot/npm_and_yarn/dev/fontsource-variable/inter-5.1.0

Bump @fontsource-variable/inter from 5.0.18 to 5.1.0 - ([8821946](https://github.com/hexahigh/blalange.org/commit/882194685e459da35ae821b88fc9e6ceec1a7fcd))


- Bump @tsparticles/engine from 3.4.0 to 3.5.0

Bumps [@tsparticles/engine](https://github.com/tsparticles/tsparticles/tree/HEAD/engine) from 3.4.0 to 3.5.0.
- [Release notes](https://github.com/tsparticles/tsparticles/releases)
- [Changelog](https://github.com/tsparticles/tsparticles/blob/main/engine/CHANGELOG.md)
- [Commits](https://github.com/tsparticles/tsparticles/commits/v3.5.0/engine)

---
updated-dependencies:
- dependency-name: "@tsparticles/engine"
  dependency-type: direct:production
  update-type: version-update:semver-minor
...

Signed-off-by: dependabot[bot] <support@github.com> - ([b1633d4](https://github.com/hexahigh/blalange.org/commit/b1633d4d9d44666af73a8f2cb2fcd172bbae36fb))


- Merge pull request #280 from hexahigh/dependabot/npm_and_yarn/dev/tsparticles/engine-3.5.0

Bump @tsparticles/engine from 3.4.0 to 3.5.0 - ([4d74649](https://github.com/hexahigh/blalange.org/commit/4d746499133c3f79c9fd039ff4cd6098afafde68))


- Bump postcss from 8.4.38 to 8.4.47

Bumps [postcss](https://github.com/postcss/postcss) from 8.4.38 to 8.4.47.
- [Release notes](https://github.com/postcss/postcss/releases)
- [Changelog](https://github.com/postcss/postcss/blob/main/CHANGELOG.md)
- [Commits](https://github.com/postcss/postcss/compare/8.4.38...8.4.47)

---
updated-dependencies:
- dependency-name: postcss
  dependency-type: direct:development
  update-type: version-update:semver-patch
...

Signed-off-by: dependabot[bot] <support@github.com> - ([515d1cf](https://github.com/hexahigh/blalange.org/commit/515d1cf23884f586f8654fa7bc5fb869aa619e7d))


- Merge pull request #292 from hexahigh/dependabot/npm_and_yarn/dev/postcss-8.4.47

Bump postcss from 8.4.38 to 8.4.47 - ([84801ef](https://github.com/hexahigh/blalange.org/commit/84801ef54af853fc1eae15fd28914c3234f362e7))


- Bump flowbite-svelte from 0.46.1 to 0.46.18

Bumps [flowbite-svelte](https://github.com/themesberg/flowbite-svelte) from 0.46.1 to 0.46.18.
- [Release notes](https://github.com/themesberg/flowbite-svelte/releases)
- [Changelog](https://github.com/themesberg/flowbite-svelte/blob/main/CHANGELOG.md)
- [Commits](https://github.com/themesberg/flowbite-svelte/compare/v0.46.1...v0.46.18)

---
updated-dependencies:
- dependency-name: flowbite-svelte
  dependency-type: direct:development
  update-type: version-update:semver-patch
...

Signed-off-by: dependabot[bot] <support@github.com> - ([77638df](https://github.com/hexahigh/blalange.org/commit/77638df2920c2fc9af51d3a34a0ed76abfaa300c))


- Merge pull request #295 from hexahigh/dependabot/npm_and_yarn/dev/flowbite-svelte-0.46.18

Bump flowbite-svelte from 0.46.1 to 0.46.18 - ([2fbf8ca](https://github.com/hexahigh/blalange.org/commit/2fbf8ca6e7be58c031a6772ad766c4b05eb8b7cb))


- Add changelog.md - ([604b1ed](https://github.com/hexahigh/blalange.org/commit/604b1edd21a548b94a76aa5e78674ea14dcc5170))


- 🎈 perf(chat & comments): Remove case limit

Names are no longer forced to be lowercase - ([3bcbbe8](https://github.com/hexahigh/blalange.org/commit/3bcbbe8ad68e206278d0e517a74e064eb2e0a3eb))


- 🐞 fix(article): Fix article dates

Article dates now use the correct locale - ([3a487ee](https://github.com/hexahigh/blalange.org/commit/3a487ee254bf5e2e5295fff90eabae4881fbfad1))


- 🐞 fix(chat): Improve chat errors

After this change, messages that failed to load will be removed from the chat - ([f96b5a9](https://github.com/hexahigh/blalange.org/commit/f96b5a90ffac6372d35500c428d498c4524812fc))


- 🐞 fix(comments): Comments not loading

Fix comments from logged in users not loading correctly - ([82f70d5](https://github.com/hexahigh/blalange.org/commit/82f70d53c1911f17de485d14dcd7b1e2394ad212))


- Prepare for new release - ([700acde](https://github.com/hexahigh/blalange.org/commit/700acde9f365bce44ab1c229082b81cc3bf0c33e))


- 🦄 refactor(tests & vite): Changed test system

Added vitest, moved test folders and changed vite config to typescript - ([31946cc](https://github.com/hexahigh/blalange.org/commit/31946ccdf880b095e63dd2addadeffe7df69bbcd))


- ✨ feat(terminal): Add mrbeast video

Added a "MR. BEAST!!" and "Bad Apple" mashup video to the terminal - ([10f1346](https://github.com/hexahigh/blalange.org/commit/10f1346e2cebaceeca599bff84526b66a98615ea))


- 🐞 fix(articles): Fix spacing issue

Fixed an issue where newlines were not visible - ([c4b41b9](https://github.com/hexahigh/blalange.org/commit/c4b41b9d7d8f7f8d0808ba9bcf8833ba95be0181))


- ✨ feat(article list): Updated article list

Added fancy masonry grid to article list. (This took way too long to make, i hate css.) - ([10733bc](https://github.com/hexahigh/blalange.org/commit/10733bcc4c40e7f205294ca87fc7060fef160185))


- 🐞 fix(article list): WTH chrome

Wtf is wrong with chrome?!! Why does it look nice in firefox but not in chrome?? Why does chrome sometimes sort the elements horizontaly but sometimes vertically, like WTF? How your site looks like is not supposed to be random. It should be consistent across all browsers, BUT ITS NOT EVEN CONSISTENT ACROSS CHROME ITSELF - ([5155ef9](https://github.com/hexahigh/blalange.org/commit/5155ef9c30c156e3d6c762f3f072c3c9a128f83b))


- Merge pull request #305 from hexahigh:article-list-masonry

add fancy masonry - ([fe4590c](https://github.com/hexahigh/blalange.org/commit/fe4590ccfedbaf24ea347234b330657a4d606863))


- Merge pull request #285 from hexahigh:dev

v3.0.2 - ([a968535](https://github.com/hexahigh/blalange.org/commit/a96853536f2afad7c80e4dbb225af0264592e0d4))


- Merge pull request #294 from hexahigh/dev

yipee - ([3256a32](https://github.com/hexahigh/blalange.org/commit/3256a3234daa12489ec319a4a9ec2af467207183))


- Merge pull request #301 from hexahigh/dev

3.0.4 - ([a47a9ed](https://github.com/hexahigh/blalange.org/commit/a47a9ed6ef64b1cc5e833b05c8201ae3c6b089d8))


- Update issue templates - ([5628bcb](https://github.com/hexahigh/blalange.org/commit/5628bcb847301ca646fb6bd665f612fdeb759b65))


- Merge pull request #306 from hexahigh/add-issue-template

Update issue templates - ([f8420a1](https://github.com/hexahigh/blalange.org/commit/f8420a156cebe1216a64670f953cae80c24a4542))


- Turns out directus is not a direct upgrade - ([3d93741](https://github.com/hexahigh/blalange.org/commit/3d937416dfa24e31b821c326e8cde5d44a567028))


- La til sånn fancy greie - ([0f62089](https://github.com/hexahigh/blalange.org/commit/0f620896dfb3693958393e824b82e7df234bf5cc))


- 🐞 fix(article list): Fix overlapping

Masonry grid will be reorganized everytime an image is loaded - ([da4d766](https://github.com/hexahigh/blalange.org/commit/da4d766309c3f022dc4e972ecc43fafc33b898a5))


- 🐞 fix(articles.rss): Migrate to directus

Migrated the articles rss feed to directus - ([c1a0b89](https://github.com/hexahigh/blalange.org/commit/c1a0b89489d39bad9b9c427f3c2051dae3a879d4))


- 🌈 style: Added a few comments - ([663a2b5](https://github.com/hexahigh/blalange.org/commit/663a2b539f7c4020c2b38bd6441cd47c7b712a5b))


- Update build and test workflow - ([33c2d54](https://github.com/hexahigh/blalange.org/commit/33c2d541d44e7b46076aa49b671e554d8ef9df98))


- Update build and test workflow - ([868cdbc](https://github.com/hexahigh/blalange.org/commit/868cdbcac94fe11fbe9a8f75d642d025d73688c4))


- Remove test from workflow - ([3cb5867](https://github.com/hexahigh/blalange.org/commit/3cb5867f1b64b17fa18fdc67baa0cc50fc732994))


- Migrated analytics to directus - ([7949250](https://github.com/hexahigh/blalange.org/commit/794925034c8796e4f7e288bc4cb653a8bc3e1665))


- Update email link - ([a4f8587](https://github.com/hexahigh/blalange.org/commit/a4f85870caaa7316fcff38ec21d8de23e40c26d7))


- Removed images page and cleanup unused stuff - ([43f97ea](https://github.com/hexahigh/blalange.org/commit/43f97ea2be48017279572ac3188ee5b1821a730f))


- 🐞 fix(signup): Wrong text on button - ([356c828](https://github.com/hexahigh/blalange.org/commit/356c8285a32a78180f467ac9df62aef68751f046))


- 🐞 fix(navbar): Wrong login status

Navbar used to show that the user was logged out when they were actually logged in - ([9d2e337](https://github.com/hexahigh/blalange.org/commit/9d2e33765c9950547e75f270e2920ed3c23af688))


- 🐞 fix(chat): Fix badges

Fixed badges in chat - ([d3977ae](https://github.com/hexahigh/blalange.org/commit/d3977ae14e5c7ae9f9f90e02cfae360f454cd4ff))


- 🎈 perf(chat): Improve speed - ([19a03bc](https://github.com/hexahigh/blalange.org/commit/19a03bc2219105d62be6611cd84228c7aa37660f))


- 🦄 refactor(chat): Clean processMessage

Cleaned the processMessage function - ([0ead362](https://github.com/hexahigh/blalange.org/commit/0ead3622d8bd2a9003a9946a06e96ee6f2188caa))


- 🐞 fix(nav2): infinite loop - ([9dd7c21](https://github.com/hexahigh/blalange.org/commit/9dd7c215113828510331f4f83e721fb42a6d4fdb))


- Update analytics - ([9f69bcc](https://github.com/hexahigh/blalange.org/commit/9f69bcc1fe36a4251275ce301c4588cab5cbc2ab))


- Migrated sitemap to directus - ([d6bb9cc](https://github.com/hexahigh/blalange.org/commit/d6bb9cc76d2ff99a425025cb025e187794a2b28c))


- 🐞 fix(sitemap): Disabled prerender

Disabled prerendering on the sitemap as it caused issues - ([02ed481](https://github.com/hexahigh/blalange.org/commit/02ed481a191d51dbf711dc5bcfcacedb4593e8a7))


- ✨ feat(article list): Added search

Fancy schmancy search - ([230664f](https://github.com/hexahigh/blalange.org/commit/230664f47945651a05bd8d0150dfbcf23cbc6849))


- 🐳 chore: Bump version

Bumped version from 3.0.4 to 4.0.0 - ([8b8a351](https://github.com/hexahigh/blalange.org/commit/8b8a3517a94b954b298b00624559dc812ea7852e))


- Merge pull request #312 from hexahigh/directus

Migrated backend to Directus - ([f302b77](https://github.com/hexahigh/blalange.org/commit/f302b77f9f64be1657a150ce21ceabb01c98530c))


- Bump @sveltejs/kit from 2.5.10 to 2.6.3

Bumps [@sveltejs/kit](https://github.com/sveltejs/kit/tree/HEAD/packages/kit) from 2.5.10 to 2.6.3.
- [Release notes](https://github.com/sveltejs/kit/releases)
- [Changelog](https://github.com/sveltejs/kit/blob/main/packages/kit/CHANGELOG.md)
- [Commits](https://github.com/sveltejs/kit/commits/@sveltejs/kit@2.6.3/packages/kit)

---
updated-dependencies:
- dependency-name: "@sveltejs/kit"
  dependency-type: direct:development
  update-type: version-update:semver-minor
...

Signed-off-by: dependabot[bot] <support@github.com> - ([00b612e](https://github.com/hexahigh/blalange.org/commit/00b612ec746542f032eb841e1c1d2b9630339e8f))


- Merge pull request #311 from hexahigh/dependabot/npm_and_yarn/dev/sveltejs/kit-2.6.3

Bump @sveltejs/kit from 2.5.10 to 2.6.3 - ([a8204ad](https://github.com/hexahigh/blalange.org/commit/a8204ad5ab2f01cf7afcca87cc6b00898dd04fbe))


- Bump chart.js from 4.4.3 to 4.4.4

Bumps [chart.js](https://github.com/chartjs/Chart.js) from 4.4.3 to 4.4.4.
- [Release notes](https://github.com/chartjs/Chart.js/releases)
- [Commits](https://github.com/chartjs/Chart.js/compare/v4.4.3...v4.4.4)

---
updated-dependencies:
- dependency-name: chart.js
  dependency-type: direct:production
  update-type: version-update:semver-patch
...

Signed-off-by: dependabot[bot] <support@github.com> - ([22a45c0](https://github.com/hexahigh/blalange.org/commit/22a45c0e3b219d7a1d80d5fb6a9cb6c7462da7ad))


- Merge pull request #300 from hexahigh/dependabot/npm_and_yarn/dev/chart.js-4.4.4

Bump chart.js from 4.4.3 to 4.4.4 - ([ffbd1c7](https://github.com/hexahigh/blalange.org/commit/ffbd1c733d948829934b57da8d51745ec28f7e14))


- Bump autoprefixer from 10.4.19 to 10.4.20

Bumps [autoprefixer](https://github.com/postcss/autoprefixer) from 10.4.19 to 10.4.20.
- [Release notes](https://github.com/postcss/autoprefixer/releases)
- [Changelog](https://github.com/postcss/autoprefixer/blob/main/CHANGELOG.md)
- [Commits](https://github.com/postcss/autoprefixer/compare/10.4.19...10.4.20)

---
updated-dependencies:
- dependency-name: autoprefixer
  dependency-type: direct:development
  update-type: version-update:semver-patch
...

Signed-off-by: dependabot[bot] <support@github.com> - ([0a1838b](https://github.com/hexahigh/blalange.org/commit/0a1838b99ca0cf3df8c4cb44d45a6b1e4e360fdd))


- Merge pull request #297 from hexahigh/dependabot/npm_and_yarn/dev/autoprefixer-10.4.20

Bump autoprefixer from 10.4.19 to 10.4.20 - ([4f38aa0](https://github.com/hexahigh/blalange.org/commit/4f38aa0d16c6780f05806ea78cf7bca26fba50ec))


- Bump vite from 5.3.3 to 5.4.8

Bumps [vite](https://github.com/vitejs/vite/tree/HEAD/packages/vite) from 5.3.3 to 5.4.8.
- [Release notes](https://github.com/vitejs/vite/releases)
- [Changelog](https://github.com/vitejs/vite/blob/v5.4.8/packages/vite/CHANGELOG.md)
- [Commits](https://github.com/vitejs/vite/commits/v5.4.8/packages/vite)

---
updated-dependencies:
- dependency-name: vite
  dependency-type: direct:development
  update-type: version-update:semver-minor
...

Signed-off-by: dependabot[bot] <support@github.com> - ([9356e3e](https://github.com/hexahigh/blalange.org/commit/9356e3e45560eb1d99afe3a62a6462f5aa5a5dea))


- Merge pull request #296 from hexahigh/dependabot/npm_and_yarn/dev/vite-5.4.8

Bump vite from 5.3.3 to 5.4.8 - ([c4ca2a1](https://github.com/hexahigh/blalange.org/commit/c4ca2a1f35301ff36d9b5ab009a2dc6c34bf8f16))


- Bump @types/node from 20.14.9 to 22.7.5

Bumps [@types/node](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/HEAD/types/node) from 20.14.9 to 22.7.5.
- [Release notes](https://github.com/DefinitelyTyped/DefinitelyTyped/releases)
- [Commits](https://github.com/DefinitelyTyped/DefinitelyTyped/commits/HEAD/types/node)

---
updated-dependencies:
- dependency-name: "@types/node"
  dependency-type: direct:development
  update-type: version-update:semver-major
...

Signed-off-by: dependabot[bot] <support@github.com> - ([540e3f4](https://github.com/hexahigh/blalange.org/commit/540e3f4181b1633c3b8d0fd8a16d488b5c54b36a))


- Merge pull request #310 from hexahigh/dependabot/npm_and_yarn/dev/types/node-22.7.5

Bump @types/node from 20.14.9 to 22.7.5 - ([2bde87d](https://github.com/hexahigh/blalange.org/commit/2bde87da469ccf65e3295d4969fa13a3e9fb92cf))


### Commit Statistics

- 700 commit(s) contributed to the release.
- 205 day(s) passed between the first and last commit.
- 2 commit(s) parsed as conventional.
- 0 linked issue(s) detected in commits.
- 205 day(s) passed between releases.

## [1.0.0] - 2024-03-17

### 🐛 Bug Fixes

- Fixed the javascript - ([5e5d511](https://github.com/hexahigh/blalange.org/commit/5e5d5119dbaac92744fed258bf5fe97ceb1d128e))


- Fixed confetti - ([d9c0971](https://github.com/hexahigh/blalange.org/commit/d9c0971f5c735abb984ab6ad177189cff5765572))


- Fixed the image - ([f2ecccd](https://github.com/hexahigh/blalange.org/commit/f2ecccdfd553ae1ad9177447c4cd2c8ff0ca5887))


- Fixed favicon - ([085d7ba](https://github.com/hexahigh/blalange.org/commit/085d7ba58000742376ad55da2be4817950f07799))


- Fixed image urls - ([d330152](https://github.com/hexahigh/blalange.org/commit/d3301522034e9afc865156454ab4da34a33618fd))


- Fixed again - ([f3a15ed](https://github.com/hexahigh/blalange.org/commit/f3a15ed5b31dd610584c9c88419efd7f859f723d))


- Fixed image page - ([5fa531d](https://github.com/hexahigh/blalange.org/commit/5fa531dcc51f4bcbdb7d5dc359e8a688741ca8f6))


- Fixed manifest url - ([cce81a3](https://github.com/hexahigh/blalange.org/commit/cce81a301d5e6cf6b1b055e00706aa41223d16dc))


- Fixed vite-pwa overriding the manifest - ([71cc6bc](https://github.com/hexahigh/blalange.org/commit/71cc6bcd14fa3ecc712658e2a9bc8a7d90ab68a5))


- Fix sw? - ([e606647](https://github.com/hexahigh/blalange.org/commit/e60664727eba7a0b43d087e35d8dbf8fc1dd1c0d))


- Fixed - ([eef7d1d](https://github.com/hexahigh/blalange.org/commit/eef7d1d358ad15808e4bd7d01298e87630be49c7))


- Fix? - ([2b53563](https://github.com/hexahigh/blalange.org/commit/2b535633533490342746389af03a7a456552f6fa))


- Fix - ([114d31e](https://github.com/hexahigh/blalange.org/commit/114d31e9bd27cd5bb4972d3ec40417e9864470cf))


- Fix maximumFileSizeToCacheInBytes - ([df01282](https://github.com/hexahigh/blalange.org/commit/df012823ae936316e40378c28bfa07673035735b))


- Fixed css - ([0548e50](https://github.com/hexahigh/blalange.org/commit/0548e5017847889f262554ba6fe277ccda049dc0))


- Fixed time - ([2d14a34](https://github.com/hexahigh/blalange.org/commit/2d14a3459352a7a13ce17691891e791617cbd4ef))


- Fix - ([26fc20f](https://github.com/hexahigh/blalange.org/commit/26fc20f332db1762fd6050297f8aeca272c4d0d2))


- Fix - ([1e144b6](https://github.com/hexahigh/blalange.org/commit/1e144b69368990febdfe59bd97c18ac0c12ba1a4))


- Fix - ([1d3d851](https://github.com/hexahigh/blalange.org/commit/1d3d851bd405558c2e22604febb110fc696342c7))


- Fix - ([7f3b672](https://github.com/hexahigh/blalange.org/commit/7f3b6728a0634108f0631c3b574042ba61bdabd7))


- Fix - ([8e8ac53](https://github.com/hexahigh/blalange.org/commit/8e8ac534edc15be8b0dc1f0aa389481a982098e2))


- Fixed form - ([9cf78e6](https://github.com/hexahigh/blalange.org/commit/9cf78e6c8285a5b537fb2c4571428a5f99e4a725))


- Fixed - ([5b02308](https://github.com/hexahigh/blalange.org/commit/5b023081083b6284672a24a8cdd05ea5a44aba94))


- Fix? - ([0d32764](https://github.com/hexahigh/blalange.org/commit/0d32764dc14304e86b02a4f69de0a12f64ccedcf))


- Fix template - ([b182df1](https://github.com/hexahigh/blalange.org/commit/b182df199713dfb3c2ec732943c79dfdb3afad15))


- Fix nav - ([7af82ff](https://github.com/hexahigh/blalange.org/commit/7af82ff593c62a4d9da515dde20035f0c7b4b8f9))


- Fix clipboard - ([d1f54b3](https://github.com/hexahigh/blalange.org/commit/d1f54b303fdc7d2ede9d65e38fb7825d523a4815))


- Fix? - ([4d7ad80](https://github.com/hexahigh/blalange.org/commit/4d7ad802a1f100a892d94064e0a40eb7134d163c))


- Fix - ([ba7055d](https://github.com/hexahigh/blalange.org/commit/ba7055df03d5cb15961a745b666913ea75a55e09))


- Fix - ([9320fe0](https://github.com/hexahigh/blalange.org/commit/9320fe0d0f51ba1a720f99cab7afbb38f575c5ba))


- Fix - ([debf153](https://github.com/hexahigh/blalange.org/commit/debf153dbe488e9e172444f30230bdd2ba7d4afe))


- Fix? - ([721bd1a](https://github.com/hexahigh/blalange.org/commit/721bd1a8455adc487c2a87a32e9b92de1ca947c1))


- Fix - ([1e8dbaf](https://github.com/hexahigh/blalange.org/commit/1e8dbafd75cb40fd12359e5f5ec7b649d05c6a19))


- Fix? - ([14f3297](https://github.com/hexahigh/blalange.org/commit/14f3297e51a1be832998c7f5c3a4da945dcca9aa))


- Fix build-node workflow - ([b6967a0](https://github.com/hexahigh/blalange.org/commit/b6967a02db389defb6a2929029b06cd8ac6e22d8))



### 🧪 Testing

- Test confetti - ([daf2adf](https://github.com/hexahigh/blalange.org/commit/daf2adf42ac352c02c95624d1ce3c12f04594272))


- Testing out generateSW - ([e12be1b](https://github.com/hexahigh/blalange.org/commit/e12be1b0d0526f4d8e7bd50f9520f2dcc5decbe1))


- Test - ([2921a6d](https://github.com/hexahigh/blalange.org/commit/2921a6d7fdd62a50ca370d0f536a90aaae240eb9))


- Test orbitDB - ([f746af2](https://github.com/hexahigh/blalange.org/commit/f746af297722005db70d7adaa158cbb9a93062a6))



### Other (unconventional)

- First commit - ([2a9d5a3](https://github.com/hexahigh/blalange.org/commit/2a9d5a3998df2a072a9ccd7bdc30da7a1ce9f33f))


- Added a countdown - ([f1e18bc](https://github.com/hexahigh/blalange.org/commit/f1e18bc19ea3ce6ed1e869a2351ca702c6c7f925))


- Kuk - ([8aad867](https://github.com/hexahigh/blalange.org/commit/8aad86705c2f0206179bf927a7ca6b923ad5b37b))


- Added a navbar - ([ae8fe67](https://github.com/hexahigh/blalange.org/commit/ae8fe6798882f7f520caef6f656d54c0dcbde8f6))


- Updated the css - ([9a70113](https://github.com/hexahigh/blalange.org/commit/9a701139fca880c0598a3699497e7155dca921dc))


- Updated - ([6c453eb](https://github.com/hexahigh/blalange.org/commit/6c453eb3ceb162733eb66929d99b0db1eeef5902))


- Add confetti - ([93048e0](https://github.com/hexahigh/blalange.org/commit/93048e0c98117a4333ec596572aae71eedaf5bdf))


- No more confette - ([14d2710](https://github.com/hexahigh/blalange.org/commit/14d271012ccf4a8998e2d811db0c55a75fe2ab94))


- Readded particles - ([6ee3f91](https://github.com/hexahigh/blalange.org/commit/6ee3f91e916bbe2b691dd2669c28556b50907a14))


- I give up... FOR NOW - ([43c97d8](https://github.com/hexahigh/blalange.org/commit/43c97d82e1ad6c6b88422f07f72adcc74f298852))


- Finished the confetti - ([edf3c3c](https://github.com/hexahigh/blalange.org/commit/edf3c3cd44e78ea36a942e4e944d2e6358e8206c))


- Added tailwind and updated the logo - ([e269a83](https://github.com/hexahigh/blalange.org/commit/e269a83ca117a9fca0c27c70ed0e63150aacd6f6))


- Moved css - ([7ba2ba1](https://github.com/hexahigh/blalange.org/commit/7ba2ba1a5f6dbb6df1ef98ef767a249e3692b58f))


- Create dependabot.yml - ([be6ee51](https://github.com/hexahigh/blalange.org/commit/be6ee51ae4c3ca0583c77fc281de1051fd66fa4c))


- Bump @sveltejs/kit from 1.24.1 to 1.25.0

Bumps [@sveltejs/kit](https://github.com/sveltejs/kit/tree/HEAD/packages/kit) from 1.24.1 to 1.25.0.
- [Release notes](https://github.com/sveltejs/kit/releases)
- [Changelog](https://github.com/sveltejs/kit/blob/master/packages/kit/CHANGELOG.md)
- [Commits](https://github.com/sveltejs/kit/commits/@sveltejs/kit@1.25.0/packages/kit)

---
updated-dependencies:
- dependency-name: "@sveltejs/kit"
  dependency-type: direct:development
  update-type: version-update:semver-minor
...

Signed-off-by: dependabot[bot] <support@github.com> - ([40badd7](https://github.com/hexahigh/blalange.org/commit/40badd77398ad945e5562cd87f9a0c47875b7f6d))


- Merge pull request #2 from hexahigh/dependabot/npm_and_yarn/sveltejs/kit-1.25.0

Bump @sveltejs/kit from 1.24.1 to 1.25.0 - ([31fd827](https://github.com/hexahigh/blalange.org/commit/31fd827705271415a692cdf10bd2c7e8f8d4e3d7))


- Merge branch 'main' of https://github.com/hexahigh/kukfest - ([7af4016](https://github.com/hexahigh/blalange.org/commit/7af4016889769ab76f77a28a65508535dad7ffb4))


- Updated fonts - ([9e54b7d](https://github.com/hexahigh/blalange.org/commit/9e54b7d1dfb7b8cee110501a512b531377a6e6ac))


- Added images page - ([f871593](https://github.com/hexahigh/blalange.org/commit/f8715931adf09e2c57a61f2d49281686f86a995f))


- Updated - ([94722da](https://github.com/hexahigh/blalange.org/commit/94722da4e869dfc5fceaca110aa4b64f1f82dae7))


- Updated - ([9c6fa74](https://github.com/hexahigh/blalange.org/commit/9c6fa74bd651c4f0e55dc432fb5e32bb020cbd38))


- Added placeholder images - ([1ca6783](https://github.com/hexahigh/blalange.org/commit/1ca67831588ca2838d61726ea73159e9057b70c0))


- Added the navbars - ([08cbc49](https://github.com/hexahigh/blalange.org/commit/08cbc49d8bf2923e3df3ed4ad81816883520b614))


- Added the second image page - ([49f68c9](https://github.com/hexahigh/blalange.org/commit/49f68c9f58bd358f2373e647b880b9eaebfe40b7))


- Removed an unused css file - ([c682552](https://github.com/hexahigh/blalange.org/commit/c682552f158eb3399ea1193ce05f6863a7196393))


- Added images to the image page - ([3446f3c](https://github.com/hexahigh/blalange.org/commit/3446f3ce014bb613f5dab220d6768b1a503aa821))


- Added video to kukfest 23 - ([9c53229](https://github.com/hexahigh/blalange.org/commit/9c53229ca1426d3855e8957e5f7b1d4de924539b))


- Changed png to svg - ([54abf0b](https://github.com/hexahigh/blalange.org/commit/54abf0bd5e531d6cc306cf3f511393ce146f07aa))


- Updated front page - ([79999bf](https://github.com/hexahigh/blalange.org/commit/79999bf6359222dadee98f05057e9a3b779c2521))


- Moved image file location - ([f27eef8](https://github.com/hexahigh/blalange.org/commit/f27eef8f2a28b306b827fb9dc94678c927bc7aa0))


- Moved component dir - ([8e31025](https://github.com/hexahigh/blalange.org/commit/8e31025472a7922b5fd29457f438ad54011ca2e1))


- Added trailer - ([03f7900](https://github.com/hexahigh/blalange.org/commit/03f7900eaea493dd75ab7b6dc0536099017edf8c))


- Merge branch 'main' of https://github.com/hexahigh/kukfest - ([91d4416](https://github.com/hexahigh/blalange.org/commit/91d441676fbc8d63a9fe150d730ebf607d600725))


- Added more versions of the trailer to support more devices - ([e367ba5](https://github.com/hexahigh/blalange.org/commit/e367ba50dc74da7457bcfdaddae161270816d1fb))


- Added theora for the 3 browsers that support it - ([8166659](https://github.com/hexahigh/blalange.org/commit/81666594c2db3518291790715c2fbbcd1735e38c))


- [ImgBot] Optimize images

*Total -- 21,260.68kb -> 11,858.89kb (44.22%)

/static/img/image-archive/23.1/2023-09-13_17.24.17.png -- 2,308.21kb -> 1,199.38kb (48.04%)
/static/img/image-archive/23.1/2023-09-13_17.24.41.png -- 2,014.38kb -> 1,066.71kb (47.05%)
/static/img/image-archive/23.1/2023-09-16_17.23.42.png -- 2,677.68kb -> 1,436.54kb (46.35%)
/static/img/image-archive/23.1/2023-09-13_17.22.52.png -- 1,983.61kb -> 1,074.77kb (45.82%)
/static/img/image-archive/23.1/2023-09-10_02.22.23.png -- 2,100.01kb -> 1,152.59kb (45.11%)
/static/img/bg1.png -- 2,241.75kb -> 1,253.02kb (44.1%)
/static/img/image-archive/23.1/2023-09-11_18.41.28.png -- 3,325.29kb -> 1,870.83kb (43.74%)
/static/img/image-archive/23.1/2023-09-16_17.23.53.png -- 4,208.27kb -> 2,471.21kb (41.28%)
/static/img/favicon.png -- 6.56kb -> 3.94kb (39.89%)
/static/img/lars.png -- 321.21kb -> 259.30kb (19.27%)
/static/img/231/img.jpg -- 73.71kb -> 70.58kb (4.24%)

Signed-off-by: ImgBotApp <ImgBotHelp@gmail.com> - ([7c2cf65](https://github.com/hexahigh/blalange.org/commit/7c2cf6579b605bcdbeec03f10e104546088d3cb2))


- Merge pull request #3 from hexahigh/imgbot

[ImgBot] Optimize images - ([d6ef4ef](https://github.com/hexahigh/blalange.org/commit/d6ef4ef379ab89bd73036f6e46d843fe6f90c2a2))


- Bump autoprefixer from 10.4.15 to 10.4.16

Bumps [autoprefixer](https://github.com/postcss/autoprefixer) from 10.4.15 to 10.4.16.
- [Release notes](https://github.com/postcss/autoprefixer/releases)
- [Changelog](https://github.com/postcss/autoprefixer/blob/main/CHANGELOG.md)
- [Commits](https://github.com/postcss/autoprefixer/compare/10.4.15...10.4.16)

---
updated-dependencies:
- dependency-name: autoprefixer
  dependency-type: direct:development
  update-type: version-update:semver-patch
...

Signed-off-by: dependabot[bot] <support@github.com> - ([393e3e7](https://github.com/hexahigh/blalange.org/commit/393e3e7f06963bc4208aa434b8bbafde23f9bddc))


- Merge pull request #5 from hexahigh/dependabot/npm_and_yarn/autoprefixer-10.4.16

Bump autoprefixer from 10.4.15 to 10.4.16 - ([2e818bb](https://github.com/hexahigh/blalange.org/commit/2e818bb1578b1512f09c4a8aeabe30f0ab14bd3b))


- Bump postcss from 8.4.29 to 8.4.31

Bumps [postcss](https://github.com/postcss/postcss) from 8.4.29 to 8.4.31.
- [Release notes](https://github.com/postcss/postcss/releases)
- [Changelog](https://github.com/postcss/postcss/blob/main/CHANGELOG.md)
- [Commits](https://github.com/postcss/postcss/compare/8.4.29...8.4.31)

---
updated-dependencies:
- dependency-name: postcss
  dependency-type: direct:development
  update-type: version-update:semver-patch
...

Signed-off-by: dependabot[bot] <support@github.com> - ([3c382fd](https://github.com/hexahigh/blalange.org/commit/3c382fd34fa4f96c5f383267da7dbdb2c0eca385))


- Merge pull request #9 from hexahigh/dependabot/npm_and_yarn/postcss-8.4.31

Bump postcss from 8.4.29 to 8.4.31 - ([4e2986f](https://github.com/hexahigh/blalange.org/commit/4e2986fd28d71a1926a9674371f15f390293a50e))


- Bump svelte-meta-tags from 3.0.3 to 3.0.4

Bumps [svelte-meta-tags](https://github.com/oekazuma/svelte-meta-tags) from 3.0.3 to 3.0.4.
- [Release notes](https://github.com/oekazuma/svelte-meta-tags/releases)
- [Commits](https://github.com/oekazuma/svelte-meta-tags/compare/svelte-meta-tags@3.0.3...svelte-meta-tags@3.0.4)

---
updated-dependencies:
- dependency-name: svelte-meta-tags
  dependency-type: direct:development
  update-type: version-update:semver-patch
...

Signed-off-by: dependabot[bot] <support@github.com> - ([80d33c2](https://github.com/hexahigh/blalange.org/commit/80d33c28fe4ad7c0f7e0ff772eb7b88eaa4338f5))


- Merge pull request #7 from hexahigh/dependabot/npm_and_yarn/svelte-meta-tags-3.0.4

Bump svelte-meta-tags from 3.0.3 to 3.0.4 - ([7f6b0d4](https://github.com/hexahigh/blalange.org/commit/7f6b0d42c9632d18c2d5c60bc5ad572c6fc894df))


- Merge branch 'main' of https://github.com/hexahigh/kukfest - ([31a6169](https://github.com/hexahigh/blalange.org/commit/31a61696b52ca1d71ea5a7f50d328c0856fda659))


- Added more images - ([c487811](https://github.com/hexahigh/blalange.org/commit/c4878110ba8afdcd833672286f72cd4edb3d234e))


- Compressed images - ([f331abb](https://github.com/hexahigh/blalange.org/commit/f331abb39c69c28507d7ed48408e05bdb2514fb6))


- Merge branch 'main' of https://github.com/hexahigh/kukfest - ([8b106b5](https://github.com/hexahigh/blalange.org/commit/8b106b5acf2041e0604145edf3e19c8390c79252))


- Updated image page - ([7eccf38](https://github.com/hexahigh/blalange.org/commit/7eccf38d8b5895c405347d588d112efeff1ec538))


- Added downscaled images - ([915eef2](https://github.com/hexahigh/blalange.org/commit/915eef2ed16ceb6c5ef299676c24467a69a672a9))


- Updated - ([cf89ee9](https://github.com/hexahigh/blalange.org/commit/cf89ee9a9d91dd1850686815a9f3cd0a036b65d7))


- Bump vite from 4.4.9 to 4.4.11

Bumps [vite](https://github.com/vitejs/vite/tree/HEAD/packages/vite) from 4.4.9 to 4.4.11.
- [Release notes](https://github.com/vitejs/vite/releases)
- [Changelog](https://github.com/vitejs/vite/blob/v4.4.11/packages/vite/CHANGELOG.md)
- [Commits](https://github.com/vitejs/vite/commits/v4.4.11/packages/vite)

---
updated-dependencies:
- dependency-name: vite
  dependency-type: direct:development
  update-type: version-update:semver-patch
...

Signed-off-by: dependabot[bot] <support@github.com> - ([06a1a3c](https://github.com/hexahigh/blalange.org/commit/06a1a3c448aa027fcdf2114dfecc18866d9c9697))


- Merge pull request #11 from hexahigh/dependabot/npm_and_yarn/vite-4.4.11

Bump vite from 4.4.9 to 4.4.11 - ([725cc2b](https://github.com/hexahigh/blalange.org/commit/725cc2b96d53003ee262ef837ae3ff0f16faf8aa))


- Merge branch 'main' of https://github.com/hexahigh/kukfest - ([287056b](https://github.com/hexahigh/blalange.org/commit/287056bd7fa328aa941c65dbdc3a04b7b1430b41))


- Update image page - ([a4bb014](https://github.com/hexahigh/blalange.org/commit/a4bb014159b068593f645a93509c3ce62151714f))


- Created sw - ([ef85788](https://github.com/hexahigh/blalange.org/commit/ef85788861ab7c6d045bb9f40f6dd641e9b3fc3c))


- Updated the image grid (i hate css) - ([5360903](https://github.com/hexahigh/blalange.org/commit/53609032930d7f5f4460ce2b0c9a88bb97b32700))


- Commented out a unused function - ([7dcdc6d](https://github.com/hexahigh/blalange.org/commit/7dcdc6de25d7b3e545b9f1b2d43018c4d6a96d76))


- Add pwa - ([057555d](https://github.com/hexahigh/blalange.org/commit/057555d0b8206ab1e95d24582c7d9f80c7e7fe96))


- Merge branch 'main' of https://github.com/hexahigh/kukfest - ([9c395f7](https://github.com/hexahigh/blalange.org/commit/9c395f75a56331ad59b57a73272f4d5975ca832f))


- A - ([e25f54a](https://github.com/hexahigh/blalange.org/commit/e25f54a3842ff5eaab390bbe79ad4dfd8a79a6bd))


- Added pwa icons - ([1f3dc60](https://github.com/hexahigh/blalange.org/commit/1f3dc607e4e3b6e0cc3760515188754da3712585))


- Merge branch 'main' of https://github.com/hexahigh/kukfest - ([5523d12](https://github.com/hexahigh/blalange.org/commit/5523d12aa96b2f88eb89bb728f9cebaf1db91929))


- Do i even need vite-pwa? - ([d8f456d](https://github.com/hexahigh/blalange.org/commit/d8f456d44aa51b421ad72ea21033d09c7ca762ef))


- So that is why it did not update - ([7648232](https://github.com/hexahigh/blalange.org/commit/76482321e1916456cc6b0069bafee8f261255fc3))


- STOP OVERRIDING THE MANIFEST - ([694cdf6](https://github.com/hexahigh/blalange.org/commit/694cdf63d72f5ca610a85ac18765d099f9e5f13c))


- Bump svelte from 4.2.0 to 4.2.1

Bumps [svelte](https://github.com/sveltejs/svelte/tree/HEAD/packages/svelte) from 4.2.0 to 4.2.1.
- [Release notes](https://github.com/sveltejs/svelte/releases)
- [Changelog](https://github.com/sveltejs/svelte/blob/master/packages/svelte/CHANGELOG.md)
- [Commits](https://github.com/sveltejs/svelte/commits/svelte@4.2.1/packages/svelte)

---
updated-dependencies:
- dependency-name: svelte
  dependency-type: direct:development
  update-type: version-update:semver-patch
...

Signed-off-by: dependabot[bot] <support@github.com> - ([9be0034](https://github.com/hexahigh/blalange.org/commit/9be0034137ad360860bae85365a004b50a012541))


- Merge pull request #6 from hexahigh/dependabot/npm_and_yarn/svelte-4.2.1

Bump svelte from 4.2.0 to 4.2.1 - ([d915bd9](https://github.com/hexahigh/blalange.org/commit/d915bd9c66c3d266fc149b145696a7be97ceba97))


- Merge branch 'main' of https://github.com/hexahigh/kukfest - ([df10481](https://github.com/hexahigh/blalange.org/commit/df104812e283c2d054e88c11786cb8ef7cf2dee3))


- Dont sync lock - ([ba24933](https://github.com/hexahigh/blalange.org/commit/ba249332fa6f7c5c9a5e7fa1e9b659fca3daaefe))


- Bump @sveltejs/kit from 1.25.0 to 1.25.2

Bumps [@sveltejs/kit](https://github.com/sveltejs/kit/tree/HEAD/packages/kit) from 1.25.0 to 1.25.2.
- [Release notes](https://github.com/sveltejs/kit/releases)
- [Changelog](https://github.com/sveltejs/kit/blob/master/packages/kit/CHANGELOG.md)
- [Commits](https://github.com/sveltejs/kit/commits/@sveltejs/kit@1.25.2/packages/kit)

---
updated-dependencies:
- dependency-name: "@sveltejs/kit"
  dependency-type: direct:development
  update-type: version-update:semver-patch
...

Signed-off-by: dependabot[bot] <support@github.com> - ([39dd87c](https://github.com/hexahigh/blalange.org/commit/39dd87c71548b1e0e428ba7928401734f830a29e))


- Merge pull request #12 from hexahigh/dependabot/npm_and_yarn/sveltejs/kit-1.25.2

Bump @sveltejs/kit from 1.25.0 to 1.25.2 - ([d437400](https://github.com/hexahigh/blalange.org/commit/d437400f0bc87ddfe285e1af9e58988e452dc14d))


- Merge branch 'main' of https://github.com/hexahigh/kukfest - ([35a608a](https://github.com/hexahigh/blalange.org/commit/35a608a003e07a239123234e702009b479a6a6fa))


- Rounded the images - ([d1e3ee3](https://github.com/hexahigh/blalange.org/commit/d1e3ee3c9b3f1ce0c24492aca4c7f47edfc78fc2))


- Changed images to webp for better compression - ([95e2eaf](https://github.com/hexahigh/blalange.org/commit/95e2eaf8e235690c6f7b93ef89a93de5d089a35c))


- Oversatte siden - ([394869c](https://github.com/hexahigh/blalange.org/commit/394869c177b01725ec718f3757dac481581248f1))


- Updated confetti - ([a84ee3c](https://github.com/hexahigh/blalange.org/commit/a84ee3cad3f0482e9dab5c03c5fdd814fd6d27b8))


- Vite-pwa needs kolorist - ([fba2a85](https://github.com/hexahigh/blalange.org/commit/fba2a85c8f174c086c665b1e11b4f4e854fbe8cf))


- Updated max file size - ([9ba7951](https://github.com/hexahigh/blalange.org/commit/9ba7951932c3746e012ec556a90737ad99165d18))


- Added external fonts to the cache - ([1083d29](https://github.com/hexahigh/blalange.org/commit/1083d2905e4b83cac930ceb66f859461ee77566d))


- Update manifest - ([1083fd1](https://github.com/hexahigh/blalange.org/commit/1083fd1da09db461b045172afa095a05873d155c))


- Decreased update delay - ([c19a871](https://github.com/hexahigh/blalange.org/commit/c19a87133e686235f16a8e335f76c0c2773260de))


- Do i need this? - ([885517d](https://github.com/hexahigh/blalange.org/commit/885517d44e71214d20d7304ca05cd56c72aa7562))


- The documentation is bad - ([9667d0b](https://github.com/hexahigh/blalange.org/commit/9667d0b2044842924912f3d2c8c3b08ad0cd2a08))


- Why does cf pages not deploy - ([ccd2b74](https://github.com/hexahigh/blalange.org/commit/ccd2b74c2b2e5d3d8c98c7a1f3be59d6bae49080))


- Added reviews - ([002aaa0](https://github.com/hexahigh/blalange.org/commit/002aaa06646f9ba42f89884c2f0854a7d4b1b29e))


- Maybe fixed service worker on some pages - ([39c2e9e](https://github.com/hexahigh/blalange.org/commit/39c2e9e88ca790c2e31f20c50a30040af30a1bed))


- Oops - ([6c06bb6](https://github.com/hexahigh/blalange.org/commit/6c06bb6c78a78760516307f12b63e50455b9b62b))


- Does this work? - ([f5566c7](https://github.com/hexahigh/blalange.org/commit/f5566c74a3355fa8c25fa90842e50c8354f25264))


- It no work - ([a905beb](https://github.com/hexahigh/blalange.org/commit/a905beb96c7ba8397b80bb6486c2c16f44d5710a))


- Archive stuff - ([6726674](https://github.com/hexahigh/blalange.org/commit/6726674f48b29e43bf20244180ece7deafe18ae8))


- Mode no work - ([bfb0d3d](https://github.com/hexahigh/blalange.org/commit/bfb0d3dc12925efe3a74585d00ae8efb7a6c61da))


- Update archive - ([c5b4fb9](https://github.com/hexahigh/blalange.org/commit/c5b4fb95e400d1a38ec70d744d300d8acab2e418))


- Udpate - ([ea276cc](https://github.com/hexahigh/blalange.org/commit/ea276cca2e85351d82e03c1b70c8e5ebc8f09692))


- Merge branch 'main' of https://github.com/hexahigh/kukfest - ([9e65299](https://github.com/hexahigh/blalange.org/commit/9e65299c57110a9267da8d29b893369854b755c3))


- Uses pnpm - ([2c9089a](https://github.com/hexahigh/blalange.org/commit/2c9089a47595f982697ba9f4eebf8cd2855ccbe0))


- D - ([d541d8d](https://github.com/hexahigh/blalange.org/commit/d541d8dbaae8f3f273afd90b8856869f6c2485ec))


- Why no work - ([be8142e](https://github.com/hexahigh/blalange.org/commit/be8142ed63b1d74fa091b42dd8a0c2b77fd3b512))


- Removed - ([79cf278](https://github.com/hexahigh/blalange.org/commit/79cf278d3eff6ca4ac7aa2312a0858f0e3507d1b))


- I think i found the issue - ([e03ceeb](https://github.com/hexahigh/blalange.org/commit/e03ceeb92dbeba9304cabeafc4ab2aa0455c2215))


- Nvm - ([d473d63](https://github.com/hexahigh/blalange.org/commit/d473d63b1fee5439a837de073f767004c7fd24e3))


- Started create a contact form - ([e8c6e5c](https://github.com/hexahigh/blalange.org/commit/e8c6e5c9680903aada3f9c5e03b32145a05c418c))


- Added page with only countdown - ([88ecec0](https://github.com/hexahigh/blalange.org/commit/88ecec001c771587f65a98426c18ac9e747c0065))


- Merge branch 'main' of https://github.com/hexahigh/kukfest - ([df8f8d1](https://github.com/hexahigh/blalange.org/commit/df8f8d1122df6d4ca45d11aca936d234050883cb))


- Blocked - ([19d916f](https://github.com/hexahigh/blalange.org/commit/19d916f757ff26359635507389f96734bbd3d142))


- No more - ([7d675be](https://github.com/hexahigh/blalange.org/commit/7d675beb1dbc2629c8ae2dcd3a02934b000b562c))


- Merge branch 'main' of https://github.com/hexahigh/kukfest - ([8e9ccca](https://github.com/hexahigh/blalange.org/commit/8e9ccca6699c489caf3409f1838e9bf4f3083a83))


- Updated form - ([74e1bc4](https://github.com/hexahigh/blalange.org/commit/74e1bc45c7177479f03599991b842f8d558f67b1))


- Update form - ([9c8c2fd](https://github.com/hexahigh/blalange.org/commit/9c8c2fd3412b96a64953639ae37e7c6b486b534c))


- Oppdaterte form - ([b304911](https://github.com/hexahigh/blalange.org/commit/b304911319c23668fda9afd4a9be12b4b327f523))


- Update - ([f1d7de6](https://github.com/hexahigh/blalange.org/commit/f1d7de67d81e311a932ef4a7c30f3a210bf1f80d))


- Switched to new service worker - ([28c27af](https://github.com/hexahigh/blalange.org/commit/28c27af8aa1d92af928772b4d664a329babf4130))


- Update svelte config - ([a27f5ed](https://github.com/hexahigh/blalange.org/commit/a27f5ed4f1faeec29ccbf02574f04be948afe5fc))


- Update - ([b0abaf8](https://github.com/hexahigh/blalange.org/commit/b0abaf83e4434063b64606c15a96e0293a1272dc))


- Update - ([8a66423](https://github.com/hexahigh/blalange.org/commit/8a664236e4d6d2af04abdad83824d13a42b936c8))


- Bump vite from 4.4.11 to 4.5.0

Bumps [vite](https://github.com/vitejs/vite/tree/HEAD/packages/vite) from 4.4.11 to 4.5.0.
- [Release notes](https://github.com/vitejs/vite/releases)
- [Changelog](https://github.com/vitejs/vite/blob/v4.5.0/packages/vite/CHANGELOG.md)
- [Commits](https://github.com/vitejs/vite/commits/v4.5.0/packages/vite)

---
updated-dependencies:
- dependency-name: vite
  dependency-type: direct:development
  update-type: version-update:semver-minor
...

Signed-off-by: dependabot[bot] <support@github.com> - ([09f54e8](https://github.com/hexahigh/blalange.org/commit/09f54e8d167188fd643a46a9d7380d71f07c7566))


- Merge pull request #13 from hexahigh/dependabot/npm_and_yarn/vite-4.5.0

Bump vite from 4.4.11 to 4.5.0 - ([1523124](https://github.com/hexahigh/blalange.org/commit/152312415ef5c9f3f767d563a8b287aeb7864a1d))


- Bump svelte from 4.2.1 to 4.2.2

Bumps [svelte](https://github.com/sveltejs/svelte/tree/HEAD/packages/svelte) from 4.2.1 to 4.2.2.
- [Release notes](https://github.com/sveltejs/svelte/releases)
- [Changelog](https://github.com/sveltejs/svelte/blob/master/packages/svelte/CHANGELOG.md)
- [Commits](https://github.com/sveltejs/svelte/commits/svelte@4.2.2/packages/svelte)

---
updated-dependencies:
- dependency-name: svelte
  dependency-type: direct:development
  update-type: version-update:semver-patch
...

Signed-off-by: dependabot[bot] <support@github.com> - ([d6b86fc](https://github.com/hexahigh/blalange.org/commit/d6b86fc3e6fc6cbd42729436513b888b535d8946))


- Merge pull request #15 from hexahigh/dependabot/npm_and_yarn/svelte-4.2.2

Bump svelte from 4.2.1 to 4.2.2 - ([fb698e3](https://github.com/hexahigh/blalange.org/commit/fb698e346341c490c39afc39a3f5ba1596629a0f))


- Bump @sveltejs/kit from 1.25.2 to 1.27.3

Bumps [@sveltejs/kit](https://github.com/sveltejs/kit/tree/HEAD/packages/kit) from 1.25.2 to 1.27.3.
- [Release notes](https://github.com/sveltejs/kit/releases)
- [Changelog](https://github.com/sveltejs/kit/blob/master/packages/kit/CHANGELOG.md)
- [Commits](https://github.com/sveltejs/kit/commits/@sveltejs/kit@1.27.3/packages/kit)

---
updated-dependencies:
- dependency-name: "@sveltejs/kit"
  dependency-type: direct:development
  update-type: version-update:semver-minor
...

Signed-off-by: dependabot[bot] <support@github.com> - ([288efbd](https://github.com/hexahigh/blalange.org/commit/288efbd46443c704d04555a11326817ee0f8a2d6))


- Merge pull request #22 from hexahigh/dependabot/npm_and_yarn/sveltejs/kit-1.27.3

Bump @sveltejs/kit from 1.25.2 to 1.27.3 - ([980b9f6](https://github.com/hexahigh/blalange.org/commit/980b9f6fe3d250ff59e897f303d00b4a7af07080))


- Bump flowbite from 1.8.1 to 2.0.0

Bumps [flowbite](https://github.com/themesberg/flowbite) from 1.8.1 to 2.0.0.
- [Release notes](https://github.com/themesberg/flowbite/releases)
- [Commits](https://github.com/themesberg/flowbite/compare/v1.8.1...v2.0.0)

---
updated-dependencies:
- dependency-name: flowbite
  dependency-type: direct:development
  update-type: version-update:semver-major
...

Signed-off-by: dependabot[bot] <support@github.com> - ([e290b02](https://github.com/hexahigh/blalange.org/commit/e290b02bc8ca784300bbe710ae3bb6d60d24ce70))


- Merge pull request #20 from hexahigh/dependabot/npm_and_yarn/flowbite-2.0.0

Bump flowbite from 1.8.1 to 2.0.0 - ([e2d42e0](https://github.com/hexahigh/blalange.org/commit/e2d42e0cc76e8c0147e2bdcdadee95ed891a2682))


- Bump tailwindcss from 3.3.3 to 3.3.5

Bumps [tailwindcss](https://github.com/tailwindlabs/tailwindcss) from 3.3.3 to 3.3.5.
- [Release notes](https://github.com/tailwindlabs/tailwindcss/releases)
- [Changelog](https://github.com/tailwindlabs/tailwindcss/blob/master/CHANGELOG.md)
- [Commits](https://github.com/tailwindlabs/tailwindcss/compare/v3.3.3...v3.3.5)

---
updated-dependencies:
- dependency-name: tailwindcss
  dependency-type: direct:development
  update-type: version-update:semver-patch
...

Signed-off-by: dependabot[bot] <support@github.com> - ([3bb3578](https://github.com/hexahigh/blalange.org/commit/3bb3578abe37e3c8b6e1afdbae890148b4da1536))


- Merge pull request #19 from hexahigh/dependabot/npm_and_yarn/tailwindcss-3.3.5

Bump tailwindcss from 3.3.3 to 3.3.5 - ([cc94ff6](https://github.com/hexahigh/blalange.org/commit/cc94ff6f0360408ee19d38c7fb816aa19d50140e))


- Merge branch 'main' of https://github.com/hexahigh/kukfest - ([e05cb23](https://github.com/hexahigh/blalange.org/commit/e05cb235be9cae6f6f28c7b5e65902fe7103a35c))


- Increased maximumFileSizeToCacheInBytes - ([6530a68](https://github.com/hexahigh/blalange.org/commit/6530a68f08c6ea32e11f7bb2304b13f6ce6cb86d))


- Alright, dont put that there - ([4da2d0f](https://github.com/hexahigh/blalange.org/commit/4da2d0f0521fc700e0ca78d3702381e995fa6732))


- I forgot what i changed - ([6e9d3d5](https://github.com/hexahigh/blalange.org/commit/6e9d3d5873bab143563ca64c5950a92c84f79628))


- Small changes - ([c15a6a6](https://github.com/hexahigh/blalange.org/commit/c15a6a61f887ca768686f1c103af43eff89db582))


- Bump flowbite-svelte-icons from 0.4.4 to 0.4.5

Bumps [flowbite-svelte-icons](https://github.com/themesberg/flowbite-svelte-icons) from 0.4.4 to 0.4.5.
- [Changelog](https://github.com/themesberg/flowbite-svelte-icons/blob/main/CHANGELOG.md)
- [Commits](https://github.com/themesberg/flowbite-svelte-icons/compare/v0.4.4...v0.4.5)

---
updated-dependencies:
- dependency-name: flowbite-svelte-icons
  dependency-type: direct:production
  update-type: version-update:semver-patch
...

Signed-off-by: dependabot[bot] <support@github.com> - ([af3af26](https://github.com/hexahigh/blalange.org/commit/af3af26ff92c94f380ea09e288442b238b56f599))


- Merge pull request #23 from hexahigh:dependabot/npm_and_yarn/flowbite-svelte-icons-0.4.5

Bump flowbite-svelte-icons from 0.4.4 to 0.4.5 - ([acf0a5c](https://github.com/hexahigh/blalange.org/commit/acf0a5c7995885d467c7d5c9a1ea7e83c9dbb563))


- Jeg hater npm og node OG JASON DERULO - ([bc54df4](https://github.com/hexahigh/blalange.org/commit/bc54df4a66f84e577c59eca49a0b1f630ae4684e))


- Bump @sveltejs/kit from 1.27.3 to 1.27.6

Bumps [@sveltejs/kit](https://github.com/sveltejs/kit/tree/HEAD/packages/kit) from 1.27.3 to 1.27.6.
- [Release notes](https://github.com/sveltejs/kit/releases)
- [Changelog](https://github.com/sveltejs/kit/blob/master/packages/kit/CHANGELOG.md)
- [Commits](https://github.com/sveltejs/kit/commits/@sveltejs/kit@1.27.6/packages/kit)

---
updated-dependencies:
- dependency-name: "@sveltejs/kit"
  dependency-type: direct:development
  update-type: version-update:semver-patch
...

Signed-off-by: dependabot[bot] <support@github.com> - ([dbdfde2](https://github.com/hexahigh/blalange.org/commit/dbdfde21b1f624bf854803f5f0a51bbb3ee7c38e))


- Merge pull request #30 from hexahigh/dependabot/npm_and_yarn/sveltejs/kit-1.27.6

Bump @sveltejs/kit from 1.27.3 to 1.27.6 - ([a7f22b6](https://github.com/hexahigh/blalange.org/commit/a7f22b649d2d0f7c43d6fcb843826ad57690caee))


- Bump @formkit/auto-animate from 0.8.0 to 0.8.1

Bumps [@formkit/auto-animate](https://github.com/formkit/auto-animate) from 0.8.0 to 0.8.1.
- [Release notes](https://github.com/formkit/auto-animate/releases)
- [Commits](https://github.com/formkit/auto-animate/compare/0.8.0...0.8.1)

---
updated-dependencies:
- dependency-name: "@formkit/auto-animate"
  dependency-type: direct:production
  update-type: version-update:semver-patch
...

Signed-off-by: dependabot[bot] <support@github.com> - ([78f92a2](https://github.com/hexahigh/blalange.org/commit/78f92a25f5188098c802cba9028f80d94de545f5))


- Merge pull request #26 from hexahigh/dependabot/npm_and_yarn/formkit/auto-animate-0.8.1

Bump @formkit/auto-animate from 0.8.0 to 0.8.1 - ([dad1239](https://github.com/hexahigh/blalange.org/commit/dad12395d97aafddb3d2ebc6a839d00f0f87b98a))


- Bump @sveltejs/adapter-auto from 2.1.0 to 2.1.1

Bumps [@sveltejs/adapter-auto](https://github.com/sveltejs/kit/tree/HEAD/packages/adapter-auto) from 2.1.0 to 2.1.1.
- [Release notes](https://github.com/sveltejs/kit/releases)
- [Changelog](https://github.com/sveltejs/kit/blob/master/packages/adapter-auto/CHANGELOG.md)
- [Commits](https://github.com/sveltejs/kit/commits/@sveltejs/adapter-auto@2.1.1/packages/adapter-auto)

---
updated-dependencies:
- dependency-name: "@sveltejs/adapter-auto"
  dependency-type: direct:development
  update-type: version-update:semver-patch
...

Signed-off-by: dependabot[bot] <support@github.com> - ([08eacb4](https://github.com/hexahigh/blalange.org/commit/08eacb45f0279c839748a0e13b0bbea8a200a236))


- Merge pull request #24 from hexahigh/dependabot/npm_and_yarn/sveltejs/adapter-auto-2.1.1

Bump @sveltejs/adapter-auto from 2.1.0 to 2.1.1 - ([8004358](https://github.com/hexahigh/blalange.org/commit/80043582c1120dfcafbd97c1343136e54aa38c2b))


- Moved merch button - ([8941c93](https://github.com/hexahigh/blalange.org/commit/8941c93a8cc776da1eb04ae96629886fef075203))


- Removed orbitdb - ([a55e794](https://github.com/hexahigh/blalange.org/commit/a55e794921f84911015e8968e699372281d966b2))


- Switched to gunjs - ([0ca7fe1](https://github.com/hexahigh/blalange.org/commit/0ca7fe17be648b2bd7707522200c985035f266f7))


- Does require work? - ([f06047b](https://github.com/hexahigh/blalange.org/commit/f06047b15f2cca552388e2367ef15e79555d00a5))


- I will have to use a regular database - ([b162a6b](https://github.com/hexahigh/blalange.org/commit/b162a6bcf2cbfac687342e1bb35d48105729ed47))


- Update form - ([cc07bec](https://github.com/hexahigh/blalange.org/commit/cc07becbec0c03edbaf9d8bbf560c1fbf5a3f1fc))


- Update form - ([2d7aab9](https://github.com/hexahigh/blalange.org/commit/2d7aab9ff41fbd85e3d319a47f695c2a664fd9c9))


- Create privacy policy - ([14e2bd8](https://github.com/hexahigh/blalange.org/commit/14e2bd8af73b3a14bf86115f62af669a9f39e620))


- Update - ([6c19d14](https://github.com/hexahigh/blalange.org/commit/6c19d14137ef4fb0672e6c6feb0b1e66f89e810c))


- Started work on dark mode - ([9bda365](https://github.com/hexahigh/blalange.org/commit/9bda365a9218e3c0230d9f733091fad6a3edfeef))


- Working on darkmode - ([96a66fc](https://github.com/hexahigh/blalange.org/commit/96a66fcccc6ae5abe1399bab508feb0a5602c040))


- Darkmode - ([1bbf0d0](https://github.com/hexahigh/blalange.org/commit/1bbf0d019d42ef73ac447482504a0f8ff68f5445))


- Update darkmode - ([161309e](https://github.com/hexahigh/blalange.org/commit/161309efbd9998b387c2667f5e72fa0fcd2635ba))


- This is not fun - ([61d263d](https://github.com/hexahigh/blalange.org/commit/61d263dd4c39928019ee819c16dee92b61420907))


- Update - ([741b6aa](https://github.com/hexahigh/blalange.org/commit/741b6aabb5c79b9015f285b2d9493d67ec02205e))


- Bump vite from 4.5.0 to 4.5.1

Bumps [vite](https://github.com/vitejs/vite/tree/HEAD/packages/vite) from 4.5.0 to 4.5.1.
- [Release notes](https://github.com/vitejs/vite/releases)
- [Changelog](https://github.com/vitejs/vite/blob/v4.5.1/packages/vite/CHANGELOG.md)
- [Commits](https://github.com/vitejs/vite/commits/v4.5.1/packages/vite)

---
updated-dependencies:
- dependency-name: vite
  dependency-type: direct:development
...

Signed-off-by: dependabot[bot] <support@github.com> - ([ef41746](https://github.com/hexahigh/blalange.org/commit/ef417466d89783326aa3e687d3a3032997b59257))


- Merge pull request #40 from hexahigh/dependabot/npm_and_yarn/vite-4.5.1

Bump vite from 4.5.0 to 4.5.1 - ([352a191](https://github.com/hexahigh/blalange.org/commit/352a1915b805bf22e6ee02a9c3b01f1a149b4ded))


- Merge branch 'main' of https://github.com/hexahigh/kukfest - ([1b259aa](https://github.com/hexahigh/blalange.org/commit/1b259aa71f6fe5844eef581c5f13551063991eb2))


- Renamed - ([513b21c](https://github.com/hexahigh/blalange.org/commit/513b21c42fa073e9e46a76bc60a92612d4a03553))


- Updated form viewer - ([177d249](https://github.com/hexahigh/blalange.org/commit/177d24995ebd686732439e8b07578c072032b45f))


- Updated viewer - ([0a281bf](https://github.com/hexahigh/blalange.org/commit/0a281bf48141011caa6ac9e04d8503af4250a7a6))


- Removed image - ([9995eac](https://github.com/hexahigh/blalange.org/commit/9995eac3e84586be83e208ca1fa27b74f069cbff))


- Add user agent - ([804169b](https://github.com/hexahigh/blalange.org/commit/804169bc1274b99290c99a1b444900206a58f67b))


- Updated viewer - ([6b0831e](https://github.com/hexahigh/blalange.org/commit/6b0831e03831589c034c2c2e23d86e254e618be0))


- Updated PP and form viewer - ([ef212f8](https://github.com/hexahigh/blalange.org/commit/ef212f83601b9527e4cc4c75167a2b83cc1d6c95))


- Updated privacy policy - ([c56c8b4](https://github.com/hexahigh/blalange.org/commit/c56c8b422094ec966336c489c76767248a104a96))


- That is not true! - ([48d3aa3](https://github.com/hexahigh/blalange.org/commit/48d3aa3b624b74d2f2df7c98e3a799e083ee366f))


- Added form to homepage - ([b96b4b7](https://github.com/hexahigh/blalange.org/commit/b96b4b79f2935235d78f0b7b177b03e02a81d3a3))


- Funk da - ([393600b](https://github.com/hexahigh/blalange.org/commit/393600b0a00f792a1899dac89c88cfadee867c1d))


- Catppuccin :) - ([683150b](https://github.com/hexahigh/blalange.org/commit/683150b1db9d8c04d157ca40ddeb8d8be21cbcae))


- A - ([535864c](https://github.com/hexahigh/blalange.org/commit/535864cb65fb95138437f72b7d84308a13409b2e))


- Add team - ([d5bf8db](https://github.com/hexahigh/blalange.org/commit/d5bf8dbc69bed9b01732a6629db68ec3324e7fce))


- Update images - ([894c3ca](https://github.com/hexahigh/blalange.org/commit/894c3caba7ce9324d48343a5fb8af493fc2bf46c))


- Add people component - ([4671639](https://github.com/hexahigh/blalange.org/commit/46716393d28461cb910ee93c4ceb2e13ad5b96cb))


- Update people - ([a244de9](https://github.com/hexahigh/blalange.org/commit/a244de9e41d904fcfabf90ba275cd9900410c5a0))


- Update css - ([6814de4](https://github.com/hexahigh/blalange.org/commit/6814de43a3bfd4acadea50b30fa2f31a060c81fc))


- Create +page.svelte - ([5dce114](https://github.com/hexahigh/blalange.org/commit/5dce114532a5204d55fdde0bb2487ea9f8b53258))


- Create data.json - ([f683e52](https://github.com/hexahigh/blalange.org/commit/f683e52247aa68e2390b8c38717eb4c1f5811a43))


- Update data.json - ([7165220](https://github.com/hexahigh/blalange.org/commit/7165220e48d6a3161425da7d6408569d719cc816))


- Update webring - ([2151bf2](https://github.com/hexahigh/blalange.org/commit/2151bf2172ea52109f0392c2a9349c327deeceb9))


- Add more webring images - ([a987e4a](https://github.com/hexahigh/blalange.org/commit/a987e4a3da9f308f740d5d97362b9342efb1f1c3))


- Add visualizer - ([2b4c891](https://github.com/hexahigh/blalange.org/commit/2b4c891e65cc00e793f03131559c45821a037f52))


- Update vis - ([606d541](https://github.com/hexahigh/blalange.org/commit/606d5410d095df5a159fe5c6494b514ee17d0d1a))


- Update - ([a8d74c6](https://github.com/hexahigh/blalange.org/commit/a8d74c6142192b9a401b31b5adb027476148d618))


- Add articles list - ([8ed9566](https://github.com/hexahigh/blalange.org/commit/8ed9566dde83022e77734b713624a915303ffebc))


- Update articles - ([c46b4a2](https://github.com/hexahigh/blalange.org/commit/c46b4a2f3b359a56c93bcc509103fb268f1a8ac0))


- Merge branch 'main' of https://github.com/hexahigh/kukfest - ([72ca10b](https://github.com/hexahigh/blalange.org/commit/72ca10bc62e4280155d115132acd36ff317e96dc))


- Swaaaaggg moneee - ([b16628d](https://github.com/hexahigh/blalange.org/commit/b16628d8278cffacc97d2748033d7c9c9757f83e))


- Mooonnneeee part 2 - ([9ca5c7a](https://github.com/hexahigh/blalange.org/commit/9ca5c7af7ba1cf6a900a60a94db5505b88158b33))


- Ballemann - ([89d33f7](https://github.com/hexahigh/blalange.org/commit/89d33f7b6f2b1799f006d8a099d59754230f6fbb))


- Update - ([053eef9](https://github.com/hexahigh/blalange.org/commit/053eef9654fad19bb6194a9a8d6ac229d97689e2))


- Update webring - ([9b966d2](https://github.com/hexahigh/blalange.org/commit/9b966d20b95c48cf7b77f22bdd0bd3445b7b361f))


- Update ring - ([d28752e](https://github.com/hexahigh/blalange.org/commit/d28752eeae74c44a951c78fa3cd83ab1134d2e4e))


- A - ([6ad611b](https://github.com/hexahigh/blalange.org/commit/6ad611bad0a3fa3f8b52fa6a2687fd337257dcd9))


- Update - ([c81346c](https://github.com/hexahigh/blalange.org/commit/c81346cfb47ac056c82b2650a625d308cf24651b))


- Remove duplicate - ([2b9291e](https://github.com/hexahigh/blalange.org/commit/2b9291e40f9a0410a7715a02b28b463beb1371fd))


- S - ([790a078](https://github.com/hexahigh/blalange.org/commit/790a07821a77e418abfd43d6f086e87ddd245fcd))


- Done - ([14143f5](https://github.com/hexahigh/blalange.org/commit/14143f523d7fbba7d47648a7de3b3d29d835011d))


- Update template article - ([5ea99e5](https://github.com/hexahigh/blalange.org/commit/5ea99e5f67c8a6807f1303c8e87fe8cc723a9d76))


- Update article template - ([d6cb920](https://github.com/hexahigh/blalange.org/commit/d6cb9204d9f57be0d8e89b3ecacf5406d0e9d7b0))


- Update articles - ([6de14b8](https://github.com/hexahigh/blalange.org/commit/6de14b8c1a4493c3127a315ba40cfa4f13b774ed))


- Update article page - ([7227e95](https://github.com/hexahigh/blalange.org/commit/7227e9554f9a9711e742fb24366d00733f84f647))


- Udpate - ([50db219](https://github.com/hexahigh/blalange.org/commit/50db2195acf1e009cce595171694456f9946be8a))


- Vrry good - ([3142a84](https://github.com/hexahigh/blalange.org/commit/3142a8434b8c0b03a6f831de13f6fb24916f7dab))


- Add tags - ([9f5e431](https://github.com/hexahigh/blalange.org/commit/9f5e4314f6614520e038a398982041c6d79c888b))


- Ballemann vil ha det sånn - ([175085e](https://github.com/hexahigh/blalange.org/commit/175085e093c1a3bbb3e50b4593b59cfe984b36bd))


- Add lorem ipsum - ([0d909d4](https://github.com/hexahigh/blalange.org/commit/0d909d4ccad174cfdcb0ad3c3ba63b3b742aff08))


- Merge branch 'main' of https://github.com/hexahigh/kukfest - ([c44ac8e](https://github.com/hexahigh/blalange.org/commit/c44ac8e66b8506511d2e1376dca6052da3049de6))


- Update articles page - ([b26b1aa](https://github.com/hexahigh/blalange.org/commit/b26b1aa18d903ffb6e5f49f694eedb70429d913d))


- Create +page.js - ([51fa47c](https://github.com/hexahigh/blalange.org/commit/51fa47cb9c39d1f01bf93093a52f41856143acd4))


- Bump svelte-meta-tags from 3.0.4 to 3.1.0

Bumps [svelte-meta-tags](https://github.com/oekazuma/svelte-meta-tags) from 3.0.4 to 3.1.0.
- [Release notes](https://github.com/oekazuma/svelte-meta-tags/releases)
- [Commits](https://github.com/oekazuma/svelte-meta-tags/compare/svelte-meta-tags@3.0.4...svelte-meta-tags@3.1.0)

---
updated-dependencies:
- dependency-name: svelte-meta-tags
  dependency-type: direct:development
  update-type: version-update:semver-minor
...

Signed-off-by: dependabot[bot] <support@github.com> - ([736f7cd](https://github.com/hexahigh/blalange.org/commit/736f7cd5fc576a97b047001d7ba458e21e1a5581))


- Merge pull request #32 from hexahigh/dependabot/npm_and_yarn/svelte-meta-tags-3.1.0

Bump svelte-meta-tags from 3.0.4 to 3.1.0 - ([fcbe9e3](https://github.com/hexahigh/blalange.org/commit/fcbe9e34c7b6dbb2e568a84764788ef15f13cbcd))


- Bump flowbite-svelte from 0.44.18 to 0.44.22

Bumps [flowbite-svelte](https://github.com/themesberg/flowbite-svelte) from 0.44.18 to 0.44.22.
- [Release notes](https://github.com/themesberg/flowbite-svelte/releases)
- [Changelog](https://github.com/themesberg/flowbite-svelte/blob/main/CHANGELOG.md)
- [Commits](https://github.com/themesberg/flowbite-svelte/compare/v0.44.18...v0.44.22)

---
updated-dependencies:
- dependency-name: flowbite-svelte
  dependency-type: direct:development
  update-type: version-update:semver-patch
...

Signed-off-by: dependabot[bot] <support@github.com> - ([e1beff6](https://github.com/hexahigh/blalange.org/commit/e1beff64cd36821c35bacf00f7bb4e90b4bc76bf))


- Merge pull request #46 from hexahigh/dependabot/npm_and_yarn/flowbite-svelte-0.44.22

Bump flowbite-svelte from 0.44.18 to 0.44.22 - ([2267869](https://github.com/hexahigh/blalange.org/commit/2267869db8e144929137e51edb1a30863df896d0))


- Bump vite from 4.5.1 to 4.5.2

Bumps [vite](https://github.com/vitejs/vite/tree/HEAD/packages/vite) from 4.5.1 to 4.5.2.
- [Release notes](https://github.com/vitejs/vite/releases)
- [Changelog](https://github.com/vitejs/vite/blob/v4.5.2/packages/vite/CHANGELOG.md)
- [Commits](https://github.com/vitejs/vite/commits/v4.5.2/packages/vite)

---
updated-dependencies:
- dependency-name: vite
  dependency-type: direct:development
...

Signed-off-by: dependabot[bot] <support@github.com> - ([574b7a2](https://github.com/hexahigh/blalange.org/commit/574b7a2bb19804ab2225e957389e3296bd59f88f))


- Merge pull request #48 from hexahigh/dependabot/npm_and_yarn/vite-4.5.2

Bump vite from 4.5.1 to 4.5.2 - ([81eb885](https://github.com/hexahigh/blalange.org/commit/81eb88589f8bdd150d67279558259f4e9a22dccd))


- Bump @sveltejs/adapter-cloudflare from 2.3.3 to 2.3.4

Bumps [@sveltejs/adapter-cloudflare](https://github.com/sveltejs/kit/tree/HEAD/packages/adapter-cloudflare) from 2.3.3 to 2.3.4.
- [Release notes](https://github.com/sveltejs/kit/releases)
- [Changelog](https://github.com/sveltejs/kit/blob/main/packages/adapter-cloudflare/CHANGELOG.md)
- [Commits](https://github.com/sveltejs/kit/commits/@sveltejs/adapter-cloudflare@2.3.4/packages/adapter-cloudflare)

---
updated-dependencies:
- dependency-name: "@sveltejs/adapter-cloudflare"
  dependency-type: direct:production
  update-type: version-update:semver-patch
...

Signed-off-by: dependabot[bot] <support@github.com> - ([5743c8b](https://github.com/hexahigh/blalange.org/commit/5743c8b040527f77e9b87b0a247bcd8ade1f622b))


- Merge pull request #50 from hexahigh/dependabot/npm_and_yarn/sveltejs/adapter-cloudflare-2.3.4

Bump @sveltejs/adapter-cloudflare from 2.3.3 to 2.3.4 - ([545e97b](https://github.com/hexahigh/blalange.org/commit/545e97ba7393b2c2d2fb036818f60cbec1beb7e9))


- Bump @vite-pwa/sveltekit from 0.2.7 to 0.3.0

Bumps [@vite-pwa/sveltekit](https://github.com/vite-pwa/sveltekit) from 0.2.7 to 0.3.0.
- [Release notes](https://github.com/vite-pwa/sveltekit/releases)
- [Commits](https://github.com/vite-pwa/sveltekit/compare/v0.2.7...v0.3.0)

---
updated-dependencies:
- dependency-name: "@vite-pwa/sveltekit"
  dependency-type: direct:development
  update-type: version-update:semver-minor
...

Signed-off-by: dependabot[bot] <support@github.com> - ([b05a7fe](https://github.com/hexahigh/blalange.org/commit/b05a7fe7a32c86378a3bd0c7704c479a9abb3836))


- Merge pull request #44 from hexahigh/dependabot/npm_and_yarn/vite-pwa/sveltekit-0.3.0

Bump @vite-pwa/sveltekit from 0.2.7 to 0.3.0 - ([27bd164](https://github.com/hexahigh/blalange.org/commit/27bd16445f232782b5d4e550632c35c8ed562b50))


- Bump flowbite from 2.0.0 to 2.2.1

Bumps [flowbite](https://github.com/themesberg/flowbite) from 2.0.0 to 2.2.1.
- [Release notes](https://github.com/themesberg/flowbite/releases)
- [Commits](https://github.com/themesberg/flowbite/compare/v2.0.0...v2.2.1)

---
updated-dependencies:
- dependency-name: flowbite
  dependency-type: direct:development
  update-type: version-update:semver-minor
...

Signed-off-by: dependabot[bot] <support@github.com> - ([a136b1f](https://github.com/hexahigh/blalange.org/commit/a136b1f08a118bd4bcc67d1e3d609633ea2efe1b))


- Merge pull request #43 from hexahigh/dependabot/npm_and_yarn/flowbite-2.2.1

Bump flowbite from 2.0.0 to 2.2.1 - ([2afecce](https://github.com/hexahigh/blalange.org/commit/2afecce1cfc3790a8f8fee3ed2d9db935c18ad8b))


- Merge branch 'main' of https://github.com/hexahigh/kukfest - ([e194201](https://github.com/hexahigh/blalange.org/commit/e194201762229eb6a0a1751e853a71f49fe43763))


- A - ([782cbdb](https://github.com/hexahigh/blalange.org/commit/782cbdbf309894dec5cc59232adc98b752cc0e8e))


- Ballemann prokrastiner - ([eb0172c](https://github.com/hexahigh/blalange.org/commit/eb0172cabf869930335baa772a95a5fbffd5d539))


- Jeg har gjort en ting som er kul og viktig og jeg er best i test 100% - ([2c61c2b](https://github.com/hexahigh/blalange.org/commit/2c61c2b5c1de56a25adf3d84854f88d7aabe0245))


- Update metatags - ([1cc1874](https://github.com/hexahigh/blalange.org/commit/1cc18743977230c18cda983332286599ebabef18))


- Bump svelte from 4.2.2 to 4.2.9

Bumps [svelte](https://github.com/sveltejs/svelte/tree/HEAD/packages/svelte) from 4.2.2 to 4.2.9.
- [Release notes](https://github.com/sveltejs/svelte/releases)
- [Changelog](https://github.com/sveltejs/svelte/blob/svelte@4.2.9/packages/svelte/CHANGELOG.md)
- [Commits](https://github.com/sveltejs/svelte/commits/svelte@4.2.9/packages/svelte)

---
updated-dependencies:
- dependency-name: svelte
  dependency-type: direct:development
  update-type: version-update:semver-patch
...

Signed-off-by: dependabot[bot] <support@github.com> - ([67b3eb3](https://github.com/hexahigh/blalange.org/commit/67b3eb34399fed4280db2f8f210db10e1e72750d))


- Merge pull request #47 from hexahigh/dependabot/npm_and_yarn/svelte-4.2.9

Bump svelte from 4.2.2 to 4.2.9 - ([c6915e0](https://github.com/hexahigh/blalange.org/commit/c6915e092c509f0c30191be92301b2da9dc69185))


- Merge branch 'main' of https://github.com/hexahigh/kukfest - ([f053267](https://github.com/hexahigh/blalange.org/commit/f053267ad9d42bd31b84c67d1f0a0530d50e4b39))


- Bump @sveltejs/enhanced-img from 0.1.7 to 0.1.8

Bumps [@sveltejs/enhanced-img](https://github.com/sveltejs/kit/tree/HEAD/packages/image) from 0.1.7 to 0.1.8.
- [Release notes](https://github.com/sveltejs/kit/releases)
- [Commits](https://github.com/sveltejs/kit/commits/@sveltejs/enhanced-img@0.1.8/packages/image)

---
updated-dependencies:
- dependency-name: "@sveltejs/enhanced-img"
  dependency-type: direct:development
  update-type: version-update:semver-patch
...

Signed-off-by: dependabot[bot] <support@github.com> - ([ed9f161](https://github.com/hexahigh/blalange.org/commit/ed9f16124e899b3a353ec3dff3cca6f7e9afd7e4))


- Merge pull request #49 from hexahigh/dependabot/npm_and_yarn/sveltejs/enhanced-img-0.1.8

Bump @sveltejs/enhanced-img from 0.1.7 to 0.1.8 - ([7b41bdc](https://github.com/hexahigh/blalange.org/commit/7b41bdc5f338b20b2b6585b2236add8f9a58e901))


- Merge branch 'main' of https://github.com/hexahigh/kukfest - ([75168f8](https://github.com/hexahigh/blalange.org/commit/75168f88605cb8919cccd2ae131f7778c666a638))


- A - ([ae5ada1](https://github.com/hexahigh/blalange.org/commit/ae5ada13ca8366398284804798a4cf35a1d91c97))


- JAAAAAAAA - ([ab0629f](https://github.com/hexahigh/blalange.org/commit/ab0629fd5055b3e8b40d4e7a8eac45502733db14))


- Jippi - ([2798606](https://github.com/hexahigh/blalange.org/commit/279860671dae927224c66ebdc4a27e03a401c6e1))


- Onei onei np gjorde jeg noe - ([7b6bed8](https://github.com/hexahigh/blalange.org/commit/7b6bed8bc3ab7fc07421677a9e173aa99c8964a9))


- Merge branch 'main' of https://github.com/hexahigh/kukfest - ([6df7b8b](https://github.com/hexahigh/blalange.org/commit/6df7b8b1117043bfef58f83dc681c160c31c1eac))


- Merge branch 'main' of https://github.com/hexahigh/kukfest - ([6c8b6b8](https://github.com/hexahigh/blalange.org/commit/6c8b6b8864a3e578ce43b1da0aef0d0ed612c417))


- Update articlecard - ([f3559a3](https://github.com/hexahigh/blalange.org/commit/f3559a387ad95183c94c67475cbbd48090a4a83c))


- ( - ([3ea1854](https://github.com/hexahigh/blalange.org/commit/3ea18542e153a08e33ccd2e7194356f55ad89bff))


- Add term - ([e726fdc](https://github.com/hexahigh/blalange.org/commit/e726fdcd3e28aeedb4cc8ef089914da847a1c40f))


- Update term - ([c662ba7](https://github.com/hexahigh/blalange.org/commit/c662ba7113085cf35b582e7a4d30db73501d4fd5))


- Vi er korrupt (nice) - ([e11f762](https://github.com/hexahigh/blalange.org/commit/e11f762129f951a0aa3d7a4a4ffe164dcb3e57f9))


- Jajajajjajaja - ([2921353](https://github.com/hexahigh/blalange.org/commit/29213536938adfb327555c0bd3d757fd5c8323ec))


- No more ads - ([30c24f1](https://github.com/hexahigh/blalange.org/commit/30c24f119c2d70d5d2b424580ca1a5a5af8ad9f8))


- Add sitemap - ([a88bd70](https://github.com/hexahigh/blalange.org/commit/a88bd70870f08cba1138eeb101a5dd05cca20026))


- Removed unused stuff - ([67471d2](https://github.com/hexahigh/blalange.org/commit/67471d2004e6ff3923e79fddb00a3cd235afa636))


- Bump tsparticles from 2.12.0 to 3.2.2

Bumps [tsparticles](https://github.com/tsparticles/tsparticles/tree/HEAD/bundles/full) from 2.12.0 to 3.2.2.
- [Release notes](https://github.com/tsparticles/tsparticles/releases)
- [Changelog](https://github.com/tsparticles/tsparticles/blob/main/bundles/full/CHANGELOG.md)
- [Commits](https://github.com/tsparticles/tsparticles/commits/v3.2.2/bundles/full)

---
updated-dependencies:
- dependency-name: tsparticles
  dependency-type: direct:production
  update-type: version-update:semver-major
...

Signed-off-by: dependabot[bot] <support@github.com> - ([0eaecdb](https://github.com/hexahigh/blalange.org/commit/0eaecdbfa446b7c434f9bc48015fadaf4b141e08))


- Merge pull request #60 from hexahigh/dependabot/npm_and_yarn/tsparticles-3.2.2

Bump tsparticles from 2.12.0 to 3.2.2 - ([0d15e13](https://github.com/hexahigh/blalange.org/commit/0d15e13d306d27c51bcc611d39668ebade26768d))


- Bump @vite-pwa/assets-generator from 0.0.10 to 0.2.4

Bumps [@vite-pwa/assets-generator](https://github.com/vite-pwa/assets-generator) from 0.0.10 to 0.2.4.
- [Release notes](https://github.com/vite-pwa/assets-generator/releases)
- [Commits](https://github.com/vite-pwa/assets-generator/compare/v0.0.10...v0.2.4)

---
updated-dependencies:
- dependency-name: "@vite-pwa/assets-generator"
  dependency-type: direct:development
  update-type: version-update:semver-minor
...

Signed-off-by: dependabot[bot] <support@github.com> - ([e603753](https://github.com/hexahigh/blalange.org/commit/e603753a84690a07eaceae3fed3edf43895bbac1))


- Merge pull request #59 from hexahigh/dependabot/npm_and_yarn/vite-pwa/assets-generator-0.2.4

Bump @vite-pwa/assets-generator from 0.0.10 to 0.2.4 - ([08c9497](https://github.com/hexahigh/blalange.org/commit/08c949727fd093c5e86884a403f22cbdcea274c6))


- Add login - ([cbf84cb](https://github.com/hexahigh/blalange.org/commit/cbf84cb5469f7d3bbbe73f8fac96b5099732f7ef))


- Add analytics - ([a6e3b4e](https://github.com/hexahigh/blalange.org/commit/a6e3b4e9ab90849508ad75019e41cbdb42d08e5b))


- Im stupid - ([6f3e3fb](https://github.com/hexahigh/blalange.org/commit/6f3e3fb2c9b86c62febcd8718bee4c097264a70d))


- Update analytics - ([a228c0e](https://github.com/hexahigh/blalange.org/commit/a228c0e564c594c4ff3c457a74a81090faeb7ba9))


- Update - ([e5b73a7](https://github.com/hexahigh/blalange.org/commit/e5b73a79eca472a8ba2d9696158646898e9250bf))


- Hehehe - ([54ec0aa](https://github.com/hexahigh/blalange.org/commit/54ec0aaeed90d5575e137b65bcaf4c3c97f18056))


- I give up - ([8d0cdcc](https://github.com/hexahigh/blalange.org/commit/8d0cdcc1cf34c561326444b3b7ae0100866b88f6))


- Update article list layout - ([82d8780](https://github.com/hexahigh/blalange.org/commit/82d8780bed3316caebfb72ce2dcd5bb249335e2e))


- Update articlecard - ([de55951](https://github.com/hexahigh/blalange.org/commit/de559514b8f4f1ed253633bc8534f477800b6bc9))


- Update webring - ([fe34b3c](https://github.com/hexahigh/blalange.org/commit/fe34b3c877168b35b59620cda7b0737af9fd7c51))


- Update webring - ([7d16243](https://github.com/hexahigh/blalange.org/commit/7d1624344c7c1a04b3612a0515cf308a48fca041))


- Update webring - ([aedd730](https://github.com/hexahigh/blalange.org/commit/aedd7301d988495818c39c6170451a10615d120e))


- Update - ([23418a8](https://github.com/hexahigh/blalange.org/commit/23418a88ca98638daa0057c1cb87316fef2289e0))


- Update nav - ([10d9209](https://github.com/hexahigh/blalange.org/commit/10d9209179a0e0960afeba78a581026c2ded121d))


- Add home - ([d30684c](https://github.com/hexahigh/blalange.org/commit/d30684cb680e935c42cecaf288b3c30ea894427e))


- Pullings - ([b52ac72](https://github.com/hexahigh/blalange.org/commit/b52ac72cac07f756d4c6dc412b560140cfaf5e51))


- Update text - ([4ff0c72](https://github.com/hexahigh/blalange.org/commit/4ff0c72de40771bedcfb4a481edc22e052bc00a3))


- Update text (again) - ([798c798](https://github.com/hexahigh/blalange.org/commit/798c79895c6445fecf1e77f7fb56da864baa2a0d))


- Merge branch 'dev' of https://github.com/hexahigh/kukfest into dev - ([5acc5cc](https://github.com/hexahigh/blalange.org/commit/5acc5cc95051cb6e6ef661435b930f53e3e2ef13))


- Bump autoprefixer from 10.4.16 to 10.4.18

Bumps [autoprefixer](https://github.com/postcss/autoprefixer) from 10.4.16 to 10.4.18.
- [Release notes](https://github.com/postcss/autoprefixer/releases)
- [Changelog](https://github.com/postcss/autoprefixer/blob/main/CHANGELOG.md)
- [Commits](https://github.com/postcss/autoprefixer/compare/10.4.16...10.4.18)

---
updated-dependencies:
- dependency-name: autoprefixer
  dependency-type: direct:development
  update-type: version-update:semver-patch
...

Signed-off-by: dependabot[bot] <support@github.com> - ([1dd5343](https://github.com/hexahigh/blalange.org/commit/1dd5343ef0e271dbff5dcfb605e3e7651b375aa0))


- Merge pull request #64 from hexahigh/dependabot/npm_and_yarn/autoprefixer-10.4.18

Bump autoprefixer from 10.4.16 to 10.4.18 - ([d0dea55](https://github.com/hexahigh/blalange.org/commit/d0dea555c80adaa6d19a9b2ca4586ff95933e82b))


- Optimize images - ([0dc4746](https://github.com/hexahigh/blalange.org/commit/0dc4746ad6072e2f7d343af85226b343b183d456))


- Startet på ny artikkel - ([81dc045](https://github.com/hexahigh/blalange.org/commit/81dc0451fef6152b2140761176ff170f33d0633d))


- Remove pwa - ([dc20caa](https://github.com/hexahigh/blalange.org/commit/dc20caa9d776102749ab33063924b343fe5ae1d3))


- It was not vitepwa - ([75f9604](https://github.com/hexahigh/blalange.org/commit/75f960450c6a1f4593636ce1c95e7908eed0d589))


- :( - ([426b7db](https://github.com/hexahigh/blalange.org/commit/426b7db58e1f9a08ba7eebdd84d3776220710a49))


- Wtf - ([529f588](https://github.com/hexahigh/blalange.org/commit/529f5885aac6d9e2a8785ba92844f522c61d682a))


- Update article - ([6e02ad9](https://github.com/hexahigh/blalange.org/commit/6e02ad94fcb705ee5dcc43f72f90d7ae6bd62f08))


- Update ip api - ([bca0c66](https://github.com/hexahigh/blalange.org/commit/bca0c6640afb9a85dc8390e5a2f3cfc6ca330281))


- Improved UX in the form - ([ea49da6](https://github.com/hexahigh/blalange.org/commit/ea49da6b376946724585992bc1da818ac0030973))


- Bra - ([7bbaacd](https://github.com/hexahigh/blalange.org/commit/7bbaacd0ac66c35976386ce3651e063b5c6f79e1))


- Update fonts - ([0bcde6d](https://github.com/hexahigh/blalange.org/commit/0bcde6dfb9e044c742cc2e6db618884b2e4795dc))


- Cleanup - ([e579dbf](https://github.com/hexahigh/blalange.org/commit/e579dbfae9cc19099a15ce7d6f80614fa06317b7))


- Update manifest - ([d14b6e6](https://github.com/hexahigh/blalange.org/commit/d14b6e61effda1499e0b6b6bc923529c3265a13f))


- Update - ([ea3c433](https://github.com/hexahigh/blalange.org/commit/ea3c433a6493bc4bf277169cdfda6554a22c75ac))


- Merge branch 'dev' of https://github.com/hexahigh/kukfest into dev - ([09358ae](https://github.com/hexahigh/blalange.org/commit/09358ae9fbd26b40b290dbc9491a9f43a0d9ecaf))


- Update manifest - ([e1b3c55](https://github.com/hexahigh/blalange.org/commit/e1b3c555cdfc73721a47b6a919ba9b32a7d053df))


- Harmann er lat - ([6983b9b](https://github.com/hexahigh/blalange.org/commit/6983b9b09b76b86e9dd6c690a170117630fd66c5))


- Merge pull request #65 from hexahigh:dev

new domain and name - ([aca3161](https://github.com/hexahigh/blalange.org/commit/aca31612b400ba786391f21614f335a2beec0df9))


- Merge remote-tracking branch 'origin/main' into dev - ([1548006](https://github.com/hexahigh/blalange.org/commit/15480068d57d7ab8298fa3cbc6f2c0ee43eb3d05))


- NEW LOGO! - ([07c0643](https://github.com/hexahigh/blalange.org/commit/07c0643ae041d594d6d33b83e7a0cb31673be4d5))


- Merge pull request #68 from hexahigh:dev

Dev - ([aca6ab4](https://github.com/hexahigh/blalange.org/commit/aca6ab49f719dc08c1dd352a8d3c0b3392e9e54c))


- Merge remote-tracking branch 'origin/main' into dev - ([8ac466b](https://github.com/hexahigh/blalange.org/commit/8ac466ba1538bb948bd59c6225a15901ab68af73))


- Update nav - ([cf265e0](https://github.com/hexahigh/blalange.org/commit/cf265e0d45f3e37f37bfd8d4a196446c945490b0))


- Merge pull request #69 from hexahigh:dev

NEW LOGO! - ([43a9fb5](https://github.com/hexahigh/blalange.org/commit/43a9fb51b906ba770b975a94053c992e1bc6e9c6))


- Update svelte.config.js - ([7e295ee](https://github.com/hexahigh/blalange.org/commit/7e295ee83065401d33713b724b54b9be02d16854))


- Update analytics.js - ([e8ada2c](https://github.com/hexahigh/blalange.org/commit/e8ada2c5ff70eb19e67b14da647cb34e0f5840ab))


- Update analytics.js - ([b19566d](https://github.com/hexahigh/blalange.org/commit/b19566dd70dcc3bad3de6e3c412586b7ca9ae573))


- Update README.md - ([d1f96f3](https://github.com/hexahigh/blalange.org/commit/d1f96f38d7f1f6a5206b9cc5766047efd156c022))


- Merge remote-tracking branch 'origin/main' into dev - ([17649d2](https://github.com/hexahigh/blalange.org/commit/17649d2c8c1690b096ac6675b4c0e04e3f6f6afa))


- Optimize images - ([71908b9](https://github.com/hexahigh/blalange.org/commit/71908b981e422d34bc531e6e3f03cff6f767ffd3))


- No more svg - ([b082d3e](https://github.com/hexahigh/blalange.org/commit/b082d3e27139744cdc37b5ca1c54d94bead79f34))


- Ingen mer hugo - ([127e2b7](https://github.com/hexahigh/blalange.org/commit/127e2b7a2580c246481dfe981792c039ec2123a4))


- Merge pull request #70 from hexahigh:dev

merge dev - ([550f579](https://github.com/hexahigh/blalange.org/commit/550f579357e086b7e8a30539cadc3455bf88611d))


- Merge remote-tracking branch 'origin/main' into dev - ([5739125](https://github.com/hexahigh/blalange.org/commit/573912531e9e076b0d1ebf134632693e8b24a146))


- Add build and test workflow - ([b9757cb](https://github.com/hexahigh/blalange.org/commit/b9757cbf1e9589706a898768a148a0744cadfaa2))


- Cleanup - ([a34338b](https://github.com/hexahigh/blalange.org/commit/a34338b248d9c606bc7e4a8f67143a676e00e862))


- More cleaning - ([34d1cbd](https://github.com/hexahigh/blalange.org/commit/34d1cbd0e2d53d8b70d12f6a2117ba971926ad0a))


- Merge pull request #71 from hexahigh:dev

ingen mer hugo + kompressjon - ([7af9ff6](https://github.com/hexahigh/blalange.org/commit/7af9ff69b131aa5de13c5a8e1afc20b9a2d438c0))


- Merge remote-tracking branch 'origin/main' into dev - ([474ec5b](https://github.com/hexahigh/blalange.org/commit/474ec5b405af39477576c6333047caa4d308417d))


- Maybe fix? - ([545fcc9](https://github.com/hexahigh/blalange.org/commit/545fcc916efc0a0917138ddbc07ce92d8b08cf7c))


- Update service worker - ([748e712](https://github.com/hexahigh/blalange.org/commit/748e712a3b9dc6b795c04c08d55c0295106b7bac))


- What does this do? - ([dec799b](https://github.com/hexahigh/blalange.org/commit/dec799b2c7cc0f8e5abca785cfae928fd2b70988))


- Add manifest in vite file - ([2ab3505](https://github.com/hexahigh/blalange.org/commit/2ab35059baa203a512497c163a1c796dbeaed17d))


- Update - ([cea68fc](https://github.com/hexahigh/blalange.org/commit/cea68fc5eeb097bf36caf4365d5a8a8bbea91c44))


- Update - ([78cd13a](https://github.com/hexahigh/blalange.org/commit/78cd13a199f41bffc2c6d81f83488e1fb3db65f2))


- Update pwa - ([a50c28b](https://github.com/hexahigh/blalange.org/commit/a50c28bfb1ae1530e203c726b376700295fbd818))


- Merge pull request #72 from hexahigh:dev

mostly cleaning - ([9cb42b8](https://github.com/hexahigh/blalange.org/commit/9cb42b84b443258bbf0d6ce19dc0dcea4f6736d8))


- Bump @sveltejs/kit from 1.27.6 to 1.30.4

Bumps [@sveltejs/kit](https://github.com/sveltejs/kit/tree/HEAD/packages/kit) from 1.27.6 to 1.30.4.
- [Release notes](https://github.com/sveltejs/kit/releases)
- [Changelog](https://github.com/sveltejs/kit/blob/@sveltejs/kit@1.30.4/packages/kit/CHANGELOG.md)
- [Commits](https://github.com/sveltejs/kit/commits/@sveltejs/kit@1.30.4/packages/kit)

---
updated-dependencies:
- dependency-name: "@sveltejs/kit"
  dependency-type: direct:development
  update-type: version-update:semver-minor
...

Signed-off-by: dependabot[bot] <support@github.com> - ([a48d8d4](https://github.com/hexahigh/blalange.org/commit/a48d8d4f23dc352a054875542bb8f712c0050754))


- Merge pull request #67 from hexahigh/dependabot/npm_and_yarn/sveltejs/kit-1.30.4

Bump @sveltejs/kit from 1.27.6 to 1.30.4 - ([f212987](https://github.com/hexahigh/blalange.org/commit/f212987de55258adeb14aa31cd03c4b39ab660b9))


- Merge remote-tracking branch 'origin/main' into dev - ([9dd5b3d](https://github.com/hexahigh/blalange.org/commit/9dd5b3d3f2ea796181c4abd14f6d33ecdcc7ce6d))


- Add donation - ([6069299](https://github.com/hexahigh/blalange.org/commit/606929960a6e5a5fecaa36ef95ed6fe40fc5b0f2))


- Cat error - ([484332b](https://github.com/hexahigh/blalange.org/commit/484332ba1a7d96a744a2b7b35d4b57101fff9f5d))


- Update - ([885da60](https://github.com/hexahigh/blalange.org/commit/885da604ba5d25ee9c2f1c7835eaad0f7bdd0287))


- Merge pull request #73 from hexahigh:dev

pwa - ([aea3c6d](https://github.com/hexahigh/blalange.org/commit/aea3c6dc54487861788f4e6a72464b3b13f759db))


- Merge pull request #74 from hexahigh:dev

chipichipa chapachapa dubidubi jabadaba - ([39798c8](https://github.com/hexahigh/blalange.org/commit/39798c84fd27dd7b2721a22c4f9323cd85a00ded))


- Merge remote-tracking branch 'origin/main' into dev - ([7c57a0c](https://github.com/hexahigh/blalange.org/commit/7c57a0c6e8cc592e9e99e9b9cffccb877e19cab0))


- This is better - ([5989536](https://github.com/hexahigh/blalange.org/commit/59895369b6ca48d203cb87ccc165398a112f5ce9))


- Better - ([d114527](https://github.com/hexahigh/blalange.org/commit/d1145273fc4146b9d19d5ecf02cc3d3bc9effc03))


- Merge pull request #75 from hexahigh:dev

update - ([2bd4c00](https://github.com/hexahigh/blalange.org/commit/2bd4c00f4c04cd6ff022354921984cb12c53f550))


- Merge pull request #76 from hexahigh:dev

update - ([5ee1c76](https://github.com/hexahigh/blalange.org/commit/5ee1c76b85239c0dac98d71ad72d6bfb55e95840))


- Merge remote-tracking branch 'origin/main' into dev - ([af237d5](https://github.com/hexahigh/blalange.org/commit/af237d5573270f773ffc2e37df475cefccb7f9b1))


- Nvm - ([313d86b](https://github.com/hexahigh/blalange.org/commit/313d86b3a2d1589b063aab93e0eae8025330e35c))


- Update money - ([bf89839](https://github.com/hexahigh/blalange.org/commit/bf898392694fb1aa91454cdee3967b1b26a77aed))


- Merge pull request #77 from hexahigh:dev

better - ([18ffe4e](https://github.com/hexahigh/blalange.org/commit/18ffe4e758da348dda10ad0dcd5a94b05da4b4d6))


- Merge pull request #78 from hexahigh:dev

nvm - ([201b67e](https://github.com/hexahigh/blalange.org/commit/201b67e0ec6562cf2fd75f7849cfc0843d4aee57))


- Merge remote-tracking branch 'origin/main' into dev - ([a897222](https://github.com/hexahigh/blalange.org/commit/a897222039dbbb6637f773399ed965b7c5dd5546))


- Merge pull request #79 from hexahigh:dev

update money - ([7da14cc](https://github.com/hexahigh/blalange.org/commit/7da14cceb1a0e45752275402f7314b5ba7d1124a))


- Merge remote-tracking branch 'origin/main' into dev - ([7da35d5](https://github.com/hexahigh/blalange.org/commit/7da35d5408df4732f0e091397e6e572ca1fa66a0))


- Updated the way donations are calculated - ([a50d9c7](https://github.com/hexahigh/blalange.org/commit/a50d9c7b6c631d1202c66f3ba93b46beb6ea887a))


- Merge pull request #80 from hexahigh:dev

fix? - ([b5335eb](https://github.com/hexahigh/blalange.org/commit/b5335ebe2dd8c454ccbcc25e82a3798a2fa77da5))


- Merge remote-tracking branch 'origin/main' into dev - ([7195866](https://github.com/hexahigh/blalange.org/commit/7195866f1bdaf66f403b78018efe13ed33af6df7))


- Ny navbar (dette tokk lang tid - ([c5bfc11](https://github.com/hexahigh/blalange.org/commit/c5bfc11a22c966922ab6635cf84295f5b16bc551))


### Commit Statistics

- 382 commit(s) contributed to the release.
- 187 day(s) passed between the first and last commit.
- 1 commit(s) parsed as conventional.
- 0 linked issue(s) detected in commits.


