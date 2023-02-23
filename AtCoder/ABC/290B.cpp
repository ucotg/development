#include <bits/stdc++.h>
using namespace std;
using ll = long long;

int main()
{
    int n, k;
    cin >> n >> k;

    string s;
    cin >> s;
    int limit = 0;
    char ans[n];

    for (int i = 0; i < n; i++)
    {
        if (s[i] == 'o' && limit < k)
        {
            ans[i] = 'o';
            limit++;
        }
        else
        {
            ans[i] = 'x';
        }
    }

    for (int i = 0; i < n; i++)
    {
        cout << ans[i];
    }
    cout << endl;
    return 0;
}