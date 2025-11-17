// Elementos do HTML
const cpu = document.getElementById("cpu");
const placa = document.getElementById("placaMae");
const ram = document.getElementById("ram");
const gpu = document.getElementById("gpu");
const ssd = document.getElementById("ssd");
const fonte = document.getElementById("fonte");
const resultado = document.getElementById("resultado");
const btn = document.getElementById("verificar");

// Lista de compatibilidade
const compatibilidade = {
  cpu: [
    { cpu: "Intel Core i5 12ª", placas: ["Aorus Z690"] },
    { cpu: "Intel Core i7 12ª", placas: ["Intel Z790"] },
    { cpu: "Intel Core i9 13ª", placas: ["Intel Z790"] },
    { cpu: "Intel Core i3 11ª", placas: ["Intel Z590"] },
    { cpu: "AMD Ryzen 5 5600X", placas: ["Aorus B550"] },
    { cpu: "AMD Ryzen 7 5800X", placas: ["Aorus X570"] },
    { cpu: "AMD Ryzen 9 5900X", placas: ["Aorus X570"] },
    { cpu: "AMD Ryzen 3 5300G", placas: ["Aorus B550"] },
    { cpu: "MSI Ryzen 5 7600", placas: ["MSI B650"] },
    { cpu: "MSI Ryzen 7 7700", placas: ["MSI X670"] },
    { cpu: "MSI Intel i5 13600K", placas: ["MSI Z690"] },
    { cpu: "MSI Intel i7 13700K", placas: ["MSI Z690"] }
  ],
  ram: [
    { ram: "DDR4 3200MHz Intel", placas: ["Aorus Z690", "Intel Z790", "Intel Z590", "Intel B660"] },
    { ram: "DDR4 3600MHz AMD", placas: ["Aorus B550", "Aorus X570"] },
    { ram: "DDR5 5200MHz Aorus", placas: ["Aorus Z690"] },
    { ram: "DDR5 6000MHz MSI", placas: ["MSI B650", "MSI X670", "MSI Z690"] }
  ],
  gpu: [
    { gpu: "Nvidia RTX 3060", fonteMinima: 550 },
    { gpu: "Nvidia RTX 4070", fonteMinima: 650 },
    { gpu: "AMD RX 6700", fonteMinima: 550 },
    { gpu: "AMD RX 7900", fonteMinima: 750 }
  ]
};

// Função para verificar compatibilidade
btn.addEventListener("click", () => {
  const selecionadas = {
    cpu: cpu.value,
    placa: placa.value,
    ram: ram.value,
    gpu: gpu.value,
    ssd: ssd.value,
    fonte: fonte.value ? parseInt(fonte.value) : 0
  };

  let mensagens = [];

  // Verifica CPU x Placa
  if (!selecionadas.cpu || !selecionadas.placa) {
    mensagens.push("❌ Selecione CPU e Placa-mãe para verificar compatibilidade!");
  } else {
    const cpuObj = compatibilidade.cpu.find(c => c.cpu === selecionadas.cpu);
    if (cpuObj.placas.includes(selecionadas.placa)) {
      mensagens.push("✅ CPU e Placa-mãe compatíveis!");
    } else {
      mensagens.push(`❌ CPU e Placa-mãe incompatíveis! Placas compatíveis com ${selecionadas.cpu}: ${cpuObj.placas.join(", ")}`);
    }
  }

  // Verifica RAM x Placa
  if (selecionadas.ram && selecionadas.placa) {
    const ramObj = compatibilidade.ram.find(r => r.ram === selecionadas.ram);
    if (ramObj.placas.includes(selecionadas.placa)) {
      mensagens.push("✅ RAM compatível com a placa-mãe!");
    } else {
      mensagens.push(`❌ RAM incompatível! Placas compatíveis com ${selecionadas.ram}: ${ramObj.placas.join(", ")}`);
    }
  }

  // Verifica GPU x Fonte
  if (selecionadas.gpu && selecionadas.fonte) {
    const gpuObj = compatibilidade.gpu.find(g => g.gpu === selecionadas.gpu);
    if (selecionadas.fonte >= gpuObj.fonteMinima) {
      mensagens.push("✅ Fonte suficiente para a GPU!");
    } else {
      mensagens.push(`❌ Fonte insuficiente! Mínimo recomendado para ${selecionadas.gpu}: ${gpuObj.fonteMinima}W`);
    }
  }

  // Mostra resultados
  resultado.innerHTML = mensagens.join("<br>");
  resultado.style.color = mensagens.every(m => m.startsWith("✅")) ? "#4ef542" : "#ff3d71";
});
