#include <bits/stdc++.h>
using namespace std;
using ll = long long;

int main()
{
    int n;
    cin >> n;
    string s;
    cin >> s;

    // char strings[n + 1];
    // for (int i = 1; i <= n; i++)
    // {
    //     strings[i] = s[i - 1];
    // }

    // for (int i = 1; i <= n; i++)
    // {
    //     cout << strings[i] << endl;
    // }

    for (int i = 1; i < n; i++)
    {
        int l = 0;
        for (int j = 1; j < n; j++)
        {
            if (s[j - 1] == s[j - 1 + i] || j > n - i)
            {
                break;
            }
            l++;
        }
        cout << l << endl;
    }

    return 0;
}