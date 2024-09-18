const mainDiv = document.getElementById('main')
async function fetchData ()
{
    try{
        const res= await fetch('https://official-joke-api.appspot.com/random_joke');
        const data = await res.json ()
        displayData(data);
    }
    catch (err){
        console.log(err)
    }
}
fetchData()

