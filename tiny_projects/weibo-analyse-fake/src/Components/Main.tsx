import {connect} from "react-redux"
import {IPost, IStore} from "../store/mainStore"
import {useEffect} from "react";

interface IProps {
  postList: Array<IPost>
}

const mapStoreToProps = (state: IStore) => {
  return {postList: state.postList}
}

const mapDispatchToProps = () => {
  return {};
}

const MainComponent = (props: IProps) => {
  useEffect(() => {
    console.log(props);
  }, [])
  return <div>
    Main
  </div>
}

export const Main = connect(mapStoreToProps, mapDispatchToProps)(MainComponent);