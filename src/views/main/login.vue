<template>
  <div>
    <h1>Login</h1>
    <div class="login-form">
      <form>
        <div>
          <label for="username">Username:</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
    <div class="register-link">
      <p>Don't have an account? <a href="/register">Register here</a></p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
