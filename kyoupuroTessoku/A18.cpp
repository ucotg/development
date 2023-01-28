#include <bits/stdc++.h>
using namespace std;
using ll = long long;

int main()
{
    int n, s;
    cin >> n >> s;
    int a[n + 1];
    bool dp[n + 1][s + 1];

    for (int i = 1; i <= n; i++)
    {
        cin >> a[i];
    }

    dp[0][0] = true;
    for (int i = 1; i <= s; i++)
    {
        dp[0][i] = false;
    }

    for (int i = 1; i <= n; i++)
    {
        for (int j = 0; j <= s; j++)
        {
            if (j < a[i])
            {
                if (dp[i - 1][j])
                {
                    dp[i][j] = true;
                }
                else
                {
                    dp[i][j] = false;
                }
            }
            if (j >= a[i])
            {
                if (dp[i - 1][j] || dp[i - 1][j - a[i]])
                {
                    dp[i][j] = true;
                }
                else
                {
                    dp[i][j] = false;
                }
            }
        }
    }

    if (dp[n][s])
    {
        cout << "Yes" << endl;
    }
    else
    {
        cout << "No" << endl;
    }
}