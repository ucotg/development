#include <bits/stdc++.h>
using namespace std;

int n, x, a[100009];

int search(int x)
{
    int l = 0, r = n - 1;
    while (l <= r)
    {
        int m = (l + r) / 2;
        if (x == a[m])
        {
            return m;
        }
        if (x < a[m])
        {
            r--;
        }
        if (x > a[m])
        {
            l++;
        }
    }
}

int main()
{
    cin >> n >> x;

    for (int i = 0; i < n; i++)
    {
        cin >> a[i];
    }

    int ans = search(x);
    cout << ans << endl;

    return 0;
}