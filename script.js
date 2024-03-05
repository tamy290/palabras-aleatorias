const especiesAnimales = [
    'viuda negra',
    'Cobra Real',
     'Mamba Verde', 
     'Pez Globo',
     'Araña reclusa parda', 
     'Mamba negra',
  
]
  
  // Enumerar cada tercer elemento
  for (let i = 2; i < especiesAnimales.length; i += 3) {
    console.log(`Elemento ${i + 1}: ${especiesAnimales[i]}`);
  }
