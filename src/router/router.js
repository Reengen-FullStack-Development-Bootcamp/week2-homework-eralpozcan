import HotelReserve from "@/components/HotelReserve"
import Hotels from "@/components/Hotels"
import Form from "@/components/Form"
import Payment from "@/components/Payment"
import Rez from "@/components/Rez"


export const routes = [
    {path: '/otel',name:"Home", component: Hotels},
    {path: '/reserve/:id?', name:"HotelReseved" ,component: HotelReserve},
    {path: '/rez', name:"Rez" ,component: Rez},
    {path: '/form',name:"Form", component: Form},
    {path: "/payment",name:"Payment", component: Payment},
]

