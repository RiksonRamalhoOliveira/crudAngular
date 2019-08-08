import { Component, OnInit } from '@angular/core';
import { Cliente } from './../shared/cliente';
import { ClienteService } from '../shared/cliente.service';
import { Observable } from 'rxjs';
import { ClienteDataService } from '../shared/cliente-data.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'})
export class ListComponent implements OnInit {
  clientes: Observable<any>;

  constructor(private clienteService: ClienteService, private clienteDataService: ClienteDataService) { }

  ngOnInit() {
    this.clientes = this.clienteService.getAll();
  }

  delete(key: string) {
    this.clienteService.delete(key);
  }

  edit(cliente: Cliente, key: string) {
    this.clienteDataService.changeCliente(cliente, key);
  }
}
