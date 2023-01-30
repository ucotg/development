#include <bits/stdc++.h>
using namespace std;
using ll = long long;

int main()
{
    int t;
    cin >> t;

    for (int i = 1; i <= t; i++)
    {
        ll n, k;
        string s;
        cin >> n >> k;
        cin >> s;
        ll length = s.length();
        ll newlength = length + k;
        char splus[newlength + 1];

        for (int i = 1; i <= newlength; i++)
        {
            if (i <= n)
            {
                splus[i] = s[i - 1];
            }
            else
            {
                if (i > (newlength + 1) / 2 && newlength - i + 1 <= n)
                {
                    splus[i] = splus[newlength - i + 1];
                }
                else
                {
                    splus[i] = 'a';
                }
            }
        }

        for (int i = 1; i <= newlength; i++)
        {
            cout << splus[i];
        }
        cout << endl;
    }
}