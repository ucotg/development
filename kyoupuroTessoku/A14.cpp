#include <bits/stdc++.h>
using namespace std;
using ll = long long;

int n, k;

int main()
{
    cin >> n >> k;
    ll a[n + 1], b[n + 1], c[n + 1], d[n + 1];
    ll ab[n * n + 1], cd[n * n + 1];

    for (int i = 1; i <= n; i++)
    {
        cin >> a[i];
    }
    for (int i = 1; i <= n; i++)
    {
        cin >> b[i];
    }
    for (int i = 1; i <= n; i++)
    {
        cin >> c[i];
    }
    for (int i = 1; i <= n; i++)
    {
        cin >> d[i];
    }

    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= n; j++)
        {
            ab[(i - 1) * n + j] = a[i] + b[j];
        }
    }
    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= n; j++)
        {
            cd[(i - 1) * n + j] = c[i] + d[j];
        }
    }

    sort(cd + 1, cd + (n * n) + 1);

    bool exist = false;

    for (int i = 1; i <= n * n; i++)
    {
        ll searchnum = k - ab[i];
        ll pos = lower_bound(cd + 1, cd + (n * n) + 1, searchnum) - cd;
        if (pos <= n * n && cd[pos] == searchnum)
        {
            exist = true;
        }
    }

    if (exist)
    {
        cout << "Yes" << endl;
    }
    else
    {
        cout << "No" << endl;
    }

    return 0;
}