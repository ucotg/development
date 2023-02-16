#include <bits/stdc++.h>
using namespace std;
using ll = long long;

int main()
{
    int n;
    cin >> n;
    bool deleted[n + 1];

    for (int i = 1; i <= n; i++)
    {
        deleted[i] = false;
    }

    for (int i = 2; i * i <= n; i++)
    {
        if (deleted[i])
        {
            continue;
        }
        for (int j = i * 2; j <= n; j += i)
        {
            deleted[j] = true;
        }
    }

    for (int i = 2; i <= n; i++)
    {
        if (deleted[i] == false)
        {
            cout << i << endl;
        }
    }

    return 0;
}