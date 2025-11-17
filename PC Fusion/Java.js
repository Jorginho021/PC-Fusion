const cpus = ["Intel Core i5 12ª", "AMD Ryzen 5 5600X"];
const placasMae = [
  {nome: "Aorus Z690", marca: "Intel", tipoRam: "DDR4"},
  {nome: "Aorus B550", marca: "AMD", tipoRam: "DDR4"}
];
const rams = ["DDR4 3200MHz", "DDR5 5200MHz"];
const fontes = [550, 750, 850];

function verificarCompatibilidade() {
  const cpuSelecionada = document.getElementById("cpu").value;
  const placaMaeSelecionada = document.getElementById("placaMae").value;
  const ramSelecionada = document.getElementById("ram").value;
  const fonteSelecionada = parseInt(document.getElementById("fonte").value);

  let mensagem = "";

  // Verifica CPU x placa-mãe
  const placa = placasMae.find(p => p.nome === placaMaeSelecionada);
  if ((cpuSelecionada.includes("Intel") && placa.marca === "Intel") ||
      (cpuSelecionada.includes("Ryzen") && placa.marca === "AMD")) {
    mensagem += "CPU e placa-mãe compatíveis ✅<br>";
  } else {
    mensagem += "CPU e placa-mãe não compatíveis ❌<br>";
  }

  // Verifica RAM
  if ((ramSelecionada.includes("DDR4") && placa.tipoRam === "DDR4") ||
      (ramSelecionada.includes("DDR5") && placa.tipoRam === "DDR5")) {
    mensagem += "RAM compatível ✅<br>";
  } else {
    mensagem += "RAM não compatível ❌<br>";
  }

  // Verifica fonte (exemplo simples)
  if (fonteSelecionada >= 550) {
    mensagem += "Fonte suficiente ✅<br>";
  } else {
    mensagem += "Fonte insuficiente ❌<br>";
  }

  document.getElementById("mensagem").innerHTML = mensagem;
}
