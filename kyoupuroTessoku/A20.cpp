#include <bits/stdc++.h>
using namespace std;
using ll = long long;

int main()
{
    int n, m;
    string s, t;

    cin >> s >> t;

    n = s.size();
    m = t.size();

    ll dp[n + 1][m + 1];
    dp[0][0] = 0;

    for (int i = 0; i <= n; i++)
    {
        for (int j = 0; j <= m; j++)
        {
            if (i >= 1 && j >= 1 && s[i - 1] == t[j - 1])
            {
                dp[i][j] = max({dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1] + 1});
            }
            else if (i >= 1 && j >= 1)
            {
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]);
            }
            else if (i >= 1)
            {
                dp[i][j] = dp[i - 1][j];
            }
            else if (j >= 1)
            {
                dp[i][j] = dp[i][j - 1];
            }
        }
    }

    cout << dp[n][m] << endl;
    return 0;
}