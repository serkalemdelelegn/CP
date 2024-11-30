class Solution {
public:
    vector<vector<int>> validArrangement(vector<vector<int>>& pairs) {
        map < int, multiset< int > > mp;
        multiset< int >::iterator ite;
        map < int , int > cnt;
        int n = pairs.size(), i, k, t, l=0, sz;
        map < int , int >::iterator it;
        for(vector < int > & pr: pairs){
            mp[pr[0]].insert(pr[1]);
            cnt[pr[0]]++;
            cnt[pr[1]]--;
        }
        k=cnt.begin()->first;
        for(it=cnt.begin();it!=cnt.end();it++){
            if(it->second ==1) {
                k = it->first;
            }
        }
        vector<vector<int>> res(n, vector(2, 0)), ret(n, vector(2, 0));;
        for(i=0;i<n;i++){
            ite = mp[k].begin();
            if(ite==mp[k].end()) break;
            t = *ite;
            mp[k].erase(ite);
            res[i] = {k, t};
            k = t;
        }   
        sz = i;
        while(l<n){
            l=0;
            k = res[0][0];
            while(mp[k].size()){
                ite = mp[k].begin();
                t = *ite;
                mp[k].erase(ite);
                ret[l]={k, t};
                l++;
                k = t;
            }
            for(i=0;i<sz;i++){
                ret[l]=res[i];
                l++;
                k = res[i][1];
                while(mp[k].size()){
                    ite = mp[k].begin();
                    t = *ite;
                    mp[k].erase(ite);
                    ret[l]={k, t};
                    l++;
                    k = t;
                }
            }
            swap(res, ret);
            sz = l;
        }
        return res;
    }
};