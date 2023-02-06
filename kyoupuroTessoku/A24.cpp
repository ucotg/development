#include <bits/stdc++.h>
using namespace std;
using ll = long long;
#define rep(i, n) for (int i = 1; i <= (int)(n); i++)

int main()
{
    int n;
    cin >> n;
    int a[n + 1];

    rep(i, n)
    {
        cin >> a[i];
    }

    int dp[n + 1], l[n + 1], len = 0;

    rep(i, n)
    {
        int pos = lower_bound(l + 1, l + len + 1, a[i]) - l;
        dp[i] = pos;

        l[dp[i]] = a[i];
        if (dp[i] > len)
        {
            len++;
        }
    }

    cout << len << endl;
    return 0;
}