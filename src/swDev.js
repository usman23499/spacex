export default function swDev()
{
    console.log("HELLO")
    let swUrl=`${process.env.PUBLIC_URL}/sw.js`
    navigator.serviceWorker.register(swUrl).then((response)=>{
        console.warn("Response ==> ",response)
    })
}