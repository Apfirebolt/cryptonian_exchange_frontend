<template>
    <div class="footer-section">
      <footer>
        <div class="copyright">
          © {{ CURRENT_YEAR }} - Cryptonian Exchange PLatform. All rights reserved.
        </div>
      </footer>
    </div>
  </template>
  <script setup>
  //props
  const CURRENT_YEAR = new Date().getFullYear();
  </script>
  