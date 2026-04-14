const fs = require('fs');

const files = [
  'LogoLightComSubtitulo.jsx', 
  'LogoDark.jsx', 
  'LogoLight.jsx', 
  'LogoDarkComSubiitulo.jsx'
];

files.forEach(f => {
  const p = 'src/components/svg/' + f;
  let cont = fs.readFileSync(p, 'latin1');
  
  // Substituir o texto bugado por SÍLEX UTF8
  cont = cont.replace(/\{"S.*?LEX"\}/g, '{"SÍLEX"}');
  
  // Forçar escrever em UTF-8
  fs.writeFileSync(p, cont, 'utf8');
});
