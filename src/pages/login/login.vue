<template>
  <div>
    <!--top content-->
    <div class="admin-login-header-box">
      <div class="admin-login-header-center">
        <div class="admin-login-logo">
          Kblog | login
        </div>
      </div>
    </div>
    <!--center content-->
    <div class="admin-login-center-box">
      <div class="login-center-box">
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form label-position="right" label-width="100px">
              <el-form-item label="account" required>
                <el-input v-model="User.userName" placehodler="name/email"></el-input>
              </el-form-item>
              <el-form-item label="password">
                <el-input v-model="User.password" placehodler="password"></el-input>
              </el-form-item>
              <el-form-item label="verify">
                <el-input v-model="loginInfo.verifyCode" placehodler="enter code"></el-input>
              </el-form-item>
              <el-form-item class="login-button">
                <el-button type="primary" @click="doLogin" size="small">Login</el-button>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
      </div>
    </div>
    <!--foot content-->

  </div>

</template>

<script>
export default {
  data() {
    return {
      User: {
        userName: '',
        password: ''
      },
      loginInfo: {
        verifyCode: ''
      }
    }
  }
}
</script>

<style>
  .login-button {
    margin-bottom: 0;
  }

  .admin-login-header-box {
    width: 100%;
    height: 46px;
    margin-bottom: 20px;
    background: dodgerblue;
  }

  .center {
    margin: 0 auto;
    width: 1140px;
  }

  .admin-login-header-center {
    line-height: 46px;
  }

  .login-center-box {
    border-radius: 4px;
    width: 1100px;
    padding: 20px;
    height: 300px;
    background: #fff;
    box-shadow: 0 1px 10px #afafaf;
  }

  .admin-login-logo {
    color: #fef0f0;
    font-size: 18px;
    font-weight: 600;
  }

  .login-center-box .el-form-item__label {
    background: #fbfbfb;
    border: solid 1px #fbfbfb;
    text-align: center;
  }

</style>