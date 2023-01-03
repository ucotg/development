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
    // コンストラクタ
    MyPair()
    {
        cout << "normal constructor called" << endl;
    }
    // コピーコンストラクタ
    MyPair(const MyPair &old)
    {
        cout << "copy constructor called" << endl;
        x = old.x + 1;
        y = old.y + " new";
    }
};

int main()
{
    MyPair p; // ここでコンストラクタが呼ばれる
    p.x = 12345;
    p.y = "hello";
    cout << "p.x = " << p.x << endl;
    cout << "p.y = " << p.y << endl;

    MyPair q(p); // コピーコンストラクタが呼ばれる
    cout << "q.x = " << q.x << endl;
    cout << "q.y = " << q.y << endl;

    MyPair r = q; // コピーコンストラクタが呼ばれる
    cout << "r.x = " << r.x << endl;
    cout << "r.y = " << r.y << endl;
}