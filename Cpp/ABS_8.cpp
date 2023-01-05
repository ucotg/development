#include <bits/stdc++.h>
using namespace std;

int main()
{
    int N;
    cin >> N;
    int d[N];
    int count = 1;

    for (int i = 0; i < N; i++)
    {
        cin >> d[i];
    }

    sort(d, d + N, greater());
    for (int i = 0; i < N - 1; i++)
    {
        if (d[i] > d[i + 1])
        {
            count++;
        }
    }
    cout << count << endl;
}
/* setを用いた解
int main() {
    int N;
    int d[110];
    cin >> N;
    for (int i = 0; i < N; ++i) cin >> d[i];

    set<int> values; // insert するときに重複を取り除いてくれます
    for (int i = 0; i < N; ++i) {
        values.insert(d[i]); // 挿入します
    }

    // set のサイズを出力します
    cout << values.size() << endl;
}
*/