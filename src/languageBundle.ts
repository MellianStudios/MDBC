const files = import.meta.globEager('./locales/*.json', { as: 'raw' });

let bundle = {};

for (const path in files) {
    const lang = path.replace('./locales/', '').replace('.json', '');

    bundle[lang] = JSON.parse(files[path]);
}

export default bundle;
