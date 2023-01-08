#include <bits/stdc++.h>
using namespace std;

int main()
{
    int N;
    cin >> N;
    int ans = 0;

    for (int i = 0; N > 0; i++)
    {
        ans += (N % 10) * (1 << i);
        N /= 10;
    }
    cout << ans << endl;
}