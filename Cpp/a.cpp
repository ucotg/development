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

int main()
{
    int N;
    cin >> N;
    vector<int> data(N);
    for (int i = 0; i < N; i++)
    {
        cin >> data.at(i);
    }

    map<int, int> cnt;
    for (int x : data)
    {
        if (cnt.count(x))
        {
            cnt.at(x)++;
        }
        else
        {
            cnt.at(x) = 1;
        }
    }
    int max_count = 0;
    int ans = -1;
    for (int x : data)
    {
        if (max_count < cnt.at(x))
        {
            max_count = cnt.at(x);
            ans = x;
        }
    }
    cout << ans << " " << max_count << endl;
}
