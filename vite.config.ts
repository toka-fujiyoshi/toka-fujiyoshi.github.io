/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tsconfigPaths()],
    // TODO: 「test」部分にエラーが出る
    // https://zenn.dev/renoa/articles/vite-vitest-type-error
    // test: {
    //     globals: true,
    //     environment: 'happy-dom',
    //     setupFiles: './setupTests.ts',
    // },
})
