# 概要

postcss の超簡単なプラグインの例

# Getting Started

* ローカルインストールで参照

```sh
cd /path/to/my/project/
npm install /path/to/my-postcss-plugin-1
```

* `postcss.config.mjs`

```postcss.config.mjs
export default () => ({
    plugins: {
        "my-postcss-plugin-1": {},
    }
});
```

* 実行

```sh
npx postcss input.css -o ouput.css
```
