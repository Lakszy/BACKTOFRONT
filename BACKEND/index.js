import express from "express";
const app = express();

// TODO 1 . get from a certain api call and other is to listen ....

app.get('/api/products',(req,res)=>{
 
    const products = [
        {
          id: 1,
          title: "Joke 1",
          content:
            "Why don't scientists trust atoms? Because they make up everything!",
        },
        {
          id: 2,
          title: "Joke 2",
          content: "What do you call a fish with no eyes? Fsh!",
        },
        {
          id: 3,
          title: "Joke 3",
          content:
            "Parallel lines have so much in common. It’s a shame they’ll never meet.",
        },
        {
          id: 4,
          title: "Joke 4",
          content: "I used to play piano by ear, but now I use my hands.",
        },
        {
          id: 5,
          title: "Joke 5",
          content: "What's orange and sounds like a parrot? A carrot!",
        },
      ];
      res.send(products)
})

// Listen part
const port = process.env.PORT || 3000


app.listen(port,()=>{
console.log("Listening to the port:",port);
})