<template>
    <footer class="px-3 py-4">
        <div class="footer-columns grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div class="footer-column">
            <h3 class="text-lg font-semibold mb-2">Column 1</h3>
            <ul>
              <li><a href="#" class="text-gray-600 hover:text-gray-800">Link 1</a></li>
              <li><a href="#" class="text-gray-600 hover:text-gray-800">Link 2</a></li>
              <li><a href="#" class="text-gray-600 hover:text-gray-800">Link 3</a></li>
            </ul>
          </div>
          <div class="footer-column">
            <h3 class="text-lg font-semibold mb-2">Column 2</h3>
            <ul>
              <li><a href="#" class="text-gray-600 hover:text-gray-800">Link 1</a></li>
              <li><a href="#" class="text-gray-600 hover:text-gray-800">Link 2</a></li>
              <li><a href="#" class="text-gray-600 hover:text-gray-800">Link 3</a></li>
            </ul>
          </div>
          <div class="footer-column">
            <h3 class="text-lg font-semibold mb-2">Column 3</h3>
            <ul>
              <li><a href="#" class="text-gray-600 hover:text-gray-800">Link 1</a></li>
              <li><a href="#" class="text-gray-600 hover:text-gray-800">Link 2</a></li>
              <li><a href="#" class="text-gray-600 hover:text-gray-800">Link 3</a></li>
            </ul>
          </div>
          <div class="footer-column">
            <h3 class="text-lg font-semibold mb-2">Column 4</h3>
            <ul>
              <li><a href="#" class="text-gray-600 hover:text-gray-800">Link 1</a></li>
              <li><a href="#" class="text-gray-600 hover:text-gray-800">Link 2</a></li>
              <li><a href="#" class="text-gray-600 hover:text-gray-800">Link 3</a></li>
            </ul>
          </div>
        </div>
        <div class="copyright">
          © {{ CURRENT_YEAR }} - Cryptonian Exchange PLatform. All rights reserved.
        </div>
      </footer>
  </template>
  <script setup>
  //props
  const CURRENT_YEAR = new Date().getFullYear();
  </script>
  