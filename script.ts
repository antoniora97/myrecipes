import { prisma } from "./src/lib/prisma"

async function main() {
    // Creates a new ingredient
    const tomate = await prisma.ingredient.create({
        data: {
            name: 'Tomate',
            quantity: 5,
            unit: "unidad"
        }
    })
    console.log('Created tomate:', tomate)

    const allIngredients = await prisma.ingredient.findMany()
    console.log('All ingredients:', JSON.stringify(allIngredients, null, 2))
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })