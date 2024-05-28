#include<iostream>
#include<vector>

using namespace std;

int main(){
    int n;
    cin>>n;
    vector<int> a;
    for (int i = 0; i < n; i++)
    {
        int t;
        cin>>t;
        a.push_back(t);
    }
    int suml=0;
    for (int i = 0; i < a.size(); i++)
    {
        suml += a[i];
    }
    int summ=0;
    int max = 0;
    for (int i = 0; i < a.size(); i++)
    {
        if(a[i]>max){
            max = a[i];
            summ += a[i];
        }
    }
    cout<<suml<<endl<<summ;
    
    return 0;
}