#include <bits/stdc++.h>
using namespace std;

int main()
{
    int d, n;
    cin >> d >> n;
    int ratio[100009], parts[100009];

    for (int i = 1; i <= n; i++)
    {
        int l, r;
        cin >> l >> r;
        ratio[l]++;
        ratio[r + 1]--;
    }

    parts[0] = 0;

    for (int i = 1; i <= d; i++)
    {
        parts[i] = parts[i - 1] + ratio[i];
    }

    for (int i = 1; i <= d; i++)
    {
        cout << parts[i] << endl;
    }
}