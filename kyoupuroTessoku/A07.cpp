#include <bits/stdc++.h>
using namespace std;

int main()
{
    int d, n;
    cin >> d >> n;
    vector<int> parts(d, 0);

    for (int i = 0; i < n; i++)
    {
        int l, r;
        cin >> l >> r;
        for (int j = l - 1; j < r; j++)
        {
            parts[j]++;
        }
    }

    for (int i = 0; i < d; i++)
    {
        cout << parts[i] << endl;
    }
}