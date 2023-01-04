#include <bits/stdc++.h>
using namespace std;
int main()
{
    bitset<4> S;
    S.set(0, 1); // 0番目のビットを1にする ビット列は右から数える！
    cout << S << endl;

    if (S.test(3))
    {
        cout << "4th bit is 1" << endl;
    }
    else
    {
        cout << "4th bit is 0" << endl;
    }
}
