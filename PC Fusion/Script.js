// ===== Dados das peças =====
const placasMae = [
  { nome: "Aorus Z690", marca: "Intel", tipoRam: "DDR4", socket: "LGA1700" },
  { nome: "Aorus Z790", marca: "Intel", tipoRam: "DDR5", socket: "LGA1700" },
  { nome: "Aorus B550", marca: "AMD", tipoRam: "DDR4", socket: "AM4" },
  { nome: "Aorus X570", marca: "AMD", tipoRam: "DDR4", socket: "AM4" },
  { nome: "Aorus X670", marca: "AMD", tipoRam: "DDR5", socket: "AM5" }
];

const cpus = [
  { nome: "Intel Core i5 12ª", marca: "Intel", socket: "LGA1700" },
  { nome: "Intel Core i7 10ª", marca: "Intel", socket: "LGA1200" },
  { nome: "Intel Core i9 13ª", marca: "Intel", socket: "LGA1700" },
  { nome: "AMD Ryzen 5 5600X", marca: "AMD", socket: "AM4" },
  { nome: "AMD Ryzen 7 3700X", marca: "AMD", socket: "AM4" },
  { nome: "AMD Ryzen 9 7900X", marca: "AMD", socket: "AM5" }
];

const rams = [
  { nome: "DDR4 3200MHz", tipo: "DDR4" },
  { nome: "DDR4 3600MHz", tipo: "DDR4" },
  { nome: "DDR5 5200MHz", tipo: "DDR5" }
];

const gpus = [
  "Nvidia RTX 3060",
  "Nvidia RTX 3070",
  "AMD RX 6700"
];

const ssds = [
  "SATA 1TB",
  "NVMe 500GB"
];

const fontes = [
  { watts: 550 },
  { watts: 750 },
  { watts: 850 }
];

// ===== Função para verificar compatibilidade =====
function verificarCompatibilidade() {
  const cpuSelecionada = document.getElementById("cpu").value;
  const placaMaeSelecionada = document.getElementById("placaMae").value;
  const ramSelecionada = document.getElementById("ram").value;
  const gpuSelecionada = document.getElementById("gpu").value;
  const fonteSelecionada = parseInt(document.getElementById("fonte").value);
  const ssdSelecionado = document.getElementById("ssd").value;

  const placa = placasMae.find(p => p.nome === placaMaeSelecionada);
  const cpu = cpus.find(c => c.nome === cpuSelecionada);
  const ram = rams.find(r => r.nome === ramSelecionada);

  let mensagem = "";

  // CPU ↔ Placa-mãe
  if (cpu.marca === placa.marca && cpu.socket === placa.socket) {
    mensagem += `<span class="compativel">CPU e placa-mãe compatíveis ✅</span><br>`;
  } else {
    mensagem += `<span class="incompativel">CPU e placa-mãe não compatíveis ❌</span><br>`;
  }

  // RAM ↔ Placa-mãe
  if (ram.tipo === placa.tipoRam) {
    mensagem += `<span class="compativel">RAM compatível ✅</span><br>`;
  } else {
    mensagem += `<span class="incompativel">RAM não compatível ❌</span><br>`;
  }

  // Fonte
  let wattsMinimos = 550;
  if (gpuSelecionada.includes("3070") || gpuSelecionada.includes("6700")) {
    wattsMinimos = 750;
  }
  if (cpu.nome.includes("i9") || cpu.nome.includes("Ryzen 9")) {
    wattsMinimos = 850;
  }

  if (fonteSelecionada >= wattsMinimos) {
    mensagem += `<span class="compativel">Fonte suficiente ✅</span><br>`;
  } else {
    mensagem += `<span class="incompativel">Fonte insuficiente ❌</span><br>`;
  }

  // GPU
  if (gpus.includes(gpuSelecionada)) {
    mensagem += `<span class="compativel">GPU compatível ✅</span><br>`;
  } else {
    mensagem += `<span class="incompativel">GPU não compatível ❌</span><br>`;
  }

  // SSD
  if (ssds.includes(ssdSelecionado)) {
    mensagem += `<span class="compativel">SSD compatível ✅</span><br>`;
  } else {
    mensagem += `<span class="incompativel">SSD não compatível ❌</span><br>`;
  }

  // Mostrar mensagem
  document.getElementById("mensagem").innerHTML = mensagem;

  // Adicionar animação suave
  const resultado = document.getElementById("resultado");
  resultado.style.opacity = 0;
  setTimeout(() => { resultado.style.opacity = 1; }, 100);
}
