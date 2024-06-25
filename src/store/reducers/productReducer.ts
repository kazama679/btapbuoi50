import { Product } from "../../interface";

// khởi tạo state
const products:Product[]=[
    {
        id:1,
        image:"../../../public/images/pizza.jpg",
        name:"Pizza",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
        price:15,
        stock:100
    },
    {
        id:2,
        image:"../../../public/images/Hamburger.jpg",
        name:"Hamburger",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
        price:30,
        stock:200
    },
    {
        id:3,
        image:"../../../public/images/bread.jpg",
        name:"bánh mì cu bê",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
        price:25,
        stock:10
    },
    {
        id:4,
        image:"../../../public/images/Cake.jpg",
        name:"cake",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
        price:35,
        stock:50
    }
]

// khởi tạo hàm product reducer
const productReducer=(state = products, action: any)=>{
    switch (action.type) {
        case "":
            return [...state];
    
        default:
            return state;
    }
}
export default productReducer