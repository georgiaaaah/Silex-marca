const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Run SVGR
execSync('npx @svgr/cli "imagens/com acento" --out-dir src/components/svg', { stdio: 'inherit' });

// Fix fonts
const dir = 'src/components/svg';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace the font family to ensure it uses the correctly loaded web font
  content = content.replace(/'ZenDots-Regular', 'Zen Dots'/g, "'Zen Dots', cursive");
  content = content.replace(/'ZenDots-Regular', "Zen Dots"/g, "'Zen Dots', cursive");
  content = content.replace(/fontFamily:\s*['"]&quot['"]/g, "fontFamily: \"'Zen Dots', cursive\"");
  
  // Write back
  fs.writeFileSync(filePath, content, 'utf8');
}
console.log('Conversion and fixing completed.');
