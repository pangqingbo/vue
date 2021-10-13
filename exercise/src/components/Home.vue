<template>
    <div>
        <h1>Home</h1>
        <p><i style="color:#8A7CBF">数组和数组的最大最小值在控制台输出</i></p>
        <a-button type="primary" href="#">Home</a-button>
        <a-button>Default Button</a-button>
        <a-button type="dashed">Button</a-button>
        <a-button type="text">Button</a-button>
        <a-button type="link">Button</a-button>
        <p><router-link to="/arrlist">01.exercise:循环输出100个对象数组</router-link></p>
        <p><router-link to="/getlabel">02.exercise:递归获取label，同时展开数组</router-link></p>
        <p><router-link to="/card">03.写一个card组件</router-link></p>
        <p><router-link to="/oinput">04.写一个input组件</router-link></p>
        <p><router-link to="/randomcolor">05.写一个函数随机生成16进制的颜色值</router-link></p>
        <router-view></router-view>
    </div>
</template>