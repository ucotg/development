#include <bits/stdc++.h>
using namespace std;

int main()
{
    int n, a, b;
    cin >> n >> a >> b;
    int sum = 0;

    for (int i = 1; i <= n; i++)
    {
        int tmp;
        if (i < 10)
        {
            if (i <= b && i >= a)
            {
                sum += i;
            }
        }
        else if (i < 100)
        {
            tmp = (i / 10) + (i % 10);
            if (tmp <= b && tmp >= a)
            {
                sum += i;
            }
        }
        else if (i < 1000)
        {
            tmp = (i / 100) + ((i % 100) / 10) + ((i % 100) % 10);
            if (tmp <= b && tmp >= a)
            {
                sum += i;
            }
        }
        else if (i < 10000)
        {
            tmp = (i / 1000) + ((i % 1000) / 100) + (((i % 1000) % 100) / 10) + (((i % 1000) % 100) % 10);
            if (tmp <= b && tmp >= a)
            {
                sum += i;
            }
        }
        else
        {
            if (1 <= b && 1 >= a)
            {
                sum += i;
            }
        }
    }
    cout << sum << endl;
}
/*
桁ごとの総和は繰り返しで処理できる(while文)
int findSumOfDigits(int n) {
  int sum = 0;
  while (n > 0) { // n が 0 になるまで
    sum += n % 10;
    n /= 10;
  }
  return sum;
}
*/