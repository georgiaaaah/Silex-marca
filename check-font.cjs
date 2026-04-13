const opentype = require('opentype.js');
opentype.load('ZenDots.ttf', function(err, font) {
    if (err) return;
    const gsub = font.tables.gsub;
    gsub.features.forEach(f => {
        if (f.tag === 'ss01' || f.tag === 'salt') {
            console.log('Feature:', f.tag);
            // feature -> lookupListIndices
            f.feature.lookupListIndices.forEach(idx => {
                const lookup = gsub.lookups[idx];
                lookup.subtables.forEach(sub => {
                    if (sub.coverage && sub.coverage.glyphs) {
                        sub.coverage.glyphs.forEach((glId, i) => {
                            const name = font.glyphs.get(glId).name || String.fromCharCode(font.glyphs.get(glId).unicode);
                            console.log('  Substitutes glyph:', name);
                        });
                    }
                });
            });
        }
    });
});
