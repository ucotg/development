#include <bits/stdc++.h>
using namespace std;

int main()
{
    // 3ビットのビット列をすべて列挙する
    for (int tmp = 0; tmp < (1 << 3); tmp++) // 1 << 3は2の3乗
    {
        bitset<3> s(tmp); // bitsetのビット長の指定に変数は使えない
        // ビット列を出力
        cout << s << endl;
    }
}