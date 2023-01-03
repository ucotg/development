#include <iostream>      // cout, endl, cin
#include <string>        // string, to_string, stoi
#include <vector>        // vector
#include <algorithm>     // min, max, swap, sort, reverse, lower_bound, upper_bound
#include <utility>       // pair, make_pair
#include <tuple>         // tuple, make_tuple
#include <cstdint>       // int64_t, int*_t
#include <cstdio>        // printf
#include <map>           // map
#include <queue>         // queue, priority_queue
#include <set>           // set
#include <stack>         // stack
#include <deque>         // deque
#include <unordered_map> // unordered_map
#include <unordered_set> // unordered_set
#include <bitset>        // bitset
#include <cctype>        // isupper, islower, isdigit, toupper, tolower

using namespace std;

struct MyPair
{
    int x;
    string y;
    // 別のMyPair型のオブジェクトをとって、x, yにそれぞれ+したものを返す
    // +演算子をオーバーロード
    MyPair operator+(const MyPair &other) // 返り値の型
    {
        MyPair ret;
        ret.x = x + other.x; // ここではint型の+演算子が呼ばれる
        ret.y = y + other.y; // ここではstring型の+演算子が呼ばれる
        return ret;
    }
};

int main()
{
    MyPair a = {123, "hello"};
    MyPair b = {456, "world"};

    // MyPair型の+演算子が呼ばれる
    MyPair c = a + b;

    cout << "c.x = " << c.x << endl;
    cout << "c.y = " << c.y << endl;
}