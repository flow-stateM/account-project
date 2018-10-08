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
html, body, div, ul, li, h1, h2, h3, h4, h5, h6, p, dl, dt, dd, ol, form, input, textarea, th, td, select {
    margin: 0;
    padding: 0;
}
body{
    font-family: "Microsoft YaHei";
    user-select: none;
}
ul,ol {
    list-style: none;
}
img {
    border: none;
    vertical-align: top;
}
a{
    color: inherit;
    &:visited{
        color:inherit;
    }
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
