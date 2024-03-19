import { describe, it, expect } from 'vitest'
import { soma } from './funcoes'

describe("Função de soma", () => {
  it("deve devolver a soma de dois números", () => {
    const resultado = soma(2, 2)

    expect(resultado).toBe(4)
  })
})