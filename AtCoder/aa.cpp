#include <bits/stdc++.h>
using namespace std;

int n;

int main()
{
    cin >> n;

    int digits[7];
    int a = 100000;

    // for (int i = 1; i <= 9; i++)
    // {
    //     cout << digits[i] << endl;
    // }

    for (int i = 0; i < n; i++)
    {
        int tmp = a;
        for (int i = 6; i >= 1; i--)
        {
            digits[i] = tmp % 10;
            tmp /= 10;
        }
        a++;
    }

    cout << digits[1] << digits[1] << digits[2] << digits[3] << digits[4] << digits[4] << digits[5] << digits[6] << digits[5] << endl;
}