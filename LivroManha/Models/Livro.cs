namespace LivroManha.Models
{
    public class Livro
    {
        public int Id{get; set;}
        public string Nome{get; set;}
        public int Ano{get; set;}
        public string Genero{get; set;}
        public string Editora{get; set;}

        public override string ToString() => $"Nome: {Nome} | Genero: {Genero}";
    }
}