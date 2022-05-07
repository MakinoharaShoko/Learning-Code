import {configureStore} from "@reduxjs/toolkit";

export interface IPost {
  author: string,
  content: string,
  judge: string,
  url: string,
  tag: string
}

export interface IStore {
  postList: Array<IPost>,
  showCount: number
}

interface IAction {
  type: string,
  payload: any
}

const defaultStore: IStore = {
  postList: [
    {
      author: 'DS北风',
      content: '未经证实的报道称，俄罗斯黑海舰队“马卡罗夫海军上将”号护卫舰在敖德萨以南的兹米尼岛附近，被乌克兰“海王星”反舰导弹击中后起火！目前救援行动正在进行中，多架飞机、救援船在该地区！',
      judge: '客观观望',
      url: 'https://weibo.com/2149981442/LrMRZcJ3m#comment',
      tag: '俄乌局势'
    },
    {
      author: '巍岳钦禹',
      content: '传俄罗斯在5月9日的胜利阅兵中有一支俘虏方队，这支方队大约有500人，由美国、英国和乌克兰俘虏组成。俘虏方队大概就是苏联首创，1944年7月17日，在苏联进行的大阅兵中，由57000名德国俘虏组成的方队从红场走过。如果这次俄罗斯真的把俘虏再拉出来遛一遛，伤害性不大，侮辱性极强。也能提高俄罗斯士兵的士气，对接下来的军事行动可能有帮助。',
      judge: '戏谑',
      url: 'https://weibo.com/3775056661/LrRsp376e#comment',
      tag: '俄乌局势'
    },
    {
      author: '衝鋒号角',
      content: '当地时间5月5日，志愿者在马里乌波尔举办“亚速营”属性展',
      judge: '报道类',
      url: 'https://weibo.com/2343014623/LrNCpD7CA',
      tag: '#中方坚决反对日方炒作所谓中国威胁##俄罗斯乌克兰战况##关注俄乌局势最新进展# '
    },
    {
      author: '大圣军武',
      content: '碾压庄稼，下场就是被农民拖拉机拖走。原野碧绿，坦克燃烧，场景宛如大片',
      judge: '痛斥谴责',
      url: 'https://weibo.com/6375834680/LrR8wuRtk',
      tag: '#俄乌局势##乌克兰局势##关注俄乌局势最新进展#'
    },
    {
      author: '人民日报',
      content: '【上海高考延期至7月7日至9日举行】5月7日，上海市疫情防控发布会上通报：上海市秋季高考统考延期至7月7日至9日举行，高中学业水平等级性考试延期至6月18日至19日举行，中考延期至7月11日至12日举行，取消初中理化实验考试、外语听说测试，相关成绩以满分计入学生中考总成绩。',
      judge: '报道类',
      url: 'https://weibo.com/2803301701/LrSbj58Wc',
      tag: '人民日报的微博视频'
    },
  ],
  showCount: 1
};


const mainReducer = (state = defaultStore, action: IAction) => {
  switch (action.type) {
    case 'ADD_COUNT':
      const newCount = state.showCount + 1;
      return {...state, showCount: newCount};
  }
  return state;
}

export const mainStore = configureStore({
  reducer: mainReducer
});