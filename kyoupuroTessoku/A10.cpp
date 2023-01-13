#include <bits/stdc++.h>
using namespace std;

int main()
{
    int n, d;
    cin >> n;

    int a[100009], lmax[100009], rmax[100009];
    for (int i = 1; i <= n; i++)
    {
        cin >> a[i];
    }

    cin >> d;

    lmax[1] = a[1];
    rmax[n] = a[n];
    for (int j = 2; j <= n; j++)
    {
        lmax[j] = max(a[j], lmax[j - 1]);
    }
    for (int j = n - 1; j >= 1; j--)
    {
        rmax[j] = max(a[j], rmax[j + 1]);
    }

    for (int i = 0; i < d; i++)
    {
        int l, r;
        cin >> l >> r;
        cout << max(lmax[l - 1], rmax[r + 1]) << endl;
    }
}