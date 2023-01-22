#include <bits/stdc++.h>
using namespace std;
using ll = long long;

ll n;
string a, b;

ll swapdigits(ll adigit[], ll bdigit[])
{
    for (int i = 0; i < n; i++)
    {
        if (adigit[i] < bdigit[i])
        {
            int tmp = adigit[i];
            adigit[i] = bdigit[i];
            bdigit[i] = tmp;
        }
    }

    ll returna = 0, returnb = 0;
    for (int i = 0; i < n; i++)
    {
        returna += (adigit[i] * (ll)pow(10, i)) % 998244353;
        returnb += (bdigit[i] * (ll)pow(10, i)) % 998244353;
    }
    returna %= 998244353;
    returnb %= 998244353;

    return (returna * returnb) % 998244353;
}

int main()
{
    cin >> n >> a >> b;
    reverse(a.begin(), a.end());
    reverse(b.begin(), b.end());
    ll adigits[n], bdigits[n];
    for (int i = 0; i < n; i++)
    {
        adigits[i] = int(a[i] - '0');
        bdigits[i] = int(b[i] - '0');
    }
    ll ans = swapdigits(adigits, bdigits);

    cout << ans << endl;
}
