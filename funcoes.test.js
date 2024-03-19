import { describe, it, expect } from 'vitest'
import { soma, subtracao } from './funcoes'

describe("Função de soma", () => {
  it("deve devolver a soma de dois números", () => {
    const resultado = soma(2, 2)

    expect(resultado).toBe(4)
  })
})

describe("Funçaõ de subtração", () => {
  it("deve devolver a subtração de dois números", () => {
    const resultado = subtracao(5, 2)
    
    expect(resultado).toBe(3)
  })
})