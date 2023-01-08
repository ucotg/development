#include <bits/stdc++.h>
using namespace std;

int main()
{
    int n, k;
    cin >> n >> k;
    int count = 0;

    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= n; j++)
        {
            int l = k - (i + j);
            if (l >= 1 && l <= n)
            {
                count++;
            }
        }
    }
    cout << count << endl;
}