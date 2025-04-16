const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Rectangulo {
  constructor(ancho, altura) {
    this.ancho = ancho;
    this.altura = altura;
  }

  calcularArea() {
    return this.ancho * this.altura;
  }

  calcularPerimetro() {
    return 2 * (this.ancho + this.altura);
  }
}

rl.question('Ingresa el ancho del rectángulo: ', (anchoInput) => {
  rl.question('Ingresa la altura del rectángulo: ', (alturaInput) => {
    const ancho = parseFloat(anchoInput);
    const altura = parseFloat(alturaInput);

    if (isNaN(ancho) || isNaN(altura) || ancho <= 0 || altura <= 0) {
      console.log('Error: Los valores deben de ser numéricos.');
    } else {
      const miRectangulo = new Rectangulo(ancho, altura);
      console.log(`El área del rectángulo es: ${miRectangulo.calcularArea()}`);
      console.log(`El perímetro del rectángulo es: ${miRectangulo.calcularPerimetro()}`);
    }

    rl.close();
  });
});
