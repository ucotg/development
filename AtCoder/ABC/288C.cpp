#include <bits/stdc++.h>
using namespace std;
using ll = long long;

vector<bool> isPassed(200009, false);
vector<vector<int>> graph(200009);

int main()
{
    int n, m;
    cin >> n >> m;
    int count = 0;

    for (int i = 0; i < m; i++)
    {
        int a, b;
        cin >> a >> b;
        graph.at(a).push_back(b);
        graph.at(b).push_back(a);
        isPassed[a] = true;
        isPassed[b] = true;
        if (isPassed[a] == true && isPassed[b] == true)
        {
            count++;
        }
    }

    cout << count << endl;
}