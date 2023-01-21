#include <bits/stdc++.h>
using namespace std;
using ll = long long;

int main()
{
    int n, x;
    cin >> n >> x;
    int a[n + 1], b[n + 1];
    for (int i = 1; i <= n; i++)
    {
        cin >> a[i] >> b[i];
    }

    // for (int i = 0; i < n; i++)
    // {
    //     cout << s[i] << endl;
    // }

    for (int i = 0; i < n; i++)
    {
        cout << s[i];
        if (s[i] == 'n' && s[i + 1] == 'a')
        {
            cout << 'y';
        }
    }
    cout << endl;
}