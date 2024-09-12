<template>
  <div class="container">
    <header class="header">
      <h1>ダッシュボード {{ id }}</h1>
      <nav>
        <ul>
          <li><NuxtLink to="/">ホーム</NuxtLink></li>
          <li><NuxtLink to="/dashboard/1">ダッシュボード 1</NuxtLink></li>
          <li><NuxtLink to="/dashboard/2">ダッシュボード 2</NuxtLink></li>
          <li><NuxtLink to="/dashboard/3">ダッシュボード 3</NuxtLink></li>
        </ul>
      </nav>
    </header>

    <main class="main-content">
      <h2>ダッシュボード {{ id }} の内容</h2>
      <p>ここにダッシュボード {{ id }} の特定のコンテンツを表示します。</p>
    </main>

    <footer class="footer">
      <p>&copy; 2023 あなたの会社名. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const id = route.params.id;

useHead({
  meta: [
    {
      property: 'og:image',
      content: `https://example.com/images/${id}`
    },
    {
      property: 'og:title',
      content: `ダッシュボード ${id} - あなたのサービス名`
    },
    {
      property: 'og:description',
      content: `ダッシュボード ${id} の特定の情報や機能を提供します。`
    }
  ]
})
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
}

.header nav ul {
  display: flex;
  list-style: none;
}

.header nav ul li {
  margin-left: 20px;
}

.main-content {
  text-align: center;
  padding: 50px 0;
}

.footer {
  text-align: center;
  padding: 20px 0;
  border-top: 1px solid #eee;
}
</style>
