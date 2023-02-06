#include <bits/stdc++.h>
using namespace std;
using ll = long long;
#define rep(i, n) for (int i = 1; i <= (int)(n); i++)

int main()
{
    int h, w;
    cin >> h >> w;

    char routes[h + 1][w + 1];
    ll dp[h + 1][w + 1];
    // マス(1, 1)からマス(i, j)へ移動する方法数の配列dp[i][j]

    rep(i, h)
    {
        rep(j, w)
        {
            cin >> routes[i][j];
        }
    }

    rep(i, h)
    {
        rep(j, w)
        {
            dp[i][j] = 0;
        }
    }
    dp[1][1] = 1;

    rep(i, h)
    {
        rep(j, w)
        {
            if (i >= 2 && routes[i - 1][j] == '.')
            {
                dp[i][j] += dp[i - 1][j];
            }
            if (j >= 2 && routes[i][j - 1] == '.')
            {
                dp[i][j] += dp[i][j - 1];
            }
        }
    }

    cout << dp[h][w] << endl;
    return 0;
}