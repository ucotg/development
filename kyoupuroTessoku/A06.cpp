#include <bits/stdc++.h>
using namespace std;

int main()
{
    int n, q;
    cin >> n >> q;

    int sum = 0;
    int sums[n + 1];
    sums[0] = 0;

    for (int i = 1; i < n + 1; i++)
    {
        int tmp;
        cin >> tmp;
        sum += tmp;
        sums[i] = sum;
    }

    for (int i = 0; i < q; i++)
    {
        int l, r;
        cin >> l >> r;
        cout << sums[r] - sums[l - 1] << endl;
    }
}