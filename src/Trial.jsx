export default function TrialApp(){

    async function getMovieData(){

    //run that function here

        let response1 = await fetch( " Get data from website")

        try{
            if(!response1.ok){
                console.log("Network Error" ,response1.status)
                return;
            }
            let response2 = await response1.json();
            

        }catch(error){
            //i was told that erros here are usually Network related Errror
            console.log("This in here is a",error);
        }

        //run that fucntion here also

    return(
        <div className="cardbody" >



        </div>
    )
}
}