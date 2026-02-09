'use server'

import { prisma } from "@/src/lib/prisma"
import { revalidatePath } from "next/cache"

export async function createIngredient(formData: FormData) {
    const name = formData.get('name') as string
    const quantity = Number(formData.get('quantity'))
    const unit = formData.get('unit') as string

    await prisma.ingredient.create({
        data: { name, quantity, unit }
    })

    revalidatePath('/despensa')
}