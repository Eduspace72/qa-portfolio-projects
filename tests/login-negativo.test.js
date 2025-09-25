const { test, expect } = require('@playwright/test');

test.describe('Login', () => {
    test('usando credenciais inválidas', async ({ page }) => {
        // 1. Intercepta a requisição de login
        // Simula uma resposta de erro do servidor com status 401 (Não Autorizado)
        await page.route('**/api/login', route => {
            route.fulfill({
                status: 401,
                contentType: 'application/json',
                body: JSON.stringify({ success: false, message: 'Usuário ou senha inválidos.' }),
            });
        });

        // 2. Navega para a página de login
        await page.goto('http://localhost:4000/');

        // 3. Preenche os campos de forma concisa, usando credenciais inválidas
        await page.fill('#usuario', 'usuario.invalido');
        await page.fill('#senha', 'senha.incorreta');
        
        // 4. Clica no botão de login
        await page.click('.btn');

        // 5. Verificação (Assert)
        // Em um teste negativo, você não espera que a URL mude.
        // Você espera que a aplicação exiba a mensagem de erro.
        
        // Exemplo de verificação da mensagem de erro
        await expect(page.locator('.mensagem-erro')).toHaveText('Usuário ou senha inválidos.');
        
        // Exemplo de verificação se a URL não mudou
        await expect(page).toHaveURL('http://localhost:4000/'); 
    });
});
