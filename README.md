# Block DX Website

This repository contains the source code for Blocknet's [Block DX website](https://blockdx.com).

> Powered by [Jekyll](https://github.com/jekyll/jekyll).

[Block DX Github](https://github.com/blocknet/block-dx/) | [Join Our Discord](https://discord.gg/2e6s7H8)
-------------|-------------|




## Getting Started
Using Windows 10:

Download & install ruby+devkit 2.7.2 x64 from here https://rubyinstaller.org/downloads/archives/.

Download & install nodejs from here https://nodejs.org/en/

1. Download cURL from the following URL: https://curl.haxx.se/windows/ (I chose 64bit because that's the system I'm using)
2. Go into the archive and browse to /bin
3. Locate libcurl_x64.dll (it may be just libcurl.dll)
4. Extract to your local drive
5. Rename it to libcurl.dll if it has the _x64 suffix
6. Cut + paste the file into the /bin directory of your Ruby installation

Open a command console:
```
bundle install
bundle update
gem uninstall eventmachine
gem install eventmachine --platform ruby
bundle exec jekyll serve
```

Using Linux or MacOS:

Open a terminal:
```
# Install dependencies: 
bundle install
# Update dependencies: 
bundle update
#Start local server: 
bundle exec jekyll serve
```
You can now see the docs at http://localhost:4400. This will reload automatically when changes are saved.




## Editing

* __Content__ - All text content should be constrained to the respective `source/_i18n/[lang].yml` file.
* __Links__: 
  * Language-specific permalinks specified in page Front Matter (Spanish example):
    * `permalink_es: /listados/`
  * Add language-specific link to YAML under `global` (Spanish example):
    * `link_listings: 'listados/'`
  * Use the YAML variable to reference links with Liquid, regardless of language
    * `[Fees]({{ baseurl | append: lang.global.link_fees }})`
  * All external links should be constrained to the `_config.yml` file.
* __Components__:
  * Sections - All reusable sections should be placed in `source/_includes/sections`.
  * Repetitive - Templates should be created for all reptitive content and placed in `source/_includes/templates`.
  * Core - All core components used on every page should be placed in `source/_includes`.
* __Tags/Variables__:
  * Naming - Should be all lowercase and use underscores, no hyphens
  * Usage - Should have a space inside the brackets;
    * Correct: `{{ nav.downloads }}`
    * Incorrect: `{{nav.downloads}}`
* __Asset Info__:
  * Manifest - Data found in `source/_data/manifest-latest.json`; used to populate Listings table.
  * Profiles - Data found in `source/_data/profiles/`; used to populate asset profiles.
* __Resources__:
  * [Jekyll Documentation](https://jekyllrb.com/docs/)
  * [Liquid Syntax Cheatsheet 1](https://shopify.github.io/liquid/basics/introduction/)
  * [Liquid Syntax Cheatsheet 2](https://gist.github.com/JJediny/a466eed62cee30ad45e2)
  * [i18n Localization Documentation](https://github.com/kurtsson/jekyll-multiple-languages-plugin/blob/master/README.md)
  * [HTMLProofer Documentation](https://github.com/gjtorikian/html-proofer)




## Translating

Follow these steps if you'd like to contribute to translating the website to another language. If you are not familiar with how to create a PR, put the translations in a Google Doc and reach out to @hanniabu on [Discord](https://discord.gg/2e6s7H8) with the link. Also feel free to reach out for clarifications on these instructions. Collaborations are encouraged to help cross check the translations! For any questions or clarifications with translating, reach out to @hanniabu.

1. Create a YAML language file in the `source/_i18n/` directory for the language you want to translate the site into. The files should be named after the language abbreviation. For example with French, it would be `source/_i18n/fr.yml`.
1. Copy the contents of `source/_i18n/en.yml` into this new file and begin translating. For those unfamiliar with YAML, each line starts with a *key*, followed by a colon delimiter, and then the associated text for that key. For example in `lang: English`, *lang* is the key and *English* is the test you'd actually want to translate. For French the translated line would become `lang: Français`. The top level keys (non-indented keys), for example `nav:`, are used for context. So with `nav:`, all the keys/text underneath it (up to the next top level key) is pertaining to the navigation menu.
1. Skip any line that specifies `# Do not translate` (a `#` signifies a comment).
1. Special case examples:
    * For links, maintain the slashes.
      * Original: `link_fees: 'fees/'`
      * Translated: `link_fees: 'frais/'
    * For Markdown, maintain the special characters.
      * Original: `Many exchanges *claim* to be __decentralized__`
      * Translated: `Beaucoup d'échanges *prétendent* être __décentralisés__'
    * For Markdown links, ONLY translate what's between the `[ ]` brackets.
      * Original: `[Fees]({{ lang.global.link_fees }})`
      * Translated: `[Frais]({{ lang.global.link_fees }})'
    * For Liquid syntax, DO NOT translate anything.
      * Original: `{{ site.exlink_docs }}`
      * Translated: `{{ site.exlink_docs }}'
1. If the translations for the entire site are complete: 
    1. Edit `_config.yml` and enable your language by adding it to the languages array (line ~28): `languages: ["en"]`. For example if you completed translation for French, it would become `languages: ["en", "fr"]`. The language abbreviation must match that used for the translation file, in this case `source/_i18n/fr.yml`.
    1. Add the language option to the nav menu dropdown in `source/_includes/nav.html` (line ~50).




## Publishing

1. Run HTMLProofer to check links: `bundle exec htmlproofer ./build`
1. Make sure `url:` in `_config.yml` is correct (not the staging URL).
1. Build the docs with the `bundle exec jekyll build` command.
1. Deploy `build/` contents to staging site for testing.
1. Deploy `build/` contents to [https://blockdx.com/](https://blockdx.com/).









