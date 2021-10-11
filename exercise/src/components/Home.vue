<template>
    <div>
        <h1>Home</h1>
        <p><i>数组和数组的最大最小值在控制台输出</i></p>
        <a-button type="primary" href="#">Home</a-button>
        <a-button>Default Button</a-button>
        <a-button type="dashed">Home</a-button>
        <a-button type="text">Home</a-button>
        <a-button type="link">Home</a-button>
        <p><router-link to="/arrlist">01.exercise:循环输出100个对象数组</router-link></p>
        <p><router-link to="/getlabel">02.exercise:递归获取label，同时展开数组</router-link></p>
        <router-view></router-view>
    </div>
</template>