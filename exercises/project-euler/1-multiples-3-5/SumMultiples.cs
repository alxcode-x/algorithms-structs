using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
class Solution {

    static void Main(String[] args) {
        int t = Convert.ToInt32(Console.ReadLine());
        for(int a0 = 0; a0 < t; a0++){
            int n = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine(GetSum(n));
        }
    }
    
    static int GetSum(int n) {
         var sum = 0;
        
        for (var i = 0; i < n; i += 3) {
            sum += i;
        }
        
        for (var i = 0; i < n; i += 5) {
            if (i % 3 != 0){
                sum += i;
            }
        }
        return sum;
    }
}
