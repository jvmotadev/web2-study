import { Injectable } from '@angular/core';
import { Pessoa } from '../shared/models/pessoa.model';

const LS_CHAVE = "pessoas";

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  
  constructor () { }
    listarTodos(): Pessoa [] {
      const pessoas = localStorage[LS_CHAVE];
      
      return pessoas ? JSON.parse(pessoas) : []; 
    }

    inserir(pessoa:Pessoa): void {
      const pessoas = this.listarTodos();

      pessoa.id = new Date().getTime();

      pessoas.push(pessoa);

      localStorage[LS_CHAVE] = JSON.stringify(pessoas);
    }

    buscarPorId(id: number): Pessoa | undefined {
      const pessoas = this.listarTodos();

      return pessoas.find(pessoa => pessoa.id === id);
    }
}
