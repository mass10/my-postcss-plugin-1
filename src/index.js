module.exports = () => {
    return {
        postcssPlugin: 'my-postcss-plugin-1',

        Declaration(decl) {
            // console.debug(`[my-postcss-plugin-1] `, decl);
            // console.debug(`[my-postcss-plugin-1] `, decl.prop, decl.value);

            if (0 <= decl.prop.indexOf('--tw-')) {
                decl.prop = decl.prop.replace('--tw-', '--X-PROJECT-tw-');
            }

            if (0 <= decl.value.indexOf("--tw-")) {
                decl.value = decl.value.replace("--tw-", "--X-PROJECT-tw-");
            }

            // color プロパティを red に変更
            // if (decl.prop === 'color') {
            //     decl.value = 'red';
            // }

            if (decl.parent) {
                if (decl.parent.type === "atrule" && decl.parent.name === "property") {
                    if (0 <= decl.parent.params.indexOf("--tw-")) {
                        // console.debug(`[my-postcss-plugin-1] atrule:`, decl.parent);
                        decl.parent.params = decl.parent.params.replace("--tw-", "--X-PROJECT-tw-");
                    }
                }
            }            
        }
    };
};

// プラグインが PostCSS 用であることを宣言する
module.exports.postcss = true;
