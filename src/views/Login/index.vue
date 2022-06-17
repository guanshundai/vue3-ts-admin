<template>
  <div class="login flex-r-c">
    <div class="login-box flex-c">
      <p style="text-align: center;font-size: 20px;font-weight: bold;"><i>Welcome To DsAdmin</i></p>
      <a-form :model="formState" name="basic" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }" autocomplete="off"
        @finish="onFinish" @finishFailed="onFinishFailed">
        <a-form-item label="用户名" name="username" :rules="[{ required: true, message: '请输入用户名!' }]">
          <a-input v-model:value="formState.username" />
        </a-form-item>

        <a-form-item label="密码" name="password" :rules="[{ required: true, message: '请输入密码!' }]">
          <a-input-password v-model:value="formState.password" />
        </a-form-item>

        <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
          <a-button type="primary" html-type="submit">登陆</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { reactive } from 'vue';
import { useRouter } from 'vue-router'
import { message } from 'ant-design-vue'
import { useStore } from '@/stores/useStore'

const { changeToken } = useStore()

const router = useRouter()

interface FormState {
  username: string;
  password: string;
}

const formState = reactive<FormState>({
  username: '',
  password: '',
});

const onFinish = (values: { username: string, password: string }) => {
  const { username, password } = values
  if (username === 'admin' && password === '123456') {
    changeToken('yourtoken')
    router.push('/')
  } else {
    message.error('登陆失败')
  }
  // console.log('Success:', values);
};
const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};
</script>

<style scoped lang='less'>
.login {
  width: 100vw;
  height: 100vh;
  background: #0F2027;
  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #2C5364, #203A43, #0F2027);
  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #2C5364, #203A43, #0F2027);
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  .login-box {
    padding: 30px 60px;
    background-color: #fff;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    opacity: .95;
  }
}
</style>