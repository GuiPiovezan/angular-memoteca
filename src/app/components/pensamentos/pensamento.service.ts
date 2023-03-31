import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Pensamento } from './pensamento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  private readonly basePath = 'http://localhost:3000/pensamentos';

  constructor(private http: HttpClient) { }

  listar(): Observable<Pensamento[]> {
    return this.http.get<Pensamento[]>(this.basePath);
  }

  salvar(pensamento: Pensamento): Observable<Pensamento> {
    return this.http.post<Pensamento>(this.basePath, pensamento);
  }

  editar(pensamento: Pensamento):Observable<Pensamento> {
    const url = `${this.basePath}/${pensamento.id}`;
    return this.http.put<Pensamento>(url, pensamento);
  }

  excluir(id: number):Observable<Pensamento> {
    const url = `${this.basePath}/${id}`;
    return this.http.delete<Pensamento>(url);
  }

  buscarPorId(id: number): Observable<Pensamento>{
    const url = `${this.basePath}/${id}`;
    return this.http.get<Pensamento>(url);
  }
}
