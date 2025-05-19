/*
import { defineConfig } from 'vite';
import { resolve } from 'path';
import handlebarsPlugin from "vite-plugin-handlebars";

export default defineConfig({
  root: '.',
  // Базовый URL для production сборки
  base: '/',
  // Плагины Vite
  plugins: [
    // Плагин для обработки Handlebars шаблонов
    handlebarsPlugin({
      // Директория с partials (кусочками шаблонов)
      partialDirectory: resolve(__dirname, 'src/partials'),

      // Глобальный контекст для всех шаблонов
      context: {
        title: 'My App'
      }
    }),
  ],

  // Настройки CSS
  css: {
    // Опции для препроцессоров
    preprocessorOptions: {
      stylus: {
        // Автоматически добавляемый код в каждый Stylus файл
        additionalData: `@import "${resolve(__dirname, 'src/styles/variables.styl')}";`,

        // Дополнительные файлы для импорта
        imports: [
          resolve(__dirname, 'src/styles/variables.styl')
        ]
      }
    }
  },

  // Настройки разрешения модулей
  resolve: {
    // Алиасы путей (соответствуют настройкам в tsconfig.json)
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },

  // Настройки production сборки
  build: {
    // Выходная директория
    outDir: 'dist',

    // Очищать выходную директорию перед сборкой
    emptyOutDir: true,

    // Настройки Rollup (внутренний сборщик Vite)
    rollupOptions: {
      // Точки входа
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },

  // Какие файлы считать ассетами (чтобы Vite их обрабатывал)
  assetsInclude: ['**!/!*.hbs'],

  // Настройки dev-сервера
  server: {
    // Порт для разработки
    port: 3000,

    // Автоматически открывать браузер
    open: true,
  },
});*/
