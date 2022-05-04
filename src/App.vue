<template>
  <v-app>


    <v-app-bar color="primary" prominent>
      <v-app-bar-nav-icon
        variant="text"
        @click.stop="onDrawer"
      ></v-app-bar-nav-icon>

      <v-toolbar-title>My files</v-toolbar-title>

      <v-spacer/>

      <v-btn variant="text" icon="mdi-magnify"/>

      <v-btn variant="text" icon="mdi-filter"/>

      <v-btn variant="text" icon="mdi-dots-vertical"/>
    </v-app-bar>


    <v-navigation-drawer v-model="layout.drawer" bottom temporary>
      <v-list :items="layout.menu">
        <v-list-item
          v-for="(item, index) in layout.menu"
          :key="index"
          :value="item"
          active-color="primary"
          :to="item.path"
        >
          <v-list-item-avatar start>
            <v-icon :icon="item.icon" />
          </v-list-item-avatar>
          <v-list-item-title v-text="item.text" />
        </v-list-item>
      </v-list>
    </v-navigation-drawer>


    <v-main>
      <v-card height="200px">
        <router-view />
        <!-- <v-btn>Pippo2</v-btn>
        <v-card-text>
          The navigation drawer will appear from the bottom on smaller size
          screens.
        </v-card-text> -->
      </v-card>
    </v-main>


  </v-app>
</template>

<script setup>
import { useLayoutStore } from "@/stores/layout"


// HOOKS
const layout = useLayoutStore()


// HANDLERS
const onDrawer = () => {
  layout.toggleDrawer()
}

</script>

<!-- <template>
   <nav>
     <router-link to="/">Home</router-link> |
     <router-link to="/about">About</router-link>
   </nav>
   <router-view/>
 </template>

 <style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style> -->
