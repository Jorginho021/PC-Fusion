// Informações detalhadas das peças
const infosPecas = {
  // CPU - Intel Série 14 (Última)
  "Intel Core i9 14900K": {
    categoria: "Processador",
    preco: "R$ 7.000 - R$ 9.000",
    info: "<strong>Núcleos:</strong> 24 (8P+16E)<br><strong>Threads:</strong> 32<br><strong>Frequência:</strong> 3.2 GHz - 6.0 GHz<br><strong>Consumo:</strong> 253W<br><strong>Ideal para:</strong> Workstation, streaming profissional, jogos 4K ultra"
  },
  "Intel Core i9 14900KF": {
    categoria: "Processador",
    preco: "R$ 6.500 - R$ 8.500",
    info: "<strong>Núcleos:</strong> 24 (8P+16E)<br><strong>Threads:</strong> 32<br><strong>Frequência:</strong> 3.2 GHz - 6.0 GHz<br><strong>Sem iGPU:</strong> Sem gráficos integrados<br><strong>Consumo:</strong> 253W<br><strong>Ideal para:</strong> Workstation com GPU dedicada"
  },
  "Intel Core i7 14700K": {
    categoria: "Processador",
    preco: "R$ 4.500 - R$ 6.000",
    info: "<strong>Núcleos:</strong> 20 (8P+12E)<br><strong>Threads:</strong> 28<br><strong>Frequência:</strong> 3.4 GHz - 5.6 GHz<br><strong>Consumo:</strong> 253W<br><strong>Ideal para:</strong> Gaming topo de linha, streaming, edição 4K"
  },
  "Intel Core i7 14700KF": {
    categoria: "Processador",
    preco: "R$ 4.000 - R$ 5.500",
    info: "<strong>Núcleos:</strong> 20 (8P+12E)<br><strong>Threads:</strong> 28<br><strong>Frequência:</strong> 3.4 GHz - 5.6 GHz<br><strong>Sem iGPU:</strong> Sem gráficos integrados<br><strong>Consumo:</strong> 253W<br><strong>Ideal para:</strong> Gaming com GPU dedicada"
  },
  "Intel Core i5 14600K": {
    categoria: "Processador",
    preco: "R$ 2.800 - R$ 3.800",
    info: "<strong>Núcleos:</strong> 14 (6P+8E)<br><strong>Threads:</strong> 20<br><strong>Frequência:</strong> 3.5 GHz - 5.3 GHz<br><strong>Consumo:</strong> 181W<br><strong>Ideal para:</strong> Gaming 1440p, edição intermediária"
  },
  // CPU - Intel Série 13
  "Intel Core i9 13900K": {
    categoria: "Processador",
    preco: "R$ 6.000 - R$ 8.000",
    info: "<strong>Núcleos:</strong> 24 (8P+16E)<br><strong>Threads:</strong> 32<br><strong>Frequência:</strong> 3.0 GHz - 5.8 GHz<br><strong>Consumo:</strong> 253W<br><strong>Ideal para:</strong> Workstation profissional, streaming, 4K gaming"
  },
  "Intel Core i9 13900KF": {
    categoria: "Processador",
    preco: "R$ 5.500 - R$ 7.500",
    info: "<strong>Núcleos:</strong> 24 (8P+16E)<br><strong>Threads:</strong> 32<br><strong>Sem iGPU:</strong> Sem gráficos integrados<br><strong>Consumo:</strong> 253W<br><strong>Ideal para:</strong> Workstation com GPU dedicada"
  },
  "Intel Core i7 13700K": {
    categoria: "Processador",
    preco: "R$ 4.000 - R$ 5.500",
    info: "<strong>Núcleos:</strong> 16 (8P+8E)<br><strong>Threads:</strong> 24<br><strong>Frequência:</strong> 3.4 GHz - 5.4 GHz<br><strong>Consumo:</strong> 253W<br><strong>Ideal para:</strong> Gaming 1440p/4K, edição profissional"
  },
  "Intel Core i7 13700KF": {
    categoria: "Processador",
    preco: "R$ 3.500 - R$ 5.000",
    info: "<strong>Núcleos:</strong> 16 (8P+8E)<br><strong>Threads:</strong> 24<br><strong>Sem iGPU:</strong> Sem gráficos integrados<br><strong>Consumo:</strong> 253W<br><strong>Ideal para:</strong> Gaming com GPU dedicada"
  },
  "Intel Core i5 13600K": {
    categoria: "Processador",
    preco: "R$ 2.200 - R$ 2.700",
    info: "<strong>Núcleos:</strong> 14 (6P+8E)<br><strong>Threads:</strong> 20<br><strong>Frequência:</strong> 3.5 GHz - 5.1 GHz<br><strong>Consumo:</strong> 181W<br><strong>Ideal para:</strong> Jogos ultra, transmissão profissional"
  },
  "Intel Core i5 13600KF": {
    categoria: "Processador",
    preco: "R$ 1.900 - R$ 2.400",
    info: "<strong>Núcleos:</strong> 14 (6P+8E)<br><strong>Threads:</strong> 20<br><strong>Sem iGPU:</strong> Sem gráficos integrados<br><strong>Consumo:</strong> 181W<br><strong>Ideal para:</strong> Gaming topo de linha"
  },
  // CPU - Intel Série 12
  "Intel Core i9 12900K": {
    categoria: "Processador",
    preco: "R$ 5.000 - R$ 7.000",
    info: "<strong>Núcleos:</strong> 16 (8P+8E)<br><strong>Threads:</strong> 24<br><strong>Frequência:</strong> 3.2 GHz - 5.2 GHz<br><strong>Consumo:</strong> 241W<br><strong>Ideal para:</strong> Gaming 1440p/4K, renderização 3D"
  },
  "Intel Core i9 12900KF": {
    categoria: "Processador",
    preco: "R$ 4.500 - R$ 6.500",
    info: "<strong>Núcleos:</strong> 16 (8P+8E)<br><strong>Threads:</strong> 24<br><strong>Sem iGPU:</strong> Sem gráficos integrados<br><strong>Consumo:</strong> 241W<br><strong>Ideal para:</strong> Gaming com GPU dedicada"
  },
  "Intel Core i7 12700K": {
    categoria: "Processador",
    preco: "R$ 3.500 - R$ 4.500",
    info: "<strong>Núcleos:</strong> 12 (8P+4E)<br><strong>Threads:</strong> 20<br><strong>Frequência:</strong> 3.6 GHz - 4.9 GHz<br><strong>Consumo:</strong> 190W<br><strong>Ideal para:</strong> Gaming 1440p, streaming"
  },
  "Intel Core i7 12700KF": {
    categoria: "Processador",
    preco: "R$ 3.000 - R$ 4.000",
    info: "<strong>Núcleos:</strong> 12 (8P+4E)<br><strong>Threads:</strong> 20<br><strong>Sem iGPU:</strong> Sem gráficos integrados<br><strong>Consumo:</strong> 190W<br><strong>Ideal para:</strong> Gaming intermediário"
  },
  "Intel Core i5 12600K": {
    categoria: "Processador",
    preco: "R$ 1.800 - R$ 2.300",
    info: "<strong>Núcleos:</strong> 10 (6P+4E)<br><strong>Threads:</strong> 16<br><strong>Frequência:</strong> 3.7 GHz - 4.9 GHz<br><strong>Consumo:</strong> 125W<br><strong>Ideal para:</strong> Gaming 1080p/1440p, multitarefa"
  },
  "Intel Core i5 12600KF": {
    categoria: "Processador",
    preco: "R$ 1.500 - R$ 2.000",
    info: "<strong>Núcleos:</strong> 10 (6P+4E)<br><strong>Threads:</strong> 16<br><strong>Sem iGPU:</strong> Sem gráficos integrados<br><strong>Consumo:</strong> 125W<br><strong>Ideal para:</strong> Gaming custo-benefício"
  },
  "Intel Core i3 12100": {
    categoria: "Processador",
    preco: "R$ 700 - R$ 1.000",
    info: "<strong>Núcleos:</strong> 4<br><strong>Threads:</strong> 8<br><strong>Frequência:</strong> 3.3 GHz - 4.3 GHz<br><strong>Consumo:</strong> 65W<br><strong>Ideal para:</strong> Uso geral, Office, Web"
  },
  // CPU - AMD Ryzen 7000 (Última)
  "AMD Ryzen 9 7950X": {
    categoria: "Processador",
    preco: "R$ 3.800 - R$ 5.000",
    info: "<strong>Núcleos:</strong> 16<br><strong>Threads:</strong> 32<br><strong>Frequência:</strong> 4.5 GHz - 5.7 GHz<br><strong>Consumo:</strong> 162W<br><strong>Ideal para:</strong> Workstation, renderização, IA/Machine Learning"
  },
  "AMD Ryzen 9 7900X": {
    categoria: "Processador",
    preco: "R$ 3.000 - R$ 4.000",
    info: "<strong>Núcleos:</strong> 12<br><strong>Threads:</strong> 24<br><strong>Frequência:</strong> 4.7 GHz - 5.6 GHz<br><strong>Consumo:</strong> 162W<br><strong>Ideal para:</strong> Gaming/workstation balanceado"
  },
  "AMD Ryzen 7 7700X": {
    categoria: "Processador",
    preco: "R$ 2.000 - R$ 2.800",
    info: "<strong>Núcleos:</strong> 8<br><strong>Threads:</strong> 16<br><strong>Frequência:</strong> 4.5 GHz - 5.4 GHz<br><strong>Consumo:</strong> 162W<br><strong>Ideal para:</strong> Gaming 1440p/4K, criação de conteúdo"
  },
  "AMD Ryzen 5 7600X": {
    categoria: "Processador",
    preco: "R$ 1.400 - R$ 1.900",
    info: "<strong>Núcleos:</strong> 6<br><strong>Threads:</strong> 12<br><strong>Frequência:</strong> 4.7 GHz - 5.3 GHz<br><strong>Consumo:</strong> 105W<br><strong>Ideal para:</strong> Gaming 1080p/1440p eficiente"
  },
  "AMD Ryzen 5 7600": {
    categoria: "Processador",
    preco: "R$ 900 - R$ 1.200",
    info: "<strong>Núcleos:</strong> 6<br><strong>Threads:</strong> 12<br><strong>Frequência:</strong> 3.6 GHz - 5.1 GHz<br><strong>Consumo:</strong> 65W<br><strong>Ideal para:</strong> Gaming 1080p, custo-benefício"
  },
  // CPU - AMD Ryzen 5000
  "AMD Ryzen 9 5950X": {
    categoria: "Processador",
    preco: "R$ 2.800 - R$ 3.800",
    info: "<strong>Núcleos:</strong> 16<br><strong>Threads:</strong> 32<br><strong>Frequência:</strong> 3.4 GHz - 4.9 GHz<br><strong>Consumo:</strong> 142W<br><strong>Ideal para:</strong> Workstation profissional"
  },
  "AMD Ryzen 9 5900X3D": {
    categoria: "Processador",
    preco: "R$ 2.200 - R$ 3.200",
    info: "<strong>Núcleos:</strong> 12 + 3D V-Cache<br><strong>Threads:</strong> 24<br><strong>Cache 3D:</strong> 96MB<br><strong>Consumo:</strong> 142W<br><strong>Ideal para:</strong> Gaming 1440p/4K com cache otimizado"
  },
  "AMD Ryzen 9 5900X": {
    categoria: "Processador",
    preco: "R$ 2.000 - R$ 2.800",
    info: "<strong>Núcleos:</strong> 12<br><strong>Threads:</strong> 24<br><strong>Frequência:</strong> 3.7 GHz - 4.6 GHz<br><strong>Consumo:</strong> 142W<br><strong>Ideal para:</strong> Workstation, streaming, edição profissional"
  },
  "AMD Ryzen 7 5800X3D": {
    categoria: "Processador",
    preco: "R$ 1.800 - R$ 2.500",
    info: "<strong>Núcleos:</strong> 8 + 3D V-Cache<br><strong>Threads:</strong> 16<br><strong>Cache 3D:</strong> 96MB<br><strong>Consumo:</strong> 142W<br><strong>Ideal para:</strong> Gaming 1440p com cache 3D"
  },
  "AMD Ryzen 7 5800X": {
    categoria: "Processador",
    preco: "R$ 1.600 - R$ 2.200",
    info: "<strong>Núcleos:</strong> 8<br><strong>Threads:</strong> 16<br><strong>Frequência:</strong> 3.8 GHz - 4.7 GHz<br><strong>Consumo:</strong> 105W<br><strong>Ideal para:</strong> Gaming 1440p, edição intermediária"
  },
  "AMD Ryzen 5 5600X": {
    categoria: "Processador",
    preco: "R$ 1.000 - R$ 1.300",
    info: "<strong>Núcleos:</strong> 6<br><strong>Threads:</strong> 12<br><strong>Frequência:</strong> 3.7 GHz - 4.6 GHz<br><strong>Consumo:</strong> 95W<br><strong>Ideal para:</strong> Jogos 1080p, trabalho multitarefa"
  },
  "AMD Ryzen 3 5300G": {
    categoria: "Processador",
    preco: "R$ 700 - R$ 900",
    info: "<strong>Núcleos:</strong> 4<br><strong>Threads:</strong> 8<br><strong>Gráficos Integrados:</strong> Sim (Vega)<br><strong>Consumo:</strong> 65W<br><strong>Ideal para:</strong> Uso geral, jogos casual"
  },
  // CPU - AMD Ryzen 3000
  "AMD Ryzen 9 3900X": {
    categoria: "Processador",
    preco: "R$ 800 - R$ 1.200",
    info: "<strong>Núcleos:</strong> 12<br><strong>Threads:</strong> 24<br><strong>Frequência:</strong> 3.8 GHz - 4.6 GHz<br><strong>Consumo:</strong> 105W<br><strong>Gerança:</strong> Legado (AM4)<br><strong>Ideal para:</strong> Upgrade barato"
  },
  "AMD Ryzen 7 3700X": {
    categoria: "Processador",
    preco: "R$ 600 - R$ 900",
    info: "<strong>Núcleos:</strong> 8<br><strong>Threads:</strong> 16<br><strong>Frequência:</strong> 3.6 GHz - 4.4 GHz<br><strong>Consumo:</strong> 95W<br><strong>Geração:</strong> Legado (AM4)<br><strong>Ideal para:</strong> Upgrade intermediário"
  },
  "AMD Ryzen 5 3600": {
    categoria: "Processador",
    preco: "R$ 400 - R$ 700",
    info: "<strong>Núcleos:</strong> 6<br><strong>Threads:</strong> 12<br><strong>Frequência:</strong> 3.6 GHz - 4.2 GHz<br><strong>Consumo:</strong> 95W<br><strong>Geração:</strong> Legado (AM4)<br><strong>Ideal para:</strong> Upgrade econômico"
  },
  
  // Placa-mãe - Aorus
  "Aorus Z690": {
    categoria: "Placa-mãe",
    preco: "R$ 1.200 - R$ 1.600",
    info: "<strong>Soquete:</strong> LGA1700 (Intel)<br><strong>Chipset:</strong> Z690<br><strong>Memória:</strong> DDR5<br><strong>Slots de RAM:</strong> 2x DIMM<br><strong>Ideal para:</strong> Build Intel premium com suporte DDR5"
  },
  "Aorus B550": {
    categoria: "Placa-mãe",
    preco: "R$ 600 - R$ 800",
    info: "<strong>Soquete:</strong> AM4 (AMD)<br><strong>Chipset:</strong> B550<br><strong>Memória:</strong> DDR4<br><strong>Slots de RAM:</strong> 4x DIMM<br><strong>Ideal para:</strong> Build AMD balanceada intermediária"
  },
  "Aorus X570": {
    categoria: "Placa-mãe",
    preco: "R$ 900 - R$ 1.200",
    info: "<strong>Soquete:</strong> AM4 (AMD)<br><strong>Chipset:</strong> X570<br><strong>Memória:</strong> DDR4<br><strong>Slots de RAM:</strong> 4x DIMM<br><strong>Características:</strong> PCIe 4.0<br><strong>Ideal para:</strong> Build AMD topo de linha"
  },
  "Aorus H610": {
    categoria: "Placa-mãe",
    preco: "R$ 500 - R$ 700",
    info: "<strong>Soquete:</strong> LGA1700 (Intel)<br><strong>Chipset:</strong> H610<br><strong>Memória:</strong> DDR5/DDR4<br><strong>Slots de RAM:</strong> 2x DIMM<br><strong>Ideal para:</strong> Build Intel econômica"
  },
  
  // Placa-mãe - Intel
  "Intel Z790": {
    categoria: "Placa-mãe",
    preco: "R$ 1.400 - R$ 1.800",
    info: "<strong>Soquete:</strong> LGA1700<br><strong>Chipset:</strong> Z790<br><strong>Memória:</strong> DDR5<br><strong>Características:</strong> PCIe 5.0<br><strong>Ideal para:</strong> Build Intel topo de linha com máxima performance"
  },
  "Intel B660": {
    categoria: "Placa-mãe",
    preco: "R$ 700 - R$ 1.000",
    info: "<strong>Soquete:</strong> LGA1700<br><strong>Chipset:</strong> B660<br><strong>Memória:</strong> DDR5/DDR4<br><strong>Slots de RAM:</strong> 2x DIMM<br><strong>Ideal para:</strong> Build Intel balanceada"
  },
  "Intel H610": {
    categoria: "Placa-mãe",
    preco: "R$ 450 - R$ 650",
    info: "<strong>Soquete:</strong> LGA1700<br><strong>Chipset:</strong> H610<br><strong>Memória:</strong> DDR5/DDR4<br><strong>Slots de RAM:</strong> 2x DIMM<br><strong>Ideal para:</strong> Build Intel entrada/intermediária"
  },
  "Intel Z590": {
    categoria: "Placa-mãe",
    preco: "R$ 800 - R$ 1.100",
    info: "<strong>Soquete:</strong> LGA1200<br><strong>Chipset:</strong> Z590<br><strong>Memória:</strong> DDR4<br><strong>Características:</strong> PCIe 4.0<br><strong>Ideal para:</strong> Build Intel 10ª-11ª geração"
  },
  
  // Placa-mãe - MSI
  "MSI B650": {
    categoria: "Placa-mãe",
    preco: "R$ 1.000 - R$ 1.400",
    info: "<strong>Soquete:</strong> AM5 (AMD)<br><strong>Chipset:</strong> B650<br><strong>Memória:</strong> DDR5<br><strong>Características:</strong> PCIe 5.0<br><strong>Ideal para:</strong> Build AMD Ryzen 7000 balanceada"
  },
  "MSI X670": {
    categoria: "Placa-mãe",
    preco: "R$ 1.400 - R$ 1.800",
    info: "<strong>Soquete:</strong> AM5 (AMD)<br><strong>Chipset:</strong> X670<br><strong>Memória:</strong> DDR5<br><strong>Características:</strong> PCIe 5.0, regulador de tensão robusto<br><strong>Ideal para:</strong> Build AMD Ryzen 7000 premium"
  },
  "MSI Z690": {
    categoria: "Placa-mãe",
    preco: "R$ 1.200 - R$ 1.600",
    info: "<strong>Soquete:</strong> LGA1700<br><strong>Chipset:</strong> Z690<br><strong>Memória:</strong> DDR5<br><strong>Características:</strong> Regulador de tensão potente<br><strong>Ideal para:</strong> Build Intel 12ª geração topo de linha"
  },
  "MSI H610": {
    categoria: "Placa-mãe",
    preco: "R$ 500 - R$ 700",
    info: "<strong>Soquete:</strong> LGA1700<br><strong>Chipset:</strong> H610<br><strong>Memória:</strong> DDR5/DDR4<br><strong>Ideal para:</strong> Build Intel econômica com MSI"
  },

  // Placas Intel LGA1700 - Z790
  "Intel Z790-E Gaming": {
    categoria: "Placa-mãe",
    preco: "R$ 1.800 - R$ 2.400",
    info: "<strong>Soquete:</strong> LGA1700 (Intel 12-14ª)<br><strong>Chipset:</strong> Z790<br><strong>Memória:</strong> DDR5<br><strong>Características:</strong> PCIe 5.0, regulador VRM robusto<br><strong>Ideal para:</strong> Build premium Intel com overclock"
  },
  "ASUS ROG STRIX Z790": {
    categoria: "Placa-mãe",
    preco: "R$ 2.000 - R$ 2.600",
    info: "<strong>Soquete:</strong> LGA1700 (Intel 12-14ª)<br><strong>Chipset:</strong> Z790<br><strong>Memória:</strong> DDR5<br><strong>Características:</strong> PCIe 5.0 DDR5, ThrottleStop suporte<br><strong>Ideal para:</strong> Gaming/streaming profissional"
  },
  "MSI MEG Z790": {
    categoria: "Placa-mãe",
    preco: "R$ 1.900 - R$ 2.500",
    info: "<strong>Soquete:</strong> LGA1700<br><strong>Chipset:</strong> Z790<br><strong>Memória:</strong> DDR5<br><strong>Características:</strong> PCIe 5.0, design premium<br><strong>Ideal para:</strong> Build topo de linha"
  },
  "Gigabyte Z790 AORUS": {
    categoria: "Placa-mãe",
    preco: "R$ 1.700 - R$ 2.200",
    info: "<strong>Soquete:</strong> LGA1700<br><strong>Chipset:</strong> Z790<br><strong>Memória:</strong> DDR5<br><strong>Características:</strong> PCIe 5.0 SSD, arrefecimento ultra<br><strong>Ideal para:</strong> Build balanceada premium"
  },

  // Entradas adicionais (correspondem aos títulos usados em pecas.html)
  "ASUS Z790-E": {
    categoria: "Placa-mãe",
    preco: "R$ 1.900 - R$ 2.400",
    info: "<strong>Soquete:</strong> LGA1700<br><strong>Chipset:</strong> Z790<br><strong>Memória:</strong> DDR5<br><strong>Ideal para:</strong> Modelo ASUS com foco em estabilidade e recursos para overclock"
  },
  "MSI MPG Z790": {
    categoria: "Placa-mãe",
    preco: "R$ 1.700 - R$ 2.200",
    info: "<strong>Soquete:</strong> LGA1700<br><strong>Chipset:</strong> Z790<br><strong>Memória:</strong> DDR5<br><strong>Ideal para:</strong> Placa MSI série MPG focada em games e desempenho"
  },
  "Gigabyte Z790 Master": {
    categoria: "Placa-mãe",
    preco: "R$ 1.800 - R$ 2.300",
    info: "<strong>Soquete:</strong> LGA1700<br><strong>Chipset:</strong> Z790<br><strong>Memória:</strong> DDR5<br><strong>Ideal para:</strong> Versão Gigabyte com boa VRM e refrigeração"
  },
  "ASUS B760-F": {
    categoria: "Placa-mãe",
    preco: "R$ 1.050 - R$ 1.450",
    info: "<strong>Soquete:</strong> LGA1700<br><strong>Chipset:</strong> B760<br><strong>Memória:</strong> DDR5/DDR4<br><strong>Ideal para:</strong> Boa relação custo/benefício em builds Intel"
  },
  "ASUS H770-F": {
    categoria: "Placa-mãe",
    preco: "R$ 850 - R$ 1.250",
    info: "<strong>Soquete:</strong> LGA1700<br><strong>Chipset:</strong> H770<br><strong>Memória:</strong> DDR5/DDR4<br><strong>Ideal para:</strong> Builds de entrada com estabilidade e conectividade"
  },
  "ASUS Z590-E": {
    categoria: "Placa-mãe",
    preco: "R$ 900 - R$ 1.200",
    info: "<strong>Soquete:</strong> LGA1200<br><strong>Chipset:</strong> Z590<br><strong>Memória:</strong> DDR4<br><strong>Ideal para:</strong> Suporte a CPUs Intel 10ª/11ª geração"
  },
  "ASUS X870-E": {
    categoria: "Placa-mãe",
    preco: "R$ 2.600 - R$ 3.200",
    info: "<strong>Soquete:</strong> AM5<br><strong>Chipset:</strong> X870<br><strong>Memória:</strong> DDR5<br><strong>Ideal para:</strong> Build AMD topo de linha com recursos recentes"
  },
  "MSI X870": {
    categoria: "Placa-mãe",
    preco: "R$ 2.500 - R$ 3.100",
    info: "<strong>Soquete:</strong> AM5<br><strong>Chipset:</strong> X870<br><strong>Memória:</strong> DDR5<br><strong>Ideal para:</strong> Placa MSI para usuarios avançados"
  },
  "Gigabyte X870": {
    categoria: "Placa-mãe",
    preco: "R$ 2.400 - R$ 3.000",
    info: "<strong>Soquete:</strong> AM5<br><strong>Chipset:</strong> X870<br><strong>Memória:</strong> DDR5<br><strong>Ideal para:</strong> Versão Gigabyte com ênfase em armazenamento e expansão"
  },
  // Entrada genérica para corresponder ao card "AMD X870" em pecas.html
  "AMD X870": {
    categoria: "Placa-mãe",
    preco: "R$ 2.400 - R$ 3.000",
    info: "<strong>Soquete:</strong> AM5<br><strong>Chipset:</strong> X870<br><strong>Memória:</strong> DDR5<br><strong>Ideal para:</strong> Chipset X870 — opções AMD de alta performance"
  },
  "ASUS X670-E": {
    categoria: "Placa-mãe",
    preco: "R$ 2.000 - R$ 2.600",
    info: "<strong>Soquete:</strong> AM5<br><strong>Chipset:</strong> X670<br><strong>Memória:</strong> DDR5<br><strong>Ideal para:</strong> Placa ASUS de alta performance para Ryzen 7000"
  },
  "Gigabyte X670": {
    categoria: "Placa-mãe",
    preco: "R$ 1.900 - R$ 2.500",
    info: "<strong>Soquete:</strong> AM5<br><strong>Chipset:</strong> X670<br><strong>Memória:</strong> DDR5<br><strong>Ideal para:</strong> Boa opção Gigabyte para gaming"
  },
  "MSI B850": {
    categoria: "Placa-mãe",
    preco: "R$ 1.300 - R$ 1.800",
    info: "<strong>Soquete:</strong> AM5<br><strong>Chipset:</strong> B850<br><strong>Memória:</strong> DDR5<br><strong>Ideal para:</strong> Builds AMD intermediárias"
  },
  "ASUS B650-E": {
    categoria: "Placa-mãe",
    preco: "R$ 1.250 - R$ 1.700",
    info: "<strong>Soquete:</strong> AM5<br><strong>Chipset:</strong> B650<br><strong>Memória:</strong> DDR5<br><strong>Ideal para:</strong> Versão ASUS com VRMs reforçados"
  },
  "ASUS B550-F": {
    categoria: "Placa-mãe",
    preco: "R$ 850 - R$ 1.100",
    info: "<strong>Soquete:</strong> AM4<br><strong>Chipset:</strong> B550<br><strong>Memória:</strong> DDR4<br><strong>Ideal para:</strong> Build AMD interc. com boa estabilidade"
  },
  "MSI B550": {
    categoria: "Placa-mãe",
    preco: "R$ 750 - R$ 1.050",
    info: "<strong>Soquete:</strong> AM4<br><strong>Chipset:</strong> B550<br><strong>Memória:</strong> DDR4<br><strong>Ideal para:</strong> Versão MSI para builds AMD balanceadas"
  },
  "ASUS X370": {
    categoria: "Placa-mãe",
    preco: "R$ 450 - R$ 700",
    info: "<strong>Soquete:</strong> AM4<br><strong>Chipset:</strong> X370<br><strong>Memória:</strong> DDR4<br><strong>Ideal para:</strong> Placa legada para upgrades AM4"
  },

  // Placas Intel LGA1700 - B760
  "Intel B760": {
    categoria: "Placa-mãe",
    preco: "R$ 1.000 - R$ 1.400",
    info: "<strong>Soquete:</strong> LGA1700 (Intel 12-14ª)<br><strong>Chipset:</strong> B760<br><strong>Memória:</strong> DDR5/DDR4<br><strong>Ideal para:</strong> Build Intel intermediária balanceada"
  },
  "ASUS TUF B760": {
    categoria: "Placa-mãe",
    preco: "R$ 1.100 - R$ 1.500",
    info: "<strong>Soquete:</strong> LGA1700<br><strong>Chipset:</strong> B760<br><strong>Memória:</strong> DDR5/DDR4<br><strong>Características:</strong> Durável, militar-grade<br><strong>Ideal para:</strong> Build durável intermediária"
  },
  "MSI MPG B760": {
    categoria: "Placa-mãe",
    preco: "R$ 1.050 - R$ 1.450",
    info: "<strong>Soquete:</strong> LGA1700<br><strong>Chipset:</strong> B760<br><strong>Memória:</strong> DDR5/DDR4<br><strong>Características:</strong> Gaming-focused<br><strong>Ideal para:</strong> Gaming intermediário"
  },
  "Gigabyte B760 AORUS": {
    categoria: "Placa-mãe",
    preco: "R$ 1.050 - R$ 1.450",
    info: "<strong>Soquete:</strong> LGA1700<br><strong>Chipset:</strong> B760<br><strong>Memória:</strong> DDR5/DDR4<br><strong>Ideal para:</strong> Build gaming intermediária"
  },

  // Placas Intel LGA1700 - H770
  "Intel H770": {
    categoria: "Placa-mãe",
    preco: "R$ 800 - R$ 1.200",
    info: "<strong>Soquete:</strong> LGA1700 (Intel 12-14ª)<br><strong>Chipset:</strong> H770<br><strong>Memória:</strong> DDR5/DDR4<br><strong>Ideal para:</strong> Build Intel entrada gaming"
  },
  "ASUS Prime H770": {
    categoria: "Placa-mãe",
    preco: "R$ 850 - R$ 1.250",
    info: "<strong>Soquete:</strong> LGA1700<br><strong>Chipset:</strong> H770<br><strong>Memória:</strong> DDR5/DDR4<br><strong>Ideal para:</strong> Build entrada confiável"
  },
  "MSI PRO H770": {
    categoria: "Placa-mãe",
    preco: "R$ 850 - R$ 1.250",
    info: "<strong>Soquete:</strong> LGA1700<br><strong>Chipset:</strong> H770<br><strong>Memória:</strong> DDR5/DDR4<br><strong>Ideal para:</strong> Build profissional entrada"
  },

  // Placas AMD AM5 - X870
  "ASUS ROG STRIX X870": {
    categoria: "Placa-mãe",
    preco: "R$ 2.500 - R$ 3.200",
    info: "<strong>Soquete:</strong> AM5 (AMD Ryzen 7000)<br><strong>Chipset:</strong> X870<br><strong>Memória:</strong> DDR5<br><strong>Características:</strong> PCIe 5.0, Zen 5 ready<br><strong>Ideal para:</strong> Build AMD premium futuro-proof"
  },
  "MSI MEG X870E": {
    categoria: "Placa-mãe",
    preco: "R$ 2.600 - R$ 3.300",
    info: "<strong>Soquete:</strong> AM5 (AMD Ryzen 7000)<br><strong>Chipset:</strong> X870E<br><strong>Memória:</strong> DDR5<br><strong>Características:</strong> PCIe 5.0, design premium<br><strong>Ideal para:</strong> Build AMD topo de linha"
  },
  "Gigabyte X870 AORUS": {
    categoria: "Placa-mãe",
    preco: "R$ 2.400 - R$ 3.000",
    info: "<strong>Soquete:</strong> AM5<br><strong>Chipset:</strong> X870<br><strong>Memória:</strong> DDR5<br><strong>Ideal para:</strong> Build AMD balanceada premium"
  },

  // Placas AMD AM5 - X670
  "ASUS ROG STRIX X670": {
    categoria: "Placa-mãe",
    preco: "R$ 2.000 - R$ 2.600",
    info: "<strong>Soquete:</strong> AM5 (AMD Ryzen 7000)<br><strong>Chipset:</strong> X670<br><strong>Memória:</strong> DDR5<br><strong>Características:</strong> PCIe 5.0 SSD<br><strong>Ideal para:</strong> Build AMD gaming topo de linha"
  },
  "MSI MPG X670E": {
    categoria: "Placa-mãe",
    preco: "R$ 2.100 - R$ 2.700",
    info: "<strong>Soquete:</strong> AM5<br><strong>Chipset:</strong> X670E<br><strong>Memória:</strong> DDR5<br><strong>Características:</strong> PCIe 5.0 completo<br><strong>Ideal para:</strong> Build AMD profissional"
  },
  "Gigabyte X670 AORUS": {
    categoria: "Placa-mãe",
    preco: "R$ 1.900 - R$ 2.500",
    info: "<strong>Soquete:</strong> AM5<br><strong>Chipset:</strong> X670<br><strong>Memória:</strong> DDR5<br><strong>Ideal para:</strong> Build AMD gaming balanceada"
  },
  "ASRock X670E": {
    categoria: "Placa-mãe",
    preco: "R$ 1.800 - R$ 2.400",
    info: "<strong>Soquete:</strong> AM5<br><strong>Chipset:</strong> X670E<br><strong>Memória:</strong> DDR5<br><strong>Ideal para:</strong> Custo-benefício premium AMD"
  },

  // Placas AMD AM5 - B850
  "ASUS TUF B850": {
    categoria: "Placa-mãe",
    preco: "R$ 1.400 - R$ 1.900",
    info: "<strong>Soquete:</strong> AM5<br><strong>Chipset:</strong> B850<br><strong>Memória:</strong> DDR5<br><strong>Características:</strong> Durável, bom VRM<br><strong>Ideal para:</strong> Build AMD intermediária confiável"
  },
  "MSI MPG B850": {
    categoria: "Placa-mãe",
    preco: "R$ 1.350 - R$ 1.850",
    info: "<strong>Soquete:</strong> AM5<br><strong>Chipset:</strong> B850<br><strong>Memória:</strong> DDR5<br><strong>Ideal para:</strong> Gaming AMD intermediário"
  },

  // Placas AMD AM5 - B650
  "ASUS TUF B650": {
    categoria: "Placa-mãe",
    preco: "R$ 1.200 - R$ 1.600",
    info: "<strong>Soquete:</strong> AM5 (AMD Ryzen 7000)<br><strong>Chipset:</strong> B650<br><strong>Memória:</strong> DDR5<br><strong>Ideal para:</strong> Build AMD gaming balanceada"
  },
  "MSI MPG B650": {
    categoria: "Placa-mãe",
    preco: "R$ 1.150 - R$ 1.550",
    info: "<strong>Soquete:</strong> AM5<br><strong>Chipset:</strong> B650<br><strong>Memória:</strong> DDR5<br><strong>Ideal para:</strong> Gaming AMD valor"
  },
  "Gigabyte B650 AORUS": {
    categoria: "Placa-mãe",
    preco: "R$ 1.100 - R$ 1.500",
    info: "<strong>Soquete:</strong> AM5<br><strong>Chipset:</strong> B650<br><strong>Memória:</strong> DDR5<br><strong>Ideal para:</strong> Build AMD custo-benefício"
  },

  // Placas AMD AM4 (Legado) - X570
  "ASUS ROG X570": {
    categoria: "Placa-mãe",
    preco: "R$ 1.200 - R$ 1.700",
    info: "<strong>Soquete:</strong> AM4 (AMD Ryzen 3000-5000)<br><strong>Chipset:</strong> X570<br><strong>Memória:</strong> DDR4<br><strong>Características:</strong> PCIe 4.0, excelente upgrade<br><strong>Ideal para:</strong> Build AMD Ryzen 5000 topo de linha"
  },
  // Entrada extra para corresponder ao card "MSI X570" em pecas.html
  "MSI X570": {
    categoria: "Placa-mãe",
    preco: "R$ 1.000 - R$ 1.500",
    info: "<strong>Soquete:</strong> AM4<br><strong>Chipset:</strong> X570<br><strong>Memória:</strong> DDR4<br><strong>Ideal para:</strong> Versão MSI X570 — boa para gaming e upgrades AM4"
  },
  "MSI MPG X570": {
    categoria: "Placa-mãe",
    preco: "R$ 1.100 - R$ 1.600",
    info: "<strong>Soquete:</strong> AM4<br><strong>Chipset:</strong> X570<br><strong>Memória:</strong> DDR4<br><strong>Ideal para:</strong> Gaming AMD topo de linha legado"
  },

  // Placas AMD AM4 - B550
  "ASUS TUF B550": {
    categoria: "Placa-mãe",
    preco: "R$ 800 - R$ 1.100",
    info: "<strong>Soquete:</strong> AM4 (AMD Ryzen 3000-5000)<br><strong>Chipset:</strong> B550<br><strong>Memória:</strong> DDR4<br><strong>Características:</strong> PCIe 4.0, durável<br><strong>Ideal para:</strong> Build AMD gaming intermediária"
  },
  "MSI MPG B550": {
    categoria: "Placa-mãe",
    preco: "R$ 750 - R$ 1.050",
    info: "<strong>Soquete:</strong> AM4<br><strong>Chipset:</strong> B550<br><strong>Memória:</strong> DDR4<br><strong>Ideal para:</strong> Gaming AMD balanceado"
  },
  "Gigabyte B550 AORUS": {
    categoria: "Placa-mãe",
    preco: "R$ 750 - R$ 1.000",
    info: "<strong>Soquete:</strong> AM4<br><strong>Chipset:</strong> B550<br><strong>Memória:</strong> DDR4<br><strong>Ideal para:</strong> Build AMD entrada gaming"
  },

  // Placas AMD AM4 - B450
  "ASUS Prime B450": {
    categoria: "Placa-mãe",
    preco: "R$ 400 - R$ 650",
    info: "<strong>Soquete:</strong> AM4 (AMD Ryzen 1000-5000 com BIOS)<br><strong>Chipset:</strong> B450<br><strong>Memória:</strong> DDR4<br><strong>Ideal para:</strong> Upgrade econômico AMD"
  },
  "MSI B450": {
    categoria: "Placa-mãe",
    preco: "R$ 400 - R$ 650",
    info: "<strong>Soquete:</strong> AM4<br><strong>Chipset:</strong> B450<br><strong>Memória:</strong> DDR4<br><strong>Ideal para:</strong> Build AMD entrada econômica"
  },
  "Gigabyte B450": {
    categoria: "Placa-mãe",
    preco: "R$ 400 - R$ 650",
    info: "<strong>Soquete:</strong> AM4<br><strong>Chipset:</strong> B450<br><strong>Memória:</strong> DDR4<br><strong>Ideal para:</strong> Budget build AMD"
  },

  // Placas AMD AM4 - X470
  "ASUS ROG X470": {
    categoria: "Placa-mãe",
    preco: "R$ 700 - R$ 1.000",
    info: "<strong>Soquete:</strong> AM4 (AMD Ryzen 2000-5000)<br><strong>Chipset:</strong> X470<br><strong>Memória:</strong> DDR4<br><strong>Ideal para:</strong> Upgrade AMD legado intermediate"
  },

  // Placas AMD AM4 - X370
  "ASUS ROG X370": {
    categoria: "Placa-mãe",
    preco: "R$ 500 - R$ 800",
    info: "<strong>Soquete:</strong> AM4 (AMD Ryzen 1000 em diante)<br><strong>Chipset:</strong> X370<br><strong>Memória:</strong> DDR4<br><strong>Ideal para:</strong> Upgrade AMD legado antigo"
  },
  
  // RAM
  "DDR4 3200MHz Intel": {
    categoria: "Memória RAM",
    preco: "R$ 200 - R$ 350 (8GB)",
    info: "<strong>Tipo:</strong> DDR4<br><strong>Velocidade:</strong> 3200 MHz<br><strong>Capacidade típica:</strong> 8GB ou 16GB<br><strong>Latência:</strong> 16-18ns<br><strong>Ideal para:</strong> Compatível com placa Intel LGA1200/LGA1700 com DDR4"
  },
  "DDR4 3600MHz AMD": {
    categoria: "Memória RAM",
    preco: "R$ 250 - R$ 400 (8GB)",
    info: "<strong>Tipo:</strong> DDR4<br><strong>Velocidade:</strong> 3600 MHz<br><strong>Capacidade típica:</strong> 8GB ou 16GB<br><strong>Latência:</strong> 18-19ns<br><strong>Velocidade Ideal para Ryzen:</strong> 3600MHz oferece melhor relação custo-benefício<br><strong>Ideal para:</strong> Build AMD AM4"
  },
  "DDR5 5200MHz Aorus": {
    categoria: "Memória RAM",
    preco: "R$ 500 - R$ 700 (16GB)",
    info: "<strong>Tipo:</strong> DDR5<br><strong>Velocidade:</strong> 5200 MHz<br><strong>Capacidade típica:</strong> 16GB ou 32GB<br><strong>Latência:</strong> 22ns<br><strong>Marca:</strong> Gigabyte Aorus<br><strong>Ideal para:</strong> Intel 12ª+ ou AMD Ryzen 7000"
  },
  "DDR5 6000MHz MSI": {
    categoria: "Memória RAM",
    preco: "R$ 650 - R$ 900 (16GB)",
    info: "<strong>Tipo:</strong> DDR5<br><strong>Velocidade:</strong> 6000 MHz<br><strong>Capacidade típica:</strong> 16GB ou 32GB<br><strong>Latência:</strong> 24ns<br><strong>Marca:</strong> MSI<br><strong>Ideal para:</strong> Build DDR5 de máxima performance"
  },
  
  // GPU
  "Nvidia RTX 4090": {
    categoria: "Placa de Vídeo",
    preco: "R$ 8.000 - R$ 12.000",
    info: "<strong>Memória:</strong> 24GB GDDR6X<br><strong>Núcleos CUDA:</strong> 16384<br><strong>Consumo:</strong> 450W<br><strong>Performance:</strong> Topo de linha absoluto<br><strong>Ideal para:</strong> Jogos 4K ultra, workstation profissional, IA/Machine Learning"
  },
  "Nvidia RTX 4080": {
    categoria: "Placa de Vídeo",
    preco: "R$ 5.500 - R$ 7.500",
    info: "<strong>Memória:</strong> 16GB GDDR6X<br><strong>Núcleos CUDA:</strong> 9728<br><strong>Consumo:</strong> 320W<br><strong>Ideal para:</strong> Jogos 4K, edição profissional, renderização pesada"
  },
  "Nvidia RTX 4070 Ti": {
    categoria: "Placa de Vídeo",
    preco: "R$ 3.800 - R$ 5.000",
    info: "<strong>Memória:</strong> 12GB GDDR6X<br><strong>Núcleos CUDA:</strong> 7680<br><strong>Consumo:</strong> 285W<br><strong>Ideal para:</strong> Jogos 1440p/4K, edição 4K, transmissão profissional"
  },
  "Nvidia RTX 4070": {
    categoria: "Placa de Vídeo",
    preco: "R$ 3.000 - R$ 4.000",
    info: "<strong>Memória:</strong> 12GB GDDR6X<br><strong>Núcleos CUDA:</strong> 5888<br><strong>Consumo:</strong> 200W<br><strong>Ideal para:</strong> Jogos 1440p/4K, edição 4K, ray tracing ultra"
  },
  "Nvidia RTX 4060 Ti": {
    categoria: "Placa de Vídeo",
    preco: "R$ 1.800 - R$ 2.400",
    info: "<strong>Memória:</strong> 8GB GDDR6<br><strong>Núcleos CUDA:</strong> 4352<br><strong>Consumo:</strong> 165W<br><strong>Ideal para:</strong> Jogos 1440p, edição intermediária"
  },
  "Nvidia RTX 4060": {
    categoria: "Placa de Vídeo",
    preco: "R$ 1.200 - R$ 1.800",
    info: "<strong>Memória:</strong> 8GB GDDR6<br><strong>Núcleos CUDA:</strong> 3072<br><strong>Consumo:</strong> 115W<br><strong>Ideal para:</strong> Jogos 1080p/1440p, economia de energia"
  },
  "Nvidia RTX 3090": {
    categoria: "Placa de Vídeo",
    preco: "R$ 4.500 - R$ 6.000",
    info: "<strong>Memória:</strong> 24GB GDDR6X<br><strong>Núcleos CUDA:</strong> 10496<br><strong>Consumo:</strong> 420W<br><strong>Ideal para:</strong> Workstation profissional, renderização 3D, IA"
  },
  "Nvidia RTX 3080": {
    categoria: "Placa de Vídeo",
    preco: "R$ 3.500 - R$ 4.500",
    info: "<strong>Memória:</strong> 10GB GDDR6X<br><strong>Núcleos CUDA:</strong> 8704<br><strong>Consumo:</strong> 320W<br><strong>Ideal para:</strong> Jogos 4K, edição profissional"
  },
  "Nvidia RTX 3070": {
    categoria: "Placa de Vídeo",
    preco: "R$ 2.500 - R$ 3.500",
    info: "<strong>Memória:</strong> 8GB GDDR6<br><strong>Núcleos CUDA:</strong> 5888<br><strong>Consumo:</strong> 220W<br><strong>Ideal para:</strong> Jogos 1440p/4K, edição 4K"
  },
  "Nvidia RTX 3060 Ti": {
    categoria: "Placa de Vídeo",
    preco: "R$ 2.000 - R$ 2.800",
    info: "<strong>Memória:</strong> 8GB GDDR6<br><strong>Núcleos CUDA:</strong> 4864<br><strong>Consumo:</strong> 210W<br><strong>Ideal para:</strong> Jogos 1440p, edição intermediária"
  },
  "Nvidia RTX 3060": {
    categoria: "Placa de Vídeo",
    preco: "R$ 1.500 - R$ 2.000",
    info: "<strong>Memória:</strong> 12GB GDDR6<br><strong>Núcleos CUDA:</strong> 3584<br><strong>Consumo:</strong> 170W<br><strong>Ideal para:</strong> Jogos 1080p/1440p, edição leve, ray tracing"
  },
  "Nvidia GTX 1660": {
    categoria: "Placa de Vídeo",
    preco: "R$ 800 - R$ 1.200",
    info: "<strong>Memória:</strong> 6GB GDDR6<br><strong>Núcleos CUDA:</strong> 1408<br><strong>Consumo:</strong> 125W<br><strong>Ideal para:</strong> Jogos 1080p, uso geral, economia"
  },
  "AMD RX 7900 XTX": {
    categoria: "Placa de Vídeo",
    preco: "R$ 5.000 - R$ 7.000",
    info: "<strong>Memória:</strong> 24GB GDDR6<br><strong>Processadores de Fluxo:</strong> 6144<br><strong>Consumo:</strong> 420W<br><strong>Ideal para:</strong> Jogos 4K, workstation, edição profissional"
  },
  "AMD RX 7900 XT": {
    categoria: "Placa de Vídeo",
    preco: "R$ 4.000 - R$ 5.500",
    info: "<strong>Memória:</strong> 20GB GDDR6<br><strong>Processadores de Fluxo:</strong> 5376<br><strong>Consumo:</strong> 380W<br><strong>Ideal para:</strong> Jogos 4K, edição 4K"
  },
  "AMD RX 7900": {
    categoria: "Placa de Vídeo",
    preco: "R$ 3.500 - R$ 4.500",
    info: "<strong>Memória:</strong> 24GB GDDR6<br><strong>Processadores de Fluxo:</strong> 5120<br><strong>Consumo:</strong> 300W<br><strong>VRAM Dupla:</strong> Ótima para edição/IA<br><strong>Ideal para:</strong> Jogos 4K, estação de trabalho, IA"
  },
  "AMD RX 7800 XT": {
    categoria: "Placa de Vídeo",
    preco: "R$ 2.800 - R$ 3.800",
    info: "<strong>Memória:</strong> 16GB GDDR6<br><strong>Processadores de Fluxo:</strong> 3840<br><strong>Consumo:</strong> 310W<br><strong>Ideal para:</strong> Jogos 1440p/4K, custo-benefício excelente"
  },
  "AMD RX 7700 XT": {
    categoria: "Placa de Vídeo",
    preco: "R$ 2.000 - R$ 2.800",
    info: "<strong>Memória:</strong> 12GB GDDR6<br><strong>Processadores de Fluxo:</strong> 2560<br><strong>Consumo:</strong> 250W<br><strong>Ideal para:</strong> Jogos 1440p, edição intermediária"
  },
  "AMD RX 7600": {
    categoria: "Placa de Vídeo",
    preco: "R$ 1.000 - R$ 1.500",
    info: "<strong>Memória:</strong> 16GB GDDR6<br><strong>Processadores de Fluxo:</strong> 2048<br><strong>Consumo:</strong> 170W<br><strong>Ideal para:</strong> Jogos 1080p/1440p, custo-benefício"
  },
  "AMD RX 6900 XT": {
    categoria: "Placa de Vídeo",
    preco: "R$ 3.500 - R$ 4.500",
    info: "<strong>Memória:</strong> 16GB GDDR6<br><strong>Processadores de Fluxo:</strong> 5120<br><strong>Consumo:</strong> 405W<br><strong>Ideal para:</strong> Jogos 4K, workstation"
  },
  "AMD RX 6800 XT": {
    categoria: "Placa de Vídeo",
    preco: "R$ 2.500 - R$ 3.500",
    info: "<strong>Memória:</strong> 16GB GDDR6<br><strong>Processadores de Fluxo:</strong> 4608<br><strong>Consumo:</strong> 350W<br><strong>Ideal para:</strong> Jogos 1440p/4K"
  },
  "AMD RX 6700 XT": {
    categoria: "Placa de Vídeo",
    preco: "R$ 1.800 - R$ 2.400",
    info: "<strong>Memória:</strong> 12GB GDDR6<br><strong>Processadores de Fluxo:</strong> 2304<br><strong>Consumo:</strong> 250W<br><strong>Ideal para:</strong> Jogos 1440p, edição intermediária"
  },
  "AMD RX 6700": {
    categoria: "Placa de Vídeo",
    preco: "R$ 1.800 - R$ 2.400",
    info: "<strong>Memória:</strong> 12GB GDDR6<br><strong>Processadores de Fluxo:</strong> 2304<br><strong>Consumo:</strong> 170W<br><strong>Ideal para:</strong> Jogos 1440p, alternativa AMD"
  },
  "AMD RX 6600": {
    categoria: "Placa de Vídeo",
    preco: "R$ 1.000 - R$ 1.500",
    info: "<strong>Memória:</strong> 8GB GDDR6<br><strong>Processadores de Fluxo:</strong> 1792<br><strong>Consumo:</strong> 150W<br><strong>Ideal para:</strong> Jogos 1080p/1440p, custo-benefício"
  },
  "AMD RX 580": {
    categoria: "Placa de Vídeo",
    preco: "R$ 400 - R$ 700",
    info: "<strong>Memória:</strong> 4GB/8GB GDDR5<br><strong>Processadores de Fluxo:</strong> 2304<br><strong>Consumo:</strong> 185W<br><strong>Ideal para:</strong> Jogos 1080p, GPU antiga mas ainda capaz"
  },
  "AMD RX 550": {
    categoria: "Placa de Vídeo",
    preco: "R$ 300 - R$ 500",
    info: "<strong>Memória:</strong> 2GB/4GB GDDR5<br><strong>Processadores de Fluxo:</strong> 640<br><strong>Consumo:</strong> 150W<br><strong>Ideal para:</strong> Uso geral, desktops básicos, economia máxima"
  },
  
  // SSD
  "SATA 1TB": {
    categoria: "Armazenamento",
    preco: "R$ 250 - R$ 350",
    info: "<strong>Interface:</strong> SATA III<br><strong>Capacidade:</strong> 1TB<br><strong>Velocidade:</strong> ~550 MB/s<br><strong>Ideal para:</strong> Armazenamento secundário, arquivos"
  },
  "SATA 2TB": {
    categoria: "Armazenamento",
    preco: "R$ 400 - R$ 600",
    info: "<strong>Interface:</strong> SATA III<br><strong>Capacidade:</strong> 2TB<br><strong>Velocidade:</strong> ~550 MB/s<br><strong>Ideal para:</strong> Cópia de segurança, biblioteca de jogos"
  },
  "NVMe 500GB": {
    categoria: "Armazenamento",
    preco: "R$ 250 - R$ 400",
    info: "<strong>Interface:</strong> NVMe (M.2)<br><strong>Capacidade:</strong> 500GB<br><strong>Velocidade:</strong> ~3500-7000 MB/s<br><strong>Ideal para:</strong> Sistema operacional + programas essenciais"
  },
  "NVMe 1TB": {
    categoria: "Armazenamento",
    preco: "R$ 400 - R$ 650",
    info: "<strong>Interface:</strong> NVMe (M.2)<br><strong>Capacidade:</strong> 1TB<br><strong>Velocidade:</strong> ~3500-7000 MB/s<br><strong>Ideal para:</strong> Sistema operacional, programas e jogos"
  },
  
  // Fonte
  "550W": {
    categoria: "Fonte",
    preco: "R$ 300 - R$ 450",
    info: "<strong>Potência:</strong> 550W<br><strong>Recomendado para:</strong> i5/Ryzen 5 + RTX 3060<br><strong>Eficiência:</strong> 80+ Bronze mínimo<br><strong>Ideal para:</strong> Build entrada gaming"
  },
  "650W": {
    categoria: "Fonte",
    preco: "R$ 400 - R$ 600",
    info: "<strong>Potência:</strong> 650W<br><strong>Recomendado para:</strong> i7/Ryzen 7 + RTX 3070<br><strong>Eficiência:</strong> 80+ Gold recomendado<br><strong>Ideal para:</strong> Build intermediária gaming"
  },
  "750W": {
    categoria: "Fonte",
    preco: "R$ 500 - R$ 750",
    info: "<strong>Potência:</strong> 750W<br><strong>Recomendado para:</strong> i7/Ryzen 7 + RTX 4070<br><strong>Eficiência:</strong> 80+ Gold/Platina<br><strong>Ideal para:</strong> Build gaming 1440p/4K"
  },
  "850W": {
    categoria: "Fonte",
    preco: "R$ 650 - R$ 1.000",
    info: "<strong>Potência:</strong> 850W<br><strong>Recomendado para:</strong> i9/Ryzen 9 + RTX 4090<br><strong>Eficiência:</strong> 80+ Platina/Titânio<br><strong>Ideal para:</strong> Build topo de linha ou à prova de futuro"
  },
  
  // Fans
  "Cooler Master SickleFlow": {
    categoria: "Ventilador",
    preco: "R$ 50 - R$ 80",
    info: "<strong>Tamanho:</strong> 120mm<br><strong>RPM:</strong> 2000 RPM<br><strong>RGB:</strong> Sim<br><strong>Ruído:</strong> ~25 dB(A)<br><strong>Ideal para:</strong> Refrigeração com estilo RGB"
  },
  "Corsair AF120": {
    categoria: "Ventilador",
    preco: "R$ 80 - R$ 120",
    info: "<strong>Tamanho:</strong> 120mm<br><strong>RPM:</strong> 2400 RPM<br><strong>ARGB:</strong> Sim (controlável)<br><strong>Fluxo de ar:</strong> 52.19 CFM<br><strong>Ideal para:</strong> Dissipação eficiente com ARGB"
  },
  "Redragon Frost Hunter": {
    categoria: "Ventilador",
    preco: "R$ 40 - R$ 70",
    info: "<strong>Tamanho:</strong> 120mm<br><strong>RPM:</strong> 1500 RPM<br><strong>RGB:</strong> Sim<br><strong>Ruído:</strong> ~22 dB(A)<br><strong>Ideal para:</strong> Silencioso e eficiente"
  },
  "Rise Mode Storm": {
    categoria: "Ventilador",
    preco: "R$ 35 - R$ 60",
    info: "<strong>Tamanho:</strong> 120mm<br><strong>RPM:</strong> 2000 RPM<br><strong>RGB:</strong> Sim<br><strong>Ideal para:</strong> Custo-benefício brasileiro"
  },
  
  // Gabinetes
  "Gabinete Gamer Rise Mode Glass": {
    categoria: "Gabinete",
    preco: "R$ 250 - R$ 400",
    info: "<strong>Formatos:</strong> ATX, Micro-ATX<br><strong>Lateral:</strong> Vidro temperado<br><strong>Ventiladores:</strong> 2x 120mm pré-instalados<br><strong>Espaço GPU:</strong> ~350mm<br><strong>Ideal para:</strong> Build gaming com visual"
  },
  "Gabinete Redragon Wheel Jack": {
    categoria: "Gabinete",
    preco: "R$ 300 - R$ 450",
    info: "<strong>Formatos:</strong> ATX, Micro-ATX, Mini-ITX<br><strong>Lateral:</strong> Vidro temperado<br><strong>Ventiladores:</strong> 2x 120mm pré-instalados<br><strong>Espaço GPU:</strong> ~320mm<br><strong>Versatilidade:</strong> Suporta múltiplos formatos<br><strong>Ideal para:</strong> Build compacta e versátil"
  },
  "Gabinete NZXT H510": {
    categoria: "Gabinete",
    preco: "R$ 350 - R$ 500",
    info: "<strong>Formatos:</strong> ATX, Micro-ATX, Mini-ITX<br><strong>Lateral:</strong> Vidro temperado<br><strong>Ventiladores:</strong> 2x 120mm pré-instalados<br><strong>Espaço GPU:</strong> ~330mm<br><strong>Design:</strong> Minimalista premium<br><strong>Ideal para:</strong> Build limpa e profissional"
  },
  "Gabinete Cooler Master MB511": {
    categoria: "Gabinete",
    preco: "R$ 280 - R$ 420",
    info: "<strong>Formatos:</strong> ATX, Micro-ATX<br><strong>Lateral:</strong> Vidro temperado<br><strong>Ventiladores:</strong> 2x 120mm pré-instalados<br><strong>Espaço GPU:</strong> ~370mm<br><strong>Compatibilidade:</strong> Excelente para coolers grandes<br><strong>Ideal para:</strong> Build com cooler topo de linha"
  },
  "Lian Li Lancool II": {
    categoria: "Gabinete",
    preco: "R$ 400 - R$ 600",
    info: "<strong>Formatos:</strong> ATX, Micro-ATX<br><strong>Lateral:</strong> Vidro temperado<br><strong>Ventiladores:</strong> 2x 120mm pré-instalados<br><strong>Espaço GPU:</strong> ~380mm<br><strong>Fluxo de ar:</strong> Excelente com suporte 3x ventiladores<br><strong>Ideal para:</strong> Build high-end com bom resfriamento"
  },
  "Cooler Master MasterBox MB520": {
    categoria: "Gabinete",
    preco: "R$ 300 - R$ 450",
    info: "<strong>Formatos:</strong> ATX, Micro-ATX, Mini-ITX<br><strong>Lateral:</strong> Vidro temperado<br><strong>Ventiladores:</strong> 2x 120mm pré-instalados<br><strong>Espaço GPU:</strong> ~370mm<br><strong>Compatibilidade:</strong> Suporta múltiplos formatos<br><strong>Ideal para:</strong> Build versátil com bom espaço"
  },
  "Corsair iCUE 4000X": {
    categoria: "Gabinete",
    preco: "R$ 450 - R$ 650",
    info: "<strong>Formatos:</strong> ATX, Micro-ATX, Mini-ITX<br><strong>Lateral:</strong> Vidro temperado<br><strong>Ventiladores:</strong> 3x 120mm pré-instalados com RGB<br><strong>Espaço GPU:</strong> ~360mm<br><strong>Integração:</strong> Compatível com ecosistema Corsair iCUE<br><strong>Ideal para:</strong> Build RGB gaming premium"
  }
};

// Elementos DOM
const modal = document.getElementById('modal');
const modalTitulo = document.getElementById('modal-titulo');
const modalDescricao = document.getElementById('modal-descricao');
const closeBtn = document.querySelector('.close');

// Seleciona todos os cards
const cards = document.querySelectorAll('.card');

// Abre o modal ao clicar no card
cards.forEach(card => {
  card.addEventListener('click', () => {
    const titulo = card.querySelector('h4').textContent;
    
    if (infosPecas[titulo]) {
      const info = infosPecas[titulo];
      modalTitulo.textContent = titulo;
      let conteudo = `<strong>${info.categoria}</strong><br>`;
      if (info.preco) {
        conteudo += `<strong>Preço médio:</strong> ${info.preco}<br>`;
      }
      conteudo += `<br>${info.info}`;
      modalDescricao.innerHTML = conteudo;
      modal.style.display = 'block';
    }
  });
});

// Fecha o modal ao clicar no X
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Fecha o modal ao clicar fora dele
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

// Suporte para fechar com tecla ESC
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    modal.style.display = 'none';
  }
});
