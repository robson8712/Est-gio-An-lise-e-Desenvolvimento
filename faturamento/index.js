const fs = require('fs/promises');

(async function () {
  try {
    const faturamento = await fs.readFile('dados.json', 'utf-8');
    const dados = JSON.parse(faturamento);

    let menorFaturamento = Number.MAX_SAFE_INTEGER;
    let maiorFaturamento = Number.MIN_SAFE_INTEGER;

    let totalFaturamento = 0;
    let diasAcimaDaMedia = 0;

    for (const dia of dados) {
      const faturamentoDiario = dia.valor;

      if (faturamentoDiario > 0) {

        if (faturamentoDiario < menorFaturamento) {
          menorFaturamento = faturamentoDiario;
        }
        if (faturamentoDiario > maiorFaturamento) {
          maiorFaturamento = faturamentoDiario;
        }
        totalFaturamento += faturamentoDiario;
      }
    }

    const mediaMensal = totalFaturamento / dados.length;

    for (const dia of dados) {
      const faturamentoDiario = dia.valor;

      if (faturamentoDiario > mediaMensal) {
        diasAcimaDaMedia++;
      }
    }

    console.log(`Menor valor de faturamento diário: ${menorFaturamento.toLocaleString("pt-BR")}`);
    console.log(`Maior valor de faturamento diário: ${maiorFaturamento.toLocaleString("pt-BR")}`);
    console.log(`Número de dias em que o valor de faturamento diário foi superior à média mensal: ${diasAcimaDaMedia.toLocaleString("pt-BR")}`);
  } catch (erro) {
    console.error(erro);
  }
})();
