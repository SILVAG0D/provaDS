using System.Linq;
using LivroManha.Data;
using LivroManha.Models;
using Microsoft.AspNetCore.Mvc;

namespace LivroManha.Controllers
{

    [ApiController]
    [Route("api/livro")]

    public class LivroController : ControllerBase
    {
        private readonly DataContext _context;

        public LivroController(DataContext  context)
        {
            _context = context;
        }

        [HttpPost] 
        [Route("create")]
        public IActionResult Create([FromBody] Livro livro)
        {
            _context.Livros.Add(livro);
            _context.SaveChanges();
            return Created("", livro);
        }

        [HttpGet]
        [Route("list")]
        public IActionResult List() => Ok(_context.Livros.ToList());
    }

}