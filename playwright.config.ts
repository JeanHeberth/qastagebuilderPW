import {defineConfig, devices} from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    /* Run tests in files in parallel */
    fullyParallel: false,
    /* Fail the build on CI if you accidentally left test.only in the source code. */
    forbidOnly: !!process.env.CI,
    /* Retry on CI only */
    retries: process.env.CI ? 2 : 0,
    /* Opt out of parallel tests on CI. */
    workers: process.env.CI ? 1 : undefined,
    /* Reporter to use. See https://playwright.dev/docs/test-reporters */
    reporter: [["html"], ["allure-playwright"], ["line"]],
    /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
    use: {
        baseURL: 'https://qastage.buildbox.one/18/cadastro',
        video: 'on',
        screenshot: 'on',
        trace: 'on-first-retry',
        headless: false, // Modo visível
        viewport: null, // Permite que a janela ocupe toda a tela
        launchOptions: {
            args: ['--start-maximized'], // Tenta maximizar no início
        },
    },

    /* Configure projects for major browsers */
    projects: [
        {
            name: 'Chromium',
            use: {browserName: 'chromium'},
        },

});
