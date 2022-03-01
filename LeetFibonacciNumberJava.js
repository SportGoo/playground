// class Solution {
    // fib = 0, 1, 2, 3, 4, 5, ..., N
    // ans = 0, 1, 1, 2, 3, 5, ..., ?

    // fib(2) = fib(2-1) + fib(2-2)
    // fib(2) = fib(1) + fib(0)
    //        =   1 + 0 = 1

    /*
                    fib(4) = fib(3) + fib(2)
                /          \
            fib(3)=2 done     fib(2)
             /   \            2 is in cache!
       fib(2)=1 + fib(1)=1  
        /    \
  fib(1)=1 + fib(0)=0
       
       time: O(N), n=4 -> 2^4 = 16
       space: O(N)
    */
//     Map<Integer, Integer> cache = new HashMap<>();
//     // key: N, value: fib(N) answer
//     public int fib(int n) {
//         // base case: we already know the answer for n
//         if (n == 0 || n == 1)
//             return n;

//         // base case: already solved answer for n
//         if (cache.containsKey(n))
//             return cache.get(n);

//         // we need to calculate the answer
//         int answer = fib(n - 1) + fib(n - 2);

//         // store this answer for n
//         cache.put(n, answer);

//         return answer;
//     }
// }