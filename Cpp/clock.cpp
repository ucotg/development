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

struct Clock
{
    int hour;
    int minute;
    int second;

    void set(int h, int m, int s)
    {
        hour = h;
        minute = m;
        second = s;
    }

    string to_str()
    {
        string time_str[3];
        int time[3] = {hour, minute, second};
        for (int i = 0; i < 3; i++)
        {
            if (time[i] < 10)
            {
                time_str[i] = "0" + to_string(time[i]);
            }
            else
            {
                time_str[i] = to_string(time[i]);
            }
        }

        return time_str[0] + ":" + time_str[1] + ":" + time_str[2];
    }

    void shift(int diff_second)
    {
        int new_timesec;
        int curtimesec = hour * 3600 + minute * 60 + second;
        if (curtimesec + diff_second <= 0)
        {
            new_timesec = 86400 + (diff_second + curtimesec);
        }
        else if (curtimesec + diff_second >= 86400)
        {
            new_timesec = (diff_second + curtimesec) - 86400;
        }
        else
        {
            new_timesec = curtimesec + diff_second;
        }
        hour = new_timesec / 3600;
        minute = (new_timesec % 3600) / 60;
        second = new_timesec - hour * 3600 - minute * 60;
    }
};

// -------------------
// ここから先は変更しない
// -------------------

int main()
{
    // 入力を受け取る
    int hour, minute, second;
    cin >> hour >> minute >> second;
    int diff_second;
    cin >> diff_second;

    // Clock構造体のオブジェクトを宣言
    Clock clock;

    // set関数を呼び出して時刻を設定する
    clock.set(hour, minute, second);

    // 時刻を出力
    cout << clock.to_str() << endl;

    // 時計を進める(戻す)
    clock.shift(diff_second);

    // 変更後の時刻を出力
    cout << clock.to_str() << endl;
}
