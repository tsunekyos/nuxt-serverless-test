<template>
  <div class="container">
    <header class="header">
      <h1>ようこそ</h1>
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
      <h2>私たちのサービスについて</h2>
      <p>ここに簡単な説明文を入れます。サービスの特徴や利点を簡潔に紹介します。</p>
      <button class="cta-button">今すぐ始める</button>
    </main>

    <footer class="footer">
      <p>&copy; 2023 あなたの会社名. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
// ここにTypeScriptのロジックを追加できます（必要な場合）
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

.cta-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  margin-top: 20px;
}

.footer {
  text-align: center;
  padding: 20px 0;
  border-top: 1px solid #eee;
}
</style>
