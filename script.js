document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('verificar');
  const resultado = document.getElementById('resultado');

  btn.addEventListener('click', () => {
    const cpu = document.getElementById('cpu').value;
    const placa = document.getElementById('placaMae').value;
    const ram = document.getElementById('ram').value;
    const gpu = document.getElementById('gpu').value;
    const fonte = document.getElementById('fonte').value;
    const fan = document.getElementById('fan')?.value || "";
    const gabinete = document.getElementById('gabinete')?.value || "";

    const problemas = [];

    // Detectar marca da CPU - prioriza AMD/Ryzen
    const cpuBrand =
      (/AMD|Ryzen/i.test(cpu)) ? 'AMD'
      : (/Intel/i.test(cpu)) ? 'Intel'
      : 'Desconhecido';

    // Detectar marca da Placa-Mãe corretamente
    let placaBrand = 'Desconhecido';
    let placaFabricante = 'Desconhecido';

    const placaLower = placa.toLowerCase();

    // Verifica MSI como fabricante
    if (/msi/i.test(placa)) {
      placaFabricante = 'MSI';
    } else if (/aorus/i.test(placa)) {
      placaFabricante = 'Aorus';
    } else if (/gigabyte/i.test(placa)) {
      placaFabricante = 'Gigabyte';
    } else if (/asus/i.test(placa)) {
      placaFabricante = 'ASUS';
    }

    // Chipset AMD/Intel por texto
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
    const placasDDR5 = /(b650|x670|z790|z690|aorus x670|aorus b650|msi b650|msi x670|msi z790|msi z690)/i;
    const placaIsDDR5 = placasDDR5.test(placa);

    if (ramType === 'DDR5' && !placaIsDDR5) {
      problemas.push('Memória DDR5 selecionada, mas a placa-mãe não parece suportar.');
    }

    // Estimativa de consumo
    function estimateCpuWatts(cpuStr) {
      if (/i9|ryzen 9/i.test(cpuStr)) return 125;
      if (/i7|ryzen 7/i.test(cpuStr)) return 105;
      if (/i5|ryzen 5/i.test(cpuStr)) return 95;
      if (/i3|ryzen 3/i.test(cpuStr)) return 65;
      return 65;
    }
    function estimateGpuWatts(gpuStr) {
      if (/4070/i.test(gpuStr)) return 200;
      if (/3060/i.test(gpuStr)) return 170;
      if (/7900/i.test(gpuStr)) return 300;
      if (/6700/i.test(gpuStr)) return 170;
      return 120;
    }

    const cpuWatts = estimateCpuWatts(cpu);
    const gpuWatts = estimateGpuWatts(gpu);
    const otherWatts = 120;
    const requiredWatts = Math.ceil((cpuWatts + gpuWatts + otherWatts) * 1.15);

    const fonteNumber = parseInt((fonte || '').replace(/[^0-9]/g, ''), 10) || 0;
    if (fonteNumber < requiredWatts) {
      problemas.push(`Fonte (${fonteNumber}W) insuficiente. Necessário: ${requiredWatts}W.`);
    }

    // Compatibilidade FAN
    if (fan) {
      const fanSize =
        /120/i.test(fan) ? 120
        : /140/i.test(fan) ? 140
        : 0;

      if (/Mini-ITX/i.test(gabinete) && fanSize === 140) {
        problemas.push("Gabinete Mini-ITX não suporta fans 140mm.");
      }
      if (/Micro-ATX/i.test(gabinete) && fanSize === 140) {
        problemas.push("Alguns Micro-ATX não suportam fans 140mm na frente.");
      }

      const maxFans =
        /ATX/i.test(gabinete) ? 6
        : /Micro-ATX/i.test(gabinete) ? 4
        : /Mini-ITX/i.test(gabinete) ? 2
        : 0;

      if (/x3/i.test(fan) && maxFans < 3) {
        problemas.push(`Você selecionou FAN x3, mas o gabinete só suporta ${maxFans} fans.`);
      }
      if (/x2/i.test(fan) && maxFans < 2) {
        problemas.push(`Você selecionou FAN x2, mas o gabinete só suporta ${maxFans} fans.`);
      }
    }

    // Compatibilidade GPU x Gabinete
    let gpuLength = 0;
    if (/4070/i.test(gpu)) gpuLength = 300;
    if (/3060/i.test(gpu)) gpuLength = 242;
    if (/7900/i.test(gpu)) gpuLength = 320;
    if (/6700/i.test(gpu)) gpuLength = 280;

    const gabineteMaxLength =
      /Mini-ITX/i.test(gabinete) ? 200
      : /Micro-ATX/i.test(gabinete) ? 300
      : /ATX/i.test(gabinete) ? 350
      : 0;

    if (gpuLength && gabineteMaxLength && gpuLength > gabineteMaxLength) {
      problemas.push(`A GPU escolhida (${gpuLength} mm) não cabe no gabinete selecionado (${gabineteMaxLength} mm).`);
    }

    let infoGabinete = '';
    if (gabineteMaxLength > 0) {
      infoGabinete = `Tamanho máximo do gabinete (${gabinete}): ${gabineteMaxLength} mm.`;
    }

    // RESULTADO FINAL
    resultado.innerHTML = '';

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

    if (problemas.length === 0) {
      let finalHtml = 'Montagem perfeita! 🚀';
      if (infoGabinete) {
        finalHtml += `<br><small>${infoGabinete}</small>`;
      }
      createCard('success', 'Tudo compatível', finalHtml);
    } else {
      let listHtml = `<ul class="problems">${problemas.map(p => `<li>${p}</li>`).join('')}</ul>`;
      if (infoGabinete) {
        listHtml += `<div style="margin-top:10px; font-size:0.92rem; color:#3b2a4a;"><strong>${infoGabinete}</strong></div>`;
      }
      createCard('error', 'Incompatibilidades encontradas', listHtml);
    }
  });
});