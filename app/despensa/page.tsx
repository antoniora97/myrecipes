import { prisma } from "@/src/lib/prisma"
import { createIngredient } from "./actions"

export default async function DespensaPage() {
    const ingredients = await prisma.ingredient.findMany()

    return (

        <div className="p-6">
            <form action={createIngredient} className="mb-6 space-y-2">
                <input name="name" placeholder="Alimento" className="border p-2 w-full" />
                <input name="quantity" placeholder="Cantidad" type="number" step="0.1" className="border p-2 w-full" />
                <input name="unit" placeholder="Unidad (g, ml, uds)" className="border p-2 w-full" />
                <button className="bg-black text-white px-4 py-2 rounded">
                    Añadir
                </button>
            </form>

            <h1 className="text-2xl font-bold mb-4">Despensa</h1>

            <ul className="space-y-2">
                {ingredients.map(ingredient => (
                    <li key={ingredient.id} className="border p-3 rounded">
                        {ingredient.name} – {ingredient.quantity} {ingredient.unit}
                    </li>
                ))}
            </ul>
        </div>
    )
}
