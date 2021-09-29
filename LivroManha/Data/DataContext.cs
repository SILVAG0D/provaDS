using LivroManha.Models;
using Microsoft.EntityFrameworkCore;

namespace LivroManha.Data
{
    public class DataContext : DbContext
    {
        //Constructor
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        //Lista de propriedades que vão virar tabelas no banco
        public DbSet<Livro> Livros { get; set; }
        
    }
}