import {Form, Input, Button} from 'antd';
import React, {Component} from 'react';
import {hashHistory} from 'dva/router';
import {connect} from 'dva';
import styles from './LoginForm.less';
import md5 from 'js-md5';

const FormItem = Form.Item;
const createForm = Form.create;

class LoginForm extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }

      this.props.dispatch({
        type: 'common/login', payload: {
          account: values.userName,
          password: md5(values.password),
        }
      });

    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem >
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: '请输入用户名!' }],
          })(
            <Input placeholder="用户名" />
          )}
        </FormItem>
        <FormItem >
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码!' }],
          })(
            <Input type="password" placeholder="密码" />
          )}
        </FormItem>
        <FormItem >
          <Button type="primary" htmlType="submit" className={styles['login-form-button']}>
            登录
          </Button>
        </FormItem>
      </Form>
    );
  }
}

LoginForm.propTypes = {};
LoginForm.defaultProps = {};
LoginForm = createForm({})(LoginForm);

const mapStateToProps = ({ common }) => {
  return { common };
};

export default connect(mapStateToProps)(LoginForm);
