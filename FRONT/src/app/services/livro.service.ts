import { Livro } from './../models/livro';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable({
    providedIn: "root",
})
export class FilmeService {
    private baseUrl = "http://localhost:5000/api/filme";

    constructor(private http: HttpClient) {}

    list(): Observable<Livro[]> {
        return this.http.get<Livro[]>(`${this.baseUrl}/list`);
    }
    create(Livro: Livro): Observable<Livro> {
        return this.http.post<Livro>(`${this.baseUrl}/create`, Livro);
    }
}
