using System;
using Aritiafel.Characters.Heroes;

namespace SpareFiles
{
    class Program
    {
        static void Main(string[] args)
        {
            Tina.SaveProject(ProjectChoice.AritiafelJS);            
            Console.WriteLine("Project Files Spared.");
            Console.ReadKey();
        }
    }
}
