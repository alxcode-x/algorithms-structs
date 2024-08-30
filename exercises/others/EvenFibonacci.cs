using System;
using System.Collections.Generic;
using System.Linq;

class Solution
{
    static void Main(String[] args)
    {
        var matrix = new List<List<int>>()
        {
            new List<int>(){11,2,4},
            new List<int>(){4,5,6},
            new List<int>(){10,8,-12}
        };

        var result = diagonalDifference(matrix);
        Console.WriteLine(result);
    }

    // static long Calculate(long n)
    // {
    //     long sum = 2;
    //     long[] sequence = { 1, 2 };
    //     long previous;

    //     while (sequence[1] + sequence[0] <= n)
    //     {
    //         previous = sequence[1];
    //         sequence[1] = sequence[1] + sequence[0];
    //         sequence[0] = previous;
    //         if (sequence[1] % 2 == 0)
    //             sum += sequence[1];
    //     }

    //     return sum;
    // }

    private static int getSum(List<List<int>> arr)
    {
        var sum = 0;

        for (int i = 0; i < arr.Count; i++)
        {
            for (int j = 0; j < arr.Count; j++)
            {
                if (j == i)
                {
                    sum += arr[i][j];
                    break;
                }
            }
        }

        return sum;
    }

    private static List<List<int>> reverseMatrix(List<List<int>> arr)
    {
        var reversed = new List<List<int>>();
        foreach (var row in arr)
        {
            var newRow = new List<int>(row);
            newRow.Reverse();
            reversed.Add(newRow);
        }

        return reversed;
    }

    public static int diagonalDifference(List<List<int>> arr)
    {
        var diagonalA = getSum(arr);
        var diagonalB = getSum(reverseMatrix(arr));

        return diagonalA - diagonalB;
    }
}