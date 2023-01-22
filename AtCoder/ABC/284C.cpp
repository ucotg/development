#include <bits/stdc++.h>
using namespace std;

void dfs(int c)
{
    visit[c] = true;
    for (auto &d : g[c])
    {
        if (visit[d])
            continue;
        dfs(d);
    }
}

int main()
{

    int N, M;
    cin >> N >> M;
    vector<vector<int>> g(N, vector<int>(N));
    vector<bool> visit(N);

    int ans = 0;

    for (int i = 0; i < N; i++)
    {
        int u, v;
        cin >> u >> v;
        --u, --v;
        g[u].push_back(v);
        g[v].push_back(u);
    }

    for (int i = 0; i < N; i++)
    {
        if (!visit[i])
        {
            ans++, dfs(i);
        }
    }
    cout << ans << endl;
}