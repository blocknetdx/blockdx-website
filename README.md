# Block DX Website

This repository contains the source code for Blocknet's [Block DX website](https://blockdx.com).

> Powered by [Jekyll](https://github.com/jekyll/jekyll).

[Block DX Github](https://github.com/blocknet/block-dx/) | [Join Our Discord](https://discord.gg/2e6s7H8)
-------------|-------------|




## Getting Started

Using Linux or MacOS:

1. Install dependencies: `bundle install`
1. Update dependencies: `bundle update`
1. Start local server: `bundle exec jekyll serve`

You can now see the docs at http://localhost:4400. This will reload automatically when changes are saved.




## Editing

* __Content__ - All text content should be constrained to the respective `source/_i18n/[lang].yml` file.
* __Links__: 
  * Language-specific permalinks specified in page Front Matter:
    * `permalink_es: /listados/`
  * Add language-specific link to YAML under `global`:
    * `link_listings: 'listados/'`
  * Use the YAML variable to reference links, regardless of language
  * All external links should be constrained to the `_config.yml` file.
  * YAML Variables - To use variables within YAML content: 
    * `{% include tools/link-converter.html content=listing_application.benefits %}`
* __Components__:
  * Sections - All reusable sections should be placed in `source/_includes/sections`.
  * Repetitive - Templates should be created for all reptitive content and placed in `source/_includes/templates`.
  * Core - All core components used on every page should be placed in `source/_includes`.
* __Tags/Variables__:
  * Naming - Should be all lowercase and use underscores, no hyphens
  * Usage - Should have a space inside the brackets;
    * Correct: `{{ nav.downloads }}`
    * Incorrect: `{{nav.downloads}}`
  * YAML Variables - To use variables within YAML content: 
    * `{% include tools/link-converter.html content=listing_application.benefits %}`
* __Asset Info__:
  * Manifest - Data found in `source/_data/manifest-latest.json`; used to populate Listings table.
  * Profiles - Data found in `source/_data/profiles/`; used to populate asset profiles.
* __Resources__:
  * [Jekyll Documentation](https://jekyllrb.com/docs/)
  * [Liquid Syntax Cheatsheet 1](https://shopify.github.io/liquid/basics/introduction/)
  * [Liquid Syntax Cheatsheet 2](https://gist.github.com/JJediny/a466eed62cee30ad45e2)
  * [i18n Localization Documentation](https://github.com/kurtsson/jekyll-multiple-languages-plugin/blob/master/README.md)
  * [HTMLProofer Documentation](https://github.com/gjtorikian/html-proofer)




## Publishing

1. Run HTMLProofer to check links: `bundle exec htmlproofer ./build`
1. Make sure `url:` in `_config.yml` is correct (not the staging URL).
1. Build the docs with the `bundle exec jekyll build` command.
1. Deploy `build/` contents to staging site for testing.
1. Deploy `build/` contents to [https://blockdx.com/](https://blockdx.com/).









