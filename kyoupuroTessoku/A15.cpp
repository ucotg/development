#include <bits/stdc++.h>
using namespace std;
using ll = long long;

int n;

int main()
{
    cin >> n;
    ll a[n + 1], b[n + 1];

    for (int i = 1; i <= n; i++)
    {
        cin >> a[i];
    }

    vector<int> x;
    for (int i = 1; i <= n; i++)
    {
        x.push_back(a[i]);
    }

    sort(x.begin(), x.end());

    x.erase(unique(x.begin(), x.end()), x.end());

    for (int i = 1; i <= n; i++)
    {
        b[i] = lower_bound(x.begin(), x.end(), a[i]) - x.begin();
        b[i]++;
    }

    for (int i = 1; i <= n; i++)
    {
        if (i >= 2)
        {
            cout << " ";
        }
        cout << b[i];
    }
    cout << endl;
    return 0;
}