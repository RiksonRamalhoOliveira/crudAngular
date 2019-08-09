import { Component, OnInit } from '@angular/core';
import { Cliente } from '../shared/cliente';
import { ClienteService} from '../shared/cliente.service';
import { ClienteDataService} from '../shared/cliente-data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit {
  cliente: Cliente;
  key: string = '';

  constructor(private clienteService: ClienteService, private clienteDataService: ClienteDataService) { }

  ngOnInit() {
    this.cliente = new Cliente();
    this.clienteDataService.currentCliente.subscribe(data => {
      if (data.cliente && data.key) {
        this.cliente = new Cliente();
        this.cliente.cnpj = data.cliente.cnpj;
        this.cliente.nome = data.cliente.nome;
        this.cliente.telefone = data.cliente.telefone;
        this.key = data.key;
      }
    });
  }

  enviar() {
    if (this.key) {
      this.clienteService.update(this.cliente, this.key);
    } else {
      console.log('insert');
      this.clienteService.insert(this.cliente);
    }

    this.cliente = new Cliente();
  }
}
