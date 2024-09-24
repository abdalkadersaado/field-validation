<template>
  <div>
    <nav>
      <div class="nav-container">
        <NuxtLink to="/login" class="nav-link">Login</NuxtLink>
        <NuxtLink to="/register" class="nav-link">Register</NuxtLink>
        <NuxtLink to="/form3" class="nav-link">form</NuxtLink>
      </div>
    </nav>
    <NuxtRouteAnnouncer />
    <NuxtPage />
    <!-- <NuxtWelcome /> -->
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
nav {
  background-color: #007bff;
  padding: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
}

.nav-link {
  color: white;
  margin-right: 20px;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
}

.nav-link:hover {
  text-decoration: underline;
  color: #e0e0e0;
}

@media (max-width: 768px) {
  .nav-container {
    flex-direction: column;
    align-items: center;
  }

  .nav-link {
    margin: 10px 0;
  }
}
</style>
