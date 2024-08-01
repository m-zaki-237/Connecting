import express from "express"

const app = express()

// app.get('/',(req,res)=>{
//     res.send("server is ready")
// })

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "Trust Issues",
            joke: "Why don't scientists trust atoms? Because they make up everything!"
        },
        {
            id: 2,
            title: "Award-Winning Scarecrow",
            joke: "Why did the scarecrow win an award? Because he was outstanding in his field!"
        },
        {
            id: 3,
            title: "Skeleton Fight",
            joke: "Why don't skeletons fight each other? They don't have the guts."
        },
        {
            id: 4,
            title: "Fake Spaghetti",
            joke: "What do you call fake spaghetti? An impasta!"
        },
        {
            id: 5,
            title: "Sad Math Book",
            joke: "Why did the math book look sad? Because it had too many problems."
        }
    ];
    res.send(jokes);
});


const port = process.env.PORT || 3000;

app.listen(port , ()=>{
    console.log(`Port is working at:${port}`);
})