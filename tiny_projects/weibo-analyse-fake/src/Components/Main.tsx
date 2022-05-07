import {connect} from "react-redux"
import {IPost, IStore} from "../store/mainStore"
import {useEffect} from "react";
import styles from './main.module.scss';
import {CheckOne} from "@icon-park/react";

interface IProps {
  postList: Array<IPost>,
  count: number,
  addCount: Function
}

const mapStoreToProps = (state: IStore) => {
  return {postList: state.postList, count: state.showCount}
}

const mapDispatchToProps = (dispatch: Function) => ({
  addCount: () => dispatch({type: 'ADD_COUNT'})
})

const Main = (props: IProps) => {
  useEffect(() => {
    console.log(props);
    if (props.count < 5) {
      setTimeout(props.addCount, 1000);
    }
  });

  const postList = props.postList.map(e => (
    <div className={styles.post_element}>
      <div className={styles.post_author}>
        微博用户 @{e.author}
      </div>
      <div className={styles.post_content}>
        {e.content}
      </div>
      <div>
        <span className={styles.post_desc_universal + ' ' + styles.post_url}>
          <a href={e.url}>原文链接</a>
        </span>
        <span className={styles.post_desc_universal} style={{background: '#A36336'}}>
          {e.judge}
        </span>
        <span className={styles.post_desc_universal} style={{background: '#51A8DD'}}>
          {e.tag}
        </span>
      </div>
    </div>
  ))

  return <div className={styles.main}>
    <div className={styles.main_leftPanel}>
      <div className={styles.LP_Title}>
        微博舆情分析系统
      </div>
      <div className={styles.LP_content}>
        <div>
          <CheckOne theme="outline" size="24" fill="#36563C"/>
        </div>
        <div className={styles.LP_content_text}>
          当前正在正常运行
        </div>
      </div>
    </div>
    <div className={styles.main_rightPanel}>
      {postList}
    </div>
  </div>
}

export default connect(mapStoreToProps, mapDispatchToProps)(Main);