import { Empregado, Medico, Seguranca } from './classes2';
    test('Teste de Medico', () => {
        let medico = new Medico("Dr. Silva", "Cardiologista", 10000);
      expect(medico.nome).toBe("Dr. Silva");
      expect(medico.cargo).toBe("Cardiologista");
      expect(medico.salario).toBe(10000);
    });

    test('Teste alterando Medico ', () => {
        let medico = new Medico("Dr. Silva", "Cardiologista", 10000);
      medico.alterarNome("Dr. Santos");
      medico.alterarcargo("Neurologista");
      medico.alterarsalario(12000);

      expect(medico.nome).toBe("Dr. Santos");
      expect(medico.cargo).toBe("Neurologista");
      expect(medico.salario).toBe(12000);
    });

    test('Teste calculando promoção de medico', () => {
        let medico = new Medico("Dr. Silva", "Cardiologista", 10000);
      const novoSalario = medico.promocao(medico.salario);
      expect(novoSalario).toBe(12000);
    });

    test('Teste de Segurança', () => {
        let seguranca = new Seguranca("João", "Segurança Noturno", 3000);
      expect(seguranca.nome).toBe("João");
      expect(seguranca.cargo).toBe("Segurança Noturno");
      expect(seguranca.salario).toBe(3000);
    });

    test('Teste alterando segurança', () => {
        let seguranca = new Seguranca("João", "Segurança Noturno", 3000);
      seguranca.alterarNome("Pedro");
      seguranca.alterarcargo("Segurança Diurno");
      seguranca.alterarsalario(3500);

      expect(seguranca.nome).toBe("Pedro");
      expect(seguranca.cargo).toBe("Segurança Diurno");
      expect(seguranca.salario).toBe(3500);
    });

    test('Teste promoção do segurança', () => {
        let seguranca = new Seguranca("João", "Segurança Noturno", 3000);
      const novoSalario = seguranca.promocao(15); 
      expect(novoSalario).toBe(6000); 
    });

    test('Testando o Aumento', () => {
        let seguranca = new Seguranca("João", "Segurança Noturno", 3000);
        let medico = new Medico("Dr. Silva", "Cardiologista", 10000);
      Empregado.aplicarAumento(medico, 2000);
      Empregado.aplicarAumento(seguranca, 500);

      expect(medico.salario).toBe(12000);
      expect(seguranca.salario).toBe(3500);
    });

