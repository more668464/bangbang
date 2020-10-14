import { batchDelete, findAllcomment, saveOrUpdate, commentExamine, commentRefuseExamine } from '@/api/comment';


export default {
    namespaced: true,
    state: {
        commentTotalData: {},
        AllData: {},
        //所有父栏目
        parents: []
    },
    getters: {
        commentData: state => state.commentTotalData.list,
        total: state => state.commentTotalData.total,

        // categoryAllData: state => state.AllData.data,
        // parents: state => state.parents
    },
    mutations: {
        //所有分页数据
        changecommentTotalData(state, payload) {
            state.commentTotalData = payload
        },
        //所有数据
        // changeCategoryAllData(state, payload) {
        //     state.AllData = payload
        // },
        ///过滤出父栏目
        // changeParents(state, payload) {
        //     state.parents = state.AllData.data.filter((item) => {
        //         return item.parentId == null;
        //     });
        // }
    },
    actions: {
        //分页查询
        async findAllcomment({ commit, dispatch }, payload) {
            let res = await findAllcomment(payload);
            let max = Math.ceil(res.data.total / payload.pageSize);
            //页码超了范围处理一下
            if (payload.page > max) {
                payload.page = max;
                let res = await findAllcomment(payload);
                commit('changecommentTotalData', res.data);

            } else {
                commit('changecommentTotalData', res.data);

            }

        },
        //查找全部
        // async findAll({ commit }) {
        //     let res = await findAll();
        //     commit('changeCategoryAllData', res)
        //     commit('changeParents')

        // },
        //保存和更新
        async saveOrUpdate({ dispatch }, payload) {
            let res = await saveOrUpdate(payload.form);
            dispatch('findAllcomment', payload.queryParams)
        },

        //批量删除
        async batchDelete({ dispatch }, payload) {
            let res = await batchDelete({ ids: payload.ids });
            dispatch('findAllcomment', payload.queryParams)
        },

        async commentExamine({ dispatch }, payload) {
            let res = await commentExamine({ commentid: payload });
        },
        async commentRefuseExamine({ dispatch }, payload) {
            let res = await commentRefuseExamine({ commentid: payload });
        },

    }
}