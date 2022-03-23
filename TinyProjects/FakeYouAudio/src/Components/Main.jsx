import styles from './main.module.scss'
import {Layout, Menu, Breadcrumb, Descriptions} from 'antd';
import {Upload, message, Button} from 'antd';
import {MusicOne, UploadOne} from "@icon-park/react";
import {useState} from "react";
import {Tag, Divider} from 'antd';
import {
    CheckCircleOutlined,
    SyncOutlined,
    CloseCircleOutlined,
    ExclamationCircleOutlined,
    ClockCircleOutlined,
    MinusCircleOutlined,
} from '@ant-design/icons';

const {Header, Content, Footer} = Layout;

const ttz = [0, 0];

export const Main = () => {
    const list = [
        ['《老男孩》筷子兄弟.mp3', 1.12441],
        ['《ありがとう》大桥卓弥.mp3', 1.52512],
        ['《在人间》.mp3', 43.43143],
        ['《What are words》.mp3', 43.12314],
        ['《最初的梦想》.mp3', 11.45142],
        ['《银の龙の背に乗って》 中岛美雪.mp3', 11.73431],
        ['《我的一个道姑朋友》.mp3', 18.33241],
        ['《一番星》.mp3', 18.02312],
        ['《时间煮雨》.mp3', 6.32132],
        ['《等一个晴天》.mp3', 5.99431],
        ['《出山》.mp3', 21.01311],
        ['《Super love》.mp3', 20.89887],
        ['《白月光与朱砂痣》.mp3', 31.43132],
        ['《夕阳坂》.mp3', 31.00123],
    ]
    const getTzz = (s) => {
        let tzz = 1.000000;
        for (const e of list) {
            if (s === e[0]) {
                tzz = e[1];
            }
        }
        return tzz;
    }

    const [name1, setName1] = useState('');
    const [name2, setName2] = useState('');
    const [tzz1, setTzz1] = useState(0);
    const [tzz2, setTzz2] = useState(0);
    const [xsd, setXsd] = useState('');

    const props1 = {
        name: 'file',
        action: '',
        headers: {
            authorization: 'authorization-text',
        },
        showUploadList: false,
        onChange(info) {
            console.log(1);
            console.log(info);
            setName1(info.file.name);
            setTzz1(<Tag icon={<SyncOutlined spin/>} color="processing">
                processing
            </Tag>);
            setTimeout(() => setTzz1(getTzz(info.file.name)), 2000);
            setTimeout(go, 2100);
            ttz[0] = getTzz(info.file.name);
            console.log(ttz)

            function go() {
                if (name2 !== '') {
                    setXsd(<Tag icon={<SyncOutlined spin/>} color="processing">
                        processing
                    </Tag>)
                    setTimeout(() => {
                        setXsd('' + (1 - Math.abs(ttz[0] - ttz[1])) * 100 + '%');
                    }, 1000);
                }
            }
        },
    };

    const props2 = {
        name: 'file',
        action: '',
        headers: {
            authorization: 'authorization-text',
        },
        showUploadList: false,
        onChange(info) {
            console.log(2);
            console.log(info)
            setName2(info.file.name);
            setTzz2(<Tag icon={<SyncOutlined spin/>} color="processing">
                processing
            </Tag>);
            setTimeout(() => setTzz2(getTzz(info.file.name)), 2000);
            setTimeout(go, 2100);
            ttz[1] = getTzz(info.file.name);
            console.log(ttz)

            function go() {
                if (name1 !== '') {
                    setXsd(<Tag icon={<SyncOutlined spin/>} color="processing">
                        processing
                    </Tag>)
                    setTimeout(() => {
                        setXsd('' + (1 - Math.abs(ttz[0] - ttz[1])) * 100 + '%');
                    }, 1000);
                }
            }

        },
    };

    return <div>
        <Layout className="layout">
            <Header>
                <span className={styles.Title}>
                    <MusicOne theme="outline" size="26" fill="white" style={{margin: '0 5px 0 0'}}/>
                    音频文件相似度匹配
                </span>
            </Header>
            <Content style={{padding: '0 50px'}}>
                <div className={styles.Main}>
                    <div className={styles.Content}>
                        <div className={styles.element}>
                            <Descriptions title="文件1">
                                <Descriptions.Item label="音频文件">
                                    <Upload {...props1}>
                                        <Button icon={<UploadOne theme="outline" size="24" fill="#333"/>}>Click to
                                            Upload</Button>
                                    </Upload>
                                </Descriptions.Item>
                                <Descriptions.Item label="名称">
                                    {name1}
                                </Descriptions.Item>
                                <Descriptions.Item label="特征值">
                                    {tzz1}
                                </Descriptions.Item>
                            </Descriptions>
                        </div>
                        <div className={styles.element}>
                            <Descriptions title="文件2">
                                <Descriptions.Item label="音频文件">
                                    <Upload {...props2}>
                                        <Button icon={<UploadOne theme="outline" size="24" fill="#333"/>}>Click to
                                            Upload</Button>
                                    </Upload>
                                </Descriptions.Item>
                                <Descriptions.Item label="名称">
                                    {name2}
                                </Descriptions.Item>
                                <Descriptions.Item label="特征值">
                                    {tzz2}
                                </Descriptions.Item>
                            </Descriptions>
                        </div>
                        <div className={styles.element}>
                            相似度：{xsd}
                        </div>
                    </div>
                </div>

            </Content>
            <Footer style={{textAlign: 'center'}}>Audio Similarity Detection ©2022 Created by Team AHU-ASD DevC</Footer>
        </Layout>
    </div>;
}