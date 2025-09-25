const { test, expect } = require('@playwright/test');

test.describe('Login', () => {
    test('usando credenciais válidas', async ({ page }) => {
        // Mock da requisição de login (se a API estiver com problemas)
        await page.route('**/api/login', route => {
            route.fulfill({
                status: 200,
                contentType: 'application/json',
                body: JSON.stringify({ success: true, message: 'Login bem-sucedido!' }),
            });
        });
        
        // Navegação
        await page.goto('http://localhost:4000/');

        // Ações (Act)
        await page.fill('#usuario', 'julio.lima');
        await page.fill('#senha', '123456');
        await page.click('.btn');

        // Verificação (Assert)
        // Essa é a forma mais robusta e recomendada no Playwright
        await expect(page).toHaveURL('http://localhost:4000/dashboard'); // verifica se a URL mudou
        await expect(page.locator('#app-sention h4')).toHaveText('Realizar Transferência');
    });
});