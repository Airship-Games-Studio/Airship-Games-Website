# airshipgames.com

The Airship Games website: a Jekyll site served by GitHub Pages from `main`. Every merge to `main` goes live.

## Run locally

Requirements: Ruby 3.1+ and Bundler.

```bash
bundle install
bundle exec jekyll serve
```

Open `http://localhost:4000`. To check a build the way CI does:

```bash
bundle exec jekyll build
ruby scripts/check_site.rb
```

## Publishing a game

1. Add an entry to `_data/games.yml`. The home page, header, footer and site map all read this file, sorted by `order`. Use `status: coming-soon` until the game is playable at its `play_url`.
2. Add the game page at `games/<slug>/index.html` with `layout: game` and `game: <slug>`, and set `page: true` in its data entry.
3. Add a 1200×630 screenshot at `assets/images/games/<slug>.png`. It's the card image, the page hero and the social preview.
4. If the game has Feedback, register it in the Aerodrome game registry too. Set `help_build_url` (`https://<game>.airshipgames.com/?aerodrome=open`) only once that game's Feedback is live in production.

## Policies

The Privacy Policy, Terms of Service and Community Rules are live, signed-off documents. Change them only in a reviewed PR, update `last_updated` in the front matter, and add a line to the page's revision history.
