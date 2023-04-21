<template>
    <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
    data() {
      return {
          isAuth: false,
      }
    }
}
</script>

<style>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-decoration: none;
}

body {
  background: #f69a73;
}

.mt-2 {
    margin-top: 8px;
}

.mt-4 {
    margin-top: 16px !important;
}

.btn{
  cursor: pointer;
}

.decor {
  position: relative;
  max-width: 400px;
  margin: 50px auto 0;
  background: white;
  border-radius: 30px;
}

.form-left-decoration,
.form-right-decoration {
  content: "";
  position: absolute;
  width: 50px;
  height: 20px;
  background: #f69a73;
  border-radius: 20px;
}
.form-left-decoration {
  bottom: 60px;
  left: -30px;
}
.form-right-decoration {
  top: 60px;
  right: -30px;
}

.form-left-decoration:before,
.form-left-decoration:after,
.form-right-decoration:before,
.form-right-decoration:after {
  content: "";
  position: absolute;
  width: 50px;
  height: 20px;
  border-radius: 30px;
  background: white;
}

.form-left-decoration:before {
  top: -20px;
}

.form-left-decoration:after {
  top: 20px;
  left: 10px;
}

.form-right-decoration:before {
  top: -20px;
  right: 0;
}

.form-right-decoration:after {
  top: 20px;
  right: 10px;
}

.circle {
  position: absolute;
  bottom: 80px;
  left: -55px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: white;
}

.form-inner {
  padding: 50px;
  text-align: center;
}

.form-inner input,
.form-inner select,
.form-inner select option,
.form-inner textarea {
  display: block;
  width: 100%;
  padding: 0 20px;
  margin-bottom: 10px;
  background: #e9eff6;
  line-height: 40px;
  border-width: 0;
  border-radius: 20px;
  font-family: "Roboto", sans-serif;
}

.form-inner select {
  padding: 12px;
}

.form-inner > .but {
  margin-top: 30px;
  width: 100%;
  background: #f69a73;
  border-bottom: 4px solid #d87d56;
  padding: 10px;
  border-radius: 13px;
  text-align: center;
}

p, li {
  margin-top: 0;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  color: #707981;
}

.form-inner > input[type="button"],
.form-inner > a > .but {
    margin-top: 30px;
    cursor: pointer;
  width: 100%;
  background: #f69a73;
  padding: 10px;
  border-radius: 13px;
  text-align: center;
  margin-top: 30px;
  background: #f69a73;
  color: white;
  font-size: 14px;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  text-decoration: none;
  border-radius: 13px;
  width: 100%;
}

.form-inner > textarea {
  resize: none;
}

h3 {
  margin-top: 0;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 24px;
  color: #707981;
}

h4 {
  margin-top: 0;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 20px;
  color: #707981;
}

h5 {
  margin-top: 0;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #707981;
}

</style>
