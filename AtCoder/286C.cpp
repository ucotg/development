#include <bits/stdc++.h>
using namespace std;
using ll = long long;

int main()
{
    ll n, a, b;
    ll ans1 = 0, ans2 = 0;
    cin >> n >> a >> b;
    string s;
    cin >> s;

    char s2[n + 1];

    for (int i = 1; i <= n; i++)
    {
        s2[i] = s[i - 1];
    }

    for (ll i = 1; i <= n; i++)
    {
        if (s2[i] == s2[i + 1])
        {
            ans1 += a * (i + 1);
            ans1 += b * () break;
        }
    }

    for (ll j = 1; j <= n / 2; j++)
    {
        if (s2[j] != s2[n + 1 - j])
        {
            ans2 += b;
        }
    }

    // for (int i = 0; i < n; i++)
    // {
    //     cout << s[i] << endl;
    // }

    cout << min(ans1, ans2) << endl;
}