#include <bits/stdc++.h>
using namespace std;

map<string, int> op_int(vector<string> vec, map<string, int> ans)
{
    int x = stoi(vec[3]);
    for (unsigned int i = 3; i < vec.size(); i++)
    {
        if (vec[i] == "+")
        {
            x += stoi(vec[i + 1]);
        }
        else if (vec[i] == "-")
        {
            x -= stoi(vec[i + 1]);
        }
    }
    ans[vec[1]] = x;
    return ans;
}

void op_print_int(vector<string> vec, map<string, int> ans)
{
    int answer = 0;
    if (!isdigit(vec[1][0]))
    {
        answer += ans[vec[1]];
    }
    else
    {
        answer += stoi(vec[1]);
    }
    for (unsigned int i = 2; i < vec.size(); i++)
    {
        if (vec[i] == "+")
        {
            answer += stoi(vec[i + 1]);
        }
        else if (vec[i] == "-")
        {
            answer -= stoi(vec[i + 1]);
        }
    }
    cout << answer << endl;
}

map<string, vector<int>> op_vec(vector<string> vec, map<string, int> intans)
{
    map<string, vector<int>> reans;
    vector<int> tmp_answer;
    for (unsigned int i = 4; i < vec.size(); i++)
    {
        if (isdigit(vec[i][0]))
        {
            tmp_answer.push_back(stoi(vec[i]));
        }
        else if (vec[i] != "," && vec[i] != "]" && vec[i] != ";" && !intans[vec[i]])
        {
            tmp_answer.push_back(intans[vec[i]]);
        }
    }
    reans[vec[1]] = tmp_answer;
    return reans;
}

void op_print_vec(vector<string> vec, map<string, vector<int>> ans)
{
    vector<vector<int>> int_answer;
    vector<string> ope;
    for (unsigned int i = 2; i < vec.size(); i++)
    {
        cout << ans[vec[i]][0] << endl;
        int count = 0;
        if (!isdigit(vec[i][0]) && vec[i] != "[" && vec[i] != "]" && vec[i] != "+" && vec[i] != "-" && vec[i] != ";")
        {
            int_answer.push_back(ans[vec[i]]);
            count++;
        }
        if (vec[i] == "[")
        {
            for (int j = 1; vec[i + j] == "]"; j++)
            {
                if (isdigit(vec[i + j][0]))
                {
                    int_answer.at(count).push_back(stoi(vec[i + j]));
                }
            }
            count++;
        }
        if (vec[i] == "+" || vec[i] == "-")
        {
            ope.push_back(vec[i]);
        }
    }

    vector<int> answer = int_answer.at(0);
    for (unsigned int i = 0; i < ope.size(); i++)
    {
        if (ope[i] == "+")
        {
            for (unsigned int j = 0; j < int_answer.at(0).size(); j++)
            {
                answer[j] += int_answer[i + 1][j];
            }
        }
        if (ope[i] == "-")
        {
            for (unsigned int j = 0; j < int_answer.at(0).size(); j++)
            {
                answer[j] -= int_answer[i + 1][j];
            }
        }
    }
    cout << "["
         << " ";
    for (unsigned int i = 0; i < answer.size(); i++)
    {
        cout << answer[i] << " ";
    }
    cout << "]" << endl;
}

int main()
{
    int N;
    cin >> N;
    vector<vector<string>> op(N, vector<string>(100));

    // intの計算結果を格納する配列
    map<string, int> answers;

    map<string, vector<int>> vec_answers;

    // 各命令文字列を代入
    for (int i = 0; i < N; i++)
    {
        for (int j = 0; j < 100; j++)
        {
            cin >> op[i][j];
            if (op[i][j] == ";")
            {
                break;
            }
        }
    }

    // それぞれの命令を解析
    for (int i = 0; i < N; i++)
    {
        if (op[i][0] == "int")
        {
            answers = op_int(op[i], answers);
        }
        else if (op[i][0] == "print_int")
        {
            op_print_int(op[i], answers);
        }
        else if (op[i][0] == "vec")
        {
            vec_answers = op_vec(op[i], answers);
        }
        else if (op[i][0] == "print_vec")
        {
            op_print_vec(op[i], vec_answers);
        }
    }
}