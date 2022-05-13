class LoginPage
{
    visit()
    {
        cy.visit("https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F")

    }

    fillEmail(value)
    {
        const field = cy.get("input[value='admin@yourstore.com']")
        field.clear()
        field.type(value)
        return this
    }

    fillPassword(value)
    {
        const field = cy.get("input[value='admin']")
        field.clear()
        field.type(value)
        return this 
    }

    submit()
    {
        const button = cy.get("button[type='submit']")
        button.click()
    }
}

export default LoginPage