# Airship Games website: builder notes

Jekyll site on GitHub Pages; `main` deploys automatically, so every merge is live.

- **Test command:** `bundle exec jekyll build && ruby scripts/check_site.rb`. CI runs the same on every PR.
- **Games** come from `_data/games.yml` (see README "Publishing a game"). Never hard-code a game in a layout or include.
- **No `#` links.** Omit a button when its URL is missing.
- **No third-party scripts or analytics** on this site (MIN-2475). Aerodrome is never loaded here; game pages link to `<game>.airshipgames.com` instead.
- **Policies** (`privacy/`, `terms/`, `community-rules/`) are legal text Matt signed off. Don't edit them unless the ticket says so.
- Decorative images get `alt=""`; content images get real alt text.
- Branches: `codex/MIN-xxxx-short-name`. Reference the Linear ticket in the PR title.
- Don't reformat existing files; change only the lines you need.
