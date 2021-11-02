<template>
  <div class="header">     
    <nav class="navbar navbar-light navbar-expand-lg bg-light">
        <div class="navbar-collapse collapse w-100 dual-collapse2 order-0 mx-auto">
            <ul class="navbar-nav ms-auto text-center">
                <li class="nav-item ms-auto">
                    <a class="nav-link ms-auto " href="/">Home</a>
                </li>
                <li class="nav-item ms-auto">
                    <a class="nav-link ms-auto " href="/otel">Hotels</a>
                </li>                
            </ul>
        </div>    
        <div class="mx-auto order-1 order-md-1 position-relative">
            <a class="mx-auto" href="#">
                <img src="@/assets/logo.png" width="50" height="50" class="rounded-circle">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
                <span class="navbar-toggler-icon"></span>
            </button>
        </div>
        <div class="navbar-collapse collapse w-100 dual-collapse2 order-2 mx-auto">
            <ul class="navbar-nav text-center">
                <li class="nav-item mx-auto">
                    <a class="nav-link mx-auto" href="#">About Us</a>
                </li>
                <li class="nav-item mx-auto">
                    <a class="nav-link mx-auto" href="#">Contact</a>
                </li>
            </ul>          
        </div>               
    </nav>
    <router-view></router-view>
  </div>
</template>


<script>
export default {
  name: 'Header',
  props: {

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
