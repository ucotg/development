#include <bits/stdc++.h>
using namespace std;
using ll = long long;

int main()
{
    int n;
    cin >> n;

    int a[n + 1], b[n + 1], dp[n + 1];

    for (int i = 1; i < n; i++)
    {
        cin >> a[i];
    }
    for (int i = 1; i < n; i++)
    {
        cin >> b[i];
    }

    dp[1] = 0;
    for (int i = 2; i <= n; i++)
    {
        dp[i] = -1000000000;
    }

    for (int i = 1; i < n; i++)
    {
        dp[a[i]] = max(dp[a[i]], dp[i] + 100);
        dp[b[i]] = max(dp[b[i]], dp[i] + 150);
    }

    cout << dp[n] << endl;
    return 0;
}