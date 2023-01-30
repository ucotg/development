#include <bits/stdc++.h>
using namespace std;
using ll = long long;

int main()
{
    ll n, w;
    cin >> n >> w;
    ll weight[n + 1], value[n + 1];
    ll dp[n + 1][w + 1];

    for (int i = 1; i <= n; i++)
    {
        cin >> weight[i] >> value[i];
    }

    dp[0][0] = 0;
    for (int i = 1; i <= w; i++)
    {
        dp[0][i] = -1000000000000000LL;
    }

    for (int i = 1; i <= n; i++)
    {
        for (int j = 0; j <= w; j++)
        {
            if (j < weight[i])
            {
                dp[i][j] = dp[i - 1][j];
            }
            else
            {
                dp[i][j] = max(dp[i - 1][j], dp[i - 1][j - weight[i]] + value[i]);
            }
        }
    }

    ll ans = 0;
    for (int i = 0; i <= w; i++)
    {
        ans = max(ans, dp[n][i]);
    }
    cout << ans << endl;
    return 0;
}