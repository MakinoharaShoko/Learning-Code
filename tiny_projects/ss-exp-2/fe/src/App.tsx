import './App.css';
import {useState} from "react";
import {Table, Tag, Space} from 'antd';
import {Form, Input, Button, Checkbox} from 'antd';
import 'antd/dist/antd.css';
import axios from "axios";

function App() {

  const [loginState, setLoginState] = useState(false);
  const [data, setData] = useState([]);
  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      render: (text: string) => <span>{text}</span>,
    },
    {
      title: '数学',
      dataIndex: 'mat',
      key: 'mat',
      render: (text: string) => <span>{text}</span>,
    },
    {
      title: '语文',
      dataIndex: 'chn',
      key: 'chn',
      render: (text: string) => <span>{text}</span>,
    },
    {
      title: '化学',
      dataIndex: 'che',
      key: 'che',
      render: (text: string) => <span>{text}</span>,
    },
    {
      title: '物理',
      dataIndex: 'phy',
      key: 'phy',
      render: (text: string) => <span>{text}</span>,
    },
  ]

  const onFinish = (values: any) => {
    console.log('Success:', values);
    const user = values.username;
    const pwd = values.password;
    axios.post('http://localhost:3000/getData', {user, pwd})
      .then(res => {
        const data = res.data;
        console.log(data);
        if (data.state === 'error') {
          alert('用户名或密码错误');
          location.reload();
        }
        if (data.state === 'OK') {
          setLoginState(true);
          setData(data.data);
        }
      }).catch(err => {
      console.log(err)
    });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="App">
      {!loginState && <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
          <Form
              name="basic"
              labelCol={{span: 8}}
              wrapperCol={{span: 16}}
              initialValues={{remember: true}}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
          >
              <Form.Item
                  label="Username"
                  name="username"
                  rules={[{required: true, message: 'Please input your username!'}]}
              >
                  <Input/>
              </Form.Item>

              <Form.Item
                  label="Password"
                  name="password"
                  rules={[{required: true, message: 'Please input your password!'}]}
              >
                  <Input.Password/>
              </Form.Item>
              <Form.Item wrapperCol={{offset: 8, span: 16}}>
                  <Button type="primary" htmlType="submit">
                      Submit
                  </Button>
              </Form.Item>
          </Form>
      </div>}
      {loginState &&
          <div>
              <div>
                  <Button onClick={() => setLoginState(false)} type="primary">返回</Button>
              </div>
              <Table columns={columns} dataSource={data}/>
          </div>
      }
    </div>
  )
}

export default App
