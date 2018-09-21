<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
body{
    margin: 0;
}
.fl{
    float: left;
}
.fr{
    float: right;
}
.clear:after{
    content: '';
    display: block;
    clear: both;
}
</style>
