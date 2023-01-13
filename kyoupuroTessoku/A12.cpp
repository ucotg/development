#include <bits/stdc++.h>
using namespace std;

int n, k, a[100009];

bool check(long long x)
{
    long long sum = 0;
    for (int i = 1; i <= n; i++)
    {
        sum += x / a[i]; // mid秒までにそれぞれのプリンタが何枚印刷したかの総和
    }
    if (sum >= k)
    {
        return true; // 答えがmid以下ならtrue、midより大きいならfalse
    }
    else
    {
        return false;
    }
}

int main()
{
    cin >> n >> k;
    for (int i = 1; i <= n; i++)
    {
        cin >> a[i];
    }

    long long left = 1, right = 1000000000; // 答えの探索範囲(秒)
    while (left < right)
    {
        long long mid = (left + right) / 2;
        bool ans = check(mid);
        if (ans)
        {
            right = mid;
        }
        if (!ans)
        {
            left = mid + 1;
        }
    }

    cout << left << endl;
}