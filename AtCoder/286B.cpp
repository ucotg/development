#include <bits/stdc++.h>
using namespace std;
using ll = long long;

int main()
{
    int n;
    cin >> n;
    string s;
    cin >> s;

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