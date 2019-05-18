/*
  包含n个接口请求函数的模块
  函数的返回值: promise对象
 */
import ajax from './ajax'
const BASE_URL = 'http://localhost:3000/'
// login register 
const handleLogin = (data) => ajax(`${BASE_URL}login`, data, 'post')
// setUserInfo 
const setUserInfo = (data) => ajax(`${BASE_URL}setInfo`, data, 'post')
// mudification aright pwd
const mudificationPwd = (data) => ajax(`${BASE_URL}mudificationPwd`, data, 'post')
// setTeacherClass 
const setTeacherClass = (data) => ajax(`${BASE_URL}setTeacherClass`, data, 'post')
// 设置开学时间
const setStartTime  =  (data) => ajax(`${BASE_URL}setStartTime`, data, 'post')
// 获取用户的基本信息
const getUserInfo = () => ajax(`${BASE_URL}getUserInfo`)
// 获取当前周的上课信息
const getThisWeekInfo = (username, weeksName) => ajax(`${BASE_URL}getThisWeekInfo`, {username, weeksName})
// 获取本课程的所有信息
const getThisClassInfo = (username, className) => ajax(`${BASE_URL}getThisClassInfo`, {username, className})
// 更新课程信息
const updateClassInfo = (data) => ajax(`${BASE_URL}updateClassInfo`, data, 'post')
// 删除课程信息
const deleteClassInfo = (_id) => ajax(`${BASE_URL}deleteClassInfo`, {_id})
// 添加上课班级
const setNeedClass = (data) => ajax(`${BASE_URL}setNeedClass`, data, 'post')
export {
  handleLogin,
  setUserInfo,
  mudificationPwd,
  setTeacherClass,
  setStartTime,
  getUserInfo,
  getThisWeekInfo,
  getThisClassInfo,
  updateClassInfo,
  deleteClassInfo,
  setNeedClass
}
