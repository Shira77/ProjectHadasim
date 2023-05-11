// See https://aka.ms/new-console-template for more information
using System;
using System.Reflection.Metadata;


class Program
{
    public static void rectangleArea(float width, float height)
    {
        Console.WriteLine("The area of the rectangle is: " + (width * height));
    }
    public static void rectanglePerimeter(float width, float height)
    {
        Console.WriteLine("The perimeter of the rectangle is: " + ((width * 2) + (height * 2)));
    }
    public static void trianglePerimeter(float width, float height)
    {
        double side = Math.Sqrt(Math.Pow((width / 2), 2) + Math.Pow(height, 2));
        Console.WriteLine("The perimeter of the rectangle is: " + ((side * 2) + width));
    }
    public static void trianglePrint(float width, float height)
    {
        int num = 3;
        int sum = 0;
        int repeat;
        float first = 0;
        int sumRepeat = 0;
        for (int i = 3; i <= width - 2; i = i + 2)
        {
            sum++;
        }
        repeat = (int)(height-2) / sum;
        first = (height-2) % sum;
        for (int i = 0; i < width/2-1; i++)
        {
            Console.Write(" ");
        }
        Console.WriteLine("*");
        for (int i = 0; i < height - 2; i++)
        {
          
            while (first > 0)
            {
                for (int l = 0; l < (width - 3) / 2; l++)
                {
                    Console.Write(" ");
                }
                for (int j = 0; j < 3; j++)
                    Console.Write("*");
                Console.WriteLine("");
                first--;
                i++;
            }
            for (int l = 0; l < (width - num) / 2; l++)
            {
                Console.Write(" ");
            }
            for (int j = 0; j < num; j++)
                Console.Write("*");
            Console.WriteLine("");
            sumRepeat++;
            if (sumRepeat == repeat)
            {
                sumRepeat = 0;
                num += 2;
            }
        }
        for (int j = 0; j < width; j++)
            Console.Write("*");
        Console.WriteLine("");
    }
    public static void Main(string[] args)
    {
        Console.WriteLine("click 1 to rectangular tower");
        Console.WriteLine("click 2 to triangle tower");
        Console.WriteLine("click 3 to exit");

        int choice = int.Parse(Console.ReadLine());
        int triangleChoice;
        float width;
        float height;
        while (choice != 3)
        {
            switch (choice)
            {
                case 1:
                    Console.WriteLine("Please enter the width");
                    width = float.Parse(Console.ReadLine());
                    Console.WriteLine("Please enter the height");
                    height = float.Parse(Console.ReadLine());
                    if (Math.Abs(width - height) > 5)
                        rectangleArea(width, height);
                    else
                        rectanglePerimeter(width, height);
                    break;
                case 2:
                    Console.WriteLine("Please enter the width");
                    width = float.Parse(Console.ReadLine());
                    Console.WriteLine("Please enter the height");
                    height = float.Parse(Console.ReadLine());
                    Console.WriteLine("click 1 To calculate the perimeter of the tower");
                    Console.WriteLine("click 2 for printing");
                    triangleChoice = int.Parse(Console.ReadLine());
                    switch (triangleChoice)
                    {
                        case 1:
                            trianglePerimeter(width, height);
                            break;
                        case 2:
                            if (width%2==0||width>(height*2))
                                Console.WriteLine("Unable to print a triangle");
                            trianglePrint(width, height);
                            break;
                        default:
                            break;
                    }
                    break;
                default:
                    break;
            }
            Console.WriteLine("click 1 to rectangular tower");
            Console.WriteLine("click 2 to triangle tower");
            Console.WriteLine("click 3 to exit");
            choice = int.Parse(Console.ReadLine());

        }

    }
}

