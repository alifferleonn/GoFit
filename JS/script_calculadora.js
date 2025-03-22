function calcularIMC() {
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    if (peso > 0 && altura > 0) {
      let imc = (peso / (altura * altura)).toFixed(2);
      document.getElementById("resultadoIMC").innerText = imc;
    } else {
      document.getElementById("resultadoIMC").innerText = "Dados inválidos";
    }
  }
  
  function calcularProteina() {
    let peso = document.getElementById("pesoProteina").value;
    let fatorAtividade = document.getElementById("nivelAtividade").value;
    if (peso > 0) {
      let proteina = (peso * fatorAtividade).toFixed(2);
      document.getElementById("resultadoProteina").innerText = proteina;
    } else {
      document.getElementById("resultadoProteina").innerText = "Dados inválidos";
    }
  }
  
  function calcularTMB() {
    const sexo = document.getElementById('sexo').value;
    const idade = parseInt(document.getElementById('idade').value);
    const peso = parseFloat(document.getElementById('pesoTMB').value);
    const atividade = parseFloat(document.getElementById('atividade').value);
  
    let tmb = 0;
  
    if (sexo === 'feminino') {
      if (idade <= 3) {
        tmb = (58.317 * peso) - 31.1;
      } else if (idade <= 10) {
        tmb = (20.315 * peso) + 485.9;
      } else if (idade <= 18) {
        tmb = (13.384 * peso) + 692.6;
      } else if (idade <= 30) {
        tmb = (14.818 * peso) + 486.6;
      } else if (idade <= 60) {
        tmb = (8.126 * peso) + 845.6;
      } else {
        tmb = (9.082 * peso) + 658.5;
      }
    } else {
      if (idade <= 3) {
        tmb = (59.512 * peso) - 30.4;
      } else if (idade <= 10) {
        tmb = (22.706 * peso) + 504.3;
      } else if (idade <= 18) {
        tmb = (17.686 * peso) + 658.2;
      } else if (idade <= 30) {
        tmb = (15.057 * peso) + 692.2;
      } else if (idade <= 60) {
        tmb = (11.472 * peso) + 873.1;
      } else {
        tmb = (11.711 * peso) + 587.7;
      }
    }
  
    const gastoCaloricoTotal = tmb * atividade;
    document.getElementById('resultadoTMB').textContent = gastoCaloricoTotal.toFixed(2);
  }
  
  function selecionarCalculadora(tipo) {
    document.querySelectorAll('.calculadora').forEach(calc => calc.style.display = 'none');
    document.getElementById(`calculadora-${tipo}`).style.display = 'block';
    fecharTodasInfos();
  }
  
  function toggleInfo(id) {
    let info = document.getElementById(id);
    let estaAberto = info.style.display === 'block';
    fecharTodasInfos();
    info.style.display = estaAberto ? 'none' : 'block';
  }
  
  function fecharTodasInfos() {
    document.querySelectorAll('.info-aba').forEach(info => info.style.display = 'none');
    document.querySelectorAll('.info-abaProteina').forEach(info => info.style.display = 'none');
  }
  
  function selecionarCalculadora(calculadora) {
     
      document.getElementById("explicacao").style.display = "none";
  
      
      const calculadoras = document.querySelectorAll('.calculadora');
      calculadoras.forEach(calc => calc.style.display = 'none');
  
      
      document.getElementById("calculadora-" + calculadora).style.display = "block";
  }
  
  