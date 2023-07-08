import { reactive, ref, Ref } from 'vue'
import useUserStore from '@/stores/user'
import { useCookies } from 'vue3-cookies'
import { encrypt, decrypt } from '@/utils/crypto'
import { FormInstance } from 'element-plus'

const { cookies } = useCookies()

const userStore = useUserStore()

export const useLogin = () => {
  const userLoginFormParams = reactive({
    username: '',
    password: '',
    // todo:增加验证码
  })

  const isRemenberPassword: Ref<boolean> = ref(false)

  const setUsernameAndPasswordToCookies = () => {
    const username = userLoginFormParams.username
    const password = userLoginFormParams.password
    if (username && password) {
      cookies.set('username', encrypt(username))
      cookies.set('password', encrypt(password))
    }
  }

  const removeUsernameAndPasswordFromCookies = () => {
    cookies.remove('username')
    cookies.remove('password')
  }

  function getUsernameAndPasswordFromCookies() {
    const username = cookies.get('username')
    const password = cookies.get('password')
    if (username && password) {
      return { username: decrypt(username), password: decrypt(password) }
    }
    return { username, password }
  }

  function setUsernameAndPasswordToLoginFormParams(
    username: string,
    password: string,
  ) {
    userLoginFormParams.username = username
    userLoginFormParams.password = password
  }

  const loginForm = ref<FormInstance>()

  const loginFormRules = reactive({
    username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
    password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
  })

  function isRemember() {
    if (isRemenberPassword.value) {
      setUsernameAndPasswordToCookies()
    } else {
      removeUsernameAndPasswordFromCookies()
    }
  }

  const login = () => {
    // 表单校验
    loginForm.value?.validate((flag: boolean) => {
      if (flag) {
        isRemember()
        userStore.login(
          userLoginFormParams.username,
          userLoginFormParams.password,
        )
      }
    })
  }

  // 查看用户是否记住密码
  function checkIsRemember() {
    const { username, password } = getUsernameAndPasswordFromCookies()
    if (username && password) {
      setUsernameAndPasswordToLoginFormParams(username, password)
      isRemenberPassword.value = true
    }
  }

  // 检查登录
  const checkLogin = () => {
    checkIsRemember()
    return userStore.checkLogin().then(
      (flag: boolean) => {
        // 校验失败
        if (!flag) {
          console.log('校验失败')
        } else {
          console.log('校验成功')
        }
      },
      () => {
        // 检查登录时出错
      },
    )
  }

  return {
    userLoginFormParams,
    loginFormRules,
    loginForm,
    isRemenberPassword,
    login,
    checkLogin,
  }
}
