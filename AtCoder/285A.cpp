#include <bits/stdc++.h>
using namespace std;
using ll = long long;

int main()
{
    int a, b;
    cin >> a >> b;

    // vector<vector<int>> edges(16, vector<int>(16));

    vector<vector<int>> edges(16, vector<int>());
    // edges = {0, {2, 3}, {1, 4, 5}, {1, 6, 7}, {2, 8, 9}, {1, 10, 11}, {3, 12, 13}, {3, 14, 15}, {4}, {4}, {5}, {5}, {6}, {6}, {7}, {7}};

    edges.at(1).push_back(2);
    edges.at(1).push_back(3);
    edges.at(2).push_back(1);
    edges.at(2).push_back(4);
    edges.at(2).push_back(5);
    edges.at(3).push_back(1);
    edges.at(3).push_back(6);
    edges.at(3).push_back(7);
    edges.at(4).push_back(2);
    edges.at(4).push_back(8);
    edges.at(4).push_back(9);
    edges.at(5).push_back(1);
    edges.at(5).push_back(10);
    edges.at(5).push_back(11);
    edges.at(6).push_back(3);
    edges.at(6).push_back(12);
    edges.at(6).push_back(13);
    edges.at(7).push_back(3);
    edges.at(7).push_back(14);
    edges.at(7).push_back(15);
    edges.at(8).push_back(4);
    edges.at(9).push_back(4);
    edges.at(10).push_back(5);
    edges.at(11).push_back(5);
    edges.at(12).push_back(6);
    edges.at(13).push_back(6);
    edges.at(14).push_back(7);
    edges.at(15).push_back(7);

    if (find(edges.at(a).begin(), edges.at(a).end(), b) != edges.at(a).end())
    {
        cout << "Yes" << endl;
    }
    else
    {
        cout << "No" << endl;
    }
}