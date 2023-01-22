#include <bits/stdc++.h>
using namespace std;
using ll = long long;

int main()
{
    string s;
    cin >> s;
    ll num = 0;
    int length = s.size();
    char digits[length + 1];

    for (int i = 1; i <= length; i++)
    {
        digits[i] = s[i - 1];
    }

    // for (int i = 1; i <= length; i++)
    // {
    //     cout << digits[i] << endl;
    // }

    for (int i = 1; i <= length; i++)
    {
        int pows = length - i;
        num += ((int)digits[i] - 64) * (ll)pow(26, pows);
    }

    // ll l = 1, r = 10000000000000000;
    // while(l <= r) {
    //     ll mid = (l + r) / 2;
    //     if(num < mid) {
    //         r = mid - 1;
    //     }
    //     if(num == mid) {
    //         break;
    //     }
    //     if(num > mid) {
    //         l = mid + 1;
    //     }
    // }
    cout << num << endl;
}