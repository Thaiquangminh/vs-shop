<template>
  <v-app-bar elevation="0" class="wrapper-nav-bar">
    <v-container d-flex>
      <v-row>
        <v-col md="3" sm="3">
          <div class="nav-item nav-item-brand">
            <a class="navbar-brand nav-link text-uppercase" href="/dorinUI">
              VSTECH
            </a>
          </div>
        </v-col>
        <v-col
          md="7"
          class="d-flex align-center"
          v-if="!$vuetify.breakpoint.smAndDown"
        >
          <v-row>
            <v-col>
              <div class="nav-item">
                <a href="#home" class="nav-link">Home</a>
              </div>
            </v-col>
            <v-col>
              <div class="nav-item">
                <a href="#features" class="nav-link">Features</a>
              </div>
            </v-col>
            <v-col>
              <div class="nav-item">
                <a href="#pricing" class="nav-link">Pricing</a>
              </div>
            </v-col>
            <v-col>
              <div class="nav-item">
                <a href="#team" class="nav-link">Team</a>
              </div>
            </v-col>
            <v-col>
              <div class="nav-item">
                <a href="#blog" class="nav-link">Blog</a>
              </div>
            </v-col>
            <v-col>
              <div class="nav-item">
                <a href="#contact" class="nav-link">Contact</a>
              </div>
            </v-col>
          </v-row>
        </v-col>

        <v-col
          md="2"
          class="nav-item-btn"
          v-if="!$vuetify.breakpoint.smAndDown"
        >
          <v-btn
            rounded
            class="nav-bar-btn waves-effect waves-light hover-effect"
            >Try it Free</v-btn
          >
        </v-col>

        <v-col
          md="3"
          v-if="$vuetify.breakpoint.smAndDown"
          class="d-flex justify-end"
        >
          <v-icon class="nav-bar-icon">fa-bars</v-icon>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<style lang="sass" scoped>
.wrapper-nav-bar
  background-color: #212529 !important
  position: sticky
  position: -webkit-sticky /* for Safari */
  z-index: 2

.nav-item-brand
  display: flex
  justify-content: end
  font-size: 21px
  margin-right: 45px

.navbar-brand
  color: white !important
  font-weight: 700
  letter-spacing: 2px
  font-family: 'Poppins', sans-serif

.nav-item
  height: 100%
  align-items: center
  display: flex

.nav-link
  text-decoration: none
  color: gray

.nav-link:hover
  color: #fff !important

.nav-item-btn
  display: flex
  justify-content: end

.nav-bar-btn
  color: #fff !important
  background-color:  #FB3E3E !important
  letter-spacing: 0.5px
  font-size: 12px

.nav-bar-icon
  color: #fff !important

.nav-bar-btn:hover
  background-color: #f74777 !important

//wave effect
//waves-effect
//  position: relative
//  cursor: pointer
//  display: inline-block
//  overflow: hidden
//  -webkit-user-select: none
//  -moz-user-select: none
//  -ms-user-select: none
//  user-select: none
//  -webkit-tap-highlight-color: transparent

 //hover effect

.hover-effect
  transition: all 0.3s ease-in-out

.hover-effect:hover
  transform: translateY(-0.3rem)
</style>
