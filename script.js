document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('verificar');
    const resultado = document.getElementById('resultado');
  
    btn.addEventListener('click', () => {
      const cpu = document.getElementById('cpu').value;
      const placa = document.getElementById('placaMae').value;
      const ram = document.getElementById('ram').value;
      const gpu = document.getElementById('gpu').value;
      const fonte = document.getElementById('fonte').value;
  
      const problemas = [];
  
      // Detectar marca do CPU
      const cpuBrand = (cpu.match(/Intel/i) ? 'Intel' : (cpu.match(/AMD|Ryzen/i) ? 'AMD' : 'Desconhecido'));
  
      // Detectar "marca"/família da placa-mãe (Intel vs AMD) por palavras-chave
      let placaBrand = 'Desconhecido';
      if (/Z790|Z690|B660|H610|Z590/i.test(placa) || /Intel/i.test(placa)) placaBrand = 'Intel';
      if (/B550|X570|B650|X670/i.test(placa)) placaBrand = 'AMD';
  
      // Verificar compatibilidade CPU x Placa
      if (cpuBrand === 'Desconhecido' || placaBrand === 'Desconhecido') {
        // se algum for desconhecido, não acusar incompatibilidade imediata, só avisar.
        if (cpuBrand === 'Desconhecido') problemas.push('CPU não identificada corretamente.');
        if (placaBrand === 'Desconhecido') problemas.push('Placa-mãe não identificada corretamente.');
      } else if (cpuBrand !== placaBrand) {
        problemas.push(`CPU (${cpuBrand}) incompatível com a placa-mãe selecionada (${placaBrand}).`);
      }
  
      // Verificar compatibilidade RAM x Placa (DDR4 vs DDR5)
      const ramType = ram.match(/DDR5/i) ? 'DDR5' : (ram.match(/DDR4/i) ? 'DDR4' : 'Desconhecido');
      // Placas que normalmente suportam DDR5 nesta lista simplificada
      const placasDDR5 = [/B650/i, /X670/i, /X670/i, /Z790/i, /Z690/i];
      const placaIsDDR5 = placasDDR5.some(rx => rx.test(placa));
  
      if (ramType === 'Desconhecido') {
        problemas.push('Tipo de memória (DDR4/DDR5) não identificado.');
      } else if (ramType === 'DDR5' && !placaIsDDR5) {
        problemas.push('Memória DDR5 selecionada, mas a placa-mãe parece não suportar DDR5.');
      }
  
      // Checagem de potência (estimativa simples)
      function estimateCpuWatts(cpuStr) {
        if (/i9|Ryzen 9/i.test(cpuStr)) return 125;
        if (/i7|Ryzen 7/i.test(cpuStr)) return 105;
        if (/i5|Ryzen 5/i.test(cpuStr)) return 95;
        if (/i3|Ryzen 3/i.test(cpuStr)) return 65;
        return 65; // valor conservador
      }
      function estimateGpuWatts(gpuStr) {
        if (/RTX 4070/i.test(gpuStr)) return 200;
        if (/RTX 3060/i.test(gpuStr)) return 170;
        if (/RX 7900/i.test(gpuStr)) return 300;
        if (/RX 6700/i.test(gpuStr)) return 170;
        return 120;
      }
  
      const cpuWatts = estimateCpuWatts(cpu);
      const gpuWatts = estimateGpuWatts(gpu);
      const otherWatts = 120; // placa-mãe, ventoinhas, SSDs, etc.
      const requiredWatts = Math.ceil((cpuWatts + gpuWatts + otherWatts) * 1.15); // margem de segurança ~15%
  
      const fonteNumber = parseInt((fonte || '').replace(/[^0-9]/g, ''), 10) || 0;
      if (fonteNumber === 0) {
        problemas.push('Fonte não selecionada.');
      } else if (fonteNumber < requiredWatts) {
        problemas.push(`Fonte escolhida (${fonteNumber}W) pode ser insuficiente. Estimativa de necessidade: ${requiredWatts}W.`);
      }
  
      // Mensagem final (cartão estilizado)
      // limpar conteúdo anterior
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
  
        // forçar reflow e mostrar com animação
        requestAnimationFrame(() => {
          card.classList.add('show');
        });
      }
  
      if (problemas.length === 0) {
        createCard('success', 'Tudo compatível', 'Boa montagem 😊');
      } else {
        const listHtml = `<ul class="problems">${problemas.map(p => `<li>${p}</li>`).join('')}</ul>`;
        createCard('error', 'Incompatibilidades encontradas', listHtml);
      }
    });
  });
