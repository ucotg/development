#include <bits/stdc++.h>
using namespace std;
using ll = long long;

int main()
{
    int n, p, q, r, s;
    cin >> n >> p >> q >> r >> s;

    int a[n + 1], b[n + 1];
    for (int i = 1; i <= n; i++)
    {
        cin >> a[i];
    }

    for (int i = 1; i <= n; i++)
    {
        if (i >= p && i <= q)
        {
            b[i] = a[i + (r - p)];
        }
        else if (i >= r && i <= s)
        {
            b[i] = a[i - (r - p)];
        }
        else
        {
            b[i] = a[i];
        }
    }

    for (int i = 1; i <= n; i++)
    {
        if (i >= 2)
        {
            cout << " ";
        }
        cout << b[i];
    }
}