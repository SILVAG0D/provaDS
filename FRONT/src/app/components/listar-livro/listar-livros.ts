import { Component, OnInit } from "@angular/core";
import { Livro } from "src/app/models/livro";
import { LivroService } from "src/app/services/livro.service";

@Component({
  selector: 'app-listar-livro',
  templateUrl: "./listar-filme.component.html",
  styleUrls: ["./listar-filme.component.css"],
})
export class ListarFilmeComponent implements OnInit {
  filmes: Filme[] = [];

  constructor(private service: FilmeService) {}

  ngOnInit(): void {
      this.service.list().subscribe((filmes) => {
          this.filmes = filmes;
          console.log(filmes);
      });
  }

}