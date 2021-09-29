import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Livro } from "src/app/models/livro";
import { FilmeService } from "src/app/services/livro.service";

@Component({
  selector: 'app-cadastrar-filme',
  templateUrl: "./cadastrar-filme.component.html",
  styleUrls: ["./cadastrar-filme.component.css"],
})
export class CadastrarFilmeComponent implements OnInit {
  nome!: string;
  ano!: number;
  genero!: string;
  editora!: string;

  constructor(private router: Router, private service: FilmeService) {}

  ngOnInit(): void {}

  cadastrar(): void {
      let livro: Livro = {
          nome: this.nome,
          ano: this.ano,
          genero: this.genero,
          editora: this.editora,
      };
      this.service.create(livro).subscribe((livro) => {
          console.log(livro);
          this.router.navigate(["filme/listar"]);
      });
  }

}