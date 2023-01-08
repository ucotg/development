#include <bits/stdc++.h>
using namespace std;

int main()
{
    int n, q;
    cin >> n;

    int atarisum = 0, hazuresum = 0;
    int atari[n + 1], hazure[n + 1];
    atari[0] = 0, hazure[0] = 0;

    for (int i = 1; i < n + 1; i++)
    {
        int tmp;
        cin >> tmp;
        if (tmp)
        {
            atarisum++;
        }
        else
        {
            hazuresum++;
        }
        atari[i] = atarisum;
        hazure[i] = hazuresum;
    }

    cin >> q;

    for (int i = 0; i < q; i++)
    {
        int l, r;
        cin >> l >> r;
        int atarinum = atari[r] - atari[l - 1];
        int hazurenum = hazure[r] - hazure[l - 1];
        if (atarinum > hazurenum)
        {
            cout << "win" << endl;
        }
        else if (atarinum < hazurenum)
        {
            cout << "lose" << endl;
        }
        else
        {
            cout << "draw" << endl;
        }
    }
}