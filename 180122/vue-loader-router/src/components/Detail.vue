<template>
    <strong>
        <!-- 读取参数 -->
        {{$route.params | json}}
        <hr>
        <!-- 读取路径 -->
        {{$route.path}}  
        <hr>
        <!-- 读取具体数据 -->
        {{$route.query | json}}
    </strong>
</template>
