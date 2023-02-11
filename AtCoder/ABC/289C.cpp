#include <bits/stdc++.h>
using namespace std;
using ll = long long;
#define rep(i, n) for (int i = 1; i <= (int)(n); i++)

int main()
{
    int n, m;
    cin >> n >> m;

    int s[m + 1][19];
    int c[m + 1];

    rep(i, m)
    {
        cin >> c[i];
        rep(j, c[i])
        {
            cin >> s[i][j];
        }
    }
    int ans = 0;
    vector<bool> selected(n + 1, false);
    for (int j = 0; j < (1 << m); j++)
    {
        rep(i, m)
        {
            if ((j >> i) & 1)
            {
                rep(i, n)
                {
                    selected[s[j][i]] = true;
                }
            }
        }
        bool allselected = true;

        rep(i, n)
        {
            if (selected[i] == false)
            {
                allselected = false;
            }
        }
        if (allselected)
        {
            ans++;
        }
    }
    cout << ans << endl;
    return 0;
}