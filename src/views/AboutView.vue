<template>
  <div class="about">
    <h1>This is an about pagejghj</h1>

    <v-radio-group>
      <v-radio label="Radio One" value="one"></v-radio>
      <v-radio label="Radio Two" value="two"></v-radio>
      <v-radio label="Radio Three" value="three"></v-radio>
    </v-radio-group>

    <v-checkbox label="Checkbox"></v-checkbox>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
