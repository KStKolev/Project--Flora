﻿namespace Flora.Data.Entities
{
    using System.ComponentModel.DataAnnotations;
    public class User
    {
        public User()
        {
            Id = Guid.NewGuid();
        }

        [Key]
        public Guid Id { get; set; }

        [Required]
        public string Username { get; set; } = string.Empty;

        public string Email { get; set; } = string.Empty;

        public byte[] Image { get; set; } = null!;

        public List<Article> Articles { get; set; } = 
            new List<Article>();
    }
}
