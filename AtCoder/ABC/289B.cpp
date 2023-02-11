#include <bits/stdc++.h>
using namespace std;
using ll = long long;
#define rep(i, n) for (int i = 1; i <= (int)(n); i++)

int main()
{
    int n, m;
    cin >> n >> m;
    int a[m + 1];

    rep(i, m)
    {
        cin >> a[i];
    }

    int re[n + 1];

    rep(i, n)
    {
        re[i] = 1;
    }

    vector<int> ans(n + 1);

    for (int i = 1, j = 1; i <= n; i = ++j)
    {
        while (re[j])
            j++;
        for (int k = j; k >= i; k--)
            ans.push_back(k);
    }
    for (int i = 0; i < n; i++)
    {
        cout << ans[i] << " \n"[i + 1 == n];
    }
}