#include <bits/stdc++.h>
using namespace std;

int n;

double f(double x)
{
    return x * x * x + x;
}

int main()
{
    cin >> n;

    double left = 0, right = 100, mid = 0; // 探索範囲

    while (abs(f(mid) - n) >= 0.001)
    {
        mid = (left + right) / 2.0;
        if (f(mid) > n * 1.0)
        {
            right = mid;
        }
        else
        {
            left = mid;
        }
    }

    cout << mid << endl;
    return 0;
}