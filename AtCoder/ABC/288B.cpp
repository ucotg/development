#include <bits/stdc++.h>
using namespace std;
using ll = long long;

int main()
{
    int n, k;
    cin >> n >> k;
    vector<string> s(n + 1);
    vector<string> s2(k);
    for (int i = 1; i <= n; i++)
    {
        cin >> s[i];
    }

    for (int i = 0; i < k; i++)
    {
        s2[i] = s2[i + 1];
    }

    sort(s2.begin(), s2.end());

    for (int i = 0; i < k; i++)
    {
        cout << s2[i] << endl;
    }
}