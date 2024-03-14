const productos = [
    {
        id:'1',
        name:'random1',
        category:'nuevos',
        description:'un objeto',
        price:100,
        img:'https://picsum.photos/200',
        stock:10
    },
    {
        id:'2',
        name:'random2',
        category:'mas vendidos',
        description:'un objeto',
        price:120,
        img:'https://picsum.photos/201',
        stock:30
    },{
        id:'3',
        name:'random3',
        category:'en descuento',
        description:'un objeto',
        price:90,
        img:'https://picsum.photos/203',
        stock:60
    },
]

export const getProducts = () => {
    return new Promise ((resolve, reject)=>{
        let error = false
        setTimeout(()=>{
            if (error) {
                reject('no hay data')
            }else{
                resolve(productos)
            }
        },2000)
    })
}

export const getOneproduct = (id) =>{
        return new Promise ((resolve, reject)=>{
            let error = false
            setTimeout(()=>{if (error) {
                reject('no existe ese prod')
            }else{
                let oneProduct = productos.find((prod)=> prod.id === id)
                resolve(oneProduct)
            }
        },2000)

        })
}