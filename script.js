document.addEventListener('DOMContentLoaded', () => {
  const cpuSelect = document.getElementById('cpu');
  const placaMaeSelect = document.getElementById('placaMae');
  const ramSelect = document.getElementById('ram');
  const ssdSelect = document.getElementById('ssd');
  const gpuSelect = document.getElementById('gpu');
  const fonteSelect = document.getElementById('fonte');
  const btn = document.getElementById('verificar');
  const resultado = document.getElementById('resultado');
  const gabineteSelect = document.getElementById('Gabinete');
  const fanSelect = document.getElementById('Fan');
  const coolerOpcionalCheckbox = document.getElementById('coolerOpcional');
  const gabineteOpcionalCheckbox = document.getElementById('gabineteOpcional');

  // Limites de tamanho para GPU por gabinete (em mm)
  const gabineteGpuSupport = {
    'Lian Li Lancool II': { maxGpuLength: 380, tamanho: 'ATX' },
    'NZXT H510': { maxGpuLength: 330, tamanho: 'ATX' },
    'Cooler Master MasterBox MB520': { maxGpuLength: 370, tamanho: 'ATX' },
    'Corsair iCUE 4000X': { maxGpuLength: 360, tamanho: 'ATX' }
  };

  // Tamanhos aproximados de GPUs (mm)
  const gpuSize = {
    'Nvidia RTX 4090': 320,
    'Nvidia RTX 4080': 280,
    'Nvidia RTX 4070 Ti': 260,
    'Nvidia RTX 4070': 240,
    'Nvidia RTX 4060 Ti': 200,
    'Nvidia RTX 4060': 180,
    'Nvidia RTX 3090': 320,
    'Nvidia RTX 3080': 280,
    'Nvidia RTX 3070': 240,
    'Nvidia RTX 3060 Ti': 220,
    'Nvidia RTX 3060': 200,
    'Nvidia GTX 1660': 150,
    'AMD RX 7900 XTX': 320,
    'AMD RX 7900 XT': 280,
    'AMD RX 7900': 290,
    'AMD RX 7800 XT': 270,
    'AMD RX 7700 XT': 230,
    'AMD RX 7600': 200,
    'AMD RX 6900 XT': 300,
    'AMD RX 6800 XT': 280,
    'AMD RX 6700 XT': 240,
    'AMD RX 6700': 200,
    'AMD RX 6600': 180,
    'AMD RX 580': 200,
    'AMD RX 550': 150
  };

  // Função utilitária: converte "R$ X - R$ Y" em número (média). Retorna null se não encontrar.
  function parsePrecoMedia(precoStr) {
    if (!precoStr || typeof precoStr !== 'string') return null;
    const match = precoStr.replace(/\./g,'').match(/R\$\s*(\d+)\s*-\s*R\$\s*(\d+)/i);
    if (match) {
      const a = parseInt(match[1], 10);
      const b = parseInt(match[2], 10);
      return Math.round((a + b) / 2);
    }
    // tentar único valor
    const single = precoStr.replace(/\./g,'').match(/R\$\s*(\d+)/i);
    if (single) return parseInt(single[1], 10);
    return null;
  }

  // Ordena as opções de um <select> pelo preço do infosPecas (mais barato em cima).
  function sortSelectByPrice(selectEl) {
    if (!selectEl) return;
    const emptyOption = Array.from(selectEl.options).find(o => o.value === '');
    const options = Array.from(selectEl.options).filter(o => o.value !== '');

    options.sort((a, b) => {
      const pa = (window.infosPecas && infosPecas[a.value]) ? parsePrecoMedia(infosPecas[a.value].preco) : null;
      const pb = (window.infosPecas && infosPecas[b.value]) ? parsePrecoMedia(infosPecas[b.value].preco) : null;
      const na = pa === null ? Number.MAX_SAFE_INTEGER : pa;
      const nb = pb === null ? Number.MAX_SAFE_INTEGER : pb;
      return na - nb;
    });

    // recria opções: vazio primeiro (se existir), depois ordenadas
    selectEl.innerHTML = '';
    if (emptyOption) selectEl.appendChild(emptyOption);
    options.forEach(opt => selectEl.appendChild(opt));
  }

  // Ordenar todos os selects assim que a página carregar (se infosPecas estiver disponível)
  setTimeout(() => {
    try {
      sortSelectByPrice(cpuSelect);
      sortSelectByPrice(placaMaeSelect);
      sortSelectByPrice(ramSelect);
      sortSelectByPrice(gpuSelect);
      sortSelectByPrice(ssdSelect);
      sortSelectByPrice(fonteSelect);
      const fanSelect = document.getElementById('Fan'); if (fanSelect) sortSelectByPrice(fanSelect);
      const gabSelect = document.getElementById('Gabinete'); if (gabSelect) sortSelectByPrice(gabSelect);
    } catch (e) {
      // se infosPecas não existir, silenciosamente não ordena
      console.warn('Ordenação por preço: infosPecas não disponível ou erro.', e);
    }
  }, 200);

  // Definição de qual RAM cada placa suporta
  const placaMaeRamSupport = {
    // Intel Z790 (DDR5)
    'Intel Z790': { type: 'DDR5' },
    'ASUS Z790-E': { type: 'DDR5' },
    'MSI MPG Z790': { type: 'DDR5' },
    'Gigabyte Z790 Master': { type: 'DDR5' },
    // Intel B760 (DDR5/DDR4)
    'Intel B760': { type: 'both' },
    'ASUS B760-F': { type: 'both' },
    'MSI MPG B760': { type: 'both' },
    // Intel H770 (DDR5/DDR4)
    'Intel H770': { type: 'both' },
    'ASUS H770-F': { type: 'both' },
    // Intel Z690 (DDR5)
    'Aorus Z690': { type: 'DDR5' },
    'MSI Z690': { type: 'DDR5' },
    // Intel Z590 (DDR4)
    'Intel Z590': { type: 'DDR4' },
    'ASUS Z590-E': { type: 'DDR4' },
    // AMD X870 (DDR5)
    'AMD X870': { type: 'DDR5' },
    'ASUS X870-E': { type: 'DDR5' },
    'MSI X870': { type: 'DDR5' },
    'Gigabyte X870': { type: 'DDR5' },
    // AMD X670 (DDR5)
    'MSI X670': { type: 'DDR5' },
    'ASUS X670-E': { type: 'DDR5' },
    'Gigabyte X670': { type: 'DDR5' },
    // AMD B850 (DDR5)
    'MSI B850': { type: 'DDR5' },
    // AMD B650 (DDR5)
    'MSI B650': { type: 'DDR5' },
    'ASUS B650-E': { type: 'DDR5' },
    // AMD X570 (DDR4)
    'Aorus X570': { type: 'DDR4' },
    'ASUS ROG X570': { type: 'DDR4' },
    'MSI X570': { type: 'DDR4' },
    // AMD B550 (DDR4)
    'Aorus B550': { type: 'DDR4' },
    'ASUS B550-F': { type: 'DDR4' },
    'MSI B550': { type: 'DDR4' },
    // AMD X370/B450 (DDR4)
    'ASUS X370': { type: 'DDR4' },
    'MSI B450': { type: 'DDR4' }
  };

  // Definição de qual SSD cada placa suporta (NVMe M.2, SATA, ou ambos)
  const placaMaeSsdSupport = {
    // Intel Z790 (NVMe + SATA)
    'Intel Z790': { nvme: true, sata: true },
    'ASUS Z790-E': { nvme: true, sata: true },
    'MSI MPG Z790': { nvme: true, sata: true },
    'Gigabyte Z790 Master': { nvme: true, sata: true },
    // Intel B760 (NVMe + SATA)
    'Intel B760': { nvme: true, sata: true },
    'ASUS B760-F': { nvme: true, sata: true },
    'MSI MPG B760': { nvme: true, sata: true },
    // Intel H770 (NVMe + SATA)
    'Intel H770': { nvme: true, sata: true },
    'ASUS H770-F': { nvme: true, sata: true },
    // Intel Z690 (NVMe + SATA)
    'Aorus Z690': { nvme: true, sata: true },
    'MSI Z690': { nvme: true, sata: true },
    // Intel Z590 (NVMe + SATA)
    'Intel Z590': { nvme: true, sata: true },
    'ASUS Z590-E': { nvme: true, sata: true },
    // AMD X870 (NVMe + SATA)
    'AMD X870': { nvme: true, sata: true },
    'ASUS X870-E': { nvme: true, sata: true },
    'MSI X870': { nvme: true, sata: true },
    'Gigabyte X870': { nvme: true, sata: true },
    // AMD X670 (NVMe + SATA)
    'MSI X670': { nvme: true, sata: true },
    'ASUS X670-E': { nvme: true, sata: true },
    'Gigabyte X670': { nvme: true, sata: true },
    // AMD B850 (NVMe + SATA)
    'MSI B850': { nvme: true, sata: true },
    // AMD B650 (NVMe + SATA)
    'MSI B650': { nvme: true, sata: true },
    'ASUS B650-E': { nvme: true, sata: true },
    // AMD X570 (NVMe + SATA)
    'Aorus X570': { nvme: true, sata: true },
    'ASUS ROG X570': { nvme: true, sata: true },
    'MSI X570': { nvme: true, sata: true },
    // AMD B550 (NVMe + SATA)
    'Aorus B550': { nvme: true, sata: true },
    'ASUS B550-F': { nvme: true, sata: true },
    'MSI B550': { nvme: true, sata: true },
    // AMD X370/B450 (NVMe + SATA - com suporte limitado a NVMe)
    'ASUS X370': { nvme: false, sata: true },
    'MSI B450': { nvme: false, sata: true }
  };

  // Inverter compatibilidade (placa-mãe para CPUs)
  const compatibilidadePorPlaca = {};
  
  // Matriz de compatibilidade
  const compatibilidade = {
    // Intel Série 14 (LGA1700)
    'Intel Core i9 14900K': { placaMae: ['Intel Z790', 'ASUS Z790-E', 'MSI MPG Z790', 'Gigabyte Z790 Master', 'Intel B760', 'ASUS B760-F', 'MSI MPG B760', 'Intel H770', 'ASUS H770-F'], ram: ['DDR5 5200MHz Aorus', 'DDR5 6000MHz MSI'] },
    'Intel Core i9 14900KF': { placaMae: ['Intel Z790', 'ASUS Z790-E', 'MSI MPG Z790', 'Gigabyte Z790 Master', 'Intel B760', 'ASUS B760-F', 'MSI MPG B760', 'Intel H770', 'ASUS H770-F'], ram: ['DDR5 5200MHz Aorus', 'DDR5 6000MHz MSI'] },
    'Intel Core i7 14700K': { placaMae: ['Intel Z790', 'ASUS Z790-E', 'MSI MPG Z790', 'Gigabyte Z790 Master', 'Intel B760', 'ASUS B760-F', 'MSI MPG B760', 'Intel H770', 'ASUS H770-F'], ram: ['DDR5 5200MHz Aorus', 'DDR5 6000MHz MSI'] },
    'Intel Core i7 14700KF': { placaMae: ['Intel Z790', 'ASUS Z790-E', 'MSI MPG Z790', 'Gigabyte Z790 Master', 'Intel B760', 'ASUS B760-F', 'MSI MPG B760', 'Intel H770', 'ASUS H770-F'], ram: ['DDR5 5200MHz Aorus', 'DDR5 6000MHz MSI'] },
    'Intel Core i5 14600K': { placaMae: ['Intel Z790', 'ASUS Z790-E', 'MSI MPG Z790', 'Gigabyte Z790 Master', 'Intel B760', 'ASUS B760-F', 'MSI MPG B760', 'Intel H770', 'ASUS H770-F'], ram: ['DDR5 5200MHz Aorus', 'DDR5 6000MHz MSI'] },
    // Intel Série 13 (LGA1700)
    'Intel Core i9 13900K': { placaMae: ['Intel Z790', 'ASUS Z790-E', 'MSI MPG Z790', 'Gigabyte Z790 Master', 'Aorus Z690', 'MSI Z690', 'Intel B760', 'ASUS B760-F', 'MSI MPG B760'], ram: ['DDR5 5200MHz Aorus', 'DDR5 6000MHz MSI'] },
    'Intel Core i9 13900KF': { placaMae: ['Intel Z790', 'ASUS Z790-E', 'MSI MPG Z790', 'Gigabyte Z790 Master', 'Aorus Z690', 'MSI Z690', 'Intel B760', 'ASUS B760-F', 'MSI MPG B760'], ram: ['DDR5 5200MHz Aorus', 'DDR5 6000MHz MSI'] },
    'Intel Core i7 13700K': { placaMae: ['Intel Z790', 'ASUS Z790-E', 'MSI MPG Z790', 'Gigabyte Z790 Master', 'Aorus Z690', 'MSI Z690', 'Intel B760', 'ASUS B760-F', 'MSI MPG B760'], ram: ['DDR5 5200MHz Aorus', 'DDR5 6000MHz MSI'] },
    'Intel Core i7 13700KF': { placaMae: ['Intel Z790', 'ASUS Z790-E', 'MSI MPG Z790', 'Gigabyte Z790 Master', 'Aorus Z690', 'MSI Z690', 'Intel B760', 'ASUS B760-F', 'MSI MPG B760'], ram: ['DDR5 5200MHz Aorus', 'DDR5 6000MHz MSI'] },
    'Intel Core i5 13600K': { placaMae: ['Intel Z790', 'ASUS Z790-E', 'MSI MPG Z790', 'Gigabyte Z790 Master', 'Aorus Z690', 'MSI Z690', 'Intel B760', 'ASUS B760-F', 'MSI MPG B760'], ram: ['DDR5 5200MHz Aorus', 'DDR5 6000MHz MSI'] },
    'Intel Core i5 13600KF': { placaMae: ['Intel Z790', 'ASUS Z790-E', 'MSI MPG Z790', 'Gigabyte Z790 Master', 'Aorus Z690', 'MSI Z690', 'Intel B760', 'ASUS B760-F', 'MSI MPG B760'], ram: ['DDR5 5200MHz Aorus', 'DDR5 6000MHz MSI'] },
    // Intel Série 12 (LGA1700)
    'Intel Core i9 12900K': { placaMae: ['Intel Z790', 'ASUS Z790-E', 'MSI MPG Z790', 'Gigabyte Z790 Master', 'Aorus Z690', 'MSI Z690', 'Intel B760', 'ASUS B760-F', 'MSI MPG B760'], ram: ['DDR4 3200MHz Intel', 'DDR5 5200MHz Aorus', 'DDR5 6000MHz MSI'] },
    'Intel Core i9 12900KF': { placaMae: ['Intel Z790', 'ASUS Z790-E', 'MSI MPG Z790', 'Gigabyte Z790 Master', 'Aorus Z690', 'MSI Z690', 'Intel B760', 'ASUS B760-F', 'MSI MPG B760'], ram: ['DDR4 3200MHz Intel', 'DDR5 5200MHz Aorus', 'DDR5 6000MHz MSI'] },
    'Intel Core i7 12700K': { placaMae: ['Intel Z790', 'ASUS Z790-E', 'MSI MPG Z790', 'Gigabyte Z790 Master', 'Aorus Z690', 'MSI Z690', 'Intel B760', 'ASUS B760-F', 'MSI MPG B760'], ram: ['DDR4 3200MHz Intel', 'DDR5 5200MHz Aorus', 'DDR5 6000MHz MSI'] },
    'Intel Core i7 12700KF': { placaMae: ['Intel Z790', 'ASUS Z790-E', 'MSI MPG Z790', 'Gigabyte Z790 Master', 'Aorus Z690', 'MSI Z690', 'Intel B760', 'ASUS B760-F', 'MSI MPG B760'], ram: ['DDR4 3200MHz Intel', 'DDR5 5200MHz Aorus', 'DDR5 6000MHz MSI'] },
    'Intel Core i5 12600K': { placaMae: ['Intel Z790', 'ASUS Z790-E', 'MSI MPG Z790', 'Gigabyte Z790 Master', 'Aorus Z690', 'MSI Z690', 'Intel B760', 'ASUS B760-F', 'MSI MPG B760'], ram: ['DDR4 3200MHz Intel', 'DDR5 5200MHz Aorus', 'DDR5 6000MHz MSI'] },
    'Intel Core i5 12600KF': { placaMae: ['Intel Z790', 'ASUS Z790-E', 'MSI MPG Z790', 'Gigabyte Z790 Master', 'Aorus Z690', 'MSI Z690', 'Intel B760', 'ASUS B760-F', 'MSI MPG B760'], ram: ['DDR4 3200MHz Intel', 'DDR5 5200MHz Aorus', 'DDR5 6000MHz MSI'] },
    'Intel Core i3 12100': { placaMae: ['Intel Z790', 'ASUS Z790-E', 'MSI MPG Z790', 'Gigabyte Z790 Master', 'Aorus Z690', 'MSI Z690', 'Intel B760', 'ASUS B760-F', 'MSI MPG B760', 'Intel H770', 'ASUS H770-F'], ram: ['DDR4 3200MHz Intel', 'DDR5 5200MHz Aorus', 'DDR5 6000MHz MSI'] },
    // AMD Ryzen 7000 (AM5)
    'AMD Ryzen 9 7950X': { placaMae: ['AMD X870', 'ASUS X870-E', 'MSI X870', 'Gigabyte X870', 'MSI X670', 'ASUS X670-E', 'Gigabyte X670', 'MSI B850', 'MSI B650', 'ASUS B650-E'], ram: ['DDR5 5200MHz Aorus', 'DDR5 6000MHz MSI'] },
    'AMD Ryzen 9 7900X': { placaMae: ['AMD X870', 'ASUS X870-E', 'MSI X870', 'Gigabyte X870', 'MSI X670', 'ASUS X670-E', 'Gigabyte X670', 'MSI B850', 'MSI B650', 'ASUS B650-E'], ram: ['DDR5 5200MHz Aorus', 'DDR5 6000MHz MSI'] },
    'AMD Ryzen 7 7700X': { placaMae: ['AMD X870', 'ASUS X870-E', 'MSI X870', 'Gigabyte X870', 'MSI X670', 'ASUS X670-E', 'Gigabyte X670', 'MSI B850', 'MSI B650', 'ASUS B650-E'], ram: ['DDR5 5200MHz Aorus', 'DDR5 6000MHz MSI'] },
    'AMD Ryzen 5 7600X': { placaMae: ['AMD X870', 'ASUS X870-E', 'MSI X870', 'Gigabyte X870', 'MSI X670', 'ASUS X670-E', 'Gigabyte X670', 'MSI B850', 'MSI B650', 'ASUS B650-E'], ram: ['DDR5 5200MHz Aorus', 'DDR5 6000MHz MSI'] },
    'AMD Ryzen 5 7600': { placaMae: ['AMD X870', 'ASUS X870-E', 'MSI X870', 'Gigabyte X870', 'MSI X670', 'ASUS X670-E', 'Gigabyte X670', 'MSI B850', 'MSI B650', 'ASUS B650-E'], ram: ['DDR5 5200MHz Aorus', 'DDR5 6000MHz MSI'] },
    // AMD Ryzen 5000 (AM4)
    'AMD Ryzen 9 5950X': { placaMae: ['Aorus X570', 'ASUS ROG X570', 'MSI X570', 'Aorus B550', 'ASUS B550-F', 'MSI B550'], ram: ['DDR4 3600MHz AMD'] },
    'AMD Ryzen 9 5900X3D': { placaMae: ['Aorus X570', 'ASUS ROG X570', 'MSI X570', 'Aorus B550', 'ASUS B550-F', 'MSI B550'], ram: ['DDR4 3600MHz AMD'] },
    'AMD Ryzen 9 5900X': { placaMae: ['Aorus X570', 'ASUS ROG X570', 'MSI X570', 'Aorus B550', 'ASUS B550-F', 'MSI B550'], ram: ['DDR4 3600MHz AMD'] },
    'AMD Ryzen 7 5800X3D': { placaMae: ['Aorus X570', 'ASUS ROG X570', 'MSI X570', 'Aorus B550', 'ASUS B550-F', 'MSI B550'], ram: ['DDR4 3600MHz AMD'] },
    'AMD Ryzen 7 5800X': { placaMae: ['Aorus X570', 'ASUS ROG X570', 'MSI X570', 'Aorus B550', 'ASUS B550-F', 'MSI B550'], ram: ['DDR4 3600MHz AMD'] },
    'AMD Ryzen 5 5600X': { placaMae: ['Aorus X570', 'ASUS ROG X570', 'MSI X570', 'Aorus B550', 'ASUS B550-F', 'MSI B550'], ram: ['DDR4 3600MHz AMD'] },
    'AMD Ryzen 3 5300G': { placaMae: ['Aorus X570', 'ASUS ROG X570', 'MSI X570', 'Aorus B550', 'ASUS B550-F', 'MSI B550'], ram: ['DDR4 3600MHz AMD'] },
    // AMD Ryzen 3000 (AM4)
    'AMD Ryzen 9 3900X': { placaMae: ['ASUS X370', 'Aorus X570', 'ASUS ROG X570', 'MSI X570', 'Aorus B550', 'ASUS B550-F', 'MSI B550', 'MSI B450'], ram: ['DDR4 3600MHz AMD'] },
    'AMD Ryzen 7 3700X': { placaMae: ['ASUS X370', 'Aorus X570', 'ASUS ROG X570', 'MSI X570', 'Aorus B550', 'ASUS B550-F', 'MSI B550', 'MSI B450'], ram: ['DDR4 3600MHz AMD'] },
    'AMD Ryzen 5 3600': { placaMae: ['ASUS X370', 'Aorus X570', 'ASUS ROG X570', 'MSI X570', 'Aorus B550', 'ASUS B550-F', 'MSI B550', 'MSI B450'], ram: ['DDR4 3600MHz AMD'] }
  };

  // Construir matriz inversa (placa-mãe para CPUs)
  Object.keys(compatibilidade).forEach(cpu => {
    compatibilidade[cpu].placaMae.forEach(placa => {
      if (!compatibilidadePorPlaca[placa]) {
        compatibilidadePorPlaca[placa] = [];
      }
      if (!compatibilidadePorPlaca[placa].includes(cpu)) {
        compatibilidadePorPlaca[placa].push(cpu);
      }
    });
  });

  // Consumo de energia
  function estimateCpuWatts(cpuStr) {
    // Intel Série 14
    if (/14900k/i.test(cpuStr)) return 253;
    if (/14900kf/i.test(cpuStr)) return 253;
    if (/14700k/i.test(cpuStr)) return 253;
    if (/14700kf/i.test(cpuStr)) return 253;
    if (/14600k/i.test(cpuStr)) return 181;
    // Intel Série 13
    if (/13900k/i.test(cpuStr)) return 253;
    if (/13900kf/i.test(cpuStr)) return 253;
    if (/13700k/i.test(cpuStr)) return 253;
    if (/13700kf/i.test(cpuStr)) return 253;
    if (/13600k/i.test(cpuStr)) return 181;
    if (/13600kf/i.test(cpuStr)) return 181;
    // Intel Série 12
    if (/12900k/i.test(cpuStr)) return 241;
    if (/12900kf/i.test(cpuStr)) return 241;
    if (/12700k/i.test(cpuStr)) return 190;
    if (/12700kf/i.test(cpuStr)) return 190;
    if (/12600k/i.test(cpuStr)) return 125;
    if (/12600kf/i.test(cpuStr)) return 125;
    if (/12100/i.test(cpuStr)) return 65;
    // AMD Ryzen 7000
    if (/7950x/i.test(cpuStr)) return 162;
    if (/7900x(?![a-z])/i.test(cpuStr)) return 162;
    if (/7700x/i.test(cpuStr)) return 162;
    if (/7600x/i.test(cpuStr)) return 105;
    if (/7600(?![a-z])/i.test(cpuStr)) return 65;
    // AMD Ryzen 5000
    if (/5950x/i.test(cpuStr)) return 142;
    if (/5900x3d/i.test(cpuStr)) return 142;
    if (/5900x(?![a-z])/i.test(cpuStr)) return 142;
    if (/5800x3d/i.test(cpuStr)) return 142;
    if (/5800x(?![a-z])/i.test(cpuStr)) return 105;
    if (/5600x/i.test(cpuStr)) return 95;
    if (/5300g/i.test(cpuStr)) return 65;
    // AMD Ryzen 3000
    if (/3900x/i.test(cpuStr)) return 105;
    if (/3700x/i.test(cpuStr)) return 95;
    if (/3600(?![a-z])/i.test(cpuStr)) return 95;
    return 95;
  }
  
  function estimateGpuWatts(gpuStr) {
    // Série 40
    if (/4090/i.test(gpuStr)) return 450;
    if (/4080/i.test(gpuStr)) return 320;
    if (/4070 ti/i.test(gpuStr)) return 285;
    if (/4070/i.test(gpuStr)) return 200;
    if (/4060 ti/i.test(gpuStr)) return 165;
    if (/4060/i.test(gpuStr)) return 115;
    // Série 30
    if (/3090/i.test(gpuStr)) return 420;
    if (/3080/i.test(gpuStr)) return 320;
    if (/3070/i.test(gpuStr)) return 220;
    if (/3060 ti/i.test(gpuStr)) return 210;
    if (/3060/i.test(gpuStr)) return 170;
    if (/1660/i.test(gpuStr)) return 125;
    // AMD Série 7000
    if (/7900 xtx/i.test(gpuStr)) return 420;
    if (/7900 xt/i.test(gpuStr)) return 380;
    if (/7900(?!\s)/i.test(gpuStr)) return 300;
    if (/7800 xt/i.test(gpuStr)) return 310;
    if (/7700 xt/i.test(gpuStr)) return 250;
    if (/7600/i.test(gpuStr)) return 170;
    // AMD Série 6000
    if (/6900 xt/i.test(gpuStr)) return 405;
    if (/6800 xt/i.test(gpuStr)) return 350;
    if (/6700 xt/i.test(gpuStr)) return 250;
    if (/6700(?!\s)/i.test(gpuStr)) return 170;
    if (/6600/i.test(gpuStr)) return 150;
    // AMD Série 500 (Antigas)
    if (/580/i.test(gpuStr)) return 185;
    if (/550/i.test(gpuStr)) return 150;
    return 120;
  }

  // Atualiza placas-mãe e RAM compatíveis quando CPU muda
  cpuSelect.addEventListener('change', atualizarFiltros);

  // Atualiza CPUs e RAM compatíveis quando Placa-mãe muda
  placaMaeSelect.addEventListener('change', atualizarFiltros);

  // Atualiza CPUs e Placas-mãe quando RAM muda (validação DDR5/DDR4)
  ramSelect.addEventListener('change', atualizarFiltros);

  // Atualiza compatibilidade quando SSD muda
  ssdSelect.addEventListener('change', atualizarFiltros);
  // Atualiza compatibilidade quando Gabinete muda
  if (gabineteSelect) gabineteSelect.addEventListener('change', atualizarFiltros);
  // Função para atualizar estado dos selects (habilitado/desabilitado)
  function atualizarEstadoSelects() {
    // Cooler: habilitado se checkbox ESTÁ marcado; desabilitado se desmarcado
    if (fanSelect) {
      const coolerHabilitado = coolerOpcionalCheckbox && coolerOpcionalCheckbox.checked;
      fanSelect.disabled = !coolerHabilitado;
      fanSelect.style.opacity = coolerHabilitado ? '1' : '0.5';
      fanSelect.style.cursor = coolerHabilitado ? 'pointer' : 'not-allowed';
      fanSelect.style.backgroundColor = coolerHabilitado ? '#fff' : '#e0e0e0';
    }

    // Gabinete: habilitado se checkbox ESTÁ marcado; desabilitado se desmarcado
    if (gabineteSelect) {
      const gabineteHabilitado = gabineteOpcionalCheckbox && gabineteOpcionalCheckbox.checked;
      gabineteSelect.disabled = !gabineteHabilitado;
      gabineteSelect.style.opacity = gabineteHabilitado ? '1' : '0.5';
      gabineteSelect.style.cursor = gabineteHabilitado ? 'pointer' : 'not-allowed';
      gabineteSelect.style.backgroundColor = gabineteHabilitado ? '#fff' : '#e0e0e0';
    }
  }

  // Chamar ao carregar e quando os checkboxes mudarem
  atualizarEstadoSelects();
  if (coolerOpcionalCheckbox) coolerOpcionalCheckbox.addEventListener('change', () => {
    atualizarEstadoSelects();
    atualizarFiltros();
  });
  if (gabineteOpcionalCheckbox) gabineteOpcionalCheckbox.addEventListener('change', () => {
    atualizarEstadoSelects();
    atualizarFiltros();
  });

  function atualizarFiltros() {
    const cpuSelecionada = cpuSelect.value;
    const placaSelecionada = placaMaeSelect.value;
    const ramSelecionada = ramSelect.value;

    // ===== FILTRO DE CPUs quando Placa-mãe é selecionada =====
    const opcoesCPU = cpuSelect.querySelectorAll('option');
    opcoesCPU.forEach(option => {
      if (option.value === '') return;
      
      let isCompativel = true;
      let razoesIncompatibilidade = [];

      // Verificar compatibilidade com placa-mãe selecionada
      if (placaSelecionada) {
        const cpusCompativeis = compatibilidadePorPlaca[placaSelecionada] || [];
        if (!cpusCompativeis.includes(option.value)) {
          isCompativel = false;
          razoesIncompatibilidade.push('soquete');
        }
      }

      // Verificar compatibilidade com RAM selecionada
      if (ramSelecionada) {
        const ramType = /DDR5/i.test(ramSelecionada) ? 'DDR5' : 'DDR4';
        const cpuRAMCompat = compatibilidade[option.value]?.ram || [];
        if (!cpuRAMCompat.includes(ramSelecionada)) {
          isCompativel = false;
          razoesIncompatibilidade.push('RAM');
        }
      }

      if (isCompativel) {
        option.textContent = option.value;
        option.style.color = '#000';
        option.disabled = false;
      } else if (placaSelecionada || ramSelecionada) {
        let motivo = razoesIncompatibilidade.length > 0 ? ` (${razoesIncompatibilidade.join('/')} incomp.)` : ' (Incompatível)';
        option.textContent = option.value + motivo;
        option.style.color = '#d32f2f';
        option.disabled = true;
      } else {
        option.textContent = option.value;
        option.style.color = '#000';
        option.disabled = false;
      }
    });

    // ===== FILTRO DE PLACAS-MÃE quando CPU é selecionada =====
    const opcoesPlaca = placaMaeSelect.querySelectorAll('option');
    opcoesPlaca.forEach(option => {
      if (option.value === '') return;
      
      let isCompativel = true;
      let razoesIncompatibilidade = [];

      // Verificar compatibilidade com CPU selecionada
      if (cpuSelecionada) {
        const placasCompativeis = compatibilidade[cpuSelecionada]?.placaMae || [];
        if (!placasCompativeis.includes(option.value)) {
          isCompativel = false;
          razoesIncompatibilidade.push('CPU');
        }
      }

      // Verificar compatibilidade com RAM selecionada (DDR5 vs DDR4)
      if (ramSelecionada) {
        const ramType = /DDR5/i.test(ramSelecionada) ? 'DDR5' : 'DDR4';
        const placaRAMSupport = placaMaeRamSupport[option.value]?.type || 'both';
        
        if (ramType === 'DDR5' && (placaRAMSupport === 'DDR4')) {
          isCompativel = false;
          razoesIncompatibilidade.push('DDR5');
        } else if (ramType === 'DDR4' && (placaRAMSupport === 'DDR5')) {
          isCompativel = false;
          razoesIncompatibilidade.push('DDR4');
        }
      }

      if (isCompativel) {
        option.textContent = option.value;
        option.style.color = '#000';
        option.disabled = false;
      } else if (cpuSelecionada || ramSelecionada) {
        let motivo = razoesIncompatibilidade.length > 0 ? ` (${razoesIncompatibilidade.join('/')} incomp.)` : ' (Incompatível)';
        option.textContent = option.value + motivo;
        option.style.color = '#d32f2f';
        option.disabled = true;
      } else {
        option.textContent = option.value;
        option.style.color = '#000';
        option.disabled = false;
      }
    });

    // ===== FILTRO DE RAM =====
    const opcoesRAM = ramSelect.querySelectorAll('option');
    opcoesRAM.forEach(option => {
      if (option.value === '') return;
      
      let isCompativel = true;
      let razoesIncompatibilidade = [];
      const ramType = /DDR5/i.test(option.value) ? 'DDR5' : 'DDR4';

      // Verificar compatibilidade com CPU selecionada
      if (cpuSelecionada) {
        const ramCompat = compatibilidade[cpuSelecionada]?.ram || [];
        if (!ramCompat.includes(option.value)) {
          isCompativel = false;
          razoesIncompatibilidade.push('CPU');
        }
      }

      // Verificar compatibilidade com Placa-mãe selecionada
      if (placaSelecionada) {
        const placaRAMSupport = placaMaeRamSupport[placaSelecionada]?.type || 'both';
        
        if (ramType === 'DDR5' && (placaRAMSupport === 'DDR4')) {
          isCompativel = false;
          razoesIncompatibilidade.push('Placa DDR4');
        } else if (ramType === 'DDR4' && (placaRAMSupport === 'DDR5')) {
          isCompativel = false;
          razoesIncompatibilidade.push('Placa DDR5');
        }
      }

      if (isCompativel) {
        option.textContent = option.value;
        option.style.color = '#000';
        option.disabled = false;
      } else if (cpuSelecionada || placaSelecionada) {
        let motivo = razoesIncompatibilidade.length > 0 ? ` (${razoesIncompatibilidade.join('/')} incomp.)` : ' (Incompatível)';
        option.textContent = option.value + motivo;
        option.style.color = '#d32f2f';
        option.disabled = true;
      } else {
        option.textContent = option.value;
        option.style.color = '#000';
        option.disabled = false;
      }
    });

    // Reseta seleções inválidas
    if (cpuSelecionada && placaSelecionada && 
        !compatibilidade[cpuSelecionada]?.placaMae.includes(placaSelecionada)) {
      placaMaeSelect.value = '';
    }

    if (cpuSelecionada && ramSelecionada && 
        !compatibilidade[cpuSelecionada]?.ram.includes(ramSelecionada)) {
      ramSelect.value = '';
    }

    if (placaSelecionada && ramSelecionada) {
      const ramType = /DDR5/i.test(ramSelecionada) ? 'DDR5' : 'DDR4';
      const placaRAMSupport = placaMaeRamSupport[placaSelecionada]?.type || 'both';
      
      if ((ramType === 'DDR5' && placaRAMSupport === 'DDR4') || 
          (ramType === 'DDR4' && placaRAMSupport === 'DDR5')) {
        ramSelect.value = '';
      }
    }

    // ===== FILTRO DE SSD =====
    const opcoesSSD = ssdSelect.querySelectorAll('option');
    const ssdSelecionado = ssdSelect.value;

    opcoesSSD.forEach(option => {
      if (option.value === '') return;
      
      let isCompativel = true;
      let razoesIncompatibilidade = [];
      
      const isSataOption = /sata/i.test(option.value);
      const isNvmeOption = /nvme/i.test(option.value);

      // Verificar compatibilidade com Placa-mãe selecionada
      if (placaSelecionada) {
        const placaSsdSupport = placaMaeSsdSupport[placaSelecionada];
        
        if (isNvmeOption && !placaSsdSupport?.nvme) {
          isCompativel = false;
          razoesIncompatibilidade.push('Placa sem M.2');
        } else if (isSataOption && !placaSsdSupport?.sata) {
          isCompativel = false;
          razoesIncompatibilidade.push('Sem SATA');
        }
      }

      if (isCompativel) {
        option.textContent = option.value;
        option.style.color = '#000';
        option.disabled = false;
      } else if (placaSelecionada) {
        let motivo = razoesIncompatibilidade.length > 0 ? ` (${razoesIncompatibilidade.join('/')} incomp.)` : ' (Incompatível)';
        option.textContent = option.value + motivo;
        option.style.color = '#d32f2f';
        option.disabled = true;
      } else {
        option.textContent = option.value;
        option.style.color = '#000';
        option.disabled = false;
      }
    });

    // Reseta seleção de SSD se inválida
    if (placaSelecionada && ssdSelecionado) {
      const isSata = /sata/i.test(ssdSelecionado);
      const isNvme = /nvme/i.test(ssdSelecionado);
      const placaSsdSupport = placaMaeSsdSupport[placaSelecionada];
      
      if ((isNvme && !placaSsdSupport?.nvme) || (isSata && !placaSsdSupport?.sata)) {
        ssdSelect.value = '';
      }
    }
    
    // ===== FILTRO DE GPU por Gabinete =====
    const opcoesGPU = gpuSelect.querySelectorAll('option');
    const gabineteSelecionado = gabineteSelect ? gabineteSelect.value : '';

    opcoesGPU.forEach(option => {
      if (option.value === '') return;

      let isCompativel = true;
      let razoesIncompatibilidade = [];

      // Verificar compatibilidade com Gabinete selecionado (tamanho GPU)
      if (gabineteSelecionado) {
        const gabineteInfo = gabineteGpuSupport[gabineteSelecionado];
        const gpuLength = gpuSize[option.value] || 250;

        if (gabineteInfo && gpuLength > gabineteInfo.maxGpuLength) {
          isCompativel = false;
          razoesIncompatibilidade.push('GPU longa demais');
        }
      }

      if (isCompativel) {
        option.textContent = option.value;
        option.style.color = '#000';
        option.disabled = false;
      } else if (gabineteSelecionado) {
        let motivo = razoesIncompatibilidade.length > 0 ? ` (${razoesIncompatibilidade.join('/')} incomp.)` : ' (Incompatível)';
        option.textContent = option.value + motivo;
        option.style.color = '#d32f2f';
        option.disabled = true;
      } else {
        option.textContent = option.value;
        option.style.color = '#000';
        option.disabled = false;
      }
    });

    // Reseta seleção de GPU se inválida para o gabinete
    if (gabineteSelecionado && gpuSelect.value) {
      const gpuLength = gpuSize[gpuSelect.value] || 250;
      const gabineteInfo = gabineteGpuSupport[gabineteSelecionado];
      if (gabineteInfo && gpuLength > gabineteInfo.maxGpuLength) {
        gpuSelect.value = '';
      }
    }
  }

  // ===== EVENTOS ANTIGOS REMOVIDOS, substituídos por atualizarFiltros acima =====

  // Botão verificar compatibilidade completa
  btn.addEventListener('click', () => {
    // limpar estilos anteriores
    [cpuSelect, placaMaeSelect, ramSelect, gpuSelect, fonteSelect, fanSelect, gabineteSelect].forEach(el => {
      if (el) el.style.border = '';
    });

    const cpu = cpuSelect.value;
    const placa = placaMaeSelect.value;
    const ram = ramSelect.value;
    const gpu = gpuSelect.value;
    const fonte = fonteSelect.value;
    const fan = fanSelect ? fanSelect.value : '';
    const gabinete = gabineteSelect ? gabineteSelect.value : '';

    const problemas = [];

    // Função para criar cards de resultado (reutilizável)
    function createCard(type, title, detailsHtml) {
      const card = document.createElement('div');
      card.className = `resultado-card ${type}`;

      const icon = document.createElement('div');
      icon.className = 'icon';
      icon.innerHTML = type === 'success' ? '&#10003;' : '&#10006;';

      const content = document.createElement('div');
      content.className = 'content';

      const t = document.createElement('div');
      t.className = 'title';
      t.textContent = title;

      const d = document.createElement('div');
      d.className = 'details';
      d.innerHTML = detailsHtml;

      content.appendChild(t);
      content.appendChild(d);
      card.appendChild(icon);
      card.appendChild(content);

      resultado.appendChild(card);
      requestAnimationFrame(() => card.classList.add('show'));
    }

    // Validação: partes obrigatórias (Cooler/Gabinete só se ESTIVEREM marcados como "Opcional" ativado = obrigatório)
    const requiredParts = [
      { val: cpu, label: 'CPU', el: cpuSelect },
      { val: placa, label: 'Placa-mãe', el: placaMaeSelect },
      { val: ram, label: 'Memória RAM', el: ramSelect },
      { val: gpu, label: 'Placa de vídeo', el: gpuSelect },
      { val: fonte, label: 'Fonte de alimentação', el: fonteSelect }
    ];

    // incluir cooler se o checkbox ESTIVER marcado (ativado = obrigatório)
    if (coolerOpcionalCheckbox && coolerOpcionalCheckbox.checked) {
      requiredParts.push({ val: fan, label: 'Cooler', el: fanSelect });
    }

    // incluir gabinete se o checkbox ESTIVER marcado (ativado = obrigatório)
    if (gabineteOpcionalCheckbox && gabineteOpcionalCheckbox.checked) {
      requiredParts.push({ val: gabinete, label: 'Gabinete', el: gabineteSelect });
    }

    const missing = requiredParts.filter(p => !p.val).map(p => p.label);
    if (missing.length > 0) {
      resultado.innerHTML = '';
      const listHtml = `<ul class="problems">${missing.map(m => `<li>Selecione: ${m}</li>`).join('')}</ul>`;
      createCard('error', 'Peças faltando', listHtml);

      // destacar os selects faltantes e focar o primeiro
      const firstMissing = requiredParts.find(p => !p.val);
      requiredParts.forEach(p => {
        if (!p.val && p.el) {
          p.el.style.border = '2px solid #d32f2f';
        }
      });
      if (firstMissing && firstMissing.el) firstMissing.el.focus();
      return;
    }

    // Detectar marca da CPU
    const cpuBrand =
      (/AMD|Ryzen/i.test(cpu)) ? 'AMD'
      : (/Intel/i.test(cpu)) ? 'Intel'
      : 'Desconhecido';

    // Detectar marca da Placa-Mãe
    let placaBrand = 'Desconhecido';
    let placaFabricante = 'Desconhecido';

    if (/msi/i.test(placa)) {
      placaFabricante = 'MSI';
    } else if (/aorus/i.test(placa)) {
      placaFabricante = 'Aorus';
    } else if (/gigabyte/i.test(placa)) {
      placaFabricante = 'Gigabyte';
    } else if (/asus/i.test(placa)) {
      placaFabricante = 'ASUS';
    }

    const isAMD = /(b550|x570|b650|x670|am4|am5)/i.test(placa);
    const isIntel = /(z790|z690|b660|z590|h610|lga1200|lga1700)/i.test(placa);

    if (isAMD && placaFabricante === 'MSI') {
      placaBrand = 'MSI AMD';
    } else if (isIntel && placaFabricante === 'MSI') {
      placaBrand = 'MSI Intel';
    } else if (isAMD) {
      placaBrand = 'AMD';
    } else if (isIntel) {
      placaBrand = 'Intel';
    } else if (placaFabricante !== 'Desconhecido') {
      placaBrand = placaFabricante;
    }

    // Compatibilidade CPU x Placa-Mãe
    if (cpuBrand !== 'Desconhecido' && placaBrand !== 'Desconhecido') {
      if (
        (cpuBrand === 'Intel' && placaBrand.includes('AMD')) ||
        (cpuBrand === 'AMD' && placaBrand.includes('Intel'))
      ) {
        problemas.push(`CPU (${cpuBrand}) incompatível com a placa-mãe (${placaBrand}).`);
      }
    }

    // Verificar RAM
    const ramType =
      /DDR5/i.test(ram) ? 'DDR5'
      : /DDR4/i.test(ram) ? 'DDR4'
      : 'Desconhecido';
    const placasDDR5 = /(b650|x670|z790|z690|aorus z690|aorus b650|msi b650|msi x670|msi z790|msi z690)/i;
    const placaIsDDR5 = placasDDR5.test(placa);

    if (ramType === 'DDR5' && !placaIsDDR5) {
      problemas.push('Memória DDR5 selecionada, mas a placa-mãe não parece suportar.');
    }

    // Estimativa de consumo
    const cpuWatts = estimateCpuWatts(cpu);
    const gpuWatts = estimateGpuWatts(gpu);
    const otherWatts = 120;
    const requiredWatts = Math.ceil((cpuWatts + gpuWatts + otherWatts) * 1.15);

    const fonteNumber = parseInt((fonte || '').replace(/[^0-9]/g, ''), 10) || 0;
    if (fonteNumber < requiredWatts) {
      problemas.push(`Fonte (${fonteNumber}W) insuficiente. Necessário: ${requiredWatts}W.`);
    }

    // RESULTADO FINAL
    resultado.innerHTML = '';
    if (problemas.length === 0) {
      let finalHtml = 'Montagem perfeita! 🚀';
      createCard('success', 'Tudo compatível', finalHtml);
    } else {
      let listHtml = `<ul class="problems">${problemas.map(p => `<li>${p}</li>`).join('')}</ul>`;
      createCard('error', 'Incompatibilidades encontradas', listHtml);
    }
  });
});