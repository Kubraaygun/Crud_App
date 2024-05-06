import { describe, expect } from "vitest"

const multiple=(a,b,c)=>{
    return a*b*c
}

//Bir bilesene veya method ile alakali birden fazla test oldguu zaman 
//bu testleri gruplandirmak icin describe kullaniriz

//test()=== it()
describe('Fonksiyon Testleri',()=>{
    test("Fonksiyon dogru calisiyor mu ", ()=>{
        expect(multiple(10,2,3)).toBe(60)
        })
        
        it("Fonksiyon negatif sayilarla dogru calisiyor mu ", ()=>{
            expect(multiple(-10,-2,-3)).toBe(-60)
            })
})
